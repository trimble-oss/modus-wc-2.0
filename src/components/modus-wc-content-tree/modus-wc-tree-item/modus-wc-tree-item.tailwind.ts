export const convertPropsToClasses = ({
  disabled,
  selected,
  size,
}: {
  disabled?: boolean;
  selected?: boolean;
  size?: 'xs' | 'sm' | 'md' | 'lg';
}): string => {
  let classes = '';

  if (disabled) {
    classes = `${classes} modus-wc-tree-item-disabled`;
  }

  if (selected) {
    classes = `${classes} modus-wc-tree-item-selected`;
  }

  if (size) {
    classes = `${classes} modus-wc-tree-item-${size}`;
  }

  return classes.trim();
};
