<?php
/**
 * MVL-LMS Content Model
 * Handles all content-related database operations
 */

require_once __DIR__ . '/../config/database.php';

class Content {
    private static string $table = 'content_items';
    
    /**
     * Get content by ID
     */
    public static function find(int $id): ?array {
        $sql = "SELECT ci.*, cp.practice_code, cd.domain_name, cd.domain_code
                FROM " . self::$table . " ci
                LEFT JOIN cmmc_practices cp ON ci.practice_id = cp.id
                LEFT JOIN cmmc_domains cd ON cp.domain_id = cd.id
                WHERE ci.id = :id";
        return Database::fetchOne($sql, ['id' => $id]);
    }
    
    /**
     * Get content by slug
     */
    public static function findBySlug(string $slug): ?array {
        $sql = "SELECT ci.*, cp.practice_code, cd.domain_name, cd.domain_code
                FROM " . self::$table . " ci
                LEFT JOIN cmmc_practices cp ON ci.practice_id = cp.id
                LEFT JOIN cmmc_domains cd ON cp.domain_id = cd.id
                WHERE ci.slug = :slug";
        return Database::fetchOne($sql, ['slug' => $slug]);
    }
    
    /**
     * Get all content with filters
     */
    public static function getAll(array $filters = [], int $page = 1, int $limit = 50): array {
        $builder = new QueryBuilder('view_content_summary');
        
        // Apply filters
        if (!empty($filters['content_type'])) {
            $builder->where('content_type', '=', $filters['content_type']);
        }
        
        if (!empty($filters['status'])) {
            $builder->where('status', '=', $filters['status']);
        }
        
        if (!empty($filters['domain'])) {
            $builder->where('domain_name', '=', $filters['domain']);
        }
        
        if (!empty($filters['search'])) {
            $search = '%' . $filters['search'] . '%';
            $builder->where('title', 'LIKE', $search);
        }
        
        // Pagination
        $offset = ($page - 1) * $limit;
        $builder->limit($limit, $offset);
        
        // Default ordering
        $builder->orderBy('created_at', 'DESC');
        
        return $builder->get();
    }
    
    /**
     * Get content by domain
     */
    public static function getByDomain(string $domainCode): array {
        $sql = "SELECT ci.*, cp.practice_code, cp.practice_title
                FROM " . self::$table . " ci
                JOIN cmmc_practices cp ON ci.practice_id = cp.id
                JOIN cmmc_domains cd ON cp.domain_id = cd.id
                WHERE cd.domain_code = :domain_code 
                AND ci.status = 'published'
                ORDER BY cp.practice_order, ci.content_order";
        
        return Database::fetchAll($sql, ['domain_code' => $domainCode]);
    }
    
    /**
     * Get content by practice
     */
    public static function getByPractice(string $practiceCode): array {
        $sql = "SELECT ci.*
                FROM " . self::$table . " ci
                JOIN cmmc_practices cp ON ci.practice_id = cp.id
                WHERE cp.practice_code = :practice_code 
                AND ci.status = 'published'
                ORDER BY ci.content_order";
        
        return Database::fetchAll($sql, ['practice_code' => $practiceCode]);
    }
    
    /**
     * Create new content
     */
    public static function create(array $data, int $createdBy): array {
        // Validate required fields
        $required = ['title', 'content_type'];
        foreach ($required as $field) {
            if (empty($data[$field])) {
                throw new InvalidArgumentException("Missing required field: $field");
            }
        }
        
        // Generate slug if not provided
        if (empty($data['slug'])) {
            $data['slug'] = self::generateSlug($data['title']);
        }
        
        // Ensure slug is unique
        $data['slug'] = self::ensureUniqueSlug($data['slug']);
        
        // Set defaults
        $data['status'] = $data['status'] ?? 'draft';
        $data['visibility'] = $data['visibility'] ?? 'members';
        $data['content_order'] = $data['content_order'] ?? 0;
        $data['version'] = $data['version'] ?? '1.0';
        $data['created_by'] = $createdBy;
        $data['created_at'] = date('Y-m-d H:i:s');
        $data['updated_at'] = date('Y-m-d H:i:s');
        
        // Handle JSON fields
        $jsonFields = ['meta_data', 'prerequisites', 'learning_objectives', 'tags'];
        foreach ($jsonFields as $field) {
            if (isset($data[$field]) && is_array($data[$field])) {
                $data[$field] = json_encode($data[$field]);
            }
        }
        
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
     * Update content
     */
    public static function update(int $id, array $data, int $updatedBy): array {
        $content = self::find($id);
        if (!$content) {
            throw new InvalidArgumentException("Content not found");
        }
        
        // Remove protected fields
        unset($data['id'], $data['uuid'], $data['created_at'], $data['created_by']);
        
        // Handle slug update
        if (!empty($data['slug']) && $data['slug'] !== $content['slug']) {
            $data['slug'] = self::ensureUniqueSlug($data['slug'], $id);
        }
        
        $data['updated_by'] = $updatedBy;
        $data['updated_at'] = date('Y-m-d H:i:s');
        
        // Handle JSON fields
        $jsonFields = ['meta_data', 'prerequisites', 'learning_objectives', 'tags'];
        foreach ($jsonFields as $field) {
            if (isset($data[$field]) && is_array($data[$field])) {
                $data[$field] = json_encode($data[$field]);
            }
        }
        
        // Build update query
        $setParts = array_map(fn($col) => "$col = :$col", array_keys($data));
        $sql = "UPDATE " . self::$table . " SET " . implode(', ', $setParts) . " WHERE id = :id";
        $data['id'] = $id;
        
        Database::execute($sql, $data);
        
        return self::find($id);
    }
    
    /**
     * Delete content
     */
    public static function delete(int $id): bool {
        $content = self::find($id);
        if (!$content) {
            throw new InvalidArgumentException("Content not found");
        }
        
        // Soft delete - move to archived status
        $sql = "UPDATE " . self::$table . " SET status = 'archived', updated_at = NOW() WHERE id = :id";
        Database::execute($sql, ['id' => $id]);
        
        return true;
    }
    
    /**
     * Publish content
     */
    public static function publish(int $id, int $publishedBy): array {
        $data = [
            'status' => 'published',
            'published_at' => date('Y-m-d H:i:s'),
            'updated_by' => $publishedBy
        ];
        
        return self::update($id, $data, $publishedBy);
    }
    
    /**
     * Create content version
     */
    public static function createVersion(int $parentId, array $data, int $createdBy): array {
        $parent = self::find($parentId);
        if (!$parent) {
            throw new InvalidArgumentException("Parent content not found");
        }
        
        // Copy parent data and merge with new data
        $versionData = array_merge($parent, $data);
        
        // Set version-specific fields
        $versionData['parent_id'] = $parentId;
        $versionData['status'] = 'draft';
        $versionData['slug'] = $parent['slug'] . '-v' . time();
        
        // Increment version
        $versionParts = explode('.', $parent['version']);
        $versionParts[count($versionParts) - 1]++;
        $versionData['version'] = implode('.', $versionParts);
        
        return self::create($versionData, $createdBy);
    }
    
    /**
     * Get content versions
     */
    public static function getVersions(int $contentId): array {
        $sql = "SELECT id, version, status, created_at, created_by 
                FROM " . self::$table . " 
                WHERE parent_id = :content_id OR id = :content_id
                ORDER BY created_at DESC";
        
        return Database::fetchAll($sql, ['content_id' => $contentId]);
    }
    
    /**
     * Generate slug from title
     */
    private static function generateSlug(string $title): string {
        $slug = strtolower($title);
        $slug = preg_replace('/[^a-z0-9\s-]/', '', $slug);
        $slug = preg_replace('/[\s-]+/', '-', $slug);
        return trim($slug, '-');
    }
    
    /**
     * Ensure slug is unique
     */
    private static function ensureUniqueSlug(string $slug, int $excludeId = null): string {
        $originalSlug = $slug;
        $counter = 1;
        
        while (true) {
            $sql = "SELECT id FROM " . self::$table . " WHERE slug = :slug";
            $params = ['slug' => $slug];
            
            if ($excludeId) {
                $sql .= " AND id != :exclude_id";
                $params['exclude_id'] = $excludeId;
            }
            
            $existing = Database::fetchOne($sql, $params);
            
            if (!$existing) {
                break;
            }
            
            $slug = $originalSlug . '-' . $counter;
            $counter++;
        }
        
        return $slug;
    }
    
    /**
     * Get content with media
     */
    public static function getWithMedia(int $id): ?array {
        $content = self::find($id);
        if (!$content) {
            return null;
        }
        
        // Get associated media
        $sql = "SELECT ml.*, cm.media_role, cm.display_order
                FROM media_library ml
                JOIN content_media cm ON ml.id = cm.media_id
                WHERE cm.content_id = :content_id
                ORDER BY cm.display_order";
        
        $media = Database::fetchAll($sql, ['content_id' => $id]);
        $content['media'] = $media;
        
        return $content;
    }
    
    /**
     * Associate media with content
     */
    public static function addMedia(int $contentId, int $mediaId, string $role = 'inline', int $order = 0): void {
        $sql = "INSERT INTO content_media (content_id, media_id, media_role, display_order) 
                VALUES (:content_id, :media_id, :media_role, :display_order)
                ON DUPLICATE KEY UPDATE 
                display_order = :display_order";
        
        Database::execute($sql, [
            'content_id' => $contentId,
            'media_id' => $mediaId,
            'media_role' => $role,
            'display_order' => $order
        ]);
    }
    
    /**
     * Remove media from content
     */
    public static function removeMedia(int $contentId, int $mediaId): void {
        $sql = "DELETE FROM content_media WHERE content_id = :content_id AND media_id = :media_id";
        Database::execute($sql, ['content_id' => $contentId, 'media_id' => $mediaId]);
    }
    
    /**
     * Get content statistics
     */
    public static function getStatistics(): array {
        $sql = "SELECT 
                    COUNT(*) as total_content,
                    COUNT(CASE WHEN status = 'published' THEN 1 END) as published_content,
                    COUNT(CASE WHEN status = 'draft' THEN 1 END) as draft_content,
                    COUNT(CASE WHEN content_type = 'lesson' THEN 1 END) as lessons,
                    COUNT(CASE WHEN content_type = 'quiz' THEN 1 END) as quizzes,
                    COUNT(CASE WHEN content_type = 'video' THEN 1 END) as videos
                FROM " . self::$table;
        
        return Database::fetchOne($sql) ?? [];
    }
    
    /**
     * Search content
     */
    public static function search(string $query, array $filters = [], int $limit = 20): array {
        $searchTerms = explode(' ', trim($query));
        $whereConditions = [];
        $params = [];
        
        // Build search conditions
        foreach ($searchTerms as $i => $term) {
            if (strlen($term) >= 3) {
                $paramKey = "search_term_$i";
                $whereConditions[] = "(ci.title LIKE :$paramKey OR ci.content_body LIKE :$paramKey OR ci.excerpt LIKE :$paramKey)";
                $params[$paramKey] = "%$term%";
            }
        }
        
        if (empty($whereConditions)) {
            return [];
        }
        
        $sql = "SELECT ci.*, cp.practice_code, cd.domain_name
                FROM " . self::$table . " ci
                LEFT JOIN cmmc_practices cp ON ci.practice_id = cp.id
                LEFT JOIN cmmc_domains cd ON cp.domain_id = cd.id
                WHERE ci.status = 'published' AND (" . implode(' AND ', $whereConditions) . ")";
        
        // Add filters
        if (!empty($filters['content_type'])) {
            $sql .= " AND ci.content_type = :content_type";
            $params['content_type'] = $filters['content_type'];
        }
        
        if (!empty($filters['domain'])) {
            $sql .= " AND cd.domain_code = :domain_code";
            $params['domain_code'] = $filters['domain'];
        }
        
        $sql .= " ORDER BY ci.title LIMIT :limit";
        $params['limit'] = $limit;
        
        return Database::fetchAll($sql, $params);
    }
}

/**
 * CMMC Domain Model
 */
class Domain {
    private static string $table = 'cmmc_domains';
    
    /**
     * Get all domains
     */
    public static function getAll(): array {
        $sql = "SELECT * FROM " . self::$table . " WHERE is_active = 1 ORDER BY domain_order";
        return Database::fetchAll($sql);
    }
    
    /**
     * Get domain by code
     */
    public static function findByCode(string $code): ?array {
        $sql = "SELECT * FROM " . self::$table . " WHERE domain_code = :code";
        return Database::fetchOne($sql, ['code' => $code]);
    }
    
    /**
     * Get domain with practices
     */
    public static function getWithPractices(string $code): ?array {
        $domain = self::findByCode($code);
        if (!$domain) {
            return null;
        }
        
        $sql = "SELECT * FROM cmmc_practices 
                WHERE domain_id = :domain_id AND is_active = 1 
                ORDER BY practice_order";
        
        $practices = Database::fetchAll($sql, ['domain_id' => $domain['id']]);
        $domain['practices'] = $practices;
        
        return $domain;
    }
    
    /**
     * Get domain progress for all users
     */
    public static function getProgressSummary(): array {
        return Database::fetchAll("SELECT * FROM view_domain_progress ORDER BY domain_code");
    }
}

/**
 * CMMC Practice Model
 */
class Practice {
    private static string $table = 'cmmc_practices';
    
    /**
     * Get practice by code
     */
    public static function findByCode(string $code): ?array {
        $sql = "SELECT cp.*, cd.domain_name, cd.domain_code
                FROM " . self::$table . " cp
                JOIN cmmc_domains cd ON cp.domain_id = cd.id
                WHERE cp.practice_code = :code";
        return Database::fetchOne($sql, ['code' => $code]);
    }
    
    /**
     * Get practices by domain
     */
    public static function getByDomain(int $domainId): array {
        $sql = "SELECT * FROM " . self::$table . " 
                WHERE domain_id = :domain_id AND is_active = 1 
                ORDER BY practice_order";
        return Database::fetchAll($sql, ['domain_id' => $domainId]);
    }
    
    /**
     * Get practice with content
     */
    public static function getWithContent(string $practiceCode): ?array {
        $practice = self::findByCode($practiceCode);
        if (!$practice) {
            return null;
        }
        
        $sql = "SELECT * FROM content_items 
                WHERE practice_id = :practice_id AND status = 'published' 
                ORDER BY content_order";
        
        $content = Database::fetchAll($sql, ['practice_id' => $practice['id']]);
        $practice['content'] = $content;
        
        return $practice;
    }
}
