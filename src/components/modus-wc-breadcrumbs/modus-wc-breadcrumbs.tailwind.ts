import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  size,
}: {
  size?: DaisySize;
}): string => {
  let classes = '';

  if (size) {
    classes = `${classes} moduswc:text-${size} modus-wc-text-${size}`;
  }

  return classes.trim();
};
