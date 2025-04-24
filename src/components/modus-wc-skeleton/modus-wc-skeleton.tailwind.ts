export const convertPropsToClasses = ({
  shape,
}: {
  shape?: 'circle' | 'rectangle';
}): string => {
  let classes = '';

  if (shape === 'circle') {
    classes = `${classes} modus:rounded-full`;
  }

  return classes.trim();
};
