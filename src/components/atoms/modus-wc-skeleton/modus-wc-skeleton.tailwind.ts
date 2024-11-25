export const convertPropsToClasses = (props: {
  shape?: 'circle' | 'rectangle';
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'shape') &&
    props.shape == 'circle'
  ) {
    classes = `${classes} modus-wc-rounded-full`;
  }

  return classes;
};
