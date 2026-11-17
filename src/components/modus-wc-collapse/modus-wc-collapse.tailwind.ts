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
    classes = `${classes} moduswc:border modus-wc-border`;
  }

  if (expanded) {
    classes = `${classes} moduswc:collapse-open modus-wc-collapse-open`;
  } else {
    classes = `${classes} moduswc:collapse-close modus-wc-collapse-close`;
  }

  return classes.trim();
};

export const convertPropsToDescriptionDivClasses = ({
  size,
}: {
  size?: DaisySize;
}): string => {
  let sizeClass = 'moduswc:text-base modus-wc-text-base';

  if (size) {
    sizeClass = `moduswc:text-${size} modus-wc-text-${size}`;
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
        classes = 'moduswc:text-base modus-wc-text-base';
        break;
      case 'sm':
        classes = 'moduswc:text-lg modus-wc-text-lg';
        break;
      case 'md':
        classes = 'moduswc:text-xl modus-wc-text-xl';
        break;
      case 'lg':
        classes = 'moduswc:text-2xl modus-wc-text-2xl';
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
        classes =
          'moduswc:pb-2 moduswc:pl-2 moduswc:pt-2 modus-wc-pb-2 modus-wc-pl-2 modus-wc-pt-2';
        break;
      case 'sm':
        classes =
          'moduswc:pb-3 moduswc:pl-3 moduswc:pt-3 modus-wc-pb-3 modus-wc-pl-3 modus-wc-pt-3';
        break;
      case 'md':
        classes =
          'moduswc:pb-4 moduswc:pl-4 moduswc:pt-4 modus-wc-pb-4 modus-wc-pl-4 modus-wc-pt-4';
        break;
      case 'lg':
        classes =
          'moduswc:pb-5 moduswc:pl-5 moduswc:pt-5 modus-wc-pb-5 modus-wc-pl-5 modus-wc-pt-5';
        break;
    }
  }

  return classes;
};
