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
  @State() private isDraggingOver = false;

  /** Tracks if an invalid file type was selected */
  @State() private hasInvalidFileType = false;

  /** Tracks if files were successfully uploaded */
  @State() private uploadSuccess = false;

  /** Disable the file input */
  @Prop() disabled?: boolean;

  /** Accepted file types (e.g. '.jpg,.png' or 'image/*') */
  @Prop() acceptFileTypes?: string;

  /** Custom error message displayed when an invalid file type is selected */
  @Prop() invalidFileTypeMessage?: string;

  /** Success message displayed when files are uploaded successfully */
  @Prop() successMessage?: string;

  /** Custom instructions shown when files are dragged over the dropzone */
  @Prop() fileDraggedOverInstructions?: string;

  /** Custom instructions shown as the default dropzone message */
  @Prop() instructions?: string;

  /** Event emitted when files are selected */
  @StencilEvent() fileSelect!: EventEmitter<FileList>;

  private isValidFileType(file: File): boolean {
    if (!this.acceptFileTypes) return true;

    const acceptedTypes = this.acceptFileTypes
      .split(',')
      .map((type) => type.trim().toLowerCase());
    const fileName = file.name.toLowerCase();
    const fileType = file.type.toLowerCase();

    return acceptedTypes.some((acceptedType) => {
      if (acceptedType.includes('/*')) {
        const mainType = acceptedType.split('/')[0];
        return fileType.startsWith(mainType + '/');
      } else if (acceptedType.startsWith('.')) {
        return fileName.endsWith(acceptedType);
      } else {
        return fileType === acceptedType;
      }
    });
  }

  handleFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    this.hasInvalidFileType = false;
    this.uploadSuccess = false;

    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        if (!this.isValidFileType(files[i])) {
          this.hasInvalidFileType = true;
          (event.target as HTMLInputElement).value = '';
          return;
        }
      }

      this.fileSelect.emit(files);
      this.uploadSuccess = true;
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
      this.hasInvalidFileType = false;
      this.uploadSuccess = false;

      for (let i = 0; i < files.length; i++) {
        if (!this.isValidFileType(files[i])) {
          this.hasInvalidFileType = true;
          return;
        }
      }

      this.fileSelect.emit(files);
      this.uploadSuccess = true;
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
    if (event.key === ' ' || event.key === 'Enter') {
      event.preventDefault();
      if (this.disabled) return;
      this.inputRef?.click();
    }
  };

  render() {
    const invalidFileMessage =
      this.invalidFileTypeMessage || 'File format not accepted';
    const successMessage = this.successMessage || 'Successfully uploaded';
    const dragOverInstructions =
      this.fileDraggedOverInstructions || 'Drop files here';

    return (
      <Host>
        <div class="modus-wc-file-dropzone">
          <input
            ref={(el) => (this.inputRef = el as HTMLInputElement)}
            type="file"
            class={this.getClasses()}
            disabled={this.disabled}
            accept={this.acceptFileTypes}
            onChange={(event) => this.handleFileChange(event)}
          />
          <div
            class={`dropzone-content ${this.isDraggingOver ? 'dragging-over' : ''} ${this.hasInvalidFileType ? 'invalid-file-type' : ''} ${this.uploadSuccess ? 'upload-success' : ''}`}
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
              name={
                this.hasInvalidFileType
                  ? 'alert'
                  : this.uploadSuccess
                    ? 'check_circle'
                    : 'cloud_upload'
              }
              size="lg"
              class={`${
                this.hasInvalidFileType
                  ? 'error-icon'
                  : this.uploadSuccess
                    ? 'success-icon'
                    : 'upload-icon'
              }`}
              variant="solid"
            ></modus-wc-icon>
            <span>
              {this.hasInvalidFileType
                ? invalidFileMessage
                : this.uploadSuccess
                  ? successMessage
                  : this.isDraggingOver
                    ? dragOverInstructions
                    : this.instructions}
            </span>
          </div>
        </div>
      </Host>
    );
  }
}
