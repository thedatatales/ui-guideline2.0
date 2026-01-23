# Theme System Architecture & Color Resolution Flow

## Overview

This document explains how the theme system works in the UI Guidelines application, including how CSS variables are resolved across the 4 theme packages and which theme is the default for guidelines.

---

## Theme System Architecture & Color Resolution Flow

```
┌─────────────────────────────────────────────────────────────────┐
│                    ANGULAR APPLICATION STARTUP                   │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 1: CSS FILES LOADED (angular.json - styles array)        │
│  ────────────────────────────────────────────────────────────   │
│                                                                  │
│  1. src/styles.scss (Application styles)                        │
│  2. themes-gx-theme/_global.scss (Base global styles)           │
│  3. themes-gx-theme/resources/icomoon/style.scss (Icons)        │
│                                                                  │
│  4. [BUNDLE] theme-indigo.scss (inject: true)                   │
│     └─> Loaded but NOT active by default                        │
│                                                                  │
│  5. [BUNDLE] theme-black.scss (inject: true)                    │
│     └─> Loaded but NOT active by default                        │
│                                                                  │
│  6. [BUNDLE] theme-greenwave.scss (inject: true)                │
│     └─> Loaded but NOT active by default                        │
│                                                                  │
│  7. [BUNDLE] themes-gx-theme/variables.scss (inject: true)     │
│     └─> BASE VARIABLES - Always loaded                          │
│         Contains: --grayColor*, --primaryColor*, etc.            │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 2: APP MODULE INITIALIZATION                              │
│  ────────────────────────────────────────────────────────────   │
│                                                                  │
│  AppModule.constructor() {                                     │
│    localStorage.setItem("theme", "theme-black");  ← DEFAULT     │
│  }                                                               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 3: APP COMPONENT INITIALIZATION                           │
│  ────────────────────────────────────────────────────────────   │
│                                                                  │
│  AppComponent.ngOnInit() {                                       │
│    // Read from localStorage                                     │
│    const theme = localStorage.getItem("theme");                 │
│    // Result: "theme-black"                                      │
│                                                                  │
│    // Apply class to <body> element                             │
│    document.body.classList.add("theme-black");                  │
│    // <body class="app-body theme theme-black ...">              │
│  }                                                               │
└─────────────────────────────────────────────────────────────────┘
                              │
                              ▼
┌─────────────────────────────────────────────────────────────────┐
│  STEP 4: CSS VARIABLE RESOLUTION (When component uses var())    │
│  ────────────────────────────────────────────────────────────   │
│                                                                  │
│  Component SCSS:                                                 │
│  .color-swatch {                                                 │
│    border: 1px solid var(--fieldBorderColor, var(--grayColor100));│
│  }                                                               │
│                                                                  │
│  Resolution Flow:                                                │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 1. Browser looks for --fieldBorderColor in current scope  │  │
│  │    (Component → Parent → Body → HTML → Root)              │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 2. Check theme-black.scss (if .theme-black class active) │  │
│  │    .theme-black {                                         │  │
│  │      --fieldBorderColor: var(--grayColor100);            │  │
│  │    }                                                       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 3. Check variables.scss (BASE - always available)         │  │
│  │    :root {                                                │  │
│  │      --grayColor100: #eeeeee;                            │  │
│  │    }                                                       │  │
│  └──────────────────────────────────────────────────────────┘  │
│                              │                                   │
│                              ▼                                   │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │ 4. Use fallback value if variable not found              │  │
│  │    var(--fieldBorderColor, #e0e0e0)                      │  │
│  └──────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
```

---

## Theme Hierarchy & Priority

```
┌─────────────────────────────────────────────────────────────────┐
│                    THEME RESOLUTION PRIORITY                     │
│                    (Highest to Lowest)                           │
└─────────────────────────────────────────────────────────────────┘

1. ACTIVE THEME (Based on body class)
   ┌─────────────────────────────────────────────┐
   │ <body class="theme theme-black">            │
   │                                             │
   │ theme-black.scss defines:                   │
   │ .theme-black {                              │
   │   --fieldBorderColor: var(--grayColor100);  │
   │   --primaryColor500: #000000;              │
   │   --accentColor500: #00578b;               │
   │ }                                           │
   └─────────────────────────────────────────────┘
                    │
                    ▼
2. BASE VARIABLES (Always available)
   ┌─────────────────────────────────────────────┐
   │ variables.scss (themes-gx-theme)            │
   │                                             │
   │ :root {                                     │
   │   --grayColor100: #eeeeee;                 │
   │   --grayColor200: #e0e0e0;                 │
   │   --primaryColor500: #322e78;              │
   │   --accentColor500: #00578b;                │
   │   --fieldBorderColor: var(--grayColor100);  │
   │ }                                           │
   └─────────────────────────────────────────────┘
                    │
                    ▼
3. FALLBACK VALUES (In component SCSS)
   ┌─────────────────────────────────────────────┐
   │ var(--fieldBorderColor, #e0e0e0)            │
   │ var(--grayColor100, #eeeeee)                │
   └─────────────────────────────────────────────┘
```

---

## Theme Files Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                    4 THEME PACKAGES                              │
└─────────────────────────────────────────────────────────────────┘

1. @enttribe/themes-gx-theme (BASE/CORE)
   ├── _global.scss (Global styles, mixins)
   ├── variables.scss (Base CSS variables)
   │   └─> Defines: --grayColor*, --primaryColor*, --accentColor*
   └── core-mixin.scss (Component mixins)
   
   Purpose: Foundation - Always loaded, provides base variables

2. @enttribe/themes-theme-black (ACTIVE for Guidelines)
   └── theme-black.scss
       └─> Defines theme-specific overrides
           .theme-black {
             --primaryColor500: #000000;
             --accentColor500: #00578b;
           }
   
   Purpose: Guidelines DEFAULT theme

3. @enttribe/themes-theme-indigo (Alternative)
   └── theme-indigo.scss
       └─> Defines indigo color scheme
   
   Purpose: Alternative theme option

4. @enttribe/themes-theme-greenwave (Alternative)
   └── theme-greenwave.scss
       └─> Defines greenwave color scheme
   
   Purpose: Alternative theme option
```

---

## Color Variable Resolution Example

```
Component uses: var(--fieldBorderColor, var(--grayColor100, #e0e0e0))
                │
                ├─> Step 1: Look for --fieldBorderColor
                │   │
                │   ├─> Found in theme-black.scss? YES
                │   │   └─> --fieldBorderColor: var(--grayColor100)
                │   │
                │   └─> Step 2: Resolve --grayColor100
                │       │
                │       ├─> Found in variables.scss? YES
                │       │   └─> --grayColor100: #eeeeee
                │       │
                │       └─> Final Value: #eeeeee
                │
                └─> If --fieldBorderColor not found:
                    └─> Use fallback: #e0e0e0
```

---

## Default Theme for Guidelines

```
┌─────────────────────────────────────────────────────────────────┐
│              GUIDELINES DEFAULT THEME: theme-black              │
└─────────────────────────────────────────────────────────────────┘

Configuration:
├── app.module.ts
│   └─> localStorage.setItem("theme", "theme-black");
│
├── app.component.ts
│   └─> document.body.classList.add("theme-black");
│
└── index.html
    └─> <body class="theme theme-black ...">

Result:
└─> All components use theme-black.scss variables
    └─> Falls back to variables.scss if not defined
        └─> Falls back to hardcoded values if still not found
```

---

## Key Points

1. **All 4 theme files are loaded** as separate bundles (inject: true) but only the active theme applies its overrides
2. **Only the active theme** (determined by body class) applies its variable overrides
3. **Base variables** from `variables.scss` are always available as fallback
4. **Resolution order**: Active theme → Base variables → Fallback values
5. **Guidelines default**: `theme-black` (set in localStorage and body class)

---

## How to Use Theme Variables in Components

### Example: Labs Component Color Swatch

**Before (Hardcoded):**
```scss
.color-swatch {
  border: 1px solid #e0e0e0;
  background: #ffffff;
}
```

**After (Using Theme Variables):**
```scss
.color-swatch {
  border: 1px solid var(--fieldBorderColor, var(--grayColor100, #e0e0e0));
  background: var(--bgColor100, #ffffff);
}
```

### Available Theme Variables

#### Gray Scale Colors
- `--grayColor10` through `--grayColor1000` (10 shades)

#### Background Colors
- `--bgColor10` through `--bgColor1000` (10 shades)

#### Primary Colors
- `--primaryColor50` through `--primaryColor900`
- `--primaryColorA100`, `--primaryColorA200`, `--primaryColorA400`, `--primaryColorA700`

#### Accent Colors
- `--accentColor50` through `--accentColor900`
- `--accentColorA100`, `--accentColorA200`, `--accentColorA400`, `--accentColorA700`

#### Warn Colors
- `--warnColor10`, `--warnColor50` through `--warnColor900`, `--warnColor1000`

#### Field/Component Variables
- `--fieldBorderColor`: Border color for form fields
- `--fieldTextColor`: Text color for form fields
- `--fieldLabelColor`: Label color for form fields
- `--fieldHoverBorderColor`: Hover border color
- `--fieldFocusBorderColor`: Focus border color

#### Application-Specific Colors
- `--menuTextColor`: Menu text color
- `--appBgColor`: Application background color
- `--positiveColor`: Positive value color
- `--negativeColor`: Negative value color
- `--neutralColor`: Neutral value color

---

## Theme Switching Mechanism

To switch themes, you need to:

1. **Update localStorage:**
   ```typescript
   localStorage.setItem("theme", "theme-indigo"); // or "theme-greenwave"
   ```

2. **Update body class:**
   ```typescript
   document.body.classList.remove("theme-black");
   document.body.classList.add("theme-indigo");
   ```

3. **Reload the application** (or implement a theme service that handles this dynamically)

---

## File Locations

- **Theme Configuration**: `angular.json` (styles array)
- **Default Theme Setting**: `src/app/app.module.ts`
- **Theme Initialization**: `src/app/app.component.ts`
- **HTML Body Class**: `src/index.html`
- **Base Variables**: `node_modules/@enttribe/themes-gx-theme/src/lib/variables.scss`
- **Theme Files**:
  - `node_modules/@enttribe/themes-theme-black/src/styles/theme-black.scss`
  - `node_modules/@enttribe/themes-theme-indigo/src/styles/theme-indigo.scss`
  - `node_modules/@enttribe/themes-theme-greenwave/src/styles/theme-greenwave.scss`

---

## Migration Notes

When migrating components to use theme variables:

1. **Replace hardcoded colors** with theme variables
2. **Always provide fallback values** for compatibility
3. **Use nested var()** for variables that reference other variables
4. **Test with different themes** to ensure proper resolution
5. **Document which variables are used** in component documentation

---

*Last Updated: Based on current UI Guidelines 2.1 implementation*
