import { TypographySize, TypographyWeight } from '../types';

export const convertPropsToClasses = ({
  size,
  weight,
}: {
  size?: TypographySize;
  weight?: TypographyWeight;
}): string => {
  let classes = '';

  if (size) {
    classes = `${classes} moduswc:text-${size} modus-wc-text-${size}`;
  }

  if (weight) {
    classes = `${classes} modus-wc-typography-weight-${weight}`;
  }

  return classes.trim();
};
