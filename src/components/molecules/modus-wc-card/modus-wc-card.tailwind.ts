export const convertPropsToClasses = (props: {
  bordered?: boolean;
  fullImage?: boolean;
  layout?: 'stacked' | 'side';
  padding?: 'normal' | 'compact';
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    props.bordered
  ) {
    classes = `${classes} modus-wc-card-bordered`;
  }

  if (
    Object.prototype.hasOwnProperty.call(props, 'fullImage') &&
    props.fullImage
  ) {
    classes = `${classes} modus-wc-image-full`; // no -card
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

  if (Object.prototype.hasOwnProperty.call(props, 'padding') && props.padding) {
    switch (props.padding) {
      case 'normal': // normal is default, no class needed
        break;
      case 'compact':
        classes = `${classes} modus-wc-card-compact`;
        break;
    }
  }

  return classes;
};
