import { DaisySize } from '../../types';

export const convertPropsToClasses = (props: {
  tabStyle?: 'boxed' | 'bordered' | 'lifted' | 'none';
  size?: DaisySize;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'tabStyle') &&
    props.tabStyle
  ) {
    switch (props.tabStyle) {
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

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    switch (props.size) {
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

  return classes;
};

export const convertPropsToClassesTab = (props: {
  active?: boolean;
  disabled?: boolean;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'active') && !!props.active) {
    classes = `${classes} modus-wc-tab-active`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'disabled') &&
    !!props.disabled
  ) {
    classes = `${classes} modus-wc-tab-disabled`;
  }

  return classes;
};
