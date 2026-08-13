export const convertPropsToClasses = ({
  bordered,
  readOnly,
  size,
}: {
  bordered?: boolean;
  readOnly?: boolean;
  size?: string;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (readOnly) {
    classes = `${classes} modus-wc-number-input--readonly`;
  }

  if (size) {
    classes = `${classes} modus-wc-input-${size}`;
  }

  return classes.trim();
};
