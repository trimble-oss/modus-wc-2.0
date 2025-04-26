export const convertPropsToClasses = ({
  orientation,
}: {
  orientation?: 'horizontal' | 'vertical';
}): string => {
  let classes = '';

  if (orientation) {
    switch (orientation) {
      case 'horizontal':
        break; // Default
      case 'vertical':
        classes = `${classes} modus:steps-vertical`;
        break;
    }
  }

  return classes.trim();
};
