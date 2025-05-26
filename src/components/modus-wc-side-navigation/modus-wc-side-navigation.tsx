import { Component, Element, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'modus-wc-side-navigation',
  styleUrl: 'modus-wc-side-navigation.scss',
  shadow: false,
})
export class ModusWcSideNavigation {
  /** Whether the side navigation should collapse when clicking outside of it. */
  @Prop() collapseOnClickOutside = true;

  /** Whether the side navigation is expanded. */
  @Prop({ mutable: true, reflect: true }) expanded = false;

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Maximum width of the side navigation panel in an expanded state. */
  @Prop() maxWidth = '256px';

  private navRef?: HTMLElement;

  connectedCallback() {
    if (this.collapseOnClickOutside) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
    this.el.addEventListener(
      'sideNavItemClicked',
      this.handleItemClick as EventListener
    );
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside, true);
    this.el.removeEventListener(
      'sideNavItemClicked',
      this.handleItemClick as EventListener
    );
  }

  private handleClickOutside = (event: MouseEvent) => {
    if (!this.expanded || !this.collapseOnClickOutside || !this.navRef) return;

    const path = event.composedPath ? event.composedPath() : [event.target];
    if (!path.includes(this.navRef)) {
      this.expanded = false;
    }
  };

  private handleItemClick = (event: CustomEvent<{ id: string }>) => {
    const items = this.el.querySelectorAll('modus-wc-side-navigation-item');
    items.forEach((item) => {
      item.setAttribute('selected', (item.id === event.detail.id).toString());
    });
  };

  render() {
    return (
      <Host>
        <nav
          ref={(el) => (this.navRef = el || undefined)}
          class={`side-nav-panel${this.expanded ? ' expanded' : ''}`}
          style={{ width: this.expanded ? this.maxWidth : '4rem' }}
          aria-label="side navigation"
        >
          <div class="side-navigation-content">
            <slot />
          </div>
        </nav>
      </Host>
    );
  }
}
