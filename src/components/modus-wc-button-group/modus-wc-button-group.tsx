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

interface IButtonElement extends HTMLElement {
  setActive: (isActive: boolean) => Promise<void>;
}

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
  private inheritedAttributes: Attributes = {};
  private buttonElements!: NodeListOf<HTMLElement>;
  private selectedButtons: IButtonElement[] = [];

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

  @Watch('disabled')
  @Watch('buttonStyle')
  @Watch('color')
  handlePropChange(): void {
    this.syncButtonStates();
  }

  @Watch('selectionType')
  async handleSelectionTypeChange(): Promise<void> {
    await this.resetAllSelections();
  }

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.buttonElements = this.el.querySelectorAll('modus-wc-button');
    this.applyCustomClasses();
    this.syncButtonStates();
  }

  @Listen('slotchange')
  handleSlotChange() {
    this.buttonElements = this.el.querySelectorAll('modus-wc-button');
    this.applyCustomClasses();
    this.syncButtonStates();
  }

  @Listen('buttonClick')
  handleButtonClick(event: CustomEvent) {
    const clickedButton = event.target as IButtonElement;

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

  private async toggleSingleSelect(
    clickedButton: IButtonElement
  ): Promise<void> {
    const isCurrentlySelected = this.selectedButtons.includes(clickedButton);

    // Deactivate all buttons
    await Promise.all(
      Array.from(this.buttonElements).map(async (button) => {
        const buttonElement = button as IButtonElement;
        if (typeof buttonElement.setActive === 'function') {
          await buttonElement.setActive(false);
        }
      })
    );

    this.selectedButtons = [];

    // If the clicked button wasn't selected, activate it
    if (!isCurrentlySelected) {
      if (typeof clickedButton.setActive === 'function') {
        await clickedButton.setActive(true);
        this.selectedButtons = [clickedButton];
      }
    }

    this.buttonGroupClick.emit({
      button: clickedButton,
      isSelected: !isCurrentlySelected,
    });

    this.buttonSelectionChange.emit({
      selectedButtons: this.selectedButtons,
    });
  }

  private async toggleMultiSelect(
    clickedButton: IButtonElement
  ): Promise<void> {
    const isCurrentlySelected = this.selectedButtons.includes(clickedButton);

    if (isCurrentlySelected) {
      // Deactivate and remove from selection
      if (typeof clickedButton.setActive === 'function') {
        await clickedButton.setActive(false);
      }
      this.selectedButtons = this.selectedButtons.filter(
        (btn) => btn !== clickedButton
      );
    } else {
      // Activate and add to selection
      if (typeof clickedButton.setActive === 'function') {
        await clickedButton.setActive(true);
        this.selectedButtons = [...this.selectedButtons, clickedButton];
      }
    }

    this.buttonGroupClick.emit({
      button: clickedButton,
      isSelected: !isCurrentlySelected,
    });

    this.buttonSelectionChange.emit({
      selectedButtons: this.selectedButtons,
    });
  }

  private async resetAllSelections(): Promise<void> {
    if (!this.buttonElements) return;

    await Promise.all(
      Array.from(this.buttonElements).map(async (button) => {
        const buttonElement = button as IButtonElement;
        if (typeof buttonElement.setActive === 'function') {
          await buttonElement.setActive(false);
        }
      })
    );
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
