import { TypographyVariant, TypographyWeight } from './modus-wc-typography';
import { DaisySize } from '../types';

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const convertPropsToClasses = ({
  size,
  weight,
  variant,
}: {
  size?: DaisySize;
  weight?: TypographyWeight;
  variant?: TypographyVariant;
}): string => {
  let classes = '';

  // Heading styles are handled in modus-wc-typography.scss
  if (variant && HEADINGS.includes(variant)) {
    return classes;
  }

  if (size) {
    if (size === 'md') {
      classes = `${classes} modus:text-base`;
    } else {
      classes = `${classes} modus:text-${size}`;
    }
  }

  if (weight) {
    classes = `${classes} modus:typography-weight-${weight}`;
  }

  return classes.trim();
};
