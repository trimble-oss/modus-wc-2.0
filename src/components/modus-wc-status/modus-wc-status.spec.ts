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
});
