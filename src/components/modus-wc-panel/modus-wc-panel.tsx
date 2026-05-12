import { Component, Element, h, Host, Prop } from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';
import { convertPropsToClasses } from './modus-wc-panel.tailwind';

/**
 * A customizable panel component used to organize content in a structured layout.
 *
 * This component provides 'header', 'body', and 'footer' `<slot>` elements for inserting custom HTML.
 */
@Component({
  tag: 'modus-wc-panel',
  styleUrl: 'modus-wc-panel.scss',
  shadow: false,
})
export class ModusWcPanel {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the outer div. */
  @Prop() customClass?: string = '';

  /** Width of the panel in pixels. */
  @Prop() width?: string = '350px';

  /** Height of the panel in pixels. */
  @Prop() height?: string = '700px';

  /** Enable floating mode with elevated shadow. */
  @Prop() floating?: boolean = false;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-panel'];

    const propClasses = convertPropsToClasses({
      floating: this.floating,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div
          class={this.getClasses()}
          style={{ width: this.width, height: this.height }}
          {...this.inheritedAttributes}
        >
          <div class="modus-wc-panel-header">
            <slot name="header" />
          </div>
          <div class="modus-wc-panel-body">
            <slot name="body" />
          </div>
          <div class="modus-wc-panel-footer">
            <slot name="footer" />
          </div>
        </div>
      </Host>
    );
  }
}
