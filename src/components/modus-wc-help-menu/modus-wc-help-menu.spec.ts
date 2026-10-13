import { newSpecPage } from '@stencil/core/testing';
import { ModusWcHelpMenu } from './modus-wc-help-menu';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWcMenu } from '../modus-wc-menu/modus-wc-menu';
import { ModusWcMenuItem } from '../modus-wc-menu-item/modus-wc-menu-item';

const markup = `
  <modus-wc-help-menu>
    <modus-wc-menu-item label="Help" value="help">
      <modus-wc-icon slot="start-icon" name="help"></modus-wc-icon>
      <modus-wc-menu slot="panel">
        <modus-wc-menu-item label="Trimble Help" value="trimble-help">
          <modus-wc-icon slot="start-icon" name="help"></modus-wc-icon>
        </modus-wc-menu-item>
        <modus-wc-menu-item label="Product Guides" value="product-guides">
          <modus-wc-icon slot="start-icon" name="user_guide"></modus-wc-icon>
          <modus-wc-menu slot="panel">
            <modus-wc-menu-item label="Installation" value="installation">
              <modus-wc-icon slot="start-icon" name="download"></modus-wc-icon>
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-menu>
    </modus-wc-menu-item>
    <modus-wc-menu-item label="About" value="about">
      <modus-wc-icon slot="start-icon" name="info"></modus-wc-icon>
    </modus-wc-menu-item>
    <modus-wc-menu-item has-submenu label="More" value="more">
      <modus-wc-icon slot="start-icon" name="more_vertical"></modus-wc-icon>
      <div class="modus-wc-menu-dropdown"></div>
    </modus-wc-menu-item>
  </modus-wc-help-menu>
`;

const components = [ModusWcHelpMenu, ModusWcMenuItem, ModusWcMenu, ModusWcIcon];

const itemByLabel = (root: HTMLElement, label: string) =>
  Array.from(root.querySelectorAll('modus-wc-menu-item')).find(
    (item) => (item as HTMLElement & { label?: string }).label === label
  ) as HTMLElement;

const rowButton = (item: HTMLElement) => {
  const li = Array.from(item.children).find((child) => child.tagName === 'LI');
  return li?.querySelector('button') as HTMLButtonElement;
};

const mockPrefersReducedMotionMedia = (matches: boolean): MediaQueryList =>
  ({
    matches,
    media: '(prefers-reduced-motion: reduce)',
    onchange: null,
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    addListener: jest.fn(),
    removeListener: jest.fn(),
    dispatchEvent: jest.fn(),
  }) as MediaQueryList;

const rowLi = (item: HTMLElement) =>
  Array.from(item.children).find((child) => child.tagName === 'LI') as
    | HTMLElement
    | undefined;

const keydown = (host: HTMLElement, key: string, target?: EventTarget) => {
  const event = new KeyboardEvent('keydown', {
    key,
    bubbles: true,
    cancelable: true,
  });
  (target ?? host).dispatchEvent(event);
};

describe('modus-wc-help-menu', () => {
  it('should show a right chevron only on panel items', async () => {
    const page = await newSpecPage({ components, html: markup });
    const help = itemByLabel(page.root!, 'Help');
    const about = itemByLabel(page.root!, 'About');
    const more = itemByLabel(page.root!, 'More');

    expect(
      help.querySelector('.modus-wc-help-menu-chevron')?.getAttribute('name')
    ).toBe('chevron_right');
    expect(about.querySelector('.modus-wc-help-menu-chevron')).toBeNull();
    expect(more.querySelector('.modus-wc-help-menu-chevron')).toBeNull();
  });

  it('should open a panel whose title is the parent label without an icon', async () => {
    const page = await newSpecPage({ components, html: markup });
    const help = itemByLabel(page.root!, 'Help');
    rowButton(help).click();
    await page.waitForChanges();

    const title = page.root!.querySelector('.modus-wc-help-menu-title');
    expect(title?.textContent).toBe('Help');
    expect(title?.querySelector('modus-wc-icon')).toBeNull();
    expect(page.root!.textContent).toContain('Trimble Help');
    expect(help.querySelector('[slot="panel"]')?.hasAttribute('hidden')).toBe(
      false
    );
    expect(help.classList.contains('modus-wc-help-menu-stack-parent')).toBe(
      true
    );
    expect(page.root!.textContent).not.toMatch(
      /Overview[\s\S]*Getting Started/
    );
  });

  it('should show nested panel children when drilling multiple levels', async () => {
    const page = await newSpecPage({ components, html: markup });
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();
    rowButton(itemByLabel(page.root!, 'Product Guides')).click();
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-help-menu-title')?.textContent
    ).toBe('Product Guides');
    const installation = itemByLabel(page.root!, 'Installation');
    expect(installation.hidden).toBe(false);
    expect(rowButton(installation)).toBeTruthy();
  });

  it('should return to the parent panel when Back is pressed', async () => {
    const page = await newSpecPage({ components, html: markup });
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();

    rowButton(itemByLabel(page.root!, 'Product Guides')).click();
    await page.waitForChanges();
    expect(
      page.root!.querySelector('.modus-wc-help-menu-title')?.textContent
    ).toBe('Product Guides');

    rowButton(page.root!.querySelector('.modus-wc-help-menu-back')!).click();
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-help-menu-title')?.textContent
    ).toBe('Help');
  });

  it('should show panel children immediately after the first drill', async () => {
    const page = await newSpecPage({
      components,
      html: `
      <modus-wc-help-menu>
        <modus-wc-menu-item label="Getting Started" value="getting-started">
          <modus-wc-icon slot="start-icon" name="apps"></modus-wc-icon>
          <modus-wc-menu slot="panel">
            <modus-wc-menu-item label="Overview" value="overview">
              <modus-wc-icon slot="start-icon" name="bar_graph"></modus-wc-icon>
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-help-menu>
    `,
    });
    rowButton(itemByLabel(page.root!, 'Getting Started')).click();
    await page.waitForChanges();
    await new Promise((resolve) => requestAnimationFrame(resolve));
    await page.waitForChanges();

    const overview = itemByLabel(page.root!, 'Overview');
    expect(overview).toBeTruthy();
    expect(overview.hidden).toBe(false);
    expect(rowButton(overview)).toBeTruthy();
  });

  it('should keep a leaf visible after it is selected inside a panel', async () => {
    const page = await newSpecPage({ components, html: markup });
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();

    const trimbleHelp = itemByLabel(page.root!, 'Trimble Help');
    rowButton(trimbleHelp).click();
    await page.waitForChanges();
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-help-menu-title')?.textContent
    ).toBe('Help');
    expect(trimbleHelp.hidden).toBe(false);
    const trimbleRow = Array.from(trimbleHelp.children).find(
      (child) => child.tagName === 'LI'
    ) as HTMLElement;
    expect(trimbleRow?.hidden).not.toBe(true);
  });

  it('should emit itemSelect for a leaf and not open a panel', async () => {
    const page = await newSpecPage({ components, html: markup });
    const about = itemByLabel(page.root!, 'About');
    const selected = jest.fn();
    about.addEventListener('itemSelect', selected);

    rowButton(about).click();
    await page.waitForChanges();

    expect(selected).toHaveBeenCalled();
    expect((about as HTMLElement & { selected?: boolean }).selected).toBe(
      false
    );
    expect(rowLi(about)?.classList.contains('modus-wc-menu-item-active')).toBe(
      false
    );
    expect(page.root!.querySelector('.modus-wc-help-menu-title')).toBeNull();
    expect(about.querySelector('.modus-wc-help-menu-chevron')).toBeNull();
  });

  it('should reset to the root items', async () => {
    const page = await newSpecPage({ components, html: markup });
    const helpMenu = page.root as HTMLElement & {
      reset: () => Promise<void>;
    };
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();

    const done = helpMenu.reset();
    await page.waitForChanges();
    await page.waitForChanges();
    await done;

    expect(page.root!.querySelector('.modus-wc-help-menu-title')).toBeNull();
    expect(itemByLabel(page.root!, 'About').hidden).toBe(false);
  });

  it('should inherit menu size from the closest surface menu', async () => {
    const page = await newSpecPage({
      components,
      html: `<modus-wc-menu size="sm">${markup}</modus-wc-menu>`,
    });
    const helpHost = page.root!.querySelector('modus-wc-help-menu')!;
    rowButton(itemByLabel(helpHost, 'Help')).click();
    await page.waitForChanges();

    const backItem = helpHost.querySelector(
      '.modus-wc-help-menu-back'
    ) as HTMLElement & { size?: string };
    expect(backItem.size).toBe('sm');
  });

  it('should ignore Escape and ArrowLeft at the root level', async () => {
    const page = await newSpecPage({ components, html: markup });
    keydown(page.root!, 'Escape');
    keydown(page.root!, 'ArrowLeft');
    await page.waitForChanges();

    expect(page.root!.querySelector('.modus-wc-help-menu-title')).toBeNull();
  });

  it('should return to the parent panel when Escape or ArrowLeft is pressed', async () => {
    const page = await newSpecPage({ components, html: markup });
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();

    keydown(page.root!, 'Escape');
    await page.waitForChanges();

    expect(page.root!.querySelector('.modus-wc-help-menu-title')).toBeNull();
    expect(itemByLabel(page.root!, 'About').hidden).toBe(false);

    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();
    rowButton(itemByLabel(page.root!, 'Product Guides')).click();
    await page.waitForChanges();

    keydown(page.root!, 'ArrowLeft');
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-help-menu-title')?.textContent
    ).toBe('Help');
  });

  it('should move focus with arrow keys inside a drilled panel', async () => {
    const page = await newSpecPage({ components, html: markup });
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcHelpMenu;
    const moveFocus = (direction: 1 | -1) =>
      (
        component as unknown as {
          moveFocus: (direction: 1 | -1) => void;
        }
      ).moveFocus.call(component, direction);
    const backButton = page.root!.querySelector(
      '.modus-wc-help-menu-back button'
    ) as HTMLButtonElement;
    const trimbleLi = rowLi(itemByLabel(page.root!, 'Trimble Help'))!;
    const backFocus = jest.spyOn(backButton, 'focus');
    const trimbleFocus = jest.spyOn(trimbleLi, 'focus');

    moveFocus(1);
    expect(backFocus).toHaveBeenCalled();

    let activeElement: Element | null = backButton;
    const activeDescriptor = Object.getOwnPropertyDescriptor(
      document,
      'activeElement'
    );
    Object.defineProperty(document, 'activeElement', {
      configurable: true,
      get: () => activeElement,
    });

    moveFocus(1);
    expect(trimbleFocus).toHaveBeenCalled();

    activeElement = trimbleLi;
    moveFocus(-1);
    expect(backFocus).toHaveBeenCalledTimes(2);

    if (activeDescriptor) {
      Object.defineProperty(document, 'activeElement', activeDescriptor);
    }
    backFocus.mockRestore();
    trimbleFocus.mockRestore();
  });

  it('should no-op moveFocus when there are no focusable rows', async () => {
    const page = await newSpecPage({
      components,
      html: '<modus-wc-help-menu></modus-wc-help-menu>',
    });
    const component = page.rootInstance as ModusWcHelpMenu;
    const moveFocus = (direction: 1 | -1) =>
      (
        component as unknown as {
          moveFocus: (direction: 1 | -1) => void;
        }
      ).moveFocus.call(component, direction);

    expect(() => moveFocus(1)).not.toThrow();
  });

  it('should route ArrowDown and ArrowUp through the keydown handler', async () => {
    const page = await newSpecPage({ components, html: markup });
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcHelpMenu;
    const moveFocus = jest.spyOn(
      component as unknown as { moveFocus: (direction: 1 | -1) => void },
      'moveFocus'
    );

    keydown(page.root!, 'ArrowDown');
    keydown(page.root!, 'ArrowUp');

    expect(moveFocus).toHaveBeenCalledWith(1);
    expect(moveFocus).toHaveBeenCalledWith(-1);
    moveFocus.mockRestore();
  });

  it('should open a drill item when Enter or Space is pressed', async () => {
    const page = await newSpecPage({ components, html: markup });
    const help = itemByLabel(page.root!, 'Help');
    const helpButton = rowButton(help);

    keydown(page.root!, 'Enter', helpButton);
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-help-menu-title')?.textContent
    ).toBe('Help');

    keydown(page.root!, 'Escape');
    await page.waitForChanges();

    keydown(page.root!, ' ', helpButton);
    await page.waitForChanges();

    expect(
      page.root!.querySelector('.modus-wc-help-menu-title')?.textContent
    ).toBe('Help');
  });

  it('should open drill items that omit label and value props', async () => {
    const page = await newSpecPage({
      components,
      html: `<modus-wc-help-menu>
        <modus-wc-menu-item>
          <modus-wc-menu slot="panel">
            <modus-wc-menu-item label="Child" value="child">
              <modus-wc-icon slot="start-icon" name="document"></modus-wc-icon>
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-help-menu>`,
    });
    const parent = page.root!.querySelector(
      'modus-wc-menu-item'
    ) as HTMLElement;
    (
      page.rootInstance as unknown as { openItem: (item: HTMLElement) => void }
    ).openItem.call(page.rootInstance, parent);
    await page.waitForChanges();

    expect(page.root!.querySelector('.modus-wc-help-menu-back')).toBeTruthy();
  });

  it('should ignore drill activation for stacked parents and in-panel targets', async () => {
    const page = await newSpecPage({ components, html: markup });
    const component = page.rootInstance as ModusWcHelpMenu;
    const drillItemFromEvent = (
      component as unknown as {
        drillItemFromEvent: (event: Event) => HTMLElement | null;
      }
    ).drillItemFromEvent.bind(component);

    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();

    const help = itemByLabel(page.root!, 'Help');
    const stackedParentClick = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(stackedParentClick, 'target', {
      value: rowButton(help),
    });
    expect(drillItemFromEvent(stackedParentClick)).toBeNull();

    const guides = itemByLabel(page.root!, 'Product Guides');
    const nestedPanelClick = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(nestedPanelClick, 'target', {
      value: guides.querySelector('[slot="panel"] ul'),
    });
    expect(drillItemFromEvent(nestedPanelClick)).toBeNull();
  });

  it('should treat missing label and value as empty strings when opening', async () => {
    const page = await newSpecPage({ components, html: markup });
    const component = page.rootInstance as ModusWcHelpMenu;
    const help = itemByLabel(page.root!, 'Help');
    Object.defineProperty(help, 'label', {
      get: () => undefined,
      configurable: true,
    });
    Object.defineProperty(help, 'value', {
      get: () => undefined,
      configurable: true,
    });
    const panelChange = jest.fn();
    page.root!.addEventListener('panelChange', panelChange);

    (
      component as unknown as { openItem: (item: HTMLElement) => void }
    ).openItem.call(component, help);

    expect(panelChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { depth: 1, label: '' } })
    );
  });

  it('should open the clicked panel when sibling drill items share label and value', async () => {
    const page = await newSpecPage({
      components,
      html: `<modus-wc-help-menu>
        <modus-wc-menu-item label="Docs" value="docs">
          <modus-wc-icon slot="start-icon" name="document"></modus-wc-icon>
          <modus-wc-menu slot="panel">
            <modus-wc-menu-item label="First child" value="first">
              <modus-wc-icon slot="start-icon" name="document"></modus-wc-icon>
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
        <modus-wc-menu-item label="Docs" value="docs">
          <modus-wc-icon slot="start-icon" name="document"></modus-wc-icon>
          <modus-wc-menu slot="panel">
            <modus-wc-menu-item label="Second child" value="second">
              <modus-wc-icon slot="start-icon" name="document"></modus-wc-icon>
            </modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-help-menu>`,
    });
    const [, secondDocs] = Array.from(
      page.root!.querySelectorAll<HTMLElement>(
        'modus-wc-menu-item[value="docs"]'
      )
    );

    rowButton(secondDocs).click();
    await page.waitForChanges();

    expect(itemByLabel(page.root!, 'Second child').hidden).toBe(false);
    expect(itemByLabel(page.root!, 'First child').hidden).toBe(true);
  });

  it('should not open a drill item that is outside the current level', async () => {
    const page = await newSpecPage({ components, html: markup });
    const panelChange = jest.fn();
    page.root!.addEventListener('panelChange', panelChange);

    (
      page.rootInstance as unknown as { openItem: (item: HTMLElement) => void }
    ).openItem.call(
      page.rootInstance,
      itemByLabel(page.root!, 'Product Guides')
    );

    expect(panelChange).not.toHaveBeenCalled();
  });

  it('should skip disabled items during arrow-key navigation', async () => {
    const page = await newSpecPage({
      components,
      html: `<modus-wc-help-menu>
        <modus-wc-menu-item label="One" value="one">
          <modus-wc-icon slot="start-icon" name="document"></modus-wc-icon>
        </modus-wc-menu-item>
        <modus-wc-menu-item disabled label="Two" value="two">
          <modus-wc-icon slot="start-icon" name="document"></modus-wc-icon>
        </modus-wc-menu-item>
        <modus-wc-menu-item label="Three" value="three">
          <modus-wc-icon slot="start-icon" name="document"></modus-wc-icon>
        </modus-wc-menu-item>
      </modus-wc-help-menu>`,
    });
    const focusables = (
      page.rootInstance as unknown as { focusables: () => HTMLElement[] }
    ).focusables.call(page.rootInstance);

    expect(focusables).toEqual([
      rowLi(itemByLabel(page.root!, 'One')),
      rowLi(itemByLabel(page.root!, 'Three')),
    ]);
  });

  it('should skip non-element panel nodes when syncing visibility', async () => {
    const page = await newSpecPage({ components, html: markup });
    const component = page.rootInstance as ModusWcHelpMenu;
    const fakePanel = Object.create(null) as {
      getAttribute: (name: string) => string | null;
    };
    fakePanel.getAttribute = (name: string) =>
      name === 'slot' ? 'panel' : null;

    const queryAll = component.el.querySelectorAll.bind(component.el);
    const querySpy = jest
      .spyOn(component.el, 'querySelectorAll')
      .mockImplementation((selector: string) => {
        if (selector === '[slot="panel"]') {
          const panels = Array.from(queryAll('[slot="panel"]'));
          panels.unshift(fakePanel as Element);
          return panels as unknown as NodeListOf<Element>;
        }
        return queryAll(selector);
      });

    (component as unknown as { syncPanels: () => void }).syncPanels.call(
      component
    );

    querySpy.mockRestore();
  });

  it('should no-op back focus when the header is not rendered', async () => {
    const page = await newSpecPage({ components, html: markup });
    const harness = page.rootInstance as unknown as {
      applyFocus: (focus: 'back' | 'root') => void;
    };
    expect(() =>
      harness.applyFocus.call(page.rootInstance, 'back')
    ).not.toThrow();
  });

  it('should move focus to the next row on Tab inside the menu', async () => {
    const page = await newSpecPage({ components, html: markup });
    const helpLi = rowLi(itemByLabel(page.root!, 'Help'))!;
    const aboutLi = rowLi(itemByLabel(page.root!, 'About'))!;
    const moreLi = rowLi(itemByLabel(page.root!, 'More'))!;
    const aboutFocus = jest.spyOn(aboutLi, 'focus');

    Object.defineProperty(document, 'activeElement', {
      configurable: true,
      get: () => helpLi,
    });
    const tab = new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    });
    helpLi.dispatchEvent(tab);
    expect(aboutFocus).toHaveBeenCalled();
    expect(tab.defaultPrevented).toBe(true);

    // Shift+Tab before the first row and Tab past the last row leave the menu.
    const shiftTab = new KeyboardEvent('keydown', {
      key: 'Tab',
      shiftKey: true,
      bubbles: true,
      cancelable: true,
    });
    helpLi.dispatchEvent(shiftTab);
    expect(shiftTab.defaultPrevented).toBe(false);

    Object.defineProperty(document, 'activeElement', {
      configurable: true,
      get: () => moreLi,
    });
    const lastTab = new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    });
    moreLi.dispatchEvent(lastTab);
    expect(lastTab.defaultPrevented).toBe(false);

    // Focus outside the rows is left to the browser.
    Object.defineProperty(document, 'activeElement', {
      configurable: true,
      get: () => document.body,
    });
    const outside = new KeyboardEvent('keydown', {
      key: 'Tab',
      bubbles: true,
      cancelable: true,
    });
    page.root!.dispatchEvent(outside);
    expect(outside.defaultPrevented).toBe(false);

    delete (document as unknown as { activeElement?: unknown }).activeElement;
  });

  it('should not leave Back selected when returning to a parent panel', async () => {
    const page = await newSpecPage({ components, html: markup });
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();
    rowButton(itemByLabel(page.root!, 'Product Guides')).click();
    await page.waitForChanges();

    const back = page.root!.querySelector(
      '.modus-wc-help-menu-back'
    ) as HTMLElement & { selected?: boolean };
    rowButton(back).click();
    await page.waitForChanges();

    const parentBack = page.root!.querySelector(
      '.modus-wc-help-menu-back'
    ) as HTMLElement & { selected?: boolean };
    expect(
      page.root!.querySelector('.modus-wc-help-menu-title')?.textContent
    ).toBe('Help');
    expect(parentBack.selected).toBe(false);
    expect(
      rowButton(parentBack).classList.contains('modus-wc-menu-item-selected')
    ).toBe(false);
  });

  it('should resolve reset only after the root level has rendered', async () => {
    const page = await newSpecPage({ components, html: markup });
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();

    let resolved = false;
    const done = (page.rootInstance as ModusWcHelpMenu)
      .reset()
      .then(() => (resolved = true));
    await Promise.resolve();
    expect(resolved).toBe(false);

    await page.waitForChanges();
    await done;
    expect(page.root!.querySelector('.modus-wc-help-menu-title')).toBeNull();
    expect(itemByLabel(page.root!, 'About').hidden).toBe(false);
  });

  it('should re-sync when slotted markup changes and stop observing on disconnect', async () => {
    const callbacks: MutationCallback[] = [];
    const disconnect = jest.fn();
    const original = globalThis.MutationObserver;
    globalThis.MutationObserver = class {
      constructor(callback: MutationCallback) {
        callbacks.push(callback);
      }
      observe() {}
      disconnect() {
        disconnect();
      }
      takeRecords() {
        return [];
      }
    };

    const page = await newSpecPage({ components, html: markup });
    const about = itemByLabel(page.root!, 'About');
    about.hidden = true;
    callbacks.forEach((callback) => callback([], {} as MutationObserver));
    expect(about.hidden).toBe(false);

    // A reset pending when the host detaches still settles.
    rowButton(itemByLabel(page.root!, 'Help')).click();
    await page.waitForChanges();
    const instance = page.rootInstance as ModusWcHelpMenu & {
      disconnectedCallback: () => void;
    };
    const pending = instance.reset();
    instance.disconnectedCallback();
    await pending;
    expect(disconnect).toHaveBeenCalled();
    expect(() => instance.disconnectedCallback()).not.toThrow();
    globalThis.MutationObserver = original;
  });

  it('should fall back to a frame sync without MutationObserver', async () => {
    const original = globalThis.MutationObserver;
    const raf = globalThis.requestAnimationFrame;
    // @ts-expect-error exercising environments without MutationObserver
    globalThis.MutationObserver = undefined;
    const frames: FrameRequestCallback[] = [];
    globalThis.requestAnimationFrame = (cb: FrameRequestCallback) => {
      frames.push(cb);
      return 0;
    };

    const page = await newSpecPage({ components, html: markup });
    expect(frames.length).toBeGreaterThan(0);
    frames.forEach((cb) => cb(0));

    // @ts-expect-error exercising environments without animation frames
    globalThis.requestAnimationFrame = undefined;
    const second = await newSpecPage({ components, html: markup });
    expect(second.root).toBeTruthy();

    globalThis.requestAnimationFrame = raf;
    globalThis.MutationObserver = original;
    expect(page.root).toBeTruthy();
  });

  it('should animate panel transitions when motion is allowed', async () => {
    const page = await newSpecPage({ components, html: markup });
    const motion = page.rootInstance as unknown as {
      runMotion: (transition: {
        direction: 'forward' | 'back';
        focus: 'back' | 'root';
        fromHeight: number;
      }) => void;
      stopMotion: () => void;
    };
    const list = page.root!.querySelector(
      'modus-wc-menu.modus-wc-help-menu-list > .modus-wc-menu'
    ) as HTMLElement;
    const track = page.root!.querySelector(
      '.modus-wc-help-menu-track'
    ) as HTMLElement;
    Object.defineProperty(list, 'offsetWidth', { value: 0 });
    const animate = jest.fn().mockReturnValue({ cancel: jest.fn() });
    list.animate = animate;
    const trackAnimate = jest.fn().mockReturnValue({ cancel: jest.fn() });
    track.animate = trackAnimate;
    Object.defineProperty(track, 'offsetHeight', {
      configurable: true,
      get: () => 196,
    });
    const originalRaf = globalThis.requestAnimationFrame;
    globalThis.requestAnimationFrame = (cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    };
    const matchMediaMock = jest
      .spyOn(window, 'matchMedia')
      .mockReturnValue(mockPrefersReducedMotionMedia(false));

    const timing = { duration: 300, easing: 'cubic-bezier(0.2, 0, 0, 1)' };

    motion.runMotion({ direction: 'forward', focus: 'back', fromHeight: 240 });
    expect(animate).toHaveBeenCalledWith(
      [
        { opacity: 0, transform: 'translateX(12px)' },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      timing
    );
    expect(trackAnimate).toHaveBeenCalledWith(
      [{ height: '240px' }, { height: '196px' }],
      timing
    );

    trackAnimate.mockClear();
    motion.runMotion({ direction: 'back', focus: 'root', fromHeight: 196 });
    expect(animate).toHaveBeenLastCalledWith(
      [
        { opacity: 0, transform: 'translateX(-12px)' },
        { opacity: 1, transform: 'translateX(0)' },
      ],
      timing
    );
    expect(trackAnimate).not.toHaveBeenCalled();

    motion.runMotion({ direction: 'back', focus: 'root', fromHeight: 0 });
    expect(trackAnimate).not.toHaveBeenCalled();

    // @ts-expect-error track without Web Animations support
    track.animate = undefined;
    motion.runMotion({ direction: 'back', focus: 'root', fromHeight: 240 });

    // Without requestAnimationFrame the height step is skipped.
    // @ts-expect-error exercising environments without animation frames
    globalThis.requestAnimationFrame = undefined;
    expect(() =>
      motion.runMotion({ direction: 'forward', focus: 'back', fromHeight: 240 })
    ).not.toThrow();
    motion.stopMotion();

    globalThis.requestAnimationFrame = originalRaf;
    matchMediaMock.mockRestore();
  });

  it('should clear selected state when a menu item emits itemSelect', async () => {
    const page = await newSpecPage({ components, html: markup });
    const component = page.rootInstance as ModusWcHelpMenu;
    const menuItem = page.root!.querySelector(
      'modus-wc-menu-item'
    ) as HTMLElement & { selected?: boolean };
    menuItem.selected = true;

    const event = new CustomEvent('itemSelect');
    Object.defineProperty(event, 'target', { value: menuItem });
    component.handleItemSelect(event);

    expect(menuItem.selected).toBe(false);

    const noop = new CustomEvent('itemSelect');
    Object.defineProperty(noop, 'target', { value: null });
    expect(() => component.handleItemSelect(noop)).not.toThrow();
  });

  it('should animate when matchMedia is unavailable', async () => {
    const page = await newSpecPage({ components, html: markup });
    const motion = page.rootInstance as unknown as {
      runMotion: (transition: object) => void;
    };
    const list = page.root!.querySelector(
      'modus-wc-menu.modus-wc-help-menu-list > .modus-wc-menu'
    ) as HTMLElement;
    const animateMock = jest.fn().mockReturnValue({ cancel: jest.fn() });
    list.animate = animateMock;

    const originalMatchMedia = window.matchMedia;
    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: undefined,
    });

    motion.runMotion({ direction: 'forward', focus: 'back', fromHeight: 0 });
    expect(animateMock).toHaveBeenCalled();

    Object.defineProperty(window, 'matchMedia', {
      configurable: true,
      writable: true,
      value: originalMatchMedia,
    });
  });

  it('should skip panel motion when reduced motion is preferred', async () => {
    const page = await newSpecPage({ components, html: markup });
    const motion = page.rootInstance as unknown as {
      runMotion: (transition: object) => void;
    };
    const list = page.root!.querySelector(
      'modus-wc-menu.modus-wc-help-menu-list > .modus-wc-menu'
    ) as HTMLElement;
    const animateMock = jest.fn();
    list.animate = animateMock;

    const matchMediaMock = jest
      .spyOn(window, 'matchMedia')
      .mockReturnValue(mockPrefersReducedMotionMedia(true));

    motion.runMotion({ direction: 'forward', focus: 'back', fromHeight: 0 });
    expect(animateMock).not.toHaveBeenCalled();

    matchMediaMock.mockRestore();
  });

  it('should skip panel motion when the list cannot animate', async () => {
    const page = await newSpecPage({ components, html: markup });
    const motion = page.rootInstance as unknown as {
      runMotion: (transition: object) => void;
    };
    const host = page.root as HTMLElement;
    const querySpy = jest.spyOn(host, 'querySelector');
    querySpy.mockImplementation((selector) => {
      if (
        selector === 'modus-wc-menu.modus-wc-help-menu-list > .modus-wc-menu'
      ) {
        return {} as Element;
      }
      return HTMLElement.prototype.querySelector.call(host, selector);
    });

    const matchMediaMock = jest
      .spyOn(window, 'matchMedia')
      .mockReturnValue(mockPrefersReducedMotionMedia(false));

    expect(() =>
      motion.runMotion({ direction: 'forward', focus: 'back', fromHeight: 0 })
    ).not.toThrow();

    querySpy.mockRestore();
    matchMediaMock.mockRestore();
  });

  it('should guard drill detection, focus restoration, and panel sync helpers', async () => {
    const page = await newSpecPage({ components, html: markup });
    const component = page.rootInstance as ModusWcHelpMenu;
    const call = <T extends (...args: never[]) => unknown>(
      method: T,
      ...args: Parameters<T>
    ) => method.call(component, ...args);

    const harness = component as unknown as {
      drillItemFromEvent: (event: Event) => HTMLElement | null;
      openItem: (item: HTMLElement) => void;
      applyFocus: (focus: 'back' | 'root') => void;
      stack: { index: number; label: string }[];
      stackElements: () => HTMLElement[];
      isInsidePanel: (node: HTMLElement, item: HTMLElement) => boolean;
      syncPanels: () => void;
      syncChevron: (item: HTMLElement, isDrill: boolean) => void;
      rowButton: (item: HTMLElement) => HTMLButtonElement | null;
      handleKeyDown: (event: KeyboardEvent) => void;
    };

    const about = itemByLabel(page.root!, 'About');
    const help = itemByLabel(page.root!, 'Help');
    const panel = help.querySelector('[slot="panel"]') as HTMLElement;
    const trimbleInPanel = Array.from(
      panel.querySelectorAll('modus-wc-menu-item')
    ).find(
      (item) =>
        (item as HTMLElement & { label?: string }).label === 'Trimble Help'
    ) as HTMLElement;

    const enterLeaf = new KeyboardEvent('keydown', {
      key: 'Enter',
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(enterLeaf, 'target', { value: rowButton(about) });
    call(harness.handleKeyDown, enterLeaf);

    expect(call(harness.drillItemFromEvent, new Event('click'))).toBeNull();

    const missingClosest = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(missingClosest, 'target', {
      value: { closest: undefined },
    });
    expect(call(harness.drillItemFromEvent, missingClosest)).toBeNull();

    const outsideClick = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(outsideClick, 'target', { value: document.body });
    expect(call(harness.drillItemFromEvent, outsideClick)).toBeNull();

    const more = itemByLabel(page.root!, 'More');
    const moreClick = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(moreClick, 'target', { value: rowButton(more) });
    expect(call(harness.drillItemFromEvent, moreClick)).toBeNull();

    call(harness.openItem, about);

    const labelless = itemByLabel(page.root!, 'Help') as HTMLElement & {
      label?: string;
      value?: string;
    };
    delete labelless.label;
    delete labelless.value;
    call(harness.openItem, labelless);
    await page.waitForChanges();

    const aboutOffLevel = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(aboutOffLevel, 'target', { value: rowButton(about) });
    expect(call(harness.drillItemFromEvent, aboutOffLevel)).toBeNull();

    const backButton = page.root!.querySelector(
      '.modus-wc-help-menu-back button'
    ) as HTMLButtonElement;
    const backFocus = jest.spyOn(backButton, 'focus');
    call(harness.applyFocus, 'back');
    expect(backFocus).toHaveBeenCalled();
    backFocus.mockRestore();

    const resetting = (page.rootInstance as ModusWcHelpMenu).reset();
    await page.waitForChanges();
    await resetting;
    await (page.rootInstance as ModusWcHelpMenu).reset();
    call(harness.applyFocus, 'root');

    const bareItem = document.createElement('modus-wc-menu-item');
    page.root!.appendChild(bareItem);
    expect(call(harness.rowButton, bareItem)).toBeNull();
    call(harness.syncChevron, bareItem, true);

    const chevron = document.createElement('span');
    chevron.className = 'modus-wc-help-menu-chevron';
    rowButton(about).appendChild(chevron);
    call(harness.syncChevron, about, false);
    expect(about.querySelector('.modus-wc-help-menu-chevron')).toBeNull();

    harness.stack = [{ index: 99, label: 'Missing' }];
    expect(call(harness.stackElements)).toEqual([]);

    // A stacked item whose panel has no items yields an empty level.
    const emptyDrill = document.createElement('modus-wc-menu-item');
    const emptyPanel = document.createElement('div');
    emptyPanel.setAttribute('slot', 'panel');
    emptyDrill.appendChild(emptyPanel);
    page.root!.appendChild(emptyDrill);
    harness.stack = [];
    const rootIndex = Array.from(
      page.root!.querySelectorAll('modus-wc-menu-item')
    )
      .filter(
        (item) =>
          !item.classList.contains('modus-wc-help-menu-back') &&
          !item.closest('[slot="panel"]')
      )
      .indexOf(emptyDrill);
    harness.stack = [
      { index: rootIndex, label: 'Empty' },
      { index: 0, label: 'Deeper' },
    ];
    expect(call(harness.stackElements)).toEqual([emptyDrill]);
    call(harness.syncPanels);

    expect(call(harness.isInsidePanel, trimbleInPanel, help)).toBe(true);

    // Navigating before the track exists starts without a height to ease from.
    harness.stack = [];
    await page.waitForChanges();
    const trackless = component as unknown as {
      trackEl: () => HTMLElement | null;
      transition?: { fromHeight?: number };
    };
    const trackSpy = jest.spyOn(trackless, 'trackEl').mockReturnValue(null);
    call(harness.openItem, itemByLabel(page.root!, 'About'));
    call(harness.openItem, trimbleInPanel.closest('modus-wc-menu-item')!);
    rowButton(help).click();
    expect(trackless.transition?.fromHeight).toBeUndefined();
    trackSpy.mockRestore();
  });
});
