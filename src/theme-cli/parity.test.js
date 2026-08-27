import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import test from 'node:test';
import { fileURLToPath } from 'node:url';
import {
  emitConsumerCss,
  emitPreviewOverlayCss,
  extendedThemeName,
  validateConfig,
} from './consumer.js';
import {
  emitLegacyFallbackCss,
  emitVariablesThemeBlocks,
  resolveSlots,
  routedFallbackProps,
  spliceLegacyBlock,
} from './emit.js';
import { extractRules } from './css-parse.js';
import { SLOT_NAMES, THEME_NAMES } from './slots.js';

const root = join(dirname(fileURLToPath(import.meta.url)), '../..');
const variablesCss = readFileSync(
  join(root, 'src/styles/variables.css'),
  'utf8'
);
const globalCss = readFileSync(join(root, 'src/styles/global.css'), 'utf8');

function hexFromBlock(css, themeName, prop) {
  const rules = extractRules(css);
  for (const rule of rules) {
    const compact = rule.selector.replace(/\s+/g, '');
    if (!compact.includes(`[data-theme='${themeName}']`)) continue;
    for (const decl of rule.decls) {
      if (decl.prop === prop) return decl.value.trim().toLowerCase();
    }
  }
  return null;
}

test('global.css routes all 20 DaisyUI slots including bc', () => {
  const routed = routedFallbackProps(globalCss);
  for (const slot of SLOT_NAMES) {
    assert.ok(
      routed.has(slot),
      `missing --fallback-${slot} in global.css oklch @supports :root`
    );
  }
});

test('resolved slots are hex for every built-in theme', () => {
  for (const theme of THEME_NAMES) {
    const slots = resolveSlots(variablesCss, globalCss, theme);
    for (const slot of SLOT_NAMES) {
      assert.match(
        slots[slot],
        /^#[0-9a-f]{6}$/,
        `${theme} ${slot} resolved to ${slots[slot]}`
      );
    }
  }
});

test('generated legacy CSS matches resolved semantic tokens (path 1 === path 2)', () => {
  const legacy = emitLegacyFallbackCss(variablesCss, globalCss);
  for (const theme of THEME_NAMES) {
    const slots = resolveSlots(variablesCss, globalCss, theme);
    for (const slot of SLOT_NAMES) {
      const fallback = hexFromBlock(legacy, theme, `--fallback-${slot}`);
      const daisy = hexFromBlock(legacy, theme, `--${slot}`);
      assert.equal(fallback, slots[slot], `${theme} --fallback-${slot}`);
      assert.equal(daisy, slots[slot], `${theme} --${slot}`);
    }
  }
});

test('variables-bundle theme hex matches resolved semantic tokens (path 3)', () => {
  const bundle = emitVariablesThemeBlocks(variablesCss, globalCss);
  for (const theme of THEME_NAMES) {
    const slots = resolveSlots(variablesCss, globalCss, theme);
    for (const slot of SLOT_NAMES) {
      const fallback = hexFromBlock(bundle, theme, `--fallback-${slot}`);
      assert.equal(
        fallback,
        slots[slot],
        `${theme} variables --fallback-${slot}`
      );
    }
  }
});

test('modus-classic-light base-content follows global.css gray-10 not DaisyUI #252a2e', () => {
  const slots = resolveSlots(variablesCss, globalCss, 'modus-classic-light');
  assert.equal(slots.bc, '#171c1e');
});

test('spliceLegacyBlock is idempotent', () => {
  const block = emitLegacyFallbackCss(variablesCss, globalCss);
  const once = spliceLegacyBlock('body{color:red}', block);
  const twice = spliceLegacyBlock(once, block);
  assert.equal(once, twice);
});

test('consumer config validation and CSS emit', () => {
  const publicTokens = new Set(['--modus-wc-color-primary']);
  const errors = validateConfig(
    {
      name: 'acme',
      tokens: { light: { '--modus-wc-color-primary': '#123456' } },
    },
    publicTokens
  );
  assert.deepEqual(errors, []);
  const css = emitConsumerCss({
    name: 'acme',
    tokens: { light: { '--modus-wc-color-primary': '#123456' } },
  });
  assert.match(css, /\[data-theme='acme-light'\]:root/);
  assert.match(css, /--modus-wc-color-primary: #123456/);
  assert.match(css, /--fallback-bc: var\(--modus-wc-color-base-content\)/);
});

test('built-in theme files no longer emit DaisyUI *-focus keys', () => {
  for (const file of ['modus-classic.ts', 'modus-modern.ts', 'connect.ts']) {
    const src = readFileSync(join(root, 'src/styles/themes', file), 'utf8');
    assert.doesNotMatch(
      src,
      /primary-focus|secondary-focus|accent-focus|neutral-focus/
    );
  }
});

test('output.css contains generated legacy block after Tailwind (if present)', () => {
  const outputPath = join(root, 'src/styles/output.css');
  if (!existsSync(outputPath)) {
    return;
  }
  const css = readFileSync(outputPath, 'utf8');
  if (!css.includes('modus-generated-legacy-fallbacks:start')) {
    return;
  }
  const slots = resolveSlots(variablesCss, globalCss, 'modus-modern-light');
  const fallback = hexFromBlock(css, 'modus-modern-light', '--fallback-p');
  assert.equal(fallback, slots.p);
  assert.match(css, /--fallback-bc:/);
});

test('preview overlay maps hex tokens to Daisy oklch channels', () => {
  const overlay = emitPreviewOverlayCss(
    {
      name: 'acme',
      extends: 'modus-modern',
      tokens: { light: { '--modus-wc-color-primary': '#ff00aa' } },
    },
    'light'
  );
  assert.match(overlay, /\[data-theme='modus-modern-light'\]:root/);
  assert.match(overlay, /--modus-wc-color-primary: #ff00aa/);
  assert.match(overlay, /--fallback-p: #ff00aa/);
  assert.match(overlay, /--p: \d+\.\d+% \d+\.\d+ \d+\.\d+/);
  assert.equal(
    extendedThemeName({ extends: 'modus-modern' }, 'dark'),
    'modus-modern-dark'
  );
});
