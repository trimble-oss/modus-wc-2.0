export * from './stencil-generated/components';

// Asset path is not auto-initialized in CJS/Jest environments.
// If you need logo assets in tests, call setAssetPath manually in your Jest setup file.
export { setAssetPath } from '@trimble-oss/moduswebcomponents/components';
