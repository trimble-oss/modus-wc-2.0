import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { IInputFeedbackProp } from '../types';
import { expectLabelLinkedToControl } from '../utils';
import { ModusWcTextarea } from './modus-wc-textarea';

describe('modus-wc-textarea', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea],
      html: '<modus-wc-textarea></modus-wc-textarea>',
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

  it('should link label to input when input-id is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextarea, ModusWcInputLabel],
      html: '<modus-wc-textarea label="Notes"></modus-wc-textarea>',
    });

    expectLabelLinkedToControl(page.root!, 'textarea');

    const textarea = page.root!.querySelector(
      'textarea'
    ) as HTMLTextAreaElement;
    expect(textarea.hasAttribute('aria-label')).toBe(false);
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

  describe('character count', () => {
    it('should not render the counter by default', async () => {
      const page = await newSpecPage({
        components: [ModusWcTextarea],
        html: '<modus-wc-textarea max-length="10"></modus-wc-textarea>',
      });

      expect(page.root!.querySelector('.modus-wc-character-count')).toBeNull();
      expect(page.root!.querySelector('[aria-live]')).toBeNull();
    });

    it('should not render the counter when maxLength is not set', async () => {
      const page = await newSpecPage({
        components: [ModusWcTextarea],
        html: '<modus-wc-textarea show-character-count></modus-wc-textarea>',
      });

      expect(page.root!.querySelector('.modus-wc-character-count')).toBeNull();
      expect(
        page.root!.querySelector('textarea')!.hasAttribute('aria-describedby')
      ).toBe(false);
    });

    it('should render the counter and update on input', async () => {
      const page = await newSpecPage({
        components: [ModusWcTextarea],
        html: '<modus-wc-textarea input-id="notes" max-length="10" show-character-count></modus-wc-textarea>',
      });
      const textarea = page.root!.querySelector('textarea')!;
      const counter = page.root!.querySelector('.modus-wc-character-count')!;

      expect(page.root).toMatchSnapshot();
      expect(counter.id).toBe('notes-character-count');
      expect(counter.textContent).toBe('0/10');
      expect(textarea.getAttribute('aria-describedby')).toBe(
        'notes-character-count'
      );

      textarea.value = 'Hello';
      textarea.dispatchEvent(new Event('input'));
      await page.waitForChanges();

      expect(counter.textContent).toBe('5/10');
      expect(
        counter.classList.contains('modus-wc-character-count--limit')
      ).toBe(false);
      expect(page.root!.querySelector('[aria-live]')!.textContent).toBe('');
    });

    it('should mark the counter and announce when the limit is reached', async () => {
      const page = await newSpecPage({
        components: [ModusWcTextarea],
        html: '<modus-wc-textarea max-length="5" show-character-count></modus-wc-textarea>',
      });
      const textarea = page.root!.querySelector('textarea')!;
      const liveRegion = page.root!.querySelector('[aria-live="polite"]')!;

      textarea.value = 'Hello';
      textarea.dispatchEvent(new Event('input'));
      await page.waitForChanges();

      const counter = page.root!.querySelector('.modus-wc-character-count')!;
      expect(counter.textContent).toBe('5/5');
      expect(
        counter.classList.contains('modus-wc-character-count--limit')
      ).toBe(true);
      expect(liveRegion.classList.contains('modus-wc-sr-only')).toBe(true);
      expect(liveRegion.textContent).toBe('Character limit reached');
    });

    it('should count an unset value as zero', async () => {
      const page = await newSpecPage({
        components: [ModusWcTextarea],
        html: '<modus-wc-textarea max-length="3" show-character-count></modus-wc-textarea>',
      });
      const component = page.rootInstance as ModusWcTextarea;

      component.value = null as unknown as string;
      await page.waitForChanges();

      expect(
        page.root!.querySelector('.modus-wc-character-count')!.textContent
      ).toBe('0/3');
    });

    it('should merge the counter id with inherited and feedback ids', async () => {
      const page = await newSpecPage({
        components: [ModusWcTextarea, ModusWcInputFeedback],
        html: '<modus-wc-textarea input-id="notes" aria-describedby="hint" max-length="20" show-character-count></modus-wc-textarea>',
      });
      const component = page.rootInstance as ModusWcTextarea;
      const textarea = page.root!.querySelector('textarea')!;

      component.feedback = { level: 'error', message: 'Value is required.' };
      await page.waitForChanges();

      expect(textarea.getAttribute('aria-describedby')).toBe(
        'hint notes-feedback notes-character-count'
      );
      const footer = page.root!.querySelector('.modus-wc-input-footer')!;
      expect(footer.querySelector('modus-wc-input-feedback')).not.toBeNull();
      expect(footer.querySelector('.modus-wc-character-count')).not.toBeNull();
    });
  });

  describe('auto resize', () => {
    const mockCss = (value: unknown) =>
      jest
        .spyOn(window, 'CSS', 'get')
        .mockReturnValue(value as typeof window.CSS);

    afterEach(() => {
      jest.restoreAllMocks();
    });

    const setupFallback = async () => {
      const page = await newSpecPage({
        components: [ModusWcTextarea],
        html: '<modus-wc-textarea rows="3"></modus-wc-textarea>',
      });
      const textarea = page.root!.querySelector('textarea')!;
      Object.defineProperty(textarea, 'scrollHeight', {
        configurable: true,
        value: 120,
      });
      return { page, textarea };
    };

    it('should not add the auto-resize class by default', async () => {
      const page = await newSpecPage({
        components: [ModusWcTextarea],
        html: '<modus-wc-textarea rows="3"></modus-wc-textarea>',
      });
      const textarea = page.root!.querySelector('textarea')!;

      expect(
        textarea.classList.contains('modus-wc-textarea--auto-resize')
      ).toBe(false);
      expect(textarea.style.getPropertyValue('--modus-wc-textarea-rows')).toBe(
        ''
      );
    });

    it('should add the auto-resize class and rows variable', async () => {
      mockCss({ supports: () => true });
      const page = await newSpecPage({
        components: [ModusWcTextarea],
        html: '<modus-wc-textarea auto-resize rows="3"></modus-wc-textarea>',
      });
      const textarea = page.root!.querySelector('textarea')!;

      expect(
        textarea.classList.contains('modus-wc-textarea--auto-resize')
      ).toBe(true);
      expect(textarea.style.getPropertyValue('--modus-wc-textarea-rows')).toBe(
        '3'
      );
      expect(textarea.style.height).toBe('');
    });

    it('should not set the rows variable when rows is not set', async () => {
      mockCss({ supports: () => true });
      const page = await newSpecPage({
        components: [ModusWcTextarea],
        html: '<modus-wc-textarea auto-resize></modus-wc-textarea>',
      });
      const textarea = page.root!.querySelector('textarea')!;

      expect(textarea.style.getPropertyValue('--modus-wc-textarea-rows')).toBe(
        ''
      );
    });

    it('should size the textarea from scrollHeight when CSS is unavailable', async () => {
      mockCss(undefined);
      const { page, textarea } = await setupFallback();
      const component = page.rootInstance as ModusWcTextarea;

      component.autoResize = true;
      await page.waitForChanges();

      expect(textarea.style.height).toBe('120px');

      component.autoResize = false;
      await page.waitForChanges();

      expect(textarea.style.height).toBe('');
    });

    it('should resize on input when field-sizing is unsupported', async () => {
      mockCss({ supports: () => false });
      const { page, textarea } = await setupFallback();
      const component = page.rootInstance as ModusWcTextarea;

      component.autoResize = true;
      await page.waitForChanges();

      Object.defineProperty(textarea, 'scrollHeight', {
        configurable: true,
        value: 200,
      });
      textarea.value = 'Line 1\nLine 2\nLine 3\nLine 4';
      textarea.dispatchEvent(new Event('input'));
      await page.waitForChanges();

      expect(textarea.style.height).toBe('200px');
    });

    it('should use the JS fallback when CSS.supports is missing', async () => {
      mockCss({});
      const { page, textarea } = await setupFallback();
      const component = page.rootInstance as ModusWcTextarea;

      component.autoResize = true;
      await page.waitForChanges();

      expect(textarea.style.height).toBe('120px');
    });
  });
});
