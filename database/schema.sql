-- MVL-LMS MariaDB Database Schema
-- CMMC 2.0 Learning Management System
-- Created: 2024-01-15

-- Drop existing database if exists (for development only)
-- DROP DATABASE IF EXISTS mvl_lms;

-- Create database
CREATE DATABASE IF NOT EXISTS mvl_lms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE mvl_lms;

-- ============================================================================
-- USER MANAGEMENT TABLES
-- ============================================================================

-- Users table - Main user information
CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(36) UNIQUE NOT NULL DEFAULT (UUID()),
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    first_name VARCHAR(100) NOT NULL,
    last_name VARCHAR(100) NOT NULL,
    role ENUM('super_admin', 'admin', 'instructor', 'learner') DEFAULT 'learner',
    status ENUM('active', 'inactive', 'suspended', 'pending') DEFAULT 'pending',
    phone VARCHAR(20),
    department VARCHAR(100),
    job_title VARCHAR(100),
    hire_date DATE,
    last_login TIMESTAMP NULL,
    last_login_ip VARCHAR(45),
    password_reset_token VARCHAR(255),
    password_reset_expires TIMESTAMP NULL,
    email_verified_at TIMESTAMP NULL,
    email_verification_token VARCHAR(255),
    preferences JSON DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by INT,
    updated_by INT,
    INDEX idx_email (email),
    INDEX idx_role (role),
    INDEX idx_status (status),
    INDEX idx_last_login (last_login),
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);

-- User sessions table - Track active sessions
CREATE TABLE user_sessions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    session_token VARCHAR(255) UNIQUE NOT NULL,
    session_data JSON,
    ip_address VARCHAR(45),
    user_agent TEXT,
    expires_at TIMESTAMP NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    last_activity TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id),
    INDEX idx_session_token (session_token),
    INDEX idx_expires_at (expires_at),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- User permissions table - Granular permissions
CREATE TABLE user_permissions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    permission_name VARCHAR(100) NOT NULL,
    permission_value BOOLEAN DEFAULT TRUE,
    granted_by INT,
    granted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    expires_at TIMESTAMP NULL,
    UNIQUE KEY unique_user_permission (user_id, permission_name),
    INDEX idx_user_id (user_id),
    INDEX idx_permission_name (permission_name),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (granted_by) REFERENCES users(id) ON DELETE SET NULL
);

-- ============================================================================
-- CONTENT MANAGEMENT TABLES
-- ============================================================================

-- CMMC domains table
CREATE TABLE cmmc_domains (
    id INT AUTO_INCREMENT PRIMARY KEY,
    domain_code VARCHAR(10) UNIQUE NOT NULL, -- AC, AU, AT, etc.
    domain_name VARCHAR(255) NOT NULL,
    domain_description TEXT,
    domain_order INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- CMMC practices table
CREATE TABLE cmmc_practices (
    id INT AUTO_INCREMENT PRIMARY KEY,
    domain_id INT NOT NULL,
    practice_code VARCHAR(20) UNIQUE NOT NULL, -- AC.L1-3.1.1, etc.
    practice_title VARCHAR(500) NOT NULL,
    practice_description TEXT,
    maturity_level ENUM('L1', 'L2', 'L3') NOT NULL,
    nist_reference VARCHAR(100),
    implementation_guidance TEXT,
    assessment_guidance TEXT,
    practice_order INT NOT NULL,
    is_active BOOLEAN DEFAULT TRUE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_domain_id (domain_id),
    INDEX idx_practice_code (practice_code),
    INDEX idx_maturity_level (maturity_level),
    FOREIGN KEY (domain_id) REFERENCES cmmc_domains(id) ON DELETE CASCADE
);

-- Content items table - Lessons, articles, resources
CREATE TABLE content_items (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(36) UNIQUE NOT NULL DEFAULT (UUID()),
    practice_id INT,
    title VARCHAR(500) NOT NULL,
    slug VARCHAR(255) UNIQUE NOT NULL,
    content_type ENUM('lesson', 'article', 'video', 'document', 'quiz', 'assessment') NOT NULL,
    content_body LONGTEXT,
    excerpt TEXT,
    featured_image VARCHAR(500),
    meta_data JSON DEFAULT '{}',
    status ENUM('draft', 'published', 'archived') DEFAULT 'draft',
    visibility ENUM('public', 'members', 'restricted') DEFAULT 'members',
    content_order INT DEFAULT 0,
    estimated_duration INT DEFAULT 0, -- in minutes
    difficulty_level ENUM('beginner', 'intermediate', 'advanced') DEFAULT 'beginner',
    prerequisites JSON DEFAULT '[]',
    learning_objectives JSON DEFAULT '[]',
    tags JSON DEFAULT '[]',
    version VARCHAR(20) DEFAULT '1.0',
    parent_id INT NULL, -- For content revisions
    published_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by INT,
    updated_by INT,
    INDEX idx_practice_id (practice_id),
    INDEX idx_content_type (content_type),
    INDEX idx_status (status),
    INDEX idx_slug (slug),
    INDEX idx_parent_id (parent_id),
    FOREIGN KEY (practice_id) REFERENCES cmmc_practices(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (parent_id) REFERENCES content_items(id) ON DELETE SET NULL
);

-- Media library table
CREATE TABLE media_library (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(36) UNIQUE NOT NULL DEFAULT (UUID()),
    filename VARCHAR(255) NOT NULL,
    original_filename VARCHAR(255) NOT NULL,
    file_path VARCHAR(500) NOT NULL,
    file_size BIGINT NOT NULL,
    mime_type VARCHAR(100) NOT NULL,
    file_hash VARCHAR(64) NOT NULL,
    alt_text VARCHAR(255),
    caption TEXT,
    metadata JSON DEFAULT '{}',
    is_public BOOLEAN DEFAULT FALSE,
    uploaded_by INT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_filename (filename),
    INDEX idx_mime_type (mime_type),
    INDEX idx_uploaded_by (uploaded_by),
    FOREIGN KEY (uploaded_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Content media associations
CREATE TABLE content_media (
    id INT AUTO_INCREMENT PRIMARY KEY,
    content_id INT NOT NULL,
    media_id INT NOT NULL,
    media_role ENUM('featured', 'inline', 'attachment', 'thumbnail') DEFAULT 'inline',
    display_order INT DEFAULT 0,
    UNIQUE KEY unique_content_media_role (content_id, media_id, media_role),
    INDEX idx_content_id (content_id),
    INDEX idx_media_id (media_id),
    FOREIGN KEY (content_id) REFERENCES content_items(id) ON DELETE CASCADE,
    FOREIGN KEY (media_id) REFERENCES media_library(id) ON DELETE CASCADE
);

-- ============================================================================
-- QUIZ AND ASSESSMENT TABLES
-- ============================================================================

-- Quizzes table
CREATE TABLE quizzes (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(36) UNIQUE NOT NULL DEFAULT (UUID()),
    content_id INT,
    title VARCHAR(500) NOT NULL,
    description TEXT,
    instructions TEXT,
    quiz_type ENUM('practice', 'assessment', 'certification') DEFAULT 'practice',
    time_limit INT DEFAULT 0, -- in minutes, 0 = no limit
    max_attempts INT DEFAULT 0, -- 0 = unlimited
    passing_score DECIMAL(5,2) DEFAULT 70.00,
    randomize_questions BOOLEAN DEFAULT FALSE,
    show_correct_answers BOOLEAN DEFAULT TRUE,
    show_score_immediately BOOLEAN DEFAULT TRUE,
    is_active BOOLEAN DEFAULT TRUE,
    available_from TIMESTAMP NULL,
    available_until TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by INT,
    updated_by INT,
    INDEX idx_content_id (content_id),
    INDEX idx_quiz_type (quiz_type),
    INDEX idx_is_active (is_active),
    FOREIGN KEY (content_id) REFERENCES content_items(id) ON DELETE SET NULL,
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);

-- Quiz questions table
CREATE TABLE quiz_questions (
    id INT AUTO_INCREMENT PRIMARY KEY,
    uuid VARCHAR(36) UNIQUE NOT NULL DEFAULT (UUID()),
    quiz_id INT NOT NULL,
    question_type ENUM('multiple_choice', 'true_false', 'short_answer', 'essay', 'matching', 'ordering') NOT NULL,
    question_text TEXT NOT NULL,
    question_explanation TEXT,
    points DECIMAL(5,2) DEFAULT 1.00,
    question_order INT DEFAULT 0,
    is_required BOOLEAN DEFAULT TRUE,
    metadata JSON DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    INDEX idx_quiz_id (quiz_id),
    INDEX idx_question_type (question_type),
    INDEX idx_question_order (question_order),
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- Quiz question options table
CREATE TABLE quiz_question_options (
    id INT AUTO_INCREMENT PRIMARY KEY,
    question_id INT NOT NULL,
    option_text TEXT NOT NULL,
    is_correct BOOLEAN DEFAULT FALSE,
    option_order INT DEFAULT 0,
    explanation TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_question_id (question_id),
    INDEX idx_option_order (option_order),
    FOREIGN KEY (question_id) REFERENCES quiz_questions(id) ON DELETE CASCADE
);

-- ============================================================================
-- USER PROGRESS AND TRACKING TABLES
-- ============================================================================

-- User progress on content
CREATE TABLE user_content_progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    content_id INT NOT NULL,
    status ENUM('not_started', 'in_progress', 'completed', 'skipped') DEFAULT 'not_started',
    progress_percentage DECIMAL(5,2) DEFAULT 0.00,
    time_spent INT DEFAULT 0, -- in seconds
    first_accessed TIMESTAMP NULL,
    last_accessed TIMESTAMP NULL,
    completed_at TIMESTAMP NULL,
    notes TEXT,
    metadata JSON DEFAULT '{}',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_user_content (user_id, content_id),
    INDEX idx_user_id (user_id),
    INDEX idx_content_id (content_id),
    INDEX idx_status (status),
    INDEX idx_completed_at (completed_at),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (content_id) REFERENCES content_items(id) ON DELETE CASCADE
);

-- User quiz attempts
CREATE TABLE user_quiz_attempts (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    quiz_id INT NOT NULL,
    attempt_number INT NOT NULL,
    status ENUM('in_progress', 'completed', 'abandoned', 'expired') DEFAULT 'in_progress',
    score DECIMAL(5,2) DEFAULT 0.00,
    max_score DECIMAL(5,2) NOT NULL,
    percentage DECIMAL(5,2) DEFAULT 0.00,
    time_taken INT DEFAULT 0, -- in seconds
    started_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    completed_at TIMESTAMP NULL,
    metadata JSON DEFAULT '{}',
    INDEX idx_user_id (user_id),
    INDEX idx_quiz_id (quiz_id),
    INDEX idx_status (status),
    INDEX idx_completed_at (completed_at),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (quiz_id) REFERENCES quizzes(id) ON DELETE CASCADE
);

-- User quiz answers
CREATE TABLE user_quiz_answers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    attempt_id INT NOT NULL,
    question_id INT NOT NULL,
    answer_text TEXT,
    selected_options JSON DEFAULT '[]', -- For multiple choice/checkbox
    is_correct BOOLEAN DEFAULT FALSE,
    points_earned DECIMAL(5,2) DEFAULT 0.00,
    time_taken INT DEFAULT 0, -- in seconds
    answered_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE KEY unique_attempt_question (attempt_id, question_id),
    INDEX idx_attempt_id (attempt_id),
    INDEX idx_question_id (question_id),
    INDEX idx_is_correct (is_correct),
    FOREIGN KEY (attempt_id) REFERENCES user_quiz_attempts(id) ON DELETE CASCADE,
    FOREIGN KEY (question_id) REFERENCES quiz_questions(id) ON DELETE CASCADE
);

-- User domain progress summary
CREATE TABLE user_domain_progress (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    domain_id INT NOT NULL,
    total_practices INT DEFAULT 0,
    completed_practices INT DEFAULT 0,
    completion_percentage DECIMAL(5,2) DEFAULT 0.00,
    average_score DECIMAL(5,2) DEFAULT 0.00,
    time_spent INT DEFAULT 0, -- in seconds
    last_activity TIMESTAMP NULL,
    certification_date TIMESTAMP NULL,
    certification_expiry TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    UNIQUE KEY unique_user_domain (user_id, domain_id),
    INDEX idx_user_id (user_id),
    INDEX idx_domain_id (domain_id),
    INDEX idx_completion_percentage (completion_percentage),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE,
    FOREIGN KEY (domain_id) REFERENCES cmmc_domains(id) ON DELETE CASCADE
);

-- ============================================================================
-- SYSTEM CONFIGURATION TABLES
-- ============================================================================

-- System settings
CREATE TABLE system_settings (
    id INT AUTO_INCREMENT PRIMARY KEY,
    setting_key VARCHAR(100) UNIQUE NOT NULL,
    setting_value TEXT,
    setting_type ENUM('string', 'integer', 'boolean', 'json', 'encrypted') DEFAULT 'string',
    category VARCHAR(50) DEFAULT 'general',
    description TEXT,
    is_public BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    updated_by INT,
    INDEX idx_setting_key (setting_key),
    INDEX idx_category (category),
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);

-- SSO configuration
CREATE TABLE sso_configurations (
    id INT AUTO_INCREMENT PRIMARY KEY,
    provider_name VARCHAR(100) NOT NULL,
    provider_type ENUM('microsoft_entra', 'google', 'okta', 'saml', 'ldap') NOT NULL,
    is_enabled BOOLEAN DEFAULT FALSE,
    is_primary BOOLEAN DEFAULT FALSE,
    configuration JSON NOT NULL,
    group_mappings JSON DEFAULT '[]',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_by INT,
    updated_by INT,
    INDEX idx_provider_type (provider_type),
    INDEX idx_is_enabled (is_enabled),
    FOREIGN KEY (created_by) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (updated_by) REFERENCES users(id) ON DELETE SET NULL
);

-- ============================================================================
-- AUDIT AND LOGGING TABLES
-- ============================================================================

-- Audit log
CREATE TABLE audit_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,
    session_id INT,
    action VARCHAR(100) NOT NULL,
    entity_type VARCHAR(100),
    entity_id INT,
    old_values JSON,
    new_values JSON,
    metadata JSON DEFAULT '{}',
    ip_address VARCHAR(45),
    user_agent TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_user_id (user_id),
    INDEX idx_action (action),
    INDEX idx_entity_type (entity_type),
    INDEX idx_entity_id (entity_id),
    INDEX idx_created_at (created_at),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL,
    FOREIGN KEY (session_id) REFERENCES user_sessions(id) ON DELETE SET NULL
);

-- System logs
CREATE TABLE system_logs (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    level ENUM('emergency', 'alert', 'critical', 'error', 'warning', 'notice', 'info', 'debug') NOT NULL,
    message TEXT NOT NULL,
    context JSON DEFAULT '{}',
    channel VARCHAR(100) DEFAULT 'application',
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_level (level),
    INDEX idx_channel (channel),
    INDEX idx_created_at (created_at)
);

-- ============================================================================
-- NOTIFICATIONS AND COMMUNICATIONS
-- ============================================================================

-- User notifications
CREATE TABLE user_notifications (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    type ENUM('info', 'success', 'warning', 'error', 'reminder') DEFAULT 'info',
    title VARCHAR(255) NOT NULL,
    message TEXT NOT NULL,
    action_url VARCHAR(500),
    is_read BOOLEAN DEFAULT FALSE,
    is_important BOOLEAN DEFAULT FALSE,
    expires_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    read_at TIMESTAMP NULL,
    INDEX idx_user_id (user_id),
    INDEX idx_type (type),
    INDEX idx_is_read (is_read),
    INDEX idx_created_at (created_at),
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

-- Email queue
CREATE TABLE email_queue (
    id INT AUTO_INCREMENT PRIMARY KEY,
    to_email VARCHAR(255) NOT NULL,
    to_name VARCHAR(255),
    from_email VARCHAR(255),
    from_name VARCHAR(255),
    subject VARCHAR(500) NOT NULL,
    body_html LONGTEXT,
    body_text LONGTEXT,
    template_name VARCHAR(100),
    template_data JSON DEFAULT '{}',
    priority INT DEFAULT 3, -- 1=high, 3=normal, 5=low
    status ENUM('pending', 'sent', 'failed', 'cancelled') DEFAULT 'pending',
    attempts INT DEFAULT 0,
    max_attempts INT DEFAULT 3,
    error_message TEXT,
    scheduled_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    sent_at TIMESTAMP NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    INDEX idx_status (status),
    INDEX idx_scheduled_at (scheduled_at),
    INDEX idx_priority (priority)
);

-- ============================================================================
-- INITIAL DATA INSERTION
-- ============================================================================

-- Insert CMMC 2.0 domains
INSERT INTO cmmc_domains (domain_code, domain_name, domain_description, domain_order) VALUES
('AC', 'Access Control', 'Limit information system access to authorized users, processes, and devices, and to authorized types of transactions and functions.', 1),
('AT', 'Awareness and Training', 'Ensure that managers, system administrators, and users of organizational information systems are made aware of the security risks associated with their activities and of the applicable laws, policies, and procedures related to the information system, and that they are adequately trained to carry out their assigned information security-related duties and responsibilities.', 2),
('AU', 'Audit and Accountability', 'Create, protect, and retain information system audit records to the extent needed to enable the monitoring, analysis, investigation, and reporting of unlawful, unauthorized, or inappropriate information system activity, and to verify the effectiveness of existing security controls.', 3),
('CA', 'Assessment, Authorization, and Monitoring', 'Periodically assess the security controls in organizational information systems to determine if the controls are effective in their application; develop and implement plans of action designed to correct deficiencies and reduce or eliminate vulnerabilities in organizational information systems; authorize the operation of organizational information systems and any associated information system connections; and monitor information system security controls on an ongoing basis to ensure the continued effectiveness of the controls.', 4),
('CM', 'Configuration Management', 'Establish and maintain baseline configurations and inventories of organizational information systems (including hardware, software, firmware, and documentation) throughout the respective system development life cycles; and control and monitor changes to the configurations and conduct impact analyses of changes.', 5),
('CP', 'Contingency Planning', 'Establish, maintain, and effectively implement plans for emergency response, backup operations, and post-disaster recovery for organizational information systems to ensure the availability of critical information resources and continuity of operations in emergency situations.', 6),
('IA', 'Identification and Authentication', 'Identify information system users, processes acting on behalf of users, or devices accessing the information system and authenticate (or verify) the identities of those users, processes, or devices, as a prerequisite to allowing access to organizational information systems.', 7),
('IR', 'Incident Response', 'Establish an operational incident-handling capability for organizational information systems that includes adequate preparation, detection, analysis, containment, recovery, and user response activities; and track, document, and report incidents to designated officials and/or authorities both internal and external to the organization.', 8),
('MA', 'Maintenance', 'Perform periodic and timely maintenance on organizational information systems; and provide effective controls on the tools, techniques, workmanship, and procedures used for information system maintenance.', 9),
('MP', 'Media Protection', 'Protect information system media, both paper and digital; limit access to information on information system media to authorized users; and sanitize or destroy information system media before disposal or release for reuse.', 10),
('PE', 'Physical and Environmental Protection', 'Limit physical access to information systems, equipment, and the respective operating environments to authorized individuals; protect the physical plant and support infrastructure for information systems; provide supporting utilities for information systems; protect information systems against environmental hazards; and provide appropriate environmental controls in facilities containing information systems.', 11),
('PS', 'Personnel Security', 'Ensure that individuals occupying positions of responsibility within organizations (including third-party service providers) are trustworthy and meet established security criteria for those positions; ensure that organizational information and information systems are protected during and after personnel actions such as terminations and transfers; and employ formal sanctions for personnel failing to comply with organizational security policies and procedures.', 12),
('RA', 'Risk Assessment', 'Periodically assess the risk to organizational operations (including mission, functions, image, or reputation), organizational assets, and individuals, resulting from the operation of organizational information systems and the associated processing, storage, or transmission of organizational information.', 13),
('SA', 'System and Services Acquisition', 'Allocate sufficient resources to adequately protect organizational information systems; employ system development life cycle processes that incorporate information security considerations; employ software usage and installation restrictions; and ensure third-party providers employ adequate security measures to protect information, applications, and/or services outsourced from the organization.', 14),
('SC', 'System and Communications Protection', 'Monitor, control, and protect organizational communications (i.e., information transmitted or received by organizational information systems) at the external boundaries and key internal boundaries of the information systems; and employ architectural designs, software development techniques, and systems engineering principles that promote effective information security within organizational information systems.', 15),
('SI', 'System and Information Integrity', 'Identify, report, and correct information and information system flaws in a timely manner; provide protection from malicious code at appropriate locations within organizational information systems; and monitor information system security alerts and advisories and take appropriate actions in response.', 16);

-- Insert default super admin user (password: Admin123!)
INSERT INTO users (username, email, password_hash, first_name, last_name, role, status, email_verified_at) VALUES
('admin', 'admin@mvl-group.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'System', 'Administrator', 'super_admin', 'active', NOW());

-- Insert default system settings
INSERT INTO system_settings (setting_key, setting_value, setting_type, category, description, is_public) VALUES
('platform_name', 'MVL-LMS', 'string', 'branding', 'Platform display name', TRUE),
('platform_version', '2.0.0', 'string', 'system', 'Current platform version', TRUE),
('session_timeout', '3600', 'integer', 'security', 'Session timeout in seconds', FALSE),
('max_login_attempts', '5', 'integer', 'security', 'Maximum login attempts before lockout', FALSE),
('require_email_verification', 'true', 'boolean', 'security', 'Require email verification for new accounts', FALSE),
('enable_audit_logging', 'true', 'boolean', 'security', 'Enable comprehensive audit logging', FALSE),
('default_user_role', 'learner', 'string', 'users', 'Default role for new users', FALSE),
('enable_sso', 'false', 'boolean', 'authentication', 'Enable SSO authentication', FALSE),
('maintenance_mode', 'false', 'boolean', 'system', 'Enable maintenance mode', FALSE),
('backup_enabled', 'true', 'boolean', 'system', 'Enable automatic backups', FALSE);

-- Create indexes for performance
CREATE INDEX idx_audit_logs_user_action ON audit_logs(user_id, action, created_at);
CREATE INDEX idx_user_content_progress_summary ON user_content_progress(user_id, status, completed_at);
CREATE INDEX idx_user_quiz_attempts_summary ON user_quiz_attempts(user_id, quiz_id, status, completed_at);

-- ============================================================================
-- VIEWS FOR COMMON QUERIES
-- ============================================================================

-- User summary view
CREATE VIEW view_user_summary AS
SELECT 
    u.id,
    u.uuid,
    u.username,
    u.email,
    CONCAT(u.first_name, ' ', u.last_name) as full_name,
    u.role,
    u.status,
    u.last_login,
    u.created_at,
    COUNT(DISTINCT ucp.id) as total_content_items,
    COUNT(DISTINCT CASE WHEN ucp.status = 'completed' THEN ucp.id END) as completed_content,
    ROUND(
        (COUNT(DISTINCT CASE WHEN ucp.status = 'completed' THEN ucp.id END) * 100.0) / 
        NULLIF(COUNT(DISTINCT ucp.id), 0), 
        2
    ) as overall_progress_percentage,
    AVG(uqa.percentage) as average_quiz_score
FROM users u
LEFT JOIN user_content_progress ucp ON u.id = ucp.user_id
LEFT JOIN user_quiz_attempts uqa ON u.id = uqa.user_id AND uqa.status = 'completed'
GROUP BY u.id, u.uuid, u.username, u.email, u.first_name, u.last_name, u.role, u.status, u.last_login, u.created_at;

-- Content summary view
CREATE VIEW view_content_summary AS
SELECT 
    ci.id,
    ci.uuid,
    ci.title,
    ci.content_type,
    ci.status,
    cd.domain_name,
    cp.practice_code,
    ci.created_at,
    ci.updated_at,
    COUNT(DISTINCT ucp.user_id) as total_users_accessed,
    COUNT(DISTINCT CASE WHEN ucp.status = 'completed' THEN ucp.user_id END) as users_completed,
    ROUND(
        (COUNT(DISTINCT CASE WHEN ucp.status = 'completed' THEN ucp.user_id END) * 100.0) / 
        NULLIF(COUNT(DISTINCT ucp.user_id), 0), 
        2
    ) as completion_rate
FROM content_items ci
LEFT JOIN cmmc_practices cp ON ci.practice_id = cp.id
LEFT JOIN cmmc_domains cd ON cp.domain_id = cd.id
LEFT JOIN user_content_progress ucp ON ci.id = ucp.content_id
GROUP BY ci.id, ci.uuid, ci.title, ci.content_type, ci.status, cd.domain_name, cp.practice_code, ci.created_at, ci.updated_at;

-- Domain progress view
CREATE VIEW view_domain_progress AS
SELECT 
    cd.id as domain_id,
    cd.domain_code,
    cd.domain_name,
    COUNT(DISTINCT cp.id) as total_practices,
    COUNT(DISTINCT ci.id) as total_content_items,
    COUNT(DISTINCT u.id) as total_users,
    COUNT(DISTINCT ucp.user_id) as users_with_progress,
    AVG(udp.completion_percentage) as avg_completion_percentage
FROM cmmc_domains cd
LEFT JOIN cmmc_practices cp ON cd.id = cp.domain_id
LEFT JOIN content_items ci ON cp.id = ci.practice_id
LEFT JOIN users u ON u.status = 'active'
LEFT JOIN user_content_progress ucp ON ci.id = ucp.content_id
LEFT JOIN user_domain_progress udp ON cd.id = udp.domain_id
GROUP BY cd.id, cd.domain_code, cd.domain_name;

-- ============================================================================
-- STORED PROCEDURES
-- ============================================================================

DELIMITER $$

-- Update user domain progress
CREATE PROCEDURE UpdateUserDomainProgress(IN p_user_id INT, IN p_domain_id INT)
BEGIN
    DECLARE v_total_practices INT DEFAULT 0;
    DECLARE v_completed_practices INT DEFAULT 0;
    DECLARE v_completion_percentage DECIMAL(5,2) DEFAULT 0.00;
    DECLARE v_average_score DECIMAL(5,2) DEFAULT 0.00;
    DECLARE v_time_spent INT DEFAULT 0;
    
    -- Calculate totals
    SELECT COUNT(*) INTO v_total_practices
    FROM cmmc_practices cp
    INNER JOIN content_items ci ON cp.id = ci.practice_id
    WHERE cp.domain_id = p_domain_id AND ci.status = 'published';
    
    -- Calculate completed
    SELECT 
        COUNT(*),
        COALESCE(SUM(ucp.time_spent), 0)
    INTO v_completed_practices, v_time_spent
    FROM cmmc_practices cp
    INNER JOIN content_items ci ON cp.id = ci.practice_id
    INNER JOIN user_content_progress ucp ON ci.id = ucp.content_id
    WHERE cp.domain_id = p_domain_id 
        AND ci.status = 'published'
        AND ucp.user_id = p_user_id 
        AND ucp.status = 'completed';
    
    -- Calculate completion percentage
    IF v_total_practices > 0 THEN
        SET v_completion_percentage = (v_completed_practices * 100.0) / v_total_practices;
    END IF;
    
    -- Calculate average quiz score for this domain
    SELECT COALESCE(AVG(uqa.percentage), 0) INTO v_average_score
    FROM user_quiz_attempts uqa
    INNER JOIN quizzes q ON uqa.quiz_id = q.id
    INNER JOIN content_items ci ON q.content_id = ci.id
    INNER JOIN cmmc_practices cp ON ci.practice_id = cp.id
    WHERE cp.domain_id = p_domain_id 
        AND uqa.user_id = p_user_id 
        AND uqa.status = 'completed';
    
    -- Insert or update domain progress
    INSERT INTO user_domain_progress 
    (user_id, domain_id, total_practices, completed_practices, completion_percentage, average_score, time_spent, last_activity)
    VALUES 
    (p_user_id, p_domain_id, v_total_practices, v_completed_practices, v_completion_percentage, v_average_score, v_time_spent, NOW())
    ON DUPLICATE KEY UPDATE
        total_practices = v_total_practices,
        completed_practices = v_completed_practices,
        completion_percentage = v_completion_percentage,
        average_score = v_average_score,
        time_spent = v_time_spent,
        last_activity = NOW(),
        updated_at = NOW();
        
END$$

-- Log audit action
CREATE PROCEDURE LogAuditAction(
    IN p_user_id INT,
    IN p_session_id INT,
    IN p_action VARCHAR(100),
    IN p_entity_type VARCHAR(100),
    IN p_entity_id INT,
    IN p_old_values JSON,
    IN p_new_values JSON,
    IN p_ip_address VARCHAR(45),
    IN p_user_agent TEXT
)
BEGIN
    INSERT INTO audit_logs 
    (user_id, session_id, action, entity_type, entity_id, old_values, new_values, ip_address, user_agent, created_at)
    VALUES 
    (p_user_id, p_session_id, p_action, p_entity_type, p_entity_id, p_old_values, p_new_values, p_ip_address, p_user_agent, NOW());
END$$

DELIMITER ;

-- Grant permissions (adjust as needed for your environment)
-- GRANT ALL PRIVILEGES ON mvl_lms.* TO 'mvl_user'@'localhost' IDENTIFIED BY 'your_secure_password';
-- FLUSH PRIVILEGES;

-- ============================================================================
-- SCHEMA COMPLETE
-- ============================================================================
