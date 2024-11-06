import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTextInput } from './modus-wc-text-input';

describe('modus-wc-text-input', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Default input"></modus-wc-text-input>',
    });
    expect(page.root).not.toBeNull();
    expect(page.root).toEqualHtml(`
      <modus-wc-text-input aria-label="Default input" value="">
        <input aria-label="Default input" aria-placeholder="" class="modus-wc-input modus-wc-input-bordered modus-wc-input-md" inputmode="text" name="" placeholder="" type="text" value="">
      </modus-wc-text-input>
    `);
  });

  it('renders with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: `<modus-wc-text-input
        aria-describedby="description"
        aria-label="Custom input"
        autocapitalize="words"
        autocomplete="on"
        autofocus="true"
        custom-class="custom-class"
        disabled="true"
        input-aria-invalid="grammar"
        input-id="custom-id"
        input-dir="rtl"
        inputmode="numeric"
        input-spellcheck="true"
        input-tab-index="1"
        max-length="50"
        min-length="5"
        name="custom-name"
        pattern="[A-Za-z]{3}"
        placeholder="Custom placeholder"
        readonly="true"
        required="true"
        size="lg"
        type="email"
        value="test@example.com"
      ></modus-wc-text-input>`,
    });
    expect(page.root).not.toBeNull();
    expect(page.root).toMatchSnapshot();
  });

  it('emits blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Blur test"></modus-wc-text-input>',
    });
    expect(page.root).not.toBeNull();
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);
    input!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();
    expect(blurSpy).toHaveBeenCalled();
  });

  it('emits change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Change test"></modus-wc-text-input>',
    });
    expect(page.root).not.toBeNull();
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);
    input!.value = 'New value';
    input!.dispatchEvent(new Event('change'));
    await page.waitForChanges();
    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        detail: expect.any(Event),
      })
    );
  });

  it('emits focus event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Focus test"></modus-wc-text-input>',
    });
    expect(page.root).not.toBeNull();
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);
    input!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    expect(focusSpy).toHaveBeenCalled();
  });

  it('warns when aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input></modus-wc-text-input>',
    });
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcInput: aria-label is required for accessibility.'
    );
    consoleWarnSpy.mockRestore();
  });

  it('does not warn when aria-label is provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Valid label"></modus-wc-text-input>',
    });
    expect(consoleWarnSpy).not.toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });

  it('renders with different input types', async () => {
    const types = ['email', 'password', 'search', 'tel', 'text', 'url'];
    for (const type of types) {
      const page = await newSpecPage({
        components: [ModusWcTextInput],
        html: `<modus-wc-text-input aria-label="Type test" type="${type}"></modus-wc-text-input>`,
      });
      expect(page.root).not.toBeNull();
      const input = page.root!.querySelector('input');
      expect(input).not.toBeNull();
      expect(input!.getAttribute('type')).toBe(type);
    }
  });

  it('uses placeholder as aria-label when aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input placeholder="Test placeholder"></modus-wc-text-input>',
    });
    expect(page.root).not.toBeNull();
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    expect(input!.getAttribute('aria-label')).toBe('Test placeholder');
    consoleWarnSpy.mockRestore();
  });
});
