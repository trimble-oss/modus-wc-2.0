export const convertPropsToClasses = ({
  variant,
  indeterminate,
}: {
  variant?: 'default' | 'radial';
  indeterminate?: boolean;
}): string => {
  let classes = '';

  if (variant) {
    switch (variant) {
      case 'default':
        classes = `${classes} modus-wc-progress modus:w-full`;
        break;
      case 'radial':
        classes = `${classes} modus-wc-radial-progress`;
        break;
    }
  }

  if (indeterminate && variant === 'radial') {
    classes = `${classes} modus-wc-radial-progress--indeterminate`;
  }

  return classes.trim();
};
