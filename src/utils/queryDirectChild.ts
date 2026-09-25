/**
 * Finds a direct child of `host` matching `selector` (same as `:scope > selector`).
 * Falls back to iterating `children` when `:scope` is unsupported (e.g. Stencil mock-doc).
 */
export function queryDirectChild(
  host: ParentNode,
  selector: string
): Element | null {
  const hostNodeType = host.nodeType;
  if (
    hostNodeType !== Node.ELEMENT_NODE &&
    hostNodeType !== Node.DOCUMENT_FRAGMENT_NODE
  ) {
    return null;
  }

  try {
    const scoped = host.querySelector(`:scope > ${selector}`);
    if (scoped) {
      return scoped;
    }
  } catch {
    // :scope unsupported in some test environments
  }

  for (const child of host.childNodes) {
    if (child.nodeType !== Node.ELEMENT_NODE) {
      continue;
    }

    const element = child as Element;
    if (elementMatchesSelector(element, selector)) {
      return element;
    }
  }

  return null;
}

function elementMatchesSelector(element: Element, selector: string): boolean {
  try {
    if (element.matches(selector)) {
      return true;
    }
  } catch {
    // mock-doc may not implement matches for compound selectors
  }

  const tagAndClass = /^([a-z][\w-]*)\.([\w-]+)$/i.exec(selector);
  if (!tagAndClass) {
    return false;
  }

  const [, tag, className] = tagAndClass;
  return (
    element.tagName.toLowerCase() === tag.toLowerCase() &&
    element.classList.contains(className)
  );
}
