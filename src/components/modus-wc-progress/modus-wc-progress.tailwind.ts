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
        classes = `${classes} moduswc:progress modus-wc-progress moduswc:w-full modus-wc-w-full`;
        break;
      case 'radial':
        classes = `${classes} moduswc:radial-progress modus-wc-radial-progress`;
        break;
    }
  }

  if (indeterminate && variant === 'radial') {
    classes = `${classes} modus-wc-radial-progress--indeterminate`;
  }

  return classes.trim();
};
