import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  active,
  disabled,
  hasError,
  size,
  variant,
}: {
  active?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  size?: ModusSize;
  variant?: 'filled' | 'outline';
}): string => {
  let classes = '';

  if (active) {
    classes = `${classes} modus-wc-chip--active`;
  }

  if (disabled) {
    classes = `${classes} modus-wc-chip--disabled`;
  }

  if (hasError) {
    classes = `${classes} modus-wc-chip--error`;
  }

  if (size) {
    classes = `${classes} modus-wc-btn-${size}`;
  }

  if (variant) {
    switch (variant) {
      case 'outline':
        classes = `${classes} modus-wc-chip--outline`;
        break;
    }
  }

  return classes.trim();
};
