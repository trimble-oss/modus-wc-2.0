import { newSpecPage } from '@stencil/core/testing';

import { ModusWcToggle } from './modus-wc-toggle';

describe('modus-wc-toggle', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcToggle],
      html: '<modus-wc-toggle></modus-wc-toggle>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcToggle: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcToggle],
      html: '<modus-wc-toggle aria-label="Default toggle"></modus-wc-toggle>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcToggle],
      html: `<modus-wc-toggle
        aria-describedby="active"
        aria-label="Test toggle"
        aria-labelledby="toggle-label"
        custom-class="test-class"
        disabled="true"
        input-dir="rtl"
        input-id="custom-id"
        input-tab-index="1"
        name="test-name"
        required="true"
        size="lg"
        value="Test value"
      ></modus-wc-toggle>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render indeterminate state', async () => {
    const page = await newSpecPage({
      components: [ModusWcToggle],
      html: `<modus-wc-toggle
        aria-label="Test toggle"
        indeterminate="true"
      ></modus-wc-toggle>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcToggle],
      html: '<modus-wc-toggle aria-label="Blur test"></modus-wc-toggle>',
    });
    const checkbox = page.root!.querySelector('input[type="checkbox"]');
    expect(checkbox).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    checkbox!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcToggle],
      html: '<modus-wc-toggle aria-label="Change test"></modus-wc-toggle>',
    });
    const checkbox = page.root!.querySelector(
      'input[type="checkbox"]'
    ) as HTMLInputElement;
    expect(checkbox).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    checkbox.value = 'true';
    checkbox.dispatchEvent(new Event('input'));
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
      components: [ModusWcToggle],
      html: '<modus-wc-toggle aria-label="Focus test"></modus-wc-toggle>',
    });
    const checkbox = page.root!.querySelector('input[type="checkbox"]');
    expect(checkbox).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    checkbox!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });
});
