# Theme Variables Wiring Audit & Recommendations

**Date:** 2026-01-29  
**Scope:** Guidelines app navigation active background and theme variable cascade (`--sidenavMenuSelectedBgColor`, `--primaryColor50`, `--grayColor100`).  
**Goal:** Trace what is connected to what, explain why behaviour is wrong, and recommend repairs.

---

## 1. Executive Summary

- **Issue:** With body class `theme-indigo`, the active nav background still resolves from **theme-black** (`--sidenavMenuSelectedBgColor` from `theme-black.scss`), so the intended indigo behaviour is overridden.
- **Root cause:** Semantic theme variables (sidenav, gray scale, bg colors) are scoped only to the **`.theme`** selector in all theme bundles. Body has **both** `theme` and `theme-indigo`. The theme-black bundle loads **last**, so its `.theme { ... }` rules win on body. Palette variables are correctly scoped to `.theme-indigo` / `.theme-black`, but semantic vars are not.
- **Recommendation:** Scope semantic variables per theme (e.g. `.theme-indigo` / `.theme-black`) in the theme packages so only the active theme’s semantic vars apply. Optionally remove the generic `theme` class from body and document the intended cascade.

---

## 2. Trace: What Is Connected to What

### 2.1 Style bundle load order (angular.json)

```
1. src/styles.scss
2. gx-theme (_global.scss, variables.scss)
3. theme-indigo (theme-indigo.scss)
4. theme-greenwave (theme-greenwave.scss)
5. theme-black (theme-black.scss)
```

The **last** theme bundle (theme-black) wins for any selector that matches the same element in multiple bundles.

### 2.2 Body classes (index.html + app)

| Source | Body classes |
|--------|--------------|
| **index.html** | `app-body theme theme-indigo level4-style` (hardcoded) |
| **app.component.ts** | Ensures `theme-indigo` is added and `theme-black` / `theme-greenwave` removed on init |
| **Global setting (theme switch)** | Can set body to `theme-black` or `theme-indigo` (and update localStorage) |

So at runtime body typically has **`theme`** (from index.html) **and** one of **`theme-indigo`**, **`theme-black`**, or **`theme-greenwave`**.

### 2.3 Where variables are defined

#### Palette (primary / accent / warn / gray hex values)

| Variable | theme-indigo | theme-black |
|----------|--------------|-------------|
| **Defined in** | `@enttribe/themes-theme-indigo/src/styles/palette.scss` | `@enttribe/themes-theme-black/src/styles/palette.scss` |
| **Selector** | `.theme-indigo, .theme { ... }` | `.theme-black { ... }` |
| **Example** | `--primaryColor50: #f5f3ff` (Violet) | `--primaryColor50: #f2f2f2` (Black) |
| **On body when** | Body has `theme-indigo` (or `theme`) | Body has `theme-black` |

So when body has **only** `theme-indigo`, indigo palette applies. When body has **only** `theme-black`, black palette applies. Because indigo palette also uses `.theme`, if body has both `theme` and `theme-indigo`, indigo palette still applies; black palette applies only when body has `theme-black`.

#### Semantic / layout variables (sidenav, gray scale, bg)

| Variable | theme-indigo | theme-black |
|----------|--------------|-------------|
| **Defined in** | `theme-indigo.scss` | `theme-black.scss` |
| **Selector** | `.theme { & { ... } }` → **`.theme`** | **`.theme`** |
| **Examples** | `--sidenavMenuSelectedBgColor: var(--grayColor100)` | `--sidenavMenuSelectedBgColor: var(--bgColor900)` |
| **Gray scale** | `.theme { @include lighten(); }` → `--grayColor100`, etc. | Same (lighten/darken mixins) |

So **both** theme-indigo and theme-black define the **same** selector **`.theme`**. Body has class `theme`, so **both** bundles apply to body; the **last** one (theme-black) wins for every variable set under `.theme`.

### 2.4 Guideline nav active background (guidelines.component.scss)

```scss
.nav-item.active .nav-item-header {
  background-color: var(--sidenavMenuSelectedBgColor, var(--primaryColor50, var(--grayColor100, #f5f5f5)));
}
```

**Intended cascade:** Use theme’s sidenav selected background; if missing, use primary tint, then gray, then hex fallback.

**Actual resolution when body has `theme-indigo` + `theme`:**

| Step | Variable | Source | Value |
|------|----------|--------|--------|
| 1 | `--sidenavMenuSelectedBgColor` | theme-black’s `.theme` (last bundle) | `var(--bgColor900)` → dark |
| 2 | (fallback `--primaryColor50`) | Not used; step 1 is defined | — |
| 3 | (fallback `--grayColor100`) | Not used | — |

So the **first** token in the chain is defined, but it comes from the **wrong** theme (theme-black), so the active nav uses theme-black’s dark background even when the user chose Indigo.

**If** `--sidenavMenuSelectedBgColor` were not set on body (e.g. body had no `theme` class):

| Step | Variable | Source | Value |
|------|----------|--------|--------|
| 1 | `--sidenavMenuSelectedBgColor` | (undefined) | — |
| 2 | `--primaryColor50` | indigo palette (`.theme-indigo`) | `#f5f3ff` (Violet) |
| 3 | (fallback `--grayColor100`) | Not needed | — |

So the **fallback** chain would behave as intended only when the semantic variable is **not** set by the wrong theme.

---

## 3. Why This Happens (Root Cause)

1. **index.html** gives body both `theme` and `theme-indigo`.
2. **Palette** is scoped per theme (`.theme-indigo` / `.theme-black`), so palette vars follow the theme class.
3. **Semantic vars** (sidenav, gray, bg) are scoped only to **`.theme`** in **every** theme file. So:
   - theme-indigo.scss: `.theme { --sidenavMenuSelectedBgColor: ...; --grayColor100: ...; }`
   - theme-black.scss: `.theme { --sidenavMenuSelectedBgColor: ...; --grayColor100: ...; }`
4. Because body has class `theme`, **all** of these `.theme` blocks apply. Load order puts theme-black **last**, so theme-black’s `.theme` overrides theme-indigo’s for every semantic variable on body.
5. Result: with body `theme theme-indigo`, palette is indigo but semantic vars (including `--sidenavMenuSelectedBgColor` and `--grayColor100`) are from theme-black.

So the “wiring” problem is: **semantic variables are not scoped to the active theme class**; they are all under the shared `.theme` selector, and load order fixes which theme “wins” globally (theme-black), not which theme the user selected.

---

## 4. Diagram (Simplified)

```
index.html:  <body class="app-body theme theme-indigo level4-style">
                    │         │     │
                    │         │     └── theme-indigo palette applies (--primaryColor50, etc.)
                    │         │
                    │         └── .theme matches in BOTH theme-indigo.scss AND theme-black.scss
                    │             → theme-black loads last → theme-black’s .theme wins
                    │             → --sidenavMenuSelectedBgColor = theme-black’s value
                    │             → --grayColor100 = theme-black’s value
                    │
                    └── Guideline nav uses var(--sidenavMenuSelectedBgColor, var(--primaryColor50, ...))
                        → --sidenavMenuSelectedBgColor is set (by theme-black) → wrong theme’s value used
                        → --primaryColor50 never used in this chain
```

---

## 5. Recommendations

### 5.1 Repair (short-term): scope semantic vars to theme class in theme packages

**In `@enttribe/themes-theme-indigo` and `@enttribe/themes-theme-black` (and greenwave if used):**

- Change the block that currently targets **`.theme`** (the one that sets `--sidenavMenuSelectedBgColor`, `--menuTextColor`, `--fixedSideNavBg`, gray scale mixins, etc.) so it is **also** scoped to the theme class.
- Options:
  - **Option A:** Use a combined selector so the same vars apply when body has the theme class **or** the legacy `theme` class:
  - **theme-indigo:** e.g. `.theme-indigo.theme, .theme-indigo` (or duplicate the block under `.theme-indigo` only).
  - **theme-black:** e.g. `.theme-black.theme, .theme-black` (or under `.theme-black` only).
- Ensure **only one** theme’s block can match body at a time (body has one of `theme-indigo` / `theme-black` / `theme-greenwave`), so the active theme’s semantic vars (and its gray/bg mixins) apply.

**Effect:** When body has `theme-indigo`, only indigo’s `--sidenavMenuSelectedBgColor` (and gray/bg) apply. When body has `theme-black`, only black’s. The guideline nav’s `var(--sidenavMenuSelectedBgColor, var(--primaryColor50, ...))` then uses the correct theme’s value.

**Note:** These files live under `node_modules`. Prefer one of:

- A **patch** (e.g. `patch-package`) to apply the selector change.
- Or **fork** the theme packages and point the app to the forked bundles until the upstream packages scope semantic vars per theme.

### 5.2 Alternative: remove `theme` from body (if no other code relies on it)

- In **index.html**, remove the `theme` class from `<body>`, e.g. use only `app-body theme-indigo level4-style` (and let app.component or global setting switch between `theme-indigo` and `theme-black`).
- Then **no** `.theme` block matches body. So `--sidenavMenuSelectedBgColor` and `--grayColor100` would be **undefined** on body.
- The guideline’s fallback would kick in: `var(--primaryColor50, var(--grayColor100, #f5f5f5))`. So we’d get `--primaryColor50` from the palette (correct per theme).
- **But:** Anything that uses `var(--grayColor100)` (or other gray/bg vars) without a fallback would break, because those are currently defined only under `.theme`. So this is only safe if:
  - The app does not rely on gray/bg from the theme files when body has no `theme` class, or
  - Gray/bg are also provided elsewhere (e.g. under `.theme-indigo` / `.theme-black` after applying 5.1).

So **5.1 is the main repair**; removing `theme` from body is an optional follow-up once semantic vars are correctly scoped.

### 5.3 Guideline app: keep a safe fallback

Keep the current fallback in guidelines.component.scss:

```scss
background-color: var(--sidenavMenuSelectedBgColor, var(--primaryColor50, var(--grayColor100, #f5f5f5)));
```

After 5.1, `--sidenavMenuSelectedBgColor` will be set by the **active** theme, so the fallback will rarely be used, but it remains safe for missing or future themes.

### 5.4 Long-term: document and enforce theme selector contract

- **Document** that theme packages must scope **semantic** variables (sidenav, menu, gray scale, bg) to the **theme-specific** class (e.g. `.theme-indigo`, `.theme-black`) so that only one theme’s semantic vars apply when that class is on body.
- **Do not** rely on a single shared `.theme` selector for theme-specific semantics when multiple theme bundles are loaded; otherwise load order will always force one theme to override the others on body.

---

## 6. Summary Table

| Item | Current state | Desired state |
|------|----------------|----------------|
| Body classes | `theme` + `theme-indigo` (or `theme-black` after switch) | Keep one theme class; optionally drop `theme` after scoping fix |
| Palette (--primaryColor50, etc.) | Scoped to `.theme-indigo` / `.theme-black` | No change |
| Semantic (--sidenavMenuSelectedBgColor, --grayColor100, etc.) | Scoped only to `.theme` in all bundles; theme-black wins | Scoped to `.theme-indigo` / `.theme-black` (or equivalent) per bundle |
| Guideline nav active bg | Resolves to theme-black’s value when body has theme-indigo | Resolves to the active theme’s value |
| Fallback chain | `sidenavMenuSelectedBgColor` → `primaryColor50` → `grayColor100` → hex | Same; first token should come from active theme after repair |

---

## 7. Files to Touch (for repair)

| File | Change |
|------|--------|
| `node_modules/@enttribe/themes-theme-indigo/src/styles/theme-indigo.scss` | Scope the block that sets `--sidenavMenuSelectedBgColor`, gray mixins, etc., to e.g. `.theme-indigo` (or `.theme-indigo.theme`) so it applies only when body has `theme-indigo`. |
| `node_modules/@enttribe/themes-theme-black/src/styles/theme-black.scss` | Same: scope that block to `.theme-black` (or `.theme-black.theme`). |
| (Optional) `src/index.html` | Remove `theme` from body class list after theme packages are updated, if nothing else depends on `theme`. |
| (Optional) `src/app/guidelines/components/guidelines/guidelines.component.scss` | No change required; keep existing fallback. |

Applying the theme-package scoping (and optionally removing `theme` from body) will fix the navigation active background and align all semantic variables with the active theme.
