export const convertPropsToClasses = ({
  orientation,
}: {
  orientation?: 'horizontal' | 'vertical';
}): string => {
  let classes = '';

  if (orientation === 'vertical') {
    classes = `${classes} modus-wc-join-vertical`;
  }

  return classes.trim();
};
