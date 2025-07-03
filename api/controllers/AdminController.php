<?php
/**
 * MVL-LMS Admin Management Controller
 * Handles admin operations, system settings, analytics, and audit logs
 */

class AdminController {
    private $db;
    
    public function __construct($db) {
        $this->db = $db;
    }
    
    /**
     * Get system dashboard statistics
     */
    public function getDashboardStats() {
        try {
            $stats = [];
            
            // Total users
            $stmt = $this->db->prepare("SELECT COUNT(*) as total FROM users WHERE status != 'deleted'");
            $stmt->execute();
            $stats['totalUsers'] = $stmt->fetch()['total'];
            
            // Active users (logged in within last 30 days)
            $stmt = $this->db->prepare("SELECT COUNT(*) as total FROM users WHERE last_login > DATE_SUB(NOW(), INTERVAL 30 DAY) AND status = 'active'");
            $stmt->execute();
            $stats['activeUsers'] = $stmt->fetch()['total'];
            
            // Total content
            $stmt = $this->db->prepare("SELECT COUNT(*) as total FROM content WHERE status != 'deleted'");
            $stmt->execute();
            $stats['totalContent'] = $stmt->fetch()['total'];
            
            // Published content
            $stmt = $this->db->prepare("SELECT COUNT(*) as total FROM content WHERE status = 'published'");
            $stmt->execute();
            $stats['publishedContent'] = $stmt->fetch()['total'];
            
            // Total quiz attempts
            $stmt = $this->db->prepare("SELECT COUNT(*) as total FROM quiz_attempts");
            $stmt->execute();
            $stats['totalQuizAttempts'] = $stmt->fetch()['total'];
            
            // Average completion rate
            $stmt = $this->db->prepare("
                SELECT AVG(
                    (completed_lessons / NULLIF(total_lessons, 0)) * 100
                ) as avg_completion_rate
                FROM (
                    SELECT 
                        u.id,
                        COUNT(DISTINCT ul.content_id) as completed_lessons,
                        (SELECT COUNT(*) FROM content WHERE status = 'published' AND type = 'lesson') as total_lessons
                    FROM users u
                    LEFT JOIN user_progress ul ON u.id = ul.user_id AND ul.status = 'completed'
                    WHERE u.role = 'learner' AND u.status = 'active'
                    GROUP BY u.id
                ) completion_data
            ");
            $stmt->execute();
            $result = $stmt->fetch();
            $stats['completionRate'] = round($result['avg_completion_rate'] ?? 0, 1);
            
            // Recent activity count
            $stmt = $this->db->prepare("SELECT COUNT(*) as total FROM audit_logs WHERE created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR)");
            $stmt->execute();
            $stats['recentActivity'] = $stmt->fetch()['total'];
            
            // System alerts (failed logins, errors)
            $stmt = $this->db->prepare("
                SELECT COUNT(*) as total 
                FROM audit_logs 
                WHERE action IN ('Login Failed', 'System Error') 
                AND created_at > DATE_SUB(NOW(), INTERVAL 24 HOUR)
            ");
            $stmt->execute();
            $stats['systemAlerts'] = $stmt->fetch()['total'];
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $stats
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch dashboard stats: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Get recent system activity
     */
    public function getRecentActivity() {
        try {
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 10;
            
            $stmt = $this->db->prepare("
                SELECT 
                    al.*,
                    u.first_name,
                    u.last_name,
                    u.email
                FROM audit_logs al
                LEFT JOIN users u ON al.user_id = u.id
                ORDER BY al.created_at DESC
                LIMIT ?
            ");
            $stmt->execute([$limit]);
            $activities = $stmt->fetchAll();
            
            // Format activities for frontend
            $formattedActivities = array_map(function($activity) {
                $type = 'info';
                if (strpos(strtolower($activity['action']), 'failed') !== false || 
                    strpos(strtolower($activity['action']), 'error') !== false) {
                    $type = 'error';
                } elseif (strpos(strtolower($activity['action']), 'success') !== false || 
                         strpos(strtolower($activity['action']), 'completed') !== false) {
                    $type = 'success';
                } elseif (strpos(strtolower($activity['action']), 'warning') !== false || 
                         strpos(strtolower($activity['action']), 'attempt') !== false) {
                    $type = 'warning';
                }
                
                $userName = $activity['first_name'] && $activity['last_name'] 
                    ? $activity['first_name'] . ' ' . $activity['last_name']
                    : $activity['email'] ?? 'System';
                
                return [
                    'id' => $activity['id'],
                    'type' => $type,
                    'message' => $activity['details'],
                    'user' => $userName,
                    'timestamp' => $this->formatTimestamp($activity['created_at']),
                    'ip_address' => $activity['ip_address']
                ];
            }, $activities);
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $formattedActivities
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch recent activity: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Get compliance statistics by domain
     */
    public function getComplianceStats() {
        try {
            $stmt = $this->db->prepare("
                SELECT 
                    c.domain,
                    COUNT(DISTINCT c.id) as total_content,
                    COUNT(DISTINCT CASE WHEN up.status = 'completed' THEN up.user_id END) as completed_users,
                    COUNT(DISTINCT CASE WHEN u.role = 'learner' AND u.status = 'active' THEN u.id END) as total_learners,
                    ROUND(
                        (COUNT(DISTINCT CASE WHEN up.status = 'completed' THEN up.user_id END) / 
                         NULLIF(COUNT(DISTINCT CASE WHEN u.role = 'learner' AND u.status = 'active' THEN u.id END), 0)) * 100, 
                        1
                    ) as completion_percentage
                FROM content c
                CROSS JOIN users u
                LEFT JOIN user_progress up ON c.id = up.content_id AND u.id = up.user_id
                WHERE c.status = 'published' 
                AND c.type IN ('lesson', 'quiz')
                AND u.role = 'learner' 
                AND u.status = 'active'
                GROUP BY c.domain
                ORDER BY completion_percentage DESC
            ");
            $stmt->execute();
            $stats = $stmt->fetchAll();
            
            // Format for frontend
            $formattedStats = array_map(function($stat) {
                return [
                    'name' => $stat['domain'],
                    'percentage' => (float)$stat['completion_percentage'],
                    'completed_users' => (int)$stat['completed_users'],
                    'total_learners' => (int)$stat['total_learners'],
                    'total_content' => (int)$stat['total_content']
                ];
            }, $stats);
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $formattedStats
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch compliance stats: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Get audit logs with filtering
     */
    public function getAuditLogs() {
        try {
            $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 50;
            $offset = ($page - 1) * $limit;
            
            $filters = [];
            $params = [];
            
            // Date range filter
            if (isset($_GET['date_from']) && $_GET['date_from']) {
                $filters[] = "al.created_at >= ?";
                $params[] = $_GET['date_from'] . ' 00:00:00';
            }
            
            if (isset($_GET['date_to']) && $_GET['date_to']) {
                $filters[] = "al.created_at <= ?";
                $params[] = $_GET['date_to'] . ' 23:59:59';
            }
            
            // Action type filter
            if (isset($_GET['action']) && $_GET['action'] !== 'all') {
                $filters[] = "al.action LIKE ?";
                $params[] = '%' . $_GET['action'] . '%';
            }
            
            // User filter
            if (isset($_GET['user']) && $_GET['user']) {
                $filters[] = "(u.first_name LIKE ? OR u.last_name LIKE ? OR u.email LIKE ?)";
                $searchTerm = '%' . $_GET['user'] . '%';
                $params[] = $searchTerm;
                $params[] = $searchTerm;
                $params[] = $searchTerm;
            }
            
            // IP address filter
            if (isset($_GET['ip_address']) && $_GET['ip_address']) {
                $filters[] = "al.ip_address LIKE ?";
                $params[] = '%' . $_GET['ip_address'] . '%';
            }
            
            $whereClause = $filters ? 'WHERE ' . implode(' AND ', $filters) : '';
            
            // Get total count
            $countQuery = "
                SELECT COUNT(*) as total
                FROM audit_logs al
                LEFT JOIN users u ON al.user_id = u.id
                $whereClause
            ";
            $stmt = $this->db->prepare($countQuery);
            $stmt->execute($params);
            $total = $stmt->fetch()['total'];
            
            // Get logs
            $query = "
                SELECT 
                    al.*,
                    u.first_name,
                    u.last_name,
                    u.email
                FROM audit_logs al
                LEFT JOIN users u ON al.user_id = u.id
                $whereClause
                ORDER BY al.created_at DESC
                LIMIT ? OFFSET ?
            ";
            $params[] = $limit;
            $params[] = $offset;
            
            $stmt = $this->db->prepare($query);
            $stmt->execute($params);
            $logs = $stmt->fetchAll();
            
            // Format logs
            $formattedLogs = array_map(function($log) {
                $userName = $log['first_name'] && $log['last_name'] 
                    ? $log['first_name'] . ' ' . $log['last_name']
                    : $log['email'] ?? 'System';
                
                return [
                    'id' => $log['id'],
                    'timestamp' => $log['created_at'],
                    'user' => $userName,
                    'action' => $log['action'],
                    'details' => $log['details'],
                    'ip_address' => $log['ip_address'],
                    'status' => $log['status'] ?? 'success'
                ];
            }, $logs);
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $formattedLogs,
                'total' => (int)$total,
                'page' => $page,
                'limit' => $limit
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch audit logs: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Get system settings
     */
    public function getSystemSettings() {
        try {
            $stmt = $this->db->prepare("SELECT * FROM system_settings");
            $stmt->execute();
            $settings = $stmt->fetchAll();
            
            // Convert to key-value pairs
            $settingsArray = [];
            foreach ($settings as $setting) {
                $settingsArray[$setting['setting_key']] = $setting['setting_value'];
            }
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $settingsArray
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch system settings: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Update system settings
     */
    public function updateSystemSettings() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            if (!$input) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Invalid JSON input'
                ]);
                return;
            }
            
            $this->db->beginTransaction();
            
            foreach ($input as $key => $value) {
                $stmt = $this->db->prepare("
                    INSERT INTO system_settings (setting_key, setting_value, updated_by) 
                    VALUES (?, ?, ?)
                    ON DUPLICATE KEY UPDATE 
                    setting_value = VALUES(setting_value),
                    updated_by = VALUES(updated_by),
                    updated_at = CURRENT_TIMESTAMP
                ");
                $stmt->execute([$key, $value, $_SESSION['user_id'] ?? null]);
            }
            
            $this->db->commit();
            
            // Log the update
            $this->logAuditEvent('System Settings Updated', 'Updated system settings', 'success');
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'message' => 'System settings updated successfully'
            ]);
        } catch (Exception $e) {
            $this->db->rollBack();
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to update system settings: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Generate analytics report
     */
    public function generateReport() {
        try {
            $reportType = $_GET['type'] ?? 'user_progress';
            $format = $_GET['format'] ?? 'json';
            
            $reportData = [];
            
            switch ($reportType) {
                case 'user_progress':
                    $reportData = $this->generateUserProgressReport();
                    break;
                case 'course_completion':
                    $reportData = $this->generateCourseCompletionReport();
                    break;
                case 'quiz_scores':
                    $reportData = $this->generateQuizScoresReport();
                    break;
                case 'compliance_audit':
                    $reportData = $this->generateComplianceAuditReport();
                    break;
                default:
                    http_response_code(400);
                    echo json_encode([
                        'success' => false,
                        'message' => 'Invalid report type'
                    ]);
                    return;
            }
            
            if ($format === 'csv') {
                $this->outputCSVReport($reportData, $reportType);
            } else {
                http_response_code(200);
                echo json_encode([
                    'success' => true,
                    'data' => $reportData,
                    'type' => $reportType,
                    'generated_at' => date('Y-m-d H:i:s')
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to generate report: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Export audit logs
     */
    public function exportAuditLogs() {
        try {
            $format = $_GET['format'] ?? 'json';
            
            // Use the same filtering logic as getAuditLogs but without pagination
            $filters = [];
            $params = [];
            
            if (isset($_GET['date_from']) && $_GET['date_from']) {
                $filters[] = "al.created_at >= ?";
                $params[] = $_GET['date_from'] . ' 00:00:00';
            }
            
            if (isset($_GET['date_to']) && $_GET['date_to']) {
                $filters[] = "al.created_at <= ?";
                $params[] = $_GET['date_to'] . ' 23:59:59';
            }
            
            $whereClause = $filters ? 'WHERE ' . implode(' AND ', $filters) : '';
            
            $query = "
                SELECT 
                    al.*,
                    CONCAT(u.first_name, ' ', u.last_name) as user_name,
                    u.email as user_email
                FROM audit_logs al
                LEFT JOIN users u ON al.user_id = u.id
                $whereClause
                ORDER BY al.created_at DESC
            ";
            
            $stmt = $this->db->prepare($query);
            $stmt->execute($params);
            $logs = $stmt->fetchAll();
            
            if ($format === 'csv') {
                header('Content-Type: text/csv');
                header('Content-Disposition: attachment; filename="mvl-lms-audit-log-' . date('Y-m-d') . '.csv"');
                
                $output = fopen('php://output', 'w');
                
                // Headers
                $headers = ['Timestamp', 'User', 'Action', 'Details', 'IP Address', 'Status'];
                fputcsv($output, $headers);
                
                // Data
                foreach ($logs as $log) {
                    fputcsv($output, [
                        $log['created_at'],
                        $log['user_name'] ?: $log['user_email'] ?: 'System',
                        $log['action'],
                        $log['details'],
                        $log['ip_address'],
                        $log['status'] ?? 'success'
                    ]);
                }
                
                fclose($output);
            } else {
                header('Content-Type: application/json');
                header('Content-Disposition: attachment; filename="mvl-lms-audit-log-' . date('Y-m-d') . '.json"');
                echo json_encode($logs, JSON_PRETTY_PRINT);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to export audit logs: ' . $e->getMessage()
            ]);
        }
    }
    
    // Private helper methods
    
    private function generateUserProgressReport() {
        $stmt = $this->db->prepare("
            SELECT 
                u.id,
                CONCAT(u.first_name, ' ', u.last_name) as name,
                u.email,
                u.role,
                u.last_login,
                COUNT(DISTINCT up.content_id) as completed_lessons,
                (SELECT COUNT(*) FROM content WHERE status = 'published' AND type = 'lesson') as total_lessons,
                ROUND(
                    (COUNT(DISTINCT up.content_id) / 
                     NULLIF((SELECT COUNT(*) FROM content WHERE status = 'published' AND type = 'lesson'), 0)) * 100, 
                    1
                ) as progress_percentage
            FROM users u
            LEFT JOIN user_progress up ON u.id = up.user_id AND up.status = 'completed'
            WHERE u.role = 'learner' AND u.status = 'active'
            GROUP BY u.id
            ORDER BY progress_percentage DESC
        ");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    private function generateCourseCompletionReport() {
        $stmt = $this->db->prepare("
            SELECT 
                c.domain,
                c.title,
                COUNT(DISTINCT up.user_id) as completed_users,
                (SELECT COUNT(*) FROM users WHERE role = 'learner' AND status = 'active') as total_learners,
                ROUND(
                    (COUNT(DISTINCT up.user_id) / 
                     NULLIF((SELECT COUNT(*) FROM users WHERE role = 'learner' AND status = 'active'), 0)) * 100, 
                    1
                ) as completion_percentage
            FROM content c
            LEFT JOIN user_progress up ON c.id = up.content_id AND up.status = 'completed'
            WHERE c.status = 'published' AND c.type IN ('lesson', 'quiz')
            GROUP BY c.id
            ORDER BY completion_percentage DESC
        ");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    private function generateQuizScoresReport() {
        $stmt = $this->db->prepare("
            SELECT 
                c.domain,
                c.title,
                COUNT(qa.id) as total_attempts,
                AVG(qa.score) as average_score,
                MAX(qa.score) as highest_score,
                MIN(qa.score) as lowest_score,
                COUNT(DISTINCT qa.user_id) as unique_users
            FROM content c
            LEFT JOIN quiz_attempts qa ON c.id = qa.content_id
            WHERE c.type = 'quiz' AND c.status = 'published'
            GROUP BY c.id
            HAVING total_attempts > 0
            ORDER BY average_score DESC
        ");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    private function generateComplianceAuditReport() {
        $stmt = $this->db->prepare("
            SELECT 
                'Overall Compliance' as metric,
                ROUND(AVG(completion_percentage), 1) as value
            FROM (
                SELECT 
                    c.domain,
                    ROUND(
                        (COUNT(DISTINCT CASE WHEN up.status = 'completed' THEN up.user_id END) / 
                         NULLIF(COUNT(DISTINCT CASE WHEN u.role = 'learner' THEN u.id END), 0)) * 100, 
                        1
                    ) as completion_percentage
                FROM content c
                CROSS JOIN users u
                LEFT JOIN user_progress up ON c.id = up.content_id AND u.id = up.user_id
                WHERE c.status = 'published' 
                AND c.type IN ('lesson', 'quiz')
                AND u.role = 'learner' 
                AND u.status = 'active'
                GROUP BY c.domain
            ) domain_stats
        ");
        $stmt->execute();
        return $stmt->fetchAll();
    }
    
    private function outputCSVReport($data, $reportType) {
        header('Content-Type: text/csv');
        header('Content-Disposition: attachment; filename="mvl-lms-' . $reportType . '-report-' . date('Y-m-d') . '.csv"');
        
        $output = fopen('php://output', 'w');
        
        if (!empty($data)) {
            // Headers
            fputcsv($output, array_keys($data[0]));
            
            // Data
            foreach ($data as $row) {
                fputcsv($output, $row);
            }
        }
        
        fclose($output);
    }
    
    private function formatTimestamp($timestamp) {
        $time = strtotime($timestamp);
        $now = time();
        $diff = $now - $time;
        
        if ($diff < 60) {
            return 'just now';
        } elseif ($diff < 3600) {
            return floor($diff / 60) . ' minutes ago';
        } elseif ($diff < 86400) {
            return floor($diff / 3600) . ' hours ago';
        } elseif ($diff < 604800) {
            return floor($diff / 86400) . ' days ago';
        } else {
            return date('M j, Y', $time);
        }
    }
    
    private function logAuditEvent($action, $details, $status = 'success') {
        try {
            $stmt = $this->db->prepare("
                INSERT INTO audit_logs (user_id, action, details, ip_address, status) 
                VALUES (?, ?, ?, ?, ?)
            ");
            $stmt->execute([
                $_SESSION['user_id'] ?? null,
                $action,
                $details,
                $_SERVER['REMOTE_ADDR'] ?? null,
                $status
            ]);
        } catch (Exception $e) {
            // Log error but don't throw to prevent breaking the main operation
            error_log('Failed to log audit event: ' . $e->getMessage());
        }
    }
}
