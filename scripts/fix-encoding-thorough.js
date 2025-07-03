import fs from 'fs';

// File to fix
const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';

console.log('Reading file...');
const content = fs.readFileSync(filePath, 'utf8');

console.log('Original file size:', content.length);

// Apply fixes for remaining artifacts
let fixedContent = content;
let totalReplacements = 0;

console.log('\nSearching for remaining encoding artifacts...');

// Check for various patterns that might still exist
const patterns = [
    /â€"/g,  // em dash
    /â†'/g,  // arrow  
    /â€œ/g,  // left quote
    /â€/g,   // right quote
    /â€™/g,  // apostrophe
    /â€¦/g,  // ellipsis
];

patterns.forEach((pattern, index) => {
    const matches = content.match(pattern);
    if (matches) {
        console.log(`Pattern ${index + 1}: Found ${matches.length} instances`);
        // Show first few examples
        const lines = content.split('\n').filter(line => pattern.test(line)).slice(0, 3);
        lines.forEach(line => console.log(`  Example: ${line.trim().substring(0, 80)}...`));
    }
});

// Fix remaining issues
const fixes = [
    { pattern: /â€"/g, replacement: '—', name: 'em dash' },
    { pattern: /â†'/g, replacement: '→', name: 'arrow' },
    { pattern: /â€œ/g, replacement: '"', name: 'left quote' },
    { pattern: /â€/g, replacement: '"', name: 'right quote' },
    { pattern: /â€™/g, replacement: "'", name: 'apostrophe' },
    { pattern: /â€¦/g, replacement: '...', name: 'ellipsis' },
    // Add more specific patterns
    { pattern: /â€/g, replacement: '"', name: 'quote variant' },
    { pattern: /â€'/g, replacement: '—', name: 'em dash variant' },
];

console.log('\nApplying fixes...');

fixes.forEach(fix => {
    const matches = fixedContent.match(fix.pattern);
    if (matches && matches.length > 0) {
        fixedContent = fixedContent.replace(fix.pattern, fix.replacement);
        console.log(`Fixed ${matches.length} instances of ${fix.name}`);
        totalReplacements += matches.length;
    }
});

console.log(`\nTotal replacements made: ${totalReplacements}`);

if (totalReplacements > 0) {
    // Write fixed content
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log('File updated successfully!');
} else {
    console.log('No encoding artifacts found to fix.');
}

// Show current state
console.log('\nCurrent sample content:');
const sampleLines = fixedContent.split('\n')
    .filter(line => line.includes('CMMC v2') || line.includes('MFA') || line.includes('Multi-factor'))
    .slice(0, 3);
sampleLines.forEach(line => console.log('  ', line.trim().substring(0, 120) + '...'));

console.log('\nDone!');
