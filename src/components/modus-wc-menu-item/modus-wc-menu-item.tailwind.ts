import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  bordered,
  checkbox,
  disabled,
  selected,
  focused,
  size,
}: {
  bordered?: boolean;
  checkbox?: boolean;
  disabled?: boolean;
  selected?: boolean;
  focused?: boolean;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-menu-item-bordered`;
  }

  if (checkbox) {
    classes = `${classes} modus-wc-menu-item-checkbox`;
  }

  if (disabled) {
    classes = `${classes} modus-wc-menu-item-disabled`;
  }

  if (selected) {
    classes = `${classes} modus-wc-menu-item-selected`;
  }

  if (focused) {
    classes = `${classes} modus-wc-menu-item-focused`;
  }

  if (size) {
    classes = `${classes} modus-wc-menu-item-${size}`;
  }

  return classes.trim();
};
