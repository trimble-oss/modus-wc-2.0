import {
  Component,
  Event as StencilEvent,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import ModusWcTextInput = Components.ModusWcTextInput;
import ModusWcMenu = Components.ModusWcMenu;
import {
  Components,
  IMenuItem,
  ModusWcMenuCustomEvent,
  ModusWcTextInputCustomEvent,
} from '../../../components';
import { convertPropsToClasses } from './modus-wc-autocomplete.tailwind';

/**
 * A customizable autocomplete component used to create searchable text inputs.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-autocomplete',
  styleUrl: 'modus-wc-autocomplete.scss',
  shadow: false,
})
export class ModusWcAutocomplete {
  private debounceTimer?: number;

  @Prop() textInput: ModusWcTextInput = {
    ariaLabel: 'Autocomplete input',
    inputMode: 'text',
    value: '',
  };

  @Prop() menu: ModusWcMenu = { ariaLabel: 'Autocomplete menu', items: [] };

  /**
   * Custom CSS class to apply to host element.
   */
  @Prop() customClass: string = '';

  /**
   * The debounce timeout in milliseconds.
   * Set to 0 to disable debouncing.
   */
  @Prop() debounceMs: number = 300;

  /**
   * Event emitted when the input loses focus.
   */
  @StencilEvent() inputBlur!: EventEmitter<
    ModusWcTextInputCustomEvent<FocusEvent>
  >;

  /**
   * Event emitted when the input value changes.
   * This event is debounced based on the debounceMs prop.
   */
  @StencilEvent() inputChange!: EventEmitter<
    ModusWcTextInputCustomEvent<Event>
  >;

  /**
   * Event emitted when the input gains focus.
   */
  @StencilEvent() inputFocus!: EventEmitter<
    ModusWcTextInputCustomEvent<FocusEvent>
  >;

  /**
   * Event emitted when a menu item is selected.
   */
  @StencilEvent() menuItemSelect!: EventEmitter<
    ModusWcMenuCustomEvent<IMenuItem>
  >;

  disconnectedCallback() {
    // Clean up any existing debounce timer when component is destroyed
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-autocomplete'];

    const propClasses = convertPropsToClasses();

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleBlur = (event: ModusWcTextInputCustomEvent<FocusEvent>) => {
    this.inputBlur.emit(event);
  };

  private handleChange = (event: ModusWcTextInputCustomEvent<Event>) => {
    // Clear any existing timer
    if (this.debounceTimer) {
      window.clearTimeout(this.debounceTimer);
    }

    // If debouncing is disabled, emit immediately
    if (!this.debounceMs) {
      this.inputChange.emit(event);
      return;
    }

    // Set up new debounce timer
    this.debounceTimer = window.setTimeout(() => {
      this.inputChange.emit(event);
    }, this.debounceMs);
  };

  private handleFocus = (event: ModusWcTextInputCustomEvent<FocusEvent>) => {
    this.inputFocus.emit(event);
  };

  private handleItemSelect = (event: ModusWcMenuCustomEvent<IMenuItem>) => {
    this.menuItemSelect.emit(event);
  };

  render() {
    return (
      <Host class={this.getClasses()}>
        <modus-wc-text-input
          onInputBlur={this.handleBlur}
          onInputChange={this.handleChange}
          onInputFocus={this.handleFocus}
          {...this.textInput}
        />
        <modus-wc-menu
          onItemSelect={this.handleItemSelect}
          {...this.menu}
        ></modus-wc-menu>
      </Host>
    );
  }
}
