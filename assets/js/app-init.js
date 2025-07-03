/**
 * Enhanced MVL-LMS Application Initialization
 * Handles app startup, service worker registration, and feature initialization
 */

class MVLApp {
    constructor() {
        this.isInitialized = false;
        this.features = {};
        this.modules = {};
        this.startTime = Date.now();
        
        // Bind methods
        this.init = this.init.bind(this);
        this.handleError = this.handleError.bind(this);
        this.handleOffline = this.handleOffline.bind(this);
        this.handleOnline = this.handleOnline.bind(this);
    }
    
    /**
     * Initialize the application
     */
    async init() {
        try {
            console.log('🚀 Initializing MVL-LMS v2.0.0...');
            
            // Check if config is loaded
            if (typeof APP_CONFIG === 'undefined') {
                throw new Error('Application configuration not loaded');
            }
            
            // Initialize core systems
            await this.initializeSecurity();
            await this.initializeErrorHandling();
            await this.initializeAPI();
            await this.initializeServiceWorker();
            await this.initializeFeatures();
            await this.initializeUI();
            
            // Mark as initialized
            this.isInitialized = true;
            const loadTime = Date.now() - this.startTime;
            
            console.log(`✅ MVL-LMS initialized successfully in ${loadTime}ms`);
            
            // Dispatch initialization complete event
            window.dispatchEvent(new CustomEvent('mvl:initialized', {
                detail: { loadTime, features: this.features }
            }));
            
        } catch (error) {
            console.error('❌ Failed to initialize MVL-LMS:', error);
            this.handleError(error);
        }
    }
    
    /**
     * Initialize security systems
     */
    async initializeSecurity() {
        if (typeof SecurityManager !== 'undefined') {
            console.log('🔒 Initializing security manager...');
            
            // Security manager initializes itself
            this.modules.security = SecurityManager;
            this.features.security = true;
            
            // Validate current session
            if (!SecurityManager.validateSession()) {
                console.log('⚠️ No valid session found');
            }
        } else {
            console.warn('⚠️ Security manager not available');
            this.features.security = false;
        }
    }
    
    /**
     * Initialize error handling
     */
    async initializeErrorHandling() {
        if (typeof errorHandler !== 'undefined') {
            console.log('🚨 Initializing error handler...');
            
            this.modules.errorHandler = errorHandler;
            this.features.errorHandling = true;
            
            // Set up global error handling
            window.addEventListener('error', this.handleError);
            window.addEventListener('unhandledrejection', this.handleError);
            
        } else {
            console.warn('⚠️ Error handler not available');
            this.features.errorHandling = false;
        }
    }
    
    /**
     * Initialize API client
     */
    async initializeAPI() {
        if (typeof apiClient !== 'undefined') {
            console.log('🌐 Initializing API client...');
            
            this.modules.api = apiClient;
            this.features.api = true;
            
            // Test API connectivity
            try {
                await apiClient.healthCheck();
                console.log('✅ API connection established');
            } catch (error) {
                console.warn('⚠️ API not available:', error.message);
                this.features.apiConnected = false;
            }
            
        } else {
            console.warn('⚠️ API client not available');
            this.features.api = false;
        }
    }
    
    /**
     * Initialize service worker
     */
    async initializeServiceWorker() {
        if (!APP_CONFIG.features.offlineMode) {
            console.log('📱 Offline mode disabled');
            this.features.serviceWorker = false;
            return;
        }
        
        if ('serviceWorker' in navigator) {
            try {
                console.log('📱 Registering service worker...');
                
                const registration = await navigator.serviceWorker.register('/service-worker.js', {
                    scope: '/'
                });
                
                console.log('✅ Service worker registered:', registration);
                
                // Handle service worker updates
                registration.addEventListener('updatefound', () => {
                    console.log('🔄 Service worker update found');
                    
                    const newWorker = registration.installing;
                    newWorker.addEventListener('statechange', () => {
                        if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                            this.showUpdateNotification();
                        }
                    });
                });
                
                // Listen for messages from service worker
                navigator.serviceWorker.addEventListener('message', (event) => {
                    if (event.data && event.data.type === 'SW_ACTIVATED') {
                        console.log('✅ Service worker activated:', event.data.version);
                    }
                });
                
                this.modules.serviceWorker = registration;
                this.features.serviceWorker = true;
                
            } catch (error) {
                console.warn('⚠️ Service worker registration failed:', error);
                this.features.serviceWorker = false;
            }
        } else {
            console.log('📱 Service workers not supported');
            this.features.serviceWorker = false;
        }
    }
    
    /**
     * Initialize features based on configuration
     */
    async initializeFeatures() {
        console.log('🎯 Initializing features...');
        
        // Dark mode
        if (APP_CONFIG.features.darkMode) {
            this.initializeDarkMode();
        }
        
        // Notifications
        if (APP_CONFIG.features.notifications) {
            await this.initializeNotifications();
        }
        
        // Analytics
        if (APP_CONFIG.features.analytics) {
            this.initializeAnalytics();
        }
        
        // Progress tracking
        if (APP_CONFIG.features.progressTracking) {
            this.initializeProgressTracking();
        }
        
        console.log('✅ Features initialized:', Object.keys(this.features).filter(key => this.features[key]));
    }
    
    /**
     * Initialize UI components
     */
    async initializeUI() {
        console.log('🎨 Initializing UI...');
        
        // Set up responsive navigation
        this.initializeNavigation();
        
        // Initialize tooltips and popovers
        this.initializeTooltips();
        
        // Set up keyboard shortcuts
        this.initializeKeyboardShortcuts();
        
        // Initialize theme
        this.initializeTheme();
        
        // Set up accessibility features
        this.initializeAccessibility();
        
        console.log('✅ UI initialized');
    }
    
    /**
     * Initialize dark mode
     */
    initializeDarkMode() {
        const darkModeToggle = document.getElementById('darkModeToggle');
        if (!darkModeToggle) return;
        
        // Check saved preference or system preference
        const savedTheme = localStorage.getItem('theme');
        const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const shouldUseDark = savedTheme === 'dark' || (!savedTheme && systemPrefersDark);
        
        if (shouldUseDark) {
            document.documentElement.classList.add('dark');
            darkModeToggle.checked = true;
        }
        
        darkModeToggle.addEventListener('change', (e) => {
            if (e.target.checked) {
                document.documentElement.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            } else {
                document.documentElement.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            }
        });
        
        this.features.darkMode = true;
    }
    
    /**
     * Initialize notifications
     */
    async initializeNotifications() {
        if (!('Notification' in window)) {
            console.log('📢 Notifications not supported');
            this.features.notifications = false;
            return;
        }
        
        const permission = await Notification.requestPermission();
        if (permission === 'granted') {
            console.log('📢 Notifications enabled');
            this.features.notifications = true;
        } else {
            console.log('📢 Notifications denied');
            this.features.notifications = false;
        }
    }
    
    /**
     * Initialize analytics
     */
    initializeAnalytics() {
        // Placeholder for analytics initialization
        console.log('📊 Analytics initialized');
        this.features.analytics = true;
    }
    
    /**
     * Initialize progress tracking
     */
    initializeProgressTracking() {
        // Set up auto-save for progress
        if (APP_CONFIG.learning.autoSave) {
            setInterval(() => {
                this.saveProgress();
            }, APP_CONFIG.learning.autoSaveInterval);
        }
        
        this.features.progressTracking = true;
    }
    
    /**
     * Initialize navigation
     */
    initializeNavigation() {
        const navToggle = document.getElementById('navToggle');
        const nav = document.getElementById('navigation');
        
        if (navToggle && nav) {
            navToggle.addEventListener('click', () => {
                nav.classList.toggle('hidden');
            });
        }
        
        // Close navigation on outside click
        document.addEventListener('click', (e) => {
            if (nav && !nav.contains(e.target) && !navToggle.contains(e.target)) {
                nav.classList.add('hidden');
            }
        });
    }
    
    /**
     * Initialize tooltips
     */
    initializeTooltips() {
        const tooltipElements = document.querySelectorAll('[data-tooltip]');
        tooltipElements.forEach(element => {
            element.addEventListener('mouseenter', this.showTooltip);
            element.addEventListener('mouseleave', this.hideTooltip);
        });
    }
    
    /**
     * Initialize keyboard shortcuts
     */
    initializeKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            // Ctrl/Cmd + K - Search
            if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
                e.preventDefault();
                this.openSearch();
            }
            
            // Ctrl/Cmd + / - Show help
            if ((e.ctrlKey || e.metaKey) && e.key === '/') {
                e.preventDefault();
                this.showHelp();
            }
            
            // Escape - Close modals
            if (e.key === 'Escape') {
                this.closeModals();
            }
        });
    }
    
    /**
     * Initialize theme
     */
    initializeTheme() {
        // Apply saved theme preferences
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme) {
            document.documentElement.setAttribute('data-theme', savedTheme);
        }
    }
    
    /**
     * Initialize accessibility features
     */
    initializeAccessibility() {
        // Respect reduced motion preference
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            document.documentElement.style.setProperty('--animation-duration', '0.01ms');
        }
        
        // High contrast mode
        if (window.matchMedia('(prefers-contrast: high)').matches) {
            document.documentElement.classList.add('high-contrast');
        }
        
        // Focus management
        this.initializeFocusManagement();
    }
    
    /**
     * Initialize focus management
     */
    initializeFocusManagement() {
        // Skip to main content link
        const skipLink = document.getElementById('skip-to-main');
        if (skipLink) {
            skipLink.addEventListener('click', (e) => {
                e.preventDefault();
                const main = document.getElementById('main-content');
                if (main) {
                    main.focus();
                    main.scrollIntoView();
                }
            });
        }
        
        // Trap focus in modals
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Tab') {
                const modal = document.querySelector('.modal:not(.hidden)');
                if (modal) {
                    this.trapFocus(modal, e);
                }
            }
        });
    }
    
    /**
     * Utility methods
     */
    
    handleError(error) {
        console.error('Application error:', error);
        
        if (this.modules.errorHandler) {
            this.modules.errorHandler.logError({
                type: 'application',
                message: error.message,
                stack: error.stack,
                severity: 'error'
            });
        }
    }
    
    handleOffline() {
        console.log('📱 Application went offline');
        document.body.classList.add('offline');
        
        if (this.modules.errorHandler) {
            this.modules.errorHandler.showUserMessage(
                'You are now offline. Some features may not work.',
                'warning'
            );
        }
    }
    
    handleOnline() {
        console.log('📱 Application came online');
        document.body.classList.remove('offline');
        
        if (this.modules.errorHandler) {
            this.modules.errorHandler.showUserMessage(
                'Connection restored!',
                'success'
            );
        }
    }
    
    showUpdateNotification() {
        if (this.modules.errorHandler) {
            this.modules.errorHandler.showUserMessage(
                'A new version is available. Please refresh the page.',
                'info',
                0 // Don't auto-hide
            );
        }
    }
    
    showTooltip(e) {
        const tooltip = e.target.getAttribute('data-tooltip');
        if (!tooltip) return;
        
        const tooltipEl = document.createElement('div');
        tooltipEl.className = 'tooltip absolute z-50 bg-gray-900 text-white px-2 py-1 rounded text-sm';
        tooltipEl.textContent = tooltip;
        tooltipEl.id = 'active-tooltip';
        
        document.body.appendChild(tooltipEl);
        
        // Position tooltip
        const rect = e.target.getBoundingClientRect();
        tooltipEl.style.left = `${rect.left + rect.width / 2 - tooltipEl.offsetWidth / 2}px`;
        tooltipEl.style.top = `${rect.top - tooltipEl.offsetHeight - 5}px`;
    }
    
    hideTooltip() {
        const tooltip = document.getElementById('active-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    }
    
    openSearch() {
        console.log('🔍 Opening search...');
        // Implement search functionality
    }
    
    showHelp() {
        console.log('❓ Showing help...');
        // Implement help functionality
    }
    
    closeModals() {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.classList.add('hidden');
        });
    }
    
    trapFocus(element, event) {
        const focusableElements = element.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (event.shiftKey && document.activeElement === firstElement) {
            lastElement.focus();
            event.preventDefault();
        } else if (!event.shiftKey && document.activeElement === lastElement) {
            firstElement.focus();
            event.preventDefault();
        }
    }
    
    async saveProgress() {
        if (!this.features.progressTracking) return;
        
        try {
            const currentPage = window.location.pathname;
            const progress = {
                page: currentPage,
                timestamp: new Date().toISOString(),
                scrollPosition: window.scrollY
            };
            
            localStorage.setItem('mvl-progress', JSON.stringify(progress));
            
            // Also save to API if available
            if (this.modules.api && this.features.apiConnected) {
                await this.modules.api.post('/progress', progress);
            }
        } catch (error) {
            console.warn('Failed to save progress:', error);
        }
    }
    
    /**
     * Public methods
     */
    
    getFeatures() {
        return { ...this.features };
    }
    
    getModules() {
        return { ...this.modules };
    }
    
    isReady() {
        return this.isInitialized;
    }
}

// Initialize app when DOM is ready
const mvlApp = new MVLApp();

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', mvlApp.init);
} else {
    mvlApp.init();
}

// Handle online/offline events
window.addEventListener('online', mvlApp.handleOnline);
window.addEventListener('offline', mvlApp.handleOffline);

// Export for global use
window.mvlApp = mvlApp;
