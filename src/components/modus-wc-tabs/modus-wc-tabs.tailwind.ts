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
        classes = `${classes} moduswc:tabs-box modus-wc-tabs-boxed`;
        break;
      case 'bordered':
        classes = `${classes} moduswc:tabs-border modus-wc-tabs-bordered`;
        break;
      case 'lifted':
        classes = `${classes} moduswc:tabs-lift modus-wc-tabs-lifted`;
        break;
      case 'none':
        break;
    }
  }

  if (size) {
    switch (size) {
      case 'xs':
        classes = `${classes} moduswc:tabs-xs modus-wc-tabs-xs`;
        break;
      case 'sm':
        classes = `${classes} moduswc:tabs-sm modus-wc-tabs-sm`;
        break;
      case 'md':
        classes = `${classes} moduswc:tabs-md modus-wc-tabs-md`;
        break;
      case 'lg':
        classes = `${classes} moduswc:tabs-lg modus-wc-tabs-lg`;
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
    classes = `${classes} moduswc:tab-active modus-wc-tab-active`;
  }

  if (disabled) {
    classes = `${classes} moduswc:tab-disabled modus-wc-tab-disabled`;
  }

  return classes.trim();
};
