import {
  LEGACY_ICON_ALIASES,
  MODUS_ICON_SLUGS,
  UNMAPPED_LEGACY_ICONS,
} from './icon-data';

export type { ModusIconName } from './icon-data';
export { MODUS_ICON_NAMES, MODUS_ICONS_CSS_VERSION } from './icon-data';

export function resolveIconSlug(name?: string): string | undefined {
  if (!name) {
    return undefined;
  }

  const snake = name.replace(/-/g, '_');
  const alias = LEGACY_ICON_ALIASES[name] ?? LEGACY_ICON_ALIASES[snake];
  if (alias) {
    return alias;
  }

  // Unmapped 1.0 names have no approved 2.0 slug.
  if (UNMAPPED_LEGACY_ICONS.has(snake)) {
    return undefined;
  }

  const kebab = name.replace(/_/g, '-');
  return MODUS_ICON_SLUGS.has(kebab) ? kebab : undefined;
}

export function getModusIconClassName(
  slug: string,
  variant?: 'outlined' | 'solid'
): string {
  return variant === 'solid' ? `modus-icon-${slug}-fill` : `modus-icon-${slug}`;
}

/** Per-glyph mask only. Size lives in `modus-wc-icon.scss`; paint is in the embedded icon CSS. */
export function getModusIconPaintStyle(
  maskImage: string | undefined
): Record<string, string> | undefined {
  if (!maskImage) {
    return undefined;
  }

  return {
    maskImage,
    webkitMaskImage: maskImage,
  };
}
