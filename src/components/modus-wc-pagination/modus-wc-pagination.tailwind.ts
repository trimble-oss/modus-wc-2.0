import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  size,
}: {
  size?: ModusSize | 'xs' | 'xl';
}): string => {
  let classes = '';

  if (size) {
    classes = `${classes} moduswc:btn-${size} modus-wc-btn-${size}`;
  }

  return classes.trim();
};
