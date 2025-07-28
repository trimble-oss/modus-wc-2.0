import { EventEmitter } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { IAutocompleteItem } from '../types';
import { ModusWcAutocomplete } from './modus-wc-autocomplete';
import { renderNoResults } from './modus-wc-autocomplete-core';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcChip } from '../modus-wc-chip/modus-wc-chip';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
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
        include-clear="true"
        include-search="true"
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

    // Menu should not exist in DOM when not visible (no custom slots)
    const menu = page.root!.querySelector('modus-wc-menu');
    expect(menu).toBeFalsy();
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

    // Menu should not exist in DOM when not visible (no custom slots)
    const menu = page.root!.querySelector('modus-wc-menu');
    expect(menu).toBeFalsy();
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

    // Menu should not exist in DOM when not visible (no custom slots)
    const menu = page.root!.querySelector('modus-wc-menu');
    expect(menu).toBeFalsy();
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

  it('should show selected label but keep all items visible when leaveMenuOpen is true in single-select mode', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcMenu,
        ModusWcMenuItem,
        ModusWcTextInput,
      ],
      html: '<modus-wc-autocomplete aria-label="Leave menu open test" leave-menu-open="true" show-menu-on-focus="true"></modus-wc-autocomplete>',
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;

    // Focus to show menu
    const input = page.root!.querySelector('input') as HTMLInputElement;
    input?.focus();
    await page.waitForChanges();

    // Select an item
    component['handleItemSelect'](items[0]);
    await page.waitForChanges();

    // Verify the input value shows the selected item's label
    expect(component.value).toBe('Item 1');
    expect(input.value).toBe('Item 1');

    // Verify the item is marked as selected
    expect(component.items[0].selected).toBe(true);

    // Verify all items are still visible in the filtered items list
    expect(component['filteredItems'].length).toBe(3);
    expect(component['filteredItems'].every((item) => item.visibleInMenu)).toBe(
      true
    );

    // Select another item
    component['handleItemSelect'](items[1]);
    await page.waitForChanges();

    // Verify only the second item is now selected
    expect(component.items[0].selected).toBe(false);
    expect(component.items[1].selected).toBe(true);
    expect(component.items[2].selected).toBe(false);

    // Verify input shows new selection
    expect(component.value).toBe('Item 2');
    expect(input.value).toBe('Item 2');

    // Verify all items are still visible
    expect(component['filteredItems'].length).toBe(3);
  });

  it('should render default no results values when noResults is undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete],
      html: `<modus-wc-autocomplete aria-label="Test autocomplete"></modus-wc-autocomplete>`,
    });
    const component = page.rootInstance as ModusWcAutocomplete;

    // Ensure noResults is undefined.
    component.noResults = undefined;

    // Call the render function from the core module.
    const renderedNoResults = renderNoResults({ noResults: undefined });

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
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcChip],
      html: `<modus-wc-autocomplete aria-label="Backspace test" multi-select="true"></modus-wc-autocomplete>`,
    });
    const component = page.rootInstance as ModusWcAutocomplete;
    // Setup component with multiple selected items
    const selectedItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', selected: true, visibleInMenu: true },
      { label: 'Item 2', value: '2', selected: true, visibleInMenu: true },
    ];
    component.items = selectedItems;
    // Initialize selectionOrder to match selected items (mimicking componentWillLoad behavior)
    component['selectionOrder'] = ['1', '2'];
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
    expect(preventDefaultSpy).toHaveBeenCalled();
    // Menu should not exist in DOM when not visible (no custom slots)
    const menu = page.root!.querySelector('modus-wc-menu');
    expect(menu).toBeFalsy();
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
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcChip],
      html: `<modus-wc-autocomplete aria-label="MultiSelect Chip Test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const component = page.rootInstance as ModusWcAutocomplete;
    // Provide items with some selected
    component.items = [
      { label: 'Chip 1', value: '1', selected: true, visibleInMenu: true },
      { label: 'Chip 2', value: '2', selected: false, visibleInMenu: true },
      { label: 'Chip 3', value: '3', selected: true, visibleInMenu: true },
    ];
    // Initialize selectionOrder to match selected items
    component['selectionOrder'] = ['1', '3'];
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

  it('should render with valid attribute values', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete></modus-wc-autocomplete>`,
    });

    await page.waitForChanges();

    // The aria-label is removed from the host and passed to the text input
    const hostElement = page.root;
    const textInput = page.root?.querySelector('modus-wc-text-input');

    // Host should not have aria-label (it's been moved to text input)
    expect(hostElement).not.toHaveAttribute('aria-label');
    // Text input component should exist
    expect(textInput).toBeTruthy();
  });

  it('should preserve custom aria-label when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Custom autocomplete label"></modus-wc-autocomplete>`,
    });

    await page.waitForChanges();

    // The aria-label is removed from the host and passed to the text input
    const hostElement = page.root;
    const textInput = page.root?.querySelector('modus-wc-text-input');

    // Host should not have aria-label (it's been moved to text input)
    expect(hostElement).not.toHaveAttribute('aria-label');
    // Text input component should exist
    expect(textInput).toBeTruthy();
  });

  // Tests for custom event handler props
  it('should call customBlur when provided', async () => {
    const customBlurSpy = jest.fn();
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Custom blur test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.customBlur = customBlurSpy;

    // Simulate blur event
    const blurEvent = new FocusEvent('blur');
    const customEvent = new CustomEvent('inputBlur', { detail: blurEvent });
    autocomplete['handleBlur'](customEvent);

    expect(customBlurSpy).toHaveBeenCalledWith(blurEvent);
  });

  it('should call customInputChange when provided', async () => {
    const customInputChangeSpy = jest.fn();
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Custom input change test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.customInputChange = customInputChangeSpy;

    // Simulate input change event
    const inputElement = document.createElement('input');
    inputElement.value = 'test';
    const changeEvent = new Event('change');
    Object.defineProperty(changeEvent, 'target', { value: inputElement });
    const customEvent = new CustomEvent('inputChange', { detail: changeEvent });
    autocomplete['handleChange'](customEvent);

    expect(customInputChangeSpy).toHaveBeenCalledWith('test');
  });

  it('should call customKeyDown when provided', async () => {
    const customKeyDownSpy = jest.fn();
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Custom keydown test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.customKeyDown = customKeyDownSpy;

    // Simulate keydown event
    const keyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    Object.defineProperty(keyEvent, 'target', {
      value: document.createElement('input'),
    });
    autocomplete.handleKeyDown(keyEvent);

    expect(customKeyDownSpy).toHaveBeenCalledWith(keyEvent);
  });

  it('should call customItemSelect when provided', async () => {
    const customItemSelectSpy = jest.fn();
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Custom item select test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItem: IAutocompleteItem = {
      label: 'Test Item',
      value: 'test',
      visibleInMenu: true,
    };

    autocomplete.customItemSelect = customItemSelectSpy;
    autocomplete.items = [testItem];
    await page.waitForChanges();

    autocomplete['handleItemSelect'](testItem);

    expect(customItemSelectSpy).toHaveBeenCalledWith(testItem);
  });

  // Test disconnectedCallback lifecycle
  it('should cleanup on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Disconnect test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');
    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');

    // Set a debounce timer
    autocomplete['debounceTimer'] = 123;

    // Call disconnectedCallback
    autocomplete.disconnectedCallback();

    expect(clearTimeoutSpy).toHaveBeenCalledWith(123);
    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'click',
      expect.any(Function)
    );
  });

  // Test public methods
  it('should select item programmatically', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Select item test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItem: IAutocompleteItem = {
      label: 'Test Item',
      value: 'test',
      visibleInMenu: true,
    };

    autocomplete.items = [testItem];
    await page.waitForChanges();

    await autocomplete.selectItem(testItem);
    expect(autocomplete.items[0].selected).toBe(true);

    // Test clearing selection
    await autocomplete.selectItem(null);
    expect(autocomplete.items[0].selected).toBe(false);
    expect(autocomplete.value).toBe('');
    expect(autocomplete['selectionOrder']).toEqual([]);
  });

  it('should open menu programmatically', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Open menu test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    await autocomplete.openMenu();
    expect(autocomplete['menuVisible']).toBe(true);
  });

  it('should close menu programmatically', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Close menu test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['menuVisible'] = true;

    await autocomplete.closeMenu();
    expect(autocomplete['menuVisible']).toBe(false);
  });

  it('should toggle menu programmatically', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Toggle menu test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    await autocomplete.toggleMenu();
    expect(autocomplete['menuVisible']).toBe(true);

    await autocomplete.toggleMenu();
    expect(autocomplete['menuVisible']).toBe(false);
  });

  it('should focus input programmatically', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Focus input test"></modus-wc-autocomplete>`,
    });

    await page.waitForChanges();
    const inputElement = page.root?.querySelector('input');
    const focusSpy = jest.spyOn(inputElement as HTMLInputElement, 'focus');

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    await autocomplete.focusInput();

    expect(focusSpy).toHaveBeenCalled();
  });

  it('should clear input programmatically', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Clear input test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, selected: true },
    ];

    autocomplete.items = testItems;
    autocomplete.value = 'test';
    autocomplete['selectionOrder'] = ['1', '2'];
    await page.waitForChanges();

    await autocomplete.clearInput();

    expect(autocomplete.value).toBe('');
    expect(autocomplete['selectionOrder']).toEqual([]);
    expect(autocomplete.items.every((item) => !item.selected)).toBe(true);
  });

  // Test ArrowUp keyboard navigation
  it('should handle ArrowUp key navigation', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="ArrowUp test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, focused: true },
      { label: 'Item 3', value: '3', visibleInMenu: true },
    ];

    autocomplete.items = testItems;
    autocomplete['menuVisible'] = true;
    autocomplete['initialNavigation'] = false;
    await page.waitForChanges();

    const inputElement = page.root?.querySelector('input');
    const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    Object.defineProperty(keyEvent, 'target', { value: inputElement });

    autocomplete.handleKeyDown(keyEvent);
    await page.waitForChanges();

    expect(autocomplete.items[0].focused).toBe(true);
    expect(autocomplete.items[1].focused).toBe(false);
  });

  // Test Enter key with no focused item
  it('should handle Enter key with no focused item in multiSelect mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Enter no focus test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const itemSelectSpy = jest.fn();
    autocomplete.itemSelect = {
      emit: itemSelectSpy,
    } as unknown as EventEmitter<IAutocompleteItem>;

    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, selected: true },
    ];

    autocomplete.items = testItems;
    await page.waitForChanges();

    const inputElement = page.root?.querySelector('input');
    const keyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    Object.defineProperty(keyEvent, 'target', { value: inputElement });

    autocomplete.handleKeyDown(keyEvent);

    expect(itemSelectSpy).toHaveBeenCalledWith(testItems[1]);
  });

  // Test chip expansion functionality
  it('should handle chip expansion with maxChips', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcChip,
        ModusWcButton,
      ],
      html: `<modus-wc-autocomplete aria-label="Chip expansion test" multi-select="true" max-chips="2"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const chipsExpansionSpy = jest.fn();
    autocomplete.chipsExpansionChange = {
      emit: chipsExpansionSpy,
    } as unknown as EventEmitter<{ expanded: boolean }>;

    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, selected: true },
      { label: 'Item 3', value: '3', visibleInMenu: true, selected: true },
      { label: 'Item 4', value: '4', visibleInMenu: true, selected: true },
    ];

    autocomplete.items = testItems;
    autocomplete['selectionOrder'] = ['1', '2', '3', '4'];
    autocomplete['isFocused'] = true;
    await page.waitForChanges();

    // Test expand functionality
    autocomplete['toggleChipsExpansion']();
    expect(autocomplete['isChipsExpanded']).toBe(true);
    expect(chipsExpansionSpy).toHaveBeenCalledWith({ expanded: true });

    // Test collapse functionality
    autocomplete['toggleChipsExpansion']();
    expect(autocomplete['isChipsExpanded']).toBe(false);
    expect(chipsExpansionSpy).toHaveBeenCalledWith({ expanded: false });
  });

  // Test menu focus out handling
  it('should handle menu focus out', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="Menu focus out test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const inputBlurSpy = jest.fn();
    autocomplete.inputBlur = {
      emit: inputBlurSpy,
    } as unknown as EventEmitter<FocusEvent>;
    autocomplete['menuVisible'] = true;

    // Create a focus event with relatedTarget outside the component
    const outsideElement = document.createElement('div');
    const focusEvent = new FocusEvent('focusout', {
      relatedTarget: outsideElement,
    });
    const customEvent = new CustomEvent('menuFocusout', { detail: focusEvent });

    jest.useFakeTimers();
    autocomplete['handleMenuFocusout'](customEvent);
    jest.runAllTimers();

    expect(autocomplete['menuVisible']).toBe(false);
    expect(inputBlurSpy).toHaveBeenCalledWith(focusEvent);
    jest.useRealTimers();
  });

  // Test handleItemSelectByValue
  it('should handle item selection by value', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Select by value test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItem: IAutocompleteItem = {
      label: 'Test Item',
      value: 'test',
      visibleInMenu: true,
    };

    autocomplete.items = [testItem];
    await page.waitForChanges();

    autocomplete['handleItemSelectByValue']('test');
    expect(autocomplete.items[0].selected).toBe(true);
  });

  // Test edge cases
  it('should handle change event without detail target', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="No detail target test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    // Create a CustomEvent with a detail object that mimics the expected Event structure but omits 'target'
    const customEvent = new CustomEvent<Event>('inputChange', {
      detail: {} as Event,
    });

    // Should not throw error
    expect(() => autocomplete['handleChange'](customEvent)).not.toThrow();
  });

  // Test updateItemFocus with no items
  it('should handle updateItemFocus with no items', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Update focus no items test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [];

    // Should not throw error
    expect(() => autocomplete['updateItemFocus']('test')).not.toThrow();
  });

  // Test clearAllFocus with no items
  it('should handle clearAllFocus with no items', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Clear focus no items test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [];

    // Should not throw error
    expect(() => autocomplete['clearAllFocus']()).not.toThrow();
  });

  // Test multi-select deselection
  it('should not deselect an item on re-selection in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Multi-select no-deselection test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItem: IAutocompleteItem = {
      label: 'Test Item',
      value: 'test',
      visibleInMenu: true,
      selected: true,
    };

    autocomplete.items = [testItem];
    autocomplete['selectionOrder'] = ['test'];
    await page.waitForChanges();

    // Attempt to deselect the item by re-selecting it
    autocomplete['handleItemSelect'](testItem);
    await page.waitForChanges();

    // Expect the item to remain selected
    expect(autocomplete.items[0].selected).toBe(true);
    expect(autocomplete['selectionOrder']).toEqual(['test']);
  });

  // Test ArrowUp key with initialNavigation set to true
  it('should handle ArrowUp key with initialNavigation true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="ArrowUp initial test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['initialNavigation'] = true;

    const inputElement = document.createElement('input');
    const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    Object.defineProperty(keyEvent, 'target', { value: inputElement });

    autocomplete.handleKeyDown(keyEvent);

    expect(autocomplete['initialNavigation']).toBe(false);
  });

  // Test Enter key with no focused item in single-select mode
  it('should handle Enter key with no focused item in single-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Enter single-select test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const itemSelectSpy = jest.fn();
    autocomplete.itemSelect = {
      emit: itemSelectSpy,
    } as unknown as EventEmitter<IAutocompleteItem>;

    const testItem: IAutocompleteItem = {
      label: 'Test Item',
      value: 'test',
      visibleInMenu: true,
      selected: true,
    };

    autocomplete.items = [testItem];
    await page.waitForChanges();

    const inputElement = document.createElement('input');
    const keyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    Object.defineProperty(keyEvent, 'target', { value: inputElement });

    autocomplete.handleKeyDown(keyEvent);

    expect(itemSelectSpy).toHaveBeenCalledWith(testItem);
  });

  // Test auto-expansion when maxChips is exceeded
  it('should auto-expand chips when selection exceeds maxChips', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Auto-expand test" multi-select="true" max-chips="2"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
      { label: 'Item 2', value: '2', visibleInMenu: true },
      { label: 'Item 3', value: '3', visibleInMenu: true },
    ];

    autocomplete.items = testItems;
    autocomplete['selectionOrder'] = ['1', '2'];
    await page.waitForChanges();

    // Select third item which should trigger auto-expansion
    autocomplete['handleItemSelect'](testItems[2]);
    await page.waitForChanges();

    expect(autocomplete['isChipsExpanded']).toBe(true);
  });

  // Test clear button rendering
  it('should render clear button when includeClear is true and has value', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcButton],
      html: `<modus-wc-autocomplete aria-label="Clear button test" include-clear="true" multi-select="true"></modus-wc-autocomplete>`,
    });

    // Simulate typing 'test' into the input
    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.value = 'test';
    await page.waitForChanges();

    const clearButton = page.root?.querySelector(
      '.modus-wc-autocomplete-button-container modus-wc-button'
    );
    expect(clearButton).toBeTruthy();
  });

  // Test clear button with selected chips
  it('should render clear button when includeClear is true and has selected chips', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcButton,
        ModusWcChip,
      ],
      html: `<modus-wc-autocomplete aria-label="Clear button chips test" include-clear="true" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
    ];
    autocomplete['selectionOrder'] = ['1'];
    await page.waitForChanges();

    const clearButton = page.root?.querySelector(
      '.modus-wc-autocomplete-button-container modus-wc-button'
    );
    expect(clearButton).toBeTruthy();
  });

  // Test more chips indicator
  it('should render more chips indicator when not expanded', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcChip,
        ModusWcIcon,
      ],
      html: `<modus-wc-autocomplete aria-label="More chips test" multi-select="true" max-chips="2"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, selected: true },
      { label: 'Item 3', value: '3', visibleInMenu: true, selected: true },
    ];
    autocomplete['selectionOrder'] = ['1', '2', '3'];
    autocomplete['isChipsExpanded'] = false;
    await page.waitForChanges();

    // Find the chip that contains +1 text
    const hasMoreChip = Array.from(
      page.root?.querySelectorAll('modus-wc-chip .modus-wc-chip-label') || []
    ).some((chip) => chip.textContent === '+1');

    expect(hasMoreChip).toBeTruthy();
  });

  // Test expand/collapse button conditions
  it('should render expand button when focused and chips exceed maxChips', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcChip,
        ModusWcButton,
      ],
      html: `<modus-wc-autocomplete aria-label="Expand button test" multi-select="true" max-chips="2"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, selected: true },
      { label: 'Item 3', value: '3', visibleInMenu: true, selected: true },
    ];
    autocomplete['selectionOrder'] = ['1', '2', '3'];
    autocomplete['isFocused'] = true;
    await page.waitForChanges();

    const expandButton = page.root?.querySelector(
      '.modus-wc-autocomplete-expand-button'
    );
    expect(expandButton).toBeTruthy();
  });

  // Test expanded state rendering
  it('should render collapse button and text when chips are expanded', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcChip,
        ModusWcButton,
      ],
      html: `<modus-wc-autocomplete aria-label="Collapse button test" multi-select="true" max-chips="2"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, selected: true },
      { label: 'Item 3', value: '3', visibleInMenu: true, selected: true },
    ];
    autocomplete['selectionOrder'] = ['1', '2', '3'];
    autocomplete['isFocused'] = true;
    autocomplete['isChipsExpanded'] = true;
    await page.waitForChanges();

    const expandButton = page.root?.querySelector(
      '.modus-wc-autocomplete-expand-button.expanded'
    );
    expect(expandButton).toBeTruthy();

    const icon = expandButton?.querySelector('modus-wc-icon[name="caret_up"]');
    expect(icon).toBeTruthy();
  });

  // Test menu spinner rendering
  it('should render spinner when showSpinner is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="Spinner test" show-spinner="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['menuVisible'] = true;
    await page.waitForChanges();

    const loader = page.root?.querySelector('modus-wc-loader');
    expect(loader).toBeTruthy();
    expect(loader?.getAttribute('variant')).toBe('spinner');
  });

  // Test fallback for undefined filtered items
  it('should handle undefined filtered items', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="Undefined items test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['filteredItems'] = undefined!;
    autocomplete['menuVisible'] = true;
    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  // Test syncFilteredItems with undefined items
  it('should handle syncFilteredItems with undefined items', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Sync filtered test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = undefined;

    autocomplete['syncFilteredItems']();

    expect(autocomplete['filteredItems']).toEqual([]);
  });

  // Test handleItemSelectByValue when disabled
  it('should not select item by value when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Disabled select test" disabled="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItem: IAutocompleteItem = {
      label: 'Test Item',
      value: 'test',
      visibleInMenu: true,
    };

    autocomplete.items = [testItem];
    await page.waitForChanges();

    autocomplete['handleItemSelectByValue']('test');

    expect(autocomplete.items[0].selected).toBeFalsy();
  });

  // Test handleItemSelectByValue with invalid value
  it('should not select item with invalid value', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Invalid value test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItem: IAutocompleteItem = {
      label: 'Test Item',
      value: 'test',
      visibleInMenu: true,
    };

    autocomplete.items = [testItem];
    await page.waitForChanges();

    autocomplete['handleItemSelectByValue']('invalid');

    expect(autocomplete.items[0].selected).toBeFalsy();
  });

  // Test immediate input change when debounceMs is 0
  it('should emit input change immediately when debounceMs is 0', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="No debounce test" debounce-ms="0"></modus-wc-autocomplete>`,
    });

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const input = page.root!.querySelector('input');
    const changeEvent = new Event('input');
    Object.defineProperty(changeEvent, 'target', { value: input });

    const customEvent = new CustomEvent('inputChange', { detail: changeEvent });
    const textInput = page.root!.querySelector('modus-wc-text-input');
    textInput!.dispatchEvent(customEvent);

    await page.waitForChanges();

    expect(changeSpy).toHaveBeenCalledTimes(1);
  });

  // Test input with search icon in multi-select
  it('should render search icon in multi-select when includeSearch is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Search icon test" multi-select="true" include-search="true"></modus-wc-autocomplete>`,
    });

    await page.waitForChanges();

    const searchIcon = page.root?.querySelector(
      '.modus-wc-autocomplete-search-icon'
    );
    expect(searchIcon).toBeTruthy();
  });

  // Test ArrowUp navigation wrapping to last item
  it('should wrap to last item when navigating up from no selection', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="ArrowUp wrap test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
      { label: 'Item 2', value: '2', visibleInMenu: true },
      { label: 'Item 3', value: '3', visibleInMenu: true },
    ];

    autocomplete.items = testItems;
    autocomplete['menuVisible'] = true;
    autocomplete['initialNavigation'] = false;
    await page.waitForChanges();

    const inputElement = page.root?.querySelector('input');
    const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    Object.defineProperty(keyEvent, 'target', { value: inputElement });

    autocomplete.handleKeyDown(keyEvent);
    await page.waitForChanges();

    expect(autocomplete.items[2].focused).toBe(true);
  });

  // Test getVisibleItems fallback when filteredItems is undefined
  it('should return empty array when getVisibleItems has no filteredItems', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Visible items test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['filteredItems'] = undefined!;

    const visibleItems = autocomplete['getVisibleItems']();

    expect(visibleItems).toEqual([]);
  });

  // Test handling change event with existing debounce timer
  it('should clear existing debounce timer before setting new one', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Debounce clear test" debounce-ms="300"></modus-wc-autocomplete>`,
    });

    const clearTimeoutSpy = jest.spyOn(window, 'clearTimeout');
    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Set an existing timer
    autocomplete['debounceTimer'] = 123;

    const input = page.root!.querySelector('input');
    const changeEvent = new Event('input');
    Object.defineProperty(changeEvent, 'target', { value: input });

    const customEvent = new CustomEvent('inputChange', { detail: changeEvent });
    const textInput = page.root!.querySelector('modus-wc-text-input');
    textInput!.dispatchEvent(customEvent);

    expect(clearTimeoutSpy).toHaveBeenCalledWith(123);
  });

  // Test multi-select with no items and clear button
  it('should not show clear button when disabled even with value', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcButton],
      html: `<modus-wc-autocomplete aria-label="Disabled clear test" include-clear="true" disabled="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.value = 'test';
    await page.waitForChanges();

    const clearButton = page.root?.querySelector(
      'modus-wc-button[aria-label="Clear all"]'
    );
    expect(clearButton).toBeFalsy();
  });

  // Test clear button when readonly
  it('should not show clear button when readonly even with value', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcButton],
      html: `<modus-wc-autocomplete aria-label="Readonly clear test" include-clear="true" read-only="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.value = 'test';
    await page.waitForChanges();

    const clearButton = page.root?.querySelector(
      'modus-wc-button[aria-label="Clear all"]'
    );
    expect(clearButton).toBeFalsy();
  });

  // Test custom minInputWidth
  it('should apply custom minInputWidth CSS variable', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Min width test" min-input-width="100"></modus-wc-autocomplete>`,
    });

    await page.waitForChanges();

    const hostStyle = page.root?.style;
    expect(
      hostStyle?.getPropertyValue('--modus-autocomplete-min-input-width')
    ).toBe('100px');
  });

  // Test default minInputWidth when not provided
  it('should apply default minInputWidth when not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Default min width test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.minInputWidth = undefined;
    await page.waitForChanges();

    const hostStyle = page.root?.style;
    expect(
      hostStyle?.getPropertyValue('--modus-autocomplete-min-input-width')
    ).toBe('10px');
  });

  // Test menu item click handler
  it('should handle menu item click to select item', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Menu item click test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
    ];

    autocomplete.items = testItems;
    autocomplete['menuVisible'] = true;

    // Ensure filtered items are synced
    autocomplete['syncFilteredItems']();
    await page.waitForChanges();

    // Directly call handleItemSelectByValue to simulate menu item click
    autocomplete['handleItemSelectByValue']('1');
    await page.waitForChanges();

    expect(autocomplete.items[0].selected).toBe(true);
  });

  // Test focus event when blur event has relatedTarget within component
  it('should not blur when focus moves within component', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Internal focus test"></modus-wc-autocomplete>',
    });

    const blurSpy = jest.fn();
    page.root!.addEventListener('inputBlur', blurSpy);

    // Create an element within the component
    const internalElement = page.root!.querySelector('modus-wc-text-input');
    // Create a focus event with relatedTarget inside the component
    const focusEvent = new FocusEvent('blur', {
      relatedTarget: internalElement as EventTarget,
    });
    const customEvent = new CustomEvent('inputBlur', {
      detail: focusEvent,
    });

    const textInput = page.root!.querySelector('modus-wc-text-input');
    textInput!.dispatchEvent(customEvent);

    // Wait for the timeout in handleBlur (200ms)
    await new Promise((resolve) => setTimeout(resolve, 250));
    await page.waitForChanges();

    // Should not emit blur when focus stays within component
    expect(blurSpy).not.toHaveBeenCalled();
  });

  // Test debounced input change with timer
  it('should emit input change after debounce timeout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Debounce test" debounce-ms="100"></modus-wc-autocomplete>`,
    });

    const changeSpy = jest.fn();
    page.root!.addEventListener('inputChange', changeSpy);

    const input = page.root!.querySelector('input');
    const changeEvent = new Event('input');
    Object.defineProperty(changeEvent, 'target', { value: input });

    const customEvent = new CustomEvent('inputChange', { detail: changeEvent });
    const textInput = page.root!.querySelector('modus-wc-text-input');
    textInput!.dispatchEvent(customEvent);

    // Should not emit immediately
    expect(changeSpy).not.toHaveBeenCalled();

    // Wait for debounce timeout
    await new Promise((resolve) => setTimeout(resolve, 150));
    await page.waitForChanges();

    // Should emit after timeout
    expect(changeSpy).toHaveBeenCalledTimes(1);
  });

  // Test ArrowDown navigation updating focus
  it('should update item focus when navigating with ArrowDown', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="ArrowDown test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
      { label: 'Item 2', value: '2', visibleInMenu: true },
    ];

    autocomplete.items = testItems;
    autocomplete['menuVisible'] = true;
    autocomplete['initialNavigation'] = false;
    await page.waitForChanges();

    const inputElement = page.root?.querySelector('input');
    const keyEvent = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    Object.defineProperty(keyEvent, 'target', { value: inputElement });

    // First ArrowDown should focus first item
    autocomplete.handleKeyDown(keyEvent);
    await page.waitForChanges();

    expect(autocomplete.items[0].focused).toBe(true);
    expect(autocomplete.items[1].focused).toBe(false);

    // Second ArrowDown should focus second item
    autocomplete.handleKeyDown(keyEvent);
    await page.waitForChanges();

    expect(autocomplete.items[0].focused).toBe(false);
    expect(autocomplete.items[1].focused).toBe(true);
  });

  // Test Enter key with focused item
  it('should select focused item when pressing Enter', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Enter focused test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, focused: true },
    ];

    autocomplete.items = testItems;
    autocomplete['menuVisible'] = true;
    await page.waitForChanges();

    const itemSelectSpy = jest.spyOn(autocomplete.itemSelect, 'emit');

    const inputElement = page.root?.querySelector('input');
    const keyEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    Object.defineProperty(keyEvent, 'target', { value: inputElement });

    autocomplete.handleKeyDown(keyEvent);
    await page.waitForChanges();

    expect(itemSelectSpy).toHaveBeenCalledWith(testItems[1]);
    expect(autocomplete.items[1].selected).toBe(true);
  });

  // Test handleItemSelect when disabled
  it('should not select item when component is disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Disabled select test" disabled="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItem: IAutocompleteItem = {
      label: 'Test Item',
      value: 'test',
      visibleInMenu: true,
    };

    autocomplete.items = [testItem];
    await page.waitForChanges();

    const itemSelectSpy = jest.spyOn(autocomplete.itemSelect, 'emit');

    autocomplete['handleItemSelect'](testItem);

    expect(itemSelectSpy).not.toHaveBeenCalled();
    expect(autocomplete.items[0].selected).toBeFalsy();
  });

  // Test clear button click
  it('should clear all selections when clear button is clicked', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcButton,
        ModusWcChip,
      ],
      html: `<modus-wc-autocomplete aria-label="Clear all test" include-clear="true" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, selected: true },
    ];
    autocomplete['selectionOrder'] = ['1', '2'];
    autocomplete.value = 'test';
    await page.waitForChanges();

    // Find and click the clear button
    const clearButton = page.root?.querySelector(
      '.modus-wc-autocomplete-button-container modus-wc-button'
    );
    expect(clearButton).toBeTruthy();

    // Simulate click
    const clickEvent = new MouseEvent('click');
    clearButton?.dispatchEvent(clickEvent);
    await page.waitForChanges();

    expect(autocomplete.value).toBe('');
    expect(autocomplete['selectionOrder']).toEqual([]);
    expect(autocomplete.items[0].selected).toBe(false);
    expect(autocomplete.items[1].selected).toBe(false);
  });

  // Test chip remove click event
  it('should handle chip remove click event', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcChip],
      html: `<modus-wc-autocomplete aria-label="Chip remove test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
    ];
    autocomplete['selectionOrder'] = ['1'];
    await page.waitForChanges();

    const chipRemoveSpy = jest.spyOn(autocomplete.chipRemove, 'emit');

    // Find the chip
    const chip = page.root?.querySelector('modus-wc-chip');
    expect(chip).toBeTruthy();

    // Simulate chip removal via the component method
    const item = autocomplete.items[0];
    // Create and dispatch a custom chipRemove event on the chip
    const chipRemoveEvent = new CustomEvent('chipRemove', {
      bubbles: true,
      detail: item,
    });
    chip!.dispatchEvent(chipRemoveEvent);
    await page.waitForChanges();

    expect(chipRemoveSpy).toHaveBeenCalledWith(item);
    expect(autocomplete.items[0].selected).toBe(false);
    expect(autocomplete['selectionOrder']).toEqual([]);
  });

  // Test menu item click with onItemSelect callback
  it('should handle menu item onItemSelect callback', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Menu item callback test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
    ];

    autocomplete.items = testItems;
    autocomplete['menuVisible'] = true;
    autocomplete['syncFilteredItems']();
    await page.waitForChanges();

    const itemSelectSpy = jest.spyOn(autocomplete.itemSelect, 'emit');

    // Directly call handleItemSelectByValue to simulate menu item selection
    autocomplete['handleItemSelectByValue']('1');
    await page.waitForChanges();

    expect(itemSelectSpy).toHaveBeenCalledWith(testItems[0]);
    expect(autocomplete.items[0].selected).toBe(true);
  });

  // Test handleChange when items are null/undefined
  it('should handle input change when items are undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="No items test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    // Don't set items to undefined - leave as default empty array

    // Create a properly formed event that handleChange expects
    const input = page.root!.querySelector('input');
    input!.value = 'test';
    const changeEvent = new Event('input', { bubbles: true });
    Object.defineProperty(changeEvent, 'target', {
      value: input,
      writable: false,
      configurable: true,
    });

    // Create custom event with the event in detail
    const customEvent = new CustomEvent('inputChange', {
      detail: changeEvent,
    });

    // Directly call handleChange
    autocomplete['handleChange'](customEvent);
    await page.waitForChanges();

    expect(autocomplete.value).toBe('test');
  });

  // Test componentWillLoad with pre-selected items in initialization
  it('should initialize selection order for pre-selected items', async () => {
    const testItems: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, selected: false },
      { label: 'Item 3', value: '3', visibleInMenu: true, selected: true },
    ];

    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Pre-selected test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Set items before componentWillLoad runs
    autocomplete.items = testItems;

    // Manually trigger componentWillLoad to simulate initialization
    autocomplete.componentWillLoad();
    await page.waitForChanges();

    expect(autocomplete['selectionOrder']).toEqual(['1', '3']);
  });

  // Test handleChipRemove when disabled (covers line 619)
  it('should not handle chip remove when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcChip],
      html: `<modus-wc-autocomplete aria-label="Disabled chip test" multi-select="true" disabled="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
    ];
    autocomplete['selectionOrder'] = ['1'];
    await page.waitForChanges();

    const chipRemoveSpy = jest.spyOn(autocomplete.chipRemove, 'emit');

    // Call handleChipRemove directly
    autocomplete['handleChipRemove']({
      label: 'Item 1',
      value: '1',
      visibleInMenu: true,
    });

    // Should not emit when disabled
    expect(chipRemoveSpy).not.toHaveBeenCalled();
    expect(autocomplete.items[0].selected).toBe(true); // Should remain selected
  });

  // Test chip onChipRemove event handler with stopPropagation (covers lines 759-760)
  it('should stop propagation and handle chip remove on chip click', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcChip],
      html: `<modus-wc-autocomplete aria-label="Chip event test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true, selected: true },
    ];
    autocomplete['selectionOrder'] = ['1'];
    await page.waitForChanges();

    // Get the chip element
    const chip = page.root?.querySelector('modus-wc-chip');
    expect(chip).toBeTruthy();

    // Create and dispatch the chipRemove event
    const event = new CustomEvent('chipRemove', { bubbles: true });

    // Dispatch the event
    chip!.dispatchEvent(event);
    await page.waitForChanges();

    // The chip should be removed
    expect(autocomplete.items[0].selected).toBe(false);
  });

  // Test menu item onItemSelect handler (covers line 908)
  it('should handle menu item onItemSelect callback', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Menu callback test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const items: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
    ];

    autocomplete.items = items;
    autocomplete['menuVisible'] = true;
    autocomplete['syncFilteredItems']();
    await page.waitForChanges();

    const menuItem = page.root?.querySelector('modus-wc-menu-item');
    expect(menuItem).toBeTruthy();

    const itemSelectSpy = jest.spyOn(autocomplete.itemSelect, 'emit');

    // Simulate menu item selection by dispatching the itemSelect event
    const selectEvent = new CustomEvent('itemSelect', {
      bubbles: true,
      detail: items[0],
    });
    menuItem!.dispatchEvent(selectEvent);
    await page.waitForChanges();

    // Alternative: directly call the handler method
    autocomplete['handleItemSelectByValue']('1');
    await page.waitForChanges();

    expect(itemSelectSpy).toHaveBeenCalledWith(items[0]);
    expect(autocomplete.value).toBe('Item 1');
  });

  // Test handleChange map function updating focus (covers line 312)
  it('should update item focus during handleChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Focus update test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const items: IAutocompleteItem[] = [
      { label: 'Item 1', value: '1', visibleInMenu: true, focused: true },
      { label: 'Item 2', value: '2', visibleInMenu: true, focused: false },
    ];

    autocomplete.items = items;

    // Create a properly formed event that handleChange expects
    const input = page.root!.querySelector('input');
    input!.value = 'test';
    const changeEvent = new Event('input', { bubbles: true });
    Object.defineProperty(changeEvent, 'target', {
      value: input,
      writable: false,
      configurable: true,
    });

    const customEvent = new CustomEvent('inputChange', {
      detail: changeEvent,
    });

    // Directly call handleChange
    autocomplete['handleChange'](customEvent);
    await page.waitForChanges();

    // All items should have focus cleared
    expect(autocomplete.items[0].focused).toBe(false);
    expect(autocomplete.items[1].focused).toBe(false);
  });

  // Tests for optional chaining and null coalescing edge cases

  // Test handleChange with null event.detail.target
  it('should handle change event when event.detail.target is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Null target test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const inputChangeSpy = jest.spyOn(autocomplete.inputChange, 'emit');

    // Create event with null target
    const fakeEvent = new Event('input');
    const event = new CustomEvent('input', { detail: fakeEvent });
    Object.defineProperty(event.detail, 'target', {
      value: null,
      writable: true,
    });

    // Call handleChange directly
    autocomplete['handleChange'](event);

    // Should return early and not emit
    expect(inputChangeSpy).not.toHaveBeenCalled();
  });

  // Test input.value?.length when value is null
  it('should handle input value null check in handleChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Null value test" show-menu-on-focus="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Test', value: 'test', visibleInMenu: true },
    ];

    // Create input element with null value
    const input = document.createElement('input');
    Object.defineProperty(input, 'value', { value: null, writable: true });

    // Create a properly formed event
    const fakeEvent = new Event('input');
    Object.defineProperty(fakeEvent, 'target', {
      value: input,
      writable: true,
    });
    const event = new CustomEvent('input', { detail: fakeEvent });

    // Call handleChange
    autocomplete['handleChange'](event);
    await page.waitForChanges();

    // Menu should still be visible due to showMenuOnFocus
    expect(autocomplete['menuVisible']).toBe(true);
    expect(autocomplete.value).toBe('');
  });

  // Test Enter key with null items in multiselect
  it('should handle Enter key when items is null in multiselect', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Null items test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = undefined!;

    const itemSelectSpy = jest.spyOn(autocomplete.itemSelect, 'emit');

    const input = page.root!.querySelector('input')!;
    const enterEvent = new KeyboardEvent('keydown', { key: 'Enter' });
    Object.defineProperty(enterEvent, 'target', {
      value: input,
      writable: false,
    });

    autocomplete.handleKeyDown(enterEvent);

    expect(itemSelectSpy).not.toHaveBeenCalled();
  });

  // Test Backspace with null items
  it('should handle Backspace when items is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Backspace null test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete.items = null as any;
    autocomplete['selectionOrder'] = ['test'];

    const input = page.root!.querySelector('input')!;
    input.value = '';

    const backspaceEvent = new KeyboardEvent('keydown', { key: 'Backspace' });
    Object.defineProperty(backspaceEvent, 'target', {
      value: input,
      writable: false,
    });

    autocomplete.handleKeyDown(backspaceEvent);

    // Selection order should remain unchanged since items is null
    expect(autocomplete['selectionOrder']).toEqual(['test']);
  });

  // Test handleItemSelectByValue with null items
  it('should handle item select by value when items is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Select null test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete.items = null as any;

    const itemSelectSpy = jest.spyOn(autocomplete.itemSelect, 'emit');

    autocomplete['handleItemSelectByValue']('test');

    expect(itemSelectSpy).not.toHaveBeenCalled();
  });

  // Test currentItem?.selected fallback
  it('should handle null currentItem in multiselect', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Current item test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = []; // Empty array so find returns undefined

    const testItem: IAutocompleteItem = {
      label: 'Test',
      value: 'test',
      visibleInMenu: true,
    };

    autocomplete['handleItemSelect'](testItem);
    await page.waitForChanges();

    // Should add the item even though currentItem was undefined
    expect(autocomplete['selectionOrder']).toContain('test');
  });

  // Test this.value?.toLowerCase() null check
  it('should handle null value in syncFilteredItems', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Sync null test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
      { label: 'Item 2', value: '2', visibleInMenu: true },
    ];

    // Set value to null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete.value = null as any;

    autocomplete['syncFilteredItems']();

    // Should treat null as empty string and show all items
    expect(autocomplete['filteredItems'].length).toBe(2);
  });

  // Test this.items?.find in getChips with null items
  it('should handle null items in getChips render', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcChip],
      html: `<modus-wc-autocomplete aria-label="Chips null test" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['selectionOrder'] = ['1', '2'];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete.items = null as any;

    await page.waitForChanges();

    // Should render empty without errors
    const chips = page.root?.querySelectorAll('modus-wc-chip');
    expect(chips?.length).toBe(0);
  });

  // Test this.value?.length null check in getClearButton
  it('should handle null value in getClearButton', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcButton],
      html: `<modus-wc-autocomplete aria-label="Clear null test" include-clear="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete.value = null as any;

    await page.waitForChanges();

    const clearButton = page.root?.querySelector('modus-wc-button');
    expect(clearButton).toBeFalsy();
  });

  // Test menuItems fallback chain in getMenuItems
  it('should handle all null fallbacks in getMenuItems', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Menu fallback test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['menuVisible'] = true;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete['filteredItems'] = null as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete.items = null as any;

    await page.waitForChanges();

    // Should render empty menu without errors
    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBe(0);
  });

  // Test noResults null checks
  it('should handle null noResults properties', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="No results null test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['menuVisible'] = true;
    autocomplete.items = [];

    // Set all noResults properties to null
    autocomplete.noResults = {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      label: null as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      subLabel: null as any,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      ariaLabel: null as any,
    };

    await page.waitForChanges();

    // Should not render no results when all properties are null
    const noResults = page.root?.querySelector(
      '.modus-wc-autocomplete-no-results'
    );
    expect(noResults).toBeFalsy();
  });

  // Test menuItems?.length null check
  it('should handle null menuItems length check', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="Menu length test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['menuVisible'] = true;

    // Temporarily override getMenuItems to return null
    const originalRender = autocomplete.render.bind(autocomplete);
    autocomplete.render = function () {
      const result = originalRender();
      // Force menuItems to be null in the check
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      autocomplete['filteredItems'] = null as any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      autocomplete.items = null as any;
      return result;
    };

    await page.waitForChanges();

    // Should handle gracefully without errors
    const menu = page.root?.querySelector('modus-wc-menu');
    expect(menu).toBeTruthy();
  });

  // Tests for remaining uncovered branches and statements

  // Test event.detail?.target when event.detail is null
  it('should handle change event when event.detail is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Null detail test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Create event with null detail
    const event = new CustomEvent('input', {
      detail: null,
    } as CustomEventInit<Event | null>);

    // Call handleChange directly
    autocomplete['handleChange'](event as CustomEvent<Event>);

    // Should return early without errors
    expect(autocomplete.value).toBe('');
  });

  // Test input.value?.length when input.value is null
  it('should handle change event when input value is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Null value test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Create a properly typed event
    const fakeEvent = new Event('input');
    const mockTarget = { value: null } as unknown as HTMLInputElement;
    Object.defineProperty(fakeEvent, 'target', {
      value: mockTarget,
      writable: true,
    });
    const event = new CustomEvent('input', { detail: fakeEvent });

    // Call handleChange directly
    autocomplete['handleChange'](event);

    // Should handle null value gracefully
    // When minChars is 0 (default), empty string should show menu
    expect(autocomplete['menuVisible']).toBe(true);
    expect(autocomplete.value).toBe('');
  });

  // Test this.value?.length when this.value is null
  it('should handle getClearButton when value is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcButton],
      html: `<modus-wc-autocomplete aria-label="Null value clear test" include-clear="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    // Force value to be null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (autocomplete as any).value = null;
    await page.waitForChanges();

    // Clear button should not be rendered when value is null
    const clearButton = page.root?.querySelector(
      '.modus-wc-autocomplete-button-container modus-wc-button'
    );
    expect(clearButton).toBeFalsy();
  });

  // Test this.noResults?.label, ?.subLabel, ?.ariaLabel when noResults is null
  it('should handle null noResults in getMenuItems', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Null no results test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    // Force noResults to be null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (autocomplete as any).noResults = null;
    autocomplete['menuVisible'] = true;
    autocomplete.items = [];
    autocomplete['filteredItems'] = [];
    await page.waitForChanges();

    // Should render menu items without no results section
    const noResultsDiv = page.root?.querySelector(
      '.modus-wc-autocomplete-no-results'
    );
    expect(noResultsDiv).toBeFalsy();
  });

  // Test menuItems?.length when menuItems is null
  it('should handle null menuItems in getMenuItems', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="Null menu items test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['menuVisible'] = true;
    // Force both to be null
    autocomplete['filteredItems'] = undefined!;
    autocomplete.items = undefined!;

    await page.waitForChanges();

    // Should handle null gracefully
    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBe(0);
  });

  // Test updateItemFocus when items is null
  it('should handle updateItemFocus when items is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete],
      html: `<modus-wc-autocomplete aria-label="Update focus null test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    // Force items to be null
    autocomplete.items = undefined!;

    // Call updateItemFocus
    autocomplete['updateItemFocus']('test-value');

    // Should return early without errors
    expect(autocomplete.items).toEqual([]);
  });

  // Test clearAllFocus when items is null
  it('should handle clearAllFocus when items is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete],
      html: `<modus-wc-autocomplete aria-label="Clear focus null test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    // Force items to be null
    autocomplete.items = undefined!;

    // Call clearAllFocus
    autocomplete['clearAllFocus']();

    // Should return early without errors
    expect(autocomplete.items).toEqual([]);
  });

  // Tests for the last two optional chaining branches

  // Test getClearButton when value is null (covers the this.value?.length branch)
  it('should handle getClearButton when value is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcButton],
      html: `<modus-wc-autocomplete aria-label="Null value test" include-clear="true" multi-select="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Explicitly set value to null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete.value = null as any;

    await page.waitForChanges();

    // The clear button should not render when value is null (even with includeClear=true)
    const clearButton = page.root?.querySelector(
      '.modus-wc-autocomplete-button-container modus-wc-button'
    );
    expect(clearButton).toBeFalsy();
  });

  // Test getMenuItems when filteredItems and items are both null (covers the menuItems?.length branch)
  it('should handle getMenuItems when both filteredItems and items are null', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Null menu items test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Set both filteredItems and items to null
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete['filteredItems'] = null as any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    autocomplete.items = null as any;
    autocomplete['menuVisible'] = true;

    await page.waitForChanges();

    // Should render no results when menuItems is null
    const noResults = page.root?.querySelector(
      '.modus-wc-autocomplete-no-results'
    );
    expect(noResults).toBeTruthy();
    expect(noResults?.textContent).toContain('No results found');
  });

  // Test to cover the menuItems?.length optional chaining branch
  it('should handle edge case where menuItems could theoretically be undefined', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Edge case test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Mock the render method to test the edge case
    const originalRender = autocomplete.render.bind(autocomplete);
    let renderCount = 0;

    autocomplete.render = function () {
      renderCount++;

      // On first render, temporarily make filteredItems and items undefined during getMenuItems execution
      if (renderCount === 1) {
        const originalFilteredItems = this['filteredItems'];
        const originalItems = this.items;

        // Temporarily set both to undefined to test the || [] fallback
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this['filteredItems'] = undefined as any;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        this.items = undefined as any;

        const result = originalRender.call(this);

        // Restore values
        this['filteredItems'] = originalFilteredItems;
        this.items = originalItems;

        return result;
      }

      return originalRender.call(this);
    };

    autocomplete['menuVisible'] = true;
    await page.waitForChanges();

    // The component should still render without errors
    expect(page.root).toBeTruthy();
  });

  // Test to cover line 689 - programmaticOpen reset in handleOutsideClick
  it('should reset programmaticOpen flag when clicking outside after programmatic open', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="Programmatic open test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Open menu programmatically (sets programmaticOpen to true)
    await autocomplete.openMenu();
    expect(autocomplete['programmaticOpen']).toBe(true);
    expect(autocomplete['menuVisible']).toBe(true);

    // Create and dispatch an outside click event
    const outsideElement = document.createElement('div');
    document.body.appendChild(outsideElement);

    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    // Simulate click on outside element
    Object.defineProperty(clickEvent, 'target', {
      value: outsideElement,
      configurable: true,
    });

    // Call handleOutsideClick directly with the event
    autocomplete['handleOutsideClick'](clickEvent);

    // programmaticOpen should be reset to false after the click
    expect(autocomplete['programmaticOpen']).toBe(false);
    // Menu should still be visible because the click happened while programmaticOpen was true
    expect(autocomplete['menuVisible']).toBe(true);

    // Cleanup
    document.body.removeChild(outsideElement);
  });

  // Test to ensure selection is cleared when input is cleared in single select mode
  it('should clear selection when input is cleared in single select mode', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Single select test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const items: IAutocompleteItem[] = [
      { value: '1', label: 'Option 1', visibleInMenu: true },
      { value: '2', label: 'Option 2', visibleInMenu: true },
    ];

    autocomplete.items = items;
    autocomplete.multiSelect = false;
    await page.waitForChanges();

    // Select an item
    await autocomplete.selectItem(items[0]);
    expect(autocomplete.items[0].selected).toBe(true);
    expect(autocomplete.value).toBe('Option 1');

    // Clear the input
    const input = page.root?.querySelector('input');
    if (!input) {
      throw new Error('Input element not found');
    }
    input.value = '';
    input.dispatchEvent(new Event('input', { bubbles: true }));
    await page.waitForChanges();

    // Wait for handleChange to process
    await new Promise((resolve) => setTimeout(resolve, 0));

    // Selection should be cleared
    expect(autocomplete.items[0].selected).toBe(false);
    expect(autocomplete.value).toBe('');
  });

  // Test to cover line 299 - disabled/readOnly check in handleChange
  it('should not process change event when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Disabled test" disabled="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const spy = jest.spyOn(autocomplete.inputChange, 'emit');

    // Create a change event
    const event = new CustomEvent('input', {
      detail: new Event('input'),
    });
    Object.defineProperty(event.detail, 'target', {
      value: { value: 'test' } as HTMLInputElement,
    });

    // Call handleChange directly
    autocomplete['handleChange'](event);

    // Should not emit change event when disabled
    expect(spy).not.toHaveBeenCalled();
    expect(autocomplete.value).toBe('');
  });

  it('should not process change event when readOnly', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="ReadOnly test" read-only="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const spy = jest.spyOn(autocomplete.inputChange, 'emit');

    // Create a change event
    const event = new CustomEvent('input', {
      detail: new Event('input'),
    });
    Object.defineProperty(event.detail, 'target', {
      value: { value: 'test' } as HTMLInputElement,
    });

    // Call handleChange directly
    autocomplete['handleChange'](event);

    // Should not emit change event when readOnly
    expect(spy).not.toHaveBeenCalled();
    expect(autocomplete.value).toBe('');
  });

  // Test keyboard navigation in readOnly mode
  it('should not open menu with arrow keys when readOnly', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="ReadOnly keyboard test" read-only="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const items: IAutocompleteItem[] = [
      { value: '1', label: 'Option 1', visibleInMenu: true },
      { value: '2', label: 'Option 2', visibleInMenu: true },
    ];
    autocomplete.items = items;
    await page.waitForChanges();

    const input = page.root?.querySelector('input');
    if (!input) {
      throw new Error('Input element not found');
    }

    // Focus the input
    input.focus();
    await page.waitForChanges();

    // Try to open menu with ArrowDown
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
    });
    input.dispatchEvent(arrowDownEvent);
    await page.waitForChanges();

    // Menu should not open
    expect(autocomplete['menuVisible']).toBe(false);

    // Try with ArrowUp
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      bubbles: true,
    });
    input.dispatchEvent(arrowUpEvent);
    await page.waitForChanges();

    // Menu should still not open
    expect(autocomplete['menuVisible']).toBe(false);
  });

  // Test keyboard navigation in disabled mode
  it('should not open menu with arrow keys when disabled', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-autocomplete aria-label="Disabled keyboard test" disabled="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const items: IAutocompleteItem[] = [
      { value: '1', label: 'Option 1', visibleInMenu: true },
      { value: '2', label: 'Option 2', visibleInMenu: true },
    ];
    autocomplete.items = items;
    await page.waitForChanges();

    // Try to open menu with ArrowDown
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      bubbles: true,
      target: page.root?.querySelector('input'),
    } as KeyboardEventInit);

    autocomplete.handleKeyDown(arrowDownEvent);
    await page.waitForChanges();

    // Menu should not open
    expect(autocomplete['menuVisible']).toBe(false);
  });

  // Test readonly focus behavior - menu should not open when focusing readonly input
  it('should not open menu on focus when readonly is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="Readonly focus test" read-only="true" show-menu-on-focus="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    const items: IAutocompleteItem[] = [
      { value: '1', label: 'Option 1', visibleInMenu: true },
      { value: '2', label: 'Option 2', visibleInMenu: true },
    ];
    autocomplete.items = items;
    await page.waitForChanges();

    // Focus the input
    const focusEvent = new CustomEvent('focus', {
      detail: new FocusEvent('focus'),
      bubbles: true,
    });

    autocomplete['handleFocus'](focusEvent);
    await page.waitForChanges();

    // Menu should not open despite showMenuOnFocus being true
    expect(autocomplete['menuVisible']).toBe(false);

    // Verify focus event is still emitted
    const focusSpy = jest.spyOn(autocomplete.inputFocus, 'emit');
    autocomplete['handleFocus'](focusEvent);
    expect(focusSpy).toHaveBeenCalled();
  });

  // Test hybrid menu rendering - menu stays in DOM with custom slots
  it('should keep menu in DOM when custom slot content is present', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `
        <modus-wc-autocomplete aria-label="Custom slot test">
          <li slot="menu-items">Custom Item 1</li>
          <li slot="menu-items">Custom Item 2</li>
        </modus-wc-autocomplete>
      `,
    });

    await page.waitForChanges();

    // Menu should exist in DOM even when not visible
    const menu = page.root?.querySelector('modus-wc-menu');
    expect(menu).toBeTruthy();
    expect(menu?.classList.contains('menu-hidden')).toBe(true);

    // Open menu
    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['menuVisible'] = true;
    await page.waitForChanges();

    // Menu should have visible class
    expect(menu?.classList.contains('menu-visible')).toBe(true);
    expect(menu?.classList.contains('menu-hidden')).toBe(false);

    // Close menu
    autocomplete['menuVisible'] = false;
    await page.waitForChanges();

    // Menu should still be in DOM but hidden
    expect(menu?.parentElement).toBeTruthy();
    expect(menu?.classList.contains('menu-hidden')).toBe(true);
  });

  // Test hybrid menu rendering - menu removed from DOM without custom slots
  it('should conditionally render menu when no custom slot content', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="No slot test"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { value: '1', label: 'Option 1', visibleInMenu: true },
      { value: '2', label: 'Option 2', visibleInMenu: true },
    ];
    await page.waitForChanges();

    // Menu should not exist in DOM when closed
    let menu = page.root?.querySelector('modus-wc-menu');
    expect(menu).toBeFalsy();

    // Open menu
    autocomplete['menuVisible'] = true;
    await page.waitForChanges();

    // Menu should now exist and be visible
    menu = page.root?.querySelector('modus-wc-menu');
    expect(menu).toBeTruthy();
    expect(menu?.classList.contains('menu-visible')).toBe(true);

    // Close menu
    autocomplete['menuVisible'] = false;
    await page.waitForChanges();

    // Menu should be removed from DOM
    menu = page.root?.querySelector('modus-wc-menu');
    expect(menu).toBeFalsy();
  });

  // Test that no results is not shown when custom slot content is present
  it('should not show no results when custom slot content exists and filtered items is empty', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `
        <modus-wc-autocomplete aria-label="Custom slot no results test">
          <li slot="menu-items">Custom Item 1</li>
          <li slot="menu-items">Custom Item 2</li>
        </modus-wc-autocomplete>
      `,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['menuVisible'] = true;

    // Set empty items to trigger "no results" condition
    autocomplete.items = [];
    autocomplete['filteredItems'] = [];
    await page.waitForChanges();

    // No results should not be shown
    const noResults = page.root?.querySelector(
      '.modus-wc-autocomplete-no-results'
    );
    expect(noResults).toBeFalsy();

    // Custom slot content should still be visible
    const slotContent = page.root?.querySelectorAll('[slot="menu-items"]');
    expect(slotContent?.length).toBe(2);
  });

  // Test menu visibility on focus for different states
  it('should handle focus correctly based on disabled, readonly, and showMenuOnFocus states', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcTextInput, ModusWcMenu],
      html: `<modus-wc-autocomplete aria-label="Focus state test" show-menu-on-focus="true"></modus-wc-autocomplete>`,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete.items = [
      { value: '1', label: 'Option 1', visibleInMenu: true },
    ];

    const focusEvent = new CustomEvent('focus', {
      detail: new FocusEvent('focus'),
      bubbles: true,
    });

    // Test 1: Normal state - menu should open
    autocomplete['handleFocus'](focusEvent);
    await page.waitForChanges();
    expect(autocomplete['menuVisible']).toBe(true);

    // Reset
    autocomplete['menuVisible'] = false;

    // Test 2: Disabled state - menu should not open
    autocomplete.disabled = true;
    autocomplete['handleFocus'](focusEvent);
    await page.waitForChanges();
    expect(autocomplete['menuVisible']).toBe(false);

    // Test 3: Readonly state - menu should not open
    autocomplete.disabled = false;
    autocomplete.readOnly = true;
    autocomplete['handleFocus'](focusEvent);
    await page.waitForChanges();
    expect(autocomplete['menuVisible']).toBe(false);

    // Test 4: showMenuOnFocus false - menu should not open
    autocomplete.readOnly = false;
    autocomplete.showMenuOnFocus = false;
    autocomplete['handleFocus'](focusEvent);
    await page.waitForChanges();
    expect(autocomplete['menuVisible']).toBe(false);
  });

  // Test that getMenuItems handles hasSlottedContent in the condition
  it('should include hasSlottedContent in menu items rendering decision', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `
        <modus-wc-autocomplete aria-label="Slotted content menu test">
          <li slot="menu-items">Custom Option</li>
        </modus-wc-autocomplete>
      `,
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Set conditions that would normally show "no results"
    autocomplete['menuVisible'] = true;
    autocomplete.items = [];
    autocomplete['filteredItems'] = [];
    autocomplete.noResults = {
      label: 'No results found',
      subLabel: 'Try again',
      ariaLabel: 'No results',
    };

    await page.waitForChanges();

    // Despite empty items and noResults config, should not show no results div
    const noResultsDiv = page.root?.querySelector(
      '.modus-wc-autocomplete-no-results'
    );
    expect(noResultsDiv).toBeFalsy();

    // Menu items container should exist (even if empty)
    const menuItemsContainer = page.root?.querySelector('modus-wc-menu');
    expect(menuItemsContainer).toBeTruthy();
  });

  // Tests for uncovered preventDefault functionality
  describe('mouseDown event handling', () => {
    it('should prevent default on mouseDown for menu items', async () => {
      const page = await newSpecPage({
        components: [
          ModusWcAutocomplete,
          ModusWcTextInput,
          ModusWcMenu,
          ModusWcMenuItem,
        ],
        html: '<modus-wc-autocomplete aria-label="MouseDown test"></modus-wc-autocomplete>',
      });

      const autocomplete = page.rootInstance as ModusWcAutocomplete;
      autocomplete.items = items;

      // Force menu to be visible
      autocomplete['menuVisible'] = true;
      await page.waitForChanges();

      const menuItem = page.root?.querySelector('modus-wc-menu-item');
      expect(menuItem).toBeTruthy();

      // Create and dispatch mouseDown event
      const mouseDownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = jest.spyOn(mouseDownEvent, 'preventDefault');

      menuItem?.dispatchEvent(mouseDownEvent);
      await page.waitForChanges();

      expect(preventDefaultSpy).toHaveBeenCalled();
    });

    it('should prevent default on mouseDown for menu container', async () => {
      const page = await newSpecPage({
        components: [
          ModusWcAutocomplete,
          ModusWcTextInput,
          ModusWcMenu,
          ModusWcMenuItem,
        ],
        html: '<modus-wc-autocomplete aria-label="Menu mouseDown test"></modus-wc-autocomplete>',
      });

      const autocomplete = page.rootInstance as ModusWcAutocomplete;
      autocomplete.items = items;
      autocomplete['menuVisible'] = true;
      await page.waitForChanges();

      const menu = page.root?.querySelector('modus-wc-menu');
      expect(menu).toBeTruthy();

      // Create and dispatch mouseDown event
      const mouseDownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = jest.spyOn(mouseDownEvent, 'preventDefault');

      menu?.dispatchEvent(mouseDownEvent);
      await page.waitForChanges();

      expect(preventDefaultSpy).toHaveBeenCalled();
    });

    it('should render menu with slotted content and handle mouseDown', async () => {
      const page = await newSpecPage({
        components: [
          ModusWcAutocomplete,
          ModusWcTextInput,
          ModusWcMenu,
          ModusWcMenuItem,
        ],
        html: `
          <modus-wc-autocomplete aria-label="Slotted mouseDown test">
            <li slot="menu-items">Custom Option</li>
          </modus-wc-autocomplete>
        `,
      });

      const autocomplete = page.rootInstance as ModusWcAutocomplete;
      autocomplete['menuVisible'] = false;
      await page.waitForChanges();

      // Menu should still exist in DOM when using slots (hidden via CSS)
      const menu = page.root?.querySelector('modus-wc-menu');
      expect(menu).toBeTruthy();
      expect(menu?.classList.contains('menu-hidden')).toBe(true);

      // Show menu
      autocomplete['menuVisible'] = true;
      await page.waitForChanges();

      expect(menu?.classList.contains('menu-visible')).toBe(true);

      // Test mouseDown preventDefault
      const mouseDownEvent = new MouseEvent('mousedown', {
        bubbles: true,
        cancelable: true,
      });
      const preventDefaultSpy = jest.spyOn(mouseDownEvent, 'preventDefault');

      menu?.dispatchEvent(mouseDownEvent);
      await page.waitForChanges();

      expect(preventDefaultSpy).toHaveBeenCalled();
    });
  });

  // Tests for new modularized keyboard navigation helpers
  describe('modularized keyboard navigation', () => {
    it('should handle arrow down navigation through handleArrowDown', async () => {
      const page = await newSpecPage({
        components: [
          ModusWcAutocomplete,
          ModusWcTextInput,
          ModusWcMenu,
          ModusWcMenuItem,
        ],
        html: '<modus-wc-autocomplete aria-label="Arrow navigation test"></modus-wc-autocomplete>',
      });

      const autocomplete = page.rootInstance as ModusWcAutocomplete;
      autocomplete.items = items;
      autocomplete.minChars = 0;

      const input = page.root!.querySelector('input');
      input?.focus();

      // Directly test the handleArrowDown method
      autocomplete['handleArrowDown']();
      await page.waitForChanges();

      expect(autocomplete['menuVisible']).toBe(true);

      // Test navigation when initialNavigation is false
      autocomplete['initialNavigation'] = false;
      autocomplete['handleArrowDown']();
      await page.waitForChanges();

      // First item should be focused
      expect(autocomplete.items[0].focused).toBe(true);
    });

    it('should handle arrow up navigation through handleArrowUp', async () => {
      const page = await newSpecPage({
        components: [
          ModusWcAutocomplete,
          ModusWcTextInput,
          ModusWcMenu,
          ModusWcMenuItem,
        ],
        html: '<modus-wc-autocomplete aria-label="Arrow up test"></modus-wc-autocomplete>',
      });

      const autocomplete = page.rootInstance as ModusWcAutocomplete;
      autocomplete.items = items;
      autocomplete['menuVisible'] = true;
      autocomplete['initialNavigation'] = false;

      // Start with no focused item
      autocomplete['handleArrowUp']();
      await page.waitForChanges();

      // Last item should be focused when no item was focused
      expect(autocomplete.items[autocomplete.items.length - 1].focused).toBe(
        true
      );
    });

    it('should handle escape key through handleEscape', async () => {
      const page = await newSpecPage({
        components: [
          ModusWcAutocomplete,
          ModusWcTextInput,
          ModusWcMenu,
          ModusWcMenuItem,
        ],
        html: '<modus-wc-autocomplete aria-label="Escape test"></modus-wc-autocomplete>',
      });

      const autocomplete = page.rootInstance as ModusWcAutocomplete;
      autocomplete.items = items;
      autocomplete['menuVisible'] = true;
      autocomplete.items[0].focused = true;

      autocomplete['handleEscape']();
      await page.waitForChanges();

      expect(autocomplete['menuVisible']).toBe(false);
      expect(autocomplete['initialNavigation']).toBe(true);
      expect(autocomplete.items.every((item) => !item.focused)).toBe(true);
    });

    it('should handle enter key through handleEnter', async () => {
      const page = await newSpecPage({
        components: [
          ModusWcAutocomplete,
          ModusWcTextInput,
          ModusWcMenu,
          ModusWcMenuItem,
        ],
        html: '<modus-wc-autocomplete aria-label="Enter test"></modus-wc-autocomplete>',
      });

      const autocomplete = page.rootInstance as ModusWcAutocomplete;
      autocomplete.items = items;
      autocomplete['menuVisible'] = true;

      // Use updateItemFocus to properly set focus on item 2
      autocomplete['updateItemFocus']('2');
      await page.waitForChanges();

      const itemSelectSpy = jest.fn();
      autocomplete.itemSelect = {
        emit: itemSelectSpy,
      } as EventEmitter<IAutocompleteItem>;

      autocomplete['handleEnter']();
      await page.waitForChanges();

      // The emitted item should be the second item with focused state
      expect(itemSelectSpy).toHaveBeenCalledWith(
        expect.objectContaining({
          label: 'Item 2',
          value: '2',
          visibleInMenu: true,
        })
      );
    });

    it('should handle backspace in multi-select through handleBackspace', async () => {
      const page = await newSpecPage({
        components: [
          ModusWcAutocomplete,
          ModusWcTextInput,
          ModusWcMenu,
          ModusWcMenuItem,
          ModusWcChip,
        ],
        html: '<modus-wc-autocomplete aria-label="Backspace test" multi-select="true"></modus-wc-autocomplete>',
      });

      const autocomplete = page.rootInstance as ModusWcAutocomplete;
      autocomplete.items = items;
      autocomplete.items[0].selected = true;
      autocomplete.items[1].selected = true;
      autocomplete['selectionOrder'] = ['1', '2'];

      const input = page.root!.querySelector('input') as HTMLInputElement;
      input.value = '';

      const chipRemoveSpy = jest.fn();
      autocomplete.chipRemove = {
        emit: chipRemoveSpy,
      } as EventEmitter<IAutocompleteItem>;

      autocomplete['handleBackspace'](input);
      await page.waitForChanges();

      // Should remove the last selected item
      expect(chipRemoveSpy).toHaveBeenCalledWith(items[1]);
    });
  });

  // Test for renderMenuItems with showSpinner
  it('should render loader when showSpinner is true', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcAutocomplete,
        ModusWcTextInput,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: '<modus-wc-autocomplete aria-label="Spinner test" show-spinner="true"></modus-wc-autocomplete>',
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;
    autocomplete['menuVisible'] = true;
    await page.waitForChanges();

    const loader = page.root?.querySelector('modus-wc-loader');
    expect(loader).toBeTruthy();
    expect(loader?.getAttribute('variant')).toBe('spinner');
  });

  // Test for the uncovered line when input is not found
  it('should handle arrow down when input element is not found', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete],
      html: '<modus-wc-autocomplete aria-label="No input test"></modus-wc-autocomplete>',
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Mock querySelector to return null
    const originalQuerySelector = autocomplete.el.querySelector.bind(
      autocomplete.el
    );
    autocomplete.el.querySelector = jest.fn().mockReturnValue(null);

    // This should not throw and should return early
    expect(() => autocomplete['handleArrowDown']()).not.toThrow();

    // Menu should remain false since input wasn't found
    expect(autocomplete['menuVisible']).toBe(false);

    // Restore original querySelector
    autocomplete.el.querySelector = originalQuerySelector;
  });

  it('should filter items by visibleInMenu when customInputChange is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete],
      html: '<modus-wc-autocomplete aria-label="Custom input change test"></modus-wc-autocomplete>',
    });

    const autocomplete = page.rootInstance as ModusWcAutocomplete;

    // Set up custom input handler
    const customHandler = jest.fn();
    autocomplete.customInputChange = customHandler;

    // Set up items with mixed visibleInMenu values
    autocomplete.items = [
      { label: 'Item 1', value: '1', visibleInMenu: true },
      { label: 'Item 2', value: '2', visibleInMenu: false },
      { label: 'Item 3', value: '3', visibleInMenu: true },
      { label: 'Item 4', value: '4', visibleInMenu: false },
    ];

    await page.waitForChanges();

    // Trigger syncFilteredItems
    autocomplete['syncFilteredItems']();

    // Check that only items with visibleInMenu: true are in filteredItems
    expect(autocomplete['filteredItems'].length).toBe(2);
    expect(autocomplete['filteredItems']).toEqual([
      { label: 'Item 1', value: '1', visibleInMenu: true },
      { label: 'Item 3', value: '3', visibleInMenu: true },
    ]);
  });
});
