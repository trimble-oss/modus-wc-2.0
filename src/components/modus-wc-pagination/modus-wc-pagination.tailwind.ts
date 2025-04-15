import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  size,
}: {
  size?: ModusSize;
}): string => {
  let classes = '';

  if (size) {
    classes = `${classes} modus-wc-btn-${size}`;
  }

  return classes.trim();
};
