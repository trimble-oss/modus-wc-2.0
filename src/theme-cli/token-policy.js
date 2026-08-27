/** Palette + semantic colors are Trimble/Modus brand. Apps may not override them. */

export function isBrandColorToken(name) {
  return (
    name.startsWith('--modus-wc-color-') ||
    name.startsWith('--modus-wc-in-field-')
  );
}

export function tokenTier(name) {
  if (!name.startsWith('--modus-wc-')) return 'internal';
  if (isBrandColorToken(name)) return 'internal';
  return 'public';
}

const UNSAFE = /[{};]/;

export function isCssOverrideValue(value) {
  if (typeof value !== 'string') return false;
  const v = value.trim();
  return v.length > 0 && !UNSAFE.test(v);
}

export function lockedColorMessage(token, mode) {
  return `"${token}" in tokens.${mode} is a locked Trimble/Modus brand color and cannot be overridden`;
}
