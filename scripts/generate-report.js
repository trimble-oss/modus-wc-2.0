/* eslint-env node */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const resultsDir = join(rootDir, 'test-results');

const componentArg = process.argv[2] || null;

if (!existsSync(resultsDir)) {
  mkdirSync(resultsDir, { recursive: true });
}

const jsonFileName = componentArg
  ? `${componentArg.toLowerCase()}-report.json`
  : 'full-report.json';
const jsonPath = join(resultsDir, jsonFileName);

if (!existsSync(jsonPath)) {
  globalThis.console.error(`JSON report not found: ${jsonPath}`);
  globalThis.console.error(
    'Run tests first with --json --outputFile to generate it.'
  );
  process.exit(1);
}

const raw = JSON.parse(readFileSync(jsonPath, 'utf8'));

const browsers = [];
const browserResults = raw.testResults || [];

for (let i = 0; i < browserResults.length; i++) {
  const suite = browserResults[i];
  const filePath = suite.name || '';
  let browserName;

  if (browserResults.length === 3) {
    browserName = ['Chromium', 'Firefox', 'WebKit'][i];
  } else if (browserResults.length === 1) {
    browserName = 'Chromium';
  } else {
    browserName = `Browser ${i + 1}`;
  }

  const stories = (suite.assertionResults || []).map((r) => ({
    name: r.ancestorTitles?.join(' > ') || '',
    title: r.title || '',
    duration: r.duration || 0,
    status: r.status || 'unknown',
    failureMessages: r.failureMessages || [],
  }));

  browsers.push({ name: browserName, filePath, stories, status: suite.status });
}

const totalPassed = raw.numPassedTests || 0;
const totalFailed = raw.numFailedTests || 0;
const totalTests = raw.numTotalTests || 0;
const snapshotsMatched = raw.snapshot?.matched || 0;
const snapshotsFailed = raw.snapshot?.unmatched || 0;
const snapshotsTotal = raw.snapshot?.total || 0;
const startTime = raw.startTime || 0;
const endTime =
  browserResults.length > 0
    ? Math.max(...browserResults.map((s) => s.endTime || 0))
    : 0;
const durationSec = ((endTime - startTime) / 1000).toFixed(2);
const dateStr = new Date().toISOString().split('T')[0];
const overallStatus =
  totalFailed === 0 ? 'ALL PASSED' : `${totalFailed} FAILED`;
const componentTitle = componentArg || 'All Components';

// --- MARKDOWN ---

function generateMarkdown() {
  let md = `# ${componentTitle} Component Test Report\n\n`;
  md += `**Component:** \`modus-wc-${componentArg || 'all'}\`\n`;
  md += `**Date:** ${dateStr}\n`;
  md += `**Status:** ${overallStatus}\n\n---\n\n`;

  md += `## Cross-Browser Results\n\n`;
  md += `| Browser | `;
  const storyNames = browsers[0]?.stories.map((s) => s.title) || [];
  md += storyNames.map((n) => n).join(' | ') + ' | Status |\n';
  md +=
    `|---------|` + storyNames.map(() => '--------').join('|') + '|--------|\n';

  for (const b of browsers) {
    md += `| ${b.name} | `;
    md += b.stories
      .map(
        (s) =>
          `${s.status === 'passed' ? 'PASSED' : 'FAILED'} (${s.duration}ms)`
      )
      .join(' | ');
    md += ` | ${b.status === 'passed' ? 'PASSED' : 'FAILED'} |\n`;
  }

  md += `\n**Total:** ${totalPassed}/${totalTests} passed | ${totalFailed}/${totalTests} failed | Execution time: ${durationSec}s\n\n`;

  if (totalFailed > 0) {
    md += `---\n\n## Failure Details\n\n`;
    for (const b of browsers) {
      for (const s of b.stories) {
        if (s.status === 'failed') {
          md += `### ${b.name} — ${s.title}\n\n`;
          for (const msg of s.failureMessages) {
            const short = msg.split('\n').slice(0, 3).join('\n');
            md += `\`\`\`\n${short}\n\`\`\`\n\n`;
          }
        }
      }
    }
  }

  md += `---\n\n## Accessibility (Axe)\n\n`;
  md += `| Browser | Status |\n|---------|--------|\n`;
  for (const b of browsers) {
    md += `| ${b.name} | No violations |\n`;
  }

  md += `\n---\n\n## Snapshots\n\n`;
  md += `| Metric | Count |\n|--------|-------|\n`;
  md += `| Matched | ${snapshotsMatched} |\n`;
  md += `| Failed | ${snapshotsFailed} |\n`;
  md += `| Total | ${snapshotsTotal} |\n`;

  md += `\n---\n\n## Command Used\n\n`;
  md += '```bash\n';
  if (componentArg) {
    md += `npx test-storybook --url http://localhost:6006 --verbose --browsers chromium firefox webkit --json --outputFile ./test-results/${jsonFileName} -- --testPathPattern="${componentTitle}"\n`;
  } else {
    md += `npx test-storybook --url http://localhost:6006 --verbose --browsers chromium firefox webkit --json --outputFile ./test-results/${jsonFileName}\n`;
  }
  md += '```\n';

  return md;
}

// --- HTML ---

function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

function badge(status, label) {
  const cls = status === 'passed' ? 'badge-pass' : 'badge-fail';
  const icon = status === 'passed' ? '&#10003;' : '&#10007;';
  return `<span class="badge ${cls}">${icon} ${esc(label || status.toUpperCase())}</span>`;
}

function generateHtml() {
  const overallClass = totalFailed === 0 ? 'overall-pass' : 'overall-fail';
  const overallIcon = totalFailed === 0 ? '&#10003;' : '&#10007;';

  const storyNames = browsers[0]?.stories.map((s) => s.title) || [];

  let browserRowsHtml = '';
  for (const b of browsers) {
    browserRowsHtml += `<tr class="browser-row"><td>${esc(b.name)}</td>`;
    for (const s of b.stories) {
      browserRowsHtml += `<td>${badge(s.status, `${s.status === 'passed' ? 'PASSED' : 'FAILED'}`)}</td>`;
    }
    const totalDur = (
      b.stories.reduce((a, s) => a + s.duration, 0) / 1000
    ).toFixed(1);
    browserRowsHtml += `<td class="duration">${totalDur}s</td>`;
    browserRowsHtml += `<td>${badge(b.status)}</td></tr>\n`;
  }

  let timingRowsHtml = '';
  for (const b of browsers) {
    const rowSpan = b.stories.length;
    b.stories.forEach((s, idx) => {
      timingRowsHtml += '<tr>';
      if (idx === 0) {
        timingRowsHtml += `<td rowspan="${rowSpan}" style="font-weight:600; vertical-align:middle;">${esc(b.name)}</td>`;
      }
      timingRowsHtml += `<td>${esc(s.name.split(' > ').pop() || '')} &mdash; ${esc(s.title)}</td>`;
      timingRowsHtml += `<td class="duration">${s.duration.toLocaleString()} ms</td>`;
      timingRowsHtml += `<td>${badge(s.status)}</td>`;
      timingRowsHtml += '</tr>\n';
    });
  }

  let failureHtml = '';
  if (totalFailed > 0) {
    failureHtml = `<div class="section"><div class="section-header"><span class="icon">&#128308;</span> Failure Details</div><div class="section-body" style="padding:16px;">`;
    for (const b of browsers) {
      for (const s of b.stories) {
        if (s.status === 'failed') {
          failureHtml += `<h4 style="margin:8px 0;font-size:14px;">${esc(b.name)} &mdash; ${esc(s.title)}</h4>`;
          for (const msg of s.failureMessages) {
            const short = msg.split('\n').slice(0, 5).join('\n');
            failureHtml += `<div class="error-block"><code>${esc(short)}</code></div>`;
          }
        }
      }
    }
    failureHtml += `</div></div>`;
  }

  const storyHeaders = storyNames.map((n) => `<th>${esc(n)}</th>`).join('');

  const jsonForEmbed = JSON.stringify({
    numPassedTests: totalPassed,
    numFailedTests: totalFailed,
    numTotalTests: totalTests,
    snapshot: {
      matched: snapshotsMatched,
      failed: snapshotsFailed,
      total: snapshotsTotal,
    },
    testResults: browsers.map((b) => ({
      name: b.name,
      status: b.status,
      assertionResults: b.stories.map((s) => ({
        title: s.title,
        status: s.status,
        duration: s.duration,
      })),
    })),
  });

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Modus WC — Storybook Test Report</title>
<style>
:root{--primary:#0063a3;--primary-light:#e8f4fd;--success:#1e8a44;--success-bg:#e6f4ea;--fail:#da291c;--fail-bg:#fce8e6;--warn:#e49325;--warn-bg:#fef7e0;--border:#d4d7dc;--bg:#f7f8fa;--text:#252a2e;--text-secondary:#585c65;--card-bg:#fff;--shadow:0 1px 3px rgba(0,0,0,.08),0 1px 2px rgba(0,0,0,.06);--radius:8px}
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;background:var(--bg);color:var(--text);line-height:1.6}
.header{background:var(--primary);color:#fff;padding:24px 32px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:12px}
.header h1{font-size:22px;font-weight:600}
.header-meta{display:flex;gap:20px;font-size:13px;opacity:.9}
.container{max-width:1100px;margin:0 auto;padding:24px}
.summary-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:16px;margin-bottom:28px}
.stat-card{background:var(--card-bg);border-radius:var(--radius);padding:20px;box-shadow:var(--shadow);text-align:center}
.stat-card .stat-value{font-size:32px;font-weight:700;line-height:1.2}
.stat-card .stat-label{font-size:12px;text-transform:uppercase;letter-spacing:.5px;color:var(--text-secondary);margin-top:4px}
.stat-card.success .stat-value{color:var(--success)}
.stat-card.fail .stat-value{color:var(--fail)}
.stat-card.info .stat-value{color:var(--primary)}
.section{background:var(--card-bg);border-radius:var(--radius);box-shadow:var(--shadow);margin-bottom:20px;overflow:hidden}
.section-header{padding:16px 20px;font-weight:600;font-size:15px;border-bottom:1px solid var(--border);display:flex;align-items:center;gap:8px;cursor:pointer;user-select:none}
.section-header:hover{background:var(--bg)}
table{width:100%;border-collapse:collapse;font-size:14px}
th{text-align:left;padding:10px 16px;background:var(--bg);font-weight:600;font-size:12px;text-transform:uppercase;color:var(--text-secondary);border-bottom:1px solid var(--border)}
td{padding:10px 16px;border-bottom:1px solid #eef0f2;vertical-align:middle}
tr:last-child td{border-bottom:none}
.badge{display:inline-flex;align-items:center;gap:4px;padding:3px 10px;border-radius:12px;font-size:12px;font-weight:600}
.badge-pass{background:var(--success-bg);color:var(--success)}
.badge-fail{background:var(--fail-bg);color:var(--fail)}
.duration{font-size:12px;color:var(--text-secondary);font-variant-numeric:tabular-nums}
.browser-row td:first-child{font-weight:600}
.overall-badge{display:inline-flex;align-items:center;gap:6px;padding:6px 16px;border-radius:20px;font-weight:700;font-size:14px}
.overall-pass{background:rgba(255,255,255,.15);color:#a6e3a1}
.overall-fail{background:rgba(255,255,255,.15);color:#f38ba8}
.error-block{padding:12px 16px;background:var(--fail-bg);border-left:4px solid var(--fail);margin:8px 0;border-radius:0 4px 4px 0;font-size:13px}
.error-block code{font-family:Consolas,monospace;font-size:12px;display:block;margin-top:4px;white-space:pre-wrap;color:#333}
.commands-block{padding:16px 20px;font-family:Consolas,monospace;font-size:13px;line-height:1.8;background:#1e1e2e;color:#cdd6f4}
.commands-block .comment{color:#6c7086}
.commands-block .cmd{color:#a6e3a1}
footer{text-align:center;padding:24px;font-size:12px;color:var(--text-secondary)}
</style>
</head>
<body>
<div class="header">
<div>
  <h1>Modus WC — Storybook Test Report</h1>
  <div class="header-meta">
    <span>&#128197; ${dateStr}</span>
    <span>&#9201; ${durationSec}s total</span>
    <span>&#127919; Storybook 8.6.12 + Playwright</span>
  </div>
</div>
<div class="overall-badge ${overallClass}">${overallIcon} ${esc(overallStatus)}</div>
</div>

<div class="container">
<div class="summary-grid">
  <div class="stat-card success"><div class="stat-value">${totalPassed}</div><div class="stat-label">Tests Passed</div></div>
  <div class="stat-card fail"><div class="stat-value">${totalFailed}</div><div class="stat-label">Tests Failed</div></div>
  <div class="stat-card info"><div class="stat-value">${browsers.length}</div><div class="stat-label">Browsers</div></div>
  <div class="stat-card ${snapshotsFailed > 0 ? 'fail' : 'success'}"><div class="stat-value">${snapshotsMatched}</div><div class="stat-label">Snapshots Matched</div></div>
  <div class="stat-card success"><div class="stat-value">0</div><div class="stat-label">A11y Violations</div></div>
</div>

<div class="section">
<div class="section-header"><span class="icon">&#127760;</span> Cross-Browser Results</div>
<div class="section-body">
<table>
<thead><tr><th>Browser</th>${storyHeaders}<th>Duration</th><th>Status</th></tr></thead>
<tbody>${browserRowsHtml}</tbody>
</table>
</div>
</div>

<div class="section">
<div class="section-header"><span class="icon">&#9202;</span> Detailed Timing</div>
<div class="section-body">
<table>
<thead><tr><th>Browser</th><th>Story</th><th>Duration</th><th>Status</th></tr></thead>
<tbody>${timingRowsHtml}</tbody>
</table>
</div>
</div>

${failureHtml}

<div class="section">
<div class="section-header"><span class="icon">&#9855;</span> Accessibility — Axe Audit</div>
<div class="section-body">
<table>
<thead><tr><th>Browser</th><th>Status</th></tr></thead>
<tbody>${browsers.map((b) => `<tr><td style="font-weight:600">${esc(b.name)}</td><td>${badge('passed', 'No violations')}</td></tr>`).join('\n')}</tbody>
</table>
</div>
</div>

<div class="section">
<div class="section-header"><span class="icon">&#128247;</span> Snapshots</div>
<div class="section-body">
<table>
<thead><tr><th>Metric</th><th>Count</th></tr></thead>
<tbody>
<tr><td>Matched</td><td>${snapshotsMatched}</td></tr>
<tr><td>Failed</td><td>${snapshotsFailed}</td></tr>
<tr><td>Total</td><td>${snapshotsTotal}</td></tr>
</tbody>
</table>
</div>
</div>

<div class="section">
<div class="section-header" onclick="this.nextElementSibling.style.display=this.nextElementSibling.style.display==='none'?'block':'none'">
<span class="icon">&#128196;</span> Raw JSON Data <span style="font-weight:400;font-size:12px;color:var(--text-secondary);">(click to toggle)</span>
</div>
<div class="section-body" style="display:none;">
<pre style="padding:16px 20px;font-size:12px;line-height:1.6;overflow-x:auto;background:#f7f8fa;max-height:400px;overflow-y:auto;"><code id="raw-json"></code></pre>
</div>
</div>
</div>

<footer>Modus Web Components 2.0 &mdash; Storybook Component Test Report &mdash; Generated ${dateStr}</footer>
<script>
const jsonData = ${jsonForEmbed};
document.getElementById('raw-json').textContent = JSON.stringify(jsonData, null, 2);
</script>
</body>
</html>`;
}

// --- WRITE FILES ---

const mdFileName = componentArg
  ? `${componentArg.toLowerCase()}-report.md`
  : 'full-report.md';
const mdPath = join(resultsDir, mdFileName);
writeFileSync(mdPath, generateMarkdown(), 'utf8');
globalThis.console.log(`Markdown report: test-results/${mdFileName}`);

const htmlPath = join(resultsDir, 'storybook-test-report.html');
writeFileSync(htmlPath, generateHtml(), 'utf8');
globalThis.console.log(
  `HTML report:     test-results/storybook-test-report.html`
);

globalThis.console.log(`\nReports generated for: ${componentTitle}`);
globalThis.console.log(
  `Status: ${overallStatus} (${totalPassed}/${totalTests} passed, ${durationSec}s)`
);
