/** Latest Connect icon-font version available on resources.connect.trimble.com. */
export const CONNECT_ICON_FONT_VERSION = '1.15.0';

export const CONNECT_ICON_FONT_URL = `https://resources.connect.trimble.com/${CONNECT_ICON_FONT_VERSION}/fonts/icon-font.min.css`;

/** Build custom-class for Connect icon-font icons used with modus-wc-icon. */
export const connectIconClass = (
  iconClass: string,
  extraClasses = '',
  sizeClass: 'i16' | '' = ''
): string =>
  ['icon-font', iconClass, sizeClass, extraClasses].filter(Boolean).join(' ');

export const CONNECT_ICONS = {
  allProjects: 'tc-icon-arrow-line-back',
  data: 'tc-icon-layers',
  explorer: 'tc-icon-explorer',
  folder: 'tc-icon-folder',
  chevronRight: 'tc-icon-chevron-right',
  views: 'tc-icon-views',
  releases: 'tc-icon-release',
  activity: 'tc-icon-activity',
  bcfTopics: 'tc-icon-bcf',
  fieldData: 'tc-icon-fixed-point',
} as const;
