import { ModusSize } from '../types';

export const convertPropsToClasses = ({
  bordered,
  disabled,
  selected,
  focused,
  size,
}: {
  bordered?: boolean;
  disabled?: boolean;
  selected?: boolean;
  focused?: boolean;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus:menu-item-bordered`;
  }

  if (disabled) {
    classes = `${classes} modus:menu-item-disabled`;
  }

  if (selected) {
    classes = `${classes} modus:menu-item-selected`;
  }

  if (focused) {
    classes = `${classes} modus:menu-item-focused`;
  }

  if (size) {
    classes = `${classes} modus:menu-item-${size}`;
  }

  return classes.trim();
};
