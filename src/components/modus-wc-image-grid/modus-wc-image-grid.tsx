import { Component, Element, h, Host, Prop } from '@stencil/core';
import {
  convertPropsToClasses,
  ImageGridShape,
} from './modus-wc-image-grid.tailwind';
import { handleShadowDOMStyles } from '../base-component';
import { Attributes, inheritAriaAttributes } from '../utils';

export interface IImageGridImage {
  /** The source URL of the image asset. */
  src: string;
  /** Accessible text description for the image. */
  alt?: string;
}

/**
 * A responsive image grid that displays 1 to 4 images in rectangle or square layouts.
 *
 * Each cell is rendered with `modus-wc-image` for consistent sizing, cropping, and fallback behavior.
 */
@Component({
  tag: 'modus-wc-image-grid',
  styleUrl: 'modus-wc-image-grid.scss',
  shadow: false,
})
export class ModusWcImageGrid {
  private inheritedAttributes: Attributes = {};

  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Images to display in the grid. Only the first N images are shown based on `imagesPerView`. */
  @Prop() images: IImageGridImage[] = [];

  /** Sets the cell aspect ratio layout. */
  @Prop() imageShape?: ImageGridShape = 'rectangle';

  /** Maximum number of images to display in the grid (1–4). */
  @Prop() imagesPerView?: number = 4;

  /** Custom CSS class to apply to the grid container. */
  @Prop() customClass?: string = '';

  componentWillLoad() {
    handleShadowDOMStyles(this.el);
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

  private getImageCount(): number {
    const count = this.imagesPerView ?? 4;

    if (count < 1) {
      return 1;
    }

    return Math.min(count, 4);
  }

  private getVisibleImages(): IImageGridImage[] {
    const count = this.getImageCount();
    return (this.images ?? []).slice(0, count);
  }

  private getContainerClasses(): string {
    const classList = ['modus-wc-image-grid-container'];

    if (this.customClass) {
      classList.push(this.customClass);
    }

    return classList.join(' ');
  }

  private getHostClasses(visibleCount: number): string {
    const classList = ['modus-wc-image-grid'];

    const propClasses = convertPropsToClasses({
      imageShape: this.imageShape ?? 'rectangle',
      imageCount: visibleCount,
    });

    classList.push(propClasses);

    return classList.join(' ');
  }

  render() {
    const visibleImages = this.getVisibleImages();
    const visibleCount = Math.max(visibleImages.length, 1);

    return (
      <Host class={this.getHostClasses(visibleCount)}>
        <div
          class={this.getContainerClasses()}
          role="group"
          {...this.inheritedAttributes}
        >
          {visibleImages.map((image, index) => (
            <modus-wc-image
              key={`${image.src}-${index}`}
              src={image.src}
              alt={image.alt}
              shape="rounded"
              fit="default"
              custom-class="modus-wc-image-grid-cell"
            />
          ))}
        </div>
      </Host>
    );
  }
}
