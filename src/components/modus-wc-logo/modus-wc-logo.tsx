import { Component, Element, h, Host, Prop } from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';
import { LOGO_VARIANTS, LogoName } from './logo-constants';

/**
 * A component for displaying Trimble product logos with support for both fixed and scalable sizing.
 * Provides consistent branding across applications with various product logo options.
 * Logo colors automatically adapt to the active Modus theme via CSS variables.
 */
@Component({
  tag: 'modus-wc-logo',
  styleUrl: 'modus-wc-logo.scss',
  shadow: false,
})
export class ModusWcLogo {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The name of the logo to display. Accepts values like 'trimble', 'viewpoint_field_view', etc. */
  @Prop() name!: LogoName;

  /** Show emblem version (icon only) instead of full logo */
  @Prop() emblem?: boolean = false;

  /** Custom CSS class to apply to the logo container. */
  @Prop() customClass?: string = '';

  /** The alt text for accessibility. If not provided, defaults to the logo name. */
  @Prop() alt?: string;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getCssVarName(): string {
    const logoKey = this.name.toLowerCase().replace(/\s+/g, '_');
    const logoInfo = LOGO_VARIANTS[logoKey as LogoName];

    if (!logoInfo) {
      console.warn(
        `Logo "${this.name}" not found. Available logos:`,
        Object.keys(LOGO_VARIANTS).join(', ')
      );
      return '';
    }

    const filePath = this.emblem ? logoInfo.emblemPath : logoInfo.path;

    if (!filePath) {
      console.warn(
        `No ${this.emblem ? 'emblem' : 'logo'} path found for "${this.name}"`
      );
      return '';
    }

    // Convert file path to CSS variable name
    // e.g. logos/trimble/trimble.svg -> --modus-logo-trimble
    // e.g. logos/emblems/trimble-emblem.svg -> --modus-logo-emblem-trimble
    const parts = filePath.split('/');
    const category = parts[1]; // trimble, viewpoint, emblems
    const filename = parts[2].replace('.svg', '');

    if (category === 'emblems') {
      const name = filename.replace('-emblem', '');
      return `--modus-logo-emblem-${name}`;
    }
    return `--modus-logo-${filename}`;
  }

  private getClasses(): string {
    const classList: string[] = [];
    if (this.customClass) classList.push(this.customClass);
    return classList.join(' ');
  }

  render() {
    const altText = this.alt || this.name.replace(/_/g, ' ');
    const classes = this.getClasses();
    const cssVar = this.getCssVarName();

    return (
      <Host>
        <span
          class={`modus-wc-logo ${classes} ${this.emblem ? 'logo-emblem' : 'logo-full'}`}
          {...this.inheritedAttributes}
          role="img"
          aria-label={altText}
          style={cssVar ? { backgroundImage: `var(${cssVar})` } : {}}
        ></span>
      </Host>
    );
  }
}
