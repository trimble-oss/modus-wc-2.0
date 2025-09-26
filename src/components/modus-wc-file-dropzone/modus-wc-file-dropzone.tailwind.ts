export const convertPropsToClasses = ({
  disabled,
}: {
  multiple?: boolean; // kept for type consistency but not used in class generation
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
