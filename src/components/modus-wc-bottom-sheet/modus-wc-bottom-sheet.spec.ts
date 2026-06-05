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

  it('should be hidden and translated off-screen when closed', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });

    expect(page.root?.getAttribute('aria-hidden')).toBe('true');
    expect(page.root?.style.transform).toBe('translate(-50%, 100%)');
  });

  it('should be visible and at rest when open', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.getAttribute('aria-hidden')).toBe('false');
    expect(page.root?.style.transform).toBe('translate(-50%, 0)');
  });

  it('should fill the height and apply the expanded class when expanded', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true" expanded="true"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.className).toContain('modus-wc-bottom-sheet-expanded');
    expect(getPanel(page).style.height).toBe('100dvh');
  });

  it('should expand and emit expandedChange when ArrowUp is pressed on the handle', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
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
      components: bottomSheetComponents,
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

  it('should minimize (not close) and emit minimizedChange when ArrowDown is pressed while not expanded', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });
    const minimizedChange = jest.fn();
    page.root?.addEventListener('minimizedChange', minimizedChange);

    getHandle(page).dispatchEvent(
      new KeyboardEvent('keydown', { key: 'ArrowDown' })
    );
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.open).toBe(true);
    expect(component.minimized).toBe(true);
    expect(minimizedChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { minimized: true } })
    );
  });

  it('should close when Escape is pressed on the handle', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
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

  it('should minimize (not close) when dragged down past the threshold', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });
    const minimizedChange = jest.fn();
    page.root?.addEventListener('minimizedChange', minimizedChange);
    // jsdom reports offsetHeight as 0; stub it so the dismiss threshold (40% of
    // 500 = 200px) is actually exercised by the 300px drag below.
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 500 });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.open).toBe(true);
    expect(component.minimized).toBe(true);
    expect(minimizedChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { minimized: true } })
    );
  });

  it('should NOT minimize when dragged down below the threshold', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });
    const minimizedChange = jest.fn();
    page.root?.addEventListener('minimizedChange', minimizedChange);
    // Threshold is 40% of 500 = 200px; a 150px drag must snap back, not minimize.
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 500 });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 250 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.open).toBe(true);
    expect(component.minimized).toBe(false);
    expect(minimizedChange).not.toHaveBeenCalled();
  });

  it('should stay minimized and not close when dragged down again', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true" minimized="true"></modus-wc-bottom-sheet>',
    });
    const openChange = jest.fn();
    page.root?.addEventListener('openChange', openChange);

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.open).toBe(true);
    expect(component.minimized).toBe(true);
    expect(openChange).not.toHaveBeenCalled();
  });

  it('should hide content and only show the handle when minimized', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true" minimized="true"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.className).toContain('modus-wc-bottom-sheet-minimized');
    expect(getPanel(page).style.height).toBe('auto');
    expect(page.root?.querySelector('modus-wc-handle')).not.toBeNull();
  });

  it('should restore from minimized to open when dragged up', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true" minimized="true"></modus-wc-bottom-sheet>',
    });
    const minimizedChange = jest.fn();
    page.root?.addEventListener('minimizedChange', minimizedChange);

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 300 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.minimized).toBe(false);
    expect(component.expanded).toBe(false);
    expect(component.open).toBe(true);
    expect(minimizedChange).toHaveBeenCalledWith(
      expect.objectContaining({ detail: { minimized: false } })
    );
  });

  it('should expand when dragged up past the threshold', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
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
      components: bottomSheetComponents,
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
      components: bottomSheetComponents,
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
      components: bottomSheetComponents,
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
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });

    // The sheet starts at a 300px rest height; dragging up 100px should grow it
    // live to 400px (clamped to the 800px viewport set in beforeEach).
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 300 });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 300 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 200 }));
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.isDragging).toBe(true);
    expect(component.dragOffset).toBe(0);
    expect(component.dragHeight).toBe('400px');
    expect(page.root?.className).toContain('modus-wc-bottom-sheet-dragging');
    expect(getPanel(page).style.height).toBe('400px');

    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();
    expect(component.dragHeight).toBeNull();
  });

  it('should collapse to the rest height when dragged down while expanded', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true" expanded="true"></modus-wc-bottom-sheet>',
    });
    const expandedChange = jest.fn();
    page.root?.addEventListener('expandedChange', expandedChange);
    // jsdom reports offsetHeight as 0; stub it so the dismiss threshold is real.
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 500 });

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
      components: bottomSheetComponents,
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
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet custom-class="my-sheet"></modus-wc-bottom-sheet>',
    });

    expect(page.root?.className).toContain('my-sheet');
  });

  it('should not re-emit expandedChange when already expanded', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
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
      components: bottomSheetComponents,
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

  it('should remove the document drag listeners when disconnected mid-drag', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
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
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;

    getHandle(page).dispatchEvent(
      new MouseEvent('pointerdown', { clientY: 100 })
    );
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 200 }));
    expect(component.isDragging).toBe(true);
    expect(document.body.style.cursor).toBe('grabbing');

    component.disconnectedCallback();

    expect(document.body.style.cursor).toBe('');
  });

  it('should fall back to auto height when height is set to undefined', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true" height="400px"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    expect(getPanel(page).style.height).toBe('400px');

    component.height = undefined;
    await page.waitForChanges();

    expect(getPanel(page).style.height).toBe('auto');
  });

  it('should fall back to the default dismiss threshold when dismissThreshold is undefined', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    component.dismissThreshold = undefined;
    await page.waitForChanges();
    // With the threshold cleared, the fallback (0.4 * 500 = 200px) applies, so
    // a 300px drag down must still minimize the sheet.
    Object.defineProperty(getPanel(page), 'offsetHeight', { value: 500 });

    const handle = getHandle(page);
    handle.dispatchEvent(new MouseEvent('pointerdown', { clientY: 100 }));
    document.dispatchEvent(new MouseEvent('pointermove', { clientY: 400 }));
    document.dispatchEvent(new MouseEvent('pointerup'));
    await page.waitForChanges();

    expect(component.minimized).toBe(true);
  });

  it('should be inert when closed and not inert when open', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    expect(page.root?.hasAttribute('inert')).toBe(true);

    component.open = true;
    await page.waitForChanges();

    expect(page.root?.hasAttribute('inert')).toBe(false);
  });

  it('should become inert and collapse when open is set to false externally', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true" expanded="true" minimized="true"></modus-wc-bottom-sheet>',
    });
    const component = page.rootInstance as ModusWcBottomSheet;
    expect(page.root?.hasAttribute('inert')).toBe(false);

    component.open = false;
    await page.waitForChanges();

    expect(page.root?.hasAttribute('inert')).toBe(true);
    expect(component.expanded).toBe(false);
    expect(component.minimized).toBe(false);
  });

  it('should not render the header/footer wrappers when no slot content is provided', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
    });

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.hasHeader).toBe(false);
    expect(component.hasFooter).toBe(false);
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
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
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
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
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
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
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
    expect(component.open).toBe(true);
  });

  it('should close and emit headerCloseClick when the close button is clicked', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: '<modus-wc-bottom-sheet open="true"></modus-wc-bottom-sheet>',
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
    expect(component.open).toBe(false);
  });

  it('should render the header/footer wrappers when slot content is provided', async () => {
    const page = await newSpecPage({
      components: bottomSheetComponents,
      html: `<modus-wc-bottom-sheet open="true">
        <div slot="header">Header</div>
        <div slot="footer">Footer</div>
      </modus-wc-bottom-sheet>`,
    });

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.hasHeader).toBe(true);
    expect(component.hasFooter).toBe(true);
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
      html: `<modus-wc-bottom-sheet open="true">
        <div slot="header">Header</div>
      </modus-wc-bottom-sheet>`,
    });

    const component = page.rootInstance as ModusWcBottomSheet;
    expect(component.hasHeader).toBe(true);
    expect(component.hasFooter).toBe(false);
    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-header')
    ).not.toBeNull();
    expect(
      page.root?.querySelector('.modus-wc-bottom-sheet-footer')
    ).toBeNull();
  });
});
