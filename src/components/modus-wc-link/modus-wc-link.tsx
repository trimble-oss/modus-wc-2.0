import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-link.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes, sanitizeUrl } from '../utils';

/**
 * A customizable link component used to navigate to URLs.
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
  @Prop() color:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'inherit'
    | 'success'
    | 'warning'
    | 'danger' = 'primary';

  /** Custom CSS class to apply to the link element. */
  @Prop() customClass?: string = '';

  /** The URL to navigate to when the link is activated. */
  @Prop() href?: string;

  /** The relationship attribute for the link. */
  @Prop() rel?: string;

  /** The browsing context for the link. */
  @Prop() target?: string;

  /** Advisory information describing the link. */
  @Prop() title: string = '';

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
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getRelAttribute(): string | undefined {
    const relValues = new Set(
      (this.rel ?? '')
        .split(/\s+/)
        .map((value) => value.trim())
        .filter(Boolean)
    );

    if (this.target === '_blank') {
      relValues.add('noopener');
      relValues.add('noreferrer');
    }

    return relValues.size > 0 ? Array.from(relValues).join(' ') : undefined;
  }

  private getHrefAttribute(): string | undefined {
    const trimmedHref = this.href?.trim();

    if (!trimmedHref || trimmedHref === 'undefined' || trimmedHref === 'null') {
      return undefined;
    }

    return sanitizeUrl(trimmedHref);
  }

  render() {
    const sanitizedHref = this.getHrefAttribute();

    return (
      <Host>
        <a
          class={this.getClasses()}
          href={sanitizedHref}
          rel={this.getRelAttribute()}
          target={this.target}
          title={this.title || undefined}
          {...this.inheritedAttributes}
        >
          <slot />
        </a>
      </Host>
    );
  }
}
