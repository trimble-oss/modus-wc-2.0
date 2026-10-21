import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  color,
  shape,
  size,
  variant,
}: {
  color?:
    | 'default'
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  shape?: 'ellipse' | 'rectangle';
  size?: DaisySize;
  variant?: 'counter' | 'filled' | 'outlined' | 'text';
}): string => {
  let classes = '';

  if (color) {
    switch (color) {
      case 'default':
        classes = `${classes} modus-wc-badge-default`;
        break;
      case 'primary':
        classes = `${classes} modus-wc-badge-primary`;
        break;
      case 'secondary':
        classes = `${classes} modus-wc-badge-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} modus-wc-badge-neutral`;
        break;
      case 'high-contrast':
        classes = `${classes} modus-wc-badge-high-contrast`;
        break;
      case 'success':
        classes = `${classes} modus-wc-badge-success`;
        break;
      case 'warning':
        classes = `${classes} modus-wc-badge-warning`;
        break;
      case 'danger':
        classes = `${classes} modus-wc-badge-error`;
        break;
    }
  }

  if (shape) {
    switch (shape) {
      case 'ellipse':
        classes = `${classes} modus-wc-badge-ellipse`;
        break;
      case 'rectangle':
        classes = `${classes} modus-wc-badge-rectangle`;
        break;
    }
  }

  if (size) {
    classes = `${classes} modus-wc-badge-${size}`;
  }

  if (variant) {
    switch (variant) {
      case 'counter':
        classes = `${classes} modus-wc-badge-counter`;
        break;
      case 'outlined':
        classes = `${classes} modus-wc-badge-outlined`;
        break;
      case 'text':
        classes = `${classes} modus-wc-badge-text`;
        break;
    }
  }

  return classes.trim();
};
