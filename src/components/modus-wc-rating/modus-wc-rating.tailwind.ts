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
    !!props.allowHalf
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
      // TODO: implement these variants (modus 1.0)
      // case 'smiley':
      //   ratingItemClasses = `${ratingItemClasses} modus-wc-mask-smiley`;
      //   break;
      // case 'thumbs':
      //   ratingItemClasses = `${ratingItemClasses} modus-wc-mask-thumbs`;
      //   break;
    }
  }

  return {
    ratingPropClasses: ratingClasses,
    ratingItemPropClasses: ratingItemClasses,
  };
};
