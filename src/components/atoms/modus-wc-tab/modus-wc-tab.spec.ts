import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTab } from './modus-wc-tab';

describe('modus-wc-tab', () => {
  it('should warn when alt and aria-label are not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcTab],
      html: '<modus-wc-tab></modus-wc-tab>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcTab: alt and aria-label are required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTab],
      html: '<modus-wc-tab alt="Default tab" aria-label="Default tab"></modus-wc-tab>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTab],
      html: '<modus-wc-tab alt="Custom tab" aria-label="Custom tab" custom-class="test-class" img-src="https://example.com/tab.jpg" shape="square" size="sm"></modus-wc-tab>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
