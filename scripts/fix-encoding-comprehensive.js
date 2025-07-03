const fs = require('fs');
const path = require('path');

// File to fix
const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';

// Read the file
console.log('Reading file...');
const content = fs.readFileSync(filePath, 'utf8');

// Define all the character replacements
const replacements = [
    // Em dash
    ['â€"', '—'],
    ['â€"', '-'],
    
    // Right arrow
    ['â†'', '→'],
    
    // Bullet point
    ['â€¢', '•'],
    
    // Check mark
    ['âœ…', '✅'],
    
    // Left/right quotes
    ['â€œ', '"'],
    ['â€', '"'],
    
    // Apostrophe
    ['â€™', "'"],
    
    // Other common issues
    ['Ã¢â‚¬â€œ', '—'],
    ['Ã¢â‚¬â„¢', "'"],
    ['Ã¢â‚¬Å"', '"'],
    ['Ã¢â‚¬Â', '"'],
    ['Ã¢â€™', "'"],
    ['Ã¯Â¿Â½', ''],
    
    // More specific patterns
    ['â€™', "'"],
    ['â€œ', '"'],
    ['â€', '"'],
    ['â€¦', '...'],
    ['â€º', '›'],
    ['â€¹', '‹'],
    ['â€', '–'],
    ['â€'', '—']
];

console.log('Original file size:', content.length);
console.log('Sample problematic text before fix:');
const sampleLines = content.split('\n').filter(line => 
    line.includes('â€') || line.includes('â†') || line.includes('âœ')
).slice(0, 5);
sampleLines.forEach(line => console.log('  ', line.trim()));

// Apply all replacements
let fixedContent = content;
let totalReplacements = 0;

replacements.forEach(([search, replace]) => {
    const beforeCount = (fixedContent.match(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g')) || []).length;
    if (beforeCount > 0) {
        fixedContent = fixedContent.replace(new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replace);
        console.log(`Replaced ${beforeCount} instances of "${search}" with "${replace}"`);
        totalReplacements += beforeCount;
    }
});

console.log(`\nTotal replacements made: ${totalReplacements}`);

// Write the fixed content back
if (totalReplacements > 0) {
    // Create backup first
    const backupPath = filePath.replace('.js', '-encoding-backup.js');
    fs.copyFileSync(filePath, backupPath);
    console.log(`Backup created: ${backupPath}`);
    
    // Write fixed content
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log('File updated successfully!');
    
    console.log('\nSample fixed text:');
    const fixedSampleLines = fixedContent.split('\n').filter(line => 
        line.includes('CMMC v2') || line.includes('→') || line.includes('✅')
    ).slice(0, 5);
    fixedSampleLines.forEach(line => console.log('  ', line.trim()));
} else {
    console.log('No problematic characters found to replace.');
}
