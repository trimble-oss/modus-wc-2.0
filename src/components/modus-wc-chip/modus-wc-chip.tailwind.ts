import { ModusSize } from '../types';

export const convertPropsToClasses = (props: {
  active?: boolean;
  disabled?: boolean;
  hasError?: boolean;
  size?: ModusSize;
  variant?: 'filled' | 'outline';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'active') && !!props.active) {
    classes = `${classes} modus-wc-chip--active`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'disabled') &&
    !!props.disabled
  ) {
    classes = `${classes} modus-wc-chip--disabled`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'hasError') &&
    !!props.hasError
  ) {
    classes = `${classes} modus-wc-chip--error`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-btn-${props.size}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    switch (props.variant) {
      case 'outline':
        classes = `${classes} modus-wc-chip--outline`;
        break;
    }
  }

  return classes;
};
