import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTreeActions } from './modus-wc-tree-actions';

describe('modus-wc-tree-actions', () => {
  it('renders correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
