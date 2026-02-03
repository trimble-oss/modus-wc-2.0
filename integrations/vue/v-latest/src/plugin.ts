import { Plugin } from 'vue';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

/**
 * Vue plugin for Modus Web Components
 * Automatically configures asset paths for components like ModusWcLogo
 * 
 * Note: For production builds, you need to copy logo assets to your public folder.
 * Add this to your Vite config or build process:
 * - Source: node_modules/@trimble-oss/moduswebcomponents/assets
 * - Destination: public/assets (or configure in angular.json for Angular)
 */
export const ModusWebComponentsPlugin: Plugin = {
  install() {
    // Set asset path for components that use getAssetPath() (like ModusWcLogo)
    // Points to the assets bundled within this Vue package in node_modules
    if (typeof window !== 'undefined') {
      setAssetPath(`${window.location.origin}/node_modules/@trimble-oss/moduswebcomponents-vue/`);
    }
    
    // Define custom elements
    defineCustomElements(window);
  },
};

// Export with a shorter alias
export const ComponentLibrary = ModusWebComponentsPlugin;
