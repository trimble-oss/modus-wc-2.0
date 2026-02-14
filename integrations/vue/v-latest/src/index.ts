// Export Vue components
export * from './stencil-generated/components.js';

// Export Vue plugin for automatic setup
export { ModusWebComponentsPlugin, ComponentLibrary } from './plugin';

// Re-export setAssetPath for users who need to configure asset paths
export { setAssetPath } from '@trimble-oss/moduswebcomponents/components';
