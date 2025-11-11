/**
 * Generic Shadow DOM Host Helper for Storybook
 *
 * This helper creates a reusable shadow host element that can wrap any Modus component
 * without naming conflicts between different stories.
 */

interface ShadowHostConfig<T = unknown> {
  /** The tag name of the Modus component to create (e.g., 'modus-wc-button') */
  componentTag: string;

  /** Function to map story args to component properties */
  propsMapper: (args: T, element: HTMLElement) => void;

  /** Default content/children for the component (optional) */
  defaultContent?: string | Node[];
}

/**
 * Creates a generic shadow host component class.
 * Each story should create its own unique element name to avoid conflicts.
 *
 * @example
 * ```typescript
 * // In button.stories.ts
 * const ButtonShadowHost = createShadowHostClass('button-shadow-host', {
 *   componentTag: 'modus-wc-button',
 *   propsMapper: (args, el) => {
 *     el.color = args.color;
 *     el.size = args.size;
 *     // ... other props
 *   },
 *   defaultContent: 'Click me'
 * });
 *
 * export const ShadowDomParent: Story = {
 *   render: (args) => {
 *     if (!customElements.get('button-shadow-host')) {
 *       customElements.define('button-shadow-host', ButtonShadowHost);
 *     }
 *     return html`<button-shadow-host .props=${{ ...args }}></button-shadow-host>`;
 *   }
 * };
 * ```
 */
export function createShadowHostClass<T = unknown>(
  config: ShadowHostConfig<T>
): typeof HTMLElement {
  return class ShadowHost extends HTMLElement {
    private shadowRootRef: ShadowRoot;
    private componentEl: HTMLElement;
    private _props: T | undefined;

    constructor() {
      super();

      // Create shadow root
      this.shadowRootRef = this.attachShadow({ mode: 'open' });

      // Create wrapper and component
      const wrapper = document.createElement('div');
      this.componentEl = document.createElement(config.componentTag);

      // Add default content if provided
      if (config.defaultContent) {
        if (typeof config.defaultContent === 'string') {
          this.componentEl.textContent = config.defaultContent;
        } else {
          config.defaultContent.forEach((node) => {
            this.componentEl.appendChild(node);
          });
        }
      }

      wrapper.appendChild(this.componentEl);
      this.shadowRootRef.appendChild(wrapper);
    }

    /**
     * Setter for props - called by Lit's .props=${} binding
     * This ensures Stencil updates without remounting
     */
    set props(value: T) {
      if (!this.componentEl) return;
      this._props = value;

      // Apply props to component
      config.propsMapper(value, this.componentEl);
    }

    get props(): T | undefined {
      return this._props;
    }
  };
}

/**
 * Alternative: Simple function to create shadow host inline
 * Use this if you prefer inline class definition in stories
 */
export function createShadowHost<T = Record<string, unknown>>(
  elementName: string,
  config: ShadowHostConfig<T>
): void {
  if (customElements.get(elementName)) {
    return; // Already defined
  }

  const HostClass = createShadowHostClass(config);
  customElements.define(elementName, HostClass);
}
