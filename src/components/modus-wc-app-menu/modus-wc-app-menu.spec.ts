import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';
import { IAppMenuSection, ModusWcAppMenu } from './modus-wc-app-menu';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';

describe('modus-wc-app-menu', () => {
  const mockSections: IAppMenuSection[] = [
    {
      title: 'Construction',
      subtitle: 'Project management tools',
      items: [{ appName: 'connect' }, { appName: 'viewpoint' }],
    },
    {
      title: 'Design',
      subtitle: 'Design tools',
      items: [{ appName: 'sketchup' }, { appName: 'tekla' }],
    },
  ];

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', {}),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with sections in list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
          layout: 'list',
        }),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render with sections in grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
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
          sections: mockSections,
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
          sections: mockSections,
        }),
    });

    expect(page.root).toMatchSnapshot();
  });

  it('should render header with "Trimble apps" title when not in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const headerTitle = page.root?.querySelector(
      '.header-title modus-wc-typography'
    );
    expect(headerTitle?.getAttribute('label')).toBe('Trimble apps');
  });

  it('should render header with "Edit" title when in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const headerTitle = page.root?.querySelector(
      '.header-title modus-wc-typography'
    );
    expect(headerTitle?.getAttribute('label')).toBe('Edit');
  });

  it('should render edit button when not in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
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
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
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

  it('should render with empty sections', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: [], layout: 'list' }),
    });

    const sectionElements = page.root?.querySelectorAll('.app-menu-section');
    expect(sectionElements?.length).toBe(0);
  });

  it('should render sections without title and subtitle', async () => {
    const sectionsNoTitle: IAppMenuSection[] = [
      { items: [{ appName: 'connect' }] },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: sectionsNoTitle,
          layout: 'list',
        }),
    });

    const typographies = page.root?.querySelectorAll(
      '.submenu-title-container modus-wc-typography'
    );
    expect(typographies?.[0]?.getAttribute('label')).toBe('');
    expect(typographies?.[1]?.getAttribute('label')).toBe('');
  });

  it('should render with inherited aria attributes', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          'aria-label': 'App menu',
          sections: mockSections,
        }),
    });

    expect(page.root?.getAttribute('aria-label')).toBe('App menu');
  });

  it('should render list layout with section titles and subtitles', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
          layout: 'list',
        }),
    });

    const sections = page.root?.querySelectorAll('.app-menu-section');
    expect(sections?.length).toBe(2);

    const firstSectionTitle = sections?.[0]?.querySelector(
      '.submenu-title-container modus-wc-typography'
    );
    expect(firstSectionTitle?.getAttribute('label')).toBe('Construction');

    const secondSectionTitle = sections?.[1]?.querySelector(
      '.submenu-title-container modus-wc-typography'
    );
    expect(secondSectionTitle?.getAttribute('label')).toBe('Design');
  });

  it('should render list layout with menu items and logos', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
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

  it('should render grid layout with all items flattened', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
          layout: 'grid',
        }),
    });

    const gridItems = page.root?.querySelectorAll('.grid-item');
    expect(gridItems?.length).toBe(4);

    const logos = page.root?.querySelectorAll('modus-wc-logo');
    expect(logos?.length).toBe(4);
  });

  it('should render grid layout with item labels', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
          layout: 'grid',
        }),
    });

    const labels = page.root?.querySelectorAll(
      '.grid-item modus-wc-typography'
    );
    expect(labels?.[0]?.getAttribute('label')).toBe('connect');
    expect(labels?.[1]?.getAttribute('label')).toBe('viewpoint');
    expect(labels?.[2]?.getAttribute('label')).toBe('sketchup');
    expect(labels?.[3]?.getAttribute('label')).toBe('tekla');
  });

  it('should show drag indicators in list layout when in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
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

  it('should set an accessible name on list layout drag handle buttons in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu, ModusWcButton],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const handleButtons = page.root?.querySelectorAll(
      '.app-menu-item-row modus-wc-button button'
    );
    expect(handleButtons?.length).toBe(4);
    handleButtons?.forEach((btn) => {
      expect(btn.getAttribute('aria-label')).toBe('Drag to reorder');
    });
  });

  it('should not show drag indicators in list layout when not in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
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
          sections: mockSections,
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
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

  it('should enter edit mode and save previous sections when handleEdit is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(true);
    expect(component.previousSections).toEqual(mockSections);
  });

  it('should exit edit mode and emit itemsOrderChange when handleDone is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const orderChangeSpy = jest.fn();
    page.root?.addEventListener('itemsOrderChange', orderChangeSpy);

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    component.handleDone();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(false);
    expect(orderChangeSpy).toHaveBeenCalledTimes(1);
    expect(orderChangeSpy.mock.calls[0][0].detail).toEqual(mockSections);
  });

  it('should exit edit mode and restore sections when handleCancel is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: JSON.parse(JSON.stringify(mockSections)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const originalSections = JSON.parse(
      JSON.stringify(component.previousSections)
    );

    component.sections = [
      {
        title: 'Modified',
        items: [{ appName: 'connect' }],
      },
    ];
    await page.waitForChanges();

    component.handleCancel();
    await page.waitForChanges();

    expect(component.isEditMode).toBe(false);
    expect(component.sections).toEqual(originalSections);
  });

  it('should set draggedItemPos when handleDragStart is called in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const mockDragEvent = new Event('dragstart') as DragEvent;
    Object.defineProperty(mockDragEvent, 'dataTransfer', {
      value: { effectAllowed: '' },
    });

    component.handleDragStart(mockDragEvent, 0, 1);

    expect(component.draggedItemPos).toEqual({ sectionIdx: 0, itemIdx: 1 });
  });

  it('should not set draggedItemPos when handleDragStart is called outside edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const mockDragEvent = new Event('dragstart') as DragEvent;

    component.handleDragStart(mockDragEvent, 0, 1);

    expect(component.draggedItemPos).toBeNull();
  });

  it('should prevent default on drag over when in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const mockDragEvent = new Event('dragover', {
      cancelable: true,
    }) as DragEvent;
    const preventDefaultSpy = jest.spyOn(mockDragEvent, 'preventDefault');

    component.handleDragOver(mockDragEvent);

    expect(preventDefaultSpy).toHaveBeenCalled();
  });

  it('should not prevent default on drag over when not in edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const mockDragEvent = new Event('dragover', {
      cancelable: true,
    }) as DragEvent;
    const preventDefaultSpy = jest.spyOn(mockDragEvent, 'preventDefault');

    component.handleDragOver(mockDragEvent);

    expect(preventDefaultSpy).not.toHaveBeenCalled();
  });

  it('should move item to target position when handleDrop is called', async () => {
    const sections: IAppMenuSection[] = [
      {
        title: 'Section 1',
        items: [
          { appName: 'connect' },
          { appName: 'viewpoint' },
          { appName: 'tekla' },
        ],
      },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: JSON.parse(JSON.stringify(sections)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { sectionIdx: 0, itemIdx: 0 };

    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;
    jest.spyOn(mockDragEvent, 'preventDefault');
    jest.spyOn(mockDragEvent, 'stopPropagation');

    component.handleDrop(mockDragEvent, 0, 2);
    await page.waitForChanges();

    expect(component.sections?.[0].items[0].appName).toBe('viewpoint');
    expect(component.sections?.[0].items[1].appName).toBe('tekla');
    expect(component.sections?.[0].items[2].appName).toBe('connect');
    expect(component.draggedItemPos).toBeNull();
  });

  it('should not move item when handleDrop is called outside edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: JSON.parse(JSON.stringify(mockSections)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const originalSections = JSON.parse(JSON.stringify(component.sections));
    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;

    component.handleDrop(mockDragEvent, 0, 1);

    expect(component.sections).toEqual(originalSections);
  });

  it('should not move item when handleDrop is called with null draggedItemPos', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: JSON.parse(JSON.stringify(mockSections)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const originalSections = JSON.parse(JSON.stringify(component.sections));
    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;

    component.handleDrop(mockDragEvent, 0, 1);

    expect(component.sections).toEqual(originalSections);
  });

  it('should move item between sections when handleDrop is called across sections', async () => {
    const sections: IAppMenuSection[] = [
      {
        title: 'Section 1',
        items: [{ appName: 'connect' }],
      },
      {
        title: 'Section 2',
        items: [{ appName: 'sketchup' }, { appName: 'tekla' }],
      },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: JSON.parse(JSON.stringify(sections)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { sectionIdx: 0, itemIdx: 0 };

    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;
    jest.spyOn(mockDragEvent, 'preventDefault');
    jest.spyOn(mockDragEvent, 'stopPropagation');

    component.handleDrop(mockDragEvent, 1, 1);
    await page.waitForChanges();

    expect(component.sections?.[0].items.length).toBe(0);
    expect(component.sections?.[1].items.length).toBe(3);
    expect(component.sections?.[1].items[1].appName).toBe('connect');
  });

  it('should append item to end of section when handleContainerDrop is called', async () => {
    const sections: IAppMenuSection[] = [
      {
        title: 'Section 1',
        items: [{ appName: 'connect' }, { appName: 'viewpoint' }],
      },
      {
        title: 'Section 2',
        items: [{ appName: 'sketchup' }],
      },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: JSON.parse(JSON.stringify(sections)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { sectionIdx: 0, itemIdx: 0 };

    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;
    jest.spyOn(mockDragEvent, 'preventDefault');

    component.handleContainerDrop(mockDragEvent, 1);
    await page.waitForChanges();

    expect(component.sections?.[0].items.length).toBe(1);
    expect(component.sections?.[1].items.length).toBe(2);
    expect(component.sections?.[1].items[1].appName).toBe('connect');
    expect(component.draggedItemPos).toBeNull();
  });

  it('should not move item when handleContainerDrop is called outside edit mode', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: JSON.parse(JSON.stringify(mockSections)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    const originalSections = JSON.parse(JSON.stringify(component.sections));
    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;

    component.handleContainerDrop(mockDragEvent, 0);

    expect(component.sections).toEqual(originalSections);
  });

  it('should not move item when handleContainerDrop is called with null draggedItemPos', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: JSON.parse(JSON.stringify(mockSections)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const originalSections = JSON.parse(JSON.stringify(component.sections));
    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;

    component.handleContainerDrop(mockDragEvent, 0);

    expect(component.sections).toEqual(originalSections);
  });

  it('should set dataTransfer.effectAllowed to move on drag start', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const dataTransfer = { effectAllowed: '' };
    const mockDragEvent = new Event('dragstart') as DragEvent;
    Object.defineProperty(mockDragEvent, 'dataTransfer', {
      value: dataTransfer,
    });

    component.handleDragStart(mockDragEvent, 0, 0);

    expect(dataTransfer.effectAllowed).toBe('move');
  });

  it('should handle drag start when dataTransfer is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const mockDragEvent = new Event('dragstart') as DragEvent;
    Object.defineProperty(mockDragEvent, 'dataTransfer', { value: null });

    component.handleDragStart(mockDragEvent, 0, 0);

    expect(component.draggedItemPos).toEqual({ sectionIdx: 0, itemIdx: 0 });
  });

  it('should render menu items as draggable in edit mode for list layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: mockSections,
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
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
          sections: mockSections,
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const gridItems = page.root?.querySelectorAll('.grid-item');
    gridItems?.forEach((item) => {
      expect(item.getAttribute('draggable')).toBe('true');
    });
  });

  it('should render with single section', async () => {
    const singleSection: IAppMenuSection[] = [
      {
        title: 'Only Section',
        subtitle: 'Single section subtitle',
        items: [{ appName: 'connect' }],
      },
    ];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: singleSection,
          layout: 'list',
        }),
    });

    const sections = page.root?.querySelectorAll('.app-menu-section');
    expect(sections?.length).toBe(1);

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    expect(menuItems?.length).toBe(1);
    expect(menuItems?.[0]?.getAttribute('label')).toBe('connect');
  });

  it('should render empty grid when sections have no items', async () => {
    const emptySections: IAppMenuSection[] = [{ title: 'Empty', items: [] }];

    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: emptySections,
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
          sections: mockSections,
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
          sections: mockSections,
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
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const panel = page.root?.querySelector('modus-wc-panel');
    expect(panel).not.toBeNull();
  });

  it('should render menu header inside panel body slot', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const bodySlot = page.root?.querySelector('[slot="body"]');
    expect(bodySlot).not.toBeNull();
    const menuHeader = bodySlot?.querySelector('.menu-header');
    expect(menuHeader).not.toBeNull();
  });

  it('should render body slot inside panel', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const bodySlot = page.root?.querySelector('[slot="body"]');
    expect(bodySlot).not.toBeNull();
  });

  it('should render header-end-content container', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const headerEndContent = page.root?.querySelector('.header-end-content');
    expect(headerEndContent).not.toBeNull();
  });

  it('should enter edit mode when edit button is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
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
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
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
          sections: JSON.parse(JSON.stringify(mockSections)),
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
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
          sections: JSON.parse(JSON.stringify(mockSections)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    const menuItems = page.root?.querySelectorAll('modus-wc-menu-item');
    const firstItem = menuItems?.[0] as HTMLElement;

    const dragStartEvent = new Event('dragstart', {
      bubbles: true,
    }) as DragEvent;
    Object.defineProperty(dragStartEvent, 'dataTransfer', {
      value: { effectAllowed: '' },
    });
    firstItem?.dispatchEvent(dragStartEvent);
    expect(component.draggedItemPos).toEqual({ sectionIdx: 0, itemIdx: 0 });

    const dragOverEvent = new Event('dragover', {
      bubbles: true,
      cancelable: true,
    }) as DragEvent;
    firstItem?.dispatchEvent(dragOverEvent);

    const secondItem = menuItems?.[1] as HTMLElement;
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
          sections: JSON.parse(JSON.stringify(mockSections)),
          layout: 'list',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { sectionIdx: 0, itemIdx: 0 };

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
          sections: JSON.parse(JSON.stringify(mockSections)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
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
    expect(component.draggedItemPos).toEqual({ sectionIdx: 0, itemIdx: 0 });

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
          sections: JSON.parse(JSON.stringify(mockSections)),
          layout: 'grid',
        }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { sectionIdx: 0, itemIdx: 0 };

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

  it('should handle sections prop being undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: undefined,
          layout: 'list',
        }),
    });

    expect(page.root).not.toBeNull();
  });

  it('should handle sections prop being undefined in grid layout', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () =>
        h('modus-wc-app-menu', {
          sections: undefined,
          layout: 'grid',
        }),
    });

    expect(page.root).not.toBeNull();
    const gridItems = page.root?.querySelectorAll('.grid-item');
    expect(gridItems?.length).toBe(0);
  });

  it('should fail gracefully when handleDrop runs after sections becomes nullish', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { sectionIdx: 0, itemIdx: 0 };
    component.sections = null as unknown as undefined;

    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;
    const preventDefaultSpy = jest.spyOn(mockDragEvent, 'preventDefault');
    const stopPropagationSpy = jest.spyOn(mockDragEvent, 'stopPropagation');

    expect(() => component.handleDrop(mockDragEvent, 0, 0)).not.toThrow();
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(stopPropagationSpy).toHaveBeenCalled();
    expect(component.draggedItemPos).toBeNull();
  });

  it('should fail gracefully when handleContainerDrop runs after sections becomes nullish', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { sections: mockSections }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.handleEdit();
    await page.waitForChanges();

    component.draggedItemPos = { sectionIdx: 0, itemIdx: 0 };
    component.sections = null as unknown as undefined;

    const mockDragEvent = new Event('drop', { cancelable: true }) as DragEvent;
    const preventDefaultSpy = jest.spyOn(mockDragEvent, 'preventDefault');

    expect(() => component.handleContainerDrop(mockDragEvent, 0)).not.toThrow();
    expect(preventDefaultSpy).toHaveBeenCalled();
    expect(component.draggedItemPos).toBeNull();
  });

  it('should render list layout when sections is null at render time', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { layout: 'list' }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.sections = null as unknown as undefined;
    await page.waitForChanges();

    const sections = page.root?.querySelectorAll('.app-menu-section');
    expect(sections?.length).toBe(0);
  });

  it('should render grid layout when sections is null at render time', async () => {
    const page = await newSpecPage({
      components: [ModusWcAppMenu],
      template: () => h('modus-wc-app-menu', { layout: 'grid' }),
    });

    const component = page.rootInstance as ModusWcAppMenu;
    component.sections = null as unknown as undefined;
    await page.waitForChanges();

    const gridItems = page.root?.querySelectorAll('.grid-item');
    expect(gridItems?.length).toBe(0);
  });
});
