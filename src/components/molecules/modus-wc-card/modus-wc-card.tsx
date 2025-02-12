import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-card.tailwind';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A customizable card component based on DaisyUI card.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-card',
  styleUrl: 'modus-wc-card.scss',
  shadow: false,
})
export class ModusWcCard {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** Adds a border to the card */
  @Prop() bordered?: boolean = false;

  /** Makes any \<figure> in the 'figure' slot cover the background */
  @Prop() imageFull?: boolean = false;

  /** Card padding variant - normal or compact */
  @Prop() padding?: 'normal' | 'compact' = 'normal';

  /** Display mode - stacked or side image */
  @Prop() layout?: 'stacked' | 'side' = 'stacked';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-card'];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      fullImage: this.imageFull,
      layout: this.layout,
      padding: this.padding,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <article
          class={this.getClasses()}
          tabindex={-1}
          {...this.inheritedAttributes}
        >
          <figure>
            <slot name="figure"></slot>
          </figure>
          <div class="modus-wc-card-header">
            <slot name="header"></slot>
          </div>
          <div class="modus-wc-card-body">
            <div class="modus-wc-card-title">
              <slot name="title"></slot>
            </div>
            <slot></slot>
            <div class="modus-wc-card-actions">
              <slot name="footer"></slot>
            </div>
          </div>
        </article>
      </Host>
    );
  }
}
