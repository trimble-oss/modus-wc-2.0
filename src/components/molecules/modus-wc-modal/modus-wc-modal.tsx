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

  /** Specifies if the modal can be closed by clicking outside of it */
  @Prop() outsideClickClose?: boolean = true;

  /** Specifies the position of the modal */
  @Prop() position?: 'center' | 'top' | 'bottom' = 'center';

  /** Specifies whether to show the close icon button at the top right of modal */
  @Prop() showCornerCloseButton?: boolean = true;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-modal'];

    const propClasses = convertPropsToClasses({
      position: this.position,
    });

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
            {this.showCornerCloseButton && (
              <form method="dialog">
                {/* TODO: try to use modus-wc-button instead */}
                <button class="modus-wc-btn modus-wc-btn-sm modus-wc-btn-circle modus-wc-btn-ghost modus-wc-absolute modus-wc-right-2 modus-wc-top-2">
                  ✕
                </button>
              </form>
            )}
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
          {this.outsideClickClose && (
            <form method="dialog" class="modus-wc-modal-backdrop">
              <button>close</button>
            </form>
          )}
        </dialog>
      </Host>
    );
  }
}
