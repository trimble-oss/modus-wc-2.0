import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  shape,
  size,
}: {
  shape?: string;
  size?: DaisySize | 'xl';
}): string => {
  let classes = '';

  if (shape) {
    switch (shape) {
      case 'circle':
        classes = `${classes} moduswc:rounded-full modus-wc-rounded-full`;
        break;
      case 'square':
        classes = `${classes} moduswc:rounded-lg modus-wc-rounded-lg`;
        break;
    }
  }

  if (size) {
    switch (size) {
      case 'xs':
        classes = `${classes} moduswc:w-8 modus-wc-w-8`;
        break;
      case 'sm':
        classes = `${classes} moduswc:w-12 modus-wc-w-12`;
        break;
      case 'md':
        classes = `${classes} moduswc:w-16 modus-wc-w-16`;
        break;
      case 'lg':
        classes = `${classes} moduswc:w-20 modus-wc-w-20`;
        break;
      case 'xl':
        classes = `${classes} moduswc:w-24 modus-wc-w-24`;
        break;
    }
  }

  return classes.trim();
};
