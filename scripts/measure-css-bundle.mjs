/* eslint-env node */
/**
 * Measure CSS bundle sizes for Tailwind spike gates (§6).
 * Usage: node scripts/measure-css-bundle.mjs [--v3-baseline]
 */
import { existsSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { gzipSync } from 'node:zlib';
import { execSync } from 'node:child_process';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const GATES = {
  outputCss: { raw: 185_789, gzip: 25_753 },
  adopted: { raw: 194_573, gzip: 27_307 },
};

const v3BaselineLocked = {
  outputCss: { raw: 161_556, gzip: 22_394 },
  adopted: { raw: 169_194, gzip: 23_745 },
};

function measureFile(path) {
  if (!existsSync(path)) {
    return null;
  }
  const buf = readFileSync(path);
  return {
    path,
    raw: buf.length,
    gzip: gzipSync(buf, { level: 9 }).length,
  };
}

function measureConcat(paths) {
  const existing = paths.filter((p) => existsSync(p));
  if (existing.length === 0) {
    return null;
  }
  const combined = Buffer.from(
    existing.map((p) => readFileSync(p, 'utf8')).join('\n'),
    'utf8'
  );
  return {
    paths: existing,
    raw: combined.length,
    gzip: gzipSync(combined, { level: 9 }).length,
  };
}

function buildV3Baseline() {
  const cacheDir = join(root, '.cache');
  mkdirSync(cacheDir, { recursive: true });
  const outPath = join(cacheDir, 'output-v3-baseline.css');
  const configPath = join(root, 'scripts/tailwind.config.v3.mjs');
  console.log('Building v3 baseline with tailwindcss@3.4.17…');
  execSync(
    `npx --yes tailwindcss@3.4.17 -c "${configPath}" -i src/styles/tailwind.css -o "${outPath}" --minify`,
    {
      cwd: root,
      stdio: 'inherit',
      env: { ...process.env },
    }
  );
  return outPath;
}

function formatRow(label, m, ceilings) {
  if (!m) {
    return `${label}: (missing)`;
  }
  const rawKb = (m.raw / 1024).toFixed(1);
  const gzipKb = (m.gzip / 1024).toFixed(1);
  let pass = '';
  if (ceilings) {
    const ok = m.raw <= ceilings.raw && m.gzip <= ceilings.gzip;
    pass = ok ? 'PASS' : 'FAIL';
  }
  return `${label}: ${m.raw} bytes (${rawKb} KB) raw, ${m.gzip} bytes (${gzipKb} KB) gzip ${pass}`.trim();
}

const args = process.argv.slice(2);
const buildV3 = args.includes('--v3-baseline');

let v3Output = join(root, '.cache/output-v3-baseline.css');
if (buildV3 || !existsSync(v3Output)) {
  try {
    v3Output = buildV3Baseline();
  } catch (e) {
    console.warn('v3 baseline build skipped:', e.message);
  }
}

const outputV4 = join(root, 'src/styles/output.css');
const globalCss = join(root, 'src/styles/global.css');
const iconsCss = join(root, 'src/styles/modus-icons-2-base.css');

const lines = ['# CSS bundle measurements', ''];

lines.push('## Locked v3 baseline (origin/main @ d02eeeed7)');
lines.push(formatRow('output.css', v3BaselineLocked.outputCss));
lines.push(formatRow('adopted (output+global+icons)', v3BaselineLocked.adopted));
lines.push('');

if (existsSync(v3Output)) {
  lines.push('## Rebuilt v3 from src/styles/tailwind.css');
  lines.push(formatRow('output.css', measureFile(v3Output)));
  const v3Adopted = measureConcat([
    v3Output,
    globalCss,
    iconsCss,
  ]);
  lines.push(formatRow('adopted (output+global+icons)', v3Adopted));
  lines.push('');
}

lines.push('## Current v4 spike (src/styles/output.css after tailwind:build)');
const v4Out = measureFile(outputV4);
lines.push(formatRow('output.css', v4Out, GATES.outputCss));
const v4Adopted = measureConcat([outputV4, globalCss, iconsCss]);
lines.push(formatRow('adopted (output+global+icons)', v4Adopted, GATES.adopted));
lines.push('');
lines.push('§6 ceilings: output ≤ 185,789 / 25,753 gzip; adopted ≤ 194,573 / 27,307 gzip');

const report = lines.join('\n');
console.log(report);

const reportPath = join(root, '.cache/css-bundle-sizes.txt');
mkdirSync(dirname(reportPath), { recursive: true });
writeFileSync(reportPath, report, 'utf8');
console.log(`\nWrote ${reportPath}`);
