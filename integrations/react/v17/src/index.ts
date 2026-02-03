// Auto-initialize asset path for components that need it (e.g., ModusWcLogo)
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

// Set asset path for components that use getAssetPath() (like ModusWcLogo)
// Points to the assets bundled within this React package in node_modules
if (typeof window !== 'undefined') {
  setAssetPath(`${window.location.origin}/node_modules/@trimble-oss/moduswebcomponents-react/`);
}

export * from './stencil-generated/components';
