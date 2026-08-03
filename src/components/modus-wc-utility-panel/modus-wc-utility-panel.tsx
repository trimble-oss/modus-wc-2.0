import {
  Component,
  Element,
  Event,
  EventEmitter,
  Fragment,
  h,
  Prop,
  Watch,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';

@Component({
  tag: 'modus-wc-utility-panel',
  styleUrl: 'modus-wc-utility-panel.scss',
  shadow: false,
})
export class ModusWcUtilityPanel {
  /**
   * When true, dims the area behind the panel while it is expanded.
   * If `targetElement` is set, the overlay is scoped to that element only;
   * otherwise it covers the full viewport.
   */
  @Prop() backgroundOverlay = false;

  /** Whether the panel should collapse when clicking outside of it. */
  @Prop() collapseOnClickOutside = false;

  /** Custom CSS class to apply to the outer div. */
  @Prop() customClass?: string = '';

  /** The panel is expanded or closed */
  @Prop({ mutable: true }) expanded = false;

  /** Determines if the panel pushes content or displays an overlay. */
  @Prop() pushContent = false;

  /** Target element reference to push content when panel opens */
  @Prop() targetElement?: HTMLElement;

  /** An event that fires when the panel is opened. */
  @Event() panelOpened!: EventEmitter<void>;

  /** An event that fires when the panel is closed. */
  @Event() panelClosed!: EventEmitter<void>;

  @Element() el!: HTMLElement;

  private isInitialLoad = true;
  private panelRef?: HTMLElement;
  private overlayTarget?: HTMLElement;

  connectedCallback() {
    document.addEventListener('keydown', this.handleKeyDown);
    if (this.collapseOnClickOutside) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  disconnectedCallback() {
    document.removeEventListener('keydown', this.handleKeyDown);
    document.removeEventListener('click', this.handleClickOutside, true);
    this.clearTargetOverlay();
  }

  componentWillLoad() {
    // Inject full CSS bundle (including per-component SCSS) for slotted children
    handleShadowDOMStyles(this.el, true);
  }

  componentDidLoad() {
    // Only adjust content if panel is already expanded on load and we have a target
    if (this.pushContent && this.expanded && this.targetElement) {
      this.adjustContent();
    }
    this.syncBackgroundOverlay();

    // Mark that initial load is complete after adjusting content
    this.isInitialLoad = false;
  }

  @Watch('expanded')
  handleExpandedChange(newValue: boolean) {
    // Skip the watcher on initial load
    if (this.isInitialLoad) {
      return;
    }

    if (newValue) {
      void this.openPanel();
    } else {
      void this.closePanel();
    }
  }

  @Watch('backgroundOverlay')
  handleBackgroundOverlayChange() {
    this.syncBackgroundOverlay();
  }

  @Watch('collapseOnClickOutside')
  handleCollapseOnClickOutsideChange(enabled: boolean) {
    if (enabled) {
      document.addEventListener('click', this.handleClickOutside, true);
    } else {
      document.removeEventListener('click', this.handleClickOutside, true);
    }
  }

  @Watch('targetElement')
  handleTargetChange() {
    // Re-adjust content when target changes
    if (this.expanded && this.pushContent && this.targetElement) {
      this.adjustContent();
    }
    this.syncBackgroundOverlay();
  }

  openPanel(): void {
    this.panelOpened.emit();
    if (this.pushContent) {
      this.adjustContent();
    }
    this.syncBackgroundOverlay();
  }

  closePanel(): void {
    this.panelClosed.emit();
    if (this.pushContent) {
      this.adjustContent();
    }
    this.syncBackgroundOverlay();
  }

  adjustContent() {
    if (!this.pushContent || !this.targetElement) return;

    // Add base class for transitions
    this.targetElement.classList.add('modus-wc-utility-panel-push-target');

    // Toggle pushed class based on expanded state
    if (this.expanded) {
      this.targetElement.classList.add('modus-wc-utility-panel-pushed');
    } else {
      this.targetElement.classList.remove('modus-wc-utility-panel-pushed');
    }
  }

  /**
   * When a targetElement is set, mount the backdrop inside that element so the
   * dim only covers the target (e.g. main content, not a sibling navbar).
   * Without a target, the host renders a fixed full-viewport backdrop.
   */
  syncBackgroundOverlay() {
    const shouldShowOnTarget =
      this.backgroundOverlay && this.expanded && !!this.targetElement;

    if (!shouldShowOnTarget) {
      this.clearTargetOverlay();
      return;
    }

    if (this.overlayTarget && this.overlayTarget !== this.targetElement) {
      this.clearTargetOverlay();
    }

    this.applyTargetOverlay(this.targetElement as HTMLElement);
  }

  private applyTargetOverlay(target: HTMLElement) {
    target.classList.add('modus-wc-utility-panel-overlay-target');

    const existing = Array.from(target.children).find((child) =>
      child.classList.contains('modus-wc-utility-panel-backdrop')
    ) as HTMLElement | undefined;

    if (!existing) {
      const backdrop = document.createElement('div');
      backdrop.className = 'modus-wc-utility-panel-backdrop';
      backdrop.setAttribute('aria-hidden', 'true');
      target.appendChild(backdrop);
    }

    this.overlayTarget = target;
  }

  private clearTargetOverlay() {
    if (!this.overlayTarget) return;

    this.overlayTarget.classList.remove(
      'modus-wc-utility-panel-overlay-target'
    );

    const backdrop = Array.from(this.overlayTarget.children).find((child) =>
      child.classList.contains('modus-wc-utility-panel-backdrop')
    );
    backdrop?.remove();

    this.overlayTarget = undefined;
  }

  private handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape' && this.expanded) {
      event.preventDefault();
      this.expanded = false;
    }
  };

  private handleClickOutside = (event: MouseEvent) => {
    if (!this.expanded || !this.collapseOnClickOutside || !this.panelRef) {
      return;
    }

    const path = event.composedPath ? event.composedPath() : [event.target];
    // Close when the click is outside the panel content (backdrop counts as outside)
    if (!path.includes(this.panelRef)) {
      this.expanded = false;
    }
  };

  handlePanelClose = () => {
    this.expanded = false;
  };

  hasSlotContent(slotName: string): boolean {
    const slot = this.el.querySelector(`[slot="${slotName}"]`);
    return !!slot;
  }

  render() {
    const hasHeader = this.hasSlotContent('header');
    const hasFooter = this.hasSlotContent('footer');
    // Host-level backdrop only when there is no targetElement to scope to
    const showHostBackdrop =
      this.backgroundOverlay && this.expanded && !this.targetElement;
    return (
      <Fragment>
        {showHostBackdrop && (
          <div aria-hidden="true" class="modus-wc-utility-panel-backdrop"></div>
        )}
        <div
          class={{
            'modus-wc-utility-panel': true,
            open: this.expanded,
            [this.customClass as string]: !!this.customClass,
          }}
          ref={(el) => (this.panelRef = el)}
        >
          <div class="modus-wc-utility-panel-content">
            {hasHeader && (
              <Fragment>
                <div class="modus-wc-utility-panel-header">
                  <slot name="header"></slot>
                </div>
                <hr />
              </Fragment>
            )}

            <div class="modus-wc-utility-panel-body">
              <slot name="body"></slot>
            </div>

            {hasFooter && (
              <Fragment>
                <hr />
                <div class="modus-wc-utility-panel-footer">
                  <slot name="footer"></slot>
                </div>
              </Fragment>
            )}
          </div>
        </div>
      </Fragment>
    );
  }
}
