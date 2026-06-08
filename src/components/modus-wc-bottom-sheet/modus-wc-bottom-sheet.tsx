import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable bottom sheet component used to display content in a dialog.
 *
 * This component supports 'header', 'content', and 'footer' `<slot>` elements for inserting custom HTML.
 * Alternatively, set the `header` prop for the built-in header layout. Do not set `header` if you use the
 * 'header' slot.
 *
 * The drag handle lets the user drag the sheet down to step it down a level (past the
 * step-down threshold) or drag it up to expand it to fill the page/iframe height. Smaller
 * drags snap back to rest.
 */

export interface IBottomSheetHeader {
  /** Whether to show the back button. */
  showBackButton?: boolean;
  /** The title of the header. */
  title?: string;
  /** The subtitle of the header. */
  subtitle?: string;
  /** Whether to show the dismiss button. Clicking it closes the bottom sheet. */
  showCloseButton?: boolean;
}

@Component({
  tag: 'modus-wc-bottom-sheet',
  styleUrl: 'modus-wc-bottom-sheet.scss',
  shadow: false,
})
export class ModusWcBottomSheet {
  private inheritedAttributes: Attributes = {};
  private startY = 0;
  private startHeight = 0;
  private currentDelta = 0;
  /** Pixels the sheet must be dragged up before it expands to full height. */
  private readonly expandThresholdPx = 64;
  /** Set when the sheet opens so focus can move inside it after the next render. */
  private pendingFocus = false;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the outer div. */
  @Prop() customClass?: string = '';

  /** Controls whether the bottom sheet is visible. */
  @Prop({ mutable: true }) open?: boolean = false;

  /** Controls whether the bottom sheet is expanded to fill the page/iframe height. */
  @Prop({ mutable: true }) expanded?: boolean = false;

  /**
   * Controls whether the bottom sheet is minimized to a peek state where only the
   * handle is visible at the bottom and the content is hidden.
   */
  @Prop({ mutable: true }) minimized?: boolean = false;

  /** Fraction (0-1) of the sheet height it must be dragged down before it steps down a level. */
  @Prop() stepDownThreshold?: number = 0.4;

  /**
   * Configuration for the built-in header layout.
   * Do not set this prop if you intend to use the 'header' slot.
   */
  @Prop() header?: IBottomSheetHeader;

  /** Event emitted when the open prop is internally changed. */
  @StencilEvent() openChange!: EventEmitter<{ open: boolean }>;

  /** Event emitted when the expanded prop is internally changed. */
  @StencilEvent() expandedChange!: EventEmitter<{ expanded: boolean }>;

  /** Event emitted when the minimized prop is internally changed. */
  @StencilEvent() minimizedChange!: EventEmitter<{ minimized: boolean }>;

  /** Event emitted when the header back button is clicked. Does not change sheet state. */
  @StencilEvent() headerBackClick!: EventEmitter<void>;

  /**
   * Event emitted when the header dismiss button is clicked.
   * The sheet is also closed automatically (`open` is set to `false`).
   */
  @StencilEvent() headerCloseClick!: EventEmitter<void>;

  @State() private isDragging = false;
  @State() private dragOffset = 0;
  @State() private dragHeight: string | null = null;
  @State() private hasHeader = false;
  @State() private hasFooter = false;

  @Watch('open')
  handleOpenChange(isOpen: boolean) {
    // Keep a closed sheet out of the tab order / a11y tree.
    this.setInert(!isOpen);
    if (isOpen) {
      // WCAG 2.4.3 (Focus Order): opening a dialog must move focus inside it.
      // Defer to componentDidRender so the sheet is rendered (and no longer
      // inert/aria-hidden) before focus moves.
      this.pendingFocus = true;
    } else {
      // Enforce the invariant that a closed sheet is neither expanded nor
      // minimized, even when `open` is toggled externally (bypassing setOpen).
      // Route through the setters so @Watch handlers emit expandedChange /
      // minimizedChange and consumers mirroring state stay in sync.
      this.setExpanded(false);
      this.setMinimized(false);
    }
  }

  @Watch('expanded')
  handleExpandedChange(newValue: boolean) {
    // Expanded and minimized are mutually exclusive; clear the sibling via its
    // setter so minimizedChange is emitted if it actually changes.
    if (newValue && this.minimized) {
      this.setMinimized(false);
    }
    this.expandedChange.emit({ expanded: newValue });
  }

  @Watch('minimized')
  handleMinimizedChange(newValue: boolean) {
    // Clear the sibling via its setter so expandedChange is emitted if it changes.
    if (newValue && this.expanded) {
      this.setExpanded(false);
    }
    this.minimizedChange.emit({ minimized: newValue });
  }

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    // A closed sheet must not be focusable or in the a11y tree (@Watch does not
    // fire on initial load, so the initial state is set here).
    this.setInert(!this.open);
    // Captured before first render: the host's direct children are still the
    // consumer-provided slotted nodes (Stencil relocates them into the panel
    // once rendered, so this must run here).
    const children = Array.from(this.el.children);
    this.hasHeader = children.some((c) => c.getAttribute('slot') === 'header');
    this.hasFooter = children.some((c) => c.getAttribute('slot') === 'footer');
  }

  componentDidRender() {
    if (this.pendingFocus) {
      this.pendingFocus = false;
      // The host carries role="dialog" and an accessible name, so assistive
      // technology announces the sheet when focus lands on it.
      this.el.focus();
    }
  }

  /** Toggle the `inert` attribute on the host so closed sheets cannot be focused. */
  private setInert(inert: boolean) {
    if (inert) {
      this.el.setAttribute('inert', '');
    } else {
      this.el.removeAttribute('inert');
    }
  }

  disconnectedCallback() {
    // The handle's pointerdown/keydown listeners are bound in JSX, so Stencil
    // tears them down automatically. Only the document-level drag listeners
    // (added in onPointerDown) need manual cleanup in case of a mid-drag teardown.
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
    // Reset the global grab cursor if the sheet is torn down mid-drag
    // (onPointerUp, which normally clears it, will never fire).
    if (this.isDragging) {
      document.body.style.cursor = '';
    }
  }

  private readonly onPointerDown = (e: PointerEvent) => {
    if (!this.open) return;
    e.preventDefault();
    this.isDragging = true;
    this.startY = e.clientY;
    this.currentDelta = 0;
    // The panel is always rendered, so the reference is non-null.
    this.startHeight =
      this.el.querySelector<HTMLElement>('.modus-wc-panel')!.offsetHeight;
    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
  };

  private readonly onPointerMove = (e: PointerEvent) => {
    e.preventDefault();
    // Keep the grab cursor while dragging (re-asserted after the handle's own mousedown).
    document.body.style.cursor = 'grabbing';
    this.currentDelta = e.clientY - this.startY;

    if (this.currentDelta >= 0) {
      // Dragging downward: the whole sheet follows the pointer.
      this.dragOffset = this.currentDelta;
      this.dragHeight = null;
    } else {
      // Dragging upward: grow the sheet height live to preview the expand,
      // clamped to the viewport height.
      this.dragOffset = 0;
      const grown = this.startHeight - this.currentDelta;
      this.dragHeight = `${Math.min(grown, window.innerHeight)}px`;
    }
  };

  private readonly onPointerUp = () => {
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
    document.body.style.cursor = '';

    const delta = this.currentDelta;
    this.isDragging = false;
    this.dragOffset = 0;
    this.dragHeight = null;

    if (delta > 0) {
      // The panel is always rendered, so the reference is non-null.
      const panel = this.el.querySelector<HTMLElement>('.modus-wc-panel')!;
      const stepDownPx = (this.stepDownThreshold ?? 0.4) * panel.offsetHeight;

      // Drag down steps down one level (expanded -> open -> minimized).
      // It never closes the sheet; closing is property/action driven only.
      if (delta > stepDownPx) {
        this.stepDown();
      }
    } else if (-delta > this.expandThresholdPx) {
      // Drag up steps up one level (minimized -> open -> expanded).
      this.stepUp();
    }
  };

  private readonly onHandleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.stepUp();
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      this.stepDown();
    } else if (e.key === 'Escape') {
      e.preventDefault();
      this.setOpen(false);
    }
  };

  /** Step up one level: minimized -> open -> expanded. */
  private stepUp() {
    if (this.minimized) {
      this.setMinimized(false);
    } else if (!this.expanded) {
      this.setExpanded(true);
    }
  }

  /** Step down one level: expanded -> open -> minimized (never closes). */
  private stepDown() {
    if (this.expanded) {
      this.setExpanded(false);
    } else if (!this.minimized) {
      this.setMinimized(true);
    }
  }

  private setOpen(value: boolean) {
    if (this.open === value) return;
    // Assigning `open` runs the @Watch('open') handler, which resets and emits
    // the expanded/minimized siblings when closing (so they stay in sync for
    // both internal and external `open` changes).
    this.open = value;
    this.openChange.emit({ open: value });
  }

  private setExpanded(value: boolean) {
    if (this.expanded === value) return;
    this.expanded = value;
    // @Watch('expanded') emits expandedChange and clears minimized when needed.
  }

  private setMinimized(value: boolean) {
    if (this.minimized === value) return;
    this.minimized = value;
    // @Watch('minimized') emits minimizedChange and clears expanded when needed.
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-bottom-sheet'];

    if (this.expanded) classList.push('modus-wc-bottom-sheet-expanded');
    if (this.minimized) classList.push('modus-wc-bottom-sheet-minimized');
    if (this.isDragging) classList.push('modus-wc-bottom-sheet-dragging');
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getTransform(): string {
    if (!this.open) return 'translate(-50%, 100%)';
    if (this.dragOffset > 0) return `translate(-50%, ${this.dragOffset}px)`;
    return 'translate(-50%, 0)';
  }

  private getPanelHeight(): string {
    if (this.isDragging && this.dragHeight) return this.dragHeight;
    if (this.minimized) return 'auto';
    if (this.expanded) return '95dvh';
    return 'auto';
  }

  private hasDefaultHeader(): boolean {
    if (!this.header) return false;

    const { title, subtitle, showBackButton, showCloseButton } = this.header;

    return !!(title || subtitle || showBackButton || showCloseButton);
  }

  private shouldRenderHeader(): boolean {
    return this.hasHeader || this.hasDefaultHeader();
  }

  private readonly onHeaderBackClick = () => {
    this.headerBackClick.emit();
  };

  private readonly onHeaderCloseClick = () => {
    this.setOpen(false);
    this.headerCloseClick.emit();
  };

  private renderDefaultHeader(header: IBottomSheetHeader) {
    return (
      <div class="modus-wc-bottom-sheet-header-top">
        <div class="modus-wc-bottom-sheet-header-start">
          {header.showBackButton && (
            <modus-wc-button
              aria-label="Back"
              color="tertiary"
              onButtonClick={this.onHeaderBackClick}
              shape="square"
              size="sm"
              variant="borderless"
            >
              <modus-wc-icon
                name="chevron_left"
                decorative
                size="xs"
              ></modus-wc-icon>
            </modus-wc-button>
          )}
          {(header.title || header.subtitle) && (
            <div>
              {header.title && (
                <modus-wc-typography
                  customClass="modus-wc-bottom-sheet-header-title"
                  hierarchy="h2"
                  size="md"
                  weight="semibold"
                  label={header.title}
                ></modus-wc-typography>
              )}
              {header.subtitle && (
                <modus-wc-typography
                  hierarchy="p"
                  size="sm"
                  label={header.subtitle}
                ></modus-wc-typography>
              )}
            </div>
          )}
        </div>
        {header.showCloseButton && (
          <modus-wc-button
            aria-label="Close"
            color="tertiary"
            onButtonClick={this.onHeaderCloseClick}
            shape="square"
            size="sm"
            variant="borderless"
          >
            <modus-wc-icon name="close" decorative size="xs"></modus-wc-icon>
          </modus-wc-button>
        )}
      </div>
    );
  }

  render() {
    return (
      <Host
        {...this.inheritedAttributes}
        class={this.getClasses()}
        role="dialog"
        tabIndex={-1}
        aria-hidden={(!this.open).toString()}
        aria-modal={this.open ? 'true' : undefined}
        style={{
          transform: this.getTransform(),
          transition: this.isDragging ? 'none' : undefined,
        }}
      >
        <modus-wc-panel width="100%" height={this.getPanelHeight()}>
          <modus-wc-handle
            slot="header"
            customClass="modus-wc-bottom-sheet-handle"
            density="comfortable"
            orientation="vertical"
            size="default"
            type="bar"
            onPointerDown={this.onPointerDown}
            onKeyDown={this.onHandleKeyDown}
          />

          {this.shouldRenderHeader() && (
            <div class="modus-wc-bottom-sheet-header" slot="header">
              {this.hasHeader ? (
                <slot name="header"></slot>
              ) : (
                this.renderDefaultHeader(this.header!)
              )}
            </div>
          )}

          <div class="modus-wc-bottom-sheet-content" slot="body">
            <slot name="content"></slot>
          </div>

          {this.hasFooter && (
            <div class="modus-wc-bottom-sheet-footer" slot="footer">
              <slot name="footer"></slot>
            </div>
          )}
        </modus-wc-panel>
      </Host>
    );
  }
}
