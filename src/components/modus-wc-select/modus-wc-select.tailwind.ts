import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  bordered,
  size,
}: {
  bordered?: boolean;
  size?: DaisySize;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-select-bordered`;
  }

  if (size) {
    classes = `${classes} modus-wc-select-${size}`;
  }

  return classes.trim();
};
