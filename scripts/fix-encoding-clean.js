import fs from 'fs';

// File to fix
const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';

console.log('Reading file...');
const content = fs.readFileSync(filePath, 'utf8');

// Create backup first
const backupPath = filePath.replace('.js', '-encoding-backup.js');
fs.copyFileSync(filePath, backupPath);
console.log(`Backup created: ${backupPath}`);

console.log('Original file size:', content.length);

// Apply fixes using regex patterns to avoid encoding issues in the script
let fixedContent = content;
let totalReplacements = 0;

// Replace common encoding artifacts with proper characters
console.log('\nApplying fixes...');

// Fix em dash artifacts: â€" -> —
const emDashMatches = fixedContent.match(/â€"/g);
if (emDashMatches) {
    fixedContent = fixedContent.replace(/â€"/g, '—');
    console.log(`Fixed ${emDashMatches.length} em dash artifacts`);
    totalReplacements += emDashMatches.length;
}

// Fix arrow artifacts: â†' -> →
const arrowMatches = fixedContent.match(/â†'/g);
if (arrowMatches) {
    fixedContent = fixedContent.replace(/â†'/g, '→');
    console.log(`Fixed ${arrowMatches.length} arrow artifacts`);
    totalReplacements += arrowMatches.length;
}

// Fix bullet artifacts: â€¢ -> •
const bulletMatches = fixedContent.match(/â€¢/g);
if (bulletMatches) {
    fixedContent = fixedContent.replace(/â€¢/g, '•');
    console.log(`Fixed ${bulletMatches.length} bullet artifacts`);
    totalReplacements += bulletMatches.length;
}

// Fix checkmark artifacts: âœ… -> ✅
const checkMatches = fixedContent.match(/âœ…/g);
if (checkMatches) {
    fixedContent = fixedContent.replace(/âœ…/g, '✅');
    console.log(`Fixed ${checkMatches.length} checkmark artifacts`);
    totalReplacements += checkMatches.length;
}

// Fix quote artifacts: â€œ -> " and â€ -> "
const leftQuoteMatches = fixedContent.match(/â€œ/g);
if (leftQuoteMatches) {
    fixedContent = fixedContent.replace(/â€œ/g, '"');
    console.log(`Fixed ${leftQuoteMatches.length} left quote artifacts`);
    totalReplacements += leftQuoteMatches.length;
}

const rightQuoteMatches = fixedContent.match(/â€/g);
if (rightQuoteMatches) {
    fixedContent = fixedContent.replace(/â€/g, '"');
    console.log(`Fixed ${rightQuoteMatches.length} right quote artifacts`);
    totalReplacements += rightQuoteMatches.length;
}

// Fix apostrophe artifacts: â€™ -> '
const apostropheMatches = fixedContent.match(/â€™/g);
if (apostropheMatches) {
    fixedContent = fixedContent.replace(/â€™/g, "'");
    console.log(`Fixed ${apostropheMatches.length} apostrophe artifacts`);
    totalReplacements += apostropheMatches.length;
}

console.log(`\nTotal replacements made: ${totalReplacements}`);

if (totalReplacements > 0) {
    // Write fixed content
    fs.writeFileSync(filePath, fixedContent, 'utf8');
    console.log('File updated successfully!');
    
    // Show sample of fixed content
    console.log('\nSample fixed content:');
    const sampleLines = fixedContent.split('\n')
        .filter(line => line.includes('CMMC v2') || line.includes('MFA') || line.includes('→'))
        .slice(0, 3);
    sampleLines.forEach(line => console.log('  ', line.trim().substring(0, 100) + '...'));
} else {
    console.log('No encoding artifacts found to fix.');
}

console.log('\nDone!');
