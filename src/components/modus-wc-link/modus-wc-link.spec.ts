import { newSpecPage } from '@stencil/core/testing';
import { ModusWcLink } from './modus-wc-link';

describe('modus-wc-link', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link aria-label="Link">Click me</modus-wc-link>',
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with color class when color is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link aria-label="Secondary link" color="secondary">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.classList.contains('modus-wc-link-color-secondary')).toBe(
      true
    );
    expect(page.root).toMatchSnapshot();
  });

  it('should render with hover underline class when underline is hover', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link aria-label="Hover link" underline="hover">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.classList.contains('modus-wc-link-hover')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });

  it('should render with no underline class when underline is none', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link aria-label="No underline link" underline="none">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.classList.contains('modus-wc-no-underline')).toBe(true);
    expect(page.root).toMatchSnapshot();
  });
});
