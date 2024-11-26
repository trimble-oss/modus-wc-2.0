import { Component, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-avatar.tailwind';
import { Size } from '../../types';

/**
 * A customizable avatar component used to create avatars with different images.
 *
 * Adheres to WCAG 2.2 standards.
 */
@Component({
  tag: 'modus-wc-avatar',
  styleUrl: 'modus-wc-avatar.scss',
  shadow: false,
})
export class ModusWcAvatar {
  /**
   * The image alt attribute for accessibility.
   */
  @Prop() alt!: string;

  /**
   * The aria-label attribute for accessibility.
   */
  @Prop() ariaLabel!: string;

  /**
   * Custom CSS class to apply to the inner div.
   */
  @Prop() customClass: string = '';

  /**
   * The location of the image.
   */
  @Prop() imgSrc: string = '';

  // TODO - add placeholder support (need UX logic)

  /**
   * The shape of the avatar.
   */
  @Prop() shape?: 'circle' | 'square' = 'circle';

  /**
   * The size of the avatar.
   */
  @Prop() size?: Size = 'md';

  componentWillLoad() {
    if (!this.alt || !this.ariaLabel) {
      console.warn(
        'ModusWcAvatar: alt and aria-label are required for accessibility.'
      );
    }
  }

  private getClasses(): string {
    const classList: string[] = [];

    const propClasses = convertPropsToClasses({
      shape: this.shape,
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
        <div aria-label={this.ariaLabel} class="modus-wc-avatar" tabindex={-1}>
          <div class={this.getClasses()}>
            <img src={this.imgSrc} alt={this.alt} />
          </div>
        </div>
      </Host>
    );
  }
}
