import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-divider.tailwind';
import { Orientation } from '../../types';
import { Attributes, inheritAriaAttributes } from '../../utils';

/**
 * A customizable divider component used to separate content horizontally or vertically.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-divider',
  styleUrl: 'modus-wc-divider.scss',
  shadow: false,
})
export class ModusWcDivider {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The color of the divider line. */
  @Prop() color?:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'high-contrast'
    | 'success'
    | 'warning'
    | 'danger' = 'tertiary';

  /** The content to display in the divider. */
  @Prop() content?: string = '';

  /** Custom CSS class to apply to the divider element. */
  @Prop() customClass?: string = '';

  /** The orientation of the divider. This is in reference to how content will be rendered around the divider. */
  @Prop() orientation?: Orientation = 'vertical';

  /** The position of the divider. */
  @Prop() position?: 'center' | 'end' | 'start' = 'center';

  /** Whether the divider is responsive or not. */
  @Prop() responsive?: boolean = true;

  componentWillLoad() {
    if (!this.el.ariaLabel) {
      console.warn(
        'ModusWcDivider: aria-label is required for accessibility. Using fallback label.'
      );
      this.el.ariaLabel = 'Divider';
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getClasses(): string {
    const classList = ['modus-wc-divider'];

    const propClasses = convertPropsToClasses({
      color: this.color,
      orientation: this.orientation,
      position: this.position,
      responsive: this.responsive,
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
          class={this.getClasses()}
          role="separator"
          tabindex={-1}
          {...this.inheritedAttributes}
        >
          {this.content}
        </div>
      </Host>
    );
  }
}
