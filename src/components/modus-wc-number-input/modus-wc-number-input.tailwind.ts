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

  if (bordered === false) {
    classes = `${classes} moduswc:input-ghost`;
  } else {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (readOnly) {
    classes = `${classes} modus-wc-number-input--readonly`;
  }

  if (size) {
    classes = `${classes} moduswc:input-${size} modus-wc-input-${size}`;
  }

  return classes.trim();
};
