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
      disabled: this.disabled,
      multiple: this.multiple,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);

    return classList.join(' ');
  }

  private inputRef?: HTMLInputElement;

  private handleDropzoneDrop = (event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    if (this.disabled) return;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.fileSelect.emit(files);
    }
  };

  private handleDropzoneDragOver = (event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
  };

  private handleDropzoneClick = (): void => {
    if (this.disabled) return;
    this.inputRef?.click();
  };

  render() {
    return (
      <Host>
        <div class="modus-wc-file-dropzone">
          <input
            ref={(el) => (this.inputRef = el as HTMLInputElement)}
            type="file"
            class={this.getClasses()}
            disabled={this.disabled}
            multiple={this.multiple}
            onChange={(event) => this.handleFileChange(event)}
          />
          <div
            class="dropzone-content"
            onClick={this.handleDropzoneClick}
            onDrop={this.handleDropzoneDrop}
            onDragOver={this.handleDropzoneDragOver}
          >
            <modus-wc-icon
              name="cloud_upload"
              size="lg"
              class="upload-icon"
              variant="solid"
            ></modus-wc-icon>
            <span>Drop files here or click to select files</span>
          </div>
        </div>
      </Host>
    );
  }
}
