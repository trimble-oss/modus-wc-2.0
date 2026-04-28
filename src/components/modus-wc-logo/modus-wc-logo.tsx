import {
  Component,
  Element,
  FunctionalComponent,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';
import { LOGO_VARIANTS, LogoName } from './logo-constants';
import { LOGO_SVGS } from './logo-svg-data';

interface LogoSvgProps {
  svgText: string;
}

const LogoSvg: FunctionalComponent<LogoSvgProps> = ({ svgText }) => (
  <span innerHTML={svgText}></span>
);

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
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getSvgContent(): string {
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

    const svgContent = LOGO_SVGS[filePath];

    if (!svgContent) {
      console.warn(
        `SVG content not found for logo "${this.name}" at path "${filePath}".` +
          ' This usually indicates a mismatch between LOGO_VARIANTS and LOGO_SVGS.'
      );
      return '';
    }

    return svgContent;
  }

  private getEmblemSvgContent(): string {
    const logoKey = this.name.toLowerCase().replace(/\s+/g, '_');
    const logoInfo = LOGO_VARIANTS[logoKey as LogoName];

    if (
      !this.emblem &&
      logoInfo &&
      logoInfo.emblemPath &&
      logoInfo.category !== 'trimble_brand' &&
      logoInfo.category !== 'viewpoint'
    ) {
      return LOGO_SVGS[logoInfo.emblemPath] || '';
    }

    return '';
  }

  private getClasses(): string {
    const classList: string[] = [];
    if (this.customClass) classList.push(this.customClass);
    return classList.join(' ');
  }

  render() {
    const altText = this.alt || this.name.replace(/_/g, ' ');
    const classes = this.getClasses();
    const svgContent = this.getSvgContent();
    const emblemSvgContent = this.getEmblemSvgContent();
    const isCombined = !this.emblem && !!emblemSvgContent;

    return (
      <Host>
        <span
          class={`modus-wc-logo ${classes} ${this.emblem ? 'logo-emblem' : 'logo-full'} ${isCombined ? 'logo-combined' : ''}`}
          {...this.inheritedAttributes}
          role="img"
          aria-label={altText}
        >
          {isCombined && (
            <span class="logo-combined-emblem">
              <LogoSvg svgText={emblemSvgContent} />
            </span>
          )}
          <span class={isCombined ? 'logo-combined-wordmark' : ''}>
            <LogoSvg svgText={svgContent} />
          </span>
        </span>
      </Host>
    );
  }
}
