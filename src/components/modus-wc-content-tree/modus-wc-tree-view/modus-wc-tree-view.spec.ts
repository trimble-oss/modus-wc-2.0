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
});
