import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Clean up unnecessary files from MVL-LMS project
 */
class ProjectCleaner {
    constructor() {
        this.rootDir = path.dirname(__dirname);
        this.removedFiles = [];
        this.errors = [];
    }

    /**
     * Files and directories to remove (not connected to the main site)
     */
    getFilesToRemove() {
        return {
            // Test files that are no longer needed
            testFiles: [
                'test-automation.mjs',
                'test-curriculum.html', 
                'test-data.html',
                'test-results.json'
            ],
            
            // Development/build helper scripts that are no longer needed
            scripts: [
                'update_components.sh'
            ],
            
            // Template/prompt files used for development
            templates: [
                'prompts/mvl-lesson.tpl.md'
            ],
            
            // GitHub workflows (unless you want to keep CI/CD)
            workflows: [
                '.github/workflows/automated-lesson-generation.yml'
            ],
            
            // Directories that might be empty or unnecessary
            directories: [
                'prompts' // Will be removed if empty after removing files
            ]
        };
    }

    /**
     * Files to keep (essential for the site)
     */
    getFilesToKeep() {
        return [
            // Core HTML pages
            'index.html',
            'courses.html', 
            'course.html',
            'lesson.html',
            'admin.html',
            'curriculum.html',
            'offline.html',
            
            // Configuration files
            'package.json',
            'package-lock.json',
            'webpack.config.js',
            'tailwind.config.js',
            'manifest.json',
            'service-worker.js',
            
            // Database setup
            'setup-database.bat',
            'setup-database.sh',
            'start-server.bat',
            
            // Documentation
            'README.md',
            'ENHANCEMENT_SUMMARY.md',
            
            // Directories that contain essential files
            'assets/',
            'api/',
            'components/',
            'config/',
            'scripts/',
            'docs/',
            'archive/',
            'database/',
            'node_modules/'
        ];
    }

    /**
     * Remove unnecessary files
     */
    async cleanup() {
        console.log('🧹 Starting MVL-LMS project cleanup...\n');
        
        const filesToRemove = this.getFilesToRemove();
        
        // Remove test files
        console.log('📋 Removing test files...');
        await this.removeFiles(filesToRemove.testFiles);
        
        // Remove development scripts
        console.log('📋 Removing development scripts...');
        await this.removeFiles(filesToRemove.scripts);
        
        // Remove template files
        console.log('📋 Removing template files...');
        await this.removeFiles(filesToRemove.templates);
        
        // Remove GitHub workflows (optional)
        console.log('📋 Removing CI/CD workflows...');
        await this.removeFiles(filesToRemove.workflows);
        
        // Remove empty directories
        console.log('📋 Removing empty directories...');
        await this.removeEmptyDirectories(filesToRemove.directories);
        
        // Show results
        this.showResults();
    }

    /**
     * Remove files from the list
     */
    async removeFiles(files) {
        for (const file of files) {
            const filePath = path.join(this.rootDir, file);
            
            if (fs.existsSync(filePath)) {
                try {
                    fs.unlinkSync(filePath);
                    console.log(`   ✅ Removed: ${file}`);
                    this.removedFiles.push(file);
                } catch (error) {
                    console.log(`   ❌ Error removing ${file}: ${error.message}`);
                    this.errors.push({ file, error: error.message });
                }
            } else {
                console.log(`   ⚠️  Not found: ${file}`);
            }
        }
    }

    /**
     * Remove empty directories
     */
    async removeEmptyDirectories(directories) {
        for (const dir of directories) {
            const dirPath = path.join(this.rootDir, dir);
            
            if (fs.existsSync(dirPath)) {
                try {
                    // Check if directory is empty
                    const files = fs.readdirSync(dirPath);
                    if (files.length === 0) {
                        fs.rmdirSync(dirPath);
                        console.log(`   ✅ Removed empty directory: ${dir}`);
                        this.removedFiles.push(dir);
                    } else {
                        console.log(`   ⚠️  Directory not empty: ${dir} (contains: ${files.join(', ')})`);
                    }
                } catch (error) {
                    console.log(`   ❌ Error removing directory ${dir}: ${error.message}`);
                    this.errors.push({ file: dir, error: error.message });
                }
            }
        }
    }

    /**
     * Show cleanup results
     */
    showResults() {
        console.log('\n' + '='.repeat(60));
        console.log(' 🧹 MVL-LMS CLEANUP RESULTS');
        console.log('='.repeat(60));
        
        console.log(`\n✅ Files/directories removed: ${this.removedFiles.length}`);
        if (this.removedFiles.length > 0) {
            this.removedFiles.forEach(file => {
                console.log(`   • ${file}`);
            });
        }
        
        if (this.errors.length > 0) {
            console.log(`\n❌ Errors encountered: ${this.errors.length}`);
            this.errors.forEach(error => {
                console.log(`   • ${error.file}: ${error.error}`);
            });
        }
        
        console.log('\n📊 Cleanup Summary:');
        console.log(`   • Total files removed: ${this.removedFiles.length}`);
        console.log(`   • Errors: ${this.errors.length}`);
        
        // Show remaining files in root
        console.log('\n📋 Essential files remaining in root:');
        const rootFiles = fs.readdirSync(this.rootDir).filter(file => 
            fs.statSync(path.join(this.rootDir, file)).isFile()
        );
        
        rootFiles.forEach(file => {
            console.log(`   ✅ ${file}`);
        });
        
        // Show directories
        console.log('\n📁 Directories remaining:');
        const rootDirs = fs.readdirSync(this.rootDir).filter(file => 
            fs.statSync(path.join(this.rootDir, file)).isDirectory() && !file.startsWith('.')
        );
        
        rootDirs.forEach(dir => {
            console.log(`   📁 ${dir}/`);
        });
        
        console.log('\n🎉 Cleanup completed successfully!');
        console.log('Your MVL-LMS project is now optimized with only essential files.');
        console.log('\n💡 Next steps:');
        console.log('   1. Run "npm run validate" to ensure everything still works');
        console.log('   2. Test the application with "npm start"');
        console.log('   3. Commit your changes to version control');
        
        console.log('\n' + '='.repeat(60));
    }

    /**
     * Show what would be removed without actually removing (dry run)
     */
    async dryRun() {
        console.log('🔍 DRY RUN - Files that would be removed:\n');
        
        const filesToRemove = this.getFilesToRemove();
        const allFiles = [
            ...filesToRemove.testFiles,
            ...filesToRemove.scripts,
            ...filesToRemove.templates,
            ...filesToRemove.workflows
        ];
        
        let existingFiles = 0;
        allFiles.forEach(file => {
            const filePath = path.join(this.rootDir, file);
            if (fs.existsSync(filePath)) {
                console.log(`   🗑️  ${file}`);
                existingFiles++;
            }
        });
        
        console.log(`\nTotal files to be removed: ${existingFiles}`);
        console.log('\nRun this script without --dry-run to perform the cleanup.');
    }
}

// Check command line arguments
const args = process.argv.slice(2);
const isDryRun = args.includes('--dry-run');

// Run cleanup
const cleaner = new ProjectCleaner();

if (isDryRun) {
    cleaner.dryRun();
} else {
    cleaner.cleanup();
}

export { ProjectCleaner };
