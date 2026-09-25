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

  it('should capture and flush early host text before first render', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<div></div>',
    });

    const button = document.createElement('modus-wc-button');
    button.textContent = 'Early';
    document.body.appendChild(button);

    await new Promise((resolve) => setTimeout(resolve, 0));
    await page.waitForChanges();

    const inner = button.querySelector('button.modus-wc-btn');
    expect(inner).not.toBeNull();
    expect(inner?.textContent).toBe('Early');

    button.remove();
  });

  it('should keep button chrome when textContent is set before load', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<div></div>',
    });

    const button = document.createElement('modus-wc-button');
    document.body.appendChild(button);
    button.textContent = 'Updated';

    await new Promise((resolve) => setTimeout(resolve, 0));
    await page.waitForChanges();

    const inner = button.querySelector('button.modus-wc-btn');
    expect(inner).not.toBeNull();
    expect(inner?.textContent).toBe('Updated');

    button.remove();
  });

  it('should reinstall slot protection when reconnected', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Add to Cart</modus-wc-button>',
    });

    const host = page.root!;
    host.remove();
    document.body.appendChild(host);
    host.textContent = 'Checkout';
    await page.waitForChanges();

    const inner = host.querySelector('button.modus-wc-btn');
    expect(inner?.textContent).toBe('Checkout');

    host.remove();
  });

  it('should keep button chrome when host textContent is replaced', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="primary">Add to Cart</modus-wc-button>',
    });

    page.root!.textContent = 'Added to Cart';
    await page.waitForChanges();

    const button = page.root?.querySelector('button.modus-wc-btn');
    expect(button).not.toBeNull();
    expect(button?.textContent).toBe('Added to Cart');
    expect(button?.classList.contains('modus-wc-btn-filled')).toBe(true);
  });

  it('should keep button chrome when host innerHTML is replaced', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Add to Cart</modus-wc-button>',
    });

    page.root!.innerHTML = 'Added to Cart';
    await page.waitForChanges();

    const button = page.root?.querySelector('button.modus-wc-btn');
    expect(button).not.toBeNull();
    expect(button?.textContent).toBe('Added to Cart');
  });

  it('should ignore early host text when the inner button already exists', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Add to Cart</modus-wc-button>',
    });

    page.rootInstance.captureEarlyHostText();
    page.root!.querySelector('button.modus-wc-btn')?.remove();
    page.root!.appendChild(document.createElement('span'));
    page.rootInstance.captureEarlyHostText();
    page.root!.textContent = '';
    page.rootInstance.queuedHostText = 'Later';
    page.rootInstance.flushEarlyHostText();

    expect(page.root!.textContent).not.toContain('Later');
  });

  it('should keep patched accessors after disconnect', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Initial</modus-wc-button>',
    });

    const button = page.root!;
    page.rootInstance.disconnectedCallback();
    button.textContent = 'After disconnect';
    await page.waitForChanges();

    const inner = button.querySelector('button.modus-wc-btn');
    expect(inner).not.toBeNull();
    expect(inner?.textContent).toBe('After disconnect');
  });

  it('should release existing protection when connected again', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Add to Cart</modus-wc-button>',
    });

    page.rootInstance.connectedCallback();
    page.rootInstance.connectedCallback();

    const inner = page.root?.querySelector('button.modus-wc-btn');
    expect(inner).not.toBeNull();
  });

  it('should flush queued early host text onto the inner button', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button></modus-wc-button>',
    });

    page.rootInstance.queuedHostText = 'Queued';
    page.rootInstance.flushEarlyHostText();

    const inner = page.root?.querySelector('button.modus-wc-btn');
    expect(inner?.textContent).toBe('Queued');
  });

  it('should run componentDidLoad flush for slot protection', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Label</modus-wc-button>',
    });

    page.rootInstance.componentDidLoad();
    expect(page.root?.querySelector('button.modus-wc-btn')).not.toBeNull();
  });

  it('should tolerate componentDidLoad after disconnect', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Label</modus-wc-button>',
    });

    page.rootInstance.disconnectedCallback();
    page.rootInstance.componentDidLoad();
    expect(page.root?.querySelector('button.modus-wc-btn')).not.toBeNull();
  });

  it('should treat null early text node content as empty string', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button></modus-wc-button>',
    });

    while (page.root!.firstChild) {
      page.root!.removeChild(page.root!.firstChild);
    }
    const text = document.createTextNode('');
    Object.defineProperty(text, 'textContent', {
      get: () => null,
      set() {},
      configurable: true,
    });
    page.root!.appendChild(text);
    page.rootInstance.captureEarlyHostText();

    expect(page.rootInstance.queuedHostText).toBe('');
  });

  it('should keep inner button chrome and danger styles after color prop update and host textContent', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button color="primary">Checkout</modus-wc-button>',
    });

    const inner = page.root?.querySelector('button.modus-wc-btn');
    expect(inner).not.toBeNull();
    expect(inner?.classList.contains('modus-wc-btn-primary')).toBe(true);

    page.root!.setAttribute('color', 'danger');
    await page.waitForChanges();

    const innerAfterColor = page.root?.querySelector('button.modus-wc-btn');
    expect(innerAfterColor).not.toBeNull();
    expect(innerAfterColor?.classList.contains('modus-wc-btn-error')).toBe(
      true
    );
    expect(innerAfterColor?.classList.contains('modus-wc-btn-filled')).toBe(
      true
    );

    page.root!.textContent = 'Delete';
    await page.waitForChanges();

    const innerAfterText = page.root?.querySelector('button.modus-wc-btn');
    expect(innerAfterText).not.toBeNull();
    expect(innerAfterText?.textContent).toBe('Delete');
    expect(innerAfterText?.classList.contains('modus-wc-btn-error')).toBe(true);
  });

  it('should keep button chrome when textContent is set after re-parenting', async () => {
    const page = await newSpecPage({
      components: [ModusWcButton],
      html: '<modus-wc-button>Initial</modus-wc-button>',
    });

    const button = page.root!;
    const wrapper = document.createElement('div');

    document.body.appendChild(wrapper);
    wrapper.appendChild(button);

    button.textContent = 'Updated';
    await page.waitForChanges();

    const inner = button.querySelector('button.modus-wc-btn');
    expect(inner).not.toBeNull();
    expect(inner?.textContent).toBe('Updated');
  });
});
