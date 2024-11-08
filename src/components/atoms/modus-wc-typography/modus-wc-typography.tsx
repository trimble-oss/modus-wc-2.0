import { h, Component, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-typography.tailwind';

export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export type TypographyVariant =
  | 'body'
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'h5'
  | 'h6'
  | 'p';

export type TypographyWeight = 'light' | 'normal' | 'bold';

/**
 * A customizable typography component used to render text with different sizes, variants, and weights.
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
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Custom CSS class to apply to the typography element.
   */
  @Prop() customClass?: string = '';

  /**
   * The size of the font.
   */
  @Prop() size?: TypographySize = 'md';

  /**
   * The variant of the typography component.
   */
  @Prop() variant: TypographyVariant = 'p';

  /**
   * The weight of the text.
   */
  @Prop() weight?: TypographyWeight = 'normal';

  componentWillLoad() {
    if (!this.ariaLabel) {
      console.warn(
        'ModusWcTypography: aria-label is required for accessibility.'
      );
    }
  }

  private getClasses(): string {
    const classList = [];

    const propClasses = convertPropsToClasses({
      size: this.size,
      variant: this.variant,
      weight: this.weight,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    classList.push('modus-wc-typography');
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const Element = this.variant;

    return (
      <Host>
        <Element class={this.getClasses()}>
          <slot></slot>
        </Element>
      </Host>
    );
  }
}
