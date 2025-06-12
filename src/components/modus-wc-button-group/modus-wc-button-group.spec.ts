import { newSpecPage } from '@stencil/core/testing';
import { ModusWcButtonGroup } from './modus-wc-button-group';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';

describe('modus-wc-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button value="test">Test</modus-wc-button>
             </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  // Snapshot tests
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group 
               orientation="vertical" 
               selection-mode="multiple" 
               size="lg" 
               variant="borderless" 
               spaced 
               custom-class="test-class"
               value='["button1"]'>
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with disabled state', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group disabled>
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('applies vertical orientation', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group orientation="vertical"></modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('applies spaced modifier', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group spaced></modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('applies disabled state', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group disabled></modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('sets correct role for multiple selection mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group selection-mode="multiple"></modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('sets correct role for state when none selection mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group selection-mode="none"></modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it("doesn't emit event when click, in disabled state", async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group disabled>
               <modus-wc-button value="test" >Test</modus-wc-button>
             </modus-wc-button-group>`,
    });
    const modusButtonGroup = page.root?.querySelector('modus-wc-button-group');

    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    modusButtonGroup?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(0);
  });

  it("doesn't emit event when click, when selection mode is none", async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="none">
               <modus-wc-button value="test">Test</modus-wc-button>
             </modus-wc-button-group>`,
    });
    const modusButtonGroup = page.root?.querySelector('modus-wc-button-group');

    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    modusButtonGroup?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(0);
  });

  it('sets custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="none" custom-class="custom">
               <modus-wc-button value="test">Test</modus-wc-button>
             </modus-wc-button-group>`,
    });

    expect(page.root).toMatchSnapshot();
  });

  // Test componentDidUpdate coverage
  it('should update button properties and states when value prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group value="button1">
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;

    // Change the value to trigger componentDidUpdate
    component.value = 'button2';
    await page.waitForChanges();

    const button1 = page.root?.querySelector(
      'modus-wc-button[value="button1"]'
    );
    const button2 = page.root?.querySelector(
      'modus-wc-button[value="button2"]'
    );

    expect(button1?.hasAttribute('pressed')).toBe(false);
    expect(button2?.hasAttribute('pressed')).toBe(true);
  });

  // Test handleButtonClick for single selection mode
  it('should handle button click in single selection mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="single">
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    // Simulate button click event
    const clickEvent = new CustomEvent('buttonClick', {
      detail: {},
    });
    Object.defineProperty(clickEvent, 'target', {
      value: page.root?.querySelector('modus-wc-button[value="button1"]'),
      writable: false,
    });

    component.handleButtonClick(clickEvent);
    await page.waitForChanges();

    expect(component.value).toBe('button1');
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          value: 'button1',
          source: page.root?.querySelector('modus-wc-button[value="button1"]'),
        },
      })
    );
  });

  // Test handleButtonClick for multiple selection mode
  it('should handle button click in multiple selection mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="multiple">
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    // First click - add button1
    const clickEvent1 = new CustomEvent('buttonClick', {
      detail: {},
    });
    Object.defineProperty(clickEvent1, 'target', {
      value: page.root?.querySelector('modus-wc-button[value="button1"]'),
      writable: false,
    });

    component.handleButtonClick(clickEvent1);
    await page.waitForChanges();

    expect(component.value).toEqual(['button1']);

    // Second click - add button2
    const clickEvent2 = new CustomEvent('buttonClick', {
      detail: {},
    });
    Object.defineProperty(clickEvent2, 'target', {
      value: page.root?.querySelector('modus-wc-button[value="button2"]'),
      writable: false,
    });

    component.handleButtonClick(clickEvent2);
    await page.waitForChanges();

    expect(component.value).toEqual(['button1', 'button2']);

    // Third click - remove button1
    component.handleButtonClick(clickEvent1);
    await page.waitForChanges();

    expect(component.value).toEqual(['button2']);
    expect(eventSpy).toHaveBeenCalledTimes(3);
  });

  // Test button value extraction from textContent when no value attribute
  it('should extract button value from textContent when no value attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="single">
               <modus-wc-button>Test Button</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    const clickEvent = new CustomEvent('buttonClick', {
      detail: {},
    });
    const buttonElement = page.root?.querySelector('modus-wc-button');
    Object.defineProperty(clickEvent, 'target', {
      value: buttonElement,
      writable: false,
    });

    component.handleButtonClick(clickEvent);
    await page.waitForChanges();

    expect(component.value).toBe('Test Button');
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          value: 'Test Button',
          source: buttonElement,
        },
      })
    );
  });

  // Test updateButtonStates with array values
  it('should update button states with array values', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="multiple">
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
               <modus-wc-button value="button3">Button 3</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;
    // Set the value property directly as an array
    component.value = ['button1', 'button2'];
    await page.waitForChanges();

    const button1 = page.root?.querySelector(
      'modus-wc-button[value="button1"]'
    );
    const button2 = page.root?.querySelector(
      'modus-wc-button[value="button2"]'
    );
    const button3 = page.root?.querySelector(
      'modus-wc-button[value="button3"]'
    );

    expect(button1?.hasAttribute('pressed')).toBe(true);
    expect(button2?.hasAttribute('pressed')).toBe(true);
    expect(button3?.hasAttribute('pressed')).toBe(false);
  });

  // Test updateButtonStates with single string value
  it('should update button states with single string value', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="single" value="button2">
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
               <modus-wc-button value="button3">Button 3</modus-wc-button>
             </modus-wc-button-group>`,
    });

    await page.waitForChanges();

    const button1 = page.root?.querySelector(
      'modus-wc-button[value="button1"]'
    );
    const button2 = page.root?.querySelector(
      'modus-wc-button[value="button2"]'
    );
    const button3 = page.root?.querySelector(
      'modus-wc-button[value="button3"]'
    );

    expect(button1?.hasAttribute('pressed')).toBe(false);
    expect(button2?.hasAttribute('pressed')).toBe(true);
    expect(button3?.hasAttribute('pressed')).toBe(false);
  });

  // Test multiple selection with existing string value that gets converted to array
  it('should handle multiple selection with existing string value', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="multiple" value="button1">
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;

    // Click button2 to add it to selection
    const clickEvent = new CustomEvent('buttonClick', {
      detail: {},
    });
    Object.defineProperty(clickEvent, 'target', {
      value: page.root?.querySelector('modus-wc-button[value="button2"]'),
      writable: false,
    });

    component.handleButtonClick(clickEvent);
    await page.waitForChanges();

    // Should convert string to array and add new value
    expect(component.value).toEqual(['button1', 'button2']);
  });

  // Test disabled state preventing button clicks
  it('should not handle button clicks when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group disabled>
               <modus-wc-button value="button1">Button 1</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    const clickEvent = new CustomEvent('buttonClick', {
      detail: {},
    });
    Object.defineProperty(clickEvent, 'target', {
      value: page.root?.querySelector('modus-wc-button[value="button1"]'),
      writable: false,
    });

    component.handleButtonClick(clickEvent);
    await page.waitForChanges();

    expect(component.value).toBe('');
    expect(eventSpy).not.toHaveBeenCalled();
  });

  // Test none selection mode preventing button clicks
  it('should not handle button clicks when selection mode is none', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="none">
               <modus-wc-button value="button1">Button 1</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    const clickEvent = new CustomEvent('buttonClick', {
      detail: {},
    });
    Object.defineProperty(clickEvent, 'target', {
      value: page.root?.querySelector('modus-wc-button[value="button1"]'),
      writable: false,
    });

    component.handleButtonClick(clickEvent);
    await page.waitForChanges();

    expect(component.value).toBe('');
    expect(eventSpy).not.toHaveBeenCalled();
  });

  // Test handling of empty button value when no value attribute and no textContent
  it('should handle button click when button has empty value', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="single">
               <modus-wc-button></modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    // Simulate button click event on the empty button
    const clickEvent = new CustomEvent('buttonClick', {
      detail: {},
    });
    const buttonElement = page.root?.querySelector('modus-wc-button');
    Object.defineProperty(clickEvent, 'target', {
      value: buttonElement,
      writable: false,
    });

    component.handleButtonClick(clickEvent);
    await page.waitForChanges();

    // The value should resolve to an empty string
    expect(component.value).toBe('');
    // The button should receive the pressed attribute
    expect(buttonElement?.hasAttribute('pressed')).toBe(true);
    // Event should be emitted with empty string value
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          value: '',
          source: buttonElement,
        },
      })
    );
  });

  // Test updateButtonStates when value prop becomes undefined
  it('should not press any button when value is undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="single">
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button value="button2">Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;
    // Explicitly set value prop to undefined
    component.value = undefined;
    await page.waitForChanges();

    const button1 = page.root?.querySelector(
      'modus-wc-button[value="button1"]'
    );
    const button2 = page.root?.querySelector(
      'modus-wc-button[value="button2"]'
    );

    expect(button1?.hasAttribute('pressed')).toBe(false);
    expect(button2?.hasAttribute('pressed')).toBe(false);
  });

  // Test optional chaining when textContent is null in handleButtonClick
  it('should resolve value to empty string when textContent is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="single">
               <modus-wc-button></modus-wc-button>
             </modus-wc-button-group>`,
    });

    const component = page.rootInstance;
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    // Stub textContent getter to return null
    const buttonElement = page.root?.querySelector('modus-wc-button');
    if (buttonElement) {
      Object.defineProperty(buttonElement, 'textContent', {
        get: () => null,
      });
    }

    const clickEvent = new CustomEvent('buttonClick', {
      detail: {},
    });
    Object.defineProperty(clickEvent, 'target', {
      value: buttonElement,
      writable: false,
    });

    component.handleButtonClick(clickEvent);
    await page.waitForChanges();

    expect(component.value).toBe('');
    expect(eventSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          value: '',
          source: buttonElement,
        },
      })
    );
  });

  // Test optional chaining when textContent is null in updateButtonStates
  it('should not mark button pressed when textContent is null and value mismatch', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="single" value="buttonX">
               <modus-wc-button value="button1">Button 1</modus-wc-button>
               <modus-wc-button>Unnamed</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const unnamedButton = page.root?.querySelectorAll('modus-wc-button')[1];
    if (unnamedButton) {
      // Force textContent to null
      Object.defineProperty(unnamedButton, 'textContent', {
        get: () => null,
      });
    }

    // Trigger componentDidUpdate by changing value
    const component = page.rootInstance;
    component.value = 'button1';
    await page.waitForChanges();

    expect(unnamedButton?.hasAttribute('pressed')).toBe(false);
  });
});
