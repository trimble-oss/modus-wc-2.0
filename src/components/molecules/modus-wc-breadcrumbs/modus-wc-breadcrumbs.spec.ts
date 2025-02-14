import { newSpecPage } from '@stencil/core/testing';
import { IModusWcBreadcrumb, ModusWcBreadcrumbs } from './modus-wc-breadcrumbs';

describe('modus-wc-breadcrumbs', () => {
  const items: IModusWcBreadcrumb[] = [
    {
      label: 'Root',
      url: '#',
    },
    {
      label: 'Subpage',
      url: '#',
    },
    {
      label: 'Current Page',
      url: '#',
    },
  ];

  it('should warn when aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    const page = await newSpecPage({
      components: [ModusWcBreadcrumbs],
      html: '<modus-wc-breadcrumbs></modus-wc-breadcrumbs>',
    });

    const component = page.rootInstance as ModusWcBreadcrumbs;
    component.items = items;

    await page.waitForChanges();

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcBreadcrumbs: aria-label is required for accessibility. Using fallback label.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBreadcrumbs],
      html: '<modus-wc-breadcrumbs aria-label="Default breadcrumbs"></modus-wc-breadcrumbs>',
    });

    const component = page.rootInstance as ModusWcBreadcrumbs;
    component.items = items;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBreadcrumbs],
      html: '<modus-wc-breadcrumbs aria-label="Default breadcrumbs" custom-class="test-class" size="lg"></modus-wc-breadcrumbs>',
    });

    const component = page.rootInstance as ModusWcBreadcrumbs;
    component.items = items;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });
});
