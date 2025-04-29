const fs = require('fs');
const path = require('path');

const currentDir = path.dirname(require.main.filename);

// Read the CSS file
const cssContent = fs.readFileSync(
  path.join(currentDir, '../src/styles/output.css'),
  'utf8'
);

// Read the template
let scriptContent = fs.readFileSync(
  path.join(currentDir, '../dist/components/modus-wc-style-loader.js'),
  'utf8'
);

// Replace the placeholder with actual CSS content
// Escape any special characters in the CSS to avoid breaking the JS
const escapedCss = cssContent
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

scriptContent = scriptContent.replace('/* CSS_PLACEHOLDER */', escapedCss);

// Inject the CSS into the script
fs.writeFileSync(
  path.join(currentDir, '../dist/components/modus-wc-style-loader.js'),
  scriptContent
);
