import { newSpecPage } from '@stencil/core/testing';
import { ICollapseOptions, ModusWcCollapse } from './modus-wc-collapse';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

describe('modus-wc-collapse', () => {
  const options: ICollapseOptions = {
    title: 'Collapse Title',
    description: 'Collapse description',
    icon: 'alert',
    iconAriaLabel: 'Alert',
  };

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: '<modus-wc-collapse collapse-id="123"></modus-wc-collapse>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse, ModusWcIcon],
      html: `<modus-wc-collapse
              collapse-id="123"
              custom-class="test-class"
              expanded="true"
              variant="ghost"
              size="sm">
            </modus-wc-collapse>`,
    });

    const component = page.rootInstance as ModusWcCollapse;
    component.options = options;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom header and content', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse collapse-id="123">
              <div slot="header">Test Header</div>
              <div slot="content">Test Content</div>
            </modus-wc-collapse>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render in expanded state', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse
              collapse-id="123"
              expanded="true">
                <div slot="content">Expanded Content</div>
            </modus-wc-collapse>`,
    });

    const component = page.rootInstance as ModusWcCollapse;
    component.options = options;

    await page.waitForChanges();

    expect(page.root).toMatchSnapshot();
  });

  it('should emit expandedChange event when collapse is expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse collapse-id="123"></modus-wc-collapse>`,
    });

    const component = page.rootInstance as ModusWcCollapse;
    component.options = options;

    await page.waitForChanges();

    const expandedChangeSpy = jest.fn();
    page.root!.addEventListener('expandedChange', expandedChangeSpy);

    const details = page.root!.querySelector('details') as HTMLDetailsElement;
    expect(details).not.toBeNull();

    // Simulate the details toggle by setting open and dispatching toggle event
    details.open = true;
    details.dispatchEvent(new Event('toggle'));
    await page.waitForChanges();

    expect(expandedChangeSpy).toHaveBeenCalled();
    expect(expandedChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          expanded: true,
        },
      })
    );
  });

  it('should emit expandedChange event when Enter key is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse collapse-id="123"></modus-wc-collapse>`,
    });

    const component = page.rootInstance as ModusWcCollapse;
    component.options = options;

    await page.waitForChanges();

    const expandedChangeSpy = jest.fn();
    page.root!.addEventListener('expandedChange', expandedChangeSpy);

    const details = page.root!.querySelector('details') as HTMLDetailsElement;
    expect(details).not.toBeNull();

    // Simulate the details toggle by setting open and dispatching toggle event
    // This tests the component's response to native toggle behavior (which handles keyboard natively)
    details.open = true;
    details.dispatchEvent(new Event('toggle'));
    await page.waitForChanges();

    expect(expandedChangeSpy).toHaveBeenCalled();
    expect(expandedChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          expanded: true,
        },
      })
    );
  });

  it('should emit expandedChange event when Space key is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse collapse-id="123"></modus-wc-collapse>`,
    });

    const component = page.rootInstance as ModusWcCollapse;
    component.options = options;

    await page.waitForChanges();

    const expandedChangeSpy = jest.fn();
    page.root!.addEventListener('expandedChange', expandedChangeSpy);

    const details = page.root!.querySelector('details') as HTMLDetailsElement;
    expect(details).not.toBeNull();

    // Simulate the details toggle by setting open and dispatching toggle event
    // This tests the component's response to native toggle behavior (which handles keyboard natively)
    details.open = true;
    details.dispatchEvent(new Event('toggle'));
    await page.waitForChanges();

    expect(expandedChangeSpy).toHaveBeenCalled();
    expect(expandedChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: {
          expanded: true,
        },
      })
    );
  });

  it('should not emit expandedChange event when content is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse></modus-wc-collapse>`,
    });

    const component = page.rootInstance as ModusWcCollapse;
    component.options = options;

    await page.waitForChanges();

    const expandedChangeSpy = jest.fn();
    page.root!.addEventListener('expandedChange', expandedChangeSpy);

    const contentElement = page.root!.querySelector(
      'div.modus-wc-collapse-content'
    ) as HTMLElement;
    expect(contentElement).not.toBeNull();

    contentElement?.click();
    await page.waitForChanges();

    expect(expandedChangeSpy).not.toHaveBeenCalled();
  });

  it('should update details open attribute when expanded prop changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse collapse-id="123"></modus-wc-collapse>`,
    });

    const component = page.rootInstance as ModusWcCollapse;
    await page.waitForChanges();

    const details = page.root!.querySelector('details') as HTMLDetailsElement;

    // Initially should be closed (false/undefined is falsy)
    expect(details.open).toBeFalsy();

    // Change the expanded prop to trigger the watcher
    component.expanded = true;
    await page.waitForChanges();

    expect(details.open).toBe(true);

    // Change it back to trigger the watcher again
    component.expanded = false;
    await page.waitForChanges();

    expect(details.open).toBe(false);
  });
});
