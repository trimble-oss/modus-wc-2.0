import { Component, Element, h, Host, Prop } from '@stencil/core';
import { ModusIconMap } from '../../icons/ModusIconMap';
// import { ModusIconName } from '../../icons/ModusIconUtilities';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A customizable icon component used to render Modus icons.
 */
@Component({
  tag: 'modus-wc-icon',
  styleUrl: 'modus-wc-icon.scss',
  shadow: false,
})
export class ModusWcIcon {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The icon color. */
  @Prop() color?: string;

  /** Custom CSS class to apply to the icon element. */
  @Prop() customClass?: string = '';

  /** Indicates that the icon is decorative. When true, sets aria-hidden to hide the icon from screen readers. */
  @Prop() decorative?: boolean = true;

  /** Additional options for custom image icons (when using a URL). */
  @Prop() imageOptions?: { [key: string]: string };

  /** The icon name from Modus icons or a custom image URL. */
  @Prop() name!: string;

  /** Indicates if the icon is in a pressed state. */
  @Prop() pressed?: boolean = false;

  /** The icon size in pixels or as a string (e.g., "16", "24px"). */
  @Prop() size?: string = '24';

  componentWillLoad() {
    if (!this.decorative && !this.el.ariaLabel) {
      this.el.ariaLabel = `${this.name} icon`;
    }

    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private handleClick = (event: MouseEvent) => {
    // Icon click event can be handled by parent components
    event.stopPropagation();
  };

  render() {
    const ariaHidden = this.decorative ? 'true' : null;
    const role = this.decorative ? undefined : 'img';

    return (
      <Host
        class={`modus-wc-icon ${this.customClass || ''}`}
        aria-hidden={ariaHidden}
        aria-label={this.decorative ? null : this.el.ariaLabel}
        role={role}
        {...this.inheritedAttributes}
      >
        <ModusIconMap
          icon={this.name}
          color={this.color}
          size={this.size}
          pressed={this.pressed}
          imageOptions={this.imageOptions}
          onClick={this.handleClick}
        />
      </Host>
    );
  }
}
