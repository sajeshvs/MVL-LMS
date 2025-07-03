// Character encoding fix script for MVL-LMS curriculum data
import fs from 'fs';
import path from 'path';

console.log('🔧 Starting character encoding cleanup...');

const curriculumFile = 'assets/js/curriculum-data.js';

try {
    // Read the file with explicit UTF-8 encoding
    let content = fs.readFileSync(curriculumFile, 'utf8');
    
    console.log('📊 Original file size:', content.length, 'characters');
    
    // Character replacements - using simple string replacements
    const replacements = [
        // Em dash issues
        { from: 'â€"', to: '-', name: 'Em dash' },
        
        // Bullet point issues  
        { from: 'â€¢', to: '•', name: 'Bullet point' },
        
        // Arrow issues
        { from: 'â†'', to: '→', name: 'Right arrow' },
        
        // Emoji issues
        { from: 'ðŸš¨', to: '🚨', name: 'Alert emoji' },
        { from: 'âœ…', to: '✅', name: 'Check mark' },
        
        // Quote issues
        { from: 'â€œ', to: '"', name: 'Left quote' },
        { from: 'â€', to: '"', name: 'Right quote' },
        { from: 'â€™', to: "'", name: 'Right single quote' },
        { from: 'â€˜', to: "'", name: 'Left single quote' }
    ];
    
    let totalReplacements = 0;
    
    // Apply each replacement using global string replacement
    replacements.forEach(({ from, to, name }) => {
        const originalLength = content.length;
        content = content.split(from).join(to);
        const newLength = content.length;
        const replacementCount = (originalLength - newLength) / (from.length - to.length);
        
        if (replacementCount > 0) {
            console.log(`✅ Fixed ${replacementCount} instances of ${name}`);
            totalReplacements += replacementCount;
        }
    });
    
    if (totalReplacements > 0) {
        // Write the cleaned content back to file
        fs.writeFileSync(curriculumFile, content, 'utf8');
        console.log(`🎉 Fixed ${totalReplacements} character encoding issues!`);
        console.log('📊 Updated file size:', content.length, 'characters');
    } else {
        console.log('ℹ️  No character encoding issues found to fix.');
    }
    
} catch (error) {
    console.error('❌ Error processing file:', error.message);
}

console.log('✨ Character encoding cleanup complete!');
