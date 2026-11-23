export const convertPropsToClasses = ({
  position,
}: {
  position?: 'center' | 'top' | 'bottom';
}): string => {
  let classes = '';

  if (position) {
    switch (position) {
      case 'top':
        classes = `${classes} moduswc:modal-top modus-wc-modal-top`;
        break;
      case 'bottom':
        classes = `${classes} moduswc:modal-bottom modus-wc-modal-bottom`;
        break;
      case 'center':
        break; // center is default, no class needed
    }
  }

  return classes.trim();
};
