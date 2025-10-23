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
import { Attributes, inheritAriaAttributes } from '../utils';

/**
 * File dropzone component that allows users to drag and drop files for upload.
 */

@Component({
  tag: 'modus-wc-file-dropzone',
  styleUrl: 'modus-wc-file-dropzone.scss',
  shadow: false,
})
export class ModusWcFileDropzone {
  private inheritedAttributes: Attributes = {};

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

  /** Custom CSS class to apply to the file dropzone element */
  @Prop() customClass?: string = '';

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

  componentWillLoad() {
    this.inheritedAttributes = inheritAriaAttributes(this.el);
  }

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
    if (this.maxFileNameLength === undefined || this.maxFileNameLength === null)
      return true;

    const fileNameWithoutExtension = file.name.replace(/\.[^/.]+$/, '');
    return fileNameWithoutExtension.length <= this.maxFileNameLength;
  }

  private isValidFileCount(fileCount: number): boolean {
    if (this.maxFileCount === undefined || this.maxFileCount === null)
      return true;
    return fileCount <= this.maxFileCount;
  }

  private isValidFileSize(files: FileList): boolean {
    if (
      this.maxTotalFileSizeBytes === undefined ||
      this.maxTotalFileSizeBytes === null
    )
      return true;
    let totalSize = 0;
    for (let i = 0; i < files.length; i++) {
      totalSize += files[i].size;
    }
    return totalSize <= this.maxTotalFileSizeBytes;
  }

  private setInputValue(
    val: 'none' | 'type' | 'name' | 'count' | 'size',
    inputElement?: HTMLInputElement
  ): boolean {
    this.invalidFile = val;
    const input = inputElement || this.inputRef;
    if (input) input.value = '';
    return false;
  }

  handleFileChange(event: Event) {
    const files = (event.target as HTMLInputElement).files;

    // Early return if no files
    if (!files || files.length === 0) {
      return;
    }

    // Reset validation state
    this.invalidFile = 'none';
    this.uploadSuccess = false;

    // Check file count
    if (!this.isValidFileCount(files.length)) {
      return this.setInputValue('count', event.target as HTMLInputElement);
    }

    // Check total file size
    if (!this.isValidFileSize(files)) {
      return this.setInputValue('size', event.target as HTMLInputElement);
    }

    // Check each file
    for (let i = 0; i < files.length; i++) {
      // Check file type
      if (!this.isValidFileType(files[i])) {
        return this.setInputValue('type', event.target as HTMLInputElement);
      }

      // Check file name length
      if (!this.isValidFileName(files[i])) {
        return this.setInputValue('name', event.target as HTMLInputElement);
      }
    }

    this.fileSelect.emit(files);
    this.uploadSuccess = true;
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
        this.setInputValue('count');
        return;
      }

      // Check total file size
      if (!this.isValidFileSize(files)) {
        this.setInputValue('size');
        return;
      }

      // Check each file
      for (let i = 0; i < files.length; i++) {
        // Check file type
        if (!this.isValidFileType(files[i])) {
          this.setInputValue('type');
          return;
        }

        // Check file name length
        if (!this.isValidFileName(files[i])) {
          this.setInputValue('name');
          return;
        }
      }

      this.uploadSuccess = true;
      this.fileSelect.emit(files);
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
    const messages = {
      type: this.invalidFileTypeMessage || 'File format not accepted',
      name: `Filename exceeds maximum length`,
      count: `Maximum number of files allowed is ${this.maxFileCount}`,
      size: `Total file size exceeds ${this.formatFileSize(this.maxTotalFileSizeBytes)}`,
      success: this.successMessage || 'Successfully uploaded',
      dragOver: this.fileDraggedOverInstructions || 'Drop files here',
    };

    const hasState =
      this.isDraggingOver || this.invalidFile !== 'none' || this.uploadSuccess;
    const showIcon = this.includeStateIcon !== false;

    const iconMap = {
      dragging: 'cloud_upload',
      invalid: 'alert',
      success: 'check_circle',
      default: 'cloud_upload',
    };

    const iconState = this.isDraggingOver
      ? iconMap.dragging
      : this.invalidFile !== 'none'
        ? iconMap.invalid
        : this.uploadSuccess
          ? iconMap.success
          : iconMap.default;

    const iconClass = this.isDraggingOver
      ? 'upload-icon'
      : this.invalidFile !== 'none'
        ? 'error-icon'
        : this.uploadSuccess
          ? 'success-icon'
          : 'upload-icon';

    const message = this.isDraggingOver
      ? messages.dragOver
      : this.invalidFile !== 'none'
        ? messages[this.invalidFile]
        : this.uploadSuccess
          ? messages.success
          : this.instructions;

    const showDropzoneSlot = hasState || this.disabled ? 'none' : 'block';

    return (
      <Host>
        <div class="modus-wc-file-dropzone">
          <input
            accept={this.acceptFileTypes}
            class={this.getClasses()}
            disabled={this.disabled}
            multiple={this.multiple}
            onChange={(event) => this.handleFileChange(event)}
            ref={(el) => (this.inputRef = el as HTMLInputElement)}
            type="file"
          />
          <div
            aria-disabled={this.disabled ? 'true' : 'false'}
            class={`dropzone-content 
              ${this.isDraggingOver ? 'dragging-over' : ''} 
              ${!this.isDraggingOver && this.invalidFile !== 'none' ? 'invalid-file-type' : ''} 
              ${!this.isDraggingOver && this.uploadSuccess ? 'upload-success' : ''} 
              ${this.customClass || ''}`}
            onClick={this.handleDropzoneClick}
            onDragLeave={this.handleDropzoneDragLeave}
            onDragOver={this.handleDropzoneDragOver}
            onDrop={this.handleDropzoneDrop}
            onKeyDown={this.handleDropzoneKeyDown}
            role="button"
            tabindex={this.disabled ? -1 : 0}
            {...this.inheritedAttributes}
          >
            <div class="default-content">
              {showIcon && (
                <modus-wc-icon
                  class={iconClass}
                  name={iconState}
                  size="lg"
                  variant="solid"
                ></modus-wc-icon>
              )}
              <span>{message}</span>
              <div style={{ display: showDropzoneSlot }}>
                <slot name="dropzone"></slot>
              </div>
            </div>
          </div>
        </div>
      </Host>
    );
  }
}
