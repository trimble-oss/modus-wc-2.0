import { newSpecPage } from '@stencil/core/testing';
import { ModusWcInput } from './modus-wc-input';
import * as themeUtils from '../../../utils/theme';

describe('modus-wc-input', () => {
  beforeEach(() => {
    jest.spyOn(themeUtils, 'getCurrentModusWCMode').mockReturnValue('default');
  });

  it('should warn if ariaLabel is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input></modus-wc-input>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcInput: ariaLabel is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Default Input"></modus-wc-input>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-input aria-label="Default Input" value="">
        <div class="modus-wc-input-wrapper modus-wc-input--medium">
          <input aria-label="Default Input" class="modus-wc-input" placeholder="" type="text" value="">
        </div>
      </modus-wc-input>
    `);
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Custom Input" custom-class="custom" name="test-input" placeholder="Enter text" required size="large" type="email" value="test@example.com"></modus-wc-input>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-input aria-label="Custom Input" custom-class="custom" name="test-input" placeholder="Enter text" required size="large" type="email" value="test@example.com">
        <div class="modus-wc-input-wrapper custom modus-wc-input--large">
          <input aria-label="Custom Input" class="modus-wc-input" name="test-input" placeholder="Enter text" required type="email" value="test@example.com">
        </div>
      </modus-wc-input>
    `);
  });

  it('should apply disabled state correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Disabled Input" disabled></modus-wc-input>',
    });
    expect(page.root).toEqualHtml(`
      <modus-wc-input aria-label="Disabled Input" disabled value="">
        <div class="modus-wc-input-wrapper modus-wc-input--medium modus-wc-input--disabled">
          <input aria-label="Disabled Input" class="modus-wc-input" disabled placeholder="" type="text" value="">
        </div>
      </modus-wc-input>
    `);
  });

  it('should apply dark mode class correctly', async () => {
    jest.spyOn(themeUtils, 'getCurrentModusWCMode').mockReturnValue('dark');

    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Dark Mode Input"></modus-wc-input>',
    });

    expect(page.root).toEqualHtml(`
      <modus-wc-input aria-label="Dark Mode Input" value="">
        <div class="modus-wc-input-wrapper modus-wc-input--medium modus-wc-input--dark-mode">
          <input aria-label="Dark Mode Input" class="modus-wc-input" placeholder="" type="text" value="">
        </div>
      </modus-wc-input>
    `);
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Blur Event Input"></modus-wc-input>',
    });
    const input = page.root?.querySelector('input');
    const blurSpy = jest.fn();
    page.root?.addEventListener('blur', blurSpy);

    input?.dispatchEvent(new Event('blur'));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit focus event', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Focus Event Input"></modus-wc-input>',
    });
    const input = page.root?.querySelector('input');
    const focusSpy = jest.fn();
    page.root?.addEventListener('focus', focusSpy);

    input?.dispatchEvent(new Event('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should emit change event and update value', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Change Event Input"></modus-wc-input>',
    });
    const input = page.root?.querySelector('input');
    const changeSpy = jest.fn();
    page.root?.addEventListener('change', changeSpy);

    if (input) {
      input.value = 'New Value';
      input.dispatchEvent(new Event('input'));
      await page.waitForChanges();

      expect(changeSpy).toHaveBeenCalledWith(
        expect.objectContaining({ detail: 'New Value' })
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      expect(page.rootInstance.value).toBe('New Value');
    }
  });

  it('should use placeholder as aria-label if ariaLabel is not provided', async () => {
    const consoleSpy = jest.spyOn(console, 'warn').mockImplementation();

    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input placeholder="Enter text"></modus-wc-input>',
    });

    const input = page.root?.querySelector('input');

    expect(input?.getAttribute('aria-label')).toBe('Enter text');

    consoleSpy.mockRestore();
  });

  it('should prioritize ariaLabel over placeholder for aria-label attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Custom Label" placeholder="Enter text"></modus-wc-input>',
    });
    const input = page.root?.querySelector('input');
    expect(input?.getAttribute('aria-label')).toBe('Custom Label');
  });

  it('should render correctly with different input types', async () => {
    const types = ['text', 'email', 'number', 'password'];
    for (const type of types) {
      const page = await newSpecPage({
        components: [ModusWcInput],
        html: `<modus-wc-input aria-label="${type} Input" type="${type}"></modus-wc-input>`,
      });
      const input = page.root?.querySelector('input');
      expect(input?.getAttribute('type')).toBe(type);
    }
  });

  it('should apply the required attribute when set', async () => {
    const page = await newSpecPage({
      components: [ModusWcInput],
      html: '<modus-wc-input aria-label="Required Input" required></modus-wc-input>',
    });
    const input = page.root?.querySelector('input');
    expect(input?.hasAttribute('required')).toBe(true);
  });

  it('should render correctly with different sizes', async () => {
    const sizes = ['small', 'medium', 'large'];
    for (const size of sizes) {
      const page = await newSpecPage({
        components: [ModusWcInput],
        html: `<modus-wc-input aria-label="${size} Input" size="${size}"></modus-wc-input>`,
      });
      expect(page.root).toEqualHtml(`
        <modus-wc-input aria-label="${size} Input" size="${size}" value="">
          <div class="modus-wc-input-wrapper modus-wc-input--${size}">
            <input aria-label="${size} Input" class="modus-wc-input" placeholder="" type="text" value="">
          </div>
        </modus-wc-input>
      `);
    }
  });
});
