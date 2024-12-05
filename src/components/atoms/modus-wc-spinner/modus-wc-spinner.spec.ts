import { newSpecPage } from '@stencil/core/testing';
import { ModusWcSpinner } from './modus-wc-spinner';

describe('modus-wc-spinner', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcSpinner],
      html: '<modus-wc-spinner></modus-wc-spinner>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcSpinner: aria-label is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSpinner],
      html: '<modus-wc-spinner aria-label="Loading spinner"></modus-wc-spinner>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSpinner],
      html: '<modus-wc-spinner aria-label="Loading spinner" custom-class="test-class" size="lg" variant="dots"></modus-wc-spinner>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
