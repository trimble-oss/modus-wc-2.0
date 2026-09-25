import { queryDirectChild } from './queryDirectChild';

describe('queryDirectChild', () => {
  it('should return a matching direct child', () => {
    const host = document.createElement('div');
    host.appendChild(document.createTextNode(''));
    const inner = document.createElement('span');
    inner.className = 'modus-wc-badge';
    host.appendChild(inner);

    const nested = document.createElement('span');
    nested.className = 'modus-wc-badge';
    inner.appendChild(nested);

    expect(queryDirectChild(host, 'span.modus-wc-badge')).toBe(inner);
  });

  it('should not return a nested descendant', () => {
    const host = document.createElement('div');
    const wrapper = document.createElement('div');
    const nested = document.createElement('button');
    nested.className = 'modus-wc-btn';
    wrapper.appendChild(nested);
    host.appendChild(wrapper);

    expect(queryDirectChild(host, 'button.modus-wc-btn')).toBeNull();
  });

  it('should return null when host is not an element or document fragment', () => {
    expect(queryDirectChild(document.createTextNode(''), 'span.x')).toBeNull();
  });

  it('should return the :scope query result when the host supports it', () => {
    const host = document.createElement('div');
    const inner = document.createElement('span');
    inner.className = 'modus-wc-badge';
    host.appendChild(inner);

    const querySelector = jest
      .spyOn(host, 'querySelector')
      .mockReturnValue(inner);

    expect(queryDirectChild(host, 'span.modus-wc-badge')).toBe(inner);
    expect(querySelector).toHaveBeenCalledWith(':scope > span.modus-wc-badge');

    querySelector.mockRestore();
  });

  it('should return null when the selector is not a tag.class pair', () => {
    const host = document.createElement('div');
    const inner = document.createElement('span');
    inner.className = 'modus-wc-badge';
    host.appendChild(inner);

    const matches = jest.spyOn(inner, 'matches').mockReturnValue(false);

    expect(queryDirectChild(host, '.modus-wc-badge')).toBeNull();

    matches.mockRestore();
  });

  it('should return null when tag.class does not match the direct child tag', () => {
    const host = document.createElement('div');
    const inner = document.createElement('span');
    inner.className = 'modus-wc-badge';
    host.appendChild(inner);

    const matches = jest.spyOn(inner, 'matches').mockReturnValue(false);

    expect(queryDirectChild(host, 'button.modus-wc-btn')).toBeNull();

    matches.mockRestore();
  });

  it('should return null when tag.class does not match the direct child class', () => {
    const host = document.createElement('div');
    const inner = document.createElement('span');
    inner.className = 'other';
    host.appendChild(inner);

    const matches = jest.spyOn(inner, 'matches').mockReturnValue(false);

    expect(queryDirectChild(host, 'span.modus-wc-badge')).toBeNull();

    matches.mockRestore();
  });
});
