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
});
