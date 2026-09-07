#!/usr/bin/env node
/**
 * Store one variant capture: reads design context from stdin.
 * Usage:
 *   node store-capture.mjs <folderId> <nodeId> <varsJsonPath> <screenshotUrl> < design-context.md
 */
import fs from 'node:fs';
import path from 'node:path';

const [folderId, nodeId, varsPath, screenshotUrl] = process.argv.slice(2);
const designContext = fs.readFileSync(0, 'utf8');
const variables = JSON.parse(fs.readFileSync(varsPath, 'utf8'));
const out = {
  folderId,
  nodeId,
  designContext,
  variables,
  screenshotUrl,
  capturedAt: new Date().toISOString(),
};
const dir = 'scripts/figma-handoff/.captures';
fs.mkdirSync(dir, { recursive: true });
fs.writeFileSync(path.join(dir, `${folderId}.json`), JSON.stringify(out, null, 2));
console.log(`stored ${folderId} (${designContext.length} bytes)`);
