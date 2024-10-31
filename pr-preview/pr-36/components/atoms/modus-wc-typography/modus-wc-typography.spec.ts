import { newSpecPage } from '@stencil/core/testing';
import { ModusWCTypography } from './modus-wc-typography';

describe('modus-wc-typography', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography aria-label="Test typography">Test content</modus-wc-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-typography aria-label="Test typography">
        <p class="modus-wc-typography modus-wc-typography--p modus-wc-typography--regular modus-wc-typography--sentence" aria-label="Test typography">
          Test content
        </p>
      </modus-wc-typography>
    `);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography variant="h1" body-size="2" weight="bold" text-case="uppercase" custom-class="custom-style" aria-label="Custom typography">Custom content</modus-wc-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-typography variant="h1" body-size="2" weight="bold" text-case="uppercase" custom-class="custom-style" aria-label="Custom typography">
        <h1 class="modus-wc-typography modus-wc-typography--h1 modus-wc-typography--bold modus-wc-typography--uppercase custom-style" aria-label="Custom typography">
          Custom content
        </h1>
      </modus-wc-typography>
    `);
  });

  it('should warn when ariaLabel is not provided', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography>No aria-label</modus-wc-typography>`,
    });

    expect(consoleSpy).toHaveBeenCalledWith(
      'ModusWcTypography: ariaLabel is required for accessibility.'
    );

    consoleSpy.mockRestore();
  });

  it('should render body variant with different sizes', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography variant="body" body-size="mini" aria-label="Mini body">Mini body content</modus-wc-typography>`,
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-typography variant="body" body-size="mini" aria-label="Mini body">
        <body class="modus-wc-typography modus-wc-typography--body-mini modus-wc-typography--body modus-wc-typography--regular modus-wc-typography--sentence" aria-label="Mini body">
          Mini body content
        </body>
      </modus-wc-typography>
    `);
  });
});
