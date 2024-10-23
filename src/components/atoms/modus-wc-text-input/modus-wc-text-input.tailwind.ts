// TODO - evaluate if this is needed or if it ends up overriding our theme or customCSS styles
export const tailwindThemeClasses: Record<string, string> = {
  'modus-classic': '',
  'modus-dark': '',
};

export const convertPropsToClasses = (props: any): string => {
  let classes = '';

  if (props.hasOwnProperty('bordered') && !!props.bordered) {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (props.hasOwnProperty('size') && props.size) {
    classes = `${classes} ${props.size}`;
  }

  return classes;
};
