export const convertPropsToClasses = (props: {
  bordered?: boolean;
  expanded?: boolean;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    !!props.bordered
  ) {
    classes = `${classes} modus-wc-border`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'expanded') &&
    !!props.expanded
  ) {
    classes = `${classes} modus-wc-collapse-open`;
  } else {
    classes = `${classes} modus-wc-collapse-close`;
  }

  return classes;
};
