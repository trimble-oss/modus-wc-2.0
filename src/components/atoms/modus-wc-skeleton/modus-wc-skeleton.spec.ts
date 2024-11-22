import { newSpecPage } from '@stencil/core/testing';
import { ModusWcSkeleton } from './modus-wc-skeleton';

describe('modus-wc-skeleton', () => {
  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcSkeleton],
      html: '<modus-wc-skeleton></modus-wc-skeleton>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcSkeleton: aria-label is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSkeleton],
      html: '<modus-wc-skeleton aria-label="Default skeleton"></modus-wc-skeleton>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSkeleton],
      html: `<modus-wc-skeleton
            aria-describedby="active"
            aria-label="Test skeleton"
            aria-labelledby="skeleton-label"
            custom-class="test-class
            shape="circle"
            full-width="false"
            ></modus-wc-skeleton>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});
