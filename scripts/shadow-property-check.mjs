/* eslint-env node */
/* global window, getComputedStyle */
/**
 * §6 gate: @property utilities inside a shadow root with adopted output.css.
 * Usage: node scripts/shadow-property-check.mjs
 * Requires: npm run tailwind:build (output.css present), puppeteer.
 */
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');
const outputCss = join(root, 'src/styles/output.css');

if (!existsSync(outputCss)) {
  console.error('Missing src/styles/output.css — run tailwind build first.');
  process.exit(1);
}

const css = readFileSync(outputCss, 'utf8');

const html = `<!DOCTYPE html>
<html data-theme="modus-modern-light" class="light">
<head><meta charset="utf-8"></head>
<body>
  <div id="host"></div>
  <script>
    const css = ${JSON.stringify(css)};
    const host = document.getElementById('host');
    const root = host.attachShadow({ mode: 'open' });
    const sheet = new CSSStyleSheet();
    sheet.replaceSync(css);
    root.adoptedStyleSheets = [sheet];
    const el = document.createElement('div');
    el.className = 'moduswc:shadow-lg moduswc:ring-2 moduswc:ring-primary moduswc:scale-105 moduswc:w-24 moduswc:h-24 moduswc:bg-base-200';
    root.appendChild(el);
    window.__shadowTestEl = el;
  </script>
</body>
</html>`;

const browser = await puppeteer.launch({ headless: true });
const page = await browser.newPage();
await page.setContent(html, { waitUntil: 'networkidle0' });

const result = await page.evaluate(() => {
  const el = window.__shadowTestEl;
  const cs = getComputedStyle(el);
  return {
    boxShadow: cs.boxShadow,
    outlineWidth: cs.outlineWidth,
    transform: cs.transform,
    width: cs.width,
  };
});

await browser.close();

const shadowOk =
  result.boxShadow && result.boxShadow !== 'none' && result.boxShadow.length > 3;
const ringOk = result.outlineWidth && result.outlineWidth !== '0px';
const transformOk = result.transform && result.transform !== 'none';

console.log('Shadow root computed styles:', result);
if (shadowOk || ringOk) {
  console.log('PASS: shadow or ring utility applied inside adopted stylesheet.');
  process.exit(0);
}

console.error(
  'FAIL: shadow/ring utilities may be broken (@property in shadow root). transform:',
  transformOk
);
process.exit(1);
