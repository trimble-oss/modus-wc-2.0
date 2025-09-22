import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-avatar.tailwind';
import { DaisySize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable avatar component used to create avatars with different images or user initials.
 * When no image is provided, the component can display initials (up to 3 characters) from the initials prop.
 * The component will extract the first letter of each word in the initials string.
 */
@Component({
  tag: 'modus-wc-avatar',
  styleUrl: 'modus-wc-avatar.scss',
  shadow: false,
})
export class ModusWcAvatar {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The image alt attribute for accessibility. */
  @Prop() alt!: string;

  /** Custom CSS class to apply to the inner div. */
  @Prop() customClass?: string = '';

  /** The location of the image. */
  @Prop() imgSrc: string = '';

  /** The initials to display when no image is provided. */
  @Prop() initials?: string = '';

  // TODO - add placeholder support (need UX logic)

  /** The shape of the avatar. */
  @Prop() shape?: 'circle' | 'square' = 'circle';

  /** The size of the avatar. */
  @Prop() size?: DaisySize = 'md';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
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
    if (!this.imgSrc && !this.initials) classList.push('no-image');

    return classList.join(' ');
  }

  private getUserInitials(): string {
    if (!this.initials) return '';

    return this.initials
      .trim()
      .split(/\s+/)
      .filter(Boolean)
      .map((part) => part.charAt(0))
      .join('')
      .substring(0, 3)
      .toUpperCase();
  }

  render() {
    const altText =
      this.alt || (this.initials ? this.initials : 'Avatar image');

    return (
      <Host>
        <div class="modus-wc-avatar" {...this.inheritedAttributes}>
          <div class={this.getClasses()}>
            {this.imgSrc ? (
              <img src={this.imgSrc} alt={altText} />
            ) : this.initials ? (
              <span class="initials" aria-label={altText}>
                {this.getUserInitials()}
              </span>
            ) : (
              <modus-wc-icon
                aria-label={altText}
                name="person"
                size={this.size}
                variant="solid"
              ></modus-wc-icon>
            )}
          </div>
        </div>
      </Host>
    );
  }
}
