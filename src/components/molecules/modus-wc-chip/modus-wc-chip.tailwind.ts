import { DaisyColor, DaisySize } from '../../types';

export const convertPropsToClasses = (props: {
  color?: DaisyColor;
  size?: DaisySize;
  variant?: 'default' | 'outline';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    classes = `${classes} modus-wc-badge-${props.color}`;
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
