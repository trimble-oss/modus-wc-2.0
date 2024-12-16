import { newSpecPage } from '@stencil/core/testing';
import { ModusWcDate } from './modus-wc-date';

describe('modus-wc-date', () => {
  it('should warn if a11y-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date></modus-wc-date>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcDate: a11y-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Default date"></modus-wc-date>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: `<modus-wc-date
        aria-describedby="description"
        aria-label="Test date"
        aria-labelledby="Another element"
        auto-focus="true"
        bordered="false"
        custom-class="test-class"
        disabled="true"
        input-dir="rtl"
        input-id="custom-id"
        input-tab-index="1"
        max="11/25/2024"
        min="11/20/2024"
        name="test-name"
        placeholder="Test placeholder"
        readonly="true"
        required="true"
        size="lg"
        value="Test value"
      ></modus-wc-date>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Blur test"></modus-wc-date>',
    });
    const date = page.root!.querySelector('input');
    expect(date).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    date!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Change test"></modus-wc-date>',
    });
    const date = page.root!.querySelector('input');
    expect(date).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    date!.value = 'New value';
    date!.dispatchEvent(new Event('input'));
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
      components: [ModusWcDate],
      html: '<modus-wc-date aria-label="Focus test"></modus-wc-date>',
    });
    const date = page.root!.querySelector('input');
    expect(date).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    date!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });
});
