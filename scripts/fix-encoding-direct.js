const fs = require('fs');
const path = require('path');

// Read the file
const filePath = 'g:/WebAPP/MVL-LMS/assets/js/curriculum-data.js';
let content = fs.readFileSync(filePath, 'utf8');

console.log('Original file size:', content.length);

// Count occurrences before replacement
const beforeStats = {
  'â€"': (content.match(/â€"/g) || []).length,
  'â†'': (content.match(/â†'/g) || []).length,
  'â€¢': (content.match(/â€¢/g) || []).length,
  'âœ…': (content.match(/âœ…/g) || []).length,
  'Â§': (content.match(/Â§/g) || []).length
};

console.log('Before replacement counts:', beforeStats);

// Replace problematic characters
content = content.replace(/â€"/g, '-');       // em dash
content = content.replace(/â†'/g, '->');      // arrow
content = content.replace(/â€¢/g, '•');       // bullet point
content = content.replace(/âœ…/g, '✅');       // checkmark
content = content.replace(/Â§/g, '§');        // section symbol

// Count occurrences after replacement
const afterStats = {
  'â€"': (content.match(/â€"/g) || []).length,
  'â†'': (content.match(/â†'/g) || []).length,
  'â€¢': (content.match(/â€¢/g) || []).length,
  'âœ…': (content.match(/âœ…/g) || []).length,
  'Â§': (content.match(/Â§/g) || []).length
};

console.log('After replacement counts:', afterStats);
console.log('Fixed file size:', content.length);

// Write the fixed content back
fs.writeFileSync(filePath, content, 'utf8');
console.log('File has been fixed and saved!');
