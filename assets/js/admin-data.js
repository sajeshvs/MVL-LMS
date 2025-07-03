/**
 * Enhanced Admin Data with Database Integration
 * Uses AdminAPI for all database operations
 */

function enhancedAdminData() {
    return {
        // Initialize with loading state
        loading: {
            dashboard: false,
            users: false,
            content: false,
            settings: false
        },
        
        // Current section
        activeSection: 'dashboard',
        
        // Admin sidebar navigation
        adminSections: [
            {
                id: 'dashboard',
                title: 'Dashboard',
                icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"></path></svg>`
            },
            {
                id: 'users',
                title: 'User Management',
                icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"></path></svg>`
            },
            {
                id: 'content',
                title: 'Content Management',
                icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 0h8v12H6V4z" clip-rule="evenodd"></path></svg>`
            },
            {
                id: 'sso',
                title: 'SSO Configuration',
                icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"></path></svg>`
            },
            {
                id: 'analytics',
                title: 'Analytics & Reports',
                icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z"></path></svg>`
            },
            {
                id: 'settings',
                title: 'System Settings',
                icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clip-rule="evenodd"></path></svg>`
            },
            {
                id: 'audit',
                title: 'Audit & Compliance',
                icon: `<svg fill="currentColor" viewBox="0 0 20 20"><path fill-rule="evenodd" d="M3 4a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1V4zm2 2V5h1v1H5zM3 13a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1H4a1 1 0 01-1-1v-3zm2 2v-1h1v1H5zM13 3a1 1 0 011-1h3a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1V3zm2 2V4h1v1h-1z" clip-rule="evenodd"></path></svg>`
            }
        ],
        
        // System statistics (loaded from API)
        systemStats: {
            totalUsers: 0,
            activeUsers: 0,
            totalContent: 0,
            publishedContent: 0,
            completionRate: 0,
            systemAlerts: 0
        },
        
        // Recent activity (loaded from API)
        recentActivity: [],
        
        // User management
        userFilter: 'all',
        userSearch: '',
        selectedUsers: [],
        users: [],
        showUserModal: false,
        editingUser: null,
        
        // Content Management
        contentFilter: 'all',
        contentSearch: '',
        showContentEditor: false,
        showQuizEditor: false,
        editingContent: null,
        editingQuiz: null,
        contentItems: [],
        
        // SSO Configuration (loaded from API)
        ssoConfig: {
            enabled: false,
            tenantId: '',
            clientId: '',
            clientSecret: '',
            authority: 'https://login.microsoftonline.com/common',
            redirectUri: window.location.origin + '/auth/callback',
            scopes: 'openid profile email User.Read'
        },
        
        // Group Role Mappings for SSO
        groupRoleMappings: [],
        
        // Analytics Data (loaded from API)
        analyticsData: {
            complianceByDomain: []
        },
        reportType: 'user_progress',
        
        // System Settings (loaded from API)
        securitySettings: {},
        notificationSettings: [],
        brandingSettings: {},
        
        // Audit & Compliance
        auditLogs: [],
        auditFilters: {
            dateRange: 'week',
            actionType: 'all',
            user: '',
            ipAddress: ''
        },
        
        // Initialization
        async init() {
            await this.loadDashboardData();
            this.loadSavedSettings();
        },
        
        // Dashboard methods
        async loadDashboardData() {
            this.loading.dashboard = true;
            try {
                // Load dashboard stats
                const statsResponse = await window.adminAPI.getDashboardStats();
                if (statsResponse.success) {
                    this.systemStats = {
                        totalUsers: statsResponse.data.totalUsers || 0,
                        activeUsers: statsResponse.data.activeUsers || 0,
                        activeLessons: statsResponse.data.publishedContent || 0,
                        completionRate: statsResponse.data.completionRate || 0,
                        alerts: statsResponse.data.systemAlerts || 0
                    };
                }
                
                // Load recent activity
                const activityResponse = await window.adminAPI.getRecentActivity(5);
                if (activityResponse.success) {
                    this.recentActivity = activityResponse.data || [];
                }
                
                // Load compliance stats
                const complianceResponse = await window.adminAPI.getComplianceStats();
                if (complianceResponse.success) {
                    this.analyticsData.complianceByDomain = complianceResponse.data || [];
                }
            } catch (error) {
                console.error('Failed to load dashboard data:', error);
                Alpine.store('app').showToast('Failed to load dashboard data', 'error');
            } finally {
                this.loading.dashboard = false;
            }
        },
        
        // Load saved settings from localStorage
        loadSavedSettings() {
            try {
                const savedSSO = localStorage.getItem('mvl_sso_config');
                if (savedSSO) {
                    this.ssoConfig = { ...this.ssoConfig, ...JSON.parse(savedSSO) };
                }
                
                const savedSecurity = localStorage.getItem('mvl_security_settings');
                if (savedSecurity) {
                    this.securitySettings = JSON.parse(savedSecurity);
                }
                
                const savedBranding = localStorage.getItem('mvl_branding_settings');
                if (savedBranding) {
                    this.brandingSettings = JSON.parse(savedBranding);
                }
            } catch (error) {
                console.error('Failed to load saved settings:', error);
            }
        },
        
        // Section navigation
        getCurrentSectionTitle() {
            const titles = {
                dashboard: 'Dashboard Overview',
                users: 'User Management',
                content: 'Content Management',
                sso: 'SSO Configuration',
                analytics: 'Analytics & Reports',
                settings: 'System Settings',
                audit: 'Audit & Compliance'
            };
            return titles[this.activeSection] || 'Admin Console';
        },
        
        getCurrentSectionDescription() {
            const descriptions = {
                dashboard: 'Overview of your MVL-LMS platform performance and activity',
                users: 'Manage user accounts, roles, and permissions',
                content: 'Edit lessons, quizzes, and manage learning materials',
                sso: 'Configure Microsoft Entra ID single sign-on integration',
                analytics: 'View reports and analytics on learning progress',
                settings: 'Configure system settings and preferences',
                audit: 'Review system activity logs and compliance reports'
            };
            return descriptions[this.activeSection] || 'Admin console';
        },
        
        // User management methods
        async loadUsers() {
            this.loading.users = true;
            try {
                const filters = {
                    role: this.userFilter === 'all' ? null : this.userFilter,
                    search: this.userSearch || null
                };
                
                const response = await window.adminAPI.getUsers(filters);
                if (response.success) {
                    this.users = response.data.map(user => ({
                        id: user.id,
                        name: `${user.first_name} ${user.last_name}`,
                        email: user.email,
                        role: user.role,
                        status: user.status,
                        lastLogin: this.formatTimestamp(user.last_login),
                        progress: user.progress_percentage || 0
                    }));
                }
            } catch (error) {
                console.error('Failed to load users:', error);
                Alpine.store('app').showToast('Failed to load users', 'error');
            } finally {
                this.loading.users = false;
            }
        },
        
        get filteredUsers() {
            return this.users.filter(user => {
                if (this.userFilter !== 'all' && user.role !== this.userFilter) {
                    return false;
                }
                if (this.userSearch) {
                    const search = this.userSearch.toLowerCase();
                    return user.name.toLowerCase().includes(search) || 
                           user.email.toLowerCase().includes(search);
                }
                return true;
            });
        },
        
        async createUser(userData) {
            try {
                const response = await window.adminAPI.createUser(userData);
                if (response.success) {
                    Alpine.store('app').showToast('User created successfully!', 'success');
                    await this.loadUsers();
                    this.showUserModal = false;
                    this.editingUser = null;
                } else {
                    Alpine.store('app').showToast(response.message || 'Failed to create user', 'error');
                }
            } catch (error) {
                console.error('Failed to create user:', error);
                Alpine.store('app').showToast('Failed to create user', 'error');
            }
        },
        
        async updateUser(id, userData) {
            try {
                const response = await window.adminAPI.updateUser(id, userData);
                if (response.success) {
                    Alpine.store('app').showToast('User updated successfully!', 'success');
                    await this.loadUsers();
                    this.showUserModal = false;
                    this.editingUser = null;
                } else {
                    Alpine.store('app').showToast(response.message || 'Failed to update user', 'error');
                }
            } catch (error) {
                console.error('Failed to update user:', error);
                Alpine.store('app').showToast('Failed to update user', 'error');
            }
        },
        
        async deleteUser(user) {
            if (confirm(`Delete user ${user.name}? This action cannot be undone.`)) {
                try {
                    const response = await window.adminAPI.deleteUser(user.id);
                    if (response.success) {
                        Alpine.store('app').showToast('User deleted successfully', 'success');
                        await this.loadUsers();
                    } else {
                        Alpine.store('app').showToast(response.message || 'Failed to delete user', 'error');
                    }
                } catch (error) {
                    console.error('Failed to delete user:', error);
                    Alpine.store('app').showToast('Failed to delete user', 'error');
                }
            }
        },
        
        async resetUserProgress(user) {
            if (confirm(`Reset all progress for ${user.name}?`)) {
                try {
                    const response = await window.adminAPI.resetUserProgress(user.id);
                    if (response.success) {
                        Alpine.store('app').showToast('User progress reset successfully', 'success');
                        await this.loadUsers();
                    } else {
                        Alpine.store('app').showToast(response.message || 'Failed to reset progress', 'error');
                    }
                } catch (error) {
                    console.error('Failed to reset progress:', error);
                    Alpine.store('app').showToast('Failed to reset progress', 'error');
                }
            }
        },
        
        async exportUsers() {
            try {
                await window.adminAPI.exportUsers('json', {
                    role: this.userFilter === 'all' ? null : this.userFilter
                });
                Alpine.store('app').showToast('Users exported successfully!', 'success');
            } catch (error) {
                console.error('Failed to export users:', error);
                Alpine.store('app').showToast('Failed to export users', 'error');
            }
        },
        
        // Content management methods
        async loadContent() {
            this.loading.content = true;
            try {
                const filters = {
                    type: this.contentFilter === 'all' ? null : this.contentFilter,
                    search: this.contentSearch || null
                };
                
                const response = await window.adminAPI.getContent(filters);
                if (response.success) {
                    this.contentItems = response.data.map(item => ({
                        id: item.id,
                        title: item.title,
                        type: item.type,
                        domain: item.domain,
                        description: item.description || '',
                        status: item.status,
                        lastModified: this.formatDate(item.updated_at || item.created_at)
                    }));
                }
            } catch (error) {
                console.error('Failed to load content:', error);
                Alpine.store('app').showToast('Failed to load content', 'error');
            } finally {
                this.loading.content = false;
            }
        },
        
        get filteredContent() {
            return this.contentItems.filter(content => {
                if (this.contentFilter !== 'all' && content.type !== this.contentFilter) {
                    return false;
                }
                if (this.contentSearch) {
                    const search = this.contentSearch.toLowerCase();
                    return content.title.toLowerCase().includes(search) || 
                           content.description.toLowerCase().includes(search) ||
                           content.domain.toLowerCase().includes(search);
                }
                return true;
            });
        },
        
        // Watch for section changes to load data
        async onSectionChange() {
            switch (this.activeSection) {
                case 'dashboard':
                    await this.loadDashboardData();
                    break;
                case 'users':
                    await this.loadUsers();
                    break;
                case 'content':
                    await this.loadContent();
                    break;
                case 'audit':
                    await this.loadAuditLogs();
                    break;
            }
        },
        
        // Utility methods
        formatTimestamp(timestamp) {
            if (!timestamp) return 'Never';
            
            const time = new Date(timestamp);
            const now = new Date();
            const diff = now - time;
            
            if (diff < 60000) {
                return 'just now';
            } else if (diff < 3600000) {
                return Math.floor(diff / 60000) + ' minutes ago';
            } else if (diff < 86400000) {
                return Math.floor(diff / 3600000) + ' hours ago';
            } else if (diff < 604800000) {
                return Math.floor(diff / 86400000) + ' days ago';
            } else {
                return time.toLocaleDateString();
            }
        },
        
        formatDate(dateString) {
            if (!dateString) return '';
            return new Date(dateString).toLocaleDateString();
        },
        
        getRoleBadgeClass(role) {
            const classes = {
                'super_admin': 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200',
                'admin': 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200',
                'instructor': 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200',
                'learner': 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200'
            };
            return classes[role] || 'bg-gray-100 text-gray-800';
        },
        
        // Placeholder methods for features to be implemented
        async loadAuditLogs() {
            console.log('Loading audit logs...');
        },
        
        async saveSSOConfig() {
            localStorage.setItem('mvl_sso_config', JSON.stringify(this.ssoConfig));
            Alpine.store('app').showToast('SSO configuration saved!', 'success');
        },
        
        async testSSOConnection() {
            Alpine.store('app').showToast('Testing SSO connection...', 'info');
            // Implementation would go here
        },
        
        async generateReport() {
            Alpine.store('app').showToast('Generating report...', 'info');
            // Implementation would go here
        }
    }
}
