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

  it('should render with bordered prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone bordered></modus-wc-file-dropzone>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone size="sm"></modus-wc-file-dropzone>',
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

  it('should render with multiple prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone multiple></modus-wc-file-dropzone>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with label prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcFileDropzone],
      html: '<modus-wc-file-dropzone label="Choose file"></modus-wc-file-dropzone>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
