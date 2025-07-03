const fs = require('fs');

// Read the file
const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Original file size:', content.length);

// Count and fix the problematic sequences
const replacements = [
  { from: 'â€"', to: '-', name: 'em-dash' },
  { from: 'â†'', to: '->', name: 'arrow' },
  { from: 'â€¢', to: '•', name: 'bullet' },
  { from: 'âœ…', to: '✅', name: 'checkmark' },
  { from: 'Â§', to: '§', name: 'section' }
];

replacements.forEach(repl => {
  const count = (content.match(new RegExp(repl.from, 'g')) || []).length;
  console.log(`Found ${count} instances of ${repl.name} (${repl.from})`);
  content = content.replace(new RegExp(repl.from, 'g'), repl.to);
});

console.log('Fixed file size:', content.length);

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('File has been fixed and saved!');
