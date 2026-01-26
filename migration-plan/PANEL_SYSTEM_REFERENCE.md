# Panel System — Reference & Boundary Definition

This document is the single reference for **Panels** in the UI Guidelines / design system. It defines what panels are, how they differ from cards, and what to lock vs keep flexible.

**Status:** Authoritative reference for Labs “Panel” section and future theme/component work.  
**Related:** Card system → `CARD_GUIDELINES.md`, `_cards.scss`; Panes & Layouts → Labs “Panes & Layouts”.

---

## 1. What Panels Are (Empirically)

Across Orders, Leads, Analytics, Datasets, and Monitoring screens:

**Panels are page-level content organizers, not content atoms.**

### A. Panels dominate page real estate

- Full-width or major column blocks
- Often stacked vertically
- Sometimes nested (panel inside panel layout regions)
- Cards never do this reliably.

### B. Panels host heterogeneous content

Inside a single panel you see:

- Headings + subtext
- Tabs
- Tables / grids
- Forms
- Timelines
- KPI strips
- Actions / CTAs
- Status pills
- Charts

**Cards**, by contrast, are **homogeneous** (metrics, icons, short text).

### C. Panels define context, not just content

Examples:

- “Order Lines”
- “Executive Overview”
- “Kubernetes Pod Health”
- “Dataset Overview”

These are **working zones**, not summaries.

### D. Visual similarity to cards is skin-level only

Panels and cards both use:

- Rounded container
- Border / surface
- Padding

Structurally and semantically, **panels play a different role**. Do not conflate them.

---

## 2. Panel vs Card — Locked Boundary

This is the most important part.

### ❌ What Panels are NOT

- Not “large cards”
- Not “cards with tabs”
- Not “card variants”

If panels inherit card semantics you get:

- Conflicting spacing rules
- Overloaded card entities
- Variant explosion
- Semantic confusion

### ✅ Canonical Difference

| Dimension      | Card                 | Panel                    |
|----------------|----------------------|--------------------------|
| **Role**       | Summarize            | Organize & operate       |
| **Content**    | Homogeneous          | Heterogeneous            |
| **Height**     | Compact              | Variable / large         |
| **Interaction**| Minimal              | Heavy                    |
| **Ownership**  | Component-driven     | Layout-driven            |
| **Nesting**    | Rare                 | Common                   |
| **Semantics**  | Content atom         | Page section             |

**Cards explain. Panels enable.**

---

## 3. Panel Mental Model

A Panel is a **structured container with opinionated outer rules and neutral inner freedom**.

```
┌──────────────────────────────────────┐
│ PANEL (Context Boundary)             │
│                                        │
│  ┌──────── Header (Optional) ─────┐   │
│  │ Title                          │   │
│  │ Subtitle / description         │   │
│  │ Actions (optional)             │   │
│  └────────────────────────────────┘   │
│                                        │
│  ┌──────── Body (Free-form) ──────┐   │
│  │ Tabs / Forms / Tables / Cards  │   │
│  │ Grids / Charts / Timelines     │   │
│  │ Any component composition      │   │
│  └────────────────────────────────┘   │
│                                        │
│  ┌──────── Footer (Optional) ─────┐   │
│  │ CTAs / Status / Pagination     │   │
│  └────────────────────────────────┘   │
└──────────────────────────────────────┘
```

**Key difference from cards:** Panels do **not** prescribe what goes inside — they only regulate **how things are grouped**.

---

## 4. Panel Entity Model (Final, Strong, Minimal)

Panels exist to **structure**, not to explain content.  
The entity set is **small**, **predictable**, and **non-overlapping with Cards**.

### 🔒 Core structural entities (locked)

```
.vw-panel              /* Root container */
.vw-panel__header      /* Optional */
.vw-panel__body        /* Required */
.vw-panel__footer      /* Optional */
.vw-panel__divider     /* Optional separator */
```

That’s it for structure. Everything else is **placement**, not specialization.

### Header entities (semantic only, no styling assumptions)

| Class                   | Purpose                              |
|-------------------------|--------------------------------------|
| `.vw-panel__title`      | Primary heading                      |
| `.vw-panel__subtitle`   | Secondary heading / context          |
| `.vw-panel__description`| Explanatory text (plain or HTML)     |
| `.vw-panel__actions`    | Buttons / links / controls in header |

**Rules:**

- All optional
- May appear in any combination
- Panel does **not** decide typography hierarchy beyond spacing
- Description may be text or HTML — panel doesn’t care

### Footer entities (lightweight)

| Class                 | Purpose                    |
|-----------------------|----------------------------|
| `.vw-panel__status`   | Status text / pills        |
| `.vw-panel__cta`      | Primary/secondary actions  |
| `.vw-panel__meta`     | Timestamps, notes, pagination |

**Rules:**

- Footer is not mandatory
- Footer is not a button bar by default
- CTA layout stays neutral (inline / stacked decided by consumer)

### 🚫 Explicitly forbidden (important to write down)

```css
/* Forbidden in panel namespace */
.vw-panel__metric
.vw-panel__icon
.vw-panel__delta
.vw-panel__value
.vw-panel__kpi
```

These belong to **cards** or child components, **never** panels.

---

## 5. Spacing & Sizing Contract (Lock This)

### Outer container (same as card, by design)

| Property    | Value                         | Reason              |
|-------------|-------------------------------|---------------------|
| Background  | Same surface token as card    | Visual consistency  |
| Border      | Same border token as card     | Section parity      |
| Radius      | Same radius token as card     | System cohesion     |
| Padding     | 16px (1rem)                   | Comfortable for dense + complex content |

```scss
--panel-padding: var(--vw-space-md); /* 16px */
```

This makes panels feel **related** to cards without being cards.

### Internal section gaps (header ↔ body ↔ footer)

| Gap           | Value | Token           |
|---------------|-------|-----------------|
| Section gap   | 12px  | `--vw-space-sm` |
| Dense variant | 14px  | derived, not default (optional later) |

**Default locked at 12px.**  
Reason: matches dense enterprise layouts, prevents vertical bloat in data-heavy panels, aligns with card inner rhythm.

```scss
--panel-section-gap: var(--vw-space-sm); /* 12px */
```

### Header internal spacing

```scss
--panel-header-gap: var(--vw-space-xs); /* 8px */
```

Used between: title ↔ subtitle, subtitle ↔ description.  
**Spacing only** — no typography enforcement.

---

## 6. Structural Ownership Rules (Critical)

These rules prevent most future confusion.

### Rule 1: Panel owns only

- Outer padding
- Section gaps
- Divider placement

### Rule 2: Panel body is layout-neutral

Inside `.vw-panel__body`:

- ❌ No typography rules
- ❌ No grid rules
- ❌ No component-specific spacing
- ✅ Only flow (`display: block`; `gap` if needed)

### Rule 3: Child components remain sovereign

Tabs, tables, forms, cards:

- Bring their own spacing
- Bring their own structure
- Panel never “fixes” them

---

## 7. Canonical Panel Skeleton

Every panel reduces to this structure. No variants, no magic, no ambiguity.

```html
<div class="vw-panel">
  <div class="vw-panel__header">
    <div>
      <h2 class="vw-panel__title">Panel title</h2>
      <p class="vw-panel__subtitle">Optional context</p>
      <div class="vw-panel__description">
        Optional description (text or HTML)
      </div>
    </div>

    <div class="vw-panel__actions">
      <!-- buttons / links -->
    </div>
  </div>

  <div class="vw-panel__divider"></div>

  <div class="vw-panel__body">
    <!-- ANY components: tabs, forms, tables, cards, grids -->
  </div>

  <div class="vw-panel__footer">
    <div class="vw-panel__status">Status</div>
    <div class="vw-panel__cta">Actions</div>
  </div>
</div>
```

---

## 8. Composition Rules

### Rule 1: Panels compose — they do not specialize

**No:**

- `.vw-panel--analytics`
- `.vw-panel--order`
- `.vw-panel--dataset`

**Yes:**

```html
<div class="vw-panel">
  <div class="vw-panel__header">...</div>
  <div class="vw-panel__body">
    <vw-tabs />
    <vw-table />
  </div>
</div>
```

### Rule 2: Panels may contain cards — not vice versa

- KPI cards inside dashboards
- Summary cards inside analytics panels

Cards live **inside** panels when needed; panels never live inside cards.

### Rule 3: Tabs, grids, forms remain first-class

Panels do not wrap or replace their semantics. They only **group** them.

---

## 9. Final Lock Statement

**Add this to docs:**

> Panels **define structure, not content**. They standardize outer boundaries (surface, border, padding, section rhythm) while allowing **unrestricted inner composition** by other components.

### What to lock now

- Entity vocabulary (core structural + header/footer placement entities)
- Spacing & sizing contract (`--panel-padding`, `--panel-section-gap`, `--panel-header-gap`)
- Structural ownership (panel owns only outer padding, section gaps, divider)
- **Panel vs Card boundary** and forbidden panel entities

### What to keep flexible

- Content types inside the body
- Inner layout (grid, flex, custom)
- Interaction patterns (expand/collapse, resizing, etc.)

---

## 10. Quick Reference — Entity Checklist

| Entity            | Required? | Notes                    |
|-------------------|-----------|--------------------------|
| `.vw-panel`       | ✅        | Root                     |
| `.vw-panel__header` | Optional | Title, subtitle, actions |
| `.vw-panel__body` | ✅        | Free-form content        |
| `.vw-panel__footer` | Optional | Status, CTAs, meta     |
| `.vw-panel__divider` | Optional | Between sections      |
| `.vw-panel__title` | Optional | In header              |
| `.vw-panel__subtitle` | Optional | In header           |
| `.vw-panel__description` | Optional | In header         |
| `.vw-panel__actions` | Optional | In header             |
| `.vw-panel__status` | Optional | In footer             |
| `.vw-panel__cta`  | Optional | In footer               |
| `.vw-panel__meta` | Optional | In footer               |

**Forbidden:** `__metric`, `__icon`, `__delta`, `__value`, `__kpi` — belong to cards or child components, never panels.
