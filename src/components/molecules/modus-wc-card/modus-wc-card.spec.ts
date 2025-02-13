import { newSpecPage } from '@stencil/core/testing';
import { ModusWcCard } from './modus-wc-card';

describe('modus-wc-card', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCard],
      html: '<modus-wc-card></modus-wc-card>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCard],
      html: `<modus-wc-card
            aria-hidden="false"
            padding="compact"
            custom-class="test-class"
            ></modus-wc-card>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
