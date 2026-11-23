export const convertPropsToClasses = ({
  size,
}: {
  size?: 'sm' | 'md' | 'lg';
}): string => {
  let classes = '';

  if (size) {
    classes = `${classes} moduswc:radio-${size} modus-wc-radio-${size}`;
  }

  return classes.trim();
};
