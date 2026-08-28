export type ImageSize = 'sm' | 'md' | 'lg' | 'xl';
export type ImageShape = 'square' | 'rounded';
export type ImageFit = 'cover' | 'contain' | 'scale-down' | 'none';

export const convertPropsToClasses = ({
  fit,
  shape,
  size,
}: {
  fit?: ImageFit;
  shape?: ImageShape;
  size?: ImageSize;
}): string => {
  const classes: string[] = [];

  if (size) classes.push(`modus-wc-image--${size}`);
  if (shape) classes.push(`modus-wc-image--${shape}`);
  if (fit) classes.push(`modus-wc-image--${fit}`);

  return classes.join(' ');
};
