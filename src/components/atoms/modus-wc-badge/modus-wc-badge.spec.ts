import { newSpecPage } from '@stencil/core/testing';
import { ModusWcBadge } from './modus-wc-badge';

describe('modus-wc-badge', () => {
  it('should warn if a11y-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge></modus-wc-badge>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcBadge: a11y-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should set ariaLabel to "Badge {content}" if content is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: `<modus-wc-badge content="5"></modus-wc-badge>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should set ariaLabel to "Badge" if content is not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: `<modus-wc-badge></modus-wc-badge>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge aria-label="Default Badge"></modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge aria-label="Custom Badge" color="secondary" content="Test" custom-class="test-class" size="lg" variant="text"></modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with alert role', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge aria-label="Custom Badge" color="warning"></modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
