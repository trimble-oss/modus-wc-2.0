import { newSpecPage } from '@stencil/core/testing';
import { ModusWcIcon } from './modus-wc-icon';

describe('modus-wc-icon', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon aria-label="Default icon"></modus-wc-icon>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon aria-label="Custom icon" custom-class="test-class" decorative="false" size="sm"></modus-wc-icon>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with size prop lg', async () => {
    const page = await newSpecPage({
      components: [ModusWcIcon],
      html: '<modus-wc-icon aria-label="Custom icon" size="lg"></modus-wc-icon>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
