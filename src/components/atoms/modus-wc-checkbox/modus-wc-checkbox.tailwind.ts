import { Size } from '../../types';

export const convertPropsToClasses = (props: { size?: Size }): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-checkbox-${props.size}`;
  }

  return classes;
};
