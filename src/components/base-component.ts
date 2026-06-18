// src/components/base-component.ts
/**
 * Base functionality for all Modus Web Components
 * Automatically handles Shadow DOM CSS injection when component is used inside user's shadow DOM
 */

import { ensureDaisyUIInShadow } from '../providers/theme/inject-daisyui';

/**
 * Mixin function that adds shadow DOM support to any component
 * Usage in a component:
 *
 * export class ModusWcButton {
 *   @Element() el!: HTMLElement;
 *
 *   componentWillLoad() {
 *     handleShadowDOMStyles(this.el);
 *     // ... rest of your code
 *   }
 * }
 *
 * Container components (card, utility-panel, side-navigation, modal, navbar, panel) should
 * pass `true` for `includeComponentStyles` to also inject compiled per-component SCSS,
 * ensuring slotted children render correctly inside consumer shadow roots.
 */
export function handleShadowDOMStyles(
  element: HTMLElement,
  includeComponentStyles = false
): void {
  const root = element.getRootNode();

  // Only inject if we're inside a shadow root (user's component)
  if (root instanceof ShadowRoot) {
    void ensureDaisyUIInShadow(root, includeComponentStyles);
  }
}

/**
 * Decorator that automatically handles shadow DOM CSS injection
 *
 * @example
 * @Component({ tag: 'modus-wc-button', shadow: false })
 * @WithShadowDOMSupport()
 * export class ModusWcButton {
 *   @Element() el!: HTMLElement;
 * }
 */
export function WithShadowDOMSupport() {
  return function <T extends { new (...args: unknown[]): { el: HTMLElement } }>(
    constructor: T
  ) {
    const originalWillLoad = constructor.prototype.componentWillLoad;

    constructor.prototype.componentWillLoad = function (this: {
      el: HTMLElement;
    }) {
      // Auto-inject CSS if in shadow DOM
      if (this.el) {
        handleShadowDOMStyles(this.el);
      }

      // Call original lifecycle if it exists
      if (originalWillLoad) {
        return originalWillLoad.call(this);
      }
    };

    return constructor;
  };
}
