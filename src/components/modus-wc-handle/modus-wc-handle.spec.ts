import { newSpecPage } from '@stencil/core/testing';
import { ModusWcHandle } from './modus-wc-handle';

describe('modus-wc-handle', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with horizontal orientation', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle orientation="horizontal"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with vertical orientation', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle orientation="vertical"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render button type', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle type="button"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with large size', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle size="lg"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcHandle],
      html: '<modus-wc-handle custom-class="custom-handle"></modus-wc-handle>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
