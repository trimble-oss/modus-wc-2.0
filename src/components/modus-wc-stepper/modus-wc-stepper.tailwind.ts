export const convertPropsToClasses = (props: {
  orientation?: 'horizontal' | 'vertical';
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'orientation') &&
    props.orientation
  ) {
    switch (props.orientation) {
      case 'horizontal':
        break; // Default
      case 'vertical':
        classes = `${classes} modus-wc-steps-vertical`;
        break;
    }
  }

  return classes;
};
