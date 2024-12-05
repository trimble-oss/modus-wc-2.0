import { Size } from '../../types';
import { LoadingColor, LoadingVariant } from './modus-wc-loading';

export const convertPropsToClasses = (props: {
  color?: LoadingColor;
  size?: Size;
  variant?: LoadingVariant;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    classes = `${classes} modus-wc-loading-${props.color}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-loading-${props.size}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    classes = `${classes} modus-wc-loading-${props.variant}`;
  }

  return classes;
};
