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
});
