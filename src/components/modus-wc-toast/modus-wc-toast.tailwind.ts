import { ToastPosition } from './modus-wc-toast';

export const convertPropsToClasses = ({
  position,
}: {
  position?: ToastPosition;
}): string => {
  let classes = '';

  if (position) {
    switch (position) {
      case 'top-start':
        classes = `${classes} modus:toast-top modus:toast-start`;
        break;
      case 'top-center':
        classes = `${classes} modus:toast-top modus:toast-center`;
        break;
      case 'top-end':
        classes = `${classes} modus:toast-top modus:toast-end`;
        break;
      case 'middle-start':
        classes = `${classes} modus:toast-start modus:toast-middle`;
        break;
      case 'middle-center':
        classes = `${classes} modus:toast-center modus:toast-middle`;
        break;
      case 'middle-end':
        classes = `${classes} modus:toast-end modus:toast-middle`;
        break;
      case 'bottom-start':
        classes = `${classes} modus:toast-start`;
        break;
      case 'bottom-center':
        classes = `${classes} modus:toast-center`;
        break;
      case 'bottom-end':
        classes = `${classes} modus:toast-end`;
        break;
    }
  }

  return classes.trim();
};
