#!/usr/bin/env node
/** Materialize one variant from .captures/{folderId}.json */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { figmaNameFromProps, parseVariantFolderId } from './handoff-core.mjs';

const FILE_KEY = 'y9H5ucQKBjzI8JLuVrGcb3';
const STAGING = process.argv[2] ?? 'scripts/figma-handoff/staging/issue-0-modus-wc-select';
const CAPTURES = 'scripts/figma-handoff/.captures';

const files = fs.readdirSync(CAPTURES).filter((f) => f.endsWith('.json') && !f.includes('batch'));
let ok = 0;
for (const file of files) {
  const c = JSON.parse(fs.readFileSync(path.join(CAPTURES, file), 'utf8'));
  const folderId = c.folderId ?? file.replace('.json', '');
  const dir = path.join(STAGING, 'variants', folderId);
  fs.mkdirSync(dir, { recursive: true });
  const props = parseVariantFolderId(folderId);
  const figmaName = figmaNameFromProps(props);
  fs.writeFileSync(path.join(dir, 'design-context.md'), c.designContext, 'utf8');
  fs.writeFileSync(
    path.join(dir, 'variable-defs.json'),
    JSON.stringify(
      {
        nodeId: c.nodeId,
        fileKey: FILE_KEY,
        source: 'official Figma MCP get_variable_defs',
        variant: figmaName,
        variables: c.variables,
      },
      null,
      2,
    ) + '\n',
  );
  if (c.screenshotUrl) {
    execSync(`curl -sL -o "${path.join(dir, 'screenshot.png')}" "${c.screenshotUrl}"`);
  }
  fs.writeFileSync(
    path.join(dir, 'meta.json'),
    JSON.stringify(
      {
        nodeId: c.nodeId,
        fileKey: FILE_KEY,
        name: figmaName,
        props: { size: props.size, state: props.state, validation: props.validation },
        capturedAt: c.capturedAt ?? new Date().toISOString(),
      },
      null,
      2,
    ) + '\n',
  );
  console.log('Materialized', folderId);
  ok += 1;
}
console.log(`Done: ${ok} variants`);
