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
    classes = `${classes} modus-wc-select-bordered`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-select-${props.size}`;
  }

  return classes;
};
