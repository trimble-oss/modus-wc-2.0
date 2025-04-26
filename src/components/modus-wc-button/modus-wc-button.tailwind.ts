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
        classes = `${classes} modus:btn-primary`;
        break;
      case 'secondary':
        classes = `${classes} modus:btn-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} modus:btn-neutral`;
        break;
      case 'warning':
        classes = `${classes} modus:btn-warning`;
        break;
      case 'danger':
        classes = `${classes} modus:btn-error`;
        break;
    }
  }

  if (disabled) {
    classes = `${classes} modus:btn-disabled`;
  }

  if (fullWidth) {
    classes = `${classes} modus:btn-block`;
  }

  if (shape) {
    switch (shape) {
      case 'circle':
        classes = `${classes} modus:btn-circle`;
        break;
      case 'square':
        classes = `${classes} modus:btn-square`;
        break;
    }
  }

  if (size) {
    classes = `${classes} modus:btn-${size}`;
  }

  if (variant) {
    switch (variant) {
      case 'borderless':
        classes = `${classes} modus:btn-borderless`;
        break;
      case 'filled':
        classes = `${classes} modus:btn-filled`;
        break;
      case 'outlined':
        classes = `${classes} modus:btn-outline`;
        break;
    }
  }

  return classes.trim();
};
