#!/usr/bin/env node
/** @deprecated Use capture-staging.mjs via run-staging-handoff.mjs */
import { execSync } from 'node:child_process';

const staging = process.argv[2] ?? 'scripts/figma-handoff/staging/issue-0-modus-wc-select';
execSync(
  `node scripts/figma-handoff/capture-staging.mjs --staging-dir "${staging}" --file-key y9H5ucQKBjzI8JLuVrGcb3 --variant-set-id 10806:13469 --capture-tier full`,
  { stdio: 'inherit' },
);
