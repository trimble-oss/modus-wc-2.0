export const convertPropsToClasses = ({
  variant,
}: {
  variant?: 'default' | 'error' | 'info' | 'success' | 'warning';
}): string => {
  let classes = '';

  if (variant) {
    classes = `${classes} modus-wc-alert-${variant}`;
  }

  return classes.trim();
};
