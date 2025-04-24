import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  shape,
  size,
}: {
  shape?: string;
  size?: DaisySize;
}): string => {
  let classes = '';

  if (shape) {
    switch (shape) {
      case 'circle':
        classes = `${classes} modus:rounded-full`;
        break;
      case 'square':
        classes = `${classes} modus:rounded-lg`;
        break;
    }
  }

  if (size) {
    switch (size) {
      case 'xs':
        classes = `${classes} modus:w-8`;
        break;
      case 'sm':
        classes = `${classes} modus:w-12`;
        break;
      case 'md':
        classes = `${classes} modus:w-16`;
        break;
      case 'lg':
        classes = `${classes} modus:w-20`;
        break;
    }
  }

  return classes.trim();
};
