export const convertPropsToClasses = ({
  size,
}: {
  size?: 'sm' | 'md' | 'lg';
}): string => {
  let classes = '';

  if (size) {
    classes = `${classes} modus:radio-${size}`;
  }

  return classes.trim();
};
