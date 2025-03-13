import { Component, Element, h, Host, Prop } from '@stencil/core';
import { ModusSize } from '../types';
import { Attributes, generateRandomId, inheritAriaAttributes } from '../utils';
import { convertPropsToClasses } from './modus-wc-rating.tailwind';

/**
 * A rating component that allows users to rate items.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-rating',
  styleUrl: 'modus-wc-rating.scss',
  shadow: false,
})
export class ModusWcRating {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Whether to allow half-ratings */
  @Prop() allowHalf: boolean = false;

  /** The number of rating items to display */
  @Prop() count: number = 5;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** The size of the rating component */
  @Prop() size?: ModusSize = 'md';

  /** The variant of the rating scale */
  @Prop() variant: 'star' | 'heart' | 'smiley' | 'thumbs' = 'star';

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Rating scale component';
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): { ratingClasses: string; ratingItemClasses: string } {
    const ratingClassList = ['modus-wc-rating'];
    const ratingItemClassList = ['modus-wc-rating-item', 'modus-wc-mask'];

    const { ratingPropClasses, ratingItemPropClasses } = convertPropsToClasses({
      allowHalf: this.allowHalf,
      size: this.size,
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (ratingPropClasses) ratingClassList.push(ratingPropClasses);
    if (ratingItemPropClasses) ratingItemClassList.push(ratingItemPropClasses);
    if (this.customClass) ratingClassList.push(this.customClass);

    return {
      ratingClasses: ratingClassList.join(' '),
      ratingItemClasses: ratingItemClassList.join(' '),
    };
  }

  render() {
    const { ratingClasses, ratingItemClasses } = this.getClasses();
    const uniqueRadioGroupId = generateRandomId(4);

    return (
      <Host>
        <div class={ratingClasses} {...this.inheritedAttributes}>
          {Array.from(
            { length: this.allowHalf ? this.count * 2 : this.count },
            (_, index) => (
              <input
                class={
                  this.allowHalf
                    ? `${ratingItemClasses} ${(index + 1) % 2 !== 0 ? 'modus-wc-mask-half-1' : 'modus-wc-mask-half-2'}`
                    : ratingItemClasses
                }
                key={index}
                name={`radio-${uniqueRadioGroupId}`}
                type="radio"
                value={String(index + 1)}
              />
            )
          )}
        </div>
      </Host>
    );
  }
}
