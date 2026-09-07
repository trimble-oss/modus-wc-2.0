import { computePosition, flip, offset, shift } from '@floating-ui/dom';
import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
  Method,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { DaisySize, ModusSize, PopoverPlacement } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable dropdown menu component used to render a button and toggleable menu.
 *
 * The component supports a 'button' and 'menu' `<slot>` for injecting custom HTML content.
 */
@Component({
  tag: 'modus-wc-dropdown-menu',
  styleUrl: 'modus-wc-dropdown-menu.scss',
  shadow: false,
})
export class ModusWcDropdownMenu {
  private buttonRef?: HTMLElement;
  private inheritedAttributes: Attributes = {};
  private menuRef?: HTMLElement;
  private menuSlotObserver?: MutationObserver;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The aria-label for the dropdown button. */
  @Prop() buttonAriaLabel?: string;

  /** The color variant of the button. */
  @Prop() buttonColor?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'warning'
    | 'danger' = 'primary';

  /** The shape of the button. */
  @Prop() buttonShape?: 'circle' | 'ellipse' | 'rectangle' | 'square' =
    'rectangle';

  /** The size of the button. */
  @Prop() buttonSize?: DaisySize | 'xl' = 'md';

  /** The variant of the button. */
  @Prop() buttonVariant?: 'borderless' | 'filled' | 'outlined' = 'filled';

  /** Custom CSS class to apply to the host element. */
  @Prop() customClass?: string = '';

  /** If true, the button will be disabled. */
  @Prop() disabled?: boolean = false;

  /** Indicates that the menu should have a border. */
  @Prop() menuBordered?: boolean = true;

  /** Distance between the button and menu in pixels. */
  @Prop() menuOffset?: number = 10;

  /** The placement of the menu relative to the button. */
  @Prop() menuPlacement?: PopoverPlacement = 'bottom-start';

  /** The size of the menu. */
  @Prop() menuSize?: ModusSize = 'md';

  /**
   * The positioning strategy for the menu. Use 'fixed' when the dropdown is
   * inside a clipping ancestor (e.g. overflow:hidden) so the menu escapes to
   * the viewport coordinate space.
   */
  @Prop() menuStrategy?: 'absolute' | 'fixed' = 'absolute';

  /** Indicates that the menu is visible. */
  @Prop({ mutable: true }) menuVisible: boolean = false;

  /** Event emitted when the menuVisible prop changes. */
  @StencilEvent() menuVisibilityChange!: EventEmitter<{ isVisible: boolean }>;

  /** Event emitted the first time the menu opens while `slot="menu"` has no menu items yet. Populate the menu slot; the component shows a spinner until items are present. */
  @StencilEvent() menuLoad!: EventEmitter<{ reason: 'open' }>;

  /** Tracks whether `menuLoad` was already emitted for the current unloaded cycle. */
  private loadRequested = false;

  /** Tracks whether menu items were loaded at least once (for reload after removal). */
  private menuWasLoaded = false;

  /** Bumped when slotted menu content changes so Stencil re-renders loading UI. */
  @State() private menuSlotRevision = 0;

  @State() private menuPosition = { x: 0, y: 0 };

  @Listen('click', { target: 'document' })
  handleDocumentClick(event: Event) {
    const path = event.composedPath();
    // Close the menu when the user clicks outside the component
    if (!path.includes(this.el) && this.menuVisible) {
      this.menuVisible = false;
      this.menuVisibilityChange.emit({ isVisible: false });
    }
  }

  @Listen('keydown')
  handleKeyDown(event: KeyboardEvent) {
    // Close the menu when the user clicks escape
    if (event.key === 'Escape' && this.menuVisible) {
      this.menuVisible = false;
      this.menuVisibilityChange.emit({ isVisible: false });
    }
  }

  @Watch('menuVisible')
  async onMenuVisibilityChange(newValue: boolean) {
    if (newValue) {
      this.requestMenuLoadIfNeeded();
      await this.updateMenuPosition();
    }
  }

  componentDidLoad() {
    this.buttonRef = this.el.querySelector('modus-wc-button') as HTMLElement;
    this.setupMenuSlotObserver();
    this.syncMenuLoadState();
    if (this.menuVisible) {
      this.requestMenuLoadIfNeeded();
    }
  }

  disconnectedCallback() {
    this.menuSlotObserver?.disconnect();
  }

  componentWillLoad() {
    // Auto-inject CSS if component is used inside user's shadow DOM
    handleShadowDOMStyles(this.el);

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-dropdown-menu'];

    // The order CSS classes are added matters to CSS specificity
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleButtonClick = () => {
    const newVisibility = !this.menuVisible;
    this.menuVisible = newVisibility;
    this.menuVisibilityChange.emit({ isVisible: newVisibility });
  };

  /** Whether `slot="menu"` has slotted content (menu items or other menu UI). */
  private hasMenuContent(): boolean {
    const menuSlotRoots = Array.from(
      this.el.querySelectorAll('[slot="menu"]')
    ).filter((node) => node.closest('modus-wc-dropdown-menu') === this.el);

    if (
      menuSlotRoots.some(
        (slotRoot) =>
          slotRoot.childElementCount > 0 || !!slotRoot.textContent?.trim()
      )
    ) {
      return true;
    }

    return Array.from(this.el.querySelectorAll('modus-wc-menu-item')).some(
      (item) =>
        item.getAttribute('slot') === 'menu' &&
        item.closest('modus-wc-dropdown-menu') === this.el
    );
  }

  private setupMenuSlotObserver(): void {
    if (typeof MutationObserver === 'undefined') return;

    this.menuSlotObserver?.disconnect();
    this.menuSlotObserver = new MutationObserver(() => {
      this.handleMenuSlotChange();
    });
    this.menuSlotObserver.observe(this.el, {
      childList: true,
      subtree: true,
    });
  }

  private syncMenuLoadState(): void {
    if (this.hasMenuContent()) {
      this.menuWasLoaded = true;
      this.loadRequested = false;
      return;
    }

    if (this.menuWasLoaded) {
      this.menuWasLoaded = false;
      this.loadRequested = false;
    }
  }

  private handleMenuSlotChange(): void {
    this.syncMenuLoadState();
    this.menuSlotRevision++;
  }

  /** Re-sync lazy-loading UI after imperatively updating `slot="menu"`. */
  @Method()
  refreshLazyMenu(): Promise<void> {
    this.handleMenuSlotChange();
    return Promise.resolve();
  }

  private requestMenuLoadIfNeeded(): void {
    if (this.hasMenuContent() || this.loadRequested) {
      return;
    }

    this.loadRequested = true;
    this.menuLoad.emit({ reason: 'open' });
  }

  private shouldShowLoading(): boolean {
    void this.menuSlotRevision;
    return this.menuVisible && !this.hasMenuContent();
  }

  private shouldShowMenu(): boolean {
    void this.menuSlotRevision;
    return this.hasMenuContent();
  }

  private getLoaderSize(): ModusSize {
    return this.menuSize ?? 'md';
  }

  private updateMenuPosition = async () => {
    // istanbul ignore next
    if (!this.buttonRef || !this.menuRef) return;

    const { x, y } = await computePosition(this.buttonRef, this.menuRef, {
      placement: this.menuPlacement,
      strategy: this.menuStrategy,
      middleware: [offset(this.menuOffset), flip(), shift({ padding: 8 })],
    });

    this.menuPosition = { x, y };
  };

  render() {
    return (
      <Host class={this.getClasses()} {...this.inheritedAttributes}>
        <modus-wc-button
          aria-expanded={this.menuVisible.toString()}
          aria-haspopup="true"
          aria-label={this.buttonAriaLabel}
          color={this.buttonColor}
          disabled={this.disabled}
          onButtonClick={this.handleButtonClick}
          shape={this.buttonShape}
          size={this.buttonSize}
          variant={this.buttonVariant}
        >
          <slot name="button" />
        </modus-wc-button>

        <div
          aria-hidden={!this.menuVisible}
          class="menu-wrapper"
          ref={(el) => (this.menuRef = el)}
          style={{
            // Positioning
            position: this.menuStrategy,
            top: `${this.menuPosition.y}px`,
            left: `${this.menuPosition.x}px`,
            zIndex: '1000',
            // Visibility
            visibility: this.menuVisible ? 'visible' : 'hidden',
            opacity: this.menuVisible ? '1' : '0',
            pointerEvents: this.menuVisible ? 'auto' : 'none',
          }}
        >
          <modus-wc-menu bordered={this.menuBordered} size={this.menuSize}>
            {this.shouldShowLoading() ? (
              <div
                aria-busy="true"
                aria-live="polite"
                class="modus-wc-dropdown-menu-loading"
              >
                <slot name="loading">
                  <modus-wc-loader
                    size={this.getLoaderSize()}
                    variant="spinner"
                  />
                </slot>
              </div>
            ) : null}
            <div
              class={{
                'modus-wc-dropdown-menu-menu-content': true,
                'modus-wc-dropdown-menu-menu-content--hidden':
                  !this.shouldShowMenu(),
              }}
            >
              <slot name="menu" />
            </div>
          </modus-wc-menu>
        </div>
      </Host>
    );
  }
}
