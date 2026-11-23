export const convertPropsToClasses = ({
  disabled,
}: {
  disabled?: boolean;
}): string => {
  // Start with base DaisyUI class
  // Daisy 5 has no file-input-disabled; the disabled attribute styles the control.
  let classes = 'moduswc:file-input';

  if (disabled) {
    classes = `${classes} modus-wc-file-input-disabled`;
  }

  return classes;
};
