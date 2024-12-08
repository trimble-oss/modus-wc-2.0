import { DaisySize } from '../../types';

export const convertPropsToClasses = (props: {
  shape?: string;
  size?: DaisySize;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'shape') && props.shape) {
    switch (props.shape) {
      case 'circle':
        classes = `${classes} modus-wc-rounded-full`;
        break;
      case 'square':
        classes = `${classes} modus-wc-rounded-lg`;
        break;
    }
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    switch (props.size) {
      case 'xs':
        classes = `${classes} modus-wc-w-8`;
        break;
      case 'sm':
        classes = `${classes} modus-wc-w-12`;
        break;
      case 'md':
        classes = `${classes} modus-wc-w-16`;
        break;
      case 'lg':
        classes = `${classes} modus-wc-w-20`;
        break;
    }
  }

  return classes;
};
