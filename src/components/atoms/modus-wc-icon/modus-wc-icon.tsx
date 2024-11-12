import { Component, h, Host, Prop } from '@stencil/core';

/**
 * A customizable icon component used to render Modus icons.
 *
 * This component requires Modus icons to be installed in the host application. See [Modus Icon Usage](/docs/documentation-modus-icon-usage--docs) for steps.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-icon',
  styleUrl: 'modus-wc-icon.scss',
  shadow: false,
})
export class ModusWcIcon {
  /**
   * The aria-label attribute for accessibility.
   * This provides an accessible name for screen readers.
   */
  @Prop() ariaLabel?: string;

  /**
   * Custom CSS class to apply to the i element.
   */
  @Prop() customClass: string = '';

  /**
   * Indicates that the icon is decorative.
   * When true, sets aria-hidden to hide the icon from screen readers.
   */
  @Prop() decorative?: boolean = true;

  /**
   * The icon name, should match the CSS class in the icon font.
   */
  @Prop() name!: string;

  /**
   * The icon size, can be "sm", "md", "lg" (a custom size can be specified in CSS).
   * This adjusts the font size for the icon.
   */
  @Prop() size?: 'sm' | 'md' | 'lg' = 'md';

  componentWillLoad() {
    if (!this.decorative && !this.ariaLabel) {
      console.warn(
        'ModusWcIcon: aria-label is required for accessibility for non decorative icons.'
      );
    }
  }

  private getClasses(): string {
    const classList = ['modus-icons'];

    const sizeClass = this.getSizeClass();

    // The order CSS classes are added matters to CSS specificity
    if (sizeClass) classList.push(sizeClass);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  private getSizeClass() {
    switch (this.size) {
      case 'sm':
        return 'modus-wc-icon--sm';
      case 'md':
        return 'modus-wc-icon--md';
      case 'lg':
        return 'modus-wc-icon--lg';
    }
  }

  render() {
    const ariaHidden = this.decorative ? 'true' : null;
    const role = this.decorative ? undefined : 'img';

    return (
      <Host>
        <i
          aria-hidden={ariaHidden}
          aria-label={this.decorative ? null : this.ariaLabel}
          class={this.getClasses()}
          role={role}
        >
          {this.name}
        </i>
      </Host>
    );
  }
}
