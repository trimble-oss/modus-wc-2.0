import { h, Component, Prop } from '@stencil/core';

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
   * Custom CSS class to apply to the outer div.
   */
  @Prop() customClass: string = '';

  /**
   * DaisyUI class to apply to inner div.
   */
  @Prop() daisyClass: string = '';

  /**
   * The location of the image.
   */
  @Prop() imgSrc: string = '';

  // TODO - add placeholder support (need UX logic)

  componentWillLoad() {
    if (!this.alt || !this.ariaLabel) {
      console.warn(
        'ModusWcAvatar: alt and ariaLabel are required for accessibility.'
      );
    }
  }

  render() {
    return (
      <div
        class={{
          'modus-wc-avatar': true,
          [this.customClass]: !!this.customClass,
        }}
        aria-label={this.ariaLabel}
      >
        <div class={this.daisyClass}>
          <img src={this.imgSrc} alt={this.alt} />
        </div>
      </div>
    );
  }
}
