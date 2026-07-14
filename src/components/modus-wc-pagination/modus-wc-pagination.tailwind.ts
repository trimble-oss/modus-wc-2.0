import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  size,
}: {
  size?: ModusSize | 'xs' | 'xl';
}): string => {
  let classes = '';

  if (size) {
    classes = `${classes} modus-wc-btn-${size}`;
  }

  return classes.trim();
};
