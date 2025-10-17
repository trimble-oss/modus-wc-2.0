import { newSpecPage } from '@stencil/core/testing';
import { ModusWcMenu } from './modus-wc-menu';
import { ModusWcMenuItem } from '../modus-wc-menu-item/modus-wc-menu-item';

describe('modus-wc-menu', () => {
  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: '<modus-wc-menu aria-label="Default menu"></modus-wc-menu>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: `<modus-wc-menu
        aria-label="Test menu"
        bordered="true"
        custom-class="test-class"
        orientation="horizontal"
        size="lg"
      ></modus-wc-menu>`,
    });

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit menuFocusout', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu, ModusWcMenuItem],
      html: `<modus-wc-menu>
        <modus-wc-menu-item label="label" value="value" />
      </modus-wc-menu>`,
    });

    await page.waitForChanges();

    const component = page.rootInstance;
    const emitSpy = jest.spyOn(component.menuFocusout, 'emit');

    const menu = page.root!.querySelector('ul');

    // Simulate focusout by dispatching the event
    const focusoutEvent = new FocusEvent('focusout', {
      relatedTarget: document.body, // Focus moving outside the menu
    });

    menu?.dispatchEvent(focusoutEvent);
    await page.waitForChanges();

    expect(emitSpy).toHaveBeenCalledWith(focusoutEvent);
  });

  it('should add customClass to classList in submenu mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: `<modus-wc-menu
        is-sub-menu="true"
        custom-class="test-submenu-class"
        aria-label="Submenu test"
      ></modus-wc-menu>`,
    });

    await page.waitForChanges();

    const menu = page.root!.querySelector('ul');
    expect(menu).not.toBeNull();
    expect(menu!.className).toContain('modus-wc-menu-dropdown');
    expect(menu!.className).toContain('test-submenu-class');
    expect(page.root).toMatchSnapshot();
  });
});
