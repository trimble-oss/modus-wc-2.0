import { newSpecPage } from '@stencil/core/testing';
import { ModusWCTypography } from './modus-wc-typography';

describe('modus-wc-typography', () => {
  it('should warn when aria-label is not provided', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography>No aria-label</modus-wc-typography>`,
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      'ModusWcTypography: aria-label is required for accessibility.'
    );

    consoleSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography aria-label="Test typography">Test content</modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography aria-label="Custom typography" custom-class="test-class" size="sm" variant="body" weight="bold">Test content</modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render headings', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography aria-label="Custom typography" variant="h1">Test content</modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
