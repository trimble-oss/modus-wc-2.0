import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  bordered,
  expanded,
}: {
  bordered?: boolean;
  expanded?: boolean;
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus:border`;
  }

  if (expanded) {
    classes = `${classes} modus:collapse-open`;
  } else {
    classes = `${classes} modus:collapse-close`;
  }

  return classes.trim();
};

export const convertPropsToDescriptionDivClasses = ({
  size,
}: {
  size?: DaisySize;
}): string => {
  let sizeClass = 'modus:text-base';

  if (size) {
    sizeClass = `modus:text-${size}`;
  }

  return sizeClass;
};

export const convertPropsToTitleChildDivClasses = ({
  size,
}: {
  size?: DaisySize;
}): string => {
  let classes = '';

  if (size) {
    switch (size) {
      case 'xs':
        classes = 'modus:text-base';
        break;
      case 'sm':
        classes = 'modus:text-lg';
        break;
      case 'md':
        classes = 'modus:text-xl';
        break;
      case 'lg':
        classes = 'modus:text-2xl';
        break;
    }
  }

  return classes;
};

export const convertPropsToTitleDivClasses = ({
  size,
}: {
  size?: DaisySize;
}): string => {
  let classes = '';

  if (size) {
    switch (size) {
      case 'xs':
        classes = 'modus:pb-2 modus:pl-2 modus:pt-2';
        break;
      case 'sm':
        classes = 'modus:pb-3 modus:pl-3 modus:pt-3';
        break;
      case 'md':
        classes = 'modus:pb-4 modus:pl-4 modus:pt-4';
        break;
      case 'lg':
        classes = 'modus:pb-5 modus:pl-5 modus:pt-5';
        break;
    }
  }

  return classes;
};
