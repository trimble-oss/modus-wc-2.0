import { Size } from '../../types';
import { LoadingVariant } from './modus-wc-loading';

export const convertPropsToClasses = (props: {
  size?: Size;
  variant?: LoadingVariant;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    classes = `${classes} modus-wc-loading-${props.variant}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-loading-${props.size}`;
  }

  return classes;
};
