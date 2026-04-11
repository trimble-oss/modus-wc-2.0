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

// ── Per-component extra @code blocks and custom default template overrides ─
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
    defaultTemplate: `<ModusWcNavbar />`,
  },
  ModusWcProfileMenu: {
    codeBlock: `
    private object _profileProps = new { name = "Jane Doe", email = "jane@example.com" };`,
    defaultTemplate: `<ModusWcProfileMenu ProfileProps="@_profileProps" />`,
  },
  ModusWcSideNavigation: {
    defaultTemplate: `
<ModusWcSideNavigation Mode="overlay" MaxWidth="256px">
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
    defaultTemplate: `
<ModusWcAccordion>
    <ModusWcCollapse Label="Section One">
        <p>Content for the first section.</p>
    </ModusWcCollapse>
    <ModusWcCollapse Label="Section Two">
        <p>Content for the second section.</p>
    </ModusWcCollapse>
</ModusWcAccordion>`,
  },
  ModusWcCollapse: {
    defaultTemplate: `
<ModusWcCollapse Label="Expandable Section">
    <p>Collapsed content is revealed when the header is clicked.</p>
</ModusWcCollapse>`,
  },
  ModusWcCard: {
    defaultTemplate: `
<ModusWcCard Style="max-width:320px;">
    <div slot="title">Card Title</div>
    <p>This is the card body. It can contain any content.</p>
    <ModusWcButton slot="footer">Action</ModusWcButton>
</ModusWcCard>`,
  },
  ModusWcModal: {
    defaultTemplate: `
<ModusWcButton>Open Modal</ModusWcButton>
<ModusWcModal ModalId="demo-modal">
    <div slot="header">Modal Title</div>
    <p>Modal body content goes here.</p>
    <div slot="footer">
        <ModusWcButton Variant="outlined">Cancel</ModusWcButton>
        <ModusWcButton>Confirm</ModusWcButton>
    </div>
</ModusWcModal>`,
  },
  ModusWcTooltip: {
    defaultTemplate: `
<ModusWcTooltip Text="Helpful tooltip text" Position="top">
    <ModusWcButton>Hover me</ModusWcButton>
</ModusWcTooltip>`,
  },
  ModusWcDropdownMenu: {
    defaultTemplate: `
<ModusWcDropdownMenu>
    <ModusWcButton slot="anchor">Open Menu</ModusWcButton>
    <ModusWcMenu slot="content">
        <ModusWcMenuItem Label="Action 1" />
        <ModusWcMenuItem Label="Action 2" />
        <ModusWcMenuItem Label="Action 3" Disabled="true" />
    </ModusWcMenu>
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
    <ModusWcButton>First</ModusWcButton>
    <ModusWcButton>Second</ModusWcButton>
    <ModusWcButton>Third</ModusWcButton>
</ModusWcButtonGroup>`,
  },
  ModusWcPanel: {
    defaultTemplate: `
<ModusWcPanel Style="height:300px;">
    <div slot="header">Panel Header</div>
    <p>Panel body content.</p>
    <div slot="footer">Panel Footer</div>
</ModusWcPanel>`,
  },
  ModusWcUtilityPanel: {
    defaultTemplate: `
<ModusWcUtilityPanel Style="height:300px;" Heading="Utility Panel">
    <p>Utility panel content.</p>
</ModusWcUtilityPanel>`,
  },
  ModusWcToolbar: {
    defaultTemplate: `
<ModusWcToolbar>
    <ModusWcButton slot="start">Save</ModusWcButton>
    <ModusWcButton slot="start" Variant="outlined">Cancel</ModusWcButton>
    <ModusWcButton slot="end" Variant="borderless">
        <ModusWcIcon Name="settings" />
    </ModusWcButton>
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
};

// ── Simple default content per component (for components not in overrides) ─
const SIMPLE_DEFAULTS = {
  ModusWcButton: `<ModusWcButton>Click Me</ModusWcButton>`,
  ModusWcAlert: `<ModusWcAlert AlertTitle="Information" AlertDescription="This is an informational alert." Variant="info" />`,
  ModusWcAvatar: `<ModusWcAvatar Initials="JD" Size="md" />`,
  ModusWcBadge: `<ModusWcBadge>42</ModusWcBadge>`,
  ModusWcCheckbox: `<ModusWcCheckbox Label="Accept terms and conditions" />`,
  ModusWcChip: `<ModusWcChip>Label</ModusWcChip>`,
  ModusWcDate: `<ModusWcDate Label="Select a date" />`,
  ModusWcDivider: `<ModusWcDivider />`,
  ModusWcFileDropzone: `<ModusWcFileDropzone />`,
  ModusWcHandle: `<ModusWcHandle />`,
  ModusWcIcon: `<ModusWcIcon Name="sun" Size="md" />`,
  ModusWcInputFeedback: `<ModusWcInputFeedback Message="This field is required." Variant="error" />`,
  ModusWcInputLabel: `<ModusWcInputLabel Label="Field Label" Required="true" />`,
  ModusWcLoader: `<ModusWcLoader Size="lg" />`,
  ModusWcLogo: `<ModusWcLogo />`,
  ModusWcMenuItem: `<ModusWcMenuItem Label="Menu Item" />`,
  ModusWcNumberInput: `<ModusWcNumberInput Label="Enter a number" />`,
  ModusWcProgress: `<ModusWcProgress Value="65" />`,
  ModusWcRadio: `<ModusWcRadio Label="Option A" />`,
  ModusWcRating: `<ModusWcRating Value="3" />`,
  ModusWcSkeletion: `<ModusWcSkeleton />`,
  ModusWcSkeleton: `<ModusWcSkeleton />`,
  ModusWcSlider: `<ModusWcSlider Label="Volume" />`,
  ModusWcSwitch: `<ModusWcSwitch Label="Enable feature" />`,
  ModusWcTextInput: `<ModusWcTextInput Label="Your name" Placeholder="Enter your name…" />`,
  ModusWcTextarea: `<ModusWcTextarea Label="Comments" Placeholder="Enter your comments…" />`,
  ModusWcThemeSwitcher: `<ModusWcThemeSwitcher />`,
  ModusWcTimeInput: `<ModusWcTimeInput Label="Select time" />`,
  ModusWcToast: `<ModusWcToast Message="Operation completed successfully!" Variant="success" />`,
  ModusWcTypography: `<ModusWcTypography Variant="h2">Modus Heading</ModusWcTypography>`,
};

// ── Default slot content for the interactive story per component ──────────
// These are used inside the <ComponentName @attributes="context.Args">…</ComponentName>
// wrapper so the component renders with visible child content.
const INTERACTIVE_CHILD_CONTENT = {
  ModusWcButton: 'Click Me',
  ModusWcBadge: '42',
  ModusWcChip: 'Label',
  ModusWcTypography: 'Heading Text',
  ModusWcCollapse: '<p>Collapsible content goes here.</p>',
  ModusWcUtilityPanel: '<p>Panel content goes here.</p>',
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

      // Normalise default value string
      if (defaultVal !== null) {
        defaultVal = defaultVal
          .replace(/^"(.*)"$/, '$1')
          .replace(/^null$/, '')
          .replace(/^true$/, 'true')
          .replace(/^false$/, 'false');
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
  return name.replace(/^ModusWc/, '').replace(/([A-Z])/g, ' $1').trim();
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
  const regex = new RegExp(`<${compName}[^>]*>([\\s\\S]*?)<\\/${compName}>`, 'i');
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

  // Complex params need explicit backing-field bindings
  const complexParams = comp.parameters.filter(
    (p) => p.type === 'object?' || p.type === 'object',
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
  const category = getCategory(comp.name);
  const display = displayName(comp.name);
  const codeBlock = buildCodeBlock(comp);
  const argumentsBlock = buildArgumentsBlock(comp);
  const interactiveTemplate = buildInteractiveTemplate(comp);
  const variantStories = buildVariantStories(comp);

  const hasCode = !!codeBlock.trim();

  // _Imports.razor in Stories/ adds @using BlazingStory.Components, BlazingStory.Types, ModusWebComponents.Blazor
  return `@attribute [Stories("${category}/${display}")]

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
    console.log(`  ✓  ${comp.name}Stories.razor  (${getCategory(comp.name)}/${displayName(comp.name)})`);
    generated++;
  }

  console.log(`\nGenerated ${generated} story files → ${STORIES_OUT_DIR}`);
}

main();
