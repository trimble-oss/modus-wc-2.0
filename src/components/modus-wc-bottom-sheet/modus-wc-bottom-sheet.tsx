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
 * `displayMode` prop directly applies the value immediately. Drag/keyboard interactions change the
 * live mode but do not overwrite the `displayMode` prop, so reopening the sheet always restores the
 * mode set via that prop. Smaller drags snap back to rest.
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
   * The mode requested via the `displayMode` prop (as opposed to a drag/keyboard
   * interaction). Reopening the sheet restores this value so the property always
   * wins, discarding any live mode an earlier interaction left behind.
   */
  private propDisplayMode: TBottomSheetDisplayMode = 'default';
  /**
   * True only while an interaction (drag/keyboard) writes `displayMode`, so the
   * watch can tell interaction-driven changes apart from property changes.
   */
  private isInteractionChange = false;
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

  /** Resting display mode: 'minimized', 'default', or 'expanded'. Drag/keyboard interactions do not overwrite this prop. */
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
  @State() private isDraggingUp = false;
  @State() private dragHeight: string | null = null;
  @State() private hasHeader = false;
  @State() private hasFooter = false;

  @Watch('visible')
  handleVisibleChange(isVisible: boolean) {
    // Keep a closed sheet out of the tab order / a11y tree.
    this.setInert(!isVisible);
    if (isVisible) {
      // Reopening must follow the `displayMode` property, discarding any live
      // mode an earlier drag/keyboard interaction left behind on the last open.
      if ((this.displayMode ?? 'default') !== this.propDisplayMode) {
        this.displayMode = this.propDisplayMode;
      }
      // WCAG 2.4.3 (Focus Order): opening a dialog must move focus inside it.
      // Defer to componentDidRender so the sheet is rendered (and no longer
      // inert/aria-hidden) before focus moves.
      this.pendingFocus = true;
    }
    // Emit here so both internal (setVisible) and external (prop) changes notify consumers.
    this.sheetVisibilityChange.emit({ visible: isVisible });
  }

  @Watch('displayMode')
  handleDisplayModeChange(newValue: TBottomSheetDisplayMode) {
    // A property-driven change (not a drag/keyboard interaction) becomes the
    // mode that is restored on the next reopen.
    if (!this.isInteractionChange) {
      this.propDisplayMode = newValue ?? 'default';
    }
    // Only notify while the sheet is visible; mode changes made on a hidden sheet
    // are not user-facing, so they should not emit.
    if (this.visible) {
      this.displayModeChange.emit({ displayMode: newValue });
    }
  }

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    // A closed sheet must not be focusable or in the a11y tree (@Watch does not
    // fire on initial load, so the initial state is set here).
    this.setInert(!this.visible);
    // Remember the mode requested via the prop so reopening always restores it,
    // even if a drag/keyboard interaction changes the live mode in between.
    this.propDisplayMode = this.displayMode ?? 'default';
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
    this.startY = e.clientY;
    this.currentDelta = 0;
    this.isDraggingUp = false;
    // Measure before isDragging re-renders so minimized peek height is captured.
    this.startHeight =
      this.el.querySelector<HTMLElement>('.modus-wc-panel')!.offsetHeight;
    this.isDragging = true;
    // Lock minimized height on grab so the panel does not jump to `auto` before move.
    if (this.displayMode === 'minimized') {
      this.dragHeight = `${this.startHeight}px`;
    }
    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
  };

  private readonly onPointerMove = (e: PointerEvent) => {
    e.preventDefault();
    // Keep the grab cursor while dragging (re-asserted after the handle's own mousedown).
    document.body.style.cursor = 'grabbing';
    this.currentDelta = e.clientY - this.startY;
    this.isDraggingUp = this.currentDelta < 0;

    if (this.currentDelta >= 0) {
      // Dragging downward: shrink height in place (mirror of upward grow).
      const shrunk = this.startHeight - this.currentDelta;
      const minHeight = this.displayMode === 'minimized' ? this.startHeight : 0;
      this.dragHeight = `${Math.max(minHeight, shrunk)}px`;
    } else {
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
    this.isDraggingUp = false;
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
    // Mark this as interaction-driven so the watch does not adopt it as the new
    // property mode; the prop's mode is what gets restored when the sheet reopens.
    this.isInteractionChange = true;
    this.displayMode = value;
    this.isInteractionChange = false;
    // @Watch('displayMode') emits displayModeChange.
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-bottom-sheet'];

    if (this.displayMode === 'expanded')
      classList.push('modus-wc-bottom-sheet-expanded');
    // Suspend minimized chrome only while dragging upward so the expand preview
    // can show header/content/footer as height grows. Grabbing the handle alone
    // must not expand the sheet to default `auto` height.
    if (this.displayMode === 'minimized' && !this.isDraggingUp)
      classList.push('modus-wc-bottom-sheet-minimized');
    if (this.isDragging) classList.push('modus-wc-bottom-sheet-dragging');
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getTransform(): string {
    if (!this.visible) return 'translate(-50%, 100%)';
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
