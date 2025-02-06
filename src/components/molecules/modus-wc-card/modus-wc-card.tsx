import { Component, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-card.tailwind';

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
  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** Adds border to the card */
  @Prop() bordered?: boolean = false;

  /** Makes the image in figure element the background */
  @Prop() imageFull?: boolean = false;

  /** Card padding variant - normal (default) or compact */
  @Prop() padding?: 'normal' | 'compact' = 'normal';

  /** Display mode - stacked (default) or side image */
  @Prop() layout?: 'stacked' | 'side' = 'stacked';

  private getClasses(): string {
    const classList = ['card'];

    const propClasses = convertPropsToClasses({
      padding: this.padding,
      layout: this.layout,
    });

    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div class={this.getClasses()} tabindex={-1}>
          <slot name="figure"></slot>
          <div class="card-body">
            <slot name="title"></slot>
            <slot></slot>
            <slot name="actions"></slot>
          </div>
        </div>
      </Host>
    );
  }
}
