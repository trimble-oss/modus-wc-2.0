export const convertPropsToClasses = ({
  orientation,
  size,
  type,
  density,
}: {
  orientation?: 'horizontal' | 'vertical';
  size?: 'default' | 'lg' | 'xl' | '2xl';
  type?: 'bar' | 'button';
  density?: 'compact' | 'comfortable' | 'relaxed';
}): string => {
  let classes = '';

  if (orientation) {
    switch (orientation) {
      case 'horizontal':
        classes = `${classes} modus-wc-handle-vertical`;
        break;
      case 'vertical':
        classes = `${classes} modus-wc-handle-horizontal`;
        break;
    }
  }

  if (size) {
    switch (size) {
      case 'default':
        classes = `${classes} modus-wc-handle-default`;
        break;
      case 'lg':
        classes = `${classes} modus-wc-handle-lg`;
        break;
      case 'xl':
        classes = `${classes} modus-wc-handle-xl`;
        break;
      case '2xl':
        classes = `${classes} modus-wc-handle-2xl`;
        break;
    }
  }

  if (type) {
    switch (type) {
      case 'bar':
        classes = `${classes} modus-wc-handle-type-bar`;
        break;
      case 'button':
        classes = `${classes} modus-wc-handle-type-button`;
        break;
    }
  }

  if (density) {
    switch (density) {
      case 'compact':
        classes = `${classes} modus-wc-handle-compact`;
        break;
      case 'comfortable':
        classes = `${classes} modus-wc-handle-comfortable`;
        break;
      case 'relaxed':
        classes = `${classes} modus-wc-handle-relaxed`;
        break;
    }
  }

  return classes.trim();
};
