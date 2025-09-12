import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTextarea } from './modus-wc-textarea';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { IInputFeedbackProp } from '../types';

describe('modus-wc-textarea', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea aria-label="Default textarea"></modus-wc-textarea>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: `<modus-wc-textarea
        aria-describedby="description"
        aria-label="Test textarea"
        bordered="false"
        custom-class="test-class"
        disabled="true"
        input-aria-invalid="grammar"
        input-id="custom-id"
        input-spellcheck="true"
        input-tab-index="1"
        label="Test label"
        max-length="100"
        min-length="5"
        name="test-name"
        placeholder="Test placeholder"
        readonly="true"
        required="true"
        rows="5"
        size="lg"
        value="Test value"
      ></modus-wc-textarea>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with error feedback', async () => {
    const feedback: IInputFeedbackProp = {
      level: 'error',
      message: 'Test error message',
    };
    const page = await newSpecPage({
      components: [ModusWcTextarea, ModusWcInputFeedback],
      html: '<modus-wc-textarea aria-label="Error input"></modus-wc-textarea>',
    });

    // Set feedback attribute
    const component = page.rootInstance as ModusWcTextarea;
    component.feedback = feedback;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea aria-label="Blur test"></modus-wc-textarea>',
    });
    const textarea = page.root!.querySelector('textarea');
    expect(textarea).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    textarea!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea aria-label="Change test"></modus-wc-textarea>',
    });
    const textarea = page.root!.querySelector('textarea');
    expect(textarea).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    textarea!.value = 'New value';
    textarea!.dispatchEvent(new Event('input'));
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
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea aria-label="Focus test"></modus-wc-textarea>',
    });
    const textarea = page.root!.querySelector('textarea');
    expect(textarea).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    textarea!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });
});
