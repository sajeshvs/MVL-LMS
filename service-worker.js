/**
 * Service Worker for MVL-LMS
 * Provides offline support, caching, and background sync
 */

const CACHE_NAME = 'mvl-lms-v2.0.0';
const STATIC_CACHE = 'mvl-static-v2.0.0';
const DYNAMIC_CACHE = 'mvl-dynamic-v2.0.0';
const API_CACHE = 'mvl-api-v2.0.0';

// Files to cache for offline use
const STATIC_FILES = [
    '/',
    '/index.html',
    '/courses.html',
    '/course.html',
    '/lesson.html',
    '/admin.html',
    '/curriculum.html',
    '/config/app.config.js',
    '/assets/css/overrides.css',
    '/assets/js/app.js',
    '/assets/js/api-client.js',
    '/assets/js/error-handler.js',
    '/assets/js/security-manager.js',
    '/assets/images/logo-dark.png',
    '/assets/images/logo-light.png',
    '/assets/images/favicon.ico',
    'https://cdn.tailwindcss.com/3.4.0'
];

// API endpoints to cache
const CACHEABLE_APIS = [
    '/api/courses',
    '/api/curriculum',
    '/api/users/me',
    '/api/health'
];

// Install event - cache static assets
self.addEventListener('install', (event) => {
    console.log('🔧 Service Worker: Installing v2.0.0...');
    
    event.waitUntil(
        caches.open(STATIC_CACHE)
            .then(cache => {
                console.log('📦 Service Worker: Caching static files');
                return cache.addAll(STATIC_FILES.map(url => new Request(url, { cache: 'reload' })));
            })
            .then(() => {
                console.log('✅ Service Worker: Static files cached');
                return self.skipWaiting();
            })
            .catch(error => {
                console.error('❌ Service Worker: Installation failed', error);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
    console.log('🚀 Service Worker: Activating v2.0.0...');
    
    event.waitUntil(
        Promise.all([
            // Clean up old caches
            caches.keys().then(cacheNames => {
                return Promise.all(
                    cacheNames
                        .filter(cacheName => 
                            cacheName !== STATIC_CACHE && 
                            cacheName !== DYNAMIC_CACHE && 
                            cacheName !== API_CACHE
                        )
                        .map(cacheName => {
                            console.log('🗑️ Service Worker: Deleting old cache:', cacheName);
                            return caches.delete(cacheName);
                        })
                );
            }),
            // Take control of all clients
            self.clients.claim()
        ]).then(() => {
            console.log('✅ Service Worker: Activation complete');
            
            // Notify all clients of the update
            self.clients.matchAll().then(clients => {
                clients.forEach(client => {
                    client.postMessage({
                        type: 'SW_ACTIVATED',
                        version: '2.0.0'
                    });
                });
            });
        })
    );
});

// Fetch event - intercept network requests
self.addEventListener('fetch', (event) => {
    const { request } = event;
    const url = new URL(request.url);
    
    // Skip non-GET requests for caching
    if (request.method !== 'GET') {
        return;
    }
    
    // Skip chrome-extension and other non-http requests
    if (!url.protocol.startsWith('http')) {
        return;
    }
    
    // Handle API requests
    if (url.pathname.startsWith('/api/')) {
        event.respondWith(handleAPIRequest(request));
        return;
    }
    
    // Handle static assets
    if (isStaticAsset(url.pathname)) {
        event.respondWith(cacheFirst(request));
        return;
    }
    
    // Handle HTML pages
    if (request.headers.get('accept').includes('text/html')) {
        event.respondWith(handleHTMLRequest(request));
        return;
    }
    
    // Default handling for other requests
    event.respondWith(networkFirst(request));
});

// Handle API requests with network-first strategy
async function handleAPIRequest(request) {
    const url = new URL(request.url);
    const isCacheable = CACHEABLE_APIs.some(pattern => url.pathname.startsWith(pattern));
    
    try {
        // Always try network first for API requests
        const response = await fetch(request);
        
        if (response.ok && isCacheable) {
            // Cache successful responses for cacheable APIs
            const cache = await caches.open(API_CACHE);
            cache.put(request, response.clone());
        }
        
        return response;
    } catch (error) {
        // Network failed, try cache
        if (isCacheable) {
            const cached = await caches.match(request);
            if (cached) {
                console.log('📱 Service Worker: Serving API from cache:', request.url);
                
                // Add offline header to indicate cached response
                const headers = new Headers(cached.headers);
                headers.set('X-Served-By', 'service-worker');
                headers.set('X-Cache-Status', 'offline');
                
                return new Response(cached.body, {
                    status: cached.status,
                    statusText: cached.statusText,
                    headers: headers
                });
            }
        }
        
        // Return offline response for API requests
        return new Response(JSON.stringify({
            error: 'offline',
            message: 'This request requires an internet connection',
            timestamp: new Date().toISOString()
        }), {
            status: 503,
            statusText: 'Service Unavailable',
            headers: {
                'Content-Type': 'application/json',
                'X-Served-By': 'service-worker'
            }
        });
    }
}

// Handle HTML requests with app shell strategy
async function handleHTMLRequest(request) {
    try {
        // Try network first
        const response = await fetch(request);
        
        if (response.ok) {
            // Cache successful HTML responses
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, response.clone());
        }
        
        return response;
    } catch (error) {
        // Network failed, try cache
        const cached = await caches.match(request);
        if (cached) {
            return cached;
        }
        
        // Fallback to index.html for SPA routing
        const indexPage = await caches.match('/index.html');
        if (indexPage) {
            return indexPage;
        }
        
        // Last resort - offline page
        return createOfflinePage();
    }
}

// Cache-first strategy for static assets
async function cacheFirst(request) {
    const cached = await caches.match(request);
    if (cached) {
        return cached;
    }
    
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        // Return placeholder for failed static assets
        if (request.url.includes('.jpg') || request.url.includes('.png') || request.url.includes('.gif')) {
            return createPlaceholderImage();
        }
        
        throw error;
    }
}

// Network-first strategy
async function networkFirst(request) {
    try {
        const response = await fetch(request);
        if (response.ok) {
            const cache = await caches.open(DYNAMIC_CACHE);
            cache.put(request, response.clone());
        }
        return response;
    } catch (error) {
        const cached = await caches.match(request);
        if (cached) {
            return cached;
        }
        throw error;
    }
}

// Utility functions
function isStaticAsset(pathname) {
    const staticExtensions = ['.css', '.js', '.png', '.jpg', '.jpeg', '.gif', '.svg', '.ico', '.woff', '.woff2'];
    return staticExtensions.some(ext => pathname.endsWith(ext));
}

function createOfflinePage() {
    const offlineHTML = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Offline - MVL LMS</title>
            <script src="https://cdn.tailwindcss.com"></script>
        </head>
        <body class="bg-gray-50 min-h-screen flex items-center justify-center">
            <div class="text-center p-8">
                <div class="w-24 h-24 mx-auto mb-6 text-gray-400">
                    <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2v20M2 12h20"/>
                    </svg>
                </div>
                <h1 class="text-2xl font-bold text-gray-900 mb-4">You're Offline</h1>
                <p class="text-gray-600 mb-6">Please check your internet connection and try again.</p>
                <button onclick="window.location.reload()" 
                        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                    Try Again
                </button>
            </div>
        </body>
        </html>
    `;
    
    return new Response(offlineHTML, {
        status: 200,
        headers: {
            'Content-Type': 'text/html',
            'X-Served-By': 'service-worker'
        }
    });
}

function createPlaceholderImage() {
    // Create a simple SVG placeholder
    const svg = `
        <svg width="200" height="200" xmlns="http://www.w3.org/2000/svg">
            <rect width="200" height="200" fill="#f3f4f6"/>
            <text x="100" y="100" text-anchor="middle" dy=".3em" fill="#9ca3af" font-family="Arial, sans-serif" font-size="14">
                Offline
            </text>
        </svg>
    `;
    
    return new Response(svg, {
        status: 200,
        headers: {
            'Content-Type': 'image/svg+xml',
            'X-Served-By': 'service-worker'
        }
    });
}

// Background sync for offline actions
self.addEventListener('sync', (event) => {
    console.log('🔄 Service Worker: Background sync triggered:', event.tag);
    
    if (event.tag === 'background-sync-progress') {
        event.waitUntil(syncLearningProgress());
    } else if (event.tag === 'background-sync-analytics') {
        event.waitUntil(syncAnalyticsData());
    }
});

async function syncLearningProgress() {
    try {
        // Get pending progress data from IndexedDB
        const pendingProgress = await getPendingProgress();
        
        for (const progress of pendingProgress) {
            try {
                const response = await fetch('/api/progress/sync', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(progress)
                });
                
                if (response.ok) {
                    await removePendingProgress(progress.id);
                }
            } catch (error) {
                console.error('Failed to sync progress:', error);
            }
        }
    } catch (error) {
        console.error('Background sync failed:', error);
    }
}

async function syncAnalyticsData() {
    try {
        // Get pending analytics data
        const pendingAnalytics = await getPendingAnalytics();
        
        for (const data of pendingAnalytics) {
            try {
                const response = await fetch('/api/analytics/sync', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                
                if (response.ok) {
                    await removePendingAnalytics(data.id);
                }
            } catch (error) {
                console.error('Failed to sync analytics:', error);
            }
        }
    } catch (error) {
        console.error('Analytics sync failed:', error);
    }
}

// IndexedDB helpers (simplified - would need full implementation)
async function getPendingProgress() {
    // Implementation would use IndexedDB to get pending progress data
    return [];
}

async function removePendingProgress(id) {
    // Implementation would remove synced progress from IndexedDB
}

async function getPendingAnalytics() {
    // Implementation would use IndexedDB to get pending analytics data
    return [];
}

async function removePendingAnalytics(id) {
    // Implementation would remove synced analytics from IndexedDB
}

// Push notifications
self.addEventListener('push', (event) => {
    console.log('📢 Service Worker: Push notification received');
    
    const options = {
        body: 'You have new learning content available!',
        icon: '/assets/images/logo-dark.png',
        badge: '/assets/images/favicon.ico',
        vibrate: [100, 50, 100],
        data: {
            dateOfArrival: Date.now(),
            primaryKey: 1
        },
        actions: [
            {
                action: 'explore',
                title: 'View Content',
                icon: '/assets/images/icons/explore.png'
            },
            {
                action: 'close',
                title: 'Close',
                icon: '/assets/images/icons/close.png'
            }
        ]
    };
    
    if (event.data) {
        const data = event.data.json();
        options.body = data.body || options.body;
        options.data = { ...options.data, ...data };
    }
    
    event.waitUntil(
        self.registration.showNotification('MVL LMS', options)
    );
});

// Handle notification clicks
self.addEventListener('notificationclick', (event) => {
    console.log('👆 Service Worker: Notification clicked');
    
    event.notification.close();
    
    if (event.action === 'explore') {
        event.waitUntil(
            clients.openWindow('/courses.html')
        );
    } else if (event.action === 'close') {
        // Just close the notification
    } else {
        // Default action - open app
        event.waitUntil(
            clients.openWindow('/')
        );
    }
});

// Message handling from main thread
self.addEventListener('message', (event) => {
    console.log('💬 Service Worker: Message received:', event.data);
    
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    } else if (event.data && event.data.type === 'CACHE_URLS') {
        event.waitUntil(
            caches.open(DYNAMIC_CACHE).then(cache => {
                return cache.addAll(event.data.urls);
            })
        );
    } else if (event.data && event.data.type === 'CLEAR_CACHE') {
        event.waitUntil(
            caches.delete(event.data.cacheName || DYNAMIC_CACHE)
        );
    }
});

// Periodic background sync (if supported)
self.addEventListener('periodicsync', (event) => {
    if (event.tag === 'content-sync') {
        event.waitUntil(syncContent());
    }
});

async function syncContent() {
    try {
        // Sync latest course content when device is idle and connected
        const response = await fetch('/api/content/sync');
        if (response.ok) {
            const content = await response.json();
            const cache = await caches.open(API_CACHE);
            
            // Pre-cache important content
            for (const item of content.priority) {
                try {
                    const itemResponse = await fetch(item.url);
                    if (itemResponse.ok) {
                        cache.put(item.url, itemResponse);
                    }
                } catch (error) {
                    console.warn('Failed to cache content:', item.url);
                }
            }
        }
    } catch (error) {
        console.error('Content sync failed:', error);
    }
}

console.log('🎯 Service Worker: MVL-LMS v2.0.0 loaded');
