import { newSpecPage } from '@stencil/core/testing';
import { ModusWcSlider } from './modus-wc-slider';

describe('modus-wc-slider', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcSlider],
      html: '<modus-wc-slider></modus-wc-slider>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcSlider: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSlider],
      html: '<modus-wc-slider aria-label="Default slider"></modus-wc-slider>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSlider],
      html: `<modus-wc-slider
        aria-describedby="active"
        aria-label="Test slider"
        aria-labelledby="slider-label"
        custom-class="test-class"
        disabled="true"
        input-dir="rtl"
        input-id="custom-id"
        input-tab-index="1"
        max="100"
        min="50"
        name="test-name"
        required="true"
        size="lg"
        step="50"
        value="true"
      ></modus-wc-slider>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSlider],
      html: '<modus-wc-slider aria-label="Blur test"></modus-wc-slider>',
    });
    const range = page.root!.querySelector('input[type="range"]');
    expect(range).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    range!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSlider],
      html: '<modus-wc-slider aria-label="Change test"></modus-wc-slider>',
    });
    const range = page.root!.querySelector(
      'input[type="range"]'
    ) as HTMLInputElement;
    expect(range).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    range.value = 'true';
    range.dispatchEvent(new Event('input'));
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
      components: [ModusWcSlider],
      html: '<modus-wc-slider aria-label="Focus test"></modus-wc-slider>',
    });
    const range = page.root!.querySelector('input[type="range"]');
    expect(range).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    range!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });
});
