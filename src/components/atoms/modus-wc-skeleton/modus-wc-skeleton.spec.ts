import { newSpecPage } from '@stencil/core/testing';
import { ModusWcSkeleton } from './modus-wc-skeleton';

describe('modus-wc-skeleton', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSkeleton],
      html: '<modus-wc-skeleton></modus-wc-skeleton>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSkeleton],
      html: `<modus-wc-skeleton
            aria-hidden="false"
            height="5rem"
            role="status"
            custom-class="test-class"
            shape="circle"
            tabindex="1"
            width="5rem"
            ></modus-wc-skeleton>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
