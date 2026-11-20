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
    classes = `${classes} moduswc:text-${color} modus-wc-text-${color}`;
  }

  if (size) {
    classes = `${classes} moduswc:loading-${size} modus-wc-loader-${size}`;
  }

  if (variant) {
    classes = `${classes} moduswc:loading-${variant} modus-wc-loader-${variant}`;
  }

  return classes.trim();
};
