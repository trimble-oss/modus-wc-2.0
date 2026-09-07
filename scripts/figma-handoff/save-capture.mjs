#!/usr/bin/env node
/**
 * Save one MCP capture to .captures/{folderId}.json
 * Usage: node save-capture.mjs <folderId> <nodeId> <designContextFile> <variablesJson> <screenshotUrl>
 */
import fs from 'node:fs';
import path from 'node:path';

const [folderId, nodeId, dcFile, varsFile, screenshotUrl] = process.argv.slice(2);
if (!folderId || !nodeId || !dcFile || !varsFile) {
  console.error('Usage: save-capture.mjs <folderId> <nodeId> <dcFile> <varsFile> [screenshotUrl]');
  process.exit(1);
}
const CAP = 'scripts/figma-handoff/.captures';
fs.mkdirSync(CAP, { recursive: true });
const capture = {
  folderId,
  nodeId,
  designContext: fs.readFileSync(dcFile, 'utf8'),
  variables: JSON.parse(fs.readFileSync(varsFile, 'utf8')),
  screenshotUrl,
  capturedAt: new Date().toISOString(),
};
fs.writeFileSync(path.join(CAP, `${folderId}.json`), JSON.stringify(capture, null, 2));
console.log(`Saved ${folderId} (${capture.designContext.length} bytes dc)`);
