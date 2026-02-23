import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTreeItem } from './modus-wc-tree-item';

describe('modus-wc-tree-item', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test"></modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders with checkbox', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeItem],
      html: `<modus-wc-tree-item label="Test Item" value="test" checkbox></modus-wc-tree-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
