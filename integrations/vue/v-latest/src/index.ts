// Export Vue components
export * from './stencil-generated/components.js';

// Export Vue plugin for automatic setup
export { ModusWebComponentsPlugin, ComponentLibrary } from './plugin';

// Re-export setAssetPath for users who need to configure asset paths
export { setAssetPath } from '@trimble-oss/moduswebcomponents/components';

// Shared types from core (src/components/types.ts)
export type {
  AutocompleteTypes,
  DaisySize,
  Density,
  IAutocompleteItem,
  IAutocompleteNoResults,
  IInputFeedbackProp,
  ModusSize,
  Orientation,
  PopoverPlacement,
  SelectionMode,
  TextFieldTypes,
  TypographyHierarchy,
  TypographySize,
  TypographyWeight,
  WeekStartDay,
} from '@trimble-oss/moduswebcomponents';
