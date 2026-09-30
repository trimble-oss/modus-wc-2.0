import { DaisySize } from '../types';
import { getIconGlyphClassName } from './resolve-icon';
import type { IconVariant, ResolvedIcon } from './resolve-icon';

/** Glyph class first: the 2.0 sheets paint via `[class^="modus-icon-"]`. */
export const convertPropsToClasses = ({
  resolved,
  size,
  variant,
}: {
  resolved: ResolvedIcon;
  size?: DaisySize;
  variant?: IconVariant;
}): string =>
  [
    getIconGlyphClassName(resolved, variant),
    'modus-wc-icon',
    size ? `modus-wc-icon--${size}` : '',
  ]
    .filter(Boolean)
    .join(' ');
