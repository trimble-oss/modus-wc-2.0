import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTabs } from './modus-wc-tabs';
import { IModusWcTab } from './modus-wc-tabs';

describe('modus-wc-tabs', () => {
  const defaultTabs: IModusWcTab[] = [
    {
      label: 'Tab 1',
    },
    {
      label: 'Tab 3',
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
  ];

  it('should warn when aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcTabs],
      html: '<modus-wc-tabs></modus-wc-tabs>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcTabs: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
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
});
