# Input Fields (bntv-input-box) – Styling & Wiring Analysis

**Component:** Form Controls → Input Fields  
**Underlying component:** `bntv-input-box` (`InputBoxComponent` from `@enttribe/core/tools/input-box-and-date-picker`)  
**Theme package:** `@enttribe/themes-gx-theme`

This document describes how **label**, **border**, **hover**, **radius**, **color**, and related properties are wired so you can update the look of input fields.

---

## 1. Component chain

| Layer | What | Where |
|-------|------|--------|
| Guidelines page | `pmgt-input-fields` | `src/app/guidelines/components/input-fields/` |
| Actual control | `bntv-input-box` | `@enttribe/core` (InputBoxComponent) |
| Form field | Angular Material MDC | `MatFormFieldModule`, `MatInputModule` |
| Styles | Theme mixins + globals | `@enttribe/themes-gx-theme` |

The guidelines page only uses `<bntv-input-box [label]="..." [placeholder]="..." ... />`. All visual styling comes from the theme and Angular Material, not from the guidelines component SCSS.

---

## 2. DOM / CSS classes (from bntv-input-box)

The component template (from `@enttribe/core`) uses these classes so the theme can target states:

| Class | Element | Purpose |
|-------|---------|--------|
| `input-field-parent` | Wrapper div (fxLayout row) | Parent for hover/focus; theme uses this for label + border on hover/focus |
| `input-form-field` | `mat-form-field` | Form field container; used for hover ~ `.input-label` in theme |
| `input-label` | Label element | Label text; theme sets color on hover/focus/disabled via parent |
| `input-box-core` | Inner wrapper | Optional layout/sizing |
| `form-field` | Same as `input-form-field` | With `floatLabel="always"` and `appearance` |

So: **label** styling is driven by `.input-label` and `.field-label-color`; **border/hover/radius** are driven by Material outline selectors and theme overrides keyed off `.input-field-parent` and `.mat-mdc-form-field-*`.

---

## 3. CSS variables (field look and feel)

Defined in **`@enttribe/themes-gx-theme/src/lib/variables.scss`**. Two blocks exist (different themes); both define the same variable names.

### 3.1 Radius, size, spacing

| Variable | Example value | Used for |
|----------|----------------|----------|
| `--fieldRadius` | `0.67em` / `0.5em` | Input (and notch) border radius |
| `--fieldHeight` | `2.9em` | Min height of form field |
| `--fieldLabelGap` | `0.7em` | Margin between label and field (e.g. `margin-top`) |
| `--fieldBorderWidth` | `0.084em` | Border width (e.g. radio, other controls) |
| `--fieldHoverBorderWidth` | `0.084em` | Hover border width |
| `--fieldFocusBorderWidth` | `0.165em` | Focus border width |

### 3.2 Label

| Variable | Example value | Used for |
|----------|----------------|----------|
| `--fieldLabelColor` | `#364153` | Default label text |
| `--fieldHoverLabelColor` | `var(--accentColor600)` / `var(--grayColor700)` | Label on hover (theme-dependent) |
| `--fieldDisabledLabelColor` | `var(--grayColor400)` / `var(--grayColor700)` | Label when disabled |
| `--fieldLabelFontWeight` | `500` | Label font weight |

### 3.3 Input text and placeholder

| Variable | Example value | Used for |
|----------|----------------|----------|
| `--fieldTextColor` | `var(--grayColor900)` | Input text |
| `--fieldPlaceholderColor` | `var(--grayColor400)` | Placeholder |
| `--fieldTextFontWeight` | `500` / `400` | Input text weight |
| `--fieldPlaceholderFontWeight` | `500` / `400` | Placeholder weight |
| `--fieldMatHintColor` | `#6a7282` | Hint text |
| `--fieldMatHintFontWeight` | `400` | Hint weight |

### 3.4 Border (default / hover / focus)

| Variable | Example value | Used for |
|----------|----------------|----------|
| `--fieldBorderColor` | `#eeeeee` / `var(--grayColor300)` | Default border |
| `--fieldHoverBorderColor` | `var(--accentColor500)` | Border on hover |
| `--fieldFocusBorderColor` | `var(--accentColor500)` | Border on focus |

### 3.5 Disabled

| Variable | Example value | Used for |
|----------|----------------|----------|
| `--fieldDisabledBgColor` | `var(--bgColor50)` | Background |
| `--fieldDisabledActiveBgColor` | `var(--bgColor100)` / `var(--bgColor300)` | Active/pressed background |
| `--fieldDisabledLabelColor` | (see Label) | Label when disabled |
| `--fieldDisabledTextColor` | `var(--grayColor500)` / `var(--grayColor400)` | Input text when disabled |
| `--fieldDisabledBorderColor` | `var(--grayColor100)` / `var(--grayColor300)` | Border when disabled |
| `--fieldDisabledBorderWidth` | `0em` / `var(--fieldBorderWidth)` | Border width when disabled |

### 3.6 Error

| Variable | Example value | Used for |
|----------|----------------|----------|
| `--fieldErrorBorderColor` | `var(--grayColor100)` / `var(--warnColor300)` | Border in error state |
| `--fieldErrorHoverBorderColor` | `var(--accentColor500)` / `var(--warnColor500)` | Error border on hover |
| `--fieldErrorFocusBorderColor` | `var(--accentColor500)` / `var(--warnColor500)` | Error border on focus |
| `--fieldHintErrorColor` | `var(--warnColor600)` | Error message text |
| `--fieldErrorLtrMsgAlignment` | `right` / `left` | Error message horizontal alignment (LTR) |
| `--fieldErrorRtlMsgAlignment` | `left` / `right` | Same for RTL |

To change the **look** of labels, borders, hover, radius, or colors, override the right subset of these variables (e.g. in your app theme or a layer that loads after the theme).

---

## 4. Where variables are used (theme files)

### 4.1 Utility classes (label/text) – `core-mixin.scss`

```scss
.field-label-color {
  color: var(--fieldLabelColor);
  font-weight: var(--fieldLabelFontWeight);
}
.field-text-color {
  color: var(--fieldTextColor);
  font-weight: var(--fieldTextFontWeight);
}
.field-disabled-label-color {
  color: var(--fieldDisabledLabelColor);
  font-weight: var(--fieldLabelFontWeight);
}
.field-disabled-text-color {
  color: var(--fieldDisabledTextColor);
  font-weight: var(--fieldTextFontWeight);
}
```

Used by components that add these classes to the label/input (e.g. signature uses `field-label-color`). Input-box may use the same or rely on the selectors below.

### 4.2 Hover & focus (label + border) – `core-mixin.scss`

**Hover:** when `.input-field-parent` is hovered and the form field is not disabled:

- `.input-label` color → `var(--fieldHoverLabelColor)` (or theme accent, e.g. `mat.m2-get-color-from-palette($accent, 600)`)
- `.mdc-notched-outline__leading`, `__notch`, `__trailing` border-color → accent (e.g. `mat.m2-get-color-from-palette($accent, 600)`)

**Focus / active:** when `.input-field-parent` has `:focus-within` or `.input-form-field` is `:active` (and not disabled):

- `.input-label` color → same accent
- Outline border-color → darker accent (e.g. `mat.m2-get-color-from-palette($accent, 800)`)

So: **label** and **border** on hover/focus are wired through `.input-field-parent` + `.input-label` and the MDC outline elements.

### 4.3 Outline radius & structure – `_global.scss`

- `.mat-form-field-appearance-outline .mdc-notched-outline__leading` (LTR/RTL): `border-radius` uses `var(--fieldRadius)` (e.g. left side rounded).
- `.mat-form-field-appearance-outline .mdc-notched-outline__trailing` (LTR/RTL): same for the right side.
- `.mat-form-field-appearance-outline .mat-mdc-form-field-flex`: `margin-top: var(--fieldLabelGap);`, `border-radius: var(--fieldRadius);`, `background-color: var(--bgColor10);`.
- `.mat-mdc-form-field-flex`: `min-height: var(--fieldHeight);`.

So **radius** and **label gap** are wired via `_global.scss` and the same CSS variables.

### 4.4 Outline border and hover (Material outline) – `_global.scss`

- Default outline: `.mdc-notched-outline__notch` uses `border: 0.09em solid currentColor` (leading/trailing borders unset).
- Hover: `.mat-mdc-form-field:not(.mat-mdc-form-field-disabled) .mat-mdc-form-field-flex:hover ...` sets outline elements to `border-width: 0.09em !important; border-color: var(--accentColor500) !important;`.
- Focused: `.mat-focused .mat-mdc-form-field-flex .mdc-notched-outline__*` sets `border: unset !important` (focus style may be handled elsewhere, e.g. neo).

So **border** and **hover border color** are wired in `_global.scss` (and optionally overridden in theme mixins).

### 4.5 Neo theme (box-shadow “border”) – `core-mixin.scss` (`core-component-theme-neo`)

For the neo variant, the outline is styled with box-shadow instead of real borders:

- Default: `.mat-form-field-appearance-outline .mat-mdc-form-field-outline` → `box-shadow: inset ... var(--grayColor300) ... var(--grayColor10); border-radius: 0.5em;`
- Hover: `.mat-form-field-appearance-outline:hover .mat-mdc-form-field-outline` → `box-shadow: inset ... var(--grayColor400) ...`
- Disabled: `.mat-form-field-appearance-outline.mat-mdc-form-field-disabled .mat-mdc-form-field-outline` → different box-shadow; disabled hover removes it.
- `.input-field-parent .mdc-notched-outline__leading/trailing` → `border: none !important` so the “border” is only the shadow.

So in **neo**, **radius** and **hover/disabled** look are driven by this mixin and `--grayColor*` (and optional overrides).

### 4.6 Error message – `core-mixin.scss`

- `.mat-mdc-form-field-error > span`: `color: var(--fieldHintErrorColor); font-weight: var(--fieldTextFontWeight);`
- Float alignment: `var(--fieldErrorLtrMsgAlignment)` / `var(--fieldErrorRtlMsgAlignment)`.

So **error** text and alignment are wired to the same field-error variables.

---

## 5. Summary: how to change the look

| What you want to change | Where to do it |
|-------------------------|----------------|
| **Label** default color/size/weight | Override `--fieldLabelColor`, `--fieldLabelFontWeight` (and font-size if exposed). Theme uses these in `.field-label-color` and in MDC label styling. |
| **Label** hover/focus color | Override `--fieldHoverLabelColor` and/or the theme mixin that sets `.input-field-parent:hover .input-label` and `:focus-within` (e.g. core-mixin). |
| **Label** disabled | Override `--fieldDisabledLabelColor`; theme uses it in `.field-disabled-label-color` and for `.input-label` in disabled state. |
| **Input** border radius | Override `--fieldRadius` (used in `_global.scss` for outline and flex). |
| **Input** default border color | Override `--fieldBorderColor` and/or the outline rules in `_global.scss` (and neo mixin if you use neo). |
| **Input** hover/focus border | Override `--fieldHoverBorderColor` / `--fieldFocusBorderColor` and/or the hover/focus rules in `_global.scss` and `core-mixin.scss` (e.g. `var(--accentColor500)`). |
| **Input** disabled border/background | Override `--fieldDisabledBorderColor`, `--fieldDisabledBgColor`, etc. |
| **Input** text/placeholder colors | Override `--fieldTextColor`, `--fieldPlaceholderColor`, `--fieldMatHintColor`. |
| **Error** text and alignment | Override `--fieldHintErrorColor`, `--fieldErrorLtrMsgAlignment`, `--fieldErrorRtlMsgAlignment`. |

Best approach: in your own theme or global SCSS (loaded after the theme), redefine only the variables you need; avoid editing `variables.scss` or mixins inside `node_modules` so upgrades stay easy.

---

## 6. Quick reference: one component (bntv-input-box)

- **Selector:** `bntv-input-box`
- **Host / wrapper class:** `input-field-parent`
- **Form field class:** `input-form-field` (with `form-field`, `floatLabel="always"`)
- **Label:** targeted as `.input-label`; default style can also use `.field-label-color` / variables above.
- **Outline:** Angular Material `.mat-mdc-form-field-outline`, `.mdc-notched-outline__leading/__notch/__trailing`; radius from `--fieldRadius`, border/color from theme and `_global.scss`.
- **Variables:** All of section 3 apply; the main ones for “label + border + hover + radius” are `--fieldRadius`, `--fieldLabelColor`, `--fieldHoverLabelColor`, `--fieldBorderColor`, `--fieldHoverBorderColor`, `--fieldFocusBorderColor`, plus the disabled/error set if you need those states.

This gives you a single place (one component) to trace from guidelines → `bntv-input-box` → theme variables and mixins when updating the look of input fields.
