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

export const convertCollapseSizeToTitleCollapsePadding = (props: {
  size?: DaisySize;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    switch (props.size) {
      case 'xs':
        classes = 'modus-wc-pb-2 modus-wc-pl-2 modus-wc-pt-2'; // .5rem
        break;
      case 'sm':
        classes = 'modus-wc-pb-3 modus-wc-pl-3 modus-wc-pt-3'; // .75rem
        break;
      case 'md':
        classes = 'modus-wc-pb-4 modus-wc-pl-4 modus-wc-pt-4'; // 1rem
        break;
      case 'lg':
        classes = 'modus-wc-pb-5 modus-wc-pl-5 modus-wc-pt-5'; // 1.25rem
        break;
    }
  }
  return classes;
};
