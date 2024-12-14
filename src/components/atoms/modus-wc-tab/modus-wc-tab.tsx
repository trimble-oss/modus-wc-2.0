import { Component, h, Host, Prop, Element } from '@stencil/core';

/**
 * A customizable tab component.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-tab',
  styleUrl: 'modus-wc-tab.scss',
  shadow: false,
})
export class ModusWcTab {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** If the tab is active. */
  @Prop({ reflect: true }) active?: boolean;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass: string = '';

  /** If the tab is disabled. */
  @Prop({ reflect: true }) disabled?: boolean;

  // Tab switch event?

  // Href, since people might want an anchor?

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcTab: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = 'Tab Button';
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-tab'];

    // const propClasses = convertPropsToClasses({
    //   tabStyle: this.tabStyle,
    //   size: this.size,
    // });

    // The order CSS classes are added matters to CSS specificity
    // if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <a
          role="tab"
          // type="button"
          // disabled={this.disabled}
          href="#"
          class={this.getClasses()}
          aria-label={this.el.ariaLabel}
          aria-selected={this.active ? 'true' : 'false'}
        >
          <slot />
        </a>
      </Host>
    );
  }
}
