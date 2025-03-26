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

  if (orientation) {
    switch (orientation) {
      case 'horizontal':
        classes = `${classes} modus-wc-divider-horizontal`;
        break;
      case 'vertical':
        classes = `${classes} modus-wc-divider-vertical`;
        break;
    }
  }

  if (position) {
    switch (position) {
      case 'end':
        classes = `${classes} modus-wc-divider-start`;
        break;
      case 'start':
        classes = `${classes} modus-wc-divider-end`;
        break;
    }
  }

  if (responsive) {
    classes = `${classes} flex-grow place-items-center`;
  }

  return classes.trim();
};
