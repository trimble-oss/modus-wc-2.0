import { newSpecPage } from '@stencil/core/testing';
import { ModusWcStatus } from './modus-wc-status';

describe('modus-wc-status', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status></modus-wc-status>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status custom-class="test-class" label="Online" pulse="false" variant="warning"></modus-wc-status>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render active variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status variant="active"></modus-wc-status>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render warning variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status variant="warning"></modus-wc-status>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render danger variant', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status variant="danger"></modus-wc-status>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should use role status on the container', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status label="Healthy"></modus-wc-status>',
    });
    const status = page.root?.querySelector('.modus-wc-status');
    expect(status?.getAttribute('role')).toBe('status');
  });

  it('should keep accessible name in sync when variant changes', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status variant="active"></modus-wc-status>',
    });

    expect(page.root?.getAttribute('aria-label')).toBeNull();

    page.root!.variant = 'danger';
    await page.waitForChanges();

    expect(page.root?.getAttribute('aria-label')).toBeNull();
    expect(
      page.root?.querySelector('.modus-wc-status-label')?.textContent?.trim()
    ).toBe('Danger');
  });

  it('should hide pulse indicator when pulse is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status pulse="false"></modus-wc-status>',
    });

    expect(page.root?.querySelector('.modus-wc-status-pulse')).toBeNull();
    expect(page.root?.querySelector('.modus-wc-status')).toHaveClass(
      'modus-wc-status--no-pulse'
    );
  });

  it('should hide pulse indicator when pulse property is set to false', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status></modus-wc-status>',
    });

    page.root!.pulse = false;
    await page.waitForChanges();

    expect(page.root?.querySelector('.modus-wc-status-pulse')).toBeNull();
  });

  it('should apply author-supplied aria-label via inherited attributes', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status aria-label="System health" variant="warning"></modus-wc-status>',
    });
    const status = page.root?.querySelector('.modus-wc-status');
    expect(status?.getAttribute('aria-label')).toBe('System health');
  });
});
