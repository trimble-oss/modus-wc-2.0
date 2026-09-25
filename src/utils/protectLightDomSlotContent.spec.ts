import { protectLightDomSlotContent } from './protectLightDomSlotContent';

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
    const { release } = protectLightDomSlotContent({
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
    const { release } = protectLightDomSlotContent({
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
    const { release } = protectLightDomSlotContent({
      host,
      getInner: () => host.querySelector('.inner'),
    });

    host.textContent = null;

    expect(inner.textContent).toBe('');
    release();
  });

  it('should queue textContent until the inner element exists', async () => {
    const host = document.createElement('div');
    const { release } = protectLightDomSlotContent({
      host,
      getInner: () => host.querySelector('.inner'),
    });

    host.textContent = 'Updated';

    expect(host.querySelector('.inner')).toBeNull();
    expect(host.childNodes.length).toBe(0);

    const inner = document.createElement('span');
    inner.className = 'inner';
    host.appendChild(inner);

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(host.querySelector('.inner')).toBe(inner);
    expect(inner.textContent).toBe('Updated');

    release();
  });

  it('should flush a queued write once the inner element exists', async () => {
    const host = document.createElement('div');
    let inner: HTMLElement | null = null;
    const { flush, release } = protectLightDomSlotContent({
      host,
      getInner: () => inner,
    });

    host.textContent = 'Updated';
    await Promise.resolve();
    expect(host.childNodes.length).toBe(0);

    inner = document.createElement('span');
    host.appendChild(inner);
    flush();

    expect(inner.textContent).toBe('Updated');
    flush();
    release();
  });

  it('should keep a queued write when the inner node cannot accept text', async () => {
    const host = document.createElement('div');
    let inner: object | null = null;
    const { flush, release } = protectLightDomSlotContent({
      host,
      getInner: () => inner as Element | null,
    });

    host.textContent = 'Updated';
    await Promise.resolve();
    inner = {};
    flush();
    release();
  });

  it('should no-op when the host has no text accessors', () => {
    const host = Object.create(null) as HTMLElement;
    const { release } = protectLightDomSlotContent({
      host,
      getInner: () => null,
    });

    expect(() => release()).not.toThrow();
  });

  it('should restore prototype accessors after release', () => {
    const { host } = createHost();
    const { release } = protectLightDomSlotContent({
      host,
      getInner: () => host.querySelector('.inner'),
    });

    release();
    host.textContent = 'wiped';

    expect(host.querySelector('.inner')).toBeNull();
    expect(host.textContent).toBe('wiped');
  });
});
