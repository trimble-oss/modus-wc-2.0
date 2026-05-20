import { newSpecPage } from '@stencil/core/testing';
import { ModusWcLink } from './modus-wc-link';

describe('modus-wc-link', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link aria-label="Link" href="#">Click me</modus-wc-link>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with color class when color is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link aria-label="Secondary link" color="secondary" href="#">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.classList.contains('modus-wc-link-color-secondary')).toBe(
      true
    );
    expect(page.root).toMatchSnapshot();
  });

  it('should render with sanitized href when href is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link href="https://trimble.com">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.getAttribute('href')).toBe('https://trimble.com');
  });

  it('should not render href when url uses a disallowed protocol', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link href="javascript:alert(1)">Unsafe</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.hasAttribute('href')).toBe(false);
  });

  it('should add noopener noreferrer rel when target is blank', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link href="https://trimble.com" rel="nofollow" target="_blank"></modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.getAttribute('rel')).toBe('nofollow noopener noreferrer');
  });

  it('should render with hover underline class when underline is hover', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link aria-label="Hover link" href="#" underline="hover">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.classList.contains('modus-wc-link-hover')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render with inherit color class when color is inherit', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link href="#" color="inherit">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.classList.contains('modus-wc-link-color-inherit')).toBe(
      true
    );
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom class when customClass is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link href="#" custom-class="test-class">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.classList.contains('test-class')).toBe(true);
  });

  it('should render with no underline class when underline is none', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link aria-label="No underline link" href="#" underline="none">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.classList.contains('modus-wc-no-underline')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });
});
