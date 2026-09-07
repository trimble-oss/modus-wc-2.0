#!/usr/bin/env node
/**
 * Write per-variant staging files from captured MCP payloads.
 * Usage: node write-staged-variant.mjs --staging-dir <dir> --folder-id <id> --payload <json-file>
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import {
  figmaNameFromProps,
  parseVariantFolderId,
} from './handoff-core.mjs';

const FILE_KEY = 'y9H5ucQKBjzI8JLuVrGcb3';

function parseArgs(argv) {
  const flags = {
    stagingDir: null,
    folderId: null,
    payload: null,
    designContextFile: null,
  };
  for (let i = 0; i < argv.length; i += 1) {
    if (argv[i] === '--staging-dir') flags.stagingDir = argv[++i];
    if (argv[i] === '--folder-id') flags.folderId = argv[++i];
    if (argv[i] === '--payload') flags.payload = argv[++i];
    if (argv[i] === '--design-context-file') flags.designContextFile = argv[++i];
  }
  return flags;
}

const flags = parseArgs(process.argv.slice(2));
if (!flags.stagingDir || !flags.folderId || !flags.payload) {
  console.error(
    'Usage: node write-staged-variant.mjs --staging-dir <dir> --folder-id <id> --payload <json>',
  );
  process.exit(1);
}

const payload = JSON.parse(fs.readFileSync(flags.payload, 'utf8'));
const { nodeId, designContext, variables, screenshotUrl } = payload;
const folderId = flags.folderId;
const variantDir = path.join(flags.stagingDir, 'variants', folderId);
fs.mkdirSync(variantDir, { recursive: true });

const props = parseVariantFolderId(folderId);
const figmaName = figmaNameFromProps(props);

const dcText =
  flags.designContextFile
    ? fs.readFileSync(flags.designContextFile, 'utf8')
    : designContext;
fs.writeFileSync(path.join(variantDir, 'design-context.md'), dcText, 'utf8');

const variableDefs = {
  nodeId,
  fileKey: FILE_KEY,
  source: 'official Figma MCP get_variable_defs',
  variant: figmaName,
  variables,
};
fs.writeFileSync(
  path.join(variantDir, 'variable-defs.json'),
  JSON.stringify(variableDefs, null, 2) + '\n',
  'utf8',
);

if (screenshotUrl) {
  execSync(`curl -sL -o "${path.join(variantDir, 'screenshot.png')}" "${screenshotUrl}"`);
}

const meta = {
  nodeId,
  fileKey: FILE_KEY,
  name: figmaName,
  props: {
    size: props.size,
    state: props.state,
    validation: props.validation,
  },
  capturedAt: new Date().toISOString(),
};
fs.writeFileSync(
  path.join(variantDir, 'meta.json'),
  JSON.stringify(meta, null, 2) + '\n',
  'utf8',
);

console.log(`Wrote ${folderId}`);
