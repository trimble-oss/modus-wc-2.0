import { Component, h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { ModusWcDropdownMenu } from './modus-wc-dropdown-menu';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcLoader } from '../modus-wc-loader/modus-wc-loader';
import { ModusWcMenu } from '../modus-wc-menu/modus-wc-menu';
import { ModusWcMenuItem } from '../modus-wc-menu-item/modus-wc-menu-item';

@Component({ tag: 'test-host-component', shadow: true })
class TestHostComponent {
  render() {
    return <slot />;
  }
}

type DropdownMenuInternals = {
  setupMenuSlotObserver: () => void;
  syncMenuLoadState: () => void;
  menuSize?: ModusWcDropdownMenu['menuSize'];
};

function createChildListMutation(
  target: Node,
  addedNodes: Node[] = [],
  removedNodes: Node[] = []
): MutationRecord {
  return {
    type: 'childList',
    target,
    addedNodes: addedNodes as unknown as NodeList,
    removedNodes: removedNodes as unknown as NodeList,
    attributeName: null,
    attributeNamespace: null,
    nextSibling: null,
    oldValue: null,
    previousSibling: null,
  };
}

function createAttributesMutation(target: Node): MutationRecord {
  return {
    type: 'attributes',
    target,
    addedNodes: [] as unknown as NodeList,
    removedNodes: [] as unknown as NodeList,
    attributeName: 'class',
    attributeNamespace: null,
    nextSibling: null,
    oldValue: null,
    previousSibling: null,
  };
}

function installMutationObserverMock(): {
  disconnectMock: jest.Mock;
  observeMock: jest.Mock;
  trigger: (mutations?: MutationRecord[]) => void;
  restore: () => void;
} {
  const original = globalThis.MutationObserver;
  let callback: MutationCallback | undefined;
  const disconnectMock = jest.fn();
  const observeMock = jest.fn();
  const observerRef: { current?: MutationObserver } = {};

  class MockMutationObserver implements MutationObserver {
    constructor(cb: MutationCallback) {
      callback = cb;
      observerRef.current = this;
    }

    disconnect = disconnectMock;
    observe = observeMock;
    takeRecords = jest.fn(() => []);
  }

  globalThis.MutationObserver = MockMutationObserver;

  return {
    disconnectMock,
    observeMock,
    trigger: (mutations: MutationRecord[] = []) => {
      if (callback && observerRef.current) {
        callback(mutations, observerRef.current);
      }
    },
    restore: () => {
      globalThis.MutationObserver = original;
    },
  };
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

  it('should not emit menuLoad when menu slot already has content', async () => {
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

    const menuLoadSpy = jest.fn();
    page.root?.addEventListener('menuLoad', menuLoadSpy);

    page.root?.querySelector('button')?.click();
    await page.waitForChanges();

    expect(menuLoadSpy).not.toHaveBeenCalled();
  });

  it('should emit menuLoad once on first open when menu slot is empty', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcLoader,
      ],
      html: `<modus-wc-dropdown-menu>
                <div slot="button">Button</div>
             </modus-wc-dropdown-menu>`,
    });

    const menuLoadSpy = jest.fn();
    page.root?.addEventListener('menuLoad', menuLoadSpy);

    page.root?.querySelector('button')?.click();
    await page.waitForChanges();

    expect(menuLoadSpy).toHaveBeenCalledTimes(1);
    expect(menuLoadSpy).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { reason: 'open' } })
    );
    expect(
      page.root?.querySelector(
        '.modus-wc-dropdown-menu-loading modus-wc-loader'
      )
    ).not.toBeNull();

    page.root!.menuVisible = false;
    await page.waitForChanges();

    page.root!.menuVisible = true;
    await page.waitForChanges();

    expect(menuLoadSpy).toHaveBeenCalledTimes(1);
  });

  it('should show loading UI and hide menu slot while menu items are pending', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
        ModusWcLoader,
      ],
      html: `<modus-wc-dropdown-menu menu-visible="true">
                <div slot="button">Button</div>
             </modus-wc-dropdown-menu>`,
    });

    await page.waitForChanges();

    expect(
      page.root?.querySelector(
        '.modus-wc-dropdown-menu-loading modus-wc-loader'
      )
    ).not.toBeNull();
    const menuContent = page.root?.querySelector(
      '.modus-wc-dropdown-menu-menu-content'
    );
    expect(
      menuContent?.classList.contains(
        'modus-wc-dropdown-menu-menu-content--hidden'
      )
    ).toBe(true);
  });

  it('should render menu items and clear loading once menu slot is populated', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
        ModusWcLoader,
      ],
      html: `<modus-wc-dropdown-menu menu-visible="true">
                <div slot="button">Button</div>
             </modus-wc-dropdown-menu>`,
    });

    await page.waitForChanges();

    const menuSlot = document.createElement('div');
    menuSlot.setAttribute('slot', 'menu');
    const item = document.createElement('modus-wc-menu-item');
    item.setAttribute('label', 'Item One');
    item.setAttribute('value', '1');
    menuSlot.appendChild(item);
    page.root?.appendChild(menuSlot);
    await page.rootInstance.refreshLazyMenu();
    await page.waitForChanges();

    expect(
      page.root?.querySelector('modus-wc-menu ul modus-wc-menu-item')
    ).not.toBeNull();
    expect(
      page.root?.querySelector('.modus-wc-dropdown-menu-loading')
    ).toBeNull();
  });

  it('should emit menuLoad again after menu slot content is removed', async () => {
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

    const menuLoadSpy = jest.fn();
    page.root?.addEventListener('menuLoad', menuLoadSpy);

    page.root!.menuVisible = true;
    await page.waitForChanges();
    expect(menuLoadSpy).not.toHaveBeenCalled();

    page.root?.querySelector('[slot="menu"]')?.remove();
    await page.waitForChanges();

    page.root!.menuVisible = false;
    await page.waitForChanges();
    page.root!.menuVisible = true;
    await page.waitForChanges();

    expect(menuLoadSpy).toHaveBeenCalledTimes(1);
  });

  it('should detect menu content from a direct slotted menu item', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-dropdown-menu menu-visible="true">
                <div slot="button">Button</div>
                <modus-wc-menu-item slot="menu" label="Item One" value="1" />
             </modus-wc-dropdown-menu>`,
    });

    await page.waitForChanges();

    expect(
      page.root?.querySelector('.modus-wc-dropdown-menu-loading')
    ).toBeNull();
    expect(
      page.root?.querySelector('.modus-wc-dropdown-menu-menu-content--hidden')
    ).toBeNull();
  });

  it('should detect menu content from text-only slot markup', async () => {
    const page = await newSpecPage({
      components: [ModusWcDropdownMenu, ModusWcButton, ModusWcMenu],
      html: `<modus-wc-dropdown-menu menu-visible="true">
                <div slot="button">Button</div>
                <div slot="menu">Pending items</div>
             </modus-wc-dropdown-menu>`,
    });

    await page.waitForChanges();

    expect(
      page.root?.querySelector('.modus-wc-dropdown-menu-loading')
    ).toBeNull();
  });

  it('should observe menu slot mutations and disconnect on teardown', async () => {
    const observer = installMutationObserverMock();

    try {
      const page = await newSpecPage({
        components: [
          ModusWcDropdownMenu,
          ModusWcButton,
          ModusWcMenu,
          ModusWcLoader,
        ],
        html: `<modus-wc-dropdown-menu menu-visible="true">
                  <div slot="button">Button</div>
               </modus-wc-dropdown-menu>`,
      });

      await page.waitForChanges();

      expect(observer.observeMock).toHaveBeenCalledWith(
        page.root,
        expect.objectContaining({ childList: true, subtree: true })
      );

      const component = page.rootInstance as unknown as DropdownMenuInternals;
      component.setupMenuSlotObserver();
      expect(observer.disconnectMock).toHaveBeenCalled();

      observer.trigger();
      await page.waitForChanges();
      expect(
        page.root?.querySelector('.modus-wc-dropdown-menu-loading')
      ).not.toBeNull();

      const menuSlot = document.createElement('div');
      menuSlot.setAttribute('slot', 'menu');
      const item = document.createElement('modus-wc-menu-item');
      item.setAttribute('label', 'Item One');
      item.setAttribute('value', '1');
      menuSlot.appendChild(item);
      page.root?.appendChild(menuSlot);

      observer.trigger([createChildListMutation(page.root!, [menuSlot])]);
      await page.waitForChanges();

      expect(
        page.root?.querySelector('.modus-wc-dropdown-menu-loading')
      ).toBeNull();

      page.root?.remove();
      await page.waitForChanges();

      expect(observer.disconnectMock).toHaveBeenCalledTimes(2);
    } finally {
      observer.restore();
    }
  });

  it('should skip menu slot observation when MutationObserver is unavailable', async () => {
    const original = globalThis.MutationObserver;
    Object.defineProperty(globalThis, 'MutationObserver', {
      configurable: true,
      value: undefined,
    });

    try {
      const page = await newSpecPage({
        components: [ModusWcDropdownMenu, ModusWcButton, ModusWcMenu],
        html: `<modus-wc-dropdown-menu>
                  <div slot="button">Button</div>
               </modus-wc-dropdown-menu>`,
      });

      await page.waitForChanges();
      expect(() =>
        (
          page.rootInstance as unknown as DropdownMenuInternals
        ).setupMenuSlotObserver()
      ).not.toThrow();
      page.root?.remove();
      await page.waitForChanges();
    } finally {
      Object.defineProperty(globalThis, 'MutationObserver', {
        configurable: true,
        value: original,
      });
    }
  });

  it('should reset lazy-load state after menu content is removed', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcMenuItem,
      ],
      html: `<modus-wc-dropdown-menu menu-visible="true">
                <div slot="button">Button</div>
                <div slot="menu">
                  <modus-wc-menu-item label="Item One" value="1" />
                </div>
             </modus-wc-dropdown-menu>`,
    });

    await page.waitForChanges();

    page.root?.querySelector('[slot="menu"]')?.remove();
    await page.rootInstance.refreshLazyMenu();
    await page.waitForChanges();

    expect(
      page.root?.querySelector(
        '.modus-wc-dropdown-menu-loading modus-wc-loader'
      )
    ).not.toBeNull();
  });

  it('should use the default loader size when menuSize is unset', async () => {
    const page = await newSpecPage({
      components: [ModusWcDropdownMenu, ModusWcButton, ModusWcMenu],
      html: `<modus-wc-dropdown-menu>
                <div slot="button">Button</div>
             </modus-wc-dropdown-menu>`,
    });

    const getLoaderSize = (
      page.rootInstance as unknown as { getLoaderSize: () => string }
    ).getLoaderSize;

    expect(getLoaderSize.call({ menuSize: undefined })).toBe('md');
  });

  it('should treat an empty slot root without text content as unloaded', async () => {
    const page = await newSpecPage({
      components: [
        ModusWcDropdownMenu,
        ModusWcButton,
        ModusWcMenu,
        ModusWcLoader,
      ],
      html: `<modus-wc-dropdown-menu menu-visible="true">
                <div slot="button">Button</div>
                <div slot="menu"></div>
             </modus-wc-dropdown-menu>`,
    });

    const slotRoot = page.root?.querySelector('[slot="menu"]') as HTMLElement;
    Object.defineProperty(slotRoot, 'textContent', {
      configurable: true,
      get: () => null,
    });
    await page.rootInstance.refreshLazyMenu();
    await page.waitForChanges();

    expect(
      page.root?.querySelector(
        '.modus-wc-dropdown-menu-loading modus-wc-loader'
      )
    ).not.toBeNull();
  });

  it('should only react to childList mutations on menu slot nodes', async () => {
    const observer = installMutationObserverMock();

    try {
      const page = await newSpecPage({
        components: [
          ModusWcDropdownMenu,
          ModusWcButton,
          ModusWcMenu,
          ModusWcMenuItem,
          ModusWcLoader,
        ],
        html: `<modus-wc-dropdown-menu menu-visible="true">
                  <div slot="button">Button</div>
                  <div slot="menu" id="menu-slot-root"></div>
                  <modus-wc-menu-item slot="menu" label="Direct" value="direct"></modus-wc-menu-item>
               </modus-wc-dropdown-menu>`,
      });

      await page.waitForChanges();

      const component = page.rootInstance as unknown as {
        isMenuSlotNode: (node: Node) => boolean;
        isMenuSlotMutation: (mutations: MutationRecord[]) => boolean;
      };

      expect(component.isMenuSlotNode(document.createTextNode('x'))).toBe(
        false
      );

      const directMenuItem = page.root?.querySelector(
        'modus-wc-menu-item[slot="menu"]'
      ) as HTMLElement;
      expect(component.isMenuSlotNode(directMenuItem)).toBe(true);

      const menuSlot = page.root?.querySelector(
        '#menu-slot-root'
      ) as HTMLElement;
      expect(component.isMenuSlotNode(menuSlot)).toBe(true);
      expect(
        component.isMenuSlotMutation([createChildListMutation(menuSlot)])
      ).toBe(true);
      expect(
        component.isMenuSlotMutation([createAttributesMutation(page.root!)])
      ).toBe(false);

      const nestedItem = document.createElement('modus-wc-menu-item');
      nestedItem.setAttribute('label', 'Nested');
      nestedItem.setAttribute('value', 'nested');
      expect(component.isMenuSlotNode(nestedItem)).toBe(false);
      menuSlot.appendChild(nestedItem);
      expect(component.isMenuSlotNode(nestedItem)).toBe(true);
      expect(
        component.isMenuSlotMutation([
          createChildListMutation(menuSlot, [nestedItem]),
        ])
      ).toBe(true);

      const emptyPage = await newSpecPage({
        components: [
          ModusWcDropdownMenu,
          ModusWcButton,
          ModusWcMenu,
          ModusWcLoader,
        ],
        html: `<modus-wc-dropdown-menu menu-visible="true">
                  <div slot="button">Button</div>
               </modus-wc-dropdown-menu>`,
      });
      await emptyPage.waitForChanges();

      observer.trigger([createAttributesMutation(emptyPage.root!)]);
      await emptyPage.waitForChanges();
      expect(
        emptyPage.root?.querySelector(
          '.modus-wc-dropdown-menu-loading modus-wc-loader'
        )
      ).not.toBeNull();

      const lazyMenuItem = document.createElement('modus-wc-menu-item');
      lazyMenuItem.setAttribute('slot', 'menu');
      lazyMenuItem.setAttribute('label', 'Lazy');
      lazyMenuItem.setAttribute('value', 'lazy');
      emptyPage.root?.appendChild(lazyMenuItem);
      observer.trigger([createChildListMutation(lazyMenuItem)]);
      await emptyPage.waitForChanges();
      expect(
        emptyPage.root?.querySelector('.modus-wc-dropdown-menu-loading')
      ).toBeNull();
    } finally {
      observer.restore();
    }
  });
});
