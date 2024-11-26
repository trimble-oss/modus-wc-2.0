import { TypographyVariant, TypographyWeight } from './modus-wc-typography';
import { Size } from '../../types';

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const convertPropsToClasses = (props: {
  size?: Size;
  weight?: TypographyWeight;
  variant?: TypographyVariant;
}): string => {
  let classes = '';

  // Heading styles are handled in modus-wc-typography.scss
  if (
    Object.prototype.hasOwnProperty.call(props, 'variant') &&
    HEADINGS.includes(props.variant as string)
  ) {
    return classes;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    classes = `${classes} modus-wc-text-${props.size}`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'weight') && props.weight) {
    classes = `${classes} modus-wc-font-${props.weight}`;
  }

  return classes;
};
