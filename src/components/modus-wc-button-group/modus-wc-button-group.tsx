import { Component, Element, h, Host, Prop, Watch } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-button-group.tailwind';
import { Attributes, inheritAriaAttributes } from '../utils';

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
  private buttonElements: NodeListOf<HTMLElement> = [] as any;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Style to apply to all buttons within the button group */
  @Prop() buttonStyle: 'borderless' | 'fill' | 'outlined' = 'outlined';

  /** Color to apply to all buttons within the button group */
  @Prop() color?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';

  /** Disables all buttons within the button group */
  @Prop() disabled = false;

  /** Orientation of the button group: horizontal or vertical */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

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

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.buttonElements = this.el.querySelectorAll('modus-wc-button');
    this.applyCustomClasses();
    this.syncButtonStates();
  }

  /** Applies 'modus-wc-join-item' class to each button’s custom-class prop */
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
