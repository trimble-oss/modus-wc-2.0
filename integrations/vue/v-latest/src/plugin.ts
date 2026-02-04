import { Plugin } from 'vue';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

/**
 * Vue plugin for Modus Web Components
 * Automatically configures asset paths for components like ModusWcLogo
 */
export const ModusWebComponentsPlugin: Plugin = {
  install() {
    // Define custom elements with resourcesUrl for the loader runtime
    // Points to assets in the main package's dist/components folder
    if (typeof window !== 'undefined') {
      defineCustomElements(window, {
        resourcesUrl: `${window.location.origin}/node_modules/@trimble-oss/moduswebcomponents-vue/`
      });
    }
  },
};

// Export with a shorter alias
export const ComponentLibrary = ModusWebComponentsPlugin;
