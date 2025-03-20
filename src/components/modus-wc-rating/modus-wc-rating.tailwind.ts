import { ModusSize } from '../types';
import { ModusWcRatingVariant } from './modus-wc-rating';

export const convertPropsToClasses = (props: {
  allowHalf?: boolean;
  size?: ModusSize;
  variant?: ModusWcRatingVariant;
}): { ratingPropClasses: string; ratingItemPropClasses: string } => {
  let ratingClasses = '';
  let ratingItemClasses = '';

  if (
    Object.prototype.hasOwnProperty.call(props, 'allowHalf') &&
    !!props.allowHalf &&
    !(props.variant === 'smiley' || props.variant === 'thumb')
  ) {
    ratingClasses = `${ratingClasses} modus-wc-rating-half`;
  }

  if (Object.prototype.hasOwnProperty.call(props, 'size') && props.size) {
    switch (props.size) {
      case 'sm':
        ratingClasses = `${ratingClasses} modus-wc-rating-sm`;
        break;
      case 'md':
        ratingClasses = `${ratingClasses} modus-wc-rating-md`;
        break;
      case 'lg':
        ratingClasses = `${ratingClasses} modus-wc-rating-lg`;
        break;
    }
  }

  if (Object.prototype.hasOwnProperty.call(props, 'variant') && props.variant) {
    switch (props.variant) {
      case 'star':
        ratingItemClasses = `${ratingItemClasses} modus-wc-mask-star-2`;
        break;
      case 'heart':
        ratingItemClasses = `${ratingItemClasses} modus-wc-mask-heart`;
        break;
      case 'smiley':
        ratingItemClasses = `${ratingItemClasses} modus-wc-mask-smiley`;
        break;
      case 'thumb':
        ratingItemClasses = `${ratingItemClasses} modus-wc-mask-thumb`;
        break;
    }
  }

  return {
    ratingPropClasses: ratingClasses,
    ratingItemPropClasses: ratingItemClasses,
  };
};

/**
 * Determines the correct half mask class based on index
 */
const getMaskHalfClasses = (index: number): string => {
  return (index + 1) % 2 !== 0
    ? 'modus-wc-mask-half-1'
    : 'modus-wc-mask-half-2';
};

/**
 * Maps the index of the rating item to the corresponding smiley class value
 * depending on the total number of rating items.
 */
const getSmileyClassValue = (index: number, count: number): number => {
  // 4-point scale: use 1, 2, 4, 5 (skip neutral)
  if (count === 4) {
    return [1, 2, 4, 5][index];
  }

  // 3-point scale: use 1, 3, 5 (dissatisfied, neutral, satisfied)
  if (count === 3) {
    return [1, 3, 5][index];
  }

  // 2-point scale or fewer: use 1, 5 (dissatisfied, satisfied)
  if (count <= 2) {
    return [1, 5][index];
  }

  // Default
  return index + 1;
};

/**
 * Get the appropriate CSS class for a rating item based on variant and index
 */
export const getIndexedRatingItemClass = (
  index: number,
  baseClasses: string,
  showHalf: boolean,
  variant: ModusWcRatingVariant,
  count: number
): string => {
  if (showHalf) {
    return `${baseClasses} ${getMaskHalfClasses(index)}`;
  }

  if (variant === 'smiley') {
    return `${baseClasses} modus-wc-mask-smiley-${getSmileyClassValue(index, count)}`;
  }

  if (variant === 'thumb') {
    return `${baseClasses} modus-wc-mask-thumb-${index + 1}`;
  }

  return baseClasses;
};
