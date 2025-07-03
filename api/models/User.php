<?php
/**
 * MVL-LMS User Model
 * Handles all user-related database operations
 */

require_once __DIR__ . '/../config/database.php';

class User {
    private static string $table = 'users';
    
    /**
     * Get user by ID
     */
    public static function find(int $id): ?array {
        $sql = "SELECT * FROM " . self::$table . " WHERE id = :id";
        return Database::fetchOne($sql, ['id' => $id]);
    }
    
    /**
     * Get user by email
     */
    public static function findByEmail(string $email): ?array {
        $sql = "SELECT * FROM " . self::$table . " WHERE email = :email";
        return Database::fetchOne($sql, ['email' => $email]);
    }
    
    /**
     * Get user by username
     */
    public static function findByUsername(string $username): ?array {
        $sql = "SELECT * FROM " . self::$table . " WHERE username = :username";
        return Database::fetchOne($sql, ['username' => $username]);
    }
    
    /**
     * Get user with progress summary
     */
    public static function findWithProgress(int $id): ?array {
        $sql = "SELECT * FROM view_user_summary WHERE id = :id";
        return Database::fetchOne($sql, ['id' => $id]);
    }
    
    /**
     * Get all users with filters
     */
    public static function getAll(array $filters = [], int $page = 1, int $limit = 50): array {
        $builder = new QueryBuilder('view_user_summary');
        
        // Apply filters
        if (!empty($filters['role'])) {
            $builder->where('role', '=', $filters['role']);
        }
        
        if (!empty($filters['status'])) {
            $builder->where('status', '=', $filters['status']);
        }
        
        if (!empty($filters['search'])) {
            $search = '%' . $filters['search'] . '%';
            $builder->where('full_name', 'LIKE', $search)
                   ->where('email', 'LIKE', $search);
        }
        
        // Pagination
        $offset = ($page - 1) * $limit;
        $builder->limit($limit, $offset);
        
        // Default ordering
        $builder->orderBy('created_at', 'DESC');
        
        return $builder->get();
    }
    
    /**
     * Get total user count with filters
     */
    public static function count(array $filters = []): int {
        $builder = new QueryBuilder(self::$table);
        
        if (!empty($filters['role'])) {
            $builder->where('role', '=', $filters['role']);
        }
        
        if (!empty($filters['status'])) {
            $builder->where('status', '=', $filters['status']);
        }
        
        if (!empty($filters['search'])) {
            $search = '%' . $filters['search'] . '%';
            $builder->where('first_name', 'LIKE', $search)
                   ->where('last_name', 'LIKE', $search)
                   ->where('email', 'LIKE', $search);
        }
        
        return $builder->count();
    }
    
    /**
     * Create new user
     */
    public static function create(array $data): array {
        // Validate required fields
        $required = ['username', 'email', 'password', 'first_name', 'last_name'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                throw new InvalidArgumentException("Missing required field: $field");
            }
        }
        
        // Check for duplicates
        if (self::findByEmail($data['email'])) {
            throw new InvalidArgumentException("Email already exists");
        }
        
        if (self::findByUsername($data['username'])) {
            throw new InvalidArgumentException("Username already exists");
        }
        
        // Hash password
        $data['password_hash'] = password_hash($data['password'], PASSWORD_DEFAULT);
        unset($data['password']);
        
        // Set defaults
        $data['role'] = $data['role'] ?? 'learner';
        $data['status'] = $data['status'] ?? 'pending';
        $data['created_at'] = date('Y-m-d H:i:s');
        $data['updated_at'] = date('Y-m-d H:i:s');
        
        // Build insert query
        $columns = array_keys($data);
        $placeholders = array_map(fn($col) => ":$col", $columns);
        
        $sql = "INSERT INTO " . self::$table . " (" . implode(', ', $columns) . ") 
                VALUES (" . implode(', ', $placeholders) . ")";
        
        Database::execute($sql, $data);
        
        $id = Database::lastInsertId();
        return self::find((int) $id);
    }
    
    /**
     * Update user
     */
    public static function update(int $id, array $data): array {
        $user = self::find($id);
        if (!$user) {
            throw new InvalidArgumentException("User not found");
        }
        
        // Remove protected fields
        unset($data['id'], $data['uuid'], $data['created_at']);
        
        // Handle password update
        if (!empty($data['password'])) {
            $data['password_hash'] = password_hash($data['password'], PASSWORD_DEFAULT);
            unset($data['password']);
        }
        
        // Check for email/username duplicates (excluding current user)
        if (!empty($data['email']) && $data['email'] !== $user['email']) {
            if (self::findByEmail($data['email'])) {
                throw new InvalidArgumentException("Email already exists");
            }
        }
        
        if (!empty($data['username']) && $data['username'] !== $user['username']) {
            if (self::findByUsername($data['username'])) {
                throw new InvalidArgumentException("Username already exists");
            }
        }
        
        $data['updated_at'] = date('Y-m-d H:i:s');
        
        // Build update query
        $setParts = array_map(fn($col) => "$col = :$col", array_keys($data));
        $sql = "UPDATE " . self::$table . " SET " . implode(', ', $setParts) . " WHERE id = :id";
        $data['id'] = $id;
        
        Database::execute($sql, $data);
        
        return self::find($id);
    }
    
    /**
     * Delete user
     */
    public static function delete(int $id): bool {
        $user = self::find($id);
        if (!$user) {
            throw new InvalidArgumentException("User not found");
        }
        
        // Prevent deletion of last super admin
        if ($user['role'] === 'super_admin') {
            $adminCount = self::count(['role' => 'super_admin']);
            if ($adminCount <= 1) {
                throw new InvalidArgumentException("Cannot delete the last super admin");
            }
        }
        
        $sql = "DELETE FROM " . self::$table . " WHERE id = :id";
        Database::execute($sql, ['id' => $id]);
        
        return true;
    }
    
    /**
     * Verify user password
     */
    public static function verifyPassword(int $id, string $password): bool {
        $user = self::find($id);
        if (!$user) {
            return false;
        }
        
        return password_verify($password, $user['password_hash']);
    }
    
    /**
     * Update last login
     */
    public static function updateLastLogin(int $id, string $ipAddress = null): void {
        $sql = "UPDATE " . self::$table . " 
                SET last_login = NOW(), last_login_ip = :ip 
                WHERE id = :id";
        
        Database::execute($sql, [
            'id' => $id,
            'ip' => $ipAddress
        ]);
    }
    
    /**
     * Get user permissions
     */
    public static function getPermissions(int $userId): array {
        $sql = "SELECT permission_name, permission_value 
                FROM user_permissions 
                WHERE user_id = :user_id 
                AND (expires_at IS NULL OR expires_at > NOW())";
        
        $permissions = Database::fetchAll($sql, ['user_id' => $userId]);
        
        $result = [];
        foreach ($permissions as $perm) {
            $result[$perm['permission_name']] = (bool) $perm['permission_value'];
        }
        
        return $result;
    }
    
    /**
     * Set user permission
     */
    public static function setPermission(int $userId, string $permissionName, bool $value, int $grantedBy = null): void {
        $sql = "INSERT INTO user_permissions (user_id, permission_name, permission_value, granted_by) 
                VALUES (:user_id, :permission_name, :permission_value, :granted_by)
                ON DUPLICATE KEY UPDATE 
                permission_value = :permission_value, 
                granted_by = :granted_by,
                granted_at = NOW()";
        
        Database::execute($sql, [
            'user_id' => $userId,
            'permission_name' => $permissionName,
            'permission_value' => $value ? 1 : 0,
            'granted_by' => $grantedBy
        ]);
    }
    
    /**
     * Get user progress summary
     */
    public static function getProgressSummary(int $userId): array {
        // Overall progress
        $sql = "SELECT 
                    COUNT(*) as total_content,
                    COUNT(CASE WHEN status = 'completed' THEN 1 END) as completed_content,
                    ROUND(AVG(progress_percentage), 2) as avg_progress,
                    SUM(time_spent) as total_time_spent
                FROM user_content_progress 
                WHERE user_id = :user_id";
        
        $overall = Database::fetchOne($sql, ['user_id' => $userId]) ?? [
            'total_content' => 0,
            'completed_content' => 0,
            'avg_progress' => 0,
            'total_time_spent' => 0
        ];
        
        // Domain progress
        $sql = "SELECT 
                    cd.domain_code,
                    cd.domain_name,
                    udp.completion_percentage,
                    udp.average_score,
                    udp.time_spent,
                    udp.last_activity
                FROM user_domain_progress udp
                JOIN cmmc_domains cd ON udp.domain_id = cd.id
                WHERE udp.user_id = :user_id
                ORDER BY cd.domain_order";
        
        $domains = Database::fetchAll($sql, ['user_id' => $userId]);
        
        // Recent quiz scores
        $sql = "SELECT 
                    q.title,
                    uqa.percentage,
                    uqa.completed_at,
                    cd.domain_name
                FROM user_quiz_attempts uqa
                JOIN quizzes q ON uqa.quiz_id = q.id
                JOIN content_items ci ON q.content_id = ci.id
                JOIN cmmc_practices cp ON ci.practice_id = cp.id
                JOIN cmmc_domains cd ON cp.domain_id = cd.id
                WHERE uqa.user_id = :user_id 
                AND uqa.status = 'completed'
                ORDER BY uqa.completed_at DESC
                LIMIT 10";
        
        $recentQuizzes = Database::fetchAll($sql, ['user_id' => $userId]);
        
        return [
            'overall' => $overall,
            'domains' => $domains,
            'recent_quizzes' => $recentQuizzes
        ];
    }
    
    /**
     * Get users for export
     */
    public static function getForExport(array $filters = []): array {
        $sql = "SELECT 
                    u.username,
                    u.email,
                    u.first_name,
                    u.last_name,
                    u.role,
                    u.status,
                    u.department,
                    u.job_title,
                    u.hire_date,
                    u.last_login,
                    u.created_at,
                    COALESCE(us.overall_progress_percentage, 0) as progress_percentage,
                    COALESCE(us.average_quiz_score, 0) as average_quiz_score
                FROM users u
                LEFT JOIN view_user_summary us ON u.id = us.id
                WHERE 1=1";
        
        $params = [];
        
        if (!empty($filters['role'])) {
            $sql .= " AND u.role = :role";
            $params['role'] = $filters['role'];
        }
        
        if (!empty($filters['status'])) {
            $sql .= " AND u.status = :status";
            $params['status'] = $filters['status'];
        }
        
        $sql .= " ORDER BY u.last_name, u.first_name";
        
        return Database::fetchAll($sql, $params);
    }
}

/**
 * User Session Management
 */
class UserSession {
    private static string $table = 'user_sessions';
    
    /**
     * Create new session
     */
    public static function create(int $userId, string $ipAddress = null, string $userAgent = null): string {
        // Clean up expired sessions
        self::cleanup();
        
        // Generate session token
        $token = bin2hex(random_bytes(32));
        
        $sql = "INSERT INTO " . self::$table . " 
                (user_id, session_token, ip_address, user_agent, expires_at) 
                VALUES (:user_id, :token, :ip_address, :user_agent, :expires_at)";
        
        $expiresAt = date('Y-m-d H:i:s', time() + DatabaseConfig::SESSION_TIMEOUT);
        
        Database::execute($sql, [
            'user_id' => $userId,
            'token' => $token,
            'ip_address' => $ipAddress,
            'user_agent' => $userAgent,
            'expires_at' => $expiresAt
        ]);
        
        return $token;
    }
    
    /**
     * Validate session
     */
    public static function validate(string $token): ?array {
        $sql = "SELECT s.*, u.id as user_id, u.username, u.email, u.role, u.status
                FROM " . self::$table . " s
                JOIN users u ON s.user_id = u.id
                WHERE s.session_token = :token 
                AND s.expires_at > NOW()
                AND u.status = 'active'";
        
        $session = Database::fetchOne($sql, ['token' => $token]);
        
        if ($session) {
            // Update last activity
            self::updateActivity($token);
        }
        
        return $session;
    }
    
    /**
     * Update session activity
     */
    public static function updateActivity(string $token): void {
        $sql = "UPDATE " . self::$table . " 
                SET last_activity = NOW() 
                WHERE session_token = :token";
        
        Database::execute($sql, ['token' => $token]);
    }
    
    /**
     * Destroy session
     */
    public static function destroy(string $token): void {
        $sql = "DELETE FROM " . self::$table . " WHERE session_token = :token";
        Database::execute($sql, ['token' => $token]);
    }
    
    /**
     * Destroy all user sessions
     */
    public static function destroyAllForUser(int $userId): void {
        $sql = "DELETE FROM " . self::$table . " WHERE user_id = :user_id";
        Database::execute($sql, ['user_id' => $userId]);
    }
    
    /**
     * Clean up expired sessions
     */
    public static function cleanup(): void {
        $sql = "DELETE FROM " . self::$table . " WHERE expires_at < NOW()";
        Database::execute($sql);
    }
    
    /**
     * Get active sessions for user
     */
    public static function getActiveSessions(int $userId): array {
        $sql = "SELECT session_token, ip_address, user_agent, created_at, last_activity 
                FROM " . self::$table . " 
                WHERE user_id = :user_id AND expires_at > NOW()
                ORDER BY last_activity DESC";
        
        return Database::fetchAll($sql, ['user_id' => $userId]);
    }
}
