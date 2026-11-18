import { DaisySize } from '../types';

type BadgeColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'high-contrast'
  | 'success'
  | 'warning'
  | 'danger';
type BadgeShape = 'ellipse' | 'rectangle';
type BadgeVariant = 'counter' | 'filled' | 'outlined' | 'text';

/** Prop color value → `modus-wc-badge-*` suffix (tertiary → neutral, danger → error). */
const BADGE_COLOR_CLASS_SUFFIX: Record<BadgeColor, string> = {
  default: 'default',
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'neutral',
  'high-contrast': 'high-contrast',
  success: 'success',
  warning: 'warning',
  danger: 'error',
};

export const convertPropsToClasses = ({
  color,
  shape,
  size,
  variant,
}: {
  color?: BadgeColor;
  shape?: BadgeShape;
  size?: DaisySize;
  variant?: BadgeVariant;
}): string => {
  const colorSuffix = color ? BADGE_COLOR_CLASS_SUFFIX[color] : undefined;
  const classes = [
    colorSuffix && `modus-wc-badge-${colorSuffix}`,
    shape && variant !== 'text' && `modus-wc-badge-${shape}`,
    size && `modus-wc-badge-${size}`,
    variant === 'outlined' && 'modus-wc-badge-outlined',
    variant &&
      variant !== 'filled' &&
      variant !== 'outlined' &&
      `modus-wc-badge-${variant}`,
  ].filter(Boolean);

  return classes.join(' ');
};
