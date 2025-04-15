import { newSpecPage } from '@stencil/core/testing';
import { ModusWcSelect } from './modus-wc-select';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { IInputFeedbackProp } from '../types';

describe('modus-wc-select', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Default select"></modus-wc-select>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: `<modus-wc-select
        aria-describedby="description"
        aria-label="Test select"
        auto-focus="true"
        bordered="false"
        custom-class="test-class"
        disabled="true"
        input-aria-invalid="true"
        input-id="custom-id"
        input-tab-index="1"
        label="Test label"
        name="test-name"
        options={[{ label: 'Option 1', value: '1' }]}
        required="true"
        size="lg"
        value="1"
      ></modus-wc-select>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with error feedback', async () => {
    const feedback: IInputFeedbackProp = {
      level: 'error',
      message: 'Test error message',
    };
    const page = await newSpecPage({
      components: [ModusWcSelect, ModusWcInputFeedback],
      html: '<modus-wc-select aria-label="Error input"></modus-wc-select>',
    });

    // Set feedback attribute
    const component = page.rootInstance as ModusWcSelect;
    component.feedback = feedback;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Blur test"></modus-wc-select>',
    });
    const select = page.root!.querySelector('select');
    expect(select).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    select!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Change test"></modus-wc-select>',
    });
    const select = page.root!.querySelector('select');
    expect(select).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    select!.value = 'New value';
    select!.dispatchEvent(new Event('input'));
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
      components: [ModusWcSelect],
      html: '<modus-wc-select aria-label="Focus test"></modus-wc-select>',
    });
    const select = page.root!.querySelector('select');
    expect(select).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    select!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should render options with various states', async () => {
    const options = [
      { label: 'Option 1', value: '1' },
      { label: 'Option 2', value: '2', disabled: true },
      { label: 'Option 3', value: '3' },
    ];

    const page = await newSpecPage({
      components: [ModusWcSelect],
      html: `<modus-wc-select aria-label="Options test"></modus-wc-select>`,
    });

    const component = page.rootInstance as ModusWcSelect;
    component.options = options;
    component.value = '2';

    await page.waitForChanges();

    const selectElement = page.root?.querySelector('select');
    const renderedOptions = selectElement?.querySelectorAll('option');

    expect(renderedOptions?.length).toBe(3);
  });
});
