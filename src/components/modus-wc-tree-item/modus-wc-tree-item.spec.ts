import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTreeItem } from './modus-wc-tree-item';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWcTreeView } from '../modus-wc-tree-view/modus-wc-tree-view';

describe('modus-wc-tree-item', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Test label" value="Test value"></modus-wc-tree-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcIcon],
      html: `<modus-wc-tree-item
              bordered="true"
              custom-class="test-class"
              disabled="true"
              label="Test label"
              selected="true"
              size="lg"
              sub-label="Test sub-label"
              value="Test value"
            ></modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with a start slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcIcon],
      html: `<modus-wc-tree-item label="Test label" value="Test value">
              <modus-wc-icon slot="start" name="check"></modus-wc-icon>
            </modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with an end slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcButton],
      html: `<modus-wc-tree-item label="Test label" value="Test value">
              <modus-wc-button slot="end" variant="borderless" size="sm">Action</modus-wc-button>
            </modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should add the focused class when the focused prop is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Test label" value="Test value"></modus-wc-tree-item>',
    });

    const treeItem = page.root as HTMLElement;
    const liElement = treeItem.querySelector('li') as HTMLLIElement;

    expect(
      liElement.classList.contains('modus-wc-menu-item-focused')
    ).toBeFalsy();

    (treeItem as unknown as { focused: boolean }).focused = true;
    await page.waitForChanges();

    expect(
      liElement.classList.contains('modus-wc-menu-item-focused')
    ).toBeTruthy();
  });

  it('should emit itemSelect event when clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item value="test-value"></modus-wc-tree-item>',
    });
    const li = page.root?.querySelector('.modus-wc-menu-item-interactive');
    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    (li as HTMLElement)?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
    expect(clickSpy.mock.calls[0][0].detail).toEqual({
      value: 'test-value',
      selected: true,
    });
  });

  it('should not emit itemSelect when end slot action is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem, ModusWcButton],
      html: `<modus-wc-tree-item label="Test label" value="test-value">
              <modus-wc-button slot="end" variant="borderless" size="sm">Action</modus-wc-button>
            </modus-wc-tree-item>`,
    });

    const clickSpy = jest.fn();
    page.root?.addEventListener('itemSelect', clickSpy);

    const endButton = page.root?.querySelector('[slot="end"]');
    (endButton as HTMLElement)?.click();
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
    expect(page.rootInstance.selected).toBeFalsy();
  });

  it('should emit itemSelect event when Enter is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item value="test-value"></modus-wc-tree-item>',
    });

    const li = page.root?.querySelector('.modus-wc-menu-item-interactive');
    const emitSpy = jest.spyOn(page.rootInstance.itemSelect, 'emit');

    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true,
    });

    li?.dispatchEvent(enterEvent);
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenCalledWith({
      value: 'test-value',
      selected: true,
    });
  });

  it('should render with checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Test label" value="Test value" checkbox="true"></modus-wc-tree-item>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should toggle selected prop when checkbox item is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: '<modus-wc-tree-item label="Test label" value="Test value" checkbox="true"></modus-wc-tree-item>',
    });

    const liElement = page.root?.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;

    liElement.click();
    await page.waitForChanges();

    expect(page.rootInstance.selected).toBe(true);

    liElement.click();
    await page.waitForChanges();

    expect(page.rootInstance.selected).toBe(false);
  });

  it('should toggle submenu when hasSubmenu is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view>
          <modus-wc-tree-item label="Parent" value="parent" has-submenu="true">
            <modus-wc-tree-view is-sub-menu="true">
              <modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const parentItem = page.doc.querySelector(
      'modus-wc-tree-item[has-submenu]'
    ) as HTMLElement;
    const liElement = parentItem.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const submenu = parentItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      false
    );

    liElement.click();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      true
    );
  });

  it('should emit itemSelect and not expand submenu when blockExpand is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view>
          <modus-wc-tree-item label="Parent" value="parent" has-submenu="true" block-expand="true">
            <modus-wc-tree-view is-sub-menu="true">
              <modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const parentItem = page.doc.querySelector(
      'modus-wc-tree-item[has-submenu]'
    ) as HTMLElement;
    const liElement = parentItem.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const submenu = parentItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    const selectSpy = jest.fn();
    parentItem.addEventListener('itemSelect', selectSpy);

    liElement.click();
    await page.waitForChanges();

    // blockExpand should prevent the inline submenu from opening
    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      false
    );

    // itemSelect should still be emitted with the item's value
    expect(selectSpy).toHaveBeenCalledTimes(1);
    expect(selectSpy.mock.calls[0][0].detail).toEqual({ value: 'parent' });
  });

  it('should collapse submenu via collapseSubmenu method', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView, ModusWcTreeItem],
      html: `
        <modus-wc-tree-view>
          <modus-wc-tree-item label="Parent" value="parent" has-submenu="true">
            <modus-wc-tree-view is-sub-menu="true">
              <modus-wc-tree-item label="Child" value="child"></modus-wc-tree-item>
            </modus-wc-tree-view>
          </modus-wc-tree-item>
        </modus-wc-tree-view>
      `,
    });

    const parentItem = page.doc.querySelector(
      'modus-wc-tree-item[has-submenu]'
    ) as HTMLElement & { collapseSubmenu: () => Promise<void> };
    const liElement = parentItem.querySelector(
      '.modus-wc-menu-item-interactive'
    ) as HTMLElement;
    const submenu = parentItem.querySelector(
      '.modus-wc-menu-dropdown'
    ) as HTMLElement;

    liElement.click();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      true
    );

    await parentItem.collapseSubmenu();
    await page.waitForChanges();

    expect(submenu.classList.contains('modus-wc-menu-dropdown-show')).toBe(
      false
    );
  });
});
