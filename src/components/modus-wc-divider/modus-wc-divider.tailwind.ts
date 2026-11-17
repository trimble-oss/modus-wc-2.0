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
        classes = `${classes} moduswc:divider-primary modus-wc-divider-primary`;
        break;
      case 'secondary':
        classes = `${classes} moduswc:divider-secondary modus-wc-divider-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} moduswc:divider-neutral modus-wc-divider-neutral`;
        break;
      case 'high-contrast':
        classes = `${classes} moduswc:divider-accent modus-wc-divider-accent`;
        break;
      case 'success':
        classes = `${classes} moduswc:divider-success modus-wc-divider-success`;
        break;
      case 'warning':
        classes = `${classes} moduswc:divider-warning modus-wc-divider-warning`;
        break;
      case 'danger':
        classes = `${classes} moduswc:divider-error modus-wc-divider-error`;
        break;
    }
  }

  if (orientation) {
    switch (orientation) {
      case 'horizontal':
        classes = `${classes} moduswc:divider-horizontal modus-wc-divider-horizontal`;
        break;
      case 'vertical':
        classes = `${classes} moduswc:divider-vertical modus-wc-divider-vertical`;
        break;
    }
  }

  if (position) {
    switch (position) {
      case 'end':
        classes = `${classes} moduswc:divider-start modus-wc-divider-start`;
        break;
      case 'start':
        classes = `${classes} moduswc:divider-end modus-wc-divider-end`;
        break;
    }
  }

  if (responsive) {
    classes = `${classes} moduswc:grow moduswc:place-items-center`;
  }

  return classes.trim();
};
