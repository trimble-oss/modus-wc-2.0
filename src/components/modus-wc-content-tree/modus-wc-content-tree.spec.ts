import { newSpecPage } from '@stencil/core/testing';
import { ModusWcContentTree } from './modus-wc-content-tree';

describe('modus-wc-content-tree', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: '<modus-wc-content-tree></modus-wc-content-tree>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree
                    custom-class="test-class"
                    expand-all="true"
                    multi-select="true"
                    selected-values='["item1", "item2"]'>
                    </modus-wc-content-tree>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should filter nodes based on search input', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree include-search="true">
                <modus-wc-tree-item value="item1">Item 1</modus-wc-tree-item>
                <modus-wc-tree-item value="item2">Item 2</modus-wc-tree-item>
                <modus-wc-tree-item value="item3">Item 3</modus-wc-tree-item>
              </modus-wc-content-tree>`,
    });

    const searchInput = page.root!.querySelector('input[type="search"]');
    expect(searchInput as HTMLInputElement).toBeDefined();
    if (searchInput) {
      (searchInput as HTMLInputElement).value = 'Item 2';
      searchInput.dispatchEvent(new Event('input'));
      await page.waitForChanges();
      const visibleItems = page.root!.querySelectorAll(
        'modus-wc-tree-item:not([hidden])'
      );
      expect(visibleItems.length).toBe(1);
      expect(visibleItems[0].getAttribute('value')).toBe('item2');
    }
  });

  it('clears filter on Escape key', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
      <modus-wc-content-tree>
        <modus-wc-tree-item label="Alpha"></modus-wc-tree-item>
        <modus-wc-tree-item label="Beta"></modus-wc-tree-item>
      </modus-wc-content-tree>
    `,
    });

    const input = page.root!.querySelector('modus-wc-text-input')!;

    input.dispatchEvent(
      new CustomEvent('inputChange', {
        bubbles: true,
        composed: true,
      })
    );

    await page.waitForChanges();

    // Now press Escape
    input.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await page.waitForChanges();

    // Assert all items visible
    const items = page.root!.querySelectorAll('modus-wc-tree-item');
    items.forEach((item) => {
      expect((item as HTMLElement).style.display).toBe('');
    });
  });

  it('expands parent nodes when a child matches search', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
      <modus-wc-content-tree>
        <modus-wc-tree-item label="Parent" has-subtree>
          <modus-wc-tree-item label="Child Match"></modus-wc-tree-item>
        </modus-wc-tree-item>
      </modus-wc-content-tree>
    `,
    });

    const root = page.root!;
    const parent = root.querySelectorAll('modus-wc-tree-item')[0] as any;
    const child = root.querySelectorAll('modus-wc-tree-item')[1] as HTMLElement;

    // Mock expandSubTree on parent
    parent.expandSubTree = jest.fn().mockResolvedValue(undefined);

    const tree = page.rootInstance as any;

    // Trigger filter that matches child
    tree.filterNodes('child');
    await page.waitForChanges();

    // Child should be visible
    expect(child.style.display).toBe('');

    // Parent should be forced visible
    expect(parent.style.display).toBe('');

    // Parent expansion should be triggered
    expect(parent.expandSubTree).toHaveBeenCalled();
  });

  it('updateSlotContent returns early if slotEl is not set', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `<modus-wc-content-tree></modus-wc-content-tree>`,
    });

    const tree = page.rootInstance as any;

    tree.slotEl = undefined;

    // Should not throw
    tree.updateSlotContent();

    expect(tree.hasSlotContent).toBe(false);
  });

  it('detects subtree via property instead of attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
      <modus-wc-content-tree>
        <modus-wc-tree-item></modus-wc-tree-item>
      </modus-wc-content-tree>
    `,
    });

    const tree = page.rootInstance as any;
    const item = page.root!.querySelector('modus-wc-tree-item') as any;

    item.hasSubtree = true;
    item.expandSubTree = jest.fn().mockResolvedValue(undefined);

    await tree.toggleExpandCollapse();

    expect(item.expandSubTree).toHaveBeenCalled();
  });

  it('skips nodes without subtrees', async () => {
    const page = await newSpecPage({
      components: [ModusWcContentTree],
      html: `
      <modus-wc-content-tree>
        <modus-wc-tree-item></modus-wc-tree-item>
      </modus-wc-content-tree>
    `,
    });

    const tree = page.rootInstance as any;

    await expect(tree.toggleExpandCollapse()).resolves.not.toThrow();
  });
});
