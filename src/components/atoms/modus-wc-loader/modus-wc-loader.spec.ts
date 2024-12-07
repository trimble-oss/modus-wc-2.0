import { newSpecPage } from '@stencil/core/testing';
import { ModusWcLoader } from './modus-wc-loader';

describe('modus-wc-loader', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcLoader],
      html: '<modus-wc-loader></modus-wc-loader>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcLoader: aria-label is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcLoader],
      html: '<modus-wc-loader aria-label="Loading loader"></modus-wc-loader>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcLoader],
      html: '<modus-wc-loader aria-label="Loading loader" color="secondary" custom-class="test-class" size="lg" variant="dots"></modus-wc-loader>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
