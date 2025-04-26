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
    classes = `${classes} modus:chip--active`;
  }

  if (disabled) {
    classes = `${classes} modus:chip--disabled`;
  }

  if (hasError) {
    classes = `${classes} modus:chip--error`;
  }

  if (size) {
    classes = `${classes} modus:btn-${size}`;
  }

  if (variant) {
    switch (variant) {
      case 'outline':
        classes = `${classes} modus:chip--outline`;
        break;
    }
  }

  return classes.trim();
};
