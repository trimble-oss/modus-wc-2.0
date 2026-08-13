import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { IInputFeedbackProp } from '../types';
import { expectLabelLinkedToControl } from '../utils';
import { ModusWcNumberInput } from './modus-wc-number-input';

describe('modus-wc-number-input', () => {
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

  it('should link label to input when input-id is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput, ModusWcInputLabel],
      html: '<modus-wc-number-input label="Quantity" aria-label="Quantity"></modus-wc-number-input>',
    });

    expectLabelLinkedToControl(page.root!, 'input');
  });

  it('should render with error feedback', async () => {
    const feedback: IInputFeedbackProp = {
      level: 'error',
      message: 'Test error message',
    };
    const page = await newSpecPage({
      components: [ModusWcNumberInput, ModusWcInputFeedback],
      html: '<modus-wc-number-input aria-label="Error input"></modus-wc-number-input>',
    });

    // Set feedback attribute
    const component = page.rootInstance as ModusWcNumberInput;
    component.feedback = feedback;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should apply feedback classes only to the input when a currency symbol is displayed', async () => {
    const page = await newSpecPage({
      components: [ModusWcNumberInput],
      html: '<modus-wc-number-input currency-symbol="$" aria-label="Rate"></modus-wc-number-input>',
    });

    const component = page.rootInstance as ModusWcNumberInput;
    component.feedback = {
      level: 'info',
      message: 'Hint',
    };

    await page.waitForChanges();

    const currency = page.root!.querySelector('.modus-wc-input-currency');
    const input = page.root!.querySelector('input');
    expect(currency).not.toBeNull();
    expect(input).not.toBeNull();
    expect(currency!).not.toHaveClass('modus-wc-input--info');
    expect(input!).toHaveClass('modus-wc-input--info');
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
