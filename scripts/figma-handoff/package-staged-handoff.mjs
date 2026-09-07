#!/usr/bin/env node
/**
 * Build modus-figma-staging-v2 manifest.json from per-variant MCP captures.
 *
 * Usage:
 *   node scripts/figma-handoff/package-staged-handoff.mjs \
 *     --dir scripts/figma-handoff/staging/issue-1234-modus-wc-select \
 *     --issue 1234 \
 *     --component modus-wc-select \
 *     --figma-url 'https://www.figma.com/design/...?node-id=308-39905' \
 *     --variant-set-id 10806:13469 \
 *     --drive-folder-id 1rq3OiIfQR-BveyMSHQ45jouEd8xaChLT \
 *     --capture-tier full
 */

import fs from 'node:fs';
import path from 'node:path';
import {
  CAPTURE_TIERS,
  STAGING_FORMAT,
  listVariantDirs,
  parseFigmaUrl,
  variantManifestEntry,
} from './handoff-core.mjs';

function parseArgs(argv) {
  const flags = {
    dir: null,
    issue: 0,
    component: null,
    figmaUrl: null,
    fileKey: null,
    pageNodeId: null,
    variantSetId: null,
    driveFolderId: null,
    driveFolderUrl: null,
    captureTier: 'full',
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    const next = argv[i + 1];
    if (arg === '--dir') flags.dir = next;
    if (arg === '--issue') flags.issue = Number(next);
    if (arg === '--component') flags.component = next;
    if (arg === '--figma-url') flags.figmaUrl = next;
    if (arg === '--file-key') flags.fileKey = next;
    if (arg === '--page-node-id') flags.pageNodeId = next;
    if (arg === '--variant-set-id') flags.variantSetId = next;
    if (arg === '--drive-folder-id') flags.driveFolderId = next;
    if (arg === '--drive-folder-url') flags.driveFolderUrl = next;
    if (arg === '--capture-tier') flags.captureTier = next;
    if (
      [
        '--dir',
        '--issue',
        '--component',
        '--figma-url',
        '--file-key',
        '--page-node-id',
        '--variant-set-id',
        '--drive-folder-id',
        '--drive-folder-url',
        '--capture-tier',
      ].includes(arg)
    ) {
      i += 1;
    }
  }

  return flags;
}

function inferComponent(stagingDir) {
  const base = path.basename(stagingDir);
  const match = base.match(/^issue-\d+-(.+)$/);
  return match?.[1] ?? base;
}

function defaultVariantIds(variantIds) {
  const preferred = ['md-default', 'xs-default', 'sm-default'];
  const picked = preferred.filter((id) => variantIds.includes(id));
  return picked.length ? picked : variantIds.slice(0, 2);
}

function buildIssueComment(manifest) {
  const driveUrl =
    manifest.drive?.folderUrl ??
    (manifest.drive?.folderId
      ? `https://drive.google.com/drive/folders/${manifest.drive.folderId}`
      : '(set drive folder)');

  return [
    '## Figma staged to Drive',
    '',
    `- **Component:** \`${manifest.component}\``,
    `- **Issue:** #${manifest.issue}`,
    `- **Capture tier:** \`${manifest.captureTier}\``,
    `- **Variants:** ${manifest.variants.length} (\`${manifest.variants.map((v) => v.id).join('`, `')}\`)`,
    `- **Drive:** ${driveUrl}`,
    '',
    'Dev / QA routing (paste into routing block):',
    '',
    '```',
    `QA-source: ${manifest.figma.url}`,
    'QA-source-kind: figma-staged',
    `QA-source-path: variants/md-default/ | variants/{id}/`,
    `QA-verify: 1) md-default modern 2) md-focused modern 3) md-disabled modern 4) md-active modern 5) md-invalid modern`,
    '```',
    '',
    'Automations: read `manifest.json` first, then only matching `variants/{id}/` files.',
  ].join('\n');
}

const flags = parseArgs(process.argv.slice(2));
if (!flags.dir) {
  console.error(
    'Usage: node package-staged-handoff.mjs --dir <staging-folder> [--issue N] [--component tag] ...',
  );
  process.exit(1);
}

const stagingDir = path.resolve(flags.dir);
if (!fs.existsSync(stagingDir)) {
  console.error(`Staging folder not found: ${stagingDir}`);
  process.exit(1);
}

const parsedUrl = parseFigmaUrl(flags.figmaUrl);
const fileKey = flags.fileKey ?? parsedUrl.fileKey;
const pageNodeId = flags.pageNodeId ?? parsedUrl.pageNodeId;
const component = flags.component ?? inferComponent(stagingDir);
const variantIds = listVariantDirs(stagingDir);

if (!variantIds.length) {
  console.error(
    'No variants/ subfolders found. Capture MCP outputs into variants/{id}/ first.',
  );
  process.exit(1);
}

const variants = variantIds.map((id) => variantManifestEntry(id, stagingDir));
const capturedAt = new Date().toISOString();

const manifest = {
  format: STAGING_FORMAT,
  issue: flags.issue,
  component,
  captureTier: flags.captureTier,
  captureTierStates: CAPTURE_TIERS[flags.captureTier] ?? CAPTURE_TIERS.full,
  figma: {
    url: flags.figmaUrl ?? parsedUrl.url,
    fileKey,
    pageNodeId,
    variantSetId: flags.variantSetId ?? undefined,
  },
  variants,
  files: {
    codeConnect: fs.existsSync(path.join(stagingDir, 'code-connect.json'))
      ? 'code-connect.json'
      : undefined,
  },
  drive: {
    folderId: flags.driveFolderId ?? undefined,
    folderUrl: flags.driveFolderUrl ?? undefined,
  },
  capturedAt,
  automation: {
    readFirst: 'manifest.json',
    rule:
      'Load only variants whose props match the issue/task. Do not read every file.',
    defaultVariantIds: defaultVariantIds(variantIds),
  },
};

if (!manifest.files.codeConnect) delete manifest.files.codeConnect;

const manifestPath = path.join(stagingDir, 'manifest.json');
fs.writeFileSync(manifestPath, `${JSON.stringify(manifest, null, 2)}\n`);

console.log(`Wrote ${manifestPath} (${variants.length} variants)`);
console.log('\n--- GitHub issue comment block ---\n');
console.log(buildIssueComment(manifest));
