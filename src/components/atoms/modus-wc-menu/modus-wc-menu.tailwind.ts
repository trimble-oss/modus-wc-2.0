import { ModusSize, Orientation } from '../../types';

export const convertPropsToClasses = (props: {
  orientation?: Orientation;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'orientation') &&
    props.orientation &&
    props.orientation === 'horizontal'
  ) {
    classes = `${classes} modus-wc-menu-horizontal`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-menu-${props.size}`;
  }

  return classes;
};
