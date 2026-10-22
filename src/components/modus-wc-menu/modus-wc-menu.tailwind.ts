import { ModusSize, Orientation } from '../types';

export const convertPropsToClasses = ({
  bordered,
  orientation,
  size,
}: {
  bordered?: boolean;
  orientation?: Orientation;
  size?: ModusSize;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-menu--bordered`;
  }

  if (orientation === 'horizontal') {
    classes = `${classes} modus-wc-menu-horizontal moduswc:menu-horizontal`;
  }

  if (size) {
    classes = `${classes} modus-wc-menu-${size} moduswc:menu-${size}`;
  }

  return classes.trim();
};
