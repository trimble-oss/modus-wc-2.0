import { Component, Element, h, Host, Prop } from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable bottom sheet component used to display content in a dialog.
 *
 * This component supports 'header', 'content', and 'footer' `<slot>` elements for inserting custom HTML.
 */
@Component({
  tag: 'modus-wc-bottom-sheet',
  styleUrl: 'modus-wc-bottom-sheet.scss',
  shadow: false,
})
export class ModusWcBottomSheet {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the outer div. */
  @Prop() customClass?: string = '';

  /** Height of the bottom sheet in pixels. */
  @Prop() height?: string = 'auto';

  /** Width of the bottom sheet in pixels. */
  @Prop() width?: string = '350px';

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-bottom-sheet'];

    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host {...this.inheritedAttributes} class={this.getClasses()}>
        <modus-wc-panel width={this.width} height={this.height}>
          <modus-wc-handle
            slot="header"
            customClass="modus-wc-bottom-sheet-handle"
            density="comfortable"
            orientation="vertical"
            size="default"
            type="bar"
          />

          <div class="modus-wc-bottom-sheet-header" slot="header">
            <slot name="header"></slot>
          </div>

          <div class="modus-wc-bottom-sheet-content" slot="body">
            <slot name="content"></slot>
          </div>

          <div class="modus-wc-bottom-sheet-footer" slot="footer">
            <slot name="footer"></slot>
          </div>
        </modus-wc-panel>
      </Host>
    );
  }
}
