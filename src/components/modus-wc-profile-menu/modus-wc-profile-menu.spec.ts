import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ModusWcProfileMenu } from './modus-wc-profile-menu';

describe('modus-wc-profile-menu', () => {
  const mockProfileProps = {
    profileImageUrl: 'https://example.com/avatar.jpg',
    headerName: 'Test Header',
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
    manageTrimbleIdLink: 'https://example.com/manage',
  };

  it('should render with required props', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with default main menu items', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBeGreaterThan(0);
  });

  it('should render with menuOne', async () => {
    const menuOne = {
      title: 'Menu One',
      items: [
        { label: 'Item 1', icon: 'home', iconVariant: 'solid' as const },
        { label: 'Item 2', icon: 'settings' },
      ],
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps, menuOne }),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with menuTwo', async () => {
    const menuTwo = {
      title: 'Menu Two',
      items: [{ label: 'Item A' }, { label: 'Item B' }],
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps, menuTwo }),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with both menus', async () => {
    const menuOne = {
      title: 'Menu One',
      items: [{ label: 'Item 1', icon: 'home' }],
    };
    const menuTwo = {
      title: 'Menu Two',
      items: [{ label: 'Item A', icon: 'settings' }],
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', {
          profileProps: mockProfileProps,
          menuOne,
          menuTwo,
        }),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render header with user information', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const header = page.root?.querySelector('.profile-menu-header');
    expect(header).not.toBeNull();

    const avatar = header?.querySelector('modus-wc-avatar');
    expect(avatar).not.toBeNull();
    expect(avatar?.getAttribute('img-src')).toBe(
      mockProfileProps.profileImageUrl
    );
    expect(avatar?.getAttribute('alt')).toBe(mockProfileProps.userName);
  });

  it('should render manage Trimble ID link', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const link = page.root?.querySelector('a');
    expect(link?.getAttribute('href')).toBe(
      mockProfileProps.manageTrimbleIdLink
    );
  });

  it('should render footer with copyright', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const footer = page.root?.querySelector('.profile-menu-footer');
    expect(footer).not.toBeNull();
  });

  it('should render sign out menu item', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const signOutItem = Array.from(
      page.root?.querySelectorAll('modus-wc-menu-item') || []
    ).find((item) => item.getAttribute('label') === 'Sign Out');
    expect(signOutItem).not.toBeUndefined();
  });

  it('should render without submenu sections when not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const submenuSections = page.root?.querySelectorAll('.submenu-section');
    // Should only have main menu, not additional submenus
    expect(submenuSections?.length).toBe(1);
  });

  it('should render submenu with title', async () => {
    const menuOne = {
      title: 'Custom Section',
      items: [{ label: 'Item 1' }],
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps, menuOne }),
    });

    const title = page.root?.querySelector(
      '.submenu-section modus-wc-typography'
    );
    expect(title?.getAttribute('label')).toBe('Custom Section');
  });

  it('should render submenu without title', async () => {
    const menuOne = {
      items: [{ label: 'Item 1' }],
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps, menuOne }),
    });

    const submenuSections = page.root?.querySelectorAll('.submenu-section');
    expect(submenuSections?.length).toBeGreaterThan(0);
  });

  it('should render with inherited aria attributes', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', {
          'aria-label': 'Profile menu',
          profileProps: mockProfileProps,
        }),
    });

    expect(page.root?.getAttribute('aria-label')).toBe('Profile menu');
  });

  it('should render menu items with icons', async () => {
    const menuOne = {
      items: [
        { label: 'With Icon', icon: 'home', iconVariant: 'solid' as const },
        { label: 'Without Icon' },
      ],
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps, menuOne }),
    });

    const withIcon = Array.from(
      page.root?.querySelectorAll('modus-wc-menu-item') || []
    ).find((item) => item.getAttribute('label') === 'With Icon');
    const icon = withIcon?.querySelector('modus-wc-icon');
    expect(icon?.getAttribute('name')).toBe('home');
    expect(icon?.getAttribute('variant')).toBe('solid');
  });

  it('should render with correct panel dimensions', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const panel = page.root?.querySelector('modus-wc-panel');
    expect(panel?.getAttribute('width')).toBe('282px');
    expect(panel?.getAttribute('height')).toBe('auto');
  });

  it('should render without optional manageTrimbleIdLink', async () => {
    const propsWithoutLink = {
      ...mockProfileProps,
      manageTrimbleIdLink: undefined,
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: propsWithoutLink }),
    });

    const link = page.root?.querySelector('a');
    expect(link).toBeNull();
  });

  it('should render menu items without icons', async () => {
    const menuOne = {
      items: [{ label: 'No Icon Item' }],
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps, menuOne }),
    });

    const menuItem = Array.from(
      page.root?.querySelectorAll('modus-wc-menu-item') || []
    ).find((item) => item.getAttribute('label') === 'No Icon Item');
    const icon = menuItem?.querySelector('modus-wc-icon');
    expect(icon).toBeNull();
  });

  it('should not render submenu when items array is empty', async () => {
    const menuOne = {
      title: 'Empty Section',
      items: [],
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps, menuOne }),
    });

    const submenuSections = page.root?.querySelectorAll('.submenu-section');
    // Should only have main menu, not the empty submenu
    expect(submenuSections?.length).toBe(1);
  });

  it('should not render submenu when undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', {
          profileProps: mockProfileProps,
          menuOne: undefined,
        }),
    });

    const submenuSections = page.root?.querySelectorAll('.submenu-section');
    // Should only have main menu
    expect(submenuSections?.length).toBe(1);
  });

  it('should render with Profile alt text when userName is empty', async () => {
    const propsWithoutName = {
      ...mockProfileProps,
      userName: '',
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: propsWithoutName }),
    });

    const avatar = page.root?.querySelector('modus-wc-avatar');
    expect(avatar?.getAttribute('alt')).toBe('Profile');
  });
});
