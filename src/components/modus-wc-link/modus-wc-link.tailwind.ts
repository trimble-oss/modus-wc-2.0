export const convertPropsToClasses = ({
  color,
  underline,
}: {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inherit'
    | 'warning'
    | 'danger';
  underline?: 'always' | 'hover' | 'none';
}): string => {
  let classes = '';

  if (color) {
    classes = `${classes} modus-wc-link-color-${color}`;
  }

  if (underline) {
    switch (underline) {
      case 'hover':
        classes = `${classes} modus-wc-link-hover`;
        break;
      case 'none':
        classes = `${classes} modus-wc-no-underline`;
        break;
      case 'always':
        break;
    }
  }

  return classes.trim();
};
