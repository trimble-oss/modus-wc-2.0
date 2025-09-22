import {
  Component,
  Element,
  Event,
  EventEmitter,
  h,
  Host,
  Prop,
} from '@stencil/core';
import { convertPropsToClasses } from './modus-wc-file-dropzone.tailwind';

/**
 * File dropzone component that allows users to drag and drop files for upload.
 */

@Component({
  tag: 'modus-wc-file-dropzone',
  styleUrl: 'modus-wc-file-dropzone.scss',
  shadow: false,
})
export class ModusWcFileDropzone {
  /** Reference to the host element */
  @Element() el!: HTMLElement;

  /** Apply a border to the file input */
  @Prop() bordered?: boolean;

  /** Set the size of the file input */
  @Prop() size?: 'xs' | 'sm' | 'md' | 'lg';

  /** Disable the file input */
  @Prop() disabled?: boolean;

  /** Allow multiple file selection */
  @Prop() multiple?: boolean;

  /** Label to display for the file input */
  @Prop() label?: string;

  /** Event emitted when files are selected */
  @Event() fileSelect!: EventEmitter<FileList>;

  handleFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    if (files) {
      this.fileSelect.emit(files);
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-file-input'];

    const propClasses = convertPropsToClasses({
      bordered: this.bordered,
      disabled: this.disabled,
      multiple: this.multiple,
      size: this.size,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);
    // if (this.customClass) classList.push(this.customClass);

    return classList.join(' ');
  }

  render() {
    return (
      <Host>
        <div class="modus-wc-file-dropzone">
          <input
            type="file"
            class={this.getClasses()}
            disabled={this.disabled}
            multiple={this.multiple}
            onChange={(event) => this.handleFileChange(event)}
          />
        </div>
      </Host>
    );
  }
}
