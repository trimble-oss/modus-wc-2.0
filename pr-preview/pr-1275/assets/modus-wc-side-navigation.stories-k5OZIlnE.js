import{w as xe}from"./decorator-D4YmxizW.js";import{b as y,A as Ee}from"./lit-element-DgBvYnzn.js";import{o as b}from"./if-defined-BnVFTJ4o.js";import{n as V}from"./ref-Bw8asrgi.js";import{c as Te}from"./shadow-host-helper-A4Nvcs5e.js";import"./chunk-4XZ63LWV-CnYBn8W6.js";import"./v4-CtRu48qb.js";import"./directive-helpers-BZ4DLK7w.js";import"./directive-C_Rw-dL6.js";const Ne="1.15.0",se=`https://resources.connect.trimble.com/${Ne}/fonts/icon-font.min.css`,c=(e,t="",n="")=>["icon-font",e,n,t].filter(Boolean).join(" "),r={allProjects:"tc-icon-arrow-line-back",data:"tc-icon-layers",explorer:"tc-icon-explorer",folder:"tc-icon-folder",chevronRight:"tc-icon-chevron-right",views:"tc-icon-views",releases:"tc-icon-release",activity:"tc-icon-activity",bcfTopics:"tc-icon-bcf",fieldData:"tc-icon-fixed-point"},g="modus-wc-tree-item-end-action",q="modus-wc-tree-item-end-action-dropdown",k="modus-wc-tree-item-end-action-icon",E="data-flyout-dropdown",ie=new Set(["connect-light","connect-dark"]),Ie=()=>{if(typeof document>"u")return null;const e=document.documentElement.getAttribute("data-theme");if(e&&ie.has(e))return e;const t=document.querySelector('[data-theme="connect-light"], [data-theme="connect-dark"]');return(t==null?void 0:t.getAttribute("data-theme"))??null},v=e=>{const t=Ie();return t!==null&&ie.has(t)},ce="15rem",re=0,ue=4,Me=`
[data-theme='connect-light'] modus-wc-side-navigation,
[data-theme='connect-dark'] modus-wc-side-navigation`,N=e=>`
${Me} {
${e}
}
`,De=e=>`
[data-theme='connect-light'] modus-wc-side-navigation {
${e}
}
`,de=N(`
  .${g} .modus-wc-menu-item-interactive {
    align-items: stretch;
    height: 52px;
    padding-block: 0;
    padding-inline-end: 0 !important;
  }

  .${g} .modus-wc-menu-item-content {
    align-self: stretch;
  }

  .${g} [slot='end'] {
    align-self: stretch;
    display: flex;
    padding-inline-start: 0;
  }

  .${g} [slot='end'] modus-wc-dropdown-menu {
    align-self: stretch;
    height: 100%;
  }

  .${g} [slot='end'] modus-wc-dropdown-menu .modus-wc-btn {
    height: 100%;
  }

  .${g} .${q} .modus-wc-btn {
    align-items: center;
    display: flex;
    gap: 2px;
    height: 100%;
    min-height: 100%;
    border-radius: 0;
    background-color: transparent;
  }
`),le=N(`
  modus-wc-tree-item[value='data'] .${E} {
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

  .${E} .modus-wc-btn.modus-wc-btn-disabled {
    background-color: transparent;
    border-radius: 0;
    color: var(--modus-wc-color-white);
    min-height: unset;
    padding: 0;
  }

  modus-wc-tree-item[value='data']
    .${E}
    .modus-wc-menu
    .modus-wc-menu-item-labels {
    display: block;
  }

  /* Hovering the open flyout panel — not the row icon; keep row neutral. */
  modus-wc-tree-item[value='data']
    > li.modus-wc-menu-item:not(.modus-wc-menu-item-active):has(
      .${E} .menu-wrapper:hover
    )
    > .modus-wc-menu-item-interactive {
    background: transparent !important;
  }
`),me=N(`
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

`),pe=De(`
  modus-wc-tree-item
    > li.modus-wc-menu-item.modus-wc-menu-item-active:has([slot='end'] :active)
    > .modus-wc-menu-item-interactive {
    background: var(--modus-wc-color-blue-light) !important;
    color: var(--modus-wc-color-white) !important;
  }
`),we=N(`
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
`),he=N(`
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
`),ve=N(`
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
`),be={avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"},ge={ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},Ae=`
  .layout-with-navbar {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .main-content-row {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .panel-content {
    flex: 1;
    margin-left: ${ce};
    padding: 10px;
  }

  .side-navigation {
    align-self: flex-start;
    height: 500px;
    position: relative;
  }

  .navbar {
    z-index: 2;
  }
`,fe=220,ye=e=>{e.flyoutOpenTimer&&(clearTimeout(e.flyoutOpenTimer),e.flyoutOpenTimer=null),e.collapseFlyoutTimer&&(clearTimeout(e.collapseFlyoutTimer),e.collapseFlyoutTimer=null)},R=e=>{ye(e),e.dataIconDropdown&&(e.dataIconDropdown.menuVisible=!1)},T=(e,t)=>{e.dataIconDropdown&&(e.dataIconDropdown.disabled=t)},_e=e=>{if(!e.dataIconDropdown)return;const t=e.dataIconDropdown.closest("modus-wc-side-navigation"),n=t==null?void 0:t.querySelector(".modus-wc-side-navigation"),o=e.dataIconDropdown.querySelector("modus-wc-button");if(!n||!o)return;const s=n.getBoundingClientRect(),u=o.getBoundingClientRect(),d=e.dataIconDropdown.getBoundingClientRect(),m=Math.max(u.right,d.right),f=Math.round(s.right-m+re);e.dataIconDropdown.menuOffset=f},L=(e,t=!1)=>{if(!v())return;ye(e);const n=()=>{e.flyoutOpenTimer=null,e.dataIconDropdown&&(_e(e),e.dataIconDropdown.menuVisible=!0)};t?e.flyoutOpenTimer=setTimeout(n,0):n()},Oe=e=>{const t=e.querySelector(".modus-wc-menu-dropdown"),n=e.querySelector(":scope > li");if(!t||!n)return;t.classList.remove("modus-wc-menu-dropdown-show"),n.classList.remove("modus-wc-menu-item-expanded"),n.classList.remove("modus-wc-menu-dropdown-show");const o=e;o&&"isExpanded"in o&&(o.isExpanded=!1)},$e=e=>{const t=e.querySelector(".modus-wc-menu-dropdown"),n=e.querySelector(":scope > li");if(!t||!n||t.classList.contains("modus-wc-menu-dropdown-show"))return;t.classList.add("modus-wc-menu-dropdown-show"),n.classList.add("modus-wc-menu-item-expanded"),n.classList.add("modus-wc-menu-dropdown-show");const o=e;o&&"isExpanded"in o&&(o.isExpanded=!0)},Se=e=>{const t=Array.from(e.querySelectorAll("modus-wc-tree-item"));for(const n of t)if(n.selected)return n;return null},Fe=e=>{const t=Se(e);return t?t.getAttribute("value")==="data"?!0:!!t.closest('modus-wc-tree-item[value="data"] modus-wc-tree-menu'):!1},ke=e=>{var t;return((t=Se(e))==null?void 0:t.getAttribute("value"))==="data"},Re=e=>{e.querySelectorAll("modus-wc-tree-item").forEach(t=>{const n=t;n.hasSubmenu&&typeof n.collapseSubmenu=="function"&&n.collapseSubmenu()})},Le=(e,t,n)=>{e.detail||(n.set(!0),Re(t))},qe=(e,t,n,o)=>{R(n);const s=t.querySelectorAll("modus-wc-tree-item");if(e.detail){if(T(n,!0),s.forEach(u=>{const d=u;d.hasSubmenu&&(d.blockExpand=!1)}),Fe(t)){const u=t.querySelector('modus-wc-tree-item[value="data"]');u&&setTimeout(()=>$e(u),0)}}else o.set(!0),T(n,!1),s.forEach(u=>{const d=u;d.hasSubmenu&&(d.blockExpand=!0,Oe(u),typeof d.collapseSubmenu=="function"&&d.collapseSubmenu())}),ke(t)&&(n.collapseFlyoutTimer=setTimeout(()=>{n.collapseFlyoutTimer=null,L(n)},fe))},ze=(e,t)=>{if(t.get()&&e.detail){t.set(!1);return}t.set(!1);const n=e.target,o=n==null?void 0:n.closest(".layout-with-navbar"),s=o?o.querySelector("modus-wc-side-navigation"):document.querySelector("modus-wc-side-navigation");s&&(s.expanded=e.detail)},He=e=>{R(e),T(e,!0),document.querySelectorAll("modus-wc-side-navigation.side-navigation modus-wc-tree-item").forEach(t=>{const n=t;n.hasSubmenu&&(n.blockExpand=!1)})},Ve=JSON.stringify(be),We=JSON.stringify(ge),Pe=()=>`
<link rel="stylesheet" href="${se}" />

<style>
  ${Ae}
  ${we}
  ${me}
  ${pe}
  ${de}
  ${le}
  ${ve}
  ${he}
</style>

<div class="layout-with-navbar">
  <modus-wc-navbar
    app-title="Modus App"
    class="navbar"
    id="connect-navbar"
    style="z-index: 2;"
  ></modus-wc-navbar>

  <div class="main-content-row">
    <!-- Optional Connect collapsed rail: custom-class="min-width: 15rem !important;" on side-navigation -->
    <modus-wc-side-navigation
      class="side-navigation"
      id="connect-side-nav"
      expanded="true"
      collapse-on-click-outside="true"
      mode="push"
      max-width="256px"
      target-content=".panel-content"
    >
      <modus-wc-tree-menu size="lg" aria-label="Project navigation">
        <modus-wc-tree-item label="All Projects" value="all-projects">
          <modus-wc-icon
            slot="start"
            aria-label="All Projects icon"
            name=""
            custom-class="${c(r.allProjects)}"
          ></modus-wc-icon>
        </modus-wc-tree-item>

        <!-- Data start slot: Connect uses flyout dropdown below.
             Modern/Classic: use <modus-wc-icon slot="start" name="master_data" size="sm" aria-label="Data icon"></modus-wc-icon> (no dropdown). -->
        <modus-wc-tree-item
          id="data-tree-item"
          label="Data"
          value="data"
          has-submenu="true"
        >
          <modus-wc-dropdown-menu
            slot="start"
            id="data-flyout-dropdown"
            menu-placement="right-start"
            menu-strategy="fixed"
            menu-offset="${ue}"
            menu-size="lg"
            button-variant="borderless"
            custom-class="${E}"
          >
            <modus-wc-icon
              slot="button"
              aria-label="Data icon"
              name=""
              custom-class="${c(r.data)}"
            ></modus-wc-icon>
            <modus-wc-menu-item slot="menu" label="Explorer" value="explorer" size="lg">
              <modus-wc-icon
                slot="start-icon"
                name=""
                custom-class="${c(r.explorer)}"
              ></modus-wc-icon>
            </modus-wc-menu-item>
            <modus-wc-menu-item slot="menu" label="Views" value="views" size="lg">
              <modus-wc-icon
                slot="start-icon"
                name=""
                custom-class="${c(r.views)}"
              ></modus-wc-icon>
            </modus-wc-menu-item>
            <modus-wc-menu-item slot="menu" label="Releases" value="releases" size="lg">
              <modus-wc-icon
                slot="start-icon"
                name=""
                custom-class="${c(r.releases)}"
              ></modus-wc-icon>
            </modus-wc-menu-item>
          </modus-wc-dropdown-menu>
          <modus-wc-tree-menu is-sub-menu="true">
            <modus-wc-tree-item
              label="Explorer"
              value="explorer"
              custom-class="${g}"
            >
              <modus-wc-icon
                slot="start"
                aria-label="Explorer icon"
                name=""
                custom-class="${c(r.explorer)}"
              ></modus-wc-icon>
              <!-- Explorer end-slot action: Connect only. Omit this block on Modern/Classic. -->
              <div slot="end" style="display: flex; align-items: stretch;">
                <div style="width: 1px; background: currentColor; opacity: 0.3;"></div>
                <modus-wc-dropdown-menu
                  button-variant="borderless"
                  button-size="sm"
                  menu-size="sm"
                  menu-placement="right-start"
                  menu-strategy="fixed"
                  menu-offset="0"
                  button-aria-label="Open folder"
                  custom-class="${q}"
                >
                  <div slot="button" style="display: flex; align-items: center; gap: 2px;">
                    <modus-wc-icon
                      aria-label="Folder icon"
                      name=""
                      size="sm"
                      custom-class="${c(r.folder,k,"i16")}"
                    ></modus-wc-icon>
                    <modus-wc-icon
                      aria-label="Open submenu icon"
                      name=""
                      size="sm"
                      custom-class="${c(r.chevronRight,k,"i16")}"
                    ></modus-wc-icon>
                  </div>
                  <modus-wc-menu-item slot="menu" label="Rename" value="rename"></modus-wc-menu-item>
                  <modus-wc-menu-item slot="menu" label="Duplicate" value="duplicate"></modus-wc-menu-item>
                  <modus-wc-menu-item slot="menu" label="Delete" value="delete"></modus-wc-menu-item>
                </modus-wc-dropdown-menu>
              </div>
            </modus-wc-tree-item>
            <modus-wc-tree-item label="Views" value="views">
              <modus-wc-icon
                slot="start"
                aria-label="Views icon"
                name=""
                custom-class="${c(r.views)}"
              ></modus-wc-icon>
            </modus-wc-tree-item>
            <modus-wc-tree-item label="Releases" value="releases">
              <modus-wc-icon
                slot="start"
                aria-label="Releases icon"
                name=""
                custom-class="${c(r.releases)}"
              ></modus-wc-icon>
            </modus-wc-tree-item>
          </modus-wc-tree-menu>
        </modus-wc-tree-item>

        <modus-wc-tree-item label="Activity" value="activity">
          <modus-wc-icon
            slot="start"
            aria-label="Activity icon"
            name=""
            custom-class="${c(r.activity)}"
          ></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="BCF Topics" value="bcf-topics">
          <modus-wc-icon
            slot="start"
            aria-label="BCF Topics icon"
            name=""
            custom-class="${c(r.bcfTopics)}"
          ></modus-wc-icon>
        </modus-wc-tree-item>
        <modus-wc-tree-item label="Field Data" value="field-data">
          <modus-wc-icon
            slot="start"
            aria-label="Field Data icon"
            name=""
            custom-class="${c(r.fieldData)}"
          ></modus-wc-icon>
        </modus-wc-tree-item>
      </modus-wc-tree-menu>
    </modus-wc-side-navigation>

    <div class="panel-content">
      <h3>Side Navigation with Tree Menu</h3>
      <p>
        Connect theme demo: expand the side nav with the navbar hamburger.
        Data uses a flyout when collapsed and an inline submenu when expanded.
      </p>
    </div>
  </div>
</div>

<script>
  const SIDE_NAV_DATA_FLYOUT_MENU_GAP = ${re};
  const SIDE_NAV_COLLAPSE_MS = ${fe};
  const WITH_TREE_MENU_NAVBAR_USER_CARD = ${Ve};
  const WITH_TREE_MENU_NAVBAR_VISIBILITY = ${We};

  const isConnectSideNavTheme = () => {
    const theme = document.documentElement.getAttribute('data-theme') ?? '';
    return theme === 'connect-light' || theme === 'connect-dark';
  };

  const sideNav = document.getElementById('connect-side-nav');
  const dataFlyoutDropdown = document.getElementById('data-flyout-dropdown');
  const dataTreeItem = document.getElementById('data-tree-item');

  let flyoutOpenTimer = null;
  let collapseFlyoutTimer = null;
  let expandedChangeReady = false;
  let suppressNextMenuOpen = false;

  const cancelPendingFlyoutOpen = () => {
    if (flyoutOpenTimer) {
      clearTimeout(flyoutOpenTimer);
      flyoutOpenTimer = null;
    }
    if (collapseFlyoutTimer) {
      clearTimeout(collapseFlyoutTimer);
      collapseFlyoutTimer = null;
    }
  };

  const hideFlyout = () => {
    if (!isConnectSideNavTheme()) return;
    cancelPendingFlyoutOpen();
    if (dataFlyoutDropdown) {
      dataFlyoutDropdown.menuVisible = false;
    }
  };

  const setDataFlyoutDisabled = (disabled) => {
    if (!dataFlyoutDropdown) return;
    dataFlyoutDropdown.disabled = disabled;
  };

  const syncDataFlyoutMenuOffset = () => {
    if (!dataFlyoutDropdown) return;

    const sideNavHost = dataFlyoutDropdown.closest('modus-wc-side-navigation');
    const navPanel = sideNavHost?.querySelector('.modus-wc-side-navigation');
    const button = dataFlyoutDropdown.querySelector('modus-wc-button');

    if (!navPanel || !button) return;

    const navRect = navPanel.getBoundingClientRect();
    const btnRect = button.getBoundingClientRect();
    const triggerRect = dataFlyoutDropdown.getBoundingClientRect();
    const anchorRight = Math.max(btnRect.right, triggerRect.right);
    const offset = Math.round(
      navRect.right - anchorRight + SIDE_NAV_DATA_FLYOUT_MENU_GAP
    );

    dataFlyoutDropdown.menuOffset = offset;
  };

  const openDataFlyout = (defer = false) => {
    if (!isConnectSideNavTheme()) return;

    cancelPendingFlyoutOpen();

    const open = () => {
      flyoutOpenTimer = null;
      if (dataFlyoutDropdown) {
        syncDataFlyoutMenuOffset();
        dataFlyoutDropdown.menuVisible = true;
      }
    };

    if (defer) {
      flyoutOpenTimer = setTimeout(open, 0);
    } else {
      open();
    }
  };

  const initConnectNavbar = () => {
    const navbar = document.getElementById('connect-navbar');
    if (!navbar) return;

    navbar.userCard = WITH_TREE_MENU_NAVBAR_USER_CARD;
    navbar.visibility = WITH_TREE_MENU_NAVBAR_VISIBILITY;
  };

  const initDataFlyoutDisabled = () => {
    if (!dataFlyoutDropdown) return;
    if (!isConnectSideNavTheme()) {
      setDataFlyoutDisabled(true);
      return;
    }
    setDataFlyoutDisabled(Boolean(sideNav?.expanded));
  };

  const resetForNonConnectTheme = () => {
    hideFlyout();
    setDataFlyoutDisabled(true);
    sideNav?.querySelectorAll('modus-wc-tree-item').forEach((treeItem) => {
      if (treeItem.hasSubmenu) {
        treeItem.blockExpand = false;
      }
    });
  };

  new MutationObserver(() => {
    if (!isConnectSideNavTheme()) {
      resetForNonConnectTheme();
    }
  }).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ['data-theme'],
  });

  const getSelectedTreeItem = () => {
    const items = sideNav.querySelectorAll('modus-wc-tree-item');
    for (const item of items) {
      if (item.selected) return item;
    }
    return null;
  };

  const selectionInDataSection = () => {
    const selected = getSelectedTreeItem();
    if (!selected) return false;
    if (selected.getAttribute('value') === 'data') return true;
    return Boolean(
      selected.closest('modus-wc-tree-item[value="data"] modus-wc-tree-menu')
    );
  };

  const shouldOpenDataFlyoutOnCollapse = () =>
    getSelectedTreeItem()?.getAttribute('value') === 'data';

  const selectSubmenuParent = (dataItem) => {
    dataItem.selected = true;
    sideNav.querySelectorAll('modus-wc-tree-item').forEach((item) => {
      if (item !== dataItem) {
        item.selected = false;
      }
    });
  };

  const collapseSubmenuInline = (treeItem) => {
    const submenu = treeItem.querySelector('.modus-wc-menu-dropdown');
    const liElement = treeItem.querySelector(':scope > li');

    if (!submenu || !liElement) return;

    submenu.classList.remove('modus-wc-menu-dropdown-show');
    liElement.classList.remove('modus-wc-menu-item-expanded');
    liElement.classList.remove('modus-wc-menu-dropdown-show');

    if ('isExpanded' in treeItem) {
      treeItem.isExpanded = false;
    }
  };

  const openDataSubmenuInline = (dataItem) => {
    const submenu = dataItem.querySelector('.modus-wc-menu-dropdown');
    const liElement = dataItem.querySelector(':scope > li');

    if (
      !submenu ||
      !liElement ||
      submenu.classList.contains('modus-wc-menu-dropdown-show')
    ) {
      return;
    }

    submenu.classList.add('modus-wc-menu-dropdown-show');
    liElement.classList.add('modus-wc-menu-item-expanded');
    liElement.classList.add('modus-wc-menu-dropdown-show');

    if ('isExpanded' in dataItem) {
      dataItem.isExpanded = true;
    }
  };

  const collapseTreeSubmenus = () => {
    sideNav.querySelectorAll('modus-wc-tree-item').forEach((treeItem) => {
      if (treeItem.hasSubmenu && typeof treeItem.collapseSubmenu === 'function') {
        treeItem.collapseSubmenu();
      }
    });
  };

  const handleExpandedChangeConnect = (expanded) => {
    hideFlyout();

    const treeItems = sideNav.querySelectorAll('modus-wc-tree-item');

    if (expanded) {
      setDataFlyoutDisabled(true);
      treeItems.forEach((treeItem) => {
        if (treeItem.hasSubmenu) {
          treeItem.blockExpand = false;
        }
      });

      if (selectionInDataSection()) {
        const dataItem = sideNav.querySelector('modus-wc-tree-item[value="data"]');
        if (dataItem) {
          setTimeout(() => openDataSubmenuInline(dataItem), 0);
        }
      }
    } else {
      suppressNextMenuOpen = true;
      setDataFlyoutDisabled(false);

      treeItems.forEach((treeItem) => {
        if (treeItem.hasSubmenu) {
          treeItem.blockExpand = true;
          collapseSubmenuInline(treeItem);

          if (typeof treeItem.collapseSubmenu === 'function') {
            treeItem.collapseSubmenu();
          }
        }
      });

      if (shouldOpenDataFlyoutOnCollapse()) {
        collapseFlyoutTimer = setTimeout(() => {
          collapseFlyoutTimer = null;
          openDataFlyout();
        }, SIDE_NAV_COLLAPSE_MS);
      }
    }
  };

  const wireConnectSideNavDemo = () => {
    initConnectNavbar();
    initDataFlyoutDisabled();

    document
      .getElementById('connect-navbar')
      ?.addEventListener('mainMenuOpenChange', (e) => {
        if (suppressNextMenuOpen && e.detail) {
          suppressNextMenuOpen = false;
          return;
        }
        suppressNextMenuOpen = false;
        sideNav.expanded = e.detail;
      });

    sideNav.addEventListener('expandedChange', (e) => {
      const connectTheme = isConnectSideNavTheme();

      if (!expandedChangeReady) {
        expandedChangeReady = true;
        if (connectTheme) {
          setDataFlyoutDisabled(Boolean(e.detail));
          if (!e.detail) {
            handleExpandedChangeConnect(false);
          }
        } else if (!e.detail) {
          suppressNextMenuOpen = true;
          collapseTreeSubmenus();
        }
        return;
      }

      if (!connectTheme) {
        if (!e.detail) {
          suppressNextMenuOpen = true;
          collapseTreeSubmenus();
        }
        return;
      }

      handleExpandedChangeConnect(e.detail);
    });

    if (!expandedChangeReady) {
      expandedChangeReady = true;
      if (isConnectSideNavTheme()) {
        setDataFlyoutDisabled(Boolean(sideNav.expanded));
        if (!sideNav.expanded) {
          handleExpandedChangeConnect(false);
        }
      }
    }

    dataTreeItem?.addEventListener('itemSelect', (e) => {
      if (e.target !== dataTreeItem) return;

      if (sideNav.expanded) {
        selectSubmenuParent(dataTreeItem);
        return;
      }

      if (isConnectSideNavTheme()) {
        openDataFlyout(true);
      }
    });

    sideNav.addEventListener('itemSelect', (e) => {
      const treeItem = e.target.closest('modus-wc-tree-item');
      if (!treeItem) return;

      const value = treeItem.getAttribute('value');
      if (value === 'data' && sideNav.expanded) {
        const dataItem = sideNav.querySelector(
          'modus-wc-tree-item[value="data"]'
        );
        if (dataItem) {
          selectSubmenuParent(dataItem);
        }
      }

      if (
        isConnectSideNavTheme() &&
        !sideNav.expanded &&
        treeItem.querySelector('modus-wc-tree-menu')
      ) {
        openDataFlyout(true);
      }
    });

    dataFlyoutDropdown?.addEventListener('itemSelect', (e) => {
      if (!isConnectSideNavTheme()) return;
      const value = e.detail?.value;
      if (!value) return;

      hideFlyout();

      const realItem = sideNav.querySelector(
        \`modus-wc-tree-item[value="\${value}"]\`
      );
      realItem
        ?.querySelector(':scope > li > .modus-wc-menu-item-interactive')
        ?.click();

      dataFlyoutDropdown
        ?.querySelector('modus-wc-button .modus-wc-btn')
        ?.blur();

      setTimeout(() => hideFlyout(), 0);
    });

    sideNav.querySelectorAll('modus-wc-dropdown-menu').forEach((dropdown) => {
      if (dropdown.id === 'data-flyout-dropdown') return;
      dropdown.addEventListener('itemSelect', () => {
        dropdown.menuVisible = false;
      });
    });
  };

  Promise.all([
    customElements.whenDefined('modus-wc-navbar'),
    customElements.whenDefined('modus-wc-side-navigation'),
  ]).then(wireConnectSideNavDemo);
<\/script>
`;var W=Object.freeze,Be=Object.defineProperty,Ce=(e,t)=>W(Be(e,"raw",{value:W(e.slice())})),P,B;const et={title:"Components/Side Navigation",component:"modus-wc-side-navigation",args:{"collapse-on-click-outside":!0,expanded:!1,"max-width":"256px",mode:"push","target-content":".panel-content"},argTypes:{"max-width":{control:{type:"text"},description:"Maximum width of the side navigation panel in an expanded state."},mode:{control:{type:"select"},options:["overlay","push"],description:"Display mode of the side navigation (overlay or push)."}},decorators:[xe],parameters:{layout:"padded",actions:{handles:["expandedChange","itemSelect"]}}},_={render:e=>{const t=n=>{const o=n.target,s=o==null?void 0:o.closest(".layout-with-navbar");let u;s?u=s.querySelector("modus-wc-side-navigation"):u=document.querySelector("modus-wc-side-navigation"),u&&(u.expanded=n.detail)};return y(P||(P=Ce([`
      <style>
        .layout-with-navbar {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        .modus-wc-menu-item-labels {
          padding: 0 16px;
        }
        .navbar {
          box-shadow: none;
        }
        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }
        .side-navigation {
          height: 500px;
          align-self: flex-start;
          position: relative;
        }
      </style>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          @mainMenuOpenChange=`,`
          .userCard=`,`
          .visibility=`,`
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=`,`
            custom-class=`,`
            expanded=`,`
            max-width=`,`
            mode=`,`
            target-content=`,`
          >
            <modus-wc-menu size="lg">
              <modus-wc-menu-item label="home" selected>
                <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="profile">
                <modus-wc-icon slot="start-icon" name="person"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="settings">
                <modus-wc-icon slot="start-icon" name="gears"></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <div id="overview">
              <p>
                The side navigation of an application provides context through
                accessible menu options and positions a consistent component to
                connect to various pages in the application.
              </p>
              <p>
                The side navigation is a collapsible side content of the site’s
                pages. It is located alongside the page’s primary content. The
                component is designed to add side content to a fullscreen
                application. It is activated through the “hamburger” menu in the
                Navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <script>
        // Added this block to demonstrate how to handle menu selection, side navigation toggle, and navbar visibility settings using JavaScript.
        // const menuItems = document.querySelectorAll('modus-wc-menu-item');
        // menuItems.forEach((item) => {
        //   item.addEventListener('itemSelect', () => {
        //     menuItems.forEach((i) => i.removeAttribute('selected'));
        //     item.setAttribute('selected', '');
        //   });
        // });
        // const handleMenuOpenChange = (e) => {
        //   const eventSource = e.target;
        //   const storyContainer = eventSource?.closest('.layout-with-navbar');

        //   let sideNav;

        //   if (storyContainer) {
        //     sideNav = storyContainer.querySelector('modus-wc-side-navigation');
        //   } else {
        //     sideNav = document.querySelector('modus-wc-side-navigation');
        //   }

        //   if (sideNav) {
        //     sideNav.expanded = e.detail;
        //   }
        // };

        // const visibility = {
        //   ai: true,
        //   apps: true,
        //   help: true,
        //   mainMenu: true,
        //   notifications: true,
        //   search: true,
        //   searchInput: false,
        //   user: true,
        // };

        // const userCard = {
        //   avatarAlt: 'User Avatar',
        //   avatarSrc:
        //     'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
        //   email: 'user@trimble.com',
        //   name: 'Sonic the Hedgehog',
        // };

        // const navbar = document.querySelector('modus-wc-navbar');
        // const sideNav = document.querySelector('modus-wc-side-navigation');
        // navbar.visibility = visibility;
        // navbar.userCard = userCard;
        // navbar.addEventListener('mainMenuOpenChange', handleMenuOpenChange);
      <\/script>
    `])),t,{avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"},{ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],b(e["custom-class"]),e.expanded,e["max-width"],b(e.mode),b(e["target-content"]))}},O={render:e=>{const t=o=>{const s=o.target,u=s==null?void 0:s.closest(".layout-with-navbar");let d;if(u&&(d=u.querySelector("modus-wc-side-navigation"),d)){const m=d;m.expanded=o.detail}},n=o=>{o.detail||o.target.querySelectorAll("modus-wc-menu-item").forEach(d=>{const m=d;m.hasSubmenu&&typeof m.collapseSubmenu=="function"&&m.collapseSubmenu()})};return y(B||(B=Ce([`
      <style>
        .layout-with-navbar {
          box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }

        .side-navigation {
          align-self: flex-start;
          height: 500px;
          position: relative;
        }
        .flex-right {
          float: right;
          display: flex;
          margin-left: 50px;
        }

        .flex-right:hover {
          background-color: unset;
        }
        .flex-right:active {
          background-color: unset;
        }
      </style>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          id="main-navbar"
          @mainMenuOpenChange=`,`
          .userCard=`,`
          .visibility=`,`
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=`,`
            custom-class=`,`
            expanded=`,`
            id="main-side-nav"
            max-width=`,`
            mode=`,`
            target-content=`,`
            @expandedChange=`,`
          >
            <modus-wc-menu>
              <li>
                <div class="flex-right">
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="filter"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="settings"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="more_vertical"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                </div>
              </li>
              <modus-wc-menu-item
                label="Charts"
                id="charts-menu"
                .hasSubmenu=`,`
                value="charts"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="bar_graph"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=`,` id="charts-submenu">
                  <modus-wc-menu-item label="Bar Chart" value="bar-chart">
                  </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart" value="line-chart">
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>

              <modus-wc-menu-item label="Calendar" value="calendar">
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="calendar"
                ></modus-wc-icon>
              </modus-wc-menu-item>

              <modus-wc-menu-item
                label="Reports"
                .hasSubmenu=`,`
                id="reports-menu"
                value="reports"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="master_data"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=`,` id="reports-submenu">
                  <modus-wc-menu-item
                    label="Monthly Report"
                    value="monthly-report"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <div id="overview">
              <h3>Side Navigation with Submenu</h3>
              <p>
                This example demonstrates the side navigation component with
                submenus, allowing for a more organized and hierarchical
                navigation structure.
              </p>
              <p>
                When the side navigation closes, the expandedChange event is
                used to call the collapseSubmenu() method on each menu item.
                This keeps the side navigation component generic while allowing
                the story to coordinate behavior between components.
              </p>
              <p>
                Menu items inside a collapsed side nav cannot expand their
                submenus, ensuring a consistent user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <script>
        // const handleMenuOpenChange = (e) => {
        //   const eventSource = e.target;
        //   const storyContainer = eventSource?.closest('.layout-with-navbar');
        //   let sideNav;

        //   if (storyContainer) {
        //     sideNav = storyContainer.querySelector('modus-wc-side-navigation');
        //   } else {
        //     sideNav = document.querySelector('modus-wc-side-navigation');
        //   }

        //   if (sideNav) {
        //     sideNav.expanded = e.detail;
        //   }
        // };

        // const handleExpandedChange = (e) => {
        //   // Collapse all menu items when side nav closes
        //   if (!e.detail) {
        //     const eventSource = e.target;
        //     const menuItems =
        //       eventSource.querySelectorAll('modus-wc-menu-item');
        //     menuItems.forEach((menuItem) => {
        //       if (
        //         menuItem.hasSubmenu &&
        //         typeof menuItem.collapseSubmenu === 'function'
        //       ) {
        //         menuItem.collapseSubmenu();
        //       }
        //     });
        //   }
        // };
        //  // Adding event listeners and setting properties here as the storybook initially does not load them
        //  document.addEventListener('DOMContentLoaded', () => {
        //     const navbar = document.querySelector('#main-navbar');
        //     const sideNav = document.querySelector('#main-side-nav');
        //     const chartsMenu = document.querySelector('#charts-menu');
        //     const reportsMenu = document.querySelector('#reports-menu');
        //     const chartsSubMenu = document.querySelector('#charts-submenu');
        //     const reportsSubMenu = document.querySelector('#reports-submenu');

        //     if (navbar) {
        //       // Set navbar properties
        //       navbar.userCard = {
        //         avatarAlt: 'User Avatar',
        //         avatarSrc:
        //           'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
        //         email: 'user@trimble.com',
        //         name: 'Sonic the Hedgehog',
        //       };

        //       navbar.visibility = {
        //         ai: true,
        //         apps: true,
        //         help: true,
        //         mainMenu: true,
        //         notifications: true,
        //         search: true,
        //         searchInput: false,
        //         user: true,
        //       };

        //       navbar.addEventListener('mainMenuOpenChange', handleMenuOpenChange);
        //     }

        //     if (sideNav) {
        //       sideNav.addEventListener('expandedChange', handleExpandedChange);
        //     }

        //     // Set hasSubmenu property for menu items with submenus
        //     [chartsMenu, reportsMenu].forEach((menuItem) => {
        //       if (menuItem) {
        //         menuItem.hasSubmenu = true;
        //       }
        //     });

        //     // Set isSubMenu for all submenu elements
        //     [chartsSubMenu, reportsSubMenu].forEach((submenu) => {
        //       if (submenu) {
        //         submenu.isSubMenu = true;
        //       }
        //     });
        //   });
        //
      <\/script>
    `])),t,{avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"},{ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0},e["collapse-on-click-outside"],b(e["custom-class"]),e.expanded,e["max-width"],b(e.mode),b(e["target-content"]),n,!0,!0,!0,!0)}};let U=!1;const p={dataIconDropdown:null,flyoutOpenTimer:null,collapseFlyoutTimer:null};let j=!1;const $={args:{expanded:!0},parameters:{docs:{description:{story:"This story is theme-specific: markup and styles differ between Connect and Modern/Classic. After changing the theme in the Storybook toolbar, re-render the story so it re-renders with the correct layout. Show code is a self-contained Connect copy-paste snippet (navbar, layout, and wiring included)."},source:{code:Pe()}}},render:(e,t)=>{var I;let n=!1;const o={get:()=>n,set:a=>{n=a}},s=(I=t.globals)==null?void 0:I.theme,u=s?s==="connect-light"||s==="connect-dark":v();!j&&typeof document<"u"&&(j=!0,new MutationObserver(()=>{v()||He(p)}).observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme"]}));const d=(a,i)=>{i.selected=!0,a.querySelectorAll("modus-wc-tree-item").forEach(l=>{l!==i&&(l.selected=!1)})},m=a=>{ze(a,o)},f=a=>{const i=a.target;if(!U){U=!0,v()&&T(p,!!a.detail);return}v()?qe(a,i,p,o):Le(a,i,o)},S=a=>{const i=a.target.closest("modus-wc-tree-item");if(!i)return;const l=i.closest("modus-wc-side-navigation");if(!l)return;const w=i.getAttribute("value"),h=l.expanded;if(w==="data"){const M=l.querySelector('modus-wc-tree-item[value="data"]');M&&h&&d(l,M)}v()&&!h&&i.querySelector("modus-wc-tree-menu")&&L(p,!0)},D=a=>{var h,M,z,H;if(!v())return;const i=(h=a.detail)==null?void 0:h.value;if(!i||!p.dataIconDropdown)return;R(p);const l=p.dataIconDropdown.closest("modus-wc-side-navigation"),w=l==null?void 0:l.querySelector(`modus-wc-tree-item[value="${i}"]`);w&&((M=w.querySelector(":scope > li > .modus-wc-menu-item-interactive"))==null||M.click()),(H=(z=p.dataIconDropdown)==null?void 0:z.querySelector("modus-wc-button .modus-wc-btn"))==null||H.blur(),setTimeout(()=>R(p),0)},A=a=>{console.log("Action:",a.detail.value);const i=a.target.closest("modus-wc-dropdown-menu");i&&(i.menuVisible=!1)},C=a=>{a&&(a.hasAttribute("data-flyout-wired")||(a.setAttribute("data-flyout-wired",""),a.addEventListener("itemSelect",i=>{if(i.target!==a)return;const l=a.closest("modus-wc-side-navigation");if(l){if(l.expanded){d(l,a);return}v()&&L(p,!0)}})))},x=a=>{if(!a){p.dataIconDropdown=null;return}if(p.dataIconDropdown=a,!v()){T(p,!0);return}const i=p.dataIconDropdown.closest("modus-wc-side-navigation"),l=i==null?void 0:i.expanded;T(p,!!l)};return y`
      <link rel="stylesheet" href=${se} />
      <style>
        .layout-with-navbar {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        .panel-content {
          margin-left: ${u?ce:"4rem"};
          padding: 10px;
        }
        .side-navigation {
          height: 500px;
          align-self: flex-start;
          position: relative;
        }
        ${we}
        ${me}
        ${pe}
        ${de}
        ${le}
        ${ve}
        ${he}
      </style>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          @mainMenuOpenChange=${m}
          .userCard=${be}
          .visibility=${ge}
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=${e["collapse-on-click-outside"]}
            custom-class=${b(e["custom-class"])}
            expanded=${e.expanded}
            max-width=${e["max-width"]}
            mode=${b(e.mode)}
            target-content=${b(e["target-content"])}
            @expandedChange=${f}
            @itemSelect=${S}
          >
            <modus-wc-tree-menu size="lg" aria-label="Project navigation">
              <modus-wc-tree-item label="All Projects" value="all-projects">
                <modus-wc-icon
                  slot="start"
                  aria-label="All Projects icon"
                  name=""
                  custom-class=${c(r.allProjects)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                ${V(C)}
                label="Data"
                value="data"
                has-submenu="true"
              >
                ${u?y`
                      <modus-wc-dropdown-menu
                        slot="start"
                        ${V(x)}
                        menu-placement="right-start"
                        menu-strategy="fixed"
                        menu-offset=${ue}
                        menu-size="lg"
                        button-variant="borderless"
                        custom-class=${E}
                        @itemSelect=${D}
                      >
                        <modus-wc-icon
                          aria-label="Data icon"
                          name=""
                          slot="button"
                          custom-class=${c(r.data)}
                        ></modus-wc-icon>
                        <modus-wc-menu-item
                          slot="menu"
                          label="Explorer"
                          value="explorer"
                          size="lg"
                        >
                          <modus-wc-icon
                            slot="start-icon"
                            name=""
                            custom-class=${c(r.explorer)}
                          ></modus-wc-icon>
                        </modus-wc-menu-item>
                        <modus-wc-menu-item
                          slot="menu"
                          label="Views"
                          value="views"
                          size="lg"
                        >
                          <modus-wc-icon
                            slot="start-icon"
                            name=""
                            custom-class=${c(r.views)}
                          ></modus-wc-icon>
                        </modus-wc-menu-item>
                        <modus-wc-menu-item
                          slot="menu"
                          label="Releases"
                          value="releases"
                          size="lg"
                        >
                          <modus-wc-icon
                            slot="start-icon"
                            name=""
                            custom-class=${c(r.releases)}
                          ></modus-wc-icon>
                        </modus-wc-menu-item>
                      </modus-wc-dropdown-menu>
                    `:y`
                      <modus-wc-icon
                        slot="start"
                        aria-label="Data icon"
                        name="master_data"
                        size="sm"
                      ></modus-wc-icon>
                    `}
                <modus-wc-tree-menu is-sub-menu="true">
                  <modus-wc-tree-item
                    label="Explorer"
                    value="explorer"
                    custom-class=${g}
                  >
                    <modus-wc-icon
                      slot="start"
                      aria-label="Explorer icon"
                      name=""
                      custom-class=${c(r.explorer)}
                    ></modus-wc-icon>
                    ${u?y`
                          <div
                            slot="end"
                            style="display: flex; align-items: stretch;"
                          >
                            <div
                              style="width: 1px; background: currentColor; opacity: 0.3;"
                            ></div>
                            <modus-wc-dropdown-menu
                              button-variant="borderless"
                              button-size="sm"
                              menu-size="sm"
                              menu-placement="right-start"
                              menu-strategy="fixed"
                              menu-offset="0"
                              button-aria-label="Open folder"
                              custom-class=${q}
                              @itemSelect=${A}
                            >
                              <div
                                slot="button"
                                style="display: flex; align-items: center; gap: 2px;"
                              >
                                <modus-wc-icon
                                  aria-label="Folder icon"
                                  name=""
                                  size="sm"
                                  custom-class=${c(r.folder,k,"i16")}
                                ></modus-wc-icon>
                                <modus-wc-icon
                                  aria-label="Open submenu icon"
                                  name=""
                                  size="sm"
                                  custom-class=${c(r.chevronRight,k,"i16")}
                                ></modus-wc-icon>
                              </div>
                              <modus-wc-menu-item
                                slot="menu"
                                label="Rename"
                                value="rename"
                              ></modus-wc-menu-item>
                              <modus-wc-menu-item
                                slot="menu"
                                label="Duplicate"
                                value="duplicate"
                              ></modus-wc-menu-item>
                              <modus-wc-menu-item
                                slot="menu"
                                label="Delete"
                                value="delete"
                              ></modus-wc-menu-item>
                            </modus-wc-dropdown-menu>
                          </div>
                        `:Ee}
                  </modus-wc-tree-item>
                  <modus-wc-tree-item label="Views" value="views">
                    <modus-wc-icon
                      slot="start"
                      aria-label="Views icon"
                      name=""
                      custom-class=${c(r.views)}
                    ></modus-wc-icon>
                  </modus-wc-tree-item>
                  <modus-wc-tree-item label="Releases" value="releases">
                    <modus-wc-icon
                      slot="start"
                      aria-label="Releases icon"
                      name=""
                      custom-class=${c(r.releases)}
                    ></modus-wc-icon>
                  </modus-wc-tree-item>
                </modus-wc-tree-menu>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Activity" value="activity">
                <modus-wc-icon
                  slot="start"
                  aria-label="Activity icon"
                  name=""
                  custom-class=${c(r.activity)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="BCF Topics" value="bcf-topics">
                <modus-wc-icon
                  slot="start"
                  aria-label="BCF Topics icon"
                  name=""
                  custom-class=${c(r.bcfTopics)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Field Data" value="field-data">
                <modus-wc-icon
                  slot="start"
                  aria-label="Field Data icon"
                  name=""
                  custom-class=${c(r.fieldData)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
            </modus-wc-tree-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <h3>Side Navigation with Tree Menu</h3>
            <p>
              <strong>Theme switch:</strong> This story renders different markup
              and CSS per theme (Connect vs Modern/Classic). After you change
              the theme in the Storybook toolbar, refresh or re-open this story
              so it re-renders; otherwise layout and behavior may not match the
              selected theme.
            </p>
            <p>
              This example replicates Trimble project navigation using
              modus-wc-tree-menu and modus-wc-tree-item. Switch the Storybook
              theme toolbar to compare behavior: <strong>Connect</strong> uses a
              collapsed-rail flyout for the Data row;
              <strong>Modern</strong> and <strong>Classic</strong> use the
              built-in inline collapsible submenu (no flyout).
            </p>
            <p>
              On Connect, when the side nav is collapsed, Data uses
              <code>block-expand</code> and a start-slot flyout dropdown. On
              Modern/Classic, Data uses a standard start icon and expands or
              collapses its submenu inline when the side nav is expanded.
            </p>
            <p>
              The Explorer end-slot action uses modus-wc-dropdown-menu (Connect
              themes only for layout styling). Expand the side nav with the
              navbar hamburger to reveal labels and that action.
            </p>
          </div>
        </div>
      </div>
    `}},F={render:e=>{if(!customElements.get("side-navigation-shadow-host")){const t=Te({componentTag:"modus-wc-side-navigation",propsMapper:(n,o)=>{const s=o;if(s.customClass=n["custom-class"]||"",s.expanded=!!n.expanded,s.maxWidth=n["max-width"]||"256px",s.collapseOnClickOutside=!!n["collapse-on-click-outside"],s.mode=n.mode||"overlay",s.targetContent=n["target-content"]||"",!o.hasAttribute("data-layout-built")){o.setAttribute("data-layout-built","");const u=o.getRootNode(),d=o.parentElement;o.className="side-navigation",o.style.cssText="height: 500px; align-self: flex-start; position: relative;";const m=document.createElement("modus-wc-navbar");m.setAttribute("style","z-index: 2;"),m.className="navbar",m.userCard={avatarAlt:"User Avatar",avatarSrc:"https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg",email:"user@trimble.com",name:"Sonic the Hedgehog"},m.visibility={ai:!0,apps:!0,help:!0,mainMenu:!0,notifications:!0,search:!0,searchInput:!1,user:!0};const f=document.createElement("modus-wc-menu");f.setAttribute("size","lg"),[{label:"home",icon:"home",selected:!0},{label:"profile",icon:"person",selected:!1},{label:"settings",icon:"gears",selected:!1}].forEach(({label:a,icon:i,selected:l})=>{const w=document.createElement("modus-wc-menu-item");w.setAttribute("label",a),l&&w.setAttribute("selected","");const h=document.createElement("modus-wc-icon");h.setAttribute("slot","start-icon"),h.setAttribute("name",i),w.appendChild(h),f.appendChild(w)}),o.appendChild(f),m.addEventListener("mainMenuOpenChange",a=>{const i=a;o.expanded=i.detail});const S=document.createElement("div");S.className="panel-content";const D=document.createElement("p");D.textContent="The side navigation of an application provides context through accessible menu options and positions a consistent component to connect to various pages in the application.";const A=document.createElement("p");A.textContent=`The side navigation is a collapsible side content of the site's pages. It is located alongside the page's primary content. The component is designed to add side content to a fullscreen application. It is activated through the "hamburger" menu in the Navbar.`,S.appendChild(D),S.appendChild(A);const C=document.createElement("div");C.className="main-content-row",C.appendChild(o),C.appendChild(S);const x=document.createElement("div");x.className="layout-with-navbar",x.appendChild(m),x.appendChild(C),d.appendChild(x);const I=document.createElement("style");I.textContent=`
                .layout-with-navbar {
                  display: flex;
                  flex-direction: column;
                  height: 100%;
                }
                .main-content-row {
                  display: flex;
                  flex: 1;
                  overflow: hidden;
                }
                .navbar {
                  box-shadow: none;
                }
                .panel-content {
                  margin-left: 4rem;
                  padding: 10px;
                }
                .side-navigation {
                  height: 500px;
                  align-self: flex-start;
                  position: relative;
                }
              `,u.appendChild(I)}}});customElements.define("side-navigation-shadow-host",t)}return y`<side-navigation-shadow-host
      .props=${{...e}}
    ></side-navigation-shadow-host>`}};var Y,J,G;_.parameters={..._.parameters,docs:{...(Y=_.parameters)==null?void 0:Y.docs,source:{originalSource:`{
  render: args => {
    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      let sideNav: Element | null;
      if (storyContainer) {
        sideNav = storyContainer.querySelector('modus-wc-side-navigation');
      } else {
        sideNav = document.querySelector('modus-wc-side-navigation');
      }
      if (sideNav) {
        (sideNav as HTMLElement & {
          expanded: boolean;
        }).expanded = e.detail;
      }
    };
    return html\`
      <style>
        .layout-with-navbar {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        .modus-wc-menu-item-labels {
          padding: 0 16px;
        }
        .navbar {
          box-shadow: none;
        }
        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }
        .side-navigation {
          height: 500px;
          align-self: flex-start;
          position: relative;
        }
      </style>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          @mainMenuOpenChange=\${handleMenuOpenChange}
          .userCard=\${{
      avatarAlt: 'User Avatar',
      avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
      email: 'user@trimble.com',
      name: 'Sonic the Hedgehog'
    }}
          .visibility=\${{
      ai: true,
      apps: true,
      help: true,
      mainMenu: true,
      notifications: true,
      search: true,
      searchInput: false,
      user: true
    }}
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=\${args['collapse-on-click-outside']}
            custom-class=\${ifDefined(args['custom-class'])}
            expanded=\${args.expanded}
            max-width=\${args['max-width']}
            mode=\${ifDefined(args.mode)}
            target-content=\${ifDefined(args['target-content'])}
          >
            <modus-wc-menu size="lg">
              <modus-wc-menu-item label="home" selected>
                <modus-wc-icon slot="start-icon" name="home"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="profile">
                <modus-wc-icon slot="start-icon" name="person"></modus-wc-icon>
              </modus-wc-menu-item>
              <modus-wc-menu-item label="settings">
                <modus-wc-icon slot="start-icon" name="gears"></modus-wc-icon>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <div id="overview">
              <p>
                The side navigation of an application provides context through
                accessible menu options and positions a consistent component to
                connect to various pages in the application.
              </p>
              <p>
                The side navigation is a collapsible side content of the site’s
                pages. It is located alongside the page’s primary content. The
                component is designed to add side content to a fullscreen
                application. It is activated through the “hamburger” menu in the
                Navbar.
              </p>
            </div>
          </div>
        </div>
      </div>
      <script>
        // Added this block to demonstrate how to handle menu selection, side navigation toggle, and navbar visibility settings using JavaScript.
        // const menuItems = document.querySelectorAll('modus-wc-menu-item');
        // menuItems.forEach((item) => {
        //   item.addEventListener('itemSelect', () => {
        //     menuItems.forEach((i) => i.removeAttribute('selected'));
        //     item.setAttribute('selected', '');
        //   });
        // });
        // const handleMenuOpenChange = (e) => {
        //   const eventSource = e.target;
        //   const storyContainer = eventSource?.closest('.layout-with-navbar');

        //   let sideNav;

        //   if (storyContainer) {
        //     sideNav = storyContainer.querySelector('modus-wc-side-navigation');
        //   } else {
        //     sideNav = document.querySelector('modus-wc-side-navigation');
        //   }

        //   if (sideNav) {
        //     sideNav.expanded = e.detail;
        //   }
        // };

        // const visibility = {
        //   ai: true,
        //   apps: true,
        //   help: true,
        //   mainMenu: true,
        //   notifications: true,
        //   search: true,
        //   searchInput: false,
        //   user: true,
        // };

        // const userCard = {
        //   avatarAlt: 'User Avatar',
        //   avatarSrc:
        //     'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
        //   email: 'user@trimble.com',
        //   name: 'Sonic the Hedgehog',
        // };

        // const navbar = document.querySelector('modus-wc-navbar');
        // const sideNav = document.querySelector('modus-wc-side-navigation');
        // navbar.visibility = visibility;
        // navbar.userCard = userCard;
        // navbar.addEventListener('mainMenuOpenChange', handleMenuOpenChange);
      <\/script>
    \`;
  }
}`,...(G=(J=_.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var K,Q,X;O.parameters={...O.parameters,docs:{...(K=O.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => {
    const handleMenuOpenChange = (e: CustomEvent) => {
      const eventSource = e.target as HTMLElement;
      const storyContainer = eventSource?.closest('.layout-with-navbar');
      let sideNav: HTMLElement | null;
      if (storyContainer) {
        sideNav = storyContainer.querySelector('modus-wc-side-navigation');
        if (sideNav) {
          // Toggle the side nav state (navbar and side nav can be out of sync)
          const sideNavEl = sideNav as HTMLElement & {
            expanded: boolean;
          };
          sideNavEl.expanded = e.detail;
        }
      }
    };
    const handleExpandedChange = (e: CustomEvent) => {
      // Collapse all menu items when side nav closes
      if (!e.detail) {
        const eventSource = e.target as HTMLElement;
        const menuItems = eventSource.querySelectorAll('modus-wc-menu-item');
        menuItems.forEach(menuItem => {
          const item = menuItem as unknown as {
            hasSubmenu?: boolean;
            collapseSubmenu?: () => Promise<void>;
          };
          if (item.hasSubmenu && typeof item.collapseSubmenu === 'function') {
            void item.collapseSubmenu();
          }
        });
      }
    };
    return html\`
      <style>
        .layout-with-navbar {
          box-shadow: rgba(36, 35, 45, 0.3) 1px 0 4px;
          display: flex;
          flex-direction: column;
          height: 100%;
        }

        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
        }

        .panel-content {
          margin-left: 4rem;
          padding: 10px;
        }

        .side-navigation {
          align-self: flex-start;
          height: 500px;
          position: relative;
        }
        .flex-right {
          float: right;
          display: flex;
          margin-left: 50px;
        }

        .flex-right:hover {
          background-color: unset;
        }
        .flex-right:active {
          background-color: unset;
        }
      </style>

      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          id="main-navbar"
          @mainMenuOpenChange=\${handleMenuOpenChange}
          .userCard=\${{
      avatarAlt: 'User Avatar',
      avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
      email: 'user@trimble.com',
      name: 'Sonic the Hedgehog'
    }}
          .visibility=\${{
      ai: true,
      apps: true,
      help: true,
      mainMenu: true,
      notifications: true,
      search: true,
      searchInput: false,
      user: true
    }}
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=\${args['collapse-on-click-outside']}
            custom-class=\${ifDefined(args['custom-class'])}
            expanded=\${args.expanded}
            id="main-side-nav"
            max-width=\${args['max-width']}
            mode=\${ifDefined(args.mode)}
            target-content=\${ifDefined(args['target-content'])}
            @expandedChange=\${handleExpandedChange}
          >
            <modus-wc-menu>
              <li>
                <div class="flex-right">
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="filter"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="settings"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                  <modus-wc-button custom-class="menu-icon" color="tertiary">
                    <modus-wc-icon
                      name="more_vertical"
                      size="xs"
                      variant="solid"
                    ></modus-wc-icon>
                  </modus-wc-button>
                </div>
              </li>
              <modus-wc-menu-item
                label="Charts"
                id="charts-menu"
                .hasSubmenu=\${true}
                value="charts"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="bar_graph"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=\${true} id="charts-submenu">
                  <modus-wc-menu-item label="Bar Chart" value="bar-chart">
                  </modus-wc-menu-item>
                  <modus-wc-menu-item label="Line Chart" value="line-chart">
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>

              <modus-wc-menu-item label="Calendar" value="calendar">
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="calendar"
                ></modus-wc-icon>
              </modus-wc-menu-item>

              <modus-wc-menu-item
                label="Reports"
                .hasSubmenu=\${true}
                id="reports-menu"
                value="reports"
              >
                <modus-wc-icon
                  slot="start-icon"
                  decorative="true"
                  name="master_data"
                ></modus-wc-icon>
                <modus-wc-menu .isSubMenu=\${true} id="reports-submenu">
                  <modus-wc-menu-item
                    label="Monthly Report"
                    value="monthly-report"
                  >
                  </modus-wc-menu-item>
                  <modus-wc-menu-item
                    label="Annual Report"
                    value="annual-report"
                  >
                  </modus-wc-menu-item>
                </modus-wc-menu>
              </modus-wc-menu-item>
            </modus-wc-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <div id="overview">
              <h3>Side Navigation with Submenu</h3>
              <p>
                This example demonstrates the side navigation component with
                submenus, allowing for a more organized and hierarchical
                navigation structure.
              </p>
              <p>
                When the side navigation closes, the expandedChange event is
                used to call the collapseSubmenu() method on each menu item.
                This keeps the side navigation component generic while allowing
                the story to coordinate behavior between components.
              </p>
              <p>
                Menu items inside a collapsed side nav cannot expand their
                submenus, ensuring a consistent user experience.
              </p>
            </div>
          </div>
        </div>
      </div>
      <script>
        // const handleMenuOpenChange = (e) => {
        //   const eventSource = e.target;
        //   const storyContainer = eventSource?.closest('.layout-with-navbar');
        //   let sideNav;

        //   if (storyContainer) {
        //     sideNav = storyContainer.querySelector('modus-wc-side-navigation');
        //   } else {
        //     sideNav = document.querySelector('modus-wc-side-navigation');
        //   }

        //   if (sideNav) {
        //     sideNav.expanded = e.detail;
        //   }
        // };

        // const handleExpandedChange = (e) => {
        //   // Collapse all menu items when side nav closes
        //   if (!e.detail) {
        //     const eventSource = e.target;
        //     const menuItems =
        //       eventSource.querySelectorAll('modus-wc-menu-item');
        //     menuItems.forEach((menuItem) => {
        //       if (
        //         menuItem.hasSubmenu &&
        //         typeof menuItem.collapseSubmenu === 'function'
        //       ) {
        //         menuItem.collapseSubmenu();
        //       }
        //     });
        //   }
        // };
        //  // Adding event listeners and setting properties here as the storybook initially does not load them
        //  document.addEventListener('DOMContentLoaded', () => {
        //     const navbar = document.querySelector('#main-navbar');
        //     const sideNav = document.querySelector('#main-side-nav');
        //     const chartsMenu = document.querySelector('#charts-menu');
        //     const reportsMenu = document.querySelector('#reports-menu');
        //     const chartsSubMenu = document.querySelector('#charts-submenu');
        //     const reportsSubMenu = document.querySelector('#reports-submenu');

        //     if (navbar) {
        //       // Set navbar properties
        //       navbar.userCard = {
        //         avatarAlt: 'User Avatar',
        //         avatarSrc:
        //           'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
        //         email: 'user@trimble.com',
        //         name: 'Sonic the Hedgehog',
        //       };

        //       navbar.visibility = {
        //         ai: true,
        //         apps: true,
        //         help: true,
        //         mainMenu: true,
        //         notifications: true,
        //         search: true,
        //         searchInput: false,
        //         user: true,
        //       };

        //       navbar.addEventListener('mainMenuOpenChange', handleMenuOpenChange);
        //     }

        //     if (sideNav) {
        //       sideNav.addEventListener('expandedChange', handleExpandedChange);
        //     }

        //     // Set hasSubmenu property for menu items with submenus
        //     [chartsMenu, reportsMenu].forEach((menuItem) => {
        //       if (menuItem) {
        //         menuItem.hasSubmenu = true;
        //       }
        //     });

        //     // Set isSubMenu for all submenu elements
        //     [chartsSubMenu, reportsSubMenu].forEach((submenu) => {
        //       if (submenu) {
        //         submenu.isSubMenu = true;
        //       }
        //     });
        //   });
        //
      <\/script>
    \`;
  }
}`,...(X=(Q=O.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Z,ee,te;$.parameters={...$.parameters,docs:{...(Z=$.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  args: {
    expanded: true
  },
  parameters: {
    docs: {
      description: {
        story: 'This story is theme-specific: markup and styles differ between Connect and Modern/Classic. After changing the theme in the Storybook toolbar, re-render the story so it re-renders with the correct layout. Show code is a self-contained Connect copy-paste snippet (navbar, layout, and wiring included).'
      },
      source: {
        code: getWithTreeMenuSourceCode()
      }
    }
  },
  render: (args, context) => {
    let suppressNextMenuOpen = false;
    const menuOpenSuppress = {
      get: () => suppressNextMenuOpen,
      set: (value: boolean) => {
        suppressNextMenuOpen = value;
      }
    };
    const globalsTheme = (context as {
      globals?: {
        theme?: string;
      };
    }).globals?.theme;
    const connectTheme = globalsTheme ? globalsTheme === 'connect-light' || globalsTheme === 'connect-dark' : isConnectSideNavTheme();
    if (!withTreeMenuThemeObserverWired && typeof document !== 'undefined') {
      withTreeMenuThemeObserverWired = true;
      new MutationObserver(() => {
        if (!isConnectSideNavTheme()) {
          resetWithTreeMenuForNonConnectTheme(withTreeMenuFlyoutState);
        }
      }).observe(document.documentElement, {
        attributes: true,
        attributeFilter: ['data-theme']
      });
    }
    const selectSubmenuParent = (sideNav: HTMLElement, dataItem: HTMLElement & {
      selected?: boolean;
    }) => {
      dataItem.selected = true;
      sideNav.querySelectorAll('modus-wc-tree-item').forEach(item => {
        if (item !== dataItem) {
          (item as HTMLElement & {
            selected?: boolean;
          }).selected = false;
        }
      });
    };
    const handleMenuOpenChange = (e: CustomEvent<boolean>) => {
      handleWithTreeMenuMenuOpenChange(e, menuOpenSuppress);
    };
    const handleExpandedChange = (e: CustomEvent<boolean>) => {
      const eventSource = e.target as HTMLElement;
      if (!withTreeMenuExpandedChangeReady) {
        withTreeMenuExpandedChangeReady = true;
        if (isConnectSideNavTheme()) {
          setWithTreeMenuDataFlyoutDisabled(withTreeMenuFlyoutState, Boolean(e.detail));
        }
        return;
      }
      if (isConnectSideNavTheme()) {
        handleWithTreeMenuExpandedChangeConnect(e, eventSource, withTreeMenuFlyoutState, menuOpenSuppress);
      } else {
        handleWithTreeMenuExpandedChangeClassicModern(e, eventSource, menuOpenSuppress);
      }
    };
    const handleTreeItemSelect = (e: CustomEvent) => {
      const treeItem = (e.target as HTMLElement).closest('modus-wc-tree-item');
      if (!treeItem) return;
      const sideNav = treeItem.closest('modus-wc-side-navigation');
      if (!sideNav) return;
      const value = treeItem.getAttribute('value');
      const isExpanded = (sideNav as HTMLElement & {
        expanded: boolean;
      }).expanded;
      if (value === 'data') {
        const dataItem = sideNav.querySelector<HTMLElement & {
          selected?: boolean;
        }>('modus-wc-tree-item[value="data"]');
        if (dataItem && isExpanded) {
          selectSubmenuParent(sideNav, dataItem);
        }
      }
      if (isConnectSideNavTheme() && !isExpanded && treeItem.querySelector('modus-wc-tree-menu')) {
        openWithTreeMenuDataFlyout(withTreeMenuFlyoutState, true);
      }
    };
    const handleFlyoutItemSelect = (e: CustomEvent) => {
      if (!isConnectSideNavTheme()) return;
      const value = (e as CustomEvent<{
        value: string;
      }>).detail?.value;
      if (!value || !withTreeMenuFlyoutState.dataIconDropdown) return;
      hideWithTreeMenuFlyout(withTreeMenuFlyoutState);
      const sideNav = withTreeMenuFlyoutState.dataIconDropdown.closest('modus-wc-side-navigation');
      const realItem = sideNav?.querySelector(\`modus-wc-tree-item[value="\${value}"]\`);
      if (realItem) {
        realItem.querySelector<HTMLElement>(':scope > li > .modus-wc-menu-item-interactive')?.click();
      }

      // Drop focus from flyout trigger so borderless primary color does not stick.
      withTreeMenuFlyoutState.dataIconDropdown?.querySelector<HTMLElement>('modus-wc-button .modus-wc-btn')?.blur();

      // Close after the tree-item click; cancels any deferred flyout open too.
      setTimeout(() => hideWithTreeMenuFlyout(withTreeMenuFlyoutState), 0);
    };
    const handleContextItemSelect = (e: CustomEvent) => {
      console.log('Action:', (e as CustomEvent<{
        value: string;
      }>).detail.value);
      const dropdown = (e.target as HTMLElement).closest('modus-wc-dropdown-menu');
      if (dropdown) {
        (dropdown as HTMLElement & {
          menuVisible: boolean;
        }).menuVisible = false;
      }
    };
    const onDataItemRef = (el: Element | undefined) => {
      if (!el) return;
      if (!el.hasAttribute('data-flyout-wired')) {
        el.setAttribute('data-flyout-wired', '');
        el.addEventListener('itemSelect', (e: Event) => {
          // Child tree-items bubble itemSelect; only handle Data's own row.
          if (e.target !== el) return;
          const sideNav = el.closest('modus-wc-side-navigation');
          if (!sideNav) return;
          if ((sideNav as HTMLElement & {
            expanded: boolean;
          }).expanded) {
            selectSubmenuParent(sideNav, el as HTMLElement & {
              selected?: boolean;
            });
            return;
          }
          if (isConnectSideNavTheme()) {
            openWithTreeMenuDataFlyout(withTreeMenuFlyoutState, true);
          }
        });
      }
    };
    const onDataIconDropdownRef = (el: Element | undefined) => {
      if (!el) {
        withTreeMenuFlyoutState.dataIconDropdown = null;
        return;
      }
      withTreeMenuFlyoutState.dataIconDropdown = el as HTMLElement;
      if (!isConnectSideNavTheme()) {
        setWithTreeMenuDataFlyoutDisabled(withTreeMenuFlyoutState, true);
        return;
      }
      const sideNav = withTreeMenuFlyoutState.dataIconDropdown.closest('modus-wc-side-navigation');
      const isExpanded = (sideNav as HTMLElement & {
        expanded: boolean;
      })?.expanded;
      setWithTreeMenuDataFlyoutDisabled(withTreeMenuFlyoutState, Boolean(isExpanded));
    };
    return html\`
      <link rel="stylesheet" href=\${CONNECT_ICON_FONT_URL} />
      <style>
        .layout-with-navbar {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
        .main-content-row {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        .panel-content {
          margin-left: \${connectTheme ? SIDE_NAV_COLLAPSED_MIN_WIDTH : '4rem'};
          padding: 10px;
        }
        .side-navigation {
          height: 500px;
          align-self: flex-start;
          position: relative;
        }
        \${sideNavConnectCollapsedRailStyles}
        \${sideNavConnectTreeItemStyles}
        \${sideNavConnectLightTreeItemEndSlotActiveStyles}
        \${sideNavTreeItemEndActionDropdownStyles}
        \${sideNavDataFlyoutDropdownStyles}
        \${sideNavConnectStoryLayoutStyles}
        \${sideNavConnectWithTreeMenuStoryStyles}
      </style>
      <div class="layout-with-navbar">
        <modus-wc-navbar
          app-title="Modus App"
          class="navbar"
          @mainMenuOpenChange=\${handleMenuOpenChange}
          .userCard=\${WITH_TREE_MENU_NAVBAR_USER_CARD}
          .visibility=\${WITH_TREE_MENU_NAVBAR_VISIBILITY}
          style="z-index: 2;"
        ></modus-wc-navbar>
        <div class="main-content-row">
          <modus-wc-side-navigation
            class="side-navigation"
            collapse-on-click-outside=\${args['collapse-on-click-outside']}
            custom-class=\${ifDefined(args['custom-class'])}
            expanded=\${args.expanded}
            max-width=\${args['max-width']}
            mode=\${ifDefined(args.mode)}
            target-content=\${ifDefined(args['target-content'])}
            @expandedChange=\${handleExpandedChange}
            @itemSelect=\${handleTreeItemSelect}
          >
            <modus-wc-tree-menu size="lg" aria-label="Project navigation">
              <modus-wc-tree-item label="All Projects" value="all-projects">
                <modus-wc-icon
                  slot="start"
                  aria-label="All Projects icon"
                  name=""
                  custom-class=\${connectIconClass(CONNECT_ICONS.allProjects)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item
                \${ref(onDataItemRef)}
                label="Data"
                value="data"
                has-submenu="true"
              >
                \${connectTheme ? html\`
                      <modus-wc-dropdown-menu
                        slot="start"
                        \${ref(onDataIconDropdownRef)}
                        menu-placement="right-start"
                        menu-strategy="fixed"
                        menu-offset=\${SIDE_NAV_DATA_FLYOUT_MENU_OFFSET}
                        menu-size="lg"
                        button-variant="borderless"
                        custom-class=\${SIDE_NAV_DATA_FLYOUT_DROPDOWN_CLASS}
                        @itemSelect=\${handleFlyoutItemSelect}
                      >
                        <modus-wc-icon
                          aria-label="Data icon"
                          name=""
                          slot="button"
                          custom-class=\${connectIconClass(CONNECT_ICONS.data)}
                        ></modus-wc-icon>
                        <modus-wc-menu-item
                          slot="menu"
                          label="Explorer"
                          value="explorer"
                          size="lg"
                        >
                          <modus-wc-icon
                            slot="start-icon"
                            name=""
                            custom-class=\${connectIconClass(CONNECT_ICONS.explorer)}
                          ></modus-wc-icon>
                        </modus-wc-menu-item>
                        <modus-wc-menu-item
                          slot="menu"
                          label="Views"
                          value="views"
                          size="lg"
                        >
                          <modus-wc-icon
                            slot="start-icon"
                            name=""
                            custom-class=\${connectIconClass(CONNECT_ICONS.views)}
                          ></modus-wc-icon>
                        </modus-wc-menu-item>
                        <modus-wc-menu-item
                          slot="menu"
                          label="Releases"
                          value="releases"
                          size="lg"
                        >
                          <modus-wc-icon
                            slot="start-icon"
                            name=""
                            custom-class=\${connectIconClass(CONNECT_ICONS.releases)}
                          ></modus-wc-icon>
                        </modus-wc-menu-item>
                      </modus-wc-dropdown-menu>
                    \` : html\`
                      <modus-wc-icon
                        slot="start"
                        aria-label="Data icon"
                        name="master_data"
                        size="sm"
                      ></modus-wc-icon>
                    \`}
                <modus-wc-tree-menu is-sub-menu="true">
                  <modus-wc-tree-item
                    label="Explorer"
                    value="explorer"
                    custom-class=\${SIDE_NAV_TREE_ITEM_END_ACTION_CLASS}
                  >
                    <modus-wc-icon
                      slot="start"
                      aria-label="Explorer icon"
                      name=""
                      custom-class=\${connectIconClass(CONNECT_ICONS.explorer)}
                    ></modus-wc-icon>
                    \${connectTheme ? html\`
                          <div
                            slot="end"
                            style="display: flex; align-items: stretch;"
                          >
                            <div
                              style="width: 1px; background: currentColor; opacity: 0.3;"
                            ></div>
                            <modus-wc-dropdown-menu
                              button-variant="borderless"
                              button-size="sm"
                              menu-size="sm"
                              menu-placement="right-start"
                              menu-strategy="fixed"
                              menu-offset="0"
                              button-aria-label="Open folder"
                              custom-class=\${SIDE_NAV_TREE_ITEM_END_ACTION_DROPDOWN_CLASS}
                              @itemSelect=\${handleContextItemSelect}
                            >
                              <div
                                slot="button"
                                style="display: flex; align-items: center; gap: 2px;"
                              >
                                <modus-wc-icon
                                  aria-label="Folder icon"
                                  name=""
                                  size="sm"
                                  custom-class=\${connectIconClass(CONNECT_ICONS.folder, SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS, 'i16')}
                                ></modus-wc-icon>
                                <modus-wc-icon
                                  aria-label="Open submenu icon"
                                  name=""
                                  size="sm"
                                  custom-class=\${connectIconClass(CONNECT_ICONS.chevronRight, SIDE_NAV_TREE_ITEM_END_ACTION_ICON_CLASS, 'i16')}
                                ></modus-wc-icon>
                              </div>
                              <modus-wc-menu-item
                                slot="menu"
                                label="Rename"
                                value="rename"
                              ></modus-wc-menu-item>
                              <modus-wc-menu-item
                                slot="menu"
                                label="Duplicate"
                                value="duplicate"
                              ></modus-wc-menu-item>
                              <modus-wc-menu-item
                                slot="menu"
                                label="Delete"
                                value="delete"
                              ></modus-wc-menu-item>
                            </modus-wc-dropdown-menu>
                          </div>
                        \` : nothing}
                  </modus-wc-tree-item>
                  <modus-wc-tree-item label="Views" value="views">
                    <modus-wc-icon
                      slot="start"
                      aria-label="Views icon"
                      name=""
                      custom-class=\${connectIconClass(CONNECT_ICONS.views)}
                    ></modus-wc-icon>
                  </modus-wc-tree-item>
                  <modus-wc-tree-item label="Releases" value="releases">
                    <modus-wc-icon
                      slot="start"
                      aria-label="Releases icon"
                      name=""
                      custom-class=\${connectIconClass(CONNECT_ICONS.releases)}
                    ></modus-wc-icon>
                  </modus-wc-tree-item>
                </modus-wc-tree-menu>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Activity" value="activity">
                <modus-wc-icon
                  slot="start"
                  aria-label="Activity icon"
                  name=""
                  custom-class=\${connectIconClass(CONNECT_ICONS.activity)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="BCF Topics" value="bcf-topics">
                <modus-wc-icon
                  slot="start"
                  aria-label="BCF Topics icon"
                  name=""
                  custom-class=\${connectIconClass(CONNECT_ICONS.bcfTopics)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
              <modus-wc-tree-item label="Field Data" value="field-data">
                <modus-wc-icon
                  slot="start"
                  aria-label="Field Data icon"
                  name=""
                  custom-class=\${connectIconClass(CONNECT_ICONS.fieldData)}
                ></modus-wc-icon>
              </modus-wc-tree-item>
            </modus-wc-tree-menu>
          </modus-wc-side-navigation>
          <div class="panel-content">
            <h3>Side Navigation with Tree Menu</h3>
            <p>
              <strong>Theme switch:</strong> This story renders different markup
              and CSS per theme (Connect vs Modern/Classic). After you change
              the theme in the Storybook toolbar, refresh or re-open this story
              so it re-renders; otherwise layout and behavior may not match the
              selected theme.
            </p>
            <p>
              This example replicates Trimble project navigation using
              modus-wc-tree-menu and modus-wc-tree-item. Switch the Storybook
              theme toolbar to compare behavior: <strong>Connect</strong> uses a
              collapsed-rail flyout for the Data row;
              <strong>Modern</strong> and <strong>Classic</strong> use the
              built-in inline collapsible submenu (no flyout).
            </p>
            <p>
              On Connect, when the side nav is collapsed, Data uses
              <code>block-expand</code> and a start-slot flyout dropdown. On
              Modern/Classic, Data uses a standard start icon and expands or
              collapses its submenu inline when the side nav is expanded.
            </p>
            <p>
              The Explorer end-slot action uses modus-wc-dropdown-menu (Connect
              themes only for layout styling). Expand the side nav with the
              navbar hamburger to reveal labels and that action.
            </p>
          </div>
        </div>
      </div>
    \`;
  }
}`,...(te=(ee=$.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,oe,ae;F.parameters={...F.parameters,docs:{...(ne=F.parameters)==null?void 0:ne.docs,source:{originalSource:`{
  render: args => {
    if (!customElements.get('side-navigation-shadow-host')) {
      const SideNavigationShadowHost = createShadowHostClass<SideNavigationArgs>({
        componentTag: 'modus-wc-side-navigation',
        propsMapper: (v: SideNavigationArgs, el: HTMLElement) => {
          const navEl = el as unknown as {
            customClass: string;
            expanded: boolean;
            maxWidth: string;
            collapseOnClickOutside: boolean;
            mode: string;
            targetContent: string;
          };
          navEl.customClass = v['custom-class'] || '';
          navEl.expanded = Boolean(v.expanded);
          navEl.maxWidth = v['max-width'] || '256px';
          navEl.collapseOnClickOutside = Boolean(v['collapse-on-click-outside']);
          navEl.mode = v.mode || 'overlay';
          navEl.targetContent = v['target-content'] || '';

          // Build full layout on first render: move el into a navbar + content
          // layout inside the wrapper. The helper's wrapper has display:contents
          // so the layout becomes a direct layout child of the shadow root.
          if (!el.hasAttribute('data-layout-built')) {
            el.setAttribute('data-layout-built', '');
            const shadowRoot = el.getRootNode() as ShadowRoot;
            const wrapper = el.parentElement!;
            el.className = 'side-navigation';
            el.style.cssText = 'height: 500px; align-self: flex-start; position: relative;';

            // Navbar
            const navbar = document.createElement('modus-wc-navbar');
            navbar.setAttribute('style', 'z-index: 2;');
            navbar.className = 'navbar';
            (navbar as unknown as {
              userCard: object;
            }).userCard = {
              avatarAlt: 'User Avatar',
              avatarSrc: 'https://i1.sndcdn.com/artworks-000405996468-wmh3uv-t500x500.jpg',
              email: 'user@trimble.com',
              name: 'Sonic the Hedgehog'
            };
            (navbar as unknown as {
              visibility: object;
            }).visibility = {
              ai: true,
              apps: true,
              help: true,
              mainMenu: true,
              notifications: true,
              search: true,
              searchInput: false,
              user: true
            };

            // Menu items
            const menu = document.createElement('modus-wc-menu');
            menu.setAttribute('size', 'lg');
            [{
              label: 'home',
              icon: 'home',
              selected: true
            }, {
              label: 'profile',
              icon: 'person',
              selected: false
            }, {
              label: 'settings',
              icon: 'gears',
              selected: false
            }].forEach(({
              label,
              icon,
              selected
            }) => {
              const item = document.createElement('modus-wc-menu-item');
              item.setAttribute('label', label);
              if (selected) item.setAttribute('selected', '');
              const ic = document.createElement('modus-wc-icon');
              ic.setAttribute('slot', 'start-icon');
              ic.setAttribute('name', icon);
              item.appendChild(ic);
              menu.appendChild(item);
            });
            el.appendChild(menu);

            // Wire navbar's mainMenuOpenChange to toggle side nav.
            // Now that navbar's handleClickOutside uses composedPath(), it
            // correctly identifies hamburger clicks inside shadow DOM and emits
            // the right true/false detail value on each click.
            navbar.addEventListener('mainMenuOpenChange', (e: Event) => {
              const custom = e as CustomEvent<boolean>;
              (el as unknown as {
                expanded: boolean;
              }).expanded = custom.detail;
            });

            // Panel content
            const panelContent = document.createElement('div');
            panelContent.className = 'panel-content';
            const po1 = document.createElement('p');
            po1.textContent = 'The side navigation of an application provides context through accessible menu options and positions a consistent component to connect to various pages in the application.';
            const po2 = document.createElement('p');
            po2.textContent = 'The side navigation is a collapsible side content of the site\\'s pages. It is located alongside the page\\'s primary content. The component is designed to add side content to a fullscreen application. It is activated through the "hamburger" menu in the Navbar.';
            panelContent.appendChild(po1);
            panelContent.appendChild(po2);

            // Move el into layout (appendChild moves an existing node)
            const mainContentRow = document.createElement('div');
            mainContentRow.className = 'main-content-row';
            mainContentRow.appendChild(el);
            mainContentRow.appendChild(panelContent);
            const layout = document.createElement('div');
            layout.className = 'layout-with-navbar';
            layout.appendChild(navbar);
            layout.appendChild(mainContentRow);
            wrapper.appendChild(layout);

            // Layout styles
            const styleEl = document.createElement('style');
            styleEl.textContent = \`
                .layout-with-navbar {
                  display: flex;
                  flex-direction: column;
                  height: 100%;
                }
                .main-content-row {
                  display: flex;
                  flex: 1;
                  overflow: hidden;
                }
                .navbar {
                  box-shadow: none;
                }
                .panel-content {
                  margin-left: 4rem;
                  padding: 10px;
                }
                .side-navigation {
                  height: 500px;
                  align-self: flex-start;
                  position: relative;
                }
              \`;
            shadowRoot.appendChild(styleEl);
          }
        }
      });
      customElements.define('side-navigation-shadow-host', SideNavigationShadowHost);
    }
    return html\`<side-navigation-shadow-host
      .props=\${{
      ...args
    }}
    ></side-navigation-shadow-host>\`;
  }
}`,...(ae=(oe=F.parameters)==null?void 0:oe.docs)==null?void 0:ae.source}}};const tt=["Default","WithSubmenu","WithTreeMenu","ShadowDomParent"];export{_ as Default,F as ShadowDomParent,O as WithSubmenu,$ as WithTreeMenu,tt as __namedExportsOrder,et as default};
