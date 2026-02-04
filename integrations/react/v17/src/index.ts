import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

// Auto-initialize asset path to the React package location
// This works in both dev (node_modules) and production (bundled) scenarios
if (typeof window !== 'undefined') {
  // Set to package root - assets are bundled in this package at /assets/
  setAssetPath(new URL('./', import.meta.url).href);
}

export * from './stencil-generated/components';

// Re-export setAssetPath for users who need to override
export { setAssetPath };
