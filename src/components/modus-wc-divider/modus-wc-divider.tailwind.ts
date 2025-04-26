export const convertPropsToClasses = ({
  color,
  orientation,
  position,
  responsive,
}: {
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

  if (color) {
    switch (color) {
      case 'primary':
        classes = `${classes} modus:divider-primary`;
        break;
      case 'secondary':
        classes = `${classes} modus:divider-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} modus:divider-neutral`;
        break;
      case 'high-contrast':
        classes = `${classes} modus:divider-accent`;
        break;
      case 'success':
        classes = `${classes} modus:divider-success`;
        break;
      case 'warning':
        classes = `${classes} modus:divider-warning`;
        break;
      case 'danger':
        classes = `${classes} modus:divider-error`;
        break;
    }
  }

  if (orientation) {
    switch (orientation) {
      case 'horizontal':
        classes = `${classes} modus:divider-horizontal`;
        break;
      case 'vertical':
        classes = `${classes} modus:divider-vertical`;
        break;
    }
  }

  if (position) {
    switch (position) {
      case 'end':
        classes = `${classes} modus:divider-start`;
        break;
      case 'start':
        classes = `${classes} modus:divider-end`;
        break;
    }
  }

  if (responsive) {
    classes = `${classes} modus:flex-grow modus:place-items-center`;
  }

  return classes.trim();
};
