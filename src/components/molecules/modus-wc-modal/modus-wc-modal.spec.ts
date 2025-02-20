import { newSpecPage } from '@stencil/core/testing';
import { ModusWcModal } from './modus-wc-modal';

describe('modus-wc-modal', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal],
      html: '<modus-wc-modal></modus-wc-modal>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcModal],
      html: `<modus-wc-card
            custom-class="test-class"
            ></modus-wc-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
