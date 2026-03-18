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
});
