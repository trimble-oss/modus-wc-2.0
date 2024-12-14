import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTabs } from './modus-wc-tabs';

describe('modus-wc-tabs', () => {
  it('should warn when alt and aria-label are not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs></modus-wc-tabs>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcTabs: alt and aria-label are required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs alt="Default tabs" aria-label="Default tabs"></modus-wc-tabs>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs alt="Custom tabs" aria-label="Custom tabs" custom-class="test-class" img-src="https://example.com/tabs.jpg" shape="square" size="sm"></modus-wc-tabs>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
