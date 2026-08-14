import { newSpecPage } from '@stencil/core/testing';
import { ModusWcButton } from './modus-wc-button';

describe('modus-wc-button', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Test</modus-wc-button>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: `<modus-wc-button
              color="secondary"
              custom-class="test-class"
              full-width="true"
              pressed="true"
              size="lg"
              variant="outlined"
              type="submit">
              Test
            </modus-wc-button>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with disabled attribute', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button disabled="true">Test</modus-wc-button>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should emit buttonClick event when clicked', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Clickable Button"></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    button?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(1);
  });

  it('should not emit buttonClick event when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Disabled Button" disabled></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    button?.click();
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalledTimes(0);
  });

  it('should emit buttonClick event on Enter key press', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Enter Key Button"></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    button?.dispatchEvent(event);
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalled();
  });

  it('should emit buttonClick event on Space key press', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Space Key Button"></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    const event = new KeyboardEvent('keydown', { key: ' ' });
    button?.dispatchEvent(event);
    await page.waitForChanges();

    expect(clickSpy).toHaveBeenCalled();
  });

  it('should render with size xl', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button size="xl">XL Button</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-xl')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render with neutral color when color is neutral', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="neutral">Neutral</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-base-inverted')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render with success color when color is success', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="success">Success</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-success')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render neutral color with outlined variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="neutral" variant="outlined">Neutral</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-base-inverted')).toBe(true);
    expect(button?.classList.contains('modus-wc-btn-outline')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render success color with outlined variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="success" variant="outlined">Success</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-success')).toBe(true);
    expect(button?.classList.contains('modus-wc-btn-outline')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render neutral color with borderless variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="neutral" variant="borderless">Neutral</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-base-inverted')).toBe(true);
    expect(button?.classList.contains('modus-wc-btn-borderless')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render success color with borderless variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="success" variant="borderless">Success</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-success')).toBe(true);
    expect(button?.classList.contains('modus-wc-btn-borderless')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render neutral color with pressed state', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="neutral" pressed="true">Neutral</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-base-inverted')).toBe(true);
    expect(button?.getAttribute('aria-pressed')).toBe('true');
    expect(page.root).toMatchSnapshot();
  });

  it('should render success color with pressed state', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="success" pressed="true">Success</modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    expect(button?.classList.contains('modus-wc-btn-success')).toBe(true);
    expect(button?.getAttribute('aria-pressed')).toBe('true');
    expect(page.root).toMatchSnapshot();
  });

  it('should sync aria-current to the inner button when the host attribute changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Nav item">Home</modus-wc-button>',
    });

    const button = page.root?.querySelector('button');
    expect(button?.getAttribute('aria-current')).toBeNull();
    expect(button?.getAttribute('aria-label')).toBe('Nav item');

    page.root?.setAttribute('aria-current', 'page');
    await page.waitForChanges();

    expect(button?.getAttribute('aria-current')).toBe('page');

    page.root?.setAttribute('aria-current', 'step');
    await page.waitForChanges();

    expect(button?.getAttribute('aria-current')).toBe('step');

    page.root?.removeAttribute('aria-current');
    await page.waitForChanges();

    expect(button?.getAttribute('aria-current')).toBeNull();
  });

  it('should sync aria-label to the inner button when the host attribute changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Home</modus-wc-button>',
    });

    const button = page.root?.querySelector('button');
    expect(button?.getAttribute('aria-label')).toBeNull();

    page.root?.setAttribute('aria-label', 'Home');
    await page.waitForChanges();

    expect(button?.getAttribute('aria-label')).toBe('Home');

    page.root?.removeAttribute('aria-label');
    await page.waitForChanges();

    expect(button?.getAttribute('aria-label')).toBeNull();
  });

  it('should disconnect the host aria observer when the component is removed', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Home</modus-wc-button>',
    });

    const component = page.rootInstance as ModusWcButton;
    const disconnectSpy = jest.fn();
    const originalSetAttribute = component['originalSetAttribute'];
    const originalRemoveAttribute = component['originalRemoveAttribute'];
    component['ariaAttributeObserver'] = {
      disconnect: disconnectSpy,
    } as unknown as MutationObserver;

    component.disconnectedCallback();

    expect(disconnectSpy).toHaveBeenCalledTimes(1);
    expect(page.root?.setAttribute).toBe(originalSetAttribute);
    expect(page.root?.removeAttribute).toBe(originalRemoveAttribute);

    component['originalSetAttribute'] = undefined;
    component['originalRemoveAttribute'] = undefined;
    expect(() => component.disconnectedCallback()).not.toThrow();
  });

  it('should ignore unrelated host attribute changes when syncing aria', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Home</modus-wc-button>',
    });

    const button = page.root?.querySelector('button');
    page.root?.setAttribute('data-test', '1');
    await page.waitForChanges();

    expect(button?.getAttribute('aria-current')).toBeNull();
    expect(button?.hasAttribute('data-test')).toBe(false);
  });

  it('should apply MutationObserver host aria records to the inner button', async () => {
    let mutationCallback: MutationCallback = () => undefined;
    const originalMutationObserver = globalThis.MutationObserver;
    globalThis.MutationObserver = jest.fn((cb: MutationCallback) => {
      mutationCallback = cb;
      return {
        observe: jest.fn(),
        disconnect: jest.fn(),
        takeRecords: jest.fn(),
      };
    }) as unknown as typeof MutationObserver;

    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Home</modus-wc-button>',
    });

    const button = page.root?.querySelector('button');
    page.root?.setAttribute('aria-current', 'location');
    mutationCallback(
      [
        {
          attributeName: 'aria-current',
          type: 'attributes',
          target: page.root as Node,
        } as MutationRecord,
        {
          attributeName: null,
          type: 'attributes',
          target: page.root as Node,
        } as MutationRecord,
      ],
      {} as MutationObserver
    );

    expect(button?.getAttribute('aria-current')).toBe('location');
    globalThis.MutationObserver = originalMutationObserver;
  });

  it('should not set up a host aria observer when MutationObserver is unavailable', async () => {
    const originalMutationObserver = globalThis.MutationObserver;
    // @ts-expect-error: simulate runtimes that do not provide MutationObserver
    delete globalThis.MutationObserver;

    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Home</modus-wc-button>',
    });

    const component = page.rootInstance as ModusWcButton;
    expect(component['ariaAttributeObserver']).toBeUndefined();

    globalThis.MutationObserver = originalMutationObserver;
  });

  it('should ignore host aria mutations when the inner button is missing', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Home</modus-wc-button>',
    });

    page.root?.querySelector('button')?.remove();
    page.root?.setAttribute('aria-current', 'page');
    await page.waitForChanges();

    expect(page.root?.querySelector('button')).toBeNull();
  });

  it('should not emit buttonClick event on key press when disabled', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button aria-label="Disabled Key Press Button" disabled></modus-wc-button>',
    });
    const button = page.root?.querySelector('button');
    const clickSpy = jest.fn();
    page.root?.addEventListener('buttonClick', clickSpy);

    const event = new KeyboardEvent('keydown', { key: 'Enter' });
    button?.dispatchEvent(event);
    await page.waitForChanges();

    expect(clickSpy).not.toHaveBeenCalled();
  });
});
