import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

// Auto-initialize asset path to the React package location
// This works in both dev (node_modules) and production (bundled) scenarios
if (typeof window !== 'undefined') {
  // Set to package root - assets are bundled in this package at /assets/
  // import.meta.url points to this file, so we go up to the directory
  const assetPath = new URL('.', import.meta.url).href;
  console.log('[React] Setting asset path to:', assetPath);
  setAssetPath(assetPath);
}

export * from './stencil-generated/components';

// Re-export setAssetPath for users who need to override
export { setAssetPath };
