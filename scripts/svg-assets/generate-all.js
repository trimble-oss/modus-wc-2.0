/* eslint-env node */

/**
 * Regenerate all SVG asset TypeScript bundles (logos + illustrations).
 */

import { spawnSync } from 'child_process';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const scripts = ['generate-logo-data.js', 'generate-illustration-data.js'];

for (const script of scripts) {
  const result = spawnSync(process.execPath, [join(__dirname, script)], {
    stdio: 'inherit',
  });
  if (result.status !== 0) {
    process.exit(result.status ?? 1);
  }
}
