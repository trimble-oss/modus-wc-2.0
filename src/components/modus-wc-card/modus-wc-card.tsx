import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-card.tailwind';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable card component used to group and display content in a way that is easily readable.
 *
 * This component supports multiple `<slot>` elements including 'header' for images or custom content, 'title', 'subtitle', a default slot for main content, 'actions' for buttons or interactive elements, and 'footer'.
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

  /** Makes any \<figure> in the 'header' slot cover the background */
  @Prop() backgroundFigure?: boolean = false;

  /** Adds a hard border to the card */
  @Prop() bordered?: boolean = false;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** Determines how the card is laid out */
  @Prop() layout?: 'vertical' | 'horizontal' = 'vertical';

  /** Determines the interior padding size */
  @Prop() padding?: 'compact' | 'comfortable' = 'compact';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-card modus-wc-rounded-card'];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      fullImage: this.backgroundFigure,
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
            <div class="modus-wc-card-subtitle">
              <slot name="subtitle" />
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
