<?php
/**
 * MVL-LMS Database Configuration
 * MariaDB Connection and Configuration Settings
 */

class DatabaseConfig {
    
    // Database connection settings
    const DB_HOST = 'localhost';
    const DB_PORT = 3306;
    const DB_NAME = 'mvl_lms';
    const DB_USER = 'mvl_user';
    const DB_PASS = 'your_secure_password_here';
    const DB_CHARSET = 'utf8mb4';
    
    // Connection options
    const DB_OPTIONS = [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
        PDO::ATTR_EMULATE_PREPARES   => false,
        PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES utf8mb4 COLLATE utf8mb4_unicode_ci"
    ];
    
    // Security settings
    const SESSION_TIMEOUT = 3600; // 1 hour
    const MAX_LOGIN_ATTEMPTS = 5;
    const LOCKOUT_DURATION = 900; // 15 minutes
    const PASSWORD_MIN_LENGTH = 8;
    const REQUIRE_STRONG_PASSWORDS = true;
    
    // File upload settings
    const UPLOAD_MAX_SIZE = 50 * 1024 * 1024; // 50MB
    const ALLOWED_EXTENSIONS = ['jpg', 'jpeg', 'png', 'gif', 'pdf', 'doc', 'docx', 'xls', 'xlsx', 'ppt', 'pptx', 'mp4', 'mp3'];
    const UPLOAD_PATH = 'uploads/';
    
    // Email settings
    const SMTP_HOST = 'smtp.gmail.com';
    const SMTP_PORT = 587;
    const SMTP_USERNAME = 'your-email@mvl-group.com';
    const SMTP_PASSWORD = 'your-email-password';
    const SMTP_ENCRYPTION = 'tls';
    const FROM_EMAIL = 'noreply@mvl-group.com';
    const FROM_NAME = 'MVL-LMS System';
    
    // Application settings
    const APP_ENV = 'development'; // development, staging, production
    const APP_DEBUG = true;
    const APP_URL = 'http://localhost:8000';
    const API_VERSION = 'v1';
    
    // Security keys (generate secure random strings for production)
    const JWT_SECRET = 'your-jwt-secret-key-here-make-it-very-long-and-random';
    const ENCRYPTION_KEY = 'your-encryption-key-here-32-characters';
    const CSRF_TOKEN_NAME = 'mvl_csrf_token';
    
    // Cache settings
    const CACHE_ENABLED = true;
    const CACHE_DRIVER = 'file'; // file, redis, memcached
    const CACHE_TTL = 3600; // 1 hour
    
    // Logging settings
    const LOG_LEVEL = 'info'; // emergency, alert, critical, error, warning, notice, info, debug
    const LOG_PATH = 'logs/';
    const LOG_MAX_FILES = 30;
    
    /**
     * Get database DSN string
     */
    public static function getDSN(): string {
        return sprintf(
            'mysql:host=%s;port=%d;dbname=%s;charset=%s',
            self::DB_HOST,
            self::DB_PORT,
            self::DB_NAME,
            self::DB_CHARSET
        );
    }
    
    /**
     * Get all database configuration as array
     */
    public static function getDatabaseConfig(): array {
        return [
            'dsn' => self::getDSN(),
            'username' => self::DB_USER,
            'password' => self::DB_PASS,
            'options' => self::DB_OPTIONS
        ];
    }
    
    /**
     * Get application configuration
     */
    public static function getAppConfig(): array {
        return [
            'env' => self::APP_ENV,
            'debug' => self::APP_DEBUG,
            'url' => self::APP_URL,
            'api_version' => self::API_VERSION,
            'timezone' => 'America/New_York',
            'locale' => 'en_US'
        ];
    }
    
    /**
     * Get security configuration
     */
    public static function getSecurityConfig(): array {
        return [
            'session_timeout' => self::SESSION_TIMEOUT,
            'max_login_attempts' => self::MAX_LOGIN_ATTEMPTS,
            'lockout_duration' => self::LOCKOUT_DURATION,
            'password_min_length' => self::PASSWORD_MIN_LENGTH,
            'require_strong_passwords' => self::REQUIRE_STRONG_PASSWORDS,
            'jwt_secret' => self::JWT_SECRET,
            'encryption_key' => self::ENCRYPTION_KEY,
            'csrf_token_name' => self::CSRF_TOKEN_NAME
        ];
    }
}

/**
 * Database Connection Singleton
 */
class Database {
    private static ?PDO $connection = null;
    private static ?Database $instance = null;
    
    private function __construct() {}
    
    /**
     * Get database instance
     */
    public static function getInstance(): Database {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }
    
    /**
     * Get PDO connection
     */
    public static function getConnection(): PDO {
        if (self::$connection === null) {
            try {
                $config = DatabaseConfig::getDatabaseConfig();
                self::$connection = new PDO(
                    $config['dsn'],
                    $config['username'],
                    $config['password'],
                    $config['options']
                );
                
                // Set timezone
                self::$connection->exec("SET time_zone = '+00:00'");
                
            } catch (PDOException $e) {
                error_log("Database connection failed: " . $e->getMessage());
                throw new Exception("Database connection failed");
            }
        }
        
        return self::$connection;
    }
    
    /**
     * Execute a prepared statement
     */
    public static function execute(string $sql, array $params = []): PDOStatement {
        try {
            $stmt = self::getConnection()->prepare($sql);
            $stmt->execute($params);
            return $stmt;
        } catch (PDOException $e) {
            error_log("Database query failed: " . $e->getMessage() . " SQL: " . $sql);
            throw new Exception("Database query failed");
        }
    }
    
    /**
     * Fetch single row
     */
    public static function fetchOne(string $sql, array $params = []): ?array {
        $stmt = self::execute($sql, $params);
        $result = $stmt->fetch();
        return $result ?: null;
    }
    
    /**
     * Fetch multiple rows
     */
    public static function fetchAll(string $sql, array $params = []): array {
        $stmt = self::execute($sql, $params);
        return $stmt->fetchAll();
    }
    
    /**
     * Get last insert ID
     */
    public static function lastInsertId(): string {
        return self::getConnection()->lastInsertId();
    }
    
    /**
     * Start transaction
     */
    public static function beginTransaction(): bool {
        return self::getConnection()->beginTransaction();
    }
    
    /**
     * Commit transaction
     */
    public static function commit(): bool {
        return self::getConnection()->commit();
    }
    
    /**
     * Rollback transaction
     */
    public static function rollback(): bool {
        return self::getConnection()->rollBack();
    }
    
    /**
     * Check if in transaction
     */
    public static function inTransaction(): bool {
        return self::getConnection()->inTransaction();
    }
    
    /**
     * Close connection
     */
    public static function close(): void {
        self::$connection = null;
    }
}

/**
 * Query Builder Helper
 */
class QueryBuilder {
    private string $table;
    private array $select = ['*'];
    private array $where = [];
    private array $joins = [];
    private array $orderBy = [];
    private array $groupBy = [];
    private ?int $limit = null;
    private ?int $offset = null;
    private array $params = [];
    
    public function __construct(string $table) {
        $this->table = $table;
    }
    
    public function select(array $columns): self {
        $this->select = $columns;
        return $this;
    }
    
    public function where(string $column, string $operator, $value): self {
        $placeholder = ':param_' . count($this->params);
        $this->where[] = "$column $operator $placeholder";
        $this->params[$placeholder] = $value;
        return $this;
    }
    
    public function whereIn(string $column, array $values): self {
        $placeholders = [];
        foreach ($values as $value) {
            $placeholder = ':param_' . count($this->params);
            $placeholders[] = $placeholder;
            $this->params[$placeholder] = $value;
        }
        $this->where[] = "$column IN (" . implode(', ', $placeholders) . ")";
        return $this;
    }
    
    public function join(string $table, string $on): self {
        $this->joins[] = "JOIN $table ON $on";
        return $this;
    }
    
    public function leftJoin(string $table, string $on): self {
        $this->joins[] = "LEFT JOIN $table ON $on";
        return $this;
    }
    
    public function orderBy(string $column, string $direction = 'ASC'): self {
        $this->orderBy[] = "$column $direction";
        return $this;
    }
    
    public function groupBy(string $column): self {
        $this->groupBy[] = $column;
        return $this;
    }
    
    public function limit(int $limit, int $offset = 0): self {
        $this->limit = $limit;
        $this->offset = $offset;
        return $this;
    }
    
    public function toSQL(): string {
        $sql = "SELECT " . implode(', ', $this->select);
        $sql .= " FROM " . $this->table;
        
        if (!empty($this->joins)) {
            $sql .= " " . implode(' ', $this->joins);
        }
        
        if (!empty($this->where)) {
            $sql .= " WHERE " . implode(' AND ', $this->where);
        }
        
        if (!empty($this->groupBy)) {
            $sql .= " GROUP BY " . implode(', ', $this->groupBy);
        }
        
        if (!empty($this->orderBy)) {
            $sql .= " ORDER BY " . implode(', ', $this->orderBy);
        }
        
        if ($this->limit !== null) {
            $sql .= " LIMIT " . $this->limit;
            if ($this->offset > 0) {
                $sql .= " OFFSET " . $this->offset;
            }
        }
        
        return $sql;
    }
    
    public function get(): array {
        return Database::fetchAll($this->toSQL(), $this->params);
    }
    
    public function first(): ?array {
        $this->limit(1);
        return Database::fetchOne($this->toSQL(), $this->params);
    }
    
    public function count(): int {
        $this->select = ['COUNT(*) as count'];
        $result = $this->first();
        return (int) ($result['count'] ?? 0);
    }
}

/**
 * Environment Configuration Loader
 */
class EnvironmentConfig {
    private static array $config = [];
    
    /**
     * Load configuration from .env file
     */
    public static function load(string $envFile = '.env'): void {
        if (!file_exists($envFile)) {
            return;
        }
        
        $lines = file($envFile, FILE_IGNORE_NEW_LINES | FILE_SKIP_EMPTY_LINES);
        foreach ($lines as $line) {
            if (strpos($line, '#') === 0) {
                continue; // Skip comments
            }
            
            list($key, $value) = explode('=', $line, 2);
            $key = trim($key);
            $value = trim($value, '"\'');
            
            self::$config[$key] = $value;
            $_ENV[$key] = $value;
            putenv("$key=$value");
        }
    }
    
    /**
     * Get environment variable
     */
    public static function get(string $key, $default = null) {
        return self::$config[$key] ?? $_ENV[$key] ?? getenv($key) ?: $default;
    }
    
    /**
     * Set environment variable
     */
    public static function set(string $key, $value): void {
        self::$config[$key] = $value;
        $_ENV[$key] = $value;
        putenv("$key=$value");
    }
}

// Load environment configuration
EnvironmentConfig::load(__DIR__ . '/../.env');
