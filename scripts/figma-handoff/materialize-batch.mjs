#!/usr/bin/env node
/**
 * Materialize multiple variants from a batch manifest.
 * Manifest: { variants: [{ folderId, nodeId, designContextFile, variables, screenshotUrl }] }
 */
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import {
  figmaNameFromProps,
  parseVariantFolderId,
} from './handoff-core.mjs';

const FILE_KEY = 'y9H5ucQKBjzI8JLuVrGcb3';

const [stagingDir, manifestPath] = process.argv.slice(2);
if (!stagingDir || !manifestPath) {
  console.error('Usage: node materialize-batch.mjs <staging-dir> <manifest.json>');
  process.exit(1);
}

const { variants } = JSON.parse(fs.readFileSync(manifestPath, 'utf8'));

for (const v of variants) {
  const variantDir = path.join(stagingDir, 'variants', v.folderId);
  fs.mkdirSync(variantDir, { recursive: true });
  const props = parseVariantFolderId(v.folderId);
  const figmaName = figmaNameFromProps(props);

  fs.copyFileSync(v.designContextFile, path.join(variantDir, 'design-context.md'));

  const variableDefs = {
    nodeId: v.nodeId,
    fileKey: FILE_KEY,
    source: 'official Figma MCP get_variable_defs',
    variant: figmaName,
    variables: v.variables,
  };
  fs.writeFileSync(
    path.join(variantDir, 'variable-defs.json'),
    JSON.stringify(variableDefs, null, 2) + '\n',
  );

  if (v.screenshotUrl) {
    execSync(
      `curl -sL -o "${path.join(variantDir, 'screenshot.png')}" "${v.screenshotUrl}"`,
    );
  }

  const meta = {
    nodeId: v.nodeId,
    fileKey: FILE_KEY,
    name: figmaName,
    props: { size: props.size, state: props.state, validation: props.validation },
    capturedAt: new Date().toISOString(),
  };
  fs.writeFileSync(
    path.join(variantDir, 'meta.json'),
    JSON.stringify(meta, null, 2) + '\n',
  );
  console.log(`Wrote ${v.folderId}`);
}
