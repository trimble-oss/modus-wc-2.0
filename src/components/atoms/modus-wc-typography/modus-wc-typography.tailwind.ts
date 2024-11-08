import {
  TypographySize,
  TypographyVariant,
  TypographyWeight,
} from './modus-wc-typography';

const HEADINGS = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];

export const convertPropsToClasses = (props: {
  size?: TypographySize;
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
    switch (props.size) {
      case 'xs':
        classes = `${classes} modus-wc-text-xs`;
        break;
      case 'sm':
        classes = `${classes} modus-wc-text-sm`;
        break;
      case 'md':
        classes = `${classes} modus-wc-text-base`;
        break;
      case 'lg':
        classes = `${classes} modus-wc-text-lg`;
        break;
      case 'xl':
        classes = `${classes} modus-wc-text-xl`;
        break;
    }
  }

  if (Object.prototype.hasOwnProperty.call(props, 'weight') && props.weight) {
    switch (props.weight) {
      case 'light':
        classes = `${classes} modus-wc-font-light`;
        break;
      case 'normal':
        classes = `${classes} modus-wc-font-normal`;
        break;
      case 'bold':
        classes = `${classes} modus-wc-font-bold`;
        break;
    }
  }

  return classes;
};
