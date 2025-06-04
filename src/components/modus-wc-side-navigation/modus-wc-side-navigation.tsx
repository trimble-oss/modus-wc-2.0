import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-side-navigation.tailwind';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable side navigation component for organizing primary navigation and content areas in an application.
 */
@Component({
  tag: 'modus-wc-side-navigation',
  styleUrl: 'modus-wc-side-navigation.scss',
  shadow: false,
})
export class ModusWcSideNavigation {
  private inheritedAttributes: Attributes = {};
  private minWidth = '4rem';
  private navRef?: HTMLElement;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Whether the side navigation should collapse when clicking outside of it. */
  @Prop() collapseOnClickOutside = true;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** Whether the side navigation is expanded. */
  @Prop({ mutable: true, reflect: true }) expanded = false;

  /** Maximum width of the side navigation panel in an expanded state. */
  @Prop() maxWidth = '256px';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  connectedCallback() {
    if (this.collapseOnClickOutside) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside, true);
  }

  private getClasses(): string {
    const classList = ['modus-wc-side-navigation'];

    const propClasses = convertPropsToClasses({
      expanded: this.expanded,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private handleClickOutside = (event: MouseEvent) => {
    if (!this.expanded || !this.collapseOnClickOutside || !this.navRef) return;

    const path = event.composedPath ? event.composedPath() : [event.target];
    if (!path.includes(this.navRef)) {
      this.expanded = false;
    }
  };

  render() {
    return (
      <Host>
        <nav
          {...this.inheritedAttributes}
          class={this.getClasses()}
          ref={(el) => (this.navRef = el)}
          style={{ width: this.expanded ? this.maxWidth : this.minWidth }}
        >
          <div class="side-navigation-content">
            <slot />
          </div>
        </nav>
      </Host>
    );
  }
}
