# Designing with Agent — speaker notes

Slides are visual only. You speak. Click / Space to reveal each object. **Assessment** opens the task modal on phase-end slides.

---

## Big picture (say early)

- Designers do not need to write code to build working prototypes.
- Natural language in **Cursor Agent** is the starting interface.
- Agent still generates code underneath — participants **direct outcomes**, not syntax.
- Better prompts + project context (rules, skills, MCP) = better results.
- **Modus** is the shared product language — reuse it, do not invent a parallel UI.
- End goal: **folder** → **GitHub** → **preview link** so others can try it.

---

## Phase 1 — Start with Agent

### Slide 1 — Agents window

- Open **Agents**, not the terminal first.
- Describe what you want in plain language.
- Example: “Build a simple landing page. Open it when you are done.”
- Agent builds; ask it to **open the preview** — no manual file hunting.

### Slide 2 — Layers on top of code

- History: **binary → languages → IDEs → natural language + Agent**.
- Shift: you direct **behavior**, not implementation.
- Code still exists under the surface.
- **Assessment 1:** basic web page in workshop folder; Agent opens it.

---

## Phase 2 — Better prompting & frameworks

### Slide 3 — Guide the smart intern

- Agent = **very smart intern**: fast, broad knowledge, still needs a **guide**.
- You get what you **ask for**, not always what you **want**.
- Structured prompt:
  - **Goal** — what should this achieve?
  - **Audience** — who uses it?
  - **Context** — where/when?
  - **Requirements** — what must it do?
  - **Success** — how do we know it worked?
- Practice matters more than reading examples alone.

### Slide 4 — Full refresh vs smart updates

- **Before (HTML/CSS):** tap a filter → **whole page reloads**.
- **With a framework:** tap → **choice is stored** → **only the list updates**.
- Frameworks handle **actions**, **memory**, and **partial updates** — easier to build and maintain.
- **React** = workshop tool **name only**; Agent writes the code.
- **Assessment 2:** one choice changes the same screen (no new page).

---

## Phase 3 — Context Agent needs

### Slide 5 — Rules

- A **prompt** is one conversation.
- **Rules** stay in the project and apply every time.

### Slide 6 — Skills, MCP, Figma

- **Skills** = playbooks for a type of task.
- **MCP** = live connections (docs, design, tools).
- **Figma MCP** = structured design context, not just a screenshot.
- https://www.figma.com/mcp-catalog/

### Slide 7 — Context stack

- Stack: **Prompt + Rules + Skills + MCP/Figma**.
- **Assessment 3:** connect workshop context; build in shared workspace folder.

### Slide 8 — Detour: Playwright MCP (live demo)

- You can **add** MCPs, not only use pre-built ones.
- https://playwright.dev/docs/getting-started-mcp
- Demo: add Playwright MCP → open a public site → extract structure → use in Agent.
- No assessment on this slide.

---

## Phase 4 — Modus

### Slide 9 — What Modus provides

- **Foundations → Components → Patterns → Templates**.
- Modus AI: rules, skills, docs MCP.
- https://modus.trimble.com/modus-ai

### Slide 10 — Build with Modus

- Generic Agent UI often invents a **second design system**.
- Start from Modus; verify in the **browser**.
- **Assessment 4:** rebuild or extend with Modus.

---

## Phase 5 — Share the work

### Slide 11 — Folder → repository

- **Product/Design:** repo link, run/preview instructions, view access.
- **Engineering:** repo access, branch/PR, deploy when needed.

### Slide 12 — Repository → preview

- Share repo link + how to run locally.
- **GitHub Pages** for static sites on public repos.
- Private Pages may need **GitHub Enterprise Cloud** — or ask Engineering for preview hosting.
- **Assessment 5:** repo link, local run steps, preview URL if available.

---

## Five assessments

| # | Task | Success |
| --- | --- | --- |
| 1 | Basic web page; Agent opens it | Page runs without opening terminal |
| 2 | One choice changes the screen | Same screen updates, no full reload |
| 3 | Connect context; build in workspace | Runs locally with connected context |
| 4 | Rebuild/extend with Modus | Modus UI works in browser |
| 5 | Publish + share links | Others can open repo and try the app |

---

## Phrases that land with designers

- “You’re not coding — you’re **briefing**.”
- “Agent is the intern; you’re the **director**.”
- “Don’t invent a second design system — **start from Modus**.”
- “The browser is **evidence**.”
- “The output is something **people can try**.”

---

## Links to have open

- Cursor Agent: https://cursor.com/docs/agent/overview
- Figma MCP catalog: https://www.figma.com/mcp-catalog/
- Playwright MCP: https://playwright.dev/docs/getting-started-mcp
- Modus AI: https://modus.trimble.com/modus-ai
- GitHub Pages: https://docs.github.com/en/pages
