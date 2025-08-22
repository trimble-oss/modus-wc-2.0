import { newSpecPage } from '@stencil/core/testing';
import { ModusWcUtilityPanel } from './modus-wc-utility-panel';

describe('modus-wc-utility-panel', () => {
  it('should render with default props', async () => {
    const { root } = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel></modus-wc-utility-panel>',
    });
    expect(root).toMatchSnapshot();
  });

  it('should render with expanded prop', async () => {
    const { root } = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true"></modus-wc-utility-panel>',
    });
    expect(root).toMatchSnapshot();
  });

  it('should render with pushContent prop', async () => {
    const { root } = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true" push-content="false"></modus-wc-utility-panel>',
    });
    expect(root).toMatchSnapshot();
  });

  it('should render with header slot', async () => {
    const { root } = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: `
        <modus-wc-utility-panel>
          <div slot="header">Panel Header</div>
          <div slot="body">Panel Body</div>
        </modus-wc-utility-panel>
      `,
    });
    expect(root).toMatchSnapshot();
  });

  it('should render with footer slot', async () => {
    const { root } = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: `
        <modus-wc-utility-panel>
          <div slot="body">Panel Body</div>
          <div slot="footer">Panel Footer</div>
        </modus-wc-utility-panel>
      `,
    });
    expect(root).toMatchSnapshot();
  });

  it('should emit panelOpened event when expanded changes to true', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel></modus-wc-utility-panel>',
    });

    const panelOpenedSpy = jest.fn();
    page.root?.addEventListener('panelOpened', panelOpenedSpy);

    if (page.root) {
      page.root.expanded = true;
      await page.waitForChanges();
    }

    expect(panelOpenedSpy).toHaveBeenCalled();
  });

  it('should emit panelClosed event when expanded changes to false', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true"></modus-wc-utility-panel>',
    });

    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    if (page.root) {
      page.root.expanded = false;
      await page.waitForChanges();
    }

    expect(panelClosedSpy).toHaveBeenCalled();
  });

  it('should adjust content margin when panel is already expanded on load', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: `
        <div>
          <div id="test-content">Test Content</div>
          <modus-wc-utility-panel expanded="true" push-content="true" target-content="#test-content"></modus-wc-utility-panel>
        </div>
      `,
    });

    // Find the content element
    const content = page.doc.querySelector('#test-content') as HTMLElement;

    // Manually trigger componentDidLoad to simulate lifecycle
    const component = page.rootInstance as ModusWcUtilityPanel;
    component.componentDidLoad();

    await page.waitForChanges();

    // Check that content margin was adjusted
    expect(content.style.marginInlineEnd).toBe('312px');
  });

  it('should not call adjustContent during initial load watcher', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const adjustContentSpy = jest.spyOn(component, 'adjustContent');

    // Simulate initial load watcher call
    component['isInitialLoad'] = true;
    component.handleExpandedChange(true);

    expect(adjustContentSpy).not.toHaveBeenCalled();
  });

  it('should adjust content when openPanel is called with pushContent', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: `
        <div>
          <div id="test-content-open">Test Content</div>
          <modus-wc-utility-panel push-content="true" target-content="#test-content-open"></modus-wc-utility-panel>
        </div>
      `,
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    component['isInitialLoad'] = false;

    const adjustContentSpy = jest.spyOn(component, 'adjustContent');
    const panelOpenedSpy = jest.fn();
    page.root?.addEventListener('panelOpened', panelOpenedSpy);

    component.openPanel();
    await page.waitForChanges();

    expect(adjustContentSpy).toHaveBeenCalled();
    expect(panelOpenedSpy).toHaveBeenCalled();
  });

  it('should adjust content when closePanel is called with pushContent', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: `
        <div>
          <div id="test-content-close">Test Content</div>
          <modus-wc-utility-panel expanded="true" push-content="true" target-content="#test-content-close"></modus-wc-utility-panel>
        </div>
      `,
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    component['isInitialLoad'] = false;

    const adjustContentSpy = jest.spyOn(component, 'adjustContent');
    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    component.closePanel();
    await page.waitForChanges();

    expect(adjustContentSpy).toHaveBeenCalled();
    expect(panelClosedSpy).toHaveBeenCalled();
  });

  it('should handle adjustContent with various scenarios', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: `
        <div>
          <div id="test-content-adjust">Test Content</div>
          <modus-wc-utility-panel push-content="true" target-content="#test-content-adjust"></modus-wc-utility-panel>
        </div>
      `,
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const content = page.doc.querySelector(
      '#test-content-adjust'
    ) as HTMLElement;

    // Test when expanded is true
    component.expanded = true;
    component.adjustContent();
    expect(content.style.marginInlineEnd).toBe('312px');
    expect(content.style.transition).toBe('margin-inline-end 0.3s ease-out');

    // Test when expanded is false
    component.expanded = false;
    component.adjustContent();
    expect(content.style.marginInlineEnd).toBe('0');

    // Test early return when no targetContent
    component.targetContent = undefined;
    const contentStyleBefore = content.style.marginInlineEnd;
    component.adjustContent();
    // Should not change the margin
    expect(content.style.marginInlineEnd).toBe(contentStyleBefore);

    // Test early return when pushContent is false
    component.targetContent = '#test-content-adjust';
    component.pushContent = false;
    component.adjustContent();
    // Should return early, no change to margin
    expect(content.style.marginInlineEnd).toBe('0');
  });

  it('should handle non-existent target content gracefully', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel push-content="true" target-content="#non-existent"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;

    // Should not throw error
    expect(() => component.adjustContent()).not.toThrow();
  });

  it('should call closePanel when handlePanelClose is invoked', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const closePanelSpy = jest.spyOn(component, 'closePanel');
    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    component.handlePanelClose();
    await page.waitForChanges();

    expect(closePanelSpy).toHaveBeenCalled();
    expect(panelClosedSpy).toHaveBeenCalled();
  });

  it('should not adjust content when openPanel is called without pushContent', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel push-content="false"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const adjustContentSpy = jest.spyOn(component, 'adjustContent');

    component.openPanel();
    await page.waitForChanges();

    expect(adjustContentSpy).not.toHaveBeenCalled();
  });

  it('should not adjust content when closePanel is called without pushContent', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true" push-content="false"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const adjustContentSpy = jest.spyOn(component, 'adjustContent');

    component.closePanel();
    await page.waitForChanges();

    expect(adjustContentSpy).not.toHaveBeenCalled();
  });
});
