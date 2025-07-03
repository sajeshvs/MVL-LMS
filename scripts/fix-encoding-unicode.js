import fs from 'fs';

// File to fix
const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';

console.log('Reading file...');
let content = fs.readFileSync(filePath, 'utf8');

console.log('Original file size:', content.length);

let totalReplacements = 0;

// Fix using character codes to avoid issues in the script
console.log('\nApplying targeted fixes...');

// Fix double quotes: "" -> "
const beforeDouble = content.length;
content = content.replace(/""/g, '"');
const afterDouble = content.length;
const doubleQuoteReplacements = (beforeDouble - afterDouble) / 1; // Each replacement removes 1 char
if (doubleQuoteReplacements > 0) {
    console.log(`Fixed ${doubleQuoteReplacements} double quote issues`);
    totalReplacements += doubleQuoteReplacements;
}

// Fix arrow using regex that won't break
const arrowRegex = /\u00e2\u0086\u0092/g; // â†'
const arrowMatches = content.match(arrowRegex);
if (arrowMatches) {
    content = content.replace(arrowRegex, '→');
    console.log(`Fixed ${arrowMatches.length} arrow artifacts`);
    totalReplacements += arrowMatches.length;
}

// Fix em dash using regex
const emDashRegex = /\u00e2\u0080\u0093/g; // â€"
const emDashMatches = content.match(emDashRegex);
if (emDashMatches) {
    content = content.replace(emDashRegex, '—');
    console.log(`Fixed ${emDashMatches.length} em dash artifacts`);
    totalReplacements += emDashMatches.length;
}

console.log(`\nTotal replacements made: ${totalReplacements}`);

if (totalReplacements > 0) {
    // Write fixed content
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('File updated successfully!');
} else {
    console.log('No encoding artifacts found to fix.');
}

// Show sample of current content
console.log('\nSample content check:');
const sampleLines = content.split('\n')
    .filter(line => line.includes('CMMC v2'))
    .slice(0, 2);
sampleLines.forEach(line => console.log('  ', line.trim()));

console.log('\nDone!');
