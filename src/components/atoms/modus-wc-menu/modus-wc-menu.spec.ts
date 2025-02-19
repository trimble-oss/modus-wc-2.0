import { newSpecPage } from '@stencil/core/testing';
import { ModusWcMenu } from './modus-wc-menu';

describe('modus-wc-menu', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcMenu],
      html: '<modus-wc-menu></modus-wc-menu>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcMenu: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: '<modus-wc-menu aria-label="Default menu"></modus-wc-menu>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: `<modus-wc-menu
        aria-label="Test menu"
        bordered="true"
        custom-class="test-class"
        orientation="horizontal"
        size="lg"
      ></modus-wc-menu>`,
    });

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });
});
