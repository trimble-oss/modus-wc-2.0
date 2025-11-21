import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-button-group.tailwind';
import { Orientation } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable buttongroup component that groups multiple Modus buttons together.
 *
 * The component supports a `<slot>` for injecting content within the buttongroup.
 */

@Component({
  tag: 'modus-wc-button-group',
  shadow: false,
})
export class ModusWcButtonGroup {
  private buttonElements!: NodeListOf<HTMLElement>;
  private inheritedAttributes: Attributes = {};
  private selectedButtons: HTMLElement[] = [];

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Style to apply to all buttons within the button group */
  @Prop() buttonStyle: 'borderless' | 'fill' | 'outlined' = 'outlined';

  /** Color to apply to all buttons within the button group */
  @Prop() color?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';

  /** Disables all buttons within the button group */
  @Prop() disabled?: boolean = false;

  /** Orientation of the button group: horizontal or vertical */
  @Prop() orientation?: Orientation = 'horizontal';

  /** Selection type for button group */
  @Prop() selectionType?: 'default' | 'single' | 'multiple' = 'default';

  /** Event emitted when any button in the group is clicked */
  @Event() buttonGroupClick!: EventEmitter<{
    button: HTMLElement;
    isSelected: boolean;
  }>;

  /** Event emitted when button selection changes */
  @Event() buttonSelectionChange!: EventEmitter<{
    selectedButtons: HTMLElement[];
  }>;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.buttonElements = this.el.querySelectorAll('modus-wc-button');
    this.applyCustomClasses();
    this.syncButtonStates();
    this.initializeSelectedButtons();
  }

  @Watch('buttonStyle')
  @Watch('color')
  @Watch('disabled')
  handlePropChange(): void {
    this.syncButtonStates();
  }

  @Watch('selectionType')
  handleSelectionTypeChange(): void {
    this.resetAllSelections();
  }

  @Listen('buttonClick')
  handleButtonClick(event: CustomEvent) {
    const clickedButton = event.target as HTMLElement;

    if (this.selectionType === 'default') {
      this.buttonGroupClick.emit({
        button: clickedButton,
        isSelected: false,
      });
      return;
    }

    switch (this.selectionType) {
      case 'single':
        void this.toggleSingleSelect(clickedButton);
        break;
      case 'multiple':
        void this.toggleMultiSelect(clickedButton);
        break;
    }
  }

  @Listen('slotchange')
  handleSlotChange() {
    this.buttonElements = this.el.querySelectorAll('modus-wc-button');
    this.applyCustomClasses();
    this.syncButtonStates();
    this.initializeSelectedButtons();
  }

  private applyCustomClasses(): void {
    this.buttonElements.forEach((button) => {
      const current = button.getAttribute('custom-class') || '';
      if (!current.includes('modus-wc-join-item')) {
        button.setAttribute(
          'custom-class',
          `${current} modus-wc-join-item`.trim()
        );
      }
    });
  }

  private initializeSelectedButtons(): void {
    if (!this.buttonElements || !this.buttonElements.length) return;
    this.selectedButtons = [];
    const pressedButtons: HTMLElement[] = [];

    Array.from(this.buttonElements).forEach((button) => {
      if (button.hasAttribute('pressed')) {
        pressedButtons.push(button);
      }
    });

    if (this.selectionType === 'single' && pressedButtons.length > 0) {
      const firstSelected = pressedButtons[0];
      this.selectedButtons = [firstSelected];

      // Remove pressed attribute from other buttons
      pressedButtons.slice(1).forEach((button) => {
        button.removeAttribute('pressed');
      });
    } else if (this.selectionType === 'multiple') {
      // For multiple selection, keep all pressed buttons
      this.selectedButtons = pressedButtons;
    }
  }

  private syncButtonStates(): void {
    if (!this.buttonElements || !this.buttonElements.length) return;
    this.setButtonAttribute('variant', this.buttonStyle);
    this.setButtonAttribute('color', this.color || null);
    this.setButtonAttribute('disabled', this.disabled ? 'true' : null);
  }

  private setButtonAttribute(name: string, value: string | null): void {
    this.buttonElements.forEach((button) => {
      if (value !== null && value !== undefined) {
        button.setAttribute(name, value);
      } else {
        button.removeAttribute(name);
      }
    });
  }

  private toggleSingleSelect(clickedButton: HTMLElement): void {
    const isCurrentlySelected = this.selectedButtons.includes(clickedButton);

    // In single selection mode, clicking an already selected button does nothing
    if (isCurrentlySelected) {
      return;
    }

    // Deactivate all buttons
    Array.from(this.buttonElements).forEach((button) => {
      button.removeAttribute('pressed');
    });

    // Activate the clicked button
    clickedButton.setAttribute('pressed', '');
    this.selectedButtons = [clickedButton];

    this.buttonGroupClick.emit({
      button: clickedButton,
      isSelected: true,
    });

    this.buttonSelectionChange.emit({
      selectedButtons: this.selectedButtons,
    });
  }

  private toggleMultiSelect(clickedButton: HTMLElement): void {
    const isCurrentlySelected = this.selectedButtons.includes(clickedButton);

    if (isCurrentlySelected) {
      // Deactivate and remove from selection
      clickedButton.removeAttribute('pressed');
      this.selectedButtons = this.selectedButtons.filter(
        (btn) => btn !== clickedButton
      );
    } else {
      // Activate and add to selection
      clickedButton.setAttribute('pressed', '');
      this.selectedButtons = [...this.selectedButtons, clickedButton];
    }

    this.buttonGroupClick.emit({
      button: clickedButton,
      isSelected: !isCurrentlySelected,
    });

    this.buttonSelectionChange.emit({
      selectedButtons: this.selectedButtons,
    });
  }

  private resetAllSelections(): void {
    if (!this.buttonElements) return;

    Array.from(this.buttonElements).forEach((button) => {
      button.removeAttribute('pressed');
    });
    this.selectedButtons = [];
  }

  private getClasses(): string {
    const classList = ['modus-wc-join'];

    const propClasses = convertPropsToClasses({
      orientation: this.orientation,
    });

    if (propClasses) {
      classList.push(propClasses);
    }
    return classList.join(' ');
  }

  render() {
    return (
      <Host
        {...this.inheritedAttributes}
        role="group"
        class={this.getClasses()}
      >
        <slot></slot>
      </Host>
    );
  }
}
