import {
  Component,
  Element,
  Event,
  EventEmitter,
  FunctionalComponent,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { ModusSize } from '../types';
import { Attributes, generateRandomId, inheritAriaAttributes } from '../utils';
import {
  SmileyDissatisfied,
  SmileyDissatisfiedOutlined,
  SmileyNeutral,
  SmileyNeutralOutlined,
  SmileySatisfied,
  SmileySatisfiedOutlined,
  SmileySomewhatDissatisfied,
  SmileySomewhatDissatisfiedOutlined,
  SmileySomewhatSatisfied,
  SmileySomewhatSatisfiedOutlined,
} from './modus-wc-rating.icons';
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

  /** Whether to allow half-ratings */
  @Prop() allowHalf: boolean = false;

  /** The number of rating items to display */
  @Prop() count: number = 5;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** Whether the rating component is disabled */
  @Prop() disabled?: boolean = false;

  /** Function to provide aria-label text for a given rating-item index */
  @Prop() getLabelText: (index: number) => string = (index) =>
    `${index} out of ${this.count} ${this.variant}${this.count > 1 ? 's' : ''}`;

  /** The size of the rating component */
  @Prop() size?: ModusSize = 'md';

  /** The variant of the rating scale */
  @Prop() variant: ModusWcRatingVariant = 'star';

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
    return this.allowHalf ? (index + 1) * 0.5 : index + 1;
  }

  private handleChange(newValue: number) {
    this.value = newValue;
    this.ratingChange.emit({ newRating: newValue });
  }

  private getSmileyIcon(index: number, selected: boolean): FunctionalComponent {
    // For a standard 5-star rating, map index 0-4 to the appropriate icon
    switch (index) {
      case 0: // Most dissatisfied
        return selected ? (
          <SmileyDissatisfied />
        ) : (
          <SmileyDissatisfiedOutlined />
        );
      case 1: // Somewhat dissatisfied
        return selected ? (
          <SmileySomewhatDissatisfied />
        ) : (
          <SmileySomewhatDissatisfiedOutlined />
        );
      case 2: // Neutral
        return selected ? <SmileyNeutral /> : <SmileyNeutralOutlined />;
      case 3: // Somewhat satisfied
        return selected ? (
          <SmileySomewhatSatisfied />
        ) : (
          <SmileySomewhatSatisfiedOutlined />
        );
      case 4: // Most satisfied
      default:
        return selected ? <SmileySatisfied /> : <SmileySatisfiedOutlined />;
    }
  }

  /**
   * Renders the smiley variant using SVG icons instead of radio inputs
   */
  private renderSmileyVariant(): FunctionalComponent {
    const { ratingClasses } = this.getClasses();

    // Calculate the actual count of icons to show (should be 5 for smiley variant)
    const displayCount = Math.min(5, this.count);

    return (
      <div
        class={`${ratingClasses} modus-wc-rating-smiley`}
        role="radiogroup"
        {...this.inheritedAttributes}
      >
        {/* Zero rating option */}
        <button
          aria-label={this.getLabelText(0)}
          class={`modus-wc-rating-smiley-btn ${this.value <= 0 ? 'selected' : ''}`}
          disabled={this.disabled}
          onClick={() => this.handleChange(0)}
          type="button"
          role="radio"
          aria-checked={this.value <= 0 ? 'true' : 'false'}
        >
          Clear
        </button>

        {/* Smiley icons */}
        {Array.from({ length: displayCount }, (_, index) => {
          const ratingValue = index + 1;
          const isSelected = this.value === ratingValue;

          return (
            <button
              aria-label={this.getLabelText(ratingValue)}
              class={`modus-wc-rating-smiley-btn ${isSelected ? 'selected' : ''}`}
              disabled={this.disabled}
              key={index}
              onClick={() => this.handleChange(ratingValue)}
              type="button"
              role="radio"
              aria-checked={isSelected ? 'true' : 'false'}
            >
              {this.getSmileyIcon(index, isSelected)}
            </button>
          );
        })}
      </div>
    );
  }

  render() {
    const { ratingClasses, ratingItemClasses } = this.getClasses();
    const uniqueRatingGroupName = `modus-wc-rating-group-${generateRandomId(4)}`;

    // Use the smiley-specific render method when variant is 'smiley'
    if (this.variant === 'smiley') {
      return (
        <Host class="modus-wc-rating-container">
          {this.renderSmileyVariant()}
        </Host>
      );
    }

    // For other variants, use the existing radio input implementation
    return (
      <Host class="modus-wc-rating-container">
        <div
          class={ratingClasses}
          role="radiogroup"
          {...this.inheritedAttributes}
        >
          <input
            aria-label={this.getLabelText(0)}
            checked={this.value <= 0}
            class="modus-wc-rating-item modus-wc-rating-hidden"
            disabled={this.disabled}
            name={uniqueRatingGroupName}
            onChange={() => this.handleChange(0)}
            type="radio"
            value="0"
          />
          {Array.from(
            { length: this.allowHalf ? this.count * 2 : this.count },
            (_, index) => {
              const ratingValue = this.getValueForIndex(index);

              return (
                <input
                  aria-label={this.getLabelText(ratingValue)}
                  checked={this.value === ratingValue}
                  class={
                    this.allowHalf
                      ? `${ratingItemClasses} ${this.getMaskHalfClasses(index)}`
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
