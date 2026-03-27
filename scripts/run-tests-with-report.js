/* eslint-env node */

import { execSync } from 'child_process';
import { mkdirSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, '..');
const resultsDir = join(rootDir, 'test-results');

if (!existsSync(resultsDir)) {
  mkdirSync(resultsDir, { recursive: true });
}

const args = process.argv.slice(2);
const isAll = args.includes('--all');

const component = isAll ? null : args.find((a) => !a.startsWith('--')) || null;

if (!isAll && !component) {
  globalThis.console.log('Usage:');
  globalThis.console.log('  npm run test:storybook:report -- ComponentName');
  globalThis.console.log('  npm run test:storybook:report:all');
  globalThis.console.log('');
  globalThis.console.log('Examples:');
  globalThis.console.log('  npm run test:storybook:report -- Accordion');
  globalThis.console.log('  npm run test:storybook:report -- Button');
  globalThis.console.log('  npm run test:storybook:report:all');
  process.exit(1);
}

const jsonFile = component
  ? `${component.toLowerCase()}-report.json`
  : 'full-report.json';
const jsonPath = `./test-results/${jsonFile}`;

let testCmd = `npx test-storybook --url http://localhost:6006 --verbose --browsers chromium firefox webkit --json --outputFile ${jsonPath}`;
if (component) {
  testCmd += ` -- --testPathPattern="${component}"`;
}

globalThis.console.log(`\n=== Modus WC Test Runner ===\n`);
globalThis.console.log(
  `Mode:      ${isAll ? 'All Components' : `Single Component (${component})`}`
);
globalThis.console.log(`Browsers:  Chromium, Firefox, WebKit`);
globalThis.console.log(`JSON out:  ${jsonPath}`);
globalThis.console.log(`\nRunning tests...\n`);

let testExitCode = 0;
try {
  execSync(testCmd, { cwd: rootDir, stdio: 'inherit' });
} catch (err) {
  testExitCode = err.status || 1;
  globalThis.console.log(
    `\nTests exited with code ${testExitCode} (failures detected).`
  );
}

globalThis.console.log(`\n=== Generating Reports ===\n`);

try {
  const reportArg = component || '';
  execSync(`node scripts/generate-report.js ${reportArg}`, {
    cwd: rootDir,
    stdio: 'inherit',
  });
} catch (err) {
  globalThis.console.error('Report generation failed:', err.message);
  process.exit(1);
}

globalThis.console.log(`\n=== Done ===\n`);
process.exit(testExitCode);
