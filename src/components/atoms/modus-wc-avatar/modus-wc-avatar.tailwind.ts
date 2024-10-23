// TODO - evaluate if this is needed or if it ends up overriding our theme or customCSS styles
export const tailwindThemeClasses: Record<string, string> = {
  'modus-classic': '',
  'modus-dark': '',
};

export const convertPropsToClasses = (props: {
  shape?: string;
  size?: string;
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'shape') && props.shape) {
    switch (props.shape) {
      case 'circle':
        classes = `${classes} modus-wc-rounded-full`;
        break;
      case 'square':
        classes = `${classes} modus-wc-rounded-lg`;
        break;
    }
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    switch (props.size) {
      case 'xs':
        classes = `${classes} modus-wc-w-8`;
        break;
      case 'sm':
        classes = `${classes} modus-wc-w-12`;
        break;
      case 'md':
        classes = `${classes} modus-wc-w-16`;
        break;
      case 'lg':
        classes = `${classes} modus-wc-w-20`;
        break;
      case 'xl':
        classes = `${classes} modus-wc-w-24`;
        break;
    }
  }

  return classes;
};
