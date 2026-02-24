import { newSpecPage } from '@stencil/core/testing';
import { ModusWcTreeActions } from './modus-wc-tree-actions';

describe('modus-wc-tree-actions', () => {
  it('renders correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders with single action', async () => {
    const actions = [{ id: '1', icon: 'edit', label: 'Edit' }];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const buttons = page.root?.querySelectorAll('modus-wc-button');
    expect(buttons?.length).toBe(1);
  });

  it('emits treeActionClick when action is clicked', async () => {
    const actions = [{ id: 'edit-1', icon: 'edit', label: 'Edit' }];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const eventSpy = jest.fn();
    page.root?.addEventListener('treeActionClick', eventSpy);

    const button = page.root?.querySelector('modus-wc-button');
    button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
    expect(eventSpy.mock.calls[0][0].detail.actionId).toBe('edit-1');
    expect(eventSpy.mock.calls[0][0].detail.actionName).toBe('Edit');
  });

  it('does not emit event when disabled action is clicked', async () => {
    const actions = [{ id: '1', icon: 'edit', label: 'Edit', disabled: true }];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const eventSpy = jest.fn();
    page.root?.addEventListener('treeActionClick', eventSpy);

    const treeActions = page.rootInstance;
    treeActions['handleActionClick'](actions[0], new MouseEvent('click'));

    expect(eventSpy).not.toHaveBeenCalled();
  });

  it('toggles dropdown on more actions button click', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
      { id: '3', icon: 'share', label: 'Share' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const treeActions = page.rootInstance;
    expect(treeActions.isDropdownOpen).toBe(false);

    treeActions['handleMoreActionsClick'](new MouseEvent('click'));
    await page.waitForChanges();

    expect(treeActions.isDropdownOpen).toBe(true);

    treeActions['handleMoreActionsClick'](new MouseEvent('click'));
    await page.waitForChanges();

    expect(treeActions.isDropdownOpen).toBe(false);
  });

  it('emits dropdownOpened when dropdown is opened', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const eventSpy = jest.fn();
    page.root?.addEventListener('dropdownOpened', eventSpy);

    const treeActions = page.rootInstance;
    treeActions['handleMoreActionsClick'](new MouseEvent('click'));
    await page.waitForChanges();

    expect(eventSpy).toHaveBeenCalled();
  });

  it('closes dropdown when clicking outside', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const treeActions = page.rootInstance;
    treeActions.isDropdownOpen = true;

    const outsideElement = document.createElement('div');
    const clickEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(clickEvent, 'target', {
      value: outsideElement,
      enumerable: true,
    });

    treeActions['handleClickOutside'](clickEvent);
    await page.waitForChanges();

    expect(treeActions.isDropdownOpen).toBe(false);
  });

  it('closes dropdown when moreActionsButton ref is not available', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    const treeActions = page.rootInstance;
    treeActions.isDropdownOpen = true;
    treeActions.moreActionsButton = null;

    const outsideElement = document.createElement('div');
    const clickEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(clickEvent, 'target', {
      value: outsideElement,
      enumerable: true,
    });

    treeActions['handleClickOutside'](clickEvent);

    expect(treeActions.isDropdownOpen).toBe(false);
  });

  it('does not process click outside when dropdown is closed', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    const treeActions = page.rootInstance;
    treeActions.isDropdownOpen = false;

    const outsideElement = document.createElement('div');
    const clickEvent = new MouseEvent('click', { bubbles: true });
    Object.defineProperty(clickEvent, 'target', {
      value: outsideElement,
      enumerable: true,
    });

    const initialState = treeActions.isDropdownOpen;
    treeActions['handleClickOutside'](clickEvent);

    expect(treeActions.isDropdownOpen).toBe(initialState);
  });

  it('closes dropdown when another dropdown is opened', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const treeActions = page.rootInstance;
    treeActions.isDropdownOpen = true;

    const otherElement = document.createElement('div');
    const event = new CustomEvent('dropdownOpened', { detail: otherElement });

    treeActions.handleOtherDropdownOpened(event);
    await page.waitForChanges();

    expect(treeActions.isDropdownOpen).toBe(false);
  });

  it('does not close dropdown when same dropdown is opened', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const treeActions = page.rootInstance;
    treeActions.isDropdownOpen = true;

    const event = new CustomEvent('dropdownOpened', { detail: page.root });

    treeActions.handleOtherDropdownOpened(event);

    expect(treeActions.isDropdownOpen).toBe(true);
  });

  it('adds click event listener on componentDidLoad', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    const addEventListenerSpy = jest.spyOn(document, 'addEventListener');

    page.rootInstance.componentDidLoad();

    expect(addEventListenerSpy).toHaveBeenCalledWith(
      'click',
      expect.any(Function)
    );
  });

  it('initializes popper when more than 2 actions on componentDidUpdate', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
      { id: '3', icon: 'share', label: 'Share' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    const treeActions = page.rootInstance;
    const initializerSpy = jest.spyOn(treeActions, 'initializePopper' as never);

    treeActions.actions = actions;
    await page.waitForChanges();

    treeActions.componentDidUpdate();

    expect(initializerSpy).toHaveBeenCalled();
  });

  it('destroys popper when actions are 2 or less on componentDidUpdate', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    const treeActions = page.rootInstance;
    const destroySpy = jest.fn();
    treeActions.popperInstance = {
      destroy: destroySpy,
    } as unknown as ReturnType<typeof import('@popperjs/core').createPopper>;

    treeActions.actions = [{ id: '1', icon: 'edit', label: 'Edit' }];
    treeActions.componentDidUpdate();

    expect(destroySpy).toHaveBeenCalled();
    expect(treeActions.popperInstance).toBeNull();
  });

  it('renders with custom size', async () => {
    const actions = [{ id: '1', icon: 'edit', label: 'Edit' }];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions size="lg"></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    expect(page.rootInstance.size).toBe('lg');
  });

  it('renders disabled action', async () => {
    const actions = [{ id: '1', icon: 'edit', label: 'Edit', disabled: true }];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const button = page.root?.querySelector('modus-wc-button');
    expect(button?.hasAttribute('disabled')).toBe(true);
  });

  it('renders action with aria-label', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit', ariaLabel: 'Edit item' },
      { id: '2', icon: 'delete', label: 'Delete', ariaLabel: 'Delete item' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const dropdownAction = page.root?.querySelector(
      '.modus-wc-tree-dropdown-action'
    );
    expect(dropdownAction?.getAttribute('aria-label')).toBe('Delete item');
  });

  it('uses label as aria-label when ariaLabel is not provided', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const dropdownAction = page.root?.querySelector(
      '.modus-wc-tree-dropdown-action'
    );
    expect(dropdownAction?.getAttribute('aria-label')).toBe('Delete');
  });

  it('applies disabled class to dropdown action when disabled', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete', disabled: true },
      { id: '3', icon: 'share', label: 'Share' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const dropdownActions = page.root?.querySelectorAll(
      '.modus-wc-tree-dropdown-action'
    );
    const deleteAction = dropdownActions?.[0] as HTMLButtonElement;

    expect(deleteAction?.className).toContain('disabled');
    expect(deleteAction?.hasAttribute('disabled')).toBe(true);
  });

  it('does not apply disabled class to dropdown action when not disabled', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
      { id: '3', icon: 'share', label: 'Share' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const dropdownActions = page.root?.querySelectorAll(
      '.modus-wc-tree-dropdown-action'
    );
    const deleteAction = dropdownActions?.[0] as HTMLButtonElement;

    expect(deleteAction?.className).not.toContain('disabled');
    expect(deleteAction?.hasAttribute('disabled')).toBe(false);
  });

  it('closes dropdown when action is clicked', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const treeActions = page.rootInstance;
    treeActions.isDropdownOpen = true;

    treeActions['handleActionClick'](actions[1], new MouseEvent('click'));
    await page.waitForChanges();

    expect(treeActions.isDropdownOpen).toBe(false);
  });

  it('initializePopper returns early when buttons are not available', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    const treeActions = page.rootInstance;
    treeActions.moreActionsButton = null;
    treeActions.moreActionsDropdown = null;

    treeActions['initializePopper']();

    expect(treeActions.popperInstance).toBeNull();
  });

  it('destroys existing popper instance before creating new one', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
      { id: '3', icon: 'share', label: 'Share' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    const treeActions = page.rootInstance;
    treeActions.actions = actions;
    await page.waitForChanges();

    const mockPopper = {
      destroy: jest.fn(),
    };
    treeActions.popperInstance = mockPopper as unknown as ReturnType<
      typeof import('@popperjs/core').createPopper
    >;

    treeActions.moreActionsButton = page.root?.querySelector(
      '.modus-wc-tree-more-actions-wrapper modus-wc-button'
    ) as HTMLElement;
    treeActions.moreActionsDropdown = page.root?.querySelector(
      '.modus-wc-tree-more-actions-dropdown'
    ) as HTMLElement;

    treeActions['initializePopper']();

    expect(mockPopper.destroy).toHaveBeenCalled();
  });

  it('removes event listener and destroys popper on disconnectedCallback when popper exists', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    const treeActions = page.rootInstance;

    const destroySpy = jest.fn();
    treeActions.popperInstance = {
      destroy: destroySpy,
    } as unknown as ReturnType<typeof import('@popperjs/core').createPopper>;

    treeActions.disconnectedCallback();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'click',
      expect.any(Function)
    );
    expect(destroySpy).toHaveBeenCalled();
    expect(treeActions.popperInstance).toBeNull();
  });

  it('removes event listener on disconnectedCallback when popper is null', async () => {
    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    const removeEventListenerSpy = jest.spyOn(document, 'removeEventListener');
    const treeActions = page.rootInstance;

    treeActions.popperInstance = null;

    treeActions.disconnectedCallback();

    expect(removeEventListenerSpy).toHaveBeenCalledWith(
      'click',
      expect.any(Function)
    );
    expect(treeActions.popperInstance).toBeNull();
  });

  it('calls handleActionClick when primary action button is clicked', async () => {
    const actions = [{ id: '1', icon: 'edit', label: 'Edit' }];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const treeActions = page.rootInstance;
    const handleActionClickSpy = jest.spyOn(
      treeActions,
      'handleActionClick' as never
    );

    const button = page.root?.querySelector('modus-wc-button');
    button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(handleActionClickSpy).toHaveBeenCalled();
    expect(handleActionClickSpy).toHaveBeenCalledWith(
      actions[0],
      expect.any(MouseEvent)
    );
  });

  it('calls handleActionClick when dropdown action is clicked', async () => {
    const actions = [
      { id: '1', icon: 'edit', label: 'Edit' },
      { id: '2', icon: 'delete', label: 'Delete' },
      { id: '3', icon: 'share', label: 'Share' },
    ];

    const page = await newSpecPage({
      components: [ModusWcTreeActions],
      html: `<modus-wc-tree-actions></modus-wc-tree-actions>`,
    });

    page.rootInstance.actions = actions;
    await page.waitForChanges();

    const treeActions = page.rootInstance;
    treeActions.isDropdownOpen = true;
    await page.waitForChanges();

    const handleActionClickSpy = jest.spyOn(treeActions, 'handleActionClick');

    const dropdownAction = page.root?.querySelector(
      '.modus-wc-tree-dropdown-action'
    ) as HTMLButtonElement;
    dropdownAction?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();

    expect(handleActionClickSpy).toHaveBeenCalled();
    expect(handleActionClickSpy).toHaveBeenCalledWith(
      actions[1],
      expect.any(MouseEvent)
    );
  });
});
