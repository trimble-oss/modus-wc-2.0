import { computePosition, flip, offset, shift } from '@floating-ui/dom';
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
  @Prop() buttonShape: 'circle' | 'ellipse' | 'rectangle' | 'square' =
    'rectangle';

  /** The size of the button. */
  @Prop() buttonSize?: DaisySize = 'md';

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

  /** Indicates that the menu is visible. */
  @Prop({ mutable: true }) menuVisible: boolean = false;

  /** Event emitted when the menuVisible prop changes. */
  @StencilEvent() menuVisibilityChange!: EventEmitter<{ isVisible: boolean }>;

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
      await this.updateMenuPosition();
    }
  }

  componentDidLoad() {
    this.buttonRef = this.el.querySelector('modus-wc-button') as HTMLElement;
  }

  componentWillLoad() {
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

  private updateMenuPosition = async () => {
    // istanbul ignore next
    if (!this.buttonRef || !this.menuRef) return;

    const { x, y } = await computePosition(this.buttonRef, this.menuRef, {
      placement: this.menuPlacement,
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
            position: 'absolute',
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
            <slot name="menu" />
          </modus-wc-menu>
        </div>
      </Host>
    );
  }
}
