import { newSpecPage } from '@stencil/core/testing';
import { ModusWcSlider } from './modus-wc-slider';

describe('modus-wc-slider', () => {
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
        input-id="custom-id"
        input-tab-index="1"
        label="Test label"
        max="100"
        min="50"
        name="test-name"
        required="true"
        size="lg"
        step="50"
        value="75"
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
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    range.value = '50';
    range.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({ detail: expect.any(Event) })
    );
  });

  it('should emit focus event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSlider],
      html: '<modus-wc-slider aria-label="Focus test"></modus-wc-slider>',
    });
    const range = page.root!.querySelector('input[type="range"]');
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    range!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should render dual-range with two role=slider thumbs and role=group wrapper', async () => {
    const page = await newSpecPage({
      components: [ModusWcSlider],
      html: '<modus-wc-slider aria-label="Dual range" dual-range="true" min="0" max="100"></modus-wc-slider>',
    });
    expect(page.root).toMatchSnapshot();

    const thumbs = page.root!.querySelectorAll('[role="slider"]');
    expect(thumbs.length).toBe(2);

    const group = page.root!.querySelector('[role="group"]');
    expect(group).not.toBeNull();
  });

  it('should have no native range inputs in dual-range mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcSlider],
      html: '<modus-wc-slider aria-label="Dual range" dual-range="true"></modus-wc-slider>',
    });
    const rangeInputs = page.root!.querySelectorAll('input[type="range"]');
    expect(rangeInputs.length).toBe(0);
  });

  it('should clamp minValue below maxValue via keyboard', async () => {
    const page = await newSpecPage({
      components: [ModusWcSlider],
      html: '<modus-wc-slider aria-label="Keyboard test" dual-range="true" min="0" max="100" step="1"></modus-wc-slider>',
    });
    const component = page.rootInstance as ModusWcSlider;
    component.minValue = 70;
    component.maxValue = 80;
    await page.waitForChanges();

    const thumbs = page.root!.querySelectorAll('[role="slider"]');
    thumbs[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );
    await page.waitForChanges();

    const maxAfter = component.maxValue ?? 0;
    expect(component.minValue).toBeLessThan(maxAfter);
  });

  it('should emit inputChange from dual-range keyboard interaction', async () => {
    const page = await newSpecPage({
      components: [ModusWcSlider],
      html: '<modus-wc-slider aria-label="Dual change test" dual-range="true" min="0" max="100"></modus-wc-slider>',
    });
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const thumbs = page.root!.querySelectorAll('[role="slider"]');
    thumbs[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );
    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalled();
  });
});
