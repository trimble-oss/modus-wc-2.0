#!/usr/bin/env node
/**
 * Capture modus-figma-staging-v2 variants via Figma REST API only.
 * The agent runs this script — MCP responses never enter chat context.
 *
 * Usage:
 *   FIGMA_API_TOKEN=... node scripts/figma-handoff/capture-staging.mjs \
 *     --staging-dir scripts/figma-handoff/staging/issue-0-modus-wc-select \
 *     --file-key y9H5ucQKBjzI8JLuVrGcb3 \
 *     --variant-set-id 10806:13469 \
 *     --capture-tier sizes \
 *     [--variants md-default,sm-default]
 *
 * Writes per variant: meta.json, variable-defs.json, screenshot.png
 * Does NOT write design-context.md (use MCP fallback only when needed).
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  figmaNameFromProps,
  parseVariantFolderId,
  shouldCaptureVariant,
  variantFolderIdFromFigmaName,
} from './handoff-core.mjs';
import {
  buildVariableDefs,
  downloadUrl,
  fetchNodeDocuments,
  fetchScreenshotUrls,
  listVariantSymbols,
  loadLocalVariables,
} from './figma-rest.mjs';

function parseArgs(argv) {
  const flags = {
    stagingDir: null,
    fileKey: null,
    variantSetId: null,
    captureTier: 'sizes',
    variants: null,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === '--staging-dir') flags.stagingDir = next;
    if (arg === '--file-key') flags.fileKey = next;
    if (arg === '--variant-set-id') flags.variantSetId = next;
    if (arg === '--capture-tier') flags.captureTier = next;
    if (arg === '--variants') flags.variants = next.split(',').map((s) => s.trim());
    if (
      ['--staging-dir', '--file-key', '--variant-set-id', '--capture-tier', '--variants'].includes(
        arg,
      )
    ) {
      i += 1;
    }
  }
  return flags;
}

const flags = parseArgs(process.argv.slice(2));
if (!flags.stagingDir || !flags.fileKey || !flags.variantSetId) {
  console.error(`Usage:
  FIGMA_API_TOKEN=... node scripts/figma-handoff/capture-staging.mjs \\
    --staging-dir <dir> --file-key <key> --variant-set-id <id> \\
    [--capture-tier sizes|standard|full] [--variants id1,id2]`);
  process.exit(1);
}

const stagingDir = path.resolve(flags.stagingDir);
fs.mkdirSync(path.join(stagingDir, 'variants'), { recursive: true });

console.log(`Discovering symbols in ${flags.variantSetId}...`);
const symbols = await listVariantSymbols(flags.fileKey, flags.variantSetId);

let targets = symbols
  .map((s) => ({
    ...s,
    folderId: variantFolderIdFromFigmaName(s.name),
  }))
  .filter((s) => s.folderId && shouldCaptureVariant(s.name, flags.captureTier));

if (flags.variants?.length) {
  const allow = new Set(flags.variants);
  targets = targets.filter((t) => allow.has(t.folderId));
}

if (!targets.length) {
  console.error('No variants matched tier/filter.');
  process.exit(1);
}

console.log(`Capturing ${targets.length} variant(s) (tier: ${flags.captureTier})...`);

const { variables, collections } = await loadLocalVariables(flags.fileKey);
const nodeIds = targets.map((t) => t.nodeId);
const nodeDocs = await fetchNodeDocuments(flags.fileKey, nodeIds);
const imageUrls = await fetchScreenshotUrls(flags.fileKey, nodeIds);

let ok = 0;
for (const t of targets) {
  const variantDir = path.join(stagingDir, 'variants', t.folderId);
  fs.mkdirSync(variantDir, { recursive: true });

  const props = parseVariantFolderId(t.folderId);
  const figmaName = figmaNameFromProps(props);
  const nodeDoc = nodeDocs[t.nodeId];

  const variableDefs = buildVariableDefs(
    nodeDoc,
    flags.fileKey,
    t.nodeId,
    figmaName,
    variables,
    collections,
  );
  fs.writeFileSync(
    path.join(variantDir, 'variable-defs.json'),
    `${JSON.stringify(variableDefs, null, 2)}\n`,
  );

  const imgUrl = imageUrls[t.nodeId];
  if (imgUrl) {
    await downloadUrl(imgUrl, path.join(variantDir, 'screenshot.png'));
  } else {
    console.warn(`  ⚠ no screenshot URL for ${t.folderId}`);
  }

  const meta = {
    nodeId: t.nodeId,
    fileKey: flags.fileKey,
    name: figmaName,
    props: { size: props.size, state: props.state, validation: props.validation },
    captureSource: 'figma-rest',
    capturedAt: new Date().toISOString(),
  };
  fs.writeFileSync(path.join(variantDir, 'meta.json'), `${JSON.stringify(meta, null, 2)}\n`);

  const varCount = Object.keys(variableDefs.variables).length;
  console.log(`  ✓ ${t.folderId} (${varCount} variables)`);
  ok += 1;
}

console.log(`\nDone: ${ok}/${targets.length} variants → ${stagingDir}`);
console.log('Next: node scripts/figma-handoff/run-staging-handoff.mjs --package-only ...');
