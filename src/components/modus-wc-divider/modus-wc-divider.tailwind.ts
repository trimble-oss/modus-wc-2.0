export const convertPropsToClasses = (props: {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  orientation?: 'horizontal' | 'vertical';
  position?: 'center' | 'end' | 'start';
  responsive?: boolean;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    switch (props.color) {
      case 'primary':
        classes = `${classes} modus-wc-divider-primary`;
        break;
      case 'secondary':
        classes = `${classes} modus-wc-divider-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} modus-wc-divider-neutral`;
        break;
      case 'high-contrast':
        classes = `${classes} modus-wc-divider-accent`;
        break;
      case 'success':
        classes = `${classes} modus-wc-divider-success`;
        break;
      case 'warning':
        classes = `${classes} modus-wc-divider-warning`;
        break;
      case 'danger':
        classes = `${classes} modus-wc-divider-error`;
        break;
    }
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'orientation') &&
    props.orientation
  ) {
    switch (props.orientation) {
      case 'horizontal':
        classes = `${classes} modus-wc-divider-horizontal`;
        break;
      case 'vertical':
        classes = `${classes} modus-wc-divider-vertical`;
        break;
    }
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'position') &&
    props.position
  ) {
    switch (props.position) {
      case 'end':
        classes = `${classes} modus-wc-divider-start`;
        break;
      case 'start':
        classes = `${classes} modus-wc-divider-end`;
        break;
    }
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'responsive') &&
    !!props.responsive
  ) {
    classes = `${classes} flex-grow place-items-center`;
  }

  return classes;
};
