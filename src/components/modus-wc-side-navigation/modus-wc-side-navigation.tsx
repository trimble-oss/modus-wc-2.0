import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'modus-wc-side-navigation',
  styleUrl: 'modus-wc-side-navigation.scss',
  shadow: false,
})
export class ModusWcSideNavigation {
  /** Collapse the panel when clicking outside. */
  @Prop() collapseOnClickOutside = true;

  /** Whether the side navigation is expanded. */
  @Prop({ mutable: true, reflect: true }) expanded = false;

  /** Maximum width of the side navigation panel in an expanded state. */
  @Prop() maxWidth = '256px';

  private navRef?: HTMLElement;

  connectedCallback() {
    if (this.collapseOnClickOutside) {
      document.addEventListener('click', this.handleClickOutside, true);
    }
  }

  disconnectedCallback() {
    document.removeEventListener('click', this.handleClickOutside, true);
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
    );
  }
}
