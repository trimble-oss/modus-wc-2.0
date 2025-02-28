export const convertPropsToClasses = (props: {
  forceOpen?: boolean;
  position?: 'auto' | 'top' | 'right' | 'bottom' | 'left';
  disabled?: boolean;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'forceOpen') &&
    !!props.forceOpen
  ) {
    classes = `${classes} modus-wc-tooltip-open`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'position') &&
    props.position &&
    props.position !== 'auto'
  ) {
    classes = `${classes} modus-wc-tooltip-${props.position}`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'disabled') &&
    !!props.disabled
  ) {
    classes = `${classes} modus-wc-tooltip-disabled`;
  }

  return classes;
};
