import { DaisySize } from '../../types';

export const convertPropsToClasses = (props: {
  size?: DaisySize;
  underlineLinks?: boolean;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-text-${props.size}`;
  }

  return classes;
};
