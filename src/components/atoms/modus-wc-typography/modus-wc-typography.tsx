import { h, Component, Host, Prop } from '@stencil/core';

export type TypographyBodySize = 'standard' | 'small' | 'mini';

export type TypographyVariant =
  | 'body'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p';

/**
 * A customizable typography component used to render text with different sizes, variants, weights, and text casing.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-typography',
  styleUrl: 'modus-wc-typography.scss',
  shadow: false,
})
export class ModusWCTypography {
  /**
   * The aria-label for the typography component.
   */
  @Prop() ariaLabel!: string;

  /**
   * The size option when variant "body" is selected.
   */
  @Prop() bodySize?: TypographyBodySize = 'standard';

  /**
   * Custom CSS class to apply to the typography element.
   */
  @Prop() customClass: string = '';

  /**
   * The variant of the typography component.
   */
  @Prop() variant: TypographyVariant = 'p';

  /**
   * The weight of the text.
   */
  @Prop() weight: 'regular' | 'semibold' | 'bold' = 'regular';

  /**
   * The text case.
   */
  @Prop() textCase: 'sentence' | 'title' | 'uppercase' = 'sentence';

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn(
        'ModusWcTypography: ariaLabel is required for accessibility.'
      );
    }
  }

  render() {
    const Element = this.variant;

    return (
      <Host>
        <Element
          class={{
            'modus-wc-typography': true,
            [this.customClass]: !!this.customClass,
            [`modus-wc-typography--body-${this.bodySize}`]:
              this.variant === 'body',
            [`modus-wc-typography--${this.textCase}`]: true,
            [`modus-wc-typography--${this.variant}`]: true,
            [`modus-wc-typography--${this.weight}`]: true,
          }}
          aria-label={this.ariaLabel}
        >
          <slot></slot>
        </Element>
      </Host>
    );
  }
}
