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
    classes = `${classes} modus:text-${color}`;
  }

  if (size) {
    classes = `${classes} modus:der-${size}`;
  }

  if (variant) {
    classes = `${classes} modus:loader-${variant}`;
  }

  return classes.trim();
};
