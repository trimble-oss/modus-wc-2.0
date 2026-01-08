import { Component, Element, h, Host, Prop } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable toolbar component used to organize content across the entire page.
 *
 * The component supports `<slot>` called 'start', 'center', and 'end' for injecting custom HTML.
 */
@Component({
  tag: 'modus-wc-toolbar',
  styleUrl: 'modus-wc-toolbar.scss',
  shadow: false,
})
export class ModusWcToolbar {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the outer div. */
  @Prop() customClass?: string = '';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-navbar'];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div class={this.getClasses()} {...this.inheritedAttributes}>
          <div class="modus-wc-navbar-start">
            <slot name="start" />
          </div>
          <div class="modus-wc-navbar-center">
            <slot name="center" />
          </div>
          <div class="modus-wc-navbar-end">
            <slot name="end" />
          </div>
        </div>
      </Host>
    );
  }
}
