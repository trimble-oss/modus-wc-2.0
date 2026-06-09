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
 * The sheet rests at one of three display modes: 'minimized' (only the handle peeks), 'default', and
 * 'expanded' (fills the page/iframe height). The drag handle steps the sheet one level at a time
 * (e.g. minimized -> default -> expanded); it never jumps two levels in a single gesture. Setting the
 * `displayMode` prop directly applies the value immediately. The selected `displayMode` is preserved
 * while the sheet is hidden, so reopening restores the same mode. Smaller drags snap back to rest.
 */

/** The resting display mode of the bottom sheet. */
export type TBottomSheetDisplayMode = 'default' | 'expanded' | 'minimized';

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
  /** Set when the sheet opens so focus can move inside it after the next render. */
  private pendingFocus = false;
  /**
   * Ordered rungs used by drag/keyboard interactions. Stepping moves one rung at
   * a time so the sheet never jumps straight from minimized to expanded.
   */
  private static readonly DISPLAY_MODE_LADDER: TBottomSheetDisplayMode[] = [
    'minimized',
    'default',
    'expanded',
  ];

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the outer div. */
  @Prop() customClass?: string = '';

  /** Controls whether the bottom sheet is visible. */
  @Prop({ mutable: true }) visible?: boolean = false;

  /**
   * The resting display mode of the bottom sheet: 'minimized' (only the handle
   * peeks), 'default', or 'expanded' (fills the page/iframe height). This is the
   * single source of truth shared by drag/keyboard interactions and external
   * property changes, so both stay in sync. The value is preserved while the
   * sheet is hidden, so reopening restores the same mode.
   */
  @Prop({ mutable: true }) displayMode?: TBottomSheetDisplayMode = 'default';

  /** Fraction (0-1) of the sheet height it must be dragged, in either direction, before it steps one level. */
  @Prop() dragStepThreshold?: number = 0.4;

  /**
   * Configuration for the built-in header layout.
   * Do not set this prop if you intend to use the 'header' slot.
   */
  @Prop() header?: IBottomSheetHeader;

  /** Event emitted when the visibility of the bottom sheet changes. */
  @StencilEvent() sheetVisibilityChange!: EventEmitter<{ visible: boolean }>;

  /**
   * Event emitted when the display mode changes, whether from a drag/keyboard
   * interaction or from setting the `displayMode` prop. The new mode is in
   * `detail.displayMode`.
   */
  @StencilEvent() displayModeChange!: EventEmitter<{
    displayMode: TBottomSheetDisplayMode;
  }>;

  /** Event emitted when the header back button is clicked. Does not change sheet state. */
  @StencilEvent() headerBackClick!: EventEmitter<void>;

  /**
   * Event emitted when the header dismiss button is clicked.
   * The sheet is also closed automatically (`visible` is set to `false`).
   */
  @StencilEvent() headerCloseClick!: EventEmitter<void>;

  @State() private isDragging = false;
  @State() private dragOffset = 0;
  @State() private dragHeight: string | null = null;
  @State() private hasHeader = false;
  @State() private hasFooter = false;

  @Watch('visible')
  handleVisibleChange(isVisible: boolean) {
    // Keep a closed sheet out of the tab order / a11y tree.
    this.setInert(!isVisible);
    if (isVisible) {
      // WCAG 2.4.3 (Focus Order): opening a dialog must move focus inside it.
      // Defer to componentDidRender so the sheet is rendered (and no longer
      // inert/aria-hidden) before focus moves.
      this.pendingFocus = true;
    }
    // The display mode is intentionally preserved while hidden so reopening
    // restores the same mode. Emit here so both internal (setVisible) and
    // external (prop) changes notify consumers.
    this.sheetVisibilityChange.emit({ visible: isVisible });
  }

  @Watch('displayMode')
  handleDisplayModeChange(newValue: TBottomSheetDisplayMode) {
    // Fires for both interaction-driven (setDisplayMode) and property-driven changes.
    this.displayModeChange.emit({ displayMode: newValue });
  }

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    // A closed sheet must not be focusable or in the a11y tree (@Watch does not
    // fire on initial load, so the initial state is set here).
    this.setInert(!this.visible);
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
    if (!this.visible) return;
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

    // The same fraction-of-height threshold governs both directions. It is based
    // on the resting height captured at pointerdown (not the live height, which
    // grows during an upward drag) so up and down behave symmetrically.
    const stepThresholdPx = (this.dragStepThreshold ?? 0.4) * this.startHeight;

    if (delta > stepThresholdPx) {
      // Drag down steps down one level (expanded -> default -> minimized).
      // It never closes the sheet; closing is property/action driven only.
      this.stepDown();
    } else if (-delta > stepThresholdPx) {
      // Drag up steps up one level (minimized -> default -> expanded).
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
      this.setVisible(false);
    }
  };

  /** Step up one rung of the ladder: minimized -> default -> expanded. */
  private stepUp() {
    const ladder = ModusWcBottomSheet.DISPLAY_MODE_LADDER;
    const index = ladder.indexOf(this.displayMode ?? 'default');
    this.setDisplayMode(ladder[Math.min(index + 1, ladder.length - 1)]);
  }

  /** Step down one rung of the ladder: expanded -> default -> minimized (never closes). */
  private stepDown() {
    const ladder = ModusWcBottomSheet.DISPLAY_MODE_LADDER;
    const index = ladder.indexOf(this.displayMode ?? 'default');
    this.setDisplayMode(ladder[Math.max(index - 1, 0)]);
  }

  private setVisible(value: boolean) {
    if (this.visible === value) return;
    // Assigning `visible` runs the @Watch('visible') handler, which emits
    // sheetVisibilityChange (so it fires for both internal and external changes).
    this.visible = value;
  }

  private setDisplayMode(value: TBottomSheetDisplayMode) {
    if (this.displayMode === value) return;
    this.displayMode = value;
    // @Watch('displayMode') emits displayModeChange.
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-bottom-sheet'];

    if (this.displayMode === 'expanded')
      classList.push('modus-wc-bottom-sheet-expanded');
    if (this.displayMode === 'minimized')
      classList.push('modus-wc-bottom-sheet-minimized');
    if (this.isDragging) classList.push('modus-wc-bottom-sheet-dragging');
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getTransform(): string {
    if (!this.visible) return 'translate(-50%, 100%)';
    if (this.dragOffset > 0) return `translate(-50%, ${this.dragOffset}px)`;
    return 'translate(-50%, 0)';
  }

  private getPanelHeight(): string {
    if (this.isDragging && this.dragHeight) return this.dragHeight;
    return this.displayMode === 'expanded' ? '95dvh' : 'auto';
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
    this.setVisible(false);
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
        aria-hidden={(!this.visible).toString()}
        aria-modal={this.visible ? 'true' : undefined}
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
