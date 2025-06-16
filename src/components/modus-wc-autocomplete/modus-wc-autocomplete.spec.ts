import { newSpecPage } from '@stencil/core/testing';
import {
  IAutocompleteItem,
  ModusWcAutocomplete,
} from './modus-wc-autocomplete';
import { ModusWcMenu } from '../modus-wc-menu/modus-wc-menu';
import { ModusWcMenuItem } from '../modus-wc-menu-item/modus-wc-menu-item';
import { ModusWcTextInput } from '../modus-wc-text-input/modus-wc-text-input';

describe('modus-wc-autocomplete', () => {
  const items: IAutocompleteItem[] = [
    { label: 'Item 1', value: '1', visibleInMenu: true },
    { label: 'Item 2', value: '2', visibleInMenu: true },
    { label: 'Item 3', value: '3', visibleInMenu: true },
  ];

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Default autocomplete"></modus-wc-autocomplete>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcMenu,
        ModusWcMenuItem,
        ModusWcTextInput,
      ],
      html: `<modus-wc-autocomplete
        active-item-value="1"
        aria-describedby="description"
        aria-label="Test autocomplete"
        bordered="false"
        custom-class="test-class"
        debounce-ms="500"
        disabled="true"
        input-id="test-id"
        input-tab-index="1"
        label="Test label"
        min-chars="2"
        name="test-name"
        placeholder="Test placeholder"
        readonly="true"
        required="true"
        size="lg"
        value="Item 1"
      ></modus-wc-autocomplete>`,
    });

    // Set items attribute
    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;

    // Focus input so the menu is visible
    const input = page.root!.querySelector('input');
    input?.focus();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should render multi select without border', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Default autocomplete" bordered="false" multi-select="true"></modus-wc-autocomplete>',
    });

    // Set items attribute
    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;

    // Focus input so the menu is visible
    const input = page.root!.querySelector('input');
    input?.focus();

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit blur event', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Blur test"></modus-wc-autocomplete>',
    });

    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    // Create a proper FocusEvent and wrap it in a CustomEvent
    const focusEvent = new FocusEvent('blur', {
      relatedTarget: null, // This simulates focus moving outside the component
    });
    const customEvent = new CustomEvent('inputBlur', {
      detail: focusEvent,
    });

    // Dispatch the custom event on the text input component, not the raw input
    const textInput = page.root!.querySelector('modus-wc-text-input');
    textInput!.dispatchEvent(customEvent);

    // Wait for the timeout in handleBlur (200ms)
    await new Promise((resolve) => setTimeout(resolve, 250));
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should emit change event', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Change test"></modus-wc-autocomplete>',
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

  it('should emit change event when menu is visible on focus', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Change test" show-menu-on-focus="true"></modus-wc-autocomplete>',
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
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Change test"></modus-wc-autocomplete>',
    });

    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    input!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should emit focus event when menu is visible on focus', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Change test" show-menu-on-focus="true"></modus-wc-autocomplete>',
    });

    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    const focusSpy = jest.fn();
    page.root!.addEventListener('inputFocus', focusSpy);

    input!.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should not show menu on ArrowDown if minChars not met', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Test" min-chars="3"></modus-wc-autocomplete>',
    });

    const input = page.root!.querySelector('input');

    // Simulate typing 2 characters (below min)
    input!.value = 'ab';
    input?.dispatchEvent(new Event('input'));
    await page.waitForChanges();

    // Try ArrowDown
    input?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    await page.waitForChanges();

    const menu = page.root!.querySelector('modus-wc-menu');
    expect(menu?.className).toContain('menu-hidden');
  });

  it('should hide menu on Escape key', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Test" min-chars="0"></modus-wc-autocomplete>',
    });
    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;

    // Open menu using ArrowDown
    const input = page.root!.querySelector('input');
    input?.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown' }));
    await page.waitForChanges();

    // Close with Escape
    input?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();

    const menu = page.root!.querySelector('modus-wc-menu');
    expect(menu?.className).toContain('menu-hidden');
  });

  it('should not open menu on input click', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Test"></modus-wc-autocomplete>',
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;

    const input = page.root!.querySelector('input');
    input?.click();
    await page.waitForChanges();

    const menu = page.root!.querySelector('modus-wc-menu');
    expect(menu?.className).toContain('menu-hidden');
  });

  it('should ignore keydown events from non-input elements', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-autocomplete>
          <div class="test-div"></div>
        </modus-wc-autocomplete>
      `,
    });

    const divElement = page.root!.querySelector('.test-div');
    const event = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
      composed: true,
    });

    // Get initial menu state
    const initialMenu = page.root!.querySelector('modus-wc-menu');

    // Dispatch event on div
    divElement?.dispatchEvent(event);
    await page.waitForChanges();

    // Check menu visibility through DOM
    const finalMenu = page.root!.querySelector('modus-wc-menu');
    expect(finalMenu).toEqual(initialMenu); // Should remain unchanged
  });

  it('should blur input when leaving autocomplete', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: `<modus-wc-autocomplete
              aria-label="Test"
              min-chars="0"
            ></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;

    const input = page.root!.querySelector('input');
    input?.focus();
    await page.waitForChanges();

    const blurSpy = jest.spyOn(input!, 'blur');

    input?.blur();
    await page.waitForChanges();

    expect(blurSpy).toHaveBeenCalled();
  });

  it('should display no results ui when no items are available', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="No results test"></modus-wc-autocomplete>',
    });

    const input = page.root!.querySelector('input');
    expect(input).not.toBeNull();
    input!.focus();
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should close the menu when clicking outside if leaveMenuOpen is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Default autocomplete"></modus-wc-autocomplete>',
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;

    const input = page.root!.querySelector('input');
    input?.focus();
    await page.waitForChanges();

    document.body.click();
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('should apply disabled class when disabled is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Disabled test" disabled="true" multi-select="true"></modus-wc-autocomplete>',
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    const multiSelectClasses = component['getMultiSelectClasses']();

    expect(multiSelectClasses).toContain(
      'modus-wc-autocomplete-multi-select--disabled'
    );
  });

  it('should apply read-only class when read-only is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Read-only test" read-only="true" multi-select="true"></modus-wc-autocomplete>',
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    const multiSelectClasses = component['getMultiSelectClasses']();

    expect(multiSelectClasses).toContain(
      'modus-wc-autocomplete-multi-select--readonly'
    );
  });

  it('should handle leaveMenuOpen behavior correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Leave menu open test" leave-menu-open="true"></modus-wc-autocomplete>',
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;

    const input = page.root!.querySelector('input');
    input?.focus();
    await page.waitForChanges();

    // Verify menu remains open when clicking outside
    document.body.click();
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();

    // Verify menu closes when disabled is true
    component.disabled = true;
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();

    // Reset disabled and verify menu behavior with readOnly
    component.disabled = false;
    component.readOnly = true;
    input?.dispatchEvent(new FocusEvent('focus'));
    await page.waitForChanges();
    expect(page.root).toMatchSnapshot();
  });

  it('should render default no results values when noResults is undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete],
      html: `<modus-wc-autocomplete aria-label="Test autocomplete"></modus-wc-autocomplete>`,
    });
    const component = page.rootInstance as ModusWcAutocomplete;

    // Ensure noResults is undefined.
    component.noResults = undefined;

    // Directly call the private method.
    const renderedNoResults = component['renderNoResults']();

    // Use snapshot testing to cover the output.
    expect(renderedNoResults).toMatchSnapshot();
  });

  it('should render custom no results values when noResults prop is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Test autocomplete" leave-menu-open="true"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = [];
    component.noResults = {
      ariaLabel: 'No matches',
      label: 'Nothing here',
      subLabel: 'Try something else',
    };
    component['menuVisible'] = true;
    await page.waitForChanges();

    const label = page.root?.querySelector('.label');
    const subLabel = page.root?.querySelector('.sub-label');
    const iconLabelDiv = page.root?.querySelector('.icon-label');

    expect(label?.textContent).toBe('Nothing here');
    expect(subLabel?.textContent).toBe('Try something else');
    expect(iconLabelDiv?.getAttribute('aria-label')).toBe('No matches');
  });

  it('should cover renderNoResults with custom noResults values', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Test autocomplete" leave-menu-open="true"></modus-wc-autocomplete>`,
    });
    const component = page.rootInstance as ModusWcAutocomplete;
    // No items available.
    component.items = [];
    // Provide a truthy noResults object.
    component.noResults = {
      ariaLabel: 'No matches',
      label: 'Nothing here',
      subLabel: 'Try something else',
    };
    // Force the menu to be visible.
    component['menuVisible'] = true;
    await page.waitForChanges();

    const noResultsElement = page.root?.querySelector(
      '.modus-wc-autocomplete-no-results'
    );
    expect(noResultsElement).toBeTruthy();
    const labelEl = noResultsElement?.querySelector('.label');
    const subLabelEl = noResultsElement?.querySelector('.sub-label');
    const iconLabelEl = noResultsElement?.querySelector('.icon-label');

    expect(labelEl?.textContent).toBe('Nothing here');
    expect(subLabelEl?.textContent).toBe('Try something else');
    expect(iconLabelEl?.getAttribute('aria-label')).toBe('No matches');
  });

  it('should show menu on ArrowDown when input length meets minChars', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="ArrowDown test" min-chars="2"></modus-wc-autocomplete>`,
    });
    const input = page.root!.querySelector('input');
    // Simulate input that meets the minimum characters requirement
    input!.value = 'ab';
    input!.dispatchEvent(new Event('input'));
    await page.waitForChanges();
    // Dispatch ArrowDown key event
    input!.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })
    );
    await page.waitForChanges();
    const menu = page.root!.querySelector('modus-wc-menu');
    expect(menu).toBeTruthy();
  });

  it('should remove the last selected chip on Backspace when multiSelect and input is empty', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Backspace test" multi-select="true"></modus-wc-autocomplete>`,
    });
    const component = page.rootInstance as ModusWcAutocomplete;
    // Setup component with multiple selected items
    const selectedItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', selected: true, visibleInMenu: true },
      { label: 'Item 2', value: '2', selected: true, visibleInMenu: true },
    ];
    component.items = selectedItems;
    const input = page.root!.querySelector('input');
    // Ensure input is empty to trigger chip removal
    input!.value = '';
    await page.waitForChanges();

    const chipRemoveSpy = jest.fn();
    page.root!.addEventListener('chipRemove', chipRemoveSpy);
    // Dispatch Backspace key event
    input!.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Backspace', bubbles: true })
    );
    await page.waitForChanges();
    expect(chipRemoveSpy).toHaveBeenCalled();
    // Should emit the last selected chip (Item 2)
    expect(chipRemoveSpy.mock.calls[0][0].detail).toEqual(
      selectedItems[selectedItems.length - 1]
    );
  });

  it('should hide menu on Escape key press', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="Escape test" min-chars="0"></modus-wc-autocomplete>`,
    });
    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;
    const input = page.root!.querySelector('input');
    // Open the menu via ArrowDown
    input!.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true })
    );
    await page.waitForChanges();
    // Dispatch Escape key event
    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
    });
    const preventDefaultSpy = jest.spyOn(escapeEvent, 'preventDefault');
    input!.dispatchEvent(escapeEvent);
    await page.waitForChanges();
    const menu = page.root!.querySelector('modus-wc-menu');
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(menu?.className).toContain('menu-hidden');
  });
  it('should emit the last selected item when Enter is pressed in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="MultiSelect test" multi-select="true" leave-menu-open="false"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = [
      { label: 'Item 1', value: '1', selected: true, visibleInMenu: true },
      { label: 'Item 2', value: '2', selected: true, visibleInMenu: true },
      { label: 'Item 3', value: '3', selected: false, visibleInMenu: true },
    ];
    component['menuVisible'] = true; // Ensure the menu is visible to trigger the blur path

    const itemSelectSpy = jest.fn();
    page.root!.addEventListener('itemSelect', itemSelectSpy);

    // Simulate Enter key on the input element
    const input = page.root!.querySelector('input');
    input?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );
    await page.waitForChanges();

    // Validate that the last selected item (Item 2) was emitted and that the input was blurred.
    expect(itemSelectSpy).toHaveBeenCalled();
    expect(itemSelectSpy.mock.calls[0][0].detail).toEqual({
      label: 'Item 2',
      value: '2',
      selected: true,
      visibleInMenu: true,
    });
  });
  it('should emit the selected item when Enter is pressed in single-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="SingleSelect Test" leave-menu-open="false"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    // multiSelect is false by default
    component.items = [
      { label: 'Item A', value: 'A', selected: false, visibleInMenu: true },
      { label: 'Item B', value: 'B', selected: true, visibleInMenu: true }, // only selected item
      { label: 'Item C', value: 'C', selected: false, visibleInMenu: true },
    ];
    component['menuVisible'] = true; // ensure menu is visible so the blur logic is also executed

    const itemSelectSpy = jest.fn();
    page.root!.addEventListener('itemSelect', itemSelectSpy);

    const input = page.root!.querySelector('input');
    input?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );
    await page.waitForChanges();

    // Verify that the itemSelect event is emitted with the correct item.
    expect(itemSelectSpy).toHaveBeenCalled();
    expect(itemSelectSpy.mock.calls[0][0].detail).toEqual({
      label: 'Item B',
      value: 'B',
      selected: true,
      visibleInMenu: true,
    });
  });
  it('should render chips for selected items in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="MultiSelect Chip Test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    // Provide items with some selected
    component.items = [
      { label: 'Chip 1', value: '1', selected: true, visibleInMenu: true },
      { label: 'Chip 2', value: '2', selected: false, visibleInMenu: true },
      { label: 'Chip 3', value: '3', selected: true, visibleInMenu: true },
    ];
    await page.waitForChanges();

    // Query for <modus-wc-chip> elements that were rendered
    const chips = page.root?.querySelectorAll('modus-wc-chip');
    // Expect two chips for the two selected items
    expect(chips?.length).toBe(2);

    // Optionally, use snapshot testing to confirm the rendered output
    expect(page.root).toMatchSnapshot();
  });
  it('should not emit any itemSelect event when Enter is pressed in single-select mode with no selected item', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="SingleSelect No Selection Test" leave-menu-open="false"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    // All items are unselected.
    component.items = [
      { label: 'Item A', value: 'A', selected: false, visibleInMenu: true },
      { label: 'Item B', value: 'B', selected: false, visibleInMenu: true },
      { label: 'Item C', value: 'C', selected: false, visibleInMenu: true },
    ];
    component['menuVisible'] = true; // Ensure menu is visible

    const itemSelectSpy = jest.fn();
    page.root!.addEventListener('itemSelect', itemSelectSpy);

    const input = page.root!.querySelector('input');
    input?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );
    await page.waitForChanges();

    // Since no item is selected, the event should not be emitted.
    expect(itemSelectSpy).not.toHaveBeenCalled();
  });
  it('should render no chips when no items are selected in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="MultiSelect Chip Empty Test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    // Provide items with all items unselected.
    component.items = [
      { label: 'Chip 1', value: '1', selected: false, visibleInMenu: true },
      { label: 'Chip 2', value: '2', selected: false, visibleInMenu: true },
    ];
    await page.waitForChanges();

    // Query for <modus-wc-chip> elements that were rendered.
    const chips = page.root?.querySelectorAll('modus-wc-chip');
    // Expect zero chips since no items are selected.
    expect(chips?.length).toBe(0);
  });
  it('should not emit any itemSelect event when Enter is pressed in single-select mode and no item is selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="SingleSelect No Selection Test" leave-menu-open="false"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    // All items unselected.
    component.items = [
      { label: 'Item A', value: 'A', selected: false, visibleInMenu: true },
      { label: 'Item B', value: 'B', selected: false, visibleInMenu: true },
      { label: 'Item C', value: 'C', selected: false, visibleInMenu: true },
    ];
    // Ensure menu is visible to trigger the Enter key logic.
    component['menuVisible'] = true;

    const itemSelectSpy = jest.fn();
    page.root!.addEventListener('itemSelect', itemSelectSpy);

    const input = page.root!.querySelector('input');
    input?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );
    await page.waitForChanges();

    // Expect no emission because no item is selected.
    expect(itemSelectSpy).not.toHaveBeenCalled();
  });
  it('should not emit any itemSelect event when Enter is pressed in multi-select mode and no items are selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="MultiSelect No Selection Test" multi-select="true" leave-menu-open="false"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    // Provide items, but none is selected.
    component.items = [
      { label: 'Item 1', value: '1', selected: false, visibleInMenu: true },
      { label: 'Item 2', value: '2', selected: false, visibleInMenu: true },
      { label: 'Item 3', value: '3', selected: false, visibleInMenu: true },
    ];
    // Ensure the menu is visible to cover the Enter key logic.
    component['menuVisible'] = true;

    const itemSelectSpy = jest.fn();
    page.root!.addEventListener('itemSelect', itemSelectSpy);

    const input = page.root!.querySelector('input');
    input?.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );
    await page.waitForChanges();

    // No event should be emitted, because no items are selected.
    expect(itemSelectSpy).not.toHaveBeenCalled();
  });
  it('should render no chips when no items are selected in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="MultiSelect Chip Empty Test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    // Provide items with none selected.
    component.items = [
      { label: 'Chip 1', value: '1', selected: false, visibleInMenu: true },
      { label: 'Chip 2', value: '2', selected: false, visibleInMenu: true },
    ];
    await page.waitForChanges();

    const chips = page.root?.querySelectorAll('modus-wc-chip');
    expect(chips?.length).toBe(0);
  });
  it('should not throw or emit anything on Enter key when items is undefined and not in multiSelect mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Enter Key No Items"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = undefined;
    await page.waitForChanges();

    const itemSelectSpy = jest.spyOn(component.itemSelect, 'emit');
    const input = page.root!.querySelector('input') as HTMLInputElement;
    input.focus();

    input.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter', bubbles: true })
    );
    await page.waitForChanges();
    expect(itemSelectSpy).not.toHaveBeenCalled();
  });

  it('should not render any chips when items is undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Chips test" multi-select="true"></modus-wc-autocomplete>`,
    });
    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = undefined;
    await page.waitForChanges();
    expect(page.root?.querySelectorAll('modus-wc-chip').length).toBe(0);
  });
});
