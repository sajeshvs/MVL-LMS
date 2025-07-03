// MVL-LMS Application Configuration
export const APP_CONFIG = {
    // Application metadata
    app: {
        name: 'MVL Learning Management System',
        version: '2.0.0',
        environment: 'production',
        debug: false,
        buildDate: '2025-07-01'
    },
    
    // Feature flags
    features: {
        sso: true,
        analytics: true,
        aiAssistant: false,
        offlineMode: true,
        videoLessons: false,
        certificates: false,
        collaboration: false,
        darkMode: true,
        notifications: true,
        progressTracking: true
    },
    
    // API configuration
    api: {
        baseUrl: '/api',
        timeout: 30000,
        retryAttempts: 3,
        retryDelay: 1000,
        maxConcurrentRequests: 5
    },
    
    // Authentication
    auth: {
        sessionTimeout: 1800000, // 30 minutes
        refreshTokenExpiry: 604800000, // 7 days
        ssoProvider: 'saml',
        ssoEndpoint: '/sso/login',
        logoutRedirect: '/login.html'
    },
    
    // Performance
    performance: {
        lazyLoadThreshold: 200, // pixels
        cacheExpiry: 86400000, // 24 hours
        maxConcurrentRequests: 5,
        imageOptimization: true,
        prefetchLinks: true
    },
    
    // Security
    security: {
        enableCSRF: true,
        enableCSP: true,
        allowedOrigins: ['https://mvl-lms.com'],
        maxUploadSize: 10485760, // 10MB
        sessionStorage: true,
        encryptLocalStorage: false
    },
    
    // UI/UX
    ui: {
        theme: 'light',
        animations: true,
        reducedMotion: false,
        highContrast: false,
        fontSize: 'medium',
        language: 'en'
    },
    
    // Learning settings
    learning: {
        autoSave: true,
        autoSaveInterval: 30000, // 30 seconds
        showProgress: true,
        allowSkipping: false,
        requireCompletion: true,
        maxAttempts: 3
    },
    
    // Curriculum settings
    curriculum: {
        domains: [
            'Access Control',
            'Asset Security', 
            'Security Architecture',
            'Communication Security',
            'Identity Management',
            'Security Assessment',
            'Security Operations',
            'Software Security'
        ],
        difficultyLevels: ['Beginner', 'Intermediate', 'Advanced'],
        estimatedTime: true,
        prerequisites: true
    }
};

// Environment-specific overrides
if (typeof window !== 'undefined') {
    // Browser environment
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
        APP_CONFIG.app.environment = 'development';
        APP_CONFIG.app.debug = true;
        APP_CONFIG.api.baseUrl = 'http://localhost:3000/api';
        APP_CONFIG.features.analytics = false;
    }
    
    // Check for URL parameters to override settings
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('debug') === 'true') {
        APP_CONFIG.app.debug = true;
    }
    if (urlParams.get('theme')) {
        APP_CONFIG.ui.theme = urlParams.get('theme');
    }
}

// Configuration validation
function validateConfig() {
    const errors = [];
    
    if (!APP_CONFIG.app.name) errors.push('App name is required');
    if (!APP_CONFIG.app.version) errors.push('App version is required');
    if (!APP_CONFIG.api.baseUrl) errors.push('API base URL is required');
    
    if (errors.length > 0) {
        console.error('Configuration validation errors:', errors);
        return false;
    }
    
    return true;
}

// Export configuration
if (typeof module !== 'undefined' && module.exports) {
    // Node.js environment
    module.exports = { APP_CONFIG, validateConfig };
} else {
    // Browser environment
    window.APP_CONFIG = APP_CONFIG;
    window.validateConfig = validateConfig;
}

// Validate configuration on load
if (APP_CONFIG.app.debug) {
    console.log('MVL-LMS Configuration loaded:', APP_CONFIG);
    validateConfig();
}
