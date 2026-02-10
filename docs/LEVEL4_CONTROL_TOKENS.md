# level4-style: Global Control Tokens — Risks, Conflicts & Unique Token List

**Date:** 2026-01-29  
**Scope:** `.level4-style` only (lines 125–733 in `variables.scss`). `template13-style` is out of scope and remains untouched.  
**Purpose:** Deep dive into level4-style to list unique control tokens needed for optimization, and document risks/conflicts of introducing them.

---

## 1. Risks of Introducing Global Control Tokens

### 1.1 Cascade / override risk (low if done inside level4-style)

- **Risk:** If control tokens are defined on `:root` or a parent without `.level4-style`, they could affect other templates or legacy screens that don’t use level4-style.
- **Mitigation:** Define all new control tokens **inside** `.level4-style { ... }` only. Then only level4-style consumers see them; template13-style and others are unaffected.
- **Conflict:** None with template13-style, since we are not touching it.

### 1.2 Consumer not updated (medium)

- **Risk:** We add `--controlBorderWidth` and keep e.g. `--fieldBorderWidth: 0.084em`. If we later change only `--controlBorderWidth`, any selector that still uses `--fieldBorderWidth` directly (and we don’t refactor it to `var(--controlBorderWidth)`) will not follow the global change.
- **Mitigation:** Phase 1: introduce control tokens and set **existing** variables from them (e.g. `--fieldBorderWidth: var(--controlBorderWidth);`). No consumer file change. Phase 2 (optional): gradually point consumers to control tokens where it simplifies. No conflict if we only add tokens and wire existing vars to them.

### 1.3 Semantic difference (low)

- **Risk:** Today, “field focus border width” is 0.165em and “field default border width” is 0.084em. If we name a global token `--controlFocusBorderWidth: 0.165em` and reuse it for buttons, we might later want different focus width for fields vs buttons.
- **Mitigation:** Keep **two** width tokens: default (0.084em) and focus (0.165em). Both are already shared conceptually (field uses both; buttons use only default). If a future design differentiates “input focus width” vs “button focus width”, we can split later; for level4-style today, one focus width is enough.

### 1.4 Breaking existing overrides (low)

- **Risk:** Some app or feature might override e.g. `--fieldBorderWidth` in a narrower scope. If we change `--fieldBorderWidth` to `var(--controlBorderWidth)`, that override still wins in the cascade; no conflict.
- **Conclusion:** No extra conflict from introducing control tokens, as long as we only add new tokens and set current variables to reference them (or leave current vars as-is and add tokens for future use).

### 1.5 Summary: conflicts

- **template13-style:** No conflict; out of scope, unchanged.
- **Other themes / body classes:** No conflict if control tokens live only inside `.level4-style`.
- **Consumers (_global.scss, core-mixin.scss, etc.):** No conflict if we keep existing variable names and set their values to `var(--controlX)` inside level4-style; behavior stays the same, with one place to change the value later.

---

## 2. Unique Control Tokens Needed (level4-style only)

Below are the **unique** values that today act as “control” tokens (border width, focus width, radius, and the main interactive colors). These are the candidates for global control tokens.

### 2.1 Border widths (numeric)

| Token role | Unique value | Current usage (examples) |
|------------|--------------|---------------------------|
| **Default border width** | `0.084em` | Field, field hover, field currency, field affix text (but overridden to 0em in some), all filled/stroked/flat/icon-stroked buttons, toggle outer, checkbox, slider thumb/top label, upload, tab bottom, stepper connector (via `var(--fieldBorderWidth)`). |
| **Focus border width** | `0.165em` | Field focus only. |
| **No border** | `0em` | Field disabled, field affix icon, field affix text, button icon (primary/accent/warn), ag-grid pinned. |
| **Thin border** | `0.06em` | Config header only. |
| **Medium border** | `0.11em` | Snackbar only. |

**Suggested global control tokens (border width):**

| Proposed name | Value | Notes |
|---------------|--------|------|
| `--controlBorderWidth` | `0.084em` | Single source for “standard” border. |
| `--controlFocusBorderWidth` | `0.165em` | Single source for “focus” border (e.g. input focus). |
| `--controlBorderWidthNone` | `0em` | Optional; can stay literal where used. |
| `--controlBorderWidthThin` | `0.06em` | Optional; only config header. |
| `--controlBorderWidthMedium` | `0.11em` | Optional; only snackbar. |

Minimum set for “easier control”: **`--controlBorderWidth`** and **`--controlFocusBorderWidth`**. The rest can stay as literals or be added later if we want one place for thin/medium too.

---

### 2.2 Radius (numeric / var)

| Token role | Unique value | Current usage (examples) |
|------------|--------------|---------------------------|
| **Field / button radius** | `0.67em` | `--fieldRadius`, `--buttonRadius: var(--fieldRadius)`, `--uploadBorderRadius`. |
| **Medium radius** | `1em` | Dialog, chip, query builder, config card, upload box, snackbar. |
| **Large radius** | `1.6em` | Card. |
| **Icon select box** | `var(--fieldRadius)` | Already references field. |
| **Toggle** | `1.5em` | Toggle, slide toggle. |
| **Checkbox** | `0.37em` (inner), `0em` (outer) | Checkbox. |
| **Tooltip** | `0.6em` | Tooltip. |
| **Date picker** | `2em` | Selected cell, range from. |

**Suggested global control tokens (radius):**

| Proposed name | Value | Notes |
|---------------|--------|------|
| `--controlRadius` | `0.67em` | Field, button, upload border; single “default” control radius. |
| `--controlRadiusMedium` | `1em` | Dialog, chip, snackbar, etc. |
| `--controlRadiusLarge` | `1.6em` | Card. |
| `--controlRadiusPill` | `1.5em` | Toggle (optional name). |

Minimum set: **`--controlRadius`** (0.67em) and optionally **`--controlRadiusMedium`** (1em). `--fieldRadius` can become `var(--controlRadius)` so `--buttonRadius: var(--fieldRadius)` stays valid.

---

### 2.3 Focus / hover border color (semantic)

Today, “interactive” border color (hover/focus) is almost always one of:

- **Accent:** `var(--accentColor500)` (field hover/focus, field error hover/focus, stroked accent hover/focus, dropdown hover, upload hover, etc.)
- **Primary:** `var(--primaryColor500)` / `var(--primaryColor600)` (stroked primary hover/focus)
- **Warn:** `var(--warnColor500)` / `var(--warnColor600)` / `var(--warnColor700)` (stroked warn, error states)

So we already have a single semantic idea: “default interactive border = accent”. Primary/warn are for themed buttons.

**Suggested global control tokens (color):**

| Proposed name | Value | Notes |
|---------------|--------|------|
| `--controlFocusColor` | `var(--accentColor500)` | Single “default” focus/hover border (fields, accent-like controls). |
| `--controlHoverColor` | `var(--accentColor500)` | Same as focus in level4-style; can alias to `var(--controlFocusColor)` or keep one token. |

We do **not** need to replace primary/warn palette refs with a single “control” color; those are intentional theming. Only the “neutral” or “accent” interactive border can be one token.

---

### 2.4 Outer focus outline (already a single token)

- `--focusOuterOutline: none !important;` — already one place; no new token needed.

---

## 3. Complete List: Unique Control Tokens for level4-style

Consolidated list of **proposed** global control tokens (only what we need for level4-style).

### 3.1 Border width

| # | Token name | Value | Use for |
|---|------------|--------|---------|
| 1 | `--controlBorderWidth` | `0.084em` | Field, button (all variants that have border), toggle outer, checkbox, slider, upload, tab, stepper connector, config header (or use thin). |
| 2 | `--controlFocusBorderWidth` | `0.165em` | Field focus. |
| 3 | `--controlBorderWidthNone` | `0em` | Optional; disabled/icon buttons. |
| 4 | `--controlBorderWidthThin` | `0.06em` | Optional; config header. |
| 5 | `--controlBorderWidthMedium` | `0.11em` | Optional; snackbar. |

**Minimum:** 1 and 2.

### 3.2 Radius

| # | Token name | Value | Use for |
|---|------------|--------|---------|
| 6 | `--controlRadius` | `0.67em` | Field, button (via fieldRadius), upload border. |
| 7 | `--controlRadiusMedium` | `1em` | Dialog, chip, query builder, config card, upload box, snackbar. |
| 8 | `--controlRadiusLarge` | `1.6em` | Card. |

**Minimum:** 6 and 7.

### 3.3 Interactive color (focus/hover border)

| # | Token name | Value | Use for |
|---|------------|--------|---------|
| 9 | `--controlFocusColor` | `var(--accentColor500)` | Field hover/focus border, field error hover/focus, stroked accent hover/focus, upload hover, etc. |

**Optional:** `--controlHoverColor` as alias of `--controlFocusColor` if we want a separate name for hover.

---

## 4. Mapping: Current Variables → Control Token (for refactor)

When we implement, we can set **existing** variables to the new tokens so that no consumer file (_global.scss, core-mixin, etc.) has to change.

### 4.1 Border width

- `--fieldBorderWidth` → `var(--controlBorderWidth)`
- `--fieldHoverBorderWidth` → `var(--controlBorderWidth)`
- `--fieldFocusBorderWidth` → `var(--controlFocusBorderWidth)`
- `--fieldCurrencyInputBorderWidth` → `var(--controlBorderWidth)`
- `--fieldAffixTextBorderWidth` → keep `0em` or `var(--controlBorderWidthNone)`
- `--configHeaderBorderWidth` → `var(--controlBorderWidthThin)` or keep `0.06em`
- All `--button*BorderWidth: 0.084em` → `var(--controlBorderWidth)`
- `--buttonIcon*BorderWidth: 0em` → keep or `var(--controlBorderWidthNone)`
- `--checkboxBorderWidth` → `var(--controlBorderWidth)`
- `--sliderThumbBorderWidth`, `--sliderTopLabelBorderWidth` → `var(--controlBorderWidth)`
- `--uploadBorderWidth` → `var(--controlBorderWidth)`
- `--tabBottomBorderWidth` → `var(--controlBorderWidth)`
- `--snackbarBorderWidth` → `var(--controlBorderWidthMedium)` or keep `0.11em`
- `--stepperConnectorLineWidth` already uses `var(--fieldBorderWidth)` → will follow control automatically once field is wired.

### 4.2 Radius

- `--fieldRadius` → `var(--controlRadius)`
- `--buttonRadius` already `var(--fieldRadius)` → no change.
- `--iconSelectBoxRadius` already `var(--fieldRadius)` → no change.
- `--uploadBorderRadius` → `var(--controlRadius)` (0.67em).
- `--dialogRadius`, `--chipRadius`, `--queryBuilderRadius`, `--configCardRadius`, `--uploadBoxRadius`, `--snackbarBorderRadius` (if we introduce medium) → `var(--controlRadiusMedium)`.
- `--cardRadius` → `var(--controlRadiusLarge)`.

### 4.3 Focus / hover color

- `--fieldHoverBorderColor` → `var(--controlFocusColor)`
- `--fieldFocusBorderColor` → `var(--controlFocusColor)`
- `--fieldErrorHoverBorderColor` → `var(--controlFocusColor)`
- `--fieldErrorFocusBorderColor` → `var(--controlFocusColor)`
- `--buttonStrokedAccentHoverBorderColor`, `--buttonStrokedAccentFocusBorderColor` → can stay `var(--accentColor500)` or use `var(--controlFocusColor)` (same value).
- Same for other accent-like borders; optional alias.

---

## 5. Implementation order (suggested)

1. **Add** at the top of `.level4-style` (after opening brace):
   - `--controlBorderWidth: 0.084em;`
   - `--controlFocusBorderWidth: 0.165em;`
   - `--controlRadius: 0.67em;`
   - `--controlRadiusMedium: 1em;`
   - `--controlRadiusLarge: 1.6em;`
   - `--controlFocusColor: var(--accentColor500);`
2. **Replace** literal values in level4-style with `var(--control…)` using the mapping above (field first, then button, then rest).
3. **Leave** template13-style and all other files unchanged.
4. **Test** with body class `level4-style` only; confirm visuals unchanged.
5. **Document** in this file that “level4-style control tokens” are the single place to change default border width, focus width, default radius, and default focus color.

---

## 6. Summary

- **Risks:** Low if control tokens are defined only inside `.level4-style` and existing variables are refactored to reference them; no conflict with template13-style.
- **Conflicts:** None identified with current setup or with leaving template13-style untouched.
- **Unique control tokens needed (minimum):**  
  `--controlBorderWidth`, `--controlFocusBorderWidth`, `--controlRadius`, `--controlRadiusMedium`, `--controlRadiusLarge`, `--controlFocusColor`.  
  Optional: `--controlBorderWidthNone`, `--controlBorderWidthThin`, `--controlBorderWidthMedium`, `--controlHoverColor` (alias).
