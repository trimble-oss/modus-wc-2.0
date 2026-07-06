import { newSpecPage } from '@stencil/core/testing';
import { ModusWcButton } from './modus-wc-button';

describe('modus-wc-button', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Test</modus-wc-button>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: `<modus-wc-button
              color="secondary"
              custom-class="test-class"
              full-width="true"
              pressed="true"
              size="lg"
              variant="outlined"
              type="submit">
              Test
            </modus-wc-button>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with disabled attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button disabled="true">Test</modus-wc-button>',
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

  it('should render with size xl', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button size="xl">XL Button</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-xl')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render with neutral color when color is neutral', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="neutral">Neutral</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-base-inverted')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render neutral color with outlined variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="neutral" variant="outlined">Neutral</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-base-inverted')).toBe(true);
    expect(button?.classList.contains('modus-wc-btn-outline')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render neutral color with borderless variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="neutral" variant="borderless">Neutral</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-base-inverted')).toBe(true);
    expect(button?.classList.contains('modus-wc-btn-borderless')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render neutral color with pressed state', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="neutral" pressed="true">Neutral</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-base-inverted')).toBe(true);
    expect(button?.getAttribute('aria-pressed')).toBe('true');
    expect(page.root).toMatchSnapshot();
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
