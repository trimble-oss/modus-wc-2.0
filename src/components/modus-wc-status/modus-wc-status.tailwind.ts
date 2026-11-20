import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  pulse,
  size,
  variant,
}: {
  pulse?: boolean;
  size?: ModusSize | 'xs' | 'xl';
  variant?: 'active' | 'warning' | 'danger' | 'info' | 'inactive';
}): string => {
  let classes = '';

  if (variant) {
    classes = `${classes} modus-wc-status--${variant}`;
  }

  if (size) {
    classes = `${classes} modus-wc-status--${size}`;
  }

  if (pulse === false) {
    classes = `${classes} modus-wc-status--no-pulse`;
  }

  return classes.trim();
};
