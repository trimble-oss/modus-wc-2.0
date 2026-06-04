#!/usr/bin/env node
/* eslint-env node */
/**
 * Generator script: creates BlazingStory .razor story files for every
 * Blazor wrapper component found in
 * integrations/blazor/stencil-generated/ModusWebComponents.Blazor/Components/
 *
 * Usage:  node scripts/generate-blazor-stories.js
 *
 * Output: integrations/blazor/blazing-story/Stories/<ComponentName>Stories.razor
 *         integrations/blazor/maui-app/Stories/<ComponentName>Stories.razor
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const REPO_ROOT = path.resolve(__dirname, '..');
const COMPONENTS_DIR = path.join(
  REPO_ROOT,
  'integrations/blazor/stencil-generated/ModusWebComponents.Blazor/Components'
);
const STORIES_OUT_DIR = path.join(
  REPO_ROOT,
  'integrations/blazor/blazing-story/Stories'
);
const MAUI_STORIES_OUT_DIR = path.join(
  REPO_ROOT,
  'integrations/blazor/maui-app/Stories'
);

// ── Component → Storybook category ────────────────────────────────────────
const CATEGORY_MAP = {
  ModusWcAlert: 'Feedback',
  ModusWcBadge: 'Feedback',
  ModusWcChip: 'Feedback',
  ModusWcLoader: 'Feedback',
  ModusWcProgress: 'Feedback',
  ModusWcSkeleton: 'Feedback',
  ModusWcToast: 'Feedback',
  ModusWcTooltip: 'Feedback',
  ModusWcInputFeedback: 'Feedback',

  ModusWcButton: 'Inputs',
  ModusWcButtonGroup: 'Inputs',
  ModusWcCheckbox: 'Inputs',
  ModusWcDate: 'Inputs',
  ModusWcFileDropzone: 'Inputs',
  ModusWcNumberInput: 'Inputs',
  ModusWcRadio: 'Inputs',
  ModusWcRating: 'Inputs',
  ModusWcSelect: 'Inputs',
  ModusWcSlider: 'Inputs',
  ModusWcSwitch: 'Inputs',
  ModusWcTextarea: 'Inputs',
  ModusWcTextInput: 'Inputs',
  ModusWcTimeInput: 'Inputs',
  ModusWcAutocomplete: 'Inputs',
  ModusWcInputLabel: 'Inputs',

  ModusWcBreadcrumbs: 'Navigation',
  ModusWcDropdownMenu: 'Navigation',
  ModusWcMenu: 'Navigation',
  ModusWcMenuItem: 'Navigation',
  ModusWcNavbar: 'Navigation',
  ModusWcPagination: 'Navigation',
  ModusWcSideNavigation: 'Navigation',
  ModusWcStepper: 'Navigation',
  ModusWcTabs: 'Navigation',
  ModusWcToolbar: 'Navigation',

  ModusWcAccordion: 'Layout',
  ModusWcCard: 'Layout',
  ModusWcCollapse: 'Layout',
  ModusWcDivider: 'Layout',
  ModusWcHandle: 'Layout',
  ModusWcModal: 'Layout',
  ModusWcPanel: 'Layout',
  ModusWcUtilityPanel: 'Layout',

  ModusWcAvatar: 'Display',
  ModusWcIcon: 'Display',
  ModusWcLogo: 'Display',
  ModusWcProfileMenu: 'Display',
  ModusWcTable: 'Display',
  ModusWcTypography: 'Display',

  ModusWcThemeProvider: 'Theme',
  ModusWcThemeSwitcher: 'Theme',
};

// ── Per-component extra @code blocks, directives, and template overrides ───
//
// Fields:
//   codeBlock         - extra lines inserted into the @code { } block
//   directives        - file-level Razor directives (e.g. @inject) placed at top
//   defaultTemplate   - static template used for variant stories
//   interactiveTemplate - overrides the auto-generated interactive Default story
//                         template (still uses context.Args via @attributes where needed)
//
const COMPONENT_OVERRIDES = {
  ModusWcBreadcrumbs: {
    codeBlock: `
    private object[] _items = [
        new { label = "Home", url = "#" },
        new { label = "Products", url = "#" },
        new { label = "Current Page", url = "#" },
    ];`,
    defaultTemplate: `<ModusWcBreadcrumbs Items="@_items" Size="md" />`,
  },
  ModusWcSelect: {
    codeBlock: `
    private object[] _options = [
        new { label = "Option 1", value = "option1" },
        new { label = "Option 2", value = "option2" },
        new { label = "Option 3", value = "option3" },
    ];`,
    defaultTemplate: `<ModusWcSelect Label="Choose an option" Options="@_options" />`,
  },
  ModusWcTabs: {
    codeBlock: `
    private object[] _tabs = [
        new { label = "Dashboard" },
        new { label = "Analytics" },
        new { label = "Reports" },
        new { label = "Settings" },
    ];`,
    defaultTemplate: `<ModusWcTabs Tabs="@_tabs" TabStyle="bordered" />`,
  },
  ModusWcTable: {
    codeBlock: `
    private object[] _columns = [
        new { id = "id",    header = "ID",    accessor = "id",    width = "60px" },
        new { id = "name",  header = "Name",  accessor = "name",  width = "140px" },
        new { id = "email", header = "Email", accessor = "email", width = "200px" },
        new { id = "role",  header = "Role",  accessor = "role",  width = "100px" },
    ];
    private object[] _data = [
        new { id = "1", name = "Alice Martin",  email = "alice@example.com",  role = "Admin" },
        new { id = "2", name = "Bob Chen",      email = "bob@example.com",    role = "Editor" },
        new { id = "3", name = "Carol Davis",   email = "carol@example.com",  role = "Viewer" },
    ];`,
    defaultTemplate: `<ModusWcTable Columns="@_columns" Data="@_data" Hover="true" Sortable="true" />`,
  },
  ModusWcStepper: {
    codeBlock: `
    private object[] _steps = [
        new { label = "Step 1", color = "primary" },
        new { label = "Step 2", color = "primary" },
        new { label = "Step 3", color = "warning" },
        new { label = "Step 4", color = "secondary" },
    ];`,
    defaultTemplate: `<ModusWcStepper Steps="@_steps" Orientation="horizontal" />`,
  },
  ModusWcNavbar: {
    defaultTemplate: `
<ModusWcNavbar>
    <div slot="main-menu">Main menu contents</div>
    <div slot="notifications">Notification contents</div>
    <div slot="apps">App drawer contents</div>
</ModusWcNavbar>`,
  },
  ModusWcProfileMenu: {
    codeBlock: `
    private object _profileProps = new { name = "Jane Doe", email = "jane@example.com" };`,
    defaultTemplate: `<ModusWcProfileMenu ProfileProps="@_profileProps" />`,
  },
  ModusWcSideNavigation: {
    defaultTemplate: `
<ModusWcSideNavigation Mode="push" MaxWidth="256px" Expanded="true">
    <ModusWcMenu Size="lg">
        <ModusWcMenuItem Label="Home">
            <ModusWcIcon Name="home" Slot="start-icon" />
        </ModusWcMenuItem>
        <ModusWcMenuItem Label="Profile">
            <ModusWcIcon Name="person" Slot="start-icon" />
        </ModusWcMenuItem>
        <ModusWcMenuItem Label="Settings">
            <ModusWcIcon Name="gears" Slot="start-icon" />
        </ModusWcMenuItem>
    </ModusWcMenu>
</ModusWcSideNavigation>`,
  },
  ModusWcMenu: {
    defaultTemplate: `
<ModusWcMenu Size="md">
    <ModusWcMenuItem Label="Item 1" />
    <ModusWcMenuItem Label="Item 2" />
    <ModusWcMenuItem Label="Item 3" Disabled="true" />
</ModusWcMenu>`,
  },
  ModusWcAccordion: {
    codeBlock: `
    private readonly object[] _sectionOptions = [
        new { title = "Section One", description = "Expand to view content" },
        new { title = "Section Two" },
        new { title = "Section Three" },
    ];`,
    defaultTemplate: `
<ModusWcAccordion>
    <ModusWcCollapse Options="@_sectionOptions[0]">
        <div slot="content">Content for the first section.</div>
    </ModusWcCollapse>
    <ModusWcCollapse Options="@_sectionOptions[1]">
        <div slot="content">Content for the second section.</div>
    </ModusWcCollapse>
    <ModusWcCollapse Options="@_sectionOptions[2]">
        <div slot="content">Content for the third section.</div>
    </ModusWcCollapse>
</ModusWcAccordion>`,
  },
  ModusWcCollapse: {
    codeBlock: `
    private readonly object _collapseOptions = new { title = "Collapse Title", description = "Collapse description" };`,
    defaultTemplate: `
<ModusWcCollapse Options="@_collapseOptions">
    <div slot="content">Collapse content goes here.</div>
</ModusWcCollapse>`,
    interactiveTemplate: `<ModusWcCollapse @attributes="context.Args" Options="@_collapseOptions">
    <div slot="content">Collapse content goes here.</div>
</ModusWcCollapse>`,
  },
  ModusWcCard: {
    defaultTemplate: `
<ModusWcCard Style="max-width:320px;">
    <span slot="title">Card Title</span>
    <span slot="subtitle">Card Subtitle</span>
    <p>This is a sample card content. You can place any content here.</p>
    <div slot="actions" style="display:flex;justify-content:flex-end;">
        <ModusWcButton>Action</ModusWcButton>
    </div>
</ModusWcCard>`,
  },
  ModusWcModal: {
    directives: `@inject IJSRuntime JS`,
    codeBlock: `
    private readonly string _modalId = $"story-modal-{Guid.NewGuid():N}"[..12];

    private async Task OpenModal() =>
        await JS.InvokeVoidAsync("modusWcInterop.invokeElement", _modalId, "showModal");

    private async Task CloseModal() =>
        await JS.InvokeVoidAsync("modusWcInterop.invokeElement", _modalId, "close");`,
    interactiveTemplate: `<ModusWcButton @onclick="OpenModal">Open Modal</ModusWcButton>
<ModusWcModal @attributes="context.Args" ModalId="@_modalId">
    <span slot="header">Modal Title</span>
    <span slot="content">This is sample modal content.</span>
    <div slot="footer" style="display:flex;gap:0.5rem;">
        <ModusWcButton Variant="outlined" @onclick="CloseModal">Cancel</ModusWcButton>
        <ModusWcButton @onclick="CloseModal">Confirm</ModusWcButton>
    </div>
</ModusWcModal>`,
    defaultTemplate: `
<ModusWcModal ModalId="demo-modal">
    <span slot="header">Modal Title</span>
    <span slot="content">This is sample modal content.</span>
    <div slot="footer" style="display:flex;gap:0.5rem;">
        <ModusWcButton Variant="outlined">Cancel</ModusWcButton>
        <ModusWcButton>Confirm</ModusWcButton>
    </div>
</ModusWcModal>`,
  },
  ModusWcTooltip: {
    defaultTemplate: `
<ModusWcTooltip Content="Tooltip content" Position="auto">
    <ModusWcBadge>Hover</ModusWcBadge>
</ModusWcTooltip>`,
  },
  ModusWcDropdownMenu: {
    defaultTemplate: `
<ModusWcDropdownMenu>
    <div slot="button" style="display:flex;align-items:center;gap:4px;">
        Menu
        <ModusWcIcon Name="expand_more" Size="sm" />
    </div>
    <div slot="menu">
        <ModusWcMenuItem Label="Action 1" Value="1" />
        <ModusWcMenuItem Label="Action 2" Value="2" />
        <ModusWcMenuItem Label="Action 3" Value="3" Disabled="true" />
    </div>
</ModusWcDropdownMenu>`,
  },
  ModusWcThemeProvider: {
    defaultTemplate: `
<ModusWcThemeProvider Theme="modus-classic-light">
    <ModusWcButton>Themed Button</ModusWcButton>
    <ModusWcAlert AlertTitle="Themed Alert" Variant="info" />
</ModusWcThemeProvider>`,
  },
  ModusWcButtonGroup: {
    defaultTemplate: `
<ModusWcButtonGroup>
    <ModusWcButton>Button 1</ModusWcButton>
    <ModusWcButton>Button 2</ModusWcButton>
    <ModusWcButton>Button 3</ModusWcButton>
</ModusWcButtonGroup>`,
  },
  ModusWcPanel: {
    defaultTemplate: `
<ModusWcPanel Style="height:400px; width:280px;">
    <div slot="header">Panel Header</div>
    <div slot="body">
        <ModusWcMenu Size="lg">
            <ModusWcMenuItem Label="Dashboard" />
            <ModusWcMenuItem Label="Projects" />
            <ModusWcMenuItem Label="Team" />
            <ModusWcMenuItem Label="Calendar" />
        </ModusWcMenu>
    </div>
    <div slot="footer" style="padding:0.5rem;">
        <ModusWcButton Size="sm" Variant="borderless">
            <ModusWcIcon Name="settings" />
            Settings
        </ModusWcButton>
    </div>
</ModusWcPanel>`,
  },
  ModusWcUtilityPanel: {
    defaultTemplate: `
<ModusWcUtilityPanel Expanded="true">
    <div slot="header">Utility Panel Header</div>
    <div slot="body">
        <p>This is the utility panel body content.</p>
        <p>You can add any content here including forms, lists, or other components.</p>
    </div>
    <div slot="footer" style="display:flex;gap:0.5rem;padding:0.5rem;">
        <ModusWcButton Color="tertiary" Size="sm" Variant="outlined">Close</ModusWcButton>
        <ModusWcButton Size="sm">Save</ModusWcButton>
    </div>
</ModusWcUtilityPanel>`,
    interactiveTemplate: `<ModusWcUtilityPanel @attributes="context.Args" Expanded="true">
    <div slot="header">Utility Panel Header</div>
    <div slot="body">
        <p>This is the utility panel body content.</p>
        <p>You can add any content here including forms, lists, or other components.</p>
    </div>
    <div slot="footer" style="display:flex;gap:0.5rem;padding:0.5rem;">
        <ModusWcButton Color="tertiary" Size="sm" Variant="outlined">Close</ModusWcButton>
        <ModusWcButton Size="sm">Save</ModusWcButton>
    </div>
</ModusWcUtilityPanel>`,
  },
  ModusWcToolbar: {
    defaultTemplate: `
<ModusWcToolbar>
    <div slot="start" style="display:flex;gap:0.5rem;">
        <ModusWcButton>Save</ModusWcButton>
        <ModusWcButton Variant="outlined">Cancel</ModusWcButton>
    </div>
    <div slot="center">Center</div>
    <div slot="end">
        <ModusWcButton Variant="borderless">
            <ModusWcIcon Name="settings" />
        </ModusWcButton>
    </div>
</ModusWcToolbar>`,
  },
  ModusWcAutocomplete: {
    codeBlock: `
    private object[] _options = [
        new { label = "Apple",  value = "apple" },
        new { label = "Banana", value = "banana" },
        new { label = "Cherry", value = "cherry" },
        new { label = "Date",   value = "date" },
    ];`,
    defaultTemplate: `<ModusWcAutocomplete Label="Search fruit" Options="@_options" />`,
  },
  ModusWcPagination: {
    defaultTemplate: `<ModusWcPagination />`,
  },
  ModusWcToast: {
    defaultTemplate: `
<div style="height:200px; position:relative;">
    <ModusWcToast Position="top-end">
        <ModusWcAlert AlertTitle="Operation Completed!" AlertDescription="Your changes were saved." Variant="success" Dismissible="true" />
    </ModusWcToast>
</div>`,
    interactiveTemplate: `<div style="height:200px; position:relative;">
    <ModusWcToast @attributes="context.Args">
        <ModusWcAlert AlertTitle="Operation Completed!" AlertDescription="Your changes were saved." Variant="success" Dismissible="true" />
    </ModusWcToast>
</div>`,
  },
};

// ── Simple default content per component (for components not in overrides) ─
const SIMPLE_DEFAULTS = {
  ModusWcButton: `<ModusWcButton Color="primary">Click me</ModusWcButton>`,
  ModusWcAlert: `<ModusWcAlert AlertTitle="New message!" AlertDescription="You have 3 new messages." Variant="info" />`,
  ModusWcAvatar: `<ModusWcAvatar Alt="Example avatar" ImgSrc="https://i.pinimg.com/474x/73/54/79/7354794bf3873c3ef2666f778da4bcac.jpg" Size="md" />`,
  ModusWcBadge: `<ModusWcBadge>Badge</ModusWcBadge>`,
  ModusWcCheckbox: `<ModusWcCheckbox Label="Label" />`,
  ModusWcChip: `<ModusWcChip Label="Chip" ShowRemove="true" />`,
  ModusWcDate: `<ModusWcDate Label="Label" />`,
  ModusWcDivider: `<ModusWcDivider />`,
  ModusWcFileDropzone: `<ModusWcFileDropzone />`,
  ModusWcHandle: `<ModusWcHandle />`,
  ModusWcIcon: `<ModusWcIcon Name="alert" Size="md" />`,
  ModusWcInputFeedback: `<ModusWcInputFeedback Message="This field is required." Variant="error" />`,
  ModusWcInputLabel: `<ModusWcInputLabel Label="Field Label" Required="true" />`,
  ModusWcLoader: `<ModusWcLoader Size="lg" />`,
  ModusWcLogo: `<ModusWcLogo />`,
  ModusWcMenuItem: `<ModusWcMenuItem Label="Menu Item" />`,
  ModusWcNumberInput: `<ModusWcNumberInput Label="Label" />`,
  ModusWcProgress: `<ModusWcProgress Value="65" />`,
  ModusWcRadio: `<ModusWcRadio Label="Option A" />`,
  ModusWcRating: `<ModusWcRating Value="3" />`,
  ModusWcSkeleton: `<ModusWcSkeleton />`,
  ModusWcSlider: `<ModusWcSlider Label="Label" />`,
  ModusWcSwitch: `<ModusWcSwitch Label="Label" />`,
  ModusWcTextInput: `<ModusWcTextInput Label="Label" />`,
  ModusWcTextarea: `<ModusWcTextarea Label="Label" />`,
  ModusWcThemeSwitcher: `<ModusWcThemeSwitcher />`,
  ModusWcTimeInput: `<ModusWcTimeInput Label="Label" />`,
  ModusWcTypography: `<ModusWcTypography Hierarchy="p" Label="The quick brown fox jumps over the lazy dog" />`,
};

// ── Default slot content for the interactive story per component ──────────
// Used inside <ComponentName @attributes="context.Args">…</ComponentName>
// so the component renders with visible child content.
// Not needed for components that use the Label prop or have interactiveTemplate overrides.
const INTERACTIVE_CHILD_CONTENT = {
  ModusWcButton: 'Click me',
  ModusWcBadge: 'Badge',
  ModusWcCollapse: '<div slot="content">Collapse content goes here.</div>',
};

// ── Parser ─────────────────────────────────────────────────────────────────

function parseRazorCs(filePath) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');

  const component = {
    name: '',
    description: '',
    parameters: [],
  };

  let pendingComment = '';
  let pendingAllowed = [];
  let inClassSummary = false;
  let classSummaryLines = [];
  let classSummaryDone = false;

  for (let i = 0; i < lines.length; i++) {
    const raw = lines[i];
    const line = raw.trim();

    // Detect class-level summary
    if (!classSummaryDone) {
      if (line === '/// <summary>') {
        inClassSummary = true;
        classSummaryLines = [];
        continue;
      }
      if (inClassSummary) {
        if (line === '/// </summary>') {
          inClassSummary = false;
          // Peek ahead for "public partial class"
          let j = i + 1;
          while (j < lines.length && lines[j].trim() === '') j++;
          if (lines[j] && lines[j].includes('public partial class')) {
            component.description = classSummaryLines
              .join(' ')
              .replace(/\s+/g, ' ')
              .trim();
            classSummaryDone = true;
          }
        } else {
          classSummaryLines.push(line.replace(/^\/\/\/\s?/, ''));
        }
        continue;
      }
    }

    // Class name
    const classMatch = line.match(/^public partial class (\w+)/);
    if (classMatch) {
      component.name = classMatch[1];
      continue;
    }

    // Parameter-level comment accumulation
    if (line === '/// <summary>') {
      pendingComment = '';
      pendingAllowed = [];
      continue;
    }
    if (line === '/// </summary>') {
      continue;
    }
    if (line.startsWith('/// Allowed values:')) {
      const raw = line.replace('/// Allowed values:', '').trim();
      pendingAllowed = raw
        .split(',')
        .map((v) => v.trim().replace(/^"+|"+$/g, ''));
      continue;
    }
    if (line.startsWith('/// ')) {
      pendingComment += line.replace(/^\/\/\/\s?/, '') + ' ';
      continue;
    }

    // Parameter declaration
    const paramMatch = line.match(
      /^\[Parameter\] public (\S+?) (\w+) \{ get; set; \}(?: = (.+?);)?/
    );
    if (paramMatch) {
      const type = paramMatch[1];
      const name = paramMatch[2];
      let defaultVal = paramMatch[3] ?? null;

      // Normalize default value string
      if (defaultVal !== null) {
        defaultVal = defaultVal.replace(/^"(.*)"$/, '$1').replace(/^null$/, '');
      }

      if (
        name !== 'AdditionalAttributes' &&
        !name.startsWith('On') // skip event parameters
      ) {
        component.parameters.push({
          name,
          type,
          defaultVal,
          description: pendingComment.trim(),
          allowedValues: [...pendingAllowed],
        });
      }

      pendingComment = '';
      pendingAllowed = [];
    }
  }

  return component;
}

// ── Story template builder ────────────────────────────────────────────────

function getCategory(name) {
  return CATEGORY_MAP[name] ?? 'Components';
}

/** Derive a human-friendly display name from PascalCase, e.g. ModusWcButton → Button */
function displayName(name) {
  return name
    .replace(/^ModusWc/, '')
    .replace(/([A-Z])/g, ' $1')
    .trim();
}

/** Build the default story Template markup */
function buildDefaultTemplate(comp) {
  const override = COMPONENT_OVERRIDES[comp.name];
  if (override?.defaultTemplate) return override.defaultTemplate.trim();
  if (SIMPLE_DEFAULTS[comp.name]) return SIMPLE_DEFAULTS[comp.name];

  // Generic fallback: render the component bare
  return `<${comp.name} />`;
}

/** Build extra @code block lines from override */
function buildCodeBlock(comp) {
  const override = COMPONENT_OVERRIDES[comp.name];
  return override?.codeBlock ?? '';
}

/** Build variant stories for parameters with known allowed values */
function buildVariantStories(comp) {
  const stories = [];

  // Find the most interesting parameter with allowed values (prefer Variant/Size/Color)
  const priority = ['Variant', 'Color', 'Size', 'Type', 'Shape', 'TabStyle'];
  let picked = null;
  for (const p of priority) {
    const found = comp.parameters.find(
      (x) => x.name === p && x.allowedValues.length > 1
    );
    if (found) {
      picked = found;
      break;
    }
  }
  if (!picked) {
    picked = comp.parameters.find((x) => x.allowedValues.length > 1);
  }
  if (!picked) return '';

  const baseContent = buildDefaultTemplate(comp);

  // Skip variant generation if the param is already hard-coded in the template
  // (check PascalCase Blazor attribute name, e.g. Variant="..." or TabStyle="...")
  const alreadySet = new RegExp(`\\b${picked.name}=`).test(baseContent);
  if (alreadySet) return '';

  for (const val of picked.allowedValues) {
    if (!val) continue;
    // Inject the variant value into the base template (only for simple single-tag templates)
    let template = baseContent;
    if (template.startsWith('<' + comp.name)) {
      template = template.replace(
        new RegExp(`^(<${comp.name})`),
        `$1 ${picked.name}="${val}"`
      );
    } else {
      // Multi-line / complex template – skip variant injection
      continue;
    }

    const storyName = `${displayName(comp.name)} - ${picked.name} ${capitalize(val)}`;
    stories.push(`
    <Story Name="${storyName}">
        <Template>
            ${template}
        </Template>
    </Story>`);
  }

  return stories.join('\n');
}

function capitalize(s) {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

/**
 * Extract the child content between the opening and closing tags of `compName`
 * from an existing template string, so the interactive story can reuse it.
 */
function extractInnerContent(templateHtml, compName) {
  const regex = new RegExp(
    `<${compName}[^>]*>([\\s\\S]*?)<\\/${compName}>`,
    'i'
  );
  const match = templateHtml.match(regex);
  return match ? match[1].trim() : null;
}

/**
 * Build the <Arguments>…</Arguments> block that seeds the Controls panel with
 * the component's default parameter values.  Only simple (string?, bool?,
 * double?) params with non-empty defaults are included; complex object? params
 * and RenderFragment/Dictionary params are skipped.
 */
function buildArgumentsBlock(comp) {
  const lines = [];

  for (const param of comp.parameters) {
    const { name, type, defaultVal } = param;

    if (type === 'object?' || type === 'object') continue;
    if (type.startsWith('RenderFragment')) continue;
    if (type.startsWith('Dictionary')) continue;
    if (type.startsWith('EventCallback')) continue;
    if (defaultVal === null || defaultVal === '') continue;

    let valueExpr;
    if (type === 'bool?' || type === 'bool') {
      valueExpr = `"@${defaultVal}"`;
    } else if (type === 'double?' || type === 'double') {
      valueExpr = `"@(${defaultVal})"`;
    } else {
      // string? — wrap in a C# expression so Blazor infers the correct type
      valueExpr = `'@("${defaultVal}")'`;
    }

    lines.push(`            <Arg For="_ => _.${name}" Value=${valueExpr} />`);
  }

  if (lines.length === 0) return '';
  return `        <Arguments>\n${lines.join('\n')}\n        </Arguments>\n`;
}

/**
 * Build the interactive <Template> markup that uses @attributes="context.Args"
 * so BlazingStory's Controls panel drives all simple parameters live.
 *
 * Complex (object?) parameters that have backing fields in COMPONENT_OVERRIDES
 * are bound explicitly after @attributes so they override any stale value the
 * controls panel might set.
 */
function buildInteractiveTemplate(comp) {
  const override = COMPONENT_OVERRIDES[comp.name];
  const tag = comp.name;

  // Use explicit interactive template if provided
  if (override?.interactiveTemplate) return override.interactiveTemplate.trim();

  // Complex params need explicit backing-field bindings
  const complexParams = comp.parameters.filter(
    (p) => p.type === 'object?' || p.type === 'object'
  );
  const explicitAttrs = [];
  if (override?.codeBlock) {
    for (const param of complexParams) {
      const field = `_${param.name.charAt(0).toLowerCase() + param.name.slice(1)}`;
      if (override.codeBlock.includes(field)) {
        explicitAttrs.push(`${param.name}="@${field}"`);
      }
    }
  }

  const attrsParts = ['@attributes="context.Args"', ...explicitAttrs];
  const attrsStr = attrsParts.join('\n        ');

  // Determine child content: prefer the explicit map, then extract from override
  // template, then fall back to nothing (self-close).
  let childContent = INTERACTIVE_CHILD_CONTENT[comp.name] ?? null;
  if (childContent === null && override?.defaultTemplate) {
    childContent = extractInnerContent(override.defaultTemplate, tag);
  }

  if (childContent !== null) {
    return `<${tag} ${attrsStr}>\n    ${childContent}\n</${tag}>`;
  }
  return `<${tag} ${attrsStr} />`;
}

/** Generate full story file content */
function generateStoryFile(comp) {
  const override = COMPONENT_OVERRIDES[comp.name];
  const category = getCategory(comp.name);
  const display = displayName(comp.name);
  const directives = (override?.directives ?? '').trim();
  const codeBlock = buildCodeBlock(comp);
  const argumentsBlock = buildArgumentsBlock(comp);
  const interactiveTemplate = buildInteractiveTemplate(comp);
  const variantStories = buildVariantStories(comp);

  const hasCode = !!codeBlock.trim();
  const prefix = directives ? `${directives}\n\n` : '';

  // _Imports.razor in Stories/ adds @using BlazingStory.Components, BlazingStory.Types, ModusWebComponents.Blazor
  return `${prefix}@attribute [Stories("${category}/${display}")]

<Stories TComponent="${comp.name}">

    <Story Name="Default">
${argumentsBlock}        <Template>
            ${interactiveTemplate}
        </Template>
    </Story>
${variantStories}
</Stories>
${
  hasCode
    ? `
@code {
${codeBlock}
}
`
    : ''
}`;
}

// ── Main ───────────────────────────────────────────────────────────────────

function main() {
  if (!fs.existsSync(COMPONENTS_DIR)) {
    console.error(`Components directory not found: ${COMPONENTS_DIR}`);
    process.exit(1);
  }

  fs.mkdirSync(STORIES_OUT_DIR, { recursive: true });
  fs.mkdirSync(MAUI_STORIES_OUT_DIR, { recursive: true });

  const files = fs
    .readdirSync(COMPONENTS_DIR)
    .filter((f) => f.endsWith('.razor.cs'));

  let generated = 0;

  for (const file of files) {
    const comp = parseRazorCs(path.join(COMPONENTS_DIR, file));
    if (!comp.name) continue;

    const storyContent = generateStoryFile(comp);
    const outFile = path.join(STORIES_OUT_DIR, `${comp.name}Stories.razor`);
    fs.writeFileSync(outFile, storyContent, 'utf-8');
    const mauiOutFile = path.join(
      MAUI_STORIES_OUT_DIR,
      `${comp.name}Stories.razor`
    );
    fs.writeFileSync(mauiOutFile, storyContent, 'utf-8');
    console.log(
      `  ✓  ${comp.name}Stories.razor  (${getCategory(comp.name)}/${displayName(comp.name)})`
    );
    generated++;
  }

  console.log(`\nGenerated ${generated} story files → ${STORIES_OUT_DIR}`);
  console.log(`Generated ${generated} story files → ${MAUI_STORIES_OUT_DIR}`);
}

main();
