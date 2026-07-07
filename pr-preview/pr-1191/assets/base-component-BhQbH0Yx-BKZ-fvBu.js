const w=`/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
[data-theme=modus-classic-light] modus-wc-accordion modus-wc-collapse:first-child .modus-wc-collapse,
[data-theme=modus-classic-dark] modus-wc-accordion modus-wc-collapse:first-child .modus-wc-collapse {
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
}
[data-theme=modus-classic-light] modus-wc-accordion modus-wc-collapse:not(:first-child):not(:last-child) .modus-wc-collapse,
[data-theme=modus-classic-dark] modus-wc-accordion modus-wc-collapse:not(:first-child):not(:last-child) .modus-wc-collapse {
  border-radius: 0;
}
[data-theme=modus-classic-light] modus-wc-accordion modus-wc-collapse:last-child .modus-wc-collapse,
[data-theme=modus-classic-dark] modus-wc-accordion modus-wc-collapse:last-child .modus-wc-collapse {
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

[data-theme=modus-classic-light] modus-wc-accordion .modus-wc-collapse {
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-gray-2);
}

[data-theme=modus-classic-dark] modus-wc-accordion .modus-wc-collapse {
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-gray-8);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-alert .modus-wc-alert {
  align-content: center;
  align-items: center;
  backdrop-filter: blur(var(--modus-wc-spacing-lg));
  background-color: var(--modus-wc-color-base-page);
  border-color: var(--modus-wc-color-base-200);
  border-width: var(--alert-border-width);
  border-left-width: var(--alert-border-left-width);
  border-radius: var(--alert-border-radius);
  color: var(--modus-wc-color-base-content);
  display: flex;
  text-align: start;
}
modus-wc-alert .modus-wc-alert .modus-wc-alert-content {
  flex: auto;
}
modus-wc-alert .modus-wc-alert .title {
  font-size: var(--modus-wc-font-size-md);
  font-weight: var(--modus-wc-font-weight-bold);
}
modus-wc-alert .modus-wc-alert .description {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-alert .modus-wc-alert.modus-wc-alert-info {
  background-color: var(--modus-wc-color-blue-pale);
  border-color: var(--modus-wc-color-info-blue);
  color: var(--modus-wc-color-gray-10);
}
modus-wc-alert .modus-wc-alert.modus-wc-alert-error {
  background-color: #fce0e2;
  border-color: var(--modus-wc-color-red-dark);
  color: var(--modus-wc-color-gray-10);
}
@supports (background-color: color-mix(in sRGB, red 50%, blue)) {
  modus-wc-alert .modus-wc-alert.modus-wc-alert-error {
    background-color: color-mix(in sRGB, var(--modus-wc-color-red-pale) 80%, var(--modus-wc-color-gray-light));
  }
}
modus-wc-alert .modus-wc-alert.modus-wc-alert-success {
  background-color: #e6efd9;
  border-color: var(--modus-wc-color-green-dark);
  color: var(--modus-wc-color-gray-10);
}
@supports (background-color: color-mix(in sRGB, red 50%, blue)) {
  modus-wc-alert .modus-wc-alert.modus-wc-alert-success {
    background-color: color-mix(in sRGB, var(--modus-wc-color-success-pale) 80%, var(--modus-wc-color-gray-light));
  }
}
modus-wc-alert .modus-wc-alert.modus-wc-alert-warning {
  background-color: #f9f0e8;
  border-color: var(--modus-wc-color-yellow-dark);
  color: var(--modus-wc-color-black);
}
@supports (background-color: color-mix(in sRGB, red 50%, blue)) {
  modus-wc-alert .modus-wc-alert.modus-wc-alert-warning {
    background-color: color-mix(in sRGB, var(--modus-wc-color-yellow-pale) 60%, var(--modus-wc-color-gray-light));
  }
}

[data-theme=modus-classic-light] modus-wc-alert .modus-wc-alert .modus-wc-alert-icon {
  color: var(--modus-wc-color-gray-5);
}
[data-theme=modus-classic-light] modus-wc-alert .modus-wc-alert.modus-wc-alert-info .modus-wc-alert-icon {
  color: var(--modus-wc-color-info-blue);
}
[data-theme=modus-classic-light] modus-wc-alert .modus-wc-alert.modus-wc-alert-error .modus-wc-alert-icon {
  color: var(--modus-wc-color-red-dark);
}
[data-theme=modus-classic-light] modus-wc-alert .modus-wc-alert.modus-wc-alert-success .modus-wc-alert-icon {
  color: var(--modus-wc-color-green-dark);
}
[data-theme=modus-classic-light] modus-wc-alert .modus-wc-alert.modus-wc-alert-warning .modus-wc-alert-icon {
  color: var(--modus-wc-color-yellow-dark);
}

[data-theme=modus-classic-light] modus-wc-alert .modus-wc-alert,
[data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert {
  border-left-width: 12px;
  border-radius: var(--modus-wc-border-radius-md);
  gap: var(--modus-wc-spacing-sm);
  min-height: 56px;
  padding-bottom: var(--modus-wc-spacing-sm);
  padding-top: var(--modus-wc-spacing-sm);
}

[data-theme=connect-dark] modus-wc-alert .modus-wc-alert,
[data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert,
[data-theme=modus-modern-dark] modus-wc-alert .modus-wc-alert {
  background-color: var(--modus-wc-color-gray-10);
  border-color: var(--modus-wc-color-gray-9);
  color: var(--modus-wc-color-gray-light);
}
[data-theme=connect-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-info,
[data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-info,
[data-theme=modus-modern-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-info {
  background-color: rgba(1, 154, 235, 0.3);
  border-color: var(--modus-wc-color-highlight-blue);
}
@supports (background-color: color-mix(in sRGB, red 50%, blue)) {
  [data-theme=connect-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-info,
  [data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-info,
  [data-theme=modus-modern-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-info {
    background-color: color-mix(in sRGB, var(--modus-wc-color-highlight-blue) 30%, transparent);
  }
}
[data-theme=connect-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-error,
[data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-error,
[data-theme=modus-modern-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-error {
  background-color: rgba(218, 33, 44, 0.5);
  border-color: var(--modus-wc-color-red-light);
}
@supports (background-color: color-mix(in sRGB, red 50%, blue)) {
  [data-theme=connect-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-error,
  [data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-error,
  [data-theme=modus-modern-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-error {
    background-color: color-mix(in sRGB, var(--modus-wc-color-red) 50%, transparent);
  }
}
[data-theme=connect-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-success,
[data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-success,
[data-theme=modus-modern-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-success {
  background-color: rgba(30, 138, 68, 0.5);
  border-color: var(--modus-wc-color-green-light);
}
@supports (background-color: color-mix(in sRGB, red 50%, blue)) {
  [data-theme=connect-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-success,
  [data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-success,
  [data-theme=modus-modern-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-success {
    background-color: color-mix(in sRGB, var(--modus-wc-color-green) 50%, transparent);
  }
}
[data-theme=connect-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-warning,
[data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-warning,
[data-theme=modus-modern-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-warning {
  background-color: rgba(251, 173, 38, 0.5);
  border-color: var(--modus-wc-color-yellow-light);
}
@supports (background-color: color-mix(in sRGB, red 50%, blue)) {
  [data-theme=connect-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-warning,
  [data-theme=modus-classic-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-warning,
  [data-theme=modus-modern-dark] modus-wc-alert .modus-wc-alert.modus-wc-alert-warning {
    background-color: color-mix(in sRGB, var(--modus-wc-color-yellow) 50%, transparent);
  }
}
modus-wc-app-menu.modus-wc-app-menu {
  box-sizing: border-box;
  display: block;
  min-width: 0;
  text-align: start;
  width: fit-content;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -4px rgba(0, 0, 0, 0.1);
  gap: var(--modus-wc-spacing-lg);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel [slot=body] {
  display: flex;
  flex-direction: column;
  gap: var(--modus-wc-spacing-lg);
  overflow-y: auto;
  padding: var(--modus-wc-spacing-lg);
  padding-inline-end: 0;
  scrollbar-gutter: stable;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-header {
  align-content: center;
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-wrap: wrap;
  gap: var(--modus-wc-spacing-sm);
  min-height: var(--modus-wc-size-sm);
  padding: 0 var(--modus-wc-spacing-lg);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-header .modus-wc-app-menu-header-title {
  align-content: flex-start;
  align-items: flex-start;
  display: flex;
  flex: 1 0 0;
  flex-wrap: wrap;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-header .modus-wc-app-menu-header-end-content {
  align-items: center;
  display: flex;
  gap: var(--modus-wc-spacing-sm);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-menu {
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-lg);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items {
  padding: 0 var(--modus-wc-spacing-xs);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items li.modus-wc-menu-item-active,
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button:active {
  background-color: transparent;
  color: inherit;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items {
  /* Keyboard focus lives on \`.modus-wc-app-menu-item-row\` (the row owns the tab
     stop and key handling). The inner menu-item paints its hover
     background on top of any outline placed on the row, so we paint
     the focus outline on the inner menu-item element instead. The
     second selector overrides the global menu-item hover rule
     (\`outline: none\`) so the ring stays visible while hovering. */
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row:focus-visible {
  outline: none;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row:focus-visible modus-wc-menu-item .modus-wc-menu-item,
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row:focus-visible modus-wc-menu-item .modus-wc-menu-item:hover {
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: -2px;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row {
  align-items: center;
  display: flex;
  margin-inline: calc(-1 * var(--modus-wc-spacing-xs));
  max-width: 256px;
  position: relative;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row .modus-wc-app-menu-drag-icon {
  color: var(--modus-wc-color-base-content);
  position: absolute;
  transform: translateX(-10%);
  z-index: 1;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row > modus-wc-menu-item {
  flex: 1;
  min-width: 0;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row.modus-wc-app-menu-draggable-item {
  cursor: grab;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row.modus-wc-app-menu-draggable-item .modus-wc-app-menu-drag-icon {
  cursor: grab;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row.modus-wc-app-menu-draggable-item {
  /* Row is draggable; inner menu button would otherwise use pointer/default and shrink the grab hit visually. */
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row.modus-wc-app-menu-draggable-item modus-wc-menu-item .modus-wc-menu-item button,
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row.modus-wc-app-menu-draggable-item modus-wc-menu-item .modus-wc-menu-item button .modus-wc-menu-item-content,
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row.modus-wc-app-menu-draggable-item modus-wc-menu-item .modus-wc-menu-item button .modus-wc-menu-item-content * {
  cursor: grab;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row.modus-wc-app-menu-draggable-item modus-wc-menu-item .modus-wc-menu-item button:active,
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row.modus-wc-app-menu-draggable-item modus-wc-menu-item .modus-wc-menu-item button:active .modus-wc-menu-item-content,
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-app-menu-item-row.modus-wc-app-menu-draggable-item modus-wc-menu-item .modus-wc-menu-item button:active .modus-wc-menu-item-content * {
  cursor: grabbing;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items {
  /* No explicit width here: the menu item naturally fills its row,
     which is constrained by the surrounding \`modus-wc-panel\` width
     and its body padding. */
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button {
  min-width: 0;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button .modus-wc-menu-item-content {
  gap: var(--modus-wc-spacing-lg);
  min-width: 0;
  width: 100%;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button .modus-wc-menu-item-labels {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  padding-inline-start: 0;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button .modus-wc-menu-item-labels > div:not(.modus-wc-menu-item-sublabel) {
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button .modus-wc-menu-item-labels > modus-wc-tooltip {
  display: block;
  flex: 1;
  max-width: 100%;
  min-width: 0;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button .modus-wc-menu-item-labels > modus-wc-tooltip > div {
  max-width: 100%;
  min-width: 0;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button .modus-wc-menu-item-labels > modus-wc-tooltip > div > div:first-child {
  max-width: 100%;
  min-width: 0;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button .modus-wc-menu-item-content [slot=start-icon] {
  align-items: center;
  display: inline-flex;
  flex-shrink: 0;
  padding-inline-end: 0;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-items .modus-wc-menu-item button .modus-wc-menu-item-content [slot=start-icon] .modus-wc-app-menu-app-logo {
  height: var(--modus-wc-input-height-sm);
  width: var(--modus-wc-input-height-sm);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grid {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: var(--modus-wc-spacing-sm);
  margin-inline: auto;
  width: fit-content;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grid-row {
  align-self: stretch;
  display: grid;
  gap: 0 var(--modus-wc-spacing-sm);
  /* minmax(0, 1fr) prevents a long label from making its column wider
     than the others, so all three items share equal space per row. */
  grid-template-columns: repeat(3, minmax(0, 1fr));
  justify-items: stretch;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grid-item {
  align-items: center;
  border-radius: var(--modus-wc-border-radius-sm);
  display: flex;
  flex-direction: column;
  padding: var(--modus-wc-spacing-lg) var(--modus-wc-spacing-xs);
  position: relative;
  width: var(--modus-wc-spacing-20);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grid-item > modus-wc-icon {
  align-items: center;
  display: inline-flex;
  inset-inline-end: 0;
  justify-content: center;
  position: absolute;
  top: 0;
  width: var(--modus-wc-size-xs);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grid-item:hover {
  background-color: var(--modus-wc-color-base-100);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grid-item {
  /* Focus outline that persists alongside the hover background. */
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grid-item:focus-visible {
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: -2px;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grid-emblem {
  aspect-ratio: 1/1;
  flex: 1 0 0;
  min-height: var(--modus-wc-size-xs);
  min-width: var(--modus-wc-size-xs);
  width: var(--modus-wc-line-height-h0);
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grid-item-label {
  align-self: stretch;
  -webkit-box-orient: vertical;
  color: var(--modus-wc-color-base-content);
  display: -webkit-box;
  -webkit-line-clamp: 1;
  line-height: var(--modus-wc-font-size-2xl);
  overflow: hidden;
  text-align: center;
  text-overflow: ellipsis;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-draggable-item {
  cursor: grab;
  transition: box-shadow 0.2s ease;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-draggable-item:active {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  cursor: grabbing;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-grabbed-item {
  background-color: var(--modus-wc-color-base-200);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -2px rgba(0, 0, 0, 0.1);
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: -2px;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-drag-source {
  opacity: 0.3;
}
modus-wc-app-menu.modus-wc-app-menu .modus-wc-panel .modus-wc-app-menu-drop-target {
  border-radius: var(--modus-wc-border-radius-sm);
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: -2px;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-autocomplete.modus-wc-autocomplete {
  display: inline-block;
  position: relative;
  width: 100%;
}
modus-wc-autocomplete.modus-wc-autocomplete-xs {
  height: var(--modus-wc-size-xs);
  min-height: var(--modus-wc-size-xs);
}
modus-wc-autocomplete.modus-wc-autocomplete-sm {
  height: var(--modus-wc-size-sm);
  min-height: var(--modus-wc-size-sm);
}
modus-wc-autocomplete.modus-wc-autocomplete-md {
  height: var(--modus-wc-size-md);
  min-height: var(--modus-wc-size-md);
}
modus-wc-autocomplete.modus-wc-autocomplete-lg {
  height: var(--modus-wc-size-lg);
  min-height: var(--modus-wc-size-lg);
}
modus-wc-autocomplete.modus-wc-autocomplete-xl {
  height: var(--modus-wc-size-xl);
  min-height: var(--modus-wc-size-xl);
}
modus-wc-autocomplete.modus-wc-autocomplete modus-wc-loader {
  display: flex;
  justify-content: center;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select {
  align-items: flex-start;
  background-color: transparent;
  border-radius: var(--modus-wc-border-radius-md);
  display: flex;
  height: auto;
  min-height: fit-content;
  padding: var(--modus-wc-spacing-xs);
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--error {
  border-color: var(--modus-wc-color-error) !important;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--info {
  border-color: var(--modus-wc-color-info) !important;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--success {
  border-color: var(--modus-wc-color-success) !important;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--warning {
  border-color: var(--modus-wc-color-warning) !important;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-search-icon {
  align-self: center;
  flex-shrink: 0;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select.modus-wc-input-sm .modus-wc-autocomplete-search-icon {
  height: var(--modus-wc-line-height-sm);
  width: var(--modus-wc-line-height-sm);
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select.modus-wc-input-md .modus-wc-autocomplete-search-icon {
  height: var(--modus-wc-line-height-md);
  width: var(--modus-wc-line-height-md);
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select.modus-wc-input-lg .modus-wc-autocomplete-search-icon {
  height: var(--modus-wc-line-height-lg);
  width: var(--modus-wc-line-height-lg);
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select:focus, modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select:focus-within {
  box-shadow: none !important;
  outline: none !important;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content {
  align-content: flex-start;
  align-items: center;
  display: flex;
  flex: 1;
  flex-wrap: wrap;
  gap: 0.25rem;
  min-height: fit-content;
  min-width: 0;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content .modus-wc-text-input:focus-within {
  border: none !important;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-button-container {
  align-items: center;
  align-self: center;
  display: none;
  flex-shrink: 0;
  justify-content: center;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-button-container:not(:empty) {
  display: flex;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-button-container modus-wc-button {
  align-self: center;
  display: flex;
  margin: 0;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content modus-wc-chip {
  align-self: center;
  flex-shrink: 0;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content modus-wc-text-input {
  align-self: center;
  flex: 1 1 var(--modus-autocomplete-min-input-width, 60px);
  max-width: 100%;
  min-width: var(--modus-autocomplete-min-input-width, 60px);
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content modus-wc-text-input input {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 100%;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content modus-wc-text-input:only-child {
  flex: 1 1 100%;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content .modus-wc-autocomplete-more-indicator {
  align-items: center;
  align-self: center;
  display: flex;
  flex-shrink: 0;
  height: 32px;
  justify-content: center;
  padding: 0 8px;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content .modus-wc-autocomplete-more-indicator .modus-wc-autocomplete-more-text {
  background-color: var(--modus-wc-color-base-100);
  border-radius: var(--modus-wc-border-radius-sm);
  color: var(--modus-wc-color-base-content);
  font-size: var(--modus-wc-font-size-sm);
  font-weight: var(--modus-wc-font-weight-medium);
  padding: 4px 8px;
  text-align: center;
  white-space: nowrap;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-menu {
  border-radius: 0 0 var(--modus-wc-border-radius-md) var(--modus-wc-border-radius-md);
  display: block;
  left: 0;
  margin-top: var(--modus-wc-spacing-2xs);
  max-height: 320px;
  overflow: auto;
  position: absolute;
  top: 100%;
  z-index: 99;
}
modus-wc-autocomplete.modus-wc-autocomplete .menu-hidden {
  display: none;
}
modus-wc-autocomplete.modus-wc-autocomplete .menu-visible {
  display: block;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-no-results {
  padding: var(--modus-wc-spacing-md);
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-no-results .icon-label {
  align-items: center;
  display: flex;
  justify-content: center;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-no-results .icon-label .modus-wc-autocomplete-search-icon {
  color: var(--modus-wc-color-base-content-low-contrast);
  height: 1.5rem;
  width: 1.5rem;
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-no-results .icon-label .label {
  font-size: var(--modus-wc-font-size-md);
  font-weight: var(--modus-wc-font-weight-bold);
  margin-inline-start: var(--modus-wc-spacing-xs);
}
modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-no-results .sub-label {
  color: var(--modus-wc-color-base-content-low-contrast);
  font-size: var(--modus-wc-font-size-sm);
  text-align: center;
}

[data-theme=modus-modern-light] modus-wc-autocomplete .modus-wc-input-label,
[data-theme=modus-modern-dark] modus-wc-autocomplete .modus-wc-input-label,
[data-theme=modus-classic-light] modus-wc-autocomplete .modus-wc-input-label,
[data-theme=modus-classic-dark] modus-wc-autocomplete .modus-wc-input-label {
  padding-bottom: var(--modus-wc-spacing-sm);
}

[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--bordered,
[data-theme=modus-classic-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--bordered {
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-gray-6);
}
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--bordered:focus-within,
[data-theme=modus-classic-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--bordered:focus-within {
  border-color: var(--modus-wc-color-highlight-blue);
  border-width: var(--modus-wc-border-width-sm);
}
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete ul.modus-wc-menu,
[data-theme=modus-classic-dark] modus-wc-autocomplete.modus-wc-autocomplete ul.modus-wc-menu {
  box-shadow: 0 0 4px 0 rgba(54, 53, 69, 0.3);
}
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-text-input-readonly,
[data-theme=modus-classic-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-text-input-readonly {
  background-color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--disabled,
[data-theme=modus-classic-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--disabled {
  cursor: not-allowed;
  opacity: 0.6;
  user-select: none;
}
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--readonly .modus-wc-text-input-readonly,
[data-theme=modus-classic-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--readonly .modus-wc-text-input-readonly {
  border: none;
}

[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select {
  background-color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--disabled,
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--readonly,
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-text-input-readonly {
  background-color: var(--modus-wc-color-gray-0);
  border: none;
}
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select--readonly:focus-within {
  border: var(--modus-wc-border-width-sm) solid var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-menu {
  background-color: var(--modus-wc-color-white);
}

[data-theme=modus-classic-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select {
  background-color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-no-results .sub-label {
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-menu {
  background-color: var(--modus-wc-color-gray-10);
}

[data-theme=modus-modern-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-menu {
  background-color: var(--modus-wc-color-base-page);
}
[data-theme=modus-modern-light] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content .modus-wc-text-input:focus-within {
  outline: unset;
}

[data-theme=modus-modern-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-menu {
  background-color: var(--modus-wc-color-base-page);
}
[data-theme=modus-modern-dark] modus-wc-autocomplete.modus-wc-autocomplete .modus-wc-autocomplete-multi-select .modus-wc-autocomplete-content .modus-wc-text-input:focus-within {
  outline: unset;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-avatar {
  display: inline-flex;
}

modus-wc-avatar .modus-wc-avatar .initials {
  align-items: center;
  background-color: var(--modus-wc-color-neutral);
  color: var(--modus-wc-color-neutral-content);
  display: flex;
  font-weight: 600;
  height: 100%;
  justify-content: center;
  text-transform: uppercase;
  width: 100%;
}
modus-wc-avatar .modus-wc-avatar .no-image {
  align-items: center;
  background-color: var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-base-content);
  display: flex;
  justify-content: center;
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-8 {
  height: var(--modus-wc-size-xs);
  width: var(--modus-wc-size-xs);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-8 .initials {
  font-size: var(--modus-wc-font-size-sm);
  line-height: var(--modus-wc-font-size-2xl);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-8 .modus-wc-icon {
  font-size: var(--modus-wc-font-size-md);
  line-height: 1;
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-12 {
  height: var(--modus-wc-size-sm);
  width: var(--modus-wc-size-sm);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-12 .initials {
  font-size: var(--modus-wc-font-size-lg);
  line-height: var(--modus-wc-line-height-md);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-12 .modus-wc-icon {
  font-size: var(--modus-wc-font-size-lg);
  line-height: 1;
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-16 {
  height: var(--modus-wc-size-md);
  width: var(--modus-wc-size-md);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-16 .initials {
  font-size: var(--modus-wc-font-size-xl);
  line-height: var(--modus-wc-line-height-lg);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-16 .modus-wc-icon {
  font-size: var(--modus-wc-font-size-xl);
  line-height: 1;
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-20 {
  height: var(--modus-wc-size-lg);
  width: var(--modus-wc-size-lg);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-20 .initials {
  font-size: var(--modus-wc-font-size-xl);
  line-height: var(--modus-wc-line-height-lg);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-20 .modus-wc-icon {
  font-size: var(--modus-wc-font-size-3xl);
  line-height: 1;
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-24 {
  height: var(--modus-wc-size-xl);
  width: var(--modus-wc-size-xl);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-24 .initials {
  font-size: var(--modus-wc-font-size-2xl);
  line-height: var(--modus-wc-line-height-lg);
}
modus-wc-avatar .modus-wc-avatar .modus-wc-w-24 .modus-wc-icon {
  font-size: var(--modus-wc-line-height-h1);
  line-height: 1;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-badge .modus-wc-badge {
  display: flex;
  font-weight: var(--modus-wc-font-weight-semibold);
  height: fit-content;
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-sm {
  font-size: var(--modus-wc-font-size-xs);
  max-height: var(--modus-wc-size-xs);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-md {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-high-contrast {
  background-color: var(--modus-wc-color-black);
  border-color: var(--modus-wc-color-base-content);
  color: var(--modus-wc-color-white);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-counter {
  border-radius: 1rem;
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-text {
  background-color: transparent;
  border: none;
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-primary {
  color: var(--modus-wc-color-trimble-blue);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-secondary {
  color: var(--modus-wc-color-secondary);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-neutral {
  color: var(--modus-wc-color-gray-1);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-high-contrast {
  color: var(--modus-wc-color-base-content);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-success {
  color: var(--modus-wc-color-green-dark);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-warning {
  color: var(--modus-wc-color-warning);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-error {
  color: var(--modus-wc-color-error);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined {
  background-color: transparent;
  border-radius: 1rem;
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined.modus-wc-badge-primary {
  border-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined.modus-wc-badge-secondary {
  border-color: var(--modus-wc-color-secondary);
  color: var(--modus-wc-color-secondary);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined.modus-wc-badge-neutral {
  border-color: var(--modus-wc-color-gray-1);
  color: var(--modus-wc-color-gray-1);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined.modus-wc-badge-high-contrast {
  border-color: var(--modus-wc-color-base-content);
  color: var(--modus-wc-color-base-content);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined.modus-wc-badge-success {
  border-color: var(--modus-wc-color-success);
  color: var(--modus-wc-color-success);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined.modus-wc-badge-warning {
  border-color: var(--modus-wc-color-warning);
  color: var(--modus-wc-color-warning);
}
modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined.modus-wc-badge-error {
  border-color: var(--modus-wc-color-error);
  color: var(--modus-wc-color-error);
}

[data-theme=modus-classic-light] modus-wc-badge .modus-wc-badge,
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge {
  border: unset;
  font-weight: var(--modus-wc-font-weight-bold);
}
[data-theme=modus-classic-light] modus-wc-badge .modus-wc-badge.modus-wc-badge-secondary,
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-secondary {
  color: var(--modus-wc-color-gray-6);
}
[data-theme=modus-classic-light] modus-wc-badge .modus-wc-badge.modus-wc-badge-secondary:not(.modus-wc-badge-text):not(.modus-wc-badge-outlined),
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-secondary:not(.modus-wc-badge-text):not(.modus-wc-badge-outlined) {
  background-color: var(--modus-wc-color-gray-6);
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-light] modus-wc-badge .modus-wc-badge:not(.modus-wc-badge-counter),
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge:not(.modus-wc-badge-counter) {
  border-radius: var(--modus-wc-border-radius-md);
}
[data-theme=modus-classic-light] modus-wc-badge .modus-wc-badge.modus-wc-badge-success:not(.modus-wc-badge-text):not(.modus-wc-badge-outlined),
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-success:not(.modus-wc-badge-text):not(.modus-wc-badge-outlined) {
  background-color: var(--modus-wc-color-green-dark);
}
[data-theme=modus-classic-light] modus-wc-badge .modus-wc-badge.modus-wc-badge-sm,
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-sm {
  border-radius: var(--modus-wc-border-radius-sm);
  font-size: var(--modus-wc-font-size-xs);
  height: 14px;
  padding: var(--modus-wc-spacing-2xs) var(--modus-wc-spacing-xs);
}
[data-theme=modus-classic-light] modus-wc-badge .modus-wc-badge.modus-wc-badge-md,
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-md {
  font-size: var(--modus-wc-font-size-sm);
  height: 20px;
  padding: var(--modus-wc-spacing-xs) var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-badge .modus-wc-badge.modus-wc-badge-lg,
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-lg {
  font-size: var(--modus-wc-font-size-md);
  height: 28px;
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-md);
}
[data-theme=modus-classic-light] modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined,
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-outlined {
  background-color: transparent;
  border: 1px solid;
  border-radius: 1rem;
}

[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge:not(.modus-wc-badge-text):not(.modus-wc-badge-outlined).modus-wc-badge-primary {
  background-color: var(--modus-wc-color-highlight-blue);
  color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge:not(.modus-wc-badge-text):not(.modus-wc-badge-outlined).modus-wc-badge-success {
  background-color: var(--modus-wc-color-success);
}
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge:not(.modus-wc-badge-text):not(.modus-wc-badge-outlined).modus-wc-badge-secondary {
  background-color: var(--modus-wc-color-gray-6);
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge:not(.modus-wc-badge-text):not(.modus-wc-badge-outlined).modus-wc-badge-neutral {
  background-color: var(--modus-wc-color-gray-1);
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge:not(.modus-wc-badge-text):not(.modus-wc-badge-outlined).modus-wc-badge-high-contrast {
  background-color: var(--modus-wc-color-gray-light);
  color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-primary {
  color: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-high-contrast {
  color: var(--modus-wc-color-gray-light);
}
[data-theme=modus-classic-dark] modus-wc-badge .modus-wc-badge.modus-wc-badge-text.modus-wc-badge-success {
  color: var(--modus-wc-color-success);
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet {
  border-radius: var(--rounded-box) var(--rounded-box) 0 0;
  bottom: 0;
  box-shadow: 0 -20px 50px -8px color-mix(in sRGB, var(--modus-wc-color-base-content) 22%, transparent), 0 -6px 16px color-mix(in sRGB, var(--modus-wc-color-base-content) 12%, transparent);
  left: 50%;
  max-width: 100vw;
  min-width: 25vw;
  position: fixed;
  transform: translateX(-50%);
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0s linear 0.3s;
  z-index: 999;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet[aria-hidden=true] {
  box-shadow: none;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet[aria-hidden=false] {
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), box-shadow 0s linear 0s;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet:focus, modus-wc-bottom-sheet.modus-wc-bottom-sheet:focus-visible {
  outline: none;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet.modus-wc-bottom-sheet-minimized .modus-wc-panel .modus-wc-bottom-sheet-header,
modus-wc-bottom-sheet.modus-wc-bottom-sheet.modus-wc-bottom-sheet-minimized .modus-wc-panel .modus-wc-bottom-sheet-content,
modus-wc-bottom-sheet.modus-wc-bottom-sheet.modus-wc-bottom-sheet-minimized .modus-wc-panel .modus-wc-bottom-sheet-footer {
  display: none;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet .modus-wc-panel {
  border-radius: var(--rounded-box) var(--rounded-box) 0 0;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet .modus-wc-panel .modus-wc-bottom-sheet-handle {
  cursor: grab;
  min-height: var(--modus-wc-font-size-2xl);
  touch-action: none;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet .modus-wc-panel .modus-wc-bottom-sheet-handle:active {
  cursor: grabbing;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet .modus-wc-panel .modus-wc-bottom-sheet-header {
  padding: var(--modus-wc-spacing-md);
  width: 100%;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet .modus-wc-panel .modus-wc-bottom-sheet-header-top {
  align-items: center;
  display: flex;
  gap: var(--modus-wc-spacing-lg);
  justify-content: space-between;
  width: 100%;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet .modus-wc-panel .modus-wc-bottom-sheet-header-start {
  align-items: center;
  display: flex;
  flex: 1 1 0;
  gap: var(--modus-wc-spacing-xs);
  min-width: 0;
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet .modus-wc-panel .modus-wc-bottom-sheet-header-title {
  line-height: var(--modus-wc-font-size-2xl);
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet .modus-wc-panel .modus-wc-bottom-sheet-content {
  padding: 0 var(--modus-wc-spacing-md) var(--modus-wc-spacing-md) var(--modus-wc-spacing-md);
}
modus-wc-bottom-sheet.modus-wc-bottom-sheet .modus-wc-panel .modus-wc-bottom-sheet-footer {
  padding: var(--modus-wc-spacing-md);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-breadcrumbs .modus-wc-breadcrumbs ol {
  list-style: none;
}
modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button {
  background: none;
  border: 0;
  color: inherit;
  cursor: pointer;
  font: inherit;
  padding: 0;
}
modus-wc-breadcrumbs .modus-wc-breadcrumbs.modus-wc-text-xs {
  font-size: var(--modus-wc-font-size-xs);
}
modus-wc-breadcrumbs .modus-wc-breadcrumbs.modus-wc-text-sm {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-breadcrumbs .modus-wc-breadcrumbs.modus-wc-text-md {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-breadcrumbs .modus-wc-breadcrumbs.modus-wc-text-lg {
  font-size: var(--modus-wc-font-size-lg);
}

[data-theme=modus-classic-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs a,
[data-theme=modus-classic-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button,
[data-theme=modus-classic-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs a,
[data-theme=modus-classic-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button {
  text-decoration: none;
}
[data-theme=modus-classic-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs a:hover,
[data-theme=modus-classic-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button:hover,
[data-theme=modus-classic-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs a:hover,
[data-theme=modus-classic-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button:hover {
  text-decoration: underline;
}

[data-theme=modus-classic-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs a,
[data-theme=modus-classic-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button {
  color: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs a:active,
[data-theme=modus-classic-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button:active {
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs span {
  color: var(--modus-wc-color-trimble-gray);
}

[data-theme=modus-classic-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs a,
[data-theme=modus-classic-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button {
  color: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs a:active,
[data-theme=modus-classic-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button:active {
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs span {
  color: var(--modus-wc-color-white);
}

[data-theme=connect-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs a,
[data-theme=connect-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button,
[data-theme=connect-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs a,
[data-theme=connect-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button {
  color: var(--modus-wc-color-base-content);
  opacity: 0.5;
  text-decoration: none;
}
[data-theme=connect-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs a:active,
[data-theme=connect-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button:active,
[data-theme=connect-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs a:active,
[data-theme=connect-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button:active {
  color: var(--modus-wc-color-white);
}
[data-theme=connect-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs a:hover,
[data-theme=connect-light] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button:hover,
[data-theme=connect-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs a:hover,
[data-theme=connect-dark] modus-wc-breadcrumbs .modus-wc-breadcrumbs .modus-wc-breadcrumb-button:hover {
  text-decoration: none;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-button .modus-wc-btn-xs {
  height: var(--modus-wc-size-xs);
  min-height: var(--modus-wc-size-xs);
}
modus-wc-button .modus-wc-btn-sm {
  height: var(--modus-wc-size-sm);
  min-height: var(--modus-wc-size-sm);
}
modus-wc-button .modus-wc-btn-md {
  height: var(--modus-wc-size-md);
  min-height: var(--modus-wc-size-md);
}
modus-wc-button .modus-wc-btn-lg {
  height: var(--modus-wc-size-lg);
  min-height: var(--modus-wc-size-lg);
}
modus-wc-button .modus-wc-btn-xl {
  height: var(--modus-wc-size-xl);
  min-height: var(--modus-wc-size-xl);
}
modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:not(.modus-wc-btn-disabled) {
  background-color: var(--modus-wc-color-base-100);
  border-color: var(--modus-wc-color-base-100);
}
modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:not(.modus-wc-btn-disabled):hover, modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:not(.modus-wc-btn-disabled).modus-wc-btn-active, modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:not(.modus-wc-btn-disabled)[aria-pressed=true] {
  background-color: var(--modus-wc-color-base-200);
  border-color: var(--modus-wc-color-base-200);
}

modus-wc-button .modus-wc-btn-outline.modus-wc-btn-primary[aria-pressed=true] {
  background-color: var(--modus-wc-color-primary);
  border: 1px solid transparent;
  color: var(--modus-wc-color-primary-content);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-primary:hover {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-secondary[aria-pressed=true] {
  background-color: var(--modus-wc-color-secondary);
  border: 1px solid transparent;
  color: var(--modus-wc-color-secondary-content);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-secondary:hover {
  background-color: var(--modus-wc-color-secondary-pale);
  color: var(--modus-wc-color-secondary);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-accent[aria-pressed=true] {
  background-color: var(--modus-wc-color-accent);
  border: 1px solid transparent;
  color: var(--modus-wc-color-accent-content);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-accent:hover {
  background-color: var(--modus-wc-color-accent-pale);
  color: var(--modus-wc-color-accent);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-neutral[aria-pressed=true] {
  background-color: var(--modus-wc-color-neutral);
  border: 1px solid transparent;
  color: var(--modus-wc-color-base-content);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-neutral:hover {
  background-color: var(--modus-wc-color-neutral-pale);
  color: var(--modus-wc-color-base-content);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-warning[aria-pressed=true] {
  background-color: var(--modus-wc-color-warning);
  border: 1px solid transparent;
  color: var(--modus-wc-color-warning-content);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-warning:hover {
  background-color: var(--modus-wc-color-warning-pale);
  color: var(--modus-wc-color-warning);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-error[aria-pressed=true] {
  background-color: var(--modus-wc-color-error);
  border: 1px solid transparent;
  color: var(--modus-wc-color-error-content);
}
modus-wc-button .modus-wc-btn-outline.modus-wc-btn-error:hover {
  background-color: var(--modus-wc-color-error-pale);
  color: var(--modus-wc-color-error);
}

modus-wc-button .modus-wc-btn-xl:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
  font-size: var(--modus-wc-font-size-2xl);
  padding-left: var(--modus-wc-spacing-2xl);
  padding-right: var(--modus-wc-spacing-2xl);
}

modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-primary[aria-pressed=true] {
  background-color: var(--modus-wc-color-primary);
  border: 1px solid transparent;
  color: var(--modus-wc-color-primary-content);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-primary:hover {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-secondary[aria-pressed=true] {
  background-color: var(--modus-wc-color-secondary);
  border: 1px solid transparent;
  color: var(--modus-wc-color-secondary-content);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-secondary:hover {
  background-color: var(--modus-wc-color-secondary-pale);
  color: var(--modus-wc-color-secondary);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-accent[aria-pressed=true] {
  background-color: var(--modus-wc-color-accent);
  border: 1px solid transparent;
  color: var(--modus-wc-color-accent-content);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-accent:hover {
  background-color: var(--modus-wc-color-accent-pale);
  color: var(--modus-wc-color-accent);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-neutral[aria-pressed=true] {
  background-color: var(--modus-wc-color-neutral);
  border: 1px solid transparent;
  color: var(--modus-wc-color-base-content);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-neutral:hover {
  background-color: var(--modus-wc-color-neutral-pale);
  color: var(--modus-wc-color-base-content);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-warning[aria-pressed=true] {
  background-color: var(--modus-wc-color-warning);
  border: 1px solid transparent;
  color: var(--modus-wc-color-warning-content);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-warning:hover {
  background-color: var(--modus-wc-color-warning-pale);
  color: var(--modus-wc-color-warning);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-error[aria-pressed=true] {
  background-color: var(--modus-wc-color-error);
  border: 1px solid transparent;
  color: var(--modus-wc-color-error-content);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-error:hover {
  background-color: var(--modus-wc-color-error-pale);
  color: var(--modus-wc-color-error);
}
modus-wc-button .modus-wc-btn-borderless {
  background-color: transparent;
  border: none;
  box-shadow: none;
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-primary {
  color: var(--modus-wc-color-primary);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-secondary {
  color: var(--modus-wc-color-secondary);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-neutral {
  color: var(--modus-wc-color-content);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-warning {
  color: var(--modus-wc-color-warning);
}
modus-wc-button .modus-wc-btn-borderless.modus-wc-btn-error {
  color: var(--modus-wc-color-error);
}

modus-wc-button .modus-wc-btn.modus-wc-btn-ellipse {
  border-radius: var(--modus-wc-border-radius-rounded);
}

modus-wc-button .modus-wc-btn-circle.modus-wc-btn-md,
modus-wc-button .modus-wc-btn-square.modus-wc-btn-md {
  width: var(--modus-wc-size-md);
}

modus-wc-button .modus-wc-btn-circle.modus-wc-btn-lg,
modus-wc-button .modus-wc-btn-square.modus-wc-btn-lg {
  width: var(--modus-wc-size-lg);
}

modus-wc-button .modus-wc-btn-circle.modus-wc-btn-xl,
modus-wc-button .modus-wc-btn-square.modus-wc-btn-xl {
  width: var(--modus-wc-size-xl);
}

[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn {
  --rounded-btn: var(--modus-wc-border-radius-md);
  border: none;
  outline: none;
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-xs,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-xs {
  font-size: var(--modus-wc-font-size-xs);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-xs:not(.modus-wc-btn-circle):not(.modus-wc-btn-square),
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-xs:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
  padding: var(--modus-wc-spacing-2xs) var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-sm,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-sm {
  font-size: var(--modus-wc-font-size-sm);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-sm:not(.modus-wc-btn-circle):not(.modus-wc-btn-square),
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-sm:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
  padding: var(--modus-wc-spacing-xs) var(--modus-wc-spacing-md);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-md,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-md {
  font-size: var(--modus-wc-font-size-md);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-md:not(.modus-wc-btn-circle):not(.modus-wc-btn-square),
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-md:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-lg);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-lg,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-lg {
  font-size: var(--modus-wc-font-size-lg);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-lg:not(.modus-wc-btn-circle):not(.modus-wc-btn-square),
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-lg:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
  padding: var(--modus-wc-spacing-md) var(--modus-wc-spacing-xl);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-xl,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-xl {
  font-size: var(--modus-wc-font-size-xl);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-xl:not(.modus-wc-btn-circle):not(.modus-wc-btn-square),
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-xl:not(.modus-wc-btn-circle):not(.modus-wc-btn-square) {
  padding: var(--modus-wc-spacing-lg) var(--modus-wc-spacing-2xl);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless {
  background-color: transparent;
  box-shadow: none;
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless[aria-pressed=true],
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:active,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless[aria-pressed=true] {
  background-color: transparent;
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:hover,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:hover {
  background-color: transparent;
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline {
  background-color: transparent;
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline[aria-pressed=true],
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline:active,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline[aria-pressed=true] {
  background-color: transparent;
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline:hover,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline:hover {
  background-color: transparent;
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary:focus-visible, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary:focus-visible {
  box-shadow: 0 0 0 0.25rem rgba(38, 122, 177, 0.5);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary:focus-visible, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary:focus-visible {
  box-shadow: 0 0 0 0.25rem rgba(98, 102, 108, 0.5);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:focus-visible, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral:focus-visible {
  box-shadow: 0 0 0 0.25rem rgba(98, 102, 108, 0.5);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning:focus-visible, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning:focus-visible {
  box-shadow: 0 0 0 0.25rem rgba(194, 125, 31, 0.5);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error:focus-visible, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error:focus-visible,
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error:focus-visible {
  box-shadow: 0 0 0 0.25rem rgba(224, 66, 76, 0.5);
}

[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-disabled {
  opacity: 0.3;
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:focus-visible {
  border: var(--modus-wc-border-width-sm) solid var(--modus-wc-color-black);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary {
  color: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-secondary {
  color: var(--modus-wc-color-gray-6);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-neutral {
  color: var(--modus-wc-color-gray-6);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-warning {
  color: var(--modus-wc-color-yellow);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-error {
  color: var(--modus-wc-color-red);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary {
  background-color: var(--modus-wc-color-trimble-blue);
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary:hover {
  background-color: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary[aria-pressed=true] {
  background-color: var(--modus-wc-color-blue-dark);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary {
  background-color: var(--modus-wc-color-gray-6);
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary:hover {
  background-color: var(--modus-wc-color-gray-5);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary[aria-pressed=true] {
  background-color: var(--modus-wc-color-gray-7);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral {
  background-color: var(--modus-wc-color-gray-1);
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:hover {
  background-color: var(--modus-wc-color-gray-0);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral[aria-pressed=true] {
  background-color: var(--modus-wc-color-gray-2);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning {
  background-color: var(--modus-wc-color-yellow);
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-red);
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning:hover {
  background-color: var(--modus-wc-color-yellow-light);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning[aria-pressed=true] {
  background-color: var(--modus-wc-color-yellow-dark);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error {
  background-color: var(--modus-wc-color-red);
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error:hover {
  background-color: var(--modus-wc-color-red-light);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error[aria-pressed=true] {
  background-color: var(--modus-wc-color-red-dark);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary {
  border-color: var(--modus-wc-color-trimble-blue);
  color: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary:hover {
  background-color: var(--modus-wc-color-blue-pale);
  border-color: var(--modus-wc-color-blue-light);
  color: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary[aria-pressed=true] {
  background-color: rgba(0, 99, 163, 0.18);
  border-color: var(--modus-wc-color-blue-dark);
  color: var(--modus-wc-color-blue-dark);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary {
  border-color: var(--modus-wc-color-trimble-gray);
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary:hover {
  background-color: var(--modus-wc-color-gray-0);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary[aria-pressed=true] {
  background-color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral {
  border-color: var(--modus-wc-color-trimble-gray);
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral:hover {
  background-color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral[aria-pressed=true] {
  background-color: var(--modus-wc-color-gray-2);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning {
  border-color: var(--modus-wc-color-yellow);
  color: var(--modus-wc-color-yellow);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning:hover {
  border-color: var(--modus-wc-color-yellow-light);
  color: var(--modus-wc-color-yellow-light);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning[aria-pressed=true] {
  border-color: var(--modus-wc-color-yellow-dark);
  color: var(--modus-wc-color-yellow-dark);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error {
  border-color: var(--modus-wc-color-red);
  color: var(--modus-wc-color-red);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error:hover {
  border-color: var(--modus-wc-color-red-light);
  color: var(--modus-wc-color-red-light);
}
[data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error:active, [data-theme=modus-classic-light] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error[aria-pressed=true] {
  border-color: var(--modus-wc-color-red-dark);
  color: var(--modus-wc-color-red-dark);
}

[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-disabled {
  opacity: 0.4;
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:focus-visible {
  border: var(--modus-wc-border-width-sm) solid var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary {
  color: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-secondary {
  color: var(--modus-wc-color-gray-6);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-neutral {
  color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-warning {
  color: var(--modus-wc-color-yellow);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-error {
  color: var(--modus-wc-color-red);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary {
  background-color: var(--modus-wc-color-highlight-blue);
  color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary:hover {
  background-color: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-primary[aria-pressed=true] {
  background-color: var(--modus-wc-color-blue-dark);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary {
  background-color: var(--modus-wc-color-gray-6);
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary:hover {
  background-color: var(--modus-wc-color-gray-5);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary[aria-pressed=true] {
  background-color: var(--modus-wc-color-gray-7);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral {
  background-color: var(--modus-wc-color-gray-1);
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:hover {
  background-color: var(--modus-wc-color-gray-0);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-neutral[aria-pressed=true] {
  background-color: var(--modus-wc-color-gray-4);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning {
  background-color: var(--modus-wc-color-yellow);
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-red);
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning:hover {
  background-color: var(--modus-wc-color-yellow-light);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-warning[aria-pressed=true] {
  background-color: var(--modus-wc-color-yellow-dark);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error {
  background-color: var(--modus-wc-color-red);
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error:hover {
  background-color: var(--modus-wc-color-red-light);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-error[aria-pressed=true] {
  background-color: var(--modus-wc-color-red-dark);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary {
  border-color: var(--modus-wc-color-highlight-blue);
  color: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary:hover {
  background-color: rgba(1, 154, 235, 0.12);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-primary[aria-pressed=true] {
  background-color: rgba(1, 154, 235, 0.3);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary {
  border-color: var(--modus-wc-color-gray-1);
  color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary:hover {
  background-color: rgba(203, 205, 214, 0.12);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-secondary[aria-pressed=true] {
  background-color: rgba(203, 205, 214, 0.3);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral {
  border-color: var(--modus-wc-color-gray-2);
  color: var(--modus-wc-color-gray-2);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral:hover {
  background-color: rgba(203, 205, 214, 0.12);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-neutral[aria-pressed=true] {
  background-color: rgba(203, 205, 214, 0.3);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning {
  border-color: var(--modus-wc-color-yellow);
  color: var(--modus-wc-color-yellow);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning:hover {
  border-color: var(--modus-wc-color-yellow-light);
  color: var(--modus-wc-color-yellow-light);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-warning[aria-pressed=true] {
  border-color: var(--modus-wc-color-yellow-dark);
  color: var(--modus-wc-color-yellow-dark);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error {
  border-color: var(--modus-wc-color-red);
  color: var(--modus-wc-color-red);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error:hover {
  border-color: var(--modus-wc-color-red-light);
  color: var(--modus-wc-color-red-light);
}
[data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error:active, [data-theme=modus-classic-dark] modus-wc-button .modus-wc-btn.modus-wc-btn-outline.modus-wc-btn-error[aria-pressed=true] {
  border-color: var(--modus-wc-color-red-dark);
  color: var(--modus-wc-color-red-dark);
}

[data-theme=connect-light] modus-wc-button .modus-wc-btn.modus-wc-btn-filled.modus-wc-btn-secondary {
  color: var(--modus-wc-color-white);
}
modus-wc-button-group.modus-wc-button-group {
  align-items: stretch;
  display: inline-flex;
}
modus-wc-button-group.modus-wc-button-group > * {
  border-radius: 0;
}
modus-wc-button-group.modus-wc-button-group > * .modus-wc-btn {
  border-radius: 0;
}
modus-wc-button-group.modus-wc-button-group > *:first-child .modus-wc-btn {
  border-end-start-radius: var(--modus-wc-rounded-btn, 0.5rem);
  border-start-start-radius: var(--modus-wc-rounded-btn, 0.5rem);
}
modus-wc-button-group.modus-wc-button-group > *:last-child .modus-wc-btn {
  border-end-end-radius: var(--modus-wc-rounded-btn, 0.5rem);
  border-start-end-radius: var(--modus-wc-rounded-btn, 0.5rem);
}
modus-wc-button-group.modus-wc-button-group > *:not(:last-child) .modus-wc-btn {
  border-inline-end-width: 0;
}
modus-wc-button-group.modus-wc-button-group.modus-wc-join-vertical {
  align-items: stretch;
  flex-direction: column;
}
modus-wc-button-group.modus-wc-button-group.modus-wc-join-vertical > * .modus-wc-btn {
  border-inline-end-width: 1px;
  border-radius: 0;
}
modus-wc-button-group.modus-wc-button-group.modus-wc-join-vertical > *:first-child .modus-wc-btn {
  border-end-end-radius: 0;
  border-end-start-radius: 0;
  border-start-end-radius: var(--modus-wc-rounded-btn, 0.5rem);
  border-start-start-radius: var(--modus-wc-rounded-btn, 0.5rem);
}
modus-wc-button-group.modus-wc-button-group.modus-wc-join-vertical > *:last-child .modus-wc-btn {
  border-end-end-radius: var(--modus-wc-rounded-btn, 0.5rem);
  border-end-start-radius: var(--modus-wc-rounded-btn, 0.5rem);
  border-start-end-radius: 0;
  border-start-start-radius: 0;
}
modus-wc-button-group.modus-wc-button-group.modus-wc-join-vertical > *:not(:last-child) .modus-wc-btn {
  border-block-end-width: 0;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-card .modus-wc-card:not(.modus-wc-card-bordered) {
  background-color: var(--modus-wc-color-base-100);
}
modus-wc-card .modus-wc-card .modus-wc-card-title {
  margin-bottom: 0;
}
modus-wc-card .modus-wc-card.modus-wc-card-bordered {
  background-color: var(--modus-wc-color-base-page);
}
modus-wc-card .modus-wc-card {
  color: var(--modus-wc-color-base-content);
}
modus-wc-card .modus-wc-card figure {
  margin-bottom: unset;
}
modus-wc-card .modus-wc-card .modus-wc-card-body {
  gap: unset;
}
modus-wc-card .modus-wc-card .modus-wc-card-actions {
  margin-bottom: var(--modus-wc-spacing-xs);
}
modus-wc-card .modus-wc-card > modus-wc-collapse .modus-wc-collapse {
  background-color: var(--modus-wc-color-base-page);
}

[data-theme=modus-classic-light] modus-wc-card .modus-wc-card,
[data-theme=modus-classic-dark] modus-wc-card .modus-wc-card {
  --rounded-box: 0.5rem;
  box-shadow: 0 0 2px 0 rgba(54, 53, 69, 0.3);
}
[data-theme=modus-classic-light] modus-wc-card .modus-wc-card:hover,
[data-theme=modus-classic-dark] modus-wc-card .modus-wc-card:hover {
  box-shadow: 0 0 8px 0 rgba(54, 53, 69, 0.3);
}
[data-theme=modus-classic-light] modus-wc-card .modus-wc-card .modus-wc-card-subtitle,
[data-theme=modus-classic-dark] modus-wc-card .modus-wc-card .modus-wc-card-subtitle {
  font-weight: var(--modus-wc-font-weight-bold);
}

[data-theme=modus-classic-light] modus-wc-card .modus-wc-card .modus-wc-card-title {
  --fallback-bc: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-light] modus-wc-card .modus-wc-card .modus-wc-card-subtitle {
  color: var(--modus-wc-color-gray-8);
}

[data-theme=modus-classic-dark] modus-wc-card .modus-wc-card .modus-wc-card-title {
  --fallback-bc: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-card .modus-wc-card .modus-wc-card-subtitle {
  color: var(--modus-wc-color-gray-1);
}

[data-theme=connect-light] modus-wc-card .modus-wc-card,
[data-theme=connect-dark] modus-wc-card .modus-wc-card {
  box-shadow: 0 0 0.25rem var(--modus-wc-color-base-200);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card:hover,
[data-theme=connect-dark] modus-wc-card .modus-wc-card:hover {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card:focus,
[data-theme=connect-dark] modus-wc-card .modus-wc-card:focus {
  background-color: var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card:active,
[data-theme=connect-dark] modus-wc-card .modus-wc-card:active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card-selected,
[data-theme=connect-dark] modus-wc-card .modus-wc-card-selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card-active,
[data-theme=connect-dark] modus-wc-card .modus-wc-card-active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card-open,
[data-theme=connect-dark] modus-wc-card .modus-wc-card-open {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card.selected,
[data-theme=connect-dark] modus-wc-card .modus-wc-card.selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card.active,
[data-theme=connect-dark] modus-wc-card .modus-wc-card.active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card-disabled:hover,
[data-theme=connect-dark] modus-wc-card .modus-wc-card-disabled:hover {
  background-color: inherit;
}
[data-theme=connect-light] modus-wc-card .modus-wc-card--active,
[data-theme=connect-dark] modus-wc-card .modus-wc-card--active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card--selected,
[data-theme=connect-dark] modus-wc-card .modus-wc-card--selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card:checked,
[data-theme=connect-dark] modus-wc-card .modus-wc-card:checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card.checked,
[data-theme=connect-dark] modus-wc-card .modus-wc-card.checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card-checked,
[data-theme=connect-dark] modus-wc-card .modus-wc-card-checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card.pressed,
[data-theme=connect-dark] modus-wc-card .modus-wc-card.pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card-pressed,
[data-theme=connect-dark] modus-wc-card .modus-wc-card-pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card[aria-pressed=true],
[data-theme=connect-dark] modus-wc-card .modus-wc-card[aria-pressed=true] {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
[data-theme=connect-light] modus-wc-card .modus-wc-card:hover,
[data-theme=connect-dark] modus-wc-card .modus-wc-card:hover {
  box-shadow: 0 0 0.375rem var(--modus-wc-color-base-100);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-checkbox.modus-wc-checkbox-host {
  align-items: center;
  display: flex;
}
modus-wc-checkbox.modus-wc-checkbox-host .modus-wc-input-label {
  font-weight: var(--modus-wc-font-weight-normal);
  padding-inline-start: var(--modus-wc-spacing-md);
}
modus-wc-checkbox.modus-wc-checkbox-host [type=checkbox].modus-wc-checkbox:checked {
  --fallback-bc: var(--modus-wc-color-primary);
}
modus-wc-checkbox.modus-wc-checkbox-host [type=checkbox].modus-wc-checkbox:focus {
  outline-color: var(--modus-wc-color-primary);
}
modus-wc-checkbox.modus-wc-checkbox-host [type=checkbox].modus-wc-checkbox:hover {
  --fallback-bc: var(--modus-wc-color-primary);
}

[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox {
  --check-bg: var(--modus-wc-color-highlight-blue);
  --fallback-bc: var(--modus-wc-color-gray-4);
  --check-content: var(--modus-wc-color-white);
  border-radius: var(--modus-wc-border-radius-sm);
  border-width: var(--modus-wc-border-width-sm);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-sm,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-sm {
  height: 0.75rem;
  width: 0.75rem;
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-md,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-md {
  height: 1rem;
  width: 1rem;
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-lg,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-lg {
  height: 1.25rem;
  width: 1.25rem;
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:checked,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox:checked {
  --fallback-bc: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:checked:hover,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox:checked:hover {
  --check-bg: var(--modus-wc-color-blue-light);
  --fallback-bc: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:indeterminate,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox:indeterminate {
  --fallback-bc: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:disabled,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox:disabled {
  opacity: 0.3;
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:disabled:not(:checked),
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox:disabled:not(:checked) {
  background-color: unset;
  border: var(--modus-wc-border-width-sm) solid var(--modus-wc-color-gray-4);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:focus,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox:focus {
  outline-color: rgba(1, 154, 235, 0.75);
}
@supports (outline-color: color-mix(in sRGB, red 50%, blue)) {
  [data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:focus,
  [data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox:focus {
    outline-color: color-mix(in sRGB, var(--modus-wc-color-highlight-blue) 75%, transparent);
  }
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:hover,
[data-theme=modus-classic-dark] modus-wc-checkbox .modus-wc-checkbox:hover {
  --fallback-bc: var(--modus-wc-color-highlight-blue);
}

[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox {
  --check-bg: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:checked {
  --fallback-bc: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:checked:hover {
  --check-bg: var(--modus-wc-color-trimble-blue);
  --fallback-bc: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:indeterminate {
  --fallback-bc: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:focus {
  outline-color: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-light] modus-wc-checkbox .modus-wc-checkbox:hover {
  --fallback-bc: var(--modus-wc-color-blue-light);
}

[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox {
  --check-bg: var(--modus-wc-color-highlight-blue);
  --fallback-bc: var(--modus-wc-color-gray-4);
  --check-content: var(--modus-wc-color-white);
  border-radius: var(--modus-wc-border-radius-sm);
  border-width: var(--modus-wc-border-width-sm);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-sm,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-sm {
  height: 0.75rem;
  width: 0.75rem;
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-md,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-md {
  height: 1rem;
  width: 1rem;
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-lg,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox.modus-wc-checkbox-lg {
  height: 1.25rem;
  width: 1.25rem;
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:checked,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox:checked {
  --fallback-bc: var(--modus-wc-color-primary-color);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:checked:hover,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox:checked:hover {
  --check-bg: var(--modus-wc-color-blue-light);
  --fallback-bc: var(--modus-wc-color-blue-light);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:indeterminate,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox:indeterminate {
  --fallback-bc: var(--modus-wc-color-highlight-blue);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:disabled,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox:disabled {
  opacity: 0.3;
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:disabled:not(:checked),
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox:disabled:not(:checked) {
  background-color: unset;
  border: var(--modus-wc-border-width-sm) solid var(--modus-wc-color-gray-4);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:focus,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox:focus {
  outline-color: rgba(1, 154, 235, 0.75);
}
@supports (outline-color: color-mix(in sRGB, red 50%, blue)) {
  [data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:focus,
  [data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox:focus {
    outline-color: color-mix(in sRGB, var(--modus-wc-color-highlight-blue) 75%, transparent);
  }
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:hover,
[data-theme=connect-dark] modus-wc-checkbox .modus-wc-checkbox:hover {
  --fallback-bc: var(--modus-wc-color-highlight-blue);
}

[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox {
  --check-bg: var(--modus-wc-color-primary-color);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:checked {
  --fallback-bc: var(--modus-wc-color-blue-light);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:checked:hover {
  --check-bg: var(--modus-wc-color-trimble-blue);
  --fallback-bc: var(--modus-wc-color-trimble-blue);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:indeterminate {
  --fallback-bc: var(--modus-wc-color-blue-light);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:focus {
  outline-color: var(--modus-wc-color-highlight-blue);
}
[data-theme=connect-light] modus-wc-checkbox .modus-wc-checkbox:hover {
  --fallback-bc: var(--modus-wc-color-blue-light);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-chip .modus-wc-chip.modus-wc-btn {
  background-color: var(--modus-wc-color-base-100);
  border-color: transparent;
  box-sizing: border-box;
  --rounded-btn: var(--modus-wc-border-radius-chip);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--circle {
  --rounded-btn: var(--modus-wc-border-radius-3xl);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:hover {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:focus {
  background-color: var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-open {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-disabled:hover {
  background-color: inherit;
}
modus-wc-chip .modus-wc-chip.modus-wc-btn--active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn--selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn[aria-pressed=true] {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-xs {
  height: var(--modus-wc-size-xs);
  min-height: var(--modus-wc-size-xs);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-sm {
  height: var(--modus-wc-size-sm);
  min-height: var(--modus-wc-size-sm);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-md {
  height: var(--modus-wc-size-md);
  min-height: var(--modus-wc-size-md);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-lg {
  height: var(--modus-wc-size-lg);
  min-height: var(--modus-wc-size-lg);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn-xl {
  height: var(--modus-wc-size-xl);
  min-height: var(--modus-wc-size-xl);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-sm {
  height: var(--modus-wc-spacing-xl);
  min-height: var(--modus-wc-spacing-xl);
  padding: var(--modus-wc-spacing-xs) var(--modus-wc-spacing-sm);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-sm modus-wc-avatar .modus-wc-avatar > div {
  height: 14px;
  width: 14px;
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-sm .modus-wc-chip-remove-icon {
  font-size: var(--modus-wc-font-size-md);
  /* Constrains icon height to its font-size, preventing it from stretching to match the inherited line-height */
  line-height: 1;
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-md {
  height: var(--modus-wc-spacing-2xl);
  min-height: var(--modus-wc-spacing-2xl);
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-sm);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-md modus-wc-avatar .modus-wc-avatar > div {
  height: var(--modus-wc-spacing-lg);
  width: var(--modus-wc-spacing-lg);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-md .modus-wc-chip-remove-icon {
  font-size: var(--modus-wc-font-size-lg);
  /* Constrains icon height to its font-size, preventing it from stretching to match the inherited line-height */
  line-height: 1;
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-lg {
  height: var(--modus-wc-spacing-3xl);
  min-height: var(--modus-wc-spacing-3xl);
  padding: var(--modus-wc-spacing-md) var(--modus-wc-spacing-md);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-lg modus-wc-avatar .modus-wc-avatar > div {
  height: 18px;
  width: 18px;
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-lg .modus-wc-chip-remove-icon {
  font-size: var(--modus-wc-font-size-xl);
  /* Constrains icon height to its font-size, preventing it from stretching to match the inherited line-height */
  line-height: 1;
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip-multiline {
  height: auto;
  line-height: var(--modus-wc-line-height-md);
  text-align: start;
  white-space: normal;
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active {
  background-color: var(--modus-wc-color-primary-pale);
  border-color: transparent;
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active.modus-wc-chip--outline {
  background-color: var(--modus-wc-color-primary-pale);
  border-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active.modus-wc-chip--outline .modus-wc-chip-label {
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--error {
  background-color: var(--modus-wc-color-red-pale);
  border-color: transparent;
  color: var(--modus-wc-color-red-dark);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--error.modus-wc-chip--outline {
  background-color: var(--modus-wc-color-red-pale);
  border-color: var(--modus-wc-color-red-dark);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--outline {
  background-color: var(--modus-wc-color-base-page);
  border-color: var(--modus-wc-color-base-100);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:hover:not(.modus-wc-chip--active):not(.modus-wc-chip--error) {
  color: var(--modus-wc-color-base-content);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:hover:not(.modus-wc-chip--active):not(.modus-wc-chip--error).modus-wc-chip--outline {
  border-color: var(--modus-wc-color-base-200);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active) {
  border-color: transparent;
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active).modus-wc-chip--outline {
  background-color: transparent;
  border-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active).modus-wc-chip--outline .modus-wc-chip-label {
  color: var(--modus-wc-color-primary);
}
modus-wc-chip .modus-wc-chip.modus-wc-btn:focus {
  outline-offset: 0;
}
modus-wc-chip .modus-wc-chip.modus-wc-chip--disabled {
  opacity: 0.3;
  --tw-text-opacity: 1;
}
modus-wc-chip .modus-wc-chip.modus-wc-chip--disabled .modus-wc-avatar {
  filter: grayscale(100%);
}

[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn {
  background-color: var(--modus-wc-color-gray-1);
  border-color: transparent;
  box-sizing: border-box;
  color: var(--modus-wc-color-base-content);
  font-size: var(--modus-wc-font-size-md);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-sm,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-sm {
  font-size: var(--modus-wc-font-size-md);
  height: var(--modus-wc-spacing-xl);
  min-height: var(--modus-wc-spacing-xl);
  padding: var(--modus-wc-spacing-xs) var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-sm modus-wc-avatar .modus-wc-avatar > div,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-sm modus-wc-avatar .modus-wc-avatar > div {
  height: var(--modus-wc-spacing-lg);
  width: var(--modus-wc-font-size-lg);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-sm .modus-wc-chip-remove-icon,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-sm .modus-wc-chip-remove-icon {
  font-size: var(--modus-wc-font-size-md);
  /* Constrains icon height to its font-size, preventing it from stretching to match the inherited line-height */
  line-height: 1;
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-md,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-md {
  font-size: var(--modus-wc-font-size-md);
  height: var(--modus-wc-spacing-2xl);
  min-height: var(--modus-wc-spacing-2xl);
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-md);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-md modus-wc-avatar .modus-wc-avatar > div,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-md modus-wc-avatar .modus-wc-avatar > div {
  height: var(--modus-wc-spacing-lg);
  width: var(--modus-wc-spacing-lg);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-md .modus-wc-chip-remove-icon,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-md .modus-wc-chip-remove-icon {
  font-size: var(--modus-wc-font-size-lg);
  /* Constrains icon height to its font-size, preventing it from stretching to match the inherited line-height */
  line-height: 1;
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-lg,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-lg {
  font-size: var(--modus-wc-font-size-xl);
  height: var(--modus-wc-spacing-3xl);
  min-height: var(--modus-wc-spacing-3xl);
  padding: var(--modus-wc-spacing-md) var(--modus-wc-spacing-lg);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-lg modus-wc-avatar .modus-wc-avatar > div,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-lg modus-wc-avatar .modus-wc-avatar > div {
  height: 18px;
  width: 18px;
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-lg .modus-wc-chip-remove-icon,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-btn-lg .modus-wc-chip-remove-icon {
  font-size: var(--modus-wc-font-size-xl);
  /* Constrains icon height to its font-size, preventing it from stretching to match the inherited line-height */
  line-height: 1;
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip-multiline,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip-multiline {
  height: auto;
  line-height: var(--modus-wc-line-height-md);
  text-align: start;
  white-space: normal;
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active {
  background-color: color-mix(in sRGB, var(--modus-wc-color-highlight-blue) 15%, transparent);
  border-color: transparent;
  color: var(--modus-wc-color-base-content);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active.modus-wc-chip--outline,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active.modus-wc-chip--outline {
  background-color: var(--modus-wc-color-primary);
  border-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active.modus-wc-chip--outline .modus-wc-chip-label,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active.modus-wc-chip--outline .modus-wc-chip-label {
  color: var(--modus-wc-color-base-content);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--error,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--error {
  background-color: var(--modus-wc-color-red-pale);
  border-color: transparent;
  color: var(--modus-wc-color-red-dark);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--error.modus-wc-chip--outline,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--error.modus-wc-chip--outline {
  background-color: var(--modus-wc-color-red-pale);
  border-color: var(--modus-wc-color-red-dark);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--outline,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--outline {
  background-color: transparent;
  border-color: var(--modus-wc-color-base-100);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn:hover:not(.modus-wc-chip--active):not(.modus-wc-chip--error),
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:hover:not(.modus-wc-chip--active):not(.modus-wc-chip--error) {
  background-color: var(--modus-wc-color-base-100);
  border-color: transparent;
  color: var(--modus-wc-color-base-content);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn:hover:not(.modus-wc-chip--active):not(.modus-wc-chip--error).modus-wc-chip--outline,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:hover:not(.modus-wc-chip--active):not(.modus-wc-chip--error).modus-wc-chip--outline {
  background-color: var(--modus-wc-color-base-100);
  border-color: var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-base-content);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active),
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active) {
  background-color: color-mix(in sRGB, var(--modus-wc-color-highlight-blue) 15%, transparent);
  border-color: transparent;
  color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active).modus-wc-chip--outline,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active).modus-wc-chip--outline {
  background-color: color-mix(in sRGB, var(--modus-wc-color-highlight-blue) 15%, transparent);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active).modus-wc-chip--outline .modus-wc-chip-label,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active).modus-wc-chip--outline .modus-wc-chip-label {
  color: var(--modus-wc-color-primary);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-btn:focus,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:focus {
  outline-offset: 0;
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-chip--disabled,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-chip--disabled {
  opacity: 0.3;
  --tw-text-opacity: 1;
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip.modus-wc-chip--disabled .modus-wc-avatar,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-chip--disabled .modus-wc-avatar {
  filter: grayscale(100%);
}
[data-theme=modus-classic-light] modus-wc-chip .modus-wc-chip .modus-wc-avatar,
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip .modus-wc-avatar {
  display: flex;
}

[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn {
  background-color: var(--modus-wc-color-gray-1);
  border-color: var(--modus-wc-color-gray-1);
  color: var(--modus-wc-color-gray-9);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active {
  background-color: var(--modus-wc-color-highlight-blue);
  border-color: transparent;
  color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active.modus-wc-chip--outline {
  background-color: color-mix(in sRGB, var(--modus-wc-color-blue-dark) 50%, transparent);
  border-color: var(--modus-wc-color-highlight-blue);
  color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--active.modus-wc-chip--outline .modus-wc-chip-label {
  color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--error {
  background-color: var(--modus-wc-color-red-pale);
  border-color: transparent;
  color: var(--modus-wc-color-red-dark);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--error.modus-wc-chip--outline {
  background-color: var(--modus-wc-color-red-pale);
  border-color: var(--modus-wc-color-red-dark);
  color: var(--modus-wc-color-red-dark);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn.modus-wc-chip--outline {
  background-color: transparent;
  border-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:hover:not(.modus-wc-chip--active):not(.modus-wc-chip--error) {
  background-color: var(--modus-wc-color-gray-0);
  border-color: transparent;
  color: var(--modus-wc-color-gray-9);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:hover:not(.modus-wc-chip--active):not(.modus-wc-chip--error).modus-wc-chip--outline {
  background-color: color-mix(in sRGB, var(--modus-wc-color-gray-1) 12%, transparent);
  border-color: var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active) {
  background-color: var(--modus-wc-color-highlight-blue);
  border-color: transparent;
  color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active).modus-wc-chip--outline {
  background-color: color-mix(in sRGB, var(--modus-wc-color-blue-dark) 50%, transparent);
  border-color: var(--modus-wc-color-highlight-blue);
  color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-btn:active:not(.modus-wc-chip--error):not(.modus-wc-chip--active).modus-wc-chip--outline .modus-wc-chip-label {
  color: var(--modus-wc-color-gray-1);
}
[data-theme=modus-classic-dark] modus-wc-chip .modus-wc-chip.modus-wc-chip--disabled {
  opacity: 0.6;
  --tw-text-opacity: 1;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-collapse details.modus-wc-collapse > summary {
  display: inline-flex;
}

modus-wc-collapse .modus-wc-collapse {
  background-color: var(--modus-wc-color-base-100);
  border-radius: 0;
  box-sizing: border-box;
  color: var(--modus-wc-color-base-content);
  margin-bottom: var(--modus-wc-spacing-md);
  transition: none;
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title {
  cursor: pointer;
  font-size: var(--modus-wc-font-size-md);
  font-weight: var(--modus-wc-font-weight-semibold);
  min-height: unset;
  padding: var(--modus-wc-spacing-lg) var(--modus-wc-spacing-3xl) var(--modus-wc-spacing-lg) var(--modus-wc-spacing-3xl);
  position: relative;
  width: auto;
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title:hover {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title:focus {
  background-color: var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title:active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title-selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title-active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title-open {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title.selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title.active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title-disabled:hover {
  background-color: inherit;
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title--active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title--selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title:checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title.checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title-checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title.pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title-pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title[aria-pressed=true] {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title:hover, modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title:active, modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title:focus {
  background-color: transparent;
  color: var(--modus-wc-color-base-content);
}
modus-wc-collapse .modus-wc-collapse .description {
  font-size: var(--modus-wc-font-size-md);
  padding-inline-start: var(--modus-wc-spacing-md);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-content {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-title-main-content {
  display: inline-flex;
  flex: 1;
  flex-direction: column;
  min-width: 0;
}
modus-wc-collapse .modus-wc-collapse .modus-wc-summary-main-content {
  align-items: center;
  display: flex;
  justify-content: space-between;
  min-height: 1rem;
  width: 100%;
}
modus-wc-collapse .modus-wc-collapse .modus-wc-title-main-row > modus-wc-icon {
  height: 24px;
  margin-inline-end: var(--modus-wc-spacing-sm);
}
modus-wc-collapse .modus-wc-collapse .modus-wc-title-end-content {
  align-items: center;
  display: inline-flex;
}
modus-wc-collapse .modus-wc-collapse .title-end-icon {
  height: 24px;
  margin-inline-start: var(--modus-wc-spacing-sm);
  pointer-events: none;
  position: relative;
  top: 2px;
}
modus-wc-collapse .modus-wc-collapse .title-start-icon {
  height: 24px;
  inset-inline-start: var(--modus-wc-spacing-lg);
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
modus-wc-collapse .modus-wc-collapse.modus-wc-border {
  background-color: var(--modus-wc-color-base-page);
  border: none;
  border-bottom: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
}
modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open .modus-wc-collapse-content {
  padding: var(--modus-wc-spacing-md);
  padding-top: var(--modus-wc-spacing-sm);
}
modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open .modus-wc-collapse-title {
  color: var(--modus-wc-color-base-content);
}
modus-wc-collapse .modus-wc-collapse.has-start-icon > .modus-wc-collapse-title {
  padding-inline-start: var(--modus-wc-size-xxl);
}
modus-wc-collapse .modus-wc-collapse.has-start-icon > .modus-wc-collapse-title::before {
  inset-inline-start: 49px;
}
modus-wc-collapse .modus-wc-collapse.modus-wc-chevron-left > .modus-wc-collapse-title {
  padding-inline-end: 16px;
}
modus-wc-collapse .modus-wc-collapse.no-leading-icons > .modus-wc-collapse-title {
  padding-inline-start: 16px;
}
modus-wc-collapse .modus-wc-collapse.no-leading-icons > .modus-wc-collapse-description {
  padding-inline-start: var(--modus-wc-spacing-md);
}

.modus-wc-collapse-arrow.modus-wc-chevron-left > .modus-wc-collapse-title::before {
  box-shadow: 2px 2px;
  content: "";
  display: block;
  height: 0.5rem;
  inset-inline-start: var(--modus-wc-spacing-lg);
  pointer-events: none;
  position: absolute;
  top: 44%;
  transform: translateY(-50%) rotate(45deg);
  transform-origin: 75% 75%;
  transition-duration: 0.2s;
  transition-property: transform;
  transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
  width: 0.5rem;
}

.modus-wc-collapse-arrow.modus-wc-chevron-left.modus-wc-collapse-open > .modus-wc-collapse-title::before {
  top: 50%;
  transform: translateY(-50%) rotate(225deg);
}

.modus-wc-collapse-arrow.modus-wc-chevron-left > .modus-wc-collapse-title::after {
  display: none;
}

[data-theme=modus-classic-light] modus-wc-collapse .modus-wc-collapse,
[data-theme=modus-classic-dark] modus-wc-collapse .modus-wc-collapse {
  border-radius: var(--modus-wc-border-radius-md);
  margin-bottom: 0;
  margin-bottom: -1px;
}
[data-theme=modus-classic-light] modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title,
[data-theme=modus-classic-dark] modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title {
  font-weight: var(--modus-wc-font-weight-normal);
  min-height: unset;
  width: auto;
}

[data-theme=modus-classic-light] modus-wc-collapse .modus-wc-collapse {
  background-color: var(--modus-wc-color-white);
  color: inherit;
}
[data-theme=modus-classic-light] modus-wc-collapse .modus-wc-collapse.modus-wc-border {
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
}
[data-theme=modus-classic-light] modus-wc-collapse .modus-wc-collapse .description {
  color: var(--modus-wc-color-gray-6);
}
[data-theme=modus-classic-light] modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open {
  border-left: var(--modus-wc-spacing-xs) solid var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open .modus-wc-collapse-title {
  background-color: var(--modus-wc-color-blue-pale);
  font-weight: var(--modus-wc-font-weight-normal);
}
[data-theme=modus-classic-light] modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open.no-leading-icons .modus-wc-collapse-description {
  padding-inline-start: var(--modus-wc-spacing-md);
}

[data-theme=modus-classic-dark] modus-wc-collapse .modus-wc-collapse {
  background-color: var(--modus-wc-color-trimble-gray);
  color: inherit;
}
[data-theme=modus-classic-dark] modus-wc-collapse .modus-wc-collapse.modus-wc-border {
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
}
[data-theme=modus-classic-dark] modus-wc-collapse .modus-wc-collapse .description {
  color: var(--modus-wc-color-base-inverted);
}
[data-theme=modus-classic-dark] modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open {
  border-left: var(--modus-wc-spacing-xs) solid var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open .modus-wc-collapse-title {
  background-color: color-mix(in sRGB, var(--modus-wc-color-highlight-blue) 30%, transparent);
}
[data-theme=modus-classic-dark] modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open.no-leading-icons .modus-wc-collapse-title, [data-theme=modus-classic-dark] modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open.no-leading-icons .modus-wc-collapse-description {
  padding-inline-start: var(--modus-wc-spacing-md);
}

[data-theme=connect-light] modus-wc-collapse .modus-wc-collapse,
[data-theme=connect-dark] modus-wc-collapse .modus-wc-collapse {
  background-color: var(--modus-wc-color-base-page);
  border: 1px solid var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-base-content);
}
[data-theme=connect-light] modus-wc-collapse .modus-wc-collapse.modus-wc-border,
[data-theme=connect-dark] modus-wc-collapse .modus-wc-collapse.modus-wc-border {
  border-radius: var(--modus-wc-border-radius-box);
}

[data-theme=modus-modern-light] modus-wc-collapse .modus-wc-collapse:not(.modus-wc-border) {
  border-radius: var(--modus-wc-border-radius-box);
}

[data-theme=modus-modern-dark] modus-wc-collapse .modus-wc-collapse:not(.modus-wc-border) {
  border-radius: var(--modus-wc-border-radius-box);
}
[data-theme=modus-modern-dark] modus-wc-collapse .modus-wc-collapse {
  color: var(--modus-wc-color-base-inverted);
}
[data-theme=modus-modern-dark] modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-title,
[data-theme=modus-modern-dark] modus-wc-collapse .modus-wc-collapse .description,
[data-theme=modus-modern-dark] modus-wc-collapse .modus-wc-collapse .modus-wc-collapse-content, [data-theme=modus-modern-dark] modus-wc-collapse .modus-wc-collapse.modus-wc-collapse-arrow.modus-wc-collapse-open .modus-wc-collapse-title {
  color: var(--modus-wc-color-base-inverted);
}
@charset "UTF-8";
/**
* Only add styles here that should not be applied by Tailwind or the theme.
*/
modus-wc-content-tree {
  display: block;
  width: 100%;
  /* Tree menu/item hosts fill tree width (nested submenu uses display: contents). */
}
modus-wc-content-tree > modus-wc-tree-menu {
  display: block;
  width: 100%;
}
modus-wc-content-tree {
  /* Search and toolbar stack vertically above the tree. */
}
modus-wc-content-tree .modus-wc-content-tree-controls {
  display: flex;
  flex-direction: column;
  gap: var(--modus-wc-spacing-xs);
  padding: var(--modus-wc-spacing-sm);
}
modus-wc-content-tree {
  /* Full-width search/toolbar hosts; toolbar chrome overrides below. */
}
modus-wc-content-tree .modus-wc-content-tree-controls > modus-wc-text-input,
modus-wc-content-tree .modus-wc-content-tree-controls > modus-wc-toolbar {
  display: block;
  width: 100%;
}
modus-wc-content-tree {
  /* Strip navbar chrome; pin toolbar strip to sm height. */
}
modus-wc-content-tree .modus-wc-content-tree-toolbar {
  background: transparent;
  border-radius: 0;
  box-shadow: none;
  min-height: var(--modus-wc-size-sm);
  padding: 0;
}
modus-wc-content-tree .modus-wc-content-tree-toolbar-end {
  align-items: center;
  display: flex;
  gap: var(--modus-wc-spacing-xs);
  height: var(--modus-wc-size-sm);
}
modus-wc-content-tree modus-wc-tree-item {
  --modus-wc-content-tree-row-padding-block: var(--modus-wc-spacing-xs);
  --modus-wc-content-tree-row-padding-inline: var(--modus-wc-spacing-sm);
  --modus-wc-content-tree-row-gap: var(--modus-wc-spacing-md);
  --modus-wc-content-tree-end-gap: var(--modus-wc-spacing-xs);
  display: block;
  width: 100%;
}
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item-interactive {
  padding-block: var(--modus-wc-content-tree-row-padding-block);
  padding-inline: var(--modus-wc-content-tree-row-padding-inline);
  position: relative;
  width: 100%;
  /* Chevron/drag/ellipsis triggers: transparent hover/active fills. */
}
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item-interactive modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:hover, modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item-interactive modus-wc-button .modus-wc-btn.modus-wc-btn-borderless:active, modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item-interactive modus-wc-button .modus-wc-btn.modus-wc-btn-borderless[aria-pressed=true] {
  background-color: transparent;
}
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content {
  /* Zero start-slot trailing padding (beats tree-item default). */
}
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content [slot=start],
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content .modus-wc-content-tree-node-start[slot=start] {
  padding-inline-end: 0;
}
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content modus-wc-button.modus-wc-content-tree-drag-handle[slot=start] {
  flex: 0 0 0;
  margin: 0;
  min-width: 0;
  overflow: visible;
  padding: 0;
}
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content modus-wc-checkbox {
  padding-inline-end: 0;
}
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content [slot=end] {
  padding-inline-start: 0;
}
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item-labels {
  flex: 1 1 auto;
  min-width: 0;
  padding-inline: 0;
}
modus-wc-content-tree modus-wc-tree-item .modus-wc-menu-item.modus-wc-content-tree-parent.modus-wc-menu-item-active > .modus-wc-menu-item-interactive {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 50%, transparent);
  border-radius: inherit;
}
modus-wc-content-tree {
  /* Start slot: chevron → checkbox → icon. */
}
modus-wc-content-tree .modus-wc-content-tree-node-start {
  align-items: center;
  display: flex;
  gap: var(--modus-wc-content-tree-row-gap);
}
modus-wc-content-tree .modus-wc-content-tree-node-start modus-wc-button {
  flex: 0 0 auto;
  margin-inline-end: 0;
}
modus-wc-content-tree {
  /* Invisible chevron spacer so leaf labels align with parents. */
}
modus-wc-content-tree .modus-wc-content-tree-toggle-spacer {
  flex: 0 0 auto;
  margin-inline-start: var(--modus-wc-spacing-sm);
  pointer-events: none;
  visibility: hidden;
}
modus-wc-content-tree {
  /* Expand/collapse chevron: sized by atom \`size\` prop. */
}
modus-wc-content-tree .modus-wc-content-tree-node-start modus-wc-button.modus-wc-content-tree-chevron {
  align-items: center;
  display: inline-flex;
  flex: 0 0 auto;
  justify-content: center;
  line-height: 0;
  margin-inline-start: var(--modus-wc-spacing-md);
}
modus-wc-content-tree .modus-wc-content-tree-node-start modus-wc-button.modus-wc-content-tree-chevron .modus-wc-btn {
  align-items: center;
  display: inline-flex;
  justify-content: center;
}
modus-wc-content-tree {
  /* Inline rename/add input fills remaining row width. */
}
modus-wc-content-tree .modus-wc-content-tree-edit-input {
  flex: 1 1 auto;
  min-width: 0;
}
modus-wc-content-tree {
  /* Lazy-load spinner in the toggle column. */
}
modus-wc-content-tree .modus-wc-content-tree-node-start .modus-wc-content-tree-loader {
  flex: 0 0 auto;
  margin-inline-end: 0;
}
modus-wc-content-tree {
  /* Actions menu: hidden until row hover, selection, or actions focus. */
}
modus-wc-content-tree .modus-wc-content-tree-actions {
  align-items: center;
  display: flex;
  gap: 0;
  margin-inline-start: auto;
  opacity: 0;
  padding-inline-start: var(--modus-wc-content-tree-end-gap);
  pointer-events: none;
  transition: opacity 0.1s ease-in-out;
}
modus-wc-content-tree .modus-wc-content-tree-actions:focus-within {
  opacity: 1;
  pointer-events: auto;
}
modus-wc-content-tree .modus-wc-content-tree-actions modus-wc-dropdown-menu {
  background-color: transparent;
  padding-inline-start: 0;
}
modus-wc-content-tree .modus-wc-menu-item-interactive:hover .modus-wc-content-tree-actions {
  opacity: 1;
  pointer-events: auto;
}
modus-wc-content-tree .modus-wc-menu-item-interactive:hover .modus-wc-content-tree-drag-handle {
  cursor: grab;
  opacity: 1;
  pointer-events: auto;
}
modus-wc-content-tree .modus-wc-menu-item-active > .modus-wc-menu-item-interactive .modus-wc-content-tree-actions {
  opacity: 1;
  pointer-events: auto;
}
modus-wc-content-tree {
  /* Locked rows hide ellipsis; eye stays visible. */
}
modus-wc-content-tree .modus-wc-menu-item-disabled .modus-wc-content-tree-actions {
  opacity: 1;
}
modus-wc-content-tree {
  /* Spacer preserves eye position when ellipsis is hidden. */
}
modus-wc-content-tree .modus-wc-content-tree-actions-spacer {
  pointer-events: none;
  visibility: hidden;
}
modus-wc-content-tree {
  /* Only the lock owner can unlock (pointer-events restored). */
}
modus-wc-content-tree .modus-wc-menu-item-disabled .modus-wc-content-tree-actions.modus-wc-content-tree-lock-owner {
  pointer-events: auto;
}
modus-wc-content-tree {
  /* Prevent compounded opacity on nested locked rows. */
}
modus-wc-content-tree .modus-wc-menu-item-disabled .modus-wc-menu-item-disabled {
  opacity: 1;
}
modus-wc-content-tree {
  /* Drag handle: absolute at row start; shown on hover/focus. */
}
modus-wc-content-tree modus-wc-button.modus-wc-content-tree-drag-handle {
  align-items: center;
  cursor: grab;
  display: inline-flex;
  inset-inline-start: 0;
  justify-content: center;
  line-height: 0;
  margin: 0;
  opacity: 0;
  pointer-events: none;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: opacity 0.1s ease-in-out;
  z-index: 2;
  /* Preflight sets button cursor:pointer — use grab on hit target. */
}
modus-wc-content-tree modus-wc-button.modus-wc-content-tree-drag-handle .modus-wc-btn {
  align-items: center;
  cursor: grab;
  display: inline-flex;
  justify-content: center;
  overflow: visible;
}
modus-wc-content-tree modus-wc-button.modus-wc-content-tree-drag-handle .modus-wc-btn:active {
  cursor: grabbing;
}
modus-wc-content-tree modus-wc-button.modus-wc-content-tree-drag-handle .modus-wc-btn i.modus-wc-icon {
  cursor: grab;
  line-height: 1;
}
modus-wc-content-tree modus-wc-button.modus-wc-content-tree-drag-handle:active, modus-wc-content-tree modus-wc-button.modus-wc-content-tree-drag-handle:active .modus-wc-btn {
  cursor: grabbing;
}
modus-wc-content-tree modus-wc-button.modus-wc-content-tree-drag-handle:focus-within {
  cursor: grab;
  opacity: 1;
  pointer-events: auto;
}
modus-wc-content-tree {
  /* Drop indicators: before/after line, inside fill + outline. */
}
modus-wc-content-tree .modus-wc-content-tree-drop-before > .modus-wc-menu-item-interactive::after,
modus-wc-content-tree .modus-wc-content-tree-drop-after > .modus-wc-menu-item-interactive::after {
  background-color: var(--modus-wc-color-primary);
  content: "";
  height: var(--modus-wc-border-width-md, 0.1875rem);
  inset-inline: 0;
  pointer-events: none;
  position: absolute;
}
modus-wc-content-tree .modus-wc-content-tree-drop-before > .modus-wc-menu-item-interactive::after {
  inset-block-start: 0;
}
modus-wc-content-tree .modus-wc-content-tree-drop-after > .modus-wc-menu-item-interactive::after {
  inset-block-end: 0;
}
modus-wc-content-tree .modus-wc-content-tree-drop-inside > .modus-wc-menu-item-interactive {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 60%, transparent);
  border-radius: inherit;
  outline: var(--modus-wc-border-width-sm, 0.0625rem) solid var(--modus-wc-color-primary);
  outline-offset: calc(-1 * var(--modus-wc-border-width-sm, 0.0625rem));
}
modus-wc-content-tree .modus-wc-content-tree-dragging > .modus-wc-menu-item-interactive {
  opacity: 0.5;
}
modus-wc-content-tree .modus-wc-content-tree-modal-content {
  text-align: center;
}
modus-wc-content-tree .modus-wc-content-tree-modal-footer {
  display: flex;
  gap: var(--modus-wc-spacing-md);
  justify-content: center;
}
modus-wc-content-tree {
  /* Family indicator line on the base parent's \`<li>\`. */
}
modus-wc-content-tree .modus-wc-menu-item.modus-wc-content-tree-family-active {
  --modus-wc-content-tree-family-line-width: var(
    --modus-wc-border-width-md,
    0.1875rem
  );
  padding-inline-start: var(--modus-wc-content-tree-family-line-width);
  position: relative;
}
modus-wc-content-tree .modus-wc-menu-item.modus-wc-content-tree-family-active::before {
  background-color: var(--modus-wc-color-primary);
  border-end-start-radius: inherit;
  border-start-start-radius: inherit;
  content: "";
  inset-block: 0;
  inset-inline-start: 0;
  position: absolute;
  width: var(--modus-wc-content-tree-family-line-width);
  z-index: 2;
}
modus-wc-content-tree {
  /* Nested submenu indent: chevron column + row gap per level. */
}
modus-wc-content-tree .modus-wc-tree-menu .modus-wc-menu :where(li ul) {
  margin-inline-start: calc(var(--modus-wc-spacing-lg) + var(--modus-wc-spacing-md));
}
modus-wc-content-tree modus-wc-tree-menu .modus-wc-menu-dropdown {
  margin-inline-start: calc(var(--modus-wc-spacing-lg) + var(--modus-wc-spacing-md));
}
modus-wc-content-tree {
  /* Parent active fill on the row only, not the nested submenu. */
}
modus-wc-content-tree .modus-wc-menu-item.modus-wc-content-tree-parent.modus-wc-menu-item-active {
  background-color: transparent;
}
.modus-wc-input--error {
  border-color: var(--modus-wc-color-error) !important;
}
.modus-wc-input--info {
  border-color: var(--modus-wc-color-info) !important;
}
.modus-wc-input--success {
  border-color: var(--modus-wc-color-success) !important;
}
.modus-wc-input--warning {
  border-color: var(--modus-wc-color-warning) !important;
}
.modus-wc-input-xs {
  height: var(--modus-wc-size-xs);
  min-height: var(--modus-wc-size-xs);
}
.modus-wc-input-sm {
  height: var(--modus-wc-size-sm);
  min-height: var(--modus-wc-size-sm);
}
.modus-wc-input-md {
  height: var(--modus-wc-size-md);
  min-height: var(--modus-wc-size-md);
}
.modus-wc-input-lg {
  height: var(--modus-wc-size-lg);
  min-height: var(--modus-wc-size-lg);
}
.modus-wc-input-xl {
  height: var(--modus-wc-size-xl);
  min-height: var(--modus-wc-size-xl);
}

modus-wc-date .modus-wc-date-input {
  background-color: var(--modus-wc-color-base-page);
}
modus-wc-date .modus-wc-date-input .modus-wc-input-label {
  padding-bottom: var(--modus-wc-spacing-sm);
}
modus-wc-date .modus-wc-date-input--readonly {
  background-color: var(--modus-wc-color-base-200);
}

modus-wc-date {
  --calendar-grid-columns: repeat(7, 1fr);
  --calendar-grid-columns-with-week-numbers: auto repeat(7, 1fr);
  position: relative;
}
modus-wc-date.modus-wc-date-input {
  background-color: var(--modus-wc-color-base-page);
  border-radius: var(--modus-wc-border-radius-input);
  color: var(--modus-wc-color-base-content);
}
modus-wc-date .date-input-container {
  align-items: center;
  display: inline-flex;
  position: relative;
  width: 100%;
}
modus-wc-date .date-input-container .calendar-icon-button {
  align-items: center;
  display: flex;
  justify-content: center;
  position: absolute;
  right: var(--modus-wc-spacing-md);
}
modus-wc-date .date-input-container .calendar-icon-button :hover {
  color: var(--modus-wc-color-primary);
}
modus-wc-date .date-input-container .calendar-icon-button :disabled {
  background-color: transparent;
  cursor: not-allowed;
}
modus-wc-date .calendar-container {
  background: var(--modus-wc-color-base-page);
  border: 1px solid var(--modus-wc-color-base-200);
  border-radius: var(--rounded-box);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  height: 327px;
  overflow: hidden;
  position: fixed;
  width: 272px;
  z-index: 9999;
}
modus-wc-date .calendar-container.has-week-numbers {
  width: 320px;
}
modus-wc-date .calendar-container .calendar-header {
  align-items: center;
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-base-page);
  display: flex;
  gap: var(--modus-wc-spacing-sm);
  justify-content: center;
  padding: var(--modus-wc-spacing-md) var(--modus-wc-spacing-xl);
}
modus-wc-date .calendar-container .calendar-header .nav-btn i {
  color: var(--modus-wc-color-primary-content);
}
modus-wc-date .calendar-container .calendar-header .nav-btn:hover i {
  color: var(--modus-wc-color-primary);
}
modus-wc-date .calendar-container .calendar-header .calendar-selects {
  align-items: center;
  display: flex;
  gap: var(--modus-wc-spacing-xs);
}
modus-wc-date .calendar-container .calendar-header .calendar-selects select {
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  color: var(--modus-wc-color-base-content);
}
modus-wc-date .calendar-container .calendar-header .calendar-selects .month-select {
  border-radius: var(--modus-wc-border-radius-input);
}
modus-wc-date .calendar-container .calendar-header .calendar-selects .year-select {
  border-radius: var(--modus-wc-border-radius-input);
}
modus-wc-date .calendar-container .calendar-header .calendar-selects select option {
  background-color: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
}
modus-wc-date .calendar-container .calendar-body {
  background-color: var(--modus-wc-color-base-page);
  font-size: var(--modus-wc-font-size-md);
  height: 272px;
  padding: var(--modus-wc-spacing-xl);
}
modus-wc-date .calendar-container .calendar-body .calendar-days-week {
  display: grid;
  gap: var(--modus-wc-spacing-xs);
  grid-template-columns: var(--calendar-grid-columns);
  margin-bottom: var(--modus-wc-spacing-sm);
}
modus-wc-date .calendar-container .calendar-body .calendar-days-week.has-week-numbers {
  grid-template-columns: var(--calendar-grid-columns-with-week-numbers);
}
modus-wc-date .calendar-container .calendar-body .calendar-days-week .week-number-header {
  margin-inline-end: var(--modus-wc-spacing-md);
  padding: var(--modus-wc-spacing-xs);
}
modus-wc-date .calendar-container .calendar-body .calendar-days-week .day-header {
  color: var(--modus-wc-color-base-content-high-contrast);
  font-weight: var(--modus-wc-font-weight-bold);
  padding: var(--modus-wc-spacing-xs);
  text-align: center;
}
modus-wc-date .calendar-container .calendar-body .calendar-dates {
  display: grid;
  grid-template-columns: var(--calendar-grid-columns);
}
modus-wc-date .calendar-container .calendar-body .calendar-dates.has-week-numbers {
  grid-template-columns: var(--calendar-grid-columns-with-week-numbers);
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .week-number {
  align-items: center;
  border-inline-end: 1px solid color-mix(in sRGB, var(--modus-wc-color-base-inverted) 10%, transparent);
  display: flex;
  font-size: var(--modus-wc-font-size-sm);
  font-weight: var(--modus-wc-font-weight-bold);
  justify-content: center;
  padding-inline-end: var(--modus-wc-spacing-sm);
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day {
  align-items: center;
  background: none;
  border: none;
  border-radius: 50%;
  color: var(--modus-wc-color-base-content-high-contrast);
  cursor: pointer;
  display: flex;
  height: 32px;
  justify-content: center;
  width: 32px;
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day:hover {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-white);
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day:focus {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-white);
  outline: none;
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day.current-day {
  border: 2px solid var(--modus-wc-color-primary);
  outline: none;
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day.selected {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
  font-weight: var(--modus-wc-font-weight-semibold);
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day.other-month {
  color: var(--modus-wc-color-base-content-high-contrast);
  opacity: 0.5;
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day.other-month:hover {
  background-color: var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-base-content);
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day.disabled {
  color: var(--modus-wc-color-gray-4);
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day.disabled:hover {
  background-color: transparent;
  color: var(--modus-wc-color-gray-4);
}
modus-wc-date .calendar-container .calendar-body .calendar-dates .calendar-day.disabled:focus {
  border: none;
}

[data-theme=modus-modern-light] modus-wc-date .modus-wc-input-label,
[data-theme=modus-modern-dark] modus-wc-date .modus-wc-input-label,
[data-theme=modus-classic-light] modus-wc-date .modus-wc-input-label,
[data-theme=modus-classic-dark] modus-wc-date .modus-wc-input-label {
  padding-bottom: var(--modus-wc-spacing-sm);
}

[data-theme=modus-classic-light] modus-wc-date .modus-wc-date-input.modus-wc-input,
[data-theme=modus-classic-dark] modus-wc-date .modus-wc-date-input.modus-wc-input {
  border-radius: var(--modus-wc-border-radius-md);
  color: var(--modus-wc-color-base-content);
}
[data-theme=modus-classic-light] modus-wc-date .modus-wc-date-input.modus-wc-input.modus-wc-input-sm,
[data-theme=modus-classic-dark] modus-wc-date .modus-wc-date-input.modus-wc-input.modus-wc-input-sm {
  font-size: var(--modus-wc-font-size-sm);
  height: var(--modus-wc-input-height-sm);
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-xs);
}
[data-theme=modus-classic-light] modus-wc-date .modus-wc-date-input.modus-wc-input.modus-wc-input-md,
[data-theme=modus-classic-dark] modus-wc-date .modus-wc-date-input.modus-wc-input.modus-wc-input-md {
  font-size: var(--modus-wc-font-size-md);
  height: var(--modus-wc-input-height-md);
  padding: var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-date .modus-wc-date-input.modus-wc-input.modus-wc-input-lg,
[data-theme=modus-classic-dark] modus-wc-date .modus-wc-date-input.modus-wc-input.modus-wc-input-lg {
  font-size: var(--modus-wc-font-size-lg);
  height: var(--modus-wc-input-height-lg);
  padding: var(--modus-wc-spacing-md) var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-date .modus-wc-date-input.modus-wc-input:focus,
[data-theme=modus-classic-dark] modus-wc-date .modus-wc-date-input.modus-wc-input:focus {
  border-color: var(--modus-wc-color-blue-light);
  border-width: var(--modus-wc-border-width-sm);
}
[data-theme=modus-classic-light] modus-wc-date .modus-wc-date-input.modus-wc-input.modus-wc-date-input--readonly,
[data-theme=modus-classic-dark] modus-wc-date .modus-wc-date-input.modus-wc-input.modus-wc-date-input--readonly {
  background-color: var(--modus-wc-color-base-100);
}

[data-theme=modus-classic-light] modus-wc-date .modus-wc-date-input.modus-wc-input.modus-wc-input-bordered:not(:disabled):not(:focus) {
  border-color: var(--modus-wc-color-gray-6);
}

[data-theme=modus-classic-dark] modus-wc-date .modus-wc-date-input {
  color-scheme: dark;
}
[data-theme=modus-classic-dark] modus-wc-date .modus-wc-date-input.modus-wc-input:focus {
  border-color: var(--modus-wc-color-highlight-blue);
}

[data-theme=connect-light] modus-wc-date .modus-wc-date-input,
[data-theme=connect-dark] modus-wc-date .modus-wc-date-input {
  border-bottom-width: var(--input-bottom-border-width);
  outline-width: 0 !important;
}
[data-theme=connect-light] modus-wc-date .modus-wc-date-input:not(.modus-wc-select, .modus-wc-number-input),
[data-theme=connect-dark] modus-wc-date .modus-wc-date-input:not(.modus-wc-select, .modus-wc-number-input) {
  padding: 0 var(--modus-wc-spacing-sm);
}
[data-theme=connect-light] modus-wc-date .modus-wc-date-input:hover,
[data-theme=connect-dark] modus-wc-date .modus-wc-date-input:hover {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-date .modus-wc-date-input:active,
[data-theme=connect-dark] modus-wc-date .modus-wc-date-input:active {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-date .modus-wc-date-input:focus,
[data-theme=connect-dark] modus-wc-date .modus-wc-date-input:focus {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
[data-theme=connect-light] modus-wc-date .modus-wc-date-input:focus-within,
[data-theme=connect-dark] modus-wc-date .modus-wc-date-input:focus-within {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}

[data-theme=modus-modern-dark] modus-wc-date .calendar-container .calendar-header .nav-btn i,
[data-theme=modus-classic-dark] modus-wc-date .calendar-container .calendar-header .nav-btn i {
  color: var(--modus-wc-color-primary-content);
}
[data-theme=modus-modern-dark] modus-wc-date .calendar-container .calendar-header .calendar-selects select,
[data-theme=modus-classic-dark] modus-wc-date .calendar-container .calendar-header .calendar-selects select {
  background-color: unset;
  color: var(--modus-wc-color-base-content);
  font-weight: 600;
}
[data-theme=modus-modern-dark] modus-wc-date .calendar-container .calendar-header .calendar-selects select option,
[data-theme=modus-classic-dark] modus-wc-date .calendar-container .calendar-header .calendar-selects select option {
  background-color: var(--modus-wc-color-black);
  color: var(--modus-wc-color-white);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-divider .modus-wc-divider.modus-wc-divider-primary::before, modus-wc-divider .modus-wc-divider.modus-wc-divider-primary::after {
  background-color: var(--modus-wc-color-primary);
}
modus-wc-divider .modus-wc-divider.modus-wc-divider-accent::before, modus-wc-divider .modus-wc-divider.modus-wc-divider-accent::after {
  background-color: var(--modus-wc-color-info-blue);
}

[data-theme=modus-classic-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::before, [data-theme=modus-classic-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::after,
[data-theme=modus-modern-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::before,
[data-theme=modus-modern-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::after,
[data-theme=connect-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::before,
[data-theme=connect-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::after {
  background-color: color-mix(in sRGB, var(--modus-wc-color-gray-10) 10%, transparent);
}
[data-theme=modus-classic-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::before, [data-theme=modus-classic-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::after,
[data-theme=modus-modern-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::before,
[data-theme=modus-modern-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::after,
[data-theme=connect-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::before,
[data-theme=connect-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::after {
  background-color: var(--modus-wc-color-green-dark);
}
[data-theme=modus-classic-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::before, [data-theme=modus-classic-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::after,
[data-theme=modus-modern-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::before,
[data-theme=modus-modern-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::after,
[data-theme=connect-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::before,
[data-theme=connect-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::after {
  background-color: var(--modus-wc-color-red-dark);
}
[data-theme=modus-classic-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::before, [data-theme=modus-classic-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::after,
[data-theme=modus-modern-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::before,
[data-theme=modus-modern-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::after,
[data-theme=connect-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::before,
[data-theme=connect-light] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::after {
  background-color: var(--modus-wc-color-yellow-dark);
}

[data-theme=modus-classic-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::before, [data-theme=modus-classic-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::after,
[data-theme=modus-modern-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::before,
[data-theme=modus-modern-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::after,
[data-theme=connect-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::before,
[data-theme=connect-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-neutral::after {
  background-color: color-mix(in sRGB, var(--modus-wc-color-gray-light) 10%, transparent);
}
[data-theme=modus-classic-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::before, [data-theme=modus-classic-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::after,
[data-theme=modus-modern-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::before,
[data-theme=modus-modern-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::after,
[data-theme=connect-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::before,
[data-theme=connect-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-success::after {
  background-color: var(--modus-wc-color-green-light);
}
[data-theme=modus-classic-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::before, [data-theme=modus-classic-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::after,
[data-theme=modus-modern-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::before,
[data-theme=modus-modern-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::after,
[data-theme=connect-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::before,
[data-theme=connect-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-error::after {
  background-color: var(--modus-wc-color-red-light);
}
[data-theme=modus-classic-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::before, [data-theme=modus-classic-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::after,
[data-theme=modus-modern-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::before,
[data-theme=modus-modern-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::after,
[data-theme=connect-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::before,
[data-theme=connect-dark] modus-wc-divider .modus-wc-divider.modus-wc-divider-warning::after {
  background-color: var(--modus-wc-color-yellow-light);
}
@charset "UTF-8";
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-dropdown-menu.modus-wc-dropdown-menu {
  background-color: var(--modus-wc-color-base-page);
}
modus-wc-dropdown-menu.modus-wc-dropdown-menu .menu-wrapper {
  left: 0;
  position: absolute;
  top: 0;
  width: max-content;
}
modus-wc-dropdown-menu.modus-wc-dropdown-menu {
  /* Popover menu — not a nested collapsible submenu. Suppress DaisyUI's
     :where(li ul) indent and ::before indicator when placed inside a menu li. */
}
modus-wc-dropdown-menu.modus-wc-dropdown-menu modus-wc-menu .modus-wc-menu {
  margin-inline-start: 0;
  padding-inline-start: 0;
}
modus-wc-dropdown-menu.modus-wc-dropdown-menu modus-wc-menu .modus-wc-menu::before {
  content: none;
}
modus-wc-dropdown-menu.modus-wc-dropdown-menu .modus-wc-menu-item > button:hover {
  border-radius: 0;
}
modus-wc-file-dropzone .modus-wc-file-dropzone .modus-wc-file-input {
  display: none;
}
modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content {
  align-items: center;
  background-color: var(--modus-wc-color-base-page);
  border: 0.125rem dashed var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-base-content);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  font-weight: 600;
  height: 201px;
  justify-content: center;
  padding: 0.75rem 1rem;
  transition: background-color 0.2s ease;
  width: 431px;
}
modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content.dragging-over {
  background-color: var(--modus-wc-color-primary-pale);
  border-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary);
}
modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content.invalid-file-type {
  background-color: color-mix(in sRGB, var(--modus-wc-color-error-pale) 80%, transparent);
  border-color: var(--modus-wc-color-error);
  color: var(--modus-wc-color-error);
}
modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content.upload-success {
  background-color: color-mix(in sRGB, var(--modus-wc-color-success-pale) 80%, transparent);
  border-color: var(--modus-wc-color-success);
  color: var(--modus-wc-color-success);
}
modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content .default-content {
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content .default-content span {
  text-align: center;
}
modus-wc-file-dropzone .modus-wc-file-dropzone:has(input:disabled) .dropzone-content {
  background-color: var(--modus-wc-color-base-100);
  border-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-base-200);
  cursor: not-allowed;
}

[data-theme=modus-classic-dark] modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content,
[data-theme=connect-dark] modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content {
  background-color: var(--modus-wc-color-gray-10);
  color: var(--modus-wc-color-gray-3);
}
[data-theme=modus-classic-dark] modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content.dragging-over,
[data-theme=connect-dark] modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content.dragging-over {
  background-color: color-mix(in sRGB, var(--modus-wc-color-highlight-blue) 30%, transparent);
  border-color: var(--modus-wc-color-highlight-blue);
  color: var(--modus-wc-color-gray-light);
}
[data-theme=modus-classic-dark] modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content.invalid-file-type,
[data-theme=connect-dark] modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content.invalid-file-type {
  background-color: color-mix(in sRGB, var(--modus-wc-color-red) 50%, transparent);
  border-color: var(--modus-wc-color-red);
  color: var(--modus-wc-color-gray-light);
}
[data-theme=modus-classic-dark] modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content.upload-success,
[data-theme=connect-dark] modus-wc-file-dropzone .modus-wc-file-dropzone .dropzone-content.upload-success {
  background-color: color-mix(in sRGB, var(--modus-wc-color-green) 50%, transparent);
  border-color: var(--modus-wc-color-green);
  color: var(--modus-wc-color-gray-light);
}
[data-theme=modus-classic-dark] modus-wc-file-dropzone .modus-wc-file-dropzone:has(input:disabled) .dropzone-content,
[data-theme=connect-dark] modus-wc-file-dropzone .modus-wc-file-dropzone:has(input:disabled) .dropzone-content {
  background-color: var(--modus-wc-color-gray-9);
  border-color: var(--modus-wc-color-gray-3);
  color: var(--modus-wc-color-gray-3);
  cursor: not-allowed;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
.modus-wc-handle-container {
  align-items: center;
  background-color: transparent;
  display: flex;
  justify-content: center;
  outline: none;
  padding: 0;
  position: relative;
}
.modus-wc-handle-container:focus {
  outline: var(--modus-wc-border-width-sm) solid var(--modus-wc-color-primary);
  outline-offset: var(--modus-wc-border-width-sm);
}
.modus-wc-handle-container:hover {
  cursor: row-resize;
}
.modus-wc-handle-container:hover.modus-wc-handle-vertical {
  cursor: col-resize;
}

.modus-wc-handle-horizontal {
  flex-direction: column;
}
.modus-wc-handle-horizontal.modus-wc-handle-compact {
  height: var(--modus-wc-spacing-sm);
}
.modus-wc-handle-horizontal.modus-wc-handle-comfortable {
  height: var(--modus-wc-spacing-md);
}
.modus-wc-handle-horizontal.modus-wc-handle-relaxed {
  height: var(--modus-wc-spacing-lg);
}
.modus-wc-handle-horizontal.modus-wc-handle-type-button {
  height: var(--modus-wc-spacing-xs);
}

.modus-wc-handle-vertical {
  flex-direction: row;
  height: 100%;
}
.modus-wc-handle-vertical.modus-wc-handle-compact {
  width: var(--modus-wc-spacing-sm);
}
.modus-wc-handle-vertical.modus-wc-handle-comfortable {
  width: var(--modus-wc-spacing-md);
}
.modus-wc-handle-vertical.modus-wc-handle-relaxed {
  width: var(--modus-wc-spacing-lg);
}
.modus-wc-handle-vertical.modus-wc-handle-type-button {
  width: var(--modus-wc-spacing-xs);
}

.modus-wc-handle-bar {
  background-color: var(--modus-wc-color-base-200);
  border-radius: var(--modus-wc-border-radius-md);
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}

.modus-wc-handle-horizontal .modus-wc-handle-bar {
  height: var(--modus-wc-spacing-xs);
}

.modus-wc-handle-vertical .modus-wc-handle-bar {
  width: var(--modus-wc-spacing-xs);
}

.modus-wc-handle-horizontal.modus-wc-handle-default .modus-wc-handle-bar {
  width: 44px;
}

.modus-wc-handle-horizontal.modus-wc-handle-lg .modus-wc-handle-bar {
  width: 80px;
}

.modus-wc-handle-horizontal.modus-wc-handle-xl .modus-wc-handle-bar {
  width: 144px;
}

.modus-wc-handle-horizontal.modus-wc-handle-2xl .modus-wc-handle-bar {
  width: 224px;
}

.modus-wc-handle-vertical.modus-wc-handle-default .modus-wc-handle-bar {
  height: 44px;
}

.modus-wc-handle-vertical.modus-wc-handle-lg .modus-wc-handle-bar {
  height: 80px;
}

.modus-wc-handle-vertical.modus-wc-handle-xl .modus-wc-handle-bar {
  height: 144px;
}

.modus-wc-handle-vertical.modus-wc-handle-2xl .modus-wc-handle-bar {
  height: 224px;
}

.modus-wc-handle-type-button .modus-wc-handle-button-wrapper {
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
}
modus-wc-icon .modus-icons.modus-wc-icon--xs,
modus-wc-icon .modus-icons-outlined.modus-wc-icon--xs,
modus-wc-icon .modus-icons-solid.modus-wc-icon--xs {
  font-size: 1rem;
}
modus-wc-icon .modus-icons.modus-wc-icon--sm,
modus-wc-icon .modus-icons-outlined.modus-wc-icon--sm,
modus-wc-icon .modus-icons-solid.modus-wc-icon--sm {
  font-size: 1.25rem;
}
modus-wc-icon .modus-icons.modus-wc-icon--md,
modus-wc-icon .modus-icons-outlined.modus-wc-icon--md,
modus-wc-icon .modus-icons-solid.modus-wc-icon--md {
  font-size: 1.5rem;
}
modus-wc-icon .modus-icons.modus-wc-icon--lg,
modus-wc-icon .modus-icons-outlined.modus-wc-icon--lg,
modus-wc-icon .modus-icons-solid.modus-wc-icon--lg {
  font-size: 2rem;
}
modus-wc-icon .modus-icons.modus-wc-icon--xl,
modus-wc-icon .modus-icons-outlined.modus-wc-icon--xl,
modus-wc-icon .modus-icons-solid.modus-wc-icon--xl {
  font-size: 4rem;
}

modus-wc-icon i::before,
modus-wc-icon i::after {
  font-family: inherit !important;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-input-feedback .modus-wc-input-feedback {
  align-items: center;
  border-radius: 0 0 var(--modus-wc-border-radius-sm) var(--modus-wc-border-radius-sm);
  display: flex;
  font-weight: var(--modus-wc-font-weight-semibold);
  gap: var(--modus-wc-spacing-sm);
  margin-top: var(--modus-wc-spacing-sm);
  padding: var(--modus-wc-spacing-xs) 0;
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--sm {
  font-size: var(--modus-wc-font-size-xs);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--sm .modus-wc-input-feedback-icon {
  height: var(--modus-wc-font-size-lg);
  width: var(--modus-wc-font-size-lg);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--md {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--md .modus-wc-input-feedback-icon {
  height: var(--modus-wc-font-size-xl);
  width: var(--modus-wc-font-size-xl);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--lg {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--lg .modus-wc-input-feedback-icon {
  height: var(--modus-wc-font-size-2xl);
  width: var(--modus-wc-font-size-2xl);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback {
  background-color: var(--modus-wc-color-base-100);
  border-radius: var(--modus-wc-border-radius-lg);
  padding: var(--modus-wc-spacing-sm);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--error {
  color: var(--modus-wc-color-error);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--info {
  color: var(--modus-wc-color-info);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--success {
  color: var(--modus-wc-color-success);
}
modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--warning {
  color: var(--modus-wc-color-warning);
}

[data-theme=modus-classic-light] modus-wc-input-feedback .modus-wc-input-feedback {
  border-radius: 0;
  margin-top: 0;
  padding: var(--modus-wc-spacing-xs) 0;
}
[data-theme=modus-classic-light] modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--error {
  background-color: transparent;
  color: var(--modus-wc-color-red);
}
[data-theme=modus-classic-light] modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--info {
  background-color: transparent;
  color: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--success {
  background-color: transparent;
  color: var(--modus-wc-color-green-dark);
}
[data-theme=modus-classic-light] modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--warning {
  background-color: transparent;
  color: var(--modus-wc-color-yellow-dark);
}

[data-theme=modus-classic-dark] modus-wc-input-feedback .modus-wc-input-feedback {
  border-radius: 0;
  color: var(--modus-wc-color-white);
  margin-top: 0;
  padding: var(--modus-wc-spacing-xs) 0;
}
[data-theme=modus-classic-dark] modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--error {
  background-color: var(--modus-wc-color-red);
}
[data-theme=modus-classic-dark] modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--info {
  background-color: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-dark] modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--success {
  background-color: var(--modus-wc-color-green-dark);
}
[data-theme=modus-classic-dark] modus-wc-input-feedback .modus-wc-input-feedback.modus-wc-input-feedback--warning {
  background-color: var(--modus-wc-color-yellow-dark);
  color: var(--modus-wc-color-black);
}
modus-wc-input-label.modus-wc-input-label-host {
  align-items: center;
  display: flex;
}

modus-wc-input-label .modus-wc-input-label {
  font-weight: var(--modus-wc-font-weight-bold);
}
modus-wc-input-label .modus-wc-input-label.modus-wc-input-label-size-sm {
  font-size: var(--modus-wc-font-size-xs);
}
modus-wc-input-label .modus-wc-input-label.modus-wc-input-label-size-sm .modus-wc-input-label-sublabel {
  font-size: var(--modus-wc-font-size-2xs);
}
modus-wc-input-label .modus-wc-input-label.modus-wc-input-label-size-md {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-input-label .modus-wc-input-label.modus-wc-input-label-size-md .modus-wc-input-label-sublabel {
  font-size: var(--modus-wc-font-size-xs);
}
modus-wc-input-label .modus-wc-input-label.modus-wc-input-label-size-lg {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-input-label .modus-wc-input-label.modus-wc-input-label-size-lg .modus-wc-input-label-sublabel {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-input-label .modus-wc-input-label .required-indicator {
  color: var(--modus-wc-color-error);
}

[data-theme=modus-classic-light] modus-wc-input-label .modus-wc-input-label {
  color: var(--modus-wc-color-gray-8);
}

[data-theme=modus-classic-dark] modus-wc-input-label .modus-wc-input-label {
  color: var(--modus-wc-color-gray-2);
}

[data-theme=connect-light] modus-wc-input-label .modus-wc-input-label {
  color: oklch(var(--s));
  font-weight: var(--modus-wc-font-weight-normal);
  margin-bottom: 0;
  min-height: var(--modus-wc-line-height-md);
}

[data-theme=connect-dark] modus-wc-input-label .modus-wc-input-label {
  color: var(--modus-wc-color-white);
  font-weight: var(--modus-wc-font-weight-normal);
  margin-bottom: 0;
  min-height: var(--modus-wc-line-height-md);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-link a.modus-wc-link.modus-wc-link-color-primary {
  color: var(--modus-wc-color-primary);
}
modus-wc-link a.modus-wc-link.modus-wc-link-color-secondary {
  color: var(--modus-wc-color-secondary);
}
modus-wc-link a.modus-wc-link.modus-wc-link-color-tertiary {
  color: var(--modus-wc-color-base-inverted);
}
modus-wc-link a.modus-wc-link.modus-wc-link-color-success {
  color: var(--modus-wc-color-success);
}
modus-wc-link a.modus-wc-link.modus-wc-link-color-info {
  color: var(--modus-wc-color-info);
}
modus-wc-link a.modus-wc-link.modus-wc-link-color-warning {
  color: var(--modus-wc-color-warning);
}
modus-wc-link a.modus-wc-link.modus-wc-link-color-danger {
  color: var(--modus-wc-color-error);
}
modus-wc-link a.modus-wc-link.modus-wc-link-color-inherit {
  color: inherit;
}
/**
* This component uses styles adapted from DaisyUI's loading component.
*   https://github.com/saadeghi/daisyui/blob/master/src/components/styled/loading.css
*
* We found that 'loading' classes from DaisyUI will break styles in the Modus Web Components during
* the build process so we define all styles here for this component.
*
* Note: do not use the 'loading' classes from DaisyUI in this component.
*/
modus-wc-loader .modus-wc-loader {
  aspect-ratio: 1/1;
  background-color: currentColor;
  display: inline-block;
  mask-position: center;
  mask-repeat: no-repeat;
  mask-size: 100%;
  pointer-events: none;
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-xs {
  width: 1rem;
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-sm {
  width: 1.25rem;
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-md {
  width: 1.5rem;
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-lg {
  width: 2.5rem;
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-ball {
  mask-image: url("data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_rXNP%7Banimation:spinner_YeBj .8s infinite%7D@keyframes spinner_YeBj%7B0%25%7Banimation-timing-function:cubic-bezier(0.33,0,.66,.33);cy:5px%7D46.875%25%7Bcy:20px;rx:4px;ry:4px%7D50%25%7Banimation-timing-function:cubic-bezier(0.33,.66,.66,1);cy:20.5px;rx:4.8px;ry:3px%7D53.125%25%7Brx:4px;ry:4px%7D100%25%7Bcy:5px%7D%7D%3C/style%3E%3Cellipse class='spinner_rXNP' cx='12' cy='5' rx='4' ry='4'/%3E%3C/svg%3E");
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-bars {
  mask-image: url("data:image/svg+xml,%0A%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_hzlK%7Banimation:spinner_vc4H .8s linear infinite;animation-delay:-.8s%7D.spinner_koGT%7Banimation-delay:-.65s%7D.spinner_YF1u%7Banimation-delay:-.5s%7D@keyframes spinner_vc4H%7B0%25%7By:1px;height:22px%7D93.75%25%7By:5px;height:14px;opacity:.2%7D%7D%3C/style%3E%3Crect class='spinner_hzlK' x='1' y='1' width='6' height='22'/%3E%3Crect class='spinner_hzlK spinner_koGT' x='9' y='1' width='6' height='22'/%3E%3Crect class='spinner_hzlK spinner_YF1u' x='17' y='1' width='6' height='22'/%3E%3C/svg%3E");
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-dots {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_qM83%7Banimation:spinner_8HQG 1.05s infinite%7D.spinner_oXPr%7Banimation-delay:.1s%7D.spinner_ZTLf%7Banimation-delay:.2s%7D@keyframes spinner_8HQG%7B0%25,57.14%25%7Banimation-timing-function:cubic-bezier(0.33,.66,.66,1);transform:translate(0)%7D28.57%25%7Banimation-timing-function:cubic-bezier(0.33,0,.66,.33);transform:translateY(-6px)%7D100%25%7Btransform:translate(0)%7D%7D%3C/style%3E%3Ccircle class='spinner_qM83' cx='4' cy='12' r='3'/%3E%3Ccircle class='spinner_qM83 spinner_oXPr' cx='12' cy='12' r='3'/%3E%3Ccircle class='spinner_qM83 spinner_ZTLf' cx='20' cy='12' r='3'/%3E%3C/svg%3E");
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-infinity {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' style='shape-rendering: auto;' width='200px' height='200px' viewBox='0 0 100 100' preserveAspectRatio='xMidYMid'%3E%3Cpath fill='none' stroke='%230a0a0a' stroke-width='10' stroke-dasharray='205.271142578125 51.317785644531256' d='M24.3 30C11.4 30 5 43.3 5 50s6.4 20 19.3 20c19.3 0 32.1-40 51.4-40 C88.6 30 95 43.3 95 50s-6.4 20-19.3 20C56.4 70 43.6 30 24.3 30z' stroke-linecap='round' style='transform:scale(0.8);transform-origin:50px 50px'%3E%3Canimate attributeName='stroke-dashoffset' repeatCount='indefinite' dur='2s' keyTimes='0;1' values='0;256.58892822265625'%3E%3C/animate%3E%3C/path%3E%3C/svg%3E");
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-ring {
  mask-image: url("data:image/svg+xml,%3Csvg width='44' height='44' viewBox='0 0 44 44' xmlns='http://www.w3.org/2000/svg' stroke='%23fff'%3E%3Cg fill='none' fill-rule='evenodd' stroke-width='2'%3E%3Ccircle cx='22' cy='22' r='1'%3E%3Canimate attributeName='r' begin='0s' dur='1.8s' values='1; 20' calcMode='spline' keyTimes='0; 1' keySplines='0.165, 0.84, 0.44, 1' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='0s' dur='1.8s' values='1; 0' calcMode='spline' keyTimes='0; 1' keySplines='0.3, 0.61, 0.355, 1' repeatCount='indefinite' /%3E%3C/circle%3E%3Ccircle cx='22' cy='22' r='1'%3E%3Canimate attributeName='r' begin='-0.9s' dur='1.8s' values='1; 20' calcMode='spline' keyTimes='0; 1' keySplines='0.165, 0.84, 0.44, 1' repeatCount='indefinite' /%3E%3Canimate attributeName='stroke-opacity' begin='-0.9s' dur='1.8s' values='1; 0' calcMode='spline' keyTimes='0; 1' keySplines='0.3, 0.61, 0.355, 1' repeatCount='indefinite' /%3E%3C/circle%3E%3C/g%3E%3C/svg%3E");
}
modus-wc-loader .modus-wc-loader.modus-wc-loader-spinner {
  mask-image: url("data:image/svg+xml,%3Csvg width='24' height='24' stroke='%23000' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'%3E%3Cstyle%3E.spinner_V8m1%7Btransform-origin:center;animation:spinner_zKoa 2s linear infinite%7D.spinner_V8m1 circle%7Bstroke-linecap:round;animation:spinner_YpZS 1.5s ease-out infinite%7D%40keyframes spinner_zKoa%7B100%25%7Btransform:rotate(360deg)%7D%7D%40keyframes spinner_YpZS%7B0%25%7Bstroke-dasharray:0 150;stroke-dashoffset:0%7D47.5%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-16%7D95%25%2C100%25%7Bstroke-dasharray:42 150;stroke-dashoffset:-59%7D%7D%3C%2Fstyle%3E%3Cg class='spinner_V8m1'%3E%3Ccircle cx='12' cy='12' r='9.5' fill='none' stroke-width='3'%3E%3C%2Fcircle%3E%3C%2Fg%3E%3C%2Fsvg%3E");
}
.modus-wc-logo {
  display: block;
}
.modus-wc-logo svg {
  display: block;
  height: 100%;
  width: 100%;
}
.modus-wc-logo .logo-emblem-trimble {
  fill: var(--modus-wc-color-info-blue-on-dark);
}
.modus-wc-logo .logo-accent {
  fill: var(--modus-wc-color-primary);
}
.modus-wc-logo .logo-text {
  fill: var(--modus-wc-color-base-inverted);
}
.modus-wc-logo .logo-secondary {
  fill: var(--modus-wc-color-secondary);
}
.modus-wc-logo.logo-combined {
  align-items: center;
  display: flex;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-menu.modus-wc-menu-submenu {
  display: contents;
}

modus-wc-menu .modus-wc-menu {
  background-color: var(--modus-wc-color-base-page);
  border-radius: var(--modus-wc-border-radius-md);
  /* Enforce Tailwind CSS reset */
  list-style: none;
  margin: 0;
  overflow: hidden;
  padding: 0;
  padding-inline-start: 0;
}
modus-wc-menu .modus-wc-menu.modus-wc-menu--bordered {
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
}

modus-wc-menu .modus-wc-menu-dropdown {
  display: none;
  list-style: none;
}
modus-wc-menu .modus-wc-menu-dropdown-show {
  display: block;
}

[data-theme=modus-classic-light] modus-wc-menu .modus-wc-menu {
  background-color: var(--modus-wc-color-white);
  border-color: var(--modus-wc-color-gray-0);
}

[data-theme=modus-classic-dark] modus-wc-menu .modus-wc-menu {
  background-color: var(--modus-wc-color-black);
  border-color: var(--modus-wc-color-gray-8);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-menu-item .modus-wc-menu-item button {
  align-items: center;
  border-radius: inherit;
  display: flex;
  width: 100%;
}
modus-wc-menu-item .modus-wc-menu-item button:hover {
  background-color: transparent;
}
modus-wc-menu-item .modus-wc-menu-item button:focus {
  background-color: transparent;
}
modus-wc-menu-item .modus-wc-menu-item button.modus-wc-menu-dropdown-toggle::after {
  color: var(--modus-wc-color-base-content);
}
modus-wc-menu-item .modus-wc-menu-item button .modus-wc-menu-item-content {
  align-items: center;
  display: flex;
  width: 100%;
}
modus-wc-menu-item .modus-wc-menu-item button .modus-wc-menu-item-content [slot=start-icon] {
  padding-inline-end: var(--modus-wc-spacing-sm);
}
modus-wc-menu-item .modus-wc-menu-item button .modus-wc-menu-item-content modus-wc-checkbox {
  padding-inline-end: var(--modus-wc-spacing-sm);
}
modus-wc-menu-item .modus-wc-menu-item button .modus-wc-menu-item-content .modus-wc-menu-item-labels {
  padding-inline-end: var(--modus-wc-spacing-xs);
  padding-inline-start: var(--modus-wc-spacing-md);
  white-space: nowrap;
}
modus-wc-menu-item .modus-wc-menu-item button .modus-wc-menu-item-content .modus-wc-menu-item-sublabel {
  font-size: var(--modus-wc-font-size-sm);
  white-space: nowrap;
}
modus-wc-menu-item .modus-wc-menu-item button .modus-wc-menu-item-content .modus-wc-menu-item-selected-icon {
  margin-left: auto;
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-sm button {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-sm button .modus-wc-menu-item-sublabel {
  font-size: var(--modus-wc-font-size-xs);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-md button {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-md button .modus-wc-menu-item-sublabel {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-lg button {
  font-size: var(--modus-wc-font-size-lg);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-lg button .modus-wc-menu-item-sublabel {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-bordered {
  border-bottom: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
  border-radius: 0;
  border-top: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
}
modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-selected) {
  color: var(--modus-wc-color-base-content);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-selected {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 50%, transparent);
  border-radius: inherit;
  color: var(--modus-wc-base-content);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-selected:focus {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 50%, transparent);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-selected button {
  background-color: transparent;
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-selected button:hover, modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-selected button:focus {
  background-color: transparent;
  border-radius: inherit;
  box-shadow: none;
  color: inherit;
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 50%, transparent);
  border-radius: inherit;
  color: var(--modus-wc-color-base-content);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active:focus {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 50%, transparent);
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button {
  background-color: transparent;
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button:hover, modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button:focus {
  background-color: transparent;
  border-radius: inherit;
  box-shadow: none;
  color: inherit;
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-disabled {
  opacity: 0.4;
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-disabled button {
  pointer-events: none;
}
modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-disabled):not(.modus-wc-menu-item-focused):not(:has(.modus-wc-menu-dropdown)):hover {
  background-color: var(--modus-wc-color-base-100);
  outline: none;
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-focused:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):hover {
  background-color: var(--modus-wc-color-base-100);
}
modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):focus:not(:focus-visible), modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)).modus-wc-arrow-focused {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-primary);
  outline: none;
}
modus-wc-menu-item .modus-wc-menu-item:focus-visible {
  background-color: transparent;
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: -2px;
}
modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-focused {
  border-radius: inherit;
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: -2px;
}

[data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active),
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active) {
  color: var(--modus-wc-color-gray-light);
}
[data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item button.modus-wc-menu-dropdown-toggle::after,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item button.modus-wc-menu-dropdown-toggle::after {
  color: var(--modus-wc-color-gray-3);
}
[data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-disabled):not(.modus-wc-menu-item-focused):not(:has(.modus-wc-menu-dropdown)):hover,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-disabled):not(.modus-wc-menu-item-focused):not(:has(.modus-wc-menu-dropdown)):hover {
  background-color: var(--modus-wc-color-gray-9);
  color: inherit;
  outline: none;
}
[data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-focused:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):hover,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-focused:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):hover {
  background-color: var(--modus-wc-color-gray-9);
  color: inherit;
}
[data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active, [data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)),
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)) {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary) 30%, transparent);
}
[data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button, [data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)) button,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)) button {
  background-color: transparent;
}
[data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button:hover, [data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button:focus, [data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)) button:hover, [data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)) button:focus,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button:hover,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button:focus,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)) button:hover,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)) button:focus {
  background-color: transparent;
  box-shadow: none;
  color: inherit;
}
[data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):focus:not(:focus-visible), [data-theme=modus-classic-dark] modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)).modus-wc-arrow-focused,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):focus:not(:focus-visible),
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)).modus-wc-arrow-focused {
  background-color: var(--modus-wc-color-gray-9);
}

[data-theme=connect-light] modus-wc-menu-item .modus-wc-menu-item > button.modus-wc-menu-dropdown-toggle::after,
[data-theme=connect-dark] modus-wc-menu-item .modus-wc-menu-item > button.modus-wc-menu-dropdown-toggle::after {
  color: var(--modus-wc-color-white);
}

/* Connect side nav: never paint li with base-100 on hover (white flash on blue panel). */
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu .modus-wc-menu li.modus-wc-menu-item:not(.modus-wc-menu-item-active):hover {
  background-color: transparent;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-disabled):not(.modus-wc-menu-item-focused):not(:has(.modus-wc-menu-dropdown)):hover {
  background-color: transparent;
  outline: none;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-focused:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):hover {
  background-color: transparent;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):focus:not(:focus-visible), [data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)).modus-wc-arrow-focused {
  background-color: transparent;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item:not(.modus-wc-menu-item-active) > button:hover {
  background-color: var(--modus-wc-color-trimble-blue);
  color: var(--modus-wc-color-white);
}
modus-wc-modal .modus-wc-modal {
  box-sizing: border-box;
  color: var(--modus-wc-color-base-content);
}
modus-wc-modal .modus-wc-modal .modus-wc-modal-box {
  display: flex;
  flex-direction: column;
}
modus-wc-modal .modus-wc-modal .modus-wc-modal-box .modus-wc-modal-header {
  align-items: center;
  display: flex;
}
modus-wc-modal .modus-wc-modal .modus-wc-modal-box .modus-wc-modal-header > span {
  border-radius: var(--rounded-box);
  display: block;
}
modus-wc-modal .modus-wc-modal .modus-wc-modal-box .modus-wc-modal-header .modus-wc-modal-top-icon-buttons {
  display: flex;
  margin-inline-start: auto;
}
modus-wc-modal .modus-wc-modal .modus-wc-modal-box .modus-wc-modal-header .modus-wc-modal-top-icon-buttons svg {
  height: 24px;
  width: 24px;
}
modus-wc-modal .modus-wc-modal .modus-wc-modal-box.modus-wc-modal-fullscreen {
  border-radius: 0;
  height: 100dvh;
  max-height: none;
  max-width: none;
  width: 100dvw;
}
modus-wc-modal .modus-wc-modal .modus-wc-modal-box .modus-wc-modal-action {
  margin-top: auto;
}

.modus-wc-modal-content {
  height: 100%;
}
.modus-wc-modal-content > span {
  border-radius: var(--rounded-box);
  display: block;
  height: 100%;
}

[data-theme^=modus-modern] .modus-wc-modal-content > span,
[data-theme^=connect] .modus-wc-modal-content > span {
  display: flex;
  flex-direction: column;
  gap: var(--modus-wc-spacing-sm);
}
[data-theme^=modus-modern] .modus-wc-modal-action,
[data-theme^=connect] .modus-wc-modal-action {
  display: flex;
  gap: var(--modus-wc-spacing-sm);
  justify-content: flex-end;
  padding-inline: 0;
  padding-top: var(--modus-wc-spacing-lg);
}
[data-theme^=modus-modern] .modus-wc-modal-action > :not([hidden]) ~ :not([hidden]),
[data-theme^=connect] .modus-wc-modal-action > :not([hidden]) ~ :not([hidden]) {
  margin: 0;
}

[data-theme=modus-classic-dark] .modus-wc-modal-box,
[data-theme=modus-classic-light] .modus-wc-modal-box {
  --rounded-box: var(--modus-wc-border-radius-md);
}
[data-theme=modus-classic-dark] .modus-wc-modal-header span,
[data-theme=modus-classic-light] .modus-wc-modal-header span {
  background: transparent;
  border-radius: 0;
  display: block;
  padding: 0;
}
[data-theme=modus-classic-dark] .modus-wc-modal-content,
[data-theme=modus-classic-light] .modus-wc-modal-content {
  height: 100%;
}
[data-theme=modus-classic-dark] .modus-wc-modal-content > span,
[data-theme=modus-classic-light] .modus-wc-modal-content > span {
  background: transparent;
  border-radius: 0;
  display: block;
  height: 100%;
  padding: 0;
}

[data-theme=modus-classic-light] .modus-wc-modal-box {
  background-color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-light] .modus-wc-modal-box .modus-wc-modal-top-icon-buttons svg {
  fill: var(--modus-wc-color-trimble-gray);
}

[data-theme=modus-classic-dark] modus-wc-modal .modus-wc-modal-box {
  background-color: var(--modus-wc-color-gray-9);
}
[data-theme=modus-classic-dark] modus-wc-modal .modus-wc-modal-box .modus-wc-modal-top-icon-buttons svg {
  fill: var(--modus-wc-color-white);
}
modus-wc-navbar .modus-wc-navbar {
  background-color: var(--modus-wc-color-base-page);
  border-radius: 0;
  box-shadow: none;
  height: 56px;
  min-height: 0;
  padding: 0 var(--modus-wc-spacing-md);
}
modus-wc-navbar .modus-wc-navbar modus-wc-button {
  display: inline-flex;
}
modus-wc-navbar .modus-wc-navbar modus-wc-button svg {
  height: 24px;
}
modus-wc-navbar .modus-wc-navbar:not(.logo) .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary {
  background: var(--modus-wc-color-base-100);
  border: 0;
  box-shadow: none;
  color: var(--modus-wc-color-base-content);
}
modus-wc-navbar .modus-wc-navbar .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary.logo {
  background: transparent;
}
modus-wc-navbar .modus-wc-navbar [slot=end] .user, modus-wc-navbar .modus-wc-navbar [slot=end] .apps, modus-wc-navbar .modus-wc-navbar [slot=end] .notifications, modus-wc-navbar .modus-wc-navbar [slot=end] modus-wc-menu, modus-wc-navbar .modus-wc-navbar [slot=start] .main-menu {
  position: absolute;
  top: 45px;
  z-index: 99;
}
modus-wc-navbar .modus-wc-navbar [slot=end] .hidden.user, modus-wc-navbar .modus-wc-navbar [slot=end] .hidden.apps, modus-wc-navbar .modus-wc-navbar [slot=end] .hidden.notifications, modus-wc-navbar .modus-wc-navbar [slot=end] modus-wc-menu.hidden, modus-wc-navbar .modus-wc-navbar [slot=start] .hidden.main-menu {
  display: none;
}
modus-wc-navbar .modus-wc-navbar [slot=end] .visible.user, modus-wc-navbar .modus-wc-navbar [slot=end] .visible.apps, modus-wc-navbar .modus-wc-navbar [slot=end] .visible.notifications, modus-wc-navbar .modus-wc-navbar [slot=end] modus-wc-menu.visible, modus-wc-navbar .modus-wc-navbar [slot=start] .visible.main-menu {
  display: block;
}
modus-wc-navbar .modus-wc-navbar [slot=end], modus-wc-navbar .modus-wc-navbar [slot=center], modus-wc-navbar .modus-wc-navbar [slot=start] {
  align-items: center;
  display: flex;
  position: relative;
}
modus-wc-navbar .modus-wc-navbar [slot=start] modus-wc-button {
  padding-inline-end: var(--modus-wc-spacing-sm);
  padding-inline-start: var(--modus-wc-spacing-xs);
}
modus-wc-navbar .modus-wc-navbar [slot=start] .main-menu {
  height: calc(100dvh - 56px);
  left: calc(-1 * var(--modus-wc-spacing-md));
  min-width: 256px;
}
modus-wc-navbar .modus-wc-navbar [slot=start] .logo.modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary {
  padding: 0;
}
modus-wc-navbar .modus-wc-navbar [slot=start] .logo.modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary .modus-wc-logo svg {
  height: 32px;
  max-width: 260px;
}
modus-wc-navbar .modus-wc-navbar [slot=end] modus-wc-button,
modus-wc-navbar .modus-wc-navbar [slot=end] modus-wc-text-input {
  padding-inline-start: var(--modus-wc-spacing-sm);
}
modus-wc-navbar .modus-wc-navbar [slot=end] button.ai svg {
  padding: 3px 0 3px 3px;
}
modus-wc-navbar .modus-wc-navbar [slot=end] modus-wc-menu {
  right: var(--modus-wc-spacing-2xl);
  z-index: 99;
}
modus-wc-navbar .modus-wc-navbar [slot=end] .notifications {
  right: 100px;
}
modus-wc-navbar .modus-wc-navbar [slot=end] .apps {
  right: var(--modus-wc-spacing-2xl);
}
modus-wc-navbar .modus-wc-navbar [slot=end] .user {
  right: 0;
}
modus-wc-navbar .modus-wc-navbar [slot=end] .user modus-wc-card article.modus-wc-card {
  align-items: center;
  padding: var(--modus-wc-spacing-xl);
  width: max-content;
}
modus-wc-navbar .modus-wc-navbar [slot=end] .user modus-wc-card article.modus-wc-card .initials {
  background-color: var(--modus-wc-color-black);
  border-radius: 50%;
  color: var(--modus-wc-color-white);
  font-weight: var(--modus-wc-font-weight-semibold);
  padding: var(--modus-wc-spacing-sm);
}
modus-wc-navbar .modus-wc-navbar [slot=end] .user modus-wc-card article.modus-wc-card .modus-wc-card-body {
  align-items: center;
}
modus-wc-navbar .modus-wc-navbar [slot=end] .user modus-wc-card article.modus-wc-card modus-wc-button {
  padding: 0;
}
modus-wc-navbar .modus-wc-navbar [slot=end] .user modus-wc-card article.modus-wc-card .sign-out.modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary {
  color: var(--modus-wc-color-primary);
}
modus-wc-navbar .modus-wc-navbar [slot=end] .user-button.modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary {
  background-color: var(--modus-wc-color-black);
  color: var(--modus-wc-color-white);
}

[data-theme=modus-modern-light] modus-wc-navbar .modus-wc-navbar {
  background-size: cover;
}

[data-theme=modus-modern-dark] modus-wc-navbar .modus-wc-navbar {
  background-size: cover;
}

[data-theme=modus-classic-light] modus-wc-navbar .modus-wc-navbar svg,
[data-theme=modus-classic-dark] modus-wc-navbar .modus-wc-navbar svg {
  height: 32px;
}
[data-theme=modus-classic-light] modus-wc-navbar .modus-wc-navbar modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-sm,
[data-theme=modus-classic-dark] modus-wc-navbar .modus-wc-navbar modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-sm {
  font-size: var(--modus-wc-font-size-md);
  height: var(--modus-wc-input-height-md);
  line-height: var(--modus-wc-line-height-md);
  padding: var(--modus-wc-spacing-sm);
}

[data-theme=modus-classic-dark] modus-wc-navbar .modus-wc-navbar {
  background-color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-dark] modus-wc-navbar .modus-wc-navbar:not(.logo) .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary {
  background: transparent;
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-navbar .modus-wc-navbar .logo.modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary path {
  fill: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-navbar .modus-wc-navbar .user modus-wc-card article.modus-wc-card .sign-out.modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary {
  color: var(--modus-wc-color-white);
}

[data-theme=connect-light] modus-wc-navbar .modus-wc-navbar,
[data-theme=connect-dark] modus-wc-navbar .modus-wc-navbar {
  border-bottom: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
}
[data-theme=connect-light] modus-wc-navbar .modus-wc-navbar :not(.logo) .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary,
[data-theme=connect-dark] modus-wc-navbar .modus-wc-navbar :not(.logo) .modus-wc-btn.modus-wc-btn-borderless.modus-wc-btn-primary {
  background: transparent;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-number-input .modus-wc-input--error {
  border-color: var(--modus-wc-color-error) !important;
}
modus-wc-number-input .modus-wc-input--info {
  border-color: var(--modus-wc-color-info) !important;
}
modus-wc-number-input .modus-wc-input--success {
  border-color: var(--modus-wc-color-success) !important;
}
modus-wc-number-input .modus-wc-input--warning {
  border-color: var(--modus-wc-color-warning) !important;
}
modus-wc-number-input .modus-wc-input-xs {
  height: var(--modus-wc-size-xs);
  min-height: var(--modus-wc-size-xs);
}
modus-wc-number-input .modus-wc-input-sm {
  height: var(--modus-wc-size-sm);
  min-height: var(--modus-wc-size-sm);
}
modus-wc-number-input .modus-wc-input-md {
  height: var(--modus-wc-size-md);
  min-height: var(--modus-wc-size-md);
}
modus-wc-number-input .modus-wc-input-lg {
  height: var(--modus-wc-size-lg);
  min-height: var(--modus-wc-size-lg);
}
modus-wc-number-input .modus-wc-input-xl {
  height: var(--modus-wc-size-xl);
  min-height: var(--modus-wc-size-xl);
}

modus-wc-number-input .modus-wc-input-label {
  padding-bottom: var(--modus-wc-spacing-sm);
}
modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency {
  background-color: var(--modus-wc-color-base-page);
  border: var(--modus-wc-border-width-xs) solid transparent;
  color: var(--modus-wc-color-base-content);
  white-space: nowrap;
}
modus-wc-number-input .modus-wc-number-input,
modus-wc-number-input modus-wc-select {
  background-color: var(--modus-wc-color-base-page);
}

[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency {
  background-color: var(--modus-wc-color-base-page);
  border: var(--modus-wc-border-width-xs) solid transparent;
  color: var(--modus-wc-color-base-content);
  white-space: nowrap;
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-sm,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-sm {
  padding: 0 var(--modus-wc-spacing-xs);
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-md,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-md {
  padding: 0 var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-lg,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-lg {
  padding: 0 var(--modus-wc-spacing-md);
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-sm,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-sm {
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-xs);
  padding-inline-end: 0;
}
@supports (-moz-appearance: none) {
  [data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-sm,
  [data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-sm {
    padding-inline-end: unset;
  }
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-md,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-md {
  padding: var(--modus-wc-spacing-sm);
  padding-inline-end: var(--modus-wc-spacing-lg);
}
@supports (-moz-appearance: none) {
  [data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-md,
  [data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-md {
    padding-inline-end: unset;
  }
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-lg,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-lg {
  padding: var(--modus-wc-spacing-md) var(--modus-wc-spacing-sm);
  padding-inline-end: var(--modus-wc-spacing-xl);
}
@supports (-moz-appearance: none) {
  [data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-lg,
  [data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-input-lg {
    padding-inline-end: unset;
  }
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input:focus,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input:focus {
  border-color: var(--modus-wc-color-highlight-blue);
  border-width: var(--modus-wc-border-width-sm);
  box-shadow: none;
  outline: none;
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-number-input--readonly,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input.modus-wc-number-input--readonly {
  background-color: var(--modus-wc-color-base-100);
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input::-webkit-inner-spin-button, [data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input::-webkit-outer-spin-button,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency::-webkit-inner-spin-button,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency::-webkit-outer-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input::-webkit-inner-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input::-webkit-outer-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency::-webkit-inner-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency::-webkit-outer-spin-button {
  margin-bottom: auto;
  margin-top: auto;
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-sm,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-sm,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-sm,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-sm {
  font-size: var(--modus-wc-font-size-sm);
  height: var(--modus-wc-input-height-sm);
  line-height: var(--modus-wc-line-height-sm);
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-sm::-webkit-inner-spin-button, [data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-sm::-webkit-outer-spin-button,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-sm::-webkit-inner-spin-button,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-sm::-webkit-outer-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-sm::-webkit-inner-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-sm::-webkit-outer-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-sm::-webkit-inner-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-sm::-webkit-outer-spin-button {
  font-size: var(--modus-wc-font-size-sm);
  height: var(--modus-wc-input-height-sm);
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-md,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-md,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-md,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-md {
  font-size: var(--modus-wc-font-size-md);
  height: var(--modus-wc-input-height-md);
  line-height: var(--modus-wc-line-height-md);
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-md::-webkit-inner-spin-button, [data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-md::-webkit-outer-spin-button,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-md::-webkit-inner-spin-button,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-md::-webkit-outer-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-md::-webkit-inner-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-md::-webkit-outer-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-md::-webkit-inner-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-md::-webkit-outer-spin-button {
  font-size: var(--modus-wc-font-size-md);
  height: var(--modus-wc-input-height-md);
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-lg,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-lg,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-lg,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-lg {
  font-size: var(--modus-wc-font-size-lg);
  height: var(--modus-wc-input-height-lg);
  line-height: var(--modus-wc-line-height-xl);
}
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-lg::-webkit-inner-spin-button, [data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-lg::-webkit-outer-spin-button,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-lg::-webkit-inner-spin-button,
[data-theme=modus-classic-light] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-lg::-webkit-outer-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-lg::-webkit-inner-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-number-input.modus-wc-input-lg::-webkit-outer-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-lg::-webkit-inner-spin-button,
[data-theme=modus-classic-dark] modus-wc-number-input .modus-wc-number-input-container .modus-wc-input-currency.modus-wc-input-lg::-webkit-outer-spin-button {
  font-size: var(--modus-wc-font-size-lg);
  height: 3rem;
}

[data-theme=connect-light] modus-wc-number-input .modus-wc-number-input,
[data-theme=connect-dark] modus-wc-number-input .modus-wc-number-input {
  border-bottom-width: var(--input-bottom-border-width);
  outline-width: 0 !important;
}
[data-theme=connect-light] modus-wc-number-input .modus-wc-number-input:not(.modus-wc-select, .modus-wc-number-input),
[data-theme=connect-dark] modus-wc-number-input .modus-wc-number-input:not(.modus-wc-select, .modus-wc-number-input) {
  padding: 0 var(--modus-wc-spacing-sm);
}
[data-theme=connect-light] modus-wc-number-input .modus-wc-number-input:hover,
[data-theme=connect-dark] modus-wc-number-input .modus-wc-number-input:hover {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-number-input .modus-wc-number-input:active,
[data-theme=connect-dark] modus-wc-number-input .modus-wc-number-input:active {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-number-input .modus-wc-number-input:focus,
[data-theme=connect-dark] modus-wc-number-input .modus-wc-number-input:focus {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
[data-theme=connect-light] modus-wc-number-input .modus-wc-number-input:focus-within,
[data-theme=connect-dark] modus-wc-number-input .modus-wc-number-input:focus-within {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-pagination .modus-wc-pagination {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-base-content);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn {
  background-color: var(--modus-wc-color-base-100);
  border-color: transparent;
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:hover {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:focus {
  background-color: var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn-selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn-active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn-open {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn-disabled:hover {
  background-color: inherit;
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn--active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn--selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn-checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn-pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn[aria-pressed=true] {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.modus-wc-btn-sm .modus-wc-pagination-icon {
  height: var(--modus-wc-line-height-sm);
  width: var(--modus-wc-line-height-sm);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.modus-wc-btn-md .modus-wc-pagination-icon {
  height: var(--modus-wc-ling-height-md);
  width: var(--modus-wc-line-height-md);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.modus-wc-btn-lg .modus-wc-pagination-icon {
  height: var(--modus-wc-line-height-lg);
  width: var(--modus-wc-line-height-lg);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-button-text {
  padding: calc(var(--modus-wc-spacing-sm) - 2px);
  width: auto !important;
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:not(:disabled) {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-base-content);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:not(:disabled).modus-wc-btn-active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:not(:disabled):hover:not(.modus-wc-btn-active) {
  background-color: var(--modus-wc-color-base-300);
  border-color: transparent;
}

[data-theme=modus-classic-dark] modus-wc-pagination .modus-wc-pagination,
[data-theme=modus-classic-light] modus-wc-pagination .modus-wc-pagination {
  background-color: transparent;
}
[data-theme=modus-classic-dark] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn,
[data-theme=modus-classic-light] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn {
  background-color: transparent;
  border: none;
  border-radius: var(--modus-wc-border-radius-md) !important;
  box-shadow: none;
}
[data-theme=modus-classic-dark] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.modus-wc-btn-sm,
[data-theme=modus-classic-light] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.modus-wc-btn-sm {
  height: var(--modus-wc-line-height-md);
  max-height: var(--modus-wc-line-height-md);
  min-height: var(--modus-wc-line-height-md);
  width: var(--modus-wc-line-height-md);
}
[data-theme=modus-classic-dark] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.modus-wc-btn-md,
[data-theme=modus-classic-light] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.modus-wc-btn-md {
  height: var(--modus-wc-line-height-lg);
  max-height: var(--modus-wc-line-height-lg);
  min-height: var(--modus-wc-line-height-lg);
  width: var(--modus-wc-line-height-lg);
}
[data-theme=modus-classic-dark] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.modus-wc-btn-lg,
[data-theme=modus-classic-light] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn.modus-wc-btn-lg {
  height: var(--modus-wc-line-height-xl);
  max-height: var(--modus-wc-line-height-xl);
  min-height: var(--modus-wc-line-height-xl);
  width: var(--modus-wc-line-height-xl);
}

[data-theme=modus-classic-light] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:not(:disabled) {
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-light] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:not(:disabled).modus-wc-btn-active {
  background-color: var(--modus-wc-color-blue-pale);
  color: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:not(:disabled):hover:not(.modus-wc-btn-active) {
  background-color: var(--modus-wc-color-gray-0);
}

[data-theme=modus-classic-dark] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:not(:disabled) {
  color: var(--modus-wc-color-gray-2);
}
[data-theme=modus-classic-dark] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:not(:disabled).modus-wc-btn-active {
  background-color: var(--modus-wc-color-highlight-blue);
  color: var(--modus-wc-color-trimble-gray);
}
[data-theme=modus-classic-dark] modus-wc-pagination .modus-wc-pagination .modus-wc-pagination-btn:not(:disabled):hover:not(.modus-wc-btn-active) {
  background-color: var(--modus-wc-color-gray-8);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
.modus-wc-panel {
  background-color: var(--modus-wc-color-base-page);
  border: 1px solid var(--modus-wc-color-base-200);
  border-radius: var(--rounded-box);
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modus-wc-panel-floating {
  box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
}

.modus-wc-panel-header,
.modus-wc-panel-body,
.modus-wc-panel-footer {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.modus-wc-panel-header {
  flex-shrink: 0;
}

.modus-wc-panel-header:empty {
  display: none;
}

.modus-wc-panel-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow-y: auto;
}

.modus-wc-panel-footer {
  flex-shrink: 0;
}

.modus-wc-panel-footer:empty {
  display: none;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-profile-menu {
  background-color: var(--modus-wc-color-base-page);
  border-radius: var(--modus-wc-border-radius-box);
}
modus-wc-profile-menu .modus-wc-panel {
  background-color: var(--modus-wc-color-base-page);
  border: 1px solid var(--modus-wc-color-base-200);
  border-radius: var(--rounded-box);
  box-shadow: 0 4px 6px -4px var(--modus-wc-color-base-200), 0 10px 15px -3px var(--modus-wc-color-base-200);
  display: block;
  height: auto;
  padding: 0 var(--modus-wc-spacing-sm);
}
modus-wc-profile-menu .profile-menu-header {
  align-items: center;
  align-self: center;
  border-bottom: 1px solid var(--modus-wc-color-base-200);
  display: flex;
  flex-direction: column;
  margin-inline: auto;
  padding: var(--modus-wc-spacing-lg);
  width: 244px;
}
modus-wc-profile-menu .profile-menu-header .header-content {
  align-items: center;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: var(--modus-wc-spacing-md);
}
modus-wc-profile-menu .profile-menu-header .header-content .text-container {
  align-self: stretch;
  display: flex;
  flex-direction: column;
  gap: var(--modus-wc-spacing-2xs);
  justify-content: center;
  text-align: center;
}
modus-wc-profile-menu .profile-menu-header .header-content .text-container .header-text,
modus-wc-profile-menu .profile-menu-header .header-content .text-container .user-name-text,
modus-wc-profile-menu .profile-menu-header .header-content .text-container .email-text {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
modus-wc-profile-menu .profile-menu-header .header-content .text-container .header-text {
  color: var(--modus-wc-color-base-content);
  line-height: 16px;
  opacity: var(--modus-wc-opacity-overlay);
}
modus-wc-profile-menu .profile-menu-header .header-content .text-container .user-name-text {
  color: var(--modus-wc-color-base-content);
  line-height: 24px;
}
modus-wc-profile-menu .profile-menu-header .header-content .text-container .email-text {
  color: var(--modus-wc-color-base-content);
  line-height: 16px;
  opacity: var(--modus-wc-opacity-overlay);
}
modus-wc-profile-menu .profile-menu-header .header-content .manage-link {
  color: var(--modus-wc-color-primary);
  line-height: 20px;
  text-decoration: underline;
}
modus-wc-profile-menu .profile-menu-footer {
  align-items: center;
  border-top: 1px solid var(--modus-wc-color-base-200);
  display: flex;
  flex-direction: column;
  gap: var(--modus-wc-spacing-2xs);
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-lg);
}
modus-wc-profile-menu .profile-menu-footer .footer-text {
  color: var(--modus-wc-color-accent);
  line-height: var(--modus-wc-font-size-2xl);
}
modus-wc-profile-menu .submenu-section .submenu-title-container {
  align-items: flex-end;
  border-bottom: 1px solid var(--modus-wc-color-base-200);
  display: flex;
  height: var(--modus-wc-line-height-h0);
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-lg);
}
modus-wc-profile-menu .submenu-section .submenu-title {
  color: var(--modus-wc-color-base-content-low-contrast);
  line-height: var(--modus-wc-font-size-2xl);
}
modus-wc-profile-menu [slot=body] modus-wc-menu .modus-wc-menu-item {
  color: var(--modus-wc-color-base-content);
  padding: var(--modus-wc-spacing-2xs) var(--modus-wc-spacing-xs);
}
modus-wc-profile-menu [slot=body] modus-wc-menu .modus-wc-menu-item .modus-wc-menu-item-labels {
  color: var(--modus-wc-color-base-content);
}
modus-wc-profile-menu [slot=body] modus-wc-menu li.modus-wc-menu-item-active {
  background-color: transparent;
  color: inherit;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-progress.modus-wc-progress-container .modus-wc-radial-progress-label {
  font-size: var(--modus-wc-font-size-md);
  margin: 0 var(--modus-wc-spacing-lg);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
modus-wc-progress.modus-wc-progress-container .modus-wc-progress {
  color: var(--modus-wc-color-primary);
}
modus-wc-progress.modus-wc-progress-container .modus-wc-radial-progress {
  color: var(--modus-wc-color-trimble-blue);
}
modus-wc-progress.modus-wc-progress-container .modus-wc-radial-progress.modus-wc-radial-progress--indeterminate {
  /* stylelint-disable-next-line custom-property-pattern */
  --value: var(--_value) !important;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-name: grow;
  animation-timing-function: ease-in-out;
}

[data-theme=modus-classic-light] modus-wc-progress .modus-wc-progress,
[data-theme=modus-classic-dark] modus-wc-progress .modus-wc-progress {
  appearance: none;
  background-color: transparent;
  border: 1px solid var(--modus-wc-color-gray-6);
  border-radius: var(--modus-wc-border-radius-sm);
  height: var(--modus-wc-line-height-sm);
  overflow: hidden;
  /* Override default progress element styling */
  width: 100%;
}
[data-theme=modus-classic-light] modus-wc-progress .modus-wc-progress::-webkit-progress-value,
[data-theme=modus-classic-dark] modus-wc-progress .modus-wc-progress::-webkit-progress-value {
  border-radius: var(--modus-wc-border-radius-sm);
}
[data-theme=modus-classic-light] modus-wc-progress .modus-wc-progress::-moz-progress-bar,
[data-theme=modus-classic-dark] modus-wc-progress .modus-wc-progress::-moz-progress-bar {
  border-radius: var(--modus-wc-border-radius-sm);
}
[data-theme=modus-classic-light] modus-wc-progress .modus-wc-progress .modus-wc-progress-label,
[data-theme=modus-classic-dark] modus-wc-progress .modus-wc-progress .modus-wc-progress-label {
  color: var(--modus-wc-color-white);
}

[data-theme=modus-classic-light] modus-wc-progress .modus-wc-progress::-webkit-progress-value {
  background-color: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-progress .modus-wc-progress::-moz-progress-bar {
  background-color: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-progress .modus-wc-progress:indeterminate {
  background-color: transparent;
  --progress-color: var(--modus-wc-color-trimble-blue);
}

[data-theme=modus-classic-dark] modus-wc-progress .modus-wc-progress::-webkit-progress-value {
  background-color: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-progress .modus-wc-progress::-moz-progress-bar {
  background-color: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-progress .modus-wc-progress:indeterminate {
  background-color: transparent;
  --progress-color: var(--modus-wc-color-highlight-blue);
}

.modus-wc-radial-progress.modus-wc-radial-progress--indeterminate {
  /* stylelint-disable-next-line custom-property-pattern */
  --value: var(--_value) !important;
  animation-duration: 5s;
  animation-iteration-count: infinite;
  animation-name: grow;
  animation-timing-function: ease-in-out;
}

[data-theme=modus-classic-light] .modus-wc-radial-progress {
  color: var(--modus-wc-color-primary);
}

[data-theme=modus-classic-dark] .modus-wc-radial-progress {
  color: var(--modus-wc-color-highlight-blue);
}

/* stylelint-disable-next-line custom-property-pattern */
@property --_value {
  inherits: true;
  initial-value: 0;
  syntax: "<number>";
}
@keyframes grow {
  0% {
    /* stylelint-disable-next-line custom-property-pattern */
    --_value: 0;
  }
  50% {
    /* stylelint-disable-next-line custom-property-pattern */
    --_value: 100;
  }
  100% {
    /* stylelint-disable-next-line custom-property-pattern */
    --_value: 0;
  }
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-radio.modus-wc-radio-host {
  align-items: center;
  display: flex;
}
modus-wc-radio.modus-wc-radio-host .modus-wc-input-label {
  font-weight: var(--modus-wc-font-weight-normal);
  padding-inline-start: var(--modus-wc-spacing-md);
}
modus-wc-radio.modus-wc-radio-host [type=radio].modus-wc-radio:checked {
  --fallback-bc: var(--modus-wc-color-primary);
}
modus-wc-radio.modus-wc-radio-host [type=radio].modus-wc-radio:focus {
  outline-color: var(--modus-wc-color-primary);
}
modus-wc-radio.modus-wc-radio-host [type=radio].modus-wc-radio:hover {
  --fallback-bc: var(--modus-wc-color-primary);
}

[data-theme=modus-classic-light] modus-wc-radio .modus-wc-radio,
[data-theme=modus-classic-dark] modus-wc-radio .modus-wc-radio {
  --fallback-bc: var(--modus-wc-color-gray-4);
  border-width: var(--modus-wc-border-width-sm);
}
[data-theme=modus-classic-light] modus-wc-radio .modus-wc-radio.modus-wc-radio-xs,
[data-theme=modus-classic-dark] modus-wc-radio .modus-wc-radio.modus-wc-radio-xs {
  height: 0.875rem;
  width: 0.875rem;
}
[data-theme=modus-classic-light] modus-wc-radio .modus-wc-radio.modus-wc-radio-sm,
[data-theme=modus-classic-dark] modus-wc-radio .modus-wc-radio.modus-wc-radio-sm {
  height: 1rem;
  width: 1rem;
}
[data-theme=modus-classic-light] modus-wc-radio .modus-wc-radio.modus-wc-radio-md,
[data-theme=modus-classic-dark] modus-wc-radio .modus-wc-radio.modus-wc-radio-md {
  height: 1.125rem;
  width: 1.125rem;
}
[data-theme=modus-classic-light] modus-wc-radio .modus-wc-radio.modus-wc-radio-lg,
[data-theme=modus-classic-dark] modus-wc-radio .modus-wc-radio.modus-wc-radio-lg {
  height: 1.25rem;
  width: 1.25rem;
}

[data-theme=modus-classic-light] modus-wc-radio .modus-wc-radio:checked {
  --fallback-bc: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-radio .modus-wc-radio:focus {
  outline-color: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-radio .modus-wc-radio:hover {
  --fallback-bc: var(--modus-wc-color-trimble-blue);
}

[data-theme=modus-classic-dark] modus-wc-radio .modus-wc-radio:checked {
  --fallback-bc: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-radio .modus-wc-radio:focus {
  outline-color: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-radio .modus-wc-radio:hover {
  --fallback-bc: var(--modus-wc-color-trimble-blue);
}

[data-theme=connect-light] modus-wc-radio .modus-wc-radio,
[data-theme=connect-dark] modus-wc-radio .modus-wc-radio {
  --fallback-bc: var(--modus-wc-color-gray-4);
  border-width: var(--modus-wc-border-width-sm);
}
[data-theme=connect-light] modus-wc-radio .modus-wc-radio.modus-wc-radio-xs,
[data-theme=connect-dark] modus-wc-radio .modus-wc-radio.modus-wc-radio-xs {
  height: 0.875rem;
  width: 0.875rem;
}
[data-theme=connect-light] modus-wc-radio .modus-wc-radio.modus-wc-radio-sm,
[data-theme=connect-dark] modus-wc-radio .modus-wc-radio.modus-wc-radio-sm {
  height: 1rem;
  width: 1rem;
}
[data-theme=connect-light] modus-wc-radio .modus-wc-radio.modus-wc-radio-md,
[data-theme=connect-dark] modus-wc-radio .modus-wc-radio.modus-wc-radio-md {
  height: 1.25rem;
  width: 1.25rem;
}
[data-theme=connect-light] modus-wc-radio .modus-wc-radio.modus-wc-radio-lg,
[data-theme=connect-dark] modus-wc-radio .modus-wc-radio.modus-wc-radio-lg {
  height: 1.75rem;
  width: 1.75rem;
}

[data-theme=connect-light] modus-wc-radio .modus-wc-radio:checked {
  --fallback-bc: var(--modus-wc-color-trimble-blue);
}
[data-theme=connect-light] modus-wc-radio .modus-wc-radio:focus {
  outline-color: var(--modus-wc-color-trimble-blue);
}
[data-theme=connect-light] modus-wc-radio .modus-wc-radio:hover {
  --fallback-bc: var(--modus-wc-color-trimble-blue);
}

[data-theme=connect-dark] modus-wc-radio .modus-wc-radio:checked {
  --fallback-bc: var(--modus-wc-color-highlight-blue);
}
[data-theme=connect-dark] modus-wc-radio .modus-wc-radio:focus {
  outline-color: var(--modus-wc-color-highlight-blue);
}
[data-theme=connect-dark] modus-wc-radio .modus-wc-radio:hover {
  --fallback-bc: var(--modus-wc-color-trimble-blue);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-rating.modus-wc-rating-container {
  display: flex;
}
modus-wc-rating.modus-wc-rating-container .modus-wc-rating {
  --modus-wc-rating-item-color: ;
  margin-inline-end: var(--modus-wc-spacing-sm);
}
modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item {
  background-color: var(--modus-wc-rating-item-color, currentColor);
}
modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb):not(:disabled) {
  opacity: 0.2;
}
modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb):not(:disabled):checked, modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb):not(:disabled)[aria-checked=true], modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb):not(:disabled)[aria-current=true], modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb):not(:disabled):has(~ *:checked, ~ *[aria-checked=true], ~ *[aria-current=true]) {
  opacity: 1;
}
modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:disabled:not(.modus-wc-mask-star-2):not(.modus-wc-mask-heart) {
  opacity: 0.3;
}
modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:disabled:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb) {
  opacity: 0.1;
}
modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:disabled:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb):checked, modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:disabled:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb)[aria-checked=true], modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:disabled:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb)[aria-current=true], modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:disabled:not(.modus-wc-mask-smiley):not(.modus-wc-mask-thumb):has(~ *:checked,
~ *[aria-checked=true],
~ *[aria-current=true]) {
  opacity: 0.3;
}
modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-hidden:not(.modus-wc-mask-half-1),
modus-wc-rating.modus-wc-rating-container .modus-wc-rating .modus-wc-rating-item:not(.modus-wc-mask-half-1) {
  margin-inline-end: var(--modus-wc-spacing-xs);
}

[data-theme=modus-classic-light] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-smiley, [data-theme=modus-classic-light] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-thumb {
  background-color: var(--modus-wc-rating-item-color, var(--modus-wc-color-trimble-gray));
}
[data-theme=modus-classic-light] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-smiley:hover:not(:disabled), [data-theme=modus-classic-light] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-smiley:checked:not(:disabled), [data-theme=modus-classic-light] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-thumb:hover:not(:disabled), [data-theme=modus-classic-light] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-thumb:checked:not(:disabled) {
  background-color: var(--modus-wc-rating-item-color, var(--modus-wc-color-trimble-blue));
}

[data-theme=modus-classic-dark] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-smiley, [data-theme=modus-classic-dark] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-thumb {
  background-color: var(--modus-wc-rating-item-color, var(--modus-wc-color-gray-4));
}
[data-theme=modus-classic-dark] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-smiley:hover, [data-theme=modus-classic-dark] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-smiley:checked:not(:disabled), [data-theme=modus-classic-dark] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-thumb:hover, [data-theme=modus-classic-dark] modus-wc-rating .modus-wc-rating-item.modus-wc-mask.modus-wc-mask-thumb:checked:not(:disabled) {
  background-color: var(--modus-wc-rating-item-color, var(--modus-wc-color-highlight-blue));
}

modus-wc-rating .modus-wc-mask-smiley-1 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M8.5 8C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8m7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 8 15.5 8m1 8.99c.27-.06.44-.33.38-.6-.52-2.29-2.53-3.89-4.88-3.89s-4.36 1.6-4.88 3.89a.503.503 0 0 0 .98.22c.42-1.83 2.02-3.11 3.9-3.11s3.49 1.28 3.9 3.11c.05.23.26.39.49.39.04 0 .07 0 .11-.01'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-smiley-1:checked {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8m8 8.99s-.07.01-.11.01a.51.51 0 0 1-.49-.39c-.42-1.83-2.02-3.11-3.9-3.11s-3.49 1.28-3.9 3.11a.503.503 0 0 1-.98-.22C7.64 14.1 9.65 12.5 12 12.5s4.36 1.6 4.88 3.89c.06.27-.11.54-.38.6m-1-5.99c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-smiley-2 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M8.5 8C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8m7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 8 15.5 8m.21 8.88c.21-.18.23-.5.05-.71-.95-1.08-2.32-1.71-3.76-1.71s-2.81.62-3.76 1.71c-.18.21-.16.52.05.71.21.18.52.16.71-.05.76-.87 1.86-1.36 3.01-1.36s2.25.5 3.01 1.36c.1.11.24.17.38.17q.18 0 .33-.12Z'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-smiley-2:checked {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5m8.71 7.38c-.09.08-.21.12-.33.12-.14 0-.28-.06-.38-.17-.76-.87-1.86-1.36-3.01-1.36s-2.25.5-3.01 1.36c-.18.21-.5.23-.71.05a.505.505 0 0 1-.05-.71c.95-1.08 2.32-1.71 3.76-1.71s2.81.62 3.76 1.71c.18.21.16.52-.05.71ZM15.5 11c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-smiley-3 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M8.5 8C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8m7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 8 15.5 8m.5 7.5c0-.28-.22-.5-.5-.5h-7c-.28 0-.5.22-.5.5s.22.5.5.5h7c.28 0 .5-.22.5-.5'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-smiley-3:checked {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5m8.5 6.5h-7c-.28 0-.5-.22-.5-.5s.22-.5.5-.5h7c.28 0 .5.22.5.5s-.22.5-.5.5m0-5c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-smiley-4 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M8.5 8C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8m7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 8 15.5 8m.26 8.29c.18-.21.16-.52-.05-.71a.506.506 0 0 0-.71.05c-.76.87-1.86 1.36-3.01 1.36s-2.25-.5-3.01-1.36a.505.505 0 0 0-.71-.05c-.21.18-.23.5-.05.71.95 1.08 2.32 1.71 3.76 1.71s2.81-.62 3.76-1.71Z'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-smiley-4:checked {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M7 9.5C7 8.67 7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5m8.76 6.79C14.81 17.37 13.44 18 12 18s-2.81-.62-3.76-1.71a.506.506 0 0 1 .05-.71c.21-.18.52-.16.71.05.76.87 1.86 1.36 3.01 1.36s2.25-.5 3.01-1.36c.18-.21.5-.23.71-.05s.23.5.05.71ZM15.5 11c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-smiley-5 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.49 22 2 17.51 2 12S6.49 2 12 2s10 4.49 10 10-4.49 10-10 10m0-18c-4.41 0-8 3.59-8 8s3.59 8 8 8 8-3.59 8-8-3.59-8-8-8M8.5 8C7.67 8 7 8.67 7 9.5S7.67 11 8.5 11s1.5-.67 1.5-1.5S9.33 8 8.5 8m7 0c-.83 0-1.5.67-1.5 1.5s.67 1.5 1.5 1.5 1.5-.67 1.5-1.5S16.33 8 15.5 8m1.38 6.11a.503.503 0 0 0-.98-.22C15.48 15.72 13.88 17 12 17s-3.49-1.28-3.9-3.11a.503.503 0 0 0-.98.22C7.64 16.4 9.65 18 12 18s4.36-1.6 4.88-3.89'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-smiley-5:checked {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2M8.5 8c.83 0 1.5.67 1.5 1.5S9.33 11 8.5 11 7 10.33 7 9.5 7.67 8 8.5 8m8.38 6.11C16.36 16.4 14.35 18 12 18s-4.36-1.6-4.88-3.89a.503.503 0 0 1 .98-.22C8.52 15.72 10.12 17 12 17s3.49-1.28 3.9-3.11a.503.503 0 0 1 .98.22M15.5 11c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5-.67 1.5-1.5 1.5'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-thumb-1 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M21.99 12.23c0-1.85-1.5-3.35-3.35-3.35h-3.69c.21-1.88.16-4.52-2.64-5.65-.38-.15-.76-.23-1.13-.23-.76 0-1.44.32-1.93.9-.92 1.1-.73 2.61-.65 3 .09.56-.31 1.06-1.16 2.01-.16.18-.32.35-.47.53a2.48 2.48 0 0 0-1.63-.6h-.83a2.5 2.5 0 0 0-2.5 2.5v7.51a2.5 2.5 0 0 0 2.5 2.5h.83c.76 0 1.45-.34 1.91-.88.6.56 1.4.9 2.28.9h7.06c1.99 0 2.8-1.08 3.49-2.91.6-1.44 1.59-3.81 1.69-4.03s.28-.62.22-2.21ZM6.17 18.86c0 .46-.38.83-.83.83h-.83c-.46 0-.83-.37-.83-.83v-7.51c0-.46.37-.83.83-.83h.83c.46 0 .83.38.83.83zm14.07-5.11c-.12.26-1.71 4.08-1.71 4.08-.63 1.65-1.02 1.88-1.95 1.88H9.52c-.93 0-1.68-.75-1.68-1.68V11.5s-.01-.45.1-.61c.99-1.27 2.59-2.42 2.31-4.23-.18-.99.14-2.38 1.45-1.87 2.29.93 1.64 3.46 1.39 5.35.03.22.32.33.72.38h.04c.18.02.37.03.58.03h4.2c.93 0 1.68.75 1.68 1.68 0 0 .05 1.26-.07 1.52'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-thumb-1:checked {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M4 9H3c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-9c0-.55-.45-1-1-1m17.95 2.06c0-1.11-.9-2.01-2.01-2.01h-5.03c-.25 0-.48 0-.69-.03h-.05c-.48-.06-.82-.19-.87-.46.3-2.27 1.08-5.3-1.67-6.42-1.56-.62-1.95 1.05-1.73 2.24.34 2.17-1.58 3.55-2.77 5.07-.13.2-.12.73-.12.73V18c0 1.11.91 2.01 2.02 2.01h8.46c1.11 0 1.58-.28 2.33-2.25 0 0 1.91-4.57 2.05-4.89s.09-1.82.09-1.82Z'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-thumb-2 {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M21.99 12.15c0 1.85-1.5 3.35-3.35 3.35h-3.69c.21 1.88.16 4.52-2.64 5.65-.38.15-.76.23-1.13.23-.76 0-1.44-.32-1.93-.9-.92-1.1-.73-2.61-.65-3 .09-.56-.31-1.06-1.16-2.01-.16-.18-.32-.35-.47-.53-.44.38-1.01.6-1.63.6h-.83a2.5 2.5 0 0 1-2.5-2.5V5.53a2.5 2.5 0 0 1 2.5-2.5h.83c.76 0 1.45.34 1.91.88.6-.56 1.4-.9 2.28-.9h7.06c1.99 0 2.8 1.08 3.49 2.91.6 1.44 1.59 3.81 1.69 4.03s.28.62.22 2.21ZM6.17 5.52c0-.46-.38-.83-.83-.83h-.83c-.46 0-.83.37-.83.83v7.51c0 .46.37.83.83.83h.83c.46 0 .83-.38.83-.83zm14.07 5.11c-.12-.26-1.71-4.08-1.71-4.08-.63-1.65-1.02-1.88-1.95-1.88H9.52c-.93 0-1.68.75-1.68 1.68v6.53s-.01.45.1.61c.99 1.27 2.59 2.42 2.31 4.23-.18.99.14 2.38 1.45 1.87 2.29-.93 1.64-3.46 1.39-5.35.03-.22.32-.33.72-.38h.04c.18-.02.37-.03.58-.03h4.2c.93 0 1.68-.75 1.68-1.68 0 0 .05-1.26-.07-1.52'/%3E%3C/svg%3E");
}
modus-wc-rating .modus-wc-mask-thumb-2:checked {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24'%3E%3Cpath d='M4 15.02H3c-.55 0-1-.45-1-1v-9c0-.55.45-1 1-1h1c.55 0 1 .45 1 1v9c0 .55-.45 1-1 1m17.95-2.06c0 1.11-.9 2.01-2.01 2.01h-5.03c-.25 0-.48 0-.69.03h-.05c-.48.06-.82.19-.87.46.3 2.27 1.08 5.3-1.67 6.42-1.56.62-1.95-1.05-1.73-2.24.34-2.17-1.58-3.55-2.77-5.07-.13-.2-.12-.73-.12-.73V6.02c0-1.11.91-2.01 2.02-2.01h8.46c1.11 0 1.58.28 2.33 2.25 0 0 1.91 4.57 2.05 4.89s.09 1.82.09 1.82Z'/%3E%3C/svg%3E");
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-select .modus-wc-select {
  background-color: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
}
modus-wc-select .modus-wc-select-xs {
  height: var(--modus-wc-size-xs);
  min-height: var(--modus-wc-size-xs);
}
modus-wc-select .modus-wc-select-sm {
  height: var(--modus-wc-size-sm);
  min-height: var(--modus-wc-size-sm);
}
modus-wc-select .modus-wc-select-md {
  height: var(--modus-wc-size-md);
  min-height: var(--modus-wc-size-md);
}
modus-wc-select .modus-wc-select-lg {
  height: var(--modus-wc-size-lg);
  min-height: var(--modus-wc-size-lg);
}
modus-wc-select .modus-wc-select-xl {
  height: var(--modus-wc-size-xl);
  min-height: var(--modus-wc-size-xl);
}
modus-wc-select .modus-wc-select--error {
  border-color: var(--modus-wc-color-error) !important;
}
modus-wc-select .modus-wc-select--info {
  border-color: var(--modus-wc-color-info) !important;
}
modus-wc-select .modus-wc-select--success {
  border-color: var(--modus-wc-color-success) !important;
}
modus-wc-select .modus-wc-select--warning {
  border-color: var(--modus-wc-color-warning) !important;
}

[data-theme=modus-modern-light] modus-wc-select .modus-wc-input-label,
[data-theme=modus-modern-dark] modus-wc-select .modus-wc-input-label,
[data-theme=modus-classic-light] modus-wc-select .modus-wc-input-label,
[data-theme=modus-classic-dark] modus-wc-select .modus-wc-input-label {
  padding-bottom: var(--modus-wc-spacing-sm);
}

[data-theme=modus-classic-light] modus-wc-select .modus-wc-select.modus-wc-select-sm,
[data-theme=modus-classic-dark] modus-wc-select .modus-wc-select.modus-wc-select-sm {
  font-size: var(--modus-wc-font-size-sm);
  height: var(--modus-wc-input-height-sm);
  line-height: var(--modus-wc-input-height-sm);
  min-height: var(--modus-wc-input-height-sm);
}
[data-theme=modus-classic-light] modus-wc-select .modus-wc-select.modus-wc-select-md,
[data-theme=modus-classic-dark] modus-wc-select .modus-wc-select.modus-wc-select-md {
  font-size: var(--modus-wc-font-size-md);
  height: var(--modus-wc-input-height-md);
  line-height: var(--modus-wc-input-height-md);
  min-height: var(--modus-wc-input-height-md);
}
[data-theme=modus-classic-light] modus-wc-select .modus-wc-select.modus-wc-select-lg,
[data-theme=modus-classic-dark] modus-wc-select .modus-wc-select.modus-wc-select-lg {
  font-size: var(--modus-wc-font-size-lg);
  height: var(--modus-wc-input-height-lg);
  line-height: var(--modus-wc-font-size-lg);
  min-height: var(--modus-wc-font-size-lg);
}
[data-theme=modus-classic-light] modus-wc-select .modus-wc-select:focus,
[data-theme=modus-classic-dark] modus-wc-select .modus-wc-select:focus {
  border-color: var(--modus-wc-color-blue-light);
  border-width: var(--modus-wc-border-width-sm);
  box-shadow: none;
  outline: none;
}

[data-theme=modus-classic-light] modus-wc-select .modus-wc-select.modus-wc-select-bordered:not(:disabled):not(:focus) {
  border-color: var(--modus-wc-color-gray-6);
}

[data-theme=modus-classic-dark] modus-wc-select .modus-wc-select:focus {
  border-color: var(--modus-wc-color-highlight-blue);
}

[data-theme=modus-classic-dark] modus-wc-select .modus-wc-select,
[data-theme=connect-dark] modus-wc-select .modus-wc-select {
  background-color: var(--modus-wc-color-gray-10);
}

[data-theme=connect-light] modus-wc-select .modus-wc-select,
[data-theme=connect-dark] modus-wc-select .modus-wc-select {
  border-bottom-width: var(--input-bottom-border-width);
  outline-width: 0 !important;
}
[data-theme=connect-light] modus-wc-select .modus-wc-select:not(.modus-wc-select, .modus-wc-number-input),
[data-theme=connect-dark] modus-wc-select .modus-wc-select:not(.modus-wc-select, .modus-wc-number-input) {
  padding: 0 var(--modus-wc-spacing-sm);
}
[data-theme=connect-light] modus-wc-select .modus-wc-select:hover,
[data-theme=connect-dark] modus-wc-select .modus-wc-select:hover {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-select .modus-wc-select:active,
[data-theme=connect-dark] modus-wc-select .modus-wc-select:active {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-select .modus-wc-select:focus,
[data-theme=connect-dark] modus-wc-select .modus-wc-select:focus {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
[data-theme=connect-light] modus-wc-select .modus-wc-select:focus-within,
[data-theme=connect-dark] modus-wc-select .modus-wc-select:focus-within {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
@charset "UTF-8";
modus-wc-side-navigation {
  display: block;
  height: 100vh;
  position: relative;
}
modus-wc-side-navigation .modus-wc-side-navigation {
  background: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-base-content);
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  max-height: 100vh;
  min-height: 0;
  overflow: hidden;
  overflow-y: auto;
  position: absolute;
  transition: width 0.2s ease-out;
  z-index: 999;
}
modus-wc-side-navigation .side-navigation-content {
  flex: 1 1 auto;
  max-width: 100%;
}
modus-wc-side-navigation modus-wc-menu .modus-wc-menu {
  background-color: transparent;
  border-radius: 0;
}
modus-wc-side-navigation modus-wc-menu .modus-wc-menu > li {
  max-width: 100%;
}
modus-wc-side-navigation modus-wc-menu-item {
  max-width: 100%;
}
modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item button {
  background-color: transparent;
  padding-inline-end: var(--modus-wc-spacing-xs);
  padding-inline-start: var(--modus-wc-spacing-xs);
}
modus-wc-side-navigation .side-navigation-content > modus-wc-menu modus-wc-menu-item .modus-wc-menu-item button {
  max-height: 32px;
}

[data-theme=modus-modern-light] modus-wc-side-navigation .modus-wc-side-navigation-expanded modus-wc-menu-item .modus-wc-menu-item > button .modus-wc-menu-item-content .modus-wc-menu-item-labels,
[data-theme=modus-modern-dark] modus-wc-side-navigation .modus-wc-side-navigation-expanded modus-wc-menu-item .modus-wc-menu-item > button .modus-wc-menu-item-content .modus-wc-menu-item-labels {
  display: block;
  padding-inline-end: 0;
  padding-inline-start: var(--modus-wc-spacing-md);
}
[data-theme=modus-modern-light] modus-wc-side-navigation .modus-wc-side-navigation,
[data-theme=modus-modern-dark] modus-wc-side-navigation .modus-wc-side-navigation {
  background-size: cover;
  box-shadow: none;
}
[data-theme=modus-modern-light] modus-wc-side-navigation .side-navigation-content,
[data-theme=modus-modern-dark] modus-wc-side-navigation .side-navigation-content {
  color: var(--modus-wc-color-base-page);
  padding: 0 var(--modus-wc-spacing-lg);
}
[data-theme=modus-modern-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item,
[data-theme=modus-modern-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item {
  border-radius: var(--modus-wc-border-radius-btn);
  margin-bottom: var(--modus-wc-spacing-xs);
}
[data-theme=modus-modern-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item > button,
[data-theme=modus-modern-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item > button {
  padding-inline-end: var(--modus-wc-spacing-md);
}
[data-theme=modus-modern-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item > button .modus-wc-menu-item-content .modus-wc-menu-item-labels,
[data-theme=modus-modern-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item > button .modus-wc-menu-item-content .modus-wc-menu-item-labels {
  display: none;
  padding: 0;
  padding-inline-end: var(--modus-wc-spacing-md);
}
[data-theme=modus-modern-light] modus-wc-side-navigation .side-navigation-content:has(modus-wc-tree-menu),
[data-theme=modus-modern-dark] modus-wc-side-navigation .side-navigation-content:has(modus-wc-tree-menu) {
  padding: 0;
}

[data-theme=modus-classic-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item button,
[data-theme=modus-classic-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item button {
  background-color: transparent;
  padding: var(--modus-wc-spacing-md) 1.25rem;
  padding-inline-end: var(--modus-wc-spacing-lg);
  padding-inline-start: calc(var(--modus-wc-spacing-lg) + 0.25rem);
}

[data-theme=modus-classic-dark] modus-wc-side-navigation .modus-wc-side-navigation {
  background: var(--modus-wc-color-gray-10);
  background-size: cover;
  box-shadow: none;
}
[data-theme=modus-classic-dark] modus-wc-side-navigation .side-navigation-content {
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-side-navigation modus-wc-menu .modus-wc-menu {
  background: transparent;
  color: var(--modus-wc-color-white);
}
[data-theme=modus-classic-dark] modus-wc-side-navigation modus-wc-menu .modus-wc-menu button:hover {
  background: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}

[data-theme=connect-light] modus-wc-side-navigation .modus-wc-side-navigation,
[data-theme=connect-dark] modus-wc-side-navigation .modus-wc-side-navigation {
  background: transparent;
  box-shadow: none;
  color: var(--modus-wc-color-primary-content);
}
[data-theme=connect-light] modus-wc-side-navigation .modus-wc-side-navigation:hover,
[data-theme=connect-dark] modus-wc-side-navigation .modus-wc-side-navigation:hover {
  background: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-side-navigation,
[data-theme=connect-dark] modus-wc-side-navigation {
  /* Flat menu only — tree-menu rows use story tree-item styles. */
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu > modus-wc-menu-item .modus-wc-menu-item,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu > modus-wc-menu-item .modus-wc-menu-item {
  background: transparent;
  color: var(--modus-wc-color-primary-content);
}
[data-theme=connect-light] modus-wc-side-navigation,
[data-theme=connect-dark] modus-wc-side-navigation {
  /* Suppress component li:hover base-100 and DaisyUI menu li>*:hover (white flash). */
}
[data-theme=connect-light] modus-wc-side-navigation .modus-wc-menu li.modus-wc-menu-item:hover,
[data-theme=connect-dark] modus-wc-side-navigation .modus-wc-menu li.modus-wc-menu-item:hover {
  background-color: transparent !important;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-tree-menu .modus-wc-menu li.modus-wc-menu-item:hover,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-tree-menu .modus-wc-menu li.modus-wc-menu-item:hover {
  background-color: transparent !important;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu > modus-wc-menu-item .modus-wc-menu-item:hover,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu > modus-wc-menu-item .modus-wc-menu-item:hover {
  background-color: transparent !important;
  color: var(--modus-wc-color-primary-content);
}
[data-theme=connect-light] modus-wc-side-navigation .side-navigation-content,
[data-theme=connect-dark] modus-wc-side-navigation .side-navigation-content {
  background: var(--modus-wc-color-connect-blue);
  color: var(--modus-wc-color-base-content);
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu .modus-wc-menu,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu .modus-wc-menu {
  background: transparent;
  color: var(--modus-wc-color-white);
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu .modus-wc-menu button:hover,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu .modus-wc-menu button:hover {
  background: var(--modus-wc-color-trimble-blue) !important;
  color: var(--modus-wc-color-white) !important;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-tree-item > li.modus-wc-menu-item:not(.modus-wc-menu-item-active) > .modus-wc-menu-item-interactive:hover,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-tree-item > li.modus-wc-menu-item:not(.modus-wc-menu-item-active) > .modus-wc-menu-item-interactive:hover {
  background: var(--modus-wc-color-trimble-blue) !important;
  color: var(--modus-wc-color-white) !important;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item {
  color: var(--modus-wc-color-white);
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item button,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item button {
  padding: var(--modus-wc-spacing-xs) 1.25rem;
  padding-inline-end: var(--modus-wc-spacing-lg);
  padding-inline-start: calc(var(--modus-wc-spacing-lg) + 0.25rem);
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item button:hover,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item button:hover {
  background: var(--modus-wc-color-trimble-blue) !important;
  color: var(--modus-wc-color-white) !important;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item button:focus,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item button:focus {
  color: var(--modus-wc-color-white);
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button {
  background: var(--modus-wc-color-blue-light);
  color: var(--modus-wc-color-white);
  font-weight: var(--modus-wc-font-weight-semibold);
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button:hover,
[data-theme=connect-dark] modus-wc-side-navigation modus-wc-menu-item .modus-wc-menu-item.modus-wc-menu-item-active button:hover {
  background: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-white);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-slider .modus-wc-range {
  --rounded-box: 200px;
  --range-shadow: var(--modus-wc-color-trimble-blue);
}

[data-theme=modus-modern-light] modus-wc-slider .modus-wc-input-label,
[data-theme=modus-modern-dark] modus-wc-slider .modus-wc-input-label,
[data-theme=modus-classic-light] modus-wc-slider .modus-wc-input-label,
[data-theme=modus-classic-dark] modus-wc-slider .modus-wc-input-label {
  padding-bottom: var(--modus-wc-spacing-sm);
}

[data-theme=modus-classic-light] modus-wc-slider .modus-wc-range,
[data-theme=modus-classic-dark] modus-wc-slider .modus-wc-range {
  --rounded-box: 200px;
  --range-shadow: var(--modus-wc-color-trimble-blue);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-stepper .modus-wc-steps .modus-wc-step {
  --fallback-b3: var(--modus-wc-color-base-200);
}

modus-wc-stepper .modus-wc-stepper-interactive .modus-wc-step::before,
modus-wc-stepper .modus-wc-stepper-interactive .modus-wc-step::after {
  pointer-events: none;
}

modus-wc-stepper .modus-wc-stepper-step-button {
  appearance: none;
  background: transparent;
  border: none;
  cursor: pointer;
  grid-column-start: 1;
  grid-row-start: 1;
  height: 44px;
  margin: 0;
  padding: 0;
  place-self: center;
  position: relative;
  width: 44px;
  z-index: 2;
}

modus-wc-stepper .modus-wc-stepper-step-button:focus-visible {
  outline: none;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-switch.modus-wc-switch-host {
  --rounded-badge: 32px;
  align-items: center;
  display: flex;
}
modus-wc-switch.modus-wc-switch-host .modus-wc-input-label {
  font-weight: var(--modus-wc-font-weight-normal);
  padding-inline-start: var(--modus-wc-spacing-md);
}

modus-wc-switch .modus-wc-toggle {
  border-radius: var(--rounded-badge);
}
modus-wc-switch .modus-wc-toggle:focus {
  border-color: var(--modus-wc-color-base-200);
}

[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle {
  background-color: var(--modus-wc-color-white);
  border: none;
  color: var(--modus-wc-color-gray-4);
  outline-color: var(--modus-wc-color-highlight-blue);
  --fallback-b1: var(--modus-wc-color-gray-4);
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs {
  --handleoffset: var(--modus-wc-spacing-sm);
  height: var(--modus-wc-spacing-lg);
  width: var(--modus-wc-spacing-xl);
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs ~ modus-wc-input-label .modus-wc-input-label,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs ~ modus-wc-input-label .modus-wc-input-label {
  font-size: var(--modus-wc-font-size-sm);
  line-height: var(--modus-wc-font-size-2xl);
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-sm,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-sm {
  --handleoffset: 1rem;
  height: 1rem;
  width: 2rem;
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-md,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-md {
  --handleoffset: 1.25rem;
  height: 1.25rem;
  width: 2.5rem;
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-lg,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-lg {
  --handleoffset: 1.5rem;
  height: 1.5rem;
  width: 3rem;
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle:checked,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle:checked {
  --fallback-b1: var(--modus-wc-color-blue-light);
  color: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:not(:checked),
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:not(:checked) {
  background-color: var(--modus-wc-color-white);
  outline: 2px solid var(--modus-wc-color-blue-light);
  outline-offset: -2px;
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:checked,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:checked {
  background-color: var(--modus-wc-color-white);
  --fallback-b1: var(--modus-wc-color-trimble-blue);
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle:not(:disabled):focus-visible,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):focus-visible {
  outline: 2px solid var(--modus-wc-color-highlight-blue);
  outline-offset: 2px;
}
[data-theme=modus-classic-light] modus-wc-switch .modus-wc-toggle:disabled,
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle:disabled {
  background-color: var(--modus-wc-color-white);
}

[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle:checked {
  --fallback-b1: var(--modus-wc-color-highlight-blue);
  color: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:not(:checked) {
  background-color: var(--modus-wc-color-white);
  outline: 2px solid var(--modus-wc-color-highlight-blue);
  outline-offset: -2px;
}
[data-theme=modus-classic-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:checked {
  background-color: var(--modus-wc-color-white);
  --fallback-b1: var(--modus-wc-color-blue-light);
}

[data-theme=connect-light] modus-wc-switch .modus-wc-toggle,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle {
  background-color: var(--modus-wc-color-white);
  border: none;
  color: var(--modus-wc-color-gray-4);
  outline-color: var(--modus-wc-color-highlight-blue);
  --fallback-b1: var(--modus-wc-color-gray-4);
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs {
  --handleoffset: var(--modus-wc-spacing-sm);
  height: var(--modus-wc-spacing-lg);
  width: var(--modus-wc-spacing-xl);
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs ~ modus-wc-input-label .modus-wc-input-label,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs ~ modus-wc-input-label .modus-wc-input-label {
  font-size: var(--modus-wc-font-size-sm);
  line-height: var(--modus-wc-font-size-2xl);
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-sm,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-sm {
  --handleoffset: 1rem;
  height: 1rem;
  width: 2rem;
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-md,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-md {
  --handleoffset: 1.25rem;
  height: 1.25rem;
  width: 2.5rem;
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-lg,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-lg {
  --handleoffset: 1.5rem;
  height: 1.5rem;
  width: 3rem;
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle:checked,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle:checked {
  --fallback-b1: var(--modus-wc-color-blue-light);
  color: var(--modus-wc-color-blue-light);
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:not(:checked),
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:not(:checked) {
  background-color: var(--modus-wc-color-white);
  outline: 2px solid var(--modus-wc-color-blue-light);
  outline-offset: -2px;
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:checked,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:checked {
  background-color: var(--modus-wc-color-white);
  --fallback-b1: var(--modus-wc-color-trimble-blue);
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle:not(:disabled):focus-visible,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):focus-visible {
  outline: 2px solid var(--modus-wc-color-highlight-blue);
  outline-offset: 2px;
}
[data-theme=connect-light] modus-wc-switch .modus-wc-toggle:disabled,
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle:disabled {
  background-color: var(--modus-wc-color-white);
}

[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle:checked {
  --fallback-b1: var(--modus-wc-color-highlight-blue);
  color: var(--modus-wc-color-highlight-blue);
}
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:not(:checked) {
  background-color: var(--modus-wc-color-white);
  outline: 2px solid var(--modus-wc-color-highlight-blue);
  outline-offset: -2px;
}
[data-theme=connect-dark] modus-wc-switch .modus-wc-toggle:not(:disabled):hover:checked {
  background-color: var(--modus-wc-color-white);
  --fallback-b1: var(--modus-wc-color-blue-light);
}

[data-theme=modus-modern-light] modus-wc-switch modus-wc-input-label .modus-wc-input-label,
[data-theme=modus-modern-dark] modus-wc-switch modus-wc-input-label .modus-wc-input-label {
  color: var(--modus-wc-color-gray-10);
  padding-inline-start: var(--modus-wc-spacing-sm);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle {
  --fallback-b1: var(--modus-wc-color-gray-0);
  border: none;
  box-shadow: var(--handleoffsetcalculator) 0 0 var(--modus-wc-border-width-md) var(--fallback-b1) inset, 0 0 0 var(--modus-wc-border-width-md) var(--fallback-b1) inset;
  color: var(--modus-wc-color-white);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle:indeterminate,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle:indeterminate {
  box-shadow: calc(var(--handleoffset) / 2) 0 0 var(--modus-wc-border-width-md) var(--fallback-b1) inset, calc(var(--handleoffset) / -2) 0 0 var(--modus-wc-border-width-md) var(--fallback-b1) inset, 0 0 0 var(--modus-wc-border-width-md) var(--fallback-b1) inset;
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle:checked,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle:checked {
  --fallback-b1: var(--modus-wc-color-primary);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle:focus-visible,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle:focus-visible {
  outline: var(--modus-wc-border-width-sm) solid var(--modus-wc-color-primary);
  outline-offset: var(--modus-wc-border-width-sm);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs {
  --handleoffset: var(--modus-wc-spacing-sm);
  height: var(--modus-wc-spacing-lg);
  width: var(--modus-wc-spacing-xl);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs ~ modus-wc-input-label .modus-wc-input-label,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-xs ~ modus-wc-input-label .modus-wc-input-label {
  font-size: var(--modus-wc-font-size-sm);
  line-height: var(--modus-wc-font-size-2xl);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-sm,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-sm {
  --handleoffset: var(--modus-wc-spacing-md);
  height: var(--modus-wc-font-size-2xl);
  width: var(--modus-wc-spacing-2xl);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-sm ~ modus-wc-input-label .modus-wc-input-label,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-sm ~ modus-wc-input-label .modus-wc-input-label {
  font-size: var(--modus-wc-font-size-md);
  line-height: var(--modus-wc-line-height-md);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-md,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-md {
  --handleoffset: var(--modus-wc-spacing-lg);
  height: var(--modus-wc-spacing-xl);
  width: var(--modus-wc-size-md);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-md ~ modus-wc-input-label .modus-wc-input-label,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-md ~ modus-wc-input-label .modus-wc-input-label {
  font-size: var(--modus-wc-font-size-lg);
  line-height: var(--modus-wc-line-height-md);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-lg,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-lg {
  --handleoffset: var(--modus-wc-spacing-xl);
  height: var(--modus-wc-spacing-2xl);
  width: var(--modus-wc-size-xl);
}
[data-theme=modus-modern-light] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-lg ~ modus-wc-input-label .modus-wc-input-label,
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle.modus-wc-toggle-lg ~ modus-wc-input-label .modus-wc-input-label {
  font-size: var(--modus-wc-font-size-xl);
  line-height: var(--modus-wc-line-height-lg);
}

[data-theme=modus-modern-dark] modus-wc-switch modus-wc-input-label .modus-wc-input-label {
  color: var(--modus-wc-color-gray-light);
}
[data-theme=modus-modern-dark] modus-wc-switch .modus-wc-toggle {
  --fallback-b1: var(--modus-wc-color-gray-9);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-tabs .modus-wc-tab modus-wc-icon + span,
modus-wc-tabs .modus-wc-tab span + modus-wc-icon {
  padding-inline-start: var(--modus-wc-spacing-xs);
}

modus-wc-tabs .modus-wc-tabs {
  align-items: center;
  display: inline-flex;
  font-weight: var(--modus-wc-font-weight-bold);
}
modus-wc-tabs .modus-wc-tabs-xs {
  height: var(--modus-wc-size-xs);
  min-height: var(--modus-wc-size-xs);
}
modus-wc-tabs .modus-wc-tabs-sm {
  height: var(--modus-wc-size-sm);
  min-height: var(--modus-wc-size-sm);
}
modus-wc-tabs .modus-wc-tabs-md {
  height: var(--modus-wc-size-md);
  min-height: var(--modus-wc-size-md);
}
modus-wc-tabs .modus-wc-tabs-lg {
  height: var(--modus-wc-size-lg);
  min-height: var(--modus-wc-size-lg);
}
modus-wc-tabs .modus-wc-tabs-xl {
  height: var(--modus-wc-size-xl);
  min-height: var(--modus-wc-size-xl);
}
modus-wc-tabs .modus-wc-tabs modus-wc-icon .modus-wc-icon--xs {
  line-height: calc(var(--modus-wc-line-height-xs) + 0.25rem);
}
modus-wc-tabs .modus-wc-tabs modus-wc-icon .modus-wc-icon--sm {
  line-height: calc(var(--modus-wc-line-height-sm) + 0.25rem);
}
modus-wc-tabs .modus-wc-tabs modus-wc-icon .modus-wc-icon--md {
  line-height: calc(var(--modus-wc-line-height-md) + 0.25rem);
}
modus-wc-tabs .modus-wc-tabs modus-wc-icon .modus-wc-icon--lg {
  line-height: calc(var(--modus-wc-line-height-lg) + 0.25rem);
}
modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-bordered .modus-wc-tab:is(.modus-wc-tab-active, [aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]) {
  background-color: var(--modus-wc-color-base-page);
  border-bottom-color: var(--modus-wc-color-primary);
  border-bottom-width: var(--modus-wc-border-width-lg);
}
modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-boxed {
  background: var(--modus-wc-color-base-100);
  border-radius: var(--modus-wc-border-radius-tab);
}
modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-boxed.modus-wc-tabs {
  height: inherit;
}
modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-boxed > .modus-wc-tab {
  border-radius: var(--modus-wc-border-radius-tab);
  height: inherit;
  min-height: var(--modus-wc-input-height-sm);
}
modus-wc-tabs .modus-wc-tabs .modus-wc-tabs-boxed :is(.modus-wc-tab-active, [aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]),
modus-wc-tabs .modus-wc-tabs .modus-wc-tabs-boxed :is(input:checked) {
  background: var(--modus-wc-color-primary);
  border-radius: var(--modus-wc-border-radius-tab);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-lifted > .modus-wc-tab {
  border-top-left-radius: var(--modus-wc-border-radius-tab);
  border-top-right-radius: var(--modus-wc-border-radius-tab);
}

[data-theme=modus-modern-light] modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-lifted > .modus-wc-tab:is(.modus-wc-tab-active, [aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]), [data-theme=modus-modern-light] modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-lifted > .modus-wc-tab:is(input:checked),
[data-theme=connect-light] modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-lifted > .modus-wc-tab:is(.modus-wc-tab-active, [aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]),
[data-theme=connect-light] modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-lifted > .modus-wc-tab:is(input:checked),
[data-theme=connect-dark] modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-lifted > .modus-wc-tab:is(.modus-wc-tab-active, [aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]),
[data-theme=connect-dark] modus-wc-tabs .modus-wc-tabs.modus-wc-tabs-lifted > .modus-wc-tab:is(input:checked) {
  --tab-bg: var(--modus-wc-color-base-page);
  color: var(--modus-wc-color-primary);
}

modus-wc-tabs .modus-wc-tab {
  border-radius: var(--tab-radius) var(--tab-radius) 0 0;
  height: inherit;
  min-height: var(--modus-wc-input-height-sm);
}
modus-wc-tabs .modus-wc-tab:hover {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab:focus {
  background-color: var(--modus-wc-color-base-200);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab:active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab-selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab-active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab-open {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab.selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab.active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab-disabled:hover {
  background-color: inherit;
}
modus-wc-tabs .modus-wc-tab--active {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab--selected {
  background-color: var(--modus-wc-color-primary-pale);
  color: var(--modus-wc-color-primary);
}
modus-wc-tabs .modus-wc-tab:checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-tabs .modus-wc-tab.checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-tabs .modus-wc-tab-checked {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-tabs .modus-wc-tab.pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-tabs .modus-wc-tab-pressed {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-tabs .modus-wc-tab[aria-pressed=true] {
  background-color: var(--modus-wc-color-primary);
  color: var(--modus-wc-color-primary-content);
}
modus-wc-tabs .modus-wc-tab-active {
  background-color: var(--modus-wc-color-base-page);
  color: inherit;
}
modus-wc-tabs .modus-wc-tab:disabled {
  pointer-events: none;
}

[data-theme=modus-classic-light] modus-wc-tabs .modus-wc-tab {
  --tab-color: var(--modus-wc-color-trimble-gray);
  --tab-bg: var(--modus-wc-color-white);
  --fallback-bc: var(--modus-wc-color-gray-2);
}
[data-theme=modus-classic-light] modus-wc-tabs .modus-wc-tab:not(.modus-wc-tab-active):not(.modus-wc-tab-disabled):hover {
  background-color: var(--modus-wc-color-blue-pale);
}
[data-theme=modus-classic-light] modus-wc-tabs .modus-wc-tab:not(.modus-wc-tab-disabled):active {
  --tab-color: var(--modus-wc-color-gray-10);
  --tab-border: var(
    --modus-wc-border-width-xs
  );
  --tab-bg: var(--modus-wc-color-white);
  background-color: var(--modus-wc-color-trimble-blue-pale) !important;
}
[data-theme=modus-classic-light] modus-wc-tabs .modus-wc-tab.modus-wc-tab-active {
  --tab-color: var(--modus-wc-color-gray-10);
  --tab-bg: var(--modus-wc-color-blue-light);
  background-color: var(--modus-wc-color-white);
  --fallback-p: var(--modus-wc-color-blue-light);
  --fallback-bc: transparent;
}
[data-theme=modus-classic-light] modus-wc-tabs .modus-wc-tab .modus-wc-tabs-lifted > .modus-wc-tab:is(.modus-wc-tab-active, [aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]),
[data-theme=modus-classic-light] modus-wc-tabs .modus-wc-tab .modus-wc-tabs-lifted > .modus-wc-tab:is(input:checked) {
  color: var(--modus-wc-color-white) !important;
}

[data-theme=modus-classic-dark] modus-wc-tabs .modus-wc-tab {
  --tab-color: var(--modus-wc-color-white);
  --tab-bg: var(--modus-wc-color-gray-8);
  --fallback-bc: var(--modus-wc-color-gray-8);
}
[data-theme=modus-classic-dark] modus-wc-tabs .modus-wc-tab:not(.modus-wc-tab-active):not(.modus-wc-tab-disabled):hover {
  background-color: var(--modus-wc-color-highlight-blue-pale);
  color: var(--modus-wc-color-gray-10);
}
[data-theme=modus-classic-dark] modus-wc-tabs .modus-wc-tab:not(.modus-wc-tab-disabled):active {
  background-color: var(--modus-wc-color-highlight-blue-pale) !important;
}
[data-theme=modus-classic-dark] modus-wc-tabs .modus-wc-tab.modus-wc-tab-active {
  --tab-color: var(--modus-wc-color-white);
  --tab-bg: var(--modus-wc-color-blue-light);
  border-bottom-width: var(--modus-wc-border-width-xs);
  --fallback-p: var(--modus-wc-color-blue-light);
  --fallback-bc: var(--modus-wc-color-highlight-blue);
}
[data-theme=modus-classic-dark] modus-wc-tabs .modus-wc-tab.modus-wc-tab-disabled {
  --tab-color: var(--modus-wc-color-gray-2);
  background-color: var(--modus-wc-color-gray-9);
}
[data-theme=modus-classic-dark] modus-wc-tabs .modus-wc-tab .modus-wc-tabs-lifted > .modus-wc-tab:is(.modus-wc-tab-active, [aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]),
[data-theme=modus-classic-dark] modus-wc-tabs .modus-wc-tab .modus-wc-tabs-lifted > .modus-wc-tab:is(input:checked) {
  color: var(--modus-wc-color-white);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-text-input .modus-wc-input {
  border-bottom-width: var(--input-bottom-border-width);
}
modus-wc-text-input .modus-wc-input--error {
  border-color: var(--modus-wc-color-error) !important;
}
modus-wc-text-input .modus-wc-input--info {
  border-color: var(--modus-wc-color-info) !important;
}
modus-wc-text-input .modus-wc-input--success {
  border-color: var(--modus-wc-color-success) !important;
}
modus-wc-text-input .modus-wc-input--warning {
  border-color: var(--modus-wc-color-warning) !important;
}
modus-wc-text-input .modus-wc-input-xs {
  height: var(--modus-wc-size-xs);
  min-height: var(--modus-wc-size-xs);
}
modus-wc-text-input .modus-wc-input-sm {
  height: var(--modus-wc-size-sm);
  min-height: var(--modus-wc-size-sm);
}
modus-wc-text-input .modus-wc-input-md {
  height: var(--modus-wc-size-md);
  min-height: var(--modus-wc-size-md);
}
modus-wc-text-input .modus-wc-input-lg {
  height: var(--modus-wc-size-lg);
  min-height: var(--modus-wc-size-lg);
}
modus-wc-text-input .modus-wc-input-xl {
  height: var(--modus-wc-size-xl);
  min-height: var(--modus-wc-size-xl);
}
modus-wc-text-input .modus-wc-input input {
  background-color: var(--modus-wc-color-base-page);
}
modus-wc-text-input .modus-wc-input:has(> input[disabled]) > input[disabled] {
  background-color: var(--modus-wc-color-base-200);
}

modus-wc-text-input .modus-wc-input-label {
  padding-bottom: var(--modus-wc-spacing-sm);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input {
  background-color: var(--modus-wc-color-base-page);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-sm {
  padding: 0 var(--modus-wc-spacing-sm);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-sm input {
  max-height: var(--modus-wc-size-xs);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-sm .modus-wc-text-input-icon:not(.modus-wc-text-input-icon-custom) {
  height: var(--modus-wc-line-height-sm);
  width: var(--modus-wc-line-height-sm);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-md {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-md .modus-wc-text-input-icon:not(.modus-wc-text-input-icon-custom) {
  height: var(--modus-wc-line-height-md);
  width: var(--modus-wc-line-height-md);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-lg {
  font-size: var(--modus-wc-font-size-lg);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-lg .modus-wc-text-input-icon:not(.modus-wc-text-input-icon-custom) {
  height: var(--modus-wc-line-height-lg);
  width: var(--modus-wc-line-height-lg);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input .modus-wc-text-input-icon.modus-wc-text-input-icon-clear {
  cursor: pointer;
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input .modus-wc-text-input-icon.modus-wc-text-input-icon-custom {
  align-items: center;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input .modus-wc-clear-icon-container {
  align-items: center;
  display: flex;
  justify-content: center;
  min-width: var(--modus-wc-line-height-md);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input .modus-wc-clear-icon-container.modus-wc-clear-icon-hidden {
  pointer-events: none;
  visibility: hidden;
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input .modus-wc-clear-icon-container.modus-wc-clear-icon-visible {
  visibility: visible;
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-sm .modus-wc-clear-icon-container {
  min-width: var(--modus-wc-line-height-sm);
}
modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-lg .modus-wc-clear-icon-container {
  min-width: var(--modus-wc-line-height-lg);
}

[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input,
[data-theme=modus-classic-dark] modus-wc-text-input .modus-wc-text-input.modus-wc-input {
  border-radius: var(--modus-wc-border-radius-md);
}
[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-sm,
[data-theme=modus-classic-dark] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-sm {
  font-size: var(--modus-wc-font-size-sm);
  height: var(--modus-wc-input-height-sm);
  line-height: var(--modus-wc-line-height-sm);
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-xs);
}
[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-md,
[data-theme=modus-classic-dark] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-md {
  font-size: var(--modus-wc-font-size-md);
  height: var(--modus-wc-input-height-md);
  line-height: var(--modus-wc-line-height-md);
  padding: var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-lg,
[data-theme=modus-classic-dark] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-lg {
  font-size: var(--modus-wc-font-size-lg);
  height: var(--modus-wc-input-height-lg);
  line-height: var(--modus-wc-line-height-xl);
  padding: var(--modus-wc-spacing-md) var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input:focus-within,
[data-theme=modus-classic-dark] modus-wc-text-input .modus-wc-text-input.modus-wc-input:focus-within {
  border-width: var(--modus-wc-border-width-sm);
  box-shadow: none;
  outline: none;
}
[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input .modus-wc-text-input-icon.modus-wc-text-input-icon-clear:focus:not(:focus-visible),
[data-theme=modus-classic-dark] modus-wc-text-input .modus-wc-text-input.modus-wc-input .modus-wc-text-input-icon.modus-wc-text-input-icon-clear:focus:not(:focus-visible) {
  outline: none;
}
[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-text-input--readonly,
[data-theme=modus-classic-dark] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-text-input--readonly {
  background-color: var(--modus-wc-color-base-100);
}

[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-bordered:not(:disabled) {
  border-color: var(--modus-wc-color-accent);
}
[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input.modus-wc-input-bordered:not(:disabled):focus-within {
  border-color: var(--modus-wc-color-blue-light);
}
[data-theme=modus-classic-light] modus-wc-text-input .modus-wc-text-input.modus-wc-input .modus-wc-text-input-icon {
  color: var(--modus-wc-color-gray-8);
}

[data-theme=modus-classic-dark] modus-wc-text-input .modus-wc-text-input.modus-wc-input .modus-wc-text-input-icon {
  color: var(--modus-wc-color-gray-2);
}
[data-theme=modus-classic-dark] modus-wc-text-input .modus-wc-text-input.modus-wc-input:focus-within {
  border-color: var(--modus-wc-color-highlight-blue);
}

[data-theme=connect-light] modus-wc-text-input .modus-wc-text-input,
[data-theme=connect-dark] modus-wc-text-input .modus-wc-text-input {
  border-bottom-width: var(--input-bottom-border-width);
  outline-width: 0 !important;
}
[data-theme=connect-light] modus-wc-text-input .modus-wc-text-input:not(.modus-wc-select, .modus-wc-number-input),
[data-theme=connect-dark] modus-wc-text-input .modus-wc-text-input:not(.modus-wc-select, .modus-wc-number-input) {
  padding: 0 var(--modus-wc-spacing-sm);
}
[data-theme=connect-light] modus-wc-text-input .modus-wc-text-input:hover,
[data-theme=connect-dark] modus-wc-text-input .modus-wc-text-input:hover {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-text-input .modus-wc-text-input:active,
[data-theme=connect-dark] modus-wc-text-input .modus-wc-text-input:active {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-text-input .modus-wc-text-input:focus,
[data-theme=connect-dark] modus-wc-text-input .modus-wc-text-input:focus {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
[data-theme=connect-light] modus-wc-text-input .modus-wc-text-input:focus-within,
[data-theme=connect-dark] modus-wc-text-input .modus-wc-text-input:focus-within {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
.modus-wc-input--error {
  border-color: var(--modus-wc-color-error) !important;
}
.modus-wc-input--info {
  border-color: var(--modus-wc-color-info) !important;
}
.modus-wc-input--success {
  border-color: var(--modus-wc-color-success) !important;
}
.modus-wc-input--warning {
  border-color: var(--modus-wc-color-warning) !important;
}

modus-wc-textarea .modus-wc-input-label {
  padding-bottom: var(--modus-wc-spacing-sm);
}

[data-theme=modus-classic-light] modus-wc-textarea .modus-wc-textarea,
[data-theme=modus-classic-dark] modus-wc-textarea .modus-wc-textarea {
  border-radius: var(--modus-wc-border-radius-md);
}
[data-theme=modus-classic-light] modus-wc-textarea .modus-wc-textarea.modus-wc-textarea-sm,
[data-theme=modus-classic-dark] modus-wc-textarea .modus-wc-textarea.modus-wc-textarea-sm {
  font-size: var(--modus-wc-font-size-sm);
  padding: var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-textarea .modus-wc-textarea.modus-wc-textarea-md,
[data-theme=modus-classic-dark] modus-wc-textarea .modus-wc-textarea.modus-wc-textarea-md {
  font-size: var(--modus-wc-font-size-md);
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-sm) var(--modus-wc-spacing-md) var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-textarea .modus-wc-textarea.modus-wc-textarea-lg,
[data-theme=modus-classic-dark] modus-wc-textarea .modus-wc-textarea.modus-wc-textarea-lg {
  font-size: var(--modus-wc-font-size-lg);
  padding: var(--modus-wc-spacing-md);
}
[data-theme=modus-classic-light] modus-wc-textarea .modus-wc-textarea:focus,
[data-theme=modus-classic-dark] modus-wc-textarea .modus-wc-textarea:focus {
  border-color: var(--modus-wc-color-blue-light);
  border-width: var(--modus-wc-border-width-sm);
  box-shadow: none;
  outline: none;
}
[data-theme=modus-classic-light] modus-wc-textarea .modus-wc-textarea:read-only,
[data-theme=modus-classic-dark] modus-wc-textarea .modus-wc-textarea:read-only {
  background-color: var(--modus-wc-color-base-100);
}

[data-theme=modus-classic-light] modus-wc-textarea .modus-wc-textarea.modus-wc-textarea-bordered:not(:disabled):not(:focus) {
  border-color: var(--modus-wc-color-gray-6);
}

[data-theme=modus-classic-dark] modus-wc-textarea .modus-wc-textarea:focus {
  border-color: var(--modus-wc-color-highlight-blue);
}

[data-theme=connect-light] modus-wc-textarea .modus-wc-textarea,
[data-theme=connect-dark] modus-wc-textarea .modus-wc-textarea {
  border-bottom-width: var(--input-bottom-border-width);
  outline-width: 0 !important;
}
[data-theme=connect-light] modus-wc-textarea .modus-wc-textarea:not(.modus-wc-select, .modus-wc-number-input),
[data-theme=connect-dark] modus-wc-textarea .modus-wc-textarea:not(.modus-wc-select, .modus-wc-number-input) {
  padding: 0 var(--modus-wc-spacing-sm);
}
[data-theme=connect-light] modus-wc-textarea .modus-wc-textarea:hover,
[data-theme=connect-dark] modus-wc-textarea .modus-wc-textarea:hover {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-textarea .modus-wc-textarea:active,
[data-theme=connect-dark] modus-wc-textarea .modus-wc-textarea:active {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-textarea .modus-wc-textarea:focus,
[data-theme=connect-dark] modus-wc-textarea .modus-wc-textarea:focus {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
[data-theme=connect-light] modus-wc-textarea .modus-wc-textarea:focus-within,
[data-theme=connect-dark] modus-wc-textarea .modus-wc-textarea:focus-within {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-theme-switcher {
  display: grid;
}

[data-theme=modus-modern-dark] .modus-wc-toggle {
  --tglbg: var(--modus-wc-color-gray-9);
  border-color: var(--modus-wc-color-black);
}
[data-theme=modus-modern-dark] .modus-wc-stroke-base-100 {
  stroke: var(--modus-wc-color-white);
}
[data-theme=modus-modern-dark] .modus-wc-fill-base-100 {
  fill: var(--modus-wc-color-gray-9);
}
[data-theme=modus-modern-dark] .modus-wc-bg-base-content {
  background-color: var(--modus-wc-color-black);
}

[data-theme=modus-modern-light] .modus-wc-toggle {
  --tglbg: var(--modus-wc-color-gray-0);
  border-color: var(--modus-wc-white);
}
[data-theme=modus-modern-light] .modus-wc-stroke-base-100 {
  stroke: var(--modus-wc-color-black);
}
[data-theme=modus-modern-light] .modus-wc-fill-base-100 {
  fill: var(--modus-wc-color-gray-0);
}
[data-theme=modus-modern-light] .modus-wc-bg-base-content {
  background-color: var(--modus-wc-color-white);
}

.modus-wc-toggle.modus-wc-stroke-base-100 {
  stroke: var(--modus-wc-color-base-300);
}
.modus-wc-toggle.modus-wc-fill-base-100 {
  fill: var(--modus-wc-color-base-300);
}

.modus-wc-toggle:checked.modus-wc-stroke-base-100 {
  stroke: var(--modus-wc-color-base-100);
}
.modus-wc-toggle:checked.modus-wc-fill-base-100 {
  fill: var(--modus-wc-color-base-100);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
.modus-wc-input--error {
  border-color: var(--modus-wc-color-error) !important;
}
.modus-wc-input--info {
  border-color: var(--modus-wc-color-info) !important;
}
.modus-wc-input--success {
  border-color: var(--modus-wc-color-success) !important;
}
.modus-wc-input--warning {
  border-color: var(--modus-wc-color-warning) !important;
}
.modus-wc-input-xs {
  height: var(--modus-wc-size-xs);
  min-height: var(--modus-wc-size-xs);
}
.modus-wc-input-sm {
  height: var(--modus-wc-size-sm);
  min-height: var(--modus-wc-size-sm);
}
.modus-wc-input-md {
  height: var(--modus-wc-size-md);
  min-height: var(--modus-wc-size-md);
}
.modus-wc-input-lg {
  height: var(--modus-wc-size-lg);
  min-height: var(--modus-wc-size-lg);
}
.modus-wc-input-xl {
  height: var(--modus-wc-size-xl);
  min-height: var(--modus-wc-size-xl);
}

modus-wc-time-input .modus-wc-input-label {
  padding-bottom: var(--modus-wc-spacing-sm);
}

[data-theme=modus-classic-light] modus-wc-time-input .modus-wc-time-input.modus-wc-input,
[data-theme=modus-classic-dark] modus-wc-time-input .modus-wc-time-input.modus-wc-input {
  border-radius: var(--modus-wc-border-radius-md);
}
[data-theme=modus-classic-light] modus-wc-time-input .modus-wc-time-input.modus-wc-input.modus-wc-input-sm,
[data-theme=modus-classic-dark] modus-wc-time-input .modus-wc-time-input.modus-wc-input.modus-wc-input-sm {
  font-size: var(--modus-wc-font-size-sm);
  height: var(--modus-wc-input-height-sm);
  padding: var(--modus-wc-spacing-sm) var(--modus-wc-spacing-xs);
}
[data-theme=modus-classic-light] modus-wc-time-input .modus-wc-time-input.modus-wc-input.modus-wc-input-md,
[data-theme=modus-classic-dark] modus-wc-time-input .modus-wc-time-input.modus-wc-input.modus-wc-input-md {
  font-size: var(--modus-wc-font-size-md);
  height: var(--modus-wc-input-height-md);
  padding: var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-time-input .modus-wc-time-input.modus-wc-input.modus-wc-input-lg,
[data-theme=modus-classic-dark] modus-wc-time-input .modus-wc-time-input.modus-wc-input.modus-wc-input-lg {
  font-size: var(--modus-wc-font-size-lg);
  height: var(--modus-wc-input-height-lg);
  padding: var(--modus-wc-spacing-md) var(--modus-wc-spacing-sm);
}
[data-theme=modus-classic-light] modus-wc-time-input .modus-wc-time-input.modus-wc-input:focus, [data-theme=modus-classic-light] modus-wc-time-input .modus-wc-time-input.modus-wc-input:focus-within,
[data-theme=modus-classic-dark] modus-wc-time-input .modus-wc-time-input.modus-wc-input:focus,
[data-theme=modus-classic-dark] modus-wc-time-input .modus-wc-time-input.modus-wc-input:focus-within {
  border-color: var(--modus-wc-color-blue-light);
  border-width: var(--modus-wc-border-width-sm);
  box-shadow: none;
  outline: none;
}
[data-theme=modus-classic-light] modus-wc-time-input .modus-wc-time-input.modus-wc-input.modus-wc-time-input--readonly,
[data-theme=modus-classic-dark] modus-wc-time-input .modus-wc-time-input.modus-wc-input.modus-wc-time-input--readonly {
  background-color: var(--modus-wc-color-base-100);
}

[data-theme=modus-classic-light] modus-wc-time-input .modus-wc-time-input.modus-wc-input.modus-wc-input-bordered:not(:disabled):not(:focus) {
  border-color: var(--modus-wc-color-gray-6);
}

[data-theme=modus-classic-dark] modus-wc-time-input .modus-wc-time-input.modus-wc-input {
  color-scheme: dark;
}
[data-theme=modus-classic-dark] modus-wc-time-input .modus-wc-time-input.modus-wc-input:focus {
  border-color: var(--modus-wc-color-highlight-blue);
}

[data-theme=connect-light] modus-wc-time-input .modus-wc-time-input,
[data-theme=connect-dark] modus-wc-time-input .modus-wc-time-input {
  border-bottom-width: var(--input-bottom-border-width);
  outline-width: 0 !important;
}
[data-theme=connect-light] modus-wc-time-input .modus-wc-time-input:not(.modus-wc-select, .modus-wc-number-input),
[data-theme=connect-dark] modus-wc-time-input .modus-wc-time-input:not(.modus-wc-select, .modus-wc-number-input) {
  padding: 0 var(--modus-wc-spacing-sm);
}
[data-theme=connect-light] modus-wc-time-input .modus-wc-time-input:hover,
[data-theme=connect-dark] modus-wc-time-input .modus-wc-time-input:hover {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-time-input .modus-wc-time-input:active,
[data-theme=connect-dark] modus-wc-time-input .modus-wc-time-input:active {
  border-bottom-color: var(--modus-wc-color-primary);
}
[data-theme=connect-light] modus-wc-time-input .modus-wc-time-input:focus,
[data-theme=connect-dark] modus-wc-time-input .modus-wc-time-input:focus {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
[data-theme=connect-light] modus-wc-time-input .modus-wc-time-input:focus-within,
[data-theme=connect-dark] modus-wc-time-input .modus-wc-time-input:focus-within {
  border-bottom-color: var(--modus-wc-color-primary);
  outline: none;
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
.modus-wc-navbar {
  background: var(--modus-wc-color-base-page);
  border-radius: var(--modus-wc-border-radius-box);
  box-shadow: 0 1px 2px -1px color-mix(in sRGB, var(--modus-wc-color-black) 10%, transparent), 0 1px 3px 0 color-mix(in sRGB, var(--modus-wc-color-black) 10%, transparent);
}
/**
* This component uses custom styling with PopperJS.
* Only add styles here that should not be applied by Tailwind or the theme.
*/
/* Reset popover UA styles so they don't interfere with Popper positioning */
.modus-wc-tooltip-content[popover] {
  overflow: visible;
}

/* Tooltip content styling for PopperJS */
.modus-wc-tooltip-content {
  background-color: var(--modus-wc-color-neutral-content);
  border-radius: 0.25rem;
  color: var(--modus-wc-color-neutral);
  font-size: 0.875rem;
  font-weight: var(--modus-wc-font-weight-regular);
  max-width: 20rem;
  overflow-wrap: break-word;
  padding: 0.25rem 0.5rem;
  pointer-events: none;
  position: relative;
  text-align: center;
  white-space: normal;
  width: max-content;
  z-index: 1000;
}

/* Arrow styling */
.modus-wc-tooltip-arrow,
.modus-wc-tooltip-arrow::before {
  background: inherit;
  height: 8px;
  position: absolute;
  width: 8px;
}

.modus-wc-tooltip-arrow {
  text-align: initial;
  visibility: hidden;
}

.modus-wc-tooltip-arrow::before {
  background-color: var(--modus-wc-color-neutral-content);
  content: "";
  transform: rotate(45deg);
  visibility: visible;
}

/* Arrow placement based on tooltip position */
.modus-wc-tooltip-content[data-popper-placement^=top] .modus-wc-tooltip-arrow {
  bottom: -4px;
}

.modus-wc-tooltip-content[data-popper-placement^=bottom] .modus-wc-tooltip-arrow {
  top: -4px;
}

.modus-wc-tooltip-content[data-popper-placement^=left] .modus-wc-tooltip-arrow {
  right: -4px;
}

.modus-wc-tooltip-content[data-popper-placement^=right] .modus-wc-tooltip-arrow {
  left: -4px;
}

[data-theme=modus-classic-light] .modus-wc-tooltip-content {
  background-color: var(--modus-wc-color-gray-7);
  color: var(--modus-wc-color-white);
}

[data-theme=modus-classic-light] .modus-wc-tooltip-arrow::before {
  background-color: var(--modus-wc-color-gray-7);
}

[data-theme=modus-classic-dark] .modus-wc-tooltip-content {
  background-color: var(--modus-wc-color-gray-0);
  color: var(--modus-wc-color-trimble-gray);
}

[data-theme=modus-classic-dark] .modus-wc-tooltip-arrow::before {
  background-color: var(--modus-wc-color-gray-0);
}

[data-theme=connect-light] .modus-wc-tooltip-content,
[data-theme=connect-dark] .modus-wc-tooltip-content {
  background-color: var(--modus-wc-color-base-content);
  color: var(--modus-wc-color-base-page);
}

[data-theme=connect-light] .modus-wc-tooltip-arrow::before,
[data-theme=connect-dark] .modus-wc-tooltip-arrow::before {
  background-color: var(--modus-wc-color-base-content);
}
/**
* Only add styles here that should not be applied by Tailwind or the theme.
*/
modus-wc-tree-item .modus-wc-menu-item {
  display: flex;
  flex-direction: column;
  width: 100%;
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive {
  align-items: center;
  border-radius: inherit;
  display: flex;
  width: 100%;
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive:focus {
  background-color: transparent;
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive.modus-wc-menu-dropdown-toggle::after {
  color: var(--modus-wc-color-base-content);
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content {
  align-items: center;
  display: flex;
  width: 100%;
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content [slot=start] {
  padding-inline-end: var(--modus-wc-spacing-sm);
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content [slot=end] {
  margin-inline-start: auto;
  padding-inline-start: var(--modus-wc-spacing-sm);
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content [slot=end]:is(modus-wc-dropdown-menu) {
  background-color: transparent;
  padding-inline-start: 0;
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content modus-wc-checkbox {
  padding-inline-end: var(--modus-wc-spacing-sm);
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content .modus-wc-menu-item-labels {
  padding-inline-end: var(--modus-wc-spacing-xs);
  padding-inline-start: var(--modus-wc-spacing-md);
  white-space: nowrap;
}
modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content .modus-wc-menu-item-sublabel {
  font-size: var(--modus-wc-font-size-sm);
  white-space: nowrap;
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-sm .modus-wc-menu-item-interactive {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-sm .modus-wc-menu-item-interactive .modus-wc-menu-item-sublabel {
  font-size: var(--modus-wc-font-size-xs);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-md .modus-wc-menu-item-interactive {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-md .modus-wc-menu-item-interactive .modus-wc-menu-item-sublabel {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-lg .modus-wc-menu-item-interactive {
  font-size: var(--modus-wc-font-size-lg);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-lg .modus-wc-menu-item-interactive .modus-wc-menu-item-sublabel {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-bordered {
  border-bottom: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
  border-radius: 0;
  border-top: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-bordered.modus-wc-menu-item-selected, modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-bordered.modus-wc-menu-item-active {
  border-color: transparent;
}
modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-selected) {
  color: var(--modus-wc-color-base-content);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-selected {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 50%, transparent);
  border-radius: inherit;
  color: var(--modus-wc-base-content);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-selected:focus {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 50%, transparent);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-selected .modus-wc-menu-item-interactive {
  background-color: transparent;
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-selected .modus-wc-menu-item-interactive:hover, modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-selected .modus-wc-menu-item-interactive:focus {
  background-color: transparent;
  border-radius: inherit;
  box-shadow: none;
  color: inherit;
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 50%, transparent);
  border-radius: inherit;
  color: var(--modus-wc-color-base-content);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active:focus {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary-pale) 50%, transparent);
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive {
  background-color: transparent;
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive:hover, modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive:focus {
  background-color: transparent;
  border-radius: inherit;
  box-shadow: none;
  color: inherit;
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-disabled {
  opacity: 0.4;
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-disabled .modus-wc-menu-item-interactive {
  pointer-events: none;
}
modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-disabled):not(.modus-wc-menu-item-focused):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :hover)):not(:has([slot=end] :active)):not(:has([slot=start] :hover)):not(:has([slot=start] :active)):hover {
  background-color: var(--modus-wc-color-base-100);
  outline: none;
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-focused:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :hover)):not(:has([slot=end] :active)):not(:has([slot=start] :hover)):not(:has([slot=start] :active)):hover {
  background-color: var(--modus-wc-color-base-100);
}
modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):focus:not(:focus-visible), modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)).modus-wc-arrow-focused {
  background-color: var(--modus-wc-color-base-100);
  color: var(--modus-wc-color-primary);
  outline: none;
}
modus-wc-tree-item .modus-wc-menu-item:focus-visible {
  background-color: transparent;
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: -2px;
}
modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-focused {
  border-radius: inherit;
  outline: 2px solid var(--modus-wc-color-primary);
  outline-offset: -2px;
}

[data-theme=modus-modern-light] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive:hover,
[data-theme=modus-modern-dark] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive:hover,
[data-theme=modus-classic-light] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive:hover,
[data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive:hover {
  background-color: transparent;
}

[data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active),
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active) {
  color: var(--modus-wc-color-gray-light);
}
[data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive.modus-wc-menu-dropdown-toggle::after,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive.modus-wc-menu-dropdown-toggle::after {
  color: var(--modus-wc-color-gray-3);
}
[data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-disabled):not(.modus-wc-menu-item-focused):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :hover)):not(:has([slot=end] :active)):not(:has([slot=start] :hover)):not(:has([slot=start] :active)):hover,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-disabled):not(.modus-wc-menu-item-focused):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :hover)):not(:has([slot=end] :active)):not(:has([slot=start] :hover)):not(:has([slot=start] :active)):hover {
  background-color: var(--modus-wc-color-gray-9);
  color: inherit;
  outline: none;
}
[data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-focused:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :hover)):not(:has([slot=end] :active)):not(:has([slot=start] :hover)):not(:has([slot=start] :active)):hover,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-focused:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :hover)):not(:has([slot=end] :active)):not(:has([slot=start] :hover)):not(:has([slot=start] :active)):hover {
  background-color: var(--modus-wc-color-gray-9);
  color: inherit;
}
[data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active, [data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :active)):not(:has([slot=start] :active)),
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :active)):not(:has([slot=start] :active)) {
  background-color: color-mix(in sRGB, var(--modus-wc-color-primary) 30%, transparent);
}
[data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive, [data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :active)):not(:has([slot=start] :active)) .modus-wc-menu-item-interactive,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :active)):not(:has([slot=start] :active)) .modus-wc-menu-item-interactive {
  background-color: transparent;
}
[data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive:hover, [data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive:focus, [data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :active)):not(:has([slot=start] :active)) .modus-wc-menu-item-interactive:hover, [data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :active)):not(:has([slot=start] :active)) .modus-wc-menu-item-interactive:focus,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive:hover,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive:focus,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :active)):not(:has([slot=start] :active)) .modus-wc-menu-item-interactive:hover,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item:active:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :active)):not(:has([slot=start] :active)) .modus-wc-menu-item-interactive:focus {
  background-color: transparent;
  box-shadow: none;
  color: inherit;
}
[data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):focus:not(:focus-visible), [data-theme=modus-classic-dark] modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)).modus-wc-arrow-focused,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):focus:not(:focus-visible),
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)).modus-wc-arrow-focused {
  background-color: var(--modus-wc-color-gray-9);
}

[data-theme=connect-light] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content:not(:has([slot=start])) .modus-wc-menu-item-labels,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content:not(:has([slot=start])) .modus-wc-menu-item-labels {
  padding-inline-start: 0;
}
[data-theme=connect-light] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content:not(:has([slot=end])) .modus-wc-menu-item-labels,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-content:not(:has([slot=end])) .modus-wc-menu-item-labels {
  padding-inline-end: 0;
}
[data-theme=connect-light] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-labels,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item .modus-wc-menu-item-interactive .modus-wc-menu-item-labels {
  font-weight: var(--modus-wc-font-weight-normal);
}
[data-theme=connect-light] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive .modus-wc-menu-item-labels,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-active .modus-wc-menu-item-interactive .modus-wc-menu-item-labels {
  font-weight: var(--modus-wc-font-weight-semibold);
}
[data-theme=connect-light] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-md .modus-wc-menu-item-interactive .modus-wc-menu-item-labels,
[data-theme=connect-dark] modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-md .modus-wc-menu-item-interactive .modus-wc-menu-item-labels {
  font-size: 0.8125rem;
  line-height: 1.125rem;
}

/* Connect light side nav: suppress base-100 li hover; paint row on interactive. */
[data-theme=connect-light] modus-wc-side-navigation modus-wc-tree-menu .modus-wc-menu li.modus-wc-menu-item:hover,
[data-theme=connect-light] modus-wc-side-navigation modus-wc-tree-item .modus-wc-menu-item:hover {
  background-color: transparent;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active) > .modus-wc-menu-item-interactive:hover {
  background-color: var(--modus-wc-color-trimble-blue) !important;
  color: var(--modus-wc-color-white) !important;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-disabled):not(.modus-wc-menu-item-focused):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :hover)):not(:has([slot=end] :active)):not(:has([slot=start] :hover)):not(:has([slot=start] :active)):hover {
  background-color: transparent;
  outline: none;
}
[data-theme=connect-light] modus-wc-side-navigation modus-wc-tree-item .modus-wc-menu-item.modus-wc-menu-item-focused:not(.modus-wc-menu-item-disabled):not(:has(.modus-wc-menu-dropdown)):not(:has([slot=end] :hover)):not(:has([slot=end] :active)):not(:has([slot=start] :hover)):not(:has([slot=start] :active)):hover {
  background-color: transparent;
}

modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):has([slot=end] :active) {
  background-color: transparent;
  color: inherit;
}

modus-wc-tree-item .modus-wc-menu-item:has([slot=end] :active) > .modus-wc-menu-item-interactive {
  background-color: transparent;
  color: inherit;
}

modus-wc-tree-item .modus-wc-menu-item:not(.modus-wc-menu-item-active):has([slot=start] :active) {
  background-color: transparent;
  color: inherit;
}

modus-wc-tree-item .modus-wc-menu-item:has([slot=start] :active) > .modus-wc-menu-item-interactive {
  background-color: transparent;
  color: inherit;
}
/**
* Only add styles here that should not be applied by Tailwind or the theme.
*/
modus-wc-tree-menu.modus-wc-menu-submenu {
  display: contents;
}

modus-wc-tree-menu .modus-wc-menu {
  background-color: var(--modus-wc-color-base-page);
  border-radius: var(--modus-wc-border-radius-md);
  /* Enforce Tailwind CSS reset */
  list-style: none;
  margin: 0;
  padding: 0;
  padding-inline-start: 0;
}
modus-wc-tree-menu .modus-wc-menu.modus-wc-menu--bordered {
  border: var(--modus-wc-border-width-xs) solid var(--modus-wc-color-base-200);
}

modus-wc-tree-menu .modus-wc-menu-dropdown {
  display: none;
  list-style: none;
}
modus-wc-tree-menu .modus-wc-menu-dropdown-show {
  display: block;
}

[data-theme=modus-classic-light] modus-wc-tree-menu .modus-wc-menu {
  background-color: var(--modus-wc-color-white);
  border-color: var(--modus-wc-color-gray-0);
}

[data-theme=modus-classic-dark] modus-wc-tree-menu .modus-wc-menu {
  background-color: var(--modus-wc-color-black);
  border-color: var(--modus-wc-color-gray-8);
}
/**
* This component uses Tailwind CSS and DaisyUI.
* Only add styles here that should not be applied by Tailwind, Daisy, or the theme.
*/
modus-wc-typography h1.modus-wc-typography:not(.modus-wc-typography-override) {
  font-size: var(--modus-wc-font-size-3xl);
  font-weight: var(--modus-wc-font-weight-normal);
  letter-spacing: 0.5px;
  line-height: 36px;
}
modus-wc-typography h2.modus-wc-typography:not(.modus-wc-typography-override) {
  font-size: var(--modus-wc-font-size-2xl);
  font-weight: var(--modus-wc-font-weight-normal);
  letter-spacing: 0.15px;
  line-height: 30px;
}
modus-wc-typography h3.modus-wc-typography:not(.modus-wc-typography-override) {
  font-size: var(--modus-wc-font-size-xl);
  font-weight: var(--modus-wc-font-weight-semibold);
  letter-spacing: 0.15px;
  line-height: 27px;
}
modus-wc-typography h4.modus-wc-typography:not(.modus-wc-typography-override) {
  font-size: var(--modus-wc-font-size-lg);
  font-weight: var(--modus-wc-font-weight-semibold);
  letter-spacing: 0.15px;
  line-height: 24px;
}
modus-wc-typography h5.modus-wc-typography:not(.modus-wc-typography-override) {
  font-size: var(--modus-wc-font-size-md);
  font-weight: var(--modus-wc-font-weight-bold);
  letter-spacing: 0.45px;
  line-height: 24px;
}
modus-wc-typography h6.modus-wc-typography:not(.modus-wc-typography-override) {
  font-size: var(--modus-wc-font-size-sm);
  font-weight: var(--modus-wc-font-weight-bold);
  letter-spacing: 0.45px;
  line-height: 18px;
}
modus-wc-typography .modus-wc-typography-weight-light {
  font-weight: var(--modus-wc-font-weight-light);
}
modus-wc-typography .modus-wc-typography-weight-normal {
  font-weight: var(--modus-wc-font-weight-normal);
}
modus-wc-typography .modus-wc-typography-weight-semibold {
  font-weight: var(--modus-wc-font-weight-semibold);
}
modus-wc-typography .modus-wc-typography-weight-bold {
  font-weight: var(--modus-wc-font-weight-bold);
}
modus-wc-typography .modus-wc-text-xs {
  font-size: var(--modus-wc-font-size-xs);
}
modus-wc-typography .modus-wc-text-sm {
  font-size: var(--modus-wc-font-size-sm);
}
modus-wc-typography .modus-wc-text-md {
  font-size: var(--modus-wc-font-size-md);
}
modus-wc-typography .modus-wc-text-lg {
  font-size: var(--modus-wc-font-size-lg);
}
modus-wc-typography .modus-wc-text-xl {
  font-size: var(--modus-wc-font-size-xl);
}
modus-wc-typography .modus-wc-text-2xl {
  font-size: var(--modus-wc-font-size-2xl);
}
modus-wc-typography .modus-wc-text-3xl {
  font-size: var(--modus-wc-font-size-3xl);
}

[data-theme=connect-light] modus-wc-typography :not(a),
[data-theme=connect-dark] modus-wc-typography :not(a) {
  color: var(--modus-wc-color-base-content-low-contrast);
}
[data-theme=connect-light] modus-wc-typography h1.modus-wc-typography,
[data-theme=connect-dark] modus-wc-typography h1.modus-wc-typography {
  font-size: var(--modus-wc-font-size-4xl);
  font-weight: var(--modus-wc-font-weight-normal);
  letter-spacing: 0.5px;
  line-height: 30px;
}
[data-theme=connect-light] modus-wc-typography h2.modus-wc-typography,
[data-theme=connect-dark] modus-wc-typography h2.modus-wc-typography {
  font-size: var(--modus-wc-font-size-3xl);
  font-weight: var(--modus-wc-font-weight-semibold);
  letter-spacing: 0.15px;
  line-height: 24px;
}
[data-theme=connect-light] modus-wc-typography h3.modus-wc-typography,
[data-theme=connect-dark] modus-wc-typography h3.modus-wc-typography {
  font-size: var(--modus-wc-font-size-xl);
  font-weight: var(--modus-wc-font-weight-semibold);
  letter-spacing: 0.15px;
  line-height: 18px;
}
[data-theme=connect-light] modus-wc-typography h4.modus-wc-typography,
[data-theme=connect-dark] modus-wc-typography h4.modus-wc-typography {
  font-size: var(--modus-wc-font-size-lg);
  letter-spacing: 0.15px;
  line-height: 24px;
}
[data-theme=connect-light] modus-wc-typography h5.modus-wc-typography,
[data-theme=connect-dark] modus-wc-typography h5.modus-wc-typography {
  font-size: var(--modus-wc-font-size-md);
  font-weight: var(--modus-wc-font-weight-bold);
  letter-spacing: 0.45px;
  line-height: 24px;
}
[data-theme=connect-light] modus-wc-typography h6.modus-wc-typography,
[data-theme=connect-dark] modus-wc-typography h6.modus-wc-typography {
  font-size: var(--modus-wc-font-size-xs);
  font-weight: var(--modus-wc-font-weight-bold);
  letter-spacing: 0.45px;
  line-height: 18px;
  text-transform: uppercase;
}
modus-wc-utility-panel {
  --modus-wc-utility-panel-padding: 1rem;
  --modus-wc-utility-panel-width: 312px;
  --modus-wc-utility-panel-header-height: 50px;
  --modus-wc-utility-panel-border-color: var(--modus-wc-color-base-200);
  --modus-wc-utility-panel-box-shadow: -2px 0 4px rgb(0, 0, 0, 0.1);
  --modus-wc-utility-panel-transition-duration: 0.3s;
}

.modus-wc-utility-panel {
  background-color: var(--modus-wc-color-base-page);
  box-shadow: var(--modus-wc-utility-panel-box-shadow);
  color: var(--modus-wc-utility-panel-color);
  height: 100%;
  position: absolute;
  right: calc(var(--modus-wc-utility-panel-width) * -1 - 12px);
  top: 0;
  transition: right var(--modus-wc-utility-panel-transition-duration) ease-out;
  width: var(--modus-wc-utility-panel-width);
  z-index: 1000;
}
.modus-wc-utility-panel.open {
  background: var(--modus-wc-color-base-page);
  right: 0;
  transition: right var(--modus-wc-utility-panel-transition-duration) ease-out;
}
.modus-wc-utility-panel .modus-wc-utility-panel-content {
  background: var(--modus-wc-color-base-page);
  display: flex;
  flex-direction: column;
  height: 100%;
}
.modus-wc-utility-panel .modus-wc-utility-panel-content .modus-wc-utility-panel-header,
.modus-wc-utility-panel .modus-wc-utility-panel-content .modus-wc-utility-panel-footer {
  align-items: center;
  background: var(--modus-wc-color-base-page);
  display: flex;
  height: var(--modus-wc-utility-panel-header-height);
  padding: 0 var(--modus-wc-utility-panel-padding);
}
.modus-wc-utility-panel .modus-wc-utility-panel-content .modus-wc-utility-panel-body {
  background: var(--modus-wc-color-base-page);
  flex: 1;
  overflow: auto;
  padding: var(--modus-wc-utility-panel-padding);
}
.modus-wc-utility-panel .modus-wc-utility-panel-content hr {
  border: none;
  border-top: 1px solid var(--modus-wc-utility-panel-border-color);
  margin: 0;
}
`,m=`@supports (color:oklch(0% 0 0)){:root{--fallback-p:var(--modus-wc-color-primary);--fallback-pc:var(--modus-wc-color-primary-content);--fallback-s:var(--modus-wc-color-secondary);--fallback-sc:var(--modus-wc-color-secondary-content);--fallback-a:var(--modus-wc-color-accent);--fallback-ac:var(--modus-wc-color-accent-content);--fallback-n:var(--modus-wc-color-neutral);--fallback-nc:var(--modus-wc-color-neutral-content);--fallback-b1:var(--modus-wc-color-base-100);--fallback-b2:var(--modus-wc-color-base-200);--fallback-b3:var(--modus-wc-color-base-300);--fallback-in:var(--modus-wc-color-info);--fallback-inc:var(--modus-wc-color-info-content);--fallback-su:var(--modus-wc-color-success);--fallback-suc:var(--modus-wc-color-success-content);--fallback-wa:var(--modus-wc-color-warning);--fallback-wac:var(--modus-wc-color-warning-content);--fallback-er:var(--modus-wc-color-error);--fallback-erc:var(--modus-wc-color-error-content)}}*,:after,:before{font-family:var(--modus-wc-font-family),sans-serif}body{background-color:var(--modus-wc-color-base-page)}:root:has(:is(.modus-wc-modal-open,.modus-wc-modal:target,.modus-wc-modal-toggle:checked+.modus-wc-modal,.modus-wc-modal[open])){scrollbar-gutter:auto!important}.modus-wc-border{border-color:var(--modus-wc-color-base-200);border-radius:1px;border-style:solid}modus-wc-date .modus-wc-date,modus-wc-text-input .modus-wc-text-input,modus-wc-textarea .modus-wc-textarea,modus-wc-time-input .modus-wc-time-input{--fallback-b1:transparent;background:var(--modus-wc-color-base-page);padding:0 var(--modus-wc-spacing-sm)}modus-wc-select{--fallback-b1:transparent}modus-wc-number-input .modus-wc-number-input{--fallback-b1:transparent;background:var(--modus-wc-color-base-page)}.modus-wc-utility-panel-push-target{transition:margin-inline-end var(--modus-wc-utility-panel-transition-duration,.3s) ease-out}.modus-wc-utility-panel-push-target.modus-wc-utility-panel-pushed{margin-inline-end:var(--modus-wc-utility-panel-width,312px)}[data-theme=modus-modern-light]:root{--modus-wc-color-base-page:var(--modus-wc-color-white);--modus-wc-color-base-100:var(--modus-wc-color-gray-01);--modus-wc-color-base-200:var(--modus-wc-color-gray-02);--modus-wc-color-base-300:var(--modus-wc-color-gray-1);--modus-wc-color-base-content:var(--modus-wc-color-gray-10);--modus-wc-color-primary:var(--modus-wc-color-trimble-blue);--modus-wc-color-primary-content:var(--modus-wc-color-white);--modus-wc-color-info-blue-on-dark:var(--modus-wc-color-info-blue);color-scheme:light}[data-theme=modus-modern-dark]:root{--modus-wc-color-base-page:var(--modus-wc-color-gray-10);--modus-wc-color-base-100:var(--modus-wc-color-gray-9);--modus-wc-color-base-200:var(--modus-wc-color-gray-8);--modus-wc-color-base-300:var(--modus-wc-color-trimble-gray);--modus-wc-color-base-content:var(--modus-wc-color-gray-1);--modus-wc-color-primary:var(--modus-wc-color-highlight-blue);--modus-wc-color-primary-content:var(--modus-wc-color-black);--modus-wc-color-info-blue-on-dark:var(--modus-wc-color-white);color-scheme:dark}[data-theme=modus-classic-light]:root{--modus-wc-color-base-page:var(--modus-wc-color-white);--modus-wc-color-base-100:var(--modus-wc-color-gray-light);--modus-wc-color-base-200:var(--modus-wc-color-gray-1);--modus-wc-color-base-300:var(--modus-wc-color-gray-2);--modus-wc-color-base-content:var(--modus-wc-color-gray-10);--modus-wc-color-info:var(--modus-wc-color-trimble-blue);--modus-wc-color-success:var(--modus-wc-color-green);--modus-wc-color-error:var(--modus-wc-color-red);--modus-wc-color-warning:var(--modus-wc-color-yellow);--modus-wc-color-info-blue-on-dark:var(--modus-wc-color-info-blue);color-scheme:light}[data-theme=modus-classic-dark]:root{--modus-wc-color-base-page:var(--modus-wc-color-black);--modus-wc-color-base-100:var(--modus-wc-color-trimble-gray);--modus-wc-color-base-200:var(--modus-wc-color-gray-8);--modus-wc-color-base-300:var(--modus-wc-color-gray-9);--modus-wc-color-base-content:var(--modus-wc-color-gray-1);--modus-wc-color-info:var(--modus-wc-color-trimble-blue);--modus-wc-color-success:var(--modus-wc-color-green);--modus-wc-color-error:var(--modus-wc-color-red);--modus-wc-color-warning:var(--modus-wc-color-yellow);--modus-wc-color-info-blue-on-dark:var(--modus-wc-color-white);color-scheme:dark}[data-theme=connect-light]:root{--modus-wc-color-base-page:var(--modus-wc-color-white);--modus-wc-color-base-100:var(--modus-wc-color-gray-light);--modus-wc-color-base-200:var(--modus-wc-color-gray-1);--modus-wc-color-base-300:var(--modus-wc-color-gray-2);--modus-wc-color-base-content:var(--modus-wc-color-gray-10);--modus-wc-color-info-blue-on-dark:var(--modus-wc-color-info-blue);color-scheme:light}[data-theme=connect-dark]:root{--modus-wc-color-base-page:var(--modus-wc-color-black);--modus-wc-color-base-100:var(--modus-wc-color-trimble-gray);--modus-wc-color-base-200:var(--modus-wc-color-gray-8);--modus-wc-color-base-300:var(--modus-wc-color-gray-9);--modus-wc-color-base-content:var(--modus-wc-color-gray-1);--modus-wc-color-info-blue-on-dark:var(--modus-wc-color-white);color-scheme:dark}:root{--modus-wc-color-white:#fff;--modus-wc-color-gray-light:#f1f1f6;--modus-wc-color-gray-01:#f5f5f8;--modus-wc-color-gray-02:#e9eaf0;--modus-wc-color-gray-0:#e0e1e9;--modus-wc-color-gray-1:#cbcdd6;--modus-wc-color-gray-2:#b7b9c3;--modus-wc-color-gray-3:#a3a6b1;--modus-wc-color-gray-4:#90939f;--modus-wc-color-gray-5:#7d808d;--modus-wc-color-gray-6:#6a6e79;--modus-wc-color-gray-7:#585c65;--modus-wc-color-gray-8:#464b52;--modus-wc-color-gray-9:#353a40;--modus-wc-color-gray-10:#171c1e;--modus-wc-color-trimble-gray:#252a2e;--modus-wc-color-black:#000;--modus-wc-color-blue-pale:#dcedf9;--modus-wc-color-highlight-blue:#019aeb;--modus-wc-color-blue-light:#217cbb;--modus-wc-color-trimble-blue:#0063a3;--modus-wc-color-connect-blue:#00437b;--modus-wc-color-blue-dark:#0e416c;--modus-wc-color-info-blue:#004f83;--modus-wc-color-highlight-blue-pale:rgba(1,154,235,.5);--modus-wc-color-info-blue-on-dark:var(--modus-wc-color-info-blue);--modus-wc-color-yellow-pale:#fff5e4;--modus-wc-color-yellow-light:#fec157;--modus-wc-color-yellow:#fbad26;--modus-wc-color-yellow-dark:#e49325;--modus-wc-color-red-pale:#fbd4d7;--modus-wc-color-red-light:#e86363;--modus-wc-color-red:#da212c;--modus-wc-color-red-dark:#ab1f26;--modus-wc-color-green-pale:#e0eccf;--modus-wc-color-green-light:#4ea646;--modus-wc-color-green:#1e8a44;--modus-wc-color-green-dark:#006638;--modus-wc-in-field-success-dark-bg:#00fe00;--modus-wc-in-field-success-light-bg:#00d22f;--modus-wc-in-field-warning:#ff8b00;--modus-wc-in-field-error:#da212c;--modus-wc-in-field-info:#019aeb;--modus-wc-in-field-avoidance:#df4eb2;--modus-wc-in-field-black:#000;--modus-wc-border-width-xs:1px;--modus-wc-border-width-sm:2px;--modus-wc-border-width-md:3px;--modus-wc-border-width-lg:4px;--modus-wc-border-width-xl:8px;--modus-wc-border-width-2xl:12px;--modus-wc-border-width-3xl:24px;--modus-wc-border-radius-sm:2px;--modus-wc-border-radius-md:4px;--modus-wc-border-radius-lg:8px;--modus-wc-border-radius-xl:12px;--modus-wc-border-radius-2xl:16px;--modus-wc-border-radius-3xl:24px;--modus-wc-border-radius-rounded:1000px;--modus-wc-line-height-xs:0.5rem;--modus-wc-line-height-sm:1rem;--modus-wc-line-height-md:1.5rem;--modus-wc-line-height-lg:2rem;--modus-wc-line-height-xl:3rem;--modus-wc-line-height-h6:1.125rem;--modus-wc-line-height-h3:1.6875rem;--modus-wc-line-height-h2:1.875rem;--modus-wc-line-height-h1:2.25rem;--modus-wc-line-height-h0:2.75rem;--modus-wc-font-family:"Open Sans","Segoe UI","Noto Sans","San Francisco","Helvetica","Arial",sans-serif;--modus-wc-font-size-2xs:0.5rem;--modus-wc-font-size-xs:0.625rem;--modus-wc-font-size-sm:0.75rem;--modus-wc-font-size-md:0.875rem;--modus-wc-font-size-lg:1rem;--modus-wc-font-size-xl:1.125rem;--modus-wc-font-size-2xl:1.25rem;--modus-wc-font-size-3xl:1.5rem;--modus-wc-font-size-4xl:1.875rem;--modus-wc-font-weight-light:300;--modus-wc-font-weight-normal:400;--modus-wc-font-weight-semibold:600;--modus-wc-font-weight-bold:700;--modus-wc-size-xxs:0.75rem;--modus-wc-size-xs:1.5rem;--modus-wc-size-sm:2rem;--modus-wc-size-md:2.5rem;--modus-wc-size-lg:3rem;--modus-wc-size-xl:3.5rem;--modus-wc-size-xxl:4.5rem;--modus-wc-spacing-2xs:0.125rem;--modus-wc-spacing-xs:0.25rem;--modus-wc-spacing-sm:0.5rem;--modus-wc-spacing-md:0.75rem;--modus-wc-spacing-lg:1rem;--modus-wc-spacing-xl:1.5rem;--modus-wc-spacing-2xl:2rem;--modus-wc-spacing-3xl:3rem;--modus-wc-spacing-20:5rem;--modus-wc-spacing-24:6rem;--modus-wc-input-height-sm:1.5rem;--modus-wc-input-height-md:2rem;--modus-wc-input-height-lg:3rem;--modus-wc-border-radius-badge:var(--modus-wc-border-radius-md);--modus-wc-border-radius-btn:var(--modus-wc-border-radius-lg);--modus-wc-border-radius-box:var(--modus-wc-border-radius-2xl);--modus-wc-border-radius-tab:var(--modus-wc-border-radius-lg);--modus-wc-border-radius-input:var(--modus-wc-border-radius-lg);--modus-wc-border-radius-table:var(--modus-wc-border-radius-2xl);--modus-wc-border-radius-chip:var(--modus-wc-border-radius-lg);--modus-wc-border-radius-alert:var(--modus-wc-border-radius-md);--modus-wc-opacity-overlay:0.6;--modus-wc-color-base-page:light-dark(var(--modus-wc-color-white),var(--modus-wc-color-trimble-gray));--modus-wc-color-base-100:light-dark(var(--modus-wc-color-gray-01),var(--modus-wc-color-gray-8));--modus-wc-color-base-200:light-dark(var(--modus-wc-color-gray-02),var(--modus-wc-color-gray-10));--modus-wc-color-base-300:light-dark(var(--modus-wc-color-gray-0),var(--modus-wc-color-gray-10));--modus-wc-color-base-content:light-dark(var(--modus-wc-color-gray-10),var(--modus-wc-color-gray-1));--modus-wc-color-base-content-low-contrast:light-dark(var(--modus-wc-color-gray-8),var(--modus-wc-color-gray-3));--modus-wc-color-base-content-high-contrast:light-dark(var(--modus-wc-color-black),var(--modus-wc-color-white));--modus-wc-color-base-inverted:light-dark(var(--modus-wc-color-gray-10),var(--modus-wc-color-gray-light));--modus-wc-color-primary:light-dark(var(--modus-wc-color-trimble-blue),var(--modus-wc-color-highlight-blue));--modus-wc-color-primary-content:light-dark(var(--modus-wc-color-white),var(--modus-wc-color-black));--modus-wc-color-primary-pale:light-dark(var(--modus-wc-color-blue-pale),var(--modus-wc-color-highlight-blue-pale));--modus-wc-color-secondary:light-dark(var(--modus-wc-color-yellow),var(--modus-wc-color-yellow-light));--modus-wc-color-secondary-content:light-dark(var(--modus-wc-color-black),var(--modus-wc-color-black));--modus-wc-color-secondary-pale:light-dark(var(--modus-wc-color-yellow-pale),var(--modus-wc-color-yellow-pale));--modus-wc-color-accent:light-dark(var(--modus-wc-color-gray-6),var(--modus-wc-color-gray-4));--modus-wc-color-accent-content:light-dark(var(--modus-wc-color-white),var(--modus-wc-color-black));--modus-wc-color-accent-pale:light-dark(var(--modus-wc-color-gray-6),var(--modus-wc-color-gray-4));--modus-wc-color-neutral:light-dark(var(--modus-wc-color-base-100),var(--modus-wc-color-base-100));--modus-wc-color-neutral-content:light-dark(var(--modus-wc-color-base-content),var(--modus-wc-color-base-content));--modus-wc-color-neutral-pale:light-dark(var(--modus-wc-color-base-100),var(--modus-wc-color-base-100));--modus-wc-color-info:light-dark(var(--modus-wc-color-blue-dark),var(--modus-wc-color-blue-light));--modus-wc-color-info-content:light-dark(var(--modus-wc-color-white),var(--modus-wc-color-white));--modus-wc-color-info-pale:light-dark(var(--modus-wc-color-blue-pale),var(--modus-wc-color-blue-pale));--modus-wc-color-success:light-dark(var(--modus-wc-color-green),var(--modus-wc-color-green-light));--modus-wc-color-success-content:light-dark(var(--modus-wc-color-white),var(--modus-wc-color-black));--modus-wc-color-success-pale:light-dark(var(--modus-wc-color-green-pale),var(--modus-wc-color-green-pale));--modus-wc-color-warning:light-dark(var(--modus-wc-color-yellow-dark),var(--modus-wc-color-yellow-light));--modus-wc-color-warning-content:light-dark(var(--modus-wc-color-black),var(--modus-wc-color-black));--modus-wc-color-warning-pale:light-dark(var(--modus-wc-color-yellow-pale),var(--modus-wc-color-yellow-pale));--modus-wc-color-error:light-dark(var(--modus-wc-color-red),var(--modus-wc-color-red-light));--modus-wc-color-error-content:light-dark(var(--modus-wc-color-white),var(--modus-wc-color-black));--modus-wc-color-error-pale:light-dark(var(--modus-wc-color-red-pale),var(--modus-wc-color-red-pale));--tw-orange-50:#fff7ed;--tw-orange-100:#ffedd5;--tw-orange-200:#fed7aa;--tw-orange-300:#fdba74;--tw-orange-400:#fb923c;--tw-orange-500:#f97316;--tw-orange-600:#ea580c;--tw-orange-700:#c2410c;--tw-orange-800:#9a3412;--tw-orange-900:#7c2d12;--tw-orange-950:#431407;--tw-amber-50:#fffbeb;--tw-amber-100:#fef3c7;--tw-amber-200:#fde68a;--tw-amber-300:#fcd34d;--tw-amber-400:#fbbf24;--tw-amber-500:#f59e0b;--tw-amber-600:#d97706;--tw-amber-700:#b45309;--tw-amber-800:#92400e;--tw-amber-900:#78350f;--tw-amber-950:#451a03;--tw-lime-50:#f7fee7;--tw-lime-100:#ecfccb;--tw-lime-200:#d9f99d;--tw-lime-300:#bef264;--tw-lime-400:#a3e635;--tw-lime-500:#84cc16;--tw-lime-600:#65a30d;--tw-lime-700:#4d7c0f;--tw-lime-800:#3f6212;--tw-lime-900:#365314;--tw-lime-950:#1a2e05;--tw-emerald-50:#ecfdf5;--tw-emerald-100:#d1fae5;--tw-emerald-200:#a7f3d0;--tw-emerald-300:#6ee7b7;--tw-emerald-400:#34d399;--tw-emerald-500:#10b981;--tw-emerald-600:#059669;--tw-emerald-700:#047857;--tw-emerald-800:#065f46;--tw-emerald-900:#064e3b;--tw-emerald-950:#022c22;--tw-teal-50:#f0fdfa;--tw-teal-100:#ccfbf1;--tw-teal-200:#99f6e4;--tw-teal-300:#5eead4;--tw-teal-400:#2dd4bf;--tw-teal-500:#14b8a6;--tw-teal-600:#0d9488;--tw-teal-700:#0f766e;--tw-teal-800:#115e59;--tw-teal-900:#134e4a;--tw-teal-950:#042f2e;--tw-cyan-50:#ecfeff;--tw-cyan-100:#cffafe;--tw-cyan-200:#a5f3fc;--tw-cyan-300:#67e8f9;--tw-cyan-400:#22d3ee;--tw-cyan-500:#06b6d4;--tw-cyan-600:#0891b2;--tw-cyan-700:#0e7490;--tw-cyan-800:#155e75;--tw-cyan-900:#164e63;--tw-cyan-950:#083344;--tw-indigo-50:#eef2ff;--tw-indigo-100:#e0e7ff;--tw-indigo-200:#c7d2fe;--tw-indigo-300:#a5b4fc;--tw-indigo-400:#818cf8;--tw-indigo-500:#6366f1;--tw-indigo-600:#4f46e5;--tw-indigo-700:#4338ca;--tw-indigo-800:#3730a3;--tw-indigo-900:#312e81;--tw-indigo-950:#1e1b4b;--tw-violet-50:#f5f3ff;--tw-violet-100:#ede9fe;--tw-violet-200:#ddd6fe;--tw-violet-300:#c4b5fd;--tw-violet-400:#a78bfa;--tw-violet-500:#8b5cf6;--tw-violet-600:#7c3aed;--tw-violet-700:#6d28d9;--tw-violet-800:#5b21b6;--tw-violet-900:#4c1d95;--tw-violet-950:#2e1065;--tw-purple-50:#faf5ff;--tw-purple-100:#f3e8ff;--tw-purple-200:#e9d5ff;--tw-purple-300:#d8b4fe;--tw-purple-400:#c084fc;--tw-purple-500:#a855f7;--tw-purple-600:#9333ea;--tw-purple-700:#7e22ce;--tw-purple-800:#6b21a8;--tw-purple-900:#581c87;--tw-purple-950:#3b0764;--tw-fuchsia-50:#fdf4ff;--tw-fuchsia-100:#fae8ff;--tw-fuchsia-200:#f5d0fe;--tw-fuchsia-300:#f0abfc;--tw-fuchsia-400:#e879f9;--tw-fuchsia-500:#d946ef;--tw-fuchsia-600:#c026d3;--tw-fuchsia-700:#a21caf;--tw-fuchsia-800:#86198f;--tw-fuchsia-900:#701a75;--tw-fuchsia-950:#4a044e;--tw-pink-50:#fdf2f8;--tw-pink-100:#fce7f3;--tw-pink-200:#fbcfe8;--tw-pink-300:#f9a8d4;--tw-pink-400:#f47286;--tw-pink-500:#ec4899;--tw-pink-600:#db2777;--tw-pink-700:#be185d;--tw-pink-800:#9d174d;--tw-pink-900:#831843;--tw-pink-950:#500724;--tw-rose-50:#fff1f2;--tw-rose-100:#ffe4e6;--tw-rose-200:#fecdd3;--tw-rose-300:#fda4af;--tw-rose-400:#fb7185;--tw-rose-500:#f43f5e;--tw-rose-600:#e11d48;--tw-rose-700:#be123c;--tw-rose-800:#9f1239;--tw-rose-900:#881337;--tw-rose-950:#4c0519;--modus-tw-color-orange-100:light-dark(var(--tw-orange-600),var(--tw-orange-100));--modus-tw-color-orange-200:light-dark(var(--tw-orange-700),var(--tw-orange-200));--modus-tw-color-orange-300:light-dark(var(--tw-orange-800),var(--tw-orange-300));--modus-tw-color-orange-400:light-dark(var(--tw-orange-900),var(--tw-orange-400));--modus-tw-color-amber-100:light-dark(var(--tw-amber-600),var(--tw-amber-100));--modus-tw-color-amber-200:light-dark(var(--tw-amber-700),var(--tw-amber-200));--modus-tw-color-amber-300:light-dark(var(--tw-amber-800),var(--tw-amber-300));--modus-tw-color-amber-400:light-dark(var(--tw-amber-900),var(--tw-amber-400));--modus-tw-color-lime-100:light-dark(var(--tw-lime-600),var(--tw-lime-100));--modus-tw-color-lime-200:light-dark(var(--tw-lime-700),var(--tw-lime-200));--modus-tw-color-lime-300:light-dark(var(--tw-lime-800),var(--tw-lime-300));--modus-tw-color-lime-400:light-dark(var(--tw-lime-900),var(--tw-lime-400));--modus-tw-color-emerald-100:light-dark(var(--tw-emerald-600),var(--tw-emerald-100));--modus-tw-color-emerald-200:light-dark(var(--tw-emerald-700),var(--tw-emerald-200));--modus-tw-color-emerald-300:light-dark(var(--tw-emerald-800),var(--tw-emerald-300));--modus-tw-color-emerald-400:light-dark(var(--tw-emerald-900),var(--tw-emerald-400));--modus-tw-color-teal-100:light-dark(var(--tw-teal-600),var(--tw-teal-100));--modus-tw-color-teal-200:light-dark(var(--tw-teal-700),var(--tw-teal-200));--modus-tw-color-teal-300:light-dark(var(--tw-teal-800),var(--tw-teal-300));--modus-tw-color-teal-400:light-dark(var(--tw-teal-900),var(--tw-teal-400));--modus-tw-color-cyan-100:light-dark(var(--tw-cyan-600),var(--tw-cyan-100));--modus-tw-color-cyan-200:light-dark(var(--tw-cyan-700),var(--tw-cyan-200));--modus-tw-color-cyan-300:light-dark(var(--tw-cyan-800),var(--tw-cyan-300));--modus-tw-color-cyan-400:light-dark(var(--tw-cyan-900),var(--tw-cyan-400));--modus-tw-color-indigo-100:light-dark(var(--tw-indigo-600),var(--tw-indigo-100));--modus-tw-color-indigo-200:light-dark(var(--tw-indigo-700),var(--tw-indigo-200));--modus-tw-color-indigo-300:light-dark(var(--tw-indigo-800),var(--tw-indigo-300));--modus-tw-color-indigo-400:light-dark(var(--tw-indigo-900),var(--tw-indigo-400));--modus-tw-color-violet-100:light-dark(var(--tw-violet-600),var(--tw-violet-100));--modus-tw-color-violet-200:light-dark(var(--tw-violet-700),var(--tw-violet-200));--modus-tw-color-violet-300:light-dark(var(--tw-violet-800),var(--tw-violet-300));--modus-tw-color-violet-400:light-dark(var(--tw-violet-900),var(--tw-violet-400));--modus-tw-color-purple-100:light-dark(var(--tw-purple-600),var(--tw-purple-100));--modus-tw-color-purple-200:light-dark(var(--tw-purple-700),var(--tw-purple-200));--modus-tw-color-purple-300:light-dark(var(--tw-purple-800),var(--tw-purple-300));--modus-tw-color-purple-400:light-dark(var(--tw-purple-900),var(--tw-purple-400));--modus-tw-color-fuchsia-100:light-dark(var(--tw-fuchsia-600),var(--tw-fuchsia-100));--modus-tw-color-fuchsia-200:light-dark(var(--tw-fuchsia-700),var(--tw-fuchsia-200));--modus-tw-color-fuchsia-300:light-dark(var(--tw-fuchsia-800),var(--tw-fuchsia-300));--modus-tw-color-fuchsia-400:light-dark(var(--tw-fuchsia-900),var(--tw-fuchsia-400));--modus-tw-color-pink-100:light-dark(var(--tw-pink-600),var(--tw-pink-100));--modus-tw-color-pink-200:light-dark(var(--tw-pink-700),var(--tw-pink-200));--modus-tw-color-pink-300:light-dark(var(--tw-pink-800),var(--tw-pink-300));--modus-tw-color-pink-400:light-dark(var(--tw-pink-900),var(--tw-pink-400));--modus-tw-color-rose-100:light-dark(var(--tw-rose-600),var(--tw-rose-100));--modus-tw-color-rose-200:light-dark(var(--tw-rose-700),var(--tw-rose-200));--modus-tw-color-rose-300:light-dark(var(--tw-rose-800),var(--tw-rose-300));--modus-tw-color-rose-400:light-dark(var(--tw-rose-900),var(--tw-rose-400));color-scheme:light dark}@font-face{font-display:swap;font-family:Open Sans;font-stretch:100%;font-style:normal;font-weight:300 800;src:url(assets/fonts/open-sans/OpenSans-VariableFont.woff2) format("woff2")}@font-face{font-display:swap;font-family:Open Sans;font-stretch:100%;font-style:italic;font-weight:300 800;src:url(assets/fonts/open-sans/OpenSans-Italic-VariableFont.woff2) format("woff2")}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }

/*! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{-webkit-text-size-adjust:100%;font-feature-settings:normal;-webkit-tap-highlight-color:transparent;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-variation-settings:normal;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{font-feature-settings:inherit;color:inherit;font-family:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af}input::placeholder,textarea::placeholder{color:#9ca3af}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]:where(:not([hidden=until-found])){display:none}:root,[data-theme]{background-color:var(--fallback-b1,oklch(var(--b1)/1));color:var(--fallback-bc,oklch(var(--bc)/1))}@supports not (color:oklch(0% 0 0)){:root{--fallback-p:#491eff;--fallback-pc:#d4dbff;--fallback-s:#ff41c7;--fallback-sc:#fff9fc;--fallback-a:#00cfbd;--fallback-ac:#00100d;--fallback-n:#2b3440;--fallback-nc:#d7dde4;--fallback-b1:#fff;--fallback-b2:#e5e6e6;--fallback-b3:#e5e6e6;--fallback-bc:#1f2937;--fallback-in:#00b3f0;--fallback-inc:#000;--fallback-su:#00ca92;--fallback-suc:#000;--fallback-wa:#ffc22d;--fallback-wac:#000;--fallback-er:#ff6f70;--fallback-erc:#000;color-scheme:light}@media (prefers-color-scheme:dark){:root{--fallback-p:#7582ff;--fallback-pc:#050617;--fallback-s:#ff71cf;--fallback-sc:#190211;--fallback-a:#00c7b5;--fallback-ac:#000e0c;--fallback-n:#2a323c;--fallback-nc:#a6adbb;--fallback-b1:#1d232a;--fallback-b2:#191e24;--fallback-b3:#15191e;--fallback-bc:#a6adbb;--fallback-in:#00b3f0;--fallback-inc:#000;--fallback-su:#00ca92;--fallback-suc:#000;--fallback-wa:#ffc22d;--fallback-wac:#000;--fallback-er:#ff6f70;--fallback-erc:#000;color-scheme:dark}}}html{-webkit-tap-highlight-color:transparent}*{scrollbar-color:color-mix(in oklch,currentColor 35%,transparent) transparent}:hover{scrollbar-color:color-mix(in oklch,currentColor 60%,transparent) transparent}:root{--animation-btn:0.3s;--animation-input:.2s;--tab-border:1px;--rounded-badge:0.25rem;--border-btn:1px;--btn-focus-scale:0.98;--rounded-btn:0.25rem;--rounded-box:0.5rem;--tab-radius:0.25rem;--alert-border-left-width:0.5rem;--alert-border-width:1px;--alert-border-radius:0.5rem;--input-bottom-border-width:1px;--p:48.6221% 0.128075 247.073947;primary-focus:#004f83;--pc:100% 0 0;--s:53.8572% 0.017812 269.820069;secondary-focus:#464b52;--sc:100% 0 0;--a:53.8572% 0.017812 269.820069;accent-focus:#464b52;--ac:100% 0 0;--n:84.9436% 0.012605 276.068713;neutral-focus:#a3a6b1;--nc:28.1705% 0.01025 242.054501;--b1:100% 0 0;--b2:84.9436% 0.012605 276.068713;--b3:78.7221% 0.014241 277.004909;--bc:28.1705% 0.01025 242.054501;--in:48.6221% 0.128075 247.073947;--inc:100% 0 0;--su:55.824% 0.14148 150.027193;--suc:100% 0 0;--wa:80.3357% 0.161017 74.410202;--wac:28.1705% 0.01025 242.054501;--er:57.1169% 0.215546 25.349404;--erc:100% 0 0}@media (prefers-color-scheme:dark){:root{--animation-btn:0.3s;--animation-input:.2s;--tab-border:1px;--rounded-badge:0.25rem;--border-btn:1px;--btn-focus-scale:0.98;--rounded-btn:0.5rem;--rounded-box:1rem;--tab-radius:0.25rem;--alert-border-left-width:0.5rem;--alert-border-width:1px;--alert-border-radius:0.5rem;--input-bottom-border-width:1px;--p:65.9524% 0.159801 243.168715;primary-focus:#004f83;--pc:0% 0 0;--s:84.7174% 0.139742 78.603787;secondary-focus:#e49325;--sc:0% 0 0;--a:53.8572% 0.017812 269.820069;accent-focus:#464b52;--ac:100% 0 0;--n:34.6043% 0.012501 252.973394;neutral-focus:#171c1e;--nc:100% 0 0;--b1:22.215% 0.008445 223.858126;--b2:34.6043% 0.012501 252.973394;--b3:41.0842% 0.013405 256.755726;--bc:100% 0 0;--in:56.5592% 0.127092 244.53102;--inc:100% 0 0;--su:64.9048% 0.158119 142.023063;--suc:0% 0 0;--wa:84.7174% 0.139742 78.603787;--wac:28.1705% 0.01025 242.054501;--er:66.6026% 0.165819 22.664876;--erc:0% 0 0}}[data-theme=modus-classic-light]{--animation-btn:0.3s;--animation-input:.2s;--tab-border:1px;--rounded-badge:0.25rem;--border-btn:1px;--btn-focus-scale:0.98;--rounded-btn:0.25rem;--rounded-box:0.5rem;--tab-radius:0.25rem;--alert-border-left-width:0.5rem;--alert-border-width:1px;--alert-border-radius:0.5rem;--input-bottom-border-width:1px;--p:48.6221% 0.128075 247.073947;primary-focus:#004f83;--pc:100% 0 0;--s:53.8572% 0.017812 269.820069;secondary-focus:#464b52;--sc:100% 0 0;--a:53.8572% 0.017812 269.820069;accent-focus:#464b52;--ac:100% 0 0;--n:84.9436% 0.012605 276.068713;neutral-focus:#a3a6b1;--nc:28.1705% 0.01025 242.054501;--b1:100% 0 0;--b2:84.9436% 0.012605 276.068713;--b3:78.7221% 0.014241 277.004909;--bc:28.1705% 0.01025 242.054501;--in:48.6221% 0.128075 247.073947;--inc:100% 0 0;--su:55.824% 0.14148 150.027193;--suc:100% 0 0;--wa:80.3357% 0.161017 74.410202;--wac:28.1705% 0.01025 242.054501;--er:57.1169% 0.215546 25.349404;--erc:100% 0 0}[data-theme=modus-classic-dark]{--animation-btn:0.3s;--animation-input:.2s;--tab-border:1px;--rounded-badge:0.25rem;--border-btn:1px;--btn-focus-scale:0.98;--rounded-btn:0.25rem;--rounded-box:0.5rem;--tab-radius:0.25rem;--alert-border-left-width:0.5rem;--alert-border-width:1px;--alert-border-radius:0.5rem;--input-bottom-border-width:1px;--p:48.6221% 0.128075 247.073947;primary-focus:#004f83;--pc:100% 0 0;--s:80.3357% 0.161017 74.410202;secondary-focus:#e49325;--sc:28.1705% 0.01025 242.054501;--a:53.8572% 0.017812 269.820069;accent-focus:#464b52;--ac:100% 0 0;--n:34.6043% 0.012501 252.973394;neutral-focus:#171c1e;--nc:100% 0 0;--b1:22.215% 0.008445 223.858126;--b2:34.6043% 0.012501 252.973394;--b3:41.0842% 0.013405 256.755726;--bc:100% 0 0;--in:48.6221% 0.128075 247.073947;--inc:100% 0 0;--su:55.824% 0.14148 150.027193;--suc:100% 0 0;--wa:80.3357% 0.161017 74.410202;--wac:28.1705% 0.01025 242.054501;--er:57.1169% 0.215546 25.349404;--erc:100% 0 0}[data-theme=modus-modern-light]{--animation-btn:0.3s;--animation-input:.2s;--tab-border:1px;--rounded-badge:0.25rem;--border-btn:1px;--btn-focus-scale:0.98;--rounded-btn:0.5rem;--rounded-box:1rem;--tab-radius:0.25rem;--alert-border-left-width:0.5rem;--alert-border-width:1px;--alert-border-radius:0.5rem;--input-bottom-border-width:1px;--p:48.6221% 0.128075 247.073947;primary-focus:#004f83;--pc:100% 0 0;--s:80.3357% 0.161017 74.410202;secondary-focus:#e49325;--sc:0% 0 0;--a:53.8572% 0.017812 269.820069;accent-focus:#464b52;--ac:100% 0 0;--n:84.9436% 0.012605 276.068713;neutral-focus:#a3a6b1;--nc:28.1705% 0.01025 242.054501;--b1:100% 0 0;--b2:84.9436% 0.012605 276.068713;--b3:78.7221% 0.014241 277.004909;--bc:28.1705% 0.01025 242.054501;--in:48.6221% 0.128075 247.073947;--inc:100% 0 0;--su:55.824% 0.14148 150.027193;--suc:100% 0 0;--wa:72.9405% 0.149372 67.994075;--wac:28.1705% 0.01025 242.054501;--er:57.1169% 0.215546 25.349404;--erc:100% 0 0}[data-theme=modus-modern-dark]{--animation-btn:0.3s;--animation-input:.2s;--tab-border:1px;--rounded-badge:0.25rem;--border-btn:1px;--btn-focus-scale:0.98;--rounded-btn:0.5rem;--rounded-box:1rem;--tab-radius:0.25rem;--alert-border-left-width:0.5rem;--alert-border-width:1px;--alert-border-radius:0.5rem;--input-bottom-border-width:1px;--p:65.9524% 0.159801 243.168715;primary-focus:#004f83;--pc:0% 0 0;--s:84.7174% 0.139742 78.603787;secondary-focus:#e49325;--sc:0% 0 0;--a:53.8572% 0.017812 269.820069;accent-focus:#464b52;--ac:100% 0 0;--n:34.6043% 0.012501 252.973394;neutral-focus:#171c1e;--nc:100% 0 0;--b1:22.215% 0.008445 223.858126;--b2:34.6043% 0.012501 252.973394;--b3:41.0842% 0.013405 256.755726;--bc:100% 0 0;--in:56.5592% 0.127092 244.53102;--inc:100% 0 0;--su:64.9048% 0.158119 142.023063;--suc:0% 0 0;--wa:84.7174% 0.139742 78.603787;--wac:28.1705% 0.01025 242.054501;--er:66.6026% 0.165819 22.664876;--erc:0% 0 0}[data-theme=connect-light]{--animation-btn:0.3s;--animation-input:.2s;--tab-border:1px;--rounded-badge:2px;--border-btn:1px;--btn-focus-scale:1;--rounded-btn:2px;--rounded-box:0;--tab-radius:0;--alert-border-left-width:0;--alert-border-width:0;--alert-border-radius:4px;--input-bottom-border-width:2px;--input-radius:2px;--p:47.3235% 0.12603 247.547196;primary-focus:#00437b;--pc:100% 0 0;--s:52.6234% 0.020228 289.216784;secondary-focus:#474655;--sc:100% 0 0;--a:53.8572% 0.017812 269.820069;accent-focus:#464b52;--ac:100% 0 0;--n:84.9436% 0.012605 276.068713;neutral-focus:#a3a6b1;--nc:28.1705% 0.01025 242.054501;--b1:100% 0 0;--b2:84.9436% 0.012605 276.068713;--b3:78.7221% 0.014241 277.004909;--bc:28.1705% 0.01025 242.054501;--in:48.6221% 0.128075 247.073947;--inc:100% 0 0;--su:66.4599% 0.13954 132.331914;--suc:100% 0 0;--wa:83.8398% 0.172209 83.573967;--wac:28.1705% 0.01025 242.054501;--er:56.8372% 0.205089 24.549972;--erc:100% 0 0}[data-theme=connect-dark]{--animation-btn:0.3s;--animation-input:.2s;--tab-border:1px;--rounded-badge:2px;--border-btn:1px;--btn-focus-scale:1;--rounded-btn:2px;--rounded-box:0;--tab-radius:0;--alert-border-left-width:0;--alert-border-width:0;--alert-border-radius:4px;--input-bottom-border-width:2px;--input-radius:2px;--p:65.9524% 0.159801 243.168715;primary-focus:#004f83;--pc:0% 0 0;--s:95.9569% 0.006653 286.273689;secondary-focus:#e49325;--sc:0% 0 0;--a:53.8572% 0.017812 269.820069;accent-focus:#464b52;--ac:100% 0 0;--n:34.6043% 0.012501 252.973394;neutral-focus:#171c1e;--nc:100% 0 0;--b1:22.215% 0.008445 223.858126;--b2:34.6043% 0.012501 252.973394;--b3:41.0842% 0.013405 256.755726;--bc:100% 0 0;--in:56.5592% 0.127092 244.53102;--inc:100% 0 0;--su:64.9048% 0.158119 142.023063;--suc:0% 0 0;--wa:84.7174% 0.139742 78.603787;--wac:28.1705% 0.01025 242.054501;--er:66.6026% 0.165819 22.664876;--erc:0% 0 0}h1{font-size:var(--modus-wc-font-size-3xl);line-height:var(--modus-wc-line-height-h1)}h1,h2{font-weight:var(--modus-wc-font-weight-normal)}h2{font-size:var(--modus-wc-font-size-2xl);line-height:var(--modus-wc-line-height-h2)}h3{font-size:var(--modus-wc-font-size-xl);line-height:var(--modus-wc-line-height-h3)}h3,h4{font-weight:var(--modus-wc-font-weight-semibold)}h4{font-size:var(--modus-wc-font-size-lg)}h4,h5{line-height:var(--modus-wc-line-height-md)}h5{font-size:var(--modus-wc-font-size-md)}h5,h6{font-weight:var(--modus-wc-font-weight-bold)}h6{font-size:var(--modus-wc-font-size-sm);line-height:var(--modus-wc-line-height-h6)}blockquote{border-color:var(--modus-wc-color-base-200);border-inline-start-width:var(--modus-wc-border-width-lg);margin-bottom:var(--modus-wc-spacing-lg);margin-top:var(--modus-wc-spacing-lg)}hr{background-color:var(--modus-wc-color-base-200);border:0;height:var(--modus-wc-border-width-xs);margin-bottom:var(--modus-wc-spacing-xl);margin-top:var(--modus-wc-spacing-xl)}b,strong{font-weight:var(--modus-wc-font-weight-bold)}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace}dl,figure,pre{margin-bottom:var(--modus-wc-spacing-lg)}table{border-collapse:collapse;width:100%}td,th{border-color:var(--modus-wc-color-base-200);border-width:1px;text-align:left}th{font-weight:var(--modus-wc-font-weight-semibold)}a{color:var(--modus-wc-color-primary)}a:active{color:var(--modus-wc-color-primary-content)}a:focus{outline:auto}input,select,textarea{background-color:transparent;border-radius:var(--modus-wc-border-radius-md);color:inherit;font-family:inherit}input:focus,select:focus,textarea:focus{border-color:transparent;outline:2px solid var(--modus-wc-color-primary);outline-offset:1px}input:disabled,select:disabled,textarea:disabled{background-color:var(--modus-wc-color-base-100);opacity:.5}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:var(--modus-wc-color-gray-4);opacity:1}input::placeholder,textarea::placeholder{color:var(--modus-wc-color-gray-4);opacity:1}menu{list-style-type:none}ol{list-style-type:decimal}ul{list-style-type:disc}li{display:list-item}.modus-wc-alert{--tw-border-opacity:1;--tw-text-opacity:1;--alert-bg:var(--fallback-b2,oklch(var(--b2)/1));--alert-bg-mix:var(--fallback-b1,oklch(var(--b1)/1));align-content:flex-start;align-items:center;background-color:var(--alert-bg);border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));border-radius:var(--rounded-box,1rem);border-width:1px;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));display:grid;gap:1rem;grid-auto-flow:row;justify-items:center;padding:1rem;text-align:center;width:100%}@media (min-width:640px){.modus-wc-alert{grid-auto-flow:column;grid-template-columns:auto minmax(auto,1fr);justify-items:start;text-align:start}}.modus-wc-avatar{display:inline-flex;position:relative}.modus-wc-avatar>div{aspect-ratio:1/1;display:block;overflow:hidden}.modus-wc-avatar img{height:100%;-o-object-fit:cover;object-fit:cover;width:100%}.modus-wc-avatar.modus-wc-placeholder>div{align-items:center;display:flex;justify-content:center}.modus-wc-badge{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));border-radius:var(--rounded-badge,1.9rem);border-width:1px;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));display:inline-flex;font-size:.875rem;height:1.25rem;justify-content:center;line-height:1.25rem;padding-left:.563rem;padding-right:.563rem;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);width:-moz-fit-content;width:fit-content}.modus-wc-breadcrumbs{max-width:100%;overflow-x:auto;padding-bottom:.5rem;padding-top:.5rem}.modus-wc-breadcrumbs>ol,.modus-wc-breadcrumbs>ul{align-items:center;display:flex;min-height:-moz-min-content;min-height:min-content;white-space:nowrap}.modus-wc-breadcrumbs>ol>li,.modus-wc-breadcrumbs>ul>li{align-items:center;display:flex}.modus-wc-breadcrumbs>ol>li>a,.modus-wc-breadcrumbs>ul>li>a{align-items:center;cursor:pointer;display:flex}@media (hover:hover){.modus-wc-breadcrumbs>ol>li>a:hover,.modus-wc-breadcrumbs>ul>li>a:hover,.modus-wc-link-hover:hover{text-decoration-line:underline}.modus-wc-menu li>:not(ul,.modus-wc-menu-title,details,.modus-wc-btn).modus-wc-active,.modus-wc-menu li>:not(ul,.modus-wc-menu-title,details,.modus-wc-btn):active,.modus-wc-menu li>details>summary:active{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));color:var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)))}.modus-wc-tab:hover{--tw-text-opacity:1}.modus-wc-tabs-boxed :is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]):hover,.modus-wc-tabs-boxed :is(input:checked):hover{--tw-text-opacity:1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.modus-wc-table tr.modus-wc-hover:hover,.modus-wc-table tr.modus-wc-hover:nth-child(2n):hover{--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}.modus-wc-table-zebra tr.modus-wc-hover:hover,.modus-wc-table-zebra tr.modus-wc-hover:nth-child(2n):hover{--tw-bg-opacity:1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}}.modus-wc-btn{--tw-text-opacity:1;--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);--tw-bg-opacity:1;--tw-border-opacity:1;align-items:center;background-color:oklch(var(--btn-color,var(--b2))/var(--tw-bg-opacity));border-color:transparent;border-color:oklch(var(--btn-color,var(--b2))/var(--tw-border-opacity));border-radius:var(--rounded-btn,.5rem);border-width:var(--border-btn,1px);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));cursor:pointer;display:inline-flex;flex-shrink:0;flex-wrap:wrap;font-size:.875rem;font-weight:600;gap:.5rem;height:3rem;justify-content:center;line-height:1em;min-height:3rem;outline-color:var(--fallback-bc,oklch(var(--bc)/1));padding-left:1rem;padding-right:1rem;text-align:center;text-decoration-line:none;transition-duration:.2s;transition-property:color,background-color,border-color,opacity,box-shadow,transform;transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-user-select:none;-moz-user-select:none;user-select:none}.modus-wc-btn-disabled,.modus-wc-btn:disabled,.modus-wc-btn[disabled]{pointer-events:none}.modus-wc-btn-circle,.modus-wc-btn-square{height:3rem;padding:0;width:3rem}.modus-wc-btn-circle{border-radius:9999px}:where(.modus-wc-btn:is(input[type=checkbox])),:where(.modus-wc-btn:is(input[type=radio])){-webkit-appearance:none;-moz-appearance:none;appearance:none;width:auto}.modus-wc-btn:is(input[type=checkbox]):after,.modus-wc-btn:is(input[type=radio]):after{--tw-content:attr(aria-label);content:var(--tw-content)}.modus-wc-card{border-radius:var(--rounded-box,1rem);display:flex;flex-direction:column;position:relative}.modus-wc-card:focus{outline:2px solid transparent;outline-offset:2px}.modus-wc-card-body{display:flex;flex:1 1 auto;flex-direction:column;gap:.5rem;padding:var(--padding-card,2rem)}.modus-wc-card-body :where(p){flex-grow:1}.modus-wc-card-actions{align-items:flex-start;display:flex;flex-wrap:wrap;gap:.5rem}.modus-wc-card figure{align-items:center;display:flex;justify-content:center}.modus-wc-card.modus-wc-image-full{display:grid}.modus-wc-card.modus-wc-image-full:before{--tw-bg-opacity:1;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));border-radius:var(--rounded-box,1rem);content:"";opacity:.75;position:relative;z-index:10}.modus-wc-card.modus-wc-image-full:before,.modus-wc-card.modus-wc-image-full>*{grid-column-start:1;grid-row-start:1}.modus-wc-card.modus-wc-image-full>figure img{height:100%;-o-object-fit:cover;object-fit:cover}.modus-wc-card.modus-wc-image-full>.modus-wc-card-body{--tw-text-opacity:1;color:var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));position:relative;z-index:20}.modus-wc-checkbox{--chkbg:var(--fallback-bc,oklch(var(--bc)/1));--chkfg:var(--fallback-b1,oklch(var(--b1)/1));--tw-border-opacity:0.2;-webkit-appearance:none;-moz-appearance:none;appearance:none;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));border-radius:var(--rounded-btn,.5rem);border-width:1px;cursor:pointer;flex-shrink:0;height:1.5rem;width:1.5rem}.modus-wc-collapse:not(td):not(tr):not(colgroup){visibility:visible}.modus-wc-collapse{border-radius:var(--rounded-box,1rem);display:grid;grid-template-rows:max-content 0fr;overflow:hidden;position:relative;transition:grid-template-rows .2s;width:100%}.modus-wc-collapse-content,.modus-wc-collapse-title,.modus-wc-collapse>input[type=checkbox],.modus-wc-collapse>input[type=radio]{grid-column-start:1;grid-row-start:1}.modus-wc-collapse>input[type=checkbox],.modus-wc-collapse>input[type=radio]{-webkit-appearance:none;-moz-appearance:none;appearance:none;opacity:0}:where(.modus-wc-collapse>input[type=checkbox]),:where(.modus-wc-collapse>input[type=radio]){height:100%;width:100%;z-index:1}.modus-wc-collapse-content{cursor:unset;grid-column-start:1;grid-row-start:2;min-height:0;padding-left:1rem;padding-right:1rem;transition:visibility .2s;transition:padding .2s ease-out,background-color .2s ease-out;visibility:hidden}.modus-wc-collapse-open,.modus-wc-collapse:focus:not(.modus-wc-collapse-close),.modus-wc-collapse[open]{grid-template-rows:max-content 1fr}.modus-wc-collapse:not(.modus-wc-collapse-close):has(>input[type=checkbox]:checked),.modus-wc-collapse:not(.modus-wc-collapse-close):has(>input[type=radio]:checked){grid-template-rows:max-content 1fr}.modus-wc-collapse-open>.modus-wc-collapse-content,.modus-wc-collapse:focus:not(.modus-wc-collapse-close)>.modus-wc-collapse-content,.modus-wc-collapse:not(.modus-wc-collapse-close)>input[type=checkbox]:checked~.modus-wc-collapse-content,.modus-wc-collapse:not(.modus-wc-collapse-close)>input[type=radio]:checked~.modus-wc-collapse-content,.modus-wc-collapse[open]>.modus-wc-collapse-content{min-height:-moz-fit-content;min-height:fit-content;visibility:visible}.modus-wc-divider{align-items:center;align-self:stretch;display:flex;flex-direction:row;height:1rem;margin-bottom:1rem;margin-top:1rem;white-space:nowrap}.modus-wc-divider:after,.modus-wc-divider:before{--tw-content:"";background-color:var(--fallback-bc,oklch(var(--bc)/.1));content:var(--tw-content);flex-grow:1;height:.125rem;width:100%}.modus-wc-divider-end:after,.modus-wc-divider-start:before{display:none}@media (hover:hover){.modus-wc-btn:hover{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));border-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-border-opacity)))}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn:hover{background-color:color-mix(in oklab,oklch(var(--btn-color,var(--b2))/var(--tw-bg-opacity,1)) 90%,#000);border-color:color-mix(in oklab,oklch(var(--btn-color,var(--b2))/var(--tw-border-opacity,1)) 90%,#000)}}@supports not (color:oklch(0% 0 0)){.modus-wc-btn:hover{background-color:var(--btn-color,var(--fallback-b2));border-color:var(--btn-color,var(--fallback-b2))}}.modus-wc-btn.modus-wc-glass:hover{--glass-opacity:25%;--glass-border-opacity:15%}.modus-wc-btn-outline:hover{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));color:var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-primary:hover{--tw-text-opacity:1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn-outline.modus-wc-btn-primary:hover{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,#000)}}.modus-wc-btn-outline.modus-wc-btn-secondary:hover{--tw-text-opacity:1;color:var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)))}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn-outline.modus-wc-btn-secondary:hover{background-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,#000)}}.modus-wc-btn-outline.modus-wc-btn-accent:hover{--tw-text-opacity:1;color:var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)))}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn-outline.modus-wc-btn-accent:hover{background-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,#000)}}.modus-wc-btn-outline.modus-wc-btn-success:hover{--tw-text-opacity:1;color:var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)))}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn-outline.modus-wc-btn-success:hover{background-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,#000)}}.modus-wc-btn-outline.modus-wc-btn-info:hover{--tw-text-opacity:1;color:var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)))}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn-outline.modus-wc-btn-info:hover{background-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,#000)}}.modus-wc-btn-outline.modus-wc-btn-warning:hover{--tw-text-opacity:1;color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)))}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn-outline.modus-wc-btn-warning:hover{background-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,#000)}}.modus-wc-btn-outline.modus-wc-btn-error:hover{--tw-text-opacity:1;color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)))}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn-outline.modus-wc-btn-error:hover{background-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,#000)}}.modus-wc-btn-disabled:hover,.modus-wc-btn:disabled:hover,.modus-wc-btn[disabled]:hover{--tw-border-opacity:0;--tw-bg-opacity:0.2;--tw-text-opacity:0.2;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn:is(input[type=checkbox]:checked):hover,.modus-wc-btn:is(input[type=radio]:checked):hover{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,#000)}}:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>:not(ul,details,.modus-wc-menu-title)):not(.modus-wc-active,.modus-wc-btn):hover,:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>details>summary:not(.modus-wc-menu-title)):not(.modus-wc-active,.modus-wc-btn):hover{cursor:pointer;outline:2px solid transparent;outline-offset:2px}@supports (color:oklch(0% 0 0)){:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>:not(ul,details,.modus-wc-menu-title)):not(.modus-wc-active,.modus-wc-btn):hover,:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>details>summary:not(.modus-wc-menu-title)):not(.modus-wc-active,.modus-wc-btn):hover{background-color:var(--fallback-bc,oklch(var(--bc)/.1))}}.modus-wc-tab[disabled],.modus-wc-tab[disabled]:hover{--tw-text-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));cursor:not-allowed}}.modus-wc-file-input{--tw-border-opacity:0;--tw-bg-opacity:1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));border-radius:var(--rounded-btn,.5rem);border-width:1px;flex-shrink:1;font-size:1rem;height:3rem;line-height:2;line-height:1.5rem;overflow:hidden;padding-inline-end:1rem}.modus-wc-file-input::file-selector-button{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;align-items:center;animation:button-pop var(--animation-btn,.25s) ease-out;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));border-color:var(--fallback-n,oklch(var(--n)/var(--tw-border-opacity)));border-style:solid;border-width:var(--border-btn,1px);color:var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));cursor:pointer;display:inline-flex;flex-shrink:0;flex-wrap:wrap;font-size:.875rem;font-weight:600;height:100%;justify-content:center;line-height:1.25rem;line-height:1em;margin-inline-end:1rem;padding-left:1rem;padding-right:1rem;text-align:center;text-decoration-line:none;text-transform:uppercase;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);-webkit-user-select:none;-moz-user-select:none;user-select:none}.modus-wc-input{--tw-bg-opacity:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-color:transparent;border-radius:var(--rounded-btn,.5rem);border-width:1px;flex-shrink:1;font-size:1rem;height:3rem;line-height:2;line-height:1.5rem;padding-left:1rem;padding-right:1rem}.modus-wc-input-md[type=number]::-webkit-inner-spin-button,.modus-wc-input[type=number]::-webkit-inner-spin-button{margin-bottom:-1rem;margin-top:-1rem;margin-inline-end:-1rem}.modus-wc-input-xs[type=number]::-webkit-inner-spin-button{margin-bottom:-.25rem;margin-top:-.25rem;margin-inline-end:0}.modus-wc-input-sm[type=number]::-webkit-inner-spin-button{margin-bottom:0;margin-top:0;margin-inline-end:0}.modus-wc-input-lg[type=number]::-webkit-inner-spin-button{margin-bottom:-1.5rem;margin-top:-1.5rem;margin-inline-end:-1.5rem}.modus-wc-join{align-items:stretch;border-radius:var(--rounded-btn,.5rem);display:inline-flex}.modus-wc-join :where(.modus-wc-join-item){border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:0;border-start-start-radius:0}.modus-wc-join .modus-wc-join-item:not(:first-child):not(:last-child),.modus-wc-join :not(:first-child):not(:last-child) .modus-wc-join-item{border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:0;border-start-start-radius:0}.modus-wc-join .modus-wc-join-item:first-child:not(:last-child),.modus-wc-join :first-child:not(:last-child) .modus-wc-join-item{border-end-end-radius:0;border-start-end-radius:0}.modus-wc-join .modus-wc-dropdown .modus-wc-join-item:first-child:not(:last-child),.modus-wc-join :first-child:not(:last-child) .modus-wc-dropdown .modus-wc-join-item{border-end-end-radius:inherit;border-start-end-radius:inherit}.modus-wc-join :where(.modus-wc-join-item:first-child:not(:last-child)),.modus-wc-join :where(:first-child:not(:last-child) .modus-wc-join-item){border-end-start-radius:inherit;border-start-start-radius:inherit}.modus-wc-join .modus-wc-join-item:last-child:not(:first-child),.modus-wc-join :last-child:not(:first-child) .modus-wc-join-item{border-end-start-radius:0;border-start-start-radius:0}.modus-wc-join :where(.modus-wc-join-item:last-child:not(:first-child)),.modus-wc-join :where(:last-child:not(:first-child) .modus-wc-join-item){border-end-end-radius:inherit;border-start-end-radius:inherit}@supports not selector(:has(*)){:where(.modus-wc-join *){border-radius:inherit}}@supports selector(:has(*)){:where(.modus-wc-join :has(.modus-wc-join-item)){border-radius:inherit}}.modus-wc-link{cursor:pointer;text-decoration-line:underline}.modus-wc-link-hover{text-decoration-line:none}.modus-wc-mask{-webkit-mask-position:center;mask-position:center;-webkit-mask-repeat:no-repeat;mask-repeat:no-repeat;-webkit-mask-size:contain;mask-size:contain}.modus-wc-mask-half-1{-webkit-mask-position:left;mask-position:left;-webkit-mask-size:200%;mask-size:200%}.modus-wc-mask-half-1:where([dir=rtl],[dir=rtl] *){-webkit-mask-position:right;mask-position:right}.modus-wc-mask-half-2{-webkit-mask-position:right;mask-position:right;-webkit-mask-size:200%;mask-size:200%}.modus-wc-mask-half-2:where([dir=rtl],[dir=rtl] *){-webkit-mask-position:left;mask-position:left}.modus-wc-menu{display:flex;flex-direction:column;flex-wrap:wrap;font-size:.875rem;line-height:1.25rem;padding:.5rem}.modus-wc-menu :where(li ul){margin-inline-start:1rem;padding-inline-start:.5rem;position:relative;white-space:nowrap}.modus-wc-menu :where(li:not(.modus-wc-menu-title)>:not(ul,details,.modus-wc-menu-title,.modus-wc-btn)),.modus-wc-menu :where(li:not(.modus-wc-menu-title)>details>summary:not(.modus-wc-menu-title)){align-content:flex-start;align-items:center;display:grid;gap:.5rem;grid-auto-columns:minmax(auto,max-content) auto max-content;grid-auto-flow:column;-webkit-user-select:none;-moz-user-select:none;user-select:none}.modus-wc-menu li.modus-wc-disabled{color:var(--fallback-bc,oklch(var(--bc)/.3));cursor:not-allowed;-webkit-user-select:none;-moz-user-select:none;user-select:none}.modus-wc-menu :where(li>.modus-wc-menu-dropdown:not(.modus-wc-menu-dropdown-show)){display:none}:where(.modus-wc-menu li){align-items:stretch;display:flex;flex-direction:column;flex-shrink:0;flex-wrap:wrap;position:relative}:where(.modus-wc-menu li) .modus-wc-badge{justify-self:end}.modus-wc-modal{background-color:transparent;color:inherit;display:grid;height:100%;inset:0;justify-items:center;margin:0;max-height:none;max-width:none;opacity:0;overflow-y:hidden;overscroll-behavior:contain;padding:0;pointer-events:none;position:fixed;transition-duration:.2s;transition-property:transform,opacity,visibility;transition-timing-function:cubic-bezier(0,0,.2,1);width:100%;z-index:999}:where(.modus-wc-modal){align-items:center}.modus-wc-modal-box{--tw-scale-x:.9;--tw-scale-y:.9;--tw-bg-opacity:1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-bottom-left-radius:var(--rounded-box,1rem);border-bottom-right-radius:var(--rounded-box,1rem);border-top-left-radius:var(--rounded-box,1rem);border-top-right-radius:var(--rounded-box,1rem);box-shadow:0 25px 50px -12px rgba(0,0,0,.25);grid-column-start:1;grid-row-start:1;max-height:calc(100vh - 5em);max-width:32rem;overflow-y:auto;overscroll-behavior:contain;padding:1.5rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1);width:91.666667%}.modus-wc-modal-open,.modus-wc-modal-toggle:checked+.modus-wc-modal,.modus-wc-modal:target,.modus-wc-modal[open]{opacity:1;pointer-events:auto;visibility:visible}.modus-wc-modal-action{display:flex;justify-content:flex-end;margin-top:1.5rem}:root:has(:is(.modus-wc-modal-open,.modus-wc-modal:target,.modus-wc-modal-toggle:checked+.modus-wc-modal,.modus-wc-modal[open])){overflow:hidden;scrollbar-gutter:stable}.modus-wc-navbar{align-items:center;display:flex;min-height:4rem;padding:var(--navbar-padding,.5rem);width:100%}:where(.modus-wc-navbar>:not(script,style)){align-items:center;display:inline-flex}.modus-wc-navbar-start{justify-content:flex-start;width:50%}.modus-wc-navbar-center{flex-shrink:0}.modus-wc-navbar-end{justify-content:flex-end;width:50%}.modus-wc-progress{-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--fallback-bc,oklch(var(--bc)/.2));border-radius:var(--rounded-box,1rem);height:.5rem;overflow:hidden;position:relative;width:100%}.modus-wc-radial-progress{--value:0;--size:5rem;--thickness:calc(var(--size)/10);background-color:transparent;border-radius:9999px;box-sizing:content-box;display:inline-grid;height:var(--size);place-content:center;position:relative;vertical-align:middle;width:var(--size)}.modus-wc-radial-progress::-moz-progress-bar{-moz-appearance:none;appearance:none;background-color:transparent}.modus-wc-radial-progress::-webkit-progress-bar,.modus-wc-radial-progress::-webkit-progress-value{-webkit-appearance:none;appearance:none;background-color:transparent}.modus-wc-radial-progress:after,.modus-wc-radial-progress:before{border-radius:9999px;content:"";position:absolute}.modus-wc-radial-progress:before{background:radial-gradient(farthest-side,currentColor 98%,#0000) top/var(--thickness) var(--thickness) no-repeat,conic-gradient(currentColor calc(var(--value)*1%),#0000 0);inset:0;-webkit-mask:radial-gradient(farthest-side,#0000 calc(99% - var(--thickness)),#000 calc(100% - var(--thickness)));mask:radial-gradient(farthest-side,#0000 calc(99% - var(--thickness)),#000 calc(100% - var(--thickness)))}.modus-wc-radial-progress:after{background-color:currentColor;inset:calc(50% - var(--thickness)/2);transform:rotate(calc(var(--value)*3.6deg - 90deg)) translate(calc(var(--size)/2 - 50%))}.modus-wc-radio{--chkbg:var(--bc);--tw-border-opacity:0.2;-webkit-appearance:none;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));border-radius:9999px;border-width:1px;flex-shrink:0;width:1.5rem}.modus-wc-radio,.modus-wc-range{-moz-appearance:none;appearance:none;cursor:pointer;height:1.5rem}.modus-wc-range{--range-shdw:var(--fallback-bc,oklch(var(--bc)/1));-webkit-appearance:none;background-color:transparent;border-radius:var(--rounded-box,1rem);overflow:hidden;width:100%}.modus-wc-range:focus{outline:none}.modus-wc-rating{display:inline-flex;position:relative}.modus-wc-rating :where(input){--tw-bg-opacity:1;animation:rating-pop var(--animation-input,.25s) ease-out;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));border-radius:0;cursor:pointer;height:1.5rem;width:1.5rem}.modus-wc-select{--tw-bg-opacity:1;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));background-image:linear-gradient(45deg,transparent 50%,currentColor 0),linear-gradient(135deg,currentColor 50%,transparent 0);background-position:calc(100% - 20px) calc(1px + 50%),calc(100% - 16.1px) calc(1px + 50%);background-repeat:no-repeat;background-size:4px 4px,4px 4px;border-color:transparent;border-radius:var(--rounded-btn,.5rem);border-width:1px;cursor:pointer;display:inline-flex;font-size:.875rem;height:3rem;line-height:1.25rem;line-height:2;min-height:3rem;padding-inline-end:2.5rem;padding-inline-start:1rem;-webkit-user-select:none;-moz-user-select:none;user-select:none}.modus-wc-select[multiple]{height:auto}.modus-wc-steps{counter-reset:step;display:inline-grid;grid-auto-columns:1fr;grid-auto-flow:column;overflow:hidden;overflow-x:auto}.modus-wc-steps .modus-wc-step{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-template-columns:auto;grid-template-rows:repeat(2,minmax(0,1fr));grid-template-rows:40px 1fr;min-width:4rem;place-items:center;text-align:center}.modus-wc-tabs{align-items:flex-end;display:grid}.modus-wc-tabs-lifted:has(.modus-wc-tab-content[class*=" rounded-"]) .modus-wc-tab:first-child:not(:is(.modus-wc-tab-active,[aria-selected=true])),.modus-wc-tabs-lifted:has(.modus-wc-tab-content[class^=rounded-]) .modus-wc-tab:first-child:not(:is(.modus-wc-tab-active,[aria-selected=true])){border-bottom-color:transparent}.modus-wc-tab{--tab-padding:1rem;--tw-text-opacity:0.5;--tab-color:var(--fallback-bc,oklch(var(--bc)/1));--tab-bg:var(--fallback-b1,oklch(var(--b1)/1));--tab-border-color:var(--fallback-b3,oklch(var(--b3)/1));align-items:center;-webkit-appearance:none;-moz-appearance:none;appearance:none;color:var(--tab-color);cursor:pointer;display:inline-flex;flex-wrap:wrap;font-size:.875rem;grid-row-start:1;height:2rem;justify-content:center;line-height:1.25rem;line-height:2;padding-inline-end:var(--tab-padding,1rem);padding-inline-start:var(--tab-padding,1rem);position:relative;text-align:center;-webkit-user-select:none;-moz-user-select:none;user-select:none}.modus-wc-tab:is(input[type=radio]){border-bottom-left-radius:0;border-bottom-right-radius:0;width:auto}.modus-wc-tab:is(input[type=radio]):after{--tw-content:attr(aria-label);content:var(--tw-content)}.modus-wc-tab:not(input):empty{cursor:default;grid-column-start:span 9999}:checked+.modus-wc-tab-content:nth-child(2),:is(.modus-wc-tab-active,[aria-selected=true])+.modus-wc-tab-content:nth-child(2){border-start-start-radius:0}:is(.modus-wc-tab-active,[aria-selected=true])+.modus-wc-tab-content,input.modus-wc-tab:checked+.modus-wc-tab-content{display:block}.modus-wc-table{border-radius:var(--rounded-box,1rem);font-size:.875rem;line-height:1.25rem;position:relative;text-align:left;width:100%}.modus-wc-table :where(.modus-wc-table-pin-rows thead tr){--tw-bg-opacity:1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));position:sticky;top:0;z-index:1}.modus-wc-table :where(.modus-wc-table-pin-rows tfoot tr){--tw-bg-opacity:1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));bottom:0;position:sticky;z-index:1}.modus-wc-table :where(.modus-wc-table-pin-cols tr th){--tw-bg-opacity:1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));left:0;position:sticky;right:0}.modus-wc-table-zebra tbody tr:nth-child(2n) :where(.modus-wc-table-pin-cols tr th){--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}.modus-wc-textarea{--tw-bg-opacity:1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-color:transparent;border-radius:var(--rounded-btn,.5rem);border-width:1px;flex-shrink:1;font-size:.875rem;line-height:1.25rem;line-height:2;min-height:3rem;padding:.5rem 1rem}.modus-wc-toast{display:flex;flex-direction:column;gap:.5rem;min-width:-moz-fit-content;min-width:fit-content;padding:1rem;position:fixed;white-space:nowrap}.modus-wc-toggle{--tglbg:var(--fallback-b1,oklch(var(--b1)/1));--handleoffset:1.5rem;--handleoffsetcalculator:calc(var(--handleoffset)*-1);--togglehandleborder:0 0;-webkit-appearance:none;-moz-appearance:none;appearance:none;background-color:currentColor;border-color:currentColor;border-radius:var(--rounded-badge,1.9rem);border-width:1px;box-shadow:var(--handleoffsetcalculator) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset,var(--togglehandleborder);color:var(--fallback-bc,oklch(var(--bc)/.5));cursor:pointer;flex-shrink:0;height:1.5rem;transition:background,box-shadow var(--animation-input,.2s) ease-out;width:3rem}.modus-wc-alert-info{--tw-text-opacity:1;--alert-bg:var(--fallback-in,oklch(var(--in)/1));--alert-bg-mix:var(--fallback-b1,oklch(var(--b1)/1));border-color:var(--fallback-in,oklch(var(--in)/.2));color:var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)))}.modus-wc-alert-success{--tw-text-opacity:1;--alert-bg:var(--fallback-su,oklch(var(--su)/1));--alert-bg-mix:var(--fallback-b1,oklch(var(--b1)/1));border-color:var(--fallback-su,oklch(var(--su)/.2));color:var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)))}.modus-wc-alert-warning{--tw-text-opacity:1;--alert-bg:var(--fallback-wa,oklch(var(--wa)/1));--alert-bg-mix:var(--fallback-b1,oklch(var(--b1)/1));border-color:var(--fallback-wa,oklch(var(--wa)/.2));color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)))}.modus-wc-alert-error{--tw-text-opacity:1;--alert-bg:var(--fallback-er,oklch(var(--er)/1));--alert-bg-mix:var(--fallback-b1,oklch(var(--b1)/1));border-color:var(--fallback-er,oklch(var(--er)/.2));color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)))}.modus-wc-avatar-group :where(.modus-wc-avatar){--tw-border-opacity:1;border-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-border-opacity)));border-radius:9999px;border-width:4px;overflow:hidden}.modus-wc-badge-neutral{background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));border-color:var(--fallback-n,oklch(var(--n)/var(--tw-border-opacity)));color:var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)))}.modus-wc-badge-neutral,.modus-wc-badge-primary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1}.modus-wc-badge-primary{background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));border-color:var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)));color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.modus-wc-badge-secondary{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity)));border-color:var(--fallback-s,oklch(var(--s)/var(--tw-border-opacity)));color:var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)))}.modus-wc-badge-success{background-color:var(--fallback-su,oklch(var(--su)/var(--tw-bg-opacity)));color:var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)))}.modus-wc-badge-success,.modus-wc-badge-warning{--tw-bg-opacity:1;--tw-text-opacity:1;border-color:transparent}.modus-wc-badge-warning{background-color:var(--fallback-wa,oklch(var(--wa)/var(--tw-bg-opacity)));color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)))}.modus-wc-badge-error{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-er,oklch(var(--er)/var(--tw-bg-opacity)));border-color:transparent;color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)))}.modus-wc-badge-outline.modus-wc-badge-neutral{--tw-text-opacity:1;color:var(--fallback-n,oklch(var(--n)/var(--tw-text-opacity)))}.modus-wc-badge-outline.modus-wc-badge-primary{--tw-text-opacity:1;color:var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)))}.modus-wc-badge-outline.modus-wc-badge-secondary{--tw-text-opacity:1;color:var(--fallback-s,oklch(var(--s)/var(--tw-text-opacity)))}.modus-wc-badge-outline.modus-wc-badge-success{--tw-text-opacity:1;color:var(--fallback-su,oklch(var(--su)/var(--tw-text-opacity)))}.modus-wc-badge-outline.modus-wc-badge-warning{--tw-text-opacity:1;color:var(--fallback-wa,oklch(var(--wa)/var(--tw-text-opacity)))}.modus-wc-badge-outline.modus-wc-badge-error{--tw-text-opacity:1;color:var(--fallback-er,oklch(var(--er)/var(--tw-text-opacity)))}.modus-wc-btm-nav>:where(.modus-wc-active){--tw-bg-opacity:1;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-top-width:2px}.modus-wc-breadcrumbs>ol>li>a:focus,.modus-wc-breadcrumbs>ul>li>a:focus{outline:2px solid transparent;outline-offset:2px}.modus-wc-breadcrumbs>ol>li>a:focus-visible,.modus-wc-breadcrumbs>ul>li>a:focus-visible{outline:2px solid currentColor;outline-offset:2px}.modus-wc-breadcrumbs>ol>li+:before,.modus-wc-breadcrumbs>ul>li+:before{--tw-rotate:45deg;background-color:transparent;border-right:1px solid;border-top:1px solid;content:"";display:block;height:.375rem;margin-left:.5rem;margin-right:.75rem;opacity:.4;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:.375rem}[dir=rtl] .modus-wc-breadcrumbs>ol>li+:before,[dir=rtl] .modus-wc-breadcrumbs>ul>li+:before{--tw-rotate:-135deg}@media (prefers-reduced-motion:no-preference){.modus-wc-btn{animation:button-pop var(--animation-btn,.25s) ease-out}}.modus-wc-btn:active:focus,.modus-wc-btn:active:hover{animation:button-pop 0s ease-out;transform:scale(var(--btn-focus-scale,.97))}@supports not (color:oklch(0% 0 0)){.modus-wc-btn{background-color:var(--btn-color,var(--fallback-b2));border-color:var(--btn-color,var(--fallback-b2))}.modus-wc-btn-primary{--btn-color:var(--fallback-p)}.modus-wc-btn-secondary{--btn-color:var(--fallback-s)}.modus-wc-btn-neutral{--btn-color:var(--fallback-n)}.modus-wc-btn-warning{--btn-color:var(--fallback-wa)}.modus-wc-btn-error{--btn-color:var(--fallback-er)}}@supports (color:color-mix(in oklab,black,black)){.modus-wc-btn-active{background-color:color-mix(in oklab,oklch(var(--btn-color,var(--b3))/var(--tw-bg-opacity,1)) 90%,#000);border-color:color-mix(in oklab,oklch(var(--btn-color,var(--b3))/var(--tw-border-opacity,1)) 90%,#000)}.modus-wc-btn-outline.modus-wc-btn-primary.modus-wc-btn-active{background-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-p,oklch(var(--p)/1)) 90%,#000)}.modus-wc-btn-outline.modus-wc-btn-secondary.modus-wc-btn-active{background-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-s,oklch(var(--s)/1)) 90%,#000)}.modus-wc-btn-outline.modus-wc-btn-accent.modus-wc-btn-active{background-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-a,oklch(var(--a)/1)) 90%,#000)}.modus-wc-btn-outline.modus-wc-btn-success.modus-wc-btn-active{background-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-su,oklch(var(--su)/1)) 90%,#000)}.modus-wc-btn-outline.modus-wc-btn-info.modus-wc-btn-active{background-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-in,oklch(var(--in)/1)) 90%,#000)}.modus-wc-btn-outline.modus-wc-btn-warning.modus-wc-btn-active{background-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-wa,oklch(var(--wa)/1)) 90%,#000)}.modus-wc-btn-outline.modus-wc-btn-error.modus-wc-btn-active{background-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,#000);border-color:color-mix(in oklab,var(--fallback-er,oklch(var(--er)/1)) 90%,#000)}}.modus-wc-btn:focus-visible{outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-btn-primary{--tw-text-opacity:1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)));outline-color:var(--fallback-p,oklch(var(--p)/1))}@supports (color:oklch(0% 0 0)){.modus-wc-btn-primary{--btn-color:var(--p)}.modus-wc-btn-secondary{--btn-color:var(--s)}.modus-wc-btn-neutral{--btn-color:var(--n)}.modus-wc-btn-warning{--btn-color:var(--wa)}.modus-wc-btn-error{--btn-color:var(--er)}}.modus-wc-btn-secondary{--tw-text-opacity:1;color:var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)));outline-color:var(--fallback-s,oklch(var(--s)/1))}.modus-wc-btn-neutral{--tw-text-opacity:1;color:var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)));outline-color:var(--fallback-n,oklch(var(--n)/1))}.modus-wc-btn-warning{--tw-text-opacity:1;color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)));outline-color:var(--fallback-wa,oklch(var(--wa)/1))}.modus-wc-btn-error{--tw-text-opacity:1;color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)));outline-color:var(--fallback-er,oklch(var(--er)/1))}.modus-wc-btn.modus-wc-glass{--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);outline-color:currentColor}.modus-wc-btn.modus-wc-glass.modus-wc-btn-active{--glass-opacity:25%;--glass-border-opacity:15%}.modus-wc-btn-ghost.modus-wc-btn-active{background-color:var(--fallback-bc,oklch(var(--bc)/.2));border-color:transparent}.modus-wc-btn-link.modus-wc-btn-active{background-color:transparent;border-color:transparent;text-decoration-line:underline}.modus-wc-btn-outline{--tw-text-opacity:1;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;background-color:transparent;border-color:currentColor;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow);color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-active{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));color:var(--fallback-b1,oklch(var(--b1)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-primary{--tw-text-opacity:1;color:var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-primary.modus-wc-btn-active{--tw-text-opacity:1;color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-secondary{--tw-text-opacity:1;color:var(--fallback-s,oklch(var(--s)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-secondary.modus-wc-btn-active{--tw-text-opacity:1;color:var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-accent{--tw-text-opacity:1;color:var(--fallback-a,oklch(var(--a)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-accent.modus-wc-btn-active{--tw-text-opacity:1;color:var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-success{--tw-text-opacity:1;color:var(--fallback-su,oklch(var(--su)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-success.modus-wc-btn-active{--tw-text-opacity:1;color:var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-info{--tw-text-opacity:1;color:var(--fallback-in,oklch(var(--in)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-info.modus-wc-btn-active{--tw-text-opacity:1;color:var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-warning{--tw-text-opacity:1;color:var(--fallback-wa,oklch(var(--wa)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-warning.modus-wc-btn-active{--tw-text-opacity:1;color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-error{--tw-text-opacity:1;color:var(--fallback-er,oklch(var(--er)/var(--tw-text-opacity)))}.modus-wc-btn-outline.modus-wc-btn-error.modus-wc-btn-active{--tw-text-opacity:1;color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)))}.modus-wc-btn.modus-wc-btn-disabled,.modus-wc-btn:disabled,.modus-wc-btn[disabled]{--tw-border-opacity:0;--tw-bg-opacity:0.2;--tw-text-opacity:0.2;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}.modus-wc-btn:is(input[type=checkbox]:checked),.modus-wc-btn:is(input[type=radio]:checked){--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));border-color:var(--fallback-p,oklch(var(--p)/var(--tw-border-opacity)));color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.modus-wc-btn:is(input[type=checkbox]:checked):focus-visible,.modus-wc-btn:is(input[type=radio]:checked):focus-visible{outline-color:var(--fallback-p,oklch(var(--p)/1))}@keyframes button-pop{0%{transform:scale(var(--btn-focus-scale,.98))}40%{transform:scale(1.02)}to{transform:scale(1)}}.modus-wc-card :where(figure:first-child){border-end-end-radius:unset;border-end-start-radius:unset;border-start-end-radius:inherit;border-start-start-radius:inherit;overflow:hidden}.modus-wc-card :where(figure:last-child){border-end-end-radius:inherit;border-end-start-radius:inherit;border-start-end-radius:unset;border-start-start-radius:unset;overflow:hidden}.modus-wc-card:focus-visible{outline:2px solid currentColor;outline-offset:2px}.modus-wc-card-bordered,.modus-wc-card.modus-wc-bordered{--tw-border-opacity:1;border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));border-width:1px}.modus-wc-card.modus-wc-compact .modus-wc-card-body{font-size:.875rem;line-height:1.25rem;padding:1rem}.modus-wc-card-title{align-items:center;display:flex;font-size:1.25rem;font-weight:600;gap:.5rem;line-height:1.75rem}.modus-wc-card.modus-wc-image-full :where(figure){border-radius:inherit;overflow:hidden}.modus-wc-checkbox:focus{box-shadow:none}.modus-wc-checkbox:focus-visible{outline-color:var(--fallback-bc,oklch(var(--bc)/1));outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-checkbox:disabled{--tw-bg-opacity:1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));border-color:transparent;border-width:0;cursor:not-allowed;opacity:.2}.modus-wc-checkbox:checked,.modus-wc-checkbox[aria-checked=true]{animation:checkmark var(--animation-input,.2s) ease-out;background-color:var(--chkbg);background-image:linear-gradient(-45deg,transparent 65%,var(--chkbg) 65.99%),linear-gradient(45deg,transparent 75%,var(--chkbg) 75.99%),linear-gradient(-45deg,var(--chkbg) 40%,transparent 40.99%),linear-gradient(45deg,var(--chkbg) 30%,var(--chkfg) 30.99%,var(--chkfg) 40%,transparent 40.99%),linear-gradient(-45deg,var(--chkfg) 50%,var(--chkbg) 50.99%);background-repeat:no-repeat}.modus-wc-checkbox:indeterminate{--tw-bg-opacity:1;animation:checkmark var(--animation-input,.2s) ease-out;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));background-image:linear-gradient(90deg,transparent 80%,var(--chkbg) 80%),linear-gradient(-90deg,transparent 80%,var(--chkbg) 80%),linear-gradient(0deg,var(--chkbg) 43%,var(--chkfg) 43%,var(--chkfg) 57%,var(--chkbg) 57%);background-repeat:no-repeat}@keyframes checkmark{0%{background-position-y:5px}50%{background-position-y:-2px}to{background-position-y:0}}details.modus-wc-collapse{width:100%}details.modus-wc-collapse summary{display:block;outline:2px solid transparent;outline-offset:2px;position:relative}details.modus-wc-collapse summary::-webkit-details-marker{display:none}.modus-wc-collapse:focus-visible{outline-color:var(--fallback-bc,oklch(var(--bc)/1));outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-collapse:has(.modus-wc-collapse-title:focus-visible),.modus-wc-collapse:has(>input[type=checkbox]:focus-visible),.modus-wc-collapse:has(>input[type=radio]:focus-visible){outline-color:var(--fallback-bc,oklch(var(--bc)/1));outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-collapse-arrow>.modus-wc-collapse-title:after{--tw-translate-y:-100%;--tw-rotate:45deg;box-shadow:2px 2px;content:"";top:1.9rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));transform-origin:75% 75%;transition-duration:.15s;transition-duration:.2s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.modus-wc-collapse-arrow>.modus-wc-collapse-title:after,.modus-wc-collapse-plus>.modus-wc-collapse-title:after{display:block;height:.5rem;inset-inline-end:1.4rem;pointer-events:none;position:absolute;transition-property:all;width:.5rem}.modus-wc-collapse-plus>.modus-wc-collapse-title:after{content:"+";top:.9rem;transition-duration:.3s;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.modus-wc-collapse:not(.modus-wc-collapse-open):not(.modus-wc-collapse-close)>.modus-wc-collapse-title,.modus-wc-collapse:not(.modus-wc-collapse-open):not(.modus-wc-collapse-close)>input[type=checkbox],.modus-wc-collapse:not(.modus-wc-collapse-open):not(.modus-wc-collapse-close)>input[type=radio]:not(:checked){cursor:pointer}.modus-wc-collapse:focus:not(.modus-wc-collapse-open):not(.modus-wc-collapse-close):not(.modus-wc-collapse[open])>.modus-wc-collapse-title{cursor:unset}.modus-wc-collapse-title{position:relative}.modus-wc-collapse-title,:where(.modus-wc-collapse>input[type=checkbox]),:where(.modus-wc-collapse>input[type=radio]){min-height:3.75rem;padding:1rem;padding-inline-end:3rem;transition:background-color .2s ease-out}.modus-wc-collapse-open>:where(.modus-wc-collapse-content),.modus-wc-collapse:focus:not(.modus-wc-collapse-close)>:where(.modus-wc-collapse-content),.modus-wc-collapse:not(.modus-wc-collapse-close)>:where(input[type=checkbox]:checked~.modus-wc-collapse-content),.modus-wc-collapse:not(.modus-wc-collapse-close)>:where(input[type=radio]:checked~.modus-wc-collapse-content),.modus-wc-collapse[open]>:where(.modus-wc-collapse-content){padding-bottom:1rem;transition:padding .2s ease-out,background-color .2s ease-out}.modus-wc-collapse-arrow:focus:not(.modus-wc-collapse-close)>.modus-wc-collapse-title:after,.modus-wc-collapse-arrow:not(.modus-wc-collapse-close)>input[type=checkbox]:checked~.modus-wc-collapse-title:after,.modus-wc-collapse-arrow:not(.modus-wc-collapse-close)>input[type=radio]:checked~.modus-wc-collapse-title:after,.modus-wc-collapse-open.modus-wc-collapse-arrow>.modus-wc-collapse-title:after,.modus-wc-collapse[open].modus-wc-collapse-arrow>.modus-wc-collapse-title:after{--tw-translate-y:-50%;--tw-rotate:225deg;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-collapse-open.modus-wc-collapse-plus>.modus-wc-collapse-title:after,.modus-wc-collapse-plus:focus:not(.modus-wc-collapse-close)>.modus-wc-collapse-title:after,.modus-wc-collapse-plus:not(.modus-wc-collapse-close)>input[type=checkbox]:checked~.modus-wc-collapse-title:after,.modus-wc-collapse-plus:not(.modus-wc-collapse-close)>input[type=radio]:checked~.modus-wc-collapse-title:after,.modus-wc-collapse[open].modus-wc-collapse-plus>.modus-wc-collapse-title:after{content:"−"}.modus-wc-divider:not(:empty){gap:1rem}.modus-wc-divider-neutral:after,.modus-wc-divider-neutral:before{--tw-bg-opacity:1;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)))}.modus-wc-divider-primary:after,.modus-wc-divider-primary:before{--tw-bg-opacity:1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)))}.modus-wc-divider-secondary:after,.modus-wc-divider-secondary:before{--tw-bg-opacity:1;background-color:var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity)))}.modus-wc-divider-accent:after,.modus-wc-divider-accent:before{--tw-bg-opacity:1;background-color:var(--fallback-a,oklch(var(--a)/var(--tw-bg-opacity)))}.modus-wc-divider-success:after,.modus-wc-divider-success:before{--tw-bg-opacity:1;background-color:var(--fallback-su,oklch(var(--su)/var(--tw-bg-opacity)))}.modus-wc-divider-warning:after,.modus-wc-divider-warning:before{--tw-bg-opacity:1;background-color:var(--fallback-wa,oklch(var(--wa)/var(--tw-bg-opacity)))}.modus-wc-divider-error:after,.modus-wc-divider-error:before{--tw-bg-opacity:1;background-color:var(--fallback-er,oklch(var(--er)/var(--tw-bg-opacity)))}.modus-wc-file-input:focus{outline-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-file-input-disabled,.modus-wc-file-input[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;--tw-text-opacity:0.2;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));cursor:not-allowed}.modus-wc-file-input-disabled::-moz-placeholder,.modus-wc-file-input[disabled]::-moz-placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.modus-wc-file-input-disabled::placeholder,.modus-wc-file-input[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.modus-wc-file-input-disabled::file-selector-button,.modus-wc-file-input[disabled]::file-selector-button{--tw-border-opacity:0;--tw-bg-opacity:0.2;--tw-text-opacity:0.2;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}.modus-wc-input input{--tw-bg-opacity:1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));background-color:transparent}.modus-wc-input input:focus{outline:2px solid transparent;outline-offset:2px}.modus-wc-input[list]::-webkit-calendar-picker-indicator{line-height:1em}.modus-wc-input-bordered{border-color:var(--fallback-bc,oklch(var(--bc)/.2))}.modus-wc-input:focus,.modus-wc-input:focus-within{border-color:var(--fallback-bc,oklch(var(--bc)/.2));box-shadow:none;outline-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-input-disabled,.modus-wc-input:disabled,.modus-wc-input:has(>input[disabled]),.modus-wc-input[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));color:var(--fallback-bc,oklch(var(--bc)/.4));cursor:not-allowed}.modus-wc-input-disabled::-moz-placeholder,.modus-wc-input:disabled::-moz-placeholder,.modus-wc-input:has(>input[disabled])::-moz-placeholder,.modus-wc-input[disabled]::-moz-placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.modus-wc-input-disabled::placeholder,.modus-wc-input:disabled::placeholder,.modus-wc-input:has(>input[disabled])::placeholder,.modus-wc-input[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.modus-wc-input:has(>input[disabled])>input[disabled]{cursor:not-allowed}.modus-wc-input::-webkit-date-and-time-value{text-align:inherit}.modus-wc-join>:where(:not(:first-child)){margin-bottom:0;margin-top:0;margin-inline-start:-1px}.modus-wc-join>:where(:not(:first-child)):is(.modus-wc-btn){margin-inline-start:calc(var(--border-btn)*-1)}.modus-wc-join-item:focus{isolation:isolate}.modus-wc-link:focus{outline:2px solid transparent;outline-offset:2px}.modus-wc-link:focus-visible{outline:2px solid currentColor;outline-offset:2px}.modus-wc-mask-heart{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='200' height='185' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 184.606a15.384 15.384 0 0 1-8.653-2.678C53.565 156.28 37.205 138.695 28.182 127.7 8.952 104.264-.254 80.202.005 54.146.308 24.287 24.264 0 53.406 0c21.192 0 35.869 11.937 44.416 21.879a2.884 2.884 0 0 0 4.356 0C110.725 11.927 125.402 0 146.594 0c29.142 0 53.098 24.287 53.4 54.151.26 26.061-8.956 50.122-28.176 73.554-9.023 10.994-25.383 28.58-63.165 54.228a15.384 15.384 0 0 1-8.653 2.673Z'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='200' height='185' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M100 184.606a15.384 15.384 0 0 1-8.653-2.678C53.565 156.28 37.205 138.695 28.182 127.7 8.952 104.264-.254 80.202.005 54.146.308 24.287 24.264 0 53.406 0c21.192 0 35.869 11.937 44.416 21.879a2.884 2.884 0 0 0 4.356 0C110.725 11.927 125.402 0 146.594 0c29.142 0 53.098 24.287 53.4 54.151.26 26.061-8.956 50.122-28.176 73.554-9.023 10.994-25.383 28.58-63.165 54.228a15.384 15.384 0 0 1-8.653 2.673Z'/%3E%3C/svg%3E")}.modus-wc-mask-star-2{-webkit-mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='192' height='180' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='m96 153.044-58.779 26.243 7.02-63.513L.894 68.481l63.117-13.01L96 0l31.989 55.472 63.117 13.01-43.347 47.292 7.02 63.513z' fill-rule='evenodd'/%3E%3C/svg%3E")}:where(.modus-wc-menu li:empty){--tw-bg-opacity:1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));height:1px;margin:.5rem 1rem;opacity:.1}.modus-wc-menu :where(li ul):before{--tw-bg-opacity:1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));bottom:.75rem;content:"";inset-inline-start:0;opacity:.1;position:absolute;top:.75rem;width:1px}.modus-wc-menu :where(li:not(.modus-wc-menu-title)>:not(ul,details,.modus-wc-menu-title,.modus-wc-btn)),.modus-wc-menu :where(li:not(.modus-wc-menu-title)>details>summary:not(.modus-wc-menu-title)){text-wrap:balance;border-radius:var(--rounded-btn,.5rem);padding:.5rem 1rem;text-align:start;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>:not(ul,details,.modus-wc-menu-title)):is(summary):not(.modus-wc-active,.modus-wc-btn):focus-visible,:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>:not(ul,details,.modus-wc-menu-title)):not(summary,.modus-wc-active,.modus-wc-btn).modus-wc-focus,:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>:not(ul,details,.modus-wc-menu-title)):not(summary,.modus-wc-active,.modus-wc-btn):focus,:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>details>summary:not(.modus-wc-menu-title)):is(summary):not(.modus-wc-active,.modus-wc-btn):focus-visible,:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>details>summary:not(.modus-wc-menu-title)):not(summary,.modus-wc-active,.modus-wc-btn).modus-wc-focus,:where(.modus-wc-menu li:not(.modus-wc-menu-title,.modus-wc-disabled)>details>summary:not(.modus-wc-menu-title)):not(summary,.modus-wc-active,.modus-wc-btn):focus{--tw-text-opacity:1;background-color:var(--fallback-bc,oklch(var(--bc)/.1));color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));cursor:pointer;outline:2px solid transparent;outline-offset:2px}.modus-wc-menu li>:not(ul,.modus-wc-menu-title,details,.modus-wc-btn).modus-wc-active,.modus-wc-menu li>:not(ul,.modus-wc-menu-title,details,.modus-wc-btn):active,.modus-wc-menu li>details>summary:active{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));color:var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)))}.modus-wc-menu :where(li>details>summary)::-webkit-details-marker{display:none}.modus-wc-menu :where(li>.modus-wc-menu-dropdown-toggle):after,.modus-wc-menu :where(li>details>summary):after{box-shadow:2px 2px;content:"";display:block;height:.5rem;justify-self:end;margin-top:-.5rem;pointer-events:none;transform:rotate(45deg);transform-origin:75% 75%;transition-duration:.3s;transition-property:transform,margin-top;transition-timing-function:cubic-bezier(.4,0,.2,1);width:.5rem}.modus-wc-menu :where(li>.modus-wc-menu-dropdown-toggle.modus-wc-menu-dropdown-show):after,.modus-wc-menu :where(li>details[open]>summary):after{margin-top:0;transform:rotate(225deg)}.modus-wc-mockup-browser .modus-wc-mockup-browser-toolbar .modus-wc-input{--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));direction:ltr;display:block;height:1.75rem;margin-left:auto;margin-right:auto;overflow:hidden;padding-left:2rem;position:relative;text-overflow:ellipsis;white-space:nowrap;width:24rem}.modus-wc-mockup-browser .modus-wc-mockup-browser-toolbar .modus-wc-input:before{--tw-translate-y:-50%;aspect-ratio:1/1;border-color:currentColor;border-radius:9999px;border-width:2px;height:.75rem;left:.5rem}.modus-wc-mockup-browser .modus-wc-mockup-browser-toolbar .modus-wc-input:after,.modus-wc-mockup-browser .modus-wc-mockup-browser-toolbar .modus-wc-input:before{content:"";opacity:.6;position:absolute;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-mockup-browser .modus-wc-mockup-browser-toolbar .modus-wc-input:after{--tw-translate-y:25%;--tw-rotate:-45deg;border-color:currentColor;border-radius:9999px;border-width:1px;height:.5rem;left:1.25rem}.modus-wc-modal::backdrop,.modus-wc-modal:not(dialog:not(.modus-wc-modal-open)){animation:modal-pop .2s ease-out;background-color:#0006}.modus-wc-modal-backdrop{align-self:stretch;color:transparent;display:grid;grid-column-start:1;grid-row-start:1;justify-self:stretch;z-index:-1}.modus-wc-modal-open .modus-wc-modal-box,.modus-wc-modal-toggle:checked+.modus-wc-modal .modus-wc-modal-box,.modus-wc-modal:target .modus-wc-modal-box,.modus-wc-modal[open] .modus-wc-modal-box{--tw-translate-y:0px;--tw-scale-x:1;--tw-scale-y:1;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-modal-action>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.modus-wc-modal-action:where([dir=rtl],[dir=rtl] *)>:not([hidden])~:not([hidden]){--tw-space-x-reverse:1}@keyframes modal-pop{0%{opacity:0}}.modus-wc-progress::-moz-progress-bar{background-color:currentColor;border-radius:var(--rounded-box,1rem)}.modus-wc-progress:indeterminate{--progress-color:var(--fallback-bc,oklch(var(--bc)/1));animation:progress-loading 5s ease-in-out infinite;background-image:repeating-linear-gradient(90deg,var(--progress-color) -1%,var(--progress-color) 10%,transparent 10%,transparent 90%);background-position-x:15%;background-size:200%}.modus-wc-progress::-webkit-progress-bar{background-color:transparent;border-radius:var(--rounded-box,1rem)}.modus-wc-progress::-webkit-progress-value{background-color:currentColor;border-radius:var(--rounded-box,1rem)}.modus-wc-progress:indeterminate::-moz-progress-bar{animation:progress-loading 5s ease-in-out infinite;background-color:transparent;background-image:repeating-linear-gradient(90deg,var(--progress-color) -1%,var(--progress-color) 10%,transparent 10%,transparent 90%);background-position-x:15%;background-size:200%}@keyframes progress-loading{50%{background-position-x:-115%}}.modus-wc-radio:focus{box-shadow:none}.modus-wc-radio:focus-visible{outline-color:var(--fallback-bc,oklch(var(--bc)/1));outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-radio:checked,.modus-wc-radio[aria-checked=true]{--tw-bg-opacity:1;animation:radiomark var(--animation-input,.2s) ease-out;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity)));background-image:none;box-shadow:0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset}.modus-wc-radio:disabled{cursor:not-allowed;opacity:.2}@keyframes radiomark{0%{box-shadow:0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 12px var(--fallback-b1,oklch(var(--b1)/1)) inset}50%{box-shadow:0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 3px var(--fallback-b1,oklch(var(--b1)/1)) inset}to{box-shadow:0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 4px var(--fallback-b1,oklch(var(--b1)/1)) inset}}.modus-wc-range:focus-visible::-webkit-slider-thumb{--focus-shadow:0 0 0 6px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 2rem var(--range-shdw) inset}.modus-wc-range:focus-visible::-moz-range-thumb{--focus-shadow:0 0 0 6px var(--fallback-b1,oklch(var(--b1)/1)) inset,0 0 0 2rem var(--range-shdw) inset}.modus-wc-range::-webkit-slider-runnable-track{background-color:var(--fallback-bc,oklch(var(--bc)/.1));border-radius:var(--rounded-box,1rem);height:.5rem;width:100%}.modus-wc-range::-moz-range-track{background-color:var(--fallback-bc,oklch(var(--bc)/.1));border-radius:var(--rounded-box,1rem);height:.5rem;width:100%}.modus-wc-range::-webkit-slider-thumb{--tw-bg-opacity:1;--filler-size:100rem;--filler-offset:0.6rem;appearance:none;-webkit-appearance:none;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-radius:var(--rounded-box,1rem);border-style:none;box-shadow:0 0 0 3px var(--range-shdw) inset,var(--focus-shadow,0 0),calc(var(--filler-size)*-1 - var(--filler-offset)) 0 0 var(--filler-size);color:var(--range-shdw);height:1.5rem;position:relative;top:50%;transform:translateY(-50%);width:1.5rem}.modus-wc-range::-moz-range-thumb{--tw-bg-opacity:1;--filler-size:100rem;--filler-offset:0.5rem;background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-radius:var(--rounded-box,1rem);border-style:none;box-shadow:0 0 0 3px var(--range-shdw) inset,var(--focus-shadow,0 0),calc(var(--filler-size)*-1 - var(--filler-offset)) 0 0 var(--filler-size);color:var(--range-shdw);height:1.5rem;position:relative;top:50%;width:1.5rem}.modus-wc-rating input{-moz-appearance:none;appearance:none;-webkit-appearance:none}.modus-wc-rating .modus-wc-rating-hidden{background-color:transparent;width:.5rem}.modus-wc-rating input[type=radio]:checked{background-image:none}.modus-wc-rating input:checked~input,.modus-wc-rating input[aria-checked=true]~input{--tw-bg-opacity:0.2}.modus-wc-rating input:focus-visible{transform:translateY(-.125em);transition-duration:.3s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-timing-function:cubic-bezier(0,0,.2,1)}.modus-wc-rating input:active:focus{animation:none;transform:translateY(-.125em)}.modus-wc-rating-half :where(input:not(.modus-wc-rating-hidden)){width:.75rem}@keyframes rating-pop{0%{transform:translateY(-.125em)}40%{transform:translateY(-.125em)}to{transform:translateY(0)}}.modus-wc-select-bordered,.modus-wc-select:focus{border-color:var(--fallback-bc,oklch(var(--bc)/.2))}.modus-wc-select:focus{box-shadow:none;outline-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-select-disabled,.modus-wc-select:disabled,.modus-wc-select[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));color:var(--fallback-bc,oklch(var(--bc)/.4));cursor:not-allowed}.modus-wc-select-disabled::-moz-placeholder,.modus-wc-select:disabled::-moz-placeholder,.modus-wc-select[disabled]::-moz-placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.modus-wc-select-disabled::placeholder,.modus-wc-select:disabled::placeholder,.modus-wc-select[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.modus-wc-select-multiple,.modus-wc-select[multiple],.modus-wc-select[size].modus-wc-select:not([size="1"]){background-image:none;padding-right:1rem}[dir=rtl] .modus-wc-select{background-position:12px calc(1px + 50%),16px calc(1px + 50%)}.modus-wc-skeleton{--tw-bg-opacity:1;animation:skeleton 1.8s ease-in-out infinite;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));background-image:linear-gradient(105deg,transparent 0,transparent 40%,var(--fallback-b1,oklch(var(--b1)/1)) 50%,transparent 60%,transparent 100%);background-position-x:-50%;background-repeat:no-repeat;background-size:200% auto;border-radius:var(--rounded-box,1rem);will-change:background-position}@media (prefers-reduced-motion){.modus-wc-skeleton{animation-duration:15s}}@keyframes skeleton{0%{background-position:150%}to{background-position:-50%}}.modus-wc-steps .modus-wc-step:before{color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));content:"";height:.5rem;margin-inline-start:-100%;top:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:100%}.modus-wc-steps .modus-wc-step:after,.modus-wc-steps .modus-wc-step:before{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)));grid-column-start:1;grid-row-start:1}.modus-wc-steps .modus-wc-step:after{border-radius:9999px;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));content:counter(step);counter-increment:step;display:grid;height:2rem;place-items:center;place-self:center;position:relative;width:2rem;z-index:1}.modus-wc-steps .modus-wc-step:first-child:before{content:none}.modus-wc-steps .modus-wc-step[data-content]:after{content:attr(data-content)}.modus-wc-steps .modus-wc-step-neutral+.modus-wc-step-neutral:before,.modus-wc-steps .modus-wc-step-neutral:after{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-n,oklch(var(--n)/var(--tw-bg-opacity)));color:var(--fallback-nc,oklch(var(--nc)/var(--tw-text-opacity)))}.modus-wc-steps .modus-wc-step-primary+.modus-wc-step-primary:before,.modus-wc-steps .modus-wc-step-primary:after{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.modus-wc-steps .modus-wc-step-secondary+.modus-wc-step-secondary:before,.modus-wc-steps .modus-wc-step-secondary:after{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-s,oklch(var(--s)/var(--tw-bg-opacity)));color:var(--fallback-sc,oklch(var(--sc)/var(--tw-text-opacity)))}.modus-wc-steps .modus-wc-step-accent+.modus-wc-step-accent:before,.modus-wc-steps .modus-wc-step-accent:after{--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-a,oklch(var(--a)/var(--tw-bg-opacity)));color:var(--fallback-ac,oklch(var(--ac)/var(--tw-text-opacity)))}.modus-wc-steps .modus-wc-step-info+.modus-wc-step-info:before,.modus-wc-steps .modus-wc-step-info:after{--tw-bg-opacity:1;background-color:var(--fallback-in,oklch(var(--in)/var(--tw-bg-opacity)))}.modus-wc-steps .modus-wc-step-info:after{--tw-text-opacity:1;color:var(--fallback-inc,oklch(var(--inc)/var(--tw-text-opacity)))}.modus-wc-steps .modus-wc-step-success+.modus-wc-step-success:before,.modus-wc-steps .modus-wc-step-success:after{--tw-bg-opacity:1;background-color:var(--fallback-su,oklch(var(--su)/var(--tw-bg-opacity)))}.modus-wc-steps .modus-wc-step-success:after{--tw-text-opacity:1;color:var(--fallback-suc,oklch(var(--suc)/var(--tw-text-opacity)))}.modus-wc-steps .modus-wc-step-warning+.modus-wc-step-warning:before,.modus-wc-steps .modus-wc-step-warning:after{--tw-bg-opacity:1;background-color:var(--fallback-wa,oklch(var(--wa)/var(--tw-bg-opacity)))}.modus-wc-steps .modus-wc-step-warning:after{--tw-text-opacity:1;color:var(--fallback-wac,oklch(var(--wac)/var(--tw-text-opacity)))}.modus-wc-steps .modus-wc-step-error+.modus-wc-step-error:before,.modus-wc-steps .modus-wc-step-error:after{--tw-bg-opacity:1;background-color:var(--fallback-er,oklch(var(--er)/var(--tw-bg-opacity)))}.modus-wc-steps .modus-wc-step-error:after{--tw-text-opacity:1;color:var(--fallback-erc,oklch(var(--erc)/var(--tw-text-opacity)))}.modus-wc-tabs-lifted>.modus-wc-tab:focus-visible{border-end-end-radius:0;border-end-start-radius:0}.modus-wc-tab:is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]),.modus-wc-tab:is(input:checked){--tw-border-opacity:1;--tw-text-opacity:1;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)))}.modus-wc-tab:focus{outline:2px solid transparent;outline-offset:2px}.modus-wc-tab:focus-visible{outline:2px solid currentColor;outline-offset:-5px}.modus-wc-tab-disabled,.modus-wc-tab[disabled]{--tw-text-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)));cursor:not-allowed}.modus-wc-tabs-bordered>.modus-wc-tab{--tw-border-opacity:0.2;border-bottom-width:calc(var(--tab-border, 1px) + 1px);border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));border-style:solid}.modus-wc-tabs-lifted>.modus-wc-tab{border:var(--tab-border,1px) solid transparent;border-bottom-color:var(--tab-border-color);border-start-end-radius:var(--tab-radius,.5rem);border-start-start-radius:var(--tab-radius,.5rem);border-width:0 0 var(--tab-border,1px) 0;padding-inline-end:var(--tab-padding,1rem);padding-inline-start:var(--tab-padding,1rem);padding-top:var(--tab-border,1px)}.modus-wc-tabs-lifted>.modus-wc-tab:is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]),.modus-wc-tabs-lifted>.modus-wc-tab:is(input:checked){background-color:var(--tab-bg);border-inline-end-color:var(--tab-border-color);border-inline-start-color:var(--tab-border-color);border-top-color:var(--tab-border-color);border-width:var(--tab-border,1px) var(--tab-border,1px) 0 var(--tab-border,1px);padding-inline-end:calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));padding-bottom:var(--tab-border,1px);padding-inline-start:calc(var(--tab-padding, 1rem) - var(--tab-border, 1px));padding-top:0}.modus-wc-tabs-lifted>.modus-wc-tab:is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]):before,.modus-wc-tabs-lifted>.modus-wc-tab:is(input:checked):before{--tab-grad:calc(69% - var(--tab-border, 1px));--radius-start:radial-gradient(circle at top left,transparent var(--tab-grad),var(--tab-border-color) calc(var(--tab-grad) + 0.25px),var(--tab-border-color) calc(var(--tab-grad) + var(--tab-border, 1px)),var(--tab-bg) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.25px));--radius-end:radial-gradient(circle at top right,transparent var(--tab-grad),var(--tab-border-color) calc(var(--tab-grad) + 0.25px),var(--tab-border-color) calc(var(--tab-grad) + var(--tab-border, 1px)),var(--tab-bg) calc(var(--tab-grad) + var(--tab-border, 1px) + 0.25px));background-image:var(--radius-start),var(--radius-end);background-position:0 0,100% 0;background-repeat:no-repeat;background-size:var(--tab-radius,.5rem);bottom:0;content:"";display:block;height:var(--tab-radius,.5rem);position:absolute;width:calc(100% + var(--tab-radius, .5rem)*2);z-index:1}.modus-wc-tabs-lifted>.modus-wc-tab:is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]):first-child:before,.modus-wc-tabs-lifted>.modus-wc-tab:is(input:checked):first-child:before{background-image:var(--radius-end);background-position:100% 0}[dir=rtl] .modus-wc-tabs-lifted>.modus-wc-tab:is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]):first-child:before,[dir=rtl] .modus-wc-tabs-lifted>.modus-wc-tab:is(input:checked):first-child:before{background-image:var(--radius-start);background-position:0 0}.modus-wc-tabs-lifted>.modus-wc-tab:is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]):last-child:before,.modus-wc-tabs-lifted>.modus-wc-tab:is(input:checked):last-child:before{background-image:var(--radius-start);background-position:0 0}[dir=rtl] .modus-wc-tabs-lifted>.modus-wc-tab:is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]):last-child:before,[dir=rtl] .modus-wc-tabs-lifted>.modus-wc-tab:is(input:checked):last-child:before{background-image:var(--radius-end);background-position:100% 0}.modus-wc-tabs-lifted>.modus-wc-tab:is(input:checked)+.modus-wc-tabs-lifted .modus-wc-tab:is(input:checked):before,.modus-wc-tabs-lifted>:is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled])+.modus-wc-tabs-lifted :is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]):before{background-image:var(--radius-end);background-position:100% 0}.modus-wc-tabs-boxed{--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));padding:.25rem}.modus-wc-tabs-boxed,.modus-wc-tabs-boxed .modus-wc-tab{border-radius:var(--rounded-btn,.5rem)}.modus-wc-tabs-boxed :is(.modus-wc-tab-active,[aria-selected=true]):not(.modus-wc-tab-disabled):not([disabled]),.modus-wc-tabs-boxed :is(input:checked){--tw-bg-opacity:1;--tw-text-opacity:1;background-color:var(--fallback-p,oklch(var(--p)/var(--tw-bg-opacity)));color:var(--fallback-pc,oklch(var(--pc)/var(--tw-text-opacity)))}.modus-wc-table:where([dir=rtl],[dir=rtl] *){text-align:right}.modus-wc-table :where(th,td){padding:.75rem 1rem;vertical-align:middle}.modus-wc-table tr.modus-wc-active,.modus-wc-table tr.modus-wc-active:nth-child(2n),.modus-wc-table-zebra tbody tr:nth-child(2n){--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)))}.modus-wc-table-zebra tr.modus-wc-active,.modus-wc-table-zebra tr.modus-wc-active:nth-child(2n),.modus-wc-table-zebra-zebra tbody tr:nth-child(2n){--tw-bg-opacity:1;background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}.modus-wc-table :where(thead tr,tbody tr:not(:last-child),tbody tr:first-child:last-child){--tw-border-opacity:1;border-bottom-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));border-bottom-width:1px}.modus-wc-table :where(thead,tfoot){color:var(--fallback-bc,oklch(var(--bc)/.6));font-size:.75rem;font-weight:700;line-height:1rem;white-space:nowrap}.modus-wc-table :where(tfoot){--tw-border-opacity:1;border-top-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));border-top-width:1px}.modus-wc-textarea-bordered,.modus-wc-textarea:focus{border-color:var(--fallback-bc,oklch(var(--bc)/.2))}.modus-wc-textarea:focus{box-shadow:none;outline-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-textarea-disabled,.modus-wc-textarea:disabled,.modus-wc-textarea[disabled]{--tw-border-opacity:1;--tw-bg-opacity:1;background-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-bg-opacity)));border-color:var(--fallback-b2,oklch(var(--b2)/var(--tw-border-opacity)));color:var(--fallback-bc,oklch(var(--bc)/.4));cursor:not-allowed}.modus-wc-textarea-disabled::-moz-placeholder,.modus-wc-textarea:disabled::-moz-placeholder,.modus-wc-textarea[disabled]::-moz-placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.modus-wc-textarea-disabled::placeholder,.modus-wc-textarea:disabled::placeholder,.modus-wc-textarea[disabled]::placeholder{--tw-placeholder-opacity:0.2;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-placeholder-opacity)))}.modus-wc-toast>*{animation:toast-pop .25s ease-out}@keyframes toast-pop{0%{opacity:0;transform:scale(.9)}to{opacity:1;transform:scale(1)}}[dir=rtl] .modus-wc-toggle{--handleoffsetcalculator:calc(var(--handleoffset)*1)}.modus-wc-toggle:focus-visible{outline-color:var(--fallback-bc,oklch(var(--bc)/.2));outline-offset:2px;outline-style:solid;outline-width:2px}.modus-wc-toggle:hover{background-color:currentColor}.modus-wc-toggle:checked,.modus-wc-toggle[aria-checked=true]{--handleoffsetcalculator:var(--handleoffset);--tw-text-opacity:1;background-image:none;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}[dir=rtl] .modus-wc-toggle:checked,[dir=rtl] .modus-wc-toggle[aria-checked=true]{--handleoffsetcalculator:calc(var(--handleoffset)*-1)}.modus-wc-toggle:indeterminate{--tw-text-opacity:1;box-shadow:calc(var(--handleoffset)/2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset)/-2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset;color:var(--fallback-bc,oklch(var(--bc)/var(--tw-text-opacity)))}[dir=rtl] .modus-wc-toggle:indeterminate{box-shadow:calc(var(--handleoffset)/2) 0 0 2px var(--tglbg) inset,calc(var(--handleoffset)/-2) 0 0 2px var(--tglbg) inset,0 0 0 2px var(--tglbg) inset}.modus-wc-toggle:disabled{--tw-border-opacity:1;--togglehandleborder:0 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset,var(--handleoffsetcalculator) 0 0 3px var(--fallback-bc,oklch(var(--bc)/1)) inset;background-color:transparent;border-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-border-opacity)));cursor:not-allowed;opacity:.3}.modus-wc-glass,.modus-wc-glass.modus-wc-btn-active{backdrop-filter:blur(var(--glass-blur,40px));background-color:transparent;background-image:linear-gradient(135deg,rgb(255 255 255/var(--glass-opacity,30%)) 0,transparent 100%),linear-gradient(var(--glass-reflex-degree,100deg),rgb(255 255 255/var(--glass-reflex-opacity,10%)) 25%,transparent 25%);border:none;box-shadow:0 0 0 1px rgb(255 255 255/var(--glass-border-opacity,10%)) inset,0 0 0 2px rgb(0 0 0/5%);text-shadow:0 1px rgb(0 0 0/var(--glass-text-shadow-opacity,5%))}@media (hover:hover){.modus-wc-glass.modus-wc-btn-active{backdrop-filter:blur(var(--glass-blur,40px));background-color:transparent;background-image:linear-gradient(135deg,rgb(255 255 255/var(--glass-opacity,30%)) 0,transparent 100%),linear-gradient(var(--glass-reflex-degree,100deg),rgb(255 255 255/var(--glass-reflex-opacity,10%)) 25%,transparent 25%);border:none;box-shadow:0 0 0 1px rgb(255 255 255/var(--glass-border-opacity,10%)) inset,0 0 0 2px rgb(0 0 0/5%);text-shadow:0 1px rgb(0 0 0/var(--glass-text-shadow-opacity,5%))}}.modus-wc-badge-xs{font-size:.75rem;height:.75rem;line-height:.75rem;padding-left:.313rem;padding-right:.313rem}.modus-wc-badge-sm{font-size:.75rem;height:1rem;line-height:1rem;padding-left:.438rem;padding-right:.438rem}.modus-wc-badge-md{font-size:.875rem;height:1.25rem;line-height:1.25rem;padding-left:.563rem;padding-right:.563rem}.modus-wc-badge-lg{font-size:1rem;height:1.5rem;line-height:1.5rem;padding-left:.688rem;padding-right:.688rem}.modus-wc-btm-nav-xs>:where(.modus-wc-active){border-top-width:1px}.modus-wc-btm-nav-sm>:where(.modus-wc-active){border-top-width:2px}.modus-wc-btm-nav-md>:where(.modus-wc-active){border-top-width:2px}.modus-wc-btm-nav-lg>:where(.modus-wc-active){border-top-width:4px}.modus-wc-btn-xs{font-size:.75rem;height:1.5rem;min-height:1.5rem;padding-left:.5rem;padding-right:.5rem}.modus-wc-btn-sm{font-size:.875rem;height:2rem;min-height:2rem;padding-left:.75rem;padding-right:.75rem}.modus-wc-btn-md{font-size:.875rem;height:3rem;min-height:3rem;padding-left:1rem;padding-right:1rem}.modus-wc-btn-lg{font-size:1.125rem;height:4rem;min-height:4rem;padding-left:1.5rem;padding-right:1.5rem}.modus-wc-btn-block{width:100%}.modus-wc-btn-square:where(.modus-wc-btn-xs){height:1.5rem;padding:0;width:1.5rem}.modus-wc-btn-square:where(.modus-wc-btn-sm){height:2rem;padding:0;width:2rem}.modus-wc-btn-square:where(.modus-wc-btn-md){height:3rem;padding:0;width:3rem}.modus-wc-btn-square:where(.modus-wc-btn-lg){height:4rem;padding:0;width:4rem}.modus-wc-btn-circle:where(.modus-wc-btn-xs){border-radius:9999px;height:1.5rem;padding:0;width:1.5rem}.modus-wc-btn-circle:where(.modus-wc-btn-sm){border-radius:9999px;height:2rem;padding:0;width:2rem}.modus-wc-btn-circle:where(.modus-wc-btn-md){border-radius:9999px;height:3rem;padding:0;width:3rem}.modus-wc-btn-circle:where(.modus-wc-btn-lg){border-radius:9999px;height:4rem;padding:0;width:4rem}.modus-wc-card-side{align-items:stretch;flex-direction:row}.modus-wc-card-side :where(figure:first-child){border-end-end-radius:unset;border-end-start-radius:inherit;border-start-end-radius:unset;border-start-start-radius:inherit;overflow:hidden}.modus-wc-card-side :where(figure:last-child){border-end-end-radius:inherit;border-end-start-radius:unset;border-start-end-radius:inherit;border-start-start-radius:unset;overflow:hidden}.modus-wc-card-side figure>*{max-width:unset}:where(.modus-wc-card-side figure>*){height:100%;-o-object-fit:cover;object-fit:cover;width:100%}[type=checkbox].modus-wc-checkbox-xs{height:1rem;width:1rem}[type=checkbox].modus-wc-checkbox-sm{height:1.25rem;width:1.25rem}[type=checkbox].modus-wc-checkbox-md{height:1.5rem;width:1.5rem}[type=checkbox].modus-wc-checkbox-lg{height:2rem;width:2rem}.modus-wc-divider-horizontal{flex-direction:column}.modus-wc-divider-horizontal:after,.modus-wc-divider-horizontal:before{height:100%;width:.125rem}.modus-wc-divider-vertical{flex-direction:row}.modus-wc-divider-vertical:after,.modus-wc-divider-vertical:before{height:.125rem;width:100%}.modus-wc-file-input-xs{font-size:.75rem;height:1.5rem;line-height:1rem;line-height:1.625;padding-inline-end:.5rem}.modus-wc-file-input-xs::file-selector-button{font-size:.75rem;margin-right:.5rem}.modus-wc-file-input-sm{font-size:.875rem;height:2rem;line-height:1.25rem;line-height:2;padding-inline-end:.75rem}.modus-wc-file-input-sm::file-selector-button{font-size:.875rem;margin-right:.75rem}.modus-wc-file-input-md{font-size:.875rem;height:3rem;line-height:1.25rem;line-height:2;padding-inline-end:1rem}.modus-wc-file-input-md::file-selector-button{font-size:.875rem;margin-right:1rem}.modus-wc-file-input-lg{font-size:1.125rem;height:4rem;line-height:1.75rem;line-height:2;padding-inline-end:1.5rem}.modus-wc-file-input-lg::file-selector-button{font-size:1.125rem;margin-right:1.5rem}.modus-wc-input-xs{font-size:.75rem;height:1.5rem;line-height:1rem;line-height:1.625;padding-left:.5rem;padding-right:.5rem}.modus-wc-input-md{font-size:.875rem;height:3rem;line-height:1.25rem;line-height:2;padding-left:1rem;padding-right:1rem}.modus-wc-input-lg{font-size:1.125rem;height:4rem;line-height:1.75rem;line-height:2;padding-left:1.5rem;padding-right:1.5rem}.modus-wc-input-sm{font-size:.875rem;height:2rem;line-height:2rem;padding-left:.75rem;padding-right:.75rem}.modus-wc-join.modus-wc-join-vertical{flex-direction:column}.modus-wc-join.modus-wc-join-vertical .modus-wc-join-item:first-child:not(:last-child),.modus-wc-join.modus-wc-join-vertical :first-child:not(:last-child) .modus-wc-join-item{border-end-end-radius:0;border-end-start-radius:0;border-start-end-radius:inherit;border-start-start-radius:inherit}.modus-wc-join.modus-wc-join-vertical .modus-wc-join-item:last-child:not(:first-child),.modus-wc-join.modus-wc-join-vertical :last-child:not(:first-child) .modus-wc-join-item{border-end-end-radius:inherit;border-end-start-radius:inherit;border-start-end-radius:0;border-start-start-radius:0}.modus-wc-join.modus-wc-join-horizontal{flex-direction:row}.modus-wc-join.modus-wc-join-horizontal .modus-wc-join-item:first-child:not(:last-child),.modus-wc-join.modus-wc-join-horizontal :first-child:not(:last-child) .modus-wc-join-item{border-end-end-radius:0;border-end-start-radius:inherit;border-start-end-radius:0;border-start-start-radius:inherit}.modus-wc-join.modus-wc-join-horizontal .modus-wc-join-item:last-child:not(:first-child),.modus-wc-join.modus-wc-join-horizontal :last-child:not(:first-child) .modus-wc-join-item{border-end-end-radius:inherit;border-end-start-radius:0;border-start-end-radius:inherit;border-start-start-radius:0}.modus-wc-menu-horizontal{display:inline-flex;flex-direction:row}.modus-wc-menu-horizontal>li:not(.modus-wc-menu-title)>details>ul{position:absolute}.modus-wc-modal-top{place-items:start}.modus-wc-modal-bottom{place-items:end}[type=radio].modus-wc-radio-xs{height:1rem;width:1rem}[type=radio].modus-wc-radio-sm{height:1.25rem;width:1.25rem}[type=radio].modus-wc-radio-md{height:1.5rem;width:1.5rem}[type=radio].modus-wc-radio-lg{height:2rem;width:2rem}.modus-wc-range-xs{height:1rem}.modus-wc-range-xs::-webkit-slider-runnable-track{height:.25rem}.modus-wc-range-xs::-moz-range-track{height:.25rem}.modus-wc-range-xs::-webkit-slider-thumb{--filler-offset:0.4rem;height:1rem;width:1rem}.modus-wc-range-xs::-moz-range-thumb{--filler-offset:0.4rem;height:1rem;width:1rem}.modus-wc-range-sm{height:1.25rem}.modus-wc-range-sm::-webkit-slider-runnable-track{height:.25rem}.modus-wc-range-sm::-moz-range-track{height:.25rem}.modus-wc-range-sm::-webkit-slider-thumb{--filler-offset:0.5rem;height:1.25rem;width:1.25rem}.modus-wc-range-sm::-moz-range-thumb{--filler-offset:0.5rem;height:1.25rem;width:1.25rem}.modus-wc-range-md{height:1.5rem}.modus-wc-range-md::-webkit-slider-runnable-track{height:.5rem}.modus-wc-range-md::-moz-range-track{height:.5rem}.modus-wc-range-md::-webkit-slider-thumb{--filler-offset:0.6rem;height:1.5rem;width:1.5rem}.modus-wc-range-md::-moz-range-thumb{--filler-offset:0.6rem;height:1.5rem;width:1.5rem}.modus-wc-range-lg{height:2rem}.modus-wc-range-lg::-webkit-slider-runnable-track{height:1rem}.modus-wc-range-lg::-moz-range-track{height:1rem}.modus-wc-range-lg::-webkit-slider-thumb{--filler-offset:1rem;height:2rem;width:2rem}.modus-wc-range-lg::-moz-range-thumb{--filler-offset:1rem;height:2rem;width:2rem}.modus-wc-rating-sm input{height:1rem;width:1rem}.modus-wc-rating-md input{height:1.5rem;width:1.5rem}.modus-wc-rating-lg input{height:2.5rem;width:2.5rem}.modus-wc-rating-half.modus-wc-rating-xs input:not(.modus-wc-rating-hidden){width:.375rem}.modus-wc-rating-half.modus-wc-rating-sm input:not(.modus-wc-rating-hidden){width:.5rem}.modus-wc-rating-half.modus-wc-rating-md input:not(.modus-wc-rating-hidden){width:.75rem}.modus-wc-rating-half.modus-wc-rating-lg input:not(.modus-wc-rating-hidden){width:1.25rem}.modus-wc-select-md{font-size:.875rem;height:3rem;line-height:1.25rem;line-height:2;min-height:3rem;padding-left:1rem;padding-right:2.5rem}[dir=rtl] .modus-wc-select-md{padding-left:2.5rem;padding-right:1rem}.modus-wc-select-lg{font-size:1.125rem;height:4rem;line-height:1.75rem;line-height:2;min-height:4rem;padding-left:1.5rem;padding-right:2rem}[dir=rtl] .modus-wc-select-lg{padding-left:2rem;padding-right:1.5rem}.modus-wc-select-sm{font-size:.875rem;height:2rem;line-height:2rem;min-height:2rem;padding-left:.75rem;padding-right:2rem}[dir=rtl] .modus-wc-select-sm{padding-left:2rem;padding-right:.75rem}.modus-wc-select-xs{font-size:.75rem;height:1.5rem;line-height:1rem;line-height:1.625;min-height:1.5rem;padding-left:.5rem;padding-right:2rem}[dir=rtl] .modus-wc-select-xs{padding-left:2rem;padding-right:.5rem}.modus-wc-steps-horizontal .modus-wc-step{display:grid;grid-template-columns:repeat(1,minmax(0,1fr));grid-template-rows:repeat(2,minmax(0,1fr));place-items:center;text-align:center}.modus-wc-steps-vertical{grid-auto-flow:row;grid-auto-rows:1fr}.modus-wc-steps-vertical .modus-wc-step{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));grid-template-rows:repeat(1,minmax(0,1fr))}.modus-wc-tabs-md :where(.modus-wc-tab){--tab-padding:1rem;font-size:.875rem;height:2rem;line-height:1.25rem;line-height:2}.modus-wc-tabs-lg :where(.modus-wc-tab){--tab-padding:1.25rem;font-size:1.125rem;height:3rem;line-height:1.75rem;line-height:2}.modus-wc-tabs-sm :where(.modus-wc-tab){--tab-padding:0.75rem;font-size:.875rem;height:1.5rem;line-height:.75rem}.modus-wc-tabs-xs :where(.modus-wc-tab){--tab-padding:0.5rem;font-size:.75rem;height:1.25rem;line-height:.75rem}.modus-wc-textarea-xs{font-size:.75rem;line-height:1rem;line-height:1.625;padding:.25rem .5rem}.modus-wc-textarea-sm{font-size:.875rem;line-height:2rem;padding:.25rem .75rem}.modus-wc-textarea-md{font-size:.875rem;line-height:1.25rem;line-height:2;padding:.75rem 1rem}.modus-wc-textarea-lg{font-size:1.125rem;line-height:1.75rem;line-height:2;padding:1rem 1.5rem}:where(.modus-wc-toast){--tw-translate-x:0px;--tw-translate-y:0px;bottom:0;inset-inline-end:0;inset-inline-start:auto;top:auto;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-toast:where(.modus-wc-toast-start){--tw-translate-x:0px;inset-inline-end:auto;inset-inline-start:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-toast:where(.modus-wc-toast-center){--tw-translate-x:-50%;inset-inline-end:50%;inset-inline-start:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-toast:where(.modus-wc-toast-center):where([dir=rtl],[dir=rtl] *){--tw-translate-x:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-toast:where(.modus-wc-toast-end){--tw-translate-x:0px;inset-inline-end:0;inset-inline-start:auto;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-toast:where(.modus-wc-toast-bottom){--tw-translate-y:0px;bottom:0;top:auto;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-toast:where(.modus-wc-toast-middle){--tw-translate-y:-50%;bottom:auto;top:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-toast:where(.modus-wc-toast-top){--tw-translate-y:0px;bottom:auto;top:0;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}[type=checkbox].modus-wc-toggle-xs{--handleoffset:0.5rem;height:1rem;width:1.5rem}[type=checkbox].modus-wc-toggle-sm{--handleoffset:0.75rem;height:1.25rem;width:2rem}[type=checkbox].modus-wc-toggle-md{--handleoffset:1.5rem;height:1.5rem;width:3rem}[type=checkbox].modus-wc-toggle-lg{--handleoffset:2rem;height:2rem;width:4rem}.modus-wc-tooltip{--tooltip-offset:calc(100% + 1px + var(--tooltip-tail, 0px))}.modus-wc-tooltip:before{--tw-content:attr(data-tip);content:var(--tw-content);pointer-events:none;position:absolute;z-index:1}.modus-wc-tooltip-top:before,.modus-wc-tooltip:before{bottom:var(--tooltip-offset);left:50%;right:auto;top:auto;transform:translateX(-50%)}.modus-wc-tooltip-bottom:before{bottom:auto;left:50%;right:auto;top:var(--tooltip-offset);transform:translateX(-50%)}.modus-wc-tooltip-left:before{bottom:auto;left:auto;right:var(--tooltip-offset);top:50%;transform:translateY(-50%)}.modus-wc-tooltip-right:before{bottom:auto;left:var(--tooltip-offset);right:auto;top:50%;transform:translateY(-50%)}.modus-wc-avatar.modus-wc-online:before{background-color:var(--fallback-su,oklch(var(--su)/var(--tw-bg-opacity)))}.modus-wc-avatar.modus-wc-offline:before,.modus-wc-avatar.modus-wc-online:before{--tw-bg-opacity:1;border-radius:9999px;content:"";display:block;height:15%;outline-color:var(--fallback-b1,oklch(var(--b1)/1));outline-style:solid;outline-width:2px;position:absolute;right:7%;top:7%;width:15%;z-index:10}.modus-wc-avatar.modus-wc-offline:before{background-color:var(--fallback-b3,oklch(var(--b3)/var(--tw-bg-opacity)))}.modus-wc-card-compact .modus-wc-card-body{font-size:.875rem;line-height:1.25rem;padding:1rem}.modus-wc-card-compact .modus-wc-card-title{margin-bottom:.25rem}.modus-wc-card-normal .modus-wc-card-body{font-size:1rem;line-height:1.5rem;padding:var(--padding-card,2rem)}.modus-wc-card-normal .modus-wc-card-title{margin-bottom:.75rem}.modus-wc-divider-horizontal{height:auto;margin:0 1rem;width:1rem}.modus-wc-divider-vertical{height:1rem;margin:1rem 0;width:auto}.modus-wc-join.modus-wc-join-vertical>:where(:not(:first-child)){margin-left:0;margin-right:0;margin-top:-1px}.modus-wc-join.modus-wc-join-vertical>:where(:not(:first-child)):is(.modus-wc-btn){margin-top:calc(var(--border-btn)*-1)}.modus-wc-join.modus-wc-join-horizontal>:where(:not(:first-child)){margin-bottom:0;margin-top:0;margin-inline-start:-1px}.modus-wc-join.modus-wc-join-horizontal>:where(:not(:first-child)):is(.modus-wc-btn){margin-inline-start:calc(var(--border-btn)*-1);margin-top:0}.modus-wc-menu-horizontal>li:not(.modus-wc-menu-title)>details>ul{margin-inline-start:0;margin-top:1rem;padding-bottom:.5rem;padding-inline-end:.5rem;padding-top:.5rem}.modus-wc-menu-horizontal>li>details>ul:before{content:none}:where(.modus-wc-menu-horizontal>li:not(.modus-wc-menu-title)>details>ul){--tw-bg-opacity:1;--tw-shadow:0 20px 25px -5px rgba(0,0,0,.1),0 8px 10px -6px rgba(0,0,0,.1);--tw-shadow-colored:0 20px 25px -5px var(--tw-shadow-color),0 8px 10px -6px var(--tw-shadow-color);background-color:var(--fallback-b1,oklch(var(--b1)/var(--tw-bg-opacity)));border-radius:var(--rounded-box,1rem);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.modus-wc-menu-xs :where(li:not(.modus-wc-menu-title)>:not(ul,details,.modus-wc-menu-title)),.modus-wc-menu-xs :where(li:not(.modus-wc-menu-title)>details>summary:not(.modus-wc-menu-title)){border-radius:.25rem;font-size:.75rem;line-height:1rem;padding:.25rem .5rem}.modus-wc-menu-xs .modus-wc-menu-title{padding:.25rem .5rem}.modus-wc-menu-sm :where(li:not(.modus-wc-menu-title)>:not(ul,details,.modus-wc-menu-title)),.modus-wc-menu-sm :where(li:not(.modus-wc-menu-title)>details>summary:not(.modus-wc-menu-title)){border-radius:var(--rounded-btn,.5rem);font-size:.875rem;line-height:1.25rem;padding:.25rem .75rem}.modus-wc-menu-sm .modus-wc-menu-title{padding:.5rem .75rem}.modus-wc-menu-md :where(li:not(.modus-wc-menu-title)>:not(ul,details,.modus-wc-menu-title)),.modus-wc-menu-md :where(li:not(.modus-wc-menu-title)>details>summary:not(.modus-wc-menu-title)){border-radius:var(--rounded-btn,.5rem);font-size:.875rem;line-height:1.25rem;padding:.5rem 1rem}.modus-wc-menu-md .modus-wc-menu-title{padding:.5rem 1rem}.modus-wc-menu-lg :where(li:not(.modus-wc-menu-title)>:not(ul,details,.modus-wc-menu-title)),.modus-wc-menu-lg :where(li:not(.modus-wc-menu-title)>details>summary:not(.modus-wc-menu-title)){border-radius:var(--rounded-btn,.5rem);font-size:1.125rem;line-height:1.75rem;padding:.75rem 1.5rem}.modus-wc-menu-lg .modus-wc-menu-title{padding:.75rem 1.5rem}.modus-wc-modal-top :where(.modus-wc-modal-box){--tw-translate-y:-2.5rem;--tw-scale-x:1;--tw-scale-y:1;border-bottom-left-radius:var(--rounded-box,1rem);border-bottom-right-radius:var(--rounded-box,1rem);border-top-left-radius:0;border-top-right-radius:0;max-width:none;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:100%}.modus-wc-modal-middle :where(.modus-wc-modal-box){--tw-translate-y:0px;--tw-scale-x:.9;--tw-scale-y:.9;border-bottom-left-radius:var(--rounded-box,1rem);border-bottom-right-radius:var(--rounded-box,1rem);border-top-left-radius:var(--rounded-box,1rem);border-top-right-radius:var(--rounded-box,1rem);max-width:32rem;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:91.666667%}.modus-wc-modal-bottom :where(.modus-wc-modal-box){--tw-translate-y:2.5rem;--tw-scale-x:1;--tw-scale-y:1;border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:var(--rounded-box,1rem);border-top-right-radius:var(--rounded-box,1rem);max-width:none;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:100%}.modus-wc-steps-horizontal .modus-wc-step{grid-template-columns:auto;grid-template-rows:40px 1fr;min-width:4rem}.modus-wc-steps-horizontal .modus-wc-step:before{--tw-translate-x:0px;--tw-translate-y:0px;content:"";height:.5rem;margin-inline-start:-100%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:100%}.modus-wc-steps-horizontal .modus-wc-step:where([dir=rtl],[dir=rtl] *):before{--tw-translate-x:0px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-steps-vertical .modus-wc-step{gap:.5rem;grid-template-columns:40px 1fr;grid-template-rows:auto;justify-items:start;min-height:4rem}.modus-wc-steps-vertical .modus-wc-step:before{--tw-translate-x:-50%;--tw-translate-y:-50%;height:100%;margin-inline-start:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));width:.5rem}.modus-wc-steps-vertical .modus-wc-step:where([dir=rtl],[dir=rtl] *):before{--tw-translate-x:50%;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.modus-wc-tooltip{--tooltip-tail:0.1875rem;--tooltip-color:var(--fallback-n,oklch(var(--n)/1));--tooltip-text-color:var(--fallback-nc,oklch(var(--nc)/1));--tooltip-tail-offset:calc(100% + 0.0625rem - var(--tooltip-tail));display:inline-block;position:relative;text-align:center}.modus-wc-tooltip:after,.modus-wc-tooltip:before{opacity:0;transition-delay:.1s;transition-duration:.2s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.modus-wc-tooltip:after{border-style:solid;border-width:var(--tooltip-tail,0);content:"";display:block;height:0;position:absolute;width:0}.modus-wc-tooltip:before{background-color:var(--tooltip-color);border-radius:.25rem;color:var(--tooltip-text-color);font-size:.875rem;line-height:1.25rem;max-width:20rem;padding:.25rem .5rem;white-space:normal;width:-moz-max-content;width:max-content}.modus-wc-tooltip.modus-wc-tooltip-open:after,.modus-wc-tooltip.modus-wc-tooltip-open:before,.modus-wc-tooltip:hover:after,.modus-wc-tooltip:hover:before{opacity:1;transition-delay:75ms}.modus-wc-tooltip:has(:focus-visible):after,.modus-wc-tooltip:has(:focus-visible):before{opacity:1;transition-delay:75ms}.modus-wc-tooltip:not([data-tip]):hover:after,.modus-wc-tooltip:not([data-tip]):hover:before{opacity:0;visibility:hidden}.modus-wc-tooltip-top:after,.modus-wc-tooltip:after{border-color:var(--tooltip-color) transparent transparent transparent;bottom:var(--tooltip-tail-offset);left:50%;right:auto;top:auto;transform:translateX(-50%)}.modus-wc-tooltip-bottom:after{border-color:transparent transparent var(--tooltip-color) transparent;bottom:auto;left:50%;right:auto;top:var(--tooltip-tail-offset);transform:translateX(-50%)}.modus-wc-tooltip-left:after{border-color:transparent transparent transparent var(--tooltip-color);bottom:auto;left:auto;right:calc(var(--tooltip-tail-offset) + .0625rem);top:50%;transform:translateY(-50%)}.modus-wc-tooltip-right:after{border-color:transparent var(--tooltip-color) transparent transparent;bottom:auto;left:calc(var(--tooltip-tail-offset) + .0625rem);right:auto;top:50%;transform:translateY(-50%)}.modus-wc-sr-only{clip:rect(0,0,0,0);border-width:0;height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;white-space:nowrap;width:1px}.modus-wc-collapse{visibility:collapse}.modus-wc-col-span-2{grid-column:span 2/span 2}.modus-wc-col-start-1{grid-column-start:1}.modus-wc-col-start-2{grid-column-start:2}.modus-wc-row-start-1{grid-row-start:1}.modus-wc-flex{display:flex}.modus-wc-inline-flex{display:inline-flex}.modus-wc-table{display:table}.modus-wc-inline-grid{display:inline-grid}.modus-wc-min-h-4{min-height:1rem}.modus-wc-w-12{width:3rem}.modus-wc-w-16{width:4rem}.modus-wc-w-20{width:5rem}.modus-wc-w-24{width:6rem}.modus-wc-w-8{width:2rem}.modus-wc-w-full{width:100%}.modus-wc-grow{flex-grow:1}.modus-wc-cursor-default{cursor:default}.modus-wc-cursor-pointer{cursor:pointer}.modus-wc-place-items-center{place-items:center}.modus-wc-items-center{align-items:center}.modus-wc-justify-end{justify-content:flex-end}.modus-wc-justify-center{justify-content:center}.modus-wc-justify-between{justify-content:space-between}.modus-wc-gap-1{gap:.25rem}.modus-wc-overflow-x-auto{overflow-x:auto}.modus-wc-rounded-full{border-radius:9999px}.modus-wc-rounded-lg{border-radius:.5rem}.modus-wc-border{border-width:1px}.modus-wc-bg-base-content{--tw-bg-opacity:1;background-color:var(--fallback-bc,oklch(var(--bc)/var(--tw-bg-opacity,1)))}.modus-wc-fill-base-100{fill:var(--fallback-b1,oklch(var(--b1)/1))}.modus-wc-stroke-base-100{stroke:var(--fallback-b1,oklch(var(--b1)/1))}.modus-wc-py-4{padding-bottom:1rem;padding-top:1rem}.modus-wc-pb-2{padding-bottom:.5rem}.modus-wc-pb-3{padding-bottom:.75rem}.modus-wc-pb-4{padding-bottom:1rem}.modus-wc-pb-5{padding-bottom:1.25rem}.modus-wc-pl-2{padding-left:.5rem}.modus-wc-pl-3{padding-left:.75rem}.modus-wc-pl-4{padding-left:1rem}.modus-wc-pl-5{padding-left:1.25rem}.modus-wc-pt-2{padding-top:.5rem}.modus-wc-pt-3{padding-top:.75rem}.modus-wc-pt-4{padding-top:1rem}.modus-wc-pt-5{padding-top:1.25rem}.modus-wc-text-2xl{font-size:1.5rem;line-height:2rem}.modus-wc-text-3xl{font-size:1.875rem;line-height:2.25rem}.modus-wc-text-4xl{font-size:2.25rem;line-height:2.5rem}.modus-wc-text-5xl{font-size:3rem;line-height:1}.modus-wc-text-6xl{font-size:3.75rem;line-height:1}.modus-wc-text-7xl{font-size:4.5rem;line-height:1}.modus-wc-text-8xl{font-size:6rem;line-height:1}.modus-wc-text-9xl{font-size:8rem;line-height:1}.modus-wc-text-base{font-size:1rem;line-height:1.5rem}.modus-wc-text-lg{font-size:1.125rem;line-height:1.75rem}.modus-wc-text-sm{font-size:.875rem;line-height:1.25rem}.modus-wc-text-xl{font-size:1.25rem;line-height:1.75rem}.modus-wc-text-xs{font-size:.75rem;line-height:1rem}.modus-wc-font-bold{font-weight:700}.modus-wc-font-light{font-weight:300}.modus-wc-font-normal{font-weight:400}.modus-wc-font-semibold{font-weight:600}.modus-wc-text-accent{--tw-text-opacity:1;color:var(--fallback-a,oklch(var(--a)/var(--tw-text-opacity,1)))}.modus-wc-text-error{--tw-text-opacity:1;color:var(--fallback-er,oklch(var(--er)/var(--tw-text-opacity,1)))}.modus-wc-text-info{--tw-text-opacity:1;color:var(--fallback-in,oklch(var(--in)/var(--tw-text-opacity,1)))}.modus-wc-text-neutral{--tw-text-opacity:1;color:var(--fallback-n,oklch(var(--n)/var(--tw-text-opacity,1)))}.modus-wc-text-primary{--tw-text-opacity:1;color:var(--fallback-p,oklch(var(--p)/var(--tw-text-opacity,1)))}.modus-wc-text-secondary{--tw-text-opacity:1;color:var(--fallback-s,oklch(var(--s)/var(--tw-text-opacity,1)))}.modus-wc-text-success{--tw-text-opacity:1;color:var(--fallback-su,oklch(var(--su)/var(--tw-text-opacity,1)))}.modus-wc-text-warning{--tw-text-opacity:1;color:var(--fallback-wa,oklch(var(--wa)/var(--tw-text-opacity,1)))}.modus-wc-no-underline{text-decoration-line:none}@supports not (color:oklch(0% 0 0)){:root,[data-theme=modus-modern-light]{--fallback-p:#0063a3;--fallback-pc:#fff;--fallback-s:#fbad26;--fallback-sc:#000;--fallback-a:#6a6e79;--fallback-ac:#fff;--fallback-n:#cbcdd6;--fallback-nc:#252a2e;--fallback-b1:#fff;--fallback-b2:#cbcdd6;--fallback-b3:#b7b9c3;--fallback-in:#0063a3;--fallback-inc:#fff;--fallback-su:#1e8a44;--fallback-suc:#fff;--fallback-wa:#e49325;--fallback-wac:#252a2e;--fallback-er:#da212c;--fallback-erc:#fff}[data-theme=modus-modern-dark]{--fallback-p:#019aeb;--fallback-pc:#000;--fallback-s:#fec157;--fallback-sc:#000;--fallback-a:#6a6e79;--fallback-ac:#fff;--fallback-n:#353a40;--fallback-nc:#fff;--fallback-b1:#171c1e;--fallback-b2:#353a40;--fallback-b3:#464b52;--fallback-in:#217cbb;--fallback-inc:#fff;--fallback-su:#4ea646;--fallback-suc:#000;--fallback-wa:#fec157;--fallback-wac:#252a2e;--fallback-er:#e86363;--fallback-erc:#000}[data-theme=modus-classic-light]{--fallback-p:#0063a3;--fallback-pc:#fff;--fallback-s:#6a6e79;--fallback-sc:#fff;--fallback-a:#6a6e79;--fallback-ac:#fff;--fallback-n:#cbcdd6;--fallback-nc:#252a2e;--fallback-b1:#fff;--fallback-b2:#cbcdd6;--fallback-b3:#b7b9c3;--fallback-in:#0063a3;--fallback-inc:#fff;--fallback-su:#1e8a44;--fallback-suc:#fff;--fallback-wa:#fbad26;--fallback-wac:#252a2e;--fallback-er:#da212c;--fallback-erc:#fff}[data-theme=modus-classic-dark]{--fallback-p:#0063a3;--fallback-pc:#fff;--fallback-s:#fbad26;--fallback-sc:#252a2e;--fallback-a:#6a6e79;--fallback-ac:#fff;--fallback-n:#353a40;--fallback-nc:#fff;--fallback-b1:#171c1e;--fallback-b2:#353a40;--fallback-b3:#464b52;--fallback-in:#0063a3;--fallback-inc:#fff;--fallback-su:#1e8a44;--fallback-suc:#fff;--fallback-wa:#fbad26;--fallback-wac:#252a2e;--fallback-er:#da212c;--fallback-erc:#fff}[data-theme=connect-light]{--fallback-p:#005f9e;--fallback-pc:#fff;--fallback-s:#6a6976;--fallback-sc:#fff;--fallback-a:#6a6e79;--fallback-ac:#fff;--fallback-n:#cbcdd6;--fallback-nc:#252a2e;--fallback-b1:#fff;--fallback-b2:#cbcdd6;--fallback-b3:#b7b9c3;--fallback-in:#0063a3;--fallback-inc:#fff;--fallback-su:#72a544;--fallback-suc:#fff;--fallback-wa:#ffbe00;--fallback-wac:#252a2e;--fallback-er:#d52a33;--fallback-erc:#fff}[data-theme=connect-dark]{--fallback-p:#019aeb;--fallback-pc:#000;--fallback-s:#f1f1f6;--fallback-sc:#000;--fallback-a:#6a6e79;--fallback-ac:#fff;--fallback-n:#353a40;--fallback-nc:#fff;--fallback-b1:#171c1e;--fallback-b2:#353a40;--fallback-b3:#464b52;--fallback-in:#217cbb;--fallback-inc:#fff;--fallback-su:#4ea646;--fallback-suc:#000;--fallback-wa:#fec157;--fallback-wac:#252a2e;--fallback-er:#e86363;--fallback-erc:#000}[data-theme=modus-modern-light] .modus-wc-btn-primary.modus-wc-btn-filled:hover{background-color:#217cbb}[data-theme=modus-modern-light] .modus-wc-btn-primary.modus-wc-btn-filled:active,[data-theme=modus-modern-light] .modus-wc-btn-primary.modus-wc-btn-filled[aria-pressed=true]{background-color:#0e416c}[data-theme=modus-modern-light] .modus-wc-btn-secondary.modus-wc-btn-filled:hover{background-color:#fec157}[data-theme=modus-modern-light] .modus-wc-btn-secondary.modus-wc-btn-filled:active,[data-theme=modus-modern-light] .modus-wc-btn-secondary.modus-wc-btn-filled[aria-pressed=true]{background-color:#e49325}[data-theme=modus-modern-light] .modus-wc-btn-neutral.modus-wc-btn-filled:hover{background-color:#e0e1e9}[data-theme=modus-modern-light] .modus-wc-btn-neutral.modus-wc-btn-filled:active,[data-theme=modus-modern-light] .modus-wc-btn-neutral.modus-wc-btn-filled[aria-pressed=true]{background-color:#b7b9c3}[data-theme=modus-modern-light] .modus-wc-btn-warning.modus-wc-btn-filled:hover{background-color:#fbad26}[data-theme=modus-modern-light] .modus-wc-btn-warning.modus-wc-btn-filled:active,[data-theme=modus-modern-light] .modus-wc-btn-warning.modus-wc-btn-filled[aria-pressed=true]{background-color:#c97d1e}[data-theme=modus-modern-light] .modus-wc-btn-error.modus-wc-btn-filled:hover{background-color:#e86363}[data-theme=modus-modern-light] .modus-wc-btn-error.modus-wc-btn-filled:active,[data-theme=modus-modern-light] .modus-wc-btn-error.modus-wc-btn-filled[aria-pressed=true]{background-color:#ab1f26}[data-theme=modus-modern-light] .modus-wc-btn-primary.modus-wc-btn-outline:hover{background-color:#dcedf9;border-color:#217cbb;color:#217cbb}[data-theme=modus-modern-light] .modus-wc-btn-primary.modus-wc-btn-outline:active,[data-theme=modus-modern-light] .modus-wc-btn-primary.modus-wc-btn-outline[aria-pressed=true]{background-color:rgba(0,99,163,.18);border-color:#0e416c;color:#0e416c}[data-theme=modus-modern-light] .modus-wc-btn-secondary.modus-wc-btn-outline:hover{background-color:#fff5e4;border-color:#fec157;color:#fec157}[data-theme=modus-modern-light] .modus-wc-btn-secondary.modus-wc-btn-outline:active,[data-theme=modus-modern-light] .modus-wc-btn-secondary.modus-wc-btn-outline[aria-pressed=true]{background-color:#fff5e4;border-color:#e49325;color:#e49325}[data-theme=modus-modern-light] .modus-wc-btn-neutral.modus-wc-btn-outline:hover{background-color:#e0e1e9}[data-theme=modus-modern-light] .modus-wc-btn-neutral.modus-wc-btn-outline:active,[data-theme=modus-modern-light] .modus-wc-btn-neutral.modus-wc-btn-outline[aria-pressed=true]{background-color:#cbcdd6}[data-theme=modus-modern-light] .modus-wc-btn-warning.modus-wc-btn-outline:hover{border-color:#fbad26;color:#fbad26}[data-theme=modus-modern-light] .modus-wc-btn-warning.modus-wc-btn-outline:active,[data-theme=modus-modern-light] .modus-wc-btn-warning.modus-wc-btn-outline[aria-pressed=true]{background-color:#fff5e4;border-color:#e49325;color:#e49325}[data-theme=modus-modern-light] .modus-wc-btn-error.modus-wc-btn-outline:hover{background-color:#fbd4d7;border-color:#e86363;color:#e86363}[data-theme=modus-modern-light] .modus-wc-btn-error.modus-wc-btn-outline:active,[data-theme=modus-modern-light] .modus-wc-btn-error.modus-wc-btn-outline[aria-pressed=true]{background-color:#fbd4d7;border-color:#ab1f26;color:#ab1f26}[data-theme=modus-modern-dark] .modus-wc-btn-primary.modus-wc-btn-filled:hover{background-color:#217cbb}[data-theme=modus-modern-dark] .modus-wc-btn-primary.modus-wc-btn-filled:active,[data-theme=modus-modern-dark] .modus-wc-btn-primary.modus-wc-btn-filled[aria-pressed=true]{background-color:#0e416c}[data-theme=modus-modern-dark] .modus-wc-btn-secondary.modus-wc-btn-filled:hover{background-color:#fbad26}[data-theme=modus-modern-dark] .modus-wc-btn-secondary.modus-wc-btn-filled:active,[data-theme=modus-modern-dark] .modus-wc-btn-secondary.modus-wc-btn-filled[aria-pressed=true]{background-color:#e49325}[data-theme=modus-modern-dark] .modus-wc-btn-neutral.modus-wc-btn-filled:hover{background-color:#464b52}[data-theme=modus-modern-dark] .modus-wc-btn-neutral.modus-wc-btn-filled:active,[data-theme=modus-modern-dark] .modus-wc-btn-neutral.modus-wc-btn-filled[aria-pressed=true]{background-color:#171c1e}[data-theme=modus-modern-dark] .modus-wc-btn-warning.modus-wc-btn-filled:hover{background-color:#fbad26}[data-theme=modus-modern-dark] .modus-wc-btn-warning.modus-wc-btn-filled:active,[data-theme=modus-modern-dark] .modus-wc-btn-warning.modus-wc-btn-filled[aria-pressed=true]{background-color:#e49325}[data-theme=modus-modern-dark] .modus-wc-btn-error.modus-wc-btn-filled:hover{background-color:#da212c}[data-theme=modus-modern-dark] .modus-wc-btn-error.modus-wc-btn-filled:active,[data-theme=modus-modern-dark] .modus-wc-btn-error.modus-wc-btn-filled[aria-pressed=true]{background-color:#ab1f26}[data-theme=modus-modern-dark] .modus-wc-btn-primary.modus-wc-btn-outline:hover{background-color:rgba(1,154,235,.12)}[data-theme=modus-modern-dark] .modus-wc-btn-primary.modus-wc-btn-outline:active,[data-theme=modus-modern-dark] .modus-wc-btn-primary.modus-wc-btn-outline[aria-pressed=true]{background-color:rgba(1,154,235,.3)}[data-theme=modus-modern-dark] .modus-wc-btn-secondary.modus-wc-btn-outline:hover{background-color:rgba(254,193,87,.12)}[data-theme=modus-modern-dark] .modus-wc-btn-secondary.modus-wc-btn-outline:active,[data-theme=modus-modern-dark] .modus-wc-btn-secondary.modus-wc-btn-outline[aria-pressed=true]{background-color:rgba(254,193,87,.3)}[data-theme=modus-modern-dark] .modus-wc-btn-neutral.modus-wc-btn-outline:hover{background-color:rgba(203,205,214,.12)}[data-theme=modus-modern-dark] .modus-wc-btn-neutral.modus-wc-btn-outline:active,[data-theme=modus-modern-dark] .modus-wc-btn-neutral.modus-wc-btn-outline[aria-pressed=true]{background-color:rgba(203,205,214,.3)}[data-theme=modus-modern-dark] .modus-wc-btn-warning.modus-wc-btn-outline:hover{background-color:rgba(254,193,87,.12);border-color:#fbad26;color:#fbad26}[data-theme=modus-modern-dark] .modus-wc-btn-warning.modus-wc-btn-outline:active,[data-theme=modus-modern-dark] .modus-wc-btn-warning.modus-wc-btn-outline[aria-pressed=true]{background-color:rgba(254,193,87,.3);border-color:#e49325;color:#e49325}[data-theme=modus-modern-dark] .modus-wc-btn-error.modus-wc-btn-outline:hover{background-color:rgba(232,99,99,.12);border-color:#da212c;color:#da212c}[data-theme=modus-modern-dark] .modus-wc-btn-error.modus-wc-btn-outline:active,[data-theme=modus-modern-dark] .modus-wc-btn-error.modus-wc-btn-outline[aria-pressed=true]{background-color:rgba(232,99,99,.3);border-color:#ab1f26;color:#ab1f26}}`,u=`@supports (color: oklch(0% 0 0)) {
  :root {
    --fallback-p: var(--modus-wc-color-primary);
    --fallback-pc: var(--modus-wc-color-primary-content);
    --fallback-s: var(--modus-wc-color-secondary);
    --fallback-sc: var(--modus-wc-color-secondary-content);
    --fallback-a: var(--modus-wc-color-accent);
    --fallback-ac: var(--modus-wc-color-accent-content);
    --fallback-n: var(--modus-wc-color-neutral);
    --fallback-nc: var(--modus-wc-color-neutral-content);
    --fallback-b1: var(--modus-wc-color-base-100);
    --fallback-b2: var(--modus-wc-color-base-200);
    --fallback-b3: var(--modus-wc-color-base-300);
    --fallback-in: var(--modus-wc-color-info);
    --fallback-inc: var(--modus-wc-color-info-content);
    --fallback-su: var(--modus-wc-color-success);
    --fallback-suc: var(--modus-wc-color-success-content);
    --fallback-wa: var(--modus-wc-color-warning);
    --fallback-wac: var(--modus-wc-color-warning-content);
    --fallback-er: var(--modus-wc-color-error);
    --fallback-erc: var(--modus-wc-color-error-content);
  }
}

/* Universal resets */
*,
*::before,
*::after {
  box-sizing: border-box;
  font-family: var(--modus-wc-font-family), sans-serif;
}

body {
  background-color: var(--modus-wc-color-base-page);
}

/*
  Modal Scrollbar Behavior Override
  Tailwind/DaisyUI applies \`scrollbar-gutter: stable\` to :root when a modal is open
  (e.g., \`:root:has(.modus-wc-modal-open, ...)\`). This reserves space for the
  scrollbar, leaving a visible empty gutter beside the content. We override it to
  \`auto\` so the layout reflows naturally and the gutter disappears.
*/
:root:has(
  :is(
    .modus-wc-modal-open,
    .modus-wc-modal:target,
    .modus-wc-modal-toggle:checked + .modus-wc-modal,
    .modus-wc-modal[open]
  )
) {
  scrollbar-gutter: auto !important;
}

.modus-wc-border {
  border-color: var(--modus-wc-color-base-200);
  border-radius: 1px;
  border-style: solid;
}

modus-wc-text-input .modus-wc-text-input,
modus-wc-textarea .modus-wc-textarea,
modus-wc-time-input .modus-wc-time-input,
modus-wc-date .modus-wc-date {
  --fallback-b1: transparent;

  background: var(--modus-wc-color-base-page);
  padding: 0 var(--modus-wc-spacing-sm);
}

modus-wc-select {
  --fallback-b1: transparent;
}

modus-wc-number-input .modus-wc-number-input {
  --fallback-b1: transparent;

  background: var(--modus-wc-color-base-page);
}

/* Utility Panel Content Push Classes */
.modus-wc-utility-panel-push-target {
  transition: margin-inline-end
    var(--modus-wc-utility-panel-transition-duration, 0.3s) ease-out;
}

.modus-wc-utility-panel-push-target.modus-wc-utility-panel-pushed {
  margin-inline-end: var(--modus-wc-utility-panel-width, 312px);
}

/* Modus Modern Themes */
[data-theme='modus-modern-light']:root {
  color-scheme: light;

  --modus-wc-color-base-page: var(--modus-wc-color-white);
  --modus-wc-color-base-100: var(--modus-wc-color-gray-01);
  --modus-wc-color-base-200: var(--modus-wc-color-gray-02);
  --modus-wc-color-base-300: var(--modus-wc-color-gray-1);
  --modus-wc-color-base-content: var(--modus-wc-color-gray-10);
  --modus-wc-color-primary: var(--modus-wc-color-trimble-blue);
  --modus-wc-color-primary-content: var(--modus-wc-color-white);
  --modus-wc-color-info-blue-on-dark: var(--modus-wc-color-info-blue);
}

[data-theme='modus-modern-dark']:root {
  color-scheme: dark;

  --modus-wc-color-base-page: var(--modus-wc-color-gray-10);
  --modus-wc-color-base-100: var(--modus-wc-color-gray-9);
  --modus-wc-color-base-200: var(--modus-wc-color-gray-8);
  --modus-wc-color-base-300: var(--modus-wc-color-trimble-gray);
  --modus-wc-color-base-content: var(--modus-wc-color-gray-1);
  --modus-wc-color-primary: var(--modus-wc-color-highlight-blue);
  --modus-wc-color-primary-content: var(--modus-wc-color-black);
  --modus-wc-color-info-blue-on-dark: var(--modus-wc-color-white);
}

/* Modus Classic Themes */
[data-theme='modus-classic-light']:root {
  color-scheme: light;

  --modus-wc-color-base-page: var(--modus-wc-color-white);
  --modus-wc-color-base-100: var(--modus-wc-color-gray-light);
  --modus-wc-color-base-200: var(--modus-wc-color-gray-1);
  --modus-wc-color-base-300: var(--modus-wc-color-gray-2);
  --modus-wc-color-base-content: var(--modus-wc-color-gray-10);
  --modus-wc-color-info: var(--modus-wc-color-trimble-blue);
  --modus-wc-color-success: var(--modus-wc-color-green);
  --modus-wc-color-error: var(--modus-wc-color-red);
  --modus-wc-color-warning: var(--modus-wc-color-yellow);
  --modus-wc-color-info-blue-on-dark: var(--modus-wc-color-info-blue);
}

[data-theme='modus-classic-dark']:root {
  color-scheme: dark;

  --modus-wc-color-base-page: var(--modus-wc-color-black);
  --modus-wc-color-base-100: var(--modus-wc-color-trimble-gray);
  --modus-wc-color-base-200: var(--modus-wc-color-gray-8);
  --modus-wc-color-base-300: var(--modus-wc-color-gray-9);
  --modus-wc-color-base-content: var(--modus-wc-color-gray-1);
  --modus-wc-color-info: var(--modus-wc-color-trimble-blue);
  --modus-wc-color-success: var(--modus-wc-color-green);
  --modus-wc-color-error: var(--modus-wc-color-red);
  --modus-wc-color-warning: var(--modus-wc-color-yellow);
  --modus-wc-color-info-blue-on-dark: var(--modus-wc-color-white);
}

/* Connect Themes */
[data-theme='connect-light']:root {
  color-scheme: light;

  --modus-wc-color-base-page: var(--modus-wc-color-white);
  --modus-wc-color-base-100: var(--modus-wc-color-gray-light);
  --modus-wc-color-base-200: var(--modus-wc-color-gray-1);
  --modus-wc-color-base-300: var(--modus-wc-color-gray-2);
  --modus-wc-color-base-content: var(--modus-wc-color-gray-10);
  --modus-wc-color-info-blue-on-dark: var(--modus-wc-color-info-blue);
}

[data-theme='connect-dark']:root {
  color-scheme: dark;

  --modus-wc-color-base-page: var(--modus-wc-color-black);
  --modus-wc-color-base-100: var(--modus-wc-color-trimble-gray);
  --modus-wc-color-base-200: var(--modus-wc-color-gray-8);
  --modus-wc-color-base-300: var(--modus-wc-color-gray-9);
  --modus-wc-color-base-content: var(--modus-wc-color-gray-1);
  --modus-wc-color-info-blue-on-dark: var(--modus-wc-color-white);
}
`,i=`@font-face {
  font-family: 'modus-icons';
  src: url('https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-outlined/fonts/modus-icons.woff2')
    format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: 'modus-icons-outlined';
  src: url('https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-outlined/fonts/modus-icons.woff2')
    format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

@font-face {
  font-family: 'modus-icons-solid';
  src: url('https://cdn.jsdelivr.net/npm/@trimble-oss/modus-icons@1/dist/modus-solid/fonts/modus-icons.woff2')
    format('woff2');
  font-style: normal;
  font-weight: normal;
  font-display: swap;
}

.modus-icons-outlined {
  font-family: 'modus-icons-outlined';
  font-style: normal;
  font-weight: normal;
}

.modus-icons-solid {
  font-family: 'modus-icons-solid';
  font-style: normal;
  font-weight: normal;
}

.modus-icons {
  font-family: 'modus-icons';
  font-style: normal;
  font-weight: normal;
}
`,s=new WeakSet;let n=null;const r=new WeakSet;let a=null;async function b(o,d=!1){if(o instanceof ShadowRoot)if(d){if(r.has(o))return;const c=m+`
`+u+`
`+i+`
`+w;if(!c.trim()){console.warn("No CSS content available for shadow DOM injection");return}if("adoptedStyleSheets"in Document.prototype&&"CSSStyleSheet"in window)try{a||(a=new CSSStyleSheet,await a.replace(c));const e=o;e.adoptedStyleSheets=[...e.adoptedStyleSheets||[],a]}catch(e){console.warn("adoptedStyleSheets failed, falling back to <style> element:",e);const t=document.createElement("style");t.textContent=c,o.appendChild(t)}else{const e=document.createElement("style");e.textContent=c,o.appendChild(e)}r.add(o),s.add(o)}else{if(r.has(o)||s.has(o))return;const c=m+`
`+u+`
`+i;if(!c.trim()){console.warn("No CSS content available for shadow DOM injection");return}if("adoptedStyleSheets"in Document.prototype&&"CSSStyleSheet"in window)try{n||(n=new CSSStyleSheet,await n.replace(c));const e=o;e.adoptedStyleSheets=[...e.adoptedStyleSheets||[],n]}catch(e){console.warn("adoptedStyleSheets failed, falling back to <style> element:",e);const t=document.createElement("style");t.textContent=c,o.appendChild(t)}else{const e=document.createElement("style");e.textContent=c,o.appendChild(e)}s.add(o)}}function h(o,d=!1){const c=o.getRootNode();c instanceof ShadowRoot&&b(c,d)}export{h};
