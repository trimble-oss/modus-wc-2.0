export const convertPropsToClasses = ({
  pulse,
  variant,
}: {
  pulse?: boolean;
  variant?: 'active' | 'warning' | 'danger';
}): string => {
  let classes = '';

  if (variant) {
    classes = `${classes} modus-wc-status--${variant}`;
  }

  if (pulse === false) {
    classes = `${classes} modus-wc-status--no-pulse`;
  }

  return classes.trim();
};
