import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  size,
}: {
  size?: DaisySize;
}): string => {
  let classes = '';

  if (size) {
    classes = `${classes} modus-wc-checkbox-${size}`;
  }

  return classes.trim();
};
