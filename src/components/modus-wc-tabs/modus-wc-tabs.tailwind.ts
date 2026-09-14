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
        classes = `${classes} moduswc:tabs-box`;
        break;
      case 'bordered':
        classes = `${classes} moduswc:tabs-border`;
        break;
      case 'lifted':
        classes = `${classes} moduswc:tabs-lift`;
        break;
      case 'none':
        break;
    }
  }

  if (size) {
    switch (size) {
      case 'xs':
        classes = `${classes} moduswc:tabs-xs`;
        break;
      case 'sm':
        classes = `${classes} moduswc:tabs-sm`;
        break;
      case 'md':
        classes = `${classes} moduswc:tabs-md`;
        break;
      case 'lg':
        classes = `${classes} moduswc:tabs-lg`;
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
    classes = `${classes} moduswc:tab-active`;
  }

  if (disabled) {
    classes = `${classes} moduswc:tab-disabled`;
  }

  return classes.trim();
};
