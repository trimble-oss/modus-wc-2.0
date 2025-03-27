export const convertPropsToClasses = ({
  bordered,
  fullImage,
  layout,
  padding,
}: {
  bordered?: boolean;
  fullImage?: boolean;
  layout?: 'vertical' | 'horizontal';
  padding?: 'normal' | 'compact';
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} modus-wc-card-bordered`;
  }

  if (fullImage) {
    classes = `${classes} modus-wc-image-full`;
  }

  if (layout === 'horizontal') {
    classes = `${classes} modus-wc-card-side`;
  }

  if (padding === 'compact') {
    classes = `${classes} modus-wc-card-compact`;
  }

  return classes.trim();
};
