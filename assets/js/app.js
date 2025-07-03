// Alpine.js App Configuration
document.addEventListener('alpine:init', () => {
  // Curriculum data will be loaded by curriculum-data.js
  // Set fallback data if not already loaded
  if (!window.COURSES_DATA) {
    window.COURSES_DATA = [
      { id: "AC", title: "Access Control", icon: "lock-closed" },
      { id: "AT", title: "Awareness & Training", icon: "presentation-chart-bar" },
      { id: "AU", title: "Audit & Accountability", icon: "clipboard-document" },
      { id: "CM", title: "Configuration Management", icon: "cog-8-tooth" },
      { id: "IA", title: "Identification & Authentication", icon: "finger-print" },
      { id: "IR", title: "Incident Response", icon: "exclamation-triangle" },
      { id: "MA", title: "Maintenance", icon: "wrench-screwdriver" },
      { id: "MP", title: "Media Protection", icon: "document" },
      { id: "PS", title: "Personnel Security", icon: "users" },
      { id: "PE", title: "Physical Protection", icon: "building-office" },
      { id: "RA", title: "Risk Assessment", icon: "shield-check" },
      { id: "CA", title: "Security Assessment", icon: "magnifying-glass" },
      { id: "SC", title: "System & Comms Protection", icon: "wifi" },
      { id: "SI", title: "System & Info Integrity", icon: "bug-ant" }
    ];
    window.LESSONS_DATA = {};
    console.log('Using fallback courses data:', window.COURSES_DATA.length, 'courses');
  } else {
    console.log('Curriculum data available:', window.COURSES_DATA.length, 'courses', Object.keys(window.LESSONS_DATA || {}).length, 'lesson groups');
  }

  Alpine.store('app', {
    edit: false,
    theme: localStorage.getItem('theme') || 'light',
    
    init() {
      // Initialize theme immediately to prevent flashing
      this.applyTheme();
      // Mark HTML as ready to prevent initial flash
      document.documentElement.classList.add('ready');
    },
    
    applyTheme() {
      document.documentElement.classList.toggle('dark', this.theme === 'dark');
    },
    
    toggleEdit() {
      this.edit = !this.edit;
      console.log('Edit mode:', this.edit ? 'ON' : 'OFF');
    },
    
    toggleTheme() {
      this.theme = this.theme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', this.theme);
      this.applyTheme();
    },
      async saveContent(id, content) {
      try {
        // Import DOMPurify for content sanitization
        const DOMPurify = await import('https://cdn.skypack.dev/dompurify').then(m => m.default);
        
        // Sanitize content to prevent XSS attacks
        const clean = DOMPurify.sanitize(content, {
          ALLOWED_TAGS: ['b', 'i', 'u', 'p', 'br', 'strong', 'em', 'a'],
          ALLOWED_ATTR: ['href', 'target']
        });
        
        const key = `content_${id}`;
        localStorage.setItem(key, clean);
        localStorage.setItem(`${key}_modified`, new Date().toISOString());
        console.log(`Saved and sanitized content for ${id}`);
      } catch (error) {
        console.error('Error sanitizing content:', error);
        // Fallback to basic sanitization
        const basicClean = content.replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, '');
        const key = `content_${id}`;
        localStorage.setItem(key, basicClean);
      }
    },
    
    loadContent(id) {
      const key = `content_${id}`;
      return localStorage.getItem(key) || '';
    },
    
    markLessonComplete(domain, requirement) {
      const key = `lesson_${domain}_${requirement}`;
      localStorage.setItem(key, 'completed');
      localStorage.setItem(`${key}_date`, new Date().toISOString());
      this.showToast(`Lesson ${domain}.${requirement} marked complete!`);
    },
    
    isLessonComplete(domain, requirement) {
      const key = `lesson_${domain}_${requirement}`;
      return localStorage.getItem(key) === 'completed';
    },
    
    markCourseComplete(domain) {
      const key = `course_${domain}`;
      localStorage.setItem(key, 'completed');
      localStorage.setItem(`${key}_date`, new Date().toISOString());
      this.showToast(`Course ${domain} marked complete!`);
    },
    
    isCourseComplete(domain) {
      const key = `course_${domain}`;
      return localStorage.getItem(key) === 'completed';
    },
    
    getCompletedLessonsCount() {
      let count = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('lesson_') && !key.endsWith('_date') && localStorage.getItem(key) === 'completed') {
          count++;
        }
      }
      return count;
    },
    
    getCompletedCoursesCount() {
      let count = 0;
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('course_') && !key.endsWith('_date') && localStorage.getItem(key) === 'completed') {
          count++;
        }
      }
      return count;
    },
      getTotalLessonsCount() {
      // Count lessons from loaded curriculum data
      if (window.LESSONS_DATA) {
        let total = 0;
        Object.keys(window.LESSONS_DATA).forEach(domain => {
          total += Object.keys(window.LESSONS_DATA[domain]).length;
        });
        return total;
      }
      return 110; // CMMC 2.0 fallback count
    },
    
    getTotalCoursesCount() {
      // Count courses from loaded curriculum data
      if (window.COURSES_DATA) {
        return window.COURSES_DATA.length;
      }
      return 14; // Number of CMMC domains fallback
    },
      getNextIncompleteLesson() {
      // Find the next incomplete lesson using curriculum data
      if (window.LESSONS_DATA) {
        for (const domain of Object.keys(window.LESSONS_DATA)) {
          for (const requirement of Object.keys(window.LESSONS_DATA[domain])) {
            if (!this.isLessonComplete(domain, requirement)) {
              return {
                domain: domain,
                requirement: requirement,
                title: window.LESSONS_DATA[domain][requirement].title || 'Next Lesson'
              };
            }
          }
        }
      }
      // Fallback if all complete or no data
      return { domain: 'AC', requirement: '3.1.1', title: 'All Lessons Complete!' };
    },
    
    // Utility method to get domain completion percentage
    getDomainPercent(domain) {
      if (!window.LESSONS_DATA || !window.LESSONS_DATA[domain]) {
        return 0;
      }
      
      const lessons = Object.keys(window.LESSONS_DATA[domain]);
      const totalLessons = lessons.length;
      
      if (totalLessons === 0) return 0;
      
      let completedLessons = 0;
      lessons.forEach(requirement => {
        if (this.isLessonComplete(domain, requirement)) {
          completedLessons++;
        }
      });
      
      return Math.round((completedLessons / totalLessons) * 100);
    },
      showToast(message, type = 'success') {
      // Create toast notification
      const toast = document.createElement('div');
      let bgColor = 'bg-green-500';
      let icon = '✓';
      
      if (type === 'error') {
        bgColor = 'bg-red-500';
        icon = '✗';
      } else if (type === 'info') {
        bgColor = 'bg-blue-500';
        icon = 'ℹ';
      } else if (type === 'warning') {
        bgColor = 'bg-yellow-500';
        icon = '⚠';
      }
      
      toast.className = `fixed top-4 right-4 z-50 px-6 py-3 rounded-lg shadow-lg transform transition-all duration-300 ${bgColor} text-white flex items-center space-x-2`;
      toast.innerHTML = `<span class="text-lg">${icon}</span><span>${message}</span>`;
      
      document.body.appendChild(toast);
      
      // Animate in
      setTimeout(() => toast.classList.add('translate-x-0'), 10);
      
      // Remove after 3 seconds
      setTimeout(() => {
        toast.classList.add('translate-x-full', 'opacity-0');
        setTimeout(() => document.body.removeChild(toast), 300);
      }, 3000);
    },
    
    exportData() {
      const data = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        data[key] = localStorage.getItem(key);
      }
      
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mvl-lms-data-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      
      this.showToast('Data exported successfully!');
    },
    
    importData(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const data = JSON.parse(e.target.result);
          Object.keys(data).forEach(key => {
            localStorage.setItem(key, data[key]);
          });
          this.showToast('Data imported successfully!');
          location.reload();
        } catch (error) {
          this.showToast('Error importing data: ' + error.message, 'error');
        }
      };
      reader.readAsText(file);
    },
    
    uploadLogo(file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        localStorage.setItem('custom_logo', e.target.result);
        this.showToast('Logo uploaded successfully!');
        // Update logo images
        const logos = document.querySelectorAll('.mvl-logo');
        logos.forEach(logo => logo.src = e.target.result);
      };
      reader.readAsDataURL(file);
    },
      getCustomLogo() {
      return localStorage.getItem('custom_logo') || null;
    },

    // Progress utility function for domain completion percentage
    getDomainPercent(domainId) {
      if (!window.LESSONS_DATA || !window.LESSONS_DATA[domainId]) {
        return 0;
      }
      
      const domainLessons = window.LESSONS_DATA[domainId];
      const totalLessons = Object.keys(domainLessons).length;
      
      if (totalLessons === 0) return 0;
      
      let completedLessons = 0;
      Object.keys(domainLessons).forEach(lessonId => {
        if (this.isLessonComplete(domainId, lessonId)) {
          completedLessons++;
        }
      });
      
      return Math.round((completedLessons / totalLessons) * 100);
    },
    
    // Enhanced Admin and User Rights Management
    currentUser: {
      id: 'admin',
      name: 'Admin User',
      email: 'admin@mvl-group.com',
      role: 'super_admin',
      permissions: ['all']
    },
    
    userRoles: {
      'super_admin': {
        name: 'Super Administrator',
        permissions: [
          'user_create', 'user_edit', 'user_delete', 'user_view',
          'content_create', 'content_edit', 'content_delete', 'content_view',
          'quiz_create', 'quiz_edit', 'quiz_delete', 'quiz_view',
          'system_settings', 'security_settings', 'sso_config',
          'analytics_view', 'reports_generate', 'audit_view',
          'branding_edit', 'backup_restore'
        ],
        description: 'Full system access with all administrative privileges'
      },
      'admin': {
        name: 'Administrator',
        permissions: [
          'user_create', 'user_edit', 'user_view',
          'content_create', 'content_edit', 'content_view',
          'quiz_create', 'quiz_edit', 'quiz_view',
          'analytics_view', 'reports_generate'
        ],
        description: 'Administrative access without system configuration'
      },
      'instructor': {
        name: 'Instructor',
        permissions: [
          'content_create', 'content_edit', 'content_view',
          'quiz_create', 'quiz_edit', 'quiz_view',
          'user_view', 'analytics_view'
        ],
        description: 'Content creation and user progress monitoring'
      },
      'learner': {
        name: 'Learner',
        permissions: [
          'content_view', 'quiz_view', 'progress_view'
        ],
        description: 'Basic learning access with progress tracking'
      }
    },
    
    // Permission checking methods
    hasPermission(permission) {
      if (!this.currentUser || !this.currentUser.role) {
        return false;
      }
      
      // Super admin has all permissions
      if (this.currentUser.role === 'super_admin') {
        return true;
      }
      
      const userRole = this.userRoles[this.currentUser.role];
      return userRole && userRole.permissions.includes(permission);
    },
    
    canAccess(section) {
      const sectionPermissions = {
        'dashboard': 'analytics_view',
        'users': 'user_view',
        'content': 'content_view',
        'sso': 'sso_config',
        'analytics': 'analytics_view',
        'settings': 'system_settings',
        'audit': 'audit_view'
      };
      
      const requiredPermission = sectionPermissions[section];
      return requiredPermission ? this.hasPermission(requiredPermission) : false;
    },
    
    // Enhanced content management with version control
    contentVersions: {},
    
    saveContentVersion(contentId, content, userInfo = null) {
      const timestamp = new Date().toISOString();
      const version = {
        id: Date.now(),
        content: content,
        timestamp: timestamp,
        user: userInfo || this.currentUser,
        changeLog: `Content updated by ${userInfo?.name || this.currentUser.name}`
      };
      
      if (!this.contentVersions[contentId]) {
        this.contentVersions[contentId] = [];
      }
      
      this.contentVersions[contentId].push(version);
        // Keep only last 10 versions
      if (this.contentVersions[contentId].length > 10) {
        this.contentVersions[contentId] = this.contentVersions[contentId].slice(-10);
      }
      
      localStorage.setItem('mvl_content_versions', JSON.stringify(this.contentVersions));
      this.logAdminAction('content_edit', `Content ${contentId} updated`, 'success');
    },
    
    getContentHistory(contentId) {
      return this.contentVersions[contentId] || [];
    },
    
    restoreContentVersion(contentId, versionId) {
      const versions = this.contentVersions[contentId];
      if (versions) {
        const version = versions.find(v => v.id === versionId);
        if (version) {
          this.saveContent(contentId, version.content);
          this.showToast(`Content restored to version from ${version.timestamp}`, 'success');
          this.logAdminAction('content_restore', `Content ${contentId} restored to version ${versionId}`, 'success');
        }
      }
    },
    
    // Enhanced user session management
    userSessions: {},
    sessionTimeout: 30 * 60 * 1000, // 30 minutes
    
    createUserSession(userId, loginData) {
      const sessionId = 'session_' + Date.now() + '_' + Math.random().toString(36).substring(2);
      const session = {
        id: sessionId,
        userId: userId,
        loginTime: new Date().toISOString(),
        lastActivity: new Date().toISOString(),
        ipAddress: loginData.ipAddress || 'unknown',
        userAgent: navigator.userAgent,
        active: true
      };
      
      this.userSessions[sessionId] = session;
      localStorage.setItem('mvl_current_session', sessionId);
      localStorage.setItem('mvl_user_sessions', JSON.stringify(this.userSessions));
      
      this.logAdminAction('user_login', `User login: ${userId}`, 'success');
      
      // Set session timeout
      this.startSessionTimer();
      
      return sessionId;
    },
    
    updateSessionActivity(sessionId = null) {
      const currentSessionId = sessionId || localStorage.getItem('mvl_current_session');
      if (currentSessionId && this.userSessions[currentSessionId]) {
        this.userSessions[currentSessionId].lastActivity = new Date().toISOString();
        localStorage.setItem('mvl_user_sessions', JSON.stringify(this.userSessions));
      }
    },
    
    endUserSession(sessionId = null) {
      const currentSessionId = sessionId || localStorage.getItem('mvl_current_session');
      if (currentSessionId && this.userSessions[currentSessionId]) {
        this.userSessions[currentSessionId].active = false;
        this.userSessions[currentSessionId].logoutTime = new Date().toISOString();
        localStorage.setItem('mvl_user_sessions', JSON.stringify(this.userSessions));
        
        if (!sessionId) {
          localStorage.removeItem('mvl_current_session');
          this.logAdminAction('user_logout', 'User logout', 'success');
        }
      }
    },
    
    startSessionTimer() {
      // Clear existing timer
      if (this.sessionTimer) {
        clearInterval(this.sessionTimer);
      }
      
      this.sessionTimer = setInterval(() => {
        const currentSessionId = localStorage.getItem('mvl_current_session');
        if (currentSessionId && this.userSessions[currentSessionId]) {
          const session = this.userSessions[currentSessionId];
          const lastActivity = new Date(session.lastActivity);
          const now = new Date();
          
          if (now - lastActivity > this.sessionTimeout) {
            this.endUserSession();
            this.showToast('Session expired due to inactivity', 'warning');
            window.location.href = 'index.html';
          }
        }
      }, 60000); // Check every minute
    },
    
    // Enhanced audit logging
    auditLog: [],
    
    logAdminAction(action, details, status = 'success', userId = null) {
      const logEntry = {
        id: Date.now(),
        timestamp: new Date().toISOString(),
        user: userId || this.currentUser.email,
        action: action,
        details: details,
        status: status,
        ipAddress: 'localhost', // Would be actual IP in production
        userAgent: navigator.userAgent,
        sessionId: localStorage.getItem('mvl_current_session')
      };
      
      this.auditLog.unshift(logEntry);
      
      // Keep only last 1000 entries
      if (this.auditLog.length > 1000) {
        this.auditLog = this.auditLog.slice(0, 1000);
      }
      
      localStorage.setItem('mvl_audit_log', JSON.stringify(this.auditLog));
    },
    
    getAuditLog(filters = {}) {
      let filtered = [...this.auditLog];
      
      if (filters.user) {
        filtered = filtered.filter(entry => 
          entry.user.toLowerCase().includes(filters.user.toLowerCase())
        );
      }
      
      if (filters.action) {
        filtered = filtered.filter(entry => 
          entry.action.toLowerCase().includes(filters.action.toLowerCase())
        );
      }
      
      if (filters.dateFrom) {
        filtered = filtered.filter(entry => 
          new Date(entry.timestamp) >= new Date(filters.dateFrom)
        );
      }
      
      if (filters.dateTo) {
        filtered = filtered.filter(entry => 
          new Date(entry.timestamp) <= new Date(filters.dateTo)
        );
      }
      
      return filtered;
    },
    
    exportAuditLog(filters = {}) {
      const auditData = this.getAuditLog(filters);
      const blob = new Blob([JSON.stringify(auditData, null, 2)], { 
        type: 'application/json' 
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mvl-audit-log-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      
      this.showToast('Audit log exported successfully!', 'success');
      this.logAdminAction('audit_export', 'Audit log exported', 'success');
    },
    
    // Enhanced security features
    securitySettings: {
      passwordPolicy: {
        minLength: 8,
        requireUppercase: true,
        requireLowercase: true,
        requireNumbers: true,
        requireSpecialChars: true,
        preventReuse: 5
      },
      sessionSecurity: {
        timeout: 30,
        maxConcurrentSessions: 3,
        requireDeviceVerification: false
      },
      accessControl: {
        enableIPWhitelist: false,
        whitelistedIPs: [],
        enable2FA: false,
        enableAccountLockout: true,
        maxFailedAttempts: 5,
        lockoutDuration: 15
      }
    },
    
    validatePassword(password) {
      const policy = this.securitySettings.passwordPolicy;
      const errors = [];
      
      if (password.length < policy.minLength) {
        errors.push(`Password must be at least ${policy.minLength} characters long`);
      }
      
      if (policy.requireUppercase && !/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter');
      }
      
      if (policy.requireLowercase && !/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter');
      }
      
      if (policy.requireNumbers && !/\d/.test(password)) {
        errors.push('Password must contain at least one number');
      }
      
      if (policy.requireSpecialChars && !/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
        errors.push('Password must contain at least one special character');
      }
      
      return {
        isValid: errors.length === 0,
        errors: errors
      };
    },
    
    updateSecuritySettings(newSettings) {
      this.securitySettings = { ...this.securitySettings, ...newSettings };
      localStorage.setItem('mvl_security_settings', JSON.stringify(this.securitySettings));
      this.logAdminAction('security_update', 'Security settings updated', 'success');
      this.showToast('Security settings updated successfully!', 'success');
    },
    
    // Enhanced backup and restore functionality
    createSystemBackup() {
      const backupData = {
        timestamp: new Date().toISOString(),
        version: '1.0',
        userData: this.getAllUserData(),
        contentData: this.getAllContentData(),
        systemSettings: this.getSystemSettings(),
        auditLog: this.auditLog,
        contentVersions: this.contentVersions
      };
      
      const blob = new Blob([JSON.stringify(backupData, null, 2)], { 
        type: 'application/json' 
      });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mvl-lms-backup-${new Date().toISOString().split('T')[0]}.json`;
      a.click();
      URL.revokeObjectURL(url);
      
      this.showToast('System backup created successfully!', 'success');
      this.logAdminAction('system_backup', 'System backup created', 'success');
    },
    
    restoreSystemBackup(backupFile) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const backupData = JSON.parse(e.target.result);
          
          if (confirm('This will restore the system to the backup state. All current data will be replaced. Continue?')) {
            this.restoreUserData(backupData.userData);
            this.restoreContentData(backupData.contentData);
            this.restoreSystemSettings(backupData.systemSettings);
            
            if (backupData.auditLog) {
              this.auditLog = backupData.auditLog;
              localStorage.setItem('mvl_audit_log', JSON.stringify(this.auditLog));
            }
            
            if (backupData.contentVersions) {
              this.contentVersions = backupData.contentVersions;
              localStorage.setItem('mvl_content_versions', JSON.stringify(this.contentVersions));
            }
            
            this.showToast('System restored from backup successfully!', 'success');
            this.logAdminAction('system_restore', `System restored from backup: ${backupData.timestamp}`, 'success');
            
            setTimeout(() => {
              window.location.reload();
            }, 2000);
          }
        } catch (error) {
          this.showToast('Error restoring backup: ' + error.message, 'error');
          this.logAdminAction('system_restore_error', 'Failed to restore system backup', 'error');
        }
      };
      reader.readAsText(backupFile);
    },
    
    getAllUserData() {
      const userData = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('user_') || key.startsWith('lesson_') || key.startsWith('course_')) {
          userData[key] = localStorage.getItem(key);
        }
      }
      return userData;
    },
    
    getAllContentData() {
      const contentData = {};
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key.startsWith('content_')) {
          contentData[key] = localStorage.getItem(key);
        }
      }
      return contentData;
    },
    
    getSystemSettings() {
      const settings = {};
      const settingsKeys = [
        'mvl_sso_config', 'mvl_security_settings', 'mvl_branding_settings',
        'mvl_notification_settings', 'theme', 'custom_logo'
      ];
      
      settingsKeys.forEach(key => {
        const value = localStorage.getItem(key);
        if (value) {
          settings[key] = value;
        }
      });
      
      return settings;
    },
    
    restoreUserData(userData) {
      Object.keys(userData).forEach(key => {
        localStorage.setItem(key, userData[key]);
      });
    },
    
    restoreContentData(contentData) {
      Object.keys(contentData).forEach(key => {
        localStorage.setItem(key, contentData[key]);
      });
    },
    
    restoreSystemSettings(settings) {
      Object.keys(settings).forEach(key => {
        localStorage.setItem(key, settings[key]);
      });
    },
    
    // Initialize enhanced admin features
    initAdminFeatures() {
      // Load saved audit log
      const savedAuditLog = localStorage.getItem('mvl_audit_log');
      if (savedAuditLog) {
        try {
          this.auditLog = JSON.parse(savedAuditLog);
        } catch (error) {
          console.warn('Failed to load audit log:', error);
        }
      }
      
      // Load content versions
      const savedVersions = localStorage.getItem('mvl_content_versions');
      if (savedVersions) {
        try {
          this.contentVersions = JSON.parse(savedVersions);
        } catch (error) {
          console.warn('Failed to load content versions:', error);
        }
      }
      
      // Load security settings
      const savedSecurity = localStorage.getItem('mvl_security_settings');
      if (savedSecurity) {
        try {
          this.securitySettings = { ...this.securitySettings, ...JSON.parse(savedSecurity) };
        } catch (error) {
          console.warn('Failed to load security settings:', error);
        }
      }
      
      // Load user sessions
      const savedSessions = localStorage.getItem('mvl_user_sessions');
      if (savedSessions) {
        try {
          this.userSessions = JSON.parse(savedSessions);
        } catch (error) {
          console.warn('Failed to load user sessions:', error);
        }
      }
      
      // Start session monitoring
      this.startSessionTimer();
      
      // Track page activity
      this.trackPageActivity();
    },
    
    trackPageActivity() {
      // Update session activity on user interaction
      ['click', 'keydown', 'scroll', 'mousemove'].forEach(event => {
        document.addEventListener(event, () => {
          this.updateSessionActivity();
        }, { passive: true });
      });
      
      // Track page visibility
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          this.updateSessionActivity();
        }
      });
    }
  });
});

// Initialize theme on page load
document.addEventListener('DOMContentLoaded', () => {
  const theme = localStorage.getItem('theme') || 'light';
  document.documentElement.classList.toggle('dark', theme === 'dark');
  
  // Load saved content for editable elements
  document.querySelectorAll('.editable').forEach(element => {
    if (element.id) {
      const savedContent = localStorage.getItem(`content_${element.id}`);
      if (savedContent) {
        element.innerHTML = savedContent;
      }
    }
  });
  
  // Load custom logo if available
  const customLogo = localStorage.getItem('custom_logo');
  if (customLogo) {
    document.querySelectorAll('.mvl-logo').forEach(logo => {
      logo.src = customLogo;
    });
  }
});

// Utility Functions
function getUrlParameter(name) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(name);
}

function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

function smoothScrollTo(elementId) {
  const element = document.getElementById(elementId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -10% 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate-fade-in');
    }
  });
}, observerOptions);

// Initialize store when document is ready
document.addEventListener('DOMContentLoaded', () => {
  if (Alpine.store('app')) {
    Alpine.store('app').init();
    Alpine.store('app').initAdminFeatures();
  }
});

// Observe all sections for animations
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('section, .card, .lesson-card').forEach(el => {
    observer.observe(el);
  });
});
