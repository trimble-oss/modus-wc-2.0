import { newSpecPage } from '@stencil/core/testing';
import { ModusWcMenuItem } from './modus-wc-menu-item';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWcMenu } from '../modus-wc-menu/modus-wc-menu';

describe('modus-wc-menu-item', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="Test value"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem, ModusWcIcon],
      html: `<modus-wc-menu-item
              bordered="true"
              custom-class="test-class"
              disabled="true"
              label="Test label"
              selected="true"
              size="lg"
              sub-label="Test sub-label"
              value="Test value"
            ></modus-wc-menu-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with a start-icon slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem, ModusWcIcon],
      html: `<modus-wc-menu-item label="Test label" value="Test value">
              <modus-wc-icon slot="start-icon" name="check"></modus-wc-icon>
            </modus-wc-menu-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size sm', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" selected="true" size="sm" value="Test value"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size md', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" selected="true" size="md" value="Test value"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size lg', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" selected="true" size="lg" value="Test value"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit itemSelect event when clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item value="test-value"></modus-wc-menu-item>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    button?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(clickSpy.mock.calls[0][0].detail).toEqual({
      value: 'test-value',
      selected: true,
    });
  });

  it('should render with checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="Test value" checkbox="true"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with checkbox and selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="Test value" checkbox="true" selected="true"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });
  it('should render with tooltip', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="Test value" tooltip-content="Test tooltip"></modus-wc-menu-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should toggle selected class when checkbox item is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="Test value" checkbox="true"></modus-wc-menu-item>',
    });

    // Get elements
    const menuItem = page.root as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;

    // Initially the item should not have the selected class
    expect(
      liElement.classList.contains('modus-wc-menu-item-selected')
    ).toBeFalsy();

    // Click the menu item
    button.click();
    await page.waitForChanges();

    // After click, it should have the selected class
    expect(
      liElement.classList.contains('modus-wc-menu-item-selected')
    ).toBeTruthy();

    // Click again to toggle off
    button.click();
    await page.waitForChanges();

    // Should no longer have the selected class
    expect(
      liElement.classList.contains('modus-wc-menu-item-selected')
    ).toBeFalsy();
  });

  it('should update checkbox value when clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="Test value" checkbox="true"></modus-wc-menu-item>',
    });

    // Get elements
    const menuItem = page.root as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;

    // Initially the item should not have the selected class
    expect(
      liElement.classList.contains('modus-wc-menu-item-selected')
    ).toBeFalsy();

    // Click the menu item
    button.click();
    await page.waitForChanges();

    // After click, it should have the selected class and selected prop should be true
    expect(
      liElement.classList.contains('modus-wc-menu-item-selected')
    ).toBeTruthy();
    expect(page.rootInstance.selected).toBe(true);

    // Click again
    button.click();
    await page.waitForChanges();

    // After second click, should not have the selected class but selected prop remains true
    expect(
      liElement.classList.contains('modus-wc-menu-item-selected')
    ).toBeFalsy();
    expect(page.rootInstance.selected).toBe(true);
  });

  it('should handle checkbox items that are initially selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="Test value" checkbox="true" selected="true"></modus-wc-menu-item>',
    });

    // Get elements
    const menuItem = page.root as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;
    const checkbox = menuItem.querySelector('modus-wc-checkbox') as HTMLElement;

    // Ensure the selected item has the selected class
    expect(
      liElement.classList.contains('modus-wc-menu-item-selected')
    ).toBeTruthy();

    // In the component, when rendering, it does:
    // <modus-wc-checkbox value={!!this.selected} />
    // So the value should be "true" when this.selected is true
    // Set the value attribute manually to check our handler updates it
    checkbox.setAttribute('value', 'true');
    await page.waitForChanges();
    expect(checkbox.getAttribute('value')).toBe('true');

    // Click the menu item to toggle off
    button.click();
    await page.waitForChanges();

    // After click, it should not have the selected class and checkbox value should be "false"
    expect(
      liElement.classList.contains('modus-wc-menu-item-selected')
    ).toBeFalsy();
    expect(checkbox.getAttribute('value')).toBe('false');
  });

  it('should toggle submenu visibility when a menu item with submenu is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: `
        <modus-wc-menu-item label="Parent Menu" value="parent" has-submenu="true">
          <modus-wc-menu is-sub-menu="true" class="modus-wc-menu-dropdown">
            <modus-wc-menu-item label="Submenu Item" value="child"></modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      `,
    });

    // Get elements
    const menuItem = page.root as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;
    const submenu = menuItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    // Initial state - submenu should be hidden
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeFalsy();
    expect(
      liElement.classList.contains('modus-wc-menu-item-expanded')
    ).toBeFalsy();

    // Click to expand
    button.click();
    await page.waitForChanges();

    // After click, submenu should be visible and li should have expanded class
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeTruthy();
    expect(
      liElement.classList.contains('modus-wc-menu-item-expanded')
    ).toBeTruthy();
    expect(page.rootInstance.isExpanded).toBeTruthy();

    // Click again to collapse
    button.click();
    await page.waitForChanges();

    // After second click, submenu should be hidden again
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeFalsy();
    expect(
      liElement.classList.contains('modus-wc-menu-item-expanded')
    ).toBeFalsy();
    expect(page.rootInstance.isExpanded).toBeFalsy();
  });

  it('should collapse submenu when collapseSubmenu method is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: `
        <modus-wc-menu-item label="Parent Menu" value="parent" has-submenu="true">
          <modus-wc-menu is-sub-menu="true" class="modus-wc-menu-dropdown modus-wc-menu-dropdown-show">
            <modus-wc-menu-item label="Submenu Item" value="child"></modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      `,
    });

    // Get elements
    const menuItem = page.root as HTMLElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;
    const submenu = menuItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    // Set up initial expanded state
    liElement.classList.add('modus-wc-menu-item-expanded');
    page.rootInstance.isExpanded = true;

    // Verify initial state - submenu is expanded
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeTruthy();
    expect(
      liElement.classList.contains('modus-wc-menu-item-expanded')
    ).toBeTruthy();
    expect(page.rootInstance.isExpanded).toBeTruthy();

    // Call the collapseSubmenu method
    await page.rootInstance.collapseSubmenu();
    await page.waitForChanges();

    // After calling collapseSubmenu, submenu should be collapsed
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeFalsy();
    expect(
      liElement.classList.contains('modus-wc-menu-item-expanded')
    ).toBeFalsy();
    expect(page.rootInstance.isExpanded).toBeFalsy();
  });

  it('should not collapse submenu when collapseSubmenu is called but submenu is not expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: `
        <modus-wc-menu-item label="Parent Menu" value="parent" has-submenu="true">
          <modus-wc-menu is-sub-menu="true" class="modus-wc-menu-dropdown">
            <modus-wc-menu-item label="Submenu Item" value="child"></modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      `,
    });

    // Get elements
    const menuItem = page.root as HTMLElement;
    const submenu = menuItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    // Verify initial state - submenu is not expanded
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeFalsy();
    expect(page.rootInstance.isExpanded).toBeFalsy();

    // Call the collapseSubmenu method
    await page.rootInstance.collapseSubmenu();
    await page.waitForChanges();

    // State should remain unchanged
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeFalsy();
    expect(page.rootInstance.isExpanded).toBeFalsy();
  });

  it('should do nothing when collapseSubmenu is called on a menu item without submenu', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="Test value"></modus-wc-menu-item>',
    });

    // Verify there is no submenu
    expect(page.rootInstance.hasSubmenu).toBeFalsy();
    expect(page.rootInstance.isExpanded).toBeFalsy();

    // Call the collapseSubmenu method
    await page.rootInstance.collapseSubmenu();
    await page.waitForChanges();

    // Should remain in the same state
    expect(page.rootInstance.isExpanded).toBeFalsy();
  });

  it('should handle collapseSubmenu when submenu element is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Parent Menu" value="parent" has-submenu="true"></modus-wc-menu-item>',
    });

    // Set isExpanded to true even though there's no submenu element
    page.rootInstance.isExpanded = true;

    // Call the collapseSubmenu method
    await page.rootInstance.collapseSubmenu();
    await page.waitForChanges();

    // Should not throw an error and state should remain as is
    expect(page.rootInstance.isExpanded).toBeTruthy();
  });

  it('should handle submenu toggle when submenu or li element is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Parent Menu" value="parent" has-submenu="true"></modus-wc-menu-item>',
    });

    // Get elements
    const menuItem = page.root as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;

    // Set up event listener to capture itemSelect event
    const selectSpy = jest.fn();
    menuItem.addEventListener('itemSelect', selectSpy);

    // Click the menu item when there's no submenu element
    button.click();
    await page.waitForChanges();

    // Should not throw an error
    // Event should still be emitted
    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({ value: 'parent' });
  });

  it('should not expand submenu when inside a collapsed side navigation', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: `
        <modus-wc-menu-item label="Parent Menu" value="parent" has-submenu="true">
          <modus-wc-menu is-sub-menu="true" class="modus-wc-menu-dropdown">
            <modus-wc-menu-item label="Submenu Item" value="child"></modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      `,
    });

    const menuItem = page.root as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;
    const submenu = menuItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    // Mock the closest method to return a fake side navigation element
    const mockSideNav = { expanded: false };
    const originalClosest = menuItem.closest.bind(menuItem);
    menuItem.closest = jest.fn((selector: string) => {
      if (selector === 'modus-wc-side-navigation') {
        return mockSideNav as unknown as Element;
      }
      return originalClosest(selector);
    });

    // Set up event listener to capture itemSelect event
    const selectSpy = jest.fn();
    menuItem.addEventListener('itemSelect', selectSpy);

    // Verify initial state
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeFalsy();

    // Click the menu item
    button.click();
    await page.waitForChanges();

    // Submenu should NOT expand because side nav is collapsed
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeFalsy();

    // Event should still be emitted (line 153)
    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({ value: 'parent' });
  });

  it('should expand submenu when inside an expanded side navigation', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: `
        <modus-wc-menu-item label="Parent Menu" value="parent" has-submenu="true">
          <modus-wc-menu is-sub-menu="true" class="modus-wc-menu-dropdown">
            <modus-wc-menu-item label="Submenu Item" value="child"></modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      `,
    });

    const menuItem = page.root as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;
    const submenu = menuItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;

    // Mock the closest method to return a fake side navigation element with expanded: true
    const mockSideNav = { expanded: true };
    const originalClosest = menuItem.closest.bind(menuItem);
    menuItem.closest = jest.fn((selector: string) => {
      if (selector === 'modus-wc-side-navigation') {
        return mockSideNav as unknown as Element;
      }
      return originalClosest(selector);
    });

    // Verify initial state
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeFalsy();

    // Click the menu item
    button.click();
    await page.waitForChanges();

    // Submenu SHOULD expand because side nav is expanded
    expect(
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ).toBeTruthy();
    expect(
      liElement.classList.contains('modus-wc-menu-item-expanded')
    ).toBeTruthy();
  });

  it('should emit itemSelect event when Enter key is pressed on li element', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="test-value"></modus-wc-menu-item>',
    });

    const menuItem = page.root as HTMLElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;
    const selectSpy = jest.fn();
    menuItem.addEventListener('itemSelect', selectSpy);

    // Create and dispatch Enter key event
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = jest.spyOn(enterEvent, 'preventDefault');

    liElement.dispatchEvent(enterEvent);
    await page.waitForChanges();

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({
      value: 'test-value',
      selected: true,
    });
  });

  it('should emit itemSelect event when Space key is pressed on li element', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="test-value"></modus-wc-menu-item>',
    });

    const menuItem = page.root as HTMLElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;
    const selectSpy = jest.fn();
    menuItem.addEventListener('itemSelect', selectSpy);

    // Create and dispatch Space key event
    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = jest.spyOn(spaceEvent, 'preventDefault');

    liElement.dispatchEvent(spaceEvent);
    await page.waitForChanges();

    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({
      value: 'test-value',
      selected: true,
    });
  });

  it('should not emit itemSelect event when other keys are pressed on li element', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Test label" value="test-value"></modus-wc-menu-item>',
    });

    const menuItem = page.root as HTMLElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;
    const selectSpy = jest.fn();
    menuItem.addEventListener('itemSelect', selectSpy);

    // Create and dispatch Escape key event (should not trigger)
    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      bubbles: true,
      cancelable: true,
    });
    const preventDefaultSpy = jest.spyOn(escapeEvent, 'preventDefault');

    liElement.dispatchEvent(escapeEvent);
    await page.waitForChanges();

    expect(preventDefaultSpy).not.toHaveBeenCalled();
    expect(selectSpy).not.toHaveBeenCalled();
  });

  it('should deselect siblings in single selection mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="single">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 3" value="3"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItems = page.doc.querySelectorAll('modus-wc-menu-item');
    const firstItem = menuItems[0] as HTMLElement & { selected?: boolean };
    const secondItem = menuItems[1] as HTMLElement & { selected?: boolean };

    // Click first item
    firstItem.querySelector('button')?.click();
    await page.waitForChanges();

    expect(firstItem.selected).toBe(true);

    // Click second item — first should be deselected
    secondItem.querySelector('button')?.click();
    await page.waitForChanges();

    expect(firstItem.selected).toBe(false);
    expect(secondItem.selected).toBe(true);
  });

  it('should render checkbox automatically in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="multiple">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItem = page.doc.querySelector(
      'modus-wc-menu-item'
    ) as HTMLElement;
    const checkbox = menuItem.querySelector('modus-wc-checkbox');

    expect(checkbox).not.toBeNull();
  });

  it('should toggle checked state in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="multiple">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItem = page.doc.querySelector(
      'modus-wc-menu-item'
    ) as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;

    // Click to check
    button.click();
    await page.waitForChanges();

    const liElement = menuItem.querySelector('li') as HTMLLIElement;
    expect(
      liElement.classList.contains('modus-wc-menu-item-checked')
    ).toBeTruthy();

    // Click again to uncheck
    button.click();
    await page.waitForChanges();

    expect(
      liElement.classList.contains('modus-wc-menu-item-checked')
    ).toBeFalsy();
  });

  it('should emit itemSelect with checked state in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="multiple">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItem = page.doc.querySelector(
      'modus-wc-menu-item'
    ) as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;
    const selectSpy = jest.fn();
    menuItem.addEventListener('itemSelect', selectSpy);

    // Click to check
    button.click();
    await page.waitForChanges();

    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({
      value: '1',
      selected: true,
    });

    // Click to uncheck
    button.click();
    await page.waitForChanges();

    expect(selectSpy).toHaveBeenCalledTimes(2);
    expect(selectSpy.mock.calls[1][0].detail).toEqual({
      value: '1',
      selected: false,
    });
  });

  it('should not set selected prop in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="multiple">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItem = page.doc.querySelector(
      'modus-wc-menu-item'
    ) as HTMLElement & {
      selected?: boolean;
    };
    const button = menuItem.querySelector('button') as HTMLButtonElement;

    button.click();
    await page.waitForChanges();

    // selected prop should remain unset; only checked state is used
    expect(menuItem.selected).toBeFalsy();
  });

  it('should allow multiple items to be checked in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="multiple">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 3" value="3"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItems = page.doc.querySelectorAll('modus-wc-menu-item');
    const firstButton = menuItems[0].querySelector(
      'button'
    ) as HTMLButtonElement;
    const secondButton = menuItems[1].querySelector(
      'button'
    ) as HTMLButtonElement;

    // Check first item
    firstButton.click();
    await page.waitForChanges();

    // Check second item
    secondButton.click();
    await page.waitForChanges();

    // Both should have the checked class
    const firstLi = menuItems[0].querySelector('li') as HTMLLIElement;
    const secondLi = menuItems[1].querySelector('li') as HTMLLIElement;
    const thirdLi = menuItems[2].querySelector('li') as HTMLLIElement;

    expect(
      firstLi.classList.contains('modus-wc-menu-item-checked')
    ).toBeTruthy();
    expect(
      secondLi.classList.contains('modus-wc-menu-item-checked')
    ).toBeTruthy();
    expect(
      thirdLi.classList.contains('modus-wc-menu-item-checked')
    ).toBeFalsy();
  });

  it('should handle selection gracefully when not inside a modus-wc-menu', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Standalone" value="standalone"></modus-wc-menu-item>',
    });

    const menuItem = page.root as HTMLElement;
    const button = menuItem.querySelector('button') as HTMLButtonElement;
    const selectSpy = jest.fn();
    menuItem.addEventListener('itemSelect', selectSpy);

    button.click();
    await page.waitForChanges();

    // Should still select itself and emit the event without errors
    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({
      value: 'standalone',
      selected: true,
    });
  });

  it('should return early from deselectSiblings when no parent menu exists', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Standalone" value="standalone"></modus-wc-menu-item>',
    });

    const instance = page.rootInstance;

    expect(() => instance.deselectSiblings()).not.toThrow();
  });

  it('should use role menuitemradio with aria-checked in single-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="single">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItem = page.doc.querySelector(
      'modus-wc-menu-item'
    ) as HTMLElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;

    expect(liElement.getAttribute('role')).toBe('menuitemradio');
    expect(liElement.getAttribute('aria-checked')).toBe('false');

    // Click to select
    menuItem.querySelector('button')?.click();
    await page.waitForChanges();

    expect(liElement.getAttribute('aria-checked')).toBe('true');
  });

  it('should use role menuitemcheckbox with aria-checked in multi-select mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="multiple">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItem = page.doc.querySelector(
      'modus-wc-menu-item'
    ) as HTMLElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;

    expect(liElement.getAttribute('role')).toBe('menuitemcheckbox');
    expect(liElement.getAttribute('aria-checked')).toBe('false');

    // Click to check
    menuItem.querySelector('button')?.click();
    await page.waitForChanges();

    expect(liElement.getAttribute('aria-checked')).toBe('true');
  });

  it('should use default role menuitem when not inside a menu', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Standalone" value="standalone"></modus-wc-menu-item>',
    });

    const liElement = page.root?.querySelector('li') as HTMLLIElement;

    expect(liElement.getAttribute('role')).toBe('menuitem');
    expect(liElement.getAttribute('aria-checked')).toBeNull();
  });

  it('should not emit itemSelect when Enter key is pressed on a disabled item', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenuItem],
      html: '<modus-wc-menu-item label="Disabled" value="disabled" disabled="true"></modus-wc-menu-item>',
    });

    const menuItem = page.root as HTMLElement;
    const liElement = menuItem.querySelector('li') as HTMLLIElement;
    const selectSpy = jest.fn();
    menuItem.addEventListener('itemSelect', selectSpy);

    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true,
    });

    liElement.dispatchEvent(enterEvent);
    await page.waitForChanges();

    expect(selectSpy).not.toHaveBeenCalled();
  });

  it('should update aria-checked to false for deselected siblings in single-select', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `
        <modus-wc-menu selection-mode="single">
          <modus-wc-menu-item label="Item 1" value="1"></modus-wc-menu-item>
          <modus-wc-menu-item label="Item 2" value="2"></modus-wc-menu-item>
        </modus-wc-menu>
      `,
    });

    const menuItems = page.doc.querySelectorAll('modus-wc-menu-item');
    const firstLi = menuItems[0].querySelector('li') as HTMLLIElement;
    const secondLi = menuItems[1].querySelector('li') as HTMLLIElement;

    // Click first item
    menuItems[0].querySelector('button')?.click();
    await page.waitForChanges();

    expect(firstLi.getAttribute('aria-checked')).toBe('true');
    expect(secondLi.getAttribute('aria-checked')).toBe('false');

    // Click second item
    menuItems[1].querySelector('button')?.click();
    await page.waitForChanges();

    expect(firstLi.getAttribute('aria-checked')).toBe('false');
    expect(secondLi.getAttribute('aria-checked')).toBe('true');
  });
});
