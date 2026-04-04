# prkpwm Resume App

A React + TypeScript + Vite resume builder with multi-template support and import/export functionality.

**Live:** https://prkpwm.github.io/prkpwm-resume-app-react/

---

## Implemented Features

### Phase 1: Import / Export Data
- Export resume data as a JSON file (download)
- Import a JSON file to replace resume data (with validation)
- Reset to default data
- Data persisted in `localStorage` across sessions

### Phase 2: Multi-Template Select
- Switch between **Classic** (dark sidebar) and **Minimal** (clean two-column) layouts
- Template selection persisted in `localStorage`
- Both templates share the same `ResumeData` type — data is fully decoupled from layout
- Toolbar hidden on print/PDF export

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
    templates/
      Classic/       # Dark sidebar template
      Minimal/       # Clean two-column template
    ImportExportBar  # JSON import/export toolbar
    TemplatePicker   # Template switcher buttons
  data/
    resumeData.ts    # Default resume content
  hooks/
    useResumeData.ts # Data state + localStorage + import/export
    useTemplate.ts   # Template selection + localStorage
  types/
    resume.ts        # ResumeData interfaces
    template.ts      # TemplateId type + template registry
```

---

## Roadmap

See [ROADMAP.md](./ROADMAP.md) for planned phases including inline editing, AI suggestions, shareable links, and more.
