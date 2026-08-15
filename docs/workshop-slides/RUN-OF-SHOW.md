# Zero to Production-Quality Vibe Coder

Editable two-day facilitator run-of-show. This document tells you **what to do, where to do it, what participants do, and how to assess it**.

## Non-negotiable workshop model

- Participants use **Cursor Agent window + Browser preview only**.
- Do not teach `Cmd+K`, file editing, terminal commands, or reading code.
- They already know English and design; Agent performs implementation.
- No target screen is provided for participants to copy.
- Use a neutral abstract layout only to demonstrate the operating process.
- Every phase ends with an assessment and Q&A.
- Phase 3 is the first major independence assessment.
- “Production quality” means a credible, tested frontend prototype—not independently certified production software.

## Deliverables

- Google Slides import: `zero-to-production-vibe-coder.pptx`
- Animated presentation: `index.html`
- Per-slide speaker notes: `FACILITATOR-GUIDE.md`
- Editable content: `slides.mjs`
- This step-by-step flow: `RUN-OF-SHOW.md`

## Room setup

### Each participant

- Mac with current Cursor
- Cursor account signed in
- GitHub account they control
- Figma access
- Node installed (Agent will use it; participants do not need terminal instruction)
- One real, low-risk design problem or Figma frame

### Facilitator

- Projector: your Mac
- Optional iPad: Figma visualization only
- Browser tabs:
  - https://modus.trimble.com/
  - https://modus.trimble.com/setup
  - https://modus.trimble.com/modus-ai
  - https://modus.trimble.com/modus-ai/rules/cursor
  - https://modus.trimble.com/modus-ai/skills/cursor
  - https://modus.trimble.com/components/
  - https://modus.trimble.com/patterns
  - https://modus.trimble.com/templates
  - https://modus.trimble.com/foundations/accessibility/overview
- A neutral demo folder
- A flawed Modus prototype for the repair drill
- A shared question board with categories: Blocked / Concept / Quality / Safety / Parking lot
- A shared submission sheet: participant, Figma link, repo link, live URL, access status

### Preflight the day before

1. Confirm Cursor opens and Agent responds on every Mac.
2. Confirm Browser preview works without asking participants to use terminal.
3. Confirm each GitHub account can create a repository.
4. Confirm the official Figma plugin can authenticate.
5. Confirm attendees can access the required Modus 2.0 Figma libraries.
6. Test the official setup prompt at https://modus.trimble.com/setup on a clean Mac.
7. Confirm whether the Modus Figma mapper is still required in addition to official Figma + Modus Docs MCP. Do not teach duplicate setup.
8. Test the approved live-host path (the Modus PDLC Playbook currently documents Netlify).
9. Save a recovery starter folder in case scaffolding fails.
10. Do not expose API tokens or credentials during projection.

## Pre-work (15–20 minutes)

Ask participants to submit:

1. One small design problem they care about.
2. Optional Figma frame.
3. Confidence from 1–5:
   - working with AI;
   - describing UI behavior;
   - Cursor;
   - GitHub.
4. One baseline prompt in Cursor Agent and a screenshot of the result.

Use this to identify the supported lane and stretch lane.

---

# Day 1

## Opening — 25 minutes

### Slides 1–5

### Facilitator

1. State the promise: English + design judgment are enough to begin.
2. Define the boundary:
   - designers own user flow, states, Modus fidelity, context, verification and prototype handoff;
   - engineering owns real data, auth, security, performance and production review.
3. Introduce the operating loop:

   **Frame → Constrain → Generate → Inspect → Test → Diagnose → Revise → Re-test → Document**

4. Ask participants to predict each next step before advancing the slide.
5. Explain assessment gates:
   - Ready;
   - Ready with support;
   - Not yet.

### Participants

- Open only Cursor Agent and a preview area.
- Close or ignore the file explorer and terminal.
- Write one sentence describing the user problem they brought.

### Check

Everyone can explain their user and user goal without mentioning a feature list.

---

## Phase 1 — AI, HTML, and CSS — 75 minutes

### Slides 6–15

### Explain — 12 minutes

1. Agent is a collaborator that can build.
2. HTML gives structure and meaning.
3. CSS gives visual direction.
4. Designers decide the user goal and hierarchy.
5. Agent decides implementation detail.

Advance slowly through the progressive structure slides:

1. anonymous regions;
2. meaningful regions;
3. visual hierarchy.

Do not show HTML/CSS source.

### Neutral process demonstration — 10 minutes

In a new demo folder, tell Agent:

> Create a neutral page made of three regions so I can demonstrate structure and visual hierarchy. Do not make it a recognizable product screen. Run it and open the Browser preview.

Narrate the operating loop. Ask the room:

- What should we inspect?
- What is unclear?
- What is the smallest next request?
- How do we know the change worked?

Do not use this page as their assignment.

### Creative build — 30 minutes

Participants use the Phase 1 prompt frame:

> Build a small front-end page for [a user] who needs to [achieve a goal]. Include [the minimum things they need]. Create the HTML and CSS, run it, and open it in the browser preview.

If someone freezes, ask:

> What should one person be able to do on the first screen?

Do not give them a login, dashboard, or settings mock.

### One revision — 8 minutes

Each participant makes one bounded visual request in Agent, for example:

- “Make the primary action easier to notice without making everything louder.”
- “The hierarchy between the title and content is weak. Improve it and show me the result.”

### Small assessment — 8 minutes

Evidence:

- running page;
- user goal stated;
- one Agent revision;
- Checkpoint restore explained or demonstrated.

### Q&A — 7 minutes

Use categories. End every answer with:

> What pattern generalizes?

---

## Phase 2 — Frameworks and light state — 90 minutes

### Slides 16–25

### Explain frameworks — 15 minutes

1. Static HTML/CSS is a visual moment.
2. A product must respond and remember.
3. A framework supplies reusable blocks and a living screen.
4. React, Angular and Vue are different vehicles.
5. Use React in this workshop because:
   - Cursor commonly generates it;
   - Modus has production wrappers;
   - one room needs one consistent vehicle.

Do not teach React syntax.

### Explain state — 10 minutes

Advance the state slides:

1. `open: false` — panel closed;
2. event occurs;
3. `open: true` — same screen responds.

Use this sentence:

> State is the screen’s memory right now.

Use the state checklist:

- before;
- during/loading;
- empty;
- error;
- success;
- recovery.

### Interaction build — 30 minutes

Participants add one behavior to their existing page:

> Add one behavior to this interface. When the user [acts], the interface should [respond]. Include what happens before, during, if it fails, and after success. Run and verify it in Preview.

They choose the interaction.

### Peer behavior test — 10 minutes

The peer does not receive an explanation. They try to:

1. identify the action;
2. trigger it;
3. observe at least two states;
4. recover or close it.

### Small assessment — 10 minutes

Evidence:

- one interaction works;
- participant explains its memory in English;
- at least two states are visible;
- peer can trigger and recover.

### Q&A — 10 minutes

Ask one participant to explain state without using technical terms.

### Break / buffer — 15 minutes

Use this for people who need the supported lane.

---

## Phase 3 — Cursor and Modus brain — 150 minutes

### Slides 26–35

### Explain the brain — 15 minutes

Use the analogy:

- Rules = permanent guardrails.
- Skills = focused recipes.
- MCP = connected tools and facts.
- Figma = live design context.
- Browser = visible evidence.
- Checkpoints = safe recovery.

### Install official Modus setup — 20 minutes

1. Open https://modus.trimble.com/setup.
2. Copy the official one-step prompt.
3. Participants paste it into Cursor Agent.
4. Let Agent install/configure:
   - Modus Docs MCP;
   - user rules;
   - user skills.
5. Verify from Cursor settings that the expected tooling is available.

Do not manually teach `.mdc`, `SKILL.md`, or `mcp.json`.

### Install official Figma plugin — 20 minutes

In Agent:

> /add-plugin figma

Complete Figma authentication.

Clarify terminology:

- Figma provides the Cursor plugin/MCP.
- Modus provides synchronized Figma libraries.
- Modus Docs MCP provides component facts.
- There is no verified standalone Modus Figma plugin.

### Figma workflow demonstration — 15 minutes

1. In Figma, use a Modus 2.0 library instance.
2. Copy link to selection.
3. Paste into Agent.
4. State the user goal and required states.
5. Ask Agent to run and inspect through Browser.
6. Compare implementation against Figma.
7. Make one bounded revision.

### Independent brain build — 45 minutes

Participants use their own Figma selection.

Recovery option: facilitator’s golden Modus file.

Required:

- selection link, not screenshot only;
- Agent uses Modus context;
- interaction remains functional;
- Browser inspection;
- one Checkpoint recovery.

### Phase 3 big assessment — 20 minutes

Evidence:

- official setup completed;
- Figma connected;
- selection link used;
- app runs;
- Agent/Browser verification occurred;
- participant can explain Rules vs Skills vs MCP;
- Checkpoint recovery works.

### Day 1 Q&A and reflection — 15 minutes

Reflection:

> The most important change I made to my process was…

At this point they are ready to direct AI with the correct context.

---

# Day 2

## Retrieval warm-up — 20 minutes

Without slides, participants reconstruct:

1. operating loop;
2. definition of state;
3. Rules vs Skills vs MCP;
4. Figma-to-Agent flow;
5. designer/engineering boundary.

Reveal the reference only after retrieval.

---

## Phase 4 — Production-quality Modus — 210 minutes

### Slides 36–43

### Modus Blueprint map — 20 minutes

Open:

- https://modus.trimble.com/
- `/foundations/`
- `/components/`
- `/patterns`
- `/templates`
- `/foundations/accessibility/overview`

Teach where to look:

1. foundations;
2. components;
3. patterns;
4. templates;
5. synchronized Figma libraries;
6. AI tooling.

Do not tour every component.

### Frame the production-quality request — 15 minutes

Participants ask Agent to rebuild or refine their flow using:

- production Modus package;
- existing Blueprint pattern/template where relevant;
- Modus semantic tokens;
- states;
- responsive behavior;
- accessibility expectations.

They do not dictate implementation syntax.

### Modus build — 60 minutes

Build in three gates:

1. **Usable flow**
2. **States + resilience + accessibility**
3. **Visual refinement**

At each gate:

- run;
- inspect in Browser;
- peer test;
- make one bounded correction;
- re-test earlier behavior.

### Break — 15 minutes

### Quality stations — 45 minutes

Rotate through:

1. happy path;
2. empty/loading/error/success;
3. narrow and wide;
4. keyboard and visible focus;
5. long content;
6. truthful data assumptions.

Participants record evidence—not “Agent says it works.”

### Seeded repair drill — 25 minutes

Provide one flaw:

- missing empty state;
- broken narrow layout;
- keyboard/focus issue;
- long content overflow;
- fabricated connected data;
- regression after a later change.

Required repair loop:

1. observe symptom;
2. state hypothesis;
3. ask for one correction;
4. verify;
5. regression-test.

### Phase 4 assessment — 20 minutes

Evidence:

- Modus fidelity;
- working states;
- peer task completion;
- responsive check;
- accessibility check;
- known limitations.

### Q&A — 10 minutes

Ground answers in Browser evidence or live Modus documentation.

---

## Phase 5 — GitHub, access, and delivery — 120 minutes

### Slides 44–47

### GitHub concepts — 10 minutes

- Repository = shared master folder.
- Commit = named snapshot.
- Publish = place it on their GitHub.
- Live URL = Product can open it.
- Access = who can view or contribute.

### Create and publish — 30 minutes

Use Cursor Source Control or Agent:

1. confirm their GitHub account;
2. create repository;
3. create a meaningful commit;
4. publish;
5. copy repo URL.

Do not teach terminal Git.

### Deploy live preview — 25 minutes

Follow the approved path. If unchanged, use the Modus AI PDLC Playbook’s Netlify flow.

Required:

- HTTPS URL;
- opens outside their Mac;
- core interaction works after deployment.

### Teach access — 15 minutes

Teach:

- private vs public;
- personal vs organization;
- add collaborator;
- view vs push;
- repo link vs live URL.

Do not teach:

- tokens;
- `.env`;
- CI secrets;
- production credentials.

### Phase 5 assessment — 20 minutes

Another participant opens:

1. repo link;
2. live URL;
3. Figma link.

Participant adds or demonstrates collaborator access.

### Q&A — 10 minutes

Focus on access and handoff, not deployment infrastructure.

### Buffer — 10 minutes

Resolve OAuth/access blockers without holding the whole room.

---

## Final showcase and close — 60 minutes

### Slides 48–51

Each participant gets three minutes:

1. user problem;
2. interaction and states;
3. brain inputs used;
4. live URL and repo;
5. one Agent failure and repair;
6. one judgment AI could not make.

Facilitator feedback:

- one **Keep**;
- one **Improve**.

No code review.

## Final rubric

Score 0–3:

1. Problem framing
2. Agent direction
3. Functional states
4. Product judgment
5. Modus quality
6. Responsive behavior
7. Accessibility
8. Diagnosis
9. Safety
10. Handoff

Require at least 2 in:

- functional states;
- accessibility;
- safety;
- handoff.

Do not average away a critical failure.

## Safety statements to repeat

- Use approved or synthetic data only.
- Never enter credentials, customer data, or unreleased research.
- Treat generated claims and “tests passed” as unverified.
- Workshop prototypes do not include real auth, payments, destructive operations, or customer integrations.
- Real-user production requires engineering, security, privacy, accessibility, and legal review.

## Follow-up

- 24 hours: reconstruct the loop.
- 7 days: repair a seeded defect.
- 21 days: build a new-domain flow without a prompt template.
- 45 days: peer critique with the same rubric.

Ask managers to assign one real, low-risk prototype within two weeks.

## Mixed-skill facilitation

- Everyone frames silently before discussion.
- Supported lane gets prompt scaffolds.
- Stretch lane receives harder constraints—not a bigger app:
  - localization;
  - keyboard-only use;
  - narrow field-device viewport;
  - complex empty/error recovery.
- In peer work:
  - Operator speaks to Agent.
  - Verifier owns acceptance and evidence.
  - Rotate roles every 15 minutes.

## Recovery playbook

### Agent produces code but no preview

Tell Agent:

> Run the application, resolve startup errors, and open the Browser preview. Do not explain the code to me.

### Agent changes too much

1. Restore the prior Checkpoint.
2. Ask for one bounded change.
3. State what must not change.

### Figma MCP is unavailable

1. Verify plugin status and authentication.
2. Use the golden Modus Figma link.
3. If still blocked, paste a screenshot plus written states and mark the assessment “Ready with support.”

### Modus setup fails

1. Use the preflight recovery folder.
2. Pair the participant with the supported lane.
3. Do not spend full-room time teaching configuration internals.

### Deployment is blocked

1. Confirm GitHub repo exists.
2. Capture local Browser evidence.
3. Complete access/handoff assessment.
4. Schedule deployment remediation; do not expose secrets.

## Sources

- https://modus.trimble.com/modus-ai
- https://modus.trimble.com/setup
- https://modus.trimble.com/modus-ai/product-design-workflow
- https://modus.trimble.com/modus-ai/native-product-development/process
- https://modus.trimble.com/modus-ai/vibe-coding-guide/process
- https://modus.trimble.com/modus-ai/ai-pdlc-playbook
- https://modus.trimble.com/modus-ai/mcp-server
- https://modus.trimble.com/modus-ai/rules/cursor
- https://modus.trimble.com/modus-ai/skills/cursor
- https://modus.trimble.com/components/
- https://modus.trimble.com/patterns
- https://modus.trimble.com/templates
- https://modus.trimble.com/foundations/accessibility/overview
- https://cursor.com/docs/agent/overview
- https://help.figma.com/hc/en-us/articles/39889260656407-Cursor-and-Figma-Set-up-the-MCP-server
