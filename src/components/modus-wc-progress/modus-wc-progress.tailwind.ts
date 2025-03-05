export const convertPropsToClasses = (props: {
  variant?: 'default' | 'radial';
  indeterminate?: boolean;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    switch (props.variant) {
      case 'default':
        classes = `${classes} modus-wc-progress modus-wc-w-full`;
        break;
      case 'radial':
        classes = `${classes} modus-wc-radial-progress`;
        break;
    }
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'indeterminate') &&
    !!props.indeterminate
  ) {
    if (props.variant === 'radial') {
      classes = `${classes} modus-wc-radial-progress--indeterminate`;
    }
  }

  return classes;
};
