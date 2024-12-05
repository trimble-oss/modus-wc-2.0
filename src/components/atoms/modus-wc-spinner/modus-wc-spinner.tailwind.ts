import { Size } from '../../types';
import { SpinnerColor, SpinnerVariant } from './modus-wc-spinner';

export const convertPropsToClasses = (props: {
  color?: SpinnerColor;
  size?: Size;
  variant?: SpinnerVariant;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    classes = `${classes} modus-wc-spinner-${props.color}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-spinner-${props.size}`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'variant') &&
    props.variant &&
    props.variant !== 'spinner'
  ) {
    classes = `${classes} modus-wc-spinner-${props.variant}`;
  }

  return classes;
};
