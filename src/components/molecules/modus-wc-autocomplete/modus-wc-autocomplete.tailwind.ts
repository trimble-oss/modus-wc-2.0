import { InputSize } from '../../types';

export const convertPropsToClasses = (props: { size?: InputSize }): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-autocomplete--${props.size}`;
  }

  return classes;
};
