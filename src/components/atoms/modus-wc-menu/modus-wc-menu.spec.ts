import { newSpecPage } from '@stencil/core/testing';
import { IMenuItem, ModusWcMenu } from './modus-wc-menu';

describe('modus-wc-menu', () => {
  const items: IMenuItem[] = [
    { label: 'Item 1', value: '1' },
    { label: 'Item 2', value: '2' },
    { label: 'Item 3', value: '3' },
  ];

  it('should warn if aria-label is not provided', async () => {
    const consoleWarnSpy = jest.spyOn(console, 'warn').mockImplementation();

    await newSpecPage({
      components: [ModusWcMenu],
      html: '<modus-wc-menu></modus-wc-menu>',
    });

    expect(consoleWarnSpy).toHaveBeenCalledWith(
      'ModusWcMenu: aria-label is required for accessibility.'
    );

    consoleWarnSpy.mockRestore();
  });

  it('renders with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: '<modus-wc-menu aria-label="Default menu"></modus-wc-menu>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: `<modus-wc-menu
        .active-item-value="2"
        aria-label="Test menu"
        bordered="false"
        custom-class="test-class"
        .items=${JSON.stringify(items)}
        menu-title="Title"
        orientation="horizontal"
        size="lg"
      ></modus-wc-menu>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render items with various states', async () => {
    const updatedItems = [
      ...items,
      { disabled: true, label: 'Item 4', value: '4' },
    ];

    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: `<modus-wc-menu aria-label="Items test"></modus-wc-menu>`,
    });

    const component = page.rootInstance as ModusWcMenu;
    component.items = updatedItems;

    await page.waitForChanges();

    const ulElement = page.root?.querySelector('ul');
    const renderedItems = ulElement?.querySelectorAll('li');

    expect(renderedItems?.length).toBe(4);
  });

  it('should emit itemSelect event when an item is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcMenu],
      html: `<modus-wc-menu aria-label="Select item test"></modus-wc-menu>`,
    });

    const component = page.rootInstance as ModusWcMenu;
    component.items = items;

    await page.waitForChanges();

    const itemSelectSpy = jest.fn();
    page.root!.addEventListener('itemSelect', itemSelectSpy);

    const firstItem = page.root!.querySelector('li a') as HTMLAnchorElement;
    expect(firstItem).not.toBeNull();

    firstItem.click();
    await page.waitForChanges();

    expect(itemSelectSpy).toHaveBeenCalled();
    expect(itemSelectSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: { label: 'Item 1', value: '1' },
      })
    );
  });
});
