@echo off
REM MVL-LMS Database Setup Script for Windows
REM This script sets up the MariaDB database for MVL-LMS

echo === MVL-LMS Database Setup ===

REM Configuration
set DB_NAME=mvl_lms
set DB_USER=mvl_user
set DB_PASSWORD=mvl_secure_pass_2024!

echo Checking MariaDB installation...

REM Check if mysql command is available
mysql --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Error: MariaDB/MySQL is not installed or not in PATH.
    echo Please install MariaDB first from https://mariadb.org/download/
    echo Make sure to add MySQL/MariaDB bin directory to your PATH
    pause
    exit /b 1
)

echo MariaDB found. Creating database and user...

REM Create database and user
echo Creating database %DB_NAME% and user %DB_USER%...
mysql -u root -p -e "CREATE DATABASE IF NOT EXISTS %DB_NAME% CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci; CREATE USER IF NOT EXISTS '%DB_USER%'@'localhost' IDENTIFIED BY '%DB_PASSWORD%'; GRANT ALL PRIVILEGES ON %DB_NAME%.* TO '%DB_USER%'@'localhost'; FLUSH PRIVILEGES; SHOW DATABASES;"

if %errorlevel% neq 0 (
    echo Failed to create database and user
    pause
    exit /b 1
)

echo Database and user created successfully

echo Importing database schema...
mysql -u %DB_USER% -p%DB_PASSWORD% %DB_NAME% < database\schema.sql

if %errorlevel% neq 0 (
    echo Failed to import database schema
    pause
    exit /b 1
)

echo Database schema imported successfully

echo Creating default admin user...
mysql -u %DB_USER% -p%DB_PASSWORD% %DB_NAME% -e "INSERT INTO users (username, email, password_hash, first_name, last_name, role, status, email_verified_at) VALUES ('admin', 'admin@mvl-group.com', '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2.uheWG/igi', 'Admin', 'User', 'super_admin', 'active', NOW()) ON DUPLICATE KEY UPDATE email = email;"

if %errorlevel% neq 0 (
    echo Failed to create default admin user
    pause
    exit /b 1
)

echo.
echo === Setup Complete ===
echo Database: %DB_NAME%
echo User: %DB_USER%
echo Password: %DB_PASSWORD%
echo.
echo Default Admin Login:
echo Username: admin
echo Email: admin@mvl-group.com
echo Password: password
echo.
echo WARNING: Change the default admin password after first login!
echo.
echo Next steps:
echo 1. Configure your web server (Apache/Nginx/IIS)
echo 2. Update API configuration in api\config\database.php
echo 3. Set proper file permissions
echo 4. Enable HTTPS in production
echo.
echo For development, you can start PHP built-in server:
echo php -S localhost:8000
echo.
pause
