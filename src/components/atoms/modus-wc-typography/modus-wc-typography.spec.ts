import { newSpecPage } from '@stencil/core/testing';

import { ModusWCTypography } from './modus-wc-typography';

describe('modus-wc-typography', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography>Test content</modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography custom-class="test-class" size="sm" variant="body" weight="bold">Test content</modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render headings', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography variant="h1">Test content</modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
