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

  it('should release slot protection on disconnect', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge>0</modus-wc-badge>',
    });

    page.rootInstance.disconnectedCallback();
    page.rootInstance.disconnectedCallback();
    expect(page.rootInstance).toBeTruthy();
  });
});
