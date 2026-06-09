import { newSpecPage } from '@stencil/core/testing';
import { ModusWcBottomSheet } from './modus-wc-bottom-sheet';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcHandle } from '../modus-wc-handle/modus-wc-handle';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWcPanel } from '../modus-wc-panel/modus-wc-panel';
import { ModusWCTypography } from '../modus-wc-typography/modus-wc-typography';

describe('modus-wc-bottom-sheet', () => {
  const bottomSheetComponents = [
    ModusWcBottomSheet,
    ModusWcPanel,
    ModusWcHandle,
    ModusWcButton,
    ModusWcIcon,
    ModusWCTypography,
  ];

  const getHandle = (page: { root?: HTMLElement | null }) =>
    page.root?.querySelector('modus-wc-handle') as HTMLElement;

  const getPanel = (page: { root?: HTMLElement | null }) =>
    page.root?.querySelector('.modus-wc-panel') as HTMLElement;

  // The mock test environment does not set window.innerHeight; give it a
  // realistic viewport so the upward-drag height clamp behaves like a browser.
  beforeEach(() => {
    Object.defineProperty(window, 'innerHeight', {
      value: 800,
      configurable: true,
      writable: true,
    });
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet aria-label="Bottom sheet"></modus-wc-bottom-sheet>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should be hidden and translated off-screen when not visible', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });

    expect(page.root?.getAttribute('aria-hidden')).toBe('true');
    expect(page.root?.style.transform).toBe('translate(-50%, 100%)');
  });

  it('should be visible and at rest when visible', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.getAttribute('aria-hidden')).toBe('false');
    expect(page.root?.style.transform).toBe('translate(-50%, 0)');
  });

  it('should toggle aria-modal with the visible state so AT constrains navigation', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;

    // Hidden: aria-modal must be absent so the dialog is not flagged as modal.
    expect(page.root?.hasAttribute('aria-modal')).toBe(false);

    component.visible = true;
    await page.waitForChanges();

    // Visible: aria-modal="true" keeps screen readers within the sheet's content.
    expect(page.root?.getAttribute('aria-modal')).toBe('true');
  });

  it('should fill the height and apply the expanded class when displayMode is expanded', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="expanded"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.className).toContain('modus-wc-bottom-sheet-expanded');
    expect(getPanel(page).style.height).toBe('95dvh');
  });

  it('should step up to expanded and emit displayModeChange when ArrowUp is pressed on the handle', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.displayMode).toBe('expanded');
    expect(displayModeChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { displayMode: 'expanded' } })
    );
  });

  it('should step down to default when ArrowDown is pressed while expanded', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="expanded"></modus-wc-bottom-sheet>',
    });

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.displayMode).toBe('default');
    expect(component.visible).toBe(true);
  });

  it('should step down to minimized (not close) and emit displayModeChange when ArrowDown is pressed while at default', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.visible).toBe(true);
    expect(component.displayMode).toBe('minimized');
    expect(displayModeChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { displayMode: 'minimized' } })
    );
  });

  it('should not step up two rungs in a single ArrowUp from minimized', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="minimized"></modus-wc-bottom-sheet>',
    });

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    // Interactions are progressive: minimized -> default (never straight to expanded).
    expect(component.displayMode).toBe('default');
  });

  it('should close but preserve the displayMode when Escape is pressed on the handle', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="expanded"></modus-wc-bottom-sheet>',
    });

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.visible).toBe(false);
    // The mode is preserved while hidden so reopening restores it.
    expect(component.displayMode).toBe('expanded');
  });

  it('should step down to minimized (not close) when dragged down past the threshold', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);
    // jsdom reports offsetHeight as 0; stub it so the step-down threshold (40% of
    // 500 = 200px) is actually exercised by the 300px drag below.
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 500 });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.visible).toBe(true);
    expect(component.displayMode).toBe('minimized');
    expect(displayModeChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { displayMode: 'minimized' } })
    );
  });

  it('should NOT change displayMode when dragged down below the threshold', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);
    // Threshold is 40% of 500 = 200px; a 150px drag must snap back, not minimize.
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 500 });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 250 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.visible).toBe(true);
    expect(component.displayMode).toBe('default');
    expect(displayModeChange).not.toHaveBeenCalled();
  });

  it('should stay minimized and not close when dragged down again', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="minimized"></modus-wc-bottom-sheet>',
    });
    const sheetVisibilityChange = jest.fn();
    page.root?.addEventListener('sheetVisibilityChange', sheetVisibilityChange);

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.visible).toBe(true);
    expect(component.displayMode).toBe('minimized');
    expect(sheetVisibilityChange).not.toHaveBeenCalled();
  });

  it('should hide content and only show the handle when minimized', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="minimized"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.className).toContain('modus-wc-bottom-sheet-minimized');
    expect(getPanel(page).style.height).toBe('auto');
    expect(page.root?.querySelector('modus-wc-handle')).not.toBeNull();
  });

  it('should restore from minimized to default when dragged up', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="minimized"></modus-wc-bottom-sheet>',
    });
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 300 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.displayMode).toBe('default');
    expect(component.visible).toBe(true);
    expect(displayModeChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { displayMode: 'default' } })
    );
  });

  it('should step up to expanded when dragged up past the threshold from default', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 300 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.displayMode).toBe('expanded');
    expect(component.visible).toBe(true);
  });

  it('should snap back without a displayMode change on a net-zero drag', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 180 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.visible).toBe(true);
    expect(component.displayMode).toBe('default');
    expect(page.root?.style.transform).toBe('translate(-50%, 0)');
  });

  it('should ignore pointer drags when the sheet is not visible', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.visible).toBe(false);
    expect(page.root?.className).not.toContain(
      'modus-wc-bottom-sheet-dragging'
    );
    expect(page.root?.style.transform).toBe('translate(-50%, 100%)');
  });

  it('should follow the pointer downward while dragging', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 250 }));
    await page.waitForChanges();

    expect(page.root?.className).toContain('modus-wc-bottom-sheet-dragging');
    expect(page.root?.style.transform).toBe('translate(-50%, 150px)');

    document.dispatchEvent(new MouseEvent('pointerup'));
  });

  it('should grow the sheet height live while dragging upward', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });

    // The sheet starts at a 300px rest height; dragging up 50px should grow it
    // live to 350px (clamped to the 800px viewport set in beforeEach). Stay
    // below the 64px expand threshold so the sheet snaps back on release.
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 300 });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 300 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 250 }));
    await page.waitForChanges();

    expect(page.root?.className).toContain('modus-wc-bottom-sheet-dragging');
    expect(page.root?.style.transform).toBe('translate(-50%, 0)');
    expect(getPanel(page).style.height).toBe('350px');

    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();
    expect(page.root?.className).not.toContain(
      'modus-wc-bottom-sheet-dragging'
    );
    expect(page.root?.className).not.toContain(
      'modus-wc-bottom-sheet-expanded'
    );
    expect(getPanel(page).style.height).toBe('auto');
  });

  it('should step down to the default height when dragged down while expanded', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="expanded"></modus-wc-bottom-sheet>',
    });
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);
    // jsdom reports offsetHeight as 0; stub it so the step-down threshold is real.
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 500 });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.displayMode).toBe('default');
    expect(component.visible).toBe(true);
    expect(displayModeChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { displayMode: 'default' } })
    );
  });

  it('should ignore unrelated keys on the handle', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.visible).toBe(true);
    expect(component.displayMode).toBe('default');
  });

  it('should apply a custom class to the host', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet custom-class="my-sheet"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.className).toContain('my-sheet');
  });

  it('should not re-emit displayModeChange when already expanded', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="expanded"></modus-wc-bottom-sheet>',
    });
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp' })
    );
    await page.waitForChanges();

    expect(displayModeChange).not.toHaveBeenCalled();
  });

  it('should not re-emit displayModeChange when already minimized', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="minimized"></modus-wc-bottom-sheet>',
    });
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown' })
    );
    await page.waitForChanges();

    expect(displayModeChange).not.toHaveBeenCalled();
  });

  it('should treat undefined displayMode as default when stepping up', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    component.displayMode = undefined;
    await page.waitForChanges();

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp' })
    );
    await page.waitForChanges();

    expect(component.displayMode).toBe('expanded');
  });

  it('should treat undefined displayMode as default when stepping down', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    component.displayMode = undefined;
    await page.waitForChanges();

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown' })
    );
    await page.waitForChanges();

    expect(component.displayMode).toBe('minimized');
  });

  it('should not re-emit sheetVisibilityChange when already hidden', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });
    const sheetVisibilityChange = jest.fn();
    page.root?.addEventListener('sheetVisibilityChange', sheetVisibilityChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape' })
    );
    await page.waitForChanges();

    expect(sheetVisibilityChange).not.toHaveBeenCalled();
  });

  it('should remove the document drag listeners when disconnected mid-drag', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const documentSpy = jest.spyOn(document, 'removeEventListener');

    // Begin a drag so the document-level listeners are actually attached.
    getHandle(page).dispatchEvent(
      new MouseEvent('pointerdown', { clientY: 100 })
    );

    component.disconnectedCallback();

    expect(documentSpy).toHaveBeenCalledWith(
      'pointermove',
      expect.any(Function)
    );
    expect(documentSpy).toHaveBeenCalledWith('pointerup', expect.any(Function));
    documentSpy.mockRestore();
  });

  it('should reset the grab cursor when disconnected mid-drag', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;

    getHandle(page).dispatchEvent(
      new MouseEvent('pointerdown', { clientY: 100 })
    );
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 200 }));
    await page.waitForChanges();
    expect(page.root?.className).toContain('modus-wc-bottom-sheet-dragging');
    expect(document.body.style.cursor).toBe('grabbing');

    component.disconnectedCallback();

    expect(document.body.style.cursor).toBe('');
  });

  it('should fall back to the default step-down threshold when dragStepThreshold is undefined', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    component.dragStepThreshold = undefined;
    await page.waitForChanges();
    // With the threshold cleared, the fallback (0.4 * 500 = 200px) applies, so
    // a 300px drag down must still minimize the sheet.
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 500 });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    expect(component.displayMode).toBe('minimized');
  });

  it('should be inert when not visible and not inert when visible', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    expect(page.root?.hasAttribute('inert')).toBe(true);

    component.visible = true;
    await page.waitForChanges();

    expect(page.root?.hasAttribute('inert')).toBe(false);
  });

  it('should become inert, preserve the displayMode, and emit only sheetVisibilityChange when visible is set to false externally', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="expanded"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const displayModeChange = jest.fn();
    const sheetVisibilityChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);
    page.root?.addEventListener('sheetVisibilityChange', sheetVisibilityChange);
    expect(page.root?.hasAttribute('inert')).toBe(false);

    component.visible = false;
    await page.waitForChanges();

    expect(page.root?.hasAttribute('inert')).toBe(true);
    // The display mode is preserved while hidden, so it is unchanged and emits no event.
    expect(component.displayMode).toBe('expanded');
    expect(displayModeChange).not.toHaveBeenCalled();
    expect(sheetVisibilityChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { visible: false } })
    );
  });

  it('should preserve and restore the displayMode across a hide/show cycle', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="minimized"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;

    component.visible = false;
    await page.waitForChanges();
    expect(component.displayMode).toBe('minimized');

    component.visible = true;
    await page.waitForChanges();

    // Reopening restores the previously selected mode (not 'default').
    expect(component.displayMode).toBe('minimized');
    expect(page.root?.className).toContain('modus-wc-bottom-sheet-minimized');
  });

  it('should emit sheetVisibilityChange when visible is toggled via property', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const sheetVisibilityChange = jest.fn();
    page.root?.addEventListener('sheetVisibilityChange', sheetVisibilityChange);

    component.visible = true;
    await page.waitForChanges();
    expect(sheetVisibilityChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { visible: true } })
    );

    component.visible = false;
    await page.waitForChanges();
    expect(sheetVisibilityChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { visible: false } })
    );
  });

  it('should emit displayModeChange when displayMode is set to minimized via property', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);

    component.displayMode = 'minimized';
    await page.waitForChanges();

    expect(component.displayMode).toBe('minimized');
    expect(displayModeChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { displayMode: 'minimized' } })
    );
  });

  it('should emit displayModeChange when displayMode is set to expanded via property', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);

    component.displayMode = 'expanded';
    await page.waitForChanges();

    expect(component.displayMode).toBe('expanded');
    expect(displayModeChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { displayMode: 'expanded' } })
    );
  });

  it('should apply directly (not step) when displayMode changes from expanded to minimized via property', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="expanded"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);

    component.displayMode = 'minimized';
    await page.waitForChanges();

    // Property changes apply directly; only interactions are progressive.
    expect(component.displayMode).toBe('minimized');
    expect(displayModeChange).toHaveBeenCalledTimes(1);
    expect(displayModeChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { displayMode: 'minimized' } })
    );
  });

  it('should apply directly (not step) when displayMode changes from minimized to expanded via property', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true" display-mode="minimized"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const displayModeChange = jest.fn();
    page.root?.addEventListener('displayModeChange', displayModeChange);

    component.displayMode = 'expanded';
    await page.waitForChanges();

    expect(component.displayMode).toBe('expanded');
    expect(displayModeChange).toHaveBeenCalledTimes(1);
    expect(displayModeChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { displayMode: 'expanded' } })
    );
  });

  it('should move focus into the sheet when it becomes visible (WCAG 2.4.3)', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const focusSpy = jest.spyOn(page.root as HTMLElement, 'focus');

    component.visible = true;
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalledTimes(1);
  });

  it('should not move focus when the sheet is hidden', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const focusSpy = jest.spyOn(page.root as HTMLElement, 'focus');

    component.visible = false;
    await page.waitForChanges();

    expect(focusSpy).not.toHaveBeenCalled();
  });

  it('should not steal focus on initial render when visible at load', async () => {
    const focusSpy = jest.spyOn(HTMLElement.prototype, 'focus');
    await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });

    expect(focusSpy).not.toHaveBeenCalled();
    focusSpy.mockRestore();
  });

  it('should not render the header/footer wrappers when no slot content is provided', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });

    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-header')
    ).toBeNull();
    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-footer')
    ).toBeNull();
  });

  it('should render the built-in header when the header prop is set', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    component.header = {
      showBackButton: true,
      title: 'Title',
      subtitle: 'Subtitle',
      showCloseButton: true,
    };
    await page.waitForChanges();

    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-header-top')
    ).not.toBeNull();
    expect(
      page.root?.querySelector(
        '.modus-wc-bottom-sheet-header-start modus-wc-button'
      )
    ).not.toBeNull();
    expect(page.root?.querySelectorAll('modus-wc-typography').length).toBe(2);
  });

  it('should render only the header fields that are provided', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    component.header = {
      title: 'Title only',
    };
    await page.waitForChanges();

    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-header')
    ).not.toBeNull();
    expect(page.root?.querySelectorAll('modus-wc-typography').length).toBe(1);
    expect(
      page.root?.querySelector(
        '.modus-wc-bottom-sheet-header-start modus-wc-button'
      )
    ).toBeNull();
    expect(
      page.root?.querySelector(
        '.modus-wc-bottom-sheet-header-top > modus-wc-button'
      )
    ).toBeNull();
  });

  it('should emit headerBackClick when the back button is clicked', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    component.header = { showBackButton: true };
    await page.waitForChanges();

    const headerBackClick = jest.fn();
    page.root?.addEventListener('headerBackClick', headerBackClick);

    const backButton = page.root?.querySelector(
      '.modus-wc-bottom-sheet-header-start modus-wc-button'
    ) as HTMLElement;
    backButton.dispatchEvent(new CustomEvent('buttonClick'));
    await page.waitForChanges();

    expect(headerBackClick).toHaveBeenCalled();
    expect(component.visible).toBe(true);
  });

  it('should close and emit headerCloseClick when the close button is clicked', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet visible="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    component.header = { showCloseButton: true };
    await page.waitForChanges();

    const headerCloseClick = jest.fn();
    page.root?.addEventListener('headerCloseClick', headerCloseClick);

    const closeButton = page.root?.querySelector(
      '.modus-wc-bottom-sheet-header-top > modus-wc-button'
    ) as HTMLElement;
    closeButton.dispatchEvent(new CustomEvent('buttonClick'));
    await page.waitForChanges();

    expect(headerCloseClick).toHaveBeenCalled();
    expect(component.visible).toBe(false);
  });

  it('should render the header/footer wrappers when slot content is provided', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: `<modus-wc-bottom-sheet visible="true">
        <div slot="header">Header</div>
        <div slot="footer">Footer</div>
      </modus-wc-bottom-sheet>`,
    });

    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-header')
    ).not.toBeNull();
    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-footer')
    ).not.toBeNull();
  });

  it('should render only the slots that are provided', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: `<modus-wc-bottom-sheet visible="true">
        <div slot="header">Header</div>
      </modus-wc-bottom-sheet>`,
    });

    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-header')
    ).not.toBeNull();
    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-footer')
    ).toBeNull();
  });
});
