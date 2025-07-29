import { Component, Element, h, Host, Prop } from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-avatar.tailwind';
import { DaisySize } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable avatar component used to create avatars with different images.
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

  // TODO - add placeholder support (need UX logic)

  /** The shape of the avatar. */
  @Prop() shape?: 'circle' | 'square' = 'circle';

  /** The size of the avatar. */
  @Prop() size?: DaisySize = 'md';

  componentWillLoad() {
    if (!this.alt) {
      this.alt = 'Avatar image';
    }

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

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div class="modus-wc-avatar" {...this.inheritedAttributes}>
          <div class={this.getClasses()}>
            <img src={this.imgSrc} alt={this.alt} />
          </div>
        </div>
      </Host>
    );
  }
}
