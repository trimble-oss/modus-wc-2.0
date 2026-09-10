import { protectLightDomSlotContent, sanitizeUrl } from './utils';

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

describe('protectLightDomSlotContent', () => {
  const createHost = (initial = '0') => {
    const host = document.createElement('div');
    const inner = document.createElement('span');
    inner.className = 'inner';
    inner.textContent = initial;
    host.appendChild(inner);
    return { host, inner };
  };

  it('should redirect host textContent to the inner slot element', () => {
    const { host, inner } = createHost();
    const release = protectLightDomSlotContent({
      host,
      getInner: () => host.querySelector('.inner'),
    });

    host.textContent = '1';

    expect(host.querySelector('.inner')).toBe(inner);
    expect(inner.textContent).toBe('1');
    expect(host.textContent).toBe('1');

    release();
  });

  it('should redirect host innerHTML to the inner slot element', () => {
    const { host, inner } = createHost();
    const release = protectLightDomSlotContent({
      host,
      getInner: () => host.querySelector('.inner'),
    });

    host.innerHTML = '<b>2</b>';

    expect(host.querySelector('.inner')).toBe(inner);
    expect(inner.innerHTML).toBe('<b>2</b>');
    expect(host.innerHTML).toContain('<b>2</b>');

    release();
  });

  it('should treat null textContent as an empty string', () => {
    const { host, inner } = createHost();
    const release = protectLightDomSlotContent({
      host,
      getInner: () => host.querySelector('.inner'),
    });

    host.textContent = null;

    expect(inner.textContent).toBe('');
    release();
  });

  it('should use the native accessors when the inner element is missing', () => {
    const host = document.createElement('div');
    const release = protectLightDomSlotContent({
      host,
      getInner: () => host.querySelector('.inner'),
    });

    host.textContent = 'fallback';
    expect(host.textContent).toBe('fallback');

    const emptyHost = document.createElement('div');
    const releaseEmpty = protectLightDomSlotContent({
      host: emptyHost,
      getInner: () => emptyHost.querySelector('.inner'),
    });
    emptyHost.innerHTML = '<em>x</em>';
    expect(emptyHost.innerHTML).toBe('<em>x</em>');
    expect(emptyHost.textContent).toBe('x');

    release();
    releaseEmpty();
  });

  it('should no-op when the host has no text accessors', () => {
    const host = Object.create(null) as HTMLElement;
    const release = protectLightDomSlotContent({
      host,
      getInner: () => null,
    });

    expect(() => release()).not.toThrow();
  });

  it('should restore prototype accessors after release', () => {
    const { host } = createHost();
    const release = protectLightDomSlotContent({
      host,
      getInner: () => host.querySelector('.inner'),
    });

    release();
    host.textContent = 'wiped';

    expect(host.querySelector('.inner')).toBeNull();
    expect(host.textContent).toBe('wiped');
  });
});
