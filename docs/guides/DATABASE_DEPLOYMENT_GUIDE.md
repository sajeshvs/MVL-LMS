# MVL-LMS Database Implementation - Deployment Guide

## Overview

This implementation provides a complete MariaDB backend for the MVL-LMS admin panel, replacing mock data with real, persistent data storage. The system includes:

- **MariaDB Database Schema**: Complete database structure for users, content, quizzes, progress tracking, audit logs, and system settings
- **PHP API Layer**: RESTful API with authentication, CRUD operations, and security features
- **Frontend Integration**: Alpine.js components updated to use real API calls
- **Admin Panel**: Full-featured admin interface with database-driven functionality

## Database Schema

The database includes the following main components:

### Core Tables
- `users` - User accounts with roles and authentication
- `user_sessions` - Session management and tracking
- `content` - Learning content (lessons, quizzes, media)
- `domains` - CMMC 2.0 domains and practices
- `user_progress` - Learning progress tracking
- `quiz_attempts` - Quiz completion tracking
- `audit_logs` - System activity and compliance logs
- `system_settings` - Configurable system parameters
- `sso_providers` - Single sign-on configuration

### Security Features
- Password hashing with bcrypt
- Session token management
- Rate limiting for login attempts
- Comprehensive audit logging
- Input sanitization and validation

## Installation & Setup

### Prerequisites

1. **Web Server**: Apache, Nginx, or IIS
2. **PHP**: Version 7.4 or higher with PDO extension
3. **MariaDB**: Version 10.3 or higher (MySQL 5.7+ compatible)

### Step 1: Database Setup

#### Option A: Automated Setup (Recommended)

**Windows:**
```cmd
setup-database.bat
```

**Linux/macOS:**
```bash
chmod +x setup-database.sh
./setup-database.sh
```

#### Option B: Manual Setup

1. **Create Database:**
```sql
CREATE DATABASE mvl_lms CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
CREATE USER 'mvl_user'@'localhost' IDENTIFIED BY 'your_secure_password';
GRANT ALL PRIVILEGES ON mvl_lms.* TO 'mvl_user'@'localhost';
FLUSH PRIVILEGES;
```

2. **Import Schema:**
```bash
mysql -u mvl_user -p mvl_lms < database/schema.sql
```

### Step 2: API Configuration

Update `api/config/database.php` with your database credentials:

```php
const DB_HOST = 'localhost';
const DB_PORT = 3306;
const DB_NAME = 'mvl_lms';
const DB_USER = 'mvl_user';
const DB_PASS = 'your_secure_password';
```

### Step 3: Web Server Configuration

#### Apache (.htaccess)
```apache
RewriteEngine On
RewriteRule ^api/(.*)$ api/index.php [QSA,L]

<Files "*.php">
    Order allow,deny
    Allow from all
</Files>
```

#### Nginx
```nginx
location /api/ {
    rewrite ^/api/(.*)$ /api/index.php last;
    try_files $uri $uri/ =404;
}

location ~ \.php$ {
    fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
    fastcgi_index index.php;
    fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
    include fastcgi_params;
}
```

### Step 4: File Permissions

Set appropriate permissions for security:

```bash
# Make scripts executable
chmod +x setup-database.sh

# Set web directory permissions
chmod 755 /path/to/mvl-lms
chmod 644 /path/to/mvl-lms/*.html
chmod 644 /path/to/mvl-lms/assets/**/*

# Set API permissions
chmod 755 /path/to/mvl-lms/api
chmod 644 /path/to/mvl-lms/api/**/*.php

# Create upload directory with write permissions
mkdir uploads
chmod 775 uploads
```

## API Endpoints

The system provides comprehensive RESTful API endpoints:

### Authentication
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/me` - Get current user
- `POST /api/v1/auth/refresh` - Refresh token

### User Management
- `GET /api/v1/users` - List users (with filtering)
- `POST /api/v1/users` - Create user
- `PUT /api/v1/users/{id}` - Update user
- `DELETE /api/v1/users/{id}` - Delete user
- `POST /api/v1/users/{id}/reset-progress` - Reset user progress

### Content Management
- `GET /api/v1/content` - List content
- `POST /api/v1/content` - Create content
- `PUT /api/v1/content/{id}` - Update content
- `DELETE /api/v1/content/{id}` - Delete content
- `POST /api/v1/content/import` - Import content

### Admin Functions
- `GET /api/v1/admin/dashboard` - Dashboard statistics
- `GET /api/v1/admin/audit-logs` - Audit logs
- `GET /api/v1/admin/reports` - Generate reports
- `PUT /api/v1/admin/system-settings` - Update settings

## Frontend Integration

The admin panel now uses the `AdminAPI` service for all database operations:

### Key Features
- **Real-time Data**: All statistics and data are loaded from the database
- **Error Handling**: Comprehensive error handling with user feedback
- **Loading States**: Loading indicators for better user experience
- **Auto-refresh**: Data automatically refreshes when switching sections

### Usage Example
```javascript
// Load users from database
await this.loadUsers();

// Create new user
await this.createUser({
    username: 'newuser',
    email: 'user@example.com',
    password: 'secure_password',
    first_name: 'John',
    last_name: 'Doe',
    role: 'learner'
});
```

## Security Considerations

### Password Security
- Passwords are hashed using bcrypt with cost factor 12
- Minimum password length: 8 characters
- Password complexity requirements configurable

### Session Management
- Secure session tokens with expiration
- Session timeout configurable (default: 1 hour)
- Automatic session cleanup

### Input Validation
- All inputs are sanitized and validated
- SQL injection prevention through prepared statements
- XSS prevention through output encoding

### Audit Logging
- All admin actions are logged
- User authentication events tracked
- IP addresses and timestamps recorded

## Default Admin Account

The system creates a default admin account:

- **Username**: admin
- **Email**: admin@mvl-group.com
- **Password**: password
- **Role**: super_admin

**⚠️ IMPORTANT**: Change this password immediately after first login!

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check database credentials in `api/config/database.php`
   - Ensure MariaDB service is running
   - Verify user permissions

2. **API Requests Failing**
   - Check web server configuration
   - Verify PHP extensions (PDO, mbstring)
   - Check file permissions

3. **Login Issues**
   - Verify default admin credentials
   - Check session configuration
   - Review audit logs for failed attempts

### Debug Mode

Enable debug mode for development:

```php
// In api/config/database.php
const APP_DEBUG = true;
```

### Logs

Check these locations for error logs:
- PHP error log: `/var/log/php/error.log`
- Web server logs: `/var/log/apache2/error.log` or `/var/log/nginx/error.log`
- Application audit logs: Database `audit_logs` table

## Production Deployment

### Security Checklist

- [ ] Change default admin password
- [ ] Update database credentials
- [ ] Enable HTTPS/SSL
- [ ] Set secure file permissions
- [ ] Configure firewall rules
- [ ] Enable PHP OPcache
- [ ] Set up database backups
- [ ] Configure log rotation
- [ ] Review security settings
- [ ] Test disaster recovery

### Performance Optimization

1. **Database Optimization**
   - Configure MariaDB for your server specs
   - Set up proper indexing (already included)
   - Enable query caching

2. **Web Server Optimization**
   - Enable gzip compression
   - Set cache headers for static assets
   - Configure connection pooling

3. **PHP Optimization**
   - Enable OPcache
   - Increase memory limits if needed
   - Configure session storage (Redis recommended)

## Maintenance

### Regular Tasks

1. **Database Maintenance**
   - Monitor database size and performance
   - Clean up old audit logs (retention policy)
   - Update user statistics

2. **Security Updates**
   - Keep MariaDB updated
   - Update PHP and extensions
   - Review and rotate access credentials

3. **Monitoring**
   - Set up database monitoring
   - Monitor API response times
   - Track user activity patterns

## Support

For technical support or questions:

1. Check the troubleshooting section above
2. Review system logs for error details
3. Verify configuration settings
4. Test with debug mode enabled

## Architecture Summary

The complete implementation provides:

- **Scalable Database Design**: Normalized schema supporting multiple domains and user roles
- **Secure API Layer**: JWT-based authentication with comprehensive validation
- **Modern Frontend**: Alpine.js integration with real-time data updates
- **Admin Features**: Complete user/content management with audit trails
- **Production Ready**: Security features, error handling, and monitoring capabilities

This implementation transforms the MVL-LMS from a static demo into a fully functional learning management system with enterprise-grade capabilities.
