import { ModusSize, Orientation } from '../../types';

export const convertPropsToClasses = (props: {
  bordered?: boolean;
  orientation?: Orientation;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    !!props.bordered
  ) {
    classes = `${classes} modus-wc-border-solid modus-wc-border-2 modus-wc-rounded`;
  }

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
