export const convertPropsToClasses = ({
  bordered,
  fullImage,
  layout,
  padding,
}: {
  bordered?: boolean;
  fullImage?: boolean;
  layout?: 'vertical' | 'horizontal';
  padding?: 'compact' | 'comfortable';
}): string => {
  let classes = '';

  if (bordered) {
    classes = `${classes} moduswc:card-border modus-wc-card-bordered`;
  }

  if (fullImage) {
    classes = `${classes} moduswc:image-full`;
  }

  if (layout === 'horizontal') {
    classes = `${classes} moduswc:card-side`;
  }

  if (padding === 'compact') {
    classes = `${classes} moduswc:card-sm modus-wc-card-compact`;
  }

  if (padding === 'comfortable') {
    classes = `${classes} modus-wc-card-comfortable`;
  }

  return classes.trim();
};
