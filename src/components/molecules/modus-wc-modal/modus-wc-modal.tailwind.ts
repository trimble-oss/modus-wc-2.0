export const convertPropsToClasses = (props: {
  bordered?: boolean;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    !!props.bordered
  ) {
    classes = `${classes} modus-wc-card-bordered`;
  }

  return classes;
};
