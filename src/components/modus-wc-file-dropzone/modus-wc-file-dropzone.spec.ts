/* eslint-disable @typescript-eslint/unbound-method */
import { newSpecPage } from '@stencil/core/testing';
import { ModusWcFileDropzone } from './modus-wc-file-dropzone';

describe('modus-wc-file-dropzone', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with disabled prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone disabled></modus-wc-file-dropzone>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with accept-file-types prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone accept-file-types=".jpg,.png,image/*"></modus-wc-file-dropzone>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom instructions', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone instructions="Upload documents here"></modus-wc-file-dropzone>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom drag-over instructions', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone file-dragged-over-instructions="Release to upload"></modus-wc-file-dropzone>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit fileSelect event when files are selected via input', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create mock file
    const file = new File(['test content'], 'test-file.txt', {
      type: 'text/plain',
    });
    const fileList = {
      0: file,
      length: 1,
      item: () => file,
    } as unknown as FileList;

    // Simulate file input change
    const event = {
      target: {
        files: fileList,
        value: 'test-file.txt',
      },
    } as unknown as Event;

    component.handleFileChange(event);

    expect(fileSelectSpy).toHaveBeenCalledWith(fileList);
    expect(component.uploadSuccess).toBe(true);
  });

  it('should handle early return when no files are present', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Initialize component state
    component.uploadSuccess = true;
    component.invalidFile = 'none';

    // Case 1: files is null
    const nullFilesEvent = {
      target: {
        files: null,
      },
    } as unknown as Event;

    component.handleFileChange(nullFilesEvent);

    // Verify state wasn't changed and event wasn't emitted
    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.uploadSuccess).toBe(true); // Should remain unchanged

    // Case 2: files is empty
    const emptyFilesEvent = {
      target: {
        files: {
          length: 0,
        } as unknown as FileList,
      },
    } as unknown as Event;

    component.handleFileChange(emptyFilesEvent);

    // Verify state wasn't changed and event wasn't emitted
    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.uploadSuccess).toBe(true); // Should remain unchanged
  });

  it('should validate file types based on file extension in accept-file-types', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone accept-file-types=".jpg,.png"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create invalid file type
    const invalidFile = new File(['test content'], 'test-file.txt', {
      type: 'text/plain',
    });
    const invalidFileList = {
      0: invalidFile,
      length: 1,
      item: () => invalidFile,
    } as unknown as FileList;

    // Simulate file input change with invalid file
    const invalidEvent = {
      target: {
        files: invalidFileList,
        value: '',
      },
    } as unknown as Event;

    component.handleFileChange(invalidEvent);

    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('type');
    expect(component.uploadSuccess).toBe(false);

    // Create valid file type
    const validFile = new File(['test content'], 'test-file.jpg', {
      type: 'image/jpeg',
    });
    const validFileList = {
      0: validFile,
      length: 1,
      item: () => validFile,
    } as unknown as FileList;

    // Simulate file input change with valid file
    const validEvent = {
      target: {
        files: validFileList,
        value: 'test-file.jpg',
      },
    } as unknown as Event;

    component.handleFileChange(validEvent);

    expect(fileSelectSpy).toHaveBeenCalledWith(validFileList);
    expect(component.uploadSuccess).toBe(true);
  });

  it('should validate file types based on wildcard MIME types in accept-file-types', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone accept-file-types="image/*"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create invalid file type (not an image)
    const invalidFile = new File(['test content'], 'test-file.txt', {
      type: 'text/plain',
    });
    const invalidFileList = {
      0: invalidFile,
      length: 1,
      item: () => invalidFile,
    } as unknown as FileList;

    // Simulate file input change with invalid file
    const invalidEvent = {
      target: {
        files: invalidFileList,
        value: '',
      },
    } as unknown as Event;

    component.handleFileChange(invalidEvent);

    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('type');
    expect(component.uploadSuccess).toBe(false);

    // Create valid file type (image/png matches image/*)
    const validFile = new File(['test content'], 'test-image.png', {
      type: 'image/png',
    });
    const validFileList = {
      0: validFile,
      length: 1,
      item: () => validFile,
    } as unknown as FileList;

    // Simulate file input change with valid file
    const validEvent = {
      target: {
        files: validFileList,
        value: 'test-image.png',
      },
    } as unknown as Event;

    component.handleFileChange(validEvent);

    expect(fileSelectSpy).toHaveBeenCalledWith(validFileList);
    expect(component.uploadSuccess).toBe(true);
  });

  it('should validate file types based on exact MIME types in accept-file-types', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone accept-file-types="application/pdf"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create invalid file type (not a PDF)
    const invalidFile = new File(['test content'], 'test-file.txt', {
      type: 'text/plain',
    });
    const invalidFileList = {
      0: invalidFile,
      length: 1,
      item: () => invalidFile,
    } as unknown as FileList;

    // Simulate file input change with invalid file
    const invalidEvent = {
      target: {
        files: invalidFileList,
        value: '',
      },
    } as unknown as Event;

    component.handleFileChange(invalidEvent);

    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('type');
    expect(component.uploadSuccess).toBe(false);

    // Create valid file type (exact match on application/pdf)
    const validFile = new File(['test content'], 'document.pdf', {
      type: 'application/pdf',
    });
    const validFileList = {
      0: validFile,
      length: 1,
      item: () => validFile,
    } as unknown as FileList;

    // Simulate file input change with valid file
    const validEvent = {
      target: {
        files: validFileList,
        value: 'document.pdf',
      },
    } as unknown as Event;

    component.handleFileChange(validEvent);

    expect(fileSelectSpy).toHaveBeenCalledWith(validFileList);
    expect(component.uploadSuccess).toBe(true);
  });

  it('should validate file name length', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone max-file-name-length="10"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create file with long name
    const invalidFile = new File(['test content'], 'very-long-file-name.txt', {
      type: 'text/plain',
    });
    const invalidFileList = {
      0: invalidFile,
      length: 1,
      item: () => invalidFile,
    } as unknown as FileList;

    // Simulate file input change
    const invalidEvent = {
      target: {
        files: invalidFileList,
        value: '',
      },
    } as unknown as Event;

    component.handleFileChange(invalidEvent);

    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('name');

    // Create file with valid name length
    const validFile = new File(['test content'], 'short.txt', {
      type: 'text/plain',
    });
    const validFileList = {
      0: validFile,
      length: 1,
      item: () => validFile,
    } as unknown as FileList;

    // Simulate file input change with valid file
    const validEvent = {
      target: {
        files: validFileList,
        value: 'short.txt',
      },
    } as unknown as Event;

    component.handleFileChange(validEvent);

    expect(fileSelectSpy).toHaveBeenCalledWith(validFileList);
    expect(component.uploadSuccess).toBe(true);
  });

  it('should validate file count', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone max-file-count="2"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create multiple files exceeding limit
    const file1 = new File(['test content 1'], 'file1.txt', {
      type: 'text/plain',
    });
    const file2 = new File(['test content 2'], 'file2.txt', {
      type: 'text/plain',
    });
    const file3 = new File(['test content 3'], 'file3.txt', {
      type: 'text/plain',
    });

    const tooManyFiles = {
      0: file1,
      1: file2,
      2: file3,
      length: 3,
      item: (idx: number) => [file1, file2, file3][idx], // Using index for multiple files
    } as unknown as FileList;

    // Simulate file input change
    const invalidEvent = {
      target: {
        files: tooManyFiles,
        value: '',
      },
    } as unknown as Event;

    component.handleFileChange(invalidEvent);

    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('count');

    // Create valid number of files
    const validFileList = {
      0: file1,
      1: file2,
      length: 2,
      item: (idx: number) => [file1, file2][idx], // Using index for multiple files
    } as unknown as FileList;

    // Simulate file input change with valid count
    const validEvent = {
      target: {
        files: validFileList,
        value: 'file1.txt,file2.txt',
      },
    } as unknown as Event;

    component.handleFileChange(validEvent);

    expect(fileSelectSpy).toHaveBeenCalledWith(validFileList);
    expect(component.uploadSuccess).toBe(true);
  });

  it('should validate total file size', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone max-total-file-size-bytes="50"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create file exceeding size limit
    const largeContent = 'x'.repeat(100); // 100 bytes
    const largeFile = new File([largeContent], 'large-file.txt', {
      type: 'text/plain',
    });

    const largeFileList = {
      0: largeFile,
      length: 1,
      item: () => largeFile,
    } as unknown as FileList;

    // Simulate file input change
    const invalidEvent = {
      target: {
        files: largeFileList,
        value: '',
      },
    } as unknown as Event;

    component.handleFileChange(invalidEvent);

    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('size');

    // Create file with valid size
    const smallFile = new File(['small'], 'small-file.txt', {
      type: 'text/plain',
    });

    const smallFileList = {
      0: smallFile,
      length: 1,
      item: () => smallFile,
    } as unknown as FileList;

    // Simulate file input change with valid size
    const validEvent = {
      target: {
        files: smallFileList,
        value: 'small-file.txt',
      },
    } as unknown as Event;

    component.handleFileChange(validEvent);

    expect(fileSelectSpy).toHaveBeenCalledWith(smallFileList);
    expect(component.uploadSuccess).toBe(true);
  });

  it('should handle drag and drop file upload', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create mock file for drag and drop
    const file = new File(['test content'], 'drag-drop-file.txt', {
      type: 'text/plain',
    });
    const fileList = {
      0: file,
      length: 1,
      item: () => file,
    } as unknown as FileList;

    // Mock drag over event
    const dragOverEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as DragEvent;

    component.handleDropzoneDragOver(dragOverEvent);

    expect(dragOverEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(true);

    // Mock drop event
    const dropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: fileList,
      },
    } as unknown as DragEvent;

    component.handleDropzoneDrop(dropEvent);

    expect(dropEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
    expect(fileSelectSpy).toHaveBeenCalledWith(fileList);
    expect(component.uploadSuccess).toBe(true);
  });

  it('should not handle drag over when component is disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone disabled></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Initial state should not be dragging
    expect(component.isDraggingOver).toBe(false);

    // Mock drag over event
    const dragOverEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as DragEvent;

    // Call the method with proper binding
    const boundDragOver = component.handleDropzoneDragOver.bind(component);
    boundDragOver(dragOverEvent);

    // Event default should be prevented
    expect(dragOverEvent.preventDefault).toHaveBeenCalled();
    expect(dragOverEvent.stopPropagation).toHaveBeenCalled();

    // State should remain unchanged because component is disabled (early return)
    expect(component.isDraggingOver).toBe(false);
  });

  it('should not handle drop when component is disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone disabled></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create mock file for drag and drop
    const file = new File(['test content'], 'drag-drop-file.txt', {
      type: 'text/plain',
    });
    const fileList = {
      0: file,
      length: 1,
      item: () => file,
    } as unknown as FileList;

    // Mock drop event
    const dropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: fileList,
      },
    } as unknown as DragEvent;

    // Call the method with proper binding
    const boundDrop = component.handleDropzoneDrop.bind(component);
    boundDrop(dropEvent);

    // Event default should be prevented
    expect(dropEvent.preventDefault).toHaveBeenCalled();
    expect(dropEvent.stopPropagation).toHaveBeenCalled();

    // But no further actions should be taken (early return due to disabled state)
    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.uploadSuccess).toBe(false);
    expect(component.invalidFile).toBe('none');
  });

  it('should handle drag leave event', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Set dragging state
    component.isDraggingOver = true;

    // Mock drag leave event
    const dragLeaveEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as DragEvent;

    component.handleDropzoneDragLeave(dragLeaveEvent);

    expect(dragLeaveEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
  });

  it('should handle drag and drop with invalid file extension type', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone accept-file-types=".jpg,.png"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create mock invalid file for drag and drop
    const invalidFile = new File(['test content'], 'invalid-file.txt', {
      type: 'text/plain',
    });
    const invalidFileList = {
      0: invalidFile,
      length: 1,
      item: () => invalidFile,
    } as unknown as FileList;

    // Mock drop event with invalid file
    const dropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: invalidFileList,
      },
    } as unknown as DragEvent;

    component.handleDropzoneDrop(dropEvent);

    expect(dropEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('type');
    expect(component.uploadSuccess).toBe(false);
  });

  it('should handle drag and drop with wildcard MIME types', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone accept-file-types="image/*"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create mock invalid file for drag and drop (not an image)
    const invalidFile = new File(['test content'], 'document.pdf', {
      type: 'application/pdf',
    });
    const invalidFileList = {
      0: invalidFile,
      length: 1,
      item: () => invalidFile,
    } as unknown as FileList;

    // Mock drop event with invalid file
    const invalidDropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: invalidFileList,
      },
    } as unknown as DragEvent;

    component.handleDropzoneDrop(invalidDropEvent);

    expect(invalidDropEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('type');
    expect(component.uploadSuccess).toBe(false);

    // Reset state
    component.invalidFile = 'none';

    // Create mock valid file for drag and drop (image/png matches image/*)
    const validFile = new File(['test content'], 'image.png', {
      type: 'image/png',
    });
    const validFileList = {
      0: validFile,
      length: 1,
      item: () => validFile,
    } as unknown as FileList;

    // Mock drop event with valid file
    const validDropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: validFileList,
      },
    } as unknown as DragEvent;

    component.handleDropzoneDrop(validDropEvent);

    expect(validDropEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
    expect(fileSelectSpy).toHaveBeenCalledWith(validFileList);
    expect(component.invalidFile).toBe('none');
    expect(component.uploadSuccess).toBe(true);
  });

  it('should handle drag and drop with exact MIME types', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone accept-file-types="application/pdf"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create mock invalid file for drag and drop (not a PDF)
    const invalidFile = new File(['test content'], 'image.png', {
      type: 'image/png',
    });
    const invalidFileList = {
      0: invalidFile,
      length: 1,
      item: () => invalidFile,
    } as unknown as FileList;

    // Mock drop event with invalid file
    const invalidDropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: invalidFileList,
      },
    } as unknown as DragEvent;

    component.handleDropzoneDrop(invalidDropEvent);

    expect(invalidDropEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('type');
    expect(component.uploadSuccess).toBe(false);

    // Reset state
    component.invalidFile = 'none';

    // Create mock valid file for drag and drop (exact match on application/pdf)
    const validFile = new File(['test content'], 'document.pdf', {
      type: 'application/pdf',
    });
    const validFileList = {
      0: validFile,
      length: 1,
      item: () => validFile,
    } as unknown as FileList;

    // Mock drop event with valid file
    const validDropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: validFileList,
      },
    } as unknown as DragEvent;

    component.handleDropzoneDrop(validDropEvent);

    expect(validDropEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
    expect(fileSelectSpy).toHaveBeenCalledWith(validFileList);
    expect(component.invalidFile).toBe('none');
    expect(component.uploadSuccess).toBe(true);
  });

  it('should handle drag and drop with files exceeding maximum count', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone max-file-count="1"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create multiple files exceeding the limit
    const file1 = new File(['content 1'], 'file1.txt', { type: 'text/plain' });
    const file2 = new File(['content 2'], 'file2.txt', { type: 'text/plain' });

    const tooManyFiles = {
      0: file1,
      1: file2,
      length: 2,
      item: (idx: number) => [file1, file2][idx], // Using index for multiple files
    } as unknown as FileList;

    // Mock drop event with too many files
    const dropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: tooManyFiles,
      },
    } as unknown as DragEvent;

    component.handleDropzoneDrop(dropEvent);

    expect(dropEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('count');
    expect(component.uploadSuccess).toBe(false);
  });

  it('should handle drag and drop with files exceeding maximum size', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone max-total-file-size-bytes="50"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create file exceeding size limit
    const largeContent = 'x'.repeat(100); // 100 bytes
    const largeFile = new File([largeContent], 'large-file.txt', {
      type: 'text/plain',
    });

    const largeFileList = {
      0: largeFile,
      length: 1,
      item: () => largeFile,
    } as unknown as FileList;

    // Mock drop event with file too large
    const dropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: largeFileList,
      },
    } as unknown as DragEvent;

    component.handleDropzoneDrop(dropEvent);

    expect(dropEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('size');
    expect(component.uploadSuccess).toBe(false);
  });

  it('should handle drag and drop with filename exceeding maximum length', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone max-file-name-length="10"></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Create file with name too long
    const longNameFile = new File(
      ['content'],
      'this-filename-is-too-long.txt',
      { type: 'text/plain' }
    );

    const longNameFileList = {
      0: longNameFile,
      length: 1,
      item: () => longNameFile,
    } as unknown as FileList;

    // Mock drop event with filename too long
    const dropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: {
        files: longNameFileList,
      },
    } as unknown as DragEvent;

    component.handleDropzoneDrop(dropEvent);

    expect(dropEvent.preventDefault).toHaveBeenCalled();
    expect(component.isDraggingOver).toBe(false);
    expect(fileSelectSpy).not.toHaveBeenCalled();
    expect(component.invalidFile).toBe('name');
    expect(component.uploadSuccess).toBe(false);
  });

  it('should trigger click on input element when handleDropzoneClick is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Create a mock for the input element's click method
    const mockInputElement = {
      click: jest.fn(),
    };
    component.inputRef = mockInputElement as unknown as HTMLInputElement;

    // Call the handleDropzoneClick method with proper binding
    const boundClick = component.handleDropzoneClick.bind(component);
    boundClick();

    // Verify that the click method was called on the input element
    expect(mockInputElement.click).toHaveBeenCalled();
  });

  it('should not trigger click on input element when handleDropzoneClick is called and disabled is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone disabled></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Create a mock for the input element's click method
    const mockInputElement = {
      click: jest.fn(),
    };
    component.inputRef = mockInputElement as unknown as HTMLInputElement;

    // Call the handleDropzoneClick method with proper binding
    const boundClick = component.handleDropzoneClick.bind(component);
    boundClick();

    // Verify that the click method was not called due to disabled state
    expect(mockInputElement.click).not.toHaveBeenCalled();
  });

  it('should trigger click on input element when handleDropzoneKeyDown is called with Enter key', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Create a mock for the input element's click method
    const mockInputElement = {
      click: jest.fn(),
    };
    component.inputRef = mockInputElement as unknown as HTMLInputElement;

    // Create a mock keyboard event with Enter key
    const keyboardEvent = {
      key: 'Enter',
      preventDefault: jest.fn(),
    } as unknown as KeyboardEvent;

    // Call the handleDropzoneKeyDown method with proper binding
    const boundKeyDown = component.handleDropzoneKeyDown.bind(component);
    boundKeyDown(keyboardEvent);

    // Verify that the click method was called and preventDefault was called
    expect(mockInputElement.click).toHaveBeenCalled();
    expect(keyboardEvent.preventDefault).toHaveBeenCalled();
  });

  it('should trigger click on input element when handleDropzoneKeyDown is called with Space key', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Create a mock for the input element's click method
    const mockInputElement = {
      click: jest.fn(),
    };
    component.inputRef = mockInputElement as unknown as HTMLInputElement;

    // Create a mock keyboard event with Space key
    const keyboardEvent = {
      key: ' ',
      preventDefault: jest.fn(),
    } as unknown as KeyboardEvent;

    // Call the handleDropzoneKeyDown method with proper binding
    const boundKeyDown = component.handleDropzoneKeyDown.bind(component);
    boundKeyDown(keyboardEvent);

    // Verify that the click method was called and preventDefault was called
    expect(mockInputElement.click).toHaveBeenCalled();
    expect(keyboardEvent.preventDefault).toHaveBeenCalled();
  });

  it('should not trigger click when handleDropzoneKeyDown is called with Enter key and component is disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone disabled></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Create a mock for the input element's click method
    const mockInputElement = {
      click: jest.fn(),
    };
    component.inputRef = mockInputElement as unknown as HTMLInputElement;

    // Create a mock keyboard event with Enter key
    const keyboardEvent = {
      key: 'Enter',
      preventDefault: jest.fn(),
    } as unknown as KeyboardEvent;

    // Call the handleDropzoneKeyDown method with proper binding
    const boundKeyDown = component.handleDropzoneKeyDown.bind(component);
    boundKeyDown(keyboardEvent);

    // Verify that preventDefault was called but click was not
    expect(keyboardEvent.preventDefault).toHaveBeenCalled();
    expect(mockInputElement.click).not.toHaveBeenCalled();
  });

  it('should not trigger click when handleDropzoneKeyDown is called with a key other than Enter or Space', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Create a mock for the input element's click method
    const mockInputElement = {
      click: jest.fn(),
    };
    component.inputRef = mockInputElement as unknown as HTMLInputElement;

    // Create a mock keyboard event with a different key
    const keyboardEvent = {
      key: 'Tab',
      preventDefault: jest.fn(),
    } as unknown as KeyboardEvent;

    // Call the handleDropzoneKeyDown method with proper binding
    const boundKeyDown = component.handleDropzoneKeyDown.bind(component);
    boundKeyDown(keyboardEvent);

    // Verify that neither preventDefault nor click were called
    expect(keyboardEvent.preventDefault).not.toHaveBeenCalled();
    expect(mockInputElement.click).not.toHaveBeenCalled();
  });

  it('should display the correct icon state based on component state', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    // Ensure root exists
    if (!page.root) {
      throw new Error('Root element not found');
    }

    const root = page.root;
    const component = page.rootInstance;

    // Default state (should show upload icon)
    let iconElement = root.querySelector('modus-wc-icon');
    expect(iconElement).not.toBeNull();
    expect(iconElement?.getAttribute('name')).toBe('cloud_upload');
    expect(iconElement?.classList.contains('upload-icon')).toBe(true);

    // Set dragging state and re-render
    component.isDraggingOver = true;
    await page.waitForChanges();
    iconElement = root.querySelector('modus-wc-icon');
    expect(iconElement).not.toBeNull();
    expect(iconElement?.getAttribute('name')).toBe('cloud_upload');
    expect(iconElement?.classList.contains('upload-icon')).toBe(true);

    // Set error state and re-render
    component.isDraggingOver = false;
    component.invalidFile = 'type';
    component.errorMessage = 'Invalid file type';
    await page.waitForChanges();
    iconElement = root.querySelector('modus-wc-icon');
    expect(iconElement).not.toBeNull();
    expect(iconElement?.getAttribute('name')).toBe('alert');
    expect(iconElement?.classList.contains('error-icon')).toBe(true);

    // Set success state and re-render
    component.invalidFile = 'none';
    component.uploadSuccess = true;
    await page.waitForChanges();
    iconElement = root.querySelector('modus-wc-icon');
    expect(iconElement).not.toBeNull();
    expect(iconElement?.getAttribute('name')).toBe('check_circle');
    expect(iconElement?.classList.contains('success-icon')).toBe(true);
  });

  it('should display the correct message based on component state', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: `
        <modus-wc-file-dropzone
          instructions="Custom instructions"
          file-dragged-over-instructions="Drop files here"
          invalid-file-type-message="Invalid file type"
          success-message="Files uploaded successfully"
          max-file-name-length="10"
          max-file-count="2"
          max-total-file-size-bytes="50"
        ></modus-wc-file-dropzone>
      `,
    });

    // Ensure root exists
    if (!page.root) {
      throw new Error('Root element not found');
    }

    const root = page.root;
    const component = page.rootInstance;

    // Default state (should show instructions)
    let messageElement = root.querySelector('.default-content span');
    expect(messageElement).not.toBeNull();
    expect(messageElement?.textContent).toBe('Custom instructions');

    // Set dragging state and re-render
    component.isDraggingOver = true;
    await page.waitForChanges();
    messageElement = root.querySelector('.default-content span');
    expect(messageElement).not.toBeNull();
    expect(messageElement?.textContent).toBe('Drop files here');

    // Set error state (type) and re-render
    component.isDraggingOver = false;
    component.invalidFile = 'type';
    component.errorMessage = 'Invalid file type';
    await page.waitForChanges();
    messageElement = root.querySelector('.default-content span');
    expect(messageElement).not.toBeNull();
    expect(messageElement?.textContent).toBe('Invalid file type');

    // Set error state (name) and re-render
    component.invalidFile = 'name';
    component.errorMessage = 'Filename exceeds maximum length';
    await page.waitForChanges();
    messageElement = root.querySelector('.default-content span');
    expect(messageElement).not.toBeNull();
    expect(messageElement?.textContent).toBe('Filename exceeds maximum length');

    // Set error state (count) and re-render
    component.invalidFile = 'count';
    component.errorMessage = 'Maximum number of files allowed is 2';
    await page.waitForChanges();
    messageElement = root.querySelector('.default-content span');
    expect(messageElement).not.toBeNull();
    expect(messageElement?.textContent).toBe(
      'Maximum number of files allowed is 2'
    );

    // Set error state (size) and re-render
    component.invalidFile = 'size';
    component.errorMessage = 'Total file size exceeds 50 Bytes';
    await page.waitForChanges();
    messageElement = root.querySelector('.default-content span');
    expect(messageElement).not.toBeNull();
    expect(messageElement?.textContent).toBe(
      'Total file size exceeds 50 Bytes'
    );

    // Set success state and re-render
    component.invalidFile = 'none';
    component.uploadSuccess = true;
    await page.waitForChanges();
    messageElement = root.querySelector('.default-content span');
    expect(messageElement).not.toBeNull();
    expect(messageElement?.textContent).toBe('Files uploaded successfully');
  });

  it('should handle case when inputRef is undefined in handleDropzoneClick and handleDropzoneKeyDown', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Deliberately set inputRef to undefined
    component.inputRef = undefined;

    // Verify no errors when calling handleDropzoneClick with undefined inputRef
    // This tests the optional chaining (?.) in this.inputRef?.click()
    expect(() => {
      component.handleDropzoneClick();
    }).not.toThrow();

    // Verify no errors when calling handleDropzoneKeyDown with Enter key and undefined inputRef
    const enterKeyEvent = {
      key: 'Enter',
      preventDefault: jest.fn(),
    } as unknown as KeyboardEvent;

    expect(() => {
      component.handleDropzoneKeyDown(enterKeyEvent);
    }).not.toThrow();

    // Verify the preventDefault was still called
    expect(enterKeyEvent.preventDefault).toHaveBeenCalled();

    // Verify no errors when calling handleDropzoneKeyDown with Space key and undefined inputRef
    const spaceKeyEvent = {
      key: ' ',
      preventDefault: jest.fn(),
    } as unknown as KeyboardEvent;

    expect(() => {
      component.handleDropzoneKeyDown(spaceKeyEvent);
    }).not.toThrow();

    // Verify the preventDefault was still called
    expect(spaceKeyEvent.preventDefault).toHaveBeenCalled();
  });

  it('should handle case when dataTransfer is undefined in handleDropzoneDrop', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;
    const fileSelectSpy = jest.spyOn(component.fileSelect, 'emit');

    // Store initial state
    const initialUploadSuccess = component.uploadSuccess;
    const initialInvalidFile = component.invalidFile;
    component.isDraggingOver = true;

    // Create drop event with undefined dataTransfer
    // This tests the optional chaining (?.) in const files = event.dataTransfer?.files;
    const dropEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
      dataTransfer: undefined,
    } as unknown as DragEvent;

    // Verify no errors when calling handleDropzoneDrop with undefined dataTransfer
    expect(() => {
      component.handleDropzoneDrop(dropEvent);
    }).not.toThrow();

    // Verify the event methods were still called
    expect(dropEvent.preventDefault).toHaveBeenCalled();
    expect(dropEvent.stopPropagation).toHaveBeenCalled();

    // Verify the dragging state was reset
    expect(component.isDraggingOver).toBe(false);

    // Verify that no file processing was attempted (state unchanged)
    expect(component.uploadSuccess).toBe(initialUploadSuccess);
    expect(component.invalidFile).toBe(initialInvalidFile);
    expect(fileSelectSpy).not.toHaveBeenCalled();
  });

  it('should have an input element with onChange attribute that calls handleFileChange', async () => {
    // Mock the handleFileChange method at the prototype level
    const originalHandleFileChange =
      ModusWcFileDropzone.prototype.handleFileChange;
    ModusWcFileDropzone.prototype.handleFileChange = jest.fn();

    try {
      const page = await newSpecPage({
        components: [ModusWcFileDropzone],
        html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
        supportsShadowDom: false, // Important since the component uses shadow: false
      });

      // Ensure root exists
      if (!page.root) {
        throw new Error('Root element not found');
      }

      // Get the rendered HTML as a string
      const html = page.root.outerHTML;

      // Check if the input element has the onChange attribute
      // This is a basic verification that the attribute exists in the rendered HTML
      expect(html).toContain('type="file"');

      // Find the input element
      const input = page.root.querySelector('input[type="file"]');
      expect(input).not.toBeNull();

      // Create a mock change event
      const mockEvent = new Event('change');

      // Dispatch the change event
      input?.dispatchEvent(mockEvent);

      // Verify the handleFileChange method was called
      // This is the key assertion that verifies the onChange handler is properly bound
      expect(ModusWcFileDropzone.prototype.handleFileChange).toHaveBeenCalled();
    } finally {
      // Restore the original method
      ModusWcFileDropzone.prototype.handleFileChange = originalHandleFileChange;
    }
  });

  it('should return default error message for unknown error types in getErrorMessage', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Use type assertion with more specific interface
    type PrivateMethods = {
      getErrorMessage: (type: string) => string;
      formatFileSize: (bytes?: number | null) => string;
    };

    // Test the default case by calling getErrorMessage with an invalid error type
    // Access the private method using type casting and bracket notation
    const errorMessage = (component as unknown as PrivateMethods)[
      'getErrorMessage'
    ]('invalid');

    expect(errorMessage).toBe('Validation error');
  });

  it('should return "0 Bytes" for zero or undefined bytes in formatFileSize', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone></modus-wc-file-dropzone>',
    });

    const component = page.rootInstance;

    // Access the private method with a more specific type
    type PrivateMethods = {
      formatFileSize: (bytes?: number | null) => string;
    };

    // Test with 0 bytes
    const zeroResult = (component as unknown as PrivateMethods)[
      'formatFileSize'
    ](0);
    expect(zeroResult).toBe('0 Bytes');

    // Test with undefined
    const undefinedResult = (component as unknown as PrivateMethods)[
      'formatFileSize'
    ](undefined);
    expect(undefinedResult).toBe('0 Bytes');

    // Test with null (falsy value)
    const nullResult = (component as unknown as PrivateMethods)[
      'formatFileSize'
    ](null);
    expect(nullResult).toBe('0 Bytes');
  });
});
