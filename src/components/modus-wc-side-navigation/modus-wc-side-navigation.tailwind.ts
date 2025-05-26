export const convertPropsToClasses = ({
  expanded,
}: {
  expanded?: boolean;
}): string => {
  let classes = '';

  if (expanded) {
    classes = `${classes} modus-wc-side-navigation-expanded`;
  }

  return classes.trim();
};
