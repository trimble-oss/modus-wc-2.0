export type ImageGridShape = 'rectangle' | 'square';
export type ImagesPerView = '1 image' | '2 images' | '3 images' | '4 images';

export const convertPropsToClasses = ({
  imageShape,
  imagesPerView,
}: {
  imageShape?: ImageGridShape;
  imagesPerView?: ImagesPerView;
}): string => {
  const classes: string[] = [];

  if (imageShape) {
    classes.push(`modus-wc-image-grid--${imageShape}`);
  }

  if (imagesPerView) {
    const count = imagesPerView.split(' ')[0];
    classes.push(`modus-wc-image-grid--count-${count}`);
  }

  return classes.join(' ');
};
