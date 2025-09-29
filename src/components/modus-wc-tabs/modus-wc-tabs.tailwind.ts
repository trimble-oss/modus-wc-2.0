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
        classes = `${classes} modus-wc-tabs-boxed`;
        break;
      case 'bordered':
        classes = `${classes} modus-wc-tabs-bordered`;
        break;
      case 'lifted':
        classes = `${classes} modus-wc-tabs-lifted`;
        break;
      case 'none':
        break;
    }
  }

  if (size) {
    switch (size) {
      case 'xs':
        classes = `${classes} modus-wc-tabs-xs`;
        break;
      case 'sm':
        classes = `${classes} modus-wc-tabs-sm`;
        break;
      case 'md':
        classes = `${classes} modus-wc-tabs-md`;
        break;
      case 'lg':
        classes = `${classes} modus-wc-tabs-lg`;
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
    classes = `${classes} modus-wc-tab-active`;
  }

  if (disabled === true) {
    classes = `${classes} modus-wc-tab-disabled`;
  }

  return classes.trim();
};
