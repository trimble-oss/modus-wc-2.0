import { newSpecPage } from '@stencil/core/testing';
import { IModusWcCollapseOptions, ModusWcCollapse } from './modus-wc-collapse';
import { ModusWcIcon } from '../../atoms/modus-wc-icon/modus-wc-icon';

describe('modus-wc-collapse', () => {
  const options: IModusWcCollapseOptions = {
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
              bordered="false"
              collapse-id="123"
              custom-class="test-class"
              expanded="true"
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

    const checkbox = page.root!.querySelector('#123-checkbox') as HTMLElement;
    expect(checkbox).not.toBeNull();

    checkbox?.click();
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

    const checkbox = page.root!.querySelector('#123-checkbox') as HTMLElement;
    expect(checkbox).not.toBeNull();

    checkbox?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
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

    const checkbox = page.root!.querySelector('#123-checkbox') as HTMLElement;
    expect(checkbox).not.toBeNull();

    checkbox?.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
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
});
