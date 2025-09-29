import { newSpecPage } from '@stencil/core/testing';
import { ModusWcAvatar } from './modus-wc-avatar';

describe('modus-wc-avatar', () => {
  it('should render with no props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
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

  it('should render with initials when imgSrc is not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar alt="User initials" aria-label="User initials" initials="John Doe"></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with initials limited to 3 characters', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar initials="John Michael Doe"></modus-wc-avatar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should return empty string for initials when none are provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAvatar],
      html: '<modus-wc-avatar></modus-wc-avatar>',
    });
    const avatarInstance = page.rootInstance;
    expect(avatarInstance.getUserInitials()).toBe('');
  });
});
