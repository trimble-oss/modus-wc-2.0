export const tailwindThemeClasses: Record<string, string> = {
  'modus-classic': 'modus-wc-input-bordered modus-wc-w-full modus-wc-w-xs',
  'modus-dark': '',
};

export const convertPropsToClasses = (props: any): string => {
  let classes = '';

  if (props.hasOwnProperty('bordered') && !!props.bordered) {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (props.hasOwnProperty('size') && !!props.size) {
    classes = `${classes} ${props.size}`;
  }

  return classes;
};
