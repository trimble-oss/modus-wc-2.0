import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-collapse.tailwind';
import { generateRandomId } from '../../utils';

/**
 * A customizable collapse component used for showing and hiding content.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-collapse',
  styleUrl: 'modus-wc-collapse.scss',
  shadow: false,
})
export class ModusWcCollapse {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /**
   * Indicates that the component should have a border.
   */
  @Prop() bordered?: boolean = true;

  /**
   * Custom CSS class to apply to the inner div.
   */
  @Prop() customClass?: string = '';

  /**
   * The icon name, should match the CSS class in the icon font.
   */
  @Prop() icon?: string = '';

  /**
   * Sets the aria-label attribute of the icon component.
   */
  @Prop() iconAriaLabel?: string = '';

  /**
   * The title of the collapse component, rendered on button.
   */
  @Prop() title?: string = '';

  private contentId = generateRandomId();

  private getClasses(): string {
    const classList: string[] = ['modus-wc-collapse modus-wc-collapse-arrow'];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div
          aria-controls={this.contentId}
          class={this.getClasses()}
          role="button"
          tabindex="0"
        >
          <input type="checkbox" />
          <div class="modus-wc-collapse-title modus-wc-inline-flex modus-wc-items-center modus-wc-text-xl modus-wc-font-medium">
            {this.icon && (
              <modus-wc-icon
                aria-label={this.iconAriaLabel}
                name={this.icon}
              ></modus-wc-icon>
            )}
            {this.title}
          </div>
          <div class="modus-wc-collapse-content" id={this.contentId}>
            <slot />
          </div>
        </div>
      </Host>
    );
  }
}
