import { DaisySize } from '../../types';

export const convertPropsToClasses = (props: {
  bordered?: boolean;
  expanded?: boolean;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    !!props.bordered
  ) {
    classes = `${classes} modus-wc-border`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'expanded') &&
    !!props.expanded
  ) {
    classes = `${classes} modus-wc-collapse-open`;
  } else {
    classes = `${classes} modus-wc-collapse-close`;
  }

  return classes;
};

export const convertCollapseSizeToDescriptionSizeClass = (props: {
  size?: DaisySize;
}): string => {
  let sizeClass = 'modus-wc-text-base';

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    sizeClass = `modus-wc-text-${props.size}`;
  }

  return sizeClass;
};

export const convertCollapseSizeToTitleSizeClass = (props: {
  size?: DaisySize;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    switch (props.size) {
      case 'xs':
        classes = 'modus-wc-text-base';
        break;
      case 'sm':
        classes = 'modus-wc-text-lg';
        break;
      case 'md':
        classes = 'modus-wc-text-xl';
        break;
      case 'lg':
        classes = 'modus-wc-text-2xl';
        break;
    }
  }
  return classes;
};
