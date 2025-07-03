# MVL-LMS - CMMC 2.0 Learning Management System

A comprehensive, enterprise-grade Learning Management System built for MVL Group's CMMC 2.0 cybersecurity compliance training with advanced administrative capabilities.

## 🚀 Features

### Core Functionality
- **Pure HTML + Tailwind CDN + Alpine.js** - No build process required
- **Six main pages**: Dashboard, Courses, Course Detail, Lesson, Enhanced Admin Panel
- **Responsive design** with dark/light mode toggle
- **Local storage persistence** for all user data and customizations
- **Role-based access control** with comprehensive user rights management
- **Content versioning** and change tracking
- **Microsoft Entra ID SSO integration**
- **Interactive quizzes** with advanced scoring and analytics
- **Comprehensive audit logging** and compliance reporting

### Pages Overview

#### 1. Dashboard (`index.html`)
- KPI tiles showing learning progress
- Interactive progress charts (Chart.js)
- "Continue where you left off" section
- Recent activity feed

#### 2. Courses (`courses.html`)
- Grid view of all 14 CMMC domains
- Search and filter functionality
- Progress indicators for each course
- Completion status tracking

#### 3. Course Detail (`course.html?id={DOMAIN}`)
- Course overview and syllabus
- Progress radar chart
- Lesson listing with completion status
- Dynamic content based on selected domain

#### 4. Lesson (`lesson.html?domain={DOMAIN}&pr={REQ}`)
- Full lesson content with official NIST requirements
- MVL-specific implementation tips
- Step-by-step implementation guides
- Interactive quizzes with instant grading
- Resource links and references

#### 5. Enhanced Admin Panel (`admin.html`)
- **User Rights Management**: Role-based permissions with Super Admin, Admin, Instructor, and Learner roles
- **Content Management**: Advanced content editor with version control and quiz builder
- **SSO Configuration**: Microsoft Entra ID integration with group role mapping
- **Analytics & Reporting**: Comprehensive progress tracking and compliance reporting
- **System Settings**: Security policies, branding customization, and notification management
- **Audit & Compliance**: Detailed activity logging with export capabilities

### 🔐 Enhanced Admin Features

#### User Rights Management System
- **Role-Based Access Control (RBAC)**: Four distinct roles with granular permissions
- **Permission Matrix**: 20+ specific permissions across all system functions
- **User Management**: Create, edit, delete users with progress tracking
- **Session Management**: Secure session handling with timeout controls
- **Bulk Operations**: Export/import user data and bulk permission updates

#### Advanced Content Management
- **Rich Text Editor**: Full WYSIWYG editor with formatting tools
- **Version Control**: Track all content changes with rollback capability
- **Quiz Builder**: Interactive quiz creation with multiple question types
- **Media Management**: Upload and organize media files
- **Content Scheduling**: Schedule content publication and updates
- **Approval Workflow**: Multi-step content review process

#### Microsoft Entra ID SSO Integration
- **Single Sign-On**: Seamless authentication with Microsoft accounts
- **Group Role Mapping**: Automatic role assignment based on Entra ID groups
- **Just-in-Time Provisioning**: Automatic user creation on first login
- **Multi-Factor Authentication**: Leverage Entra ID MFA policies
- **Connection Testing**: Built-in SSO configuration validation

#### Analytics & Reporting
- **Real-time Dashboards**: User activity and performance monitoring
- **Custom Reports**: User progress, course completion, and compliance reports
- **Data Visualization**: Interactive charts and progress tracking
- **Export Capabilities**: PDF, CSV, and JSON export formats
- **Scheduled Reporting**: Automated report generation and delivery

#### Security & Compliance
- **Password Policies**: Configurable complexity requirements
- **Account Lockout**: Brute force attack protection
- **Audit Logging**: Comprehensive activity tracking
- **IP Whitelisting**: Restrict access by IP address
- **Data Encryption**: Secure data storage and transmission
- **Compliance Reporting**: CMMC and regulatory compliance tracking

## 📚 CMMC 2.0 Content

The system covers all 14 CMMC 2.0 domains with 110 practice requirements:

- **AC** - Access Control (22 practices)
- **AT** - Awareness & Training (3 practices)
- **AU** - Audit & Accountability (9 practices)
- **CM** - Configuration Management (8 practices)
- **IA** - Identification & Authentication (12 practices)
- **IR** - Incident Response (3 practices)
- **MA** - Maintenance (6 practices)
- **MP** - Media Protection (8 practices)
- **PS** - Personnel Security (2 practices)
- **PE** - Physical Protection (6 practices)
- **RA** - Risk Assessment (3 practices)
- **CA** - Security Assessment (2 practices)
- **SC** - System & Communications Protection (23 practices)
- **SI** - System & Information Integrity (17 practices)

## 🛠️ Technical Architecture

### File Structure
```
/
├── index.html              # Learner dashboard
├── courses.html            # Course catalog
├── course.html             # Individual course pages
├── lesson.html             # Individual lesson pages
├── admin.html              # Admin panel
├── assets/
│   ├── css/
│   │   └── overrides.css   # Custom styling
│   ├── js/
│   │   ├── app.js          # Alpine.js app logic
│   │   └── curriculum.js   # Course and lesson data
│   └── img/
│       └── mvl-logo.png    # Fallback logo
```

### Technologies Used
- **HTML5** - Semantic markup
- **Tailwind CSS** - Utility-first styling via CDN
- **Alpine.js v3** - Reactive JavaScript framework
- **Chart.js** - Progress visualization
- **Heroicons** - Consistent iconography
- **LocalStorage API** - Data persistence

### Key Features

#### Content Management
- **Editable Elements**: Any element with `.editable` class becomes editable when admin enables edit mode
- **Auto-save**: Content changes are automatically saved to localStorage on blur
- **Versioning**: Track when content was last modified
- **Backup/Restore**: Export/import all customizations as JSON

#### Progress Tracking
- **Lesson Completion**: Track individual lesson completion status
- **Course Progress**: Calculate completion percentages
- **Quiz Results**: Store quiz attempts and scores
- **Learning Path**: Smart "next lesson" recommendations

#### Data Persistence
All data is stored in browser localStorage:
- `lesson_{DOMAIN}_{REQUIREMENT}` - Lesson completion flags
- `course_{DOMAIN}` - Course completion status
- `content_{ELEMENT_ID}` - Custom content modifications
- `custom_logo` - Uploaded logo as base64
- `theme` - User's theme preference

## 🚀 Getting Started

### Requirements
- Modern web browser with JavaScript enabled
- Web server (for serving files - can be as simple as Python's built-in server)

### Installation
1. Download/clone all files to your web server directory
2. Ensure all files are accessible via HTTP (not file://)
3. Open `index.html` in your browser

### Development Server
For local development, you can use any static file server:

```bash
# Python 3
python -m http.server 8000

# Node.js (with http-server)
npx http-server

# PHP
php -S localhost:8000
```

Then navigate to `http://localhost:8000`

## 📝 Customization

### Adding New Content
1. Enable edit mode in the admin panel
2. Click on any editable content area
3. Modify the content directly
4. Changes are saved automatically

### Branding
- Upload custom logo via admin panel
- Modify footer content to match your organization
- Colors and styling can be customized via `assets/css/overrides.css`

### Curriculum Updates
Edit `assets/js/curriculum.js` to:
- Add new courses/lessons
- Update existing content
- Modify MVL-specific tips and implementation guides

## 🔧 Maintenance

### Data Backup
Regular backups can be created via the admin panel:
1. Go to Admin → Data Management
2. Click "Export All Data"
3. Save the JSON file securely

### Content Recovery
If content is accidentally modified:
1. Go to Admin → Content Modifications
2. Find the modified element
3. Click "Revert" to restore original content

### Performance
- All data is stored locally - no database required
- Minimal external dependencies (only CDN resources)
- Responsive design works on all device sizes
- No user authentication required for single-user deployments

## 🔒 Security Considerations

### Data Privacy
- All user data stays in browser localStorage
- No data transmitted to external servers (except CDN resources)
- No user authentication system (suitable for internal training)

### Content Security
- Admin panel controls who can edit content
- All changes are tracked with timestamps
- Easy rollback of content modifications

## 📊 Analytics & Reporting

The system tracks:
- Individual lesson completion rates
- Course progress percentages
- Quiz performance and attempts
- Time spent on content (via timestamps)
- Content modification history

Data can be exported as JSON for analysis in external tools.

## 🤝 Support

This is a self-contained system designed for MVL Group's internal training needs. For technical issues:

1. Check browser console for JavaScript errors
2. Verify all files are properly served via HTTP
3. Ensure localStorage is not disabled in browser
4. Check that CDN resources are accessible

## 📄 License

© 2024 MVL Group. All rights reserved.

This system is designed specifically for MVL Group's CMMC 2.0 compliance training program.
