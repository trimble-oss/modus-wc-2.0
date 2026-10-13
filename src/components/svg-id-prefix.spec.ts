import { prefixSvgFragmentIds } from './svg-id-prefix';

describe('prefixSvgFragmentIds', () => {
  it('should rewrite ids and url references with the given prefix', () => {
    const svg =
      '<svg><mask id="a"></mask><path mask="url(#a)" id="b"></path></svg>';
    const result = prefixSvgFragmentIds(svg, 'scope1');

    expect(result).toContain('id="scope1__a"');
    expect(result).toContain('url(#scope1__a)');
    expect(result).toContain('id="scope1__b"');
    expect(result).not.toContain('id="a"');
  });
});
