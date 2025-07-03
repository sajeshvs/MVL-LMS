import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Project Validation Script for MVL-LMS
 * Validates project structure, configuration, and key files
 */

class ProjectValidator {
    constructor() {
        this.errors = [];
        this.warnings = [];
        this.info = [];
        this.rootDir = path.dirname(__dirname); // Go up one level from scripts/
    }
    
    /**
     * Main validation method
     */
    async validate() {
        console.log('🔍 Starting MVL-LMS project validation...\n');
        
        try {
            this.validateProjectStructure();
            this.validatePackageJson();
            this.validateConfigFiles();
            this.validateCoreFiles();
            this.validateScripts();
            this.validateAssets();
            await this.validateDependencies();
            
            this.printResults();
            
            if (this.errors.length > 0) {
                process.exit(1);
            }
            
        } catch (error) {
            console.error('❌ Validation failed with error:', error.message);
            process.exit(1);
        }
    }
    
    /**
     * Validate project structure
     */
    validateProjectStructure() {
        const requiredDirs = [
            'assets',
            'assets/js',
            'assets/css',
            'assets/images',
            'config',
            'scripts',
            'scripts/automation',
            'scripts/testing',
            'archive',
            'archive/backups',
            'archive/debug',
            'archive/deprecated',
            'docs',
            'docs/completed-tasks',
            'docs/guides',
            'docs/current'
        ];
        
        const requiredFiles = [
            'index.html',
            'courses.html',
            'course.html',
            'lesson.html',
            'admin.html',
            'curriculum.html',
            'package.json',
            'README.md'
        ];
        
        // Check directories
        requiredDirs.forEach(dir => {
            const dirPath = path.join(this.rootDir, dir);
            if (!fs.existsSync(dirPath)) {
                this.warnings.push(`Missing directory: ${dir}`);
            } else {
                this.info.push(`✓ Directory exists: ${dir}`);
            }
        });
        
        // Check required files
        requiredFiles.forEach(file => {
            const filePath = path.join(this.rootDir, file);
            if (!fs.existsSync(filePath)) {
                this.errors.push(`Missing required file: ${file}`);
            } else {
                this.info.push(`✓ Required file exists: ${file}`);
            }
        });
    }
    
    /**
     * Validate package.json
     */
    validatePackageJson() {
        const packageJsonPath = path.join(this.rootDir, 'package.json');
        
        if (!fs.existsSync(packageJsonPath)) {
            this.errors.push('Missing package.json file');
            return;
        }
        
        try {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            
            // Check required fields
            const requiredFields = ['name', 'version', 'description', 'scripts'];
            requiredFields.forEach(field => {
                if (!packageJson[field]) {
                    this.errors.push(`Missing required field in package.json: ${field}`);
                } else {
                    this.info.push(`✓ package.json has ${field}`);
                }
            });
            
            // Check required scripts
            const requiredScripts = ['start', 'build', 'test', 'reorganize'];
            requiredScripts.forEach(script => {
                if (!packageJson.scripts?.[script]) {
                    this.warnings.push(`Missing recommended script in package.json: ${script}`);
                } else {
                    this.info.push(`✓ package.json has script: ${script}`);
                }
            });
            
            // Validate version
            if (packageJson.version !== '2.0.0') {
                this.warnings.push(`Expected version 2.0.0, found: ${packageJson.version}`);
            }
            
        } catch (error) {
            this.errors.push(`Invalid package.json: ${error.message}`);
        }
    }
    
    /**
     * Validate configuration files
     */
    validateConfigFiles() {
        const configFiles = [
            'config/app.config.js',
            'webpack.config.js',
            'tailwind.config.js'
        ];
        
        configFiles.forEach(file => {
            const filePath = path.join(this.rootDir, file);
            if (!fs.existsSync(filePath)) {
                this.warnings.push(`Missing configuration file: ${file}`);
            } else {
                this.info.push(`✓ Configuration file exists: ${file}`);
                
                // Basic syntax validation for JS files
                if (file.endsWith('.js')) {
                    try {
                        const content = fs.readFileSync(filePath, 'utf8');
                        // Basic check for common syntax errors
                        if (content.includes('undefined') && !content.includes('typeof undefined')) {
                            this.warnings.push(`Potential undefined reference in ${file}`);
                        }
                    } catch (error) {
                        this.warnings.push(`Could not read ${file}: ${error.message}`);
                    }
                }
            }
        });
    }
    
    /**
     * Validate core JavaScript files
     */
    validateCoreFiles() {
        const coreFiles = [
            'assets/js/error-handler.js',
            'assets/js/security-manager.js',
            'assets/js/api-client.js',
            'service-worker.js'
        ];
        
        coreFiles.forEach(file => {
            const filePath = path.join(this.rootDir, file);
            if (!fs.existsSync(filePath)) {
                this.errors.push(`Missing core file: ${file}`);
            } else {
                this.info.push(`✓ Core file exists: ${file}`);
                
                // Validate file size (should not be empty)
                const stats = fs.statSync(filePath);
                if (stats.size < 100) {
                    this.warnings.push(`File ${file} seems too small (${stats.size} bytes)`);
                }
                
                // Check for basic class definitions
                try {
                    const content = fs.readFileSync(filePath, 'utf8');
                    if (file.includes('error-handler') && !content.includes('class ErrorHandler')) {
                        this.warnings.push(`${file} missing ErrorHandler class`);
                    }
                    if (file.includes('security-manager') && !content.includes('class SecurityManager')) {
                        this.warnings.push(`${file} missing SecurityManager class`);
                    }
                    if (file.includes('api-client') && !content.includes('class APIClient')) {
                        this.warnings.push(`${file} missing APIClient class`);
                    }
                } catch (error) {
                    this.warnings.push(`Could not validate content of ${file}`);
                }
            }
        });
    }
    
    /**
     * Validate scripts
     */
    validateScripts() {
        const scriptFiles = [
            'scripts/reorganize-project.js'
        ];
        
        scriptFiles.forEach(file => {
            const filePath = path.join(this.rootDir, file);
            if (!fs.existsSync(filePath)) {
                this.warnings.push(`Missing script file: ${file}`);
            } else {
                this.info.push(`✓ Script file exists: ${file}`);
            }
        });
    }
    
    /**
     * Validate assets
     */
    validateAssets() {
        const assetFiles = [
            'assets/css/input.css',
            'assets/css/overrides.css'
        ];
        
        assetFiles.forEach(file => {
            const filePath = path.join(this.rootDir, file);
            if (!fs.existsSync(filePath)) {
                this.warnings.push(`Missing asset file: ${file}`);
            } else {
                this.info.push(`✓ Asset file exists: ${file}`);
            }
        });
        
        // Check for logo files
        const logoFiles = ['logo-dark.png', 'logo-light.png'];
        logoFiles.forEach(logo => {
            const logoPath = path.join(this.rootDir, 'assets/images', logo);
            if (!fs.existsSync(logoPath)) {
                this.warnings.push(`Missing logo file: assets/images/${logo}`);
            } else {
                this.info.push(`✓ Logo file exists: ${logo}`);
            }
        });
    }
    
    /**
     * Validate dependencies
     */
    async validateDependencies() {
        const packageJsonPath = path.join(this.rootDir, 'package.json');
        
        if (!fs.existsSync(packageJsonPath)) {
            return;
        }
        
        try {
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            const nodeModulesPath = path.join(this.rootDir, 'node_modules');
            
            if (!fs.existsSync(nodeModulesPath)) {
                this.warnings.push('node_modules directory not found. Run "npm install" to install dependencies.');
                return;
            }
            
            // Check if key dependencies are installed
            const keyDependencies = [
                ...Object.keys(packageJson.dependencies || {}),
                ...Object.keys(packageJson.devDependencies || {})
            ];
            
            let installedCount = 0;
            keyDependencies.forEach(dep => {
                const depPath = path.join(nodeModulesPath, dep);
                if (fs.existsSync(depPath)) {
                    installedCount++;
                } else {
                    this.warnings.push(`Dependency not installed: ${dep}`);
                }
            });
            
            if (installedCount === keyDependencies.length) {
                this.info.push(`✓ All ${keyDependencies.length} dependencies are installed`);
            } else {
                this.warnings.push(`${keyDependencies.length - installedCount} dependencies are missing`);
            }
            
        } catch (error) {
            this.warnings.push(`Could not validate dependencies: ${error.message}`);
        }
    }
    
    /**
     * Print validation results
     */
    printResults() {
        console.log('\n' + '='.repeat(60));
        console.log(' 📊 MVL-LMS PROJECT VALIDATION RESULTS');
        console.log('='.repeat(60));
        
        if (this.errors.length > 0) {
            console.log('\n❌ ERRORS:');
            this.errors.forEach(error => console.log(`   • ${error}`));
        }
        
        if (this.warnings.length > 0) {
            console.log('\n⚠️  WARNINGS:');
            this.warnings.forEach(warning => console.log(`   • ${warning}`));
        }
        
        if (this.info.length > 0 && process.env.VERBOSE) {
            console.log('\n✅ INFO:');
            this.info.forEach(info => console.log(`   • ${info}`));
        }
        
        console.log('\n📈 SUMMARY:');
        console.log(`   • Errors: ${this.errors.length}`);
        console.log(`   • Warnings: ${this.warnings.length}`);
        console.log(`   • Info items: ${this.info.length}`);
        
        if (this.errors.length === 0) {
            console.log('\n🎉 Project validation completed successfully!');
            if (this.warnings.length > 0) {
                console.log('   Note: There are warnings that should be addressed.');
            }
        } else {
            console.log('\n💥 Project validation failed!');
            console.log('   Please fix the errors above before proceeding.');
        }
        
        console.log('\n💡 Next steps:');
        if (this.errors.length > 0) {
            console.log('   1. Fix the errors listed above');
            console.log('   2. Run "npm run validate" again');
        } else {
            console.log('   1. Run "npm install" to install dependencies');
            console.log('   2. Run "npm run reorganize" to organize files');
            console.log('   3. Run "npm run build" to build the project');
            console.log('   4. Run "npm start" to start the development server');
        }
        
        console.log('\n' + '='.repeat(60));
    }
}

// Run validation if called directly
const validator = new ProjectValidator();
validator.validate().catch(error => {
    console.error('Validation script failed:', error);
    process.exit(1);
});

export { ProjectValidator };
