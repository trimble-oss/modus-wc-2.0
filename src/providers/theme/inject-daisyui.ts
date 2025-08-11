import { globalCSS, outputCSS } from './css-content';

const injectedRoots = new WeakSet<ShadowRoot>();

export async function ensureDaisyUIInShadow(
  root: Document | ShadowRoot
): Promise<void> {
  if (!(root instanceof ShadowRoot)) return;
  if (injectedRoots.has(root)) return;

  // Combine the CSS content
  const cssContent = outputCSS + '\n' + globalCSS;

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
    } catch {
      // Fallback if adoptedStyleSheets fails
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
