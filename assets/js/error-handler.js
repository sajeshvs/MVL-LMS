/**
 * Enhanced Error Handling System for MVL-LMS
 * Provides comprehensive error logging, user notifications, and analytics
 */
class ErrorHandler {
    constructor() {
        this.errors = [];
        this.maxStoredErrors = 50;
        this.setupGlobalHandlers();
        this.initializeErrorBoundary();
    }
    
    /**
     * Set up global error handlers
     */
    setupGlobalHandlers() {
        // Handle unhandled JavaScript errors
        window.addEventListener('error', (event) => {
            this.logError({
                type: 'javascript',
                message: event.error?.message || event.message,
                stack: event.error?.stack,
                filename: event.filename,
                line: event.lineno,
                column: event.colno,
                severity: 'error'
            });
        });
        
        // Handle unhandled promise rejections
        window.addEventListener('unhandledrejection', (event) => {
            this.logError({
                type: 'promise',
                message: event.reason?.message || event.reason,
                stack: event.reason?.stack,
                severity: 'error'
            });
            
            // Prevent the default browser behavior
            event.preventDefault();
        });
        
        // Handle network errors
        window.addEventListener('offline', () => {
            this.logError({
                type: 'network',
                message: 'Network connection lost',
                severity: 'warning',
                userMessage: 'You are now offline. Some features may not work.'
            });
        });
        
        window.addEventListener('online', () => {
            this.logInfo('Network connection restored');
            this.showUserMessage('Connection restored', 'success');
        });
    }
    
    /**
     * Initialize error boundary for React-like error catching
     */
    initializeErrorBoundary() {
        const originalConsoleError = console.error;
        console.error = (...args) => {
            // Check if this looks like a React error
            const message = args.join(' ');
            if (message.includes('React') || message.includes('component')) {
                this.logError({
                    type: 'component',
                    message: message,
                    severity: 'error'
                });
            }
            originalConsoleError.apply(console, args);
        };
    }
    
    /**
     * Log an error with full context
     */
    logError(error, context = {}) {
        // Enhance error with metadata
        const enhancedError = {
            ...error,
            ...context,
            id: this.generateErrorId(),
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            userId: this.getCurrentUserId(),
            sessionId: this.getSessionId(),
            viewport: {
                width: window.innerWidth,
                height: window.innerHeight
            },
            performance: this.getPerformanceMetrics()
        };
        
        // Store error (with rotation)
        this.errors.unshift(enhancedError);
        if (this.errors.length > this.maxStoredErrors) {
            this.errors = this.errors.slice(0, this.maxStoredErrors);
        }
        
        // Console log in development
        if (APP_CONFIG?.app?.debug) {
            console.group(`🚨 Error [${enhancedError.id}]`);
            console.error('Message:', enhancedError.message);
            console.error('Type:', enhancedError.type);
            console.error('Stack:', enhancedError.stack);
            console.error('Context:', context);
            console.groupEnd();
        }
        
        // Send to analytics/logging service
        if (APP_CONFIG?.features?.analytics) {
            this.sendToAnalytics(enhancedError);
        }
        
        // Show user notification for critical errors
        if (enhancedError.severity === 'error' || enhancedError.userMessage) {
            this.showUserMessage(
                enhancedError.userMessage || 'An error occurred. Please try again.',
                'error'
            );
        }
        
        // Trigger custom error event
        window.dispatchEvent(new CustomEvent('mvl:error', { detail: enhancedError }));
        
        return enhancedError.id;
    }
    
    /**
     * Log info message
     */
    logInfo(message, context = {}) {
        if (APP_CONFIG?.app?.debug) {
            console.info('ℹ️', message, context);
        }
    }
    
    /**
     * Log warning
     */
    logWarning(message, context = {}) {
        const warning = {
            type: 'warning',
            message,
            severity: 'warning',
            ...context
        };
        
        this.logError(warning);
    }
    
    /**
     * Send error to analytics service
     */
    async sendToAnalytics(error) {
        try {
            // Only send non-sensitive error data
            const sanitizedError = {
                id: error.id,
                type: error.type,
                message: error.message,
                timestamp: error.timestamp,
                url: error.url,
                severity: error.severity,
                userAgent: error.userAgent,
                viewport: error.viewport
            };
            
            await fetch(`${APP_CONFIG.api.baseUrl}/errors`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': window.SecurityManager?.getCSRFToken?.() || ''
                },
                body: JSON.stringify(sanitizedError)
            });
        } catch (e) {
            // Silently fail - don't create error loop
            if (APP_CONFIG?.app?.debug) {
                console.warn('Failed to send error to analytics:', e);
            }
        }
    }
    
    /**
     * Show user-friendly error message
     */
    showUserMessage(message, type = 'error', duration = 5000) {
        // Remove existing notifications
        document.querySelectorAll('.mvl-notification').forEach(el => el.remove());
        
        const notification = document.createElement('div');
        notification.className = `mvl-notification fixed top-4 right-4 p-4 rounded-lg shadow-lg z-50 max-w-sm transform transition-all duration-300 ${this.getNotificationStyles(type)}`;
        
        notification.innerHTML = `
            <div class="flex items-start">
                <div class="flex-shrink-0">
                    ${this.getNotificationIcon(type)}
                </div>
                <div class="ml-3 flex-1">
                    <p class="text-sm font-medium">${this.getNotificationTitle(type)}</p>
                    <p class="text-sm mt-1 opacity-90">${message}</p>
                </div>
                <button onclick="this.parentElement.parentElement.remove()" 
                        class="ml-4 flex-shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
            </div>
        `;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => notification.classList.add('translate-x-0'), 10);
        
        // Auto-remove
        if (duration > 0) {
            setTimeout(() => {
                notification.classList.add('translate-x-full', 'opacity-0');
                setTimeout(() => notification.remove(), 300);
            }, duration);
        }
    }
    
    /**
     * Get notification styles based on type
     */
    getNotificationStyles(type) {
        const styles = {
            error: 'bg-red-500 text-white',
            warning: 'bg-yellow-500 text-white',
            success: 'bg-green-500 text-white',
            info: 'bg-blue-500 text-white'
        };
        return styles[type] || styles.info;
    }
    
    /**
     * Get notification icon based on type
     */
    getNotificationIcon(type) {
        const icons = {
            error: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            warning: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z"></path></svg>',
            success: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>',
            info: '<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>'
        };
        return icons[type] || icons.info;
    }
    
    /**
     * Get notification title based on type
     */
    getNotificationTitle(type) {
        const titles = {
            error: 'Error',
            warning: 'Warning',
            success: 'Success',
            info: 'Information'
        };
        return titles[type] || titles.info;
    }
    
    /**
     * Utility methods
     */
    generateErrorId() {
        return `err_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    }
    
    getCurrentUserId() {
        try {
            const userData = JSON.parse(localStorage.getItem('userData') || '{}');
            return userData.id || 'anonymous';
        } catch {
            return 'anonymous';
        }
    }
    
    getSessionId() {
        let sessionId = sessionStorage.getItem('sessionId');
        if (!sessionId) {
            sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            sessionStorage.setItem('sessionId', sessionId);
        }
        return sessionId;
    }
    
    getPerformanceMetrics() {
        if (!performance.getEntriesByType) return null;
        
        const navigation = performance.getEntriesByType('navigation')[0];
        return navigation ? {
            loadTime: Math.round(navigation.loadEventEnd - navigation.loadEventStart),
            domContentLoaded: Math.round(navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart),
            networkLatency: Math.round(navigation.responseStart - navigation.fetchStart)
        } : null;
    }
    
    /**
     * Get error statistics
     */
    getErrorStats() {
        const stats = {
            total: this.errors.length,
            types: {},
            severities: {},
            recent: this.errors.slice(0, 10)
        };
        
        this.errors.forEach(error => {
            stats.types[error.type] = (stats.types[error.type] || 0) + 1;
            stats.severities[error.severity] = (stats.severities[error.severity] || 0) + 1;
        });
        
        return stats;
    }
    
    /**
     * Clear stored errors
     */
    clearErrors() {
        this.errors = [];
        if (APP_CONFIG?.app?.debug) {
            console.log('Error log cleared');
        }
    }
    
    /**
     * Export errors for debugging
     */
    exportErrors() {
        const exportData = {
            timestamp: new Date().toISOString(),
            appVersion: APP_CONFIG?.app?.version,
            userAgent: navigator.userAgent,
            errors: this.errors
        };
        
        const blob = new Blob([JSON.stringify(exportData, null, 2)], {
            type: 'application/json'
        });
        
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mvl-lms-errors-${Date.now()}.json`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    }
}

// Initialize global error handler
const errorHandler = new ErrorHandler();

// Export for use in other parts of the application
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { ErrorHandler, errorHandler };
} else {
    window.ErrorHandler = ErrorHandler;
    window.errorHandler = errorHandler;
}

// Add convenience methods to window for easy access
window.logError = (message, context) => errorHandler.logError({ message, type: 'manual', severity: 'error' }, context);
window.logWarning = (message, context) => errorHandler.logWarning(message, context);
window.logInfo = (message, context) => errorHandler.logInfo(message, context);
