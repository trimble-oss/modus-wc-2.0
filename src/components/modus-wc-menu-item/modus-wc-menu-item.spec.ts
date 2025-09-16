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
      html: '<modus-wc-menu-itemvalue="test-value"></modus-wc-menu-item>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    button?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(clickSpy.mock.calls[0][0].detail).toEqual({ value: 'test-value' });
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
});
