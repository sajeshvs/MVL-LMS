import fs from 'fs';

// File to fix
const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';

console.log('Reading file...');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Original file size:', content.length);

// First, let's find and show examples of the problematic text
console.log('\nSearching for specific issues...');

// Look for the double quote issue
const doubleQuoteLines = content.split('\n').filter(line => line.includes('""'));
console.log(`Found ${doubleQuoteLines.length} lines with double quotes`);
if (doubleQuoteLines.length > 0) {
    console.log('Example:', doubleQuoteLines[0].trim());
}

// Look for arrow issues
const arrowLines = content.split('\n').filter(line => line.includes('â†''));
console.log(`Found ${arrowLines.length} lines with arrow artifacts`);
if (arrowLines.length > 0) {
    console.log('Example:', arrowLines[0].trim());
}

// Apply targeted fixes
let totalReplacements = 0;

// Fix the double quote issue: "" -> "
const doubleQuoteCount = (content.match(/""/g) || []).length;
if (doubleQuoteCount > 0) {
    content = content.replace(/""/g, '"');
    console.log(`Fixed ${doubleQuoteCount} double quote artifacts`);
    totalReplacements += doubleQuoteCount;
}

// Fix the arrow issue: â†' -> →
const arrowCount = (content.match(/â†'/g) || []).length;
if (arrowCount > 0) {
    content = content.replace(/â†'/g, '→');
    console.log(`Fixed ${arrowCount} arrow artifacts`);
    totalReplacements += arrowCount;
}

// Fix em dash issue: â€" -> —
const emDashCount = (content.match(/â€"/g) || []).length;
if (emDashCount > 0) {
    content = content.replace(/â€"/g, '—');
    console.log(`Fixed ${emDashCount} em dash artifacts`);
    totalReplacements += emDashCount;
}

console.log(`\nTotal replacements made: ${totalReplacements}`);

if (totalReplacements > 0) {
    // Write fixed content
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('File updated successfully!');
    
    // Show sample of fixed content
    console.log('\nSample fixed content:');
    const fixedLines = content.split('\n')
        .filter(line => line.includes('CMMC v2') || line.includes('MFA') || line.includes('Multi-factor'))
        .slice(0, 2);
    fixedLines.forEach(line => console.log('  ', line.trim()));
} else {
    console.log('No encoding artifacts found to fix.');
}

console.log('\nDone!');
