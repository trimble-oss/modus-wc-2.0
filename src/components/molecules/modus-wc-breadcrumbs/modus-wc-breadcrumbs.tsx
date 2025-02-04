import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-breadcrumbs.tailwind';
import { ModusSize } from '../../types';
import { Attributes, inheritAriaAttributes } from '../../utils';

export interface IModusWcBreadcrumb {
  /** The text to render in the breadcrumb. */
  label: string;

  /** The URL emitted when the breadcrumb is clicked. */
  url: string;
}

/**
 * A customizable breadcrumbs component used to help users navigate through a website.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-breadcrumbs',
  styleUrl: 'modus-wc-breadcrumbs.scss',
  shadow: false,
})
export class ModusWcBreadcrumbs {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The breadcrumbs to render. */
  @Prop() items: IModusWcBreadcrumb[] = [];

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** The size of the breadcrumbs. */
  @Prop() size?: ModusSize = 'md';

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcBreadcrumbs: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = 'Breadcrumbs';
    }

    if (!this.items || this.items.length === 0) {
      console.error('ModusWcBreadcrumbs: breadcrumb items data is required.');
    }
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-breadcrumbs'];

    const propClasses = convertPropsToClasses({
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <nav class={this.getClasses()} {...this.inheritedAttributes}>
          <ol>
            {this.items.map((item, index) => {
              const isCurrentPage = index === this.items.length - 1;

              return (
                <li
                  key={item.label}
                  {...(isCurrentPage ? { 'aria-current': 'page' } : {})}
                >
                  {isCurrentPage ? (
                    <span>{item.label}</span>
                  ) : (
                    <a href={item.url}>{item.label}</a>
                  )}
                </li>
              );
            })}
          </ol>
        </nav>
      </Host>
    );
  }
}
