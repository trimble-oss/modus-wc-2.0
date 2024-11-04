export const convertPropsToClasses = (props: {
  color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger';
  size?: 'sm' | 'md' | 'lg';
  type?: 'counter' | 'filled' | 'text';
}): string => {
  let classes = '';

  if (Object.prototype.hasOwnProperty.call(props, 'color') && props.color) {
    switch (props.color) {
      case 'primary':
        classes = `${classes} modus-wc-badge-primary`;
        break;
      case 'secondary':
        classes = `${classes} modus-wc-badge-secondary`;
        break;
      case 'tertiary':
        classes = `${classes} modus-wc-badge-neutral`;
        break;
      case 'high-contrast':
        classes = `${classes} modus-wc-badge-high-contrast`;
        break;
      case 'success':
        classes = `${classes} modus-wc-badge-success`;
        break;
      case 'warning':
        classes = `${classes} modus-wc-badge-warning`;
        break;
      case 'danger':
        classes = `${classes} modus-wc-badge-error`;
        break;
    }
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    switch (props.size) {
      case 'sm':
        classes = `${classes} modus-wc-badge-sm`;
        break;
      case 'md':
        classes = `${classes} modus-wc-badge-md`;
        break;
      case 'lg':
        classes = `${classes} modus-wc-badge-lg`;
        break;
    }
  }

  if (Object.prototype.hasOwnProperty.call(props, 'type') && props.type) {
    switch (props.type) {
      case 'counter':
        classes = `${classes} modus-wc-badge-counter`;
        break;
      case 'text':
        classes = `${classes} modus-wc-badge-text`;
        break;
    }
  }

  return classes;
};
