import { EventEmitter } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import {
  IAutocompleteItem,
  ModusWcAutocomplete,
} from './modus-wc-autocomplete';
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
    ).toBe('20px');
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
});
