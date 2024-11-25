export const convertPropsToClasses = (props: {
  fullWidth?: boolean;
  height?: 'sm' | 'md' | 'lg';
  shape?: 'circle' | 'rectangle';
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'fullWidth') &&
    !!props.fullWidth
  ) {
    classes = `${classes} modus-wc-w-full`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'height') && props.height) {
    switch (props.height) {
      case 'sm':
        classes = `${classes} modus-wc-skeleton-height-sm`;
        break;
      case 'md':
        classes = `${classes} modus-wc-skeleton-height-md`;
        break;
      case 'lg':
        classes = `${classes} modus-wc-skeleton-height-lg`;
    }
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'shape') &&
    props.shape == 'circle'
  ) {
    classes = `${classes} modus-wc-rounded-full`;
  }

  return classes;
};
