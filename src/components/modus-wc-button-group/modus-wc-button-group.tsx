import {
  Component,
  Element,
  h,
  Host,
  Listen,
  Prop,
  Watch,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-button-group.tailwind';
import { Orientation } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

type HTMLModusWcButtonElement = HTMLElement & {
  setActive: (isActive: boolean) => Promise<void>;
};

/**
 * A customizable buttongroup component that groups multiple Modus buttons together.
 *
 * The component supports a `<slot>` for injecting content within the buttongroup.
 */

@Component({
  tag: 'modus-wc-button-group',
  styleUrl: 'modus-wc-button-group.scss',
  shadow: false,
})
export class ModusWcButtonGroup {
  private inheritedAttributes: Attributes = {};
  private buttonElements!: NodeListOf<HTMLElement>;
  private selectedButtons: HTMLModusWcButtonElement[] = [];

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

  @Watch('disabled')
  handleDisabledChange(newValue: boolean): void {
    this.setButtonAttribute('disabled', newValue ? 'true' : null);
  }

  @Watch('buttonStyle')
  handleButtonStyleChange(newValue: 'borderless' | 'fill' | 'outlined'): void {
    this.setButtonAttribute('variant', newValue);
  }

  @Watch('color')
  handleColorChange(
    newValue: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger'
  ): void {
    this.setButtonAttribute('color', newValue);
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

  @Listen('buttonClick')
  handleButtonClick(event: CustomEvent) {
    const clickedButton = event.target as HTMLModusWcButtonElement;
    if (this.selectionType === 'default') {
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

  /** Applies 'modus-wc-join-item' class to each button's custom-class prop */
  private applyCustomClasses(): void {
    this.buttonElements.forEach((button) => {
      const currentClasses = button.getAttribute('custom-class') || '';
      const updated = `${currentClasses} modus-wc-join-item`.trim();
      button.setAttribute('custom-class', updated);
    });
  }

  /** Syncs all button props to current group props */
  private syncButtonStates(): void {
    this.setButtonAttribute('variant', this.buttonStyle);
    if (this.color) this.setButtonAttribute('color', this.color);
    if (this.disabled) this.setButtonAttribute('disabled', 'true');
  }

  /** Generic helper to set or remove a given attribute on all buttons */
  private setButtonAttribute(name: string, value: string | null): void {
    this.buttonElements.forEach((button) => {
      if (value !== null) {
        button.setAttribute(name, value);
      } else {
        button.removeAttribute(name);
      }
    });
  }

  /** Toggle single selection - only one button can be active at a time */
  private async toggleSingleSelect(
    clickedButton: HTMLModusWcButtonElement
  ): Promise<void> {
    const isCurrentlySelected = this.selectedButtons.includes(clickedButton);

    // Deactivate all buttons
    await Promise.all(
      Array.from(this.buttonElements).map((button) =>
        (button as HTMLModusWcButtonElement).setActive(false)
      )
    );

    // Clear selection array
    this.selectedButtons = [];

    // If the clicked button wasn't selected, activate it
    if (!isCurrentlySelected) {
      await clickedButton.setActive(true);
      this.selectedButtons = [clickedButton];
    }
  }

  /** Toggle multiple selection - multiple buttons can be active */
  private async toggleMultiSelect(
    clickedButton: HTMLModusWcButtonElement
  ): Promise<void> {
    const isCurrentlySelected = this.selectedButtons.includes(clickedButton);

    if (isCurrentlySelected) {
      // Deactivate and remove from selection
      await clickedButton.setActive(false);
      this.selectedButtons = this.selectedButtons.filter(
        (btn) => btn !== clickedButton
      );
    } else {
      // Activate and add to selection
      await clickedButton.setActive(true);
      this.selectedButtons = [...this.selectedButtons, clickedButton];
    }
  }

  /** Reset all button selections */
  private async resetAllSelections(): Promise<void> {
    if (!this.buttonElements) return;

    await Promise.all(
      Array.from(this.buttonElements).map((button) =>
        (button as HTMLModusWcButtonElement).setActive(false)
      )
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
      <Host>
        <div class={this.getClasses()} {...this.inheritedAttributes}>
          <slot></slot>
        </div>
      </Host>
    );
  }
}
