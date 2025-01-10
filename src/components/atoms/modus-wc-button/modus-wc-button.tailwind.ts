import { DaisySize } from '../../types';

export const convertPropsToClasses = (props: {
  color?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  disabled?: boolean;
  fullWidth?: boolean;
  shape?: 'circle' | 'rectangle' | 'square';
  size?: DaisySize;
  variant?: 'borderless' | 'filled' | 'outlined';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    switch (props.color) {
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

  if (
    Object.prototype.hasOwnProperty.call(props, 'disabled') &&
    !!props.disabled
  ) {
    classes = `${classes} modus-wc-btn-disabled`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'fullWidth') &&
    !!props.fullWidth
  ) {
    classes = `${classes} modus-wc-btn-block`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'shape') && props.shape) {
    switch (props.shape) {
      case 'circle':
        classes = `${classes} modus-wc-btn-circle`;
        break;
      case 'square':
        classes = `${classes} modus-wc-btn-square`;
        break;
    }
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-btn-${props.size}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    switch (props.variant) {
      case 'outlined':
        classes = `${classes} modus-wc-btn-outline`;
        break;
      case 'borderless':
        classes = `${classes} modus-wc-btn-borderless`;
        break;
    }
  }

  return classes;
};
