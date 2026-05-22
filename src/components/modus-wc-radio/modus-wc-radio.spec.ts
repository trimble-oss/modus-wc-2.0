import { newSpecPage } from '@stencil/core/testing';
import { ModusWcRadio } from './modus-wc-radio';
import { expectLabelLinkedToControl } from '../form-input-test-utils';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';

describe('modus-wc-radio', () => {
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
        input-id="custom-id"
        input-tab-index="1"
        label="Test label"
        name="test-name"
        required="true"
        size="lg"
        value="true"
      ></modus-wc-radio>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should link label to input when input-id is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcRadio, ModusWcInputLabel],
      html: '<modus-wc-radio label="Option A" aria-label="Option A"></modus-wc-radio>',
    });

    expectLabelLinkedToControl(page.root!, 'input[type="radio"]');
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
