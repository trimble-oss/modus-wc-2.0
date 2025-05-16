import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-loader.tailwind';
import { DaisySize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

export type LoaderVariant =
  | 'ball'
  | 'bars'
  | 'dots'
  | 'infinity'
  | 'ring'
  | 'spinner';

export type LoaderColor =
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'neutral'
  | 'info'
  | 'success'
  | 'warning'
  | 'error';

/**
 * A customizable loader component used to indicate the loading of content.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-loader',
  styleUrl: 'modus-wc-loader.scss',
  shadow: false,
})
export class ModusWcLoader {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The color of the loader. */
  @Prop() color: LoaderColor = 'primary';

  /** Custom CSS class to apply to the loader element. */
  @Prop() customClass?: string = '';

  /** The size of the loader. */
  @Prop() size: DaisySize = 'md';

  /** The variant of the loader. */
  @Prop() variant: LoaderVariant = 'spinner';

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      this.el.ariaLabel = 'Loading';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-loader'];

    const propClasses = convertPropsToClasses({
      color: this.color,
      size: this.size,
      variant: this.variant,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <span
          class={this.getClasses()}
          role="status"
          tabindex={-1}
          {...this.inheritedAttributes}
        ></span>
      </Host>
    );
  }
}
