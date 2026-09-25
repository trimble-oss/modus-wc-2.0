import {
  Component,
  Element,
  Event,
  EventEmitter,
  FunctionalComponent,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { ILLUSTRATION_SVGS } from '../../svg-assets/generated/illustration-svg-data';
import { handleShadowDOMStyles } from '../base-component';
import { prefixSvgFragmentIds } from '../svg-id-prefix';
import { Attributes, generateElementId, inheritAriaAttributes } from '../utils';
import {
  DEFAULT_ILLUSTRATION_BY_VARIANT,
  EmptyStateIllustration,
  EmptyStateVariant,
  ILLUSTRATION_VARIANTS,
} from './illustration-constants';

interface IllustrationSvgProps {
  svgText: string;
}

const IllustrationSvg: FunctionalComponent<IllustrationSvgProps> = ({
  svgText,
}) => <span innerHTML={svgText}></span>;

/**
 * Presents a centered empty, error, or placeholder state with bundled illustrations,
 * heading, optional subtitle, and an optional call-to-action.
 */
@Component({
  tag: 'modus-wc-empty-state',
  styleUrl: 'modus-wc-empty-state.scss',
  shadow: false,
})
export class ModusWcEmptyState {
  private inheritedAttributes: Attributes = {};
  private svgInstanceScope = '';

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Layout variant: compact icon, full illustration, or dedicated error (404) treatment. */
  @Prop() variant: EmptyStateVariant = 'compact';

  /**
   * Bundled illustration name. Valid values depend on `variant`:
   * compact — `selection_plus`, `symbol_info`, `add_user`;
   * illustration — `landscape`, `documents_empty`, `cloud_access`, `store_settings`, `error_404`;
   * error — `page_not_found`.
   */
  @Prop() illustration?: EmptyStateIllustration;

  /** Primary heading text. */
  @Prop() heading!: string;

  /** Secondary descriptive text (clamped to three lines in the layout). */
  @Prop() subtitle?: string;

  /** When set, renders a centered primary action button with this label. */
  @Prop() actionLabel?: string;

  /** Custom CSS class for the root container. */
  @Prop() customClass?: string = '';

  /** Fires when the optional action button is activated. */
  @Event() actionClick!: EventEmitter<MouseEvent | KeyboardEvent>;

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
    this.svgInstanceScope = generateElementId();
  }

  private resolveIllustrationKey(): EmptyStateIllustration {
    const requested = this.illustration;
    const fallback = DEFAULT_ILLUSTRATION_BY_VARIANT[this.variant];

    if (!requested) {
      return fallback;
    }

    const info = ILLUSTRATION_VARIANTS[requested];
    if (!info || !info.layoutVariants.includes(this.variant)) {
      console.warn(
        `Illustration "${requested}" is not valid for variant "${this.variant}". Using "${fallback}".`
      );
      return fallback;
    }

    return requested;
  }

  private scopeForPath(path: string): string {
    const slug = path.replace(/[^a-zA-Z0-9]+/g, '_');
    return `${this.svgInstanceScope}_${slug}`;
  }

  private getSvgContent(path: string): string {
    const content = ILLUSTRATION_SVGS[path];
    if (!content) {
      console.warn(`SVG content not found for illustration path "${path}".`);
      return '';
    }

    return prefixSvgFragmentIds(content, this.scopeForPath(path));
  }

  private handleActionClick = (
    event: CustomEvent<MouseEvent | KeyboardEvent>
  ) => {
    this.actionClick.emit(event.detail);
  };

  private renderIllustration(key: EmptyStateIllustration) {
    const info = ILLUSTRATION_VARIANTS[key];
    const illustrationClass = `modus-wc-empty-state-illustration modus-wc-empty-state-illustration--${this.variant}`;

    if (info.layerPaths && info.layerPaths.length > 1) {
      const [backgroundPath, foregroundPath] = info.layerPaths;
      const backgroundSvg = this.getSvgContent(backgroundPath);
      const foregroundSvg = this.getSvgContent(foregroundPath);

      return (
        <div class={illustrationClass} aria-hidden="true">
          <span class="modus-wc-empty-state-illustration-layer modus-wc-empty-state-illustration-layer--background">
            <IllustrationSvg svgText={backgroundSvg} />
          </span>
          <span class="modus-wc-empty-state-illustration-layer modus-wc-empty-state-illustration-layer--foreground">
            <IllustrationSvg svgText={foregroundSvg} />
          </span>
        </div>
      );
    }

    const svgContent = this.getSvgContent(info.path);

    return (
      <div class={illustrationClass} aria-hidden="true">
        <IllustrationSvg svgText={svgContent} />
      </div>
    );
  }

  private getRootClasses(): string {
    const classes = [
      'modus-wc-empty-state',
      `modus-wc-empty-state--${this.variant}`,
    ];
    if (this.customClass) {
      classes.push(this.customClass);
    }
    return classes.join(' ');
  }

  render() {
    const illustrationKey = this.resolveIllustrationKey();
    const showAction = Boolean(this.actionLabel?.trim());

    return (
      <Host {...this.inheritedAttributes}>
        <div class={this.getRootClasses()}>
          {this.renderIllustration(illustrationKey)}
          <div class="modus-wc-empty-state-content">
            <modus-wc-typography
              hierarchy="h2"
              size="lg"
              weight="normal"
              label={this.heading}
              customClass="modus-wc-empty-state-title"
            ></modus-wc-typography>
            {this.subtitle ? (
              <modus-wc-typography
                hierarchy="p"
                size="sm"
                weight="normal"
                label={this.subtitle}
                customClass="modus-wc-empty-state-subtitle"
              ></modus-wc-typography>
            ) : null}
            {showAction ? (
              <div class="modus-wc-empty-state-action">
                <modus-wc-button
                  variant="filled"
                  color="primary"
                  size="sm"
                  onButtonClick={this.handleActionClick}
                >
                  {this.actionLabel}
                </modus-wc-button>
              </div>
            ) : null}
          </div>
        </div>
      </Host>
    );
  }
}
