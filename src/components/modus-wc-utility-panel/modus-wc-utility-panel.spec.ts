import { newSpecPage } from '@stencil/core/testing';
import { ModusWcUtilityPanel } from './modus-wc-utility-panel';

interface UtilityPanelPrivateHarness {
  expanded: boolean;
  panelRef?: HTMLElement;
  handleClickOutside: (event: MouseEvent) => void;
}

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
          <modus-wc-utility-panel expanded="true" push-content="true"></modus-wc-utility-panel>
        </div>
      `,
    });

    // Find the content element and component
    const content = page.doc.querySelector('#test-content') as HTMLElement;
    const component = page.rootInstance as ModusWcUtilityPanel;

    // Set the targetElement reference
    component.targetElement = content;

    // Manually trigger componentDidLoad to simulate lifecycle
    component.componentDidLoad();

    await page.waitForChanges();

    // Check that CSS classes were added
    expect(
      content.classList.contains('modus-wc-utility-panel-push-target')
    ).toBe(true);
    expect(content.classList.contains('modus-wc-utility-panel-pushed')).toBe(
      true
    );
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
          <modus-wc-utility-panel push-content="true"></modus-wc-utility-panel>
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
          <modus-wc-utility-panel expanded="true" push-content="true"></modus-wc-utility-panel>
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
          <modus-wc-utility-panel push-content="true"></modus-wc-utility-panel>
        </div>
      `,
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const content = page.doc.querySelector(
      '#test-content-adjust'
    ) as HTMLElement;

    // Set the targetElement reference
    component.targetElement = content;

    // Test when expanded is true
    component.expanded = true;
    component.adjustContent();
    expect(
      content.classList.contains('modus-wc-utility-panel-push-target')
    ).toBe(true);
    expect(content.classList.contains('modus-wc-utility-panel-pushed')).toBe(
      true
    );

    // Test when expanded is false
    component.expanded = false;
    component.adjustContent();
    expect(
      content.classList.contains('modus-wc-utility-panel-push-target')
    ).toBe(true);
    expect(content.classList.contains('modus-wc-utility-panel-pushed')).toBe(
      false
    );

    // Test early return when no targetElement
    component.targetElement = undefined;
    const hadPushedClass = content.classList.contains(
      'modus-wc-utility-panel-pushed'
    );
    component.adjustContent();
    // Should not change the classes when no targetElement
    expect(content.classList.contains('modus-wc-utility-panel-pushed')).toBe(
      hadPushedClass
    );

    // Test early return when pushContent is false
    component.targetElement = content;
    component.pushContent = false;
    component.adjustContent();
    // Should return early, no change to classes
    expect(content.classList.contains('modus-wc-utility-panel-pushed')).toBe(
      hadPushedClass
    );
  });

  it('should handle non-existent target content gracefully', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel push-content="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    // Don't set targetElement - should handle gracefully

    // Should not throw error when no targetElement is set
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

  it('should apply customClass to the outer div', async () => {
    const { root } = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel custom-class="my-custom-class"></modus-wc-utility-panel>',
    });

    const outerDiv = root?.querySelector('.modus-wc-utility-panel');
    expect(outerDiv?.classList.contains('modus-wc-utility-panel')).toBe(true);
    expect(outerDiv?.classList.contains('my-custom-class')).toBe(true);
  });

  it('should render backdrop when backgroundOverlay and expanded are true', async () => {
    const { root } = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true" background-overlay="true"></modus-wc-utility-panel>',
    });

    const backdrop = root?.querySelector('.modus-wc-utility-panel-backdrop');
    expect(backdrop).toBeTruthy();
    expect(backdrop?.getAttribute('aria-hidden')).toBe('true');
    expect(root).toMatchSnapshot();
  });

  it('should not render backdrop when backgroundOverlay is false', async () => {
    const { root } = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true" background-overlay="false"></modus-wc-utility-panel>',
    });

    expect(root?.querySelector('.modus-wc-utility-panel-backdrop')).toBeNull();
  });

  it('should not render backdrop when collapsed even if backgroundOverlay is true', async () => {
    const { root } = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel background-overlay="true"></modus-wc-utility-panel>',
    });

    expect(root?.querySelector('.modus-wc-utility-panel-backdrop')).toBeNull();
  });

  it('should re-adjust content when targetElement changes while expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: `
        <div>
          <div id="target-1">Target 1</div>
          <div id="target-2">Target 2</div>
          <modus-wc-utility-panel expanded="true" push-content="true"></modus-wc-utility-panel>
        </div>
      `,
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const target1 = page.doc.querySelector('#target-1') as HTMLElement;
    const target2 = page.doc.querySelector('#target-2') as HTMLElement;

    component.targetElement = target1;
    component.handleTargetChange();
    expect(target1.classList.contains('modus-wc-utility-panel-pushed')).toBe(
      true
    );

    component.targetElement = target2;
    component.handleTargetChange();
    expect(target2.classList.contains('modus-wc-utility-panel-pushed')).toBe(
      true
    );
  });

  it('should not re-adjust content when targetElement changes while collapsed', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel push-content="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const adjustContentSpy = jest.spyOn(component, 'adjustContent');

    const target = page.doc.createElement('div');
    component.targetElement = target;
    component.handleTargetChange();

    expect(adjustContentSpy).not.toHaveBeenCalled();
  });

  it('should collapse when Escape is pressed while expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    page.doc.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
    );
    await page.waitForChanges();

    expect(component.expanded).toBe(false);
    expect(panelClosedSpy).toHaveBeenCalled();
  });

  it('should not collapse when Escape is pressed while collapsed', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    page.doc.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
    );
    await page.waitForChanges();

    expect(component.expanded).toBe(false);
    expect(panelClosedSpy).not.toHaveBeenCalled();
  });

  it('should collapse when clicking outside if collapseOnClickOutside is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true" collapse-on-click-outside="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    page.doc.body.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    await page.waitForChanges();

    expect(component.expanded).toBe(false);
    expect(panelClosedSpy).toHaveBeenCalled();
  });

  it('should not collapse when clicking inside the panel with collapseOnClickOutside', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true" collapse-on-click-outside="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const panel = page.root?.querySelector(
      '.modus-wc-utility-panel'
    ) as HTMLElement;
    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    panel.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    await page.waitForChanges();

    expect(component.expanded).toBe(true);
    expect(panelClosedSpy).not.toHaveBeenCalled();
  });

  it('should not collapse on outside click when collapseOnClickOutside is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    page.doc.body.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    await page.waitForChanges();

    expect(component.expanded).toBe(true);
    expect(panelClosedSpy).not.toHaveBeenCalled();
  });

  it('should remove document listeners on disconnect', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    component.disconnectedCallback();

    page.doc.dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape', bubbles: true })
    );
    await page.waitForChanges();

    expect(component.expanded).toBe(true);
  });

  it('should register click-outside listener when collapseOnClickOutside becomes true', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    component.collapseOnClickOutside = true;
    component.handleCollapseOnClickOutsideChange(true);

    page.doc.body.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    await page.waitForChanges();

    expect(component.expanded).toBe(false);
  });

  it('should remove click-outside listener when collapseOnClickOutside becomes false', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true" collapse-on-click-outside="true"></modus-wc-utility-panel>',
    });

    const component = page.rootInstance as ModusWcUtilityPanel;
    component.collapseOnClickOutside = false;
    component.handleCollapseOnClickOutsideChange(false);

    page.doc.body.dispatchEvent(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    await page.waitForChanges();

    expect(component.expanded).toBe(true);
  });

  it('should not collapse on outside click when panel ref is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true" collapse-on-click-outside="true"></modus-wc-utility-panel>',
    });

    const component =
      page.rootInstance as unknown as UtilityPanelPrivateHarness;
    component.panelRef = undefined;
    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    component.handleClickOutside(
      new MouseEvent('click', { bubbles: true, cancelable: true })
    );
    await page.waitForChanges();

    expect(component.expanded).toBe(true);
    expect(panelClosedSpy).not.toHaveBeenCalled();
  });

  it('should collapse using event target when composedPath is unavailable', async () => {
    const page = await newSpecPage({
      components: [ModusWcUtilityPanel],
      html: '<modus-wc-utility-panel expanded="true" collapse-on-click-outside="true"></modus-wc-utility-panel>',
    });

    const component =
      page.rootInstance as unknown as UtilityPanelPrivateHarness;
    const outsideTarget = page.doc.createElement('div');
    const panelClosedSpy = jest.fn();
    page.root?.addEventListener('panelClosed', panelClosedSpy);

    const event = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
    });
    Object.defineProperty(event, 'target', {
      value: outsideTarget,
      configurable: true,
    });
    Object.defineProperty(event, 'composedPath', {
      value: undefined,
      configurable: true,
    });

    component.handleClickOutside(event);
    await page.waitForChanges();

    expect(component.expanded).toBe(false);
    expect(panelClosedSpy).toHaveBeenCalled();
  });
});
