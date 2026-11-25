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
        classes = `${classes} modus-wc-toast-top modus-wc-toast-start`;
        break;
      case 'top-center':
        classes = `${classes} modus-wc-toast-top modus-wc-toast-center`;
        break;
      case 'top-end':
        classes = `${classes} modus-wc-toast-top modus-wc-toast-end`;
        break;
      case 'middle-start':
        classes = `${classes} modus-wc-toast-middle modus-wc-toast-start`;
        break;
      case 'middle-center':
        classes = `${classes} modus-wc-toast-middle modus-wc-toast-center`;
        break;
      case 'middle-end':
        classes = `${classes} modus-wc-toast-middle modus-wc-toast-end`;
        break;
      case 'bottom-start':
        classes = `${classes} modus-wc-toast-bottom modus-wc-toast-start`;
        break;
      case 'bottom-center':
        classes = `${classes} modus-wc-toast-bottom modus-wc-toast-center`;
        break;
      case 'bottom-end':
        classes = `${classes} modus-wc-toast-bottom modus-wc-toast-end`;
        break;
    }
  }

  return classes.trim();
};