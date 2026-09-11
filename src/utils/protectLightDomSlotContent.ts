/**
 * React (and other reconcilers) often update a custom element's children by
 * assigning `textContent` / `innerHTML` on the host. With `shadow: false`, that
 * assignment destroys Stencil's inner chrome (the styled span/button) and the
 * visual styles drop. Redirect those accessors to the slot destination instead.
 */
export function protectLightDomSlotContent(options: {
    host: HTMLElement;
    getInner: () => Element | null;
  }): () => void {
    const { host, getInner } = options;
    patchHostAccessor(host, 'textContent', getInner);
    patchHostAccessor(host, 'innerHTML', getInner);
  
    return () => {
      delete (host as { textContent?: string }).textContent;
      delete (host as { innerHTML?: string }).innerHTML;
    };
  }
  
  function findAccessorDescriptor(
    host: HTMLElement,
    name: 'textContent' | 'innerHTML'
  ): PropertyDescriptor | undefined {
    let proto: object | null = Object.getPrototypeOf(host);
    while (proto) {
      const descriptor = Object.getOwnPropertyDescriptor(proto, name);
      if (descriptor?.get && descriptor.set) {
        return descriptor;
      }
      proto = Object.getPrototypeOf(proto);
    }
    return undefined;
  }
  
  function patchHostAccessor(
    host: HTMLElement,
    name: 'textContent' | 'innerHTML',
    getInner: () => Element | null
  ): void {
    const descriptor = findAccessorDescriptor(host, name);
    if (!descriptor?.get || !descriptor.set) {
      return;
    }
  
    const { get, set, enumerable } = descriptor;
  
    Object.defineProperty(host, name, {
      configurable: true,
      enumerable,
      get() {
        const inner = getInner();
        return inner ? get.call(inner) : get.call(host);
      },
      set(value: string | null | undefined) {
        const next = value ?? '';
        const inner = getInner();
        if (inner) {
          set.call(inner, next);
          return;
        }
        set.call(host, next);
      },
    });
  }