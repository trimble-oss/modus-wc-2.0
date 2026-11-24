import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTabs } from './modus-wc-tabs';
import { ITab } from './modus-wc-tabs';

describe('modus-wc-tabs', () => {
  const activeElementDescriptor = Object.getOwnPropertyDescriptor(
    document,
    'activeElement'
  );

  const defaultTabs: ITab[] = [
    {
      label: 'Tab 1',
    },
    {
      label: 'Tab 2',
      disabled: true,
    },
    {
      icon: 'home',
    },
    { icon: 'settings', iconPosition: 'left', label: 'Settings' },
    {
      icon: 'alert',
      iconPosition: 'right',
      label: 'Alerts',
    },
    {
      label: 'Custom Tab',
      customClass: 'custom-tab-class',
    },
  ];

  const getTabButtons = (pageRoot: HTMLElement) =>
    pageRoot.querySelectorAll<HTMLButtonElement>(
      'div[role="tablist"] > button[role="tab"]'
    );

  const focusTab = (button: HTMLButtonElement) => {
    button.focus();
    Object.defineProperty(document, 'activeElement', {
      value: button,
      writable: true,
      configurable: true,
    });
  };

  const dispatchTabKey = (pageRoot: HTMLElement, key: string) => {
    const activeTab = pageRoot.querySelector(
      'div[role="tablist"] > button[role="tab"][tabindex="0"]'
    ) as HTMLButtonElement;
    activeTab.dispatchEvent(
      new KeyboardEvent('keydown', { key, bubbles: true })
    );
  };

  afterEach(() => {
    if (activeElementDescriptor) {
      Object.defineProperty(document, 'activeElement', activeElementDescriptor);
    }
  });

  it('should render with default props (empty tabs)', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with default props (with tab data)', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should expose the active tab with aria-selected', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabs = page.root!.querySelectorAll('[role="tab"]');

    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
    expect(
      Array.from(tabs)
        .slice(1)
        .every((tab) => tab.getAttribute('aria-selected') === 'false')
    ).toBe(true);
  });

  it('should render with default props (with tab panel)', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: `
      <modus-wc-tabs aria-label="Tab Group">
        <p slot="tab-0">
          Modus (noun) : a mode of procedure : a way of doing something
        </p>
        <p slot="tab-1">
          secret (noun) : kept from knowledge or view : hidden
        </p>
      </modus-wc-tabs>
      `,
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: `
      <modus-wc-tabs
        aria-label="Custom Tab Group"
        custom-class="test-class"
        tab-style="boxed"
        size="sm">
      </modus-wc-tabs>
      `,
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should warn if tab data is not provided', async () => {
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();

    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    expect(consoleErrorSpy).toHaveBeenCalledWith(
      'ModusWcTabs: tab data is required.'
    );

    consoleErrorSpy.mockRestore();
  });

  it('should emit tabChange event when a tab is changed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    const thirdTab = page.root!.querySelector(
      'div[role="tablist"] > button[role="tab"]:nth-child(3)'
    ) as HTMLButtonElement;
    expect(thirdTab).not.toBeNull();

    thirdTab.click();
    await page.waitForChanges();

    expect(tabChangeSpy).toHaveBeenCalled();
    expect(tabChangeSpy.mock.calls[0][0].detail).toEqual({
      previousTab: 0,
      newTab: 2,
    });
    expect(thirdTab.getAttribute('aria-selected')).toBe('true');
    expect(
      page.root!.querySelector('[role="tab"]')?.getAttribute('aria-selected')
    ).toBe('false');
  });

  it('should not emit tabChange event when a disabled tab is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    const disabledTab = page.root!.querySelector(
      'div[role="tablist"] > button[role="tab"]:nth-child(2)'
    ) as HTMLButtonElement;
    expect(disabledTab).not.toBeNull();

    disabledTab.click();
    await page.waitForChanges();

    expect(tabChangeSpy).not.toHaveBeenCalled();
  });

  it('should render tabs with slotName property', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: `
      <modus-wc-tabs aria-label="Tab Group with Slots">
        <div slot="custom-tab-slot-1">Custom Tab Content</div>
        <div slot="tab-0">Tab Panel Content</div>
      </modus-wc-tabs>
      `,
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = [
      {
        slotName: 'custom-tab-slot-1',
      },
      {
        label: 'Regular Tab',
      },
    ];

    await page.waitForChanges();

    // Instead of checking for the specific slot element, verify that the button was rendered and has the correct structure
    const firstTab = page.root!.querySelector(
      'div[role="tablist"] > button[role="tab"]:first-child'
    );
    expect(firstTab).not.toBeNull();

    // Check that the innerHTML of the first tab contains a slot element
    const tabHtml = page.root?.innerHTML;
    expect(tabHtml).toContain('custom-tab-slot-1');

    // Verify regular tab rendering still works
    const regularTab = page.root!.querySelector(
      'div[role="tablist"] > button[role="tab"]:nth-child(2)'
    );
    expect(regularTab).not.toBeNull();
    expect(regularTab!.textContent).toContain('Regular Tab');

    // Check entire snapshot
    expect(page.root).toMatchSnapshot();
  });

  it('should use roving tabindex so only the selected tab is in the tab order', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);

    expect(tabs[0].tabIndex).toBe(0);
    expect(tabs[0].id).toBe('tab-0');
    expect(
      Array.from(tabs)
        .slice(1)
        .every((tab) => tab.tabIndex === -1)
    ).toBe(true);
    expect(tabs[0].hasAttribute('aria-controls')).toBe(false);
  });

  it('should move to the next enabled tab on ArrowRight', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    focusTab(tabs[0]);

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    const focusSpy = jest.spyOn(tabs[2], 'focus');
    dispatchTabKey(page.root!, 'ArrowRight');
    await page.waitForChanges();

    expect(tabChangeSpy.mock.calls[0][0].detail).toEqual({
      previousTab: 0,
      newTab: 2,
    });
    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
    expect(tabs[0].tabIndex).toBe(-1);
    expect(tabs[2].tabIndex).toBe(0);
    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should move to the previous enabled tab on ArrowLeft and wrap from the first tab', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    focusTab(tabs[0]);

    dispatchTabKey(page.root!, 'ArrowLeft');
    await page.waitForChanges();

    expect(tabs[5].getAttribute('aria-selected')).toBe('true');
    expect(tabs[5].tabIndex).toBe(0);
    expect(tabs[0].tabIndex).toBe(-1);
  });

  it('should move to the first and last enabled tabs on Home and End', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;
    component.activeTabIndex = 3;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    focusTab(tabs[3]);

    dispatchTabKey(page.root!, 'End');
    await page.waitForChanges();

    expect(tabs[5].getAttribute('aria-selected')).toBe('true');

    focusTab(tabs[5]);
    dispatchTabKey(page.root!, 'Home');
    await page.waitForChanges();

    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
  });

  it('should wrap to the first enabled tab on ArrowRight from the last tab', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;
    component.activeTabIndex = 5;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    focusTab(tabs[5]);

    dispatchTabKey(page.root!, 'ArrowRight');
    await page.waitForChanges();

    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
  });

  it('should ignore keys that are not tab list navigation', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    focusTab(tabs[0]);

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    dispatchTabKey(page.root!, 'Enter');
    await page.waitForChanges();

    expect(tabChangeSpy).not.toHaveBeenCalled();
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
  });

  it('should ignore arrow keys when focus is not on a tab', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    page.root!.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );
    await page.waitForChanges();

    expect(tabChangeSpy).not.toHaveBeenCalled();
  });

  it('should keep the first enabled tab in the tab order when the active tab is disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;
    component.activeTabIndex = 1;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    expect(tabs[0].tabIndex).toBe(0);
    expect(tabs[1].tabIndex).toBe(-1);
  });

  it('should not move focus when every tab is disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = [
      { label: 'Tab 1', disabled: true },
      { label: 'Tab 2', disabled: true },
    ];

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    focusTab(tabs[0]);

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );
    await page.waitForChanges();

    expect(tabChangeSpy).not.toHaveBeenCalled();
  });

  it('should start arrow navigation from the tab that contains focus', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;
    component.activeTabIndex = 3;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    const label = tabs[3].querySelector('span') as HTMLSpanElement;
    Object.defineProperty(document, 'activeElement', {
      value: label,
      writable: true,
      configurable: true,
    });

    label.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );
    await page.waitForChanges();

    expect(tabs[4].getAttribute('aria-selected')).toBe('true');
  });

  it('should fall back to the active tab when document focus is outside the tab list', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;
    component.activeTabIndex = 1;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    Object.defineProperty(document, 'activeElement', {
      value: document.body,
      writable: true,
      configurable: true,
    });

    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );
    await page.waitForChanges();

    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
  });

  it('should fall back to the active tab when document.activeElement is not an element', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    Object.defineProperty(document, 'activeElement', {
      value: null,
      writable: true,
      configurable: true,
    });

    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );
    await page.waitForChanges();

    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
  });

  it('should fall back to the active tab when document focus is not on a tab', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    const tablist = page.root!.querySelector('[role="tablist"]');
    Object.defineProperty(document, 'activeElement', {
      value: tablist,
      writable: true,
      configurable: true,
    });

    tabs[0].dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );
    await page.waitForChanges();

    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
  });

  it('should ignore keydown when the event target is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    const event = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      bubbles: true,
    });
    Object.defineProperty(event, 'target', { value: null });

    component.handleKeyDown(event);

    expect(tabChangeSpy).not.toHaveBeenCalled();
  });

  it('should ignore activateTabAt for a missing or disabled index', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    component['activateTabAt'](1);
    component['activateTabAt'](99);
    await page.waitForChanges();

    expect(tabChangeSpy).not.toHaveBeenCalled();
    expect(getTabButtons(page.root!)[0].getAttribute('aria-selected')).toBe(
      'true'
    );
  });

  it('should not emit tabChange when keyboard navigation stays on the active tab', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = [{ label: 'Only tab' }];

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    focusTab(tabs[0]);

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);
    const focusSpy = jest.spyOn(tabs[0], 'focus');

    dispatchTabKey(page.root!, 'ArrowRight');
    await page.waitForChanges();

    expect(tabChangeSpy).not.toHaveBeenCalled();
    expect(focusSpy).toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should fall back when the focused tab is not in the tab list', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    focusTab(tabs[0]);
    component['getTabButtons'] = () => [];

    expect(component['getFocusedTabIndex']()).toBe(0);
    component['activateTabAt'](0);
    expect(tabs[0].getAttribute('aria-selected')).toBe('true');
  });

  it('should ignore keydown from a nested tab group', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    const nestedTablist = document.createElement('div');
    nestedTablist.setAttribute('role', 'tablist');
    const nestedTab = document.createElement('button');
    nestedTab.setAttribute('role', 'tab');
    nestedTab.textContent = 'Inner tab';
    nestedTablist.appendChild(nestedTab);
    page.root!.querySelector('[role="tabpanel"]')!.appendChild(nestedTablist);

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    nestedTab.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowRight', bubbles: true })
    );
    await page.waitForChanges();

    expect(tabChangeSpy).not.toHaveBeenCalled();
    expect(getTabButtons(page.root!)[0].getAttribute('aria-selected')).toBe(
      'true'
    );
  });

  it('should reverse arrow-key navigation when the tab list is RTL', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    component.el.dir = 'rtl';

    const tabs = getTabButtons(page.root!);
    focusTab(tabs[0]);

    dispatchTabKey(page.root!, 'ArrowRight');
    await page.waitForChanges();

    expect(tabs[5].getAttribute('aria-selected')).toBe('true');

    component.activeTabIndex = 0;
    await page.waitForChanges();
    focusTab(tabs[0]);

    dispatchTabKey(page.root!, 'ArrowLeft');
    await page.waitForChanges();

    expect(tabs[2].getAttribute('aria-selected')).toBe('true');
  });

  it('should detect RTL from the host dir attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    expect(component['isRtl']()).toBe(false);
    component.el.dir = 'rtl';
    expect(component['isRtl']()).toBe(true);
  });

  it('should return no tab buttons when the tab list is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;

    await page.waitForChanges();

    page.root!.querySelector('[role="tablist"]')?.remove();

    expect(component['getTabButtons']()).toEqual([]);
  });

  it('should keep the first enabled tab in the tab order when the active index is invalid', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = defaultTabs;
    component.activeTabIndex = 99;

    await page.waitForChanges();

    const tabs = getTabButtons(page.root!);
    expect(tabs[0].tabIndex).toBe(0);
    expect(tabs[2].tabIndex).toBe(-1);
  });
});
