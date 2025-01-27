import { newSpecPage } from '@stencil/core/testing';
import { ModusWcChip } from './modus-wc-chip';

describe('modus-wc-chip', () => {
  it('should warn when alt and aria-label are not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip></modus-wc-chip>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcChip: alt and aria-label are required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Default chip"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcChip],
      html: '<modus-wc-chip aria-label="Custom chip" color="secondary" custom-class="test-class" size="lg"></modus-wc-chip>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
