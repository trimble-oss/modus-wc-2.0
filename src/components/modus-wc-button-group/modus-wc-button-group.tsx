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

  /** Current selected value(s) */
  @Prop({ mutable: true }) value?: string | string[] = '';

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
    // Set initial button states and properties
    this.updateButtonProperties();
    this.updateButtonStates();
  }

  componentDidUpdate() {
    // Update button states when value prop changes
    this.updateButtonProperties();
    this.updateButtonStates();
  }

  @Listen('buttonClick')
  handleButtonClick(event: CustomEvent) {
    if (this.disabled || this.selectionMode === 'none') {
      return;
    }

    event.stopPropagation();
    const button = event.target as HTMLElement;
    const buttonValue =
      button.getAttribute('value') || button.textContent?.trim() || '';

    let newValue: string | string[];

    if (this.selectionMode === 'single') {
      newValue = buttonValue;
      this.value = newValue;
    } else if (this.selectionMode === 'multiple') {
      const currentValues = Array.isArray(this.value)
        ? [...this.value]
        : this.value
          ? [this.value]
          : [];

      if (currentValues.includes(buttonValue)) {
        newValue = currentValues.filter((v) => v !== buttonValue);
      } else {
        newValue = [...currentValues, buttonValue];
      }
      this.value = newValue;
    }

    // Update button pressed states
    this.updateButtonStates();

    this.buttonGroupSelectionChange.emit({
      value: this.value || '',
      source: button,
    });
  }

  private updateButtonProperties() {
    const buttons = this.el.querySelectorAll('modus-wc-button');

    buttons.forEach((button) => {
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

  private updateButtonStates() {
    const buttons = this.el.querySelectorAll('modus-wc-button');
    const selectedValues = Array.isArray(this.value)
      ? this.value
      : [this.value];

    buttons.forEach((button) => {
      const buttonValue =
        button.getAttribute('value') || button.textContent?.trim() || '';

      if (selectedValues.includes(buttonValue)) {
        button.setAttribute('pressed', 'true');
      } else {
        button.removeAttribute('pressed');
      }
    });
  }

  private getClasses(): string {
    const classList = ['modus-wc-button-group'];

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
