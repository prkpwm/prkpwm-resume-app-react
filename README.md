# prkpwm Resume App

A React + TypeScript + Vite resume builder with multi-profile, multi-template, and inline editing support.

**Live:** https://prkpwm.github.io/prkpwm-resume-app-react/

---

## Implemented Features

### Phase 1: Import / Export Data
- Export active profile data as a JSON file
- Import a JSON file with field validation
- Reset to default data
- Data persisted in `localStorage` across sessions

### Phase 2: Multi-Template Select
- Switch between **Classic** (dark sidebar) and **Minimal** (clean two-column) layouts
- Template selection persisted per profile
- Both templates share the same `ResumeData` type — layout is fully decoupled from data
- Toolbar hidden on print/PDF export

### Phase 3: Edit Elements on Website
- Click-to-edit on every text field (name, title, contacts, summary, education)
- Inline add/remove for all list fields (skills, bullets, tech stack, strengths)
- Live preview — changes reflect instantly in the resume
- All edits auto-saved to `localStorage` via the active profile

### Phase 4: Multi-Resume Management
- Create, rename, duplicate, and delete resume profiles
- Each profile stores its own data + template choice independently
- Profile switcher pill tabs in the top control bar
- At least one profile always preserved

---

## Stack

- React 19 + TypeScript
- Vite + Less
- Puppeteer (PDF export via `npm run export-pdf`)

---

## Scripts

```bash
npm run dev          # start dev server
npm run build        # production build
npm run deploy       # build + deploy to GitHub Pages
npm run export-pdf   # build + export resume.pdf via Puppeteer
```

---

## Project Structure

```
src/
  components/
    editors/
      EditableField    # Click-to-edit text/textarea wrapper
      EditableList     # Inline add/remove list wrapper
    templates/
      Classic/         # Dark sidebar template
      Minimal/         # Clean two-column template
    ImportExportBar    # JSON import/export toolbar
    TemplatePicker     # Segmented template switcher
    ProfileSidebar     # Multi-profile pill tabs
  data/
    resumeData.ts      # Default resume content
  hooks/
    useProfiles.ts     # All state: profiles, data, template, import/export
  types/
    resume.ts          # ResumeData, ResumeProfile, ProfileStore interfaces
    template.ts        # TemplateId type + template registry
```

---

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned phases including AI suggestions, section reordering, custom themes, shareable links, and analytics.
