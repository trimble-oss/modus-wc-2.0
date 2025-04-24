import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  size,
}: {
  size?: DaisySize;
}): string => {
  let classes = '';

  if (size) {
    if (size === 'md') {
      classes = `${classes} modus:text-base`;
    } else {
      classes = `${classes} modus:text-${size}`;
    }
  }

  return classes.trim();
};
