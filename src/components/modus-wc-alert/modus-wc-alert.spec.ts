import { newSpecPage } from '@stencil/core/testing';
import { ModusWcAlert } from './modus-wc-alert';
import { convertPropsToClasses } from './modus-wc-alert.tailwind';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

describe('modus-wc-alert', () => {
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alertTitle="Custom title"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-description="Custom description" alert-title="Custom title" custom-class="test-class"  icon="help" variant="info" ></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render error variant with alert icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="Custom title" variant="error"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render info variant with info icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="Custom title" variant="info"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render success variant with check_circle icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="Custom title" variant="success"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render warning variant with info icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="Custom title" variant="warning"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render dismissible button and handle click event', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
      html: '<modus-wc-alert dismissible></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    const dismissElementSpy = jest.spyOn(component, 'dismissElement');

    const button = page.root?.querySelector('button');
    expect(button).not.toBeNull();

    button?.click();
    expect(dismissElementSpy).toHaveBeenCalled();
  });

  it('should call dismissElement on Escape keyup when dismissible is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
      html: '<modus-wc-alert></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    const dismissElementSpy = jest.spyOn(component, 'dismissElement');

    const event = new KeyboardEvent('keyup', { code: 'Escape' });
    page.root?.dispatchEvent(event);
    expect(dismissElementSpy).not.toHaveBeenCalled();

    component.dismissible = true;
    await page.waitForChanges();

    page.root?.dispatchEvent(event);
    expect(dismissElementSpy).toHaveBeenCalled();
  });

  it('should set a new timeout on delayChanged and clear timeout on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert delay="500"></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(globalThis, 'setTimeout');
    const clearTimeoutSpy = jest.spyOn(globalThis, 'clearTimeout');

    component.delayChanged(1000);
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 1000);

    component.delayChanged(1100);
    expect(clearTimeoutSpy).toHaveBeenCalled();
    expect(setTimeoutSpy).toHaveBeenCalledWith(expect.any(Function), 1100);

    component.disconnectedCallback();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });

  it('should call dismissElement from timeout in delayChanged and componentDidLoad functions', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert delay="500"></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    jest.useFakeTimers();
    const dismissElementSpy = jest.spyOn(component, 'dismissElement');

    component.delayChanged(500);
    jest.runAllTimers();

    expect(dismissElementSpy).toHaveBeenCalled();

    component.componentDidLoad();
    jest.runAllTimers();

    expect(dismissElementSpy).toHaveBeenCalled();
  });

  it('should clear timeout on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert delay="500"></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    jest.useFakeTimers();
    const clearTimeoutSpy = jest.spyOn(globalThis, 'clearTimeout');
    component.disconnectedCallback();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });

  it('should inherit aria attributes including role when role is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Test Alert" role="alert" aria-label="Test label"></modus-wc-alert>',
    });
    // Attributes should be moved from host to inner div
    const innerDiv = page.root?.querySelector('.modus-wc-alert');
    expect(innerDiv?.getAttribute('aria-label')).toBe('Test label');
    // role value gets inherited to inner div (current behavior)
    expect(innerDiv?.getAttribute('role')).toBe('alert');
  });

  it('should inherit aria attributes including timer role when timer role is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Test Alert" role="timer" aria-describedby="desc"></modus-wc-alert>',
    });
    // aria-describedby should be moved to inner div
    const innerDiv = page.root?.querySelector('.modus-wc-alert');
    expect(innerDiv?.getAttribute('aria-describedby')).toBe('desc');
    // timer role gets inherited to inner div (current behavior)
    expect(innerDiv?.getAttribute('role')).toBe('timer');
  });

  it('should set default role="status" on the alert when no role is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="No role"></modus-wc-alert>',
    });
    // The default role is set on the host in componentWillLoad and then inherited
    // onto the inner div via inheritAriaAttributes
    const innerDiv = page.root?.querySelector('.modus-wc-alert');
    expect(innerDiv?.getAttribute('role')).toBe('status');
  });

  it('should not render any leading icon when disable-icon is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="No icon" disable-icon="true"></modus-wc-alert>',
    });
    const icon = page.root?.querySelector('modus-wc-icon');
    expect(icon).toBeNull();
  });

  it('should render a custom icon when icon prop is provided and disable-icon is false', async () => {
    // Intentionally omit ModusWcIcon so the rendered modus-wc-icon stays as a
    // bare element with its attributes intact and assertable
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Custom icon" icon="help"></modus-wc-alert>',
    });
    const icon = page.root?.querySelector('modus-wc-icon');
    expect(icon).not.toBeNull();
    expect(icon?.getAttribute('name')).toBe('help');
    expect(icon?.getAttribute('variant')).toBe('outlined');
  });

  it('should render the slot[name="content"] when both alert-title and alert-description are empty', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert><div slot="content">Custom slot content</div></modus-wc-alert>',
    });
    const slottedContent = page.root?.querySelector('div[slot="content"]');
    expect(slottedContent).not.toBeNull();
    expect(slottedContent?.textContent).toBe('Custom slot content');
    // The .description div should not be rendered when no description prop is provided
    expect(page.root?.querySelector('.description')).toBeNull();
  });

  it('should render the description div when alert-description is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Title" alert-description="Some description"></modus-wc-alert>',
    });
    const description = page.root?.querySelector('.description');
    expect(description).not.toBeNull();
    expect(description?.textContent).toBe('Some description');
  });

  it('should not append custom-class to the alert when customClass is empty', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Title"></modus-wc-alert>',
    });
    const innerDiv = page.root?.querySelector('.modus-wc-alert');
    // Default classes should only contain the base class and the variant class
    expect(innerDiv?.className).toBe('modus-wc-alert modus-wc-alert-info');
  });

  it('should append custom-class to the alert when customClass is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Title" custom-class="my-extra-class"></modus-wc-alert>',
    });
    const innerDiv = page.root?.querySelector('.modus-wc-alert');
    expect(innerDiv?.classList.contains('my-extra-class')).toBe(true);
  });

  it('should emit dismissClick event and remove the host element when dismissElement is called', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
      html: '<modus-wc-alert alert-title="Dismiss me" dismissible></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    const dismissSpy = jest.fn();
    page.root?.addEventListener('dismissClick', dismissSpy);
    const removeSpy = jest.spyOn(page.root as HTMLElement, 'remove');

    component.dismissElement();
    await page.waitForChanges();

    expect(dismissSpy).toHaveBeenCalledTimes(1);
    expect(removeSpy).toHaveBeenCalledTimes(1);
  });

  it('should not call dismissElement on non-Escape keyup even when dismissible is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
      html: '<modus-wc-alert alert-title="Title" dismissible></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    const dismissElementSpy = jest.spyOn(component, 'dismissElement');

    const event = new KeyboardEvent('keyup', { code: 'Enter' });
    page.root?.dispatchEvent(event);
    expect(dismissElementSpy).not.toHaveBeenCalled();

    const spaceEvent = new KeyboardEvent('keyup', { code: 'Space' });
    page.root?.dispatchEvent(spaceEvent);
    expect(dismissElementSpy).not.toHaveBeenCalled();
  });

  it('should not start a timer in componentDidLoad when delay is undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="No delay"></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(globalThis, 'setTimeout');

    component.componentDidLoad();

    expect(setTimeoutSpy).not.toHaveBeenCalled();
  });

  it('should not start a timer in componentDidLoad when delay is 0', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Zero delay" delay="0"></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    jest.useFakeTimers();
    const setTimeoutSpy = jest.spyOn(globalThis, 'setTimeout');

    component.componentDidLoad();

    expect(setTimeoutSpy).not.toHaveBeenCalled();
  });

  it('should fall back to the info icon when variant is undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="No variant"></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    component.variant = undefined;
    await page.waitForChanges();

    const icon = page.root?.querySelector('modus-wc-icon i');
    expect(icon?.textContent?.trim()).toBe('info');
  });

  describe('convertPropsToClasses', () => {
    it('should return the variant-specific class when a variant is provided', () => {
      expect(convertPropsToClasses({ variant: 'error' })).toBe(
        'modus-wc-alert-error'
      );
      expect(convertPropsToClasses({ variant: 'info' })).toBe(
        'modus-wc-alert-info'
      );
      expect(convertPropsToClasses({ variant: 'success' })).toBe(
        'modus-wc-alert-success'
      );
      expect(convertPropsToClasses({ variant: 'warning' })).toBe(
        'modus-wc-alert-warning'
      );
    });

    it('should return an empty string when no variant is provided', () => {
      expect(convertPropsToClasses({})).toBe('');
      expect(convertPropsToClasses({ variant: undefined })).toBe('');
    });
  });
});
