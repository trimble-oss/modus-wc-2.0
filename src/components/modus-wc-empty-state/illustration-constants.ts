export type EmptyStateVariant = 'compact' | 'illustration' | 'error';

export type EmptyStateIllustration =
  | 'selection_plus'
  | 'symbol_info'
  | 'add_user'
  | 'landscape'
  | 'api'
  | 'api_plugin'
  | 'documents_empty'
  | 'cloud_access'
  | 'store_settings'
  | 'error_404';

export type IllustrationCategory =
  | 'compact'
  | 'landscape'
  | 'api'
  | 'clouds'
  | 'documents'
  | 'stores'
  | 'errors';

export interface IIllustrationInfo {
  displayName: string;
  path: string;
  category: IllustrationCategory;
  layoutVariant: EmptyStateVariant;
}

export const ILLUSTRATION_VARIANTS: Record<
  EmptyStateIllustration,
  IIllustrationInfo
> = {
  selection_plus: {
    displayName: 'Selection plus',
    path: 'illustrations/compact/selection-plus.svg',
    category: 'compact',
    layoutVariant: 'compact',
  },
  symbol_info: {
    displayName: 'Symbol info',
    path: 'illustrations/compact/symbol-info.svg',
    category: 'compact',
    layoutVariant: 'compact',
  },
  add_user: {
    displayName: 'Add user',
    path: 'illustrations/compact/add-user.svg',
    category: 'compact',
    layoutVariant: 'compact',
  },
  landscape: {
    displayName: 'Landscape',
    path: 'illustrations/landscape/landscape.svg',
    category: 'landscape',
    layoutVariant: 'illustration',
  },
  api: {
    displayName: 'API',
    path: 'illustrations/api/api.svg',
    category: 'api',
    layoutVariant: 'illustration',
  },
  api_plugin: {
    displayName: 'API plugin',
    path: 'illustrations/api/api-plugin.svg',
    category: 'api',
    layoutVariant: 'illustration',
  },
  documents_empty: {
    displayName: 'Documents empty',
    path: 'illustrations/documents/documents-empty.svg',
    category: 'documents',
    layoutVariant: 'illustration',
  },
  cloud_access: {
    displayName: 'Cloud access',
    path: 'illustrations/clouds/cloud-access.svg',
    category: 'clouds',
    layoutVariant: 'illustration',
  },
  store_settings: {
    displayName: 'Store settings',
    path: 'illustrations/stores/store-settings.svg',
    category: 'stores',
    layoutVariant: 'illustration',
  },
  error_404: {
    displayName: '404 error',
    path: 'illustrations/errors/error-404.svg',
    category: 'errors',
    layoutVariant: 'error',
  },
};

export const DEFAULT_ILLUSTRATION_BY_VARIANT: Record<
  EmptyStateVariant,
  EmptyStateIllustration
> = {
  compact: 'selection_plus',
  illustration: 'landscape',
  error: 'error_404',
};

export function getIllustrationsForVariant(
  variant: EmptyStateVariant
): EmptyStateIllustration[] {
  return (
    Object.entries(ILLUSTRATION_VARIANTS) as [
      EmptyStateIllustration,
      IIllustrationInfo,
    ][]
  )
    .filter(([, info]) => info.layoutVariant === variant)
    .map(([name]) => name);
}
