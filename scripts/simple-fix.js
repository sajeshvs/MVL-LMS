import fs from 'fs';

const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';

// Read as binary then convert to handle encoding issues
const buffer = fs.readFileSync(filePath);
let content = buffer.toString('utf8');

console.log('File size:', content.length);

let changes = 0;

// Simple character-by-character fixes that don't break the script
// Fix double quotes that appear as empty quotes
content = content.replace(/ ""/g, ' -');
content = content.replace(/v2 ""/g, 'v2 -');

// Count changes
const newLength = content.length;
if (newLength !== buffer.length) {
    changes++;
    console.log('Fixed quote issues');
}

// Write back
if (changes > 0) {
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('File updated with', changes, 'types of fixes');
} else {
    console.log('No changes made');
}

// Show sample
const samples = content.split('\n').filter(line => line.includes('CMMC v2')).slice(0, 2);
samples.forEach(line => console.log('Sample:', line.trim().substring(0, 80)));

console.log('Done');
