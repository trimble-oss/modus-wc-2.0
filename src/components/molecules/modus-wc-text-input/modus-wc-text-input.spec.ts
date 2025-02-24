import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTextInput } from './modus-wc-text-input';

describe('modus-wc-text-input', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input></modus-wc-text-input>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcTextInput: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Default input"></modus-wc-text-input>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: `<modus-wc-text-input
        aria-describedby="description"
        aria-label="Test text input"
        auto-capitalize="words"
        auto-complete="on"
        auto-focus="true"
        custom-class="test-class"
        disabled="true"
        input-aria-invalid="grammar"
        input-id="test-id"
        input-mode="numeric"
        input-spellcheck="true"
        input-tab-index="1"
        label="Test label"
        max-length="50"
        min-length="5"
        name="test-name"
        pattern="[A-Za-z]{3}"
        placeholder="Test placeholder"
        readonly="true"
        required="true"
        size="lg"
        type="email"
        value="test@example.com"
      ></modus-wc-text-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Blur test"></modus-wc-text-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    input!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Change test"></modus-wc-text-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input!.value = 'New value';
    input!.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: expect.any(Event),
      })
    );
  });

  it('should emit focus event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Focus test"></modus-wc-text-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    input!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });
});
