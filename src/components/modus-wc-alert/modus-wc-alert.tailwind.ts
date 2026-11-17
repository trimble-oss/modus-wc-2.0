export const convertPropsToClasses = ({
  variant,
}: {
  variant?: 'error' | 'info' | 'neutral' | 'success' | 'warning';
}): string => {
  let classes = '';

  if (variant === 'neutral') {
    classes = `${classes} modus-wc-alert-neutral`;
  } else if (variant) {
    classes = `${classes} moduswc:alert-${variant} modus-wc-alert-${variant}`;
  }

  return classes.trim();
};
