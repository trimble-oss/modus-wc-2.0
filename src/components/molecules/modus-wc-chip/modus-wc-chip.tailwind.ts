import { DaisyColor, DaisySize } from '../../types';

export const convertPropsToClasses = (props: {
  active?: boolean;
  color?: DaisyColor;
  disabled?: boolean;
  hasError?: boolean;
  size?: DaisySize;
  variant?: 'filled' | 'outline';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'active') && !!props.active) {
    classes = `${classes} modus-wc-badge--active`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    classes = `${classes} modus-wc-badge-${props.color}`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'disabled') &&
    !!props.disabled
  ) {
    classes = `${classes} modus-wc-badge--disabled`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'hasError') &&
    !!props.hasError
  ) {
    classes = `${classes} modus-wc-badge--error`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-badge-${props.size}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    switch (props.variant) {
      case 'outline':
        classes = `${classes} modus-wc-badge-outline`;
        break;
    }
  }

  return classes;
};
