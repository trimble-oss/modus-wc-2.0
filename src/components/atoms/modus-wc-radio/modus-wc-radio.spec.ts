import { newSpecPage } from '@stencil/core/testing';
import { ModusWcRadio } from './modus-wc-radio';

describe('modus-wc-radio', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcRadio],
      html: '<modus-wc-radio></modus-wc-radio>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcRadio: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcRadio],
      html: '<modus-wc-radio aria-label="Default radio"></modus-wc-radio>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcRadio],
      html: `<modus-wc-radio
        aria-describedby="active"
        aria-label="Test radio"
        aria-labelledby="radio-label"
        custom-class="test-class"
        disabled="true"
        input-dir="rtl"
        input-id="custom-id"
        input-tab-index="1"
        name="test-name"
        required="true"
        size="lg"
        value="true"
      ></modus-wc-radio>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcRadio],
      html: '<modus-wc-radio aria-label="Blur test"></modus-wc-radio>',
    });
    const radio = page.root!.querySelector('input[type="radio"]');
    expect(radio).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    radio!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcRadio],
      html: '<modus-wc-radio aria-label="Change test"></modus-wc-radio>',
    });
    const radio = page.root!.querySelector(
      'input[type="radio"]'
    ) as HTMLInputElement;
    expect(radio).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    radio.value = 'true';
    radio.dispatchEvent(new Event('input'));
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
      components: [ModusWcRadio],
      html: '<modus-wc-radio aria-label="Focus test"></modus-wc-radio>',
    });
    const radio = page.root!.querySelector('input[type="radio"]');
    expect(radio).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    radio!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });
});
