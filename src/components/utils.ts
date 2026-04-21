import { Build } from '@stencil/core';

/**
 * Checks if the app is in light mode by checking the html element's data-theme attribute.
 * @returns { boolean } - Whether the app is in light mode or not.
 */
export const isLightMode = (): boolean => {
  const theme = document.documentElement.getAttribute('data-theme');
  return !theme || theme.includes('light');
};

/*
 * Generates a random string of the specified length.
 * @param length { number } - The length of the random string to generate.
 * @returns { string } - A random string of the specified length.
 */
export function generateRandomId(length: number = 8): string {
  // Prevent instancing random ids in testing environments
  if (Build.isTesting) {
    return 'test-random-id';
  }

  return Math.random()
    .toString(36)
    .substring(2, 2 + length);
}

export type Attributes = { [key: string]: string };

/**
 * Elements inside of web components sometimes need to inherit global attributes
 * set on the host. For example, the inner input in `ion-input` should inherit
 * the `title` attribute that developers set directly on `ion-input`. This
 * helper function should be called in componentWillLoad and assigned to a variable
 * that is later used in the render function.
 *
 * This does not need to be reactive as changing attributes on the host element
 * does not trigger a re-render.
 */
export const inheritAttributes = (
  el: HTMLElement,
  attributes: string[] = []
) => {
  const attributeObject: Attributes = {};

  attributes.forEach((attr) => {
    if (el.hasAttribute(attr)) {
      const value = el.getAttribute(attr);
      if (value !== null) {
        attributeObject[attr] = value;
      }
      el.removeAttribute(attr);
    }
  });

  return attributeObject;
};

/**
 * Generates a unique element ID.
 * @param prefix Optional prefix for the ID
 * @returns A unique ID string
 */
let counter = 0;
export function generateElementId(): string {
  return `mwc_id_${counter++}`;
}

/**
 * List of available ARIA attributes + `role`.
 * Removed deprecated attributes.
 * https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes
 */
const ariaAttributes = [
  'role',
  'aria-activedescendant',
  'aria-atomic',
  'aria-autocomplete',
  'aria-braillelabel',
  'aria-brailleroledescription',
  'aria-busy',
  'aria-checked',
  'aria-colcount',
  'aria-colindex',
  'aria-colindextext',
  'aria-colspan',
  'aria-controls',
  'aria-current',
  'aria-describedby',
  'aria-description',
  'aria-details',
  'aria-disabled',
  'aria-errormessage',
  'aria-expanded',
  'aria-flowto',
  'aria-haspopup',
  'aria-hidden',
  'aria-invalid',
  'aria-keyshortcuts',
  'aria-label',
  'aria-labelledby',
  'aria-level',
  'aria-live',
  'aria-multiline',
  'aria-multiselectable',
  'aria-orientation',
  'aria-owns',
  'aria-placeholder',
  'aria-posinset',
  'aria-pressed',
  'aria-readonly',
  'aria-relevant',
  'aria-required',
  'aria-roledescription',
  'aria-rowcount',
  'aria-rowindex',
  'aria-rowindextext',
  'aria-rowspan',
  'aria-selected',
  'aria-setsize',
  'aria-sort',
  'aria-valuemax',
  'aria-valuemin',
  'aria-valuenow',
  'aria-valuetext',
];

/**
 * Returns an array of aria attributes that should be copied from
 * the shadow host element to a target within the light DOM.
 * @param el The element that the attributes should be copied from.
 * @param ignoreList The list of aria-attributes to ignore reflecting and removing from the host.
 * Use this in instances where we manually specify aria attributes on the `<Host>` element.
 */
export const inheritAriaAttributes = (
  el: HTMLElement,
  ignoreList?: string[]
) => {
  let attributesToInherit = ariaAttributes;
  if (ignoreList && ignoreList.length > 0) {
    attributesToInherit = attributesToInherit.filter(
      (attr) => !ignoreList.includes(attr)
    );
  }
  return inheritAttributes(el, attributesToInherit);
};

export const KEY: { [key: string]: string } = {
  Enter: 'Enter',
  Space: ' ',
  Escape: 'Escape',
  Backspace: 'Backspace',
  ArrowDown: 'ArrowDown',
  ArrowUp: 'ArrowUp',
};

/**
 * Returns a safe URL string for use in link-like attributes.
 * Disallows dangerous protocols such as javascript:, data:, vbscript:, and file:.
 */
export const sanitizeUrl = (url?: string): string | undefined => {
  if (!url) return undefined;

  const trimmed = url.trim();
  if (!trimmed) return undefined;

  const schemeMatch = /^[a-zA-Z][a-zA-Z\d+.-]*:/.exec(trimmed);
  if (!schemeMatch) return trimmed;

  const protocol = schemeMatch[0].slice(0, -1).toLowerCase();
  const allowedProtocols = new Set(['http', 'https', 'mailto', 'tel']);

  return allowedProtocols.has(protocol) ? trimmed : undefined;
};
