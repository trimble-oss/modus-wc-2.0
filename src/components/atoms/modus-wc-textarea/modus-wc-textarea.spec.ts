import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTextarea } from './modus-wc-textarea';

describe('modus-wc-textarea', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea></modus-wc-textarea>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcTextarea: aria-label is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

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
        input-dir="rtl"
        input-id="custom-id"
        input-spellcheck="true"
        input-tab-index="1"
        max-length="100"
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
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
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
