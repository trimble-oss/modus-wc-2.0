import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-typography.tailwind';
import { Attributes, inheritAriaAttributes } from '../utils';

export type TypographyHierarchy = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export type TypographySize = 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl';

export type TypographyWeight = 'light' | 'normal' | 'semibold' | 'bold';

/**
 * A customizable typography component used to render text with different sizes, hierarchy, and weights.
 *
 * Note: When using heading elements (h1-h6), the default heading CSS styling can be accessed without modifying
 * the default size (size="md") and weight (weight="normal") properties. Default styling can be overridden by
 * providing your own custom values for the size or weight properties from the available options.
 */
@Component({
  tag: 'modus-wc-typography',
  styleUrl: 'modus-wc-typography.scss',
  shadow: false,
})
export class ModusWCTypography {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the typography element. */
  @Prop() customClass?: string = '';

  /** The hierarchy of the typography component. */
  @Prop() hierarchy: TypographyHierarchy = 'p';

  /** The text label to display. */
  @Prop() label!: string;

  /** The size of the font. */
  @Prop() size?: TypographySize = 'md';

  /** The weight of the text. */
  @Prop() weight?: TypographyWeight = 'normal';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-typography'];

    // Check if we're dealing with a heading and have size/weight overrides
    const isHeading = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'].includes(
      this.hierarchy
    );
    const hasOverrides = this.size !== 'md' || this.weight !== 'normal';

    if (isHeading && hasOverrides) {
      // Add a class to indicate overrides for headings
      classList.push('modus-wc-typography-override');
    }

    const propClasses = convertPropsToClasses({
      size: this.size,
      weight: this.weight,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const Element = this.hierarchy;

    return (
      <Host>
        <Element class={this.getClasses()} {...this.inheritedAttributes}>
          <slot>{this.label}</slot>
        </Element>
      </Host>
    );
  }
}
