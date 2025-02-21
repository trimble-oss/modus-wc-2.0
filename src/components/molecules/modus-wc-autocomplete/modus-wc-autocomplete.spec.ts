import { newSpecPage } from '@stencil/core/testing';
import {
  IAutocompleteItem,
  ModusWcAutocomplete,
} from './modus-wc-autocomplete';
import { ModusWcMenu } from '../../atoms/modus-wc-menu/modus-wc-menu';
import { ModusWcMenuItem } from '../../atoms/modus-wc-menu-item/modus-wc-menu-item';
import { ModusWcTextInput } from '../../atoms/modus-wc-text-input/modus-wc-text-input';

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

    // Set items attribute
    const component = page.rootInstance as ModusWcAutocomplete;
    items[0].selected = true;
    items[1].selected = true;
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
});
