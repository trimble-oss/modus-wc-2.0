import {
  MODUS_ICON_V1_NAME_SET,
  MODUS_ICON_V1_ONLY_NAMES,
  MODUS_ICON_V1_TO_V2,
  MODUS_ICON_V2_NAME_SET,
} from './icon-data';

export type {
  ModusIconName,
  ModusIconV1Name,
  ModusIconV2Name,
} from './icon-data';
export {
  MODUS_ICONS_CSS_VERSION,
  MODUS_ICON_V1_NAMES,
  MODUS_ICON_V2_NAMES,
} from './icon-data';

export type IconVersion = '1.0' | '2.0';
export type IconVariant = 'outlined' | 'solid';

export type ResolvedIcon =
  | { version: '1.0'; ligature: string }
  | { version: '2.0'; slug: string };

const ICON_V1_CLASS_NAMES: Record<IconVariant, string> = {
  outlined: 'modus-icons-outlined',
  solid: 'modus-icons-solid',
};

function lookupV1Name(name: string): string | undefined {
  const snake = name.replace(/-/g, '_');
  return MODUS_ICON_V1_NAME_SET.has(snake) ? snake : undefined;
}

function lookupV2Slug(name: string): string | undefined {
  const snake = name.replace(/-/g, '_');
  const alias = MODUS_ICON_V1_TO_V2[name] ?? MODUS_ICON_V1_TO_V2[snake];
  if (alias) {
    return alias;
  }

  if (MODUS_ICON_V1_ONLY_NAMES.has(snake)) {
    return undefined;
  }

  const kebab = name.replace(/_/g, '-');
  return MODUS_ICON_V2_NAME_SET.has(kebab) ? kebab : undefined;
}

export function resolveIcon(
  name: string | undefined,
  version: IconVersion = '1.0'
): ResolvedIcon {
  const fallback: ResolvedIcon = { version: '1.0', ligature: name ?? '' };
  if (!name) {
    return fallback;
  }

  const v1Name = lookupV1Name(name);
  const v2Slug = lookupV2Slug(name);
  const v1: ResolvedIcon | undefined = v1Name
    ? { version: '1.0', ligature: v1Name }
    : undefined;
  const v2: ResolvedIcon | undefined = v2Slug
    ? { version: '2.0', slug: v2Slug }
    : undefined;

  return version === '2.0' ? (v2 ?? v1 ?? fallback) : (v1 ?? v2 ?? fallback);
}

export function getIconV1ClassName(variant?: IconVariant): string {
  return variant ? ICON_V1_CLASS_NAMES[variant] : 'modus-icons';
}

export function getIconV2ClassName(
  slug: string,
  variant?: IconVariant
): string {
  return variant === 'solid' ? `modus-icon-${slug}-fill` : `modus-icon-${slug}`;
}

export function getIconGlyphClassName(
  resolved: ResolvedIcon,
  variant?: IconVariant
): string {
  return resolved.version === '2.0'
    ? getIconV2ClassName(resolved.slug, variant)
    : getIconV1ClassName(variant);
}

export function getIconKey(
  resolved: ResolvedIcon,
  variant?: IconVariant
): string {
  const keyVariant = variant ?? 'outlined';
  return resolved.version === '2.0'
    ? `2.0-${resolved.slug}-${keyVariant}`
    : `1.0-${resolved.ligature}-${keyVariant}`;
}

/** Per-glyph mask only. Size lives in `modus-wc-icon.scss`; paint is in the embedded icon CSS. */
export function getIconMaskStyle(
  resolved: ResolvedIcon,
  variant?: IconVariant
): Record<string, string> | undefined {
  if (resolved.version !== '2.0') {
    return undefined;
  }

  const maskImage = `var(--${getIconV2ClassName(resolved.slug, variant)})`;
  return { maskImage, webkitMaskImage: maskImage };
}
