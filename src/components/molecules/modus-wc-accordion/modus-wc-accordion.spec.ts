import { newSpecPage } from '@stencil/core/testing';
import { IModusWcAccordionItem, ModusWcAccordion } from './modus-wc-accordion';

describe('modus-wc-accordion', () => {
  const items: IModusWcAccordionItem[] = [
    {
      customClass: 'test-class',
      description: 'Sports played by a team.',
      expanded: true,
      icon: 'people_group',
      iconAriaLabel: 'Team icon',
      title: 'Team Sports',
    },
    {
      customClass: 'test-class',
      description: 'Sports played by individuals.',
      expanded: false,
      icon: 'person',
      iconAriaLabel: 'Person icon',
      title: 'Individual Sports',
    },
    {
      customClass: 'test-class',
      description: 'Sports played in water.',
      expanded: false,
      icon: 'fog',
      iconAriaLabel: 'Water icon',
      title: 'Water Sports',
    },
  ];

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAccordion],
      html: '<modus-wc-accordion />',
    });

    const component = page.rootInstance as ModusWcAccordion;
    component.items = items;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAccordion],
      html: '<modus-wc-accordion bordered="false" custom-class="test-class" size="sm"><div slot="item-0">Item 0 Content</div><div slot="item-2">Item 2 Content</div></modus-wc-accordion>',
    });

    const component = page.rootInstance as ModusWcAccordion;
    component.items = items;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit expandedChange event when collapse panel expanded state changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcAccordion],
      html: '<modus-wc-accordion></modus-wc-accordion>',
    });

    const component = page.rootInstance as ModusWcAccordion;
    component.items = items;
    await page.waitForChanges();

    const expandedChangeSpy = jest.fn();
    page.root?.addEventListener('expandedChange', expandedChangeSpy);

    const collapsePanel = page.root?.querySelector('modus-wc-collapse');
    collapsePanel?.dispatchEvent(
      new CustomEvent('expandedChange', {
        detail: { expanded: false }, // Simulating collapse
      })
    );
    await page.waitForChanges();

    expect(expandedChangeSpy).toHaveBeenCalledTimes(1);
    expect(expandedChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          expanded: false,
          index: 0,
        },
      })
    );
  });
});
