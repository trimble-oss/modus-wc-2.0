import { newSpecPage } from '@stencil/core/testing';
import { ModusWcBadge } from './modus-wc-badge';

describe('modus-wc-badge', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge></modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="secondary" custom-class="test-class" size="lg" variant="text">Test</modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with default color', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="default">Badge</modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with alert role for warning color', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="warning"></modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with status role for primary color', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="primary"></modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should allow custom role to override default', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="warning" role="status"></modus-wc-badge>',
    });
    const span = page.root?.querySelector('span');
    expect(span?.getAttribute('role')).toBe('status');
  });

  it('should allow removing role with undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="primary" role></modus-wc-badge>',
    });
    const span = page.root?.querySelector('span');
    expect(span?.getAttribute('role')).toBe('');
  });

  it('should capture and flush early host text before first render', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<div></div>',
    });

    const badge = document.createElement('modus-wc-badge');
    badge.textContent = 'Early';
    document.body.appendChild(badge);

    await new Promise((resolve) => setTimeout(resolve, 0));
    await page.waitForChanges();

    const span = badge.querySelector('span.modus-wc-badge');
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe('Early');

    badge.remove();
  });

  it('should keep badge chrome when textContent is set before load', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<div></div>',
    });

    const badge = document.createElement('modus-wc-badge');
    document.body.appendChild(badge);
    badge.textContent = 'Updated';

    await new Promise((resolve) => setTimeout(resolve, 0));
    await page.waitForChanges();

    const span = badge.querySelector('span.modus-wc-badge');
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe('Updated');

    badge.remove();
  });

  it('should reinstall slot protection when reconnected', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge>0</modus-wc-badge>',
    });

    const host = page.root!;
    host.remove();
    document.body.appendChild(host);
    host.textContent = '1';
    await page.waitForChanges();

    const span = host.querySelector('span.modus-wc-badge');
    expect(span?.textContent).toBe('1');

    host.remove();
  });

  it('should keep badge chrome when host textContent is replaced', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="primary" variant="counter">0</modus-wc-badge>',
    });

    page.root!.textContent = '1';
    await page.waitForChanges();

    const span = page.root?.querySelector('span.modus-wc-badge');
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe('1');
    expect(span?.classList.contains('modus-wc-badge-primary')).toBe(true);
  });

  it('should keep badge chrome when host innerHTML is replaced', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge>Old</modus-wc-badge>',
    });

    page.root!.innerHTML = 'New';
    await page.waitForChanges();

    const span = page.root?.querySelector('span.modus-wc-badge');
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe('New');
  });

  it('should ignore early host text when the inner badge already exists', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge>0</modus-wc-badge>',
    });

    page.rootInstance.captureEarlyHostText();
    page.root!.querySelector('span.modus-wc-badge')?.remove();
    page.root!.appendChild(document.createElement('span'));
    page.rootInstance.captureEarlyHostText();
    page.root!.textContent = '';
    page.rootInstance.queuedHostText = 'Later';
    page.rootInstance.flushEarlyHostText();

    expect(page.root!.textContent).not.toContain('Later');
  });

  it('should keep patched accessors after disconnect', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge>0</modus-wc-badge>',
    });

    const badge = page.root!;
    page.rootInstance.disconnectedCallback();
    badge.textContent = '9';
    await page.waitForChanges();

    const span = badge.querySelector('span.modus-wc-badge');
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe('9');
  });

  it('should keep inner badge chrome and danger styles after color prop update and host textContent', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge color="primary" variant="counter">3</modus-wc-badge>',
    });

    const span = page.root?.querySelector('span.modus-wc-badge');
    expect(span).not.toBeNull();
    expect(span?.classList.contains('modus-wc-badge-primary')).toBe(true);

    page.root!.setAttribute('color', 'danger');
    await page.waitForChanges();

    const spanAfterColor = page.root?.querySelector('span.modus-wc-badge');
    expect(spanAfterColor).not.toBeNull();
    expect(spanAfterColor?.classList.contains('modus-wc-badge-error')).toBe(
      true
    );
    expect(spanAfterColor?.classList.contains('modus-wc-badge-counter')).toBe(
      true
    );

    page.root!.textContent = '9';
    await page.waitForChanges();

    const spanAfterText = page.root?.querySelector('span.modus-wc-badge');
    expect(spanAfterText).not.toBeNull();
    expect(spanAfterText?.textContent).toBe('9');
    expect(spanAfterText?.classList.contains('modus-wc-badge-error')).toBe(
      true
    );
  });

  it('should keep badge chrome when textContent is set after re-parenting', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge>Initial</modus-wc-badge>',
    });

    const badge = page.root!;
    const wrapper = document.createElement('div');

    document.body.appendChild(wrapper);
    wrapper.appendChild(badge);

    badge.textContent = 'Updated';
    await page.waitForChanges();

    const span = badge.querySelector('span.modus-wc-badge');
    expect(span).not.toBeNull();
    expect(span?.textContent).toBe('Updated');
  });

  it('should release existing protection when connected again', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge>0</modus-wc-badge>',
    });

    page.rootInstance.connectedCallback();
    page.rootInstance.connectedCallback();

    const span = page.root?.querySelector('span.modus-wc-badge');
    expect(span).not.toBeNull();
  });

  it('should flush queued early host text onto the inner badge', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge></modus-wc-badge>',
    });

    page.rootInstance.queuedHostText = 'Queued';
    page.rootInstance.flushEarlyHostText();

    const span = page.root?.querySelector('span.modus-wc-badge');
    expect(span?.textContent).toBe('Queued');
  });

  it('should run componentDidLoad flush for slot protection', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge>0</modus-wc-badge>',
    });

    page.rootInstance.componentDidLoad();
    expect(page.root?.querySelector('span.modus-wc-badge')).not.toBeNull();
  });

  it('should tolerate componentDidLoad after disconnect', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge>0</modus-wc-badge>',
    });

    page.rootInstance.disconnectedCallback();
    page.rootInstance.componentDidLoad();
    expect(page.root?.querySelector('span.modus-wc-badge')).not.toBeNull();
  });

  it('should treat null early text node content as empty string', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge></modus-wc-badge>',
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
});
