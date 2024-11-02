import { h, Component, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-avatar.tailwind';

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
  @Prop() size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  componentWillLoad() {
    if (!this.alt || !this.ariaLabel) {
      console.warn(
        'ModusWcAvatar: alt and ariaLabel are required for accessibility.'
      );
    }
  }

  private getClasses(): string {
    const classList = [];

    // istanbul ignore next - not implemented
    const propClasses = convertPropsToClasses({
      shape: this.shape,
      size: this.size,
    });

    // istanbul ignore next - not implemented
    if (propClasses) classList.push(propClasses);
    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <div class="modus-wc-avatar" aria-label={this.ariaLabel}>
        <div class={this.getClasses()}>
          <img src={this.imgSrc} alt={this.alt} />
        </div>
      </div>
    );
  }
}
