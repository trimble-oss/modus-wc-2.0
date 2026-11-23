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
    ratingClasses = `${ratingClasses} modus-wc-rating-half`;
  }

  if (size) {
    switch (size) {
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

  if (variant) {
    switch (variant) {
      case 'star':
        ratingItemClasses = `${ratingItemClasses} moduswc:mask-star-2 modus-wc-mask-star-2`;
        break;
      case 'heart':
        ratingItemClasses = `${ratingItemClasses} moduswc:mask-heart modus-wc-mask-heart`;
        break;
      case 'smiley':
        // Daisy 5 dropped mask-smiley. Keep the Modus hook for SCSS.
        ratingItemClasses = `${ratingItemClasses} modus-wc-mask-smiley`;
        break;
      case 'thumb':
        // Daisy 5 dropped mask-thumb. Keep the Modus hook for SCSS.
        ratingItemClasses = `${ratingItemClasses} modus-wc-mask-thumb`;
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
    return `${baseClasses} modus-wc-mask-smiley-${getSmileyClassValue(index, count)}`;
  }

  if (variant === 'thumb') {
    return `${baseClasses} modus-wc-mask-thumb-${index + 1}`;
  }

  return baseClasses;
};

/**
 * Determines the correct half mask class based on index
 */
const getMaskHalfClasses = (index: number): string => {
  return (index + 1) % 2 !== 0
    ? 'moduswc:mask-half-1 modus-wc-mask-half-1'
    : 'moduswc:mask-half-2 modus-wc-mask-half-2';
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
