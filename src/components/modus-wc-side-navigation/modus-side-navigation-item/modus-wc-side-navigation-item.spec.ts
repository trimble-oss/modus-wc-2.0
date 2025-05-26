import { newSpecPage } from '@stencil/core/testing';
import { ModusWcSideNavigationItem } from './modus-wc-side-navigation-item';

describe('modus-wc-side-navigation-item', () => {
  it('renders correctly', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item></modus-wc-side-navigation-item>`,
    });
    expect(page.root).toBeTruthy();
  });

  it('matches snapshot', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item label="Home" icon="home"></modus-wc-side-navigation-item>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('renders with label and icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item label="Dashboard" icon="dashboard"></modus-wc-side-navigation-item>`,
    });
    expect(page.root?.getAttribute('label')).toBe('Dashboard');
    expect(page.root?.getAttribute('icon')).toBe('dashboard');
  });

  it('calls handleClick when Enter key is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item></modus-wc-side-navigation-item>`,
    });
    const instance = page.rootInstance as ModusWcSideNavigationItem;
    const handleClickSpy = jest.spyOn(instance, 'handleClick');
    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    instance.handleKeyDown(event);
    expect(handleClickSpy).toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(true);
  });

  it('calls handleClick when Space key is pressed', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item></modus-wc-side-navigation-item>`,
    });
    const instance = page.rootInstance as ModusWcSideNavigationItem;
    const handleClickSpy = jest.spyOn(instance, 'handleClick');
    const event = new KeyboardEvent('keydown', { key: ' ' });
    instance.handleKeyDown(event);
    expect(handleClickSpy).toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(true);
  });

  it('does not call handleClick for other keys', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item></modus-wc-side-navigation-item>`,
    });
    const instance = page.rootInstance as ModusWcSideNavigationItem;
    const handleClickSpy = jest.spyOn(instance, 'handleClick');
    const event = new KeyboardEvent('keydown', { key: 'Tab' });
    instance.handleKeyDown(event);
    expect(handleClickSpy).not.toHaveBeenCalled();
    expect(event.defaultPrevented).toBe(false);
  });

  it('does not toggle selected when disableSelection is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item></modus-wc-side-navigation-item>`,
    });
    const instance = page.rootInstance as ModusWcSideNavigationItem;
    instance.selected = false;
    instance.disableSelection = true;

    instance.handleClick();

    expect(instance.selected).toBe(false);
  });

  it('toggles selected when disableSelection is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item></modus-wc-side-navigation-item>`,
    });
    const instance = page.rootInstance as ModusWcSideNavigationItem;
    instance.selected = false;
    instance.disableSelection = false;

    instance.handleClick();
    expect(instance.selected).toBe(true);
  });

  it('does not toggle selected or emit event when disabled is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item></modus-wc-side-navigation-item>`,
    });
    const instance = page.rootInstance as ModusWcSideNavigationItem;
    instance.selected = false;
    instance.disabled = true;
    const emitSpy = jest.spyOn(instance.sideNavItemClicked, 'emit');

    instance.handleClick();

    expect(instance.selected).toBe(false);
    expect(emitSpy).not.toHaveBeenCalled();
  });

  it('calls handleClick when li is clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item></modus-wc-side-navigation-item>`,
    });
    const instance = page.rootInstance as ModusWcSideNavigationItem;
    const handleClickSpy = jest.spyOn(instance, 'handleClick');
    const li = page.root?.shadowRoot?.querySelector('li');
    li?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    expect(handleClickSpy).toHaveBeenCalled();
  });

  it('calls handleKeyDown when li receives keydown event', async () => {
    const page = await newSpecPage({
      components: [ModusWcSideNavigationItem],
      html: `<modus-wc-side-navigation-item></modus-wc-side-navigation-item>`,
    });
    const instance = page.rootInstance as ModusWcSideNavigationItem;
    const handleKeyDownSpy = jest.spyOn(instance, 'handleKeyDown');
    const li = page.root?.shadowRoot?.querySelector('li');
    const event = new KeyboardEvent('keydown', { key: 'Enter', bubbles: true });
    li?.dispatchEvent(event);
    expect(handleKeyDownSpy).toHaveBeenCalledWith(event);
  });
});
