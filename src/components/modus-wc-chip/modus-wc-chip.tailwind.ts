import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  active,
  disabled,
  hasError,
  shape,
  size,
  variant,
}: {
  active?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  shape?: 'rounded' | 'circular';
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

  if (shape === 'circular') {
    classes = `${classes} modus-wc-chip--circular`;
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
