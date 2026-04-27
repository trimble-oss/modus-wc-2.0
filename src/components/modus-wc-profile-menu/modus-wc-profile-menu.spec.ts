import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ModusWcProfileMenu } from './modus-wc-profile-menu';

describe('modus-wc-profile-menu', () => {
  const mockProfileProps = {
    profileImageUrl: 'https://example.com/avatar.jpg',
    headerName: 'Test Header',
    userName: 'John Doe',
    userEmail: 'john.doe@example.com',
    manageTrimbleId: { link: 'https://example.com/manage' },
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
      mockProfileProps.manageTrimbleId.link
    );
  });

  it('should render typography without anchor when manageTrimbleId is not provided', async () => {
    const propsWithoutTrimbleId = {
      profileImageUrl: mockProfileProps.profileImageUrl,
      headerName: mockProfileProps.headerName,
      userName: mockProfileProps.userName,
      userEmail: mockProfileProps.userEmail,
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: propsWithoutTrimbleId }),
    });

    const link = page.root?.querySelector('a');
    expect(link).toBeNull();

    const manageTypography = Array.from(
      page.root?.querySelectorAll('modus-wc-typography') || []
    ).find((el) => el.getAttribute('label') === 'Manage my Trimble ID');
    expect(manageTypography).not.toBeUndefined();
  });

  it('should apply rel="noopener noreferrer" automatically when target is _blank', async () => {
    const props = {
      ...mockProfileProps,
      manageTrimbleId: {
        link: 'https://example.com/manage',
        target: '_blank' as const,
      },
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () => h('modus-wc-profile-menu', { profileProps: props }),
    });

    const link = page.root?.querySelector('a');
    expect(link?.getAttribute('rel')).toBe('noopener noreferrer');
  });

  it('should use explicit rel when provided, overriding auto-apply', async () => {
    const props = {
      ...mockProfileProps,
      manageTrimbleId: {
        link: 'https://example.com/manage',
        target: '_blank' as const,
        rel: 'noopener',
      },
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () => h('modus-wc-profile-menu', { profileProps: props }),
    });

    const link = page.root?.querySelector('a');
    expect(link?.getAttribute('rel')).toBe('noopener');
  });

  it('should not apply rel when target is not _blank and no explicit rel', async () => {
    const props = {
      ...mockProfileProps,
      manageTrimbleId: {
        link: 'https://example.com/manage',
        target: '_self' as const,
      },
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () => h('modus-wc-profile-menu', { profileProps: props }),
    });

    const link = page.root?.querySelector('a');
    expect(link?.getAttribute('rel')).toBeNull();
  });

  it('should not render an anchor for unsafe manageTrimbleId link protocols', async () => {
    const props = {
      ...mockProfileProps,
      manageTrimbleId: {
        link: 'javascript:alert(1)',
      },
    };

    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () => h('modus-wc-profile-menu', { profileProps: props }),
    });

    const link = page.root?.querySelector('a');
    expect(link).toBeNull();
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
    const mainMenuSection = page.root?.querySelectorAll('.main-menu-section');
    // Should have main menu but no additional submenus
    expect(mainMenuSection?.length).toBe(1);
    expect(submenuSections?.length).toBe(0);
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
    expect(panel?.getAttribute('width')).toBe('298px');
    expect(panel?.getAttribute('height')).toBe('auto');
  });

  it('should render without optional manageTrimbleId', async () => {
    const propsWithoutLink = {
      profileImageUrl: mockProfileProps.profileImageUrl,
      headerName: mockProfileProps.headerName,
      userName: mockProfileProps.userName,
      userEmail: mockProfileProps.userEmail,
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
    const mainMenuSection = page.root?.querySelectorAll('.main-menu-section');
    // Should have main menu but not the empty submenu
    expect(mainMenuSection?.length).toBe(1);
    expect(submenuSections?.length).toBe(0);
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
    const mainMenuSection = page.root?.querySelectorAll('.main-menu-section');
    // Should have main menu but no submenus
    expect(mainMenuSection?.length).toBe(1);
    expect(submenuSections?.length).toBe(0);
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

  it('should emit menuItemClick event when handleMenuItemClick is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const menuItemClickSpy = jest.fn();
    page.root?.addEventListener('menuItemClick', menuItemClickSpy);

    const component = page.rootInstance as ModusWcProfileMenu;
    component['handleMenuItemClick']('my-profile');
    await page.waitForChanges();

    expect(menuItemClickSpy).toHaveBeenCalledTimes(1);
    expect(menuItemClickSpy.mock.calls[0][0].detail).toBe('my-profile');
  });

  it('should emit signOutClick event when sign out is triggered', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const signOutSpy = jest.fn();
    page.root?.addEventListener('signOutClick', signOutSpy);

    const component = page.rootInstance as ModusWcProfileMenu;
    component.signOutClick.emit();
    await page.waitForChanges();

    expect(signOutSpy).toHaveBeenCalledTimes(1);
  });

  it('should emit signOutClick event when sign out menu item triggers itemSelect', async () => {
    const page = await newSpecPage({
      components: [ModusWcProfileMenu],
      template: () =>
        h('modus-wc-profile-menu', { profileProps: mockProfileProps }),
    });

    const signOutSpy = jest.fn();
    page.root?.addEventListener('signOutClick', signOutSpy);

    const signOutItem = Array.from(
      page.root?.querySelectorAll('modus-wc-menu-item') || []
    ).find((item) => item.getAttribute('label') === 'Sign Out');

    signOutItem?.dispatchEvent(
      new CustomEvent('itemSelect', { bubbles: true })
    );
    await page.waitForChanges();

    expect(signOutSpy).toHaveBeenCalledTimes(1);
  });
});
