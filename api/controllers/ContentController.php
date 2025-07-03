<?php
/**
 * MVL-LMS Content Management Controller
 * Handles content CRUD operations, versioning, and management
 */

require_once __DIR__ . '/../models/Content.php';

class ContentController {
    private $contentModel;
    
    public function __construct($db) {
        $this->contentModel = new Content($db);
    }
    
    /**
     * Get all content with optional filtering
     */
    public function getContent() {
        try {
            $type = $_GET['type'] ?? null;
            $domain = $_GET['domain'] ?? null;
            $search = $_GET['search'] ?? null;
            $status = $_GET['status'] ?? null;
            $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 20;
            
            $filters = [
                'type' => $type,
                'domain' => $domain,
                'search' => $search,
                'status' => $status
            ];
            
            $result = $this->contentModel->getContent($filters, $page, $limit);
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $result['content'],
                'total' => $result['total'],
                'page' => $page,
                'limit' => $limit
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Get single content item by ID
     */
    public function getContentItem($id) {
        try {
            $content = $this->contentModel->getContentById($id);
            
            if (!$content) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'Content not found'
                ]);
                return;
            }
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $content
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Create new content
     */
    public function createContent() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Validate required fields
            $required = ['title', 'type', 'domain'];
            foreach ($required as $field) {
                if (empty($input[$field])) {
                    http_response_code(400);
                    echo json_encode([
                        'success' => false,
                        'message' => "Field '$field' is required"
                    ]);
                    return;
                }
            }
            
            // Validate content type
            $validTypes = ['lesson', 'quiz', 'video', 'document', 'assessment'];
            if (!in_array($input['type'], $validTypes)) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Invalid content type'
                ]);
                return;
            }
            
            $contentData = [
                'title' => $input['title'],
                'type' => $input['type'],
                'domain' => $input['domain'],
                'description' => $input['description'] ?? '',
                'content_data' => $input['content_data'] ?? null,
                'metadata' => $input['metadata'] ?? null,
                'difficulty_level' => $input['difficulty_level'] ?? 'beginner',
                'estimated_duration' => $input['estimated_duration'] ?? null,
                'prerequisite_ids' => $input['prerequisite_ids'] ?? null,
                'learning_objectives' => $input['learning_objectives'] ?? null,
                'tags' => $input['tags'] ?? null,
                'status' => $input['status'] ?? 'draft',
                'created_by' => $_SESSION['user_id'] ?? null
            ];
            
            $contentId = $this->contentModel->createContent($contentData);
            
            if ($contentId) {
                $content = $this->contentModel->getContentById($contentId);
                http_response_code(201);
                echo json_encode([
                    'success' => true,
                    'message' => 'Content created successfully',
                    'data' => $content
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to create content'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to create content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Update existing content
     */
    public function updateContent($id) {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Check if content exists
            $existingContent = $this->contentModel->getContentById($id);
            if (!$existingContent) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'Content not found'
                ]);
                return;
            }
            
            // Prepare update data
            $updateData = [];
            $allowedFields = [
                'title', 'description', 'content_data', 'metadata', 
                'difficulty_level', 'estimated_duration', 'prerequisite_ids', 
                'learning_objectives', 'tags', 'status'
            ];
            
            foreach ($allowedFields as $field) {
                if (isset($input[$field])) {
                    $updateData[$field] = $input[$field];
                }
            }
            
            $updateData['updated_by'] = $_SESSION['user_id'] ?? null;
            
            $success = $this->contentModel->updateContent($id, $updateData);
            
            if ($success) {
                $content = $this->contentModel->getContentById($id);
                http_response_code(200);
                echo json_encode([
                    'success' => true,
                    'message' => 'Content updated successfully',
                    'data' => $content
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to update content'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to update content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Delete content
     */
    public function deleteContent($id) {
        try {
            $content = $this->contentModel->getContentById($id);
            if (!$content) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'Content not found'
                ]);
                return;
            }
            
            $success = $this->contentModel->deleteContent($id);
            
            if ($success) {
                http_response_code(200);
                echo json_encode([
                    'success' => true,
                    'message' => 'Content deleted successfully'
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to delete content'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to delete content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Publish content
     */
    public function publishContent($id) {
        try {
            $content = $this->contentModel->getContentById($id);
            if (!$content) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'Content not found'
                ]);
                return;
            }
            
            $success = $this->contentModel->updateContent($id, [
                'status' => 'published',
                'published_at' => date('Y-m-d H:i:s'),
                'updated_by' => $_SESSION['user_id'] ?? null
            ]);
            
            if ($success) {
                $content = $this->contentModel->getContentById($id);
                http_response_code(200);
                echo json_encode([
                    'success' => true,
                    'message' => 'Content published successfully',
                    'data' => $content
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to publish content'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to publish content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Archive content
     */
    public function archiveContent($id) {
        try {
            $content = $this->contentModel->getContentById($id);
            if (!$content) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'Content not found'
                ]);
                return;
            }
            
            $success = $this->contentModel->updateContent($id, [
                'status' => 'archived',
                'updated_by' => $_SESSION['user_id'] ?? null
            ]);
            
            if ($success) {
                $content = $this->contentModel->getContentById($id);
                http_response_code(200);
                echo json_encode([
                    'success' => true,
                    'message' => 'Content archived successfully',
                    'data' => $content
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to archive content'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to archive content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Get content by domain
     */
    public function getContentByDomain($domain) {
        try {
            $filters = ['domain' => $domain];
            $result = $this->contentModel->getContent($filters, 1, 1000);
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $result['content'],
                'total' => $result['total']
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch domain content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Import content from file
     */
    public function importContent() {
        try {
            if (!isset($_FILES['file']) || $_FILES['file']['error'] !== UPLOAD_ERR_OK) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'No file uploaded or upload error'
                ]);
                return;
            }
            
            $file = $_FILES['file'];
            $fileExt = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
            
            if ($fileExt !== 'json') {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Only JSON files are supported'
                ]);
                return;
            }
            
            $content = file_get_contents($file['tmp_name']);
            $data = json_decode($content, true);
            
            if (json_last_error() !== JSON_ERROR_NONE) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Invalid JSON format'
                ]);
                return;
            }
            
            $imported = 0;
            $errors = [];
            
            foreach ($data as $item) {
                try {
                    if (empty($item['title']) || empty($item['type']) || empty($item['domain'])) {
                        $errors[] = "Skipped item: missing required fields";
                        continue;
                    }
                    
                    $contentData = [
                        'title' => $item['title'],
                        'type' => $item['type'],
                        'domain' => $item['domain'],
                        'description' => $item['description'] ?? '',
                        'content_data' => isset($item['content_data']) ? json_encode($item['content_data']) : null,
                        'metadata' => isset($item['metadata']) ? json_encode($item['metadata']) : null,
                        'difficulty_level' => $item['difficulty_level'] ?? 'beginner',
                        'estimated_duration' => $item['estimated_duration'] ?? null,
                        'learning_objectives' => isset($item['learning_objectives']) ? json_encode($item['learning_objectives']) : null,
                        'tags' => isset($item['tags']) ? json_encode($item['tags']) : null,
                        'status' => $item['status'] ?? 'draft',
                        'created_by' => $_SESSION['user_id'] ?? null
                    ];
                    
                    $contentId = $this->contentModel->createContent($contentData);
                    if ($contentId) {
                        $imported++;
                    }
                } catch (Exception $e) {
                    $errors[] = "Error importing item '{$item['title']}': " . $e->getMessage();
                }
            }
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'message' => "Imported $imported content items",
                'imported' => $imported,
                'errors' => $errors
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to import content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Export content
     */
    public function exportContent() {
        try {
            $format = $_GET['format'] ?? 'json';
            $domain = $_GET['domain'] ?? null;
            $type = $_GET['type'] ?? null;
            
            $filters = [
                'domain' => $domain,
                'type' => $type
            ];
            
            $result = $this->contentModel->getContent($filters, 1, 10000);
            $content = $result['content'];
            
            if ($format === 'csv') {
                header('Content-Type: text/csv');
                header('Content-Disposition: attachment; filename="mvl-lms-content-' . date('Y-m-d') . '.csv"');
                
                $output = fopen('php://output', 'w');
                
                // Headers
                $headers = ['ID', 'Title', 'Type', 'Domain', 'Description', 'Status', 'Created At'];
                fputcsv($output, $headers);
                
                // Data
                foreach ($content as $item) {
                    fputcsv($output, [
                        $item['id'],
                        $item['title'],
                        $item['type'],
                        $item['domain'],
                        $item['description'],
                        $item['status'],
                        $item['created_at']
                    ]);
                }
                
                fclose($output);
            } else {
                header('Content-Type: application/json');
                header('Content-Disposition: attachment; filename="mvl-lms-content-' . date('Y-m-d') . '.json"');
                echo json_encode($content, JSON_PRETTY_PRINT);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to export content: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Get content statistics
     */
    public function getContentStats() {
        try {
            $stats = $this->contentModel->getContentStatistics();
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $stats
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch content statistics: ' . $e->getMessage()
            ]);
        }
    }
}
