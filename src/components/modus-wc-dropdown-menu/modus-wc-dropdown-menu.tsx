import {
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
} from '@floating-ui/dom';
import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Listen,
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
  private cleanupAutoUpdate?: () => void;
  private inheritedAttributes: Attributes = {};
  private menuRef?: HTMLElement;

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

  @State() private menuPosition = { x: 0, y: 0 };

  /** Avoids a visible flash at (0, 0) before the first position pass completes. */
  @State() private menuPositionReady = false;

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
      this.menuPositionReady = false;
      this.startAutoUpdate();
      await this.updateMenuPosition();
      this.menuPositionReady = true;
      return;
    }

    this.stopAutoUpdate();
    this.menuPositionReady = false;
  }

  componentDidLoad() {
    this.buttonRef = this.el.querySelector('modus-wc-button') as HTMLElement;

    if (this.menuVisible) {
      this.menuPositionReady = false;
      this.startAutoUpdate();
      void this.updateMenuPosition().then(() => {
        this.menuPositionReady = true;
      });
    }
  }

  disconnectedCallback() {
    this.stopAutoUpdate();
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

    if (newVisibility) {
      // Emit before opening so consumers can populate `slot="menu"` (e.g. lazy
      // loading) before the first positioning pass runs.
      this.menuVisibilityChange.emit({ isVisible: true });
      this.menuVisible = true;
      return;
    }

    this.menuVisible = false;
    this.menuVisibilityChange.emit({ isVisible: false });
  };

  private startAutoUpdate(): void {
    this.stopAutoUpdate();
    if (!this.buttonRef || !this.menuRef) return;

    this.cleanupAutoUpdate = autoUpdate(this.buttonRef, this.menuRef, () => {
      void this.updateMenuPosition();
    });
  }

  private stopAutoUpdate(): void {
    this.cleanupAutoUpdate?.();
    this.cleanupAutoUpdate = undefined;
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
    const menuShown = this.menuVisible && this.menuPositionReady;
    const menuTop = Number.isFinite(this.menuPosition.y)
      ? this.menuPosition.y
      : 0;
    const menuLeft = Number.isFinite(this.menuPosition.x)
      ? this.menuPosition.x
      : 0;

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
            top: `${menuTop}px`,
            left: `${menuLeft}px`,
            zIndex: '1000',
            // Visibility
            visibility: menuShown ? 'visible' : 'hidden',
            opacity: menuShown ? '1' : '0',
            pointerEvents: menuShown ? 'auto' : 'none',
          }}
        >
          <modus-wc-menu bordered={this.menuBordered} size={this.menuSize}>
            <slot name="menu" />
          </modus-wc-menu>
        </div>
      </Host>
    );
  }
}
