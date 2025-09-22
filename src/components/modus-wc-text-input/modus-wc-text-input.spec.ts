import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTextInput } from './modus-wc-text-input';
import { ModusWcInputFeedback } from '../modus-wc-input-feedback/modus-wc-input-feedback';
import { IInputFeedbackProp } from '../types';

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
});
