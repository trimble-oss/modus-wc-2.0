/**
 * Story-level classes and styles for tree-items with full-height end-slot
 * action areas inside the side-navigation stories. These are Storybook
 * utilities — not component code — and are scoped to Connect themes only.
 */

/** Apply to the modus-wc-tree-item to enable the full-height end-slot layout. */
export const SIDE_NAV_TREE_ITEM_END_ACTION_CLASS =
  'modus-wc-tree-item-end-action';

/** Apply to modus-wc-dropdown-menu in the end slot (dropdown variant). */
export const SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS =
  'modus-wc-tree-item-end-action-dropdown';

/** Apply to icons inside the end-slot button. */
export const SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS =
  'modus-wc-tree-item-end-action-icon';

/** Apply to the Data row start-icon flyout dropdown (collapsed side-nav). */
export const SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS = 'data-flyout-dropdown';

const CONNECT_THEME_IDS = new Set(['connect-light', 'connect-dark']);

/** Resolve Storybook `data-theme` from html or any themed ancestor. */
export const resolveConnectSideNavTheme = (): string | null => {
  if (typeof document === 'undefined') return null;

  const htmlTheme = document.documentElement.getAttribute('data-theme');
  if (htmlTheme && CONNECT_THEME_IDS.has(htmlTheme)) {
    return htmlTheme;
  }

  const themedAncestor = document.querySelector(
    '[data-theme="connect-light"], [data-theme="connect-dark"]'
  );
  return themedAncestor?.getAttribute('data-theme') ?? null;
};

/** True when Storybook `data-theme` is Connect light or dark. */
export const isConnectSideNavTheme = (theme?: string | null): boolean => {
  const resolved = theme ?? resolveConnectSideNavTheme();
  return resolved !== null && CONNECT_THEME_IDS.has(resolved);
};

/** Collapsed rail width — icon column plus caret column (WithTreeMenu / Connect). */
export const SIDE_NAV_COLLAPSED_MIN_WIDTH = '15rem';

export const SIDE_NAV_COLLAPSED_MIN_WIDTH_CLASS = `
min-width: ${SIDE_NAV_COLLAPSED_MIN_WIDTH} !important;
`;
/** Gap (px) between collapsed rail edge and Data flyout panel. */
export const SIDE_NAV_DATA_FLYOUT_MENU_GAP = 0;

/** Fallback menu-offset (px) for Data flyout; stories sync from rail width on open. */
export const SIDE_NAV_DATA_FLYOUT_MENU_OFFSET = 4;

/** Connect theme scope for side-navigation story overrides. */
export const CONNECT_SIDE_NAV_THEME_SELECTOR = `
[data-theme='connect-light'] modus-wc-side-navigation,
[data-theme='connect-dark'] modus-wc-side-navigation`;

/** Wrap story CSS so it applies only under Connect light/dark themes. */
export const wrapConnectSideNavStyles = (rules: string): string => `
${CONNECT_SIDE_NAV_THEME_SELECTOR} {
${rules}
}
`;

/** Connect light only — dark uses li-level active styling, not blue-light on the div. */
export const wrapConnectLightSideNavStyles = (rules: string): string => `
[data-theme='connect-light'] modus-wc-side-navigation {
${rules}
}
`;

/** Layout styles for tree-items with a modus-wc-dropdown-menu end-slot action. */
export const sideNavTreeItemEndActionDropdownStyles = wrapConnectSideNavStyles(`
  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} .modus-wc-menu-item-interactive {
    align-items: stretch;
    height: 52px;
    padding-block: 0;
    padding-inline-end: 0 !important;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} .modus-wc-menu-item-content {
    align-self: stretch;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} [slot='end'] {
    align-self: stretch;
    display: flex;
    padding-inline-start: 0;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} [slot='end'] modus-wc-dropdown-menu {
    align-self: stretch;
    height: 100%;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} [slot='end'] modus-wc-dropdown-menu .modus-wc-btn {
    height: 100%;
  }

  .${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS} .${SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS} .modus-wc-btn {
    align-items: center;
    display: flex;
    gap: 2px;
    height: 100%;
    min-height: 100%;
    border-radius: 0;
    background-color: transparent;
  }
`);

/** Styles for the Data row icon-anchored flyout dropdown in start slot. */
export const sideNavDataFlyoutDropdownStyles = wrapConnectSideNavStyles(`
  modus-wc-tree-item[value='data'] .${SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS} {
    modus-wc-button .modus-wc-btn.modus-wc-btn-borderless {
      background-color: transparent;
      border-radius: 0;
      box-shadow: none;
      color: var(--modus-wc-color-white);
      min-height: unset;
      padding: 0;

      &:hover,
      &:focus,
      &:focus-visible,
      &:active {
        background-color: transparent !important;
        box-shadow: none;
        color: var(--modus-wc-color-white) !important;
      }
    }

    > modus-wc-button modus-wc-icon .icon-font,
    > modus-wc-button modus-wc-icon i.modus-wc-icon {
      color: var(--modus-wc-color-white);
    }

    > modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:hover modus-wc-icon .icon-font,
    > modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:focus modus-wc-icon .icon-font,
    > modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:active modus-wc-icon .icon-font {
      color: var(--modus-wc-color-white) !important;
    }

    .menu-wrapper
      modus-wc-menu-item
      .modus-wc-menu-item
      button
      modus-wc-icon
      .icon-font,
    .menu-wrapper
      modus-wc-menu-item
      .modus-wc-menu-item
      button
      modus-wc-icon
      i.modus-wc-icon {
      color: var(--modus-wc-color-base-content);
    }

    .menu-wrapper
      modus-wc-menu-item
      .modus-wc-menu-item:hover
      button
      modus-wc-icon
      .icon-font,
    .menu-wrapper
      modus-wc-menu-item
      .modus-wc-menu-item:hover
      button
      modus-wc-icon
      i.modus-wc-icon,
    .menu-wrapper
      modus-wc-menu-item
      .modus-wc-menu-item.modus-wc-menu-item-active
      button
      modus-wc-icon
      .icon-font,
    .menu-wrapper
      modus-wc-menu-item
      .modus-wc-menu-item.modus-wc-menu-item-active
      button
      modus-wc-icon
      i.modus-wc-icon {
      color: var(--modus-wc-color-white);
    }
  }

  .${SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS} .modus-wc-btn.modus-wc-btn-disabled {
    background-color: transparent;
    border-radius: 0;
    color: var(--modus-wc-color-white);
    min-height: unset;
    padding: 0;
  }

  modus-wc-tree-item[value='data']
    .${SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS}
    .modus-wc-menu
    .modus-wc-menu-item-labels {
    display: block;
  }

  /* Hovering the open flyout panel — not the row icon; keep row neutral. */
  modus-wc-tree-item[value='data']
    > li.modus-wc-menu-item:not(.modus-wc-menu-item-active):has(
      .${SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS} .menu-wrapper:hover
    )
    > .modus-wc-menu-item-interactive {
    background: transparent !important;
  }
`);

/** Connect WithTreeMenu: tree-item hover, active, carets, and end-slot icons. */
export const sideNavConnectTreeItemStyles = wrapConnectSideNavStyles(`
  modus-wc-tree-menu .modus-wc-menu {
    background: transparent;
    color: var(--modus-wc-color-white);
  }

  modus-wc-tree-item {
    max-width: 100%;
  }

  modus-wc-tree-item > li.modus-wc-menu-item {
    color: var(--modus-wc-color-white);
  }

  /* Suppress component li:hover base-100 and DaisyUI .modus-wc-menu li>*:hover flash. */
  modus-wc-tree-menu .modus-wc-menu li.modus-wc-menu-item:hover,
  modus-wc-tree-item > li.modus-wc-menu-item:hover {
    background-color: transparent !important;
  }

  /* Direct row only — avoid matching nested submenu items via ancestor li. */
  modus-wc-tree-item > li.modus-wc-menu-item > .modus-wc-menu-item-interactive {
    background-color: transparent;

    /* Hover highlight only when cursor is NOT over the end/start slot content. */
    &:hover:not(:has([slot='end'] :hover)):not(
        :has([slot='start'] .menu-wrapper:hover)
      ) {
      background: var(--modus-wc-color-trimble-blue) !important;
      color: var(--modus-wc-color-white) !important;
    }

    &:focus {
      color: var(--modus-wc-color-white);
    }
  }

  modus-wc-tree-item
    > li.modus-wc-menu-item.modus-wc-menu-item-active
    > .modus-wc-menu-item-interactive {
    background: var(--modus-wc-color-blue-light);
    color: var(--modus-wc-color-white);
    font-weight: var(--modus-wc-font-weight-semibold);

    &:hover:not(:has([slot='end'] :hover)):not(
        :has([slot='start'] .menu-wrapper:hover)
      ) {
      background: var(--modus-wc-color-primary);
      color: var(--modus-wc-color-white);
    }
  }

  modus-wc-tree-item
    > li.modus-wc-menu-item.modus-wc-menu-item-active
    > .modus-wc-menu-item-interactive
    .modus-wc-menu-item-content
    .icon-font,
  modus-wc-tree-item
    > li.modus-wc-menu-item.modus-wc-menu-item-active
    > .modus-wc-menu-item-interactive
    .modus-wc-menu-item-content
    i.modus-wc-icon {
    color: var(--modus-wc-color-white);
  }

  modus-wc-tree-item > li.modus-wc-menu-item [slot='end'] modus-wc-button i.modus-wc-icon {
    color: var(--modus-wc-color-white);
  }

  modus-wc-tree-item
    > li.modus-wc-menu-item
    [slot='end']
    modus-wc-button:hover
    i.modus-wc-icon {
    color: var(--modus-wc-color-blue-light);
  }

  modus-wc-tree-item
    > li.modus-wc-menu-item
    > .modus-wc-menu-item-interactive.modus-wc-menu-dropdown-toggle::after {
    color: var(--modus-wc-color-white);
  }

  modus-wc-tree-item > li.modus-wc-menu-item:not(.modus-wc-menu-item-active) {
    color: var(--modus-wc-color-white);
  }

  modus-wc-tree-item
    > li.modus-wc-menu-item.modus-wc-menu-item-active
    > .modus-wc-menu-item-interactive {
    color: var(--modus-wc-color-white);
  }

  /* Parent row stays neutral when hovering an open submenu child. */
  modus-wc-tree-item > li.modus-wc-menu-item:has(modus-wc-tree-menu):hover {
    background-color: transparent;
  }

  /* End-slot click: neutralize DaisyUI's :active flash on the interactive div.
     Uses !important because DaisyUI's rule specificity can vary across themes.

     Non-active rows: div stays transparent (it never carries the background). */
  modus-wc-tree-item
    > li.modus-wc-menu-item:not(.modus-wc-menu-item-active):has([slot='end'] :active)
    > .modus-wc-menu-item-interactive {
    background-color: transparent !important;
    color: var(--modus-wc-color-white) !important;
  }

`);

/** Connect light: restore blue-light on active row div while end-slot is pressed. */
export const sideNavConnectLightTreeItemEndSlotActiveStyles =
  wrapConnectLightSideNavStyles(`
  modus-wc-tree-item
    > li.modus-wc-menu-item.modus-wc-menu-item-active:has([slot='end'] :active)
    > .modus-wc-menu-item-interactive {
    background: var(--modus-wc-color-blue-light) !important;
    color: var(--modus-wc-color-white) !important;
  }
`);

/** Connect collapsed rail: hide labels/end slots and icon/caret grid layout. */
export const sideNavConnectCollapsedRailStyles = wrapConnectSideNavStyles(`
  .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
    modus-wc-tree-item
    > li.modus-wc-menu-item
    > .modus-wc-menu-item-interactive {
    [slot='end'] {
      display: none;
    }
  }

  .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
    modus-wc-tree-item
    > li.modus-wc-menu-item
    > .modus-wc-menu-item-interactive
    > .modus-wc-menu-item-content
    > .modus-wc-menu-item-labels {
    display: none;
  }

  /* 1fr | icon | 1fr — icon centered; caret centered in the right half. */
  .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
    modus-wc-tree-item
    > li.modus-wc-menu-item
    > .modus-wc-menu-item-interactive {
    align-items: center;
    box-sizing: border-box;
    display: grid;
    grid-template-columns: 1fr auto 1fr;
    min-height: 3.25rem;
    padding-inline: var(--modus-wc-spacing-sm);
    width: 100%;
  }

  .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
    modus-wc-tree-item
    > li.modus-wc-menu-item
    > .modus-wc-menu-item-interactive
    > .modus-wc-menu-item-content {
    grid-column: 2;
    justify-content: center;
    justify-self: center;
    width: auto;
  }

  .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
    modus-wc-tree-item
    > li.modus-wc-menu-item
    > .modus-wc-menu-item-interactive.modus-wc-menu-dropdown-toggle::after {
    align-self: center;
    color: var(--modus-wc-color-white);
    display: block;
    grid-column: 3;
    height: 0.5rem;
    justify-self: center;
    line-height: 1;
    margin: 0;
    margin-block: 0;
    margin-top: 0;
    position: static;
    transform: rotate(45deg);
    transform-origin: center;
  }

  .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
    modus-wc-tree-item
    > li.modus-wc-menu-item
    > .modus-wc-menu-item-interactive
    > .modus-wc-menu-item-content
    [slot='start'] {
    align-items: center;
    display: flex;
    justify-content: center;
    padding-inline-end: 0;
    width: auto;
  }

  .modus-wc-side-navigation:not(.modus-wc-side-navigation-expanded)
    modus-wc-tree-item
    > li.modus-wc-menu-item
    > .modus-wc-menu-item-interactive
    > .modus-wc-menu-item-content
    [slot='start']
    modus-wc-dropdown-menu {
    align-items: center;
    display: flex;
    justify-content: center;
    width: auto;
  }
`);

/** Connect WithTreeMenu: submenu indent, active bar, Data row active styling. */
export const sideNavConnectWithTreeMenuStoryStyles = wrapConnectSideNavStyles(`
  modus-wc-tree-menu .modus-wc-menu :where(li ul) {
    margin-inline-start: 0;
    padding-inline-start: 0;
  }

  modus-wc-tree-menu .modus-wc-menu-dropdown .modus-wc-menu-item-content {
    padding-inline-start: 1.5rem;
  }

  .modus-wc-tree-item-end-action-dropdown
    li
    button
    .modus-wc-menu-item-content {
    padding-inline-start: 0;
  }

  modus-wc-tree-item > li.modus-wc-menu-item.modus-wc-menu-item-active {
    position: relative;
    overflow: visible;
  }

  modus-wc-tree-item > li.modus-wc-menu-item.modus-wc-menu-item-active::before {
    content: '';
    position: absolute;
    inset-block: 0;
    inset-inline-start: 0;
    width: 3px;
    background: white;
    z-index: 10;
  }

  modus-wc-tree-item[value='data']
    > li.modus-wc-menu-item.modus-wc-menu-item-active {
    background: transparent;
    box-shadow: none;
  }

  modus-wc-tree-item[value='data']
    > li.modus-wc-menu-item.modus-wc-menu-item-active::before {
    content: none;
  }

  modus-wc-tree-item[value='data']
    > li.modus-wc-menu-item.modus-wc-menu-item-active
    > .modus-wc-menu-item-interactive {
    box-shadow: inset 3px 0 0 0 var(--modus-wc-color-white);
  }
`);

/** Connect-only: tree-item block layout and flyout panel colors in WithTreeMenu. */
export const sideNavConnectStoryLayoutStyles = wrapConnectSideNavStyles(`
  modus-wc-tree-item {
    display: block;
  }

  modus-wc-dropdown-menu.modus-wc-dropdown-menu {
    background-color: transparent;

    modus-wc-menu .modus-wc-menu {
      background-color: var(--modus-wc-color-base-page);

      modus-wc-menu-item .modus-wc-menu-item {
        color: var(--modus-wc-color-base-content);

        button {
          color: var(--modus-wc-color-base-content);
        }

        &:hover button,
        button:hover {
          background-color: var(--modus-wc-color-trimble-blue);
          color: var(--modus-wc-color-white);
        }

        &.modus-wc-menu-item-active button,
        &.modus-wc-menu-item-active {
          background-color: var(--modus-wc-color-trimble-blue);
          color: var(--modus-wc-color-white);
        }

        &:hover button .icon-font,
        &:hover button i.modus-wc-icon,
        button:hover .icon-font,
        button:hover i.modus-wc-icon,
        &.modus-wc-menu-item-active button .icon-font,
        &.modus-wc-menu-item-active button i.modus-wc-icon {
          color: var(--modus-wc-color-white);
        }
      }
    }
  }
`);
