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

  it('should add the info class and label when variant is info', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status variant="info"></modus-wc-status>',
    });
    expect(page.root?.querySelector('.modus-wc-status')).toHaveClass(
      'modus-wc-status--info'
    );
    expect(
      page.root?.querySelector('.modus-wc-status-label')?.textContent?.trim()
    ).toBe('Info');
  });

  it('should render the pulse when variant is inactive and pulse is not set', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status variant="inactive"></modus-wc-status>',
    });
    expect(page.root?.querySelector('.modus-wc-status')).toHaveClass(
      'modus-wc-status--inactive'
    );
    expect(page.root?.querySelector('.modus-wc-status-pulse')).not.toBeNull();
    expect(
      page.root?.querySelector('.modus-wc-status-label')?.textContent?.trim()
    ).toBe('Inactive');
  });

  it('should hide pulse for inactive variant when pulse is false', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status variant="inactive" pulse="false"></modus-wc-status>',
    });
    expect(page.root?.querySelector('.modus-wc-status-pulse')).toBeNull();
  });

  it('should not render the pulse when pulse is false and size is lg', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status size="lg" pulse="false"></modus-wc-status>',
    });
    expect(page.root?.querySelector('.modus-wc-status-pulse')).toBeNull();
  });

  it('should add the xs size class when size is not set', async () => {
    const page = await newSpecPage({
      components: [ModusWcStatus],
      html: '<modus-wc-status></modus-wc-status>',
    });
    expect(page.root?.querySelector('.modus-wc-status')).toHaveClass(
      'modus-wc-status--xs'
    );
  });

  it.each(['sm', 'md', 'lg', 'xl'])(
    'should add the size class when size is %s',
    async (size) => {
      const page = await newSpecPage({
        components: [ModusWcStatus],
        html: `<modus-wc-status size="${size}"></modus-wc-status>`,
      });
      expect(page.root?.querySelector('.modus-wc-status')).toHaveClass(
        `modus-wc-status--${size}`
      );
    }
  );
});
