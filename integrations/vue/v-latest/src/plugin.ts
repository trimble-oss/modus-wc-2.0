import { Plugin } from 'vue';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

/**
 * Vue plugin for Modus Web Components
 * Initializes the custom elements for use in Vue applications
 */
export const ModusWebComponentsPlugin: Plugin = {
  install() {
    if (typeof window !== 'undefined') {
      // Set asset path to the Vue package location
      // Assets are bundled in this package at /assets/
      setAssetPath(new URL('./', import.meta.url).href);
      defineCustomElements(window);
    }
  },
};

// Export with a shorter alias
export const ComponentLibrary = ModusWebComponentsPlugin;
