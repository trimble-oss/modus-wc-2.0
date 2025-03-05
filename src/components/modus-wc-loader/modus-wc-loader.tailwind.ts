import { LoaderColor, LoaderVariant } from './modus-wc-loader';
import { DaisySize } from '../types';

export const convertPropsToClasses = (props: {
  color?: LoaderColor;
  size?: DaisySize;
  variant?: LoaderVariant;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    classes = `${classes} modus-wc-text-${props.color}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-loader-${props.size}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    classes = `${classes} modus-wc-loader-${props.variant}`;
  }

  return classes;
};
