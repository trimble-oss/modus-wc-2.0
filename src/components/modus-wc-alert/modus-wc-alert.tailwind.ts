export const convertPropsToClasses = ({
  variant,
}: {
  variant?: 'error' | 'info' | 'neutral' | 'success' | 'warning';
}): string => {
  let classes = '';

  if (variant) {
    classes = `${classes} modus-wc-alert-${variant}`;
  }

  return classes.trim();
};
