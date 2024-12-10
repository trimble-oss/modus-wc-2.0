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
      html: '<modus-wc-time-input aria-label="Default input"></modus-wc-time-input>',
    });
    expect(page.root).toMatchSnapshot();
  });

  // TODO: add test cases
  // it('should render with custom props', async () => {
  //   const page = await newSpecPage({
  //     components: [ModusWcTimeInput],
  //     html: `<modus-wc-time-input
  //       aria-describedby="description"
  //       aria-label="Test time input"
  //       auto-capitalize="words"
  //       auto-complete="on"
  //       auto-focus="true"
  //       custom-class="test-class"
  //       disabled="true"
  //       input-aria-invalid="grammar"
  //       input-dir="rtl"
  //       input-id="test-id"
  //       input-mode="numeric"
  //       input-spellcheck="true"
  //       input-tab-index="1"
  //       max-length="50"
  //       min-length="5"
  //       name="test-name"
  //       pattern="[A-Za-z]{3}"
  //       placeholder="Test placeholder"
  //       readonly="true"
  //       required="true"
  //       size="lg"
  //       type="email"
  //       value="test@example.com"
  //     ></modus-wc-time-input>`,
  //   });
  //   expect(page.root).toMatchSnapshot();
  // });

  // it('should emit blur event', async () => {
  //   const page = await newSpecPage({
  //     components: [ModusWcTimeInput],
  //     html: '<modus-wc-time-input aria-label="Blur test"></modus-wc-time-input>',
  //   });
  //   const input = page.root!.querySelector('input');
  //   expect(input).not.toBeNull();
  //   const blurSpy = jest.fn();
  //   page.root!.addEventListener('inputBlur', blurSpy);

  //   input!.dispatchEvent(new FocusEvent('blur'));
  //   await page.waitForChanges();

  //   expect(blurSpy).toHaveBeenCalled();
  // });

  // it('should emit change event', async () => {
  //   const page = await newSpecPage({
  //     components: [ModusWcTimeInput],
  //     html: '<modus-wc-time-input aria-label="Change test"></modus-wc-time-input>',
  //   });
  //   const input = page.root!.querySelector('input');
  //   expect(input).not.toBeNull();
  //   const changeSpy = jest.fn();
  //   page.root!.addEventListener('inputChange', changeSpy);

  //   input!.value = 'New value';
  //   input!.dispatchEvent(new Event('change'));
  //   await page.waitForChanges();

  //   expect(changeSpy).toHaveBeenCalled();
  //   expect(changeSpy).toHaveBeenCalledWith(
  //     expect.objectContaining({
  //       // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
  //       detail: expect.any(Event),
  //     })
  //   );
  // });

  // it('should emit focus event', async () => {
  //   const page = await newSpecPage({
  //     components: [ModusWcTimeInput],
  //     html: '<modus-wc-time-input aria-label="Focus test"></modus-wc-time-input>',
  //   });
  //   const input = page.root!.querySelector('input');
  //   expect(input).not.toBeNull();
  //   const focusSpy = jest.fn();
  //   page.root!.addEventListener('inputFocus', focusSpy);

  //   input!.dispatchEvent(new FocusEvent('focus'));
  //   await page.waitForChanges();

  //   expect(focusSpy).toHaveBeenCalled();
  // });
});
