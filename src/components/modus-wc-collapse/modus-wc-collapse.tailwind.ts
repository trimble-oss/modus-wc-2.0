import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  expanded,
  variant,
}: {
  expanded?: boolean;
  variant?: 'ghost' | 'border';
}): string => {
  let classes = '';
  const hasBorder = (variant ?? 'border') === 'border';

  if (hasBorder) {
    classes = `${classes} modus-wc-border`;
  }

  if (expanded) {
    classes = `${classes} modus-wc-collapse-open`;
  } else {
    classes = `${classes} modus-wc-collapse-close`;
  }

  return classes.trim();
};

export const convertPropsToDescriptionDivClasses = ({
  size,
}: {
  size?: DaisySize;
}): string => {
  let sizeClass = 'modus-wc-text-base';

  if (size) {
    sizeClass = `modus-wc-text-${size}`;
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

export const convertPropsToTitleDivClasses = ({
  size,
}: {
  size?: DaisySize;
}): string => {
  let classes = '';

  if (size) {
    switch (size) {
      case 'xs':
        classes = 'modus-wc-pb-2 modus-wc-pl-2 modus-wc-pt-2';
        break;
      case 'sm':
        classes = 'modus-wc-pb-3 modus-wc-pl-3 modus-wc-pt-3';
        break;
      case 'md':
        classes = 'modus-wc-pb-4 modus-wc-pl-4 modus-wc-pt-4';
        break;
      case 'lg':
        classes = 'modus-wc-pb-5 modus-wc-pl-5 modus-wc-pt-5';
        break;
    }
  }

  return classes;
};
