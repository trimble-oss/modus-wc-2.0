export const convertPropsToClasses = (props: {
  shape?: 'circle' | 'rectangle';
  fullWidth?: boolean;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'shape') &&
    props.shape == 'circle'
  ) {
    classes = `${classes} modus-wc-rounded-full`;
  }
  if (
    Object.prototype.hasOwnProperty.call(props, 'fullWidth') &&
    !!props.fullWidth
  ) {
    classes = `${classes} modus-wc-w-full`;
  }

  return classes;
};
