import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { ModusSize } from '../types';
import { Attributes, generateRandomId, inheritAriaAttributes } from '../utils';
import { convertPropsToClasses } from './modus-wc-rating.tailwind';

export interface IModusWcRatingChange {
  newRating: number;
}

export type ModusWcRatingVariant = 'star' | 'heart' | 'smiley' | 'thumb';

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

  /** Whether to allow half-ratings. Only applies to star and heart variants. */
  @Prop() allowHalf: boolean = false;

  /** The number of rating items to display */
  @Prop() count: number = 5;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** Whether the rating component is disabled */
  @Prop() disabled?: boolean = false;

  /** Function to provide aria-label text for a given rating-item index */
  @Prop() getAriaLabelText: (ratingValue: number) => string = (ratingValue) =>
    `Rating item ${ratingValue}`;

  /** The size of the rating component */
  @Prop() size?: ModusSize = 'md';

  /** The variant of the rating scale */
  @Prop() variant: ModusWcRatingVariant = 'smiley';

  /** The current value of the rating */
  @Prop({ mutable: true, reflect: true }) value: number = 0;

  /** Event emitted when the rating changes */
  @Event() ratingChange!: EventEmitter<IModusWcRatingChange>;

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
    if (this.customClass) ratingClassList.push(this.customClass);

    if (ratingItemPropClasses) ratingItemClassList.push(ratingItemPropClasses);

    return {
      ratingClasses: ratingClassList.join(' '),
      ratingItemClasses: ratingItemClassList.join(' '),
    };
  }

  private getMaskHalfClasses(index: number): string {
    return (index + 1) % 2 !== 0
      ? 'modus-wc-mask-half-1'
      : 'modus-wc-mask-half-2';
  }

  private getValueForIndex(index: number): number {
    return this.allowHalf &&
      !(this.variant === 'smiley' || this.variant === 'thumb')
      ? (index + 1) * 0.5
      : index + 1;
  }

  /**
   * Maps the index of the rating item to the corresponding smiley class value
   * depending on the total number of rating items.
   */
  private getSmileyClassValue(index: number): number {
    // 4-point scale: use 1, 2, 4, 5 (skip neutral)
    if (this.count === 4) {
      return [1, 2, 4, 5][index];
    }

    // 3-point scale: use 1, 3, 5 (dissatisfied, neutral, satisfied)
    if (this.count === 3) {
      return [1, 3, 5][index];
    }

    // 2-point scale or fewer: use 1, 5 (dissatisfied, satisfied)
    if (this.count <= 2) {
      return [1, 5][index];
    }

    // Default
    return index + 1;
  }

  private handleChange(newValue: number) {
    this.value = newValue;
    this.ratingChange.emit({ newRating: newValue });
  }

  render() {
    const { ratingClasses, ratingItemClasses } = this.getClasses();
    const uniqueRatingGroupName = `modus-wc-rating-group-${generateRandomId(4)}`;
    const showHalf =
      this.allowHalf &&
      !(this.variant === 'smiley' || this.variant === 'thumb');

    return (
      <Host class="modus-wc-rating-container">
        <div
          class={ratingClasses}
          role="radiogroup"
          {...this.inheritedAttributes}
        >
          <input
            aria-label={this.getAriaLabelText(0)}
            aria-checked={this.value <= 0 ? 'true' : 'false'}
            checked={this.value <= 0}
            class="modus-wc-rating-hidden"
            disabled={this.disabled}
            name={uniqueRatingGroupName}
            onChange={() => this.handleChange(0)}
            type="radio"
            value="0"
          />
          {Array.from(
            {
              length: showHalf
                ? this.count * 2
                : this.variant === 'thumb'
                  ? 2
                  : this.variant === 'smiley'
                    ? Math.max(2, Math.min(5, this.count))
                    : this.count,
            },
            (_, index) => {
              const ratingValue = this.getValueForIndex(index);

              return (
                <input
                  aria-label={this.getAriaLabelText(ratingValue)}
                  aria-checked={this.value === ratingValue ? 'true' : 'false'}
                  checked={this.value === ratingValue}
                  class={
                    showHalf
                      ? `${ratingItemClasses} ${this.getMaskHalfClasses(index)}`
                      : this.variant === 'smiley'
                        ? `${ratingItemClasses} modus-wc-mask-smiley-${this.getSmileyClassValue(index)}`
                        : this.variant === 'thumb'
                          ? `${ratingItemClasses} modus-wc-mask-thumb-${ratingValue}`
                          : ratingItemClasses
                  }
                  disabled={this.disabled}
                  key={index}
                  name={uniqueRatingGroupName}
                  onChange={() => this.handleChange(ratingValue)}
                  type="radio"
                  value={String(ratingValue)}
                />
              );
            }
          )}
        </div>
      </Host>
    );
  }
}
