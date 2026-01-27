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
import {
  convertPropsToClasses,
  getIndexedRatingItemClass,
} from './modus-wc-rating.tailwind';
import { handleShadowDOMStyles } from '../base-component';

export interface IRatingChange {
  newRating: number;
}

export type ModusWcRatingVariant = 'heart' | 'smiley' | 'star' | 'thumb';

/**
 * A rating component that allows users to choose a rating from predefined options
 */
@Component({
  tag: 'modus-wc-rating',
  styleUrl: 'modus-wc-rating.scss',
  shadow: false,
})
export class ModusWcRating {
  private inheritedAttributes: Attributes = {};
  private uniqueRatingGroupName: string;
  private readonly VARIANTS_WITHOUT_HALF_SUPPORT: ModusWcRatingVariant[] = [
    'smiley',
    'thumb',
  ];

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Whether to allow half-ratings. Only applies to star and heart variants. */
  @Prop() allowHalf?: boolean = false;

  /** The number of rating items to display */
  @Prop() count: number = 5;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** Whether the rating component is disabled */
  @Prop() disabled?: boolean = false;

  /** Function to provide aria-label text for a given rating-item index */
  @Prop() getAriaLabelText?: (ratingValue: number) => string = (ratingValue) =>
    `Rating item ${ratingValue}`;

  /** The size of the rating component */
  @Prop() size?: ModusSize = 'md';

  /** The variant of the rating scale */
  @Prop() variant: ModusWcRatingVariant = 'smiley';

  /** The current value of the rating */
  @Prop({ mutable: true, reflect: true }) value: number = 0;

  /** Event emitted when the rating changes */
  @Event() ratingChange!: EventEmitter<IRatingChange>;

  constructor() {
    this.uniqueRatingGroupName = `modus-wc-rating-group-${generateRandomId(4)}`;
  }

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

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

  /**
   * Gets the total number of rating items to render based on variant and settings
   */
  private getTotalRatingItems(): number {
    if (this.supportsHalfRatings()) {
      return this.count * 2;
    }

    if (this.variant === 'thumb') {
      return 2;
    }

    if (this.variant === 'smiley') {
      return Math.max(2, Math.min(5, this.count));
    }

    return this.count;
  }

  private getValueForIndex(index: number): number {
    return this.supportsHalfRatings() ? (index + 1) * 0.5 : index + 1;
  }

  private handleChange(newValue: number) {
    this.value = newValue;
    this.ratingChange.emit({ newRating: newValue });
  }

  private supportsHalfRatings(): boolean {
    return (
      this.allowHalf! &&
      !this.VARIANTS_WITHOUT_HALF_SUPPORT.includes(this.variant)
    );
  }

  private renderRatingItems(ratingItemClasses: string) {
    return Array.from({ length: this.getTotalRatingItems() }, (_, index) => {
      const ratingValue = this.getValueForIndex(index);
      const itemClass = getIndexedRatingItemClass(
        index,
        ratingItemClasses,
        this.supportsHalfRatings(),
        this.variant,
        this.count
      );

      return (
        <input
          aria-label={this.getAriaLabelText!(ratingValue)}
          aria-checked={this.value === ratingValue ? 'true' : 'false'}
          checked={this.value === ratingValue}
          class={itemClass}
          disabled={this.disabled}
          key={index}
          name={this.uniqueRatingGroupName}
          onChange={() => this.handleChange(ratingValue)}
          type="radio"
          value={String(ratingValue)}
        />
      );
    });
  }

  /**
   * Render the zero/reset option
   */
  private renderZeroOption() {
    return (
      <input
        aria-label={this.getAriaLabelText!(0)}
        aria-checked={this.value <= 0 ? 'true' : 'false'}
        checked={this.value <= 0}
        class="modus-wc-rating-hidden"
        disabled={this.disabled}
        name={this.uniqueRatingGroupName}
        onChange={() => this.handleChange(0)}
        type="radio"
        value="0"
      />
    );
  }

  render() {
    const { ratingClasses, ratingItemClasses } = this.getClasses();

    return (
      <Host class="modus-wc-rating-container">
        <div
          class={ratingClasses}
          role="radiogroup"
          {...this.inheritedAttributes}
        >
          {this.renderZeroOption()}
          {this.renderRatingItems(ratingItemClasses)}
        </div>
      </Host>
    );
  }
}
