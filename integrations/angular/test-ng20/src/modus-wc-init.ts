import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';
import { defineCustomElements } from '@trimble-oss/moduswebcomponents/loader';

setAssetPath('/assets/');
defineCustomElements(window);
