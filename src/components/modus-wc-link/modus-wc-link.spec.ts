import { newSpecPage } from '@stencil/core/testing';
import { ModusWcLink } from './modus-wc-link';
import { ModusWcIcon } from '../modus-wc-icon/modus-wc-icon';

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

  it('should render with success color class when color is success', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link aria-label="Success link" color="success" href="#">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.classList.contains('modus-wc-link-color-success')).toBe(
      true
    );
  });

  it('should render with sanitized href when href is provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link href="https://trimble.com">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.getAttribute('href')).toBe('https://trimble.com');
  });

  it('should not render href when href is not provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link>Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.hasAttribute('href')).toBe(false);
  });

  it('should not render href when href is the string undefined', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link href="undefined">Click me</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.hasAttribute('href')).toBe(false);
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

  it('should render title attribute when provided', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink],
      html: '<modus-wc-link href="https://trimble.com" title="Visit Trimble website">Trimble.com</modus-wc-link>',
    });
    const anchor = page.root?.querySelector('a');
    expect(anchor?.getAttribute('title')).toBe('Visit Trimble website');
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

  it('should render a leading icon when the start-icon slot is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink, ModusWcIcon],
      html: `<modus-wc-link href="#">
        <modus-wc-icon name="link-simple" slot="start-icon"></modus-wc-icon>
        Click me
      </modus-wc-link>`,
    });
    const anchor = page.root?.querySelector('a');
    const markup = anchor?.innerHTML ?? '';
    const label = anchor?.querySelector('.modus-wc-link-label');

    expect(anchor?.querySelector('[slot="start-icon"]')).toBeTruthy();
    expect(label?.textContent).toContain('Click me');
    expect(markup.indexOf('slot="start-icon"')).toBeLessThan(
      markup.indexOf('modus-wc-link-label')
    );
    expect(anchor?.querySelector('[slot="end-icon"]')).toBeNull();
    expect(page.root).toMatchSnapshot();
  });

  it('should render a trailing icon when the end-icon slot is set', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink, ModusWcIcon],
      html: `<modus-wc-link href="#">
        Click me
        <modus-wc-icon name="caret-right" slot="end-icon"></modus-wc-icon>
      </modus-wc-link>`,
    });
    const anchor = page.root?.querySelector('a');
    const markup = anchor?.innerHTML ?? '';
    const label = anchor?.querySelector('.modus-wc-link-label');

    expect(anchor?.querySelector('[slot="end-icon"]')).toBeTruthy();
    expect(label?.textContent).toContain('Click me');
    expect(markup.indexOf('modus-wc-link-label')).toBeLessThan(
      markup.indexOf('slot="end-icon"')
    );
    expect(anchor?.querySelector('[slot="start-icon"]')).toBeNull();
    expect(page.root).toMatchSnapshot();
  });

  it('should render leading and trailing icons together', async () => {
    const page = await newSpecPage({
      components: [ModusWcLink, ModusWcIcon],
      html: `<modus-wc-link color="success" href="#" underline="none">
        <modus-wc-icon name="link-simple" slot="start-icon"></modus-wc-icon>
        Click me
        <modus-wc-icon name="caret-right" slot="end-icon"></modus-wc-icon>
      </modus-wc-link>`,
    });
    const anchor = page.root?.querySelector('a');
    const markup = anchor?.innerHTML ?? '';
    const label = anchor?.querySelector('.modus-wc-link-label');
    const startIcon = anchor?.querySelector('[slot="start-icon"]');
    const endIcon = anchor?.querySelector('[slot="end-icon"]');
    const startIndex = markup.indexOf('slot="start-icon"');
    const labelIndex = markup.indexOf('modus-wc-link-label');
    const endIndex = markup.indexOf('slot="end-icon"');

    expect(anchor?.classList.contains('modus-wc-link-color-success')).toBe(
      true
    );
    expect(anchor?.classList.contains('modus-wc-no-underline')).toBe(true);
    expect(label?.textContent).toContain('Click me');
    expect(startIcon?.getAttribute('name')).toBe('link-simple');
    expect(endIcon?.getAttribute('name')).toBe('caret-right');
    expect(startIndex).toBeLessThan(labelIndex);
    expect(labelIndex).toBeLessThan(endIndex);
    expect(page.root).toMatchSnapshot();
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
