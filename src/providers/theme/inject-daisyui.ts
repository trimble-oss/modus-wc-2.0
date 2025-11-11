import { globalCSS, iconsCSS, outputCSS } from './css-content';

const injectedRoots = new WeakSet<ShadowRoot>();

/**
 * Injects DaisyUI/Tailwind CSS into a shadow root.
 * Note: CSS variables defined at :root automatically inherit into shadow DOM,
 * so we only need to inject the class rules and structural CSS.
 *
 * For theming to work properly in shadow DOM:
 * - CSS variables (--modus-wc-*) inherit from the document :root
 * - Theme changes via data-theme attribute work automatically
 * - No need to re-inject CSS on theme change
 */
export async function ensureDaisyUIInShadow(
  root: Document | ShadowRoot
): Promise<void> {
  if (!(root instanceof ShadowRoot)) return;
  if (injectedRoots.has(root)) return;

  // Combine the CSS content
  // outputCSS contains Tailwind/DaisyUI utility classes
  // globalCSS contains base styles and references to CSS variables
  // iconsCSS contains @font-face declarations for Modus icons
  // CSS variables themselves inherit from :root automatically
  const cssContent = outputCSS + '\n' + globalCSS + '\n' + iconsCSS;

  if (!cssContent.trim()) {
    console.warn('No CSS content available for shadow DOM injection');
    return;
  }

  // Inject the CSS into the shadow root
  const supportsAdopted =
    'adoptedStyleSheets' in Document.prototype && 'CSSStyleSheet' in window;

  if (supportsAdopted) {
    try {
      const sheet = new CSSStyleSheet();
      await sheet.replace(cssContent);
      const r = root as unknown as { adoptedStyleSheets?: CSSStyleSheet[] };
      r.adoptedStyleSheets = [...(r.adoptedStyleSheets || []), sheet];
    } catch (error) {
      // Fallback if adoptedStyleSheets fails
      console.warn(
        'adoptedStyleSheets failed, falling back to <style> element:',
        error
      );
      const styleEl = document.createElement('style');
      styleEl.textContent = cssContent;
      root.appendChild(styleEl);
    }
  } else {
    // Legacy fallback for older browsers
    const styleEl = document.createElement('style');
    styleEl.textContent = cssContent;
    root.appendChild(styleEl);
  }

  injectedRoots.add(root);
}
