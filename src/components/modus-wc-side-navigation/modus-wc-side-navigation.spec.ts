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
    const navPanel = page.root && page.root.querySelector('.side-nav-panel');
    expect(navPanel && navPanel.classList.contains('expanded')).toBe(true);
  });
  it('sets width style when expanded', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigation],
      html: '<modus-wc-side-navigation expanded="true" max-width="300px"></modus-wc-side-navigation>',
    });
    const nav = page.root && page.root.querySelector('.side-nav-panel');
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
});
