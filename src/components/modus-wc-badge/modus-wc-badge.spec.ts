import { newSpecPage } from '@stencil/core/testing';
import { ModusWcBadge } from './modus-wc-badge';

describe('modus-wc-badge', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge></modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="secondary" custom-class="test-class" size="lg" variant="text">Test</modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with alert role', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="warning"></modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
