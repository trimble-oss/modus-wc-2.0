#!/usr/bin/env node
/** @deprecated Use run-staging-handoff.mjs instead. */
import { execSync } from 'node:child_process';

const staging = process.argv[2] ?? 'scripts/figma-handoff/staging/issue-0-modus-wc-select';
execSync(
  `node scripts/figma-handoff/run-staging-handoff.mjs --package-only --staging-dir "${staging}" --issue 0 --component modus-wc-select --capture-tier sizes --capture-source rest`,
  { stdio: 'inherit' },
);
