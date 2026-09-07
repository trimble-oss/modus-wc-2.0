#!/usr/bin/env node
/** Save capture from stdin JSON: { designContext, variables } */
import fs from 'node:fs';
import { execSync } from 'node:child_process';

const [folderId, nodeId, screenshotUrl] = process.argv.slice(2);
const { designContext, variables } = JSON.parse(fs.readFileSync(0, 'utf8'));
const base = 'scripts/figma-handoff/.captures';
fs.mkdirSync(`${base}/dc`, { recursive: true });
fs.mkdirSync(`${base}/vars`, { recursive: true });
fs.writeFileSync(`${base}/dc/${folderId}.md`, designContext);
fs.writeFileSync(`${base}/vars/${folderId}.json`, JSON.stringify(variables));
execSync(
  `node scripts/figma-handoff/store-capture.mjs ${folderId} ${nodeId} ${base}/vars/${folderId}.json ${screenshotUrl} < ${base}/dc/${folderId}.md`,
  { stdio: 'inherit' },
);
