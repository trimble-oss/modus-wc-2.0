export const convertPropsToClasses = ({
  shape,
}: {
  shape?: 'circle' | 'rectangle';
}): string => {
  let classes = '';

  if (shape === 'circle') {
    classes = `${classes} moduswc:rounded-full modus-wc-rounded-full`;
  }

  return classes.trim();
};
