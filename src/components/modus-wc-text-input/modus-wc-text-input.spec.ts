import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTextInput } from './modus-wc-text-input';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { ModusWcInputLabel } from '../modus-wc-input-label/modus-wc-input-label';
import { IInputFeedbackProp } from '../types';
import { expectLabelLinkedToControl } from '../utils';

describe('modus-wc-text-input', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Default input"></modus-wc-text-input>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: `<modus-wc-text-input
        aria-describedby="description"
        aria-label="Test text input"
        auto-capitalize="words"
        auto-complete="on"
        auto-focus="true"
        clear-aria-label="Clear input"
        custom-class="test-class"
        disabled="true"
        include-clear="true"
        include-search="true"
        input-aria-invalid="grammar"
        input-id="test-id"
        input-mode="numeric"
        input-spellcheck="true"
        input-tab-index="1"
        label="Test label"
        max-length="50"
        min-length="5"
        name="test-name"
        pattern="[A-Za-z]{3}"
        placeholder="Test placeholder"
        readonly="true"
        required="true"
        size="lg"
        type="email"
        value="test@example.com"
      ></modus-wc-text-input>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should link label to input when input-id is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcInputLabel],
      html: '<modus-wc-text-input label="Email" aria-label="Email"></modus-wc-text-input>',
    });

    expectLabelLinkedToControl(page.root!, 'input');
  });

  it('should render with error feedback', async () => {
    const feedback: IInputFeedbackProp = {
      level: 'error',
      message: 'Test error message',
    };
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcInputFeedback],
      html: '<modus-wc-text-input aria-label="Error input"></modus-wc-text-input>',
    });

    // Set feedback attribute
    const component = page.rootInstance as ModusWcTextInput;
    component.feedback = feedback;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Blur test"></modus-wc-text-input>',
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
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Change test"></modus-wc-text-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    input!.value = 'New value';
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
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Focus test"></modus-wc-text-input>',
    });
    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    input!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should clear text when clear button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input include-clear="true" value="Test Value" aria-label="Clear test"></modus-wc-text-input>',
    });

    const component = page.rootInstance as ModusWcTextInput;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    expect(component.value).toBe('Test Value');

    // Find and click the clear button
    const clearButton = page.root!.querySelector(
      '.modus-wc-text-input-icon-clear'
    );
    expect(clearButton).not.toBeNull();
    clearButton!.dispatchEvent(new MouseEvent('click'));

    await page.waitForChanges();

    expect(component.value).toBe('');
    expect(changeSpy).toHaveBeenCalled();
  });

  it('should clear text when Enter key is pressed on clear button', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input include-clear="true" value="Test Value" aria-label="Clear test"></modus-wc-text-input>',
    });

    const component = page.rootInstance as ModusWcTextInput;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    // Find and dispatch keydown event with Enter key
    const clearButton = page.root!.querySelector(
      '.modus-wc-text-input-icon-clear'
    );
    expect(clearButton).not.toBeNull();

    const keyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    const preventDefaultSpy = jest.spyOn(keyEvent, 'preventDefault');

    clearButton!.dispatchEvent(keyEvent);
    await page.waitForChanges();

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(component.value).toBe('');
    expect(changeSpy).toHaveBeenCalled();
  });

  it('should clear text when Space key is pressed on clear button', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input include-clear="true" value="Test Value" aria-label="Clear test"></modus-wc-text-input>',
    });

    const component = page.rootInstance as ModusWcTextInput;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    // Find and dispatch keydown event with Space key
    const clearButton = page.root!.querySelector(
      '.modus-wc-text-input-icon-clear'
    );
    expect(clearButton).not.toBeNull();

    const keyEvent = new KeyboardEvent('keydown', { key: ' ' });
    const preventDefaultSpy = jest.spyOn(keyEvent, 'preventDefault');

    clearButton!.dispatchEvent(keyEvent);
    await page.waitForChanges();

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(component.value).toBe('');
    expect(changeSpy).toHaveBeenCalled();
  });

  it('should not trigger clear action on other key presses', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input include-clear="true" value="Test Value" aria-label="Clear test"></modus-wc-text-input>',
    });

    const component = page.rootInstance as ModusWcTextInput;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    // Find and dispatch keydown event with another key
    const clearButton = page.root!.querySelector(
      '.modus-wc-text-input-icon-clear'
    );
    expect(clearButton).not.toBeNull();

    const keyEvent = new KeyboardEvent('keydown', { key: 'Tab' });
    const preventDefaultSpy = jest.spyOn(keyEvent, 'preventDefault');

    clearButton!.dispatchEvent(keyEvent);
    await page.waitForChanges();

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(component.value).toBe('Test Value');
    expect(changeSpy).not.toHaveBeenCalled();
  });

  it('should show clear button only when value exists and not disabled/readonly', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input include-clear="true" value="Test Value" aria-label="Clear visibility test"></modus-wc-text-input>',
    });

    // Initial state with value - clear button should be visible
    let clearContainer = page.root!.querySelector(
      '.modus-wc-clear-icon-container'
    );
    expect(clearContainer).toHaveClass('modus-wc-clear-icon-visible');

    // Set value to empty
    const component = page.rootInstance as ModusWcTextInput;
    component.value = '';
    await page.waitForChanges();

    clearContainer = page.root!.querySelector('.modus-wc-clear-icon-container');
    expect(clearContainer).toHaveClass('modus-wc-clear-icon-hidden');

    // Set value but also set disabled
    component.value = 'New value';
    component.disabled = true;
    await page.waitForChanges();

    clearContainer = page.root!.querySelector('.modus-wc-clear-icon-container');
    expect(clearContainer).toHaveClass('modus-wc-clear-icon-hidden');

    // Set readonly
    component.disabled = false;
    component.readOnly = true;
    await page.waitForChanges();

    clearContainer = page.root!.querySelector('.modus-wc-clear-icon-container');
    expect(clearContainer).toHaveClass('modus-wc-clear-icon-hidden');
  });

  it('should render with custom icon slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: `<modus-wc-text-input aria-label="Custom icon test">
        <modus-wc-icon slot="custom-icon" name="home" size="16px"></modus-wc-icon>
      </modus-wc-text-input>`,
    });

    // Should have custom icon wrapper
    const customIconWrapper = page.root!.querySelector(
      '.modus-wc-text-input-icon-custom'
    );
    expect(customIconWrapper).not.toBeNull();

    // Should have the slotted icon
    const slottedIcon = page.root!.querySelector('[slot="custom-icon"]');
    expect(slottedIcon).not.toBeNull();
    expect(slottedIcon!.getAttribute('name')).toBe('home');
  });

  it('should prioritize custom icon over includeSearch', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: `<modus-wc-text-input include-search="true" aria-label="Priority test">
        <modus-wc-icon slot="custom-icon" name="settings" size="16px"></modus-wc-icon>
      </modus-wc-text-input>`,
    });

    // Should have custom icon wrapper, not search icon
    const customIconWrapper = page.root!.querySelector(
      '.modus-wc-text-input-icon-custom'
    );
    expect(customIconWrapper).not.toBeNull();

    // Should NOT have search icon when custom icon is present
    const searchIcon = page.root!.querySelector(
      '.modus-wc-text-input-icon-search'
    );
    expect(searchIcon).toBeNull();

    // Should have the slotted custom icon
    const slottedIcon = page.root!.querySelector('[slot="custom-icon"]');
    expect(slottedIcon).not.toBeNull();
    expect(slottedIcon!.getAttribute('name')).toBe('settings');
  });

  it('should show search icon when includeSearch is true and no custom icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input include-search="true" aria-label="Search icon test"></modus-wc-text-input>',
    });

    // Should have search icon
    const searchIcon = page.root!.querySelector(
      '.modus-wc-text-input-icon-search'
    );
    expect(searchIcon).not.toBeNull();

    // Should NOT have custom icon wrapper
    const customIconWrapper = page.root!.querySelector(
      '.modus-wc-text-input-icon-custom'
    );
    expect(customIconWrapper).toBeNull();
  });

  it('should work with custom icon and clear button together', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: `<modus-wc-text-input include-clear="true" value="Test Value" aria-label="Custom icon with clear test">
        <modus-wc-icon slot="custom-icon" name="heart" size="16px"></modus-wc-icon>
      </modus-wc-text-input>`,
    });

    // Should have both custom icon and clear button
    const customIconWrapper = page.root!.querySelector(
      '.modus-wc-text-input-icon-custom'
    );
    expect(customIconWrapper).not.toBeNull();

    const clearContainer = page.root!.querySelector(
      '.modus-wc-clear-icon-container'
    );
    expect(clearContainer).not.toBeNull();
    expect(clearContainer).toHaveClass('modus-wc-clear-icon-visible');

    // Test clearing still works
    const component = page.rootInstance as ModusWcTextInput;
    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const clearButton = page.root!.querySelector(
      '.modus-wc-text-input-icon-clear'
    );
    expect(clearButton).not.toBeNull();
    clearButton!.dispatchEvent(new MouseEvent('click'));

    await page.waitForChanges();

    expect(component.value).toBe('');
    expect(changeSpy).toHaveBeenCalled();
  });

  it('should render password visibility toggle only for password type', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" value="secret" aria-label="Password input"></modus-wc-text-input>',
    });

    const toggleButton = page.root!.querySelector(
      '.modus-wc-text-input-password-toggle'
    );
    expect(toggleButton).not.toBeNull();

    const input = page.root!.querySelector('input');
    expect(input?.getAttribute('type')).toBe('password');
  });

  it('should render a key icon at the start for password type', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" aria-label="Password key icon"></modus-wc-text-input>',
    });

    const keyIcon = page.root!.querySelector(
      'modus-wc-icon.modus-wc-text-input-icon-password'
    ) as HTMLElement & { name?: string };
    expect(keyIcon).not.toBeNull();
    expect(keyIcon?.name).toBe('key');
  });

  it('should not render clear icon for password type', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" include-clear="true" value="secret" aria-label="Password no clear"></modus-wc-text-input>',
    });

    expect(
      page.root!.querySelector('.modus-wc-clear-icon-container')
    ).toBeNull();
    expect(
      page.root!.querySelector('.modus-wc-text-input-icon-clear')
    ).toBeNull();
  });

  it('should apply disabled class so password key icon can dim', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" disabled="true" aria-label="Disabled password key"></modus-wc-text-input>',
    });

    const field = page.root!.querySelector('.modus-wc-text-input');
    expect(field).toHaveClass('modus-wc-input-disabled');
    expect(
      page.root!.querySelector('.modus-wc-text-input-icon-password')
    ).not.toBeNull();
  });

  it('should prefer custom icon over password key icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: `<modus-wc-text-input type="password" aria-label="Custom over key">
        <modus-wc-icon slot="custom-icon" name="home" size="sm"></modus-wc-icon>
      </modus-wc-text-input>`,
    });

    expect(
      page.root!.querySelector('.modus-wc-text-input-icon-password')
    ).toBeNull();
    expect(
      page.root!.querySelector('.modus-wc-text-input-icon-custom')
    ).not.toBeNull();
  });

  it('should not render password visibility toggle for non-password types', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="text" aria-label="Text input"></modus-wc-text-input>',
    });

    const toggleButton = page.root!.querySelector(
      '.modus-wc-text-input-password-toggle'
    );
    expect(toggleButton).toBeNull();
  });

  it('should toggle password visibility when the button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" value="secret" aria-label="Password toggle test"></modus-wc-text-input>',
    });

    const input = page.root!.querySelector('input');
    const toggleButton = page.root!.querySelector(
      '.modus-wc-text-input-password-toggle button'
    ) as HTMLButtonElement;
    const toggleIcon = page.root!.querySelector(
      '.modus-wc-text-input-password-toggle modus-wc-icon'
    ) as HTMLElement & { name?: string };

    expect(input?.getAttribute('type')).toBe('password');
    expect(toggleButton.getAttribute('aria-pressed')).toBeNull();
    expect(toggleButton.getAttribute('aria-label')).toBe('Show password');
    expect(toggleIcon?.name).toBe('visibility_on');

    toggleButton.click();
    await page.waitForChanges();

    expect(input?.getAttribute('type')).toBe('text');
    expect(toggleButton.getAttribute('aria-pressed')).toBe('true');
    expect(toggleButton.getAttribute('aria-label')).toBe('Hide password');
    expect(toggleIcon?.name).toBe('visibility_off');

    toggleButton.click();
    await page.waitForChanges();

    expect(input?.getAttribute('type')).toBe('password');
    expect(toggleButton.getAttribute('aria-label')).toBe('Show password');
    expect(toggleIcon?.name).toBe('visibility_on');
  });

  it('should hide password visibility toggle when disabled or readOnly', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" disabled="true" aria-label="Disabled password"></modus-wc-text-input>',
    });

    expect(
      page.root!.querySelector('.modus-wc-text-input-password-toggle')
    ).toBeNull();

    const component = page.rootInstance as ModusWcTextInput;
    component.disabled = false;
    component.readOnly = true;
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-text-input-password-toggle')
    ).toBeNull();
  });

  it('should remask password when becoming disabled or readOnly after reveal', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" value="secret" aria-label="Remask password"></modus-wc-text-input>',
    });

    const component = page.rootInstance as ModusWcTextInput;
    const input = page.root!.querySelector('input');
    const toggleButton = page.root!.querySelector(
      '.modus-wc-text-input-password-toggle button'
    ) as HTMLButtonElement;

    toggleButton.click();
    await page.waitForChanges();
    expect(input?.getAttribute('type')).toBe('text');

    component.readOnly = true;
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-text-input-password-toggle')
    ).toBeNull();
    expect(input?.getAttribute('type')).toBe('password');

    component.readOnly = false;
    await page.waitForChanges();

    const toggleAgain = page.root!.querySelector(
      '.modus-wc-text-input-password-toggle button'
    ) as HTMLButtonElement;
    toggleAgain.click();
    await page.waitForChanges();
    expect(input?.getAttribute('type')).toBe('text');

    component.disabled = true;
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-text-input-password-toggle')
    ).toBeNull();
    expect(input?.getAttribute('type')).toBe('password');
  });

  it('should reset password visibility when type changes away from password', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" value="secret" aria-label="Password type change"></modus-wc-text-input>',
    });

    const component = page.rootInstance as ModusWcTextInput;
    const input = page.root!.querySelector('input');
    const toggleButton = page.root!.querySelector(
      '.modus-wc-text-input-password-toggle button'
    ) as HTMLButtonElement;

    toggleButton.click();
    await page.waitForChanges();
    expect(input?.getAttribute('type')).toBe('text');

    component.type = 'email';
    await page.waitForChanges();

    component.type = 'password';
    await page.waitForChanges();
    expect(input?.getAttribute('type')).toBe('password');
  });

  it('should use xs password toggle size when input size is sm', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" size="sm" aria-label="Small password"></modus-wc-text-input>',
    });

    const toggleButton = page.root!.querySelector(
      'modus-wc-button.modus-wc-text-input-password-toggle'
    ) as HTMLElement & { size?: string };
    const toggleIcon = page.root!.querySelector(
      '.modus-wc-text-input-password-toggle modus-wc-icon'
    ) as HTMLElement & { size?: string };

    expect(toggleButton?.size).toBe('xs');
    expect(toggleIcon?.size).toBe('xs');
  });

  it('should use md password toggle size when input size is lg', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput, ModusWcButton, ModusWcIcon],
      html: '<modus-wc-text-input type="password" size="lg" aria-label="Large password"></modus-wc-text-input>',
    });

    const toggleButton = page.root!.querySelector(
      'modus-wc-button.modus-wc-text-input-password-toggle'
    ) as HTMLElement & { size?: string };
    const toggleIcon = page.root!.querySelector(
      '.modus-wc-text-input-password-toggle modus-wc-icon'
    ) as HTMLElement & { size?: string };

    expect(toggleButton?.size).toBe('md');
    expect(toggleIcon?.size).toBe('md');
  });

  it('should default effective input type to text when type is unset', async () => {
    const page = await newSpecPage({
      components: [ModusWcTextInput],
      html: '<modus-wc-text-input aria-label="Unset type"></modus-wc-text-input>',
    });

    const component = page.rootInstance as ModusWcTextInput;
    component.type = undefined;
    await page.waitForChanges();

    const input = page.root!.querySelector('input');
    expect(input?.getAttribute('type')).toBe('text');
  });
});
