import { Component, Element, h, Host, Prop } from '@stencil/core';
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

  private getClasses(): string {
    // For sublists (dropdowns), only add the dropdown class
    if (this.isSubList) {
      const classList: string[] = ['modus-wc-tree-dropdown'];
      if (this.customClass) classList.push(this.customClass);
      return classList.join(' ');
    }

    // For root tree view, add all standard classes
    const classList: string[] = ['modus-wc-menu', 'modus-wc-tree-view'];

    if (this.customClass) {
      classList.push(this.customClass);
    }

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
