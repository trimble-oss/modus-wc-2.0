import { newSpecPage } from '@stencil/core/testing';
import { ModusWcButton } from './modus-wc-button';
import * as themeUtils from '../../../utils/theme';

describe('modus-wc-button', () => {
  beforeEach(() => {
    jest.spyOn(themeUtils, 'getCurrentModusWCMode').mockReturnValue('default');
  });

  it('should warn if ariaLabel is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button></modus-wc-button>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcButton: ariaLabel is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Default Button"></modus-wc-button>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-button aria-label="Default Button">
        <button class="modus-wc-button modus-wc-button--medium modus-wc-button--filled modus-wc-button--primary" aria-label="Default Button" tabindex="0" type="button"></button>
      </modus-wc-button>
    `);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Custom Button" color="secondary" custom-class="custom" label="Test" size="large" variant="outlined" type="submit"></modus-wc-button>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should apply disabled state correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Disabled Button" disabled></modus-wc-button>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-button aria-label="Disabled Button" disabled>
        <button class="modus-wc-button modus-wc-button--medium modus-wc-button--filled modus-wc-button--primary modus-wc-button--disabled" aria-label="Disabled Button" disabled tabindex="-1" type="button"></button>
      </modus-wc-button>
    `);
  });

  it('should apply full width correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Full Width Button" full-width></modus-wc-button>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-button aria-label="Full Width Button" full-width>
        <button class="modus-wc-button modus-wc-button--medium modus-wc-button--filled modus-wc-button--primary modus-wc-button--full-width" aria-label="Full Width Button" tabindex="0" type="button"></button>
      </modus-wc-button>
    `);
  });

  it('should set aria-pressed when pressed prop is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Pressed Button" pressed></modus-wc-button>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-button aria-label="Pressed Button" pressed>
        <button class="modus-wc-button modus-wc-button--medium modus-wc-button--filled modus-wc-button--primary" aria-label="Pressed Button" aria-pressed="true" tabindex="0" type="button"></button>
      </modus-wc-button>
    `);
  });

  it('should apply dark mode class correctly', async () => {
    jest.spyOn(themeUtils, 'getCurrentModusWCMode').mockReturnValue('dark');

    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Dark Mode Button"></modus-wc-button>',
    });

    expect(page.root).toEqualHtml(`
      <modus-wc-button aria-label="Dark Mode Button">
        <button class="modus-wc-button modus-wc-button--medium modus-wc-button--filled modus-wc-button--primary modus-wc-button--dark-mode" aria-label="Dark Mode Button" tabindex="0" type="button"></button>
      </modus-wc-button>
    `);
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
