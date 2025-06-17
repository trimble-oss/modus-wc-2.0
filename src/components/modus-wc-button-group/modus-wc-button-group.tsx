import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-button-group.tailwind';
import { ModusSize, Orientation } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable button group component used to group related buttons together with built-in selection management.
 *
 * The component supports single select, multiple select, or no selection modes and automatically handles
 * button styling, spacing, and accessibility features.
 */
@Component({
  tag: 'modus-wc-button-group',
  styleUrl: 'modus-wc-button-group.scss',
  shadow: false,
})
export class ModusWcButtonGroup {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the button group element */
  @Prop() customClass?: string = '';

  /** The color of buttons in the group */
  @Prop() color?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger' =
    'primary';

  /** Whether the button group is disabled */
  @Prop() disabled?: boolean = false;

  /** The orientation of the button group */
  @Prop() orientation?: Orientation = 'horizontal';

  /** The selection behavior mode */
  @Prop() selectionMode?: 'single' | 'multiple' | 'none' = 'single';

  /** The size of buttons in the group */
  @Prop() size?: ModusSize = 'md';

  /** Whether buttons should be spaced apart */
  @Prop() spaced?: boolean = false;

  /** The variant of buttons in the group */
  @Prop() variant?: 'outlined' | 'borderless' = 'outlined';

  /** Event emitted when selection changes */
  @Event() buttonGroupSelectionChange!: EventEmitter<{
    value: string | string[];
    source: HTMLElement;
  }>;

  componentWillLoad() {
    if (!this.el.getAttribute('role')) {
      if (this.selectionMode === 'single') {
        this.setAttributes('radiogroup');
        return;
      }
      if (this.selectionMode === 'multiple') {
        this.setAttributes('group');
        return;
      }
      this.setAttributes('group');
      return;
    }
  }

  setAttributes(role: 'radiogroup' | 'group') {
    this.el.setAttribute('role', role);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.updateButtonProperties();
    this.initializeButtonStates();
  }

  componentDidUpdate() {
    // Update button properties when props change
    this.updateButtonProperties();
    this.initializeButtonStates();
  }

  @Listen('buttonClick')
  handleButtonClick(event: CustomEvent) {
    if (this.disabled || this.selectionMode === 'none') {
      return;
    }

    event.stopPropagation();
    const clickedButton = event.target as HTMLElement;

    if (this.selectionMode === 'single') {
      this.getButtons().forEach((button) => {
        const shouldBeSelected = button === clickedButton;
        this.setButtonSelection(button, shouldBeSelected);
      });
    } else if (this.selectionMode === 'multiple') {
      const isSelected = clickedButton.hasAttribute('selected');
      this.setButtonSelection(clickedButton, !isSelected);
    }

    // Emit the new selection value
    this.emitSelectionChange(clickedButton);
  }

  private getButtons(): HTMLElement[] {
    return Array.from(this.el.querySelectorAll('modus-wc-button'));
  }

  private initializeButtonStates() {
    this.getButtons().forEach((button) => {
      const isSelected = button.hasAttribute('selected');
      this.setButtonSelection(button, isSelected);
    });
  }

  private setButtonSelection(button: HTMLElement, isSelected: boolean) {
    if (isSelected) {
      button.setAttribute('selected', 'true');
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.removeAttribute('selected');
      button.setAttribute('aria-pressed', 'false');
    }
  }

  private emitSelectionChange(source: HTMLElement) {
    const selectedButtons = this.getButtons().filter((button) =>
      button.hasAttribute('selected')
    );
    const value = selectedButtons.map(
      (button) =>
        button.getAttribute('value') || button.textContent?.trim() || ''
    );

    this.buttonGroupSelectionChange.emit({
      value: this.selectionMode === 'single' ? value[0] || '' : value,
      source,
    });
  }

  private updateButtonProperties() {
    this.getButtons().forEach((button) => {
      // Set color property
      if (this.color) {
        button.setAttribute('color', this.color);
      }

      // Set size property
      if (this.size) {
        button.setAttribute('size', this.size);
      }

      // Set variant property
      if (this.variant) {
        button.setAttribute('variant', this.variant);
      }

      // Set disabled state - only override if group is disabled
      // Preserve individual button disabled states when group is not disabled
      if (this.disabled) {
        button.setAttribute('disabled', 'true');
      }
    });
  }

  private getClasses(): string {
    const classList = ['modus-wc-button-group'];

    // Add color class
    if (this.color) {
      classList.push(`modus-wc-button-group--${this.color}`);
    }

    const propClasses = convertPropsToClasses({
      disabled: this.disabled,
      orientation: this.orientation,
      spaced: this.spaced,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div class={this.getClasses()} {...this.inheritedAttributes}>
          <slot />
        </div>
      </Host>
    );
  }
}
