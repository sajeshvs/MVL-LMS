/**
 * Enhanced API Client for MVL-LMS
 * Provides robust API communication with retry logic, caching, and error handling
 */
class APIClient {
    constructor(config = {}) {
        this.baseURL = config.baseURL || APP_CONFIG?.api?.baseUrl || '/api';
        this.timeout = config.timeout || APP_CONFIG?.api?.timeout || 30000;
        this.retryAttempts = config.retryAttempts || APP_CONFIG?.api?.retryAttempts || 3;
        this.retryDelay = config.retryDelay || APP_CONFIG?.api?.retryDelay || 1000;
        this.cache = new Map();
        this.requestQueue = [];
        this.activeRequests = 0;
        this.maxConcurrentRequests = APP_CONFIG?.api?.maxConcurrentRequests || 5;
        
        this.initializeInterceptors();
    }
    
    /**
     * Initialize request/response interceptors
     */
    initializeInterceptors() {
        this.requestInterceptors = [];
        this.responseInterceptors = [];
        
        // Add default request interceptor for authentication
        this.requestInterceptors.push((config) => {
            const session = JSON.parse(localStorage.getItem('session') || '{}');
            if (session.token) {
                config.headers = {
                    ...config.headers,
                    'Authorization': `Bearer ${session.token}`
                };
            }
            return config;
        });
        
        // Add default response interceptor for error handling
        this.responseInterceptors.push(
            (response) => response,
            (error) => {
                if (error.status === 401) {
                    // Unauthorized - clear session and redirect to login
                    window.SecurityManager?.clearSession();
                    window.location.href = APP_CONFIG?.auth?.logoutRedirect || '/login.html';
                }
                return Promise.reject(error);
            }
        );
    }
    
    /**
     * Main request method with retry logic and caching
     */
    async request(endpoint, options = {}) {
        const config = await this.processRequestConfig(endpoint, options);
        
        // Check cache for GET requests
        if (config.method === 'GET' && config.cache !== false) {
            const cached = this.getFromCache(config.url);
            if (cached) {
                return cached;
            }
        }
        
        // Queue request if at max concurrent limit
        if (this.activeRequests >= this.maxConcurrentRequests) {
            return new Promise((resolve, reject) => {
                this.requestQueue.push(() => this.executeRequest(config).then(resolve).catch(reject));
            });
        }
        
        return this.executeRequest(config);
    }
    
    /**
     * Execute the actual request
     */
    async executeRequest(config) {
        this.activeRequests++;
        
        try {
            const response = await this.fetchWithRetry(config);
            const result = await this.processResponse(response, config);
            
            // Cache successful GET requests
            if (config.method === 'GET' && config.cache !== false && result.success) {
                this.setCache(config.url, result, config.cacheTime);
            }
            
            return result;
        } finally {
            this.activeRequests--;
            this.processQueue();
        }
    }
    
    /**
     * Process request configuration
     */
    async processRequestConfig(endpoint, options) {
        let config = {
            url: endpoint.startsWith('http') ? endpoint : `${this.baseURL}${endpoint}`,
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            cache: true,
            cacheTime: 5 * 60 * 1000, // 5 minutes default
            ...options
        };
        
        // Apply request interceptors
        for (const interceptor of this.requestInterceptors) {
            config = await interceptor(config);
        }
        
        return config;
    }
    
    /**
     * Fetch with retry logic
     */
    async fetchWithRetry(config, attempt = 1) {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), this.timeout);
        
        const fetchOptions = {
            method: config.method,
            headers: config.headers,
            body: config.body,
            signal: controller.signal
        };
        
        try {
            const response = await fetch(config.url, fetchOptions);
            clearTimeout(timeoutId);
            return response;
        } catch (error) {
            clearTimeout(timeoutId);
            
            if (error.name === 'AbortError') {
                throw new APIError(408, 'Request timeout', config);
            }
            
            if (attempt < this.retryAttempts && this.shouldRetry(error)) {
                await this.delay(this.retryDelay * attempt);
                return this.fetchWithRetry(config, attempt + 1);
            }
            
            throw new APIError(0, error.message, config);
        }
    }
    
    /**
     * Process response
     */
    async processResponse(response, config) {
        let result = {
            success: response.ok,
            status: response.status,
            statusText: response.statusText,
            headers: Object.fromEntries(response.headers.entries()),
            config
        };
        
        try {
            // Try to parse as JSON
            const text = await response.text();
            if (text) {
                try {
                    result.data = JSON.parse(text);
                } catch {
                    result.data = text;
                }
            }
        } catch (error) {
            result.data = null;
        }
        
        if (!response.ok) {
            const apiError = new APIError(response.status, response.statusText, config, result.data);
            
            // Apply response error interceptors
            for (const interceptor of this.responseInterceptors) {
                if (interceptor.length > 1) {
                    try {
                        await interceptor[1](apiError);
                    } catch (error) {
                        // Continue with original error
                    }
                }
            }
            
            throw apiError;
        }
        
        // Apply response success interceptors
        for (const interceptor of this.responseInterceptors) {
            if (interceptor.length === 1 || typeof interceptor === 'function') {
                const interceptorFn = typeof interceptor === 'function' ? interceptor : interceptor[0];
                result = await interceptorFn(result);
            }
        }
        
        return result;
    }
    
    /**
     * Cache management
     */
    getFromCache(key) {
        const cached = this.cache.get(key);
        if (cached && Date.now() < cached.expires) {
            return cached.data;
        }
        this.cache.delete(key);
        return null;
    }
    
    setCache(key, data, duration = 5 * 60 * 1000) {
        this.cache.set(key, {
            data,
            expires: Date.now() + duration
        });
    }
    
    clearCache(pattern = null) {
        if (pattern) {
            const regex = new RegExp(pattern);
            for (const key of this.cache.keys()) {
                if (regex.test(key)) {
                    this.cache.delete(key);
                }
            }
        } else {
            this.cache.clear();
        }
    }
    
    /**
     * Request queue management
     */
    processQueue() {
        if (this.requestQueue.length > 0 && this.activeRequests < this.maxConcurrentRequests) {
            const nextRequest = this.requestQueue.shift();
            nextRequest();
        }
    }
    
    /**
     * Utility methods
     */
    shouldRetry(error) {
        // Retry on network errors and 5xx status codes
        return !error.status || (error.status >= 500 && error.status < 600);
    }
    
    delay(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    /**
     * Convenience methods
     */
    get(endpoint, params = {}, options = {}) {
        const queryString = new URLSearchParams(params).toString();
        const url = queryString ? `${endpoint}?${queryString}` : endpoint;
        return this.request(url, { ...options, method: 'GET' });
    }
    
    post(endpoint, data, options = {}) {
        return this.request(endpoint, {
            ...options,
            method: 'POST',
            body: JSON.stringify(data)
        });
    }
    
    put(endpoint, data, options = {}) {
        return this.request(endpoint, {
            ...options,
            method: 'PUT',
            body: JSON.stringify(data)
        });
    }
    
    patch(endpoint, data, options = {}) {
        return this.request(endpoint, {
            ...options,
            method: 'PATCH',
            body: JSON.stringify(data)
        });
    }
    
    delete(endpoint, options = {}) {
        return this.request(endpoint, { ...options, method: 'DELETE' });
    }
    
    /**
     * File upload method
     */
    async upload(endpoint, file, options = {}) {
        const formData = new FormData();
        formData.append('file', file);
        
        if (options.fields) {
            Object.entries(options.fields).forEach(([key, value]) => {
                formData.append(key, value);
            });
        }
        
        return this.request(endpoint, {
            ...options,
            method: 'POST',
            body: formData,
            headers: {
                // Don't set Content-Type - let browser set it with boundary
                'Accept': 'application/json'
            }
        });
    }
    
    /**
     * Specific API methods for MVL-LMS
     */
    
    // User Management
    async getCurrentUser() {
        return this.get('/users/me');
    }
    
    async updateUser(userId, userData) {
        return this.put(`/users/${userId}`, userData);
    }
    
    async getUserProgress(userId) {
        return this.get(`/users/${userId}/progress`);
    }
    
    // Course Management
    async getCourses(filters = {}) {
        return this.get('/courses', filters);
    }
    
    async getCourse(courseId) {
        return this.get(`/courses/${courseId}`);
    }
    
    async createCourse(courseData) {
        return this.post('/courses', courseData);
    }
    
    async updateCourse(courseId, courseData) {
        return this.put(`/courses/${courseId}`, courseData);
    }
    
    async deleteCourse(courseId) {
        return this.delete(`/courses/${courseId}`);
    }
    
    // Lesson Management
    async getLessons(courseId) {
        return this.get(`/courses/${courseId}/lessons`);
    }
    
    async getLesson(courseId, lessonId) {
        return this.get(`/courses/${courseId}/lessons/${lessonId}`);
    }
    
    async saveLessonProgress(userId, lessonId, progress) {
        return this.post(`/users/${userId}/lessons/${lessonId}/progress`, progress);
    }
    
    async completeLessonChapter(userId, lessonId, chapterId) {
        return this.post(`/users/${userId}/lessons/${lessonId}/chapters/${chapterId}/complete`);
    }
    
    // Enrollment Management
    async enrollInCourse(userId, courseId) {
        return this.post(`/users/${userId}/enrollments`, { courseId });
    }
    
    async getEnrollments(userId) {
        return this.get(`/users/${userId}/enrollments`);
    }
    
    async unenrollFromCourse(userId, courseId) {
        return this.delete(`/users/${userId}/enrollments/${courseId}`);
    }
    
    // Assessment Management
    async getAssessments(courseId) {
        return this.get(`/courses/${courseId}/assessments`);
    }
    
    async submitAssessment(assessmentId, answers) {
        return this.post(`/assessments/${assessmentId}/submissions`, { answers });
    }
    
    async getAssessmentResults(assessmentId, userId) {
        return this.get(`/assessments/${assessmentId}/results/${userId}`);
    }
    
    // Analytics
    async getLearningAnalytics(userId, timeframe = '30d') {
        return this.get(`/analytics/users/${userId}`, { timeframe });
    }
    
    async getCourseAnalytics(courseId) {
        return this.get(`/analytics/courses/${courseId}`);
    }
    
    // Search
    async searchContent(query, filters = {}) {
        return this.get('/search', { q: query, ...filters });
    }
    
    // Notifications
    async getNotifications(userId) {
        return this.get(`/users/${userId}/notifications`);
    }
    
    async markNotificationRead(notificationId) {
        return this.patch(`/notifications/${notificationId}`, { read: true });
    }
    
    /**
     * Interceptor management
     */
    addRequestInterceptor(interceptor) {
        this.requestInterceptors.push(interceptor);
    }
    
    addResponseInterceptor(successInterceptor, errorInterceptor) {
        this.responseInterceptors.push([successInterceptor, errorInterceptor]);
    }
    
    /**
     * Request cancellation
     */
    createCancelToken() {
        return new AbortController();
    }
    
    /**
     * Health check
     */
    async healthCheck() {
        return this.get('/health', {}, { cache: false });
    }
}

/**
 * Custom API Error class
 */
class APIError extends Error {
    constructor(status, message, config, data) {
        super(message);
        this.name = 'APIError';
        this.status = status;
        this.config = config;
        this.data = data;
        this.timestamp = new Date().toISOString();
    }
    
    toJSON() {
        return {
            name: this.name,
            message: this.message,
            status: this.status,
            timestamp: this.timestamp,
            url: this.config?.url,
            method: this.config?.method
        };
    }
}

/**
 * Create and export singleton instance
 */
const apiClient = new APIClient();

// Global error handling for API errors
apiClient.addResponseInterceptor(
    (response) => response,
    (error) => {
        if (window.errorHandler) {
            window.errorHandler.logError({
                type: 'api',
                message: error.message,
                severity: 'error',
                status: error.status,
                url: error.config?.url,
                method: error.config?.method
            });
        }
        return Promise.reject(error);
    }
);

// Export for global use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { APIClient, APIError, apiClient };
} else {
    window.APIClient = APIClient;
    window.APIError = APIError;
    window.apiClient = apiClient;
}
