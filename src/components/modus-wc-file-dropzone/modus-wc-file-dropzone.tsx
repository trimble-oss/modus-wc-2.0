import {
  Component,
  Element,
  EventEmitter,
  h,
  Host,
  Prop,
  State,
  Event as StencilEvent,
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

  /** Tracks if files are being dragged over the dropzone */
  @State() isDraggingOver = false;

  /** Disable the file input */
  @Prop() disabled?: boolean;

  /** Event emitted when files are selected */
  @StencilEvent() fileSelect!: EventEmitter<FileList>;

  handleFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    console.log('Files selected:', files);
    if (files) {
      this.fileSelect.emit(files);
    }
  }

  private getClasses(): string {
    const classList: string[] = ['modus-wc-file-input'];

    const propClasses = convertPropsToClasses({
      disabled: this.disabled,
    });

    // The order CSS classes are added matters to CSS specificity
    if (propClasses) classList.push(propClasses);

    return classList.join(' ');
  }

  private inputRef?: HTMLInputElement;

  private handleDropzoneDrop = (event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();
    this.isDraggingOver = false;

    if (this.disabled) return;

    const files = event.dataTransfer?.files;
    if (files && files.length > 0) {
      this.fileSelect.emit(files);
    }
  };

  private handleDropzoneDragOver = (event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    if (!this.isDraggingOver) {
      this.isDraggingOver = true;
    }
  };

  private handleDropzoneDragLeave = (event: DragEvent): void => {
    event.preventDefault();
    event.stopPropagation();

    this.isDraggingOver = false;
  };

  private handleDropzoneClick = (): void => {
    if (this.disabled) return;
    this.inputRef?.click();
  };

  private handleDropzoneKeyDown = (event: KeyboardEvent): void => {
    // Handle Space or Enter key to activate the dropzone
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      if (this.disabled) return;
      this.inputRef?.click();
    }
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
            onChange={(event) => this.handleFileChange(event)}
          />
          <div
            class={`dropzone-content ${this.isDraggingOver ? 'dragging-over' : ''}`}
            role="button"
            tabindex={this.disabled ? -1 : 0}
            aria-label="Upload files"
            aria-disabled={this.disabled ? 'true' : 'false'}
            onClick={this.handleDropzoneClick}
            onKeyDown={this.handleDropzoneKeyDown}
            onDrop={this.handleDropzoneDrop}
            onDragOver={this.handleDropzoneDragOver}
            onDragLeave={this.handleDropzoneDragLeave}
            onDragExit={this.handleDropzoneDragLeave}
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
