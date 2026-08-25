/**
 * Lightweight alternative to modus-wc-styles.css for legacy apps.
 * Fonts + CSS variables + per-theme hex (including DaisyUI --fallback-* routing).
 */
import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import {
  emitDaisyRouting,
  emitVariablesThemeBlocks,
} from '../src/theme-cli/emit.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const variablesPath = join(root, 'src/styles/variables.css');
const fontsPath = join(root, 'src/styles/fonts.css');
const globalPath = join(root, 'src/styles/global.css');
const targetPath = join(root, 'src/styles/modus-wc-variables.css');

const read = (path, label) => {
  if (!existsSync(path)) {
    console.error(`Missing required file: ${label} (${path})`);
    process.exit(1);
  }
  return readFileSync(path, 'utf8');
};

const variablesCSS = read(variablesPath, 'variables.css');
const fontsCSS = read(fontsPath, 'fonts.css');
const globalCSS = read(globalPath, 'global.css');

const output = `/**
 * Modus Web Components - Variables Only
 *
 * Lightweight alternative to modus-wc-styles.css for legacy apps.
 * Contains ONLY CSS variables, theme definitions, and font declarations.
 * No Tailwind reset, no DaisyUI classes, no utility classes.
 *
 * Use this when:
 * - Your app uses Modus components inside Shadow DOM
 * - You want to avoid the Tailwind Preflight reset causing style regressions
 * - The handleShadowDOMStyles() injection handles class rules inside shadow roots
 *
 * Usage:
 *   import '@trimble-oss/moduswebcomponents/modus-wc-variables.css';
 */

/* ===== Font Declarations ===== */

${fontsCSS.trim()}

/* ===== CSS Variables ===== */

${variablesCSS.trim()}

/* ===== DaisyUI slot routing (same as src/styles/global.css) ===== */

:root {
${emitDaisyRouting()}
}

/* ===== Theme Overrides (global.css + resolved hex for Chrome <111) ===== */

${emitVariablesThemeBlocks(variablesCSS, globalCSS)}
`;

writeFileSync(targetPath, output, 'utf8');

console.log(`Generated: ${targetPath}`);
