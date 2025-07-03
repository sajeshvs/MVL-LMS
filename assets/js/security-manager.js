/**
 * Security Manager for MVL-LMS
 * Handles authentication, CSRF protection, input sanitization, and security utilities
 */
class SecurityManager {
    static #csrfToken = null;
    static #encryptionKey = null;
    
    /**
     * Initialize security manager
     */
    static initialize() {
        this.setupCSRFProtection();
        this.setupContentSecurityPolicy();
        this.setupSecureHeaders();
        this.monitorSecurityEvents();
        
        if (APP_CONFIG?.app?.debug) {
            console.log('🔒 Security Manager initialized');
        }
    }
    
    /**
     * CSRF Token Management
     */
    static generateCSRFToken() {
        this.#csrfToken = crypto.randomUUID();
        sessionStorage.setItem('csrf_token', this.#csrfToken);
        
        // Set expiration
        const expiration = Date.now() + (APP_CONFIG?.auth?.sessionTimeout || 1800000);
        sessionStorage.setItem('csrf_token_expires', expiration.toString());
        
        return this.#csrfToken;
    }
    
    static getCSRFToken() {
        // Check if token exists and is not expired
        const expires = parseInt(sessionStorage.getItem('csrf_token_expires') || '0');
        if (Date.now() > expires) {
            this.generateCSRFToken();
        } else if (!this.#csrfToken) {
            this.#csrfToken = sessionStorage.getItem('csrf_token') || this.generateCSRFToken();
        }
        
        return this.#csrfToken;
    }
    
    static validateCSRFToken(token) {
        const storedToken = this.getCSRFToken();
        return token && storedToken && token === storedToken;
    }
    
    /**
     * Setup CSRF protection for fetch requests
     */
    static setupCSRFProtection() {
        if (!APP_CONFIG?.security?.enableCSRF) return;
        
        const originalFetch = window.fetch;
        window.fetch = function(...args) {
            let [url, options = {}] = args;
            
            // Add CSRF token to headers for state-changing requests
            if (['POST', 'PUT', 'DELETE', 'PATCH'].includes(options.method?.toUpperCase())) {
                options.headers = {
                    ...options.headers,
                    'X-CSRF-Token': SecurityManager.getCSRFToken()
                };
            }
            
            return originalFetch.call(this, url, options);
        };
    }
    
    /**
     * Session Management
     */
    static validateSession() {
        try {
            const session = JSON.parse(localStorage.getItem('session') || '{}');
            
            if (!session.token || !session.expires) {
                return false;
            }
            
            if (new Date(session.expires) < new Date()) {
                this.clearSession();
                return false;
            }
            
            // Check for suspicious activity
            if (this.detectSuspiciousActivity(session)) {
                this.clearSession();
                this.logSecurityEvent('suspicious_session', 'Session cleared due to suspicious activity');
                return false;
            }
            
            return true;
        } catch (error) {
            this.logSecurityEvent('session_validation_error', error.message);
            return false;
        }
    }
    
    static createSession(userData, token, expiresIn = APP_CONFIG?.auth?.sessionTimeout || 1800000) {
        const session = {
            token,
            user: this.sanitizeUserData(userData),
            expires: new Date(Date.now() + expiresIn).toISOString(),
            created: new Date().toISOString(),
            lastActivity: new Date().toISOString(),
            fingerprint: this.generateFingerprint()
        };
        
        localStorage.setItem('session', JSON.stringify(session));
        localStorage.setItem('userData', JSON.stringify(session.user));
        
        this.logSecurityEvent('session_created', 'User session created');
        return session;
    }
    
    static updateSessionActivity() {
        try {
            const session = JSON.parse(localStorage.getItem('session') || '{}');
            if (session.token) {
                session.lastActivity = new Date().toISOString();
                localStorage.setItem('session', JSON.stringify(session));
            }
        } catch (error) {
            this.logSecurityEvent('session_update_error', error.message);
        }
    }
    
    static clearSession() {
        localStorage.removeItem('session');
        localStorage.removeItem('userData');
        sessionStorage.removeItem('csrf_token');
        sessionStorage.removeItem('csrf_token_expires');
        this.#csrfToken = null;
        
        this.logSecurityEvent('session_cleared', 'User session cleared');
    }
    
    /**
     * Input Sanitization
     */
    static sanitizeInput(input) {
        if (typeof input !== 'string') return input;
        
        // Create a temporary div to use built-in HTML escaping
        const div = document.createElement('div');
        div.textContent = input;
        return div.innerHTML;
    }
    
    static sanitizeHTML(html) {
        // Basic HTML sanitization - in production, use DOMPurify
        const allowedTags = ['p', 'br', 'strong', 'em', 'u', 'ul', 'ol', 'li'];
        const div = document.createElement('div');
        div.innerHTML = html;
        
        // Remove script tags and event handlers
        div.querySelectorAll('script').forEach(el => el.remove());
        div.querySelectorAll('*').forEach(el => {
            Array.from(el.attributes).forEach(attr => {
                if (attr.name.startsWith('on') || attr.name === 'javascript:') {
                    el.removeAttribute(attr.name);
                }
            });
            
            if (!allowedTags.includes(el.tagName.toLowerCase())) {
                el.replaceWith(...el.childNodes);
            }
        });
        
        return div.innerHTML;
    }
    
    static sanitizeUserData(userData) {
        const sanitized = {};
        const allowedFields = ['id', 'username', 'email', 'firstName', 'lastName', 'role', 'permissions'];
        
        allowedFields.forEach(field => {
            if (userData[field]) {
                sanitized[field] = this.sanitizeInput(userData[field]);
            }
        });
        
        return sanitized;
    }
    
    /**
     * Validation Utilities
     */
    static validateEmail(email) {
        const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
        return emailRegex.test(email) && email.length <= 254;
    }
    
    static validatePassword(password) {
        const checks = {
            length: password.length >= 8,
            uppercase: /[A-Z]/.test(password),
            lowercase: /[a-z]/.test(password),
            numbers: /\d/.test(password),
            special: /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(password)
        };
        
        const score = Object.values(checks).filter(Boolean).length;
        
        return {
            isValid: score >= 4,
            score,
            checks,
            strength: score < 3 ? 'weak' : score < 4 ? 'medium' : 'strong'
        };
    }
    
    static validateURL(url) {
        try {
            const parsed = new URL(url);
            const allowedProtocols = ['http:', 'https:'];
            return allowedProtocols.includes(parsed.protocol);
        } catch {
            return false;
        }
    }
    
    /**
     * Encryption Utilities (Basic - use server-side for production)
     */
    static async generateEncryptionKey() {
        if (!window.crypto || !window.crypto.subtle) {
            throw new Error('Web Crypto API not supported');
        }
        
        this.#encryptionKey = await window.crypto.subtle.generateKey(
            { name: 'AES-GCM', length: 256 },
            false,
            ['encrypt', 'decrypt']
        );
        
        return this.#encryptionKey;
    }
    
    static async encryptData(data) {
        if (!this.#encryptionKey) {
            await this.generateEncryptionKey();
        }
        
        const encoder = new TextEncoder();
        const dataBuffer = encoder.encode(JSON.stringify(data));
        const iv = window.crypto.getRandomValues(new Uint8Array(12));
        
        const encryptedBuffer = await window.crypto.subtle.encrypt(
            { name: 'AES-GCM', iv },
            this.#encryptionKey,
            dataBuffer
        );
        
        return {
            data: Array.from(new Uint8Array(encryptedBuffer)),
            iv: Array.from(iv)
        };
    }
    
    static async decryptData(encryptedData) {
        if (!this.#encryptionKey) {
            throw new Error('Encryption key not available');
        }
        
        const dataBuffer = new Uint8Array(encryptedData.data);
        const iv = new Uint8Array(encryptedData.iv);
        
        const decryptedBuffer = await window.crypto.subtle.decrypt(
            { name: 'AES-GCM', iv },
            this.#encryptionKey,
            dataBuffer
        );
        
        const decoder = new TextDecoder();
        return JSON.parse(decoder.decode(decryptedBuffer));
    }
    
    /**
     * Security Monitoring
     */
    static detectSuspiciousActivity(session) {
        const currentFingerprint = this.generateFingerprint();
        const sessionFingerprint = session.fingerprint;
        
        // Check if fingerprint has changed significantly
        if (sessionFingerprint && currentFingerprint !== sessionFingerprint) {
            return true;
        }
        
        // Check for rapid successive logins
        const lastActivity = new Date(session.lastActivity);
        const now = new Date();
        const timeDiff = now - lastActivity;
        
        if (timeDiff < 1000) { // Less than 1 second
            return true;
        }
        
        return false;
    }
    
    static generateFingerprint() {
        const canvas = document.createElement('canvas');
        const ctx = canvas.getContext('2d');
        ctx.textBaseline = 'top';
        ctx.font = '14px Arial';
        ctx.fillText('MVL-LMS Security Check', 2, 2);
        
        const fingerprint = [
            navigator.userAgent,
            navigator.language,
            screen.width + 'x' + screen.height,
            new Date().getTimezoneOffset(),
            canvas.toDataURL()
        ].join('|');
        
        return btoa(fingerprint).slice(0, 32);
    }
    
    static monitorSecurityEvents() {
        // Monitor for developer tools
        let devtools = { open: false, orientation: null };
        const threshold = 160;
        
        setInterval(() => {
            if (window.outerHeight - window.innerHeight > threshold || 
                window.outerWidth - window.innerWidth > threshold) {
                if (!devtools.open) {
                    devtools.open = true;
                    this.logSecurityEvent('devtools_opened', 'Developer tools detected');
                }
            } else {
                devtools.open = false;
            }
        }, 500);
        
        // Monitor for suspicious console activity
        const originalConsoleLog = console.log;
        console.log = function(...args) {
            if (args.some(arg => typeof arg === 'string' && arg.includes('password'))) {
                SecurityManager.logSecurityEvent('suspicious_console', 'Potential password logging detected');
            }
            originalConsoleLog.apply(console, args);
        };
    }
    
    static logSecurityEvent(event, details) {
        const securityEvent = {
            event,
            details,
            timestamp: new Date().toISOString(),
            userAgent: navigator.userAgent,
            url: window.location.href,
            sessionId: sessionStorage.getItem('sessionId') || 'unknown'
        };
        
        if (APP_CONFIG?.app?.debug) {
            console.warn('🔒 Security Event:', securityEvent);
        }
        
        // Send to security monitoring service
        if (APP_CONFIG?.features?.analytics) {
            fetch(`${APP_CONFIG.api.baseUrl}/security/events`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRF-Token': this.getCSRFToken()
                },
                body: JSON.stringify(securityEvent)
            }).catch(() => {
                // Silently fail
            });
        }
    }
    
    /**
     * Content Security Policy
     */
    static setupContentSecurityPolicy() {
        if (!APP_CONFIG?.security?.enableCSP) return;
        
        const csp = [
            "default-src 'self'",
            "script-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com",
            "style-src 'self' 'unsafe-inline' https://cdn.tailwindcss.com",
            "img-src 'self' data: https:",
            "font-src 'self' https:",
            "connect-src 'self'",
            "media-src 'self'",
            "object-src 'none'",
            "base-uri 'self'",
            "form-action 'self'"
        ].join('; ');
        
        const meta = document.createElement('meta');
        meta.httpEquiv = 'Content-Security-Policy';
        meta.content = csp;
        document.head.appendChild(meta);
    }
    
    static setupSecureHeaders() {
        // These would typically be set by the server, but we can hint at them
        const headers = {
            'X-Content-Type-Options': 'nosniff',
            'X-Frame-Options': 'DENY',
            'X-XSS-Protection': '1; mode=block',
            'Referrer-Policy': 'strict-origin-when-cross-origin'
        };
        
        Object.entries(headers).forEach(([key, value]) => {
            const meta = document.createElement('meta');
            meta.httpEquiv = key;
            meta.content = value;
            document.head.appendChild(meta);
        });
    }
    
    /**
     * Utility Methods
     */
    static hashPassword(password) {
        // This is just for demo - use proper server-side hashing in production
        return btoa(password + 'mvl-salt').replace(/[^a-zA-Z0-9]/g, '');
    }
    
    static generateSecureId() {
        return crypto.randomUUID();
    }
    
    static isSecureContext() {
        return window.isSecureContext;
    }
    
    static getCurrentUser() {
        try {
            const userData = localStorage.getItem('userData');
            return userData ? JSON.parse(userData) : null;
        } catch {
            return null;
        }
    }
    
    static hasPermission(permission) {
        const user = this.getCurrentUser();
        return user?.permissions?.includes(permission) || user?.role === 'admin';
    }
}

// Initialize Security Manager when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => SecurityManager.initialize());
} else {
    SecurityManager.initialize();
}

// Update session activity on user interaction
['click', 'keypress', 'scroll', 'mousemove'].forEach(event => {
    document.addEventListener(event, () => SecurityManager.updateSessionActivity(), { passive: true });
});

// Export for global use
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { SecurityManager };
} else {
    window.SecurityManager = SecurityManager;
}
