<?php
/**
 * MVL-LMS API Router
 * Handles HTTP requests and routes to appropriate controllers
 */

require_once __DIR__ . '/config/database.php';
require_once __DIR__ . '/controllers/AuthController.php';
require_once __DIR__ . '/controllers/UserController.php';
require_once __DIR__ . '/controllers/ContentController.php';
require_once __DIR__ . '/controllers/QuizController.php';
require_once __DIR__ . '/controllers/ProgressController.php';
require_once __DIR__ . '/controllers/AdminController.php';
require_once __DIR__ . '/middleware/AuthMiddleware.php';
require_once __DIR__ . '/middleware/CorsMiddleware.php';
require_once __DIR__ . '/utils/Response.php';
require_once __DIR__ . '/utils/Logger.php';

class ApiRouter {
    private array $routes = [];
    private array $middleware = [];
    private string $basePath;
    
    public function __construct(string $basePath = '/api/v1') {
        $this->basePath = $basePath;
        $this->setupRoutes();
        $this->setupGlobalMiddleware();
    }
    
    /**
     * Setup API routes
     */
    private function setupRoutes(): void {
        // Authentication routes
        $this->post('/auth/login', [AuthController::class, 'login']);
        $this->post('/auth/logout', [AuthController::class, 'logout']);
        $this->post('/auth/refresh', [AuthController::class, 'refresh']);
        $this->post('/auth/register', [AuthController::class, 'register']);
        $this->post('/auth/forgot-password', [AuthController::class, 'forgotPassword']);
        $this->post('/auth/reset-password', [AuthController::class, 'resetPassword']);
        $this->get('/auth/me', [AuthController::class, 'me'], ['auth']);
        
        // User management routes
        $this->get('/users', [UserController::class, 'index'], ['auth', 'admin']);
        $this->get('/users/{id}', [UserController::class, 'show'], ['auth']);
        $this->post('/users', [UserController::class, 'create'], ['auth', 'admin']);
        $this->put('/users/{id}', [UserController::class, 'update'], ['auth']);
        $this->delete('/users/{id}', [UserController::class, 'delete'], ['auth', 'admin']);
        $this->get('/users/{id}/progress', [UserController::class, 'getProgress'], ['auth']);
        $this->post('/users/export', [UserController::class, 'export'], ['auth', 'admin']);
        
        // Content management routes
        $this->get('/content', [ContentController::class, 'index'], ['auth']);
        $this->get('/content/{id}', [ContentController::class, 'show'], ['auth']);
        $this->post('/content', [ContentController::class, 'create'], ['auth', 'instructor']);
        $this->put('/content/{id}', [ContentController::class, 'update'], ['auth', 'instructor']);
        $this->delete('/content/{id}', [ContentController::class, 'delete'], ['auth', 'instructor']);
        $this->post('/content/{id}/publish', [ContentController::class, 'publish'], ['auth', 'instructor']);
        $this->get('/content/search', [ContentController::class, 'search'], ['auth']);
        
        // Domain and practice routes
        $this->get('/domains', [ContentController::class, 'getDomains'], ['auth']);
        $this->get('/domains/{code}', [ContentController::class, 'getDomain'], ['auth']);
        $this->get('/practices/{code}', [ContentController::class, 'getPractice'], ['auth']);
        
        // Quiz routes
        $this->get('/quizzes', [QuizController::class, 'index'], ['auth']);
        $this->get('/quizzes/{id}', [QuizController::class, 'show'], ['auth']);
        $this->post('/quizzes', [QuizController::class, 'create'], ['auth', 'instructor']);
        $this->put('/quizzes/{id}', [QuizController::class, 'update'], ['auth', 'instructor']);
        $this->delete('/quizzes/{id}', [QuizController::class, 'delete'], ['auth', 'instructor']);
        $this->post('/quizzes/{id}/attempts', [QuizController::class, 'startAttempt'], ['auth']);
        $this->post('/quiz-attempts/{id}/answers', [QuizController::class, 'submitAnswer'], ['auth']);
        $this->post('/quiz-attempts/{id}/complete', [QuizController::class, 'completeAttempt'], ['auth']);
        
        // Progress tracking routes
        $this->get('/progress/summary', [ProgressController::class, 'getSummary'], ['auth']);
        $this->get('/progress/domains', [ProgressController::class, 'getDomainProgress'], ['auth']);
        $this->post('/progress/content/{id}', [ProgressController::class, 'updateContentProgress'], ['auth']);
        $this->get('/progress/reports', [ProgressController::class, 'getReports'], ['auth', 'instructor']);
        
        // Admin routes
        $this->get('/admin/dashboard', [AdminController::class, 'getDashboard'], ['auth', 'admin']);
        $this->get('/admin/statistics', [AdminController::class, 'getStatistics'], ['auth', 'admin']);
        $this->get('/admin/audit-logs', [AdminController::class, 'getAuditLogs'], ['auth', 'admin']);
        $this->get('/admin/system-settings', [AdminController::class, 'getSystemSettings'], ['auth', 'admin']);
        $this->put('/admin/system-settings', [AdminController::class, 'updateSystemSettings'], ['auth', 'admin']);
        $this->post('/admin/sso/test', [AdminController::class, 'testSSO'], ['auth', 'admin']);
        $this->get('/admin/users/export', [AdminController::class, 'exportUsers'], ['auth', 'admin']);
        
        // File upload routes
        $this->post('/upload', [ContentController::class, 'upload'], ['auth', 'instructor']);
        $this->get('/files/{uuid}', [ContentController::class, 'getFile'], ['auth']);
        
        // Health check
        $this->get('/health', [self::class, 'healthCheck']);
    }
    
    /**
     * Setup global middleware
     */
    private function setupGlobalMiddleware(): void {
        $this->middleware[] = CorsMiddleware::class;
    }
    
    /**
     * Add route
     */
    private function addRoute(string $method, string $path, array $handler, array $middleware = []): void {
        $this->routes[] = [
            'method' => strtoupper($method),
            'path' => $this->basePath . $path,
            'handler' => $handler,
            'middleware' => $middleware
        ];
    }
    
    public function get(string $path, array $handler, array $middleware = []): void {
        $this->addRoute('GET', $path, $handler, $middleware);
    }
    
    public function post(string $path, array $handler, array $middleware = []): void {
        $this->addRoute('POST', $path, $handler, $middleware);
    }
    
    public function put(string $path, array $handler, array $middleware = []): void {
        $this->addRoute('PUT', $path, $handler, $middleware);
    }
    
    public function delete(string $path, array $handler, array $middleware = []): void {
        $this->addRoute('DELETE', $path, $handler, $middleware);
    }
    
    /**
     * Handle incoming request
     */
    public function handle(): void {
        try {
            $method = $_SERVER['REQUEST_METHOD'];
            $path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
            
            // Remove base path if present
            if (strpos($path, $this->basePath) === 0) {
                $path = substr($path, strlen($this->basePath));
            }
            
            // Find matching route
            $route = $this->findRoute($method, $path);
            
            if (!$route) {
                Response::error('Route not found', 404);
                return;
            }
            
            // Run global middleware
            foreach ($this->middleware as $middlewareClass) {
                $middlewareClass::handle();
            }
            
            // Run route-specific middleware
            foreach ($route['middleware'] as $middlewareName) {
                $this->runMiddleware($middlewareName);
            }
            
            // Extract parameters
            $params = $this->extractParams($route['pattern'], $path);
            
            // Call handler
            $this->callHandler($route['handler'], $params);
            
        } catch (Exception $e) {
            Logger::error('API Error', [
                'message' => $e->getMessage(),
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString()
            ]);
            
            if (DatabaseConfig::APP_DEBUG) {
                Response::error($e->getMessage(), 500, ['trace' => $e->getTrace()]);
            } else {
                Response::error('Internal server error', 500);
            }
        }
    }
    
    /**
     * Find matching route
     */
    private function findRoute(string $method, string $path): ?array {
        foreach ($this->routes as $route) {
            if ($route['method'] !== $method) {
                continue;
            }
            
            $pattern = $this->pathToPattern($route['path']);
            if (preg_match($pattern, $this->basePath . $path)) {
                $route['pattern'] = $pattern;
                return $route;
            }
        }
        
        return null;
    }
    
    /**
     * Convert path to regex pattern
     */
    private function pathToPattern(string $path): string {
        // Escape special regex characters
        $pattern = preg_quote($path, '/');
        
        // Replace parameter placeholders with regex
        $pattern = preg_replace('/\\\{([^}]+)\\\}/', '(?P<$1>[^/]+)', $pattern);
        
        return '/^' . $pattern . '$/';
    }
    
    /**
     * Extract parameters from path
     */
    private function extractParams(string $pattern, string $path): array {
        $matches = [];
        preg_match($pattern, $this->basePath . $path, $matches);
        
        $params = [];
        foreach ($matches as $key => $value) {
            if (is_string($key)) {
                $params[$key] = $value;
            }
        }
        
        return $params;
    }
    
    /**
     * Run middleware
     */
    private function runMiddleware(string $middlewareName): void {
        switch ($middlewareName) {
            case 'auth':
                AuthMiddleware::handle();
                break;
            case 'admin':
                AuthMiddleware::requireRole(['admin', 'super_admin']);
                break;
            case 'instructor':
                AuthMiddleware::requireRole(['instructor', 'admin', 'super_admin']);
                break;
            default:
                throw new Exception("Unknown middleware: $middlewareName");
        }
    }
    
    /**
     * Call route handler
     */
    private function callHandler(array $handler, array $params): void {
        [$class, $method] = $handler;
        
        if (!class_exists($class)) {
            throw new Exception("Controller class not found: $class");
        }
        
        if (!method_exists($class, $method)) {
            throw new Exception("Controller method not found: $class::$method");
        }
        
        $controller = new $class();
        call_user_func_array([$controller, $method], $params);
    }
    
    /**
     * Health check endpoint
     */
    public static function healthCheck(): void {
        try {
            // Test database connection
            Database::fetchOne("SELECT 1 as test");
            
            Response::success([
                'status' => 'healthy',
                'timestamp' => date('c'),
                'version' => DatabaseConfig::getAppConfig()['api_version'],
                'environment' => DatabaseConfig::getAppConfig()['env']
            ]);
        } catch (Exception $e) {
            Response::error('Service unhealthy', 503, [
                'database' => 'error',
                'timestamp' => date('c')
            ]);
        }
    }
}

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    CorsMiddleware::handle();
    exit;
}

// Initialize and handle request
$router = new ApiRouter();
$router->handle();
