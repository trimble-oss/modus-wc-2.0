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

  it('should render with currency prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: `<modus-wc-number-input
        aria-label="currency prop"
        currency="USD"
        value="1234"
      ></modus-wc-number-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with locale prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: `<modus-wc-number-input
        aria-label="locale prop"
        locale="en-US"
        value="1234"
      ></modus-wc-number-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with locale and currency props', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: `<modus-wc-number-input
        aria-label="currency and locale props"
        locale="en-US"
        currency="USD"
        value="1234"
      ></modus-wc-number-input>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should revert to oldValue if newValue is not numeric', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: `<modus-wc-number-input value="123"></modus-wc-number-input>`,
    });
    const component = page.rootInstance as ModusWcNumberInput;
    component.watchValue('abc', '123');
    expect(component.value).toBe('123');
  });

  it('should update to newValue if it is numeric', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: `<modus-wc-number-input value="123"></modus-wc-number-input>`,
    });
    const component = page.rootInstance as ModusWcNumberInput;
    component.watchValue('456', '123');
    expect(component.value).toBe('456');
  });

  it('should set formattedValue when currency or locale is defined and input is not focused', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: `<modus-wc-number-input currency="USD"></modus-wc-number-input>`,
    });
    const component = page.rootInstance as ModusWcNumberInput;
    component.value = '123';
    const spy = jest
      .spyOn(component, 'getFormattedValue')
      .mockReturnValue('$123');
    component.watchValue('123', '0');
    expect(spy).toHaveBeenCalled();
    expect(component.formattedValue).toBe('$123');
  });

  it('should emit blur event with currency prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: '<modus-wc-number-input aria-label="Blur test" currency="USD"></modus-wc-number-input>',
    });
    const number = page.root!.querySelector('input');
    expect(number).not.toBeNull();
    number!.value = '1234';
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    number!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
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
      html: '<modus-wc-number-input aria-label="Change test" currency="USD"></modus-wc-number-input>',
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

  it('should emit focus event with currency prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: '<modus-wc-number-input aria-label="Focus test" currency="USD"></modus-wc-number-input>',
    });
    const number = page.root!.querySelector('input');
    expect(number).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    number!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
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
