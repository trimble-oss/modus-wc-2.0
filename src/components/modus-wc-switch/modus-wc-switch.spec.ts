import { newSpecPage } from '@stencil/core/testing';
import { ModusWcSwitch } from './modus-wc-switch';

describe('modus-wc-switch', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSwitch],
      html: '<modus-wc-switch aria-label="Default toggle"></modus-wc-switch>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSwitch],
      html: `<modus-wc-switch
        aria-describedby="active"
        aria-label="Test toggle"
        aria-labelledby="toggle-label"
        custom-class="test-class"
        disabled="true"
        input-id="custom-id"
        input-tab-index="1"
        label="Test label"
        name="test-name"
        required="true"
        size="lg"
        value="Test value"
      ></modus-wc-switch>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size xs', async () => {
    const page = await newSpecPage({
      components: [ModusWcSwitch],
      html: `<modus-wc-switch
        aria-label="XS toggle"
        label="XS label"
        size="xs"
      ></modus-wc-switch>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render indeterminate state', async () => {
    const page = await newSpecPage({
      components: [ModusWcSwitch],
      html: `<modus-wc-switch
        aria-label="Test toggle"
        indeterminate="true"
      ></modus-wc-switch>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSwitch],
      html: '<modus-wc-switch aria-label="Blur test"></modus-wc-switch>',
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
      components: [ModusWcSwitch],
      html: '<modus-wc-switch aria-label="Change test"></modus-wc-switch>',
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
      components: [ModusWcSwitch],
      html: '<modus-wc-switch aria-label="Focus test"></modus-wc-switch>',
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
