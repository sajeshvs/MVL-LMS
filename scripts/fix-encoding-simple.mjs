// Simple character encoding fix script
import fs from 'fs';

console.log('🔧 Fixing character encoding issues...');

const filePath = 'assets/js/curriculum-data.js';

try {
    let content = fs.readFileSync(filePath, 'utf8');
    
    console.log('📊 Processing file...');
    
    let fixCount = 0;
    
    // Fix em dash
    if (content.includes('â€"')) {
        const count = (content.match(/â€"/g) || []).length;
        content = content.replace(/â€"/g, '-');
        console.log(`✅ Fixed ${count} em dashes`);
        fixCount += count;
    }
    
    // Fix bullet points
    if (content.includes('â€¢')) {
        const count = (content.match(/â€¢/g) || []).length;
        content = content.replace(/â€¢/g, '•');
        console.log(`✅ Fixed ${count} bullet points`);
        fixCount += count;
    }
    
    // Fix arrows
    if (content.includes('â†'')) {
        const count = (content.match(/â†'/g) || []).length;
        content = content.replace(/â†'/g, '→');
        console.log(`✅ Fixed ${count} arrows`);
        fixCount += count;
    }
    
    if (fixCount > 0) {
        fs.writeFileSync(filePath, content, 'utf8');
        console.log(`🎉 Successfully fixed ${fixCount} character encoding issues!`);
    } else {
        console.log('ℹ️  No issues found to fix.');
    }
    
} catch (error) {
    console.error('❌ Error:', error.message);
}

console.log('✨ Done!');
