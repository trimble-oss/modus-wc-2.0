import { Size } from '../../types';

export const convertPropsToClasses = (props: {
  bordered?: boolean;
  size?: Size;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    !!props.bordered
  ) {
    classes = `${classes} modus-wc-textarea-bordered`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-textarea-${props.size}`;
  }

  return classes;
};
