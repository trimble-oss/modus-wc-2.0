import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInput } from './modus-wc-input';

describe('modus-wc-input', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Default input"></modus-wc-input>',
    });
    expect(page.root).not.toBeNull();
    expect(page.root).toEqualHtml(`
      <modus-wc-input aria-label="Default input" value="">
        <input aria-label="Default input" aria-placeholder="" class="modus-wc-input" name="" placeholder="" type="text" value="">
      </modus-wc-input>
    `);
  });

  it('renders with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: `<modus-wc-input 
        aria-describedby="description" 
        aria-invalid="true" 
        aria-label="Custom input" 
        custom-class="custom-class" 
        dir="rtl" 
        disabled="true"
        id="custom-id" 
        max-length="50" 
        name="custom-name" 
        placeholder="Custom placeholder" 
        readonly="true"
        required="true"
        tab-index="1" 
        type="email"
        value="test@example.com"
      ></modus-wc-input>`,
    });
    expect(page.root).not.toBeNull();
    expect(page.root).toEqualHtml(`
      <modus-wc-input 
        aria-describedby="description" 
        aria-invalid="true" 
        aria-label="Custom input" 
        custom-class="custom-class" 
        dir="rtl" 
        disabled="true" 
        id="custom-id" 
        max-length="50" 
        name="custom-name" 
        placeholder="Custom placeholder" 
        readonly="true"
        required="true"
        tab-index="1" 
        type="email"
        value="test@example.com"
      >
        <input 
          aria-describedby="description"
          aria-invalid=""
          aria-label="Custom input"
          aria-placeholder="Custom placeholder"
          aria-required=""
          class="modus-wc-input custom-class"
          dir="rtl"
          disabled
          id="custom-id"
          maxlength="50"
          name="custom-name"
          placeholder="Custom placeholder"
          readonly
          required
          tabindex="1"
          type="email"
          value="test@example.com"
        >
      </modus-wc-input>
    `);
  });

  it('emits blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Blur test"></modus-wc-input>',
    });
    expect(page.root).not.toBeNull();
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('blur', blurSpy);
    input!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();
    expect(blurSpy).toHaveBeenCalled();
  });

  it('emits change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Change test"></modus-wc-input>',
    });
    expect(page.root).not.toBeNull();
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('change', changeSpy);
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
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Focus test"></modus-wc-input>',
    });
    expect(page.root).not.toBeNull();
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('focus', focusSpy);
    input!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    expect(focusSpy).toHaveBeenCalled();
  });

  it('warns when ariaLabel is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input></modus-wc-input>',
    });
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcInput: ariaLabel is required for accessibility.'
    );
    consoleWarnSpy.mockRestore();
  });

  it('does not warn when ariaLabel is provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Valid label"></modus-wc-input>',
    });
    expect(consoleWarnSpy).not.toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });

  it('renders with different input types', async () => {
    const types = ['email', 'number', 'text', 'password'];
    for (const type of types) {
      const page = await newSpecPage({
        components: [ModusWcInput],
        html: `<modus-wc-input aria-label="Type test" type="${type}"></modus-wc-input>`,
      });
      expect(page.root).not.toBeNull();
      const input = page.root!.querySelector('input');
      expect(input).not.toBeNull();
      expect(input!.getAttribute('type')).toBe(type);
    }
  });

  it('uses placeholder as aria-label when ariaLabel is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input placeholder="Test placeholder"></modus-wc-input>',
    });
    expect(page.root).not.toBeNull();
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    expect(input!.getAttribute('aria-label')).toBe('Test placeholder');
    consoleWarnSpy.mockRestore();
  });
});
