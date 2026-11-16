import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-modal.tailwind';
import { CloseSolidIcon } from '../../icons/close-solid.icon';
import { CollapseSolidIcon } from '../../icons/collapse-solid.icon';
import { ExpandSolidIcon } from '../../icons/expand-solid.icon';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable modal component used to display content in a dialog.
 *
 * This component supports 'header', 'content', and 'footer' `<slot>` elements for inserting custom HTML.
 *
 * Open the inner dialog with `showModal()` on the element identified by `modal-id`.
 * The browser traps focus inside the dialog and returns focus to the control that called
 * `showModal()` when the dialog closes, including when the user presses Escape
 * (WCAG 2.4.3). This component leaves that behavior to the browser. When the dialog
 * is closed by removing it from the page, or by calling `close()` after the opening
 * control is gone, move focus back to a logical control yourself.
 *
 * When `aria-label` and `aria-labelledby` are omitted, the dialog name is the header
 * slot (WCAG 4.1.2). An `aria-label` or `aria-labelledby` set on the modal is kept.
 * Put the title in that slot. When the slot also contains an icon or extra buttons,
 * set `aria-label` or `aria-labelledby` so the dialog name stays the title.
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
    handleShadowDOMStyles(this.el, true);
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
    const classList = ['modus-wc-modal'];

    const propClasses = convertPropsToClasses({
      position: this.position,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private authorNamedDialog(): boolean {
    return Boolean(
      this.inheritedAttributes['aria-label'] ||
      this.inheritedAttributes['aria-labelledby']
    );
  }

  private headerHasTitle(): boolean {
    return Array.from(this.el.querySelectorAll('[slot="header"]')).some(
      (node) => Boolean(node.textContent?.trim())
    );
  }

  render() {
    const headerTitleId = `${this.modalId || 'modus-wc-modal'}-header-title`;
    const dialogName =
      !this.authorNamedDialog() && this.headerHasTitle()
        ? { 'aria-labelledby': headerTitleId }
        : {};

    return (
      <Host>
        <dialog
          class={this.getClasses()}
          id={this.modalId}
          {...dialogName}
          {...this.inheritedAttributes}
        >
          <div
            class={`modus-wc-modal-box ${this.fullscreen ? 'modus-wc-modal-fullscreen' : ''}`}
          >
            <div class="modus-wc-modal-header modus-wc-text-lg modus-wc-font-bold">
              <div class="modus-wc-modal-header-title" id={headerTitleId}>
                <slot name="header" />
              </div>
              <div class="modus-wc-modal-top-icon-buttons">
                {this.showFullscreenToggle && (
                  <modus-wc-button
                    aria-label="Fullscreen toggle"
                    color="tertiary"
                    onButtonClick={() => (this.fullscreen = !this.fullscreen)}
                    shape="square"
                    size="sm"
                    variant="borderless"
                  >
                    {this.fullscreen ? (
                      <CollapseSolidIcon />
                    ) : (
                      <ExpandSolidIcon />
                    )}
                  </modus-wc-button>
                )}
                {this.showClose && (
                  <modus-wc-button
                    aria-label="Close modal"
                    color="tertiary"
                    onButtonClick={() => this.closeDialog()}
                    shape="square"
                    size="sm"
                    variant="borderless"
                  >
                    <CloseSolidIcon />
                  </modus-wc-button>
                )}
              </div>
            </div>
            <div class="modus-wc-modal-content modus-wc-py-4">
              <slot name="content" />
            </div>
            <div class="modus-wc-modal-action">
              <slot name="footer" />
            </div>
          </div>
          {this.backdrop === 'default' && (
            <form method="dialog" class="modus-wc-modal-backdrop">
              <button>close</button>
            </form>
          )}
        </dialog>
      </Host>
    );
  }
}
