import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  active,
  bordered,
  disabled,
  focused,
  size,
}: {
  active?: boolean;
  bordered?: boolean;
  disabled?: boolean;
  focused?: boolean;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-menu-item-bordered`;
  }

  if (disabled) {
    classes = `${classes} modus-wc-menu-item-disabled`;
  }

  if (active) {
    classes = `${classes} modus-wc-menu-item-active`;
  }

  if (focused) {
    classes = `${classes} modus-wc-menu-item-focused`;
  }

  if (size) {
    classes = `${classes} modus-wc-menu-item-${size}`;
  }

  return classes.trim();
};
