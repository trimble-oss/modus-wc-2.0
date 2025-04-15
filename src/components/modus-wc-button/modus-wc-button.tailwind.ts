import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  color,
  disabled,
  fullWidth,
  shape,
  size,
  variant,
}: {
  color?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  disabled?: boolean;
  fullWidth?: boolean;
  shape?: 'circle' | 'rectangle' | 'square';
  size?: DaisySize;
  variant?: 'borderless' | 'filled' | 'outlined';
}): string => {
  let classes = '';

  if (color) {
    switch (color) {
      case 'primary':
        classes = `${classes} modus-wc-btn-primary`;
        break;
      case 'secondary':
        classes = `${classes} modus-wc-btn-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} modus-wc-btn-neutral`;
        break;
      case 'warning':
        classes = `${classes} modus-wc-btn-warning`;
        break;
      case 'danger':
        classes = `${classes} modus-wc-btn-error`;
        break;
    }
  }

  if (disabled) {
    classes = `${classes} modus-wc-btn-disabled`;
  }

  if (fullWidth) {
    classes = `${classes} modus-wc-btn-block`;
  }

  if (shape) {
    switch (shape) {
      case 'circle':
        classes = `${classes} modus-wc-btn-circle`;
        break;
      case 'square':
        classes = `${classes} modus-wc-btn-square`;
        break;
    }
  }

  if (size) {
    classes = `${classes} modus-wc-btn-${size}`;
  }

  if (variant) {
    switch (variant) {
      case 'borderless':
        classes = `${classes} modus-wc-btn-borderless`;
        break;
      case 'filled':
        classes = `${classes} modus-wc-btn-filled`;
        break;
      case 'outlined':
        classes = `${classes} modus-wc-btn-outline`;
        break;
    }
  }

  return classes.trim();
};
