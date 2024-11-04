import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTextarea } from './modus-wc-textarea';

describe('modus-wc-textarea', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea aria-label="Default textarea"></modus-wc-textarea>',
    });
    expect(page.root).not.toBeNull();
    expect(page.root).toEqualHtml(`
      <modus-wc-textarea aria-label="Default textarea" value="">
        <textarea aria-invalid="false" aria-label="Default textarea" aria-placeholder="" class="modus-wc-textarea" placeholder="" spellcheck="" tabindex="0" value=""></textarea>
      </modus-wc-textarea>
    `);
  });

  it('renders with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: `<modus-wc-textarea 
        aria-describedby="description" 
        aria-invalid-textarea="true" 
        aria-label="Custom textarea" 
        custom-class="custom-class" 
        dir="rtl" 
        disabled="true"
        max-length="100"
        name="custom-name"
        placeholder="Custom placeholder"
        readonly="true"
        required="true"
        rows="5"
        textarea-aria-invalid="true"
        textarea-dir="rtl"
        textarea-id="custom-id"
        textarea-spellcheck="true"
        textarea-tab-index="2"
        value="Custom value"
      ></modus-wc-textarea>`,
    });
    expect(page.root).not.toBeNull();
    expect(page.root).toEqualHtml(`
      <modus-wc-textarea 
        aria-describedby="description" 
        aria-invalid-textarea="true" 
        aria-label="Custom textarea" 
        custom-class="custom-class"  
        dir="rtl" 
        disabled="true" 
        id="custom-id" 
        max-length="100" 
        name="custom-name" 
        placeholder="Custom placeholder" 
        readonly="true"
        required="true"
        rows="5" 
        tab-index="1" 
        value="Custom value"
      >
        <textarea 
          aria-describedby="description"
          aria-invalid="true"
          aria-label="Custom textarea"
          aria-placeholder="Custom placeholder"
          aria-required=""
          class="modus-wc-textarea custom-class"
          dir="rtl"
          disabled
          id="custom-id"
          maxlength="100"
          name="custom-name"
          placeholder="Custom placeholder"
          readonly
          required
          rows="5"
          spellcheck=""
          tabindex="1"
          value="Custom value"
        ></textarea>
      </modus-wc-textarea>
    `);
  });

  it('emits blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea aria-label="Blur test"></modus-wc-textarea>',
    });
    expect(page.root).not.toBeNull();
    const textarea = page.root!.querySelector('textarea');
    expect(textarea).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('textareaBlur', blurSpy);
    textarea!.dispatchEvent(new FocusEvent('blur'));
    await page.waitForChanges();
    expect(blurSpy).toHaveBeenCalled();
  });

  it('emits change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea aria-label="Change test"></modus-wc-textarea>',
    });
    expect(page.root).not.toBeNull();
    const textarea = page.root!.querySelector('textarea');
    expect(textarea).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('textareaChange', changeSpy);
    textarea!.value = 'New value';
    textarea!.dispatchEvent(new Event('change'));
    await page.waitForChanges();
    expect(changeSpy).toHaveBeenCalled();
    expect(changeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        detail: expect.any(Event),
      })
    );
  });

  it('emits focus event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea aria-label="Focus test"></modus-wc-textarea>',
    });
    expect(page.root).not.toBeNull();
    const textarea = page.root!.querySelector('textarea');
    expect(textarea).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('textareaFocus', focusSpy);
    textarea!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    expect(focusSpy).toHaveBeenCalled();
  });

  it('warns when ariaLabel is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea></modus-wc-textarea>',
    });
    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcTextarea: ariaLabel is required for accessibility.'
    );
    consoleWarnSpy.mockRestore();
  });

  it('does not warn when ariaLabel is provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();
    await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea aria-label="Valid label"></modus-wc-textarea>',
    });
    expect(consoleWarnSpy).not.toHaveBeenCalled();
    consoleWarnSpy.mockRestore();
  });
});
