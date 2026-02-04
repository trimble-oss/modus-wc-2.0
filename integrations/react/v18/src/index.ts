// Auto-initialize asset path for components that use getAssetPath() (like ModusWcLogo)
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

// Set asset path for components that use getAssetPath() (like ModusWcLogo)
// Points to assets copied into this React package
if (typeof window !== 'undefined') {
  setAssetPath(`${window.location.origin}/node_modules/@trimble-oss/moduswebcomponents-react/`);
}

export * from './stencil-generated/components';
