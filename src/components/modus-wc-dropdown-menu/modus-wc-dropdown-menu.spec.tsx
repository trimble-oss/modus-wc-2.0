import { Component, h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ModusWcDropdownMenu } from './modus-wc-dropdown-menu';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcMenu } from '../modus-wc-menu/modus-wc-menu';
import { ModusWcMenuItem } from '../modus-wc-menu-item/modus-wc-menu-item';

@Component({ tag: 'test-host-component', shadow: true })
class TestHostComponent {
  render() {
    return <slot />;
  }
}

type DropdownMenuInternals = {
  menuPositionReady: boolean;
  menuPosition: { x: number; y: number };
  updateMenuPosition: () => Promise<void>;
  buttonRef?: HTMLElement;
  menuRef?: HTMLElement;
};

describe('modus-wc-dropdown-menu', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDropdownMenu, ModusWcButton, ModusWcMenu],
      html: `<modus-wc-dropdown-menu>
                <div slot="button">Button</div>
             </modus-wc-dropdown-menu>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcDropdownMenu, ModusWcButton, ModusWcMenu],
      html: `<modus-wc-dropdown-menu
                button-shape="square"
                button-size="sm"
                button-variant="borderless"
                custom-class="test-class"
                disabled={true}
                menu-bordered={false}
                menu-offset="0"
                menu-placement="right"
                menu-size="sm"
                menu-visible={true}
             >
                <div slot="button">Button</div>
             </modus-wc-dropdown-menu>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with menu items', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-dropdown-menu menu-visible={true}>
                <div slot="button">Button</div>
                <div slot="menu">
                  <modus-wc-menu-item label="Item One" value="1" />
                  <modus-wc-menu-item label="Item Two" value="2" />
                </div>
             </modus-wc-dropdown-menu>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should open menu and close it when click outside', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-dropdown-menu>
                <div slot="button">Button</div>
                <div slot="menu">
                  <modus-wc-menu-item label="Item One" value="1" />
                  <modus-wc-menu-item label="Item Two" value="2" />
                </div>
             </modus-wc-dropdown-menu>`,
    });

    // Open the menu
    const button = page.root!.querySelector('button');
    expect(button?.textContent).toBe('Button');
    button?.click();

    await page.waitForChanges();

    expect(page.root!.menuVisible).toBe(true);

    // Click outside component to close it
    document.dispatchEvent(new MouseEvent('click', { bubbles: true }));

    await page.waitForChanges();

    // Verify menu is now hidden
    expect(page.root!.menuVisible).toBe(false);
  });

  it('should close the menu when escape key is pressed', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-dropdown-menu>
                <div slot="button">Button</div>
                <div slot="menu">
                  <modus-wc-menu-item label="Item One" value="1" />
                  <modus-wc-menu-item label="Item Two" value="2" />
                </div>
             </modus-wc-dropdown-menu>`,
    });

    // Open the menu
    const button = page.root!.querySelector('button');
    expect(button?.textContent).toBe('Button');
    button?.click();

    await page.waitForChanges();

    expect(page.root!.menuVisible).toBe(true);

    // Press escape key to close menu
    page.root!.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
    );

    await page.waitForChanges();

    // Verify menu is now hidden
    expect(page.root!.menuVisible).toBe(false);
  });

  it('should open the menu when clicked within a shadow root host', async () => {
    const page = await newSpecPage({
      components: [
        TestHostComponent,
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<test-host-component>
               <modus-wc-dropdown-menu>
                 <button slot="button">Button</button>
                 <div slot="menu">
                   <modus-wc-menu-item label="Item One" />
                 </div>
               </modus-wc-dropdown-menu>
             </test-host-component>`,
    });

    const dropdownMenu = page.root!.querySelector('modus-wc-dropdown-menu')!;
    expect(dropdownMenu.menuVisible).toBe(false);

    const button = page.root!.querySelector('button')!;

    button.click();
    await page.waitForChanges();

    expect(dropdownMenu.menuVisible).toBe(true);
    const menu = page.root!.querySelector('modus-wc-menu-item')!;

    expect(menu).toBeTruthy();
    expect(menu.textContent).toContain('Item One');
  });

  it('should use fixed positioning when menuStrategy is fixed', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-dropdown-menu menu-strategy="fixed" menu-visible={true}>
                <div slot="button">Button</div>
                <div slot="menu">
                  <modus-wc-menu-item label="Item One" value="1" />
                </div>
             </modus-wc-dropdown-menu>`,
    });

    await page.waitForChanges();

    const menuWrapper = page.root?.querySelector(
      '.menu-wrapper'
    ) as HTMLElement;
    expect(menuWrapper.style.position).toBe('fixed');
  });

  it('should emit menuVisibilityChange when menu visibility toggles', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-dropdown-menu>
                <div slot="button">Button</div>
                <div slot="menu">
                  <modus-wc-menu-item label="Item One" value="1" />
                </div>
             </modus-wc-dropdown-menu>`,
    });

    const visibilitySpy = jest.fn();
    page.root?.addEventListener('menuVisibilityChange', visibilitySpy);

    page.root?.querySelector('button')?.click();
    await page.waitForChanges();

    expect(visibilitySpy).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { isVisible: true } })
    );

    page.root!.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
    );
    await page.waitForChanges();

    expect(visibilitySpy).toHaveBeenLastCalledWith(
      expect.objectContaining({ detail: { isVisible: false } })
    );
  });

  it('should close the menu when the trigger button is clicked again', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-dropdown-menu>
                <div slot="button">Button</div>
                <div slot="menu">
                  <modus-wc-menu-item label="Item One" value="1" />
                </div>
             </modus-wc-dropdown-menu>`,
    });

    const button = page.root!.querySelector('button')!;
    const visibilitySpy = jest.fn();
    page.root?.addEventListener('menuVisibilityChange', visibilitySpy);

    button.click();
    await page.waitForChanges();
    expect(page.root!.menuVisible).toBe(true);

    button.click();
    await page.waitForChanges();

    expect(page.root!.menuVisible).toBe(false);
    expect(visibilitySpy).toHaveBeenLastCalledWith(
      expect.objectContaining({ detail: { isVisible: false } })
    );
  });

  it('should reset menuPositionReady when the menu closes', async () => {
    const page = await newSpecPage({
      components: [ModusWcDropdownMenu, ModusWcButton, ModusWcMenu],
      html: `<modus-wc-dropdown-menu>
                <div slot="button">Button</div>
             </modus-wc-dropdown-menu>`,
    });

    const component = page.rootInstance as unknown as DropdownMenuInternals;

    page.root?.querySelector('button')?.click();
    await page.waitForChanges();
    expect(component.menuPositionReady).toBe(true);

    page.root!.menuVisible = false;
    await page.waitForChanges();
    expect(component.menuPositionReady).toBe(false);
  });

  it('should not update menu position when button or menu refs are missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcDropdownMenu, ModusWcButton, ModusWcMenu],
      html: `<modus-wc-dropdown-menu>
                <div slot="button">Button</div>
             </modus-wc-dropdown-menu>`,
    });

    const component = page.rootInstance as unknown as DropdownMenuInternals;
    component.menuPosition = { x: 1, y: 2 };
    component.buttonRef = undefined;
    await component.updateMenuPosition();
    expect(component.menuPosition).toEqual({ x: 1, y: 2 });

    component.buttonRef = page.root!.querySelector(
      'modus-wc-button'
    ) as HTMLElement;
    component.menuRef = undefined;
    await component.updateMenuPosition();
    expect(component.menuPosition).toEqual({ x: 1, y: 2 });
  });
});
