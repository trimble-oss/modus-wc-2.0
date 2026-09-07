#!/usr/bin/env node
/**
 * Orchestrate staging: optional REST capture → package → validate.
 * Agent should run ONLY this script and read stdout (no capture payloads).
 *
 * Usage:
 *   FIGMA_API_TOKEN=... node scripts/figma-handoff/run-staging-handoff.mjs \\
 *     --staging-dir scripts/figma-handoff/staging/issue-0-modus-wc-select \\
 *     --issue 0 --component modus-wc-select \\
 *     --file-key y9H5ucQKBjzI8JLuVrGcb3 \\
 *     --variant-set-id 10806:13469 \\
 *     --figma-url 'https://www.figma.com/design/...?node-id=308-39905' \\
 *     --drive-folder-id 1rq3OiIfQR-BveyMSHQ45jouEd8xaChLT \\
 *     --capture-tier sizes \\
 *     [--variants md-default,sm-default] \\
 *     [--package-only]   # skip capture; only package+validate
 */

import { execSync } from 'node:child_process';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '../..');

function parseArgs(argv) {
  const flags = {
    stagingDir: null,
    issue: 0,
    component: null,
    fileKey: null,
    variantSetId: null,
    figmaUrl: null,
    driveFolderId: null,
    captureTier: 'sizes',
    variants: null,
    packageOnly: false,
    captureSource: 'rest',
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === '--staging-dir') flags.stagingDir = next;
    if (arg === '--issue') flags.issue = Number(next);
    if (arg === '--component') flags.component = next;
    if (arg === '--file-key') flags.fileKey = next;
    if (arg === '--variant-set-id') flags.variantSetId = next;
    if (arg === '--figma-url') flags.figmaUrl = next;
    if (arg === '--drive-folder-id') flags.driveFolderId = next;
    if (arg === '--capture-tier') flags.captureTier = next;
    if (arg === '--variants') flags.variants = next;
    if (arg === '--capture-source') flags.captureSource = next;
    if (arg === '--package-only') flags.packageOnly = true;
    if (
      [
        '--staging-dir',
        '--issue',
        '--component',
        '--file-key',
        '--variant-set-id',
        '--figma-url',
        '--drive-folder-id',
        '--capture-tier',
        '--variants',
        '--capture-source',
      ].includes(arg)
    ) {
      i += 1;
    }
  }
  return flags;
}

function run(cmd) {
  execSync(cmd, { stdio: 'inherit', cwd: ROOT });
}

const flags = parseArgs(process.argv.slice(2));
if (!flags.stagingDir) {
  console.error('Missing --staging-dir');
  process.exit(1);
}

const stagingDir = path.resolve(flags.stagingDir);

if (!flags.packageOnly) {
  if (!flags.fileKey || !flags.variantSetId) {
    console.error('Capture requires --file-key and --variant-set-id');
    process.exit(1);
  }
  const variantArg = flags.variants ? ` --variants ${flags.variants}` : '';
  run(
    `node scripts/figma-handoff/capture-staging.mjs --staging-dir "${stagingDir}" --file-key ${flags.fileKey} --variant-set-id ${flags.variantSetId} --capture-tier ${flags.captureTier}${variantArg}`,
  );
}

const component = flags.component ?? path.basename(stagingDir).replace(/^issue-\d+-/, '');
const driveArg = flags.driveFolderId ? ` --drive-folder-id ${flags.driveFolderId}` : '';
const urlArg = flags.figmaUrl ? ` --figma-url '${flags.figmaUrl.replace(/'/g, "'\\''")}'` : '';
const setArg = flags.variantSetId ? ` --variant-set-id ${flags.variantSetId}` : '';

run(
  `node scripts/figma-handoff/package-staged-handoff.mjs --dir "${stagingDir}" --issue ${flags.issue} --component ${component}${urlArg}${setArg}${driveArg} --capture-tier ${flags.captureTier}`,
);

run(
  `node scripts/figma-handoff/validate-staged-handoff.mjs --dir "${stagingDir}" --capture-tier ${flags.captureTier} --capture-source ${flags.captureSource}`,
);

console.log('\n✓ Staging ready for Drive upload (use Drive MCP or upload-staging-drive.mjs)');
