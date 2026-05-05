/* eslint-disable @typescript-eslint/no-explicit-any */
import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { IAppMenuItem, ModusWcAppMenu } from './modus-wc-app-menu';
import { AppName } from '../types';
import * as keyboardUtils from './utils/app-menu-keyboard';

describe('modus-wc-app-menu', () => {
  const mockApps: IAppMenuItem[] = [
    { appName: 'connect' },
    { appName: 'viewpoint' },
    { appName: 'sketchup' },
    { appName: 'tekla' },
  ];

  const cloneApps = (apps: IAppMenuItem[] = mockApps) =>
    JSON.parse(JSON.stringify(apps)) as IAppMenuItem[];

  async function createPage(props: Record<string, unknown> = {}) {
    return newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', props),
    });
  }

  async function createEditModePage(props: Record<string, unknown> = {}) {
    const page = await createPage(props);
    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();
    return { page, component };
  }

  function keyEvent(key: string): KeyboardEvent {
    return new KeyboardEvent('keydown', {
      key,
      cancelable: true,
      bubbles: true,
    });
  }

  function dragEvt(type: string): Event {
    return new Event(type, { cancelable: true, bubbles: true });
  }

  function mockRaf(): () => void {
    const origRaf = globalThis.requestAnimationFrame;
    globalThis.requestAnimationFrame = jest.fn((cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    }) as unknown as typeof globalThis.requestAnimationFrame;
    return () => {
      globalThis.requestAnimationFrame = origRaf;
    };
  }

  it('should render with default props', async () => {
    const page = await createPage({});
    expect(page.root).toMatchSnapshot();
  });

  it('should render with apps in list layout', async () => {
    const page = await createPage({ apps: mockApps, layout: 'list' });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with apps in grid layout', async () => {
    const page = await createPage({ apps: mockApps, layout: 'grid' });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit layoutChange when layout prop changes after load', async () => {
    const page = await createPage({ apps: mockApps, layout: 'list' });

    const layoutChangeSpy = jest.fn();
    page.root?.addEventListener('layoutChange', layoutChangeSpy);

    const component = page.rootInstance as ModusWcAppMenu;
    component.layout = 'grid';
    await page.waitForChanges();

    expect(layoutChangeSpy).toHaveBeenCalledTimes(1);
    expect(layoutChangeSpy.mock.calls[0][0].detail).toEqual({
      layout: 'grid',
    });
  });

  it('should render with custom class', async () => {
    const page = await createPage({
      customClass: 'my-custom-class',
      apps: mockApps,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render header with "Trimble apps" title when not in edit mode', async () => {
    const page = await createPage({ apps: mockApps });
    const headerTitle = page.root?.querySelector(
      '.header-title modus-wc-typography'
    );
    expect(headerTitle?.getAttribute('label')).toBe('Trimble apps');
  });

  it('should render header with "Edit" title when in edit mode', async () => {
    const { page } = await createEditModePage({ apps: mockApps });
    const headerTitle = page.root?.querySelector(
      '.header-title modus-wc-typography'
    );
    expect(headerTitle?.getAttribute('label')).toBe('Edit');
  });

  it('should render edit button when not in edit mode', async () => {
    const page = await createPage({ apps: mockApps });

    const editButton = page.root?.querySelector(
      '.header-end-content modus-wc-button'
    );
    expect(editButton).not.toBeNull();
    expect(editButton?.getAttribute('shape')).toBe('square');

    const pencilIcon = editButton?.querySelector('modus-wc-icon');
    expect(pencilIcon?.getAttribute('name')).toBe('pencil');
  });

  it('should render done and cancel buttons when in edit mode', async () => {
    const { page } = await createEditModePage({ apps: mockApps });

    const buttons = Array.from(
      page.root?.querySelectorAll('.header-end-content modus-wc-button') || []
    );
    expect(buttons.length).toBe(2);

    const doneButton = buttons.find(
      (btn) => btn.textContent?.trim() === 'Done'
    );
    expect(doneButton).not.toBeUndefined();
    expect(doneButton?.getAttribute('color')).toBe('primary');

    const cancelButton = buttons.find(
      (btn) => btn.textContent?.trim() === 'Cancel'
    );
    expect(cancelButton).not.toBeUndefined();
    expect(cancelButton?.getAttribute('color')).toBe('tertiary');
  });

  it('should render with empty apps', async () => {
    const page = await createPage({ apps: [], layout: 'list' });
    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBe(0);
  });

  it('should render with inherited aria attributes', async () => {
    const page = await createPage({
      'aria-label': 'App menu',
      apps: mockApps,
    });
    expect(page.root?.getAttribute('aria-label')).toBe('App menu');
  });

  it('should render list layout with menu items and logos', async () => {
    const page = await createPage({ apps: mockApps, layout: 'list' });

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBe(4);

    const logos = page.root?.querySelectorAll('modus-wc-logo');
    expect(logos?.length).toBe(4);
    expect(logos?.[0]?.getAttribute('name')).toBe('connect');
    expect(logos?.[1]?.getAttribute('name')).toBe('viewpoint');
  });

  it('should render grid layout with all items', async () => {
    const page = await createPage({ apps: mockApps, layout: 'grid' });

    const gridItems = page.root?.querySelectorAll('.grid-item');
    expect(gridItems?.length).toBe(4);

    const logos = page.root?.querySelectorAll('modus-wc-logo');
    expect(logos?.length).toBe(4);
  });

  it('should not have tooltipContent on list layout menu items', async () => {
    const page = await createPage({ apps: mockApps, layout: 'list' });

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    menuItems?.forEach((item) => {
      expect(item.hasAttribute('tooltipcontent')).toBe(false);
    });
  });

  it('should wrap grid layout labels with modus-wc-tooltip', async () => {
    const page = await createPage({ apps: mockApps, layout: 'grid' });

    const tooltips = page.root?.querySelectorAll('.grid-item modus-wc-tooltip');
    expect(tooltips?.length).toBe(4);
    expect(tooltips?.[0]?.getAttribute('content')).toBe('Trimble Connect');
    expect(tooltips?.[1]?.getAttribute('content')).toBe('Viewpoint');
    expect(tooltips?.[2]?.getAttribute('content')).toBe('SketchUp');
    expect(tooltips?.[3]?.getAttribute('content')).toBe('Tekla');
  });

  it.each([
    {
      scrollWidth: 50,
      clientWidth: 80,
      expectedTruncated: false,
    },
    {
      scrollWidth: 120,
      clientWidth: 80,
      expectedTruncated: true,
    },
  ])(
    'should detect truncation=$expectedTruncated when scrollWidth=$scrollWidth',
    async ({ scrollWidth, clientWidth, expectedTruncated }) => {
      const page = await createPage({ apps: mockApps, layout: 'grid' });

      const gridItems = page.root?.querySelectorAll('.grid-item');
      gridItems?.forEach((gridItem) => {
        const mockLabel = document.createElement('span');
        mockLabel.classList.add('grid-item-text-label');
        Object.defineProperty(mockLabel, 'scrollWidth', {
          value: scrollWidth,
        });
        Object.defineProperty(mockLabel, 'clientWidth', {
          value: clientWidth,
        });
        Object.defineProperty(mockLabel, 'scrollHeight', { value: 16 });
        Object.defineProperty(mockLabel, 'clientHeight', { value: 20 });
        gridItem.querySelector('modus-wc-tooltip')?.appendChild(mockLabel);
      });

      const component = page.rootInstance as ModusWcAppMenu;
      (component as any).updateGridTooltips();
      await page.waitForChanges();

      const tooltips = page.root?.querySelectorAll(
        '.grid-item modus-wc-tooltip'
      );
      tooltips?.forEach((tooltip) => {
        expect(tooltip.getAttribute('disabled')).toBe(
          expectedTruncated ? null : ''
        );
      });
    }
  );

  it('should render grid layout with item labels', async () => {
    const page = await createPage({ apps: mockApps, layout: 'grid' });

    const labels = page.root?.querySelectorAll(
      '.grid-item modus-wc-typography'
    );
    expect(labels?.[0]?.getAttribute('label')).toBe('Trimble Connect');
    expect(labels?.[1]?.getAttribute('label')).toBe('Viewpoint');
    expect(labels?.[2]?.getAttribute('label')).toBe('SketchUp');
    expect(labels?.[3]?.getAttribute('label')).toBe('Tekla');
  });

  it('should fall back to raw appName when displayName is not found', async () => {
    const unknownApps: IAppMenuItem[] = [{ appName: 'unknown_app' as AppName }];
    const page = await createPage({ apps: unknownApps, layout: 'list' });

    const menuItem = page.root?.querySelector('modus-wc-menu-item');
    expect(menuItem?.getAttribute('label')).toBe('unknown_app');
  });

  it('should show drag indicators in list layout when in edit mode', async () => {
    const { page } = await createEditModePage({
      apps: mockApps,
      layout: 'list',
    });

    const dragIcons = page.root?.querySelectorAll(
      '.app-menu-item-row modus-wc-icon[name="drag_indicator"]'
    );
    expect(dragIcons?.length).toBe(4);

    const itemRows = page.root?.querySelectorAll('.app-menu-item-row');
    itemRows?.forEach((row) => {
      expect(row.classList.contains('draggable-item')).toBe(true);
    });
  });

  it('should not show drag indicators in list layout when not in edit mode', async () => {
    const page = await createPage({ apps: mockApps, layout: 'list' });

    const dragIcons = page.root?.querySelectorAll(
      'modus-wc-icon[name="drag_indicator"]'
    );
    expect(dragIcons?.length).toBe(0);
  });

  it('should show drag indicators in grid layout when in edit mode', async () => {
    const { page } = await createEditModePage({
      apps: mockApps,
      layout: 'grid',
    });

    const dragIcons = page.root?.querySelectorAll(
      '.grid-item modus-wc-icon[name="drag_indicator"]'
    );
    expect(dragIcons?.length).toBe(4);

    const gridItems = page.root?.querySelectorAll('.grid-item');
    gridItems?.forEach((item) => {
      expect(item.classList.contains('draggable-item')).toBe(true);
    });
  });

  it('should enter edit mode when handleEdit is called', async () => {
    const { component } = await createEditModePage({ apps: mockApps });
    expect(component.isEditMode).toBe(true);
  });

  it('should auto-focus the first item when entering edit mode', async () => {
    const restoreRaf = mockRaf();

    const page = await createPage({ apps: mockApps, layout: 'list' });
    const component = page.rootInstance as ModusWcAppMenu;
    const focusSpy = jest.spyOn(keyboardUtils, 'focusAppMenuItem');
    (component as any).handleEdit();
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalledWith(expect.anything(), 'list', 0);
    focusSpy.mockRestore();
    restoreRaf();
  });

  it('should exit edit mode and emit itemsOrderChange when handleDone is called', async () => {
    const { page, component } = await createEditModePage({ apps: mockApps });

    const orderChangeSpy = jest.fn();
    page.root?.addEventListener('itemsOrderChange', orderChangeSpy);

    (component as any).handleDone();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(false);
    expect(orderChangeSpy).toHaveBeenCalledTimes(1);
    expect(orderChangeSpy.mock.calls[0][0].detail).toEqual(mockApps);
  });

  it('should exit edit mode when handleCancel is called', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
    });

    (component as any).handleCancel();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(false);
  });

  it('should set draggedItemPos when handleDragStart is called in edit mode', async () => {
    const { component } = await createEditModePage({ apps: mockApps });

    const mockDragEvent = new Event('dragstart') as DragEvent;
    Object.defineProperty(mockDragEvent, 'dataTransfer', {
      value: { effectAllowed: '' },
    });
    (component as any).handleDragStart(mockDragEvent, 1);

    expect(component.draggedItemPos).toEqual({ appIndex: 1 });
  });

  it('should not set draggedItemPos when handleDragStart is called outside edit mode', async () => {
    const page = await createPage({ apps: mockApps });
    const component = page.rootInstance as ModusWcAppMenu;

    (component as any).handleDragStart(new Event('dragstart') as DragEvent, 1);

    expect(component.draggedItemPos).toBeNull();
  });

  it('should prevent default on drag over when in edit mode', async () => {
    const { component } = await createEditModePage({ apps: mockApps });

    const mockDragEvent = new Event('dragover', {
      cancelable: true,
    }) as DragEvent;
    const preventDefaultSpy = jest.spyOn(mockDragEvent, 'preventDefault');
    (component as any).handleDragOver(mockDragEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should not prevent default on drag over when not in edit mode', async () => {
    const page = await createPage({ apps: mockApps });
    const component = page.rootInstance as ModusWcAppMenu;

    const mockDragEvent = new Event('dragover', {
      cancelable: true,
    }) as DragEvent;
    const preventDefaultSpy = jest.spyOn(mockDragEvent, 'preventDefault');
    (component as any).handleDragOver(mockDragEvent);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should move item to target position when handleDrop is called', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];
    const { page, component } = await createEditModePage({
      apps: cloneApps(apps),
    });

    component.draggedItemPos = { appIndex: 0 };

    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;
    jest.spyOn(mockDragEvent, 'preventDefault');
    jest.spyOn(mockDragEvent, 'stopPropagation');

    (component as any).handleDrop(mockDragEvent, 2);
    await page.waitForChanges();

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('tekla');
    expect(component.apps?.[2].appName).toBe('connect');
    expect(component.draggedItemPos).toBeNull();
  });

  it('should not move item when handleDrop is called outside edit mode', async () => {
    const page = await createPage({ apps: cloneApps() });
    const component = page.rootInstance as ModusWcAppMenu;
    const originalApps = cloneApps(component.apps as IAppMenuItem[]);

    (component as any).handleDrop(
      new Event('drop', { cancelable: true }) as DragEvent,
      1
    );

    expect(component.apps).toEqual(originalApps);
  });

  it('should not move item when handleDrop is called with null draggedItemPos', async () => {
    const { component } = await createEditModePage({ apps: cloneApps() });
    const originalApps = cloneApps(component.apps as IAppMenuItem[]);

    (component as any).handleDrop(
      new Event('drop', { cancelable: true }) as DragEvent,
      1
    );

    expect(component.apps).toEqual(originalApps);
  });

  it('should swap items when handleContainerDrop is called', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];
    const { page, component } = await createEditModePage({
      apps: cloneApps(apps),
    });

    component.draggedItemPos = { appIndex: 0 };

    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;
    jest.spyOn(mockDragEvent, 'preventDefault');
    (component as any).handleContainerDrop(mockDragEvent, 2);
    await page.waitForChanges();

    expect(component.draggedItemPos).toBeNull();
  });

  it('should not move item when handleContainerDrop is called outside edit mode', async () => {
    const page = await createPage({ apps: cloneApps() });
    const component = page.rootInstance as ModusWcAppMenu;
    const originalApps = cloneApps(component.apps as IAppMenuItem[]);

    (component as any).handleContainerDrop(
      new Event('drop', { cancelable: true }) as DragEvent,
      0
    );

    expect(component.apps).toEqual(originalApps);
  });

  it('should not move item when handleContainerDrop is called with null draggedItemPos', async () => {
    const { component } = await createEditModePage({ apps: cloneApps() });
    const originalApps = cloneApps(component.apps as IAppMenuItem[]);

    (component as any).handleContainerDrop(
      new Event('drop', { cancelable: true }) as DragEvent,
      0
    );

    expect(component.apps).toEqual(originalApps);
  });

  it('should set dataTransfer.effectAllowed to move on drag start', async () => {
    const { component } = await createEditModePage({ apps: mockApps });

    const dataTransfer = { effectAllowed: '' };
    const mockDragEvent = new Event('dragstart') as DragEvent;
    Object.defineProperty(mockDragEvent, 'dataTransfer', {
      value: dataTransfer,
    });
    (component as any).handleDragStart(mockDragEvent, 0);

    expect(dataTransfer.effectAllowed).toBe('move');
  });

  it('should handle drag start when dataTransfer is null', async () => {
    const { component } = await createEditModePage({ apps: mockApps });

    const mockDragEvent = new Event('dragstart') as DragEvent;
    Object.defineProperty(mockDragEvent, 'dataTransfer', { value: null });
    (component as any).handleDragStart(mockDragEvent, 0);

    expect(component.draggedItemPos).toEqual({ appIndex: 0 });
  });

  it('should render menu items as draggable in edit mode for list layout', async () => {
    const { page } = await createEditModePage({
      apps: mockApps,
      layout: 'list',
    });

    const itemRows = page.root?.querySelectorAll('.app-menu-item-row');
    itemRows?.forEach((row) => {
      expect(row.getAttribute('draggable')).toBe('true');
    });
  });

  it('should render grid items as draggable in edit mode', async () => {
    const { page } = await createEditModePage({
      apps: mockApps,
      layout: 'grid',
    });

    const gridItems = page.root?.querySelectorAll('.grid-item');
    gridItems?.forEach((item) => {
      expect(item.getAttribute('draggable')).toBe('true');
    });
  });

  it('should render with single app item', async () => {
    const page = await createPage({
      apps: [{ appName: 'connect' }],
      layout: 'list',
    });

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBe(1);
    expect(menuItems?.[0]?.getAttribute('label')).toBe('Trimble Connect');
  });

  it('should render empty grid when apps is empty', async () => {
    const page = await createPage({ apps: [], layout: 'grid' });
    const gridItems = page.root?.querySelectorAll('.grid-item');
    expect(gridItems?.length).toBe(0);
  });

  it('should render logo emblems in list layout', async () => {
    const page = await createPage({ apps: mockApps, layout: 'list' });

    const logos = page.root?.querySelectorAll('modus-wc-logo');
    logos?.forEach((logo) => {
      expect(logo.hasAttribute('emblem')).toBe(true);
      expect(logo.getAttribute('custom-class')).toBe('app-logo');
    });
  });

  it('should render logo emblems in grid layout', async () => {
    const page = await createPage({ apps: mockApps, layout: 'grid' });

    const logos = page.root?.querySelectorAll('modus-wc-logo');
    logos?.forEach((logo) => {
      expect(logo.hasAttribute('emblem')).toBe(true);
      expect(logo.getAttribute('custom-class')).toBe('grid-emblem');
    });
  });

  it('should wrap content in modus-wc-panel', async () => {
    const page = await createPage({ apps: mockApps });
    expect(page.root?.querySelector('modus-wc-panel')).not.toBeNull();
  });

  it('should render menu header inside panel body slot', async () => {
    const page = await createPage({ apps: mockApps });

    const bodySlot = page.root?.querySelector('[slot="body"]');
    expect(bodySlot).not.toBeNull();
    expect(bodySlot?.querySelector('.menu-header')).not.toBeNull();
  });

  it('should render header-end-content container', async () => {
    const page = await createPage({ apps: mockApps });
    expect(page.root?.querySelector('.header-end-content')).not.toBeNull();
  });

  it('should enter edit mode when edit button is clicked', async () => {
    const page = await createPage({ apps: mockApps });

    const editButton = page.root?.querySelector(
      '.header-end-content modus-wc-button'
    ) as HTMLElement;
    editButton?.click();
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcAppMenu;
    expect(component.isEditMode).toBe(true);
  });

  it('should exit edit mode when Done button is clicked', async () => {
    const { page, component } = await createEditModePage({ apps: mockApps });

    const orderChangeSpy = jest.fn();
    page.root?.addEventListener('itemsOrderChange', orderChangeSpy);

    const buttons = Array.from(
      page.root?.querySelectorAll('.header-end-content modus-wc-button') || []
    );
    const doneButton = buttons.find(
      (btn) => btn.textContent?.trim() === 'Done'
    ) as HTMLElement;
    doneButton?.click();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(false);
    expect(orderChangeSpy).toHaveBeenCalledTimes(1);
  });

  it('should exit edit mode when Cancel button is clicked', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
    });

    const buttons = Array.from(
      page.root?.querySelectorAll('.header-end-content modus-wc-button') || []
    );
    const cancelButton = buttons.find(
      (btn) => btn.textContent?.trim() === 'Cancel'
    ) as HTMLElement;
    cancelButton?.click();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(false);
  });

  it('should trigger drag handlers on list layout items via DOM events', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    const itemRows = page.root?.querySelectorAll('.app-menu-item-row');
    const firstItem = itemRows?.[0] as HTMLElement;

    const dragStartEvent = dragEvt('dragstart') as DragEvent;
    Object.defineProperty(dragStartEvent, 'dataTransfer', {
      value: { effectAllowed: '' },
    });
    firstItem?.dispatchEvent(dragStartEvent);
    expect(component.draggedItemPos).toEqual({ appIndex: 0 });

    const dragOverEvent = dragEvt('dragover');
    firstItem?.dispatchEvent(dragOverEvent);

    const secondItem = itemRows?.[1] as HTMLElement;
    secondItem?.dispatchEvent(dragEvt('drop'));
  });

  it('should trigger drag handlers on list container via DOM events', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    component.draggedItemPos = { appIndex: 0 };

    const container = page.root?.querySelector(
      '.app-menu-items'
    ) as HTMLElement;

    container?.dispatchEvent(dragEvt('dragover'));
    container?.dispatchEvent(dragEvt('drop'));
  });

  it('should trigger drag handlers on grid layout items via DOM events', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'grid',
    });

    const gridItems = page.root?.querySelectorAll('.grid-item');
    const firstItem = gridItems?.[0] as HTMLElement;

    const dragStartEvent = dragEvt('dragstart') as DragEvent;
    Object.defineProperty(dragStartEvent, 'dataTransfer', {
      value: { effectAllowed: '' },
    });
    firstItem?.dispatchEvent(dragStartEvent);
    expect(component.draggedItemPos).toEqual({ appIndex: 0 });

    const dragOverEvent = dragEvt('dragover');
    firstItem?.dispatchEvent(dragOverEvent);
    expect(dragOverEvent.defaultPrevented).toBe(true);

    const secondItem = gridItems?.[1] as HTMLElement;
    const dropEvent = dragEvt('drop');
    secondItem?.dispatchEvent(dropEvent);

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('connect');
  });

  it('should trigger drag handlers on grid container via DOM events', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'grid',
    });

    component.draggedItemPos = { appIndex: 0 };

    const gridMenu = page.root?.querySelector('.grid-menu') as HTMLElement;

    const dragOverEvent = dragEvt('dragover');
    gridMenu?.dispatchEvent(dragOverEvent);
    expect(dragOverEvent.defaultPrevented).toBe(true);

    const dropEvent = dragEvt('drop');
    gridMenu?.dispatchEvent(dropEvent);
    expect(component.draggedItemPos).toBeNull();
  });

  it.each(['list', 'grid'] as const)(
    'should handle apps prop being undefined in %s layout',
    async (layout) => {
      const page = await createPage({ apps: undefined, layout });

      expect(page.root).not.toBeNull();
      if (layout === 'grid') {
        expect(page.root?.querySelectorAll('.grid-item')?.length).toBe(0);
      }
    }
  );

  it('should render grid layout with zero items when apps is set to undefined after load', async () => {
    const page = await createPage({ apps: mockApps, layout: 'grid' });
    const component = page.rootInstance as ModusWcAppMenu;

    expect(page.root?.querySelectorAll('.grid-item')?.length).toBe(4);

    component.apps = undefined;
    await page.waitForChanges();

    expect(page.root?.querySelectorAll('.grid-item')?.length).toBe(0);
  });

  it('should grab an item on Space key in edit mode', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    (component as any).handleKeyDown(keyEvent(' '), 0);

    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should drop a grabbed item on Enter key', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleKeyDown(keyEvent('Enter'), 0);

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should move a grabbed item down on ArrowDown key in list layout', async () => {
    const threeApps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];
    const { component } = await createEditModePage({
      apps: cloneApps(threeApps),
      layout: 'list',
    });

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleKeyDown(keyEvent('ArrowDown'), 0);

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 1 });
  });

  it('should move a grabbed item up on ArrowUp key in list layout', async () => {
    const threeApps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];
    const { component } = await createEditModePage({
      apps: cloneApps(threeApps),
      layout: 'list',
    });

    component.grabbedItemPos = { appIndex: 1 };
    (component as any).handleKeyDown(keyEvent('ArrowUp'), 1);

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should cancel grab on Escape key', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleKeyDown(keyEvent('Escape'), 0);

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should not move item beyond array boundaries', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps([{ appName: 'connect' }, { appName: 'viewpoint' }]),
      layout: 'list',
    });

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleKeyDown(keyEvent('ArrowUp'), 0);

    expect(component.apps?.[0].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should not handle keyboard events when not in edit mode', async () => {
    const page = await createPage({ apps: cloneApps(), layout: 'list' });
    const component = page.rootInstance as ModusWcAppMenu;

    (component as any).handleKeyDown(keyEvent(' '), 0);

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should not reorder when arrow key pressed without grab', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    const originalApps = cloneApps(component.apps as IAppMenuItem[]);
    (component as any).handleKeyDown(keyEvent('ArrowDown'), 0);

    expect(component.apps).toEqual(originalApps);
    expect(component.grabbedItemPos).toBeNull();
  });

  it('should clear grabbedItemPos on handleDone', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
    });

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleDone();
    await page.waitForChanges();

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should clear grabbedItemPos on handleCancel', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
    });

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleCancel();
    await page.waitForChanges();

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should add grabbed-item class when item is grabbed', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    component.grabbedItemPos = { appIndex: 0 };
    await page.waitForChanges();

    const firstRow = page.root?.querySelector('.app-menu-item-row');
    expect(firstRow?.classList.contains('grabbed-item')).toBe(true);
  });

  it.each([
    { layout: 'list' as const, selector: '.app-menu-item-row' },
    { layout: 'grid' as const, selector: '.grid-item' },
  ])(
    'should add tabindex to items in edit mode for $layout layout',
    async ({ layout, selector }) => {
      const { page } = await createEditModePage({
        apps: mockApps,
        layout,
      });

      const items = page.root?.querySelectorAll(selector);
      items?.forEach((item) => {
        expect(item.getAttribute('tabindex')).toBe('0');
      });
    }
  );

  it.each([
    { key: 'ArrowRight', startIdx: 0, expectedIdx: 1 },
    { key: 'ArrowLeft', startIdx: 1, expectedIdx: 0 },
  ])(
    'should move a grabbed item on $key key in grid layout',
    async ({ key, startIdx, expectedIdx }) => {
      const threeApps: IAppMenuItem[] = [
        { appName: 'connect' },
        { appName: 'viewpoint' },
        { appName: 'tekla' },
      ];
      const { component } = await createEditModePage({
        apps: cloneApps(threeApps),
        layout: 'grid',
      });

      component.grabbedItemPos = { appIndex: startIdx };
      (component as any).handleKeyDown(keyEvent(key), startIdx);

      expect(component.apps?.[0].appName).toBe('viewpoint');
      expect(component.apps?.[1].appName).toBe('connect');
      expect(component.grabbedItemPos).toEqual({ appIndex: expectedIdx });
    }
  );

  it('should not move list items on ArrowLeft or ArrowRight key', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps([{ appName: 'connect' }, { appName: 'viewpoint' }]),
      layout: 'list',
    });

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleKeyDown(keyEvent('ArrowRight'), 0);

    expect(component.apps?.[0].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it.each([
    { key: 'ArrowUp', grabbedIdx: 3 },
    { key: 'ArrowDown', grabbedIdx: 0 },
  ])(
    'should route $key to reorderByKeyboard in grid layout',
    async ({ key, grabbedIdx }) => {
      const fourApps: IAppMenuItem[] = [
        { appName: 'connect' },
        { appName: 'viewpoint' },
        { appName: 'tekla' },
        { appName: 'sketchup' },
      ];
      const { component } = await createEditModePage({
        apps: cloneApps(fourApps),
        layout: 'grid',
      });

      component.grabbedItemPos = { appIndex: grabbedIdx };
      const evt = keyEvent(key);
      const preventDefaultSpy = jest.spyOn(evt, 'preventDefault');
      (component as any).handleKeyDown(evt, grabbedIdx);

      expect(preventDefaultSpy).toHaveBeenCalled();
    }
  );

  it('should move grid item by offset via reorderByKeyboard', async () => {
    const sixApps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
      { appName: 'sketchup' },
      { appName: 'earthworks' },
      { appName: 'siteworks' },
    ];
    const { component } = await createEditModePage({
      apps: cloneApps(sixApps),
      layout: 'grid',
    });

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).reorderByKeyboard(0, 3);

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('tekla');
    expect(component.apps?.[2].appName).toBe('sketchup');
    expect(component.apps?.[3].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 3 });
  });

  it('should move grid item up by offset via reorderByKeyboard', async () => {
    const sixApps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
      { appName: 'sketchup' },
      { appName: 'earthworks' },
      { appName: 'siteworks' },
    ];
    const { component } = await createEditModePage({
      apps: cloneApps(sixApps),
      layout: 'grid',
    });

    component.grabbedItemPos = { appIndex: 3 };
    (component as any).reorderByKeyboard(3, -3);

    expect(component.apps?.[0].appName).toBe('sketchup');
    expect(component.apps?.[3].appName).toBe('tekla');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should not move grid item beyond boundaries via reorderByKeyboard', async () => {
    const threeApps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];
    const { component } = await createEditModePage({
      apps: cloneApps(threeApps),
      layout: 'grid',
    });

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).reorderByKeyboard(0, -3);

    expect(component.apps?.[0].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should not move item beyond end of list', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    const lastIdx = (component.apps?.length ?? 1) - 1;
    component.grabbedItemPos = { appIndex: lastIdx };
    (component as any).handleKeyDown(keyEvent('ArrowDown'), lastIdx);

    expect(component.grabbedItemPos).toEqual({ appIndex: lastIdx });
  });

  it.each([
    { layout: 'list' as const, method: 'handleKeyDown', key: 'ArrowDown' },
    { layout: 'grid' as const, method: 'reorderByKeyboard', key: null },
  ])(
    'should focus item after keyboard move via rAF in $layout layout',
    async ({ layout, method, key }) => {
      const restoreRaf = mockRaf();
      const twoApps: IAppMenuItem[] = [
        { appName: 'connect' },
        { appName: 'viewpoint' },
      ];
      const { component } = await createEditModePage({
        apps: cloneApps(twoApps),
        layout,
      });

      component.grabbedItemPos = { appIndex: 0 };
      if (key) {
        (component as any)[method](keyEvent(key), 0);
      } else {
        (component as any)[method](0, 1);
      }

      expect(globalThis.requestAnimationFrame).toHaveBeenCalled();
      restoreRaf();
    }
  );

  it.each([
    { layout: 'list' as const, selector: '.app-menu-item-row' },
    { layout: 'grid' as const, selector: '.grid-item' },
  ])(
    'should trigger handleKeyDown on $layout item via DOM keydown event',
    async ({ layout, selector }) => {
      const { page, component } = await createEditModePage({
        apps: cloneApps(),
        layout,
      });

      const item = page.root?.querySelector(selector) as HTMLElement;
      item?.dispatchEvent(keyEvent(' '));

      expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
    }
  );

  it('should calculate grid column count based on offsetTop of items', async () => {
    const page = await createPage({
      apps: cloneApps(mockApps),
      layout: 'grid',
    });

    const gridItems = page.root?.querySelectorAll('.grid-item');
    if (gridItems && gridItems.length >= 4) {
      [0, 0, 100, 100].forEach((top, i) => {
        Object.defineProperty(gridItems[i], 'offsetTop', { value: top });
      });
    }

    expect(keyboardUtils.getGridColumnCount(page.root as HTMLElement)).toBe(2);
  });

  it('should return 1 from getGridColumnCount when grid has zero or one item', async () => {
    const page = await createPage({
      apps: [{ appName: 'connect' }],
      layout: 'grid',
    });
    expect(keyboardUtils.getGridColumnCount(page.root as HTMLElement)).toBe(1);
  });

  it.each([
    { layout: 'list' as const, key: 'ArrowUp' },
    { layout: 'grid' as const, key: 'ArrowDown' },
  ])(
    'should not move $layout item when grabbedItemPos is null',
    async ({ layout, key }) => {
      const { component } = await createEditModePage({
        apps: cloneApps(),
        layout,
      });

      component.grabbedItemPos = null;
      (component as any).handleKeyDown(keyEvent(key), 0);
      expect(component.apps?.[0].appName).toBe('connect');
    }
  );

  it.each([
    { layout: 'list' as const, idx: 99 },
    { layout: 'grid' as const, idx: 0 },
  ])(
    'should handle focusAppMenuItem for $layout layout without throwing',
    async ({ layout, idx }) => {
      const { page } = await createEditModePage({
        apps: cloneApps(),
        layout,
      });

      expect(() =>
        keyboardUtils.focusAppMenuItem(page.root as HTMLElement, layout, idx)
      ).not.toThrow();
    }
  );

  it.each([
    { grabbedPos: null, expectedResult: false },
    { grabbedPos: { appIndex: 5 }, expectedResult: false },
  ])(
    'should return false from isGrabbed when grabbedItemPos=$grabbedPos',
    async ({ grabbedPos, expectedResult }) => {
      const page = await createPage({ apps: cloneApps(), layout: 'list' });
      const component = page.rootInstance as ModusWcAppMenu;
      component.grabbedItemPos = grabbedPos;
      expect((component as any).isGrabbed(0)).toBe(expectedResult);
    }
  );

  it.each([
    { fn: 'reorderListItem', args: [[], 0, -1] },
    { fn: 'reorderGridItem', args: [[], 0, 1] },
  ])('should return null from $fn when apps is empty', ({ fn, args }) => {
    expect(
      (keyboardUtils as Record<string, (...a: unknown[]) => unknown>)[fn](
        ...args
      )
    ).toBeNull();
  });

  it('should render grid items with correct aria attributes in non-edit mode', async () => {
    const page = await createPage({ apps: cloneApps(), layout: 'grid' });

    const gridItem = page.root?.querySelector('.grid-item');
    expect(gridItem?.getAttribute('aria-roledescription')).toBeNull();
    expect(gridItem?.getAttribute('role')).toBe('listitem');
  });

  it('should render grid items with correct aria attributes in edit mode', async () => {
    const { page, component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'grid',
    });

    component.grabbedItemPos = { appIndex: 0 };
    await page.waitForChanges();

    const firstItem = page.root?.querySelector('.grid-item');
    expect(firstItem?.getAttribute('draggable')).toBe('true');
    expect(firstItem?.getAttribute('aria-roledescription')).toBe(
      'reorderable item'
    );
  });

  it('should set dropTargetIndex on handleDragEnter in edit mode', async () => {
    const { component } = await createEditModePage({ apps: mockApps });

    component.draggedItemPos = { appIndex: 0 };
    (component as any).handleDragEnter(dragEvt('dragenter'), 2);

    expect(component.dropTargetIndex).toBe(2);
  });

  it('should set dropTargetIndex to null when dragging over self', async () => {
    const { component } = await createEditModePage({ apps: mockApps });

    component.draggedItemPos = { appIndex: 1 };
    (component as any).handleDragEnter(dragEvt('dragenter'), 1);

    expect(component.dropTargetIndex).toBeNull();
  });

  it('should clear draggedItemPos and dropTargetIndex on handleDragEnd', async () => {
    const { component } = await createEditModePage({ apps: mockApps });

    component.draggedItemPos = { appIndex: 0 };
    component.dropTargetIndex = 2;
    (component as any).handleDragEnd();

    expect(component.draggedItemPos).toBeNull();
    expect(component.dropTargetIndex).toBeNull();
  });

  it('should render list items with role="option" in edit mode', async () => {
    const { page } = await createEditModePage({
      apps: mockApps,
      layout: 'list',
    });

    const rows = page.root?.querySelectorAll('.app-menu-item-row');
    rows?.forEach((row) => {
      expect(row.getAttribute('role')).toBe('option');
      expect(row.getAttribute('aria-roledescription')).toBe('reorderable item');
    });
  });

  it('should render grid-row with role="listbox" in edit mode', async () => {
    const { page } = await createEditModePage({
      apps: mockApps,
      layout: 'grid',
    });

    const gridRow = page.root?.querySelector('.grid-row');
    expect(gridRow?.getAttribute('role')).toBe('listbox');
  });

  it('should render grid-row with role="list" when not in edit mode', async () => {
    const page = await createPage({ apps: mockApps, layout: 'grid' });
    const gridRow = page.root?.querySelector('.grid-row');
    expect(gridRow?.getAttribute('role')).toBe('list');
  });

  it.each([
    { key: 'ArrowDown', layout: 'list' as const, idx: 0, expectedOffset: 1 },
    { key: 'ArrowUp', layout: 'list' as const, idx: 2, expectedOffset: -1 },
    { key: 'ArrowRight', layout: 'grid' as const, idx: 0, expectedOffset: 1 },
    { key: 'ArrowLeft', layout: 'grid' as const, idx: 2, expectedOffset: -1 },
  ])(
    'should navigate focus on $key without grab in $layout layout',
    async ({ key, layout, idx, expectedOffset }) => {
      const page = await createPage({ apps: cloneApps(), layout });
      const component = page.rootInstance as ModusWcAppMenu;
      (component as any).isEditMode = true;
      await page.waitForChanges();

      const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
      (component as any).handleKeyDown(keyEvent(key), idx);

      expect(navSpy).toHaveBeenCalledWith(idx, expectedOffset);
      expect(component.grabbedItemPos).toBeNull();
    }
  );

  it.each([
    { key: 'ArrowDown', idx: 0, expectedOffset: 3 },
    { key: 'ArrowUp', idx: 3, expectedOffset: -3 },
  ])(
    'should navigate focus on $key without grab in grid layout (multi-row)',
    async ({ key, idx, expectedOffset }) => {
      const sixApps: IAppMenuItem[] = [
        { appName: 'connect' },
        { appName: 'viewpoint' },
        { appName: 'tekla' },
        { appName: 'sketchup' },
        { appName: 'earthworks' },
        { appName: 'siteworks' },
      ];

      const page = await createPage({
        apps: cloneApps(sixApps),
        layout: 'grid',
      });
      const component = page.rootInstance as ModusWcAppMenu;
      (component as any).isEditMode = true;
      await page.waitForChanges();

      const gridItems = page.root?.querySelectorAll('.grid-item');
      if (gridItems && gridItems.length >= 6) {
        [0, 0, 0, 100, 100, 100].forEach((top, i) => {
          Object.defineProperty(gridItems[i], 'offsetTop', { value: top });
        });
      }

      const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
      (component as any).handleKeyDown(keyEvent(key), idx);

      expect(navSpy).toHaveBeenCalledWith(idx, expectedOffset);
      expect(component.grabbedItemPos).toBeNull();
    }
  );

  it('should not navigate focus beyond boundaries', () => {
    expect(
      keyboardUtils.getTargetFocusIndex(0, -1, mockApps.length)
    ).toBeNull();
    expect(
      keyboardUtils.getTargetFocusIndex(mockApps.length - 1, 1, mockApps.length)
    ).toBeNull();
  });

  it('should prevent default on arrow keys even without grab in edit mode', async () => {
    const page = await createPage({ apps: cloneApps(), layout: 'list' });
    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const evt = keyEvent('ArrowDown');
    const preventDefaultSpy = jest.spyOn(evt, 'preventDefault');
    (component as any).handleKeyDown(evt, 0);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should not call navigateFocusByKeyboard for ArrowLeft/ArrowRight in list layout', async () => {
    const page = await createPage({ apps: cloneApps(), layout: 'list' });
    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
    (component as any).handleKeyDown(keyEvent('ArrowRight'), 0);

    expect(navSpy).not.toHaveBeenCalled();
  });

  it('should execute focusAppMenuItem inside navigateFocusByKeyboard callback', async () => {
    const restoreRaf = mockRaf();

    const page = await createPage({ apps: cloneApps(), layout: 'list' });
    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const focusSpy = jest.spyOn(keyboardUtils, 'focusAppMenuItem');
    (component as any).navigateFocusByKeyboard(0, 1);

    expect(focusSpy).toHaveBeenCalledWith(expect.anything(), 'list', 1);
    focusSpy.mockRestore();
    restoreRaf();
  });

  it.each([
    { layout: 'list' as const, selector: '.app-menu-item-row' },
    { layout: 'grid' as const, selector: '.grid-item' },
  ])(
    'should trigger onDragEnd on $layout item via DOM event',
    async ({ layout, selector }) => {
      const { page, component } = await createEditModePage({
        apps: cloneApps(),
        layout,
      });

      component.draggedItemPos = { appIndex: 0 };
      component.dropTargetIndex = 1;

      const item = page.root?.querySelector(selector) as HTMLElement;
      item?.dispatchEvent(dragEvt('dragend'));

      expect(component.draggedItemPos).toBeNull();
      expect(component.dropTargetIndex).toBeNull();
    }
  );

  it.each([
    { layout: 'list' as const, selector: '.app-menu-item-row' },
    { layout: 'grid' as const, selector: '.grid-item' },
  ])(
    'should trigger onDragEnter on $layout item via DOM event',
    async ({ layout, selector }) => {
      const { page, component } = await createEditModePage({
        apps: cloneApps(),
        layout,
      });

      component.draggedItemPos = { appIndex: 0 };

      const items = page.root?.querySelectorAll(selector);
      const secondItem = items?.[1] as HTMLElement;
      secondItem?.dispatchEvent(dragEvt('dragenter'));

      expect(component.dropTargetIndex).toBe(1);
    }
  );

  it.each([
    { key: 'Tab', layout: 'list' as const },
    { key: 'ArrowLeft', layout: 'list' as const },
  ])(
    'should return null from getNavigationOffset for $key in $layout layout',
    ({ key, layout }) => {
      expect(keyboardUtils.getNavigationOffset(key, layout, 3)).toBeNull();
    }
  );

  describe('undefined layout fallback', () => {
    it('should fallback to list layout in handleEdit', async () => {
      const restoreRaf = mockRaf();

      const page = await createPage({ apps: cloneApps() });
      const component = page.rootInstance as ModusWcAppMenu;
      const focusSpy = jest.spyOn(keyboardUtils, 'focusAppMenuItem');
      component.layout = undefined;
      (component as any).handleEdit();

      expect(component.isEditMode).toBe(true);
      expect(focusSpy).toHaveBeenCalledWith(expect.anything(), 'list', 0);
      focusSpy.mockRestore();
      restoreRaf();
    });

    it('should fallback to list layout in handleKeyDown', async () => {
      const page = await createPage({ apps: cloneApps() });
      const component = page.rootInstance as ModusWcAppMenu;
      (component as any).isEditMode = true;
      component.layout = undefined;
      await page.waitForChanges();

      const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
      (component as any).handleKeyDown(keyEvent('ArrowDown'), 0);

      expect(navSpy).toHaveBeenCalledWith(0, 1);
    });

    it('should fallback to list layout in reorderByKeyboard', async () => {
      const restoreRaf = mockRaf();

      const page = await createPage({ apps: cloneApps() });
      const component = page.rootInstance as ModusWcAppMenu;
      (component as any).isEditMode = true;
      component.layout = undefined;
      component.grabbedItemPos = { appIndex: 0 };
      await page.waitForChanges();

      (component as any).reorderByKeyboard(0, 1);

      expect(component.apps?.[0].appName).toBe('viewpoint');
      expect(component.apps?.[1].appName).toBe('connect');
      restoreRaf();
    });

    it('should fallback to list layout in navigateFocusByKeyboard', async () => {
      const restoreRaf = mockRaf();

      const page = await createPage({ apps: cloneApps() });
      const component = page.rootInstance as ModusWcAppMenu;
      (component as any).isEditMode = true;
      component.layout = undefined;
      await page.waitForChanges();

      const focusSpy = jest.spyOn(keyboardUtils, 'focusAppMenuItem');
      (component as any).navigateFocusByKeyboard(0, 1);

      expect(focusSpy).toHaveBeenCalledWith(expect.anything(), 'list', 1);
      focusSpy.mockRestore();
      restoreRaf();
    });
  });

  describe('undefined apps handling', () => {
    it('should not focus in navigateFocusByKeyboard', async () => {
      const page = await createPage({ apps: cloneApps(), layout: 'list' });
      const component = page.rootInstance as ModusWcAppMenu;
      (component as any).isEditMode = true;
      component.apps = undefined;
      await page.waitForChanges();

      const focusSpy = jest.spyOn(keyboardUtils, 'focusAppMenuItem');
      (component as any).navigateFocusByKeyboard(0, 1);

      expect(focusSpy).not.toHaveBeenCalled();
      focusSpy.mockRestore();
    });

    it('should not reorder in reorderByKeyboard', async () => {
      const page = await createPage({ apps: cloneApps(), layout: 'list' });
      const component = page.rootInstance as ModusWcAppMenu;
      (component as any).isEditMode = true;
      component.apps = undefined;
      component.grabbedItemPos = { appIndex: 0 };
      await page.waitForChanges();

      (component as any).reorderByKeyboard(0, 1);

      expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
    });

    it.each(['handleDrop', 'handleContainerDrop'] as const)(
      'should not move items in %s',
      async (method) => {
        const page = await createPage({ apps: cloneApps(), layout: 'list' });
        const component = page.rootInstance as ModusWcAppMenu;
        (component as any).isEditMode = true;
        component.apps = undefined;
        component.draggedItemPos = { appIndex: 0 };
        await page.waitForChanges();

        const mockEvent = {
          preventDefault: jest.fn(),
          stopPropagation: jest.fn(),
        } as unknown as DragEvent;
        (component as any)[method](mockEvent, 0);

        expect(component.draggedItemPos).toEqual({ appIndex: 0 });
      }
    );

    it('should restore apps from snapshot on handleCancel', async () => {
      const originalApps = cloneApps();
      const { component } = await createEditModePage({
        apps: originalApps,
        layout: 'list',
      });

      component.apps = undefined;
      (component as any).handleCancel();

      expect(component.isEditMode).toBe(false);
      expect(component.apps).toEqual(originalApps);
    });

    it('should snapshot empty array when apps is undefined on handleEdit', async () => {
      const page = await createPage({ layout: 'list' });
      const component = page.rootInstance as ModusWcAppMenu;

      component.apps = undefined;
      (component as any).handleEdit();

      expect((component as any).appsSnapshot).toEqual([]);
    });

    it('should not modify apps on handleCancel when snapshot is null', async () => {
      const page = await createPage({
        apps: cloneApps(),
        layout: 'list',
      });
      const component = page.rootInstance as ModusWcAppMenu;

      (component as any).appsSnapshot = null;
      (component as any).isEditMode = true;
      (component as any).handleCancel();

      expect(component.apps).toEqual(cloneApps());
      expect(component.isEditMode).toBe(false);
    });
  });

  it('should early return from handleDrop when movedItem is undefined', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    component.draggedItemPos = { appIndex: 99 };
    const mockEvent = {
      preventDefault: jest.fn(),
      stopPropagation: jest.fn(),
    } as unknown as DragEvent;
    (component as any).handleDrop(mockEvent, 0);

    expect(component.draggedItemPos).toEqual({ appIndex: 99 });
  });

  it('should early return from handleContainerDrop when movedItem is undefined', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    component.draggedItemPos = { appIndex: 99 };
    const mockEvent = {
      preventDefault: jest.fn(),
    } as unknown as DragEvent;
    (component as any).handleContainerDrop(mockEvent);

    expect(component.draggedItemPos).toEqual({ appIndex: 99 });
  });

  it.each([
    { editMode: false, draggedItemPos: { appIndex: 0 } },
    { editMode: true, draggedItemPos: null },
  ])(
    'should early return from handleDragEnter (editMode=$editMode, drag=$draggedItemPos)',
    async ({ editMode, draggedItemPos }) => {
      const page = await createPage({ apps: cloneApps(), layout: 'list' });
      const component = page.rootInstance as ModusWcAppMenu;
      (component as any).isEditMode = editMode;
      component.draggedItemPos = draggedItemPos;

      (component as any).handleDragEnter(
        { preventDefault: jest.fn() } as unknown as DragEvent,
        1
      );

      expect(component.dropTargetIndex).toBeNull();
    }
  );

  it.each([
    { layout: 'grid' as const, selector: '.grid-item' },
    { layout: 'list' as const, selector: '.app-menu-item-row' },
  ])(
    'should render $layout layout with grabbed and drop-target classes',
    async ({ layout, selector }) => {
      const { page, component } = await createEditModePage({
        apps: cloneApps(),
        layout,
      });

      component.grabbedItemPos = { appIndex: 0 };
      component.dropTargetIndex = 1;
      await page.waitForChanges();

      const items = page.root?.querySelectorAll(selector);
      expect(items?.[0]?.classList.contains('grabbed-item')).toBe(true);
      expect(items?.[1]?.classList.contains('drop-target')).toBe(true);
    }
  );

  it.each([
    { layout: 'list' as const, containerSelector: '.app-menu-items' },
    { layout: 'grid' as const, containerSelector: '.grid-menu' },
  ])(
    'should handle onDrop on $layout container when draggedItemPos is null',
    async ({ layout, containerSelector }) => {
      const { page, component } = await createEditModePage({
        apps: cloneApps(),
        layout,
      });

      component.draggedItemPos = null;

      const container = page.root?.querySelector(
        containerSelector
      ) as HTMLElement;
      container?.dispatchEvent(dragEvt('drop'));

      expect(component.apps?.[0].appName).toBe('connect');
    }
  );

  it.each([
    { layout: 'grid' as const, selector: '.grid-item' },
    { layout: 'list' as const, selector: '.app-menu-item-row' },
  ])(
    'should apply drag-source class to the dragged item in $layout layout',
    async ({ layout, selector }) => {
      const { page, component } = await createEditModePage({
        apps: cloneApps(),
        layout,
      });

      component.draggedItemPos = { appIndex: 1 };
      await page.waitForChanges();

      const items = page.root?.querySelectorAll(selector);
      expect(items?.[1]?.classList.contains('drag-source')).toBe(true);
      expect(items?.[0]?.classList.contains('drag-source')).toBe(false);
    }
  );

  it.each([
    { layout: 'list' as const, containerSelector: '.app-menu-items' },
    { layout: 'grid' as const, containerSelector: '.grid-menu' },
  ])(
    'should clear dropTargetIndex when cursor leaves the $layout container via DOM event',
    async ({ layout, containerSelector }) => {
      const { page, component } = await createEditModePage({
        apps: cloneApps(),
        layout,
      });

      component.dropTargetIndex = 1;

      const container = page.root?.querySelector(
        containerSelector
      ) as HTMLElement;
      const event = new Event('dragleave', {
        bubbles: true,
        cancelable: true,
      });
      Object.defineProperty(event, 'relatedTarget', { value: null });
      container?.dispatchEvent(event);

      expect(component.dropTargetIndex).toBeNull();
    }
  );

  it('should keep dropTargetIndex when cursor moves within the container', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    component.dropTargetIndex = 1;

    const container = {} as HTMLElement;
    container.contains = jest.fn().mockReturnValue(true);
    const mockEvent = {
      currentTarget: container,
      relatedTarget: document.createElement('div'),
    } as unknown as DragEvent;

    (component as any).handleDragLeave(mockEvent);

    expect(component.dropTargetIndex).toBe(1);
  });

  it('should clear dropTargetIndex when relatedTarget is null', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    component.dropTargetIndex = 2;

    const mockEvent = {
      currentTarget: document.createElement('div'),
      relatedTarget: null,
    } as unknown as DragEvent;

    (component as any).handleDragLeave(mockEvent);

    expect(component.dropTargetIndex).toBeNull();
  });

  it('should restore original app order when cancel is clicked after reorder', async () => {
    const originalApps = cloneApps();
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    const reorderedApps = [...(component.apps ?? [])];
    const [moved] = reorderedApps.splice(0, 1);
    reorderedApps.push(moved);
    component.apps = reorderedApps;

    expect(component.apps?.[0].appName).toBe('viewpoint');

    (component as any).handleCancel();

    expect(component.apps).toEqual(originalApps);
    expect(component.isEditMode).toBe(false);
  });

  it('should clear appsSnapshot when done is clicked', async () => {
    const { component } = await createEditModePage({
      apps: cloneApps(),
      layout: 'list',
    });

    expect((component as any).appsSnapshot).not.toBeNull();

    (component as any).handleDone();

    expect((component as any).appsSnapshot).toBeNull();
  });

  it.each([
    { layout: 'list' as const, selector: '.app-menu-item-row' },
    { layout: 'grid' as const, selector: '.grid-item' },
  ])(
    'should emit itemClick when $layout item is clicked',
    async ({ layout, selector }) => {
      const page = await createPage({ apps: mockApps, layout });
      const itemClickSpy = jest.fn();
      page.root?.addEventListener('itemClick', itemClickSpy);

      const items = page.root?.querySelectorAll(selector);
      (items?.[1] as HTMLElement)?.click();

      expect(itemClickSpy).toHaveBeenCalledTimes(1);
      expect(itemClickSpy.mock.calls[0][0].detail).toEqual({
        appName: 'viewpoint',
      });
    }
  );

  it('should stop propagation of itemSelect event from menu items in list layout', async () => {
    const page = await createPage({ apps: mockApps, layout: 'list' });

    const itemSelectSpy = jest.fn();
    page.root?.addEventListener('itemSelect', itemSelectSpy);

    const menuItem = page.root?.querySelector('modus-wc-menu-item');
    const event = new CustomEvent('itemSelect', {
      bubbles: true,
      cancelable: true,
      detail: { value: '', selected: true },
    });
    menuItem?.dispatchEvent(event);

    expect(itemSelectSpy).not.toHaveBeenCalled();
  });

  it('should populate truncatedApps on componentDidLoad for grid layout', async () => {
    const restoreRaf = mockRaf();

    const page = await createPage({
      apps: cloneApps(),
      layout: 'grid',
    });

    const gridItems = page.root?.querySelectorAll('.grid-item');
    gridItems?.forEach((gridItem) => {
      const mockLabel = document.createElement('span');
      mockLabel.classList.add('grid-item-text-label');
      Object.defineProperty(mockLabel, 'scrollWidth', { value: 120 });
      Object.defineProperty(mockLabel, 'clientWidth', { value: 80 });
      Object.defineProperty(mockLabel, 'scrollHeight', { value: 16 });
      Object.defineProperty(mockLabel, 'clientHeight', { value: 20 });
      gridItem.querySelector('modus-wc-tooltip')?.appendChild(mockLabel);
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).updateGridTooltips();
    await page.waitForChanges();

    expect(component.truncatedApps.size).toBe(4);
    mockApps.forEach((app) => {
      expect(component.truncatedApps.has(app.appName)).toBe(true);
    });

    restoreRaf();
  });

  it('should skip tooltip update when layout is list', async () => {
    const restoreRaf = mockRaf();
    const page = await createPage({
      apps: cloneApps(),
      layout: 'list',
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const spy = jest.spyOn(component as any, 'updateGridTooltips');
    (component as any).scheduleTooltipUpdate();

    expect(spy).not.toHaveBeenCalled();
    spy.mockRestore();
    restoreRaf();
  });

  it('should schedule tooltip update when apps change', async () => {
    const restoreRaf = mockRaf();
    const page = await createPage({
      apps: cloneApps(),
      layout: 'grid',
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const spy = jest.spyOn(component as any, 'scheduleTooltipUpdate');
    component.apps = [{ appName: 'connect' }];
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    restoreRaf();
  });

  it('should schedule tooltip update when layout changes to grid', async () => {
    const restoreRaf = mockRaf();
    const page = await createPage({
      apps: cloneApps(),
      layout: 'list',
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const spy = jest.spyOn(component as any, 'scheduleTooltipUpdate');
    component.layout = 'grid';
    await page.waitForChanges();

    expect(spy).toHaveBeenCalled();
    spy.mockRestore();
    restoreRaf();
  });

  it('should skip truncation check when apps data is unavailable', async () => {
    const restoreRaf = mockRaf();
    const page = await createPage({
      apps: cloneApps(),
      layout: 'grid',
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.apps = undefined;
    (component as any).updateGridTooltips();

    expect(component.truncatedApps.size).toBe(0);
    restoreRaf();
  });
});
