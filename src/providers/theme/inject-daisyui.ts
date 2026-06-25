import { componentCSS } from './component-css-content';
import { globalCSS, iconsCSS, outputCSS } from './css-content';

const injectedRoots = new WeakSet<ShadowRoot>();
let sharedStyleSheet: CSSStyleSheet | null = null;

// Separate deduplication state for the full bundle (global + component SCSS)
const injectedContainerRoots = new WeakSet<ShadowRoot>();
let sharedContainerStyleSheet: CSSStyleSheet | null = null;

/**
 * Injects DaisyUI/Tailwind CSS into a shadow root.
 * Note: CSS variables defined at :root automatically inherit into shadow DOM,
 * so we only need to inject the class rules and structural CSS.
 *
 * For theming to work properly in shadow DOM:
 * - CSS variables (--modus-wc-*) inherit from the document :root
 * - Theme changes via data-theme attribute work automatically globally
 *
 * Creates a single shared CSSStyleSheet that is reused across all shadow roots.
 *
 * @param includeComponentStyles When true (used by container components), also injects
 * compiled per-component SCSS so slotted children render correctly inside consumer shadow roots.
 */
export async function ensureDaisyUIInShadow(
  root: Document | ShadowRoot,
  includeComponentStyles = false
): Promise<void> {
  if (!(root instanceof ShadowRoot)) return;

  if (includeComponentStyles) {
    if (injectedContainerRoots.has(root)) return;

    // Combine the CSS content including per-component SCSS
    // outputCSS contains Tailwind/DaisyUI utility classes
    // globalCSS contains base styles and references to CSS variables
    // iconsCSS contains @font-face declarations for Modus icons
    // componentCSS contains compiled per-component SCSS for all modus components
    // CSS variables themselves inherit from :root automatically
    const cssContent =
      outputCSS + '\n' + globalCSS + '\n' + iconsCSS + '\n' + componentCSS;

    if (!cssContent.trim()) {
      console.warn('No CSS content available for shadow DOM injection');
      return;
    }

    const supportsAdopted =
      'adoptedStyleSheets' in Document.prototype && 'CSSStyleSheet' in window;

    if (supportsAdopted) {
      try {
        if (!sharedContainerStyleSheet) {
          sharedContainerStyleSheet = new CSSStyleSheet();
          await sharedContainerStyleSheet.replace(cssContent);
        }
        const r = root as unknown as { adoptedStyleSheets?: CSSStyleSheet[] };
        r.adoptedStyleSheets = [
          ...(r.adoptedStyleSheets || []),
          sharedContainerStyleSheet,
        ];
      } catch (error) {
        console.warn(
          'adoptedStyleSheets failed, falling back to <style> element:',
          error
        );
        const styleEl = document.createElement('style');
        styleEl.textContent = cssContent;
        root.appendChild(styleEl);
      }
    } else {
      const styleEl = document.createElement('style');
      styleEl.textContent = cssContent;
      root.appendChild(styleEl);
    }

    // Also mark as base-injected so non-container components in the same shadow root
    // don't re-inject the base bundle on top of the already-complete full bundle.
    injectedContainerRoots.add(root);
    injectedRoots.add(root);
  } else {
    // Short-circuit if the full bundle was already injected by a container component
    if (injectedContainerRoots.has(root) || injectedRoots.has(root)) return;

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
        // Create the shared stylesheet once and reuse it across all shadow roots
        if (!sharedStyleSheet) {
          sharedStyleSheet = new CSSStyleSheet();
          await sharedStyleSheet.replace(cssContent);
        }

        // Adopt the shared stylesheet into this shadow root
        const r = root as unknown as { adoptedStyleSheets?: CSSStyleSheet[] };
        r.adoptedStyleSheets = [
          ...(r.adoptedStyleSheets || []),
          sharedStyleSheet,
        ];
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
      // Legacy fallback for older browsers (still requires duplication)
      const styleEl = document.createElement('style');
      styleEl.textContent = cssContent;
      root.appendChild(styleEl);
    }

    injectedRoots.add(root);
  }
}
