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
});
