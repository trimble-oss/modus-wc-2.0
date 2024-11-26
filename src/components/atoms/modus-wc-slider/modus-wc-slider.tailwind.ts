export const convertPropsToClasses = (props: {
  size?: 'xs' | 'sm' | 'md' | 'lg';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-range-${props.size}`;
  }

  return classes;
};
