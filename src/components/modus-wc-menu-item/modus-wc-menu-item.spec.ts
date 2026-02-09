import { newSpecPage } from '@stencil/core/testing';
import { ModusWcMenuItem } from './modus-wc-menu-item';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

interface IMenuItemElement extends HTMLElement {
  value: string;
  selected?: boolean;
  checkbox?: boolean;
  hasSubmenu?: boolean;
  isIndeterminate?: boolean;
  updateChildrenSelection?: (selected: boolean) => void;
}

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

    // Initially the selected prop should be undefined/false
    expect(page.rootInstance.selected).toBeFalsy();

    // Click the menu item
    button.click();
    await page.waitForChanges();

    // After click, selected prop should be true
    expect(page.rootInstance.selected).toBe(true);

    // Click again
    button.click();
    await page.waitForChanges();

    // After second click, selected prop should toggle to false
    expect(page.rootInstance.selected).toBe(false);
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

  describe('Nested checkbox functionality', () => {
    it('should update child checkboxes when parent checkbox is selected', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 2" value="child2" checkbox="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const checkbox = menuItem.querySelector(
        'modus-wc-checkbox'
      ) as HTMLElement;
      const childItems = menuItem.querySelectorAll(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      );

      // Click parent checkbox
      checkbox.click();
      await page.waitForChanges();

      // Parent should be selected
      expect(page.rootInstance.selected).toBe(true);

      // All children should be selected
      childItems.forEach((child) => {
        expect((child as IMenuItemElement).selected).toBe(true);
      });
    });

    it('should update child checkboxes when parent checkbox is deselected', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true" selected="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true" selected="true"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 2" value="child2" checkbox="true" selected="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const checkbox = menuItem.querySelector(
        'modus-wc-checkbox'
      ) as HTMLElement;
      const childItems = menuItem.querySelectorAll(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      );

      // Click parent checkbox to deselect
      checkbox.click();
      await page.waitForChanges();

      // Parent should be deselected
      expect(page.rootInstance.selected).toBe(false);

      // All children should be deselected
      childItems.forEach((child) => {
        expect((child as IMenuItemElement).selected).toBe(false);
      });
    });

    it('should cascade selection to nested grandchildren', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Grandparent" value="grandparent" checkbox="true" has-submenu="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true">
                <div class="modus-wc-menu-dropdown">
                  <modus-wc-menu-item label="Child 1" value="child1" checkbox="true"></modus-wc-menu-item>
                  <modus-wc-menu-item label="Child 2" value="child2" checkbox="true"></modus-wc-menu-item>
                </div>
              </modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const grandparentItem = page.root as HTMLElement;
      const checkbox = grandparentItem.querySelector(
        'modus-wc-checkbox'
      ) as HTMLElement;
      const parentItem = grandparentItem.querySelector(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      ) as IMenuItemElement;
      const grandchildren = parentItem
        ?.querySelector('.modus-wc-menu-dropdown')
        ?.querySelectorAll('modus-wc-menu-item');

      // Click grandparent checkbox
      checkbox.click();
      await page.waitForChanges();

      // Grandparent should be selected
      expect(page.rootInstance.selected).toBe(true);

      // Parent should be selected
      expect(parentItem.selected).toBe(true);

      // All grandchildren should be selected
      grandchildren?.forEach((child) => {
        expect((child as IMenuItemElement).selected).toBe(true);
      });
    });

    it('should set parent to indeterminate when some children are selected', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 2" value="child2" checkbox="true"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 3" value="child3" checkbox="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const childItems = menuItem.querySelectorAll(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      );

      // Select only one child
      (childItems[0] as IMenuItemElement).selected = true;

      // Dispatch itemSelect event to trigger updateIndeterminateState
      const event = new CustomEvent('itemSelect', {
        bubbles: true,
        composed: true,
      });
      childItems[0].dispatchEvent(event);
      await page.waitForChanges();

      // Parent should be indeterminate
      expect(page.rootInstance.isIndeterminate).toBe(true);
      expect(page.rootInstance.selected).toBe(false);
    });

    it('should set parent to checked when all children are selected', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 2" value="child2" checkbox="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const childItems = menuItem.querySelectorAll(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      );

      // Select all children
      childItems.forEach((child) => {
        (child as IMenuItemElement).selected = true;
      });

      // Dispatch itemSelect event to trigger updateIndeterminateState
      const event = new CustomEvent('itemSelect', {
        bubbles: true,
        composed: true,
      });
      childItems[0].dispatchEvent(event);
      await page.waitForChanges();

      // Parent should be fully checked, not indeterminate
      expect(page.rootInstance.isIndeterminate).toBe(false);
      expect(page.rootInstance.selected).toBe(true);
    });

    it('should set parent to unchecked when no children are selected', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true" selected="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 2" value="child2" checkbox="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const childItems = menuItem.querySelectorAll(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      );

      // Ensure all children are deselected
      childItems.forEach((child) => {
        (child as IMenuItemElement).selected = false;
      });

      // Dispatch itemSelect event to trigger updateIndeterminateState
      const event = new CustomEvent('itemSelect', {
        bubbles: true,
        composed: true,
      });
      childItems[0].dispatchEvent(event);
      await page.waitForChanges();

      // Parent should be unchecked and not indeterminate
      expect(page.rootInstance.isIndeterminate).toBe(false);
      expect(page.rootInstance.selected).toBe(false);
    });

    it('should not update indeterminate state if parent does not have checkbox', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" has-submenu="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const childItem = menuItem.querySelector(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      );

      // Select child
      (childItem as IMenuItemElement).selected = true;

      // Dispatch itemSelect event
      const event = new CustomEvent('itemSelect', {
        bubbles: true,
        composed: true,
      });
      childItem?.dispatchEvent(event);
      await page.waitForChanges();

      // Parent should not have indeterminate state since it doesn't have a checkbox
      expect(page.rootInstance.isIndeterminate).toBe(false);
    });

    it('should clear indeterminate state when parent is explicitly checked', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true" selected="true"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 2" value="child2" checkbox="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const checkbox = menuItem.querySelector(
        'modus-wc-checkbox'
      ) as HTMLElement;

      // Set parent to indeterminate initially
      page.rootInstance.isIndeterminate = true;
      await page.waitForChanges();

      // Click parent checkbox
      checkbox.click();
      await page.waitForChanges();

      // Indeterminate should be cleared
      expect(page.rootInstance.isIndeterminate).toBe(false);
      expect(page.rootInstance.selected).toBe(true);
    });

    it('should only count child items with checkbox property when calculating indeterminate state', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true" selected="true"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 2" value="child2"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 3" value="child3" checkbox="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const childItems = menuItem.querySelectorAll(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      );

      // Dispatch itemSelect event to trigger updateIndeterminateState
      const event = new CustomEvent('itemSelect', {
        bubbles: true,
        composed: true,
      });
      childItems[0].dispatchEvent(event);
      await page.waitForChanges();

      // Parent should be indeterminate (1 out of 2 checkbox children selected, non-checkbox child ignored)
      expect(page.rootInstance.isIndeterminate).toBe(true);
      expect(page.rootInstance.selected).toBe(false);
    });

    it('should handle updateChildrenSelection when submenu does not exist', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true">
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const checkbox = menuItem.querySelector(
        'modus-wc-checkbox'
      ) as HTMLElement;

      // Click parent checkbox when there's no submenu element
      checkbox.click();
      await page.waitForChanges();

      // Should not throw error and parent should still be selected
      expect(page.rootInstance.selected).toBe(true);
    });

    it('should skip non-checkbox children in updateChildrenSelection', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true" has-submenu="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 2" value="child2"></modus-wc-menu-item>
              <modus-wc-menu-item label="Child 3" value="child3" checkbox="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const checkbox = menuItem.querySelector(
        'modus-wc-checkbox'
      ) as HTMLElement;
      const childItems = menuItem.querySelectorAll(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      );

      // Click parent checkbox
      checkbox.click();
      await page.waitForChanges();

      // Only children with checkbox should be selected
      expect((childItems[0] as IMenuItemElement).selected).toBe(true);
      expect((childItems[1] as IMenuItemElement).selected).toBeUndefined(); // No checkbox, should not be set
      expect((childItems[2] as IMenuItemElement).selected).toBe(true);
    });

    it('should not update indeterminate state if parent has submenu but no checkbox', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" has-submenu="true">
            <div class="modus-wc-menu-dropdown">
              <modus-wc-menu-item label="Child 1" value="child1" checkbox="true" selected="true"></modus-wc-menu-item>
            </div>
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const childItem = menuItem.querySelector(
        '.modus-wc-menu-dropdown > modus-wc-menu-item'
      );

      // Trigger updateIndeterminateState
      const event = new CustomEvent('itemSelect', {
        bubbles: true,
        composed: true,
      });
      childItem?.dispatchEvent(event);
      await page.waitForChanges();

      // Parent should not be affected since it has no checkbox
      expect(page.rootInstance.isIndeterminate).toBe(false);
      expect(page.rootInstance.selected).toBeUndefined();
    });

    it('should not update indeterminate state if parent has checkbox but no submenu', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true">
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;

      // Trigger updateIndeterminateState
      const event = new CustomEvent('itemSelect', {
        bubbles: true,
        composed: true,
      });
      menuItem.dispatchEvent(event);
      await page.waitForChanges();

      // Parent should not update indeterminate state
      expect(page.rootInstance.isIndeterminate).toBe(false);
    });

    it('should not cascade selection if parent has no submenu', async () => {
      const page = await newSpecPage({
        components: [ModusWcMenuItem],
        html: `
          <modus-wc-menu-item label="Parent" value="parent" checkbox="true">
          </modus-wc-menu-item>
        `,
      });

      const menuItem = page.root as HTMLElement;
      const checkbox = menuItem.querySelector(
        'modus-wc-checkbox'
      ) as HTMLElement;

      // Click checkbox
      checkbox.click();
      await page.waitForChanges();

      // Parent should be selected but no errors should occur
      expect(page.rootInstance.selected).toBe(true);
    });
  });
});
