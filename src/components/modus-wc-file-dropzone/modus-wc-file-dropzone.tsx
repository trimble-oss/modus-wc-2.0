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

  /** Tracks if file has any validation error and the type of error */
  @State() private invalidFile: 'none' | 'type' | 'name' | 'count' | 'size' =
    'none';

  /** Tracks if files were successfully uploaded */
  @State() private uploadSuccess = false;

  /** Accepted file types (e.g. '.jpg,.png' or 'image/*') */
  @Prop() acceptFileTypes?: string;

  /** Disable the file input */
  @Prop() disabled?: boolean;

  /** Custom instructions shown when files are dragged over the dropzone */
  @Prop() fileDraggedOverInstructions?: string;

  /** Include state icon (upload, success, error) */
  @Prop() includeStateIcon?: boolean = true;

  /** Custom instructions shown as the default dropzone message */
  @Prop() instructions?: string;

  /** Custom error message displayed when an invalid file type is selected */
  @Prop() invalidFileTypeMessage?: string;

  /** Maximum allowed length of filename, will show error if exceeded */
  @Prop() maxFileNameLength?: number;

  /** Maximum number of files allowed, will show error if exceeded */
  @Prop() maxFileCount?: number;

  /** Maximum total file size in bytes allowed, will show error if exceeded */
  @Prop() maxTotalFileSizeBytes?: number;

  /** Allow multiple file selection */
  @Prop() multiple?: boolean;

  /** Success message displayed when files are uploaded successfully */
  @Prop() successMessage?: string;

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

  private isValidFileName(file: File): boolean {
    if (!this.maxFileNameLength) return true;
    return file.name.length <= this.maxFileNameLength;
  }

  private isValidFileCount(fileCount: number): boolean {
    if (!this.maxFileCount) return true;
    return fileCount <= this.maxFileCount;
  }

  private isValidFileSize(files: FileList): boolean {
    if (!this.maxTotalFileSizeBytes) return true;
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
    }
    return totalSize <= this.maxTotalFileSizeBytes;
  }

  handleFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;
    // Reset validation state
    this.invalidFile = 'none';
    this.uploadSuccess = false;

    if (files && files.length > 0) {
      // Check file count
      if (!this.isValidFileCount(files.length)) {
        this.invalidFile = 'count';
        (event.target as HTMLInputElement).value = '';
        return;
      }

      // Check total file size
      if (!this.isValidFileSize(files)) {
        this.invalidFile = 'size';
        (event.target as HTMLInputElement).value = '';
        return;
      }

      // Check each file
      for (let i = 0; i < files.length; i++) {
        // Check file type
        if (!this.isValidFileType(files[i])) {
          this.invalidFile = 'type';
          (event.target as HTMLInputElement).value = '';
          return;
        }

        // Check file name length
        if (!this.isValidFileName(files[i])) {
          this.invalidFile = 'name';
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
      // Reset validation state
      this.invalidFile = 'none';
      this.uploadSuccess = false;

      // Check file count
      if (!this.isValidFileCount(files.length)) {
        this.invalidFile = 'count';
        return;
      }

      // Check total file size
      if (!this.isValidFileSize(files)) {
        this.invalidFile = 'size';
        return;
      }

      // Check each file
      for (let i = 0; i < files.length; i++) {
        // Check file type
        if (!this.isValidFileType(files[i])) {
          this.invalidFile = 'type';
          return;
        }

        // Check file name length
        if (!this.isValidFileName(files[i])) {
          this.invalidFile = 'name';
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

    if (this.disabled) return;

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

  // Helper method to format file size in human-readable format
  private formatFileSize(bytes?: number): string {
    if (!bytes) return '0 Bytes';

    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  }

  render() {
    const invalidFileMessage =
      this.invalidFileTypeMessage || 'File format not accepted';
    const fileNameTooLongMessage = `Filename exceeds maximum length of ${this.maxFileNameLength} characters`;
    const tooManyFilesMessage = `Maximum number of files allowed is ${this.maxFileCount}`;
    const fileSizeTooLargeMessage = `Total file size exceeds the maximum of ${this.formatFileSize(this.maxTotalFileSizeBytes)}`;
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
            multiple={this.multiple}
            onChange={(event) => this.handleFileChange(event)}
          />
          <div
            class={`dropzone-content 
              ${this.isDraggingOver ? 'dragging-over' : ''} 
              ${!this.isDraggingOver && this.invalidFile !== 'none' ? 'invalid-file-type' : ''} 
              ${!this.isDraggingOver && this.uploadSuccess ? 'upload-success' : ''}`}
            role="button"
            tabindex={this.disabled ? -1 : 0}
            aria-label="Upload files"
            aria-disabled={this.disabled ? 'true' : 'false'}
            onClick={this.handleDropzoneClick}
            onKeyDown={this.handleDropzoneKeyDown}
            onDrop={this.handleDropzoneDrop}
            onDragOver={this.handleDropzoneDragOver}
            onDragLeave={this.handleDropzoneDragLeave}
          >
            <div class="default-content">
              {(this.invalidFile !== 'none' ||
                this.uploadSuccess ||
                this.isDraggingOver ||
                this.includeStateIcon) && (
                <modus-wc-icon
                  name={
                    this.isDraggingOver
                      ? 'cloud_upload'
                      : this.invalidFile !== 'none'
                        ? 'alert'
                        : this.uploadSuccess
                          ? 'check_circle'
                          : 'cloud_upload'
                  }
                  size="lg"
                  class={`${
                    this.isDraggingOver
                      ? 'upload-icon'
                      : this.invalidFile !== 'none'
                        ? 'error-icon'
                        : this.uploadSuccess
                          ? 'success-icon'
                          : 'upload-icon'
                  }`}
                  variant="solid"
                ></modus-wc-icon>
              )}
              <span>
                {this.isDraggingOver
                  ? dragOverInstructions
                  : this.invalidFile === 'type'
                    ? invalidFileMessage
                    : this.invalidFile === 'name'
                      ? fileNameTooLongMessage
                      : this.invalidFile === 'count'
                        ? tooManyFilesMessage
                        : this.invalidFile === 'size'
                          ? fileSizeTooLargeMessage
                          : this.uploadSuccess
                            ? successMessage
                            : this.instructions}
              </span>
              <div
                style={{
                  display:
                    this.isDraggingOver ||
                    this.uploadSuccess ||
                    this.invalidFile !== 'none' ||
                    this.disabled
                      ? 'none'
                      : 'block',
                }}
              >
                <slot name="dropzone"></slot>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
