#!/usr/bin/env node
import {
  mkdirSync,
  readFileSync,
  watch,
  writeFileSync,
  existsSync,
} from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { emitConsumerCss, validateConfig } from './consumer.js';

const __dirname = dirname(fileURLToPath(import.meta.url));

function usage() {
  return `modus-theme — offline theme authoring for Modus Web Components

Usage:
  modus-theme init [--force]
  modus-theme build [--watch] [--config <path>] [--out <path>]
  modus-theme check [--config <path>]

Config (committed): modus-theme.config.json
CSS output (gitignored): modus-theme.generated.css
`;
}

function readJson(path) {
  return JSON.parse(readFileSync(path, 'utf8'));
}

function publicTokenSet() {
  const contractPath = join(__dirname, 'token-contract.json');
  if (!existsSync(contractPath)) return null;
  const contract = readJson(contractPath);
  const names = new Set();
  for (const [name, meta] of Object.entries(contract.tokens || {})) {
    if (meta.tier === 'public') names.add(name);
  }
  return names;
}

function configPath(cwd, args) {
  const idx = args.indexOf('--config');
  if (idx !== -1 && args[idx + 1]) return resolve(cwd, args[idx + 1]);
  return join(cwd, 'modus-theme.config.json');
}

function outPath(cwd, args) {
  const idx = args.indexOf('--out');
  if (idx !== -1 && args[idx + 1]) return resolve(cwd, args[idx + 1]);
  return join(cwd, 'modus-theme.generated.css');
}

function defaultConfig() {
  return {
    $schema:
      './node_modules/@trimble-oss/moduswebcomponents/theme-cli/schema.json',
    name: 'my-theme',
    extends: 'modus-modern',
    tokens: {
      light: {
        '--modus-wc-border-radius-btn': '8px',
      },
      dark: {
        '--modus-wc-border-radius-btn': '8px',
      },
    },
  };
}

function ensureLine(filePath, line) {
  if (!existsSync(filePath)) {
    writeFileSync(filePath, `${line}\n`);
    return;
  }
  const current = readFileSync(filePath, 'utf8');
  if (!current.split(/\r?\n/).includes(line)) {
    writeFileSync(filePath, `${current.replace(/\s*$/, '')}\n${line}\n`);
  }
}

function mergeScript(pkg, name, command) {
  const existing = pkg.scripts?.[name];
  if (!existing) {
    pkg.scripts = { ...(pkg.scripts || {}), [name]: command };
    return;
  }
  if (existing.includes('modus-theme')) return;
  pkg.scripts[name] = `${existing} && ${command}`;
}

function detectDevScript(pkg) {
  for (const name of ['predev', 'prestart', 'dev', 'start', 'storybook']) {
    if (pkg.scripts?.[name] && name.startsWith('pre')) return name;
  }
  if (pkg.scripts?.dev) return 'predev';
  if (pkg.scripts?.start) return 'prestart';
  if (pkg.scripts?.storybook) return 'prestorybook';
  return null;
}

function cmdInit(cwd, args) {
  const force = args.includes('--force');
  const cfg = join(cwd, 'modus-theme.config.json');
  if (existsSync(cfg) && !force) {
    console.log(`Already exists: ${cfg} (use --force to overwrite)`);
  } else {
    writeFileSync(cfg, `${JSON.stringify(defaultConfig(), null, 2)}\n`);
    console.log(`Wrote ${cfg}`);
  }

  ensureLine(join(cwd, '.gitignore'), 'modus-theme.generated.css');

  const pkgPath = join(cwd, 'package.json');
  if (existsSync(pkgPath)) {
    const pkg = readJson(pkgPath);
    mergeScript(pkg, 'postinstall', 'modus-theme build');
    mergeScript(pkg, 'prebuild', 'modus-theme build');
    const preDev = detectDevScript(pkg);
    if (preDev) mergeScript(pkg, preDev, 'modus-theme build');
    writeFileSync(pkgPath, `${JSON.stringify(pkg, null, 2)}\n`);
    console.log('Updated package.json lifecycle scripts');
  }

  const ruleDir = join(cwd, '.cursor/rules');
  mkdirSync(ruleDir, { recursive: true });
  const rulePath = join(ruleDir, 'modus-theme.mdc');
  if (!existsSync(rulePath) || force) {
    writeFileSync(
      rulePath,
      `---
description: Author Modus themes via modus-theme.config.json (never copy generated CSS)
alwaysApply: false
---
# Modus theme authoring

- Edit \`modus-theme.config.json\` only. Run \`npx modus-theme build\`.
- Do not copy or commit \`modus-theme.generated.css\`.
- Override public non-color \`--modus-wc-*\` tokens (spacing, type, radius). Do not override \`--modus-wc-color-*\` brand colors.
- Set \`<html data-theme="{name}-light|dark">\` (or ThemeProvider \`theme="{name}"\`).
`
    );
    console.log(`Wrote ${rulePath}`);
  }
}

function loadAndValidate(cfgPath) {
  if (!existsSync(cfgPath)) {
    throw new Error(`Missing config: ${cfgPath}. Run modus-theme init.`);
  }
  const config = readJson(cfgPath);
  const errors = validateConfig(config, publicTokenSet());
  if (errors.length) {
    const err = new Error(errors.map((e) => `  - ${e}`).join('\n'));
    err.validation = true;
    throw err;
  }
  return config;
}

function cmdCheck(cwd, args) {
  const cfg = configPath(cwd, args);
  loadAndValidate(cfg);
  console.log(`OK ${cfg}`);
}

function cmdBuild(cwd, args) {
  const cfg = configPath(cwd, args);
  const out = outPath(cwd, args);
  const config = loadAndValidate(cfg);
  writeFileSync(out, emitConsumerCss(config));
  console.log(`Wrote ${out}`);
}

function cmdBuildWatch(cwd, args) {
  cmdBuild(cwd, args);
  const cfg = configPath(cwd, args);
  console.log(`Watching ${cfg}`);
  watch(cfg, { persistent: true }, () => {
    try {
      cmdBuild(cwd, args);
    } catch (error) {
      console.error(error.message);
    }
  });
}

const cwd = process.cwd();
const [command, ...args] = process.argv.slice(2);

try {
  switch (command) {
    case 'init':
      cmdInit(cwd, args);
      break;
    case 'build':
      if (args.includes('--watch')) cmdBuildWatch(cwd, args);
      else cmdBuild(cwd, args);
      break;
    case 'check':
      cmdCheck(cwd, args);
      break;
    case '-h':
    case '--help':
    case undefined:
      console.log(usage());
      break;
    default:
      console.error(`Unknown command: ${command}\n`);
      console.error(usage());
      process.exitCode = 1;
  }
} catch (error) {
  console.error(error.message);
  process.exitCode = 1;
}
