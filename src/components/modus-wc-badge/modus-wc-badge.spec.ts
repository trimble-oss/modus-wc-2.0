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

  it('should apply ellipse class when shape is ellipse', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge shape="ellipse" variant="filled">Badge</modus-wc-badge>',
    });
    const span = page.root?.querySelector('span');
    expect(span).toHaveClass('modus-wc-badge-ellipse');
  });

  it('should apply rectangle class to counter when shape is rectangle', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge shape="rectangle" variant="counter">5</modus-wc-badge>',
    });
    const span = page.root?.querySelector('span');
    expect(span).toHaveClass('modus-wc-badge-counter');
    expect(span).toHaveClass('modus-wc-badge-rectangle');
  });

  it('should render text variant without background or border when shape is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge shape="rectangle" variant="text">Badge</modus-wc-badge>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should not apply shape class when shape is unset', async () => {
    const page = await newSpecPage({
      components: [ModusWcBadge],
      html: '<modus-wc-badge variant="outlined">Badge</modus-wc-badge>',
    });
    const span = page.root?.querySelector('span');
    expect(span).not.toHaveClass('modus-wc-badge-rectangle');
    expect(span).not.toHaveClass('modus-wc-badge-ellipse');
  });
});
