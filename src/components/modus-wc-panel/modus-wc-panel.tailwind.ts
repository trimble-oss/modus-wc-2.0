export const convertPropsToClasses = ({
  floating,
}: {
  floating?: boolean;
}): string => {
  let classes = '';

  if (floating) {
    classes = `${classes} modus-wc-panel-floating`;
  }

  return classes.trim();
};
