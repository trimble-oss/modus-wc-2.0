export const convertPropsToClasses = (props: {
  size?: 'sm' | 'md' | 'lg';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-radio-${props.size}`;
  }

  return classes;
};
