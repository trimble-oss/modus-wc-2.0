import {
  Component,
  Element,
  FunctionalComponent,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { LOGO_SVGS } from '../../svg-assets/generated/logo-svg-data';
import { handleShadowDOMStyles } from '../base-component';
import { LogoName } from '../types';
import { Attributes, inheritAriaAttributes } from '../utils';
import { LOGO_VARIANTS } from './logo-constants';

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

  /** The alt text for accessibility. If not provided, defaults to the logo name followed by "logo". */
  @Prop() alt?: string;

  /** Indicates that the logo is decorative. When true, sets aria-hidden to hide the logo from screen readers. */
  @Prop() decorative?: boolean = false;

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
      !logoInfo.selfContained
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

  private getAccessibleName(): string {
    if (this.alt) {
      return this.alt;
    }

    return `${this.name.replace(/_/g, ' ')} logo`;
  }

  private escapeSvgText(value: string): string {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  /**
   * The wrapper owns the accessible name. Hide each inline SVG from
   * assistive tech and give it a title so the graphic is still labeled in the DOM.
   */
  private prepareSvg(svgText: string, title?: string): string {
    if (!svgText) {
      return svgText;
    }

    const titleMarkup = title
      ? `<title>${this.escapeSvgText(title)}</title>`
      : '';

    return svgText.replace(/<svg\b([^>]*)>/, (_match, attributes: string) => {
      return `<svg${attributes} aria-hidden="true">${titleMarkup}`;
    });
  }

  render() {
    const altText = this.decorative ? undefined : this.getAccessibleName();
    const classes = this.getClasses();
    const svgContent = this.prepareSvg(this.getSvgContent(), altText);
    const emblemSvgContent = this.prepareSvg(
      this.getEmblemSvgContent(),
      altText
    );
    const isCombined = !this.emblem && !!emblemSvgContent;

    return (
      <Host>
        <span
          class={`modus-wc-logo ${classes} ${this.emblem ? 'logo-emblem' : 'logo-full'} ${isCombined ? 'logo-combined' : ''}`}
          {...this.inheritedAttributes}
          aria-hidden={
            this.decorative ? 'true' : this.inheritedAttributes['aria-hidden']
          }
          aria-label={altText}
          role={this.decorative ? undefined : 'img'}
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
