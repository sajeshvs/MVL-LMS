/**
 * MVL-LMS Admin API Service
 * Handles all API communications for the admin panel
 */

class AdminAPI {
    constructor() {
        this.baseURL = '/api/v1';
        this.token = localStorage.getItem('mvl_auth_token');
    }

    // Helper method for making API requests
    async request(endpoint, options = {}) {
        const url = `${this.baseURL}${endpoint}`;
        const defaultOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        };

        if (this.token) {
            defaultOptions.headers['Authorization'] = `Bearer ${this.token}`;
        }

        const config = {
            ...defaultOptions,
            ...options,
            headers: { ...defaultOptions.headers, ...options.headers }
        };

        try {
            const response = await fetch(url, config);
            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.message || `HTTP error! status: ${response.status}`);
            }

            return data;
        } catch (error) {
            console.error('API request failed:', error);
            throw error;
        }
    }

    // Authentication methods
    async login(credentials) {
        const response = await this.request('/auth/login', {
            method: 'POST',
            body: JSON.stringify(credentials)
        });

        if (response.success && response.data.token) {
            this.token = response.data.token;
            localStorage.setItem('mvl_auth_token', this.token);
            localStorage.setItem('mvl_user', JSON.stringify(response.data.user));
        }

        return response;
    }

    async logout() {
        try {
            await this.request('/auth/logout', { method: 'POST' });
        } finally {
            this.token = null;
            localStorage.removeItem('mvl_auth_token');
            localStorage.removeItem('mvl_user');
        }
    }

    async getCurrentUser() {
        return await this.request('/auth/me');
    }

    // Dashboard methods
    async getDashboardStats() {
        return await this.request('/admin/dashboard');
    }

    async getRecentActivity(limit = 10) {
        return await this.request(`/admin/recent-activity?limit=${limit}`);
    }

    async getComplianceStats() {
        return await this.request('/admin/compliance-stats');
    }

    // User management methods
    async getUsers(filters = {}) {
        const params = new URLSearchParams();
        Object.keys(filters).forEach(key => {
            if (filters[key] !== null && filters[key] !== '') {
                params.append(key, filters[key]);
            }
        });
        
        return await this.request(`/users?${params.toString()}`);
    }

    async getUser(id) {
        return await this.request(`/users/${id}`);
    }

    async createUser(userData) {
        return await this.request('/users', {
            method: 'POST',
            body: JSON.stringify(userData)
        });
    }

    async updateUser(id, userData) {
        return await this.request(`/users/${id}`, {
            method: 'PUT',
            body: JSON.stringify(userData)
        });
    }

    async deleteUser(id) {
        return await this.request(`/users/${id}`, {
            method: 'DELETE'
        });
    }

    async resetUserPassword(id, newPassword) {
        return await this.request(`/users/${id}/reset-password`, {
            method: 'POST',
            body: JSON.stringify({ password: newPassword })
        });
    }

    async resetUserProgress(id) {
        return await this.request(`/users/${id}/reset-progress`, {
            method: 'POST'
        });
    }

    async exportUsers(format = 'json', filters = {}) {
        const params = new URLSearchParams({ format, ...filters });
        
        const response = await fetch(`${this.baseURL}/users/export?${params.toString()}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });

        if (!response.ok) {
            throw new Error('Export failed');
        }

        if (format === 'csv') {
            const blob = await response.blob();
            this.downloadFile(blob, 'users.csv', 'text/csv');
        } else {
            const blob = await response.blob();
            this.downloadFile(blob, 'users.json', 'application/json');
        }
    }

    // Content management methods
    async getContent(filters = {}) {
        const params = new URLSearchParams();
        Object.keys(filters).forEach(key => {
            if (filters[key] !== null && filters[key] !== '') {
                params.append(key, filters[key]);
            }
        });
        
        return await this.request(`/content?${params.toString()}`);
    }

    async getContentItem(id) {
        return await this.request(`/content/${id}`);
    }

    async createContent(contentData) {
        return await this.request('/content', {
            method: 'POST',
            body: JSON.stringify(contentData)
        });
    }

    async updateContent(id, contentData) {
        return await this.request(`/content/${id}`, {
            method: 'PUT',
            body: JSON.stringify(contentData)
        });
    }

    async deleteContent(id) {
        return await this.request(`/content/${id}`, {
            method: 'DELETE'
        });
    }

    async publishContent(id) {
        return await this.request(`/content/${id}/publish`, {
            method: 'POST'
        });
    }

    async archiveContent(id) {
        return await this.request(`/content/${id}/archive`, {
            method: 'POST'
        });
    }

    async importContent(file) {
        const formData = new FormData();
        formData.append('file', file);

        return await this.request('/content/import', {
            method: 'POST',
            body: formData,
            headers: {
                'Authorization': `Bearer ${this.token}`
                // Don't set Content-Type, let browser handle it for FormData
            }
        });
    }

    async exportContent(format = 'json', filters = {}) {
        const params = new URLSearchParams({ format, ...filters });
        
        const response = await fetch(`${this.baseURL}/content/export?${params.toString()}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });

        if (!response.ok) {
            throw new Error('Export failed');
        }

        if (format === 'csv') {
            const blob = await response.blob();
            this.downloadFile(blob, 'content.csv', 'text/csv');
        } else {
            const blob = await response.blob();
            this.downloadFile(blob, 'content.json', 'application/json');
        }
    }

    // System settings methods
    async getSystemSettings() {
        return await this.request('/admin/system-settings');
    }

    async updateSystemSettings(settings) {
        return await this.request('/admin/system-settings', {
            method: 'PUT',
            body: JSON.stringify(settings)
        });
    }

    // SSO methods
    async testSSOConnection(config) {
        return await this.request('/admin/sso/test', {
            method: 'POST',
            body: JSON.stringify(config)
        });
    }

    // Analytics and reporting methods
    async generateReport(type, format = 'json') {
        const params = new URLSearchParams({ type, format });
        
        if (format === 'csv') {
            const response = await fetch(`${this.baseURL}/admin/reports?${params.toString()}`, {
                headers: {
                    'Authorization': `Bearer ${this.token}`
                }
            });

            if (!response.ok) {
                throw new Error('Report generation failed');
            }

            const blob = await response.blob();
            this.downloadFile(blob, `${type}-report.csv`, 'text/csv');
        } else {
            return await this.request(`/admin/reports?${params.toString()}`);
        }
    }

    // Audit log methods
    async getAuditLogs(filters = {}) {
        const params = new URLSearchParams();
        Object.keys(filters).forEach(key => {
            if (filters[key] !== null && filters[key] !== '') {
                params.append(key, filters[key]);
            }
        });
        
        return await this.request(`/admin/audit-logs?${params.toString()}`);
    }

    async exportAuditLogs(format = 'json', filters = {}) {
        const params = new URLSearchParams({ format, ...filters });
        
        const response = await fetch(`${this.baseURL}/admin/audit-logs/export?${params.toString()}`, {
            headers: {
                'Authorization': `Bearer ${this.token}`
            }
        });

        if (!response.ok) {
            throw new Error('Export failed');
        }

        if (format === 'csv') {
            const blob = await response.blob();
            this.downloadFile(blob, 'audit-logs.csv', 'text/csv');
        } else {
            const blob = await response.blob();
            this.downloadFile(blob, 'audit-logs.json', 'application/json');
        }
    }

    // File upload methods
    async uploadFile(file, type = 'content') {
        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', type);

        return await fetch(`${this.baseURL}/upload`, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${this.token}`
            },
            body: formData
        }).then(response => response.json());
    }

    // Utility methods
    downloadFile(blob, filename, mimeType) {
        const url = window.URL.createObjectURL(new Blob([blob], { type: mimeType }));
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        window.URL.revokeObjectURL(url);
    }

    // Error handling utility
    handleError(error) {
        console.error('API Error:', error);
        
        if (error.message.includes('401') || error.message.includes('Unauthorized')) {
            // Token expired or invalid
            this.logout();
            window.location.href = '/login.html';
        }
        
        return {
            success: false,
            message: error.message || 'An unexpected error occurred'
        };
    }
}

// Create global instance
window.adminAPI = new AdminAPI();
