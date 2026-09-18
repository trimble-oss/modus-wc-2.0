export type ImageGridShape = 'rectangle' | 'square';

export const convertPropsToClasses = ({
  imageShape,
  imageCount,
}: {
  imageShape: ImageGridShape;
  imageCount: number;
}): string => {
  const classes: string[] = [
    `modus-wc-image-grid--${imageShape}`,
    `modus-wc-image-grid--count-${imageCount}`,
  ];

  return classes.join(' ');
};
