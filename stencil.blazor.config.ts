import { createRequire } from 'node:module';
import { join } from 'node:path';
import type { Config } from '@stencil/core';
import { config as baseConfig } from './stencil.config';

// Stencil compiles this config as CJS, so import.meta.url is invalid.
// Builds always run from the repo root.
const razorPackageJson = join(
  process.cwd(),
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
