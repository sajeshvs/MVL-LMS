<?php
/**
 * MVL-LMS User Management Controller
 * Handles user CRUD operations, permissions, and management
 */

require_once __DIR__ . '/../models/User.php';

class UserController {
    private $userModel;
    
    public function __construct($db) {
        $this->userModel = new User($db);
    }
    
    /**
     * Get all users with optional filtering
     */
    public function getUsers() {
        try {
            $role = $_GET['role'] ?? null;
            $status = $_GET['status'] ?? null;
            $search = $_GET['search'] ?? null;
            $page = isset($_GET['page']) ? (int)$_GET['page'] : 1;
            $limit = isset($_GET['limit']) ? (int)$_GET['limit'] : 20;
            
            $filters = [
                'role' => $role,
                'status' => $status,
                'search' => $search
            ];
            
            $result = $this->userModel->getUsers($filters, $page, $limit);
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $result['users'],
                'total' => $result['total'],
                'page' => $page,
                'limit' => $limit
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch users: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Get single user by ID
     */
    public function getUser($id) {
        try {
            $user = $this->userModel->getUserById($id);
            
            if (!$user) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'User not found'
                ]);
                return;
            }
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $user
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch user: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Create new user
     */
    public function createUser() {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Validate required fields
            $required = ['username', 'email', 'password', 'first_name', 'last_name'];
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
            
            // Validate email format
            if (!filter_var($input['email'], FILTER_VALIDATE_EMAIL)) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Invalid email format'
                ]);
                return;
            }
            
            // Check if user already exists
            if ($this->userModel->getUserByEmail($input['email'])) {
                http_response_code(409);
                echo json_encode([
                    'success' => false,
                    'message' => 'User with this email already exists'
                ]);
                return;
            }
            
            if ($this->userModel->getUserByUsername($input['username'])) {
                http_response_code(409);
                echo json_encode([
                    'success' => false,
                    'message' => 'Username already taken'
                ]);
                return;
            }
            
            $userData = [
                'username' => $input['username'],
                'email' => $input['email'],
                'password' => $input['password'],
                'first_name' => $input['first_name'],
                'last_name' => $input['last_name'],
                'role' => $input['role'] ?? 'learner',
                'status' => $input['status'] ?? 'active',
                'phone' => $input['phone'] ?? null,
                'department' => $input['department'] ?? null,
                'job_title' => $input['job_title'] ?? null,
                'hire_date' => $input['hire_date'] ?? null,
                'created_by' => $_SESSION['user_id'] ?? null
            ];
            
            $userId = $this->userModel->createUser($userData);
            
            if ($userId) {
                $user = $this->userModel->getUserById($userId);
                http_response_code(201);
                echo json_encode([
                    'success' => true,
                    'message' => 'User created successfully',
                    'data' => $user
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to create user'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to create user: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Update existing user
     */
    public function updateUser($id) {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            
            // Check if user exists
            $existingUser = $this->userModel->getUserById($id);
            if (!$existingUser) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'User not found'
                ]);
                return;
            }
            
            // Prepare update data
            $updateData = [];
            $allowedFields = ['first_name', 'last_name', 'email', 'phone', 'department', 'job_title', 'role', 'status'];
            
            foreach ($allowedFields as $field) {
                if (isset($input[$field])) {
                    $updateData[$field] = $input[$field];
                }
            }
            
            // Validate email if provided
            if (isset($updateData['email']) && !filter_var($updateData['email'], FILTER_VALIDATE_EMAIL)) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'Invalid email format'
                ]);
                return;
            }
            
            // Check for email uniqueness if email is being updated
            if (isset($updateData['email']) && $updateData['email'] !== $existingUser['email']) {
                if ($this->userModel->getUserByEmail($updateData['email'])) {
                    http_response_code(409);
                    echo json_encode([
                        'success' => false,
                        'message' => 'Email already in use by another user'
                    ]);
                    return;
                }
            }
            
            $updateData['updated_by'] = $_SESSION['user_id'] ?? null;
            
            $success = $this->userModel->updateUser($id, $updateData);
            
            if ($success) {
                $user = $this->userModel->getUserById($id);
                http_response_code(200);
                echo json_encode([
                    'success' => true,
                    'message' => 'User updated successfully',
                    'data' => $user
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to update user'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to update user: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Delete user
     */
    public function deleteUser($id) {
        try {
            $user = $this->userModel->getUserById($id);
            if (!$user) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'User not found'
                ]);
                return;
            }
            
            // Prevent deleting the last super admin
            if ($user['role'] === 'super_admin') {
                $adminCount = $this->userModel->countUsersByRole('super_admin');
                if ($adminCount <= 1) {
                    http_response_code(400);
                    echo json_encode([
                        'success' => false,
                        'message' => 'Cannot delete the last super admin'
                    ]);
                    return;
                }
            }
            
            $success = $this->userModel->deleteUser($id);
            
            if ($success) {
                http_response_code(200);
                echo json_encode([
                    'success' => true,
                    'message' => 'User deleted successfully'
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to delete user'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to delete user: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Reset user password
     */
    public function resetUserPassword($id) {
        try {
            $input = json_decode(file_get_contents('php://input'), true);
            $newPassword = $input['password'] ?? null;
            
            if (empty($newPassword)) {
                http_response_code(400);
                echo json_encode([
                    'success' => false,
                    'message' => 'New password is required'
                ]);
                return;
            }
            
            $user = $this->userModel->getUserById($id);
            if (!$user) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'User not found'
                ]);
                return;
            }
            
            $success = $this->userModel->updatePassword($id, $newPassword);
            
            if ($success) {
                http_response_code(200);
                echo json_encode([
                    'success' => true,
                    'message' => 'Password reset successfully'
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to reset password'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to reset password: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Reset user progress
     */
    public function resetUserProgress($id) {
        try {
            $user = $this->userModel->getUserById($id);
            if (!$user) {
                http_response_code(404);
                echo json_encode([
                    'success' => false,
                    'message' => 'User not found'
                ]);
                return;
            }
            
            $success = $this->userModel->resetUserProgress($id);
            
            if ($success) {
                http_response_code(200);
                echo json_encode([
                    'success' => true,
                    'message' => 'User progress reset successfully'
                ]);
            } else {
                http_response_code(500);
                echo json_encode([
                    'success' => false,
                    'message' => 'Failed to reset progress'
                ]);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to reset progress: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Export users data
     */
    public function exportUsers() {
        try {
            $format = $_GET['format'] ?? 'json';
            $filters = [
                'role' => $_GET['role'] ?? null,
                'status' => $_GET['status'] ?? null
            ];
            
            $result = $this->userModel->getUsers($filters, 1, 10000); // Get all users
            $users = $result['users'];
            
            // Remove sensitive data
            foreach ($users as &$user) {
                unset($user['password_hash']);
                unset($user['password_reset_token']);
                unset($user['email_verification_token']);
            }
            
            if ($format === 'csv') {
                header('Content-Type: text/csv');
                header('Content-Disposition: attachment; filename="mvl-lms-users-' . date('Y-m-d') . '.csv"');
                
                $output = fopen('php://output', 'w');
                
                // Headers
                $headers = ['ID', 'Username', 'Email', 'First Name', 'Last Name', 'Role', 'Status', 'Created At'];
                fputcsv($output, $headers);
                
                // Data
                foreach ($users as $user) {
                    fputcsv($output, [
                        $user['id'],
                        $user['username'],
                        $user['email'],
                        $user['first_name'],
                        $user['last_name'],
                        $user['role'],
                        $user['status'],
                        $user['created_at']
                    ]);
                }
                
                fclose($output);
            } else {
                header('Content-Type: application/json');
                header('Content-Disposition: attachment; filename="mvl-lms-users-' . date('Y-m-d') . '.json"');
                echo json_encode($users, JSON_PRETTY_PRINT);
            }
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to export users: ' . $e->getMessage()
            ]);
        }
    }
    
    /**
     * Get user statistics
     */
    public function getUserStats() {
        try {
            $stats = $this->userModel->getUserStatistics();
            
            http_response_code(200);
            echo json_encode([
                'success' => true,
                'data' => $stats
            ]);
        } catch (Exception $e) {
            http_response_code(500);
            echo json_encode([
                'success' => false,
                'message' => 'Failed to fetch user statistics: ' . $e->getMessage()
            ]);
        }
    }
}
