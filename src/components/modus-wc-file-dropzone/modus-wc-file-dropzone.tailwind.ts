export const convertPropsToClasses = ({
  disabled,
}: {
  disabled?: boolean;
}): string => {
  // Start with base DaisyUI class
  let classes = 'file-input';

  // Disabled state
  if (disabled) {
    classes = `${classes} file-input-disabled`;
  }

  return classes;
};
