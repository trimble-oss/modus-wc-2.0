import { DaisySize } from '../types';

export const convertPropsToClasses = ({
  tabStyle,
  size,
}: {
  tabStyle?: 'boxed' | 'bordered' | 'lifted' | 'none';
  size?: DaisySize;
}): string => {
  let classes = '';

  if (tabStyle) {
    switch (tabStyle) {
      case 'boxed':
        classes = `${classes} modus:tabs-boxed`;
        break;
      case 'bordered':
        classes = `${classes} modus:tabs-bordered`;
        break;
      case 'lifted':
        classes = `${classes} modus:tabs-lifted`;
        break;
      case 'none':
        break;
    }
  }

  if (size) {
    switch (size) {
      case 'xs':
        classes = `${classes} modus:tabs-xs`;
        break;
      case 'sm':
        classes = `${classes} modus:tabs-sm`;
        break;
      case 'md':
        classes = `${classes} modus:tabs-md`;
        break;
      case 'lg':
        classes = `${classes} modus:tabs-lg`;
        break;
    }
  }

  return classes.trim();
};

export const convertPropsToClassesTab = ({
  active,
  disabled,
}: {
  active?: boolean;
  disabled?: boolean;
}): string => {
  let classes = '';

  if (active) {
    classes = `${classes} modus:tab-active`;
  }

  if (disabled) {
    classes = `${classes} modus:tab-disabled`;
  }

  return classes.trim();
};
