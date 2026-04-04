# Resume Builder — Roadmap

## Phase 1: Import / Export Data

**Goal:** Allow users to load and save resume data without touching code.

### Features
- Export current resume data as JSON file (download)
- Import JSON file to replace/merge resume data
- Export resume as PDF (leverage existing `scripts/export-pdf.ts`)
- Validate imported JSON against `ResumeData` interface before applying
- Show error feedback on invalid import

### Key Files
- `src/data/resumeData.ts` — source of truth
- `src/types/resume.ts` — validation schema
- `scripts/export-pdf.ts` — PDF export script

---

## Phase 2: Multi-Template Select

**Goal:** Let users switch between visual resume layouts without changing data.

### Features
- Template selector UI (e.g. dropdown or card picker)
- At least 2 templates: Classic (current), Modern/Minimal
- Templates share the same `ResumeData` type — data is decoupled from layout
- Persist selected template in `localStorage`
- Each template lives in its own component folder under `src/components/templates/`

### Key Files
- `src/App.tsx` — inject template switcher
- `src/components/templates/` — one folder per template
- `src/types/resume.ts` — shared data contract

---

## Phase 3: Edit Elements on Website

**Goal:** Let users edit resume content directly in the browser (no code changes needed).

### Features
- Inline editing for all text fields (click-to-edit)
- Add / remove items in lists (skills, bullets, tech tags, etc.)
- Add / remove work experience, achievements, education entries
- Live preview updates as user edits
- Save changes back to exported JSON or `localStorage`
- Optional: undo/redo support

### Key Files
- `src/data/resumeData.ts` — state source
- `src/components/` — editable wrappers per section
- `src/types/resume.ts` — typed field definitions

---

## Notes
- All phases are independent and can be shipped incrementally.
- Phase 1 unblocks Phase 3 (edit → export flow).
- Phase 2 is purely presentational and can run in parallel.

---

## Phase 4: Multi-Resume Management

**Goal:** Let users manage more than one resume profile in a single app instance.

### Features
- Create, rename, duplicate, and delete resume profiles
- Resume list/sidebar to switch between profiles
- Each profile stores its own `ResumeData` + selected template
- Persist all profiles in `localStorage` (or exportable as a multi-profile JSON)
- Set a profile as "active" for export/edit/preview
- Import a single resume JSON into a new profile slot

### Key Files
- `src/data/resumeData.ts` — becomes one of many profiles
- `src/types/resume.ts` — add `ResumeProfile` wrapper type
- `src/components/` — profile switcher/sidebar component

---

## Phase 5: AI-Assisted Content Suggestions

**Goal:** Help users write better resume content using AI.

### Features
- Suggest improved bullet points based on job title and tech stack
- Rewrite summary section with tone options (formal, concise, impactful)
- Keyword gap analysis — compare resume against a pasted job description
- Accept / reject suggestions inline before applying
- Configurable AI provider (OpenAI, local model, etc.) via settings

### Key Files
- `src/components/ai/` — suggestion panel components
- `src/types/resume.ts` — no changes needed, AI maps to existing fields
- `.env` — API key config

---

## Phase 6: Section Visibility & Order Control

**Goal:** Let users control which sections appear and in what order.

### Features
- Toggle visibility of any section (skills, achievements, education, etc.)
- Drag-and-drop reorder sections
- Hidden sections are excluded from PDF export and print view
- Persist visibility/order config per profile

### Key Files
- `src/App.tsx` — section render order driven by config
- `src/types/resume.ts` — add `SectionConfig` type
- `src/components/settings/` — section manager UI

---

## Phase 7: Custom Color & Typography Themes

**Goal:** Give users control over the visual style beyond template layout.

### Features
- Color palette picker (primary, accent, background, text)
- Font family selector (heading vs body, from Google Fonts or bundled)
- Font size scale control
- Live preview of changes
- Theme saved per profile, exportable as a theme JSON

### Key Files
- `src/App.less` — CSS variables driven by theme config
- `src/components/settings/ThemeEditor.tsx`
- `src/types/` — add `ThemeConfig` interface

---

## Phase 8: Print & PDF Layout Optimization

**Goal:** Ensure the exported PDF looks as good as the browser view.

### Features
- Print-specific CSS to handle page breaks cleanly
- One-page / two-page mode toggle
- Font and spacing adjustments for print fidelity
- Preview print layout in-browser before export
- Improve `scripts/export-pdf.ts` with Puppeteer headless options

### Key Files
- `src/index.css` — `@media print` rules
- `scripts/export-pdf.ts` — Puppeteer config
- `src/components/templates/` — print-safe layout variants

---

## Phase 9: Shareable Public Link

**Goal:** Let users share a live, read-only version of their resume via URL.

### Features
- Publish a resume profile to a hosted URL (e.g. Firebase, Vercel)
- Unique slug per profile (e.g. `/r/pakpoom`)
- Read-only public view — no edit controls shown
- Optional password protection for private sharing
- QR code generation for the public link

### Key Files
- `src/components/share/` — share modal + QR code component
- Hosting config (Firebase / Vercel)
- `src/types/resume.ts` — add `publishConfig` field to profile

---

## Phase 10: Analytics & View Tracking

**Goal:** Let users know who is viewing their shared resume.

### Features
- View count on published resume links
- Visitor location and device type (anonymous, no PII)
- Time-on-page and section scroll depth tracking
- Dashboard in-app to see stats per profile
- Optional email notification on new view

### Key Files
- `src/components/analytics/` — stats dashboard
- Hosting / analytics backend (Firebase Analytics or lightweight custom)
- `src/types/` — add `AnalyticsData` interface
