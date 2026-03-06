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
  if (!svgCache.has(url)) {
    svgCache.set(
      url,
      fetch(url).then((r) => (r.ok ? r.text() : ''))
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

  // svgContent is in @State so Stencil owns it — re-renders re-set innerHTML from
  // state, so DevTools inspection never causes the SVG to disappear.
  @State() private svgContent: string = '';

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    // Return the promise so Stencil waits before first render — no empty flash
    return this.loadSvg();
  }

  componentDidLoad() {
    if (typeof MutationObserver !== 'undefined') {
      this.themeObserver = new MutationObserver(() => {
        void this.loadSvg();
      });
      this.themeObserver.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme'],
      });
    }
  }

  disconnectedCallback() {
    this.themeObserver?.disconnect();
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
      return;
    }
    const text = await fetchSvgText(assetPath);
    this.svgContent = text;
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

    /* istanbul ignore if */
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

    return (
      <Host>
        <span
          class={`modus-wc-logo ${classes} ${this.emblem ? 'logo-emblem' : 'logo-full'}`}
          {...this.inheritedAttributes}
          role="img"
          aria-label={altText}
        >
          <LogoSvg svgText={this.svgContent} />
        </span>
      </Host>
    );
  }
}
