/**
 * Available logo names for the Modus Logo component
 */
export type LogoName =
  | 'trimble'
  | 'siteworks'
  | 'earthworks'
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
  /** Path to the logo asset (light theme) */
  path: string;
  /** Path to the dark theme logo */
  pathDark?: string;
  /** Path to the emblem version (icon only, light theme) */
  emblemPath?: string;
  /** Path to the dark theme emblem */
  emblemPathDark?: string;
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
    pathDark: 'logos/trimble/trimble-dark.svg',
    emblemPath: 'logos/emblems/trimble-emblem.svg',
    emblemPathDark: 'logos/emblems/trimble-emblem-dark.svg',
    category: 'trimble',
  },
  siteworks: {
    displayName: 'Trimble Siteworks',
    path: 'logos/trimble/siteworks.svg',
    pathDark: 'logos/trimble/siteworks-dark.svg',
    emblemPath: 'logos/emblems/siteworks-emblem.svg',
    emblemPathDark: 'logos/emblems/siteworks-emblem-dark.svg',
    category: 'trimble',
  },
  earthworks: {
    displayName: 'Trimble Earthworks',
    path: 'logos/trimble/earthworks.svg',
    pathDark: 'logos/trimble/earthworks-dark.svg',
    emblemPath: 'logos/emblems/earthworks-emblem.svg',
    emblemPathDark: 'logos/emblems/earthworks-emblem-dark.svg',
    category: 'trimble',
  },
  worksmanager: {
    displayName: 'Trimble WorksManager',
    path: 'logos/trimble/worksmanager.svg',
    pathDark: 'logos/trimble/worksmanager-dark.svg',
    emblemPath: 'logos/emblems/worksmanager-emblem.svg',
    emblemPathDark: 'logos/emblems/worksmanager-emblem-dark.svg',
    category: 'trimble',
  },
  connect: {
    displayName: 'Trimble Connect',
    path: 'logos/trimble/connect.svg',
    pathDark: 'logos/trimble/connect-dark.svg',
    emblemPath: 'logos/emblems/connect-emblem.svg',
    emblemPathDark: 'logos/emblems/connect-emblem-dark.svg',
    category: 'trimble',
  },
  unity_construct: {
    displayName: 'Trimble Unity Construct',
    path: 'logos/trimble/unity-construct.svg',
    pathDark: 'logos/trimble/unity-construct-dark.svg',
    emblemPath: 'logos/emblems/unity-construct-emblem.svg',
    emblemPathDark: 'logos/emblems/unity-construct-emblem-dark.svg',
    category: 'trimble',
  },
  trade_servicelive: {
    displayName: 'Trade ServiceAlive',
    path: 'logos/trimble/trade-servicelive.svg',
    pathDark: 'logos/trimble/trade-servicelive-dark.svg',
    emblemPath: 'logos/emblems/trade-servicelive-emblem.svg',
    emblemPathDark: 'logos/emblems/trade-servicelive-emblem-dark.svg',
    category: 'trimble',
  },
  buildable: {
    displayName: 'Buildable',
    path: 'logos/trimble/buildable.svg',
    pathDark: 'logos/trimble/buildable-dark.svg',
    emblemPath: 'logos/emblems/buildable-emblem.svg',
    emblemPathDark: 'logos/emblems/buildable-emblem-dark.svg',
    category: 'trimble',
  },
  livecount: {
    displayName: 'LiveCount',
    path: 'logos/trimble/livecount.svg',
    pathDark: 'logos/trimble/livecount-dark.svg',
    emblemPath: 'logos/emblems/livecount-emblem.svg',
    emblemPathDark: 'logos/emblems/livecount-emblem-dark.svg',
    category: 'trimble',
  },
  supplier_xchange: {
    displayName: 'Supplier Xchange',
    path: 'logos/trimble/supplier-xchange.svg',
    pathDark: 'logos/trimble/supplier-xchange-dark.svg',
    emblemPath: 'logos/emblems/supplier-xchange-emblem.svg',
    emblemPathDark: 'logos/emblems/supplier-xchange-emblem-dark.svg',
    category: 'trimble',
  },
  app_xchange: {
    displayName: 'App Xchange',
    path: 'logos/trimble/app-xchange.svg',
    pathDark: 'logos/trimble/app-xchange-dark.svg',
    emblemPath: 'logos/emblems/app-xchange-emblem.svg',
    emblemPathDark: 'logos/emblems/app-xchange-emblem-dark.svg',
    category: 'trimble',
  },
  trimble_unity: {
    displayName: 'Trimble Unity',
    path: 'logos/trimble/trimble-unity.svg',
    pathDark: 'logos/trimble/trimble-unity-dark.svg',
    emblemPath: 'logos/emblems/trimble-unity-emblem.svg',
    emblemPathDark: 'logos/emblems/trimble-unity-emblem-dark.svg',
    category: 'trimble',
  },
  sketchup: {
    displayName: 'SketchUp',
    path: 'logos/trimble/sketchup.svg',
    pathDark: 'logos/trimble/sketchup-dark.svg',
    emblemPath: 'logos/emblems/sketchup-emblem.svg',
    emblemPathDark: 'logos/emblems/sketchup-emblem-dark.svg',
    category: 'trimble',
  },
  pc_miler: {
    displayName: 'PC Miler',
    path: 'logos/trimble/pc-miler.svg',
    pathDark: 'logos/trimble/pc-miler-dark.svg',
    emblemPath: 'logos/emblems/pc-miler-emblem.svg',
    emblemPathDark: 'logos/emblems/pc-miler-emblem-dark.svg',
    category: 'trimble',
  },
  copilot: {
    displayName: 'CoPilot',
    path: 'logos/trimble/copilot.svg',
    pathDark: 'logos/trimble/copilot-dark.svg',
    emblemPath: 'logos/emblems/copilot-emblem.svg',
    emblemPathDark: 'logos/emblems/copilot-emblem-dark.svg',
    category: 'trimble',
  },
  trimble_pay: {
    displayName: 'Trimble Pay',
    path: 'logos/trimble/trimble-pay.svg',
    pathDark: 'logos/trimble/trimble-pay-dark.svg',
    emblemPath: 'logos/emblems/trimble-pay-emblem.svg',
    emblemPathDark: 'logos/emblems/trimble-pay-emblem-dark.svg',
    category: 'trimble',
  },
  projectsight: {
    displayName: 'ProjectSight',
    path: 'logos/trimble/projectsight.svg',
    pathDark: 'logos/trimble/projectsight-dark.svg',
    emblemPath: 'logos/emblems/projectsight-emblem.svg',
    emblemPathDark: 'logos/emblems/projectsight-emblem-dark.svg',
    category: 'trimble',
  },
  demand_planning: {
    displayName: 'Demand Planning',
    path: 'logos/trimble/demand-planning.svg',
    pathDark: 'logos/trimble/demand-planning-dark.svg',
    emblemPath: 'logos/emblems/demand-planning-emblem.svg',
    emblemPathDark: 'logos/emblems/demand-planning-emblem-dark.svg',
    category: 'trimble',
  },

  // Viewpoint Products
  viewpoint: {
    displayName: 'Viewpoint',
    path: 'logos/viewpoint/viewpoint.svg',
    pathDark: 'logos/viewpoint/viewpoint-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_analytics: {
    displayName: 'Viewpoint Analytics',
    path: 'logos/viewpoint/viewpoint-analytics.svg',
    pathDark: 'logos/viewpoint/viewpoint-analytics-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_epayments: {
    displayName: 'Viewpoint ePayments',
    path: 'logos/viewpoint/viewpoint-epayments.svg',
    pathDark: 'logos/viewpoint/viewpoint-epayments-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_estimating: {
    displayName: 'Viewpoint Estimating',
    path: 'logos/viewpoint/viewpoint-estimating.svg',
    pathDark: 'logos/viewpoint/viewpoint-estimating-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_field_management: {
    displayName: 'Viewpoint Field Management',
    path: 'logos/viewpoint/viewpoint-field-management.svg',
    pathDark: 'logos/viewpoint/viewpoint-field-management-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_field_time: {
    displayName: 'Viewpoint Field Time',
    path: 'logos/viewpoint/viewpoint-field-time.svg',
    pathDark: 'logos/viewpoint/viewpoint-field-time-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_financial_controls: {
    displayName: 'Viewpoint Financial Controls',
    path: 'logos/viewpoint/viewpoint-financial-controls.svg',
    pathDark: 'logos/viewpoint/viewpoint-financial-controls-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_hr_management: {
    displayName: 'Viewpoint HR Management',
    path: 'logos/viewpoint/viewpoint-hr-management.svg',
    pathDark: 'logos/viewpoint/viewpoint-hr-management-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_jobpac_connect: {
    displayName: 'Viewpoint Jobpac Connect',
    path: 'logos/viewpoint/viewpoint-jobpac-connect.svg',
    pathDark: 'logos/viewpoint/viewpoint-jobpac-connect-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_procontractor: {
    displayName: 'Viewpoint ProContractor',
    path: 'logos/viewpoint/viewpoint-procontractor.svg',
    pathDark: 'logos/viewpoint/viewpoint-procontractor-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_spectrum: {
    displayName: 'Viewpoint Spectrum',
    path: 'logos/viewpoint/viewpoint-spectrum.svg',
    pathDark: 'logos/viewpoint/viewpoint-spectrum-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_team: {
    displayName: 'Viewpoint Team',
    path: 'logos/viewpoint/viewpoint-team.svg',
    pathDark: 'logos/viewpoint/viewpoint-team-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_vista: {
    displayName: 'Viewpoint Vista',
    path: 'logos/viewpoint/viewpoint-vista.svg',
    pathDark: 'logos/viewpoint/viewpoint-vista-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_spectrum_service_tech: {
    displayName: 'Viewpoint Spectrum Service Tech',
    path: 'logos/viewpoint/viewpoint-spectrum-service-tech.svg',
    pathDark: 'logos/viewpoint/viewpoint-spectrum-service-tech-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_for_projects: {
    displayName: 'Viewpoint For Projects',
    path: 'logos/viewpoint/viewpoint-for-projects.svg',
    pathDark: 'logos/viewpoint/viewpoint-for-projects-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_vista_field_service: {
    displayName: 'Viewpoint Vista Field Service',
    path: 'logos/viewpoint/viewpoint-vista-field-service.svg',
    pathDark: 'logos/viewpoint/viewpoint-vista-field-service-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
    category: 'viewpoint',
  },
  viewpoint_field_view: {
    displayName: 'Viewpoint Field View',
    path: 'logos/viewpoint/viewpoint-field-view.svg',
    pathDark: 'logos/viewpoint/viewpoint-field-view-dark.svg',
    emblemPath: 'logos/emblems/viewpoint-emblem.svg',
    emblemPathDark: 'logos/emblems/viewpoint-emblem-dark.svg',
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
