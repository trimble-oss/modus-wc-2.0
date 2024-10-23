// TODO - evaluate if this is needed or if it ends up overriding our theme or customCSS styles
export const tailwindThemeClasses: Record<string, string> = {
  'modus-classic': '',
  'modus-dark': '',
};

export const convertPropsToClasses = (props: {
  bordered?: boolean;
  size?: string;
}): string => {
  let classes = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'bordered') &&
    !!props.bordered
  ) {
    classes = `${classes} modus-wc-input-bordered`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-input-${props.size}`;
  }

  return classes;
};
