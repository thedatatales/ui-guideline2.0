# Theme Packages: Roles & Content Analysis

## Overview

This document analyzes the roles and content of the two primary theme packages used in the UI Guidelines application:
1. **@enttribe/themes-gx-theme** (Base/Core Theme)
2. **@enttribe/themes-theme-black** (Theme Black - Default for Guidelines)

---

## 1. @enttribe/themes-gx-theme (Base/Core Theme)

### Role

**Primary Purpose**: Foundation theme package that provides the base infrastructure, core variables, utilities, and shared resources for all themes.

**Key Responsibilities**:
- Provides base CSS variables that all themes can reference
- Contains global styles and mixins used across the application
- Includes shared resources (fonts, icons, external libraries)
- Defines component-level styling mixins
- Provides utility classes and helper functions
- Acts as the foundation layer that other themes build upon

### Package Structure

```
@enttribe/themes-gx-theme/
├── src/lib/
│   ├── _global.scss              # Global styles and imports
│   ├── variables.scss            # Base CSS variables (1769 lines)
│   ├── core-mixin.scss           # Component theme mixins (3237 lines)
│   ├── common-utility.scss       # Utility classes (298 lines)
│   ├── mixin.scss                # General SCSS mixins
│   ├── font.scss                 # Font definitions
│   ├── picker.scss               # Date picker styles
│   ├── scss/components/          # Component-specific styles
│   │   ├── _chips.scss
│   │   ├── _datepicker.scss
│   │   ├── _stepper.scss
│   │   └── _window.scss
│   ├── resources/
│   │   ├── icomoon/              # Icon font (3324 SVG files)
│   │   │   └── style.scss
│   │   ├── leaflet/              # Leaflet map resources
│   │   └── usedfonts/            # Custom fonts
│   │       ├── IBMPlexSans/
│   │       ├── IBMPlexSansArabic/
│   │       ├── Inter/
│   │       ├── OpenSans/
│   │       └── Poppins/
│   └── module/                   # TypeScript module
│       └── theme.module.ts
```

### Key Files & Content

#### 1. `_global.scss` (Global Styles)

**Purpose**: Main entry point that imports all global styles and external libraries.

**Content**:
- Imports utility modules (`common-utility`, `font`, `mixin`, `variables`)
- Imports component styles (window, datepicker, chips, stepper)
- Imports external CSS libraries:
  - Leaflet (maps)
  - CodeMirror (code editor)
  - BPMN.js (diagram editor)
  - Tippy.js (tooltips)
- Global body and element styles
- Material Icons configuration
- Base typography settings

**Key Features**:
```scss
body {
  margin: 0;
  font-family: var(--fontFamily);
  font-weight: 400;
}
```

#### 2. `variables.scss` (Base Variables - 1769 lines)

**Purpose**: Defines all base CSS variables that are available across all themes.

**Content Categories**:

##### A. Color System Variables
- **Gray Scale**: `--grayColor10` through `--grayColor1000` (10 shades)
- **Primary Colors**: `--primaryColor50` through `--primaryColor900`, plus A variants
- **Accent Colors**: `--accentColor50` through `--accentColor900`, plus A variants
- **Warn Colors**: `--warnColor10` through `--warnColor1000`
- **VW Color Palette** (New Generation):
  - Blue, Teal, Green, Amber, Red (50-950 shades)
  - Stone, Neutral, Zinc, Slate, Gray, Rose, Pink, Fuchsia, Purple, Violet
  - Sky, Cyan, Yellow, Lime, Emerald
  - Semantic colors: `--vw-color-info`, `--vw-color-success`, `--vw-color-warning`, `--vw-color-danger`

##### B. Component Variables
- **Field Variables**:
  - `--fieldRadius`, `--fieldHeight`, `--fieldLabelGap`
  - `--fieldBorderWidth`, `--fieldHoverBorderWidth`, `--fieldFocusBorderWidth`
  - `--fieldBorderColor`, `--fieldHoverBorderColor`, `--fieldFocusBorderColor`
  - `--fieldTextColor`, `--fieldLabelColor`, `--fieldPlaceholderColor`
  - `--fieldTextFontWeight`, `--fieldLabelFontWeight`

- **Button Variables**:
  - `--buttonRadius`, `--buttonHeight`
  - `--buttonIconWidth`, `--buttonIconHeight`
  - `--buttonPadding`

- **Card Variables**:
  - `--cardRadius`
  - `--chipRadius`
  - `--dialogRadius`

##### C. Typography Variables
- Font families: `--fontFamily` (default: 'Poppins')
- Font sizes (using em units)
- Line heights
- Font weights

##### D. Spacing Variables
- Margin and padding utilities
- Size units and scales

##### E. Application-Specific Variables
- `--menuTextColor`
- `--appBgColor`
- `--positiveColor`, `--negativeColor`, `--neutralColor`
- `--direction` (ltr/rtl)

**Example Variables**:
```scss
:root {
  --fontFamily: 'Poppins';
  --direction: ltr;
  
  --grayColor100: #ebebeb;
  --grayColor200: #d1d1d1;
  --grayColor900: #000000;
  
  --fieldRadius: 0.67em;
  --fieldHeight: 2.9em;
  --fieldBorderColor: var(--grayColor100);
  
  --vw-color-blue-500: #3b82f6;
  --vw-color-green-500: #22c55e;
  --vw-color-red-500: #ef4444;
}
```

#### 3. `core-mixin.scss` (Component Theme Mixins - 3237 lines)

**Purpose**: Provides mixins for theming Angular Material components and custom components.

**Key Mixins**:

##### `@mixin core-component-theme($theme, $gray, $bgColor)`
- Applies Material Design theme to all components
- Defines utility classes:
  - `.color-primary`, `.color-accent`, `.color-warn`
  - `.field-label-color`, `.field-text-color`
  - Typography classes (`.dashboard_heading`, `.db_cardheading`, etc.)
- Component-specific styling for:
  - Buttons, inputs, selects, chips
  - Cards, dialogs, steppers
  - Navigation, menus, tooltips
  - Grids, tables, lists

**Example Usage**:
```scss
@include core-component-theme($my-app-theme, $gray-palette, $bg-palette);
```

#### 4. `common-utility.scss` (Utility Classes - 298 lines)

**Purpose**: Provides utility classes for common styling needs.

**Content**:
- **Font Utilities**:
  - `.font-normal`, `.font-italic`
  - `.font-thin`, `.font-light`, `.font-regular`, `.font-medium`, `.font-bold`

- **Cursor Utilities**:
  - `.pointer-cursor`

- **Layout Utilities**:
  - `.overflow-auto`
  - `.width-100vw`, `.height-100vh`
  - `.width-100pct`, `.height-100pct`

- **Spacing Utilities** (Dynamic generation):
  - Padding: `.padding-0`, `.padding-1`, `.padding-2`, etc.
  - Margin: `.margin-0`, `.margin-1`, `.margin-2`, etc.
  - Directional variants: `.padding-top-8`, `.margin-left-16`, etc.

- **Flexbox Utilities**:
  - `.flex-row`, `.flex-column`
  - `.flex-row-center`, `.flex-column-space-between`, etc.

- **Border Utilities**:
  - `.border-radius`
  - `.border-transparent`
  - `.box-shadow`

#### 5. `font.scss` (Font Definitions)

**Purpose**: Imports and configures custom fonts.

**Fonts Included**:
- OpenSans
- Poppins
- Inter
- IBMPlexSans
- IBMPlexSansArabic

#### 6. `resources/icomoon/` (Icon System)

**Purpose**: Provides icon font system with 3324+ SVG icons.

**Usage**: Icons are accessed via `bntv-icon` component with `fontSet: 'icomoon'`

---

## 2. @enttribe/themes-theme-black (Theme Black)

### Role

**Primary Purpose**: Theme-specific package that provides the black color scheme and theme variants for the application.

**Key Responsibilities**:
- Defines black-themed color palettes (primary, accent, warn)
- Provides theme-specific CSS variable overrides
- Implements three theme variants: `.theme`, `.theme-neo`, `.dark-theme`
- Applies Material Design theme configuration for black theme
- Provides light/dark mode mixins for gray and background colors
- **Default theme for UI Guidelines application**

### Package Structure

```
@enttribe/themes-theme-black/
├── src/
│   └── styles/
│       ├── theme-black.scss      # Main theme file (255 lines)
│       └── palette.scss          # Color palette definitions (293 lines)
└── lib/
    └── theme-black.module.ts     # TypeScript module
```

### Key Files & Content

#### 1. `palette.scss` (Color Palette - 293 lines)

**Purpose**: Defines the color palettes used by theme-black.

**Content**:

##### A. Root CSS Variables
Defines CSS custom properties in `:root`:

```scss
:root {
  // Primary Colors (Black theme)
  --primaryColor50: #f2f2f2;
  --primaryColor100: #d9d9d9;
  --primaryColor200: #bfbfbf;
  --primaryColor300: #8c8c8c;
  --primaryColor400: #595959;
  --primaryColor500: #000000;  // Main primary: Black
  --primaryColor600: #0a0a0a;
  --primaryColor700: #000000;
  --primaryColor800: #000000;
  --primaryColor900: #000000;
  --primaryColorA100: #8583ff;
  --primaryColorA200: #5450ff;
  --primaryColorA400: #221dff;
  --primaryColorA700: #0903ff;

  // Accent Colors
  --accentColor50: #f2f2f2;
  --accentColor100: #d9d9d9;
  --accentColor200: #bfbfbf;
  --accentColor300: #8c8c8c;
  --accentColor400: #595959;
  --accentColor500: #090909;  // Main accent: Dark gray
  --accentColor600: #000000;
  --accentColorA100: #8cb9ff;
  --accentColorA200: #5999ff;
  --accentColorA400: #267aff;
  --accentColorA700: #0d6aff;

  // Warn Colors (Red)
  --warnColor10: #FFFBFA;
  --warnColor50: #FEF3F2;
  --warnColor100: #FEE4E2;
  --warnColor200: #FECDCA;
  --warnColor300: #FDA29B;
  --warnColor400: #F97066;
  --warnColor500: #F04438;
  --warnColor600: #D92D20;
  --warnColor700: #B42318;
  --warnColor800: #912018;
  --warnColor900: #7A271A;
  --warnColor1000: #55160C;

  // Application Colors
  --menuTextColor: white;
  --highlightTextCard: #50c7aa;
  --pastDateCard: #ef3e2c;
  --micBackgroundColor: #00A3E0;
  --boxShadowColor: #0000001A;
}
```

##### B. SCSS Color Maps
Defines SCSS maps for Material Design palette generation:

```scss
$primary: (
  50: #f2f2f2,
  100: #d9d9d9,
  ...
  500: #000000,  // Black
  ...
  contrast: (50: #000000, 500: #ffffff, ...)
);

$accent: (
  50: #f2f2f2,
  ...
  500: #090909,  // Dark gray
  ...
);

$warn: (
  10: #FFFBFA,
  ...
  500: #F04438,  // Red
  ...
);

$light: (/* Light gray palette */);
$dark: (/* Dark gray palette */);
$bglight: (/* Light background palette */);
$bgdark: (/* Dark background palette */);
```

#### 2. `theme-black.scss` (Main Theme File - 255 lines)

**Purpose**: Applies the black theme configuration and defines three theme variants.

**Content Structure**:

##### A. Material Design Theme Setup
```scss
@use '@angular/material' as mat;
@use 'palette.scss' as *;
@use 'core-mixin.scss' as *;

// Define Material palettes
$my-app-primary: mat.m2-define-palette($primary, 500, 900);
$my-app-accent: mat.m2-define-palette($accent, 500, 900);
$my-app-warn: mat.m2-define-palette($warn, 500, 900, A100);

// Create Material theme
$my-app-theme: mat.m2-define-light-theme((
  color: (
    primary: $my-app-primary,
    accent: $my-app-accent,
    warn: $my-app-warn,
  ),
  density: 0,
));
```

##### B. Light/Dark Mode Mixins
Extracts color values and creates CSS variable mixins:

```scss
// Light mode mixin
@mixin lighten() {
  & {
    --grayColor10: #{$light-10};
    --grayColor50: #{$light-50};
    --grayColor100: #{$light-100};
    // ... through grayColor1000
  }
}

// Dark mode mixin
@mixin darken() {
  & {
    --grayColor10: #{$dark-10};
    --grayColor50: #{$dark-50};
    // ... through grayColor1000
  }
}

// Background light mode mixin
@mixin bgLighten() {
  & {
    --bgColor10: #{$bglight-10};
    --bgColor50: #{$bglight-50};
    // ... through bgColor1000
  }
}

// Background dark mode mixin
@mixin bgDarken() {
  & {
    --bgColor10: #{$bgdark-10};
    --bgColor50: #{$bgdark-50};
    // ... through bgColor1000
  }
}
```

##### C. Three Theme Variants

**1. `.theme` (Light Theme - Default)**
```scss
.theme {
  --menuTextColor: var(--grayColor700);
  --fixedSideNavBg: var(--bgColor10);
  --homeCardBg: var(--bgColor10);
  --appBgColor: #f7f9fb;
  --positiveColor: #75B057;
  --negativeColor: #F34141;
  // ... more variables
  
  @include mat.all-component-themes($my-app-theme);
  @include core-component-theme(...);
  @include lighten();      // Light gray colors
  @include bgLighten();    // Light background colors
}
```

**2. `.theme-neo` (Neo Theme Variant)**
```scss
.theme-neo {
  // Similar to .theme but includes both light and dark variants
  @include lighten();
  @include darken();       // Also includes dark variants
  @include bgLighten();
  @include bgDarken();    // Also includes dark backgrounds
}
```

**3. `.dark-theme` (Dark Theme)**
```scss
.dark-theme {
  --appBgColor: var(--grayColor50);
  --gridHeaderBg: var(--bgColor50);
  --divBoxShadowColor: 0 0 0.92em var(--grayColor200);
  // ... dark theme specific variables
  
  @include mat.all-component-themes($my-app-theme);
  @include core-component-theme(...);
  @include darken();      // Dark gray colors
  @include bgDarken();    // Dark background colors
}
```

---

## Relationship Between Themes

### Dependency Flow

```
┌─────────────────────────────────────────────────────────────┐
│         @enttribe/themes-gx-theme (BASE)                    │
│  ────────────────────────────────────────────────────────   │
│  • variables.scss (Base CSS variables)                      │
│  • _global.scss (Global styles)                            │
│  • core-mixin.scss (Component mixins)                       │
│  • common-utility.scss (Utility classes)                   │
│  • Resources (fonts, icons, libraries)                       │
└─────────────────────────────────────────────────────────────┘
                          ▲
                          │ Uses/Imports
                          │
┌─────────────────────────────────────────────────────────────┐
│      @enttribe/themes-theme-black (THEME-SPECIFIC)          │
│  ────────────────────────────────────────────────────────   │
│  • palette.scss (Defines color palettes)                   │
│  • theme-black.scss                                         │
│    ├─> @use 'core-mixin.scss' as *;                        │
│    ├─> Defines Material theme                             │
│    ├─> Creates lighten()/darken() mixins                    │
│    └─> Applies to .theme, .theme-neo, .dark-theme          │
└─────────────────────────────────────────────────────────────┘
```

### How They Work Together

1. **gx-theme** provides:
   - Base CSS variables (always available)
   - Component styling mixins
   - Utility classes
   - Global styles

2. **theme-black** provides:
   - Theme-specific color overrides
   - Material Design theme configuration
   - Light/dark mode variable assignments
   - Application-specific variable definitions

3. **Resolution Order**:
   ```
   Component uses: var(--fieldBorderColor)
                    │
                    ├─> Check theme-black.scss (.theme-black class)
                    │   └─> --fieldBorderColor: var(--grayColor100)
                    │
                    ├─> Check variables.scss (gx-theme - base)
                    │   └─> --grayColor100: #ebebeb
                    │
                    └─> Final value: #ebebeb
   ```

---

## Key Differences

| Aspect | themes-gx-theme | themes-theme-black |
|--------|----------------|-------------------|
| **Role** | Foundation/Base | Theme-specific implementation |
| **Scope** | Universal (all themes use it) | Specific to black theme |
| **Variables** | Base definitions | Theme-specific overrides |
| **Components** | Mixins and utilities | Material theme application |
| **Dependencies** | None (base layer) | Depends on gx-theme |
| **Size** | Large (1769+ lines variables, 3237 lines mixins) | Smaller (255 lines theme, 293 lines palette) |
| **Usage** | Always loaded | Loaded when theme-black is active |

---

## Default Theme for Guidelines

**Current Configuration**:
- **Default Theme**: `theme-black`
- **Active Class**: `.theme-black` (applied to `<body>`)
- **localStorage**: `"theme": "theme-black"`

**Files Involved**:
- `src/app/app.module.ts`: Sets localStorage
- `src/app/app.component.ts`: Applies body class
- `src/index.html`: Initial body class
- `angular.json`: Loads theme-black.scss bundle

---

## Usage Examples

### Using gx-theme Variables (Base)
```scss
.my-component {
  border: 1px solid var(--fieldBorderColor);
  background: var(--bgColor100);
  color: var(--grayColor900);
}
```

### Using theme-black Variables (Theme-Specific)
```scss
.my-component {
  // These are defined in theme-black.scss
  background: var(--homeCardBg);      // Defined in .theme-black
  color: var(--menuTextColor);        // Defined in .theme-black
  border-color: var(--nstBorderColor); // Defined in .theme-black
}
```

### Using Both Together
```scss
.my-component {
  // Base variable from gx-theme
  border-radius: var(--fieldRadius);
  
  // Theme-specific variable from theme-black
  background: var(--appBgColor);
  
  // Base variable with theme-specific override
  border-color: var(--fieldBorderColor); // Uses grayColor100 from theme-black
}
```

---

## Migration Notes

When migrating components to use theme variables:

1. **Prefer base variables** from `variables.scss` when possible (more portable)
2. **Use theme-specific variables** only when theme-specific behavior is needed
3. **Always provide fallbacks** for compatibility
4. **Test with different themes** to ensure proper resolution
5. **Document which variables are used** in component documentation

---

## File Locations Reference

### themes-gx-theme
- Base variables: `node_modules/@enttribe/themes-gx-theme/src/lib/variables.scss`
- Global styles: `node_modules/@enttribe/themes-gx-theme/src/lib/_global.scss`
- Component mixins: `node_modules/@enttribe/themes-gx-theme/src/lib/core-mixin.scss`
- Utilities: `node_modules/@enttribe/themes-gx-theme/src/lib/common-utility.scss`

### themes-theme-black
- Theme file: `node_modules/@enttribe/themes-theme-black/src/styles/theme-black.scss`
- Palette: `node_modules/@enttribe/themes-theme-black/src/styles/palette.scss`

---

*Last Updated: Based on UI Guidelines 2.1 implementation*
*Default Theme: theme-black*
