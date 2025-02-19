import { ModusSize } from '../../types';

export const convertPropsToClasses = (props: {
  bordered?: boolean;
  disabled?: boolean;
  selected?: boolean;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    !!props.bordered
  ) {
    classes = `${classes} modus-wc-menu-item-bordered`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'selected') &&
    !!props.disabled
  ) {
    classes = `${classes} modus-wc-menu-item-disabled`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'selected') &&
    !!props.selected
  ) {
    classes = `${classes} modus-wc-menu-item-selected`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-menu-item-${props.size}`;
  }

  return classes;
};
