# variables.scss Audit Report — Repetition & Optimization

**Date:** 2026-01-29  
**Scope:** `node_modules/@enttribe/themes-gx-theme/src/lib/variables.scss` (lines 186–579 and full file structure).  
**Goal:** Identify repetition across component properties (border width, hover, focus, etc.), trace variable wiring to consumers, and suggest consolidation for easier control.

---

## 1. Executive Summary

- **Finding:** The same design tokens (border width, focus color, hover color, radius) are repeated many times per component and duplicated across two large selector blocks (`.level4-style` and `.template13-style`). There is no single source of truth for “input border” or “focus color,” so changing one requires editing dozens of variables.
- **Recommendation:** Introduce a small set of **global control variables** (e.g. `--controlBorderWidth`, `--controlFocusColor`, `--controlRadius`) and have component-specific variables reference them. Optionally collapse `.level4-style` and `.template13-style` into one block with overrides only where they truly differ.

---

## 2. File Structure & Wiring

### 2.1 Where variables are defined

| Selector | Approx. lines | Purpose |
|----------|----------------|--------|
| **`.level4-style`** | 125–733 | Main variable block; body uses `class="… level4-style"` (see `src/index.html`). |
| **`.template13-style`** | 735–~1844 | Alternate template; same variable names with different values in places. |

Variables are **scoped** to these classes. The app currently uses **`level4-style`** on the body (`index.html`: `class='app-body theme level4-style'`). So at runtime, only the `.level4-style` block applies unless the app switches to `template13-style`.

### 2.2 How variables are consumed (trace to “root”)

| Consumer | File | Examples of variables used |
|----------|------|-----------------------------|
| **Form fields (input, select, etc.)** | `_global.scss` | `--fieldRadius`, `--fieldBorderWidth`, `--fieldHeight`, `--fieldLabelGap` |
| **Buttons** | `_global.scss` | `--buttonIconWidth`, `--buttonIconHeight` |
| **Dropdown / menu** | `_global.scss` | `--dropdownItemTextColor`, `--dropdownItemHoverBgColor`, `--dropdownSelectedBgColor`, `--fieldRadius` |
| **Core mixin (labels, errors, controls)** | `core-mixin.scss` | `--fieldLabelColor`, `--fieldTextColor`, `--fieldDisabledLabelColor`, `--fieldHoverLabelColor`, `--fieldRadius`, `--fieldErrorLtrMsgAlignment`, `--fieldHintErrorColor`, `--fieldTextFontWeight` |
| **Picker** | `picker.scss` | Uses variables from this file (via `@use` of variables) |

**Wiring chain:**  
`variables.scss` (under `.level4-style` / `.template13-style`) → `common-utility.scss` (if it forwards) → `_global.scss` and `core-mixin.scss` (and picker) use `var(--field…)`, `var(--button…)`, etc. So the “root” for these tokens is the **CSS custom property set** inside `.level4-style` or `.template13-style`; the **application root** is the class on `body` (or a wrapper) that matches one of these selectors.

---

## 3. Repetition Facts

### 3.1 Same value repeated many times

| Token / pattern | Approx. count (single block) | Value | Used for |
|-----------------|------------------------------|--------|----------|
| **Border width `0.084em`** | 40+ | `0.084em` | Field, button (filled/stroked/flat/icon), toggle, checkbox, slider, upload, tab, config header, affix, etc. |
| **Focus border color** | Many | `var(--accentColor500)` or `var(--primaryColor500)` etc. | Field hover/focus, button focus, stroked hover/focus |
| **Hover border color** | Many | Same as focus in most cases | Buttons, fields |
| **Radius** | Many | `var(--fieldRadius)` or `0.67em` / `2em` etc. | Field, button, dropdown, checkbox, upload, dialog, chip |

So: **one** border width and **one** focus/hover color are effectively reused everywhere, but defined per component and per variant (primary/accent/warn).

### 3.2 Component-level duplication (pattern)

For **buttons** alone, the same pattern repeats for:

- Filled (Primary, Accent, Warn): each has `BorderWidth`, `HoverBorderColor`, `FocusBorderColor`, `HoverBgColor`, `FocusBgColor`, …
- Stroked (Primary, Accent, Warn): same again
- Flat stroked, Icon, Icon stroked: same again

So **border width** and **focus/hover semantics** are repeated per button type and per color variant, even though in practice:

- Border width is the same (0.084em) for all.
- Focus/hover often use the same palette (e.g. accent 500/600/700) for accent buttons.

Same idea for **fields**: `--fieldBorderWidth`, `--fieldHoverBorderWidth`, `--fieldFocusBorderWidth`, `--fieldBorderColor`, `--fieldHoverBorderColor`, `--fieldFocusBorderColor` could be reduced to a single “control” border and “control” focus/hover set.

### 3.3 Block duplication (level4-style vs template13-style)

The **same variable names** appear in both `.level4-style` and `.template13-style` with:

- **Most values identical** (e.g. many `0.084em`, same `var(--accentColor500)`).
- **Some differences** (e.g. `--fieldRadius: 0.67em` vs `0.5em`, `--buttonRadius: var(--fieldRadius)` vs `2em`, dropdown check mark visibility, disabled colors).

So a large block of variables is duplicated; only a subset need to differ per template.

---

## 4. Audit Summary Table (examples)

| Category | Current situation | Optimization idea |
|----------|-------------------|--------------------|
| **Border width** | 40+ declarations of `0.084em` (or `var(--fieldBorderWidth)`) across field, button, slider, upload, tab, etc. | Single `--controlBorderWidth: 0.084em`; others `var(--controlBorderWidth)` or remove. |
| **Focus color** | Per component and variant (e.g. `--fieldFocusBorderColor`, `--buttonFilledPrimaryFocusBorderColor`, …). | Single `--controlFocusColor` (e.g. `var(--accentColor500)`) for non-warn; warn uses `--warnColor*`. |
| **Hover color** | Same as focus in many places. | `--controlHoverColor` or re-use focus. |
| **Radius** | Many components define own radius; field and button reuse in some places. | `--controlRadius` / `--controlRadiusLg`; field/button/dropdown reference them. |
| **Two blocks** | `.level4-style` and `.template13-style` duplicate ~600+ lines. | One base block + a small “template13 overrides” block with only differing variables. |

---

## 5. Suggestions for Easier Control

### 5.1 Introduce global control variables (recommended)

Add a small set of tokens at the top of each block (or in a shared block):

```scss
/* Global control tokens — single place to change border/focus/radius */
--controlBorderWidth: 0.084em;
--controlFocusBorderWidth: 0.165em;
--controlFocusColor: var(--accentColor500);
--controlHoverColor: var(--accentColor500);
--controlRadius: 0.67em;
--controlRadiusLg: 1em;
```

Then:

- Set **field**: `--fieldBorderWidth: var(--controlBorderWidth);` (and same for hover/focus width and colors).
- Set **button** variants to use `var(--controlBorderWidth)` and, where appropriate, `var(--controlFocusColor)` / `var(--controlHoverColor)` instead of repeating the same palette references.
- Use `--controlRadius` for field, chip, and small controls; `--controlRadiusLg` for cards/dialogs where needed.

Effect: Changing border width or focus color globally becomes a one-line change.

### 5.2 Reduce component-specific “focus/hover” variables

- **Fact:** There is no need for different focus colors per input type or different border widths per button type for consistency.
- **Suggestion:** Keep semantic colors (primary vs accent vs warn) only where they affect **fill** or **text** (e.g. primary button bg, accent button bg). For **border** on focus/hover, use one control color (e.g. accent) or one per role (primary/accent/warn) defined once and referenced everywhere.

### 5.3 Single base block + override block

- **Current:** Two full blocks (level4-style, template13-style) with almost the same variables.
- **Suggestion:**
  - One **base** block (e.g. `.level4-style`) containing all variables.
  - A second block **only** for template13 overrides, e.g. `.template13-style { --fieldRadius: 0.5em; --buttonRadius: 2em; … }` (only the ~20–50 variables that actually differ).
- Reduces duplication and prevents one block getting out of sync with the other.

### 5.4 Optional: CSS cascade with a shared “control” scope

If both templates can share the same “control” tokens:

- Define `--controlBorderWidth`, `--controlFocusColor`, etc. once on a common parent (e.g. `:root` or `.app-body`) or in a small shared partial.
- Let `.level4-style` and `.template13-style` only override what must differ (e.g. radius, spacing). Then border width and focus color are truly global and easier to control.

---

## 6. Build Error Note (line 729)

The build currently fails at **variables.scss line 729** with “expected ')'”. That line is:

```scss
--breadCrumbRecentIconColor: var(--grayColor1000);
```

The parser points at the end of this line. Common causes:

- An **unclosed parenthesis** in a `var(...)` or function earlier in the file (e.g. in the same block).
- A **comment or block** that wasn’t closed (e.g. `/*` without `*/`) in the preceding section.

Recommendation: Check the block from ~line 720 to 729 (and any recent edits just above) for an extra `(` or a missing `)` or unclosed comment. Fixing that is independent of the variable consolidation above.

---

## 7. Next Steps

1. **Fix** the SCSS syntax error at line 729 so the project compiles.
2. **Decide** whether to adopt global control variables and, if so, add `--controlBorderWidth`, `--controlFocusColor`, etc., and refactor field/button (and optionally other components) to use them.
3. **Refactor** `.template13-style` into a short override-only block that references the same structure as `.level4-style`.
4. **Document** the chosen “control” tokens and where they are defined so future theming stays consistent.

If you share the exact snippet around line 729 (and a few lines before), we can pinpoint the syntax fix. If you want, the next step can be a concrete patch plan (file-by-file) for introducing the control variables and refactoring one component (e.g. fields) as a pilot.
