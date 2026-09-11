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

  it('should render neutral variant with neutral styling and info icon', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="Custom title" variant="neutral"></modus-wc-alert>',
    });

    const alertDiv = page.root?.querySelector('.modus-wc-alert');
    expect(alertDiv?.className).toBe('modus-wc-alert modus-wc-alert-neutral');

    const icon = page.root?.querySelector('modus-wc-icon i');
    expect(icon?.textContent?.trim()).toBe('info');

    expect(page.root).toMatchSnapshot();
  });

  it('should render neutral styling when variant is an empty string', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="Custom title" variant=""></modus-wc-alert>',
    });

    const alertDiv = page.root?.querySelector('.modus-wc-alert');
    expect(alertDiv?.className).toBe('modus-wc-alert');

    const icon = page.root?.querySelector('modus-wc-icon i');
    expect(icon?.textContent?.trim()).toBe('info');
  });

  it('should apply info variant class when variant attribute is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="Custom title"></modus-wc-alert>',
    });

    const alertDiv = page.root?.querySelector('.modus-wc-alert');
    expect(alertDiv?.className).toBe('modus-wc-alert modus-wc-alert-info');

    const icon = page.root?.querySelector('modus-wc-icon i');
    expect(icon?.textContent?.trim()).toBe('info');
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

  it('should render the leading variant icon by default when disable-icon is omitted', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Default icon"></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    expect(component.disableIcon).toBe(false);

    const icon = page.root?.querySelector('modus-wc-icon');
    expect(icon).not.toBeNull();
    expect(icon?.getAttribute('name')).toBe('info');
  });

  it('should suppress the custom icon as well when disable-icon is true', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Custom icon hidden" icon="help" disable-icon="true"></modus-wc-alert>',
    });
    // disableIcon must take precedence over the custom icon prop
    const icon = page.root?.querySelector('modus-wc-icon');
    expect(icon).toBeNull();
  });

  it('should wrap title and description in a .modus-wc-alert-content container', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert],
      html: '<modus-wc-alert alert-title="Title" alert-description="Description"></modus-wc-alert>',
    });

    const content = page.root?.querySelector('.modus-wc-alert-content');
    expect(content).not.toBeNull();
    expect(content?.querySelector('.title')?.textContent).toBe('Title');
    expect(content?.querySelector('.description')?.textContent).toBe(
      'Description'
    );
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

  describe('content slot', () => {
    it('should render rich HTML in the content slot when contentDisplayMode is default', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon],
        html: '<modus-wc-alert content-display-mode="default"><div slot="content"><p><strong>Update available.</strong></p><p>See the <a href="#">release notes</a>.</p></div></modus-wc-alert>',
      });

      const slotWrapper = page.root?.querySelector('[slot="content"]');
      expect(slotWrapper?.querySelector('strong')?.textContent).toBe(
        'Update available.'
      );
      expect(slotWrapper?.querySelector('a')?.getAttribute('href')).toBe('#');
      expect(slotWrapper?.querySelectorAll('p').length).toBe(2);
      expect(
        page.root?.querySelector('.modus-wc-alert-expand-toggle')
      ).toBeNull();
    });

    it('should not project content slot when alert-title is provided', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon],
        html: '<modus-wc-alert alert-title="Title"><div slot="content">Slot content</div></modus-wc-alert>',
      });

      expect(
        page.root?.querySelector('.modus-wc-alert-slot-content')
      ).toBeNull();
      expect(
        page.root?.querySelector('.modus-wc-alert-content [slot="content"]')
      ).toBeNull();
      expect(page.root?.querySelector('.title')?.textContent).toBe('Title');
    });

    it('should not project content slot when alert-description is provided', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon],
        html: '<modus-wc-alert alert-description="Description"><div slot="content">Slot content</div></modus-wc-alert>',
      });

      expect(
        page.root?.querySelector('.modus-wc-alert-slot-content')
      ).toBeNull();
      expect(
        page.root?.querySelector('.modus-wc-alert-content [slot="content"]')
      ).toBeNull();
      expect(page.root?.querySelector('.description')?.textContent).toBe(
        'Description'
      );
    });

    it('should render rich HTML in the content slot when contentDisplayMode is expandable', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert content-display-mode="expandable"><div slot="content"><p>Line one</p><p>Line two</p><p>Line three</p></div></modus-wc-alert>',
      });
      await page.waitForChanges();

      const slotContent = page.root?.querySelector(
        '.modus-wc-alert-slot-content [slot="content"]'
      );
      expect(slotContent?.querySelectorAll('p').length).toBe(3);
      expect(page.root?.querySelector('modus-wc-tooltip')).toBeNull();
    });
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

  it('should render neutral styling and info icon when variant is set to undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcAlert, ModusWcIcon],
      html: '<modus-wc-alert alert-title="No variant"></modus-wc-alert>',
    });

    const component = page.rootInstance as ModusWcAlert;
    component.variant = undefined;
    await page.waitForChanges();

    const alertDiv = page.root?.querySelector('.modus-wc-alert');
    expect(alertDiv?.className).toBe('modus-wc-alert');

    const icon = page.root?.querySelector('modus-wc-icon i');
    expect(icon?.textContent?.trim()).toBe('info');
  });

  describe('contentDisplayMode', () => {
    it('should default contentDisplayMode to default', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert],
        html: '<modus-wc-alert alert-title="Title" alert-description="Description"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      expect(component.contentDisplayMode).toBe('default');
      expect(
        page.root?.querySelector('.modus-wc-alert-expand-toggle')
      ).toBeNull();
    });

    it('should render with expandable contentDisplayMode', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="A very long description that should be truncated when displayed in expandable mode." content-display-mode="expandable"></modus-wc-alert>',
      });
      expect(page.root).toMatchSnapshot();

      expect(page.root?.querySelector('modus-wc-tooltip')).toBeNull();
      expect(
        page.root
          ?.querySelector('.modus-wc-alert-content')
          ?.classList.contains('modus-wc-alert-content--expandable')
      ).toBe(true);
      expect(
        page.root
          ?.querySelector('.modus-wc-alert')
          ?.classList.contains('modus-wc-alert--expandable')
      ).toBe(true);
      expect(page.root?.querySelector('.description')).not.toBeNull();
    });

    it('should not render expand toggle when contentDisplayMode is default', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon],
        html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="default"></modus-wc-alert>',
      });

      expect(
        page.root?.querySelector('.modus-wc-alert-expand-toggle')
      ).toBeNull();
      expect(
        page.root?.querySelector('.modus-wc-alert-body-text--collapsed')
      ).toBeNull();
    });

    it('should keep title outside collapsed body when expandable', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="expandable"></modus-wc-alert>',
      });

      const title = page.root?.querySelector('.title');
      const description = page.root?.querySelector('.description');

      expect(title).not.toBeNull();
      expect(description).not.toBeNull();
      expect(
        description?.classList.contains('modus-wc-alert-body-text--collapsed')
      ).toBe(true);
      expect(
        title?.classList.contains('modus-wc-alert-body-text--collapsed')
      ).toBe(false);
    });

    it('should wrap slot content in expandable body when expandable', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert content-display-mode="expandable"><div slot="content">Custom slot content that is long enough to truncate</div></modus-wc-alert>',
      });
      expect(page.root).toMatchSnapshot();

      expect(page.root?.querySelector('modus-wc-tooltip')).toBeNull();
      expect(
        page.root?.querySelector('.modus-wc-alert-slot-content')
      ).not.toBeNull();
    });

    it('should not show expand toggle when content does not overflow', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="Short" content-display-mode="expandable"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      const bodyElement = page.root?.querySelector(
        '.description'
      ) as HTMLElement;

      Object.defineProperty(bodyElement, 'scrollHeight', {
        configurable: true,
        value: 20,
      });
      Object.defineProperty(bodyElement, 'clientHeight', {
        configurable: true,
        value: 20,
      });

      // @ts-expect-error - testing private overflow state update
      component.updateOverflowState();
      await page.waitForChanges();

      expect(
        page.root?.querySelector('.modus-wc-alert-expand-toggle')
      ).toBeNull();
    });

    it('should show expand toggle when content overflows', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="A very long description that overflows the two line clamp limit." content-display-mode="expandable"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      const bodyElement = page.root?.querySelector(
        '.description'
      ) as HTMLElement;

      Object.defineProperty(bodyElement, 'scrollHeight', {
        configurable: true,
        value: 60,
      });
      Object.defineProperty(bodyElement, 'clientHeight', {
        configurable: true,
        value: 40,
      });

      // @ts-expect-error - testing private overflow state update
      component.updateOverflowState();
      await page.waitForChanges();

      const toggle = page.root?.querySelector('.modus-wc-alert-expand-toggle');
      expect(toggle).not.toBeNull();
      expect(toggle?.getAttribute('aria-expanded')).toBe('false');
    });

    it('should expand and collapse body content when toggle is clicked', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="Overflowing description text" content-display-mode="expandable"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      const bodyElement = page.root?.querySelector(
        '.description'
      ) as HTMLElement;

      Object.defineProperty(bodyElement, 'scrollHeight', {
        configurable: true,
        value: 60,
      });
      Object.defineProperty(bodyElement, 'clientHeight', {
        configurable: true,
        value: 40,
      });

      // @ts-expect-error - testing private overflow state update
      component.updateOverflowState();
      await page.waitForChanges();

      const expandSpy = jest.fn();
      page.root?.addEventListener('contentExpandedChange', expandSpy);

      const toggleButton = page.root?.querySelector(
        '.modus-wc-alert-expand-toggle'
      ) as HTMLButtonElement;
      expect(toggleButton).not.toBeNull();
      toggleButton?.click();
      await page.waitForChanges();

      expect(
        bodyElement.classList.contains('modus-wc-alert-body-text--collapsed')
      ).toBe(false);
      expect(expandSpy).toHaveBeenCalled();
      expect(expandSpy.mock.calls[0][0].detail).toEqual({ expanded: true });

      toggleButton?.click();
      await page.waitForChanges();

      expect(
        bodyElement.classList.contains('modus-wc-alert-body-text--collapsed')
      ).toBe(true);
      expect(expandSpy.mock.calls[1][0].detail).toEqual({ expanded: false });
    });

    it('should render slot content without a wrapper in default mode', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon],
        html: '<modus-wc-alert content-display-mode="default"><div slot="content">Only slot</div></modus-wc-alert>',
      });

      expect(
        page.root?.querySelector('.modus-wc-alert-slot-content')
      ).toBeNull();
      expect(page.root?.querySelector('[slot="content"]')?.textContent).toBe(
        'Only slot'
      );
    });

    it('should not schedule overflow check when contentDisplayMode is default', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert],
        html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="default"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      const requestAnimationFrameSpy = jest.spyOn(
        globalThis,
        'requestAnimationFrame'
      );

      // @ts-expect-error - testing private method
      component.scheduleOverflowCheck();

      expect(requestAnimationFrameSpy).not.toHaveBeenCalled();
    });

    it('should not update overflow state when overflow is unchanged', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="Short" content-display-mode="expandable"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      const bodyElement = page.root?.querySelector(
        '.description'
      ) as HTMLElement;

      Object.defineProperty(bodyElement, 'scrollHeight', {
        configurable: true,
        value: 20,
      });
      Object.defineProperty(bodyElement, 'clientHeight', {
        configurable: true,
        value: 20,
      });

      // @ts-expect-error - testing private overflow state update
      component.updateOverflowState();
      // @ts-expect-error - Access private property for testing
      expect(component.isContentOverflowing).toBe(false);

      // @ts-expect-error - testing private overflow state update
      component.updateOverflowState();
      // @ts-expect-error - Access private property for testing
      expect(component.isContentOverflowing).toBe(false);
    });

    it('should skip overflow state update when content is expanded', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="Overflowing description text" content-display-mode="expandable"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      const bodyElement = page.root?.querySelector(
        '.description'
      ) as HTMLElement;

      Object.defineProperty(bodyElement, 'scrollHeight', {
        configurable: true,
        value: 60,
      });
      Object.defineProperty(bodyElement, 'clientHeight', {
        configurable: true,
        value: 40,
      });

      // @ts-expect-error - testing private overflow state update
      component.updateOverflowState();
      await page.waitForChanges();
      // @ts-expect-error - Access private property for testing
      expect(component.isContentOverflowing).toBe(true);

      // @ts-expect-error - Access private property for testing
      component.isContentExpanded = true;
      Object.defineProperty(bodyElement, 'scrollHeight', {
        configurable: true,
        value: 20,
      });
      Object.defineProperty(bodyElement, 'clientHeight', {
        configurable: true,
        value: 40,
      });

      // @ts-expect-error - testing private overflow state update
      component.updateOverflowState();
      // @ts-expect-error - Access private property for testing
      expect(component.isContentOverflowing).toBe(true);
    });

    it('should treat overflow as false when expandable content ref is missing', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="expandable"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      // @ts-expect-error - testing missing ref branch
      component.expandableContentRef = undefined;

      // @ts-expect-error - testing private overflow state update
      component.updateOverflowState();
      // @ts-expect-error - Access private property for testing
      expect(component.isContentOverflowing).toBe(false);
    });

    it('should update expandable content ref when the ref callback is invoked', async () => {
      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="expandable"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      const description = page.root?.querySelector(
        '.description'
      ) as HTMLElement;

      // @ts-expect-error - testing private ref callback
      component.setExpandableContentRef(description);
      // @ts-expect-error - testing private ref callback
      component.setExpandableContentRef(undefined);
    });

    it('should evaluate overflow inside requestAnimationFrame', async () => {
      const animationFrameCallbacks: FrameRequestCallback[] = [];
      const requestAnimationFrameSpy = jest
        .spyOn(globalThis, 'requestAnimationFrame')
        .mockImplementation((callback: FrameRequestCallback) => {
          animationFrameCallbacks.push(callback);
          return animationFrameCallbacks.length;
        });

      const page = await newSpecPage({
        components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
        html: '<modus-wc-alert alert-title="Title" alert-description="Overflowing description text" content-display-mode="expandable"></modus-wc-alert>',
      });

      const component = page.rootInstance as ModusWcAlert;
      const bodyElement = page.root?.querySelector(
        '.description'
      ) as HTMLElement;

      Object.defineProperty(bodyElement, 'scrollHeight', {
        configurable: true,
        value: 60,
      });
      Object.defineProperty(bodyElement, 'clientHeight', {
        configurable: true,
        value: 40,
      });

      // @ts-expect-error - testing private method
      component.scheduleOverflowCheck();
      animationFrameCallbacks.forEach((callback) => callback(0));

      expect(requestAnimationFrameSpy).toHaveBeenCalled();
      // @ts-expect-error - Access private property for testing
      expect(component.isContentOverflowing).toBe(true);
    });

    describe('expandable resize observer', () => {
      let resizeCallback: ResizeObserverCallback;
      let observeSpy: jest.Mock;
      let disconnectSpy: jest.Mock;
      const originalResizeObserver = globalThis.ResizeObserver;

      beforeEach(() => {
        observeSpy = jest.fn();
        disconnectSpy = jest.fn();
        globalThis.ResizeObserver = jest.fn(
          (callback: ResizeObserverCallback) => {
            resizeCallback = callback;
            return {
              observe: observeSpy,
              disconnect: disconnectSpy,
              unobserve: jest.fn(),
            };
          }
        );
      });

      afterEach(() => {
        globalThis.ResizeObserver = originalResizeObserver;
      });

      it('should observe expandable content when contentDisplayMode is expandable', async () => {
        const page = await newSpecPage({
          components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
          html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="expandable"></modus-wc-alert>',
        });

        const bodyElement = page.root?.querySelector(
          '.description'
        ) as HTMLElement;

        expect(globalThis.ResizeObserver).toHaveBeenCalled();
        expect(observeSpy).toHaveBeenCalledWith(bodyElement);
      });

      it('should update overflow state when resize observer fires', async () => {
        const page = await newSpecPage({
          components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
          html: '<modus-wc-alert alert-title="Title" alert-description="Short" content-display-mode="expandable"></modus-wc-alert>',
        });

        const component = page.rootInstance as ModusWcAlert;
        const bodyElement = page.root?.querySelector(
          '.description'
        ) as HTMLElement;

        Object.defineProperty(bodyElement, 'scrollHeight', {
          configurable: true,
          value: 20,
        });
        Object.defineProperty(bodyElement, 'clientHeight', {
          configurable: true,
          value: 20,
        });

        // @ts-expect-error - testing private overflow state update
        component.updateOverflowState();
        // @ts-expect-error - Access private property for testing
        expect(component.isContentOverflowing).toBe(false);

        Object.defineProperty(bodyElement, 'scrollHeight', {
          configurable: true,
          value: 60,
        });
        Object.defineProperty(bodyElement, 'clientHeight', {
          configurable: true,
          value: 40,
        });

        resizeCallback([], {} as ResizeObserver);
        // @ts-expect-error - Access private property for testing
        expect(component.isContentOverflowing).toBe(true);
      });

      it('should disconnect resize observer when the component is disconnected', async () => {
        const page = await newSpecPage({
          components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
          html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="expandable"></modus-wc-alert>',
        });

        page.root?.remove();
        await page.waitForChanges();

        expect(disconnectSpy).toHaveBeenCalled();
      });

      it('should disconnect resize observer when contentDisplayMode changes to default', async () => {
        const page = await newSpecPage({
          components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
          html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="expandable"></modus-wc-alert>',
        });

        page.root?.setAttribute('content-display-mode', 'default');
        await page.waitForChanges();

        expect(disconnectSpy).toHaveBeenCalled();
      });

      it('should observe slot content when expandable mode uses the content slot', async () => {
        const page = await newSpecPage({
          components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
          html: '<modus-wc-alert content-display-mode="expandable"><div slot="content">Slot content</div></modus-wc-alert>',
        });
        await page.waitForChanges();

        const slotContent = page.root?.querySelector(
          '.modus-wc-alert-slot-content'
        ) as HTMLElement;

        expect(observeSpy).toHaveBeenCalledWith(slotContent);
      });

      it('should not create resize observer when ResizeObserver is unavailable', async () => {
        const page = await newSpecPage({
          components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
          html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="expandable"></modus-wc-alert>',
        });

        const component = page.rootInstance as ModusWcAlert;
        const description = page.root?.querySelector(
          '.description'
        ) as HTMLElement;

        globalThis.ResizeObserver =
          undefined as unknown as typeof ResizeObserver;
        observeSpy.mockClear();

        // @ts-expect-error - testing private ref callback
        component.setExpandableContentRef(description);

        expect(observeSpy).not.toHaveBeenCalled();
      });

      it('should schedule overflow check when contentDisplayMode changes to expandable', async () => {
        const animationFrameCallbacks: FrameRequestCallback[] = [];
        jest
          .spyOn(globalThis, 'requestAnimationFrame')
          .mockImplementation((callback: FrameRequestCallback) => {
            animationFrameCallbacks.push(callback);
            return animationFrameCallbacks.length;
          });

        const page = await newSpecPage({
          components: [ModusWcAlert, ModusWcIcon, ModusWcButton],
          html: '<modus-wc-alert alert-title="Title" alert-description="Description" content-display-mode="default"></modus-wc-alert>',
        });

        page.root?.setAttribute('content-display-mode', 'expandable');
        await page.waitForChanges();

        expect(animationFrameCallbacks.length).toBeGreaterThan(0);
      });
    });
  });

  describe('convertPropsToClasses', () => {
    it('should return the variant-specific class when a semantic variant is provided', () => {
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

    it('should return modus-wc-alert-neutral for neutral variant', () => {
      expect(convertPropsToClasses({ variant: 'neutral' })).toBe(
        'modus-wc-alert-neutral'
      );
    });

    it('should return an empty string when variant is not provided', () => {
      expect(convertPropsToClasses({})).toBe('');
      expect(convertPropsToClasses({ variant: undefined })).toBe('');
    });
  });
});
