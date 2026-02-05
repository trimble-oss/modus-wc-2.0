import { Plugin } from 'vue';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

/**
 * Vue plugin for Modus Web Components
 * Initializes the custom elements for use in Vue applications
 */
export const ModusWebComponentsPlugin: Plugin = {
  install() {
    if (typeof window !== 'undefined') {
      // Set resourcesUrl to the Vue package location
      // Assets are bundled in this package at /assets/
      const resourcesUrl = new URL('.', import.meta.url).href;
      
      defineCustomElements(window, {
        resourcesUrl: resourcesUrl
      });
    }
  },
};

// Export with a shorter alias
export const ComponentLibrary = ModusWebComponentsPlugin;
