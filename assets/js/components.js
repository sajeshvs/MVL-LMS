/**
 * MVL-LMS Component Loader Utility
 * Loads header and footer components with fallback support
 */
window.loadMVLComponents = async function() {
    try {
        console.log('Loading MVL header and footer components...');
        
        const [headerResponse, footerResponse] = await Promise.all([
            fetch('components/header.html'),
            fetch('components/footer.html')
        ]);
        
        if (!headerResponse.ok || !footerResponse.ok) {
            throw new Error('Failed to load components');
        }
        
        const [headerTpl, footerTpl] = await Promise.all([
            headerResponse.text(),
            footerResponse.text()
        ]);
        
        const headerContainer = document.getElementById('header-container');
        const footerContainer = document.getElementById('footer-container');
        
        if (headerContainer && footerContainer) {
            headerContainer.innerHTML = headerTpl;
            footerContainer.innerHTML = footerTpl;
            console.log('MVL components loaded successfully');
        } else {
            console.error('Header or footer container not found');
        }
        
    } catch (error) {
        console.error('Error loading MVL components:', error);
          // Fallback: Empty content if components fail
        const headerContainer = document.getElementById('header-container');
        const footerContainer = document.getElementById('footer-container');
        
        if (headerContainer) {
            headerContainer.innerHTML = '';
        }
        
        if (footerContainer) {
            footerContainer.innerHTML = `
                <div class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-12">
                    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                        <p class="text-center text-gray-500 dark:text-gray-400 text-sm">
                            © 2024 MVL Group. All rights reserved. | CMMC 2.0 Training Platform
                        </p>
                    </div>
                </div>
            `;
        }        
        console.log('Empty fallback components loaded');
    }
};

// Auto-load components when DOM is ready
document.addEventListener('DOMContentLoaded', window.loadMVLComponents);
