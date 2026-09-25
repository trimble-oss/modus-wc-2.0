/* eslint-disable @typescript-eslint/unbound-method */
export function protectLightDomSlotContent(options: {
  host: HTMLElement;
  getInner: () => Element | null;
}): SlotProtection {
  const { host, getInner } = options;
  let pending: PendingWrite | null = null;

  const applyPending = () => {
    if (!pending) {
      return;
    }

    const inner = getInner();
    if (!inner) {
      return;
    }

    const descriptor = findAccessorDescriptor(inner, pending.name);
    if (!descriptor?.set) {
      return;
    }

    const write = pending;
    pending = null;
    descriptor.set.call(inner, write.value);
  };

  const queueWrite = (name: 'textContent' | 'innerHTML', value: string) => {
    pending = { name, value };
    queueMicrotask(applyPending);
  };

  patchHostAccessor(host, 'textContent', getInner, queueWrite);
  patchHostAccessor(host, 'innerHTML', getInner, queueWrite);

  const release = () => {
    pending = null;
    delete (host as { textContent?: string }).textContent;
    delete (host as { innerHTML?: string }).innerHTML;
  };

  return { release, flush: applyPending };
}

export type SlotProtection = {
  release: () => void;
  flush: () => void;
};

type PendingWrite = {
  name: 'textContent' | 'innerHTML';
  value: string;
};

function findAccessorDescriptor(
  host: object,
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
  getInner: () => Element | null,
  queueWrite: (name: 'textContent' | 'innerHTML', value: string) => void
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
      queueWrite(name, next);
    },
  });
}
