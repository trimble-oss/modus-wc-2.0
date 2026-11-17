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

const BADGE_DAISY_COLOR: Partial<Record<BadgeColor, string>> = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'neutral',
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
  const daisyColor = color ? BADGE_DAISY_COLOR[color] : undefined;
  const classes = [
    colorSuffix && `modus-wc-badge-${colorSuffix}`,
    daisyColor && `moduswc:badge-${daisyColor}`,
    shape && variant !== 'text' && `modus-wc-badge-${shape}`,
    size && `moduswc:badge-${size} modus-wc-badge-${size}`,
    variant === 'outlined' && 'moduswc:badge-outline modus-wc-badge-outlined',
    variant &&
      variant !== 'filled' &&
      variant !== 'outlined' &&
      `modus-wc-badge-${variant}`,
  ].filter(Boolean);

  return classes.join(' ');
};
