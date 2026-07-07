import { newSpecPage } from '@stencil/core/testing';
import { ModusWcAvatar } from './modus-wc-avatar';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

describe('modus-wc-avatar', () => {
  it('should render with no props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar, ModusWcIcon],
      html: '<modus-wc-avatar></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar, ModusWcIcon],
      html: '<modus-wc-avatar alt="Default avatar" aria-label="Default avatar"></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar, ModusWcIcon],
      html: '<modus-wc-avatar alt="Custom avatar" aria-label="Custom avatar" custom-class="test-class" img-src="https://example.com/avatar.jpg" shape="square" size="sm"></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with initials when imgSrc is not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar, ModusWcIcon],
      html: '<modus-wc-avatar alt="User initials" aria-label="User initials" initials="John Doe"></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with initials limited to 3 characters', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar, ModusWcIcon],
      html: '<modus-wc-avatar initials="John Michael Doe"></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should return empty string for initials when none are provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar, ModusWcIcon],
      html: '<modus-wc-avatar></modus-wc-avatar>',
    });
    const avatarInstance = page.rootInstance;
    expect(avatarInstance.getUserInitials()).toBe('');
  });

  it.each([
    ['xs', 'modus-wc-w-8'],
    ['sm', 'modus-wc-w-12'],
    ['md', 'modus-wc-w-16'],
    ['lg', 'modus-wc-w-20'],
    ['xl', 'modus-wc-w-24'],
  ])(
    'should render with size %s',
    async (size: string, expectedClass: string) => {
      const page = await newSpecPage({
        components: [ModusWcAvatar, ModusWcIcon],
        html: `<modus-wc-avatar alt="Avatar" size="${size}"></modus-wc-avatar>`,
      });
      const innerDiv = page.root?.querySelector('.modus-wc-avatar > div');

      expect(innerDiv?.classList.contains(expectedClass)).toBe(true);
      expect(page.root).toMatchSnapshot();
    }
  );

  it('should emit imageLoadError event when image fails to load', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar, ModusWcIcon],
      html: '<modus-wc-avatar alt="Avatar" img-src="https://example.com/bad.jpg"></modus-wc-avatar>',
    });
    const img = page.root?.querySelector('img');
    const errorSpy = jest.fn();
    page.root?.addEventListener('imageLoadError', errorSpy);

    img?.dispatchEvent(new Event('error'));
    await page.waitForChanges();

    expect(errorSpy).toHaveBeenCalledTimes(1);
    expect(errorSpy.mock.calls[0][0].detail.originalEvent).toBeInstanceOf(
      Event
    );
  });

  it('should render with initials when size is xl', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar, ModusWcIcon],
      html: '<modus-wc-avatar alt="User initials" initials="Jane Doe" size="xl"></modus-wc-avatar>',
    });
    const innerDiv = page.root?.querySelector('.modus-wc-avatar > div');

    expect(innerDiv?.classList.contains('modus-wc-w-24')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });
});
