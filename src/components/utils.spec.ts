import { sanitizeUrl } from './utils';

describe('sanitizeUrl', () => {
  it('should return trimmed allowed absolute URLs', () => {
    expect(sanitizeUrl(' https://trimble.com ')).toBe('https://trimble.com');
    expect(sanitizeUrl('mailto:test@trimble.com')).toBe(
      'mailto:test@trimble.com'
    );
    expect(sanitizeUrl('tel:+1234567890')).toBe('tel:+1234567890');
  });

  it('should allow relative URLs', () => {
    expect(sanitizeUrl('/products/table')).toBe('/products/table');
    expect(sanitizeUrl('./details')).toBe('./details');
    expect(sanitizeUrl('#section')).toBe('#section');
  });

  it('should reject unsafe URL protocols', () => {
    expect(sanitizeUrl(' javascript:alert(1) ')).toBeUndefined();
    expect(sanitizeUrl('data:text/html;base64,abcd')).toBeUndefined();
    expect(sanitizeUrl('VBScript:msgbox("x")')).toBeUndefined();
    expect(sanitizeUrl('file:///tmp/example.txt')).toBeUndefined();
  });

  it('should reject empty values', () => {
    expect(sanitizeUrl()).toBeUndefined();
    expect(sanitizeUrl('  ')).toBeUndefined();
  });
});
