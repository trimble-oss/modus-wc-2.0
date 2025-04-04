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

  it('should render multi select with selected items', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: '<modus-wc-autocomplete aria-label="Default autocomplete" multi-select="true"></modus-wc-autocomplete>',
    });

    const component = page.rootInstance as ModusWcAutocomplete;

    // Test with mixed selected/unselected items
    const testItems = [
      { label: 'Item 1', value: '1', selected: true, visibleInMenu: true },
      { label: 'Item 2', value: '2', selected: true, visibleInMenu: true },
      { label: 'Item 3', value: '3', selected: false, visibleInMenu: true },
    ];

    component.items = testItems;

    // Focus input to trigger render
    const input = page.root!.querySelector('input');
    input?.focus();
    await page.waitForChanges();

    // Explicitly test the chip rendering
    const chips = page.root!.querySelectorAll('.chip');
    expect(chips.length).toBe(2); // Should render 2 chips for 2 selected items
    expect(chips[0].textContent).toContain('Item 1');
    expect(chips[1].textContent).toContain('Item 2');

    // Test with undefined items
    component.items = undefined;
    await page.waitForChanges();
    const chipsAfterUndefined = page.root!.querySelectorAll('.chip');
    expect(chipsAfterUndefined.length).toBe(0);

    // Test with empty array
    component.items = [];
    await page.waitForChanges();
    const chipsAfterEmpty = page.root!.querySelectorAll('.chip');
    expect(chipsAfterEmpty.length).toBe(0);
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

    input!.dispatchEvent(new FocusEvent('blur'));
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
  it('should always apply "menu-visible" class when leaveMenuOpen is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAutocomplete, ModusWcMenu, ModusWcTextInput],
      html: `<modus-wc-autocomplete aria-label="Test autocomplete" leave-menu-open="true"></modus-wc-autocomplete>`,
    });
    const component = page.rootInstance as ModusWcAutocomplete;
    component.items = items;

    // Focus the input to trigger the menu open logic.
    const input = page.root!.querySelector('input');
    input?.focus();
    await page.waitForChanges();

    // Because leaveMenuOpen is true, the menu should always have the 'menu-visible' class.
    const menu = page.root!.querySelector('modus-wc-menu');
    expect(menu).not.toBeNull();
    expect(menu?.className).toContain('menu-visible');
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
});
