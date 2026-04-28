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

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', {}),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with apps in list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with apps in grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should emit layoutChange when layout prop changes after load', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

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
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          customClass: 'my-custom-class',
          apps: mockApps,
        }),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render header with "Trimble apps" title when not in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const headerTitle = page.root?.querySelector(
      '.header-title modus-wc-typography'
    );
    expect(headerTitle?.getAttribute('label')).toBe('Trimble apps');
  });

  it('should render header with "Edit" title when in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const headerTitle = page.root?.querySelector(
      '.header-title modus-wc-typography'
    );
    expect(headerTitle?.getAttribute('label')).toBe('Edit');
  });

  it('should render edit button when not in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const editButton = page.root?.querySelector(
      '.header-end-content modus-wc-button'
    );
    expect(editButton).not.toBeNull();
    expect(editButton?.getAttribute('shape')).toBe('square');

    const pencilIcon = editButton?.querySelector('modus-wc-icon');
    expect(pencilIcon?.getAttribute('name')).toBe('pencil');
  });

  it('should render done and cancel buttons when in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

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
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: [], layout: 'list' }),
    });

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBe(0);
  });

  it('should render with inherited aria attributes', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          'aria-label': 'App menu',
          apps: mockApps,
        }),
    });

    expect(page.root?.getAttribute('aria-label')).toBe('App menu');
  });

  it('should render list layout with menu items and logos', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBe(4);

    const logos = page.root?.querySelectorAll('modus-wc-logo');
    expect(logos?.length).toBe(4);
    expect(logos?.[0]?.getAttribute('name')).toBe('connect');
    expect(logos?.[1]?.getAttribute('name')).toBe('viewpoint');
  });

  it('should render grid layout with all items', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const gridItems = page.root?.querySelectorAll('.grid-item');
    expect(gridItems?.length).toBe(4);

    const logos = page.root?.querySelectorAll('modus-wc-logo');
    expect(logos?.length).toBe(4);
  });

  it('should not have tooltipContent on list layout menu items', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    menuItems?.forEach((item) => {
      expect(item.hasAttribute('tooltipcontent')).toBe(false);
    });
  });

  it('should wrap grid layout labels with modus-wc-tooltip', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const tooltips = page.root?.querySelectorAll('.grid-item modus-wc-tooltip');
    expect(tooltips?.length).toBe(4);
    expect(tooltips?.[0]?.getAttribute('content')).toBe('Trimble Connect');
    expect(tooltips?.[1]?.getAttribute('content')).toBe('Viewpoint');
    expect(tooltips?.[2]?.getAttribute('content')).toBe('SketchUp');
    expect(tooltips?.[3]?.getAttribute('content')).toBe('Tekla');
  });

  it('should disable grid tooltips when text is not truncated', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const tooltips = page.root?.querySelectorAll('.grid-item modus-wc-tooltip');
    tooltips?.forEach((tooltip) => {
      const mockLabel = document.createElement('span');
      mockLabel.classList.add('grid-item-text-label');
      Object.defineProperty(mockLabel, 'scrollWidth', { value: 50 });
      Object.defineProperty(mockLabel, 'clientWidth', { value: 80 });
      Object.defineProperty(mockLabel, 'scrollHeight', { value: 16 });
      Object.defineProperty(mockLabel, 'clientHeight', { value: 20 });
      tooltip.appendChild(mockLabel);
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).updateGridTooltips();

    tooltips?.forEach((tooltip) => {
      expect((tooltip as HTMLElement & { disabled: boolean }).disabled).toBe(
        true
      );
    });
  });

  it('should enable grid tooltips when text is truncated', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const tooltips = page.root?.querySelectorAll('.grid-item modus-wc-tooltip');
    tooltips?.forEach((tooltip) => {
      const mockLabel = document.createElement('span');
      mockLabel.classList.add('grid-item-text-label');
      Object.defineProperty(mockLabel, 'scrollWidth', { value: 120 });
      Object.defineProperty(mockLabel, 'clientWidth', { value: 80 });
      Object.defineProperty(mockLabel, 'scrollHeight', { value: 16 });
      Object.defineProperty(mockLabel, 'clientHeight', { value: 20 });
      tooltip.appendChild(mockLabel);
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).updateGridTooltips();

    tooltips?.forEach((tooltip) => {
      expect((tooltip as HTMLElement & { disabled: boolean }).disabled).toBe(
        false
      );
    });
  });

  it('should render grid layout with item labels', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

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

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: unknownApps,
          layout: 'list',
        }),
    });

    const menuItem = page.root?.querySelector('modus-wc-menu-item');
    expect(menuItem?.getAttribute('label')).toBe('unknown_app');
  });

  it('should show drag indicators in list layout when in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

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
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

    const dragIcons = page.root?.querySelectorAll(
      'modus-wc-icon[name="drag_indicator"]'
    );
    expect(dragIcons?.length).toBe(0);
  });

  it('should show drag indicators in grid layout when in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

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
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(true);
  });

  it('should auto-focus the first item when entering edit mode', async () => {
    const origRaf = globalThis.requestAnimationFrame;
    globalThis.requestAnimationFrame = jest.fn((cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    }) as unknown as typeof globalThis.requestAnimationFrame;

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', { apps: mockApps, layout: 'list' }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const focusSpy = jest.spyOn(keyboardUtils, 'focusAppMenuItem');
    (component as any).handleEdit();
    await page.waitForChanges();

    expect(focusSpy).toHaveBeenCalledWith(expect.anything(), 'list', 0);
    focusSpy.mockRestore();
    globalThis.requestAnimationFrame = origRaf;
  });

  it('should exit edit mode and emit itemsOrderChange when handleDone is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const orderChangeSpy = jest.fn();
    page.root?.addEventListener('itemsOrderChange', orderChangeSpy);

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    (component as any).handleDone();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(false);
    expect(orderChangeSpy).toHaveBeenCalledTimes(1);
    expect(orderChangeSpy.mock.calls[0][0].detail).toEqual(mockApps);
  });

  it('should exit edit mode when handleCancel is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    (component as any).handleCancel();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(false);
  });

  it('should set draggedItemPos when handleDragStart is called in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const mockDragEvent = new Event('dragstart') as DragEvent;
    Object.defineProperty(mockDragEvent, 'dataTransfer', {
      value: { effectAllowed: '' },
    });

    (component as any).handleDragStart(mockDragEvent, 1);

    expect(component.draggedItemPos).toEqual({ appIndex: 1 });
  });

  it('should not set draggedItemPos when handleDragStart is called outside edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const mockDragEvent = new Event('dragstart') as DragEvent;

    (component as any).handleDragStart(mockDragEvent, 1);

    expect(component.draggedItemPos).toBeNull();
  });

  it('should prevent default on drag over when in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const mockDragEvent = new Event('dragover', {
      cancelable: true,
    }) as DragEvent;
    const preventDefaultSpy = jest.spyOn(mockDragEvent, 'preventDefault');

    (component as any).handleDragOver(mockDragEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should not prevent default on drag over when not in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

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

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

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
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const originalApps = JSON.parse(JSON.stringify(component.apps));
    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;

    (component as any).handleDrop(mockDragEvent, 1);

    expect(component.apps).toEqual(originalApps);
  });

  it('should not move item when handleDrop is called with null draggedItemPos', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const originalApps = JSON.parse(JSON.stringify(component.apps));
    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;

    (component as any).handleDrop(mockDragEvent, 1);

    expect(component.apps).toEqual(originalApps);
  });

  it('should swap items when handleContainerDrop is called', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { appIndex: 0 };

    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;
    jest.spyOn(mockDragEvent, 'preventDefault');

    (component as any).handleContainerDrop(mockDragEvent, 2);
    await page.waitForChanges();

    expect(component.draggedItemPos).toBeNull();
  });

  it('should not move item when handleContainerDrop is called outside edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const originalApps = JSON.parse(JSON.stringify(component.apps));
    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;

    (component as any).handleContainerDrop(mockDragEvent, 0);

    expect(component.apps).toEqual(originalApps);
  });

  it('should not move item when handleContainerDrop is called with null draggedItemPos', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const originalApps = JSON.parse(JSON.stringify(component.apps));
    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;

    (component as any).handleContainerDrop(mockDragEvent, 0);

    expect(component.apps).toEqual(originalApps);
  });

  it('should set dataTransfer.effectAllowed to move on drag start', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const dataTransfer = { effectAllowed: '' };
    const mockDragEvent = new Event('dragstart') as DragEvent;
    Object.defineProperty(mockDragEvent, 'dataTransfer', {
      value: dataTransfer,
    });

    (component as any).handleDragStart(mockDragEvent, 0);

    expect(dataTransfer.effectAllowed).toBe('move');
  });

  it('should handle drag start when dataTransfer is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const mockDragEvent = new Event('dragstart') as DragEvent;
    Object.defineProperty(mockDragEvent, 'dataTransfer', { value: null });

    (component as any).handleDragStart(mockDragEvent, 0);

    expect(component.draggedItemPos).toEqual({ appIndex: 0 });
  });

  it('should render menu items as draggable in edit mode for list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const itemRows = page.root?.querySelectorAll('.app-menu-item-row');
    itemRows?.forEach((row) => {
      expect(row.getAttribute('draggable')).toBe('true');
    });
  });

  it('should render grid items as draggable in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const gridItems = page.root?.querySelectorAll('.grid-item');
    gridItems?.forEach((item) => {
      expect(item.getAttribute('draggable')).toBe('true');
    });
  });

  it('should render with single app item', async () => {
    const singleApp: IAppMenuItem[] = [{ appName: 'connect' }];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: singleApp,
          layout: 'list',
        }),
    });

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBe(1);
    expect(menuItems?.[0]?.getAttribute('label')).toBe('Trimble Connect');
  });

  it('should render empty grid when apps is empty', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: [],
          layout: 'grid',
        }),
    });

    const gridItems = page.root?.querySelectorAll('.grid-item');
    expect(gridItems?.length).toBe(0);
  });

  it('should render logo emblems in list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

    const logos = page.root?.querySelectorAll('modus-wc-logo');
    logos?.forEach((logo) => {
      expect(logo.hasAttribute('emblem')).toBe(true);
      expect(logo.getAttribute('custom-class')).toBe('app-logo');
    });
  });

  it('should render logo emblems in grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const logos = page.root?.querySelectorAll('modus-wc-logo');
    logos?.forEach((logo) => {
      expect(logo.hasAttribute('emblem')).toBe(true);
      expect(logo.getAttribute('custom-class')).toBe('grid-emblem');
    });
  });

  it('should wrap content in modus-wc-panel', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const panel = page.root?.querySelector('modus-wc-panel');
    expect(panel).not.toBeNull();
  });

  it('should render menu header inside panel body slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const bodySlot = page.root?.querySelector('[slot="body"]');
    expect(bodySlot).not.toBeNull();
    const menuHeader = bodySlot?.querySelector('.menu-header');
    expect(menuHeader).not.toBeNull();
  });

  it('should render header-end-content container', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const headerEndContent = page.root?.querySelector('.header-end-content');
    expect(headerEndContent).not.toBeNull();
  });

  it('should enter edit mode when edit button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const editButton = page.root?.querySelector(
      '.header-end-content modus-wc-button'
    ) as HTMLElement;
    editButton?.click();
    await page.waitForChanges();

    const component = page.rootInstance as ModusWcAppMenu;
    expect(component.isEditMode).toBe(true);
  });

  it('should exit edit mode when Done button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

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
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

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
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const itemRows = page.root?.querySelectorAll('.app-menu-item-row');
    const firstItem = itemRows?.[0] as HTMLElement;

    const dragStartEvent = new Event('dragstart', {
      bubbles: true,
    }) as DragEvent;
    Object.defineProperty(dragStartEvent, 'dataTransfer', {
      value: { effectAllowed: '' },
    });
    firstItem?.dispatchEvent(dragStartEvent);
    expect(component.draggedItemPos).toEqual({ appIndex: 0 });

    const dragOverEvent = new Event('dragover', {
      bubbles: true,
      cancelable: true,
    }) as DragEvent;
    firstItem?.dispatchEvent(dragOverEvent);

    const secondItem = itemRows?.[1] as HTMLElement;
    const dropEvent = new Event('drop', {
      bubbles: true,
      cancelable: true,
    }) as DragEvent;
    secondItem?.dispatchEvent(dropEvent);
  });

  it('should trigger drag handlers on list container via DOM events', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { appIndex: 0 };

    const container = page.root?.querySelector(
      '.app-menu-items'
    ) as HTMLElement;

    const dragOverEvent = new Event('dragover', {
      bubbles: true,
      cancelable: true,
    }) as DragEvent;
    container?.dispatchEvent(dragOverEvent);

    const dropEvent = new Event('drop', {
      bubbles: true,
      cancelable: true,
    }) as DragEvent;
    container?.dispatchEvent(dropEvent);
  });

  it('should trigger drag handlers on grid layout items via DOM events', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const gridItems = page.root?.querySelectorAll('.grid-item');
    const firstItem = gridItems?.[0] as HTMLElement;

    const dragStartEvent = new Event('dragstart', {
      bubbles: true,
    }) as DragEvent;
    Object.defineProperty(dragStartEvent, 'dataTransfer', {
      value: { effectAllowed: '' },
    });
    firstItem?.dispatchEvent(dragStartEvent);
    expect(component.draggedItemPos).toEqual({ appIndex: 0 });

    const dragOverEvent = new Event('dragover', {
      bubbles: true,
      cancelable: true,
    }) as DragEvent;
    firstItem?.dispatchEvent(dragOverEvent);

    const secondItem = gridItems?.[1] as HTMLElement;
    const dropEvent = new Event('drop', {
      bubbles: true,
      cancelable: true,
    }) as DragEvent;
    secondItem?.dispatchEvent(dropEvent);
  });

  it('should trigger drag handlers on grid container via DOM events', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { appIndex: 0 };

    const gridMenu = page.root?.querySelector('.grid-menu') as HTMLElement;

    const dragOverEvent = new Event('dragover', {
      bubbles: true,
      cancelable: true,
    }) as DragEvent;
    gridMenu?.dispatchEvent(dragOverEvent);

    const dropEvent = new Event('drop', {
      bubbles: true,
      cancelable: true,
    }) as DragEvent;
    gridMenu?.dispatchEvent(dropEvent);
  });

  it('should handle apps prop being undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: undefined,
          layout: 'list',
        }),
    });

    expect(page.root).not.toBeNull();
  });

  it('should handle apps prop being undefined in grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: undefined,
          layout: 'grid',
        }),
    });

    expect(page.root).not.toBeNull();
    const gridItems = page.root?.querySelectorAll('.grid-item');
    expect(gridItems?.length).toBe(0);
  });

  it('should grab an item on Space key in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(spaceEvent, 0);

    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should drop a grabbed item on Enter key', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    const enterEvent = new KeyboardEvent('keydown', {
      key: 'Enter',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(enterEvent, 0);

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should move a grabbed item down on ArrowDown key in list layout', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowDownEvent, 0);

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 1 });
  });

  it('should move a grabbed item up on ArrowUp key in list layout', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 1 };
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowUpEvent, 1);

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should cancel grab on Escape key', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    const escapeEvent = new KeyboardEvent('keydown', {
      key: 'Escape',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(escapeEvent, 0);

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should not move item beyond array boundaries', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowUpEvent, 0);

    expect(component.apps?.[0].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should not handle keyboard events when not in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(spaceEvent, 0);

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should not reorder when arrow key pressed without grab', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const originalApps = JSON.parse(JSON.stringify(component.apps));
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowDownEvent, 0);

    expect(component.apps).toEqual(originalApps);
    expect(component.grabbedItemPos).toBeNull();
  });

  it('should clear grabbedItemPos on handleDone', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleDone();
    await page.waitForChanges();

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should clear grabbedItemPos on handleCancel', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleCancel();
    await page.waitForChanges();

    expect(component.grabbedItemPos).toBeNull();
  });

  it('should add grabbed-item class when item is grabbed', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    await page.waitForChanges();

    const firstRow = page.root?.querySelector('.app-menu-item-row');
    expect(firstRow?.classList.contains('grabbed-item')).toBe(true);
  });

  it('should add tabindex to items in edit mode for list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const rows = page.root?.querySelectorAll('.app-menu-item-row');
    rows?.forEach((row) => {
      expect(row.getAttribute('tabindex')).toBe('0');
    });
  });

  it('should add tabindex to items in edit mode for grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const gridItems = page.root?.querySelectorAll('.grid-item');
    gridItems?.forEach((item) => {
      expect(item.getAttribute('tabindex')).toBe('0');
    });
  });

  it('should move a grabbed item right on ArrowRight key in grid layout', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    const arrowRightEvent = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowRightEvent, 0);

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 1 });
  });

  it('should move a grabbed item left on ArrowLeft key in grid layout', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 1 };
    const arrowLeftEvent = new KeyboardEvent('keydown', {
      key: 'ArrowLeft',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowLeftEvent, 1);

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should not move list items on ArrowLeft or ArrowRight key', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    const arrowRightEvent = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowRightEvent, 0);

    expect(component.apps?.[0].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should route ArrowUp to reorderByKeyboard in grid layout', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
      { appName: 'sketchup' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 3 };
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      cancelable: true,
      bubbles: true,
    });
    const preventDefaultSpy = jest.spyOn(arrowUpEvent, 'preventDefault');
    (component as any).handleKeyDown(arrowUpEvent, 3);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should route ArrowDown to reorderByKeyboard in grid layout', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
      { appName: 'sketchup' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      cancelable: true,
      bubbles: true,
    });
    const preventDefaultSpy = jest.spyOn(arrowDownEvent, 'preventDefault');
    (component as any).handleKeyDown(arrowDownEvent, 0);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should move grid item by offset via reorderByKeyboard', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
      { appName: 'sketchup' },
      { appName: 'earthworks' },
      { appName: 'siteworks' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).reorderByKeyboard(0, 3);

    expect(component.apps?.[0].appName).toBe('viewpoint');
    expect(component.apps?.[1].appName).toBe('tekla');
    expect(component.apps?.[2].appName).toBe('sketchup');
    expect(component.apps?.[3].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 3 });
  });

  it('should move grid item up by offset via reorderByKeyboard', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
      { appName: 'sketchup' },
      { appName: 'earthworks' },
      { appName: 'siteworks' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 3 };
    (component as any).reorderByKeyboard(3, -3);

    expect(component.apps?.[0].appName).toBe('sketchup');
    expect(component.apps?.[3].appName).toBe('tekla');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should not move grid item beyond boundaries via reorderByKeyboard', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).reorderByKeyboard(0, -3);

    expect(component.apps?.[0].appName).toBe('connect');
    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should not move item beyond end of list', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const lastIdx = (component.apps?.length ?? 1) - 1;
    component.grabbedItemPos = { appIndex: lastIdx };
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowDownEvent, lastIdx);

    expect(component.grabbedItemPos).toEqual({ appIndex: lastIdx });
  });

  it('should focus item after keyboard move via requestAnimationFrame in list layout', async () => {
    const origRaf = globalThis.requestAnimationFrame;
    globalThis.requestAnimationFrame = jest.fn((cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    }) as unknown as typeof globalThis.requestAnimationFrame;

    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).handleKeyDown(
      new KeyboardEvent('keydown', { key: 'ArrowDown', cancelable: true }),
      0
    );

    expect(globalThis.requestAnimationFrame).toHaveBeenCalled();
    globalThis.requestAnimationFrame = origRaf;
  });

  it('should focus item after grid move via requestAnimationFrame', async () => {
    const origRaf = globalThis.requestAnimationFrame;
    globalThis.requestAnimationFrame = jest.fn((cb: FrameRequestCallback) => {
      cb(0);
      return 0;
    }) as unknown as typeof globalThis.requestAnimationFrame;

    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = { appIndex: 0 };
    (component as any).reorderByKeyboard(0, 1);

    expect(globalThis.requestAnimationFrame).toHaveBeenCalled();
    globalThis.requestAnimationFrame = origRaf;
  });

  it('should trigger handleKeyDown on list item via DOM keydown event', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const firstRow = page.root?.querySelector(
      '.app-menu-item-row'
    ) as HTMLElement;
    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      cancelable: true,
      bubbles: true,
    });
    firstRow?.dispatchEvent(spaceEvent);

    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should trigger handleKeyDown on grid item via DOM keydown event', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const firstGridItem = page.root?.querySelector('.grid-item') as HTMLElement;
    const spaceEvent = new KeyboardEvent('keydown', {
      key: ' ',
      cancelable: true,
      bubbles: true,
    });
    firstGridItem?.dispatchEvent(spaceEvent);

    expect(component.grabbedItemPos).toEqual({ appIndex: 0 });
  });

  it('should calculate grid column count based on offsetTop of items', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
      { appName: 'sketchup' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const gridItems = page.root?.querySelectorAll('.grid-item');

    if (gridItems && gridItems.length >= 4) {
      Object.defineProperty(gridItems[0], 'offsetTop', { value: 0 });
      Object.defineProperty(gridItems[1], 'offsetTop', { value: 0 });
      Object.defineProperty(gridItems[2], 'offsetTop', { value: 100 });
      Object.defineProperty(gridItems[3], 'offsetTop', { value: 100 });
    }

    const colCount = keyboardUtils.getGridColumnCount(page.root as HTMLElement);
    expect(colCount).toBe(2);
  });

  it('should return 1 from getGridColumnCount when grid has zero or one item', async () => {
    const apps: IAppMenuItem[] = [{ appName: 'connect' }];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    expect(keyboardUtils.getGridColumnCount(page.root as HTMLElement)).toBe(1);
  });

  it('should not move list item when grabbedItemPos is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = null;
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowUpEvent, 0);
    expect(component.apps?.[0].appName).toBe('connect');
  });

  it('should not move grid item when grabbedItemPos is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.grabbedItemPos = null;
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowDownEvent, 0);
    expect(component.apps?.[0].appName).toBe('connect');
  });

  it('should handle focusAppMenuItem when target element does not exist', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    expect(() =>
      keyboardUtils.focusAppMenuItem(page.root as HTMLElement, 'list', 99)
    ).not.toThrow();
  });

  it('should return false from isGrabbed when grabbedItemPos is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.grabbedItemPos = null;
    expect((component as any).isGrabbed(0)).toBe(false);
  });

  it('should return false from isGrabbed when appIndex does not match', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.grabbedItemPos = { appIndex: 5 };
    expect((component as any).isGrabbed(0)).toBe(false);
  });

  it('should handle focusAppMenuItem for grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    expect(() =>
      keyboardUtils.focusAppMenuItem(page.root as HTMLElement, 'grid', 0)
    ).not.toThrow();
  });

  it('should handle reorderListItem when apps is empty', () => {
    const result = keyboardUtils.reorderListItem([], 0, -1);
    expect(result).toBeNull();
  });

  it('should handle reorderGridItem when apps is empty', () => {
    const result = keyboardUtils.reorderGridItem([], 0, 1);
    expect(result).toBeNull();
  });

  it('should render grid items with correct aria attributes in non-edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const gridItem = page.root?.querySelector('.grid-item');
    expect(gridItem?.getAttribute('aria-roledescription')).toBeNull();
    expect(gridItem?.getAttribute('role')).toBe('listitem');
  });

  it('should render grid items with correct aria attributes in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    component.grabbedItemPos = { appIndex: 0 };
    await page.waitForChanges();

    const gridItems = page.root?.querySelectorAll('.grid-item');
    const firstItem = gridItems?.[0];
    expect(firstItem?.getAttribute('draggable')).toBe('true');
    expect(firstItem?.getAttribute('aria-roledescription')).toBe(
      'reorderable item'
    );
  });

  it('should set dropTargetIndex on handleDragEnter in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { appIndex: 0 };

    const mockDragEvent = new Event('dragenter', {
      cancelable: true,
    }) as DragEvent;
    jest.spyOn(mockDragEvent, 'preventDefault');

    (component as any).handleDragEnter(mockDragEvent, 2);

    expect(component.dropTargetIndex).toBe(2);
  });

  it('should set dropTargetIndex to null when dragging over self', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { appIndex: 1 };

    const mockDragEvent = new Event('dragenter', {
      cancelable: true,
    }) as DragEvent;
    jest.spyOn(mockDragEvent, 'preventDefault');

    (component as any).handleDragEnter(mockDragEvent, 1);

    expect(component.dropTargetIndex).toBeNull();
  });

  it('should clear draggedItemPos and dropTargetIndex on handleDragEnd', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { apps: mockApps }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { appIndex: 0 };
    component.dropTargetIndex = 2;

    (component as any).handleDragEnd();

    expect(component.draggedItemPos).toBeNull();
    expect(component.dropTargetIndex).toBeNull();
  });

  it('should render list items with role="option" in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const rows = page.root?.querySelectorAll('.app-menu-item-row');
    rows?.forEach((row) => {
      expect(row.getAttribute('role')).toBe('option');
      expect(row.getAttribute('aria-roledescription')).toBe('reorderable item');
    });
  });

  it('should render grid-row with role="listbox" in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).handleEdit();
    await page.waitForChanges();

    const gridRow = page.root?.querySelector('.grid-row');
    expect(gridRow?.getAttribute('role')).toBe('listbox');
  });

  it('should render grid-row with role="list" when not in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: mockApps,
          layout: 'grid',
        }),
    });

    const gridRow = page.root?.querySelector('.grid-row');
    expect(gridRow?.getAttribute('role')).toBe('list');
  });

  it('should navigate focus on ArrowDown without grab in list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowDownEvent, 0);

    expect(navSpy).toHaveBeenCalledWith(0, 1);
    expect(component.grabbedItemPos).toBeNull();
  });

  it('should navigate focus on ArrowUp without grab in list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowUpEvent, 2);

    expect(navSpy).toHaveBeenCalledWith(2, -1);
    expect(component.grabbedItemPos).toBeNull();
  });

  it('should navigate focus on ArrowRight without grab in grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
    const arrowRightEvent = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowRightEvent, 0);

    expect(navSpy).toHaveBeenCalledWith(0, 1);
    expect(component.grabbedItemPos).toBeNull();
  });

  it('should navigate focus on ArrowLeft without grab in grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
    const arrowLeftEvent = new KeyboardEvent('keydown', {
      key: 'ArrowLeft',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowLeftEvent, 2);

    expect(navSpy).toHaveBeenCalledWith(2, -1);
    expect(component.grabbedItemPos).toBeNull();
  });

  it('should navigate focus on ArrowDown without grab in grid layout', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
      { appName: 'sketchup' },
      { appName: 'earthworks' },
      { appName: 'siteworks' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const gridItems = page.root?.querySelectorAll('.grid-item');
    if (gridItems && gridItems.length >= 6) {
      Object.defineProperty(gridItems[0], 'offsetTop', { value: 0 });
      Object.defineProperty(gridItems[1], 'offsetTop', { value: 0 });
      Object.defineProperty(gridItems[2], 'offsetTop', { value: 0 });
      Object.defineProperty(gridItems[3], 'offsetTop', { value: 100 });
      Object.defineProperty(gridItems[4], 'offsetTop', { value: 100 });
      Object.defineProperty(gridItems[5], 'offsetTop', { value: 100 });
    }

    const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowDownEvent, 0);

    expect(navSpy).toHaveBeenCalledWith(0, 3);
    expect(component.grabbedItemPos).toBeNull();
  });

  it('should navigate focus on ArrowUp without grab in grid layout', async () => {
    const apps: IAppMenuItem[] = [
      { appName: 'connect' },
      { appName: 'viewpoint' },
      { appName: 'tekla' },
      { appName: 'sketchup' },
      { appName: 'earthworks' },
      { appName: 'siteworks' },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(apps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const gridItems = page.root?.querySelectorAll('.grid-item');
    if (gridItems && gridItems.length >= 6) {
      Object.defineProperty(gridItems[0], 'offsetTop', { value: 0 });
      Object.defineProperty(gridItems[1], 'offsetTop', { value: 0 });
      Object.defineProperty(gridItems[2], 'offsetTop', { value: 0 });
      Object.defineProperty(gridItems[3], 'offsetTop', { value: 100 });
      Object.defineProperty(gridItems[4], 'offsetTop', { value: 100 });
      Object.defineProperty(gridItems[5], 'offsetTop', { value: 100 });
    }

    const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
    const arrowUpEvent = new KeyboardEvent('keydown', {
      key: 'ArrowUp',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowUpEvent, 3);

    expect(navSpy).toHaveBeenCalledWith(3, -3);
    expect(component.grabbedItemPos).toBeNull();
  });

  it('should not navigate focus beyond boundaries in list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const targetIdx = keyboardUtils.getTargetFocusIndex(0, -1, mockApps.length);
    expect(targetIdx).toBeNull();
  });

  it('should not navigate focus beyond boundaries in grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const targetIdx = keyboardUtils.getTargetFocusIndex(0, -1, mockApps.length);
    expect(targetIdx).toBeNull();
  });

  it('should prevent default on arrow keys even without grab in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const arrowDownEvent = new KeyboardEvent('keydown', {
      key: 'ArrowDown',
      cancelable: true,
      bubbles: true,
    });
    const preventDefaultSpy = jest.spyOn(arrowDownEvent, 'preventDefault');
    (component as any).handleKeyDown(arrowDownEvent, 0);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should not call navigateFocusByKeyboard for ArrowLeft/ArrowRight in list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          apps: JSON.parse(JSON.stringify(mockApps)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    (component as any).isEditMode = true;
    await page.waitForChanges();

    const navSpy = jest.spyOn(component as any, 'navigateFocusByKeyboard');
    const arrowRightEvent = new KeyboardEvent('keydown', {
      key: 'ArrowRight',
      cancelable: true,
      bubbles: true,
    });
    (component as any).handleKeyDown(arrowRightEvent, 0);

    expect(navSpy).not.toHaveBeenCalled();
  });
});
