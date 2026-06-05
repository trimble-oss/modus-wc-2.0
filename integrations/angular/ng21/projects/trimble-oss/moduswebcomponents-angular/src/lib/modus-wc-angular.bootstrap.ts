import {
  EnvironmentProviders,
  makeEnvironmentProviders,
  provideAppInitializer,
} from '@angular/core';
import { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

export function provideModusWebComponents(): EnvironmentProviders {
  return makeEnvironmentProviders([
    provideAppInitializer(() => {
      setAssetPath('/assets/');
    }),
  ]);
}
