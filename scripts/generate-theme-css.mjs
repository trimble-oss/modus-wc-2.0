import { mkdirSync, readFileSync, writeFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import {
  emitLegacyFallbackCss,
  spliceLegacyBlock,
} from '../src/theme-cli/emit.js';
import {
  buildThemeMap,
  listCustomProps,
  resolveValue,
} from '../src/theme-cli/css-parse.js';
import { DAISY_SLOTS, THEME_NAMES } from '../src/theme-cli/slots.js';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, '..');

const paths = {
  variables: join(root, 'src/styles/variables.css'),
  global: join(root, 'src/styles/global.css'),
  output: join(root, 'src/styles/output.css'),
  generated: join(root, 'src/styles/generated-legacy-fallbacks.css'),
  contract: join(root, 'src/theme-cli/token-contract.json'),
};

function tokenCategory(name) {
  if (
    name.startsWith('--tw-') ||
    name.includes('color') ||
    name.includes('in-field')
  ) {
    return 'color';
  }
  if (name.includes('font') || name.includes('line-height'))
    return 'typography';
  if (name.includes('spacing') || name.includes('-size-')) return 'spacing';
  if (name.includes('border')) return 'border';
  if (name.includes('opacity')) return 'effect';
  if (name.includes('input-height')) return 'spacing';
  return 'other';
}

export function writeTokenContract(variablesCss, globalCss) {
  const tokens = {};
  const names = listCustomProps(variablesCss, '--');
  for (const name of names) {
    const defaults = {};
    for (const themeName of THEME_NAMES) {
      const { map, isDark } = buildThemeMap(variablesCss, globalCss, themeName);
      defaults[themeName] = resolveValue(`var(${name})`, map, isDark);
    }
    tokens[name] = {
      tier: name.startsWith('--modus-wc-') ? 'public' : 'internal',
      category: tokenCategory(name),
      autoDerived: false,
      defaults,
    };
  }

  const contract = {
    version: 1,
    daisySlots: { ...DAISY_SLOTS },
    tokens,
  };

  writeFileSync(paths.contract, `${JSON.stringify(contract, null, 2)}\n`);
  return paths.contract;
}

export function appendLegacyToOutput({
  invert = process.env.MODUS_LEGACY_THEME === '1',
} = {}) {
  if (!existsSync(paths.output)) {
    throw new Error(`Missing ${paths.output} — run Tailwind first`);
  }
  const variablesCss = readFileSync(paths.variables, 'utf8');
  const globalCss = readFileSync(paths.global, 'utf8');
  const generated = emitLegacyFallbackCss(variablesCss, globalCss, { invert });
  mkdirSync(dirname(paths.generated), { recursive: true });
  writeFileSync(paths.generated, generated);

  const outputCss = readFileSync(paths.output, 'utf8');
  const next = spliceLegacyBlock(outputCss, generated);
  if (next !== outputCss) {
    writeFileSync(paths.output, next);
  }
  return { generated, inverted: invert };
}

const args = process.argv.slice(2);
if (import.meta.url === pathToFileURL(process.argv[1]).href) {
  const variablesCss = readFileSync(paths.variables, 'utf8');
  const globalCss = readFileSync(paths.global, 'utf8');

  if (args.includes('--write-contract')) {
    const dest = writeTokenContract(variablesCss, globalCss);
    console.log(`Wrote ${dest}`);
  }

  if (args.includes('--append-output') || args.length === 0) {
    if (existsSync(paths.output)) {
      const { inverted } = appendLegacyToOutput();
      console.log(
        `Appended generated legacy fallbacks to output.css${inverted ? ' (inverted @supports)' : ''}`
      );
    }
  }
}
