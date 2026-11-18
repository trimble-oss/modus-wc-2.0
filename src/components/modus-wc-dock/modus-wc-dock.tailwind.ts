import { ModusSize } from '../types';

export type DockPosition = 'top' | 'bottom' | 'left' | 'right';

export const convertPropsToClasses = ({
  position,
  showLabels,
  size,
}: {
  position?: DockPosition;
  showLabels?: boolean;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (position) {
    classes = `${classes} modus-wc-dock-${position}`;
  }

  if (size) {
    classes = `${classes} modus-wc-dock-${size}`;
  }

  if (showLabels === false) {
    classes = `${classes} modus-wc-dock-icons-only`;
  }

  return classes.trim();
};

export const convertItemPropsToClasses = ({
  active,
  disabled,
}: {
  active?: boolean;
  disabled?: boolean;
}): string => {
  let classes = 'modus-wc-dock-item';

  if (active) {
    classes = `${classes} modus-wc-dock-item-active`;
  }

  if (disabled) {
    classes = `${classes} modus-wc-dock-item-disabled`;
  }

  return classes.trim();
};
