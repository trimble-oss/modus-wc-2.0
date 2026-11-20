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
 * The browser traps focus inside the dialog and restores the element focused before
 * `showModal()` when the dialog closes, including Escape (WCAG 2.4.3).
 * This component leaves that behavior to the browser. If your app needs a specific
 * return target, or the previously focused element is hidden or removed, use a
 * `close` listener on the inner dialog to focus a logical control, for example:
 * `dialog.addEventListener('close', () => returnTarget.focus())`.
 * If the dialog itself is removed, restore focus as part of that removal.
 *
 * When `aria-label` and `aria-labelledby` are omitted, the dialog name is the header
 * slot (WCAG 4.1.2). That reference stays on the header, so a title that appears
 * later is included without rendering the modal again. An `aria-label` or
 * `aria-labelledby` set on the modal is kept. Put the title in that slot. When the
 * slot also contains an icon or extra buttons, set `aria-label` or `aria-labelledby`
 * so the dialog name stays the title.
 */
@Component({
  tag: 'modus-wc-modal',
  styleUrl: 'modus-wc-modal.scss',
  shadow: false,
})
export class ModusWcModal {
  private headerTitleId = '';
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
    this.headerTitleId = this.allocateHeaderTitleId();
    this.el.setAttribute('data-modus-title-id', this.headerTitleId);
  }

  private closeDialog() {
    const dialog = this.el.querySelector('dialog');
    if (dialog) dialog.close();
  }

  private getClasses(): string {
    const classList = ['modus-wc-modal', 'moduswc:modal'];

    const propClasses = convertPropsToClasses({
      position: this.position,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  /**
   * Title ids are not derived from `modalId`. A second dialog whose id is
   * `{firstModalId}-header-title` would otherwise share an id with the first
   * title wrapper.
   */
  private allocateHeaderTitleId(): string {
    const root = this.el.getRootNode() as ParentNode;
    let candidate = '';
    let suffix = 0;
    do {
      suffix += 1;
      candidate = `modus-wc-modal-title-${suffix}`;
    } while (
      root.querySelector(
        `[id="${candidate}"], [data-modus-title-id="${candidate}"]`
      )
    );
    return candidate;
  }

  private authorNamedDialog(): boolean {
    return Boolean(
      this.inheritedAttributes['aria-label'] ||
      this.inheritedAttributes['aria-labelledby']
    );
  }

  render() {
    // Always reference the header when the author did not name the dialog.
    // The accessible name is read from that element, so text added after this
    // render (a slotted label, or a title loaded later) stays in sync.
    const dialogName = this.authorNamedDialog()
      ? {}
      : { 'aria-labelledby': this.headerTitleId };

    return (
      <Host>
        <dialog
          class={this.getClasses()}
          id={this.modalId}
          {...dialogName}
          {...this.inheritedAttributes}
        >
          <div
            class={`moduswc:modal-box modus-wc-modal-box ${this.fullscreen ? 'modus-wc-modal-fullscreen' : ''}`}
          >
            <div class="modus-wc-modal-header modus-wc-text-lg modus-wc-font-bold">
              <div class="modus-wc-modal-header-title" id={this.headerTitleId}>
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
            <div class="modus-wc-modal-content moduswc:py-4 modus-wc-py-4">
              <slot name="content" />
            </div>
            <div class="moduswc:modal-action modus-wc-modal-action">
              <slot name="footer" />
            </div>
          </div>
          {this.backdrop === 'default' && (
            <form
              method="dialog"
              class="moduswc:modal-backdrop modus-wc-modal-backdrop"
            >
              <button>close</button>
            </form>
          )}
        </dialog>
      </Host>
    );
  }
}
