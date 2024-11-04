import { newSpecPage } from '@stencil/core/testing';
import { ModusWcBadge } from './modus-wc-badge';

describe('modus-wc-badge', () => {
  it('should warn if ariaLabel is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge></modus-wc-badge>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcBadge: ariaLabel is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge aria-label="Default Badge"></modus-wc-badge>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-badge aria-label="Default Badge">
        <span class="modus-wc-badge modus-wc-badge--medium modus-wc-badge--filled modus-wc-badge--primary" role="status" aria-label="Default Badge"></span>
      </modus-wc-badge>
    `);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge aria-label="Custom Badge" color="secondary" content="Test" custom-class="custom" size="large" type="text"></modus-wc-badge>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-badge aria-label="Custom Badge" color="secondary" content="Test" custom-class="custom" size="large" type="text">
        <span class="modus-wc-badge custom modus-wc-badge--large modus-wc-badge--text modus-wc-badge--secondary" aria-label="Custom Badge" role="status">Test</span>
      </modus-wc-badge>
    `);
  });

  it('should render counter type correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge aria-label="Counter Badge" content="5" type="counter"></modus-wc-badge>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-badge aria-label="Counter Badge" content="5" type="counter">
        <span class="modus-wc-badge modus-wc-badge--medium modus-wc-badge--counter modus-wc-badge--primary" aria-label="Counter Badge" role="status">5</span>
      </modus-wc-badge>
    `);
  });

  it('should set role to alert when color is danger', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: `<modus-wc-badge aria-label="Alert Badge" content="Alert" color="danger"></modus-wc-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-badge aria-label="Alert Badge" content="Alert" color="danger">
        <span class="modus-wc-badge modus-wc-badge--medium modus-wc-badge--filled modus-wc-badge--danger" aria-label="Alert Badge" role="alert">Alert</span>
      </modus-wc-badge>
    `);
  });
});
