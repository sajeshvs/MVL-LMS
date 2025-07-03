import fs from 'fs';

const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';

console.log('Reading file for final cleanup...');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Original file size:', content.length);

// Create backup
const backupPath = filePath.replace('.js', '-final-cleanup-backup.js');
fs.copyFileSync(filePath, backupPath);
console.log(`Backup created: ${backupPath}`);

let totalReplacements = 0;

// Manual replacements for known patterns
const replacements = [
    // Arrow patterns
    ['â†'\'', '→'],
    ['â†'', '→'],
    ['â†', '→'],
    
    // Emoji patterns - using explicit mapping
    ['ðŸš¨', '🚨'],
    ['ðŸ¢', '🏢'],
    ['ðŸ"'', '🔒'],
    ['ðŸ'¥', '👥'],
    ['ðŸ"‹', '📋'],
    ['ðŸŽ¯', '🎯'],
    
    // Quote patterns
    ['""', '"'],
    ['"â€', '"'],
    
    // Score patterns
    ['83â†'90', '83→90'],
    ['(83â†'90)', '(83→90)'],
];

console.log('\nApplying final replacements...');

replacements.forEach(([search, replace]) => {
    // Count occurrences before replacement
    const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\\\$&'), 'g');
    const matches = content.match(regex);
    if (matches && matches.length > 0) {
        content = content.replace(regex, replace);
        console.log(`✓ Fixed ${matches.length} instances of "${search}" → "${replace}"`);
        totalReplacements += matches.length;
    }
});

console.log(`\nTotal replacements made: ${totalReplacements}`);

if (totalReplacements > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('\n✅ File updated successfully!');
    
    // Verify key fixes
    console.log('\nVerification samples:');
    const verifyLines = content.split('\n')
        .filter(line => line.includes('CMMC v2') || line.includes('83→90') || line.includes('🚨'))
        .slice(0, 3);
    verifyLines.forEach(line => console.log('✓', line.trim().substring(0, 80) + '...'));
} else {
    console.log('No encoding artifacts found to fix.');
}

console.log('\n🎉 Final encoding cleanup complete!');
