export function stripComments(css) {
  return css.replace(/\/\*[\s\S]*?\*\//g, '');
}

export function splitTopLevel(input, delimiter) {
  const parts = [];
  let start = 0;
  let paren = 0;
  for (let i = 0; i < input.length; i++) {
    const c = input[i];
    if (c === '(') paren += 1;
    else if (c === ')') paren -= 1;
    else if (c === delimiter && paren === 0) {
      parts.push(input.slice(start, i));
      start = i + 1;
    }
  }
  parts.push(input.slice(start));
  return parts;
}

export function parseDecls(block) {
  const decls = [];
  const pieces = splitTopLevel(block, ';');
  for (const piece of pieces) {
    const trimmed = piece.trim();
    if (!trimmed) continue;
    const idx = trimmed.indexOf(':');
    if (idx === -1) continue;
    const prop = trimmed.slice(0, idx).trim();
    const value = trimmed.slice(idx + 1).trim();
    decls.push({ prop, value });
  }
  return decls;
}

export function extractRules(css) {
  const source = stripComments(css);
  const rules = [];
  let i = 0;
  const len = source.length;

  while (i < len) {
    while (i < len && /\s/.test(source[i])) i += 1;
    if (i >= len) break;

    const preludeStart = i;
    let paren = 0;
    let brace = -1;
    while (i < len) {
      const c = source[i];
      if (c === '(') paren += 1;
      else if (c === ')') paren -= 1;
      else if (c === '{' && paren === 0) {
        brace = i;
        break;
      }
      i += 1;
    }
    if (brace === -1) break;

    const prelude = source.slice(preludeStart, brace).trim();
    i = brace + 1;
    let depth = 1;
    const bodyStart = i;
    while (i < len && depth > 0) {
      if (source[i] === '{') depth += 1;
      else if (source[i] === '}') depth -= 1;
      i += 1;
    }
    const body = source.slice(bodyStart, i - 1);

    if (prelude.startsWith('@')) {
      const nested = extractRules(body);
      for (const rule of nested) {
        const atRule = rule.atRule ? `${prelude} ${rule.atRule}` : prelude;
        rules.push({ ...rule, atRule });
      }
    } else {
      rules.push({
        selector: prelude,
        decls: parseDecls(body),
        atRule: '',
      });
    }
  }

  return rules;
}

export function normalizeColor(value) {
  const v = value.trim().replace(/\s+/g, ' ');
  const short = /^#([0-9a-fA-F]{3})$/.exec(v);
  if (short) {
    const [r, g, b] = short[1];
    return `#${r}${r}${g}${g}${b}${b}`.toLowerCase();
  }
  if (/^#([0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/.test(v)) {
    return v.toLowerCase();
  }
  return v;
}

function matchLightDark(value) {
  const trimmed = value.trim();
  if (
    !trimmed.toLowerCase().startsWith('light-dark(') ||
    !trimmed.endsWith(')')
  ) {
    return null;
  }
  const inner = trimmed.slice('light-dark('.length, -1);
  const args = splitTopLevel(inner, ',');
  if (args.length !== 2) return null;
  return args.map((a) => a.trim());
}

export function resolveLightDark(value, isDark) {
  const args = matchLightDark(value);
  if (!args) return value.trim();
  return isDark ? args[1] : args[0];
}

function substituteOneVar(value, map, isDark, depth) {
  const start = value.indexOf('var(');
  if (start === -1) return value;

  let i = start + 4;
  let paren = 1;
  while (i < value.length && paren > 0) {
    if (value[i] === '(') paren += 1;
    else if (value[i] === ')') paren -= 1;
    i += 1;
  }

  const inner = value.slice(start + 4, i - 1);
  const parts = splitTopLevel(inner, ',');
  const name = parts[0].trim();
  const fallback = parts.slice(1).join(',').trim();
  let replacement;
  if (map.has(name)) {
    replacement = resolveValue(map.get(name), map, isDark, depth + 1);
  } else if (fallback) {
    replacement = resolveValue(fallback, map, isDark, depth + 1);
  } else {
    return value;
  }

  return value.slice(0, start) + replacement + value.slice(i);
}

export function resolveValue(value, map, isDark, depth = 0) {
  if (depth > 40) return value.trim();
  let current = resolveLightDark(value, isDark);
  let guard = 0;
  while (current.includes('var(') && guard < 40) {
    const next = substituteOneVar(current, map, isDark, depth);
    if (next === current) break;
    current = resolveLightDark(next, isDark);
    guard += 1;
  }
  return normalizeColor(current);
}

function selectorMatchesTheme(selector, themeName) {
  const compact = selector.replace(/\s+/g, '');
  return (
    compact.includes(`[data-theme='${themeName}']`) ||
    compact.includes(`[data-theme="${themeName}"]`) ||
    compact.includes(`[data-theme=${themeName}]`)
  );
}

export function buildThemeMap(variablesCss, globalCss, themeName) {
  const isDark = themeName.endsWith('-dark');
  const map = new Map();

  for (const rule of extractRules(variablesCss)) {
    if (rule.atRule.includes('prefers-color-scheme')) continue;
    if (rule.selector !== ':root') continue;
    for (const decl of rule.decls) {
      if (decl.prop.startsWith('--')) map.set(decl.prop, decl.value);
    }
  }

  for (const rule of extractRules(globalCss)) {
    if (rule.atRule.includes('prefers-color-scheme')) continue;
    if (!selectorMatchesTheme(rule.selector, themeName)) continue;
    for (const decl of rule.decls) {
      if (decl.prop.startsWith('--')) map.set(decl.prop, decl.value);
    }
  }

  return { map, isDark };
}

export function listCustomProps(variablesCss, prefix = '--modus-wc-') {
  const names = new Set();
  for (const rule of extractRules(variablesCss)) {
    if (rule.selector !== ':root') continue;
    for (const decl of rule.decls) {
      if (decl.prop.startsWith(prefix)) names.add(decl.prop);
    }
  }
  return [...names].sort();
}
