import { DaisySize } from '../types';

export const convertPropsToClasses = (props: {
  bordered?: boolean;
  readOnly?: boolean;
  size?: DaisySize;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    !!props.bordered
  ) {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'readOnly') &&
    !!props.readOnly
  ) {
    classes = `${classes} modus-wc-text-input-readonly`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-input-${props.size}`;
  }

  return classes;
};
