import { LoaderColor, LoaderVariant } from './modus-wc-loader';
import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  color,
  size,
  variant,
}: {
  color?: LoaderColor;
  size?: DaisySize;
  variant?: LoaderVariant;
}): string => {
  let classes = '';

  if (color) {
    classes = `${classes} modus-wc-text-${color}`;
  }

  if (size) {
    classes = `${classes} modus-wc-loader-${size}`;
  }

  if (variant) {
    classes = `${classes} modus-wc-loader-${variant}`;
  }

  return classes.trim();
};
