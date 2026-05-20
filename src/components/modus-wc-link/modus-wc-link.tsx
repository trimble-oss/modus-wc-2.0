import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-link.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A link component styled with DaisyUI.
 */
@Component({
  tag: 'modus-wc-link',
  styleUrl: 'modus-wc-link.scss',
  shadow: false,
})
export class ModusWcLink {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The color of the link. */
  @Prop() color: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger' =
    'primary';

  /** The underline behavior of the link. */
  @Prop() underline: 'always' | 'hover' | 'none' = 'always';

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-link'];

    const propClasses = convertPropsToClasses({
      color: this.color,
      underline: this.underline,
    });

    if (propClasses) classList.push(propClasses);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <a class={this.getClasses()} {...this.inheritedAttributes}>
          <slot />
        </a>
      </Host>
    );
  }
}
