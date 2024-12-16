import { newSpecPage } from '@stencil/core/testing';
import { ModusWcButton } from './modus-wc-button';

describe('modus-wc-button', () => {
  it('should warn if a11y-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button></modus-wc-button>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcButton: a11y-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Default Button"></modus-wc-button>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Custom Button" color="secondary" custom-class="test-class" full-width="true" label="Test" pressed="true" size="lg" variant="outlined" type="submit"></modus-wc-button>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with disabled attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Custom Button" disabled="true"></modus-wc-button>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit buttonClick event when clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Clickable Button"></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    button?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit buttonClick event when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Disabled Button" disabled></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    button?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(0);
  });

  it('should emit buttonClick event on Enter key press', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Enter Key Button"></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    button?.dispatchEvent(event);
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalled();
  });

  it('should emit buttonClick event on Space key press', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Space Key Button"></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    const event = new KeyboardEvent('keydown', { key: ' ' });
    button?.dispatchEvent(event);
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalled();
  });

  it('should not emit buttonClick event on key press when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Disabled Key Press Button" disabled></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    button?.dispatchEvent(event);
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });
});
