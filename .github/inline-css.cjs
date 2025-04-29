const fs = require('fs');
const path = require('path');

const currentDir = path.dirname(require.main.filename);
const distDir = path.join(currentDir, '../dist');

// Read the CSS file
const cssContent = fs.readFileSync(
  path.join(currentDir, '../src/styles/output.css'),
  'utf8'
);

// Escape any special characters in the CSS to avoid breaking the JS
const escapedCss = cssContent
  .replace(/\\/g, '\\\\')
  .replace(/`/g, '\\`')
  .replace(/\$/g, '\\$');

/**
 * Recursively processes files in a directory
 * @param {string} dir - Directory to process
 */
function processDirectory(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      // Recursively process subdirectories
      processDirectory(fullPath);
    } else if (entry.isFile() && entry.name.endsWith('.js')) {
      let content = fs.readFileSync(fullPath, 'utf8');

      if (content.includes('/* CSS_PLACEHOLDER */')) {
        content = content.replace(/\/\* CSS_PLACEHOLDER \*\//g, escapedCss);
        fs.writeFileSync(fullPath, content);
      }
    }
  }
}

// Start processing from the dist directory
processDirectory(distDir);
