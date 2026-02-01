// Auto-initialize asset path for components that need it (e.g., ModusWcLogo)
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

// Set asset path to local package - requires full URL with origin for browser
const isServer = typeof window === 'undefined';
const assetPath = isServer 
  ? '/node_modules/@trimble-oss/moduswebcomponents/collection/components/modus-wc-logo/'
  : `${window.location.origin}/node_modules/@trimble-oss/moduswebcomponents/collection/components/modus-wc-logo/`;

setAssetPath(assetPath);

export * from './stencil-generated/components';
