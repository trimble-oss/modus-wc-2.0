import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTabs } from './modus-wc-tabs';
import { ITab } from './modus-wc-tabs';

describe('modus-wc-tabs', () => {
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

  const customContentTabs: ITab[] = [
    {
      customContent: '<span class="test-content">Custom Content</span>',
    },
    {
      customContent:
        '<span style="display: inline-flex; align-items: center; gap: 8px;">Tab with <strong>HTML</strong></span>',
    },
    {
      customContent: '<span class="empty-custom-content"></span>',
    },
    {
      customContent:
        '<span style="display: inline-flex; align-items: center; gap: 8px;">Tab with Badge <modus-wc-badge color="primary" size="md" variant="counter">5</modus-wc-badge></span>',
    },
  ];

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

  it('should render tabs with custom content', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Custom Content Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = customContentTabs;

    await page.waitForChanges();

    // Check if custom content is rendered
    const firstTab = page.root!.querySelector(
      'div[role="tablist"] > button[role="tab"]:first-child span'
    );
    expect(firstTab).not.toBeNull();
    expect(firstTab!.innerHTML).toBe(
      '<span class="test-content">Custom Content</span>'
    );

    // Verify the DOM structure contains the expected HTML
    const customContentElement = firstTab!.querySelector('.test-content');
    expect(customContentElement).not.toBeNull();
    expect(customContentElement!.textContent).toBe('Custom Content');

    // Check snapshot to verify full rendering
    expect(page.root).toMatchSnapshot();
  });

  it('should render tabs with complex HTML elements in custom content', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Complex HTML Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = [
      {
        customContent:
          '<span class="complex-content">Content with <strong>bold</strong> and <em>italic</em> text</span>',
      },
    ];

    await page.waitForChanges();

    const tabContent = page.root!.querySelector(
      'div[role="tablist"] > button[role="tab"]:first-child span'
    );
    expect(tabContent).not.toBeNull();

    const complexContentEl = tabContent!.querySelector('.complex-content');
    expect(complexContentEl).not.toBeNull();

    const strongEl = complexContentEl!.querySelector('strong');
    expect(strongEl).not.toBeNull();
    expect(strongEl!.textContent).toBe('bold');

    const emEl = complexContentEl!.querySelector('em');
    expect(emEl).not.toBeNull();
    expect(emEl!.textContent).toBe('italic');
  });

  it('should handle empty custom content', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Empty Custom Content Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = [
      {
        customContent: '',
        // Empty customContent still needs some other property to render properly
        label: 'Empty Content',
      },
    ];

    await page.waitForChanges();

    // With empty customContent, the tab should fall back to showing the label
    const tabContent = page.root!.querySelector(
      'div[role="tablist"] > button[role="tab"]:first-child span'
    );
    expect(tabContent).not.toBeNull();
    expect(tabContent!.textContent).toBe('Empty Content');
  });

  it('should handle custom content with Modus Web Components', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="WC Custom Content Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = [
      {
        customContent:
          '<span>Tab with Badge <modus-wc-badge color="primary" size="md" variant="counter">5</modus-wc-badge></span>',
      },
    ];

    await page.waitForChanges();

    const tabContent = page.root!.querySelector(
      'div[role="tablist"] > button[role="tab"]:first-child span'
    );
    expect(tabContent).not.toBeNull();

    const badgeEl = tabContent!.querySelector('modus-wc-badge');
    expect(badgeEl).not.toBeNull();
    expect(badgeEl!.getAttribute('color')).toBe('primary');
    expect(badgeEl!.getAttribute('size')).toBe('md');
    expect(badgeEl!.getAttribute('variant')).toBe('counter');
    expect(badgeEl!.textContent).toBe('5');
  });

  it('should handle click events on a tab with custom content', async () => {
    const page = await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs aria-label="Interactive Custom Content Tab Group"></modus-wc-tabs>',
    });

    const component = page.rootInstance as ModusWcTabs;
    component.tabs = customContentTabs;
    component.activeTabIndex = 0;

    await page.waitForChanges();

    const tabChangeSpy = jest.fn();
    page.root!.addEventListener('tabChange', tabChangeSpy);

    // Click the second tab with custom content
    const secondTab = page.root!.querySelector(
      'div[role="tablist"] > button[role="tab"]:nth-child(2)'
    ) as HTMLButtonElement;
    expect(secondTab).not.toBeNull();

    secondTab.click();
    await page.waitForChanges();

    expect(tabChangeSpy).toHaveBeenCalled();
    expect(tabChangeSpy.mock.calls[0][0].detail).toEqual({
      previousTab: 0,
      newTab: 1,
    });
    expect(component.activeTabIndex).toBe(1);
  });
});
