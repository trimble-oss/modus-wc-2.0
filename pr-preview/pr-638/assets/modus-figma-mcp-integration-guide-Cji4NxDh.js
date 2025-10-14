import{j as n,M as t}from"./index-4T0yZWxD.js";import{useMDXComponents as s}from"./index-Cywp1lHW.js";import"./iframe-CX8ExqfP.js";import"./_commonjsHelpers-CqkleIqs.js";import"./index-CfOrKyLd.js";import"./index-DrFu-skq.js";function o(i){const e={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...s(),...i.components};return n.jsxs(n.Fragment,{children:[n.jsx(t,{title:"Documentation/Modus Figma MCP Integration Guide"}),`
`,n.jsx(e.h1,{id:"modus-figma-mcp-integration-guide",children:"Modus Figma MCP Integration Guide"}),`
`,n.jsx(e.h3,{id:"important-note",children:"Important Note"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Designer Collaboration is Critical"}),": The accuracy and effectiveness of this tool heavily depends on proper design setup in Figma. For optimal results, use the ",n.jsx(e.strong,{children:"Modus 2.0 component library"})," available in Figma rather than creating custom elements. While custom themes can still be applied, using the Modus 2.0 design system significantly improves component detection and mapping accuracy."]}),`
`,n.jsx(e.h2,{id:"overview",children:"Overview"}),`
`,n.jsx(e.p,{children:"This guide explains how to use the Modus Figma tools to convert Figma designs into Modus Web Components."}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#workflow-setup",children:"Workflow Setup"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#mcp-server-configuration",children:"MCP Server Configuration"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#json-configuration-for-mcp-setup",children:"JSON Configuration for MCP Setup"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#authentication-setup",children:"Authentication Setup"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#available-mcp-tools",children:"Available MCP Tools"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#1-analyze_figma",children:"1. analyze_figma"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#2-get_modus_component_data",children:"2. get_modus_component_data"})}),`
`]}),`
`]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.a,{href:"#implementation-workflows",children:"Implementation Workflows"}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#workflow-1-complete-page-analysis",children:"Workflow 1: Complete Page Analysis"})}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#workflow-2-component-specific-analysis",children:"Workflow 2: Component-Specific Analysis"})}),`
`]}),`
`]}),`
`,n.jsx(e.li,{children:n.jsx(e.a,{href:"#using-the-specification-file",children:"Using the Specification File"})}),`
`]}),`
`,n.jsx(e.h2,{id:"workflow-setup",children:"Workflow Setup"}),`
`,n.jsx(e.h3,{id:"mcp-server-configuration",children:"MCP Server Configuration"}),`
`,n.jsx(e.p,{children:"The MCP server is accessible at:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`https://flows-webhook.stage.trimble-ai.com/mcp/agentic/n8n-server/v1/modus
`})}),`
`,n.jsx(e.h3,{id:"json-configuration-for-mcp-setup",children:"JSON Configuration for MCP Setup"}),`
`,n.jsx(e.p,{children:"Add the following JSON code to your AI environment's MCP configuration file (e.g., mcp.json in Cursor/VS Code) for access:"}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`"modus_n8n_webhook": {
  "command": "npx",
  "args": [
    "mcp-remote",
    "https://flows-webhook.stage.trimble-ai.com/mcp/agentic/n8n-server/v1/modus",
    "--header",
    "Authorization: Bearer \${AUTH_TOKEN}"
  ],
  "env": {
    "AUTH_TOKEN": ""
  }
}
`})}),`
`,n.jsx(e.h3,{id:"authentication-setup",children:"Authentication Setup"}),`
`,n.jsx(e.p,{children:"To access the MCP webhook, you need to create a Trimble Cloud application and generate an access token:"}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Subscribe to or Create an Application"}),": Follow the steps in the ",n.jsx(e.a,{href:"https://docs.trimblecloud.com/agentic-ai-platform/prototyping/how-tos/webhook-access/",rel:"nofollow",children:"Webhook Access Documentation"})," to subscribe to an existing application or create a new one."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Generate Access Token"}),": Use the client ID and client secret from your application to generate an access token by following the ",n.jsx(e.a,{href:"https://docs.trimblecloud.com/profiles/docs/content/how-to-guides/prof-qstart-get-access-token/",rel:"nofollow",children:"Access Token Generation Guide"}),"."]}),`
`]}),`
`,n.jsxs(e.li,{children:[`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Configure Environment"}),": Use the generated access token as your AUTH_TOKEN in the MCP configuration:"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`AUTH_TOKEN=your_generated_access_token_here
`})}),`
`]}),`
`]}),`
`,n.jsx(e.h2,{id:"available-mcp-tools",children:"Available MCP Tools"}),`
`,n.jsx(e.h3,{id:"1-analyze_figma",children:"1. analyze_figma"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Purpose"}),": Enhanced Figma page analysis with advanced layout reconstruction and component mapping."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Parameters"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"figma_url"})," (required): The Figma file URL"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"node_id"})," (optional): Specific node ID to analyze, defaults to entire page"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns"})," (example response structure):"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "success": true,
  "file_key": "figma-file-key",
  "node_id": "2100:41706",
  "page_summary": {
    "name": "Dashboard",
    "layout_type": "dashboard",
    "component_count": 156,
    "has_navigation": true,
    "has_sidebar": true,
    "has_table": true,
    "has_form": true,
    "complexity": "high"
  },
  "key_components": [
    {
      "figma_name": "Navbar",
      "figma_id": "I2100:41706;1:27669",
      "modus_component": "modus-wc-navbar",
      "component_type": "navbar",
      "confidence": 0.95,
      "detection_method": "pattern_match",
      "properties": {},
      "pattern": "navigation"
    }
  ],
  "component_summary": {
    "modus-wc-navbar": 2,
    "modus-wc-button": 15,
    "modus-wc-table": 1
  },
  "undetected_components": {
    "count": 12,
    "examples": [
      {
        "figma_name": "Custom Header",
        "figma_id": "2100:123",
        "reason": "Layout container"
      }
    ]
  },
  "implementation": {
    "required_imports": ["ModusNavbar", "ModusButton", "ModusTable"],
    "layout_approach": "dashboard",
    "implementation_notes": [
      "This is a dashboard layout with navigation",
      "Include form validation for input elements",
      "Consider lazy loading for complex components"
    ]
  },
  "analysis_metadata": {
    "detection_rate": "89.2%",
    "total_mappings_available": 98,
    "pipeline_nodes": 5
  }
}
`})}),`
`,n.jsx(e.h3,{id:"2-get_modus_component_data",children:"2. get_modus_component_data"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Purpose"}),": Retrieves comprehensive documentation for Modus Web Components."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Parameters"}),":"]}),`
`,n.jsxs(e.ul,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.code,{children:"component_name"})," (required): The Modus component name (e.g., 'modus-wc-table')"]}),`
`]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Returns"})," (example response structure):"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "success": true,
  "component_documentation": {
    "name": "modus-wc-table",
    "properties": [
      {
        "name": "columns",
        "type": "ModusTableColumn[]",
        "required": true,
        "description": "Array of column definitions"
      }
    ],
    "events": [
      {
        "name": "cellClick",
        "type": "CustomEvent<ModusTableCellClickEventDetails>",
        "description": "Fires when a cell is clicked"
      }
    ],
    "methods": [
      {
        "name": "sort",
        "signature": "sort(columnId: string, direction: 'asc' | 'desc') => Promise<void>",
        "description": "Sorts the table by specified column"
      }
    ],
    "slots": [
      {
        "name": "default",
        "description": "The table content"
      }
    ]
  }
}
`})}),`
`,n.jsx(e.h2,{id:"implementation-workflows",children:"Implementation Workflows"}),`
`,n.jsx(e.h3,{id:"workflow-1-complete-page-analysis",children:"Workflow 1: Complete Page Analysis"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Purpose"}),": Analyze an entire Figma page and get comprehensive component mapping."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Input"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "figma_url": "https://www.figma.com/design/abc123/MyDesign?node-id=1-2",
  "analyze_children": true
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Steps"}),":"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Initial Analysis"}),": Call analyze_figma with full page URL"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component Documentation"}),": For each unique component type found, call get_modus_component_data"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Deep Dive Analysis"}),": For complex components, call analyze_figma with specific node IDs"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Result Compilation"}),": Combine all analysis data into implementation guide"]}),`
`]}),`
`,n.jsx(e.h3,{id:"workflow-2-component-specific-analysis",children:"Workflow 2: Component-Specific Analysis"}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Purpose"}),": Deep dive into a specific component or section."]}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Input"}),":"]}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{className:"language-json",children:`{
  "figma_url": "https://www.figma.com/design/abc123/MyDesign",
  "node_id": "2100:41706"
}
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Steps"}),":"]}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Targeted Analysis"}),": Call analyze_figma with specific node ID"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Component Mapping"}),": Extract component types from analysis"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Documentation Fetch"}),": Call get_modus_component_data for each component"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Implementation Guide"}),": Generate specific implementation instructions"]}),`
`]}),`
`,n.jsx(e.h2,{id:"using-the-specification-file",children:"Using the Specification File"}),`
`,n.jsx(e.p,{children:"To implement automated Figma-to-code conversion using these tools, attach the specification file to your AI conversation. This spec file contains detailed instructions for the AI on how to analyze Figma designs and generate Modus Web Components code."}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"How to use the spec file:"})}),`
`,n.jsxs(e.ol,{children:[`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Download the specification"}),": Get the ",n.jsx(e.a,{href:"https://docs.google.com/document/d/1OII7Yc0k2TIAtrUxYsYwPXtXNaO62wb2tU4-jYDnSnI/edit?tab=t.6m9dyidc3or1",rel:"nofollow",children:"FIGMA_CODE_SPEC"})," file"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Attach to your AI conversation"}),": Include the spec file when starting a new Figma analysis task"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Provide your Figma URL"}),": Give the AI your Figma design URL"]}),`
`,n.jsxs(e.li,{children:[n.jsx(e.strong,{children:"Follow the automated workflow"}),": The AI will use the spec file instructions to systematically analyze your design and generate implementation code"]}),`
`]}),`
`,n.jsx(e.p,{children:n.jsx(e.strong,{children:"Example prompt:"})}),`
`,n.jsx(e.pre,{children:n.jsx(e.code,{children:`I want to convert my Figma design into Modus Web Components code.

Figma URL: https://www.figma.com/design/your-figma-url-here
Figma API Token: your-figma-api-token-here

Please follow the attached specification file to analyze this design and generate the corresponding code with proper Modus components.
`})}),`
`,n.jsxs(e.p,{children:[n.jsx(e.strong,{children:"Note"}),": You'll need to provide your Figma API token for the tools to access your Figma designs. You can generate a Figma API token from your Figma account settings."]}),`
`,n.jsx(e.p,{children:"The AI will then use the Modus Figma tools through the specification's step-by-step process to deliver accurate, implementation-ready code."})]})}function p(i={}){const{wrapper:e}={...s(),...i.components};return e?n.jsx(e,{...i,children:n.jsx(o,{...i})}):o(i)}export{p as default};
