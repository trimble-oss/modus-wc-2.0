export const convertPropsToClasses = (props: {
  position?: 'center' | 'top' | 'bottom';
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'position') &&
    props.position
  ) {
    switch (props.position) {
      case 'top':
        classes = `${classes} modus-wc-modal-top`;
        break;
      case 'bottom':
        classes = `${classes} modus-wc-modal-bottom`;
        break;
      case 'center':
        break; // center is default, no class needed
    }
  }
  return classes;
};
