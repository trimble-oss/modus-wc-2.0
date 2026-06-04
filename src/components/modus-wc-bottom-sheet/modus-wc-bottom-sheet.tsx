import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable bottom sheet component used to display content in a dialog.
 *
 * This component supports 'header', 'content', and 'footer' `<slot>` elements for inserting custom HTML.
 *
 * The drag handle lets the user drag the sheet down to dismiss it (past the dismiss threshold)
 * or drag it up to expand it to fill the page/iframe height. Smaller drags snap back to rest.
 */
@Component({
  tag: 'modus-wc-bottom-sheet',
  styleUrl: 'modus-wc-bottom-sheet.scss',
  shadow: false,
})
export class ModusWcBottomSheet {
  private inheritedAttributes: Attributes = {};
  private handleEl: HTMLElement | null = null;
  private startY = 0;
  private startHeight = 0;
  private currentDelta = 0;
  /** Pixels the sheet must be dragged up before it expands to full height. */
  private readonly expandThresholdPx = 64;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the outer div. */
  @Prop() customClass?: string = '';

  /** Height of the bottom sheet in pixels. */
  @Prop() height?: string = 'auto';

  /** Width of the bottom sheet in pixels. */
  @Prop() width?: string = '350px';

  /** Controls whether the bottom sheet is visible. */
  @Prop({ mutable: true }) open?: boolean = false;

  /** Controls whether the bottom sheet is expanded to fill the page/iframe height. */
  @Prop({ mutable: true }) expanded?: boolean = false;

  /** Fraction (0-1) of the sheet height it must be dragged down before it dismisses. */
  @Prop() dismissThreshold?: number = 0.4;

  /** Event emitted when the open prop is internally changed. */
  @StencilEvent() openChange!: EventEmitter<{ open: boolean }>;

  /** Event emitted when the expanded prop is internally changed. */
  @StencilEvent() expandedChange!: EventEmitter<{ expanded: boolean }>;

  /** Internal flag set while the handle is being dragged. */
  @State() isDragging = false;

  /** Live vertical drag offset in pixels (positive = dragged downward). */
  @State() dragOffset = 0;

  /** Live sheet height while dragging upward (previews the expand gesture). */
  @State() dragHeight: string | null = null;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.handleEl = this.el.querySelector('modus-wc-handle');
    // istanbul ignore next (handle is always rendered; null-guards are defensive)
    if (this.handleEl) {
      this.handleEl.addEventListener('pointerdown', this.onPointerDown);
      this.handleEl.addEventListener('keydown', this.onHandleKeyDown);
    }
  }

  disconnectedCallback() {
    // istanbul ignore next (handle is always rendered; null-guards are defensive)
    if (this.handleEl) {
      this.handleEl.removeEventListener('pointerdown', this.onPointerDown);
      this.handleEl.removeEventListener('keydown', this.onHandleKeyDown);
    }
    document.removeEventListener('pointermove', this.onPointerMove);
    document.removeEventListener('pointerup', this.onPointerUp);
  }

  private readonly onPointerDown = (e: PointerEvent) => {
    if (!this.open) return;
    e.preventDefault();
    this.isDragging = true;
    this.startY = e.clientY;
    this.currentDelta = 0;
    const panel = this.el.querySelector<HTMLElement>('.modus-wc-panel');
    // istanbul ignore next (defensive fallback; panel is always rendered)
    this.startHeight = panel?.offsetHeight ?? 0;
    document.addEventListener('pointermove', this.onPointerMove);
    document.addEventListener('pointerup', this.onPointerUp);
  };

  private readonly onPointerMove = (e: PointerEvent) => {
    // istanbul ignore next (guard; the listener is only attached while dragging)
    if (!this.isDragging) return;
    e.preventDefault();
    // Keep the grab cursor while dragging (re-asserted after the handle's own mousedown).
    document.body.style.cursor = 'grabbing';
    this.currentDelta = e.clientY - this.startY;

    if (this.currentDelta >= 0) {
      // Dragging downward: the whole sheet follows the pointer.
      this.dragOffset = this.currentDelta;
      this.dragHeight = null;
    } else {
      // Dragging upward: grow the sheet height live to preview the expand.
      this.dragOffset = 0;
      const grown = this.startHeight - this.currentDelta;
      // istanbul ignore next (defensive fallback; window.innerHeight is always set)
      const maxHeight = window.innerHeight || grown;
      this.dragHeight = `${Math.min(grown, maxHeight)}px`;
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
      const panel = this.el.querySelector<HTMLElement>('.modus-wc-panel');
      // istanbul ignore next (defensive fallbacks; panel and threshold are always set)
      const height = panel?.offsetHeight ?? 0;
      // istanbul ignore next (defensive fallback; dismissThreshold defaults to 0.4)
      const dismissPx = (this.dismissThreshold ?? 0.4) * height;

      if (delta > dismissPx) {
        if (this.expanded) {
          this.setExpanded(false);
        } else {
          this.setOpen(false);
        }
      }
    } else if (-delta > this.expandThresholdPx && !this.expanded) {
      this.setExpanded(true);
    }
  };

  private readonly onHandleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      this.setExpanded(true);
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (this.expanded) {
        this.setExpanded(false);
      } else {
        this.setOpen(false);
      }
    } else if (e.key === 'Escape') {
      e.preventDefault();
      this.setOpen(false);
    }
  };

  private setOpen(value: boolean) {
    if (this.open === value) return;
    this.open = value;
    if (!value) this.expanded = false;
    this.openChange.emit({ open: value });
  }

  private setExpanded(value: boolean) {
    if (this.expanded === value) return;
    this.expanded = value;
    this.expandedChange.emit({ expanded: value });
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-bottom-sheet'];

    if (this.expanded) classList.push('modus-wc-bottom-sheet-expanded');
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
    if (this.expanded) return '100dvh';
    // istanbul ignore next (defensive fallback; height defaults to 'auto')
    return this.height ?? 'auto';
  }

  render() {
    return (
      <Host
        {...this.inheritedAttributes}
        class={this.getClasses()}
        role="dialog"
        aria-hidden={(!this.open).toString()}
        style={{
          transform: this.getTransform(),
          transition: this.isDragging ? 'none' : undefined,
        }}
      >
        <modus-wc-panel width={this.width} height={this.getPanelHeight()}>
          <modus-wc-handle
            slot="header"
            customClass="modus-wc-bottom-sheet-handle"
            density="comfortable"
            orientation="vertical"
            size="default"
            type="bar"
          />

          <div class="modus-wc-bottom-sheet-header" slot="header">
            <slot name="header"></slot>
          </div>

          <div class="modus-wc-bottom-sheet-content" slot="body">
            <slot name="content"></slot>
          </div>

          <div class="modus-wc-bottom-sheet-footer" slot="footer">
            <slot name="footer"></slot>
          </div>
        </modus-wc-panel>
      </Host>
    );
  }
}
