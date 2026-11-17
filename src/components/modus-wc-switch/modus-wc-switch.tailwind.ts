import { ModusSize } from '../types';

export const convertPropsToClasses = (props: {
  size?: ModusSize | 'xs';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} moduswc:toggle-${props.size} modus-wc-toggle-${props.size}`;
  }

  return classes;
};
