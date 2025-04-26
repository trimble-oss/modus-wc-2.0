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
    classes = `${classes} modus:card-bordered`;
  }

  if (fullImage) {
    classes = `${classes} modus:image-full`;
  }

  if (layout === 'horizontal') {
    classes = `${classes} modus:card-side`;
  }

  if (padding === 'compact') {
    classes = `${classes} modus:card-compact`;
  }

  return classes.trim();
};
