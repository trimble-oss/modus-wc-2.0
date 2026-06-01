export const convertPropsToClasses = ({
  interactive,
  orientation,
}: {
  interactive?: boolean;
  orientation?: 'horizontal' | 'vertical';
}): string => {
  let classes = '';

  if (interactive) {
    classes = `${classes} modus-wc-stepper-interactive`;
  }

  if (orientation) {
    switch (orientation) {
      case 'horizontal':
        break; // Default
      case 'vertical':
        classes = `${classes} modus-wc-steps-vertical`;
        break;
    }
  }

  return classes.trim();
};
