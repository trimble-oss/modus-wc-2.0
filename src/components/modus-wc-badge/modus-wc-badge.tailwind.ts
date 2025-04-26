import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  color,
  size,
  variant,
}: {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  size?: DaisySize;
  variant?: 'counter' | 'filled' | 'text';
}): string => {
  let classes = '';

  if (color) {
    switch (color) {
      case 'primary':
        classes = `${classes} modus:badge-primary`;
        break;
      case 'secondary':
        classes = `${classes} modus:badge-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} modus:badge-neutral`;
        break;
      case 'high-contrast':
        classes = `${classes} modus:badge-high-contrast`;
        break;
      case 'success':
        classes = `${classes} modus:badge-success`;
        break;
      case 'warning':
        classes = `${classes} modus:badge-warning`;
        break;
      case 'danger':
        classes = `${classes} modus:badge-error`;
        break;
    }
  }

  if (size) {
    classes = `${classes} modus:badge-${size}`;
  }

  if (variant) {
    switch (variant) {
      case 'counter':
        classes = `${classes} modus:badge-counter`;
        break;
      case 'text':
        classes = `${classes} modus:badge-text`;
        break;
    }
  }

  return classes.trim();
};
