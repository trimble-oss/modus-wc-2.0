export const convertPropsToClasses = (props: {
  bordered?: boolean;
  fullWidth?: boolean;
  size?: string;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'fullWidth') &&
    !!props.fullWidth
  ) {
    classes = `${classes} modus-wc-w-full`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    !!props.bordered
  ) {
    classes = `${classes} modus-wc-textarea-bordered`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-textarea-${props.size}`;
  }

  return classes;
};
