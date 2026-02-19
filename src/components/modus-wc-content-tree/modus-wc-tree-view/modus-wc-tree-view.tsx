import { Component, Element, h, Host, Listen, Prop } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A wrapper component that provides the ul element for tree items.
 * This component uses the modus-wc-menu structure to wrap tree items in a proper list structure.
 */
@Component({
  tag: 'modus-wc-tree-view',
  styleUrl: 'modus-wc-tree-view.scss',
  shadow: false,
})
export class ModusWcTreeView {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Custom CSS class to apply to the ul element. */
  @Prop() customClass?: string = '';

  /** Indicates that this list is a nested sublist. */
  @Prop() isSubList?: boolean = false;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  @Listen('itemSelect')
  handleItemSelect(event: CustomEvent<{ value: string }>) {
    const target = event.target as HTMLElement;
    if (!target) return;

    const allContents = this.el.querySelectorAll('.modus-wc-tree-content');
    allContents.forEach((content) =>
      content.classList.remove('modus-wc-tree-item-active')
    );

    const targetContent = target.querySelector('.modus-wc-tree-content');
    targetContent?.classList.add('modus-wc-tree-item-active');
  }

  private getClasses(): string {
    if (this.isSubList) {
      const classList: string[] = ['modus-wc-tree-dropdown'];
      if (this.customClass) classList.push(this.customClass);
      return classList.join(' ');
    }

    const classList: string[] = ['modus-wc-menu', 'modus-wc-tree-view'];
    if (this.customClass) classList.push(this.customClass);
    return classList.join(' ');
  }

  render() {
    return (
      <Host class={this.isSubList ? 'modus-wc-tree-submenu' : undefined}>
        <ul
          class={this.getClasses()}
          role={this.isSubList ? 'group' : 'tree'}
          {...this.inheritedAttributes}
        >
          <slot />
        </ul>
      </Host>
    );
  }
}
