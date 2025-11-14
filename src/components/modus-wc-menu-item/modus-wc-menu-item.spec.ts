import { newSpecPage } from '@stencil/core/testing';
import { ModusWcMenuItem } from './modus-wc-menu-item';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

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
    expect(clickSpy.mock.calls[0][0].detail).toEqual({ value: 'test-value', selected: true });
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
    const checkbox = menuItem.querySelector('modus-wc-checkbox') as HTMLElement;

    // Get initial state
    const initialValue = checkbox.getAttribute('value') || 'false';
    expect(initialValue).toBe('false');

    // Click the menu item
    button.click();
    await page.waitForChanges();

    // After click, the checkbox value should be "true"
    expect(checkbox.getAttribute('value')).toBe('true');

    // Click again
    button.click();
    await page.waitForChanges();

    // Value should be back to "false"
    expect(checkbox.getAttribute('value')).toBe('false');
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
});
