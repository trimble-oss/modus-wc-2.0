import { ModusSize } from '../types';
import { ModusWcRatingVariant } from './modus-wc-rating';

export const convertPropsToClasses = ({
  allowHalf,
  size,
  variant,
}: {
  allowHalf?: boolean;
  size?: ModusSize;
  variant?: ModusWcRatingVariant;
}): { ratingPropClasses: string; ratingItemPropClasses: string } => {
  let ratingClasses = '';
  let ratingItemClasses = '';

  if (allowHalf && !(variant === 'smiley' || variant === 'thumb')) {
    ratingClasses = `${ratingClasses} modus:rating-half`;
  }

  if (size) {
    switch (size) {
      case 'sm':
        ratingClasses = `${ratingClasses} modus:rating-sm`;
        break;
      case 'md':
        ratingClasses = `${ratingClasses} modus:rating-md`;
        break;
      case 'lg':
        ratingClasses = `${ratingClasses} modus:rating-lg`;
        break;
    }
  }

  if (variant) {
    switch (variant) {
      case 'star':
        ratingItemClasses = `${ratingItemClasses} modus:mask-star-2`;
        break;
      case 'heart':
        ratingItemClasses = `${ratingItemClasses} modus:mask-heart`;
        break;
      case 'smiley':
        ratingItemClasses = `${ratingItemClasses} modus:mask-smiley`;
        break;
      case 'thumb':
        ratingItemClasses = `${ratingItemClasses} modus:mask-thumb`;
        break;
    }
  }

  return {
    ratingPropClasses: ratingClasses.trim(),
    ratingItemPropClasses: ratingItemClasses.trim(),
  };
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
    return `${baseClasses} modus:mask-smiley-${getSmileyClassValue(index, count)}`;
  }

  if (variant === 'thumb') {
    return `${baseClasses} modus:mask-thumb-${index + 1}`;
  }

  return baseClasses;
};

/**
 * Determines the correct half mask class based on index
 */
const getMaskHalfClasses = (index: number): string => {
  return (index + 1) % 2 !== 0 ? 'modus:mask-half-1' : 'modus:mask-half-2';
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
