import { newSpecPage } from '@stencil/core/testing';
import { ModusWcCollapse } from './modus-wc-collapse';
import { ModusWcIcon } from '../../atoms/modus-wc-icon/modus-wc-icon';

describe('modus-wc-collapse', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: '<modus-wc-collapse></modus-wc-collapse>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse, ModusWcIcon],
      html: '<modus-wc-collapse bordered="false" collapse-description="Test description" collapse-title="Test title" custom-class="test-class" expanded="true" icon="alert" icon-aria-label="Alert icon"></modus-wc-collapse>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with content', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: '<modus-wc-collapse collapse-title="With Content"><div>Test Content</div></modus-wc-collapse>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render in expanded state', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: '<modus-wc-collapse expanded="true" collapse-title="Expanded"><div>Expanded Content</div></modus-wc-collapse>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit expandedChange event when collapse is expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse collapse-title="collapse"></modus-wc-collapse>`,
    });

    const expandedChangeSpy = jest.fn();
    page.root!.addEventListener('expandedChange', expandedChangeSpy);

    const checkbox = page.root!.querySelector(
      '#collapse-checkbox'
    ) as HTMLElement;
    expect(checkbox).not.toBeNull();

    checkbox?.click();
    await page.waitForChanges();

    expect(expandedChangeSpy).toHaveBeenCalled();
    expect(expandedChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: true,
      })
    );
  });

  it('should emit expandedChange event when Enter key is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse></modus-wc-collapse>`,
    });

    const expandedChangeSpy = jest.fn();
    page.root!.addEventListener('expandedChange', expandedChangeSpy);

    const checkbox = page.root!.querySelector(
      '#collapse-checkbox'
    ) as HTMLElement;
    expect(checkbox).not.toBeNull();

    checkbox?.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));
    await page.waitForChanges();

    expect(expandedChangeSpy).toHaveBeenCalled();
    expect(expandedChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: true,
      })
    );
  });

  it('should emit expandedChange event when Space key is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse></modus-wc-collapse>`,
    });

    const expandedChangeSpy = jest.fn();
    page.root!.addEventListener('expandedChange', expandedChangeSpy);

    const checkbox = page.root!.querySelector(
      '#collapse-checkbox'
    ) as HTMLElement;
    expect(checkbox).not.toBeNull();

    checkbox?.dispatchEvent(new KeyboardEvent('keydown', { key: ' ' }));
    await page.waitForChanges();

    expect(expandedChangeSpy).toHaveBeenCalled();
    expect(expandedChangeSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        detail: true,
      })
    );
  });

  it('should not emit expandedChange event when content is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcCollapse],
      html: `<modus-wc-collapse></modus-wc-collapse>`,
    });

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
