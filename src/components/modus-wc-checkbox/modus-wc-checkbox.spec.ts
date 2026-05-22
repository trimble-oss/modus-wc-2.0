import { newSpecPage } from '@stencil/core/testing';
import { expectLabelLinkedToControl } from '../form-input-test-utils';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { ModusWcCheckbox } from './modus-wc-checkbox';

describe('modus-wc-checkbox', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCheckbox],
      html: '<modus-wc-checkbox aria-label="Default checkbox"></modus-wc-checkbox>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCheckbox],
      html: `<modus-wc-checkbox
        aria-describedby="active"
        aria-label="Test checkbox"
        aria-labelledby="checkbox-label"
        custom-class="test-class"
        disabled="true"
        input-id="custom-id"
        input-tab-index="1"
        label="Test label"
        name="test-name"
        required="true"
        size="lg"
        value="Test value"
      ></modus-wc-checkbox>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should link label to input when input-id is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcCheckbox, ModusWcInputLabel],
      html: '<modus-wc-checkbox label="Email alerts" aria-label="Email alerts"></modus-wc-checkbox>',
    });

    expectLabelLinkedToControl(page.root!, 'input[type="checkbox"]');
  });

  it('should render indeterminate state', async () => {
    const page = await newSpecPage({
      components: [ModusWcCheckbox],
      html: `<modus-wc-checkbox
        aria-label="Test checkbox"
        indeterminate="true"
      ></modus-wc-checkbox>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcCheckbox],
      html: '<modus-wc-checkbox aria-label="Blur test"></modus-wc-checkbox>',
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
      components: [ModusWcCheckbox],
      html: '<modus-wc-checkbox aria-label="Change test"></modus-wc-checkbox>',
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
      components: [ModusWcCheckbox],
      html: '<modus-wc-checkbox aria-label="Focus test"></modus-wc-checkbox>',
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
