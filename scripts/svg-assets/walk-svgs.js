/* eslint-env node */

import { readdirSync, statSync } from 'fs';
import { join } from 'path';

/**
 * @param {string} dir
 * @param {string} [prefix]
 * @returns {{ rel: string, full: string }[]}
 */
export function walkSvgs(dir, prefix = '') {
  const result = [];
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry);
    const rel = prefix ? `${prefix}/${entry}` : entry;
    if (statSync(full).isDirectory()) {
      result.push(...walkSvgs(full, rel));
    } else if (entry.endsWith('.svg')) {
      result.push({ rel, full });
    }
  }
  return result;
}
