import { newSpecPage } from '@stencil/core/testing';
import { ModusWcNavbar } from './modus-wc-navbar';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcLogo } from '../modus-wc-logo/modus-wc-logo';
import { ModusWcToolbar } from '../modus-wc-toolbar/modus-wc-toolbar';

describe('modus-wc-navbar', () => {
  beforeAll(() => {
    // Create a mock implementation of MutationObserver
    // eslint-disable-next-line no-undef
    global.MutationObserver = class {
      observe = jest.fn();
      disconnect = jest.fn();
      takeRecords = jest.fn();
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      constructor(_callback) {}
    };
  });

  afterAll(() => {
    // Remove the mock
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    // eslint-disable-next-line no-undef
    delete global.MutationObserver;
  });

  it('should render with no props', async () => {
    const page = await newSpecPage({
      components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton],
      html: '<modus-wc-navbar></modus-wc-navbar>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props and slots', async () => {
    const page = await newSpecPage({
      components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton],
      html: `<modus-wc-navbar custom-class="test-class">
              <div slot="start">Start</div>
              <div slot="center">Center</div>
              <div slot="end">End</div>
            </modus-wc-navbar>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it.each([
    { isLight: true, theme: 'light' },
    { isLight: false, theme: 'dark' },
  ])(
    'should render the Trimble AI icon in $theme theme',
    async ({ isLight }) => {
      const page = await newSpecPage({
        components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton],
        html: '<modus-wc-navbar></modus-wc-navbar>',
      });
      page.rootInstance.visibility = {
        ...page.rootInstance.visibility,
        ai: true,
      };
      page.rootInstance.isLight = isLight;
      await page.waitForChanges();

      const icon = page.root?.querySelector('.ai svg');
      expect(icon?.getAttribute('viewBox')).toBe('1.5 2.5 27.5 27.5');
      expect(icon?.querySelector('mask')).not.toBeNull();
      expect(icon?.querySelector('radialGradient')).not.toBeNull();
    }
  );

  it('should not render logo when visibility.logo is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton],
      html: '<modus-wc-navbar></modus-wc-navbar>',
    });
    page.rootInstance.visibility = {
      ...page.rootInstance.visibility,
      logo: false,
    };
    await page.waitForChanges();
    expect(page.root?.querySelector('modus-wc-logo')).toBeNull();
  });

  it('should hide the logo from assistive technology when the button already names it', async () => {
    const page = await newSpecPage({
      components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton, ModusWcLogo],
      html: '<modus-wc-navbar></modus-wc-navbar>',
    });

    const button = page.root?.querySelector('button.logo');
    const logo = page.root?.querySelector('.modus-wc-logo');

    expect(button?.getAttribute('aria-label')).toBe('Trimble logo');
    expect(logo?.getAttribute('aria-hidden')).toBe('true');
    expect(logo?.getAttribute('role')).toBeNull();
    expect(logo?.getAttribute('aria-label')).toBeNull();
  });

  it('should expose whether the main menu is open and which panel it controls', async () => {
    const page = await newSpecPage({
      components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton],
      html: '<modus-wc-navbar></modus-wc-navbar>',
    });

    page.rootInstance.visibility = {
      ...page.rootInstance.visibility,
      mainMenu: true,
    };
    await page.waitForChanges();

    const button = page.root?.querySelector(
      'modus-wc-button[aria-label="Main menu"] button'
    );
    const panel = page.root?.querySelector('.main-menu');

    expect(panel?.id).toBe('modus-wc-navbar-main-menu-test-random-id');
    expect(button?.getAttribute('aria-expanded')).toBe('false');
    expect(button?.getAttribute('aria-controls')).toBe(panel?.id);

    page.rootInstance.mainMenuOpen = true;
    await page.waitForChanges();

    expect(button?.getAttribute('aria-expanded')).toBe('true');
    expect(button?.getAttribute('aria-controls')).toBe(panel?.id);
  });

  it('should point the main menu button at a side navigation panel and follow its expanded state', async () => {
    const page = await newSpecPage({
      components: [ModusWcNavbar, ModusWcToolbar, ModusWcButton],
      html: '<modus-wc-navbar main-menu-controls="side-nav-panel"></modus-wc-navbar>',
    });

    const sideNav = document.createElement('modus-wc-side-navigation');
    (sideNav as HTMLElement & { expanded: boolean }).expanded = false;
    const panel = document.createElement('nav');
    panel.id = 'side-nav-panel';
    sideNav.appendChild(panel);
    document.body.appendChild(sideNav);

    page.rootInstance.visibility = {
      ...page.rootInstance.visibility,
      mainMenu: true,
    };
    page.rootInstance.bindMainMenuControls();
    await page.waitForChanges();

    const button = page.root?.querySelector(
      'modus-wc-button[aria-label="Main menu"] button'
    );
    expect(button?.getAttribute('aria-controls')).toBe('side-nav-panel');
    expect(button?.getAttribute('aria-expanded')).toBe('false');

    sideNav.dispatchEvent(
      new CustomEvent('expandedChange', { detail: true, bubbles: true })
    );
    await page.waitForChanges();
    expect(button?.getAttribute('aria-expanded')).toBe('true');

    page.rootInstance.toggleMainMenu();
    expect((sideNav as HTMLElement & { expanded: boolean }).expanded).toBe(
      false
    );

    sideNav.remove();
  });
});
