import { h, Component, Host, Prop } from '@stencil/core';
import { getCurrentModusWCMode } from '../../../utils/theme';

export type TypographyBodySize = '1' | '2' | '3' | '4' | 'mini';

export type TypographyVariant =
  | 'body'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p';

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

  @Prop() bodySize?: TypographyBodySize;

  /**
   * Custom CSS class for additional styling.
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
    const currentMode = getCurrentModusWCMode();
    const Element = this.variant;

    return (
      <Host>
        <Element
          class={{
            'modus-wc-typography': true,
            [this.customClass]: !!this.customClass,
            [`modus-wc-typography--body-${this.bodySize}`]: !!this.bodySize,
            [`modus-wc-typography--${this.textCase}`]: true,
            [`modus-wc-typography--${this.variant}`]: true,
            [`modus-wc-typography--${this.weight}`]: true,
            'modus-wc-typography--dark-mode': currentMode === 'dark',
            'modus-wc-typography--high-contrast-mode':
              currentMode === 'high-contrast',
          }}
          aria-label={this.ariaLabel}
        >
          <slot></slot>
        </Element>
      </Host>
    );
  }
}
