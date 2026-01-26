# Card Guidelines — Entity-Based Card System

**One-page reference for dashboard and enterprise cards.**  
Design tokens: `_space.scss`, `_palette.scss`, role tokens. Scope: `.level4-style`, `.template13-style`.

---

## Philosophy

- **Cards do not have variants.** One base, one vocabulary.
- **Cards are composed of entities.** Developers choose entities; they do not invent layouts.
- **Consistency = structure + tokens.** No per-card overrides.

---

## Card Base

| Class | Responsibility |
|-------|----------------|
| `.vw-card` | Surface, 1px border, radius, internal padding, neutral background. |

**Tokens only:** `--borderColor`, `--bgColor10`, `--vw-space-*`, `--vw-radius-*`. No hardcoded values.

---

## Entity Vocabulary (Mandatory)

### Structural

| Entity | Role |
|--------|------|
| `.vw-card__header` | Top section: title, optional icon, optional actions. |
| `.vw-card__body` | Main content. |
| `.vw-card__footer` | Actions, links, meta. |
| `.vw-card__divider` | 1px horizontal rule between sections. |

### Typography

| Entity | Token / scale |
|--------|----------------|
| `.vw-card__title` | `--vw-font-heading-*`, `--vw-line-heading-*` (default md). |
| `.vw-card__subtitle` | `--vw-font-description`, `--vw-line-description`. |
| `.vw-card__description` | `--vw-font-description`, `--vw-line-description`. |

### Metrics

| Entity | Role |
|--------|------|
| `.vw-card__metric` | Single metric (label + value row) or primary value block. |
| `.vw-card__metric--primary` | Emphasized main value (e.g. large numeral); use as sole content or with children. |
| `.vw-card__metric--secondary` | Supporting metric: container for `__metric-label` + `__metric-row`. |
| `.vw-card__metric-label` | Label text; uses `--vw-font-label-*`. |
| `.vw-card__metric-value` | Value text in a metric row; uses `--vw-font-value-*`. |
| `.vw-card__metric-row` | Row: label left, value (and optional delta) right. |
| `.vw-card__metrics` | Grid container for multiple metrics (e.g. 2×2). |

### Delta

| Entity | Role |
|--------|------|
| `.vw-card__delta` | Trend / change text. |
| `.vw-card__delta--positive` | Success color. |
| `.vw-card__delta--negative` | Error/warning color. |

### Icon

| Entity | Rule |
|--------|------|
| `.vw-card__icon` | Contextual only. Allowed: header-left, header-right. Use semantic color tokens. Icons do not define layout or spacing. |

### Chips

| Entity | Rule |
|--------|------|
| `.vw-card__chip` | Wrapper for chip content. Use existing `.vw-chip` plus semantic modifiers. Chips = state/category. Do not use chips for spacing. Allowed: inline with title, or chip row below header. |

### Actions

| Entity | Role |
|--------|------|
| `.vw-card__action` | Single action (e.g. button or link). |
| `.vw-card__actions` | Container for one or more actions. Prefer footer; compact inline row is allowed when needed. |

### Child Cards

| Entity | Rule |
|--------|------|
| `.vw-card__child` | Nested context only. Max depth 1. Smaller radius, subtle border/surface. No typography overrides inside. |

---

## Composition Rules

1. **Order:** Header → Body → Footer. Use `__divider` between sections when needed.
2. **Typography:** Use only `rem` and token-based sizes (`--vw-font-*`, `--vw-line-*`). No `em` for layout or type.
3. **Spacing:** Use only `--vw-space-*` (rem). Borders/radius use `px` via `--vw-radius-*`.
4. **Icons:** Header-left or header-right; semantic color tokens only.
5. **Chips:** Inline with title or in a row under header; semantic variants only; no layout/spacing from the chip component.
6. **Buttons:** Actions only; prefer footer; keep standard sizing; no complex groups inside the card.
7. **Child cards:** Only one level of nesting; smaller radius and subtle treatment.

---

## Typography & Units

| Use | Unit | Source |
|-----|------|--------|
| Font size | `rem` | `--vw-font-heading-*`, `--vw-font-label-*`, `--vw-font-value-*`, `--vw-font-description`, `--vw-font-legend` |
| Line height | Unitless | `--vw-line-heading-*`, `--vw-line-description`, `--vw-line-legend` |
| Spacing | `rem` | `--vw-space-*` |
| Border, radius | `px` | `--vw-radius-*`, 1px border |

Do not use `em` for layout or typography so sizing is consistent across pages, overlays, and dialogs.

---

## Migration: kpi-card → vw-card

- **Strategy:** Change block name only where possible. Keep BEM suffixes aligned.
- **Mapping:** `kpi-card` → `vw-card`; keep `__metrics`, `__metric`, `__metric-label`, `__metric-value`, `__metric-row`, `__divider`, `__icon`, `__delta`.
- **Canonical names where they differed:**
  - Title: use `.vw-card__title` (replaces `kpi-card__title` or `vw-card__heading`).
  - Context label: use `.vw-card__subtitle` or `.vw-card__legend` (pick one per product; doc uses `__subtitle` for “Open (L12M)”-style context).
  - Delta: use `.vw-card__delta--positive` / `.vw-card__delta--negative` (canonical; map from `--up`/`--down` if needed).

---

## Usage in Guidelines UI

- **Shipped by theme:** Card entity classes are defined in the theme as `scss/components/_cards.scss` and loaded from `_global.scss`. Any app that uses the gx-theme (e.g. guidelines) gets `.vw-card` and all entities globally once the theme is loaded.
- **Token scope:** Ensure the host page or app root has a token scope (e.g. `.level4-style` or `.template13-style`) so `--vw-*` and role tokens resolve.
- **Canonical source for design-system edits:** `migration-plan/_card-guidelines.scss`; sync into `node_modules/@enttribe/themes-gx-theme/src/lib/scss/components/_cards.scss` (or equivalent in your theme package) when updating the theme.

---

## Success Criteria

- Most dashboard cards can be built with this entity set only.
- No new one-off card layouts; compose from the vocabulary.
- Typography and spacing come from tokens and stay consistent.
- Legacy cards can be migrated with minimal HTML changes (mainly block renames).

---

## Reference

- **SCSS (in theme, active app-wide):** `node_modules/@enttribe/themes-gx-theme/src/lib/scss/components/_cards.scss` — loaded via `_global.scss`.
- **SCSS (design-system source):** `migration-plan/_card-guidelines.scss`
- **HTML skeletons:** `migration-plan/CARD_GUIDELINES_REFERENCE.html`
