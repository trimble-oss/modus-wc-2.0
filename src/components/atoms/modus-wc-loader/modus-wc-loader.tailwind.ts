import { Size } from '../../types';
import { LoaderColor, LoaderVariant } from './modus-wc-loader';

export const convertPropsToClasses = (props: {
  color?: LoaderColor;
  size?: Size;
  variant?: LoaderVariant;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    classes = `${classes} modus-wc-text-${props.color}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-loading-${props.size}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    classes = `${classes} modus-wc-loader-${props.variant}`;
  }

  return classes;
};
