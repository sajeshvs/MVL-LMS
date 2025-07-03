import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Configuration for file reorganization
const REORGANIZATION_MAP = {
    // Backup files to archive
    'archive/backups': [
        'admin-backup.html',
        'admin-enhanced.html',
        'courses-backup.html',
        'lesson-backup-20250621-0200.html',
        'lesson-backup.html'
    ],
    // Debug files to archive
    'archive/debug': [
        'courses-debug.html',
        'data-load-simple.html',
        'data-load-test.html',
        'data-loading-test.html',
        'debug-lesson.html',
        'debug-logo.html',
        'direct-logo-test.html',
        'function-debug-test.html',
        'gremlin-fix-verification.html',
        'header-fix-verification.html',
        'header-improvements-test.html',
        'lesson-debug-console.html',
        'lesson-debug-simple.html',
        'lesson-navigation-test.html',
        'lesson-simple-debug.html',
        'lesson-test.html',
        'logo-alignment-comparison.html',
        'logo-aspect-ratio-final.html',
        'logo-aspect-ratio-test.html',
        'logo-debug-console.html',
        'logo-debug-direct.html',
        'logo-direct-test.html',
        'logo-test.html',
        'logo-transparency-test.html',
        'logo-ultimate-test.html',
        'logo-verification.html',
        'logo-visibility-test.html',
        'logo-wrapper-responsive-test.html',
        'mvl-header-showcase.html',
        'navigation-test.html',
        'simple-lesson-test.html',
        'tailwind-refactor-test.html'
    ],
    // Deprecated files
    'archive/deprecated': [
        'admin-panel.html',
        'courses-new.html',
        'index-standalone.html',
        'lesson-broken.html',
        'lesson-clean.html',
        'lesson-enhanced.html',
        'domain-enhancement-test.html'
    ],
    // Documentation files
    'docs/completed-tasks': [
        'AC_L2_3.1.2_IMPLEMENTATION_COMPLETE.md',
        'ADMIN_IMPLEMENTATION_COMPLETE.md',
        'COURSE_DETAILS_FIX_COMPLETE.md',
        'COURSES_FIX_COMPLETE.md',
        'DATA_LOADING_FIX_COMPLETE.md',
        'DOMAIN_ENHANCEMENT_COMPLETE.md',
        'FINAL_IMPLEMENTATION_SUMMARY.md',
        'HEADER_LAYOUT_FIX_COMPLETE.md',
        'LESSON_ENHANCEMENT_COMPLETE.md',
        'LOGO_ALIGNMENT_FIX_COMPLETE.md',
        'LOGO_ASPECT_RATIO_FIX_COMPLETE.md',
        'LOGO_ISSUE_PERMANENT_FIX.md',
        'LOGO_TRANSPARENCY_COMPLETE.md',
        'LOGO_VISIBILITY_FIX_COMPLETE.md',
        'LOGO_WRAPPER_TIGHTENING_COMPLETE.md',
        'NAVIGATION_FIX_COMPLETE.md',
        'TAILWIND_REFACTOR_COMPLETE.md'
    ],
    'docs/guides': [
        'DATABASE_DEPLOYMENT_GUIDE.md',
        'README-LOGO-FIX.md',
        'IMPLEMENTATION_SUMMARY.md'
    ],
    'docs/current': [
        'COURSES_DISPLAY_FIX.md',
        'CURRICULUM_DISPLAY_FIX.md',
        'IMPROVEMENTS.md'
    ],
    'scripts/automation': [
        'complete-curriculum-generator.mjs',
        'complete-curriculum.mjs',
        'enhance-all-domains.mjs',
        'expand-curriculum.mjs'
    ],
    'scripts/testing': [
        'test-admin-functionality.mjs'
    ]
};

// Files to keep in root
const KEEP_IN_ROOT = [
    'index.html',
    'courses.html',
    'course.html',
    'lesson.html',
    'admin.html',
    'curriculum.html',
    'README.md',
    'package.json',
    'setup-database.bat',
    'setup-database.sh',
    'start-server.bat'
];

// Create directories and move files
function reorganizeProject() {
    console.log('🚀 Starting MVL-LMS project reorganization...\n');
    
    const currentDir = path.dirname(__dirname); // Go up one level from scripts/
    
    // Create directories
    Object.keys(REORGANIZATION_MAP).forEach(dir => {
        const fullPath = path.join(currentDir, dir);
        if (!fs.existsSync(fullPath)) {
            fs.mkdirSync(fullPath, { recursive: true });
            console.log(`✅ Created directory: ${dir}`);
        }
    });
    
    // Move files
    let movedCount = 0;
    let errorCount = 0;
    let notFoundCount = 0;
    
    Object.entries(REORGANIZATION_MAP).forEach(([targetDir, files]) => {
        console.log(`\n📁 Processing ${targetDir}:`);
        files.forEach(file => {
            const sourcePath = path.join(currentDir, file);
            const targetPath = path.join(currentDir, targetDir, file);
            
            if (fs.existsSync(sourcePath)) {
                try {
                    fs.renameSync(sourcePath, targetPath);
                    console.log(`   📦 Moved: ${file}`);
                    movedCount++;
                } catch (error) {
                    console.error(`   ❌ Error moving ${file}: ${error.message}`);
                    errorCount++;
                }
            } else {
                console.log(`   ⚠️  Not found: ${file}`);
                notFoundCount++;
            }
        });
    });
    
    console.log(`\n✨ Reorganization complete!`);
    console.log(`   - Files moved: ${movedCount}`);
    console.log(`   - Files not found: ${notFoundCount}`);
    console.log(`   - Errors: ${errorCount}`);
    
    // Show remaining files in root
    console.log(`\n📋 Files remaining in root:`);
    const rootFiles = fs.readdirSync(currentDir).filter(file => 
        fs.statSync(path.join(currentDir, file)).isFile()
    );
    rootFiles.forEach(file => {
        const isCore = KEEP_IN_ROOT.includes(file);
        console.log(`   ${isCore ? '✅' : '❓'} ${file}`);
    });
}

// Run reorganization
reorganizeProject();

export { reorganizeProject, REORGANIZATION_MAP, KEEP_IN_ROOT };
