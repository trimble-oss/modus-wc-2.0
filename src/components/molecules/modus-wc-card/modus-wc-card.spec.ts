import { newSpecPage } from '@stencil/core/testing';
import { ModusWcCard } from './modus-wc-card';

describe('modus-wc-skeleton', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCard],
      html: '<modus-wc-skeleton></modus-wc-skeleton>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCard],
      html: `<modus-wc-skeleton
            aria-hidden="false"
            custom-class="test-class"
            height="5rem"
            role="status"
            shape="circle"
            tabindex="1"
            width="5rem"
            ></modus-wc-skeleton>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
