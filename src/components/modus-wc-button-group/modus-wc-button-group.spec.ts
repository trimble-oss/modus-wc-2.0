import { newSpecPage } from '@stencil/core/testing';
import { ModusWcButtonGroup } from './modus-wc-button-group';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';

// Type declaration for the button group element
interface HTMLModusWcButtonGroupElement extends HTMLElement {
  disabled?: boolean;
  buttonStyle?: 'borderless' | 'fill' | 'outlined';
  color?: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'danger';
  selectionType?: 'default' | 'single' | 'multiple';
}

describe('modus-wc-button-group', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
        <modus-wc-button>Button 3</modus-wc-button>
      </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with vertical orientation', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group orientation="vertical">
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with disabled prop', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group disabled>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom button-style', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group button-style="fill">
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom color', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group color="primary">
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with single selection type', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group selection-type="single">
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with multiple selection type', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup],
      html: `<modus-wc-button-group selection-type="multiple">
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should update the disabled state of child buttons when disabled prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    buttonGroup.disabled = true;
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('should update the button-style of child buttons when buttonStyle prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    buttonGroup.buttonStyle = 'fill';
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('should update the color of child buttons when color prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>

        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    buttonGroup.color = 'danger';
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('should update child buttons selection when selectionType prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    buttonGroup.selectionType = 'single';
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('should emit buttonGroupClick event when a child button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    const buttonGroupClickSpy = jest.fn();
    buttonGroup.addEventListener('buttonGroupClick', buttonGroupClickSpy);

    buttonGroup.selectionType = 'single';
    await page.waitForChanges();

    const button1 = buttonGroup.querySelectorAll('modus-wc-button')[0];
    // Simulate the Stencil custom event
    button1.dispatchEvent(
      new CustomEvent('buttonClick', { bubbles: true, composed: true })
    );
    await page.waitForChanges();

    expect(buttonGroupClickSpy).toHaveBeenCalled();
  });

  it('should emit buttonSelectionChange event when selection changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;

    const buttonSelectionChangeSpy = jest.fn();
    buttonGroup.addEventListener(
      'buttonSelectionChange',
      buttonSelectionChangeSpy
    );
    await page.waitForChanges();

    buttonGroup.selectionType = 'multiple';
    await page.waitForChanges();

    const button1 = buttonGroup.querySelectorAll('modus-wc-button')[0];
    // Simulate the Stencil custom event
    button1.dispatchEvent(
      new CustomEvent('buttonClick', { bubbles: true, composed: true })
    );
    await page.waitForChanges();

    // Simulate the Stencil custom event again to trigger selection change
    button1.dispatchEvent(
      new CustomEvent('buttonClick', { bubbles: true, composed: true })
    );
    await page.waitForChanges();

    expect(buttonSelectionChangeSpy).toHaveBeenCalled();
  });

  it('should handle resetAllSelections when buttonElements is not initialized', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    // Access private property for testing purposes
    const instance = page.rootInstance as unknown as {
      buttonElements: NodeListOf<HTMLElement> | null;
    };

    // Clear buttonElements to simulate early call before componentDidLoad
    instance.buttonElements = null;

    // Change selectionType which calls resetAllSelections internally
    buttonGroup.selectionType = 'single';
    await page.waitForChanges();

    // Should not throw error and should complete successfully
    expect(buttonGroup.selectionType).toBe('single');
  });

  it('should emit buttonGroupClick event when selectionType is default', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    const buttonGroupClickSpy = jest.fn();
    buttonGroup.addEventListener('buttonGroupClick', buttonGroupClickSpy);

    const button1 = buttonGroup.querySelectorAll('modus-wc-button')[0];
    // Simulate the Stencil custom event
    button1.dispatchEvent(
      new CustomEvent('buttonClick', { bubbles: true, composed: true })
    );
    await page.waitForChanges();
    expect(buttonGroupClickSpy).toHaveBeenCalled();
  });

  it('should remove attribute from child buttons when value is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group color="primary">
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    await page.waitForChanges();

    // Verify color attribute is set
    const buttons = buttonGroup.querySelectorAll('modus-wc-button');
    expect(buttons[0].getAttribute('color')).toBe('primary');
    expect(buttons[1].getAttribute('color')).toBe('primary');

    // Set color to undefined which should remove the attribute
    buttonGroup.color = undefined;
    await page.waitForChanges();

    // Verify color attribute is removed
    expect(buttons[0].getAttribute('color')).toBeNull();
    expect(buttons[1].getAttribute('color')).toBeNull();
  });

  it('should remove disabled attribute when disabled is set to false', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group disabled>
        <modus-wc-button>Button 1</modus-wc-button>
        <modus-wc-button>Button 2</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    await page.waitForChanges();

    // Verify disabled attribute is set
    const buttons = buttonGroup.querySelectorAll('modus-wc-button');
    expect(buttons[0].getAttribute('disabled')).toBe('true');
    expect(buttons[1].getAttribute('disabled')).toBe('true');

    // Set disabled to false which should remove the attribute
    buttonGroup.disabled = false;
    await page.waitForChanges();

    // Verify disabled attribute is removed
    expect(buttons[0].getAttribute('disabled')).toBeNull();
    expect(buttons[1].getAttribute('disabled')).toBeNull();
  });

  it('should handle slot change when buttons are added dynamically', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group color="primary" button-style="fill">
        <modus-wc-button>Button 1</modus-wc-button>
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    await page.waitForChanges();

    // Verify initial button has the correct attributes
    let buttons = buttonGroup.querySelectorAll('modus-wc-button');
    expect(buttons.length).toBe(1);
    expect(buttons[0].getAttribute('color')).toBe('primary');
    expect(buttons[0].getAttribute('variant')).toBe('fill');

    // Add a new button dynamically
    const newButton = page.doc.createElement('modus-wc-button');
    newButton.textContent = 'Button 2';
    buttonGroup.appendChild(newButton);

    // Trigger slot change manually (since we can't rely on native slotchange in tests)
    const instance = page.rootInstance as unknown as {
      handleSlotChange: () => void;
    };
    instance.handleSlotChange();
    await page.waitForChanges();

    // Verify both buttons now have the correct attributes
    buttons = buttonGroup.querySelectorAll('modus-wc-button');
    expect(buttons.length).toBe(2);
    expect(buttons[0].getAttribute('color')).toBe('primary');
    expect(buttons[0].getAttribute('variant')).toBe('fill');
    expect(buttons[1].getAttribute('color')).toBe('primary');
    expect(buttons[1].getAttribute('variant')).toBe('fill');
  });

  it('should handle syncButtonStates when buttonElements is empty', async () => {
    const page = await newSpecPage({
      components: [ModusWcButtonGroup, ModusWcButton],
      html: `<modus-wc-button-group color="primary">
      </modus-wc-button-group>`,
    });

    const buttonGroup = page.root as HTMLModusWcButtonGroupElement;
    await page.waitForChanges();

    // Verify no buttons exist
    const buttons = buttonGroup.querySelectorAll('modus-wc-button');
    expect(buttons.length).toBe(0);

    // Change color prop - should not throw error even with no buttons
    buttonGroup.color = 'danger';
    await page.waitForChanges();

    // Should complete successfully without errors
    expect(buttonGroup.color).toBe('danger');
  });
});
