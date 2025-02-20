import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-modal.tailwind';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A customizable modal component used to display content in a dialog.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-modal',
  styleUrl: 'modus-wc-modal.scss',
  shadow: false,
})
export class ModusWcModal {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** The ID of the inner dialog element */
  @Prop() modalId!: string;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-modal'];

    const propClasses = convertPropsToClasses({});

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <dialog
          class={this.getClasses()}
          id={this.modalId}
          {...this.inheritedAttributes}
        >
          <div class="modus-wc-modal-box">
            <div class="modus-wc-text-lg modus-wc-font-bold">
              <slot name="title" />
            </div>
            <div class="modus-wc-py-4">
              <slot name="content" />
            </div>
            <div class="modus-wc-modal-action">
              <slot name="actions" />
            </div>
          </div>
        </dialog>
      </Host>
    );
  }
}
