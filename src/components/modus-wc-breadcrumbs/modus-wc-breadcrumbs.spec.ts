import { newSpecPage } from '@stencil/core/testing';
import { IBreadcrumb, ModusWcBreadcrumbs } from './modus-wc-breadcrumbs';

describe('modus-wc-breadcrumbs', () => {
  const items: IBreadcrumb[] = [
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

    const customEvent = eventSpy.mock.calls[0][0] as CustomEvent<IBreadcrumb>;

    expect(customEvent.detail).toEqual(items[0]);
  });

  it('should call preventDefault when a breadcrumb without url is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcBreadcrumbs],
      html: '<modus-wc-breadcrumbs aria-label="Default breadcrumbs"></modus-wc-breadcrumbs>',
    });

    const itemsWithoutUrl: IBreadcrumb[] = [
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

  it('should prevent navigation for unsafe breadcrumb url protocols', async () => {
    const page = await newSpecPage({
      components: [ModusWcBreadcrumbs],
      html: '<modus-wc-breadcrumbs aria-label="Unsafe breadcrumbs"></modus-wc-breadcrumbs>',
    });

    const component = page.rootInstance as ModusWcBreadcrumbs;
    const eventSpy = jest.fn();
    component.items = [
      { label: 'Unsafe', url: 'javascript:alert(1)' },
      { label: 'Current' },
    ];
    page.root?.addEventListener('breadcrumbClick', eventSpy);

    await page.waitForChanges();

    const firstLink = page.root?.querySelector('a');
    const fallbackButton = page.root?.querySelector('button');
    expect(firstLink).toBeNull();
    expect(fallbackButton?.getAttribute('type')).toBe('button');

    fallbackButton?.click();
    expect(eventSpy).toHaveBeenCalled();

    const mockEvent = new MouseEvent('click');
    const preventDefaultSpy = jest.spyOn(mockEvent, 'preventDefault');
    component['handleClick'](mockEvent, component.items[0]);
    expect(preventDefaultSpy).toHaveBeenCalled();
  });
});
