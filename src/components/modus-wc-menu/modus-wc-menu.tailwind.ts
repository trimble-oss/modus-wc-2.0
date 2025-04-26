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
    classes = `${classes} modus:menu--bordered`;
  }

  if (orientation === 'horizontal') {
    classes = `${classes} modus:menu-horizontal`;
  }

  if (size) {
    classes = `${classes} modus:menu-${size}`;
  }

  return classes.trim();
};
