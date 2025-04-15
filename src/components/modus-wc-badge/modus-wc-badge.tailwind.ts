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

  if (size) {
    classes = `${classes} modus-wc-badge-${size}`;
  }

  if (variant) {
    switch (variant) {
      case 'counter':
        classes = `${classes} modus-wc-badge-counter`;
        break;
      case 'text':
        classes = `${classes} modus-wc-badge-text`;
        break;
    }
  }

  return classes.trim();
};
