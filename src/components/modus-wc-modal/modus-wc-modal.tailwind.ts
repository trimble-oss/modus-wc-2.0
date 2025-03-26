export const convertPropsToClasses = ({
  position,
}: {
  position?: 'center' | 'top' | 'bottom';
}): string => {
  let classes = '';

  if (position) {
    switch (position) {
      case 'top':
        classes = `${classes} modus-wc-modal-top`;
        break;
      case 'bottom':
        classes = `${classes} modus-wc-modal-bottom`;
        break;
      case 'center':
        break; // center is default, no class needed
    }
  }

  return classes.trim();
};
