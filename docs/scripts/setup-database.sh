#!/bin/bash

# MVL-LMS Database Setup Script
# This script sets up the MariaDB database for MVL-LMS

echo "=== MVL-LMS Database Setup ==="

# Configuration
DB_NAME="mvl_lms"
DB_USER="mvl_user"
DB_PASSWORD="mvl_secure_pass_2024!"
DB_ROOT_PASSWORD=""

# Check if MariaDB is installed
if ! command -v mysql &> /dev/null; then
    echo "Error: MariaDB/MySQL is not installed."
    echo "Please install MariaDB first:"
    echo "- Ubuntu/Debian: sudo apt install mariadb-server"
    echo "- CentOS/RHEL: sudo yum install mariadb-server"
    echo "- Windows: Download from https://mariadb.org/download/"
    exit 1
fi

# Check if MariaDB service is running
if ! systemctl is-active --quiet mariadb 2>/dev/null && ! systemctl is-active --quiet mysql 2>/dev/null; then
    echo "MariaDB service is not running. Starting it..."
    sudo systemctl start mariadb || sudo systemctl start mysql
fi

echo "Creating database and user..."

# Create database and user
mysql -u root -p"$DB_ROOT_PASSWORD" << EOF
-- Create database
CREATE DATABASE IF NOT EXISTS $DB_NAME CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- Create user
CREATE USER IF NOT EXISTS '$DB_USER'@'localhost' IDENTIFIED BY '$DB_PASSWORD';

-- Grant privileges
GRANT ALL PRIVILEGES ON $DB_NAME.* TO '$DB_USER'@'localhost';
FLUSH PRIVILEGES;

-- Show databases
SHOW DATABASES;
EOF

if [ $? -eq 0 ]; then
    echo "✓ Database and user created successfully"
else
    echo "✗ Failed to create database and user"
    exit 1
fi

echo "Importing database schema..."

# Import schema
mysql -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" < database/schema.sql

if [ $? -eq 0 ]; then
    echo "✓ Database schema imported successfully"
else
    echo "✗ Failed to import database schema"
    exit 1
fi

echo "Creating default admin user..."

# Create default admin user
mysql -u "$DB_USER" -p"$DB_PASSWORD" "$DB_NAME" << EOF
-- Insert default admin user
INSERT INTO users (
    username, 
    email, 
    password_hash, 
    first_name, 
    last_name, 
    role, 
    status,
    email_verified_at
) VALUES (
    'admin',
    'admin@mvl-group.com',
    '\$2y\$10\$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', -- password: 'password'
    'Admin',
    'User',
    'super_admin',
    'active',
    NOW()
) ON DUPLICATE KEY UPDATE email = email;

-- Insert sample domains
INSERT INTO domains (code, title, description) VALUES
('AC', 'Access Control', 'Limit information system access to authorized users, processes, and devices'),
('AT', 'Awareness and Training', 'Ensure that personnel are trained in cybersecurity awareness'),
('AU', 'Audit and Accountability', 'Create and retain system audit logs and records'),
('CA', 'Assessment, Authorization, and Monitoring', 'Periodically assess security controls'),
('CM', 'Configuration Management', 'Establish and maintain baseline configurations'),
('CP', 'Contingency Planning', 'Establish and maintain plans for emergency response'),
('IA', 'Identification and Authentication', 'Identify and authenticate users and processes'),
('IR', 'Incident Response', 'Establish and maintain an incident response capability'),
('MA', 'Maintenance', 'Perform maintenance on systems and system components'),
('MP', 'Media Protection', 'Protect system media and limit access'),
('PE', 'Physical Protection', 'Limit physical access to systems and facilities'),
('PS', 'Personnel Security', 'Ensure trustworthiness of personnel'),
('RA', 'Risk Assessment', 'Assess and document risks to organizational operations'),
('SA', 'System and Services Acquisition', 'Allocate resources to protect systems'),
('SC', 'System and Communications Protection', 'Monitor and control communications'),
('SI', 'System and Information Integrity', 'Monitor systems for flaws and malicious code')
ON DUPLICATE KEY UPDATE title = VALUES(title);

-- Log initial setup
INSERT INTO audit_logs (action, details, ip_address, status) VALUES
('System Setup', 'Database initialized with default admin user', '127.0.0.1', 'success');
EOF

if [ $? -eq 0 ]; then
    echo "✓ Default admin user created successfully"
else
    echo "✗ Failed to create default admin user"
    exit 1
fi

echo ""
echo "=== Setup Complete ==="
echo "Database: $DB_NAME"
echo "User: $DB_USER"
echo "Password: $DB_PASSWORD"
echo ""
echo "Default Admin Login:"
echo "Username: admin"
echo "Email: admin@mvl-group.com"
echo "Password: password"
echo ""
echo "⚠️  IMPORTANT: Change the default admin password after first login!"
echo ""
echo "Next steps:"
echo "1. Configure your web server (Apache/Nginx)"
echo "2. Update API configuration in api/config/database.php"
echo "3. Set proper file permissions"
echo "4. Enable HTTPS in production"
echo ""
echo "For development, you can start PHP built-in server:"
echo "cd /path/to/mvl-lms && php -S localhost:8000"
