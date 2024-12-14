import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTimeInput } from './modus-wc-time-input';

describe('modus-wc-time-input', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input></modus-wc-time-input>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcTimeInput: aria-label is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: '<modus-wc-time-input aria-label="Default input" list="test-list"></modus-wc-time-input>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with all props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTimeInput],
      html: `<modus-wc-time-input
                aria-describedby="desc"
                aria-label="Time input"
                auto-complete="on"
                bordered
                custom-class="custom"
                disabled
                input-dir="ltr"
                input-id="time-input"
                input-tab-index="1"
                list="time-options"
                max="23:59"
                min="00:00"
                name="time"
                read-only
                required
                seconds
                size="lg"
                step="30"
                time-options='["00:00", "12:00", "23:59"]'
                value="12:00">
              </modus-wc-time-input>`,
    });
    expect(page.root).toMatchSnapshot();
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
      html: '<modus-wc-time-input aria-label="Change test" list="test-list"></modus-wc-time-input>',
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

  // TODO: fix these test cases to actually do what they say

  // it('should render datalist when timeOptions are provided', async () => {
  //   const page = await newSpecPage({
  //     components: [ModusWcTimeInput],
  //     html: `<modus-wc-time-input aria-label="Time input" time-options='["00:00", "12:00", "23:59"]' list="test-list"></modus-wc-time-input>`,
  //   });
  //   expect(page.root).toMatchSnapshot();
  // });

  // it('should not render datalist when timeOptions are empty', async () => {
  //   const page = await newSpecPage({
  //     components: [ModusWcTimeInput],
  //     html: `<modus-wc-time-input aria-label="Time input" list="test-list"></modus-wc-time-input>`,
  //   });
  //   expect(page.root).toMatchSnapshot();
  // });
});
