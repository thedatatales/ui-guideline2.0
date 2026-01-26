# v1.2 Card Aesthetics → Token Mapping (Review)

Map values from `sample-app-pages/css-updatre-v1.2.scss` (target aesthetics) to the closest existing variables in `_space.scss` and `_palette.scss`, then to `_cards.scss` entity classes. All card visuals should eventually use **rem**, **px for radius/border**, and tokens only.

**Source:** `sample-app-pages/css-updatre-v1.2.scss`  
**Target variables:** `node_modules/@enttribe/themes-gx-theme/src/lib/scss/_space.scss`, `_palette.scss`  
**Target classes:** `scss/components/_cards.scss` (entity-based)

---

## 1. Border

| v1.2 context | v1.2 value | Closest variable | In rem / token | _cards.scss usage |
|--------------|------------|------------------|----------------|-------------------|
| Card section/parent/default | `1px solid #e2e8f0` | `--vw-color-slate-200` (#e2e8f0) | `1px solid var(--borderColor, var(--vw-color-slate-200))` or `var(--vw-color-gray-200)` | `.vw-card` base border |
| Child card | `1px solid #e5e7eb` | `--vw-color-gray-200` (#e5e7eb) | `1px solid var(--borderColor, var(--vw-color-gray-200))` | `.vw-card__child.vw-card` |
| Card block (generic) | `1px solid` (color from variant) | role / semantic | Keep `1px`; color from role or semantic token | N/A (entity card has no variants) |

**Recommendation:** Use `--borderColor` as primary (theme role); fallback `--vw-color-gray-200` or `--vw-color-slate-200` to match v1.2. Child card can use same or explicitly `--vw-color-gray-200` to match v1.2 child.

---

## 2. Border radius

| v1.2 class / context | v1.2 value | Closest variable | _space.scss | _cards.scss usage |
|----------------------|------------|------------------|-------------|-------------------|
| Section, card-block, default | `16px` | `--vw-radius-lg` | 16px ✓ | `.vw-card` (already uses `--vw-radius-lg`) |
| Parent card | `12px` | `--vw-radius-md` | 12px ✓ | Optional parent wrapper; not in entity card |
| Child card | `8px` | `--vw-radius-sm` | 8px ✓ | `.vw-card__child.vw-card` (already uses `--vw-radius-sm`) |
| Chips | `9999px` | `--vw-radius-full` | 9999px ✓ | Chip component; not in _cards.scss |

**Recommendation:** No change. _cards.scss already uses `--vw-radius-lg` (base) and `--vw-radius-sm` (child). Mapping is 1:1.

---

## 3. Font size (→ rem)

| v1.2 class | v1.2 value | In rem | Closest _space variable | Notes |
|------------|------------|--------|-------------------------|-------|
| .vw-page-title | 20px → (v1.2 also has 1.125rem in a later edit) | 1.125rem | `--vw-font-heading-lg` (1.125rem) | Page title; not part of .vw-card |
| .vw-card-title | 16px | 1rem | `--vw-font-heading-md` (1rem) ✓ | |
| .vw-card-subtitle | 14px | 0.875rem | `--vw-font-description` (0.875rem) ✓ | |
| .vw-card-description | 12px | 0.75rem | `--vw-font-legend` (0.75rem) | v1.2 “description” is smaller than _cards “description” (0.875rem). Choose one canonical size. |
| .vw-card-metric-xl | 24px | 1.5rem | **Gap:** _space has `--vw-font-value-xl: 1.75rem` (28px). No 1.5rem value. | Option A: add `--vw-font-value-2xl: 1.5rem` and use for “xl” metric. Option B: use `--vw-font-value-xl` and accept 1.75rem. Option C: treat 1.5rem as local in _cards until _space adds it. |
| .vw-card-metric-lg | 20px | 1.25rem | `--vw-font-value-lg` (1.25rem) ✓ | |
| .vw-card-metric-md | 16px | 1rem | `--vw-font-value-sm` (1rem) ✓ | |
| .vw-card-metric-sm | 14px | 0.875rem | `--vw-font-value-xs` (0.875rem) or `--vw-font-description` ✓ | |
| .vw-card-metric-label | 13px | 0.8125rem | **Gap:** _space has `--vw-font-label-md: 0.875rem` (14px), `--vw-font-label-sm: 0.75rem` (12px). No 0.8125rem. | Closest: `--vw-font-label-md` (0.875rem). Accept slight increase or add `--vw-font-label-md-alt: 0.8125rem` only if needed. |
| .vw-card-variance | 12px | 0.75rem | `--vw-font-legend` (0.75rem) ✓ | |

**Recommendation:**  
- Title / subtitle / legend / delta: use current _space tokens as in table; align _cards and v1.2 naming where they overlap.  
- Metric-xl: decide whether “xl” is 24px (1.5rem) or 28px (1.75rem). If v1.2 is canonical, add or alias a token for 1.5rem and use it for primary metric.  
- Metric-label: use `--vw-font-label-md` (0.875rem) unless product strictly needs 13px, then extend _space once.

---

## 4. Font weight

| v1.2 class | v1.2 value | Semantic | _cards.scss / note |
|------------|------------|----------|--------------------|
| .vw-page-title | 600 | Semibold | Not in _cards |
| .vw-card-title | 400 | Regular | _cards uses 500 for `.vw-card__title`. v1.2 uses 400. |
| .vw-card-subtitle, -description, -metric-label | 400 | Regular | Matches _cards (400). |
| .vw-card-metric-xl | 600 | Semibold | Matches _cards `__metric--primary` (600). |
| .vw-card-metric-lg, -md | 500 | Medium | _cards `__metric-value` uses 600; v1.2 “large/medium” use 500. |
| .vw-card-metric-sm | 400 | Regular | — |
| .vw-card-variance | 500 | Medium | Matches _cards `__delta` (500). |

**Recommendation:**  
- Title: choose one. _cards 500 = slightly stronger; v1.2 400 = lighter. Document as “card title weight: 400 (v1.2) vs 500 (current _cards)”.  
- Metric value: _cards uses 600 for all metric values; v1.2 uses 500 for lg/md. Optional token later (e.g. `--vw-weight-metric-primary: 600`, `--vw-weight-metric-secondary: 500`); for mapping, keep 600 for primary and use 500 for “secondary” metric value if we add that modifier.

---

## 5. Line-height (unitless)

v1.2 uses **px** for line-height. Convert to unitless (line-height / font-size) and map to _space where possible.

| v1.2 class | v1.2 line-height | font-size | Unitless | Closest _space variable |
|------------|------------------|-----------|----------|--------------------------|
| .vw-page-title | 1.5rem (or 32px) | 1.125rem | ~1.33 | `--vw-line-heading-md` (1.25) or 1.33 |
| .vw-card-title | 24px | 16px | 1.5 | **Gap:** _space has `--vw-line-heading-md: 1.25`. No 1.5. | Consider `--vw-line-heading-md: 1.5` for title if we want v1.2 look. |
| .vw-card-subtitle | 18px | 14px | ~1.29 | `--vw-line-description` (1.4) is close. |
| .vw-card-description | 16px | 12px | ~1.33 | `--vw-line-legend` (1.2) or 1.33 |
| .vw-card-metric-xl | 28px | 24px | ~1.17 | `--vw-line-heading-xl` (1.2) ✓ |
| .vw-card-metric-lg | 20px | 20px | 1 | — (no token) |
| .vw-card-metric-md | 20px | 16px | 1.25 | `--vw-line-heading-md` (1.25) ✓ |
| .vw-card-metric-sm | 16px | 14px | ~1.14 | — |
| .vw-card-metric-label | 18px | 13px | ~1.38 | `--vw-line-description` (1.4) ✓ |
| .vw-card-variance | 16px | 12px | ~1.33 | `--vw-line-legend` (1.2) or 1.33 |

**Recommendation:** Use existing _space line-height tokens as “closest” above. Only add new tokens if we need exact v1.2 ratios (e.g. 1.5 for title).

---

## 6. Color (card / typography)

| v1.2 value | Usage | Closest variable | _palette / role |
|------------|--------|-------------------|------------------|
| #252525 | Title, subtitle | `--grayColor800` / `--vw-color-gray-800` (#1f2937) | Slightly different; #252525 is 37,37,37. gray-800 is 31,41,55. Prefer role token or `--vw-color-gray-800`. |
| #7c7c7c | Metric label, neutral variance | `--vw-color-gray-500` (#6b7280) or `--grayColor600` | “Meta” tone; gray-500/600. |
| #e2e8f0 | Border (section/parent/default) | `--vw-color-slate-200` (#e2e8f0) ✓ | Exact match. |
| #e5e7eb | Border (child) | `--vw-color-gray-200` (#e5e7eb) ✓ | Exact match. |
| #ffffff | Background | `--vw-color-white` / `--bgColor10` ✓ | |
| (success/error/warning/info) | Card variants | — | Entity card has no variants; chip/state colors stay in chip or semantic tokens. |

**Recommendation:** Use `--borderColor`, `--bgColor10`, `--grayColor800`/`600`/`500` as role tokens; fallback to `--vw-color-slate-200`, `--vw-color-gray-200`, `--vw-color-white`, `--vw-color-gray-*` so v1.2 hex values are matched where palette defines them.

---

## 7. Spacing (padding, gap)

| v1.2 context | v1.2 value | Closest variable | _space | _cards usage |
|--------------|------------|------------------|--------|--------------|
| Section padding | 1rem | `--vw-space-lg` | 1rem ✓ | Section not in _cards |
| Card block / parent padding | 1rem | `--vw-space-lg` | 1rem ✓ | _cards uses `--vw-space-xl` (1.25rem) for base. v1.2 uses 1rem. |
| Child card padding | 0.75rem | `--vw-space-md` | 0.75rem ✓ | _cards child uses `--vw-space-md` ✓ |
| Card block gap | 0.5rem | `--vw-space-sm` | 0.5rem ✓ | _cards base uses `--vw-space-md` (0.75rem) for gap. |

**Recommendation:** To match v1.2 exactly: base card padding `var(--vw-space-lg)` (1rem), base card gap `var(--vw-space-sm)` (0.5rem). Today _cards uses `--vw-space-xl` and `--vw-space-md`. Mapping: v1.2 1rem → `--vw-space-lg`; v1.2 0.5rem → `--vw-space-sm`. Document as “v1.2 adopt” so _cards can switch to these if desired.

---

## 8. v1.2 class → _cards.scss entity (semantic mapping)

| v1.2 class | Role | _cards entity class | Token mapping (from tables above) |
|------------|------|---------------------|-----------------------------------|
| .vw-card-section | Section container | — | Border: `--borderColor` / `--vw-color-slate-200`; radius: `--vw-radius-lg`; padding: `--vw-space-lg`. |
| .vw-card-parent | Parent wrapper | — | Same as section for border/radius/padding. |
| .vw-card-child | Nested card | `.vw-card__child.vw-card` | Border: `--vw-color-gray-200`; radius: `--vw-radius-sm`; padding: `--vw-space-md`. ✓ |
| .vw-card-block | Card layout | — | Becomes .vw-card. Gap: `--vw-space-sm`; padding: `--vw-space-lg`; radius: `--vw-radius-lg`. |
| .vw-card--default | Neutral card | .vw-card (no variant) | Border: `--borderColor`/`--vw-color-slate-200`; bg: `--vw-color-white`. |
| .vw-card-title | Card title | `.vw-card__title` | font-size: `--vw-font-heading-md`; weight: 400 (v1.2) vs 500 (_cards); line-height: 1.25 or 1.5; color: `--grayColor800`/`--vw-color-gray-800`. |
| .vw-card-subtitle | Subtitle / context | `.vw-card__subtitle` or `.vw-card__legend` | font-size: `--vw-font-description`; line-height: `--vw-line-description`; color: same as title or `--vw-color-gray-600`. |
| .vw-card-description | Supporting text | `.vw-card__description` | font-size: `--vw-font-description` (0.875rem) or `--vw-font-legend` (0.75rem) per product choice; line-height from _space. |
| .vw-card-metric-xl | Primary metric value | `.vw-card__metric--primary` or value in __metric-value | font-size: 1.5rem (need token) or `--vw-font-value-xl` (1.75rem); weight 600; line-height: `--vw-line-heading-xl`. |
| .vw-card-metric-lg | Large metric | `.vw-card__metric-value` (size mod) | `--vw-font-value-lg` (1.25rem), weight 500. |
| .vw-card-metric-md | Medium metric | `.vw-card__metric-value` | `--vw-font-value-sm` (1rem), weight 500. |
| .vw-card-metric-sm | Small metric | (smaller modifier) | `--vw-font-value-xs` (0.875rem), weight 400. |
| .vw-card-metric-label | Metric label | `.vw-card__metric-label` | `--vw-font-label-md` (0.875rem); color: `--vw-color-gray-500`/`--grayColor600`. |
| .vw-card-variance | Delta | `.vw-card__delta` | font-size: `--vw-font-legend`; weight 500; line-height: `--vw-line-legend`; colors: success/error tokens. ✓ |

---

## 9. Summary: what to apply (after review)

1. **Border:** Standardise on `1px solid var(--borderColor, var(--vw-color-slate-200))` for base card and `--vw-color-gray-200` for child if we want to match v1.2 hex exactly.
2. **Radius:** Keep `--vw-radius-lg` (base), `--vw-radius-sm` (child). Already correct.
3. **Font size:** Use _space tokens everywhere; add or alias one token for “1.5rem” (24px) if primary metric must match v1.2 metric-xl. Otherwise use `--vw-font-value-xl` (1.75rem).
4. **Font weight:** Decide title 400 vs 500; document and optionally add a small set of weight tokens for title/metric if needed.
5. **Line-height:** Use existing _space line-height tokens; optionally set title line-height to 1.5 to match v1.2.
6. **Spacing:** To adopt v1.2 exactly: base card padding `--vw-space-lg` (1rem), base card gap `--vw-space-sm` (0.5rem). Child keep `--vw-space-md`.
7. **Colors:** Use role tokens first, then `--vw-color-*` fallbacks as in section 6.
8. **No code changes in this step:** This document is for review only. Apply in _cards.scss and/or _space.scss in a follow-up.

---

## 10. Optional _space.scss additions (if v1.2 is canonical)

Only if we want exact v1.2 numbers in tokens:

| Token | Value | Use case |
|-------|--------|----------|
| `--vw-font-value-2xl` or alias | 1.5rem | v1.2 metric-xl (24px) |
| `--vw-line-heading-title` | 1.5 | v1.2 card-title 24/16 |
| (optional) `--vw-font-label-md-alt` | 0.8125rem | v1.2 metric-label 13px |

Everything else can be mapped to existing _space and _palette variables as in the tables above.
