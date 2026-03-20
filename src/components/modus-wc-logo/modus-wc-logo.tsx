import {
  Component,
  Element,
  FunctionalComponent,
  getAssetPath,
  h,
  Host,
  Prop,
  State,
  Watch,
} from '@stencil/core';
import { Attributes, inheritAriaAttributes } from '../utils';
import { LOGO_VARIANTS, LogoName } from './logo-constants';
import { svgCache } from './logo-svg-cache';

function fetchSvgText(url: string): Promise<string> {
  if (typeof fetch === 'undefined') return Promise.resolve('');
  if (!svgCache.has(url)) {
    svgCache.set(
      url,
      fetch(url)
        .then((r) => (r.ok ? r.text() : ''))
        .catch(() => {
          svgCache.delete(url);
          return '';
        })
    );
  }
  return svgCache.get(url)!;
}

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
  assetsDirs: ['assets'],
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

  @State() private svgContent: string = '';
  @State() private emblemSvgContent: string = '';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    return this.loadSvg();
  }

  @Watch('name')
  @Watch('emblem')
  onLogoPropsChange() {
    void this.loadSvg();
  }

  private async loadSvg(): Promise<void> {
    const assetPath = this.getAssetFilePath();
    if (!assetPath) {
      this.svgContent = '';
      this.emblemSvgContent = '';
      return;
    }
    this.svgContent = await fetchSvgText(assetPath);

    const logoKey = this.name.toLowerCase().replace(/\s+/g, '_') as LogoName;
    const logoInfo = LOGO_VARIANTS[logoKey];
    if (
      !this.emblem &&
      logoInfo &&
      logoInfo.emblemPath &&
      logoKey !== 'trimble' &&
      !logoKey.startsWith('viewpoint')
    ) {
      this.emblemSvgContent = await fetchSvgText(
        getAssetPath(`assets/${logoInfo.emblemPath}`)
      );
    } else {
      this.emblemSvgContent = '';
    }
  }

  private getAssetFilePath(): string {
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

    /* istanbul ignore next */
    if (!filePath) {
      console.warn(
        `No ${this.emblem ? 'emblem' : 'logo'} path found for "${this.name}"`
      );
      return '';
    }

    return getAssetPath(`assets/${filePath}`);
  }

  private getClasses(): string {
    const classList: string[] = [];
    if (this.customClass) classList.push(this.customClass);
    return classList.join(' ');
  }

  render() {
    const altText = this.alt || this.name.replace(/_/g, ' ');
    const classes = this.getClasses();
    const isCombined = !this.emblem && this.emblemSvgContent;

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
              <LogoSvg svgText={this.emblemSvgContent} />
            </span>
          )}
          <span class={isCombined ? 'logo-combined-wordmark' : ''}>
            <LogoSvg svgText={this.svgContent} />
          </span>
        </span>
      </Host>
    );
  }
}
