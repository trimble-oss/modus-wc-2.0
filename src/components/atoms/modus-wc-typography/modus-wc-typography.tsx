import { Component, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-typography.tailwind';
import { DaisySize } from '../../types';

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
  /** Custom CSS class to apply to the typography element. */
  @Prop() customClass?: string = '';

  /** The size of the font. */
  @Prop() size?: DaisySize = 'md';

  /** The variant of the typography component. */
  @Prop() variant: TypographyVariant = 'p';

  /** The weight of the text. */
  @Prop() weight?: TypographyWeight = 'normal';

  private getClasses(): string {
    const classList = ['modus-wc-typography'];

    const propClasses = convertPropsToClasses({
      size: this.size,
      variant: this.variant,
      weight: this.weight,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
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
