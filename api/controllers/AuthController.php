<?php
/**
 * MVL-LMS Authentication Controller
 * Handles user authentication, login, logout, and session management
 */

require_once __DIR__ . '/../models/User.php';
require_once __DIR__ . '/../utils/Response.php';
require_once __DIR__ . '/../utils/Logger.php';
require_once __DIR__ . '/../utils/Validator.php';

class AuthController {
    
    /**
     * User login
     * POST /api/v1/auth/login
     */
    public function login(): void {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Validate input
            $validator = new Validator($input);
            $validator->required(['email', 'password']);
            $validator->email('email');
            
            if (!$validator->isValid()) {
                Response::error('Validation failed', 400, $validator->getErrors());
                return;
            }
            
            $email = $input['email'];
            $password = $input['password'];
            $rememberMe = $input['remember_me'] ?? false;
            
            // Find user
            $user = User::findByEmail($email);
            if (!$user) {
                $this->logFailedLogin($email, 'User not found');
                Response::error('Invalid credentials', 401);
                return;
            }
            
            // Check user status
            if ($user['status'] !== 'active') {
                $this->logFailedLogin($email, 'Account not active');
                Response::error('Account is not active', 403);
                return;
            }
            
            // Verify password
            if (!password_verify($password, $user['password_hash'])) {
                $this->logFailedLogin($email, 'Invalid password');
                Response::error('Invalid credentials', 401);
                return;
            }
            
            // Create session
            $ipAddress = $_SERVER['REMOTE_ADDR'] ?? null;
            $userAgent = $_SERVER['HTTP_USER_AGENT'] ?? null;
            $sessionToken = UserSession::create($user['id'], $ipAddress, $userAgent);
            
            // Update last login
            User::updateLastLogin($user['id'], $ipAddress);
            
            // Log successful login
            $this->logSuccessfulLogin($user['id'], $email);
            
            // Prepare response data
            $userData = [
                'id' => $user['id'],
                'uuid' => $user['uuid'],
                'username' => $user['username'],
                'email' => $user['email'],
                'first_name' => $user['first_name'],
                'last_name' => $user['last_name'],
                'role' => $user['role'],
                'permissions' => User::getPermissions($user['id'])
            ];
            
            Response::success([
                'user' => $userData,
                'session_token' => $sessionToken,
                'expires_at' => date('c', time() + DatabaseConfig::SESSION_TIMEOUT)
            ]);
            
        } catch (Exception $e) {
            Logger::error('Login error', ['error' => $e->getMessage()]);
            Response::error('Login failed', 500);
        }
    }
    
    /**
     * User logout
     * POST /api/v1/auth/logout
     */
    public function logout(): void {
        try {
            $sessionToken = $this->getSessionToken();
            if ($sessionToken) {
                UserSession::destroy($sessionToken);
                Logger::info('User logged out', ['session_token' => substr($sessionToken, 0, 8) . '...']);
            }
            
            Response::success(['message' => 'Logged out successfully']);
            
        } catch (Exception $e) {
            Logger::error('Logout error', ['error' => $e->getMessage()]);
            Response::error('Logout failed', 500);
        }
    }
    
    /**
     * Get current user
     * GET /api/v1/auth/me
     */
    public function me(): void {
        try {
            $user = $this->getCurrentUser();
            
            // Get user with progress data
            $userWithProgress = User::findWithProgress($user['user_id']);
            
            Response::success([
                'user' => [
                    'id' => $user['user_id'],
                    'username' => $user['username'],
                    'email' => $user['email'],
                    'role' => $user['role'],
                    'full_name' => $userWithProgress['full_name'] ?? '',
                    'overall_progress_percentage' => $userWithProgress['overall_progress_percentage'] ?? 0,
                    'average_quiz_score' => $userWithProgress['average_quiz_score'] ?? 0
                ],
                'permissions' => User::getPermissions($user['user_id']),
                'session' => [
                    'expires_at' => $user['expires_at'],
                    'last_activity' => $user['last_activity']
                ]
            ]);
            
        } catch (Exception $e) {
            Logger::error('Get current user error', ['error' => $e->getMessage()]);
            Response::error('Failed to get user info', 500);
        }
    }
    
    /**
     * Refresh session
     * POST /api/v1/auth/refresh
     */
    public function refresh(): void {
        try {
            $sessionToken = $this->getSessionToken();
            if (!$sessionToken) {
                Response::error('No session token provided', 401);
                return;
            }
            
            $session = UserSession::validate($sessionToken);
            if (!$session) {
                Response::error('Invalid or expired session', 401);
                return;
            }
            
            // Update session activity
            UserSession::updateActivity($sessionToken);
            
            Response::success([
                'session_token' => $sessionToken,
                'expires_at' => date('c', time() + DatabaseConfig::SESSION_TIMEOUT)
            ]);
            
        } catch (Exception $e) {
            Logger::error('Session refresh error', ['error' => $e->getMessage()]);
            Response::error('Session refresh failed', 500);
        }
    }
    
    /**
     * User registration
     * POST /api/v1/auth/register
     */
    public function register(): void {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Validate input
            $validator = new Validator($input);
            $validator->required(['username', 'email', 'password', 'first_name', 'last_name']);
            $validator->email('email');
            $validator->minLength('password', DatabaseConfig::PASSWORD_MIN_LENGTH);
            $validator->alphanumeric('username');
            
            if (DatabaseConfig::REQUIRE_STRONG_PASSWORDS) {
                $validator->strongPassword('password');
            }
            
            if (!$validator->isValid()) {
                Response::error('Validation failed', 400, $validator->getErrors());
                return;
            }
            
            // Create user
            $userData = [
                'username' => $input['username'],
                'email' => $input['email'],
                'password' => $input['password'],
                'first_name' => $input['first_name'],
                'last_name' => $input['last_name'],
                'role' => 'learner',
                'status' => 'pending'
            ];
            
            $user = User::create($userData);
            
            // Log registration
            Logger::info('User registered', [
                'user_id' => $user['id'],
                'email' => $user['email']
            ]);
            
            Response::success([
                'message' => 'Registration successful',
                'user_id' => $user['id']
            ], 201);
            
        } catch (InvalidArgumentException $e) {
            Response::error($e->getMessage(), 400);
        } catch (Exception $e) {
            Logger::error('Registration error', ['error' => $e->getMessage()]);
            Response::error('Registration failed', 500);
        }
    }
    
    /**
     * Forgot password
     * POST /api/v1/auth/forgot-password
     */
    public function forgotPassword(): void {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (empty($input['email'])) {
                Response::error('Email is required', 400);
                return;
            }
            
            $user = User::findByEmail($input['email']);
            if (!$user) {
                // Don't reveal if email exists or not
                Response::success(['message' => 'If the email exists, a reset link has been sent']);
                return;
            }
            
            // Generate reset token
            $resetToken = bin2hex(random_bytes(32));
            $expiresAt = date('Y-m-d H:i:s', time() + 3600); // 1 hour
            
            User::update($user['id'], [
                'password_reset_token' => $resetToken,
                'password_reset_expires' => $expiresAt
            ]);
            
            // TODO: Send email with reset link
            // EmailService::sendPasswordReset($user['email'], $resetToken);
            
            Logger::info('Password reset requested', [
                'user_id' => $user['id'],
                'email' => $user['email']
            ]);
            
            Response::success(['message' => 'If the email exists, a reset link has been sent']);
            
        } catch (Exception $e) {
            Logger::error('Forgot password error', ['error' => $e->getMessage()]);
            Response::error('Request failed', 500);
        }
    }
    
    /**
     * Reset password
     * POST /api/v1/auth/reset-password
     */
    public function resetPassword(): void {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            $validator = new Validator($input);
            $validator->required(['token', 'password']);
            $validator->minLength('password', DatabaseConfig::PASSWORD_MIN_LENGTH);
            
            if (DatabaseConfig::REQUIRE_STRONG_PASSWORDS) {
                $validator->strongPassword('password');
            }
            
            if (!$validator->isValid()) {
                Response::error('Validation failed', 400, $validator->getErrors());
                return;
            }
            
            // Find user by reset token
            $sql = "SELECT * FROM users 
                    WHERE password_reset_token = :token 
                    AND password_reset_expires > NOW()
                    AND status = 'active'";
            
            $user = Database::fetchOne($sql, ['token' => $input['token']]);
            
            if (!$user) {
                Response::error('Invalid or expired reset token', 400);
                return;
            }
            
            // Update password and clear reset token
            User::update($user['id'], [
                'password' => $input['password'],
                'password_reset_token' => null,
                'password_reset_expires' => null
            ]);
            
            // Destroy all existing sessions
            UserSession::destroyAllForUser($user['id']);
            
            Logger::info('Password reset completed', [
                'user_id' => $user['id'],
                'email' => $user['email']
            ]);
            
            Response::success(['message' => 'Password reset successful']);
            
        } catch (Exception $e) {
            Logger::error('Reset password error', ['error' => $e->getMessage()]);
            Response::error('Reset failed', 500);
        }
    }
    
    /**
     * Get session token from request
     */
    private function getSessionToken(): ?string {
        // Check Authorization header
        $headers = getallheaders();
        if (isset($headers['Authorization'])) {
            $authHeader = $headers['Authorization'];
            if (preg_match('/Bearer\s+(.*)$/i', $authHeader, $matches)) {
                return $matches[1];
            }
        }
        
        // Check cookie
        return $_COOKIE['session_token'] ?? null;
    }
    
    /**
     * Get current authenticated user
     */
    private function getCurrentUser(): array {
        $sessionToken = $this->getSessionToken();
        if (!$sessionToken) {
            throw new Exception('No session token');
        }
        
        $session = UserSession::validate($sessionToken);
        if (!$session) {
            throw new Exception('Invalid session');
        }
        
        return $session;
    }
    
    /**
     * Log failed login attempt
     */
    private function logFailedLogin(string $email, string $reason): void {
        Logger::warning('Failed login attempt', [
            'email' => $email,
            'reason' => $reason,
            'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown'
        ]);
    }
    
    /**
     * Log successful login
     */
    private function logSuccessfulLogin(int $userId, string $email): void {
        Logger::info('Successful login', [
            'user_id' => $userId,
            'email' => $email,
            'ip_address' => $_SERVER['REMOTE_ADDR'] ?? 'unknown',
            'user_agent' => $_SERVER['HTTP_USER_AGENT'] ?? 'unknown'
        ]);
    }
}
