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

  it('should emit breadcrumbClick event when a breadcrumb link is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcBreadcrumbs],
      html: '<modus-wc-breadcrumbs aria-label="Default breadcrumbs"></modus-wc-breadcrumbs>',
    });

    const component = page.rootInstance as ModusWcBreadcrumbs;
    component.items = items;

    const eventSpy = jest.fn();
    page.root?.addEventListener('breadcrumbClick', eventSpy);

    await page.waitForChanges();

    const firstLink = page.root?.querySelector('a');
    firstLink?.click();

    expect(eventSpy).toHaveBeenCalled();

    const customEvent = eventSpy.mock
      .calls[0][0] as CustomEvent<IModusWcBreadcrumb>;

    expect(customEvent.detail).toEqual(items[0]);
  });

  it('should call preventDefault when a breadcrumb without url is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcBreadcrumbs],
      html: '<modus-wc-breadcrumbs aria-label="Default breadcrumbs"></modus-wc-breadcrumbs>',
    });

    const itemsWithoutUrl: IModusWcBreadcrumb[] = [
      {
        label: 'Root',
        url: '#',
      },
      {
        label: 'Subpage without URL',
        // url intentionally omitted
      },
      {
        label: 'Current Page',
        url: '#',
      },
    ];

    const component = page.rootInstance as ModusWcBreadcrumbs;
    component.items = itemsWithoutUrl;

    await page.waitForChanges();

    const mockEvent = new MouseEvent('click');
    const preventDefaultSpy = jest.spyOn(mockEvent, 'preventDefault');
    component['handleClick'](mockEvent, itemsWithoutUrl[1]);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
