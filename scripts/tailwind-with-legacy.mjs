#!/usr/bin/env node
import { spawn } from 'node:child_process';
import { watch } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { appendLegacyToOutput } from './generate-theme-css.mjs';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const tailwindBin = join(root, 'node_modules/.bin/tailwindcss');

const watchMode = process.argv.includes('--watch');
const args = [
  '-i',
  'src/styles/tailwind.css',
  '-o',
  'src/styles/output.css',
  '--minify',
];
if (watchMode) args.push('--watch');

let appending = false;
let lastSig = '';

async function appendSafe() {
  if (appending) return;
  appending = true;
  try {
    const { generated } = appendLegacyToOutput();
    if (generated !== lastSig) {
      lastSig = generated;
      console.log('modus-theme: appended legacy fallbacks to output.css');
    }
  } catch (error) {
    console.error(error.message);
  } finally {
    appending = false;
  }
}

const child = spawn(tailwindBin, args, { stdio: 'inherit', cwd: root });
child.on('error', (error) => {
  console.error(error.message);
  process.exit(1);
});

if (watchMode) {
  let timer;
  watch('src/styles/output.css', () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      appendSafe();
    }, 250);
  });
} else {
  child.on('exit', (code) => {
    if (code !== 0) process.exit(code ?? 1);
    appendSafe().then(() => process.exit(0));
  });
}
