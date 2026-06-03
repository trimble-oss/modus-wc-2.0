#!/usr/bin/env node
/**
 * extract-blazor-docs.ts
 *
 * Parses every .razor.cs (and matching .razor) Blazor wrapper component in
 * the stencil-generated output and augments each corresponding component-docs
 * JSON file with a `blazor` section for use in the MCP server.
 *
 * Usage:
 *   npx tsx mcp/scripts/extract-blazor-docs.ts \
 *     --blazor-dir  integrations/blazor/stencil-generated/ModusWebComponents.Blazor/Components \
 *     --docs-dir    mcp/versions/1.2.0/component-docs
 *
 * Both flags are required. The --docs-dir must already contain the JSON files
 * produced by extract-docs.ts (or its base fallback copies).
 *
 * The script adds / replaces a `blazor` key inside each JSON file and updates
 * `_all_components.json` to record that Blazor data is present.
 */

import { readFileSync, writeFileSync, readdirSync, existsSync } from 'fs';
import { join, resolve } from 'path';

// ---------------------------------------------------------------------------
// CLI argument parsing
// ---------------------------------------------------------------------------

function parseArgs(): { blazorDir: string; docsDir: string } {
  const args = process.argv.slice(2);
  let blazorDir = '';
  let docsDir = '';
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--blazor-dir' && args[i + 1]) blazorDir = args[++i];
    else if (args[i] === '--docs-dir' && args[i + 1]) docsDir = args[++i];
  }
  if (!blazorDir || !docsDir) {
    console.error('Usage: extract-blazor-docs.ts --blazor-dir <path> --docs-dir <path>');
    process.exit(1);
  }
  return { blazorDir: resolve(blazorDir), docsDir: resolve(docsDir) };
}

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

interface BlazorParam {
  /** PascalCase C# parameter name e.g. "CustomClass" */
  name: string;
  /** C# type string e.g. "string?", "bool?", "double?", "object?" */
  csharpType: string;
  /** Human-readable description from the XML doc comment */
  description: string;
  /** Allowed string values parsed from "Allowed values: ..." in the doc comment */
  allowedValues: string[];
  /** Default value as written in C# e.g. `"primary"`, `false`, `null` */
  default: string | null;
}

interface BlazorEvent {
  /** C# EventCallback parameter name e.g. "OnButtonClick" */
  name: string;
  /** The generic type argument of EventCallback<T> e.g. "object?", "bool" */
  callbackType: string;
  /** Human-readable description from the XML doc comment */
  description: string;
}

interface BlazorSlot {
  /** Razor slot kind: "default" (ChildContent) or a named RenderFragment param */
  name: string;
  /** C# parameter name e.g. "ChildContent" */
  paramName: string;
  /** Human-readable description */
  description: string;
}

export interface BlazorComponentDoc {
  /** Fully-qualified C# class name e.g. "ModusWebComponents.Blazor.ModusWcButton" */
  className: string;
  /** Component description from class-level XML doc */
  description: string;
  /** Bindable [Parameter] properties (excludes EventCallback and RenderFragment) */
  parameters: BlazorParam[];
  /** EventCallback [Parameter] properties */
  events: BlazorEvent[];
  /** RenderFragment [Parameter] slot properties */
  slots: BlazorSlot[];
  /** Whether AdditionalAttributes (aria-*, data-*, id, etc.) are supported */
  supportsAdditionalAttributes: boolean;
  /** The .razor template showing how the component renders its parameters */
  razorTemplate: string;
  /** A ready-to-use Razor usage example */
  usageExample: string;
  /**
   * Important note about bool? parameters: C# bool.ToString() produces "True"/"False"
   * (capitalized) which Stencil would misinterpret. The generated wrapper always emits
   * lowercase "true"/"false" via the @(Prop == true ? "true" : "false") pattern.
   */
  booleanBindingNote: string;
}

// ---------------------------------------------------------------------------
// Helpers
// ---------------------------------------------------------------------------

/** Extract the text inside the nearest preceding XML doc comment block */
function extractXmlDoc(lines: string[], lineIndex: number): string {
  let j = lineIndex - 1;
  while (j >= 0 && lines[j].trim() === '') j--;

  const parts: string[] = [];
  if (j >= 0 && lines[j].trim() === '/// </summary>') {
    j--;
    while (j >= 0 && lines[j].trim() !== '/// <summary>') {
      const text = lines[j].trim().replace(/^\/\/\/\s?/, '');
      if (text) parts.unshift(text);
      j--;
    }
  }
  return parts.join(' ').trim();
}

/** Parse "Allowed values: "a", "b", "c"" out of an XML doc string */
function parseAllowedValues(docText: string): string[] {
  const m = docText.match(/Allowed values:\s*(.+)/i);
  if (!m) return [];
  return m[1]
    .split(',')
    .map((v) => v.trim().replace(/^["']|["']$/g, ''))
    .filter(Boolean);
}

/** Strip the "Allowed values: ..." line from a description */
function stripAllowedValues(docText: string): string {
  return docText.replace(/\s*Allowed values:.*$/i, '').trim();
}

/** Convert PascalCase class name to kebab-case component tag e.g. ModusWcButton → modus-wc-button */
function classNameToTag(className: string): string {
  return className
    .replace(/([A-Z])/g, '-$1')
    .toLowerCase()
    .replace(/^-/, '');
}

// ---------------------------------------------------------------------------
// Parse a single .razor.cs file
// ---------------------------------------------------------------------------

function parseRazorCodeBehind(csPath: string): Omit<BlazorComponentDoc, 'razorTemplate' | 'usageExample'> | null {
  if (!existsSync(csPath)) return null;

  const content = readFileSync(csPath, 'utf-8');
  const lines = content.split('\n');

  // Derive class name from filename e.g. ModusWcButton.razor.cs → ModusWcButton
  const fileName = csPath.split('/').pop()!.replace('.razor.cs', '');
  const className = `ModusWebComponents.Blazor.${fileName}`;

  // Component-level description: first XML doc block in the file (above the class declaration)
  let description = '';
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].match(/public partial class/)) {
      description = extractXmlDoc(lines, i);
      break;
    }
  }

  const parameters: BlazorParam[] = [];
  const events: BlazorEvent[] = [];
  const slots: BlazorSlot[] = [];
  let supportsAdditionalAttributes = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    // Additional attributes pass-through
    if (line.includes('CaptureUnmatchedValues = true')) {
      supportsAdditionalAttributes = true;
      continue;
    }

    // Skip non-parameter lines (inject, private fields, methods, etc.)
    if (!line.startsWith('[Parameter]')) continue;

    const docText = extractXmlDoc(lines, i);

    // Consume multi-line parameter declarations
    let decl = line;
    let j = i;
    while (!decl.includes(';') && !decl.includes('{') && j + 1 < lines.length) {
      j++;
      decl += ' ' + lines[j].trim();
    }

    // EventCallback<T> OnXxx { get; set; }
    const eventMatch = decl.match(/EventCallback<([^>]+)>\s+(\w+)\s*\{/);
    if (eventMatch) {
      events.push({
        name: eventMatch[2],
        callbackType: eventMatch[1].trim(),
        description: docText,
      });
      i = j;
      continue;
    }

    // RenderFragment? Xxx { get; set; }
    const slotMatch = decl.match(/RenderFragment\??\s+(\w+)\s*\{/);
    if (slotMatch) {
      const paramName = slotMatch[1];
      slots.push({
        name: paramName === 'ChildContent' ? 'default' : paramName,
        paramName,
        description: docText || (paramName === 'ChildContent' ? 'Default slot content' : `Named slot: ${paramName}`),
      });
      i = j;
      continue;
    }

    // Dictionary<string, object>? — already handled by CaptureUnmatchedValues above
    if (decl.includes('Dictionary<')) {
      i = j;
      continue;
    }

    // Regular [Parameter] public TYPE? Name { get; set; } = default;
    const paramMatch = decl.match(/\[Parameter\]\s+public\s+(\S+)\s+(\w+)\s*\{\s*get;\s*set;\s*\}\s*(?:=\s*(.+?))?\s*;/);
    if (paramMatch) {
      const csharpType = paramMatch[1];
      const name = paramMatch[2];
      const rawDefault = paramMatch[3]?.trim().replace(/;$/, '') ?? null;

      const allowedValues = parseAllowedValues(docText);
      const cleanDesc = stripAllowedValues(docText);

      parameters.push({
        name,
        csharpType,
        description: cleanDesc,
        allowedValues,
        default: rawDefault,
      });
      i = j;
      continue;
    }
  }

  return {
    className,
    description,
    parameters,
    events,
    slots,
    supportsAdditionalAttributes,
    booleanBindingNote:
      'bool? parameters are normal C# booleans from the consumer perspective — just bind them ' +
      'as @myBoolVar or true/false. Internally the wrapper renders lowercase "true"/"false" ' +
      'string attributes because C# bool.ToString() produces "True"/"False" (capitalized) ' +
      "which Stencil's runtime would misinterpret. This is handled automatically; " +
      'you do not need to use the ternary pattern in your own Razor pages.',
  };
}

// ---------------------------------------------------------------------------
// Read the .razor template
// ---------------------------------------------------------------------------

function readRazorTemplate(razorPath: string): string {
  if (!existsSync(razorPath)) return '';
  return readFileSync(razorPath, 'utf-8')
    .split('\n')
    .filter((l) => !l.startsWith('@namespace'))
    .join('\n')
    .trim();
}

// ---------------------------------------------------------------------------
// Build a concise Razor usage example
// ---------------------------------------------------------------------------

function buildUsageExample(doc: Omit<BlazorComponentDoc, 'razorTemplate' | 'usageExample'>, tag: string): string {
  const className = tag
    .split('-')
    .map((p) => p.charAt(0).toUpperCase() + p.slice(1))
    .join('');

  // Consumer-facing usage: bool? params are just normal C# booleans from the caller's
  // perspective. The ternary lowercasing is an internal wrapper detail, not consumer concern.
  const attrLines = doc.parameters
    .filter((p) => p.csharpType !== 'object?' && !p.name.startsWith('_'))
    .slice(0, 4) // keep example concise
    .map((p) => `    ${p.name}="@${p.name}"`);

  const hasSlot = doc.slots.length > 0;
  const eventLines = doc.events.slice(0, 2).map((e) => `    ${e.name}="@Handle${e.name.replace(/^On/, '')}"`);

  const allAttrs = [...attrLines, ...eventLines];

  if (hasSlot) {
    return `<${className}${allAttrs.length ? '\n' + allAttrs.join('\n') : ''}>\n    Content here\n</${className}>`;
  } else if (allAttrs.length) {
    return `<${className}\n${allAttrs.join('\n')} />`;
  }
  return `<${className} />`;
}

// ---------------------------------------------------------------------------
// Orchestrator
// ---------------------------------------------------------------------------

async function main() {
  const { blazorDir, docsDir } = parseArgs();

  if (!existsSync(blazorDir)) {
    console.error(`Blazor components directory not found: ${blazorDir}`);
    process.exit(1);
  }
  if (!existsSync(docsDir)) {
    console.error(`Docs directory not found: ${docsDir}`);
    process.exit(1);
  }

  console.log('\nAugmenting component docs with Blazor data');
  console.log(`  blazor-dir: ${blazorDir}`);
  console.log(`  docs-dir:   ${docsDir}`);

  const csFiles = readdirSync(blazorDir).filter(
    (f) => f.endsWith('.razor.cs') && f.startsWith('ModusWc'),
  );

  let augmented = 0;
  let skipped = 0;
  const blazorComponents: string[] = [];

  for (const csFile of csFiles) {
    const componentClass = csFile.replace('.razor.cs', ''); // e.g. ModusWcButton
    const tag = classNameToTag(componentClass); // e.g. modus-wc-button
    const jsonPath = join(docsDir, `${tag}.json`);

    if (!existsSync(jsonPath)) {
      console.log(`  Skipping ${tag} (no JSON doc found in docs-dir)`);
      skipped++;
      continue;
    }

    const csPath = join(blazorDir, csFile);
    const razorPath = join(blazorDir, csFile.replace('.razor.cs', '.razor'));

    const parsed = parseRazorCodeBehind(csPath);
    if (!parsed) {
      console.log(`  Failed to parse: ${csFile}`);
      skipped++;
      continue;
    }

    const razorTemplate = readRazorTemplate(razorPath);
    const usageExample = buildUsageExample(parsed, tag);

    const blazorDoc: BlazorComponentDoc = {
      ...parsed,
      razorTemplate,
      usageExample,
    };

    const existing = JSON.parse(readFileSync(jsonPath, 'utf-8'));
    existing.blazor = blazorDoc;
    writeFileSync(jsonPath, JSON.stringify(existing, null, 2));

    blazorComponents.push(tag);
    console.log(
      `  ${tag}: ${parsed.parameters.length} params, ${parsed.events.length} events, ${parsed.slots.length} slots`,
    );
    augmented++;
  }

  // Update _all_components.json to record blazor coverage
  const allComponentsPath = join(docsDir, '_all_components.json');
  if (existsSync(allComponentsPath)) {
    const allComponents = JSON.parse(readFileSync(allComponentsPath, 'utf-8'));
    allComponents.blazor_components = blazorComponents.sort();
    allComponents.blazor_last_updated = String(Date.now() / 1000);
    writeFileSync(allComponentsPath, JSON.stringify(allComponents, null, 2));
    console.log(`\nUpdated _all_components.json (${blazorComponents.length} Blazor components)`);
  }

  console.log(`\nDone. Augmented: ${augmented}, Skipped: ${skipped}`);
}

main().catch((err) => {
  console.error(`Fatal: ${err}`);
  process.exit(1);
});
