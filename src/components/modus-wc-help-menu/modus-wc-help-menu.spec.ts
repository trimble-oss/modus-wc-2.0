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
        <modus-wc-menu-item label="Trimble Help" value="trimble-help"></modus-wc-menu-item>
        <modus-wc-menu-item label="Product Guides" value="product-guides">
          <modus-wc-menu slot="panel">
            <modus-wc-menu-item label="Installation" value="installation"></modus-wc-menu-item>
          </modus-wc-menu>
        </modus-wc-menu-item>
      </modus-wc-menu>
    </modus-wc-menu-item>
    <modus-wc-menu-item label="About" value="about"></modus-wc-menu-item>
    <modus-wc-menu-item has-submenu label="More" value="more">
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
          <modus-wc-menu slot="panel">
            <modus-wc-menu-item label="Overview" value="overview"></modus-wc-menu-item>
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

    await helpMenu.reset();
    await page.waitForChanges();

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
            <modus-wc-menu-item label="Child" value="child"></modus-wc-menu-item>
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

  it('should no-op pending back focus when the header is not rendered', async () => {
    const page = await newSpecPage({ components, html: markup });
    const harness = page.rootInstance as unknown as {
      applyPendingFocus: () => void;
      pendingFocus: 'back' | 'root' | null;
    };
    harness.pendingFocus = 'back';
    expect(() =>
      harness.applyPendingFocus.call(page.rootInstance)
    ).not.toThrow();
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
      applyPendingFocus: () => void;
      pendingFocus: 'back' | 'root' | null;
      stack: { value: string; label: string }[];
      stackElements: () => HTMLElement[];
      isInsidePanel: (node: HTMLElement, item: HTMLElement) => boolean;
      scheduleSyncPanels: () => void;
      syncPanels: () => void;
      syncChevron: (item: HTMLElement) => void;
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
    harness.pendingFocus = 'back';
    const backFocus = jest.spyOn(backButton, 'focus');
    call(harness.applyPendingFocus);
    expect(backFocus).toHaveBeenCalled();
    backFocus.mockRestore();

    await (page.rootInstance as ModusWcHelpMenu).reset();
    await page.waitForChanges();
    harness.pendingFocus = 'root';
    call(harness.applyPendingFocus);

    const bareItem = document.createElement('modus-wc-menu-item');
    page.root!.appendChild(bareItem);
    expect(call(harness.rowButton, bareItem)).toBeNull();
    call(harness.syncChevron, bareItem);

    const chevron = document.createElement('span');
    chevron.className = 'modus-wc-help-menu-chevron';
    rowButton(about).appendChild(chevron);
    call(harness.syncChevron, about);
    expect(about.querySelector('.modus-wc-help-menu-chevron')).toBeNull();

    harness.stack = [{ value: 'missing', label: 'Missing' }];
    expect(call(harness.stackElements)).toEqual([]);

    expect(call(harness.isInsidePanel, trimbleInPanel, help)).toBe(true);

    const raf = globalThis.requestAnimationFrame;
    // @ts-expect-error exercising sync without animation frames
    globalThis.requestAnimationFrame = undefined;
    call(harness.scheduleSyncPanels);
    globalThis.requestAnimationFrame = raf;

    call(harness.scheduleSyncPanels);
    await new Promise<void>((resolve) =>
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()))
    );

    call(harness.syncPanels);
  });
});
