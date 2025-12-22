import { newSpecPage } from '@stencil/core/testing';
import { ModusWCTypography, TypographyWeight } from './modus-wc-typography';
import { convertPropsToClasses } from './modus-wc-typography.tailwind';
import { DaisySize } from '../types';

describe('modus-wc-typography', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography label="Test content"></modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography custom-class="test-class" size="sm" hierarchy="p" weight="bold" label="Test content"></modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render headings', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography hierarchy="h1" label="Test content"></modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});

describe('modus-wc-typography - heading override class', () => {
  it('should add override class for heading with size/weight overrides', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography hierarchy="h2" size="lg" weight="bold" label="Heading"></modus-wc-typography>`,
    });
    expect(page.root).toBeDefined();
    const el = page.root && page.root.querySelector('h2');
    expect(el).not.toBeNull();
    expect(el && el.className).toContain('modus-wc-typography-override');
  });
});

describe('modus-wc-typography - label prop', () => {
  it('should render with label prop', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography label="Label text"></modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
    const el = page.root && page.root.querySelector('p');
    expect(el).not.toBeNull();
    expect(el && el.textContent).toBe('Label text');
  });
});

describe('modus-wc-typography - convertPropsToClasses', () => {
  it('returns empty string when no props are provided', () => {
    expect(convertPropsToClasses({})).toBe('');
  });

  it.each([['sm'], ['md'], ['lg']])(
    'returns correct size class (%s)',
    (size) => {
      expect(convertPropsToClasses({ size: size as DaisySize })).toBe(
        `modus-wc-text-${size}`
      );
    }
  );

  it.each([['light'], ['normal'], ['semibold'], ['bold']])(
    'returns correct weight class (%s)',
    (weight) => {
      expect(
        convertPropsToClasses({ weight: weight as TypographyWeight })
      ).toBe(`modus-wc-typography-weight-${weight}`);
    }
  );

  it('returns combined classes when size and weight are provided and hierarchy is not a heading', () => {
    expect(
      convertPropsToClasses({
        size: 'md',
        weight: 'semibold',
      })
    ).toBe('modus-wc-text-md modus-wc-typography-weight-semibold');
  });
});
