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

  it('does not allow selection when mode is "none"', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group selection-mode="none">
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

  it('does not allow selection when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group disabled>
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

  it('emits selection change with correct value from textContent', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button>My Button</modus-wc-button>
             </modus-wc-button-group>`,
    });
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    const button = page.root?.querySelector('modus-wc-button');
    button?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
    await page.waitForChanges();

    expect(eventSpy.mock.calls[0][0].detail.value).toBe('My Button');
  });

  it('emits selection change with correct value from value attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button value="customValue">My Button</modus-wc-button>
             </modus-wc-button-group>`,
    });
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    const button = page.root?.querySelector('modus-wc-button');
    button?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
    await page.waitForChanges();

    expect(eventSpy.mock.calls[0][0].detail.value).toBe('customValue');
  });

  it('emits selection change with empty string for empty button', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
               <modus-wc-button></modus-wc-button>
             </modus-wc-button-group>`,
    });
    const eventSpy = jest.fn();
    page.root?.addEventListener('buttonGroupSelectionChange', eventSpy);

    const button = page.root?.querySelector('modus-wc-button');
    button?.dispatchEvent(new CustomEvent('buttonClick', { bubbles: true }));
    await page.waitForChanges();

    expect(eventSpy.mock.calls[0][0].detail.value).toBe('');
  });
});
