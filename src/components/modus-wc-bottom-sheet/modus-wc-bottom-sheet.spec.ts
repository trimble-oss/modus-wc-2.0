import { newSpecPage } from '@stencil/core/testing';
import { ModusWcBottomSheet } from './modus-wc-bottom-sheet';
import { ModusWcHandle } from '../modus-wc-handle/modus-wc-handle';
import { ModusWcPanel } from '../modus-wc-panel/modus-wc-panel';

describe('modus-wc-bottom-sheet', () => {
  const getHandle = (page: { root?: HTMLElement | null }) =>
    page.root?.querySelector('modus-wc-handle') as HTMLElement;

  const getPanel = (page: { root?: HTMLElement | null }) =>
    page.root?.querySelector('.modus-wc-panel') as HTMLElement;

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet aria-label="Bottom sheet"></modus-wc-bottom-sheet>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should be hidden and translated off-screen when closed', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });

    expect(page.root?.getAttribute('aria-hidden')).toBe('true');
    expect(page.root?.style.transform).toBe('translate(-50%, 100%)');
  });

  it('should be visible and at rest when open', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.getAttribute('aria-hidden')).toBe('false');
    expect(page.root?.style.transform).toBe('translate(-50%, 0)');
  });

  it('should fill the height and apply the expanded class when expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true" expanded="true"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.className).toContain('modus-wc-bottom-sheet-expanded');
    expect(getPanel(page).style.height).toBe('100dvh');
  });

  it('should expand and emit expandedChange when ArrowUp is pressed on the handle', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });
    const expandedChange = jest.fn();
    page.root?.addEventListener('expandedChange', expandedChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.expanded).toBe(true);
    expect(expandedChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { expanded: true } })
    );
  });

  it('should collapse when ArrowDown is pressed while expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true" expanded="true"></modus-wc-bottom-sheet>',
    });

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.expanded).toBe(false);
    expect(component.open).toBe(true);
  });

  it('should close and emit openChange when ArrowDown is pressed while not expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });
    const openChange = jest.fn();
    page.root?.addEventListener('openChange', openChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.open).toBe(false);
    expect(openChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { open: false } })
    );
  });

  it('should close when Escape is pressed on the handle', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true" expanded="true"></modus-wc-bottom-sheet>',
    });

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.open).toBe(false);
    expect(component.expanded).toBe(false);
  });

  it('should dismiss when dragged down past the threshold', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });
    const openChange = jest.fn();
    page.root?.addEventListener('openChange', openChange);

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.open).toBe(false);
    expect(openChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { open: false } })
    );
  });

  it('should expand when dragged up past the threshold', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 300 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.expanded).toBe(true);
    expect(component.open).toBe(true);
  });

  it('should snap back without state change on a net-zero drag', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 180 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.open).toBe(true);
    expect(component.expanded).toBe(false);
    expect(page.root?.style.transform).toBe('translate(-50%, 0)');
  });

  it('should ignore pointer drags when the sheet is closed', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.isDragging).toBe(false);
    expect(component.open).toBe(false);
  });

  it('should follow the pointer downward while dragging', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 250 }));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.isDragging).toBe(true);
    expect(component.dragOffset).toBe(150);
    expect(page.root?.style.transform).toBe('translate(-50%, 150px)');

    document.dispatchEvent(new MouseEvent('pointerup'));
  });

  it('should grow the sheet height live while dragging upward', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 300 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 200 }));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.isDragging).toBe(true);
    expect(component.dragOffset).toBe(0);
    expect(component.dragHeight).toBe('100px');
    expect(page.root?.className).toContain('modus-wc-bottom-sheet-dragging');
    expect(getPanel(page).style.height).toBe('100px');

    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();
    expect(component.dragHeight).toBeNull();
  });

  it('should collapse to the rest height when dragged down while expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true" expanded="true"></modus-wc-bottom-sheet>',
    });
    const expandedChange = jest.fn();
    page.root?.addEventListener('expandedChange', expandedChange);

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.expanded).toBe(false);
    expect(component.open).toBe(true);
    expect(expandedChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { expanded: false } })
    );
  });

  it('should ignore unrelated keys on the handle', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Enter' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.open).toBe(true);
    expect(component.expanded).toBe(false);
  });

  it('should apply a custom class to the host', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet custom-class="my-sheet"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.className).toContain('my-sheet');
  });

  it('should not re-emit expandedChange when already expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true" expanded="true"></modus-wc-bottom-sheet>',
    });
    const expandedChange = jest.fn();
    page.root?.addEventListener('expandedChange', expandedChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowUp' })
    );
    await page.waitForChanges();

    expect(expandedChange).not.toHaveBeenCalled();
  });

  it('should not re-emit openChange when already closed', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });
    const openChange = jest.fn();
    page.root?.addEventListener('openChange', openChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'Escape' })
    );
    await page.waitForChanges();

    expect(openChange).not.toHaveBeenCalled();
  });

  it('should remove drag listeners when disconnected', async () => {
    const page = await newSpecPage({
      components: [ModusWcBottomSheet, ModusWcPanel, ModusWcHandle],
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    const documentSpy = jest.spyOn(document, 'removeEventListener');

    component.disconnectedCallback();

    expect(documentSpy).toHaveBeenCalledWith(
      'pointermove',
      expect.any(Function)
    );
    expect(documentSpy).toHaveBeenCalledWith('pointerup', expect.any(Function));

    // A drag attempt after disconnect should not change state.
    getHandle(page).dispatchEvent(
      new MouseEvent('pointerdown', { clientY: 100 })
    );
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    expect(component.open).toBe(true);
    documentSpy.mockRestore();
  });
});
