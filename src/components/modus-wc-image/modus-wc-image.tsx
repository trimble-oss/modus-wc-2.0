import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
  Watch,
} from '@stencil/core';
import {
  convertPropsToClasses,
  ImageFit,
  ImageShape,
  ImageSize,
} from './modus-wc-image.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * A resilient atomic image component that wraps native <img> tags with consistent sizing,
 * aspect-ratio control, fallback error state, and full WCAG 2.2 accessibility support.
 */
@Component({
  tag: 'modus-wc-image',
  styleUrl: 'modus-wc-image.scss',
  shadow: false,
})
export class ModusWcImage {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The source URL of the image asset. */
  @Prop() src!: string;

  /** Accessible text description. Omit or leave empty for decorative images. */
  @Prop() alt?: string;

  /** Determines dimensional size tokens. */
  @Prop() size?: ImageSize = 'md';

  /** Sets corner radius styling. */
  @Prop() shape?: ImageShape = 'square';

  /** Controls containment, cropping, and aspect ratio preservation. */
  @Prop() fit?: ImageFit = 'default';

  /** Custom CSS class to apply to the component. */
  @Prop() customClass?: string = '';

  @State() private hasError: boolean = false;
  @State() private isLoaded: boolean = false;

  /** Event emitted when the image loads successfully. */
  @StencilEvent() imageLoad!: EventEmitter<Event>;

  /** Event emitted when the image fails to load. */
  @StencilEvent() imageError!: EventEmitter<Event>;

  @Watch('src')
  onSrcChange() {
    this.hasError = false;
    this.isLoaded = false;
  }

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getContainerClasses(isErrorContainer = false): string {
    const classList = ['modus-wc-image-container'];

    const propClasses = convertPropsToClasses({
      fit: this.fit,
      shape: this.shape,
      size: this.size,
    });

    if (propClasses) classList.push(propClasses);
    if (isErrorContainer) classList.push('modus-wc-image--error');
    else if (!this.isLoaded) classList.push('modus-wc-image--loading');

    return classList.join(' ');
  }

  private handleError = (event: Event) => {
    this.hasError = true;
    this.imageError.emit(event);
  };

  private handleLoad = (event: Event) => {
    this.isLoaded = true;
    this.imageLoad.emit(event);
  };

  private renderFallback() {
    const label = this.alt || 'Image unavailable';

    return (
      <div class={this.getContainerClasses(true)} role="img" aria-label={label}>
        <div class="modus-wc-image-fallback">
          <modus-wc-icon
            name="image_disabled"
            decorative
            class="modus-wc-image-fallback-icon"
          />
        </div>
      </div>
    );
  }

  render() {
    const hostClass = this.customClass || undefined;

    if (this.hasError) {
      return <Host class={hostClass}>{this.renderFallback()}</Host>;
    }

    const isDecorative = !this.alt || this.alt === '';

    return (
      <Host class={hostClass}>
        <div class={this.getContainerClasses()}>
          <img
            src={this.src}
            alt={isDecorative ? '' : this.alt}
            role={isDecorative ? 'presentation' : undefined}
            aria-hidden={isDecorative ? 'true' : undefined}
            class="modus-wc-image-img"
            onError={this.handleError}
            onLoad={this.handleLoad}
            {...this.inheritedAttributes}
          />
        </div>
      </Host>
    );
  }
}
