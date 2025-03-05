export const convertPropsToClasses = (props: {
  variant?: 'error' | 'info' | 'success' | 'warning';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    classes = `${classes} modus-wc-alert-${props.variant}`;
  }

  return classes;
};
