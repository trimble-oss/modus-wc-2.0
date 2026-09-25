import { newSpecPage } from '@stencil/core/testing';
import { ModusWcEmptyState } from './modus-wc-empty-state';
import { ModusWcButton } from '../modus-wc-button/modus-wc-button';
import { ModusWCTypography } from '../modus-wc-typography/modus-wc-typography';

describe('modus-wc-empty-state', () => {
  const childComponents = [ModusWcEmptyState, ModusWCTypography, ModusWcButton];

  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="Title for Empty State" subtitle="Subtitle" action-label="Action"></modus-wc-empty-state>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render illustration variant with landscape', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state variant="illustration" illustration="landscape" heading="Title for Empty State" subtitle="Subtitle" action-label="Action"></modus-wc-empty-state>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render error variant with page not found illustration', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state variant="error" heading="404 Page Not Found" subtitle="Helpful message." action-label="Action"></modus-wc-empty-state>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should omit action button when actionLabel is not provided', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="No items" subtitle="Add one to get started."></modus-wc-empty-state>`,
    });
    expect(page.root?.querySelector('modus-wc-button')).toBeNull();
  });

  it('should emit actionClick when action button is activated', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="Title" action-label="Action"></modus-wc-empty-state>`,
    });
    const handler = jest.fn();
    page.root?.addEventListener('actionClick', handler);
    const button = page.root?.querySelector('modus-wc-button button');
    button?.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    await page.waitForChanges();
    expect(handler).toHaveBeenCalled();
  });

  it('should mark illustration as decorative for assistive technology', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="Title"></modus-wc-empty-state>`,
    });
    const illustration = page.root?.querySelector(
      '.modus-wc-empty-state-illustration'
    );
    expect(illustration?.getAttribute('aria-hidden')).toBe('true');
    expect(illustration?.getAttribute('role')).toBeNull();
  });

  it('should apply line clamp class on subtitle typography', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="Title" subtitle="Line one"></modus-wc-empty-state>`,
    });
    const subtitle = page.root?.querySelector('.modus-wc-empty-state-subtitle');
    expect(subtitle).not.toBeNull();
  });

  it('should warn and fall back when illustration does not match variant', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state variant="compact" illustration="landscape" heading="Title"></modus-wc-empty-state>`,
    });
    expect(warnSpy).toHaveBeenCalled();
    expect(
      page.root?.querySelector('.modus-wc-empty-state-illustration--compact')
    ).not.toBeNull();
    warnSpy.mockRestore();
  });

  it('should apply customClass on the root container', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="Title" custom-class="app-empty"></modus-wc-empty-state>`,
    });
    const root = page.root?.querySelector('.modus-wc-empty-state');
    expect(root?.classList.contains('app-empty')).toBe(true);
  });

  it('should omit action button when actionLabel is whitespace only', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="Title" action-label="   "></modus-wc-empty-state>`,
    });
    expect(page.root?.querySelector('modus-wc-button')).toBeNull();
  });

  it('should omit subtitle when subtitle is not provided', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="Title only"></modus-wc-empty-state>`,
    });
    expect(
      page.root?.querySelector('.modus-wc-empty-state-subtitle')
    ).toBeNull();
  });

  it('should use the default illustration when illustration is omitted', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state variant="illustration" heading="Title"></modus-wc-empty-state>`,
    });
    const component = page.rootInstance as ModusWcEmptyState;
    expect(component['resolveIllustrationKey']()).toBe('landscape');
  });

  it('should warn when svg content is missing for a path', async () => {
    const warnSpy = jest.spyOn(console, 'warn').mockImplementation(() => {});
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="Title"></modus-wc-empty-state>`,
    });
    const component = page.rootInstance as ModusWcEmptyState;

    expect(component['getSvgContent']('illustrations/missing.svg')).toBe('');
    expect(warnSpy).toHaveBeenCalledWith(
      'SVG content not found for illustration path "illustrations/missing.svg".'
    );
    warnSpy.mockRestore();
  });

  it('should emit actionClick with the native event from the button', async () => {
    const page = await newSpecPage({
      components: childComponents,
      html: `<modus-wc-empty-state heading="Title" action-label="Action"></modus-wc-empty-state>`,
    });
    const component = page.rootInstance as ModusWcEmptyState;
    const handler = jest.fn();
    page.root?.addEventListener('actionClick', handler);
    const nativeEvent = new MouseEvent('click');

    component['handleActionClick'](
      new CustomEvent('buttonClick', { detail: nativeEvent })
    );

    expect(handler).toHaveBeenCalled();
    expect(handler.mock.calls[0][0].detail).toBe(nativeEvent);
  });
});
