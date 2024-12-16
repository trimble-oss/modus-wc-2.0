import { newSpecPage } from '@stencil/core/testing';
import { ModusWcAvatar } from './modus-wc-avatar';

describe('modus-wc-avatar', () => {
  it('should warn when alt and a11y-label are not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar></modus-wc-avatar>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcAvatar: alt and a11y-label are required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Default avatar" aria-label="Default avatar"></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="Custom avatar" aria-label="Custom avatar" custom-class="test-class" img-src="https://example.com/avatar.jpg" shape="square" size="sm"></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
  });
});
