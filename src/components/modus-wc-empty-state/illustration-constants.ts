export type EmptyStateVariant = 'compact' | 'illustration' | 'error';

export type EmptyStateIllustration =
  | 'selection_plus'
  | 'symbol_info'
  | 'add_user'
  | 'landscape'
  | 'documents_empty'
  | 'cloud_access'
  | 'store_settings'
  | 'error_404'
  | 'page_not_found';

export type IllustrationCategory =
  | 'compact'
  | 'landscape'
  | 'clouds'
  | 'documents'
  | 'stores'
  | 'errors';

export interface IIllustrationInfo {
  displayName: string;
  path: string;
  category: IllustrationCategory;
  layoutVariants: EmptyStateVariant[];
  layerPaths?: string[];
}

export const ILLUSTRATION_VARIANTS: Record<
  EmptyStateIllustration,
  IIllustrationInfo
> = {
  selection_plus: {
    displayName: 'Selection plus',
    path: 'illustrations/compact/selection-plus.svg',
    category: 'compact',
    layoutVariants: ['compact'],
  },
  symbol_info: {
    displayName: 'Symbol info',
    path: 'illustrations/compact/symbol-info.svg',
    category: 'compact',
    layoutVariants: ['compact'],
  },
  add_user: {
    displayName: 'Add user',
    path: 'illustrations/compact/add-user.svg',
    category: 'compact',
    layoutVariants: ['compact'],
  },
  landscape: {
    displayName: 'Landscape',
    path: 'illustrations/landscape/landscape.svg',
    category: 'landscape',
    layoutVariants: ['illustration'],
  },
  documents_empty: {
    displayName: 'Documents empty',
    path: 'illustrations/documents/documents-empty.svg',
    category: 'documents',
    layoutVariants: ['illustration'],
  },
  cloud_access: {
    displayName: 'Cloud access',
    path: 'illustrations/clouds/cloud-access.svg',
    category: 'clouds',
    layoutVariants: ['illustration'],
  },
  store_settings: {
    displayName: 'Store settings',
    path: 'illustrations/stores/store-settings.svg',
    category: 'stores',
    layoutVariants: ['illustration'],
  },
  error_404: {
    displayName: '404 error',
    path: 'illustrations/errors/error-404.svg',
    category: 'errors',
    layoutVariants: ['illustration'],
  },
  page_not_found: {
    displayName: 'Page not found',
    path: 'illustrations/errors/page-not-found.svg',
    category: 'errors',
    layoutVariants: ['error'],
    layerPaths: [
      'illustrations/errors/page-not-found.svg',
      'illustrations/errors/page-not-found-magnifying-glass.svg',
    ],
  },
};

export const DEFAULT_ILLUSTRATION_BY_VARIANT: Record<
  EmptyStateVariant,
  EmptyStateIllustration
> = {
  compact: 'selection_plus',
  illustration: 'landscape',
  error: 'page_not_found',
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
    .filter(([, info]) => info.layoutVariants.includes(variant))
    .map(([name]) => name);
}
