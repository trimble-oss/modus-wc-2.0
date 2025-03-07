import { DaisySize } from '../types';

export const convertPropsToClasses = (props: {
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

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    switch (props.color) {
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

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-badge-${props.size}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    switch (props.variant) {
      case 'counter':
        classes = `${classes} modus-wc-badge-counter`;
        break;
      case 'text':
        classes = `${classes} modus-wc-badge-text`;
        break;
    }
  }

  return classes;
};
