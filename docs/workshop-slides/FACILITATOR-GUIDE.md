# Zero to Production-Quality Vibe Coder

A two-day, Agent-only workshop for product designers. This is the editable facilitator companion to the PowerPoint and HTML deck.

## Files

- `zero-to-production-vibe-coder.pptx` — import into Google Slides.
- `index.html` — animated local presentation (`N` toggles notes, `F` fullscreen).
- `slides.mjs` — single editable content source.
- `generate.mjs` — regenerates all outputs with `npm run build`.

## Google Slides import

1. Open Google Drive.
2. New → File upload → select the `.pptx`.
3. Open with Google Slides.
4. File → Save as Google Slides.
5. Progressive “animations” are duplicate slides (HTML → meaning → CSS and state closed → open), so they survive import.
6. Speaker notes are included in the `.pptx`; verify them after import.

## Presenter controls (HTML)

- Right arrow / Space: next slide.
- Left arrow: previous slide.
- `N`: speaker notes.
- `F`: fullscreen.

## Workshop principles

- Agent window and Browser preview only—no Cmd+K, code reading, or terminal teaching.
- Explain → Agent → Preview → Assess → Reflect.
- No specimen UI: participants apply the process to a real design problem.
- Assess running behavior and evidence, never code literacy.
- Q&A after every assessment.

## OPEN

### Slide 1 — Zero to production-quality vibe coder

**On slide:** English + design → Agent → Modus → a live product prototype

**Say/do:** Welcome the room. Make the boundary explicit: nobody needs to read or write code. They will speak to Agent, inspect a running interface, and use design judgment to direct the next change.

### Slide 2 — You already have the two prerequisites.

**On slide:** English. Design judgment.

**Say/do:** Build confidence without overpromising. AI does not replace their judgment. It makes their decisions executable and testable.

### Slide 3 — Your circle—and the engineering boundary

**Say/do:** Use this boundary throughout. “Production quality” here means a credible, testable frontend prototype—not independently certified production software.

### Slide 4 — The operating loop

**Say/do:** Ask participants to predict the next step before revealing it. This loop is the one reusable behavior across all phases.

### Slide 5 — Two days, five phases

**Say/do:** Every phase ends with an assessment and Q&A. The first two are small. Phase 3 is the first large independence gate.

## PHASE 1

### Slide 6 — Phase 1

**On slide:** AI, HTML, and CSS—without becoming a coder

**Say/do:** Start from true zero. Avoid technical vocabulary until it solves a visible design problem.

### Slide 7 — Agent is a design collaborator that can build.

**On slide:** You describe an outcome. Agent creates and runs it.

**Say/do:** Keep participants in the Agent window and browser preview. Do not use Cmd+K, the file explorer, or code as teaching surfaces.

### Slide 8 — One workspace: Agent + Preview

**Say/do:** Show the two-pane layout: Agent and preview. If participants see code, tell them it is implementation detail—not their work surface.

### Slide 9 — HTML gives a page structure.

**Say/do:** This is progressive frame one. Show anonymous boxes only. Do not show code or a finished product example.

### Slide 10 — HTML gives structure meaning.

**Say/do:** Progressive frame two. Explain that HTML describes what things are. Designers do not need to author tags.

### Slide 11 — CSS gives the structure art direction.

**Say/do:** Progressive frame three. This is the visual “animation” in PowerPoint/Google Slides. Advance between slides slowly.

### Slide 12 — Structure and look solve different problems.

**Say/do:** The audience only needs this functional mental model. Avoid syntax, tags, selectors, and file anatomy.

### Slide 13 — Creative lab: make a small interface you want to exist.

**Participant prompt:**

> Build a small front-end page for [a user] who needs to [achieve a goal]. Include [the minimum things they need]. Create the HTML and CSS, run it, and open it in the browser preview.

**Say/do:** Give 25–30 minutes. If someone freezes, ask: “What should one person be able to do on the first screen?” Do not give them a login mock.

### Slide 14 — Phase 1 assessment

**Assessment checks:**
- A page is running in Preview
- The participant can explain the user goal
- They made one revision through Agent
- They can restore a Checkpoint if needed

**Say/do:** Use self-check, peer glance, facilitator gate, then Q&A. Score the running design and process—not code.

### Slide 15 — Q&A clinic

**Say/do:** Allow anonymous questions. Recurring questions become a 3-minute live micro-demo.

## PHASE 2

### Slide 16 — Phase 2

**On slide:** Why frameworks exist—and just enough state

**Say/do:** Apply everything to the interface each participant already created.

### Slide 17 — A poster can look finished. A product must remember.

**Say/do:** Connect this to Figma frames. Several frames may document states, but implementation is one product whose memory changes.

### Slide 18 — A framework is reusable blocks + a living screen.

**On slide:** It helps one interface respond, remember, and reuse.

**Say/do:** Avoid teaching framework internals. They only need to understand why Agent needs a vehicle beyond static HTML/CSS.

### Slide 19 — React, Angular, and Vue are different vehicles.

**Say/do:** The wording matters: we are not training React developers. We are giving Agent a consistent target.

### Slide 20 — State is the screen’s memory right now.

**Say/do:** Progressive state frame one. Use the iPad/Figma only if it makes the open/closed concept easier.

### Slide 21 — An event changes that memory.

**Say/do:** Progressive state frame two. There is no need to show useState or any code.

### Slide 22 — Prompt the full experience—not only the happy screenshot.

**Say/do:** This state checklist becomes a persistent quality tool through the rest of the workshop.

### Slide 23 — Interaction lab: add one piece of memory.

**Participant prompt:**

> Add one behavior to this interface. When the user [acts], the interface should [respond]. Include what happens before, during, if it fails, and after success. Run and verify it in Preview.

**Say/do:** Give 25–30 minutes. Support is faded: they now fill in more of the prompt themselves.

### Slide 24 — Phase 2 assessment

**Assessment checks:**
- The same UI has a working interaction
- The participant can describe its memory in English
- At least two relevant states are visible
- A peer can trigger and recover the flow

**Say/do:** Assessment is visual and behavioral. No one needs to identify a hook or read generated code.

### Slide 25 — Q&A clinic

**Say/do:** Use retrieval: ask a participant to explain state without using technical terminology.

## PHASE 3

### Slide 26 — Phase 3

**On slide:** Give Agent a Modus brain

**Say/do:** This is the major independence gate. Participants install context rather than relying on a generic model.

### Slide 27 — A blank Agent is capable—but it has amnesia.

**Say/do:** Use an animated analogy: guardrails, recipes, connected tools. This is conceptual; the official one-step setup handles installation.

### Slide 28 — Use the official Modus one-step setup.

**On slide:** One prompt installs the Docs MCP, user rules, and user skills.

**Say/do:** Open the live setup route. Participants paste the official setup prompt into Agent. Do not make novices hand-edit configuration files.

### Slide 29 — Rules are permanent guardrails.

**Say/do:** Show the live Modus Cursor Rules page. Explain the concept, not the .mdc syntax.

### Slide 30 — Skills are recipes for recurring work.

**Say/do:** Show the live Modus Cursor Skills page. Agent chooses relevant skills; designers need not invoke every file by name.

### Slide 31 — MCP connects Agent to live tools and facts.

**Say/do:** MCP is not “more intelligence.” It is access. Keep databases and secret managers out of this workshop.

### Slide 32 — Figma → Agent → Modus-aware implementation

**Say/do:** Correct terminology: Figma provides the Cursor plugin; Modus provides synchronized Figma libraries and implementation tooling. There is no verified standalone Modus Figma plugin.

### Slide 33 — Useful additions—only when they match the work

**Say/do:** This is awareness, not an installation race. Install only what the product team actually uses.

### Slide 34 — Phase 3 big assessment

**Assessment checks:**
- Official Modus setup completed
- Figma plugin/MCP is connected
- A Figma selection—not only a screenshot—was used
- Agent verifies the app in Browser
- Participant restores one Checkpoint
- Interaction still works

**Say/do:** Give 60–75 minutes. Use the participant’s Figma work; golden Modus file is the recovery option. Follow with Q&A and Day-1 reflection.

### Slide 35 — Day 1 reflection + Q&A

**Say/do:** Collect a one-sentence reflection: “The most important change I made to my process was…”

## PHASE 4

### Slide 36 — Phase 4

**On slide:** Build the production-quality Modus version

**Say/do:** Start with spaced retrieval: participants reconstruct the operating loop and brain from memory before showing the reference.

### Slide 37 — Modus already built the road.

**Say/do:** Tour the live site map. Teach where to look—not the contents of every page.

### Slide 38 — Use progressively larger building blocks.

**Say/do:** Reference the synchronized Atomic Design System, Palette, Icons, and Blueprint Figma files.

### Slide 39 — Production quality is more than visual fidelity.

**Say/do:** Phrase accessibility carefully: Modus is designed for accessibility, but every generated experience still needs verification.

### Slide 40 — Agent builds. Browser provides evidence.

**Say/do:** Never accept “tests pass” from Agent without observing the UI. Agent can silently regress previous behavior.

### Slide 41 — Repair drill: evidence before instruction.

**Say/do:** Use the seeded flawed app: missing empty state, narrow-layout break, focus issue, long content overflow, or fabricated connected data.

### Slide 42 — Phase 4 assessment

**Assessment checks:**
- Looks and behaves like Modus
- Relevant states work
- Peer completes task without explanation
- Narrow and wide layouts pass
- Keyboard/focus/labels are checked
- Known limits are stated

**Say/do:** Require at least “Ready” or “Ready with support” for functional states, accessibility, safety, and handoff.

### Slide 43 — Q&A clinic

**Say/do:** Keep answers tied to observable evidence in Browser and references in the Modus Blueprint.

## PHASE 5

### Slide 44 — Phase 5

**On slide:** GitHub, access, and delivery

**Say/do:** This is delivery literacy, not DevOps. Avoid secrets, environment variables, CI, and production infrastructure.

### Slide 45 — A prototype is not delivered while it lives only on your Mac.

**Say/do:** Use Cursor Source Control or Agent to perform the steps. They do not need to read a diff or use terminal Git.

### Slide 46 — Teach access—not secrets.

**Say/do:** A teammate can view a shared Cursor Agent run only if they also have access to the repository.

### Slide 47 — Phase 5 assessment

**Assessment checks:**
- Repo is under their GitHub account
- A named commit exists
- Live URL opens for another person
- Collaborator access is added or demonstrated
- Figma + repo + preview links are recorded
- Known limitations are documented

**Say/do:** Have a peer or facilitator open the links on a different account/device. Do not accept localhost.

## CLOSE

### Slide 48 — Final quality rubric

**Say/do:** Do not average away a critical failure. Use the rubric for the workshop and the 45-day peer review.

### Slide 49 — Three-minute final showcase

**Say/do:** Facilitator responds with one “keep” and one “improve,” not a code review.

### Slide 50 — The workshop is the start—not the finish.

**Say/do:** Ask managers to assign a real, low-risk prototype within two weeks. Store Agent conversations, failures, and evidence—not only screenshots.

### Slide 51 — English starts the work. Design judgment makes it good.

**On slide:** Frame. Generate. Inspect. Verify. Ship.

**Say/do:** End with Q&A. Re-state the boundary: Agent implements; designers direct and verify; engineering productionizes.

## Required live links

- Modus AI: https://modus.trimble.com/modus-ai
- One-step setup: https://modus.trimble.com/setup
- Product & Design Workflow: https://modus.trimble.com/modus-ai/product-design-workflow
- Vibe Coding Guide: https://modus.trimble.com/modus-ai/vibe-coding-guide/process
- AI PDLC Playbook: https://modus.trimble.com/modus-ai/ai-pdlc-playbook
- Cursor rules: https://modus.trimble.com/modus-ai/rules/cursor
- Cursor skills: https://modus.trimble.com/modus-ai/skills/cursor
- Components: https://modus.trimble.com/components/
- Patterns: https://modus.trimble.com/patterns
- Templates: https://modus.trimble.com/templates
- Accessibility: https://modus.trimble.com/foundations/accessibility/overview
- Figma Cursor setup: https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server

## Edit workflow

Edit slide wording and notes in `slides.mjs`, then run:

```bash
npm run build
```

For a one-off Google Slides change, edit directly after import. For changes that should remain synchronized with HTML and notes, edit `slides.mjs` and regenerate.
