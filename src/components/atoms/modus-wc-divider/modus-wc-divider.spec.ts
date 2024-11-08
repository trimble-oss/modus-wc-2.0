import { newSpecPage } from '@stencil/core/testing';
import { ModusWcDivider } from './modus-wc-divider';

describe('modus-wc-divider', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider></modus-wc-divider>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcDivider: aria-label is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider aria-label="Divider"></modus-wc-divider>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDivider],
      html: '<modus-wc-divider aria-label="Divider" color="primary" content="Test" custom-class="test-class" orientation="horizontal" position="start" responsive="false"></modus-wc-divider>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
