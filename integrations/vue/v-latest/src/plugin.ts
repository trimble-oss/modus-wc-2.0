import { Plugin } from 'vue';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

/**
 * Vue plugin for Modus Web Components
 * Automatically configures asset paths for components like ModusWcLogo
 * 
 * Assets are loaded from the npm package's collection folder.
 * Works in both development and production environments.
 */
export const ModusWebComponentsPlugin: Plugin = {
  install() {
    // Use local package path with proper URL construction for browser
    // Assets are served from node_modules in both dev and production
    const isServer = typeof window === 'undefined';
    const assetPath = isServer 
      ? '/node_modules/@trimble-oss/moduswebcomponents/collection/components/modus-wc-logo/'
      : `${window.location.origin}/node_modules/@trimble-oss/moduswebcomponents/collection/components/modus-wc-logo/`;
    
    // Pass resourcesUrl to defineCustomElements to set asset path in loader runtime
    defineCustomElements(window, {
      resourcesUrl: assetPath
    });
  },
};

// Export with a shorter alias
export const ComponentLibrary = ModusWebComponentsPlugin;
