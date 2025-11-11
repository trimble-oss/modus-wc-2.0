import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-button-group.tailwind';
import { Attributes, inheritAriaAttributes } from '../utils';

@Component({
  tag: 'modus-wc-button-group',
  styleUrl: 'modus-wc-button-group.scss',
  shadow: false,
})

/**
 * a customizable buttongroup component that groups multiple Modus buttons together,
 */
export class ModusWcButtonGroup {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Orientation of the button group: horizontal or vertical */
  @Prop() orientation: 'horizontal' | 'vertical' = 'horizontal';

  componentWillLoad() {
    // Inherit ARIA attributes from the host element
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  componentDidLoad() {
    this.applyCustomClassToButtons();
  }

  /** Adds 'modus-wc-join-item' to the `custom-class` prop of all slotted buttons */
  private applyCustomClassToButtons(): void {
    const buttonElements = this.el.querySelectorAll('modus-wc-button');

    buttonElements.forEach((button) => {
      const currentCustomClass = button.getAttribute('custom-class') || '';
      const updatedCustomClass =
        `${currentCustomClass} modus-wc-join-item`.trim();
      button.setAttribute('custom-class', updatedCustomClass);
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
