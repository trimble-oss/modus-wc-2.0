export const convertPropsToClasses = (props: {
  disabled?: boolean;
  forceOpen?: boolean;
  position?: 'auto' | 'top' | 'right' | 'bottom' | 'left';
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'disabled') &&
    !!props.disabled
  ) {
    classes = `${classes} modus:tooltip-disabled`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'forceOpen') &&
    !!props.forceOpen
  ) {
    classes = `${classes} modus:tooltip-open`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'position') &&
    props.position &&
    props.position !== 'auto'
  ) {
    classes = `${classes} modus:tooltip-${props.position}`;
  }

  return classes;
};
