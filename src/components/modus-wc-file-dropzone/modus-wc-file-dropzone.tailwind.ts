export const convertPropsToClasses = ({
  bordered,
  size,
  disabled,
}: {
  bordered?: boolean;
  multiple?: boolean; // kept for type consistency but not used in class generation
  size?: 'xs' | 'sm' | 'md' | 'lg';
  disabled?: boolean;
}): string => {
  // Start with base DaisyUI class
  let classes = 'file-input';

  // Bordered
  if (bordered) {
    classes = `${classes} modus-wc-file-input-bordered`;
  }

  // Size
  if (size) {
    switch (size) {
      case 'xs':
        classes = `${classes} modus-wc-file-input-xs`;
        break;
      case 'sm':
        classes = `${classes} modus-wc-file-input-sm`;
        break;
      case 'md':
        // Medium is the default size, no additional class needed
        break;
      case 'lg':
        classes = `${classes} modus-wc-file-input-lg`;
        break;
    }
  }

  // Disabled state
  if (disabled) {
    classes = `${classes} file-input-disabled`;
  }

  return classes;
};
