import {
  buildThemeMap,
  extractRules,
  listCustomProps,
  resolveValue,
} from './css-parse.js';
import {
  DAISY_SLOTS,
  DEFAULT_THEME,
  LEGACY_BLOCK_END,
  LEGACY_BLOCK_START,
  SLOT_NAMES,
  THEME_NAMES,
} from './slots.js';

export function resolveSlots(variablesCss, globalCss, themeName) {
  const { map, isDark } = buildThemeMap(variablesCss, globalCss, themeName);
  const slots = {};
  for (const slot of SLOT_NAMES) {
    const token = DAISY_SLOTS[slot];
    slots[slot] = resolveValue(`var(${token})`, map, isDark);
  }
  return slots;
}

export function resolveAllColorTokens(variablesCss, globalCss, themeName) {
  const { map, isDark } = buildThemeMap(variablesCss, globalCss, themeName);
  const names = listCustomProps(variablesCss, '--modus-wc-color-');
  const tokens = {};
  for (const name of names) {
    tokens[name] = resolveValue(`var(${name})`, map, isDark);
  }
  return tokens;
}

export function emitDaisyRouting(indent = '  ') {
  return SLOT_NAMES.map((slot) => {
    const token = DAISY_SLOTS[slot];
    return `${indent}--${slot}: var(${token});\n${indent}--fallback-${slot}: var(${token});`;
  }).join('\n');
}

function emitSlotHexBlock(themeName, slots, { includeRoot = false } = {}) {
  const selector = includeRoot
    ? `:root,\n  [data-theme='${themeName}']`
    : `[data-theme='${themeName}']`;
  const decls = SLOT_NAMES.map((slot) => {
    const hex = slots[slot];
    return `    --${slot}: ${hex};\n    --fallback-${slot}: ${hex};`;
  }).join('\n');
  return `  ${selector} {\n${decls}\n  }`;
}

export function emitLegacyFallbackCss(
  variablesCss,
  globalCss,
  { invert = false } = {}
) {
  const condition = invert
    ? '@supports (color: oklch(0% 0 0))'
    : '@supports not (color: oklch(0% 0 0))';
  const blocks = THEME_NAMES.map((themeName) => {
    const slots = resolveSlots(variablesCss, globalCss, themeName);
    return emitSlotHexBlock(themeName, slots, {
      includeRoot: themeName === DEFAULT_THEME,
    });
  });

  return [
    LEGACY_BLOCK_START,
    '/* Generated from src/styles/variables.css + src/styles/global.css. Do not edit. */',
    condition + ' {',
    ...blocks,
    '}',
    LEGACY_BLOCK_END,
    '',
  ].join('\n');
}

export function spliceLegacyBlock(existingCss, generatedBlock) {
  const start = existingCss.indexOf(LEGACY_BLOCK_START);
  const end = existingCss.indexOf(LEGACY_BLOCK_END);
  if (start !== -1 && end !== -1 && end > start) {
    const after = existingCss.slice(end + LEGACY_BLOCK_END.length);
    return `${existingCss.slice(0, start).trimEnd()}\n\n${generatedBlock}${after.replace(/^\n*/, '')}`;
  }
  return `${existingCss.trimEnd()}\n\n${generatedBlock}`;
}

export function invertSupportsNot(css) {
  return css.replace(
    /@supports not \(color: oklch\(0% 0 0\)\)/g,
    '@supports (color: oklch(0% 0 0))'
  );
}

export function emitVariablesThemeBlocks(variablesCss, globalCss) {
  const blocks = [];
  const comments = {
    'modus-modern-light': '/* Modus Modern Themes */',
    'modus-classic-light': '/* Modus Classic Themes */',
    'connect-light': '/* Connect Themes */',
  };

  for (const themeName of THEME_NAMES) {
    const colorTokens = resolveAllColorTokens(
      variablesCss,
      globalCss,
      themeName
    );
    const slots = resolveSlots(variablesCss, globalCss, themeName);

    const globalDecls = [];
    for (const rule of extractRules(globalCss)) {
      if (rule.atRule.includes('prefers-color-scheme')) continue;
      const compact = rule.selector.replace(/\s+/g, '');
      if (
        compact.includes(`[data-theme='${themeName}']`) ||
        compact.includes(`[data-theme="${themeName}"]`)
      ) {
        for (const decl of rule.decls) {
          globalDecls.push(`  ${decl.prop}: ${decl.value};`);
        }
      }
    }

    const hexSemantic = Object.entries(colorTokens)
      .map(([name, value]) => `  ${name}: ${value};`)
      .join('\n');

    const slotHex = SLOT_NAMES.map((slot) => {
      const hex = slots[slot];
      return `  --${slot}: ${hex};\n  --fallback-${slot}: ${hex};`;
    }).join('\n');

    const comment = comments[themeName] ? `${comments[themeName]}\n` : '';
    blocks.push(
      `${comment}[data-theme='${themeName}']:root {\n${[
        ...globalDecls,
        hexSemantic,
        slotHex,
      ].join('\n')}\n}`
    );
  }

  return blocks.join('\n\n');
}

export function routedFallbackProps(globalCss) {
  const names = new Set();
  for (const rule of extractRules(globalCss)) {
    if (!rule.atRule.includes('@supports (color: oklch(0% 0 0))')) continue;
    if (rule.selector !== ':root') continue;
    for (const decl of rule.decls) {
      const match = /^--fallback-([a-z0-9]+)$/.exec(decl.prop);
      if (match) names.add(match[1]);
    }
  }
  return names;
}
