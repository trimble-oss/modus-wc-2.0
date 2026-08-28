import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Watch,
  Event as StencilEvent,
} from '@stencil/core';
import {
  convertPropsToClasses,
  ImageFit,
  ImageShape,
  ImageSize,
} from './modus-wc-image.tailwind';
import { handleShadowDOMStyles } from '../base-component';

/**
 * A resilient atomic image component that wraps native <img> tags with consistent sizing,
 * aspect-ratio control, fallback error state, and full WCAG 2.1 AA accessibility support.
 */
@Component({
  tag: 'modus-wc-image',
  styleUrl: 'modus-wc-image.scss',
  shadow: false,
})
export class ModusWcImage {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** The source URL of the image asset. */
  @Prop() src!: string;

  /** Accessible text description. Omit or leave empty for decorative images. */
  @Prop() alt?: string;

  /** Determines dimensional size tokens. */
  @Prop({ reflect: true }) size?: ImageSize = 'md';

  /** Sets corner radius styling. */
  @Prop({ reflect: true }) shape?: ImageShape = 'square';

  /** Controls containment, cropping, and aspect ratio preservation. */
  @Prop({ reflect: true }) fit?: ImageFit = 'cover';

  /** Custom CSS class to apply to the component. */
  @Prop() customClass?: string = '';

  @State() hasError: boolean = false;
  @State() isLoaded: boolean = false;

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

  handleError = (event: Event) => {
    this.hasError = true;
    this.imageError.emit(event);
  };

  handleLoad = (event: Event) => {
    this.isLoaded = true;
    this.imageLoad.emit(event);
  };

  private renderFallback() {
    const label = this.alt || 'Image unavailable';

    return (
      <div class={this.getContainerClasses(true)} role="img" aria-label={label}>
        <div class="modus-wc-image-fallback">
          {/* Material Design "broken_image" icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            aria-hidden="true"
            class="modus-wc-image-fallback-icon"
          >
            <path d="M21 5v6.59l-3-3.01-4 4.01-4-4-4 4-3-3.01V5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2zm-3 6.42 3 3.01V19c0 1.1-.9 2-2 2H5c-1.1 0-2-.9-2-2v-6.58l3 2.99 4-4 4 4 4-3.99z" />
          </svg>
        </div>
      </div>
    );
  }

  render() {
    if (this.hasError) {
      return <Host class={this.customClass}>{this.renderFallback()}</Host>;
    }

    const isDecorative = !this.alt || this.alt.trim() === '';

    return (
      <Host class={this.customClass}>
        <div class={this.getContainerClasses()}>
          <img
            src={this.src}
            alt={isDecorative ? '' : this.alt}
            role={isDecorative ? 'presentation' : undefined}
            aria-hidden={isDecorative ? 'true' : undefined}
            class="modus-wc-image-img"
            onError={this.handleError}
            onLoad={this.handleLoad}
          />
        </div>
      </Host>
    );
  }
}
