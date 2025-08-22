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

@Component({
  tag: 'modus-wc-utility-panel',
  styleUrl: 'modus-wc-utility-panel.scss',
  shadow: true,
})
export class ModusWcUtilityPanel {
  /** The panel is expanded or closed */
  @Prop() expanded = false;

  /** Determines if the panel pushes content or displays an overlay. */
  @Prop() pushContent = false;

  /** Target content selector to adjust margin when panel is open */
  @Prop() targetContent?: string;

  /** An event that fires when the panel is opened. */
  @Event() panelOpened!: EventEmitter<void>;

  /** An event that fires when the panel is closed. */
  @Event() panelClosed!: EventEmitter<void>;

  @Element() el!: HTMLElement;

  private isInitialLoad = true;

  componentWillLoad() {
    // Set initial load flag will be cleared after first render
  }

  componentDidLoad() {
    // Only adjust content if panel is already expanded on load
    if (this.pushContent && this.expanded) {
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
    if (!this.targetContent || !this.pushContent) return;

    const content = document.querySelector(this.targetContent) as HTMLElement;

    if (content) {
      // Match the panel transition timing exactly
      content.style.transition = 'margin-inline-end 0.3s ease-out';

      if (this.expanded) {
        // Get the panel width from CSS variable
        const panelWidth = getComputedStyle(this.el).getPropertyValue(
          '--modus-wc-utility-panel-width'
        );
        content.style.marginInlineEnd = panelWidth || '312px'; // fallback to 312px if CSS variable is not found
      } else {
        content.style.marginInlineEnd = '0';
      }
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
        <div class="panel-content">
          {hasHeader && (
            <Fragment>
              <div class="panel-header">
                <slot name="header"></slot>
              </div>
              <hr />
            </Fragment>
          )}

          <div class="panel-body">
            <slot name="body"></slot>
          </div>

          {hasFooter && (
            <Fragment>
              <hr />
              <div class="panel-footer">
                <slot name="footer"></slot>
              </div>
            </Fragment>
          )}
        </div>
      </div>
    );
  }
}
