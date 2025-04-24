import { newSpecPage } from '@stencil/core/testing';
import { ModusWcToast } from './modus-wc-toast';

describe('modus-wc-toast', () => {
  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
    jest.restoreAllMocks();
  });

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast custom-class="test-class"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  // Position top
  it('should render with position top-start', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="top-start"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position top-center', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="top-center"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position top-end', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="top-end"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  // Position middle
  it('should render with position middle-start', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="middle-start"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position middle-center', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="middle-center"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position middle-end', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="middle-end"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  // Position bottom
  it('should render with position bottom-start', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="bottom-start"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position bottom-center', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="bottom-center"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with position bottom-end', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast position="bottom-end"><div>Custom content</div></modus-wc-toast>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should set a new timeout on delayChanged and clear timeout on disconnectedCallback', async () => {
    const page = await newSpecPage({
      components: [ModusWcToast],
      html: '<modus-wc-toast delay="500"><div>Custom content</div></modus-wc-toast>',
    });

    const component = page.rootInstance as ModusWcToast;
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
      components: [ModusWcToast],
      html: '<modus-wc-toast delay="500"><div>Custom content</div></modus-wc-toast>',
    });

    const component = page.rootInstance as ModusWcToast;
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
      components: [ModusWcToast],
      html: '<modus-wc-toast delay="500"><div>Custom content</div></modus-wc-toast>',
    });

    const component = page.rootInstance as ModusWcToast;
    jest.useFakeTimers();
    const clearTimeoutSpy = jest.spyOn(globalThis, 'clearTimeout');
    component.disconnectedCallback();
    expect(clearTimeoutSpy).toHaveBeenCalled();
  });
});
