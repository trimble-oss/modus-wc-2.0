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
});
