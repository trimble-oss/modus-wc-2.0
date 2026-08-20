import { createRequire } from 'node:module';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Config } from '@stencil/core';
import { config as baseConfig } from './stencil.config';

const razorPackageJson = path.join(
  path.dirname(fileURLToPath(import.meta.url)),
  'integrations/blazor/razor-output/package.json'
);

const requireFromRazorOutput = createRequire(razorPackageJson);

type BlazorOutputTargetFn = (options: {
  outDir: string;
  packageName: string;
  namespace: string;
  packageReadmePath: string;
}) => NonNullable<Config['outputTargets']>[number];

let blazorOutputTarget: BlazorOutputTargetFn;

try {
  ({ blazorOutputTarget } = requireFromRazorOutput(
    '@trimble-oss/modus-stencil-razor-output-target'
  ));
} catch {
  throw new Error(
    'Blazor Razor output target is not installed. Run: npm run install:blazor-tools'
  );
}

export const config: Config = {
  ...baseConfig,
  outputTargets: [
    ...(baseConfig.outputTargets ?? []),
    blazorOutputTarget({
      outDir:
        './integrations/blazor/stencil-generated/ModusWebComponents.Blazor',
      packageName: 'ModusWebComponents.Blazor',
      namespace: 'ModusWebComponents.Blazor',
      packageReadmePath: '../../nuget-README.md',
    }),
  ],
};
