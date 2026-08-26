#!/usr/bin/env node
import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { extractRules, normalizeColor } from './css-parse.js';
import { resolveSlots } from './emit.js';
import { DAISY_SLOTS, SLOT_NAMES, THEME_NAMES } from './slots.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '../..');
const DEFAULT_PUBLISHED_URL =
  'https://modus-web-components-v2.trimble.com/public/output.css';
const DEFAULT_OUT = '/opt/cursor/artifacts/slot-diff-vs-published.md';

export function collectPublishedFallbackHex(css, themeName) {
  const fromRoot = {};
  const fromTheme = {};
  for (const rule of extractRules(css)) {
    const compact = rule.selector.replace(/\s+/g, '');
    const isRoot = compact === ':root' || compact.startsWith(':root,');
    const isTheme =
      compact.includes(`[data-theme='${themeName}']`) ||
      compact.includes(`[data-theme="${themeName}"]`);
    for (const decl of rule.decls) {
      const match = /^--fallback-([a-z0-9]+)$/.exec(decl.prop);
      if (!match) continue;
      const slot = match[1];
      if (!SLOT_NAMES.includes(slot)) continue;
      const raw = decl.value.trim();
      if (!raw.startsWith('#')) continue;
      const hex = normalizeColor(raw);
      if (isTheme) fromTheme[slot] = hex;
      else if (isRoot) fromRoot[slot] = hex;
    }
  }
  return { ...fromRoot, ...fromTheme };
}

export function diffPublishedSlots(publishedCss, variablesCss, globalCss) {
  const rows = [];
  for (const theme of THEME_NAMES) {
    const published = collectPublishedFallbackHex(publishedCss, theme);
    const branch = resolveSlots(variablesCss, globalCss, theme);
    for (const slot of SLOT_NAMES) {
      const left = published[slot] || '';
      const right = branch[slot] || '';
      if (!left || !right) {
        if (left !== right) {
          rows.push({
            theme,
            slot,
            token: DAISY_SLOTS[slot],
            published: left || '(missing hex)',
            branch: right || '(missing hex)',
          });
        }
        continue;
      }
      if (left !== right) {
        rows.push({
          theme,
          slot,
          token: DAISY_SLOTS[slot],
          published: left,
          branch: right,
        });
      }
    }
  }
  return rows;
}

export function formatDiffMarkdown(rows) {
  const lines = [
    '# Daisy slot hex: published v2 vs this branch',
    '',
    'Baseline: live `public/output.css` (not git main). This branch: `variables.css` + `global.css` resolved slots.',
    '',
    'Modern `bc` note: published v2 Daisy text used `#252a2e` when `--fallback-bc` was not routed to `--modus-wc-color-base-content`. This branch resolves `bc` to `#171c1e` (gray-10) for light themes that use that token.',
    '',
  ];
  if (rows.length === 0) {
    lines.push('No `--fallback-*` hex differences.');
    return `${lines.join('\n')}\n`;
  }
  lines.push('| theme | slot | token | published v2 | this branch |');
  lines.push('| --- | --- | --- | --- | --- |');
  for (const row of rows) {
    lines.push(
      `| ${row.theme} | ${row.slot} | \`${row.token}\` | ${row.published} | ${row.branch} |`
    );
  }
  lines.push('');
  return `${lines.join('\n')}\n`;
}

function argValue(args, flag) {
  const idx = args.indexOf(flag);
  if (idx !== -1 && args[idx + 1]) return args[idx + 1];
  return null;
}

export async function loadPublishedCss(cssPath, url = DEFAULT_PUBLISHED_URL) {
  if (cssPath) {
    return readFileSync(resolve(cssPath), 'utf8');
  }
  const res = await fetch(url);
  if (!res.ok) {
    throw new Error(`Failed to download ${url}: ${res.status}`);
  }
  return res.text();
}

async function main(argv) {
  const cssPath = argValue(argv, '--css');
  const outPath = argValue(argv, '--out') || DEFAULT_OUT;
  const publishedCss = await loadPublishedCss(cssPath);
  const variablesCss = readFileSync(
    join(root, 'src/styles/variables.css'),
    'utf8'
  );
  const globalCss = readFileSync(join(root, 'src/styles/global.css'), 'utf8');
  const rows = diffPublishedSlots(publishedCss, variablesCss, globalCss);
  const md = formatDiffMarkdown(rows);
  const dest = resolve(outPath);
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, md);
  process.stdout.write(md);
  process.stdout.write(`\nWrote ${dest}\n`);
  return dest;
}

const isMain =
  existsSync(process.argv[1]) &&
  fileURLToPath(import.meta.url) === resolve(process.argv[1]);

if (isMain) {
  main(process.argv.slice(2)).catch((err) => {
    console.error(err.message || err);
    process.exitCode = 1;
  });
}
