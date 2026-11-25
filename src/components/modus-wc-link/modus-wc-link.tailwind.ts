export const convertPropsToClasses = ({
  color,
  underline,
}: {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inherit'
    | 'success'
    | 'info'
    | 'warning'
    | 'danger';
  underline?: 'always' | 'hover' | 'none';
}): string => {
  let classes = '';

  if (color) {
    const daisyColor =
      color === 'danger'
        ? 'error'
        : color === 'tertiary'
          ? 'neutral'
          : color === 'inherit'
            ? undefined
            : color;
    classes = `${classes} modus-wc-link-color-${color}`;
    if (daisyColor) {
      classes = `${classes} moduswc:link-${daisyColor}`;
    }
  }

  if (underline) {
    switch (underline) {
      case 'hover':
        classes = `${classes} moduswc:link-hover modus-wc-link-hover`;
        break;
      case 'none':
        classes = `${classes} moduswc:no-underline modus-wc-no-underline`;
        break;
      case 'always':
        break;
    }
  }

  return classes.trim();
};
