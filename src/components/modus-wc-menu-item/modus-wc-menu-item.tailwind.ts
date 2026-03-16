import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  bordered,
  checked,
  disabled,
  selected,
  focused,
  size,
}: {
  bordered?: boolean;
  checked?: boolean;
  disabled?: boolean;
  selected?: boolean;
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

  if (selected) {
    classes = `${classes} modus-wc-menu-item-selected`;
  }

  if (checked) {
    classes = `${classes} modus-wc-menu-item-checked`;
  }

  if (focused) {
    classes = `${classes} modus-wc-menu-item-focused`;
  }

  if (size) {
    classes = `${classes} modus-wc-menu-item-${size}`;
  }

  return classes.trim();
};
