import { newSpecPage } from '@stencil/core/testing';
import { ModusWcAlert } from './modus-wc-alert';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';
import { ModusWCTypography } from '../modus-wc-typography/modus-wc-typography';

describe('modus-wc-alert', () => {
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
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
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
      html: '<modus-wc-alert alert-title="Custom title" variant="error"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render info variant with info icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
      html: '<modus-wc-alert alert-title="Custom title" variant="info"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render success variant with check_circle icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
      html: '<modus-wc-alert alert-title="Custom title" variant="success"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render warning variant with info icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography],
      html: '<modus-wc-alert alert-title="Custom title" variant="warning"></modus-wc-alert>',
    });
    expect(page.root).toMatchSnapshot();
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

  it('should render dismissible button and handle click event', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography, ModusWcButton],
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
      components: [ModusWcAlert, ModusWcIcon, ModusWCTypography, ModusWcButton],
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
});
