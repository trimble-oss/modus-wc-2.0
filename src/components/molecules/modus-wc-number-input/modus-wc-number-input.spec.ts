import { newSpecPage } from '@stencil/core/testing';
import { ModusWcNumberInput } from './modus-wc-number-input';

describe('modus-wc-number-input', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcNumberInput],
      html: '<modus-wc-number-input></modus-wc-number-input>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcNumberInput: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: '<modus-wc-number-input aria-label="Default input"></modus-wc-number-input>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: `<modus-wc-number-input
        aria-describedby="description"
        aria-label="Test number input"
        auto-complete="on"
        auto-focus="true"
        currency-symbol="$"
        custom-class="test-class"
        disabled="true"
        input-aria-invalid="true"
        input-id="test-id"
        input-mode="decimal"
        input-tab-index="1"
        label="Test label"
        max="10"
        min="1"
        name="test-name"
        placeholder="Test placeholder"
        readonly="true"
        required="true"
        size="lg"
        step="2"
        type="range"
        value="test@example.com"
      ></modus-wc-number-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: '<modus-wc-number-input aria-label="Blur test"></modus-wc-number-input>',
    });
    const number = page.root!.querySelector('input');
    expect(number).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    number!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: '<modus-wc-number-input aria-label="Change test"></modus-wc-number-input>',
    });
    const number = page.root!.querySelector('input');
    expect(number).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    number!.value = 'New value';
    number!.dispatchEvent(new Event('input'));
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
      components: [ModusWcNumberInput],
      html: '<modus-wc-number-input aria-label="Focus test"></modus-wc-number-input>',
    });
    const number = page.root!.querySelector('input');
    expect(number).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    number!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });
});
