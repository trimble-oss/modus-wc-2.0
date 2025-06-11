import { newSpecPage } from '@stencil/core/testing';
import { ModusWcSideNavigation } from './modus-wc-side-navigation';

describe('modus-wc-side-navigation', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation></modus-wc-side-navigation>',
    });
    expect(page.root).toMatchSnapshot();
  });
  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation expanded="true" max-width="300px"></modus-wc-side-navigation>',
    });
    expect(page.root).toMatchSnapshot();
  });
  it('applies expanded class when expanded is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation expanded="true"></modus-wc-side-navigation>',
    });
    const navPanel =
      page.root && page.root.querySelector('.modus-wc-side-navigation');
    expect(
      navPanel &&
        navPanel.classList.contains('modus-wc-side-navigation-expanded')
    ).toBe(true);
  });
  it('sets width style when expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation expanded="true" max-width="300px"></modus-wc-side-navigation>',
    });
    const nav =
      page.root && page.root.querySelector('.modus-wc-side-navigation');
    expect(nav && nav.getAttribute('style')).toContain('width: 300px');
  });
  it('collapses when clicking outside if collapseOnClickOutside is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation expanded="true" collapse-on-click-outside="true"></modus-wc-side-navigation>',
    });
    const instance = page.rootInstance;
    instance.navRef = document.createElement('div');
    document.body.appendChild(instance.navRef);
    instance.expanded = true;
    instance.collapseOnClickOutside = true;
    document.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(instance.expanded).toBe(false);
  });

  it('applies customClass when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation custom-class="my-custom-class"></modus-wc-side-navigation>',
    });
    const nav =
      page.root && page.root.querySelector('.modus-wc-side-navigation');
    expect(nav && nav.classList.contains('my-custom-class')).toBe(true);
  });

  it('removes event listeners in disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation></modus-wc-side-navigation>',
    });
    const instance = page.rootInstance;
    // Spy on removeEventListener
    const removeDocListener = jest.spyOn(document, 'removeEventListener');
    instance.disconnectedCallback();
    expect(removeDocListener).toHaveBeenCalledWith(
      'click',
      instance.handleClickOutside,
      true
    );
    removeDocListener.mockRestore();
  });

  it('handleClickOutside uses [event.target] if composedPath is not defined', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation expanded="true" collapse-on-click-outside="true"></modus-wc-side-navigation>',
    });
    const instance = page.rootInstance;
    instance.navRef = document.createElement('div');
    instance.expanded = true;
    instance.collapseOnClickOutside = true;
    // Simulate event without composedPath
    const fakeTarget = instance.navRef;
    const event = { target: fakeTarget } as unknown as MouseEvent;
    // navRef is in [event.target], so expanded should remain true
    instance.handleClickOutside(event);
    expect(instance.expanded).toBe(true);
    // Now use a different target (not navRef)
    const event2 = {
      target: document.createElement('div'),
    } as unknown as MouseEvent;
    instance.handleClickOutside(event2);
    expect(instance.expanded).toBe(false);
  });

  it('handleClickOutside returns early if not expanded, collapseOnClickOutside, or navRef', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation></modus-wc-side-navigation>',
    });
    const instance = page.rootInstance;
    // Not expanded
    instance.expanded = false;
    instance.collapseOnClickOutside = true;
    instance.navRef = document.createElement('div');
    // Should return early, expanded remains false
    instance.handleClickOutside(new MouseEvent('click'));
    expect(instance.expanded).toBe(false);

    // Not collapseOnClickOutside
    instance.expanded = true;
    instance.collapseOnClickOutside = false;
    instance.handleClickOutside(new MouseEvent('click'));
    expect(instance.expanded).toBe(true);

    // No navRef
    instance.expanded = true;
    instance.collapseOnClickOutside = true;
    instance.navRef = undefined;
    instance.handleClickOutside(new MouseEvent('click'));
    expect(instance.expanded).toBe(true);
  });

  it('should not set margin if mode or targetContent change without expanded changing', async () => {
    // Set up DOM content element
    const contentElement = document.createElement('div');
    contentElement.setAttribute('id', 'main-content');
    document.body.appendChild(contentElement);

    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: `<div>
          <modus-wc-side-navigation mode="overlay" target-content=".main-content"></modus-wc-side-navigation>
          <div class="main-content"></div>
        </div>`,
    });

    const component = page.rootInstance;
    const content = document.querySelector('.main-content') as HTMLElement;

    // Initial: collapsed
    expect(component.expanded).toBe(false);
    expect(page.root).toMatchSnapshot();

    // Update mode and targetContent — nothing should change
    component.mode = 'push';
    component.targetContent = '.main-content';
    await page.waitForChanges();

    expect(content.style.marginLeft).toBe('4rem'); // Default minWidth is 4rem when not expanded

    // Now expand — margin should be applied;
    component.expanded = true;
    await page.waitForChanges();
    expect(content.style.marginLeft).toBe(component.maxWidth);
  });

  it('should set marginLeft to minWidth when collapsed', async () => {
    const contentElement = document.createElement('div');
    contentElement.setAttribute('id', 'main-content');
    document.body.appendChild(contentElement);

    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: `<div>
          <modus-wc-side-navigation mode="push" target-content="#main-content" min-width="60px" max-width="240px"></modus-wc-side-navigation>
          <div id="main-content"></div>
        </div>`,
    });

    const component = page.rootInstance;
    const content = document.querySelector('#main-content') as HTMLElement;

    component.expanded = true;
    await page.waitForChanges();
    expect(content.style.marginLeft).toBe('240px');

    component.expanded = false;
    await page.waitForChanges();
    expect(content.style.marginLeft).toBe('4rem');
  });

  it('calls setTargetContentMargin when targetContent changes via handleTargetContentChange', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation></modus-wc-side-navigation>',
    });
    const instance = page.rootInstance;
    instance.setTargetContentMargin = jest.fn();
    instance.expanded = true;
    instance.mode = 'push';
    const newTarget = '.new-content';
    instance.handleTargetContentChange(newTarget);
    expect(instance.setTargetContentMargin).toHaveBeenCalledWith(
      true,
      'push',
      newTarget
    );
  });
});
