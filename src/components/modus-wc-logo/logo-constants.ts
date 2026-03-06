/**
 * Available logo names for the Modus Logo component
 */
export type LogoName =
  | 'trimble'
  | 'siteworks'
  | 'earthworks'
  | 'financials'
  | 'worksmanager'
  | 'connect'
  | 'unity_construct'
  | 'trade_servicelive'
  | 'buildable'
  | 'livecount'
  | 'supplier_xchange'
  | 'app_xchange'
  | 'trimble_unity'
  | 'sketchup'
  | 'pc_miler'
  | 'copilot'
  | 'trimble_pay'
  | 'projectsight'
  | 'demand_planning'
  // Viewpoint Products
  | 'viewpoint'
  | 'viewpoint_analytics'
  | 'viewpoint_epayments'
  | 'viewpoint_estimating'
  | 'viewpoint_field_management'
  | 'viewpoint_field_time'
  | 'viewpoint_financial_controls'
  | 'viewpoint_hr_management'
  | 'viewpoint_jobpac_connect'
  | 'viewpoint_procontractor'
  | 'viewpoint_spectrum'
  | 'viewpoint_team'
  | 'viewpoint_vista'
  | 'viewpoint_spectrum_service_tech'
  | 'viewpoint_for_projects'
  | 'viewpoint_vista_field_service'
  | 'viewpoint_field_view';

/**
 * Logo information interface
 */
export interface ILogoInfo {
  /** Display name for the logo */
  displayName: string;
  /** Path to the logo SVG asset */
  path: string;
  /** Path to the emblem SVG asset (icon only) */
  emblemPath?: string;
  /** Category of the logo */
  category: 'trimble' | 'viewpoint';
}

/**
 * Logo variants mapping
 */
export const LOGO_VARIANTS: Record<LogoName, ILogoInfo> = {
  // Trimble Products
  trimble: {
    displayName: 'Trimble',
    path: 'logos/trimble/trimble.svg',
    emblemPath: 'logos/emblems/trimble-emblem.svg',
    category: 'trimble',
  },
  siteworks: {
    displayName: 'Trimble Siteworks',
    path: 'logos/trimble/siteworks.svg',
    emblemPath: 'logos/emblems/siteworks-emblem.svg',
    category: 'trimble',
  },
  earthworks: {
    displayName: 'Trimble Earthworks',
    path: 'logos/trimble/earthworks.svg',
    emblemPath: 'logos/emblems/earthworks-emblem.svg',
    category: 'trimble',
  },
  financials: {
    displayName: 'Trimble Financials',
    path: 'logos/trimble/financials.svg',
    emblemPath: 'logos/emblems/financials-emblem.svg',
    category: 'trimble',
  },
  worksmanager: {
    displayName: 'Trimble WorksManager',
    path: 'logos/trimble/worksmanager.svg',
    emblemPath: 'logos/emblems/worksmanager-emblem.svg',
    category: 'trimble',
  },
  connect: {
    displayName: 'Trimble Connect',
    path: 'logos/trimble/connect.svg',
    emblemPath: 'logos/emblems/connect-emblem.svg',
    category: 'trimble',
  },
  unity_construct: {
    displayName: 'Trimble Unity Construct',
    path: 'logos/trimble/unity-construct.svg',
    emblemPath: 'logos/emblems/unity-construct-emblem.svg',
    category: 'trimble',
  },
  trade_servicelive: {
    displayName: 'Trade ServiceLive',
    path: 'logos/trimble/trade-servicelive.svg',
    emblemPath: 'logos/emblems/trade-servicelive-emblem.svg',
    category: 'trimble',
  },
  buildable: {
    displayName: 'Buildable',
    path: 'logos/trimble/buildable.svg',
    emblemPath: 'logos/emblems/buildable-emblem.svg',
    category: 'trimble',
  },
  livecount: {
    displayName: 'LiveCount',
    path: 'logos/trimble/livecount.svg',
    emblemPath: 'logos/emblems/livecount-emblem.svg',
    category: 'trimble',
  },
  supplier_xchange: {
    displayName: 'Supplier Xchange',
    path: 'logos/trimble/supplier-xchange.svg',
    emblemPath: 'logos/emblems/supplier-xchange-emblem.svg',
    category: 'trimble',
  },
  app_xchange: {
    displayName: 'App Xchange',
    path: 'logos/trimble/app-xchange.svg',
    emblemPath: 'logos/emblems/app-xchange-emblem.svg',
    category: 'trimble',
  },
  trimble_unity: {
    displayName: 'Trimble Unity',
    path: 'logos/trimble/trimble-unity.svg',
    emblemPath: 'logos/emblems/trimble-unity-emblem.svg',
    category: 'trimble',
  },
  sketchup: {
    displayName: 'SketchUp',
    path: 'logos/trimble/sketchup.svg',
    emblemPath: 'logos/emblems/sketchup-emblem.svg',
    category: 'trimble',
  },
  pc_miler: {
    displayName: 'PC Miler',
    path: 'logos/trimble/pc-miler.svg',
    emblemPath: 'logos/emblems/pc-miler-emblem.svg',
    category: 'trimble',
  },
  copilot: {
    displayName: 'CoPilot',
    path: 'logos/trimble/copilot.svg',
    emblemPath: 'logos/emblems/copilot-emblem.svg',
    category: 'trimble',
  },
  trimble_pay: {
    displayName: 'Trimble Pay',
    path: 'logos/trimble/trimble-pay.svg',
    emblemPath: 'logos/emblems/trimble-pay-emblem.svg',
    category: 'trimble',
  },
  projectsight: {
    displayName: 'ProjectSight',
    path: 'logos/trimble/projectsight.svg',
    emblemPath: 'logos/emblems/projectsight-emblem.svg',
    category: 'trimble',
  },
  demand_planning: {
    displayName: 'Demand Planning',
    path: 'logos/trimble/demand-planning.svg',
    emblemPath: 'logos/emblems/demand-planning-emblem.svg',
    category: 'trimble',
  },

  // Viewpoint Products
  viewpoint: {
    displayName: 'Viewpoint',
    path: 'logos/viewpoint/viewpoint.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_analytics: {
    displayName: 'Viewpoint Analytics',
    path: 'logos/viewpoint/viewpoint-analytics.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_epayments: {
    displayName: 'Viewpoint ePayments',
    path: 'logos/viewpoint/viewpoint-epayments.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_estimating: {
    displayName: 'Viewpoint Estimating',
    path: 'logos/viewpoint/viewpoint-estimating.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_field_management: {
    displayName: 'Viewpoint Field Management',
    path: 'logos/viewpoint/viewpoint-field-management.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_field_time: {
    displayName: 'Viewpoint Field Time',
    path: 'logos/viewpoint/viewpoint-field-time.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_financial_controls: {
    displayName: 'Viewpoint Financial Controls',
    path: 'logos/viewpoint/viewpoint-financial-controls.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_hr_management: {
    displayName: 'Viewpoint HR Management',
    path: 'logos/viewpoint/viewpoint-hr-management.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_jobpac_connect: {
    displayName: 'Viewpoint Jobpac Connect',
    path: 'logos/viewpoint/viewpoint-jobpac-connect.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_procontractor: {
    displayName: 'Viewpoint ProContractor',
    path: 'logos/viewpoint/viewpoint-procontractor.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_spectrum: {
    displayName: 'Viewpoint Spectrum',
    path: 'logos/viewpoint/viewpoint-spectrum.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_team: {
    displayName: 'Viewpoint Team',
    path: 'logos/viewpoint/viewpoint-team.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_vista: {
    displayName: 'Viewpoint Vista',
    path: 'logos/viewpoint/viewpoint-vista.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_spectrum_service_tech: {
    displayName: 'Viewpoint Spectrum Service Tech',
    path: 'logos/viewpoint/viewpoint-spectrum-service-tech.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_for_projects: {
    displayName: 'Viewpoint For Projects',
    path: 'logos/viewpoint/viewpoint-for-projects.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_vista_field_service: {
    displayName: 'Viewpoint Vista Field Service',
    path: 'logos/viewpoint/viewpoint-vista-field-service.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
  viewpoint_field_view: {
    displayName: 'Viewpoint Field View',
    path: 'logos/viewpoint/viewpoint-field-view.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    category: 'viewpoint',
  },
};

/**
 * Get all available logo names
 */
export function getAvailableLogos(): LogoName[] {
  return Object.keys(LOGO_VARIANTS) as LogoName[];
}

/**
 * Get logos by category
 */
export function getLogosByCategory(
  category: 'trimble' | 'viewpoint'
): LogoName[] {
  return Object.entries(LOGO_VARIANTS)
    .filter(([, info]) => info.category === category)
    .map(([name]) => name as LogoName);
}
