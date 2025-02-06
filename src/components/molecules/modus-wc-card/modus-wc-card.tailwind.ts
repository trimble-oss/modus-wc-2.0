export const convertPropsToClasses = (props: {
  padding?: 'normal' | 'compact';
  layout?: 'stacked' | 'side';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'padding') && props.padding) {
    switch (props.padding) {
      case 'normal':
        classes = `${classes} modus-wc-card-normal`;
        break;
      case 'compact':
        classes = `${classes} modus-wc-card-compact`;
        break;
    }
  }

  if (Object.prototype.hasOwnProperty.call(props, 'layout') && props.layout) {
    switch (props.layout) {
      case 'side':
        classes = `${classes} modus-wc-card-side`;
        break;
      case 'stacked':
        break; // stacked is default, no class needed
    }
  }

  return classes;
};
