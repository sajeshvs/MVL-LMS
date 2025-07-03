import fs from 'fs';

// File to fix
const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';

console.log('Reading file as buffer...');
const buffer = fs.readFileSync(filePath);
const content = buffer.toString('utf8');

console.log('Original file size:', content.length);

// Create a comprehensive list of all encoding problems and their fixes
const encodingFixes = [
    // UTF-8 encoding artifacts to proper characters
    ['â€"', '—'],      // em dash
    ['â€"', '-'],      // em dash to regular dash
    ['â†'', '→'],      // right arrow
    ['â€¢', '•'],      // bullet point
    ['âœ…', '✅'],      // check mark
    ['â€œ', '"'],      // left double quote
    ['â€', '"'],       // right double quote
    ['â€™', "'"],      // right single quote/apostrophe
    ['â€˜', "'"],      // left single quote
    ['â€¦', '...'],    // ellipsis
    ['â€º', '›'],      // right guillemet
    ['â€¹', '‹'],      // left guillemet
    ['â€', '–'],       // en dash
    ['â€'', '—'],      // em dash variant
    ['""', '"'],       // double quote artifacts
    
    // Fix specific CMMC references
    ['CMMC v2 ""', 'CMMC v2 -'],
    ['CMMC v2 â€"', 'CMMC v2 -'],
    
    // Fix score references  
    ['83â†'90', '83→90'],
    ['(83â†'90)', '(83→90)'],
];

console.log('\nApplying comprehensive fixes...');

let fixedContent = content;
let totalReplacements = 0;

encodingFixes.forEach(([search, replace]) => {
    const regex = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
    const matches = fixedContent.match(regex);
    if (matches && matches.length > 0) {
        fixedContent = fixedContent.replace(regex, replace);
        console.log(`Fixed ${matches.length} instances of "${search}" → "${replace}"`);
        totalReplacements += matches.length;
    }
});

console.log(`\nTotal replacements made: ${totalReplacements}`);

if (totalReplacements > 0) {
    // Create backup
    const backupPath = filePath.replace('.js', '-final-backup.js');
    fs.copyFileSync(filePath, backupPath);
    console.log(`Backup created: ${backupPath}`);
    
    // Write fixed content
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log('File updated successfully!');
    
    // Verify the fixes
    console.log('\nVerification - Sample fixed content:');
    const verifyLines = fixedContent.split('\n')
        .filter(line => line.includes('CMMC v2') || line.includes('83→90') || line.includes('MFA'))
        .slice(0, 3);
    verifyLines.forEach(line => console.log('✓', line.trim().substring(0, 100) + '...'));
} else {
    console.log('No encoding artifacts found to fix.');
}

console.log('\n✅ Encoding cleanup complete!');
