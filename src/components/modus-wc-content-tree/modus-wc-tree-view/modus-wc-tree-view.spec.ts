import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTreeView } from './modus-wc-tree-view';

describe('modus-wc-tree-view', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view></modus-wc-tree-view>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view
               custom-class="test-class"
               expand-all="true"
               multi-select="true"
               selected-values='["item1", "item2"]'>
             </modus-wc-tree-view>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders as a sublist when isSubList is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view is-sub-list="true"></modus-wc-tree-view>`,
    });

    expect(page.root).toMatchSnapshot();

    const host = page.root as HTMLElement;
    expect(host.classList.contains('modus-wc-tree-submenu')).toBe(true);

    const ul = host.querySelector('ul');
    expect(ul?.classList.contains('modus-wc-tree-dropdown')).toBe(true);
    expect(ul?.getAttribute('role')).toBe('group');
  });

  it('renders as a tree when isSubList is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view></modus-wc-tree-view>`,
    });

    const ul = page.root?.querySelector('ul');
    expect(ul?.classList.contains('modus-wc-menu')).toBe(true);
    expect(ul?.classList.contains('modus-wc-tree-view')).toBe(true);
    expect(ul?.getAttribute('role')).toBe('tree');
  });

  it('applies custom class to sublist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view is-sub-list="true" custom-class="custom-sublist"></modus-wc-tree-view>`,
    });

    const ul = page.root?.querySelector('ul');
    expect(ul?.classList.contains('modus-wc-tree-dropdown')).toBe(true);
    expect(ul?.classList.contains('custom-sublist')).toBe(true);
  });

  it('applies custom class to main tree view', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view custom-class="custom-tree"></modus-wc-tree-view>`,
    });

    const ul = page.root?.querySelector('ul');
    expect(ul?.classList.contains('modus-wc-menu')).toBe(true);
    expect(ul?.classList.contains('modus-wc-tree-view')).toBe(true);
    expect(ul?.classList.contains('custom-tree')).toBe(true);
  });

  it('handles itemSelect event and marks item as active', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `
        <modus-wc-tree-view>
          <div class="modus-wc-tree-item">
            <div class="modus-wc-tree-content">Item 1</div>
          </div>
          <div class="modus-wc-tree-item">
            <div class="modus-wc-tree-content">Item 2</div>
          </div>
        </modus-wc-tree-view>
      `,
    });

    const treeView = page.rootInstance;
    const items = page.root?.querySelectorAll('.modus-wc-tree-item');
    const firstItem = items?.[0] as HTMLElement;
    const secondItem = items?.[1] as HTMLElement;

    // Simulate item selection on first item
    const event = new CustomEvent('itemSelect', {
      detail: { value: 'item1' },
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: firstItem,
      enumerable: true,
    });

    treeView.handleItemSelect(event);
    await page.waitForChanges();

    const firstContent = firstItem.querySelector('.modus-wc-tree-content');
    expect(firstContent?.classList.contains('modus-wc-tree-item-active')).toBe(
      true
    );

    // Simulate item selection on second item
    const event2 = new CustomEvent('itemSelect', {
      detail: { value: 'item2' },
      bubbles: true,
    });
    Object.defineProperty(event2, 'target', {
      value: secondItem,
      enumerable: true,
    });

    treeView.handleItemSelect(event2);
    await page.waitForChanges();

    // First item should no longer be active
    expect(firstContent?.classList.contains('modus-wc-tree-item-active')).toBe(
      false
    );

    // Second item should be active
    const secondContent = secondItem.querySelector('.modus-wc-tree-content');
    expect(secondContent?.classList.contains('modus-wc-tree-item-active')).toBe(
      true
    );
  });

  it('handles itemSelect event when target is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;

    // Simulate event with no target
    const event = new CustomEvent('itemSelect', {
      detail: { value: 'item1' },
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: null,
      enumerable: true,
    });

    // Should not throw
    expect(() => treeView.handleItemSelect(event)).not.toThrow();
  });

  it('handles itemSelect event when target has no content element', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `
        <modus-wc-tree-view>
          <div class="modus-wc-tree-item">No content here</div>
        </modus-wc-tree-view>
      `,
    });

    const treeView = page.rootInstance;
    const item = page.root?.querySelector('.modus-wc-tree-item') as HTMLElement;

    const event = new CustomEvent('itemSelect', {
      detail: { value: 'item1' },
      bubbles: true,
    });
    Object.defineProperty(event, 'target', {
      value: item,
      enumerable: true,
    });

    // Should not throw even when content element is missing
    expect(() => treeView.handleItemSelect(event)).not.toThrow();
  });

  it('inherits ARIA attributes', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view aria-label="Test Tree" aria-expanded="true"></modus-wc-tree-view>`,
    });

    const ul = page.root?.querySelector('ul');
    expect(ul?.getAttribute('aria-label')).toBe('Test Tree');
    expect(ul?.getAttribute('aria-expanded')).toBe('true');
  });

  it('getClasses returns correct classes for main tree view', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;
    const classes = treeView['getClasses']();

    expect(classes).toContain('modus-wc-menu');
    expect(classes).toContain('modus-wc-tree-view');
  });

  it('getClasses returns correct classes for sublist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view is-sub-list="true"></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;
    const classes = treeView['getClasses']();

    expect(classes).toContain('modus-wc-tree-dropdown');
    expect(classes).not.toContain('modus-wc-menu');
  });

  it('getClasses includes custom class for main tree view', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view custom-class="my-custom-class"></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;
    const classes = treeView['getClasses']();

    expect(classes).toContain('modus-wc-menu');
    expect(classes).toContain('modus-wc-tree-view');
    expect(classes).toContain('my-custom-class');
  });

  it('getClasses includes custom class for sublist', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeView],
      html: `<modus-wc-tree-view is-sub-list="true" custom-class="my-custom-sublist"></modus-wc-tree-view>`,
    });

    const treeView = page.rootInstance;
    const classes = treeView['getClasses']();

    expect(classes).toContain('modus-wc-tree-dropdown');
    expect(classes).toContain('my-custom-sublist');
  });
});
