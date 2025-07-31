import tailwindStyles from '../../styles/output.css?inline';

export function createShadowTestHost() {
  if (!customElements.get('modus-shadow-test-host')) {
    class ModusShadowTestHost extends HTMLElement {
      private observer!: MutationObserver;
      static get observedAttributes() {
        return ['tag', 'props', 'attrs', 'innerhtml'];
      }

      private shadow: ShadowRoot;
      private child: HTMLElement | null = null;
      private styleEl: HTMLStyleElement;

      constructor() {
        super();
        this.shadow = this.attachShadow({ mode: 'open' });
        // Inject Tailwind output CSS
        this.styleEl = document.createElement('style');
        this.styleEl.textContent = tailwindStyles;
        this.shadow.appendChild(this.styleEl);
      }

      connectedCallback() {
        this.copyThemeAttributes();
        this.observer = new MutationObserver(() => this.copyThemeAttributes());
        this.observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ['data-theme', 'data-mode'],
        });
        this.renderChild();
      }

      copyThemeAttributes() {
        const html = document.documentElement;
        const theme = html.getAttribute('data-theme');
        const mode = html.getAttribute('data-mode');
        if (theme !== null) {
          this.setAttribute('data-theme', theme);
        } else {
          this.removeAttribute('data-theme');
        }
        if (mode !== null) {
          this.setAttribute('data-mode', mode);
        } else {
          this.removeAttribute('data-mode');
        }
      }

      attributeChangedCallback() {
        this.renderChild();
      }

      renderChild() {
        // Remove previous child (but not the style tag)
        if (this.child && this.shadow.contains(this.child)) {
          this.shadow.removeChild(this.child);
        }

        const tag = this.getAttribute('tag') || 'div';
        const props = this.getAttribute('props')
          ? JSON.parse(this.getAttribute('props')!)
          : {};
        const attrs = this.getAttribute('attrs')
          ? JSON.parse(this.getAttribute('attrs')!)
          : {};
        const innerHTML = this.getAttribute('innerhtml') || '';

        const el = document.createElement(tag);

        // Set attributes
        Object.entries(attrs).forEach(([k, v]) =>
          el.setAttribute(k, v as string)
        );
        // Set properties
        Object.entries(props).forEach(([k, v]) => ((el as any)[k] = v));

        el.innerHTML = innerHTML;
        this.shadow.appendChild(el);
        this.child = el;
      }
    }
    customElements.define('modus-shadow-test-host', ModusShadowTestHost);
  }
}
