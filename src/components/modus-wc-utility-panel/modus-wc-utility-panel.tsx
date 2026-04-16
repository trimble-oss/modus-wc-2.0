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
  /** The panel is expanded or closed */
  @Prop() expanded = false;

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

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);
  }

  componentDidLoad() {
    // Only adjust content if panel is already expanded on load and we have a target
    if (this.pushContent && this.expanded && this.targetElement) {
      this.adjustContent();
    }

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

  @Watch('targetElement')
  handleTargetChange() {
    // Re-adjust content when target changes
    if (this.expanded && this.pushContent && this.targetElement) {
      this.adjustContent();
    }
  }

  openPanel(): void {
    this.panelOpened.emit();
    if (this.pushContent) {
      this.adjustContent();
    }
  }

  closePanel(): void {
    this.panelClosed.emit();
    if (this.pushContent) {
      this.adjustContent();
    }
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

  handlePanelClose = () => {
    void this.closePanel();
  };

  hasSlotContent(slotName: string): boolean {
    const slot = this.el.querySelector(`[slot="${slotName}"]`);
    return !!slot;
  }

  render() {
    const hasHeader = this.hasSlotContent('header');
    const hasFooter = this.hasSlotContent('footer');
    return (
      <div
        class={{
          'modus-wc-utility-panel': true,
          open: this.expanded,
        }}
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
    );
  }
}
