const fs = require('fs');
const path = require('path');

// Read the coverage HTML file
const htmlPath = path.join(__dirname, 'coverage/modus-wc-autocomplete/modus-wc-autocomplete.tsx.html');
const html = fs.readFileSync(htmlPath, 'utf8');

// Parse the HTML to extract uncovered lines with code
const uncoveredInfo = [];

// Split HTML into lines and process
const lines = html.split('\n');
let currentLineNumber = 0;
let currentCode = '';
let collectingCode = false;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Extract line number
  const lineMatch = line.match(/<a name='L(\d+)'>/);
  if (lineMatch) {
    currentLineNumber = parseInt(lineMatch[1]);
  }
  
  // Check for uncovered indicators
  if (line.includes('<span class="cline-any cline-no">')) {
    // Look ahead to find the actual code
    let codeStartIndex = i;
    while (codeStartIndex < lines.length && !lines[codeStartIndex].includes('<pre class="prettyprint')) {
      codeStartIndex++;
    }
    
    // Extract the code for this line
    if (i + 1 < lines.length && lines[i + 1].includes('</td><td class="text">')) {
      const codeIndex = lines.findIndex((l, idx) => idx > i && l.includes('</pre>'));
      if (codeIndex > i) {
        // Find the corresponding source code
        const sourceMatch = html.match(new RegExp(`<a name='L${currentLineNumber}'.*?</td><td class="text"><pre class="prettyprint lang-js">([^<]*?)(?=<|$)`, 's'));
        if (sourceMatch) {
          const code = sourceMatch[1].trim();
          uncoveredInfo.push({
            line: currentLineNumber,
            type: 'uncovered',
            code: code
          });
        }
      }
    }
  }
  
  // Check for uncovered functions
  if (line.includes('<span class="fstat-no"')) {
    const funcMatch = line.match(/title="function not covered">([^<]+)</);
    if (funcMatch) {
      uncoveredInfo.push({
        line: currentLineNumber,
        type: 'function',
        name: funcMatch[1].trim()
      });
    }
  }
  
  // Check for uncovered statements
  if (line.includes('<span class="cstat-no"')) {
    const stmtMatch = line.match(/>([^<]+)</);
    if (stmtMatch && !line.includes('&nbsp;')) {
      uncoveredInfo.push({
        line: currentLineNumber,
        type: 'statement',
        code: stmtMatch[1].trim()
      });
    }
  }
}

// Now let's extract specific uncovered lines from the source
const sourcePath = path.join(__dirname, 'src/components/modus-wc-autocomplete/modus-wc-autocomplete.tsx');
const sourceCode = fs.readFileSync(sourcePath, 'utf8');
const sourceLines = sourceCode.split('\n');

// Extract specific uncovered line numbers from the HTML
const uncoveredLineNumbers = new Set();
const lineRegex = /<span class="cline-any cline-no">&nbsp;<\/span>/g;
let lineCounter = 0;

// More precise extraction
const htmlLines = html.split('\n');
for (let i = 0; i < htmlLines.length; i++) {
  if (htmlLines[i].includes('<a name=\'L')) {
    const match = htmlLines[i].match(/<a name='L(\d+)'>/);
    if (match) {
      lineCounter = parseInt(match[1]);
    }
  }
  
  if (htmlLines[i].includes('<span class="cline-any cline-no">')) {
    uncoveredLineNumbers.add(lineCounter);
  }
}

// Group uncovered code by functionality
const categorizedIssues = {
  'Custom Props': [],
  'Lifecycle': [],
  'Public Methods': [],
  'Keyboard Navigation': [],
  'Multi-Select Logic': [],
  'Menu Handling': [],
  'Chip Expansion': [],
  'Edge Cases': []
};

// Manually identify key uncovered areas based on line numbers
const keyUncoveredAreas = [
  { lines: [196, 197, 198], category: 'Custom Props', description: 'customBlur handler' },
  { lines: [224, 225, 226], category: 'Lifecycle', description: 'disconnectedCallback' },
  { lines: [269, 270, 271], category: 'Custom Props', description: 'customInputChange handler' },
  { lines: [346, 347, 348], category: 'Custom Props', description: 'customKeyDown handler' },
  { lines: [391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405], category: 'Keyboard Navigation', description: 'ArrowUp key handling' },
  { lines: [543, 544, 545, 546, 547, 548, 549], category: 'Public Methods', description: 'selectItem method' },
  { lines: [559, 560, 561], category: 'Public Methods', description: 'openMenu method' },
  { lines: [568, 569, 570], category: 'Public Methods', description: 'closeMenu method' },
  { lines: [577, 578, 579], category: 'Public Methods', description: 'toggleMenu method' },
  { lines: [586, 587, 588, 589, 590], category: 'Public Methods', description: 'focusInput method' },
  { lines: [597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608], category: 'Public Methods', description: 'clearInput method' },
  { lines: [611, 612, 613, 614, 615, 616], category: 'Menu Handling', description: 'handleItemSelectByValue' },
  { lines: [619, 620, 621, 622, 623, 624], category: 'Custom Props', description: 'customItemSelect handler' },
  { lines: [701, 702, 703], category: 'Chip Expansion', description: 'toggleChipsExpansion' },
  { lines: [793, 794, 795, 796, 797, 798, 799, 800, 801, 802, 803, 804, 805, 806, 807, 808], category: 'Chip Expansion', description: 'getExpandCollapseButton' },
  { lines: [820, 821, 822, 823, 824, 825, 826, 827], category: 'Chip Expansion', description: 'getMoreChipsIndicator' }
];

// Process each uncovered area
keyUncoveredAreas.forEach(area => {
  const codeSnippets = area.lines.map(lineNum => {
    if (lineNum <= sourceLines.length) {
      return { line: lineNum, code: sourceLines[lineNum - 1].trim() };
    }
    return null;
  }).filter(Boolean);
  
  if (codeSnippets.length > 0) {
    categorizedIssues[area.category].push({
      description: area.description,
      lines: area.lines,
      snippets: codeSnippets.slice(0, 3) // Show first 3 lines
    });
  }
});

// Generate report
console.log('=== DETAILED COVERAGE ANALYSIS ===\n');
console.log(`Total uncovered lines: ${uncoveredLineNumbers.size}`);
console.log(`Coverage: ${((964 - uncoveredLineNumbers.size) / 964 * 100).toFixed(2)}%\n`);

console.log('KEY UNCOVERED AREAS:\n');
Object.entries(categorizedIssues).forEach(([category, issues]) => {
  if (issues.length > 0) {
    console.log(`${category}:`);
    issues.forEach(issue => {
      console.log(`  - ${issue.description} (lines ${issue.lines[0]}-${issue.lines[issue.lines.length - 1]})`);
      issue.snippets.forEach(snippet => {
        console.log(`    L${snippet.line}: ${snippet.code.substring(0, 60)}...`);
      });
    });
    console.log('');
  }
});

console.log('TEST CASES TO ADD:\n');
console.log('1. Test custom event handler props:');
console.log('   - customBlur');
console.log('   - customInputChange');
console.log('   - customKeyDown');
console.log('   - customItemSelect');
console.log('');
console.log('2. Test disconnectedCallback lifecycle');
console.log('');
console.log('3. Test all public methods:');
console.log('   - selectItem(item)');
console.log('   - openMenu()');
console.log('   - closeMenu()');
console.log('   - toggleMenu()');
console.log('   - focusInput()');
console.log('   - clearInput()');
console.log('');
console.log('4. Test keyboard navigation edge cases:');
console.log('   - ArrowUp key');
console.log('   - Enter key with no focused item');
console.log('');
console.log('5. Test chip expansion functionality:');
console.log('   - maxChips prop');
console.log('   - expand/collapse button');
console.log('   - "+N more" indicator');
console.log('');
console.log('6. Test multi-select deselection');
console.log('7. Test menu blur/focus scenarios');

// Save detailed report
const detailedReport = {
  totalLines: 964,
  uncoveredLines: uncoveredLineNumbers.size,
  coverage: ((964 - uncoveredLineNumbers.size) / 964 * 100).toFixed(2) + '%',
  categorizedIssues: categorizedIssues,
  testPlan: [
    'Custom event handlers',
    'Lifecycle methods',
    'Public API methods',
    'Keyboard navigation edge cases',
    'Chip expansion with maxChips',
    'Multi-select deselection',
    'Menu focus/blur handling'
  ]
};

fs.writeFileSync('coverage-report-detailed.json', JSON.stringify(detailedReport, null, 2));
console.log('\nDetailed report saved to coverage-report-detailed.json'); 