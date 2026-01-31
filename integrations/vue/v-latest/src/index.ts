// Auto-initialize asset path for components that need it (e.g., ModusWcLogo)
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

// Set asset path to CDN using @latest to always get newest assets
setAssetPath('https://cdn.jsdelivr.net/npm/@trimble-oss/moduswebcomponents@latest/collection/components/modus-wc-logo/');

export * from './stencil-generated/components.js'; 