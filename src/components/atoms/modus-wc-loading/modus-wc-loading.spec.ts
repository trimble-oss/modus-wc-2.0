import { newSpecPage } from '@stencil/core/testing';
import { ModusWcLoading } from './modus-wc-loading';

describe('modus-wc-loading', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcLoading],
      html: '<modus-wc-loading></modus-wc-loading>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcLoading: aria-label is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcLoading],
      html: '<modus-wc-loading aria-label="Loading spinner"></modus-wc-loading>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcLoading],
      html: '<modus-wc-loading aria-label="Loading spinner" custom-class="test-class" size="lg" variant="dots"></modus-wc-loading>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
