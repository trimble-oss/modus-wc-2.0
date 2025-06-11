import { Orientation } from '../types';

export const convertPropsToClasses = ({
  disabled,
  orientation,
  spaced,
}: {
  disabled?: boolean;
  orientation?: Orientation;
  spaced?: boolean;
}): string => {
  let classes = '';

  if (orientation) {
    classes = `${classes} modus-wc-button-group--${orientation}`;
  }

  if (disabled) {
    classes = `${classes} modus-wc-button-group--disabled`;
  }

  if (spaced) {
    classes = `${classes} modus-wc-button-group--spaced`;
  }

  return classes.trim();
};
