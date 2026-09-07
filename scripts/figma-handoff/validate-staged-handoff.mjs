#!/usr/bin/env node
/**
 * Validate modus-figma-staging-v2 before Drive upload.
 *
 * Usage:
 *   node scripts/figma-handoff/validate-staged-handoff.mjs \
 *     --dir scripts/figma-handoff/staging/issue-1234-modus-wc-select \
 *     --capture-tier full
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  CAPTURE_TIERS,
  listVariantDirs,
  variantFolderIdFromFigmaName,
} from './handoff-core.mjs';

const MIN_DESIGN_CONTEXT_BYTES = 800;

function parseArgs(argv) {
  const flags = { dir: null, captureTier: 'full', strict: false };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--dir') flags.dir = argv[++i];
    if (argv[i] === '--capture-tier') flags.captureTier = argv[++i];
    if (argv[i] === '--strict') flags.strict = true;
  }
  return flags;
}

function readJson(filePath) {
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
}

const flags = parseArgs(process.argv.slice(2));
if (!flags.dir) {
  console.error(
    'Usage: node validate-staged-handoff.mjs --dir <staging-folder> [--capture-tier full]',
  );
  process.exit(1);
}

const stagingDir = path.resolve(flags.dir);
const errors = [];
const warnings = [];

if (!fs.existsSync(stagingDir)) {
  console.error(`Not found: ${stagingDir}`);
  process.exit(1);
}

const variantIds = listVariantDirs(stagingDir);
if (!variantIds.length) {
  errors.push('Missing variants/ directory with at least one variant folder.');
}

for (const variantId of variantIds) {
  const base = path.join(stagingDir, 'variants', variantId);
  const dc = path.join(base, 'design-context.md');
  const vd = path.join(base, 'variable-defs.json');
  const ss = path.join(base, 'screenshot.png');
  const meta = path.join(base, 'meta.json');

  if (!fs.existsSync(vd)) {
    errors.push(`${variantId}: missing variable-defs.json (required — get_variable_defs)`);
  }
  if (!fs.existsSync(dc)) {
    errors.push(`${variantId}: missing design-context.md (required — get_design_context)`);
  }
  if (!fs.existsSync(ss)) {
    errors.push(`${variantId}: missing screenshot.png (required — get_screenshot)`);
  }

  if (fs.existsSync(dc)) {
    const size = fs.statSync(dc).size;
    if (size < MIN_DESIGN_CONTEXT_BYTES) {
      errors.push(
        `${variantId}: design-context.md only ${size} bytes — likely truncated/summarized; re-capture verbatim`,
      );
    }
    const text = fs.readFileSync(dc, 'utf8');
    if (/^#\s*Summary/i.test(text.trim()) || text.includes('...(truncated)')) {
      errors.push(
        `${variantId}: design-context.md looks summarized — save raw MCP output, not a summary`,
      );
    }
  }

  if (fs.existsSync(vd)) {
    try {
      const json = readJson(vd);
      if (!json.nodeId) {
        warnings.push(`${variantId}: variable-defs.json missing nodeId`);
      }
      if (!json.variables || !Object.keys(json.variables).length) {
        errors.push(`${variantId}: variable-defs.json has no variables object`);
      }
      if (json.source && !json.source.includes('get_variable_defs')) {
        warnings.push(`${variantId}: variable-defs source should cite get_variable_defs`);
      }
    } catch {
      errors.push(`${variantId}: variable-defs.json is invalid JSON`);
    }
  }

  if (fs.existsSync(meta)) {
    try {
      const json = readJson(meta);
      const expectedId = variantFolderIdFromFigmaName(json.name);
      if (expectedId && expectedId !== variantId) {
        errors.push(
          `${variantId}: folder name mismatch — Figma name "${json.name}" expects folder "${expectedId}"`,
        );
      }
    } catch {
      warnings.push(`${variantId}: meta.json invalid`);
    }
  } else {
    warnings.push(`${variantId}: missing meta.json (recommended)`);
  }
}

const manifestPath = path.join(stagingDir, 'manifest.json');
if (fs.existsSync(manifestPath)) {
  try {
    const manifest = readJson(manifestPath);
    if (manifest.format !== 'modus-figma-staging-v2') {
      warnings.push(`manifest format is ${manifest.format}; expected modus-figma-staging-v2`);
    }
    for (const v of manifest.variants ?? []) {
      if (!variantIds.includes(v.id)) {
        warnings.push(`manifest lists ${v.id} but folder is missing on disk`);
      }
    }
  } catch {
    errors.push('manifest.json invalid JSON');
  }
} else {
  warnings.push('manifest.json not found — run package-staged-handoff.mjs after capture');
}

// Expected coverage for tier (when meta.json lists figma names)
const expectedNames = [];
for (const size of ['xs', 'sm', 'md', 'lg', 'xl']) {
  for (const key of CAPTURE_TIERS[flags.captureTier] ?? CAPTURE_TIERS.full) {
    if (key === 'default') {
      expectedNames.push(
        variantFolderIdFromFigmaName(
          `State=Default, Validation=Default, Size=${size.toUpperCase()}`,
        ),
      );
    } else if (['valid', 'invalid', 'out-of-range'].includes(key)) {
      const validationLabel =
        key === 'out-of-range' ? 'Out of range' : key.charAt(0).toUpperCase() + key.slice(1);
      expectedNames.push(
        variantFolderIdFromFigmaName(
          `State=Default, Validation=${validationLabel}, Size=${size.toUpperCase()}`,
        ),
      );
    } else {
      const stateLabel = key === 'readonly' ? 'Read only' : key.charAt(0).toUpperCase() + key.slice(1);
      expectedNames.push(
        variantFolderIdFromFigmaName(
          `State=${stateLabel}, Validation=Default, Size=${size.toUpperCase()}`,
        ),
      );
    }
  }
}

const missing = expectedNames.filter((id) => id && !variantIds.includes(id));
if (missing.length) {
  warnings.push(
    `Capture tier "${flags.captureTier}" missing ${missing.length} variant folder(s): ${missing.join(', ')}`,
  );
}

console.log(`Validated: ${stagingDir}`);
console.log(`Variants on disk: ${variantIds.length}`);

if (warnings.length) {
  console.log(`\nWarnings (${warnings.length}):`);
  for (const w of warnings) console.log(`  ⚠ ${w}`);
}

if (errors.length) {
  console.log(`\nErrors (${errors.length}):`);
  for (const e of errors) console.log(`  ✗ ${e}`);
  process.exit(1);
}

console.log('\nOK — ready to upload to Drive.');
process.exit(0);
