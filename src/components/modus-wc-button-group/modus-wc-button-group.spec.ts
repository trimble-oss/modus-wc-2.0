import { newSpecPage } from '@stencil/core/testing';
import { ModusWcButtonGroup } from './modus-wc-button-group';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';

describe('modus-wc-button-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button>Test</modus-wc-button>
             </modus-wc-button-group>`,
    });
    if (page.root) {
      page.root.color = 'primary';
      page.root.size = 'md';
      page.root.variant = 'outlined';
    }
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('applies color prop to child buttons', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group color="danger">
               <modus-wc-button>Button 1</modus-wc-button>
               <modus-wc-button>Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });

    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button');
    buttons?.forEach((button) => {
      expect(button.getAttribute('color')).toBe('danger');
    });
  });

  it('applies color class to the button group', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group color="warning">
               <modus-wc-button>Button 1</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const buttonGroupDiv = page.root?.querySelector('.modus-wc-button-group');
    expect(
      buttonGroupDiv?.classList.contains('modus-wc-button-group--warning')
    ).toBe(true);
  });

  it('initializes button states on load', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button selected>Button 1</modus-wc-button>
               <modus-wc-button>Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });
    await page.waitForChanges();

    const button1 = page.root?.querySelectorAll('modus-wc-button')[0];
    const button2 = page.root?.querySelectorAll('modus-wc-button')[1];

    expect(button1?.getAttribute('aria-pressed')).toBe('true');
    expect(button2?.getAttribute('aria-pressed')).toBe('false');
  });

  it('handles single selection mode correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="single">
               <modus-wc-button>Button 1</modus-wc-button>
               <modus-wc-button selected>Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    const button1 = page.root?.querySelectorAll('modus-wc-button')[0];
    const button2 = page.root?.querySelectorAll('modus-wc-button')[1];

    // Click the first button
    button1?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
    await page.waitForChanges();

    expect(button1?.hasAttribute('selected')).toBe(true);
    expect(button1?.getAttribute('aria-pressed')).toBe('true');
    expect(button2?.hasAttribute('selected')).toBe(false);
    expect(button2?.getAttribute('aria-pressed')).toBe('false');

    expect(eventSpy.mock.calls[0][0].detail).toEqual({
      value: 'Button 1',
      source: button1,
    });
  });

  it('handles multiple selection mode correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="multiple">
               <modus-wc-button selected>Button 1</modus-wc-button>
               <modus-wc-button>Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });

    const button1 = page.root?.querySelectorAll('modus-wc-button')[0];
    const button2 = page.root?.querySelectorAll('modus-wc-button')[1];

    // Click the second button to add it to selection
    button2?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
    await page.waitForChanges();

    expect(button1?.hasAttribute('selected')).toBe(true);
    expect(button2?.hasAttribute('selected')).toBe(true);

    // Click the first button to remove it from selection
    button1?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
    await page.waitForChanges();

    expect(button1?.hasAttribute('selected')).toBe(false);
    expect(button2?.hasAttribute('selected')).toBe(true);
  });

  it.each([
    ['none', 'selection-mode="none"'],
    ['disabled', 'disabled'],
  ])('does not allow selection when mode is %s', async (_name, attr) => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group ${attr}>
                 <modus-wc-button>Button 1</modus-wc-button>
               </modus-wc-button-group>`,
    });
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    const button = page.root?.querySelector('modus-wc-button');
    button?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
    await page.waitForChanges();

    expect(button?.hasAttribute('selected')).toBe(false);
    expect(eventSpy).not.toHaveBeenCalled();
  });

  it('emits selection change with the correct value', async () => {
    const scenarios = [
      {
        name: 'from textContent',
        html: '<modus-wc-button>My Button</modus-wc-button>',
        expectedValue: 'My Button',
      },
      {
        name: 'from value attribute',
        html: '<modus-wc-button value="customValue">My Button</modus-wc-button>',
        expectedValue: 'customValue',
      },
      {
        name: 'as empty string for empty button',
        html: '<modus-wc-button></modus-wc-button>',
        expectedValue: '',
      },
    ];

    for (const scenario of scenarios) {
      const page = await newSpecPage({
        components: [ModusWcButtonGroup, ModusWcButton],
        html: `<modus-wc-button-group>${scenario.html}</modus-wc-button-group>`,
      });
      const eventSpy = jest.fn();
      page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

      const button = page.root?.querySelector('modus-wc-button');
      button?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
      await page.waitForChanges();

      expect(eventSpy.mock.calls[0][0].detail.value).toBe(
        scenario.expectedValue
      );
    }
  });

  it('handles null textContent when emitting selection change', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button></modus-wc-button>
             </modus-wc-button-group>`,
    });
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    const button = page.root?.querySelector('modus-wc-button');
    // Force textContent to be null for the test
    Object.defineProperty(button, 'textContent', {
      value: null,
      writable: true,
    });

    button?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
    await page.waitForChanges();

    expect(eventSpy.mock.calls[0][0].detail.value).toBe('');
  });

  it('updates button properties on prop change', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button>Button 1</modus-wc-button>
             </modus-wc-button-group>`,
    });
    await page.waitForChanges();

    // Change a prop to trigger componentDidUpdate
    if (page.root) page.root.color = 'secondary';
    await page.waitForChanges();

    const button = page.root?.querySelector('modus-wc-button');
    expect(button?.getAttribute('color')).toBe('secondary');
  });

  it('applies custom class', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group custom-class="my-custom-class">
               <modus-wc-button>Button 1</modus-wc-button>
             </modus-wc-button-group>`,
    });
    await page.waitForChanges();

    const groupDiv = page.root?.querySelector('.modus-wc-button-group');
    expect(groupDiv?.classList.contains('my-custom-class')).toBe(true);
  });

  it('preserves individual button disabled states when group is not disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button>Enabled Button</modus-wc-button>
               <modus-wc-button disabled>Disabled Button</modus-wc-button>
             </modus-wc-button-group>`,
    });
    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button');
    const enabledButton = buttons?.[0];
    const disabledButton = buttons?.[1];

    expect(enabledButton?.hasAttribute('disabled')).toBe(false);
    expect(disabledButton?.hasAttribute('disabled')).toBe(true);
  });

  it('disables all buttons when group is disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button>Button 1</modus-wc-button>
               <modus-wc-button>Button 2</modus-wc-button>
             </modus-wc-button-group>`,
    });
    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button');
    buttons?.forEach((button) => {
      expect(button.hasAttribute('disabled')).toBe(false);
    });

    if (page.root) page.root.disabled = true;
    await page.waitForChanges();

    buttons?.forEach((button) => {
      expect(button.hasAttribute('disabled')).toBe(true);
    });
  });

  it('restores original disabled states when group is re-enabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button>Enabled Button</modus-wc-button>
               <modus-wc-button disabled>Originally Disabled</modus-wc-button>
             </modus-wc-button-group>`,
    });
    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button');
    const enabledButton = buttons?.[0];
    const originallyDisabledButton = buttons?.[1];

    if (page.root) page.root.disabled = true;
    await page.waitForChanges();

    expect(enabledButton?.hasAttribute('disabled')).toBe(true);
    expect(originallyDisabledButton?.hasAttribute('disabled')).toBe(true);

    if (page.root) page.root.disabled = false;
    await page.waitForChanges();

    expect(enabledButton?.hasAttribute('disabled')).toBe(false);
    expect(originallyDisabledButton?.hasAttribute('disabled')).toBe(true);
  });

  it('uses fallback when button state is not in Map (covers ?? false)', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button>Button 1</modus-wc-button>
             </modus-wc-button-group>`,
    });
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcButtonGroup;
    const button = page.root?.querySelector('modus-wc-button');

    const getSpy = jest
      .spyOn(component['buttonStates'], 'get')
      .mockReturnValue(undefined);

    // Trigger update from disabled false -> true
    if (page.root) page.root.disabled = true;
    await page.waitForChanges();

    expect(getSpy).toHaveBeenCalled();
    expect(button?.hasAttribute('disabled')).toBe(true);

    // Trigger update from disabled true -> false
    if (page.root) page.root.disabled = false;
    await page.waitForChanges();

    expect(button?.hasAttribute('disabled')).toBe(false);

    getSpy.mockRestore();
  });

  it('handles dynamically added buttons correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button>Original Button</modus-wc-button>
             </modus-wc-button-group>`,
    });
    await page.waitForChanges();

    const newButton = page.doc.createElement('modus-wc-button');
    newButton.textContent = 'Dynamic Button';
    page.root?.appendChild(newButton);

    // Trigger property update
    if (page.root) page.root.color = 'secondary';
    await page.waitForChanges();

    expect(newButton.getAttribute('color')).toBe('secondary');
    expect(newButton.hasAttribute('disabled')).toBe(false);
  });
});
