# From an Idea to a Working Prototype

A hands-on Cursor and Modus workshop for designers. This is the editable facilitator companion to the PowerPoint and HTML deck.

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

### Slide 1 — From an idea to a working prototype

**On slide:** We’ll start with a simple page, improve it step by step, and finish with something others can open and try.

**Say/do:** Welcome everyone and explain the plan in plain terms. We are going to describe an interface, see what Agent makes, and improve it by looking at the result. Nobody needs to read or write code during the workshop.

### Slide 2 — Let’s start with a simple question.

**On slide:** Can Agent turn a clear description into a page we can use?

**Say/do:** Do not begin with theory. Set up the first experiment: describe something small, run it, and inspect it. The useful skill is learning how to notice the gap between what we meant and what Agent produced.

### Slide 3 — What we’ll do here—and what happens before production

**Say/do:** Explain the boundary without making it sound like a handoff wall. Designers will produce a useful, testable frontend prototype. Engineering still reviews and connects the parts that involve real data, security, performance, and production architecture.

### Slide 4 — This is the loop we’ll use all the way through.

**Say/do:** Walk through the loop once, then ask the group what they would do after seeing an imperfect first result. Keep returning to this sequence during assessments.

### Slide 5 — Here’s where we’re going.

**Say/do:** Set expectations for the rhythm: short explanation, hands-on work, a quick check, and questions. The first full assessment comes after the setup and context phase.

## PHASE 1

### Slide 6 — Phase 1

**On slide:** Start with a simple page

**Say/do:** Start with the result they can see. Introduce HTML and CSS only after the first page gives those terms a practical purpose.

### Slide 7 — Describe what you want. Then look at what came back.

**On slide:** Agent can build the first version. It still needs your direction.

**Say/do:** Keep the group in Agent and Preview. The point is not to accept the first result. The point is to learn how to turn a visual observation into the next useful request.

### Slide 8 — Keep two things open: Agent and Preview.

**Say/do:** Show the two-pane setup. Agent is where they describe the work. Preview is where they decide whether it works. If code appears, reassure them that they do not need to read it.

### Slide 9 — First, Agent needs to organize the page.

**Say/do:** Use the anonymous boxes to explain that a page begins with organization. Do not introduce tags or show source code.

### Slide 10 — HTML gives each part a purpose.

**Say/do:** Explain HTML as the description of what each part is. Participants only need this mental model so they can ask Agent for a properly organized page.

### Slide 11 — Then CSS controls how it looks.

**Say/do:** Advance from the HTML structure slide to this one and point out what changed visually. The purpose stayed the same; the presentation became clearer.

### Slide 12 — HTML is structure. CSS is presentation.

**Say/do:** Keep the explanation at this level. The group should understand what to ask for, not how to write HTML tags or CSS selectors.

### Slide 13 — Your turn: make one small page.

**Participant prompt:**

> Create a simple front-end page for [who it is for]. They need to [what they are trying to do]. Include only [the few things they need first]. Use HTML and CSS, run it, and show me the page in Preview.

**Say/do:** Give 25–30 minutes. If someone gets stuck, ask what one person should be able to do on the first screen. Help them narrow the goal instead of giving them a screen to copy.

### Slide 14 — Quick check before we move on

**Assessment checks:**
- The page is open in Preview
- You can explain who it is for and what they need to do
- You asked Agent for one clear improvement
- You know how to return to a Checkpoint

**Say/do:** Keep this low pressure. Check whether each person can create, inspect, and revise a page. Do not discuss the generated code.

### Slide 15 — Questions before we add interaction?

**Say/do:** Take blocked and basic questions first. After each answer, briefly state how the same approach could help in another situation.

## PHASE 2

### Slide 16 — Phase 2

**On slide:** From a page to something people can use

**Say/do:** Keep working with the page each person already made. We are going to add behavior, not start a second exercise.

### Slide 17 — A screenshot shows one moment. A product changes.

**Say/do:** Connect this to Figma. Separate frames can document open, closed, empty, or error states. In the working interface, those moments belong to the same product.

### Slide 18 — Why do we need a framework?

**On slide:** It helps Agent build parts we can reuse and an interface that can change.

**Say/do:** Do not explain framework internals. Explain the practical reason: once the interface needs behavior and repeated parts, Agent needs a framework target.

### Slide 19 — Why we’ll use React in this workshop

**Say/do:** Make it clear that participants are not learning React syntax. They only need to know why Agent is using it and that Angular or Vue may be the right choice in another product.

### Slide 20 — What does the interface need to remember?

**Say/do:** Show the closed state first. Ask the group what information the interface must keep track of. Use Figma on the iPad only if the visual comparison helps.

### Slide 21 — The user does something. The interface changes.

**Say/do:** Advance to the open state. The group only needs to understand the behavior; do not show a hook or generated code.

### Slide 22 — A real flow includes the moments around success.

**Say/do:** Use these six moments as a checklist. Not every feature needs all six, but Agent should not build only the final happy state.

### Slide 23 — Your turn: add one interaction.

**Participant prompt:**

> Add one interaction to this page. When the user [does something], the page should [respond]. Show what happens before the action, while it is happening, if it fails, and after it works. Run it and let me try it in Preview.

**Say/do:** Give 25–30 minutes. Participants should now decide more of the request themselves. Ask them to choose one useful behavior rather than adding several features.

### Slide 24 — Quick check: does the interaction make sense?

**Assessment checks:**
- The interaction works in Preview
- You can explain what the page needs to keep track of
- At least two relevant states are visible
- Someone else can use the flow and recover from it

**Say/do:** Keep the check visual and behavioral. Nobody needs to identify React code or explain how Agent implemented it.

### Slide 25 — Questions before we give Agent more context?

**Say/do:** Ask one participant to explain state in everyday language. Resolve framework questions, then move into setup and context.

## PHASE 3

### Slide 26 — Phase 3

**On slide:** Give Agent the right context and tools

**Say/do:** This is the first full assessment. Participants will connect Agent to Modus and Figma instead of relying on general knowledge.

### Slide 27 — A general Agent does not know our product decisions yet.

**Say/do:** Explain each item through what it helps Agent do. The setup page will handle installation, so participants do not need to learn configuration files.

### Slide 28 — Start with the Modus setup page.

**On slide:** One setup prompt adds the Modus docs, rules, and skills to Cursor.

**Say/do:** Open the live setup route and let participants paste the official prompt into Agent. Avoid showing or explaining the underlying configuration files.

### Slide 29 — Rules keep the same standards across requests.

**Say/do:** Show the live Rules page. Explain that rules keep Agent from changing direction every time. Do not discuss .mdc syntax.

### Slide 30 — Skills show Agent how to handle common tasks.

**Say/do:** Show the live Skills page. Point out a few practical examples. Designers do not need to remember file names or manually choose every skill.

### Slide 31 — MCP lets Agent use information from other tools.

**Say/do:** Explain MCP as a connection, not a smarter model. It can bring in current Modus documentation or a Figma selection. Leave databases and secret management out of this workshop.

### Slide 32 — Bring a Figma selection into the same conversation.

**Say/do:** Clarify the setup: Figma provides the Cursor plugin. Modus provides the Figma libraries and implementation guidance. There is no separate Modus Figma plugin to install.

### Slide 33 — Add other connections only when your team needs them.

**Say/do:** Treat this as a quick tour. The goal is not to install everything. Connect only the tools that hold information the team actually needs.

### Slide 34 — First full assessment: use the connected workflow

**Assessment checks:**
- The Modus setup is complete
- Figma is connected
- You used a link to a Figma selection
- Agent checked the page in Preview
- You can restore a Checkpoint
- The interaction still works

**Say/do:** Give 60–75 minutes. Participants should use their own Figma work. Keep the golden Modus file available only as a recovery option.

### Slide 35 — What helped? What still needed your input?

**Say/do:** Collect one short reflection from each person: what changed in the way they described, checked, or corrected the work?

## PHASE 4

### Slide 36 — Phase 4

**On slide:** Build and check the Modus version

**Say/do:** Before showing the reference, ask participants to recall the workflow and the context they connected on Day 1.

### Slide 37 — Use the Modus site as your reference.

**Say/do:** Give a short tour of where to find foundations, components, patterns, templates, Figma libraries, and AI setup. Teach where to look instead of opening every page.

### Slide 38 — Start with what already exists.

**Say/do:** Reference the Atomic Design System, Palette, Icons, and Blueprint Figma files. Explain that this reduces rework and keeps the prototype close to what engineering can use.

### Slide 39 — A good prototype needs more than the right look.

**Say/do:** Walk through the checks in practical terms. Modus is designed with accessibility in mind, but every generated experience still needs to be tested.

### Slide 40 — Check the result in the browser.

**Say/do:** Do not rely on a message saying the tests passed. Ask participants to watch the behavior themselves and check earlier interactions after each meaningful change.

### Slide 41 — When something is wrong, be specific.

**Say/do:** Use the prepared flawed app: missing empty state, narrow-layout issue, focus problem, long-content overflow, fabricated connected data, or a regression.

### Slide 42 — Modus build check

**Assessment checks:**
- The interface uses Modus consistently
- The important states work
- Someone else can complete the task without help
- Narrow and wide layouts work
- Keyboard, focus, and labels were checked
- You can explain what is not finished

**Say/do:** Require a working result or a working result with a small amount of help. Pay special attention to states, accessibility, safe assumptions, and handoff.

### Slide 43 — Questions before we share it?

**Say/do:** Keep answers grounded in what participants can see in Preview or confirm in the Modus site.

## PHASE 5

### Slide 44 — Phase 5

**On slide:** Share the work

**Say/do:** Keep this practical. Participants need to publish and share a prototype, not learn DevOps or production infrastructure.

### Slide 45 — Move it from your Mac to links others can open.

**Say/do:** Use Cursor Source Control or Agent for these steps. Participants do not need terminal Git or a diff walkthrough.

### Slide 46 — Share access, not credentials.

**Say/do:** Explain that sharing a Cursor Agent run does not automatically share the repository. The other person still needs the correct repository access.

### Slide 47 — Delivery check

**Assessment checks:**
- The repository is in your GitHub account
- There is a clearly named saved version
- Another person can open the live URL
- You added or demonstrated collaborator access
- The Figma, repository, and preview links are recorded
- You wrote down what is not finished

**Say/do:** Have someone else open the links from a different account or device. A localhost link does not count as shared.

## CLOSE

### Slide 48 — How we’ll review the final result

**Say/do:** Explain that a polished look cannot make up for a broken flow, unsafe assumption, inaccessible interaction, or missing handoff.

### Slide 49 — Three minutes to show the work

**Say/do:** Respond with one thing to keep and one thing to improve. This is a product and workflow review, not a code review.

### Slide 50 — Keep using the workflow after the workshop.

**Say/do:** Ask managers to assign a real, low-risk prototype within two weeks. Keep useful Agent conversations and examples of what failed and improved—not only final screenshots.

### Slide 51 — Start simple. Be specific. Check what changed.

**On slide:** Describe it. Try it. Fix it. Check it again. Share it.

**Say/do:** End with open questions. Remind the group that Agent can implement quickly, but people still need to describe the goal, check the behavior, and decide whether the result is good enough to share.

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
