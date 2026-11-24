import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { IInputFeedbackProp } from '../types';
import { expectLabelLinkedToControl } from '../utils';
import { ModusWcTimeInput } from './modus-wc-time-input';

describe('modus-wc-time-input', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input datalist-id="test-list"></modus-wc-time-input>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input
                aria-describedby="desc"
                aria-label="Time input"
                auto-complete="on"
                bordered
                custom-class="custom"
                disabled
                input-id="time-input"
                input-tab-index="1"
                datalist-id="time-options"
                label="Test label"
                max="23:59"
                min="00:00"
                name="time"
                read-only
                required
                show-seconds
                size="lg"
                step="30"
                value="12:00">
              </modus-wc-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should link label to input when input-id is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcInputLabel],
      html: '<modus-wc-time-input label="Start time"></modus-wc-time-input>',
    });

    expectLabelLinkedToControl(page.root!, 'input[type="time"]');

    const input = page.root!.querySelector(
      'input[type="time"]'
    ) as HTMLInputElement;
    expect(input.hasAttribute('aria-label')).toBe(false);
  });

  it('should render with error feedback', async () => {
    const feedback: IInputFeedbackProp = {
      level: 'error',
      message: 'Test error message',
    };
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcInputFeedback],
      html: '<modus-wc-time-input aria-label="Error input"></modus-wc-time-input>',
    });

    // Set feedback attribute
    const component = page.rootInstance as ModusWcTimeInput;
    component.feedback = feedback;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should follow the feedback level with the alert role', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcInputFeedback],
      html: '<modus-wc-time-input aria-label="Start"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;

    component.feedback = { level: 'warning', message: 'Check the time' };
    await page.waitForChanges();
    expect(
      page.root!.querySelector('.modus-wc-input-feedback')!.hasAttribute('role')
    ).toBe(false);

    component.feedback = { level: 'error', message: 'Required' };
    await page.waitForChanges();
    const feedback = page.root!.querySelector('.modus-wc-input-feedback')!;
    expect(feedback.getAttribute('role')).toBe('alert');
    expect(
      page.root!.querySelector('modus-wc-input-feedback')!.hasAttribute('role')
    ).toBe(false);

    component.feedback = { level: 'warning', message: 'Check the time' };
    await page.waitForChanges();
    expect(
      page.root!.querySelector('.modus-wc-input-feedback')!.hasAttribute('role')
    ).toBe(false);
  });

  it('should append error feedback to an existing accessible name and keep the hint', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput, ModusWcInputLabel, ModusWcInputFeedback],
      html: '<modus-wc-time-input input-id="start" label="Start" aria-labelledby="start-name" aria-describedby="hint"></modus-wc-time-input>',
    });
    const component = page.rootInstance as ModusWcTimeInput;
    component.feedback = { level: 'info', message: 'Use 24-hour time' };
    await page.waitForChanges();

    const input = page.root!.querySelector('input')!;
    expect(input.getAttribute('aria-labelledby')).toBe(
      'start-name start-feedback'
    );
    expect(input.getAttribute('aria-describedby')).toBe('hint');
    expect(input.hasAttribute('aria-invalid')).toBe(false);
    expect(page.root!.querySelector('label')!.hasAttribute('id')).toBe(false);
    expect(
      page.root!.querySelector('.modus-wc-input-feedback')!.hasAttribute('role')
    ).toBe(false);
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Blur test"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    input!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Change test" datalist-id="test-list"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input!.value = '01:00';
    input!.dispatchEvent(new Event('input'));
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
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Focus test"></modus-wc-time-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    input!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should render datalist when timeOptions are provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input"></modus-wc-time-input>`,
    });
    const timeInput = page.rootInstance;
    timeInput.datalistOptions = ['00:00', '12:00', '23:59'];
    await page.waitForChanges();

    const datalist = page.root!.querySelector('datalist');
    expect(datalist).not.toBeNull();
    expect(datalist!.children.length).toBe(3);
  });

  it('should not render datalist when timeOptions are not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input"></modus-wc-time-input>`,
    });
    const timeInput = page.rootInstance;
    timeInput.datalistOptions = [];
    await page.waitForChanges();

    const datalist = page.root!.querySelector('datalist');
    expect(datalist).toBeNull();
  });

  it('should not render datalist with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input"></modus-wc-time-input>`,
    });
    const datalist = page.root!.querySelector('datalist');
    expect(datalist).toBeNull();
  });

  it('should render datalist with internal ID when list prop is not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input"></modus-wc-time-input>`,
    });
    const timeInput = page.rootInstance;
    timeInput.datalistOptions = ['00:00', '12:00', '23:59'];
    await page.waitForChanges();

    const datalist = page.root!.querySelector('datalist');
    expect(datalist).not.toBeNull();
    expect(datalist!.id).toBe(timeInput.internalDatalistId);
  });

  it('should not render datalist when list prop is provided and does not match internal ID', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input aria-label="Time input" datalist-id="external-datalist"></modus-wc-time-input>`,
    });
    const timeInput = page.rootInstance;
    timeInput.datalistOptions = ['00:00', '12:00', '23:59'];
    await page.waitForChanges();

    const datalist = page.root!.querySelector('datalist');
    expect(datalist).toBeNull();
  });
});
