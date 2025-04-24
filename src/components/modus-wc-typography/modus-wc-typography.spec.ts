import { newSpecPage } from '@stencil/core/testing';
import {
  ModusWCTypography,
  TypographyVariant,
  TypographyWeight,
} from './modus-wc-typography';
import { convertPropsToClasses } from './modus-wc-typography.tailwind';
import { DaisySize } from '../types';

describe('modus-wc-typography', () => {
  it('should render with default props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography>Test content</modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render with custom props', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography custom-class="test-class" size="sm" variant="body" weight="bold">Test content</modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });

  it('should render headings', async () => {
    const page = await newSpecPage({
      components: [ModusWCTypography],
      html: `<modus-wc-typography variant="h1">Test content</modus-wc-typography>`,
    });
    expect(page.root).toMatchSnapshot();
  });
});

describe('modus-wc-typography - convertPropsToClasses', () => {
  it('returns empty string when no props are provided', () => {
    expect(convertPropsToClasses({})).toBe('');
  });

  it.each([['h1'], ['h2'], ['h3'], ['h4'], ['h5'], ['h6']])(
    'returns empty string when variant is a heading (%s)',
    (headingVariant) => {
      expect(
        convertPropsToClasses({ variant: headingVariant as TypographyVariant })
      ).toBe('');
    }
  );

  it('returns empty string when variant is a heading AND other props are provided', () => {
    expect(
      convertPropsToClasses({ size: 'sm', variant: 'h1', weight: 'bold' })
    ).toBe('');
  });

  it.each([['sm'], ['md'], ['lg']])(
    'returns correct size class (%s)',
    (size) => {
      expect(convertPropsToClasses({ size: size as DaisySize })).toBe(
        `modus:text-${size}`
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

  it('returns combined classes when size and weight are provided and variant is not a heading', () => {
    expect(
      convertPropsToClasses({
        size: 'md',
        weight: 'semibold',
        variant: 'body',
      })
    ).toBe('modus:text-base modus-wc-typography-weight-semibold');
  });
});
