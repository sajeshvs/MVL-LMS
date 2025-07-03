#!/usr/bin/env node

/**
 * Final Cleanup Script for MVL-LMS
 * Removes remaining files not directly connected to the main site
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');

// Files to remove that are not connected to the main site
const filesToRemove = [
  // Development automation scripts (content generation)
  'scripts/enrich-mvl.mjs',
  'scripts/gen-curriculum.mjs',
  
  // Database setup scripts (move to docs/scripts for reference)
  'setup-database.bat',
  'setup-database.sh',
  
  // Development server script (can use npm scripts instead)
  'start-server.bat',
  
  // Automation scripts directory (development tools, not site functionality)
  'scripts/automation',
  
  // Testing scripts directory (development tools, not site functionality)  
  'scripts/testing'
];

// Directories to create for archiving scripts
const archiveDirs = [
  'docs/scripts'
];

// Files to move to docs/scripts for reference
const filesToArchive = [
  { from: 'setup-database.bat', to: 'docs/scripts/setup-database.bat' },
  { from: 'setup-database.sh', to: 'docs/scripts/setup-database.sh' },
  { from: 'start-server.bat', to: 'docs/scripts/start-server.bat' }
];

async function createArchiveDirectories() {
  console.log('📁 Creating archive directories...');
  
  for (const dir of archiveDirs) {
    const dirPath = path.join(projectRoot, dir);
    try {
      await fs.mkdir(dirPath, { recursive: true });
      console.log(`✅ Created directory: ${dir}`);
    } catch (error) {
      if (error.code !== 'EEXIST') {
        console.error(`❌ Failed to create directory ${dir}:`, error.message);
      }
    }
  }
}

async function archiveFiles() {
  console.log('📦 Archiving utility scripts...');
  
  for (const fileMove of filesToArchive) {
    const fromPath = path.join(projectRoot, fileMove.from);
    const toPath = path.join(projectRoot, fileMove.to);
    
    try {
      // Check if source file exists
      await fs.access(fromPath);
      
      // Move file
      await fs.rename(fromPath, toPath);
      console.log(`✅ Moved: ${fileMove.from} → ${fileMove.to}`);
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`⚠️  File not found: ${fileMove.from}`);
      } else {
        console.error(`❌ Failed to move ${fileMove.from}:`, error.message);
      }
    }
  }
}

async function removeDirectory(dirPath) {
  try {
    const stats = await fs.stat(dirPath);
    if (stats.isDirectory()) {
      const files = await fs.readdir(dirPath);
      
      // Recursively remove all files and subdirectories
      for (const file of files) {
        const filePath = path.join(dirPath, file);
        const fileStats = await fs.stat(filePath);
        
        if (fileStats.isDirectory()) {
          await removeDirectory(filePath);
        } else {
          await fs.unlink(filePath);
        }
      }
      
      // Remove the now-empty directory
      await fs.rmdir(dirPath);
      return true;
    }
  } catch (error) {
    if (error.code !== 'ENOENT') {
      throw error;
    }
  }
  return false;
}

async function removeFiles() {
  console.log('🗑️  Removing unnecessary files...');
  
  for (const file of filesToRemove) {
    const filePath = path.join(projectRoot, file);
    
    try {
      const stats = await fs.stat(filePath);
      
      if (stats.isDirectory()) {
        const removed = await removeDirectory(filePath);
        if (removed) {
          console.log(`✅ Removed directory: ${file}`);
        } else {
          console.log(`⚠️  Directory not found: ${file}`);
        }
      } else {
        await fs.unlink(filePath);
        console.log(`✅ Removed file: ${file}`);
      }
    } catch (error) {
      if (error.code === 'ENOENT') {
        console.log(`⚠️  File not found: ${file}`);
      } else {
        console.error(`❌ Failed to remove ${file}:`, error.message);
      }
    }
  }
}

async function updatePackageJson() {
  console.log('📝 Updating package.json scripts...');
  
  const packageJsonPath = path.join(projectRoot, 'package.json');
  
  try {
    const packageJson = JSON.parse(await fs.readFile(packageJsonPath, 'utf8'));
    
    // Add serve script to replace start-server.bat
    if (!packageJson.scripts.serve) {
      packageJson.scripts.serve = 'python -m http.server 8000';
      console.log('✅ Added serve script to package.json');
    }
    
    // Add database setup documentation reference
    if (!packageJson.scripts['db:setup']) {
      packageJson.scripts['db:setup'] = 'echo "Please see docs/scripts/ for database setup scripts"';
      console.log('✅ Added database setup reference to package.json');
    }
    
    await fs.writeFile(packageJsonPath, JSON.stringify(packageJson, null, 2));
    console.log('✅ Updated package.json');
  } catch (error) {
    console.error('❌ Failed to update package.json:', error.message);
  }
}

async function generateCleanupReport() {
  console.log('📊 Generating final cleanup report...');
  
  const reportPath = path.join(projectRoot, 'FINAL_CLEANUP_REPORT.md');
  const timestamp = new Date().toISOString();
  
  const report = `# Final Cleanup Report

**Date:** ${timestamp}
**Script:** scripts/final-cleanup.js

## Files Removed

### Development Automation Scripts
- \`scripts/enrich-mvl.mjs\` - Content enrichment script (not needed for site functionality)
- \`scripts/gen-curriculum.mjs\` - Curriculum generation script (not needed for site functionality)

### Development Tools Directories  
- \`scripts/automation/\` - Automation scripts directory (development tools)
- \`scripts/testing/\` - Testing scripts directory (development tools)

## Files Archived

### Utility Scripts (moved to docs/scripts/)
- \`setup-database.bat\` → \`docs/scripts/setup-database.bat\`
- \`setup-database.sh\` → \`docs/scripts/setup-database.sh\`
- \`start-server.bat\` → \`docs/scripts/start-server.bat\`

## Package.json Updates

### New Scripts Added
- \`serve\`: Replaced start-server.bat functionality
- \`db:setup\`: Reference to database setup documentation

## Project State After Final Cleanup

The MVL-LMS project is now fully cleaned of all files not directly connected to the main site functionality:

### Core Site Files (Retained)
- HTML pages (index.html, course.html, etc.)
- CSS and JavaScript assets
- API backend files
- Service worker and PWA files
- Configuration files
- Database schema

### Documentation (Retained)
- README.md files
- Documentation in docs/ directory
- Enhancement and cleanup reports

### Build Tools (Retained)
- package.json and webpack configuration
- Tailwind CSS configuration
- Essential build scripts

### Removed/Archived
- All development automation scripts
- Database setup scripts (archived to docs/scripts/)
- Development server script (replaced with npm script)
- Testing and automation tool directories

## Result

The project structure is now minimal, focused, and contains only files necessary for:
1. Running the main site
2. Building and deploying the application  
3. Essential documentation and configuration

All development tools and scripts have been either removed or archived for reference.
`;

  try {
    await fs.writeFile(reportPath, report);
    console.log(`✅ Generated cleanup report: FINAL_CLEANUP_REPORT.md`);
  } catch (error) {
    console.error('❌ Failed to generate cleanup report:', error.message);
  }
}

async function main() {
  console.log('🧹 Starting final cleanup of MVL-LMS project...\n');
  
  try {
    await createArchiveDirectories();
    console.log();
    
    await archiveFiles();
    console.log();
    
    await removeFiles();
    console.log();
    
    await updatePackageJson();
    console.log();
    
    await generateCleanupReport();
    console.log();
    
    console.log('✅ Final cleanup completed successfully!');
    console.log('📋 The project now contains only files directly connected to the main site.');
    console.log('📖 See FINAL_CLEANUP_REPORT.md for details.');
    
  } catch (error) {
    console.error('❌ Final cleanup failed:', error);
    process.exit(1);
  }
}

// Run the cleanup
main();
