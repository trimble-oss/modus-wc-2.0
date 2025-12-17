import { Component, Element, h, Host, Prop, State } from '@stencil/core';
import { Attributes, inheritAriaAttributes, isLightMode } from '../utils';
import { LOGO_VARIANTS, LogoName } from './logo-constants';

/**
 * A component for displaying Trimble product logos with support for both fixed and scalable sizing.
 * Provides consistent branding across applications with various product logo options.
 */
@Component({
  tag: 'modus-wc-logo',
  styleUrl: 'modus-wc-logo.scss',
  shadow: false,
  assetsDirs: ['assets'],
})
export class ModusWcLogo {
  private inheritedAttributes: Attributes = {};
  private themeObserver: MutationObserver | null = null;

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

  @State() private isLight: boolean = true;

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);

    this.isLight = isLightMode();

    // Watch for theme attribute changes (only in browser environment)
    if (typeof MutationObserver !== 'undefined') {
      this.themeObserver = new MutationObserver(() => {
        this.isLight = isLightMode();
      });

      // Observe the html element for data-theme attribute changes
      this.themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });
    }
  }

  disconnectedCallback() {
    if (this.themeObserver) {
      this.themeObserver.disconnect();
    }
  }

  private getLogoPath(): string {
    const logoKey = this.name.toLowerCase().replace(/\s+/g, '_');
    const logoInfo = LOGO_VARIANTS[logoKey];

    if (!logoInfo) {
      console.warn(
        `Logo "${this.name}" not found. Available logos:`,
        Object.keys(LOGO_VARIANTS).join(', ')
      );
      return '';
    }

    // Determine which path to use based on emblem and theme
    let path: string | undefined;

    if (this.emblem) {
      // Emblem mode - check for dark emblem first if in dark theme
      path =
        !this.isLight && logoInfo.emblemPathDark
          ? logoInfo.emblemPathDark
          : logoInfo.emblemPath;
    } else {
      // Full logo mode - check for dark logo first if in dark theme
      path =
        !this.isLight && logoInfo.pathDark ? logoInfo.pathDark : logoInfo.path;
    }

    if (!path) {
      console.warn(
        `No ${this.emblem ? 'emblem' : 'logo'} path found for "${this.name}" in ${this.isLight ? 'light' : 'dark'} theme`
      );
      return '';
    }

    // Return the full path for use in img src
    return `/assets/${path}`;
  }

  private getClasses(): string {
    const classList: string[] = [];

    if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    const altText = this.alt || this.name.replace(/_/g, ' ');
    const classes = this.getClasses();
    const logoPath = this.getLogoPath();

    return (
      <Host>
        <span
          class={`modus-wc-logo ${classes} ${this.emblem ? 'logo-emblem' : 'logo-full'}`}
          {...this.inheritedAttributes}
          role="img"
          aria-label={altText}
        >
          <img src={logoPath} alt={altText} />
        </span>
      </Host>
    );
  }
}
