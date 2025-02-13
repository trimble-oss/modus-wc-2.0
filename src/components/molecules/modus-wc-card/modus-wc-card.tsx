import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-card.tailwind';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A customizable card component used to group and display content in a way that is easily readable.
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

  /** Adds a border to the card */
  @Prop() bordered?: boolean = false;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** Makes any \<figure> in the 'figure' slot cover the background */
  @Prop() imageFull?: boolean = false;

  /** Display mode - stacked or side image */
  @Prop() layout?: 'stacked' | 'side' = 'stacked';

  /** Card padding variant - normal or compact */
  @Prop() padding?: 'normal' | 'compact' = 'normal';

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

    // The order CSS classes are added matters to CSS specificity
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
          <slot name="header" />
          <div class="modus-wc-card-body">
            <div class="modus-wc-card-title">
              <slot name="title" />
            </div>
            <slot /> {/* Default body slot */}
            <div class="modus-wc-card-actions">
              <slot name="actions" />
            </div>
          </div>
          <slot name="footer" />
        </article>
      </Host>
    );
  }
}
