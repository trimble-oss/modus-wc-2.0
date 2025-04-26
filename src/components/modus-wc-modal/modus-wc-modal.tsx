import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-modal.tailwind';
import { CollapseSolidIcon } from '../../icons/collapse-solid.icon';
import { ExpandSolidIcon } from '../../icons/expand-solid.icon';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable modal component used to display content in a dialog.
 *
 * The component supports a 'header', 'content', and 'footer' <slot> for injecting custom HTML.
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

  /**
   * The modal's backdrop.
   * Specify 'static' for a backdrop that doesn't close the modal when clicked outside the modal content.
   */
  @Prop() backdrop?: 'default' | 'static' = 'default';

  /** Custom CSS class to apply */
  @Prop() customClass?: string = '';

  /** Specifies whether the modal should be displayed full-screen */
  @Prop() fullscreen?: boolean = false;

  /** The ID of the inner dialog element */
  @Prop() modalId!: string;

  /** Specifies the position of the modal */
  @Prop() position?: 'bottom' | 'center' | 'top' = 'center';

  /** Specifies whether to show the close icon button at the top right of modal */
  @Prop() showClose?: boolean = true;

  /** Specifies whether to show the fullscreen toggle icon button */
  @Prop() showFullscreenToggle?: boolean = false;

  componentWillLoad() {
    if (!this.modalId) {
      console.error(
        "The modal component requires a unique 'modalId' to be passed in as a prop."
      );
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private closeDialog() {
    const dialog = this.el.querySelector('dialog');
    if (dialog) dialog.close();
  }

  private getClasses(): string {
    const classList = ['modus:modal'];

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
          <div
            class={`modus:modal-box ${this.fullscreen ? 'modus:modal-fullscreen' : ''}`}
          >
            <div class="modus:modal-top-icon-buttons">
              {this.showFullscreenToggle && (
                <button
                  onClick={() => (this.fullscreen = !this.fullscreen)}
                  class="modus:btn modus:btn-sm modus:btn-circle modus:btn-ghost modus:modal-expand-icon-btn"
                >
                  {this.fullscreen ? (
                    <CollapseSolidIcon />
                  ) : (
                    <ExpandSolidIcon />
                  )}
                </button>
              )}
              {this.showClose && (
                <button
                  aria-label="Close modal"
                  onClick={() => this.closeDialog()}
                  class=" modus:btn modus:btn-sm modus:btn-circle modus:btn-ghost modus:modal-close-icon-btn"
                >
                  ✕
                </button>
              )}
            </div>
            <div class="modus:modal-header modus:text-lg modus:font-bold">
              <slot name="header" />
            </div>
            <div class="modus:modal-content modus:py-4">
              <slot name="content" />
            </div>
            <div class="modus:modal-action">
              <slot name="footer" />
            </div>
          </div>
          {this.backdrop === 'default' && (
            <form method="dialog" class="modus:modal-backdrop">
              <button>close</button>
            </form>
          )}
        </dialog>
      </Host>
    );
  }
}
