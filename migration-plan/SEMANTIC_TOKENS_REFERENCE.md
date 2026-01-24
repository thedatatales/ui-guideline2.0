# Semantic Tokens Reference

**Complete List of Semantic Tokens (Layer 2) in the Design System**

This document provides a comprehensive list of all Semantic tokens used in the UI Guidelines 2.1 system. These tokens express intent and meaning, independent of component structure, and map to Primitive tokens (Layer 1).

**Last Updated:** Based on UI Guidelines 2.1 implementation  
**Source:** `node_modules/@enttribe/themes-gx-theme/src/lib/variables.scss` and theme packages

---

## Table of Contents

1. [Primary Color Scale](#primary-color-scale)
2. [Accent Color Scale](#accent-color-scale)
3. [Warn Color Scale](#warn-color-scale)
4. [Gray Color Scale](#gray-color-scale)
5. [Background Color Scale](#background-color-scale)
6. [VW Semantic Intent Colors](#vw-semantic-intent-colors)
7. [VW Surface & Background Colors](#vw-surface--background-colors)
8. [VW Text Colors](#vw-text-colors)
9. [VW Border Colors](#vw-border-colors)
10. [VW Icon Colors](#vw-icon-colors)
11. [VW Focus & Interactive States](#vw-focus--interactive-states)
12. [Application-Specific Semantic Tokens](#application-specific-semantic-tokens)

---

## Primary Color Scale

**Purpose:** Main brand/action color palette. Used for primary actions, links, and brand identity.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--primaryColor50` | Lightest primary shade | Primitive palette | Hover states, light backgrounds |
| `--primaryColor100` | Very light primary | Primitive palette | Subtle highlights |
| `--primaryColor200` | Light primary | Primitive palette | Disabled states |
| `--primaryColor300` | Medium-light primary | Primitive palette | Secondary actions |
| `--primaryColor400` | Medium primary | Primitive palette | Tertiary elements |
| `--primaryColor500` | **Base primary color** | Primitive palette | **Primary buttons, links, focus states** |
| `--primaryColor600` | Medium-dark primary | Primitive palette | Hover states |
| `--primaryColor700` | Dark primary | Primitive palette | Active/focus states |
| `--primaryColor800` | Very dark primary | Primitive palette | Pressed states |
| `--primaryColor900` | Darkest primary | Primitive palette | Maximum contrast |
| `--primaryColorA100` | Accent variant 100 | Primitive palette | Special accent cases |
| `--primaryColorA200` | Accent variant 200 | Primitive palette | Special accent cases |
| `--primaryColorA400` | Accent variant 400 | Primitive palette | Special accent cases |
| `--primaryColorA700` | Accent variant 700 | Primitive palette | Special accent cases |

**Theme-Specific Values:**
- **theme-black**: `--primaryColor500: #000000` (black)
- Values may vary by theme package

---

## Accent Color Scale

**Purpose:** Secondary action color palette. Used for secondary actions, highlights, and interactive elements.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--accentColor50` | Lightest accent shade | Primitive palette | Hover backgrounds, highlights |
| `--accentColor100` | Very light accent | Primitive palette | Subtle accents |
| `--accentColor200` | Light accent | Primitive palette | Disabled accents |
| `--accentColor300` | Medium-light accent | Primitive palette | Secondary accents |
| `--accentColor400` | Medium accent | Primitive palette | Tertiary accents |
| `--accentColor500` | **Base accent color** | Primitive palette | **Secondary buttons, selected states, focus rings** |
| `--accentColor600` | Medium-dark accent | Primitive palette | Hover states |
| `--accentColor700` | Dark accent | Primitive palette | Active states |
| `--accentColor800` | Very dark accent | Primitive palette | Pressed states |
| `--accentColor900` | Darkest accent | Primitive palette | Maximum contrast |
| `--accentColorA100` | Accent variant 100 | Primitive palette | Special accent cases |
| `--accentColorA200` | Accent variant 200 | Primitive palette | Special accent cases |
| `--accentColorA400` | Accent variant 400 | Primitive palette | Special accent cases |
| `--accentColorA700` | Accent variant 700 | Primitive palette | Special accent cases |

**Theme-Specific Values:**
- **theme-black**: `--accentColor500: #090909` (near-black)
- Values may vary by theme package

---

## Warn Color Scale

**Purpose:** Warning/error color palette. Used for error states, warnings, destructive actions, and alerts.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--warnColor10` | Lightest warn shade | Primitive palette | Very light error backgrounds |
| `--warnColor50` | Very light warn | Primitive palette | Light error backgrounds |
| `--warnColor100` | Light warn | Primitive palette | Subtle error indicators |
| `--warnColor200` | Medium-light warn | Primitive palette | Warning backgrounds |
| `--warnColor300` | Medium warn | Primitive palette | Error borders |
| `--warnColor400` | Medium-dark warn | Primitive palette | Warning states |
| `--warnColor500` | **Base warn color** | Primitive palette | **Error borders, warning states** |
| `--warnColor600` | **Dark warn color** | Primitive palette | **Error text, destructive actions** |
| `--warnColor700` | Very dark warn | Primitive palette | Active error states |
| `--warnColor800` | Darkest warn | Primitive palette | Maximum error contrast |
| `--warnColor900` | Maximum warn | Primitive palette | Critical errors |
| `--warnColor1000` | Extreme warn | Primitive palette | Maximum severity |
| `--warnColorA100` | Warn accent variant 100 | Primitive palette | Special warn cases |
| `--warnColorA200` | Warn accent variant 200 | Primitive palette | Special warn cases |
| `--warnColorA400` | Warn accent variant 400 | Primitive palette | Special warn cases |
| `--warnColorA700` | Warn accent variant 700 | Primitive palette | Special warn cases |

**Theme-Specific Values:**
- **theme-black**: Uses red-based warn palette (e.g., `--warnColor500: #F04438`, `--warnColor600: #D92D20`)

---

## Gray Color Scale

**Purpose:** Neutral grayscale palette. Used for text, borders, backgrounds, and neutral UI elements.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--grayColor10` | Lightest gray (white) | Primitive palette | **Primary backgrounds, surfaces** |
| `--grayColor50` | Very light gray | Primitive palette | Light backgrounds, disabled states |
| `--grayColor100` | Light gray | Primitive palette | Borders, dividers, subtle backgrounds |
| `--grayColor200` | Medium-light gray | Primitive palette | Disabled borders, inactive states |
| `--grayColor300` | Medium gray | Primitive palette | Default borders, secondary elements |
| `--grayColor400` | Medium-dark gray | Primitive palette | Placeholder text, disabled text |
| `--grayColor500` | **Medium gray** | Primitive palette | **Secondary text, icons** |
| `--grayColor600` | Dark gray | Primitive palette | Secondary text, labels |
| `--grayColor700` | **Very dark gray** | Primitive palette | **Body text, primary text** |
| `--grayColor800` | Darker gray | Primitive palette | Headings, emphasis |
| `--grayColor900` | **Darkest gray (near black)** | Primitive palette | **Primary text, headings** |
| `--grayColor1000` | Maximum gray (black) | Primitive palette | Maximum contrast text |

**Theme-Specific Values:**
- **Light themes**: `--grayColor10: #ffffff`, `--grayColor1000: #000000`
- **Dark themes**: `--grayColor10: #000000`, `--grayColor1000: #ffffff`
- Values invert for dark mode

---

## Background Color Scale

**Purpose:** Background surface palette. Used for component backgrounds, cards, panels, and surfaces.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--bgColor10` | Lightest background (white) | Primitive palette | **Primary backgrounds, cards, dialogs** |
| `--bgColor50` | Very light background | Primitive palette | Secondary surfaces, hover states |
| `--bgColor100` | Light background | Primitive palette | Tertiary surfaces, active states |
| `--bgColor200` | Medium-light background | Primitive palette | Subtle backgrounds, dividers |
| `--bgColor300` | Medium background | Primitive palette | Disabled backgrounds |
| `--bgColor400` | Medium-dark background | Primitive palette | Elevated surfaces |
| `--bgColor500` | Medium background | Primitive palette | Special cases |
| `--bgColor600` | Dark background | Primitive palette | Dark mode surfaces |
| `--bgColor700` | Very dark background | Primitive palette | Dark mode elevated |
| `--bgColor800` | Darker background | Primitive palette | Dark mode primary |
| `--bgColor900` | **Darkest background** | Primitive palette | **Dark mode surfaces, selected states** |
| `--bgColor1000` | Maximum background | Primitive palette | Maximum contrast backgrounds |

**Theme-Specific Values:**
- **Light themes**: `--bgColor10: #ffffff`, `--bgColor1000: #000000`
- **Dark themes**: `--bgColor10: #000000`, `--bgColor1000: #ffffff`
- Values invert for dark mode

---

## VW Semantic Intent Colors

**Purpose:** High-level semantic colors that express intent (info, success, warning, danger). These map to primitive VW color palettes.

### Info (Blue-based)

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--vw-color-info` | Base info color | `var(--vw-color-blue-600)` | Informational messages, info buttons |
| `--vw-color-info-hover` | Info hover state | `var(--vw-color-blue-700)` | Info button hover |
| `--vw-color-info-active` | Info active state | `var(--vw-color-blue-800)` | Info button active |
| `--vw-color-info-light` | Light info background | `var(--vw-color-blue-50)` | Info backgrounds, highlights |
| `--vw-color-info-contrast` | Info contrast text | `var(--grayColor10)` | Text on info backgrounds |

### Success (Green-based)

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--vw-color-success` | Base success color | `var(--vw-color-green-500)` | Success messages, success buttons |
| `--vw-color-success-hover` | Success hover state | `var(--vw-color-green-600)` | Success button hover |
| `--vw-color-success-active` | Success active state | `var(--vw-color-green-700)` | Success button active |
| `--vw-color-success-light` | Light success background | `var(--vw-color-green-50)` | Success backgrounds, highlights |
| `--vw-color-success-contrast` | Success contrast text | `var(--grayColor10)` | Text on success backgrounds |

### Warning (Amber-based)

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--vw-color-warning` | Base warning color | `var(--vw-color-amber-500)` | Warning messages, warning buttons |
| `--vw-color-warning-hover` | Warning hover state | `var(--vw-color-amber-600)` | Warning button hover |
| `--vw-color-warning-active` | Warning active state | `var(--vw-color-amber-700)` | Warning button active |
| `--vw-color-warning-light` | Light warning background | `var(--vw-color-amber-50)` | Warning backgrounds, highlights |
| `--vw-color-warning-contrast` | Warning contrast text | `var(--grayColor900)` | Text on warning backgrounds |

### Danger/Error (Red-based)

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--vw-color-danger` | Base danger color | `var(--vw-color-red-500)` | Error messages, destructive actions |
| `--vw-color-danger-hover` | Danger hover state | `var(--vw-color-red-600)` | Danger button hover |
| `--vw-color-danger-active` | Danger active state | `var(--vw-color-red-700)` | Danger button active |
| `--vw-color-danger-light` | Light danger background | `var(--vw-color-red-50)` | Error backgrounds, highlights |
| `--vw-color-danger-contrast` | Danger contrast text | `var(--grayColor10)` | Text on danger backgrounds |

---

## VW Surface & Background Colors

**Purpose:** Semantic surface colors for backgrounds and containers.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--vw-color-background` | Main application background | `var(--bgColor50)` | Page backgrounds, app containers |
| `--vw-color-surface` | Primary surface color | `var(--grayColor10)` | Cards, panels, elevated surfaces |
| `--vw-color-surface-hover` | Surface hover state | `var(--bgColor100)` | Hover backgrounds |
| `--vw-color-surface-active` | Surface active state | `var(--bgColor200)` | Active/pressed backgrounds |
| `--vw-color-surface-selected` | Selected surface | `var(--bgColor50)` | Selected item backgrounds |
| `--vw-color-surface-disabled` | Disabled surface | `var(--bgColor100)` | Disabled element backgrounds |
| `--vw-color-surface-elevated` | Elevated surface | `var(--grayColor10)` | Dialogs, modals, popovers |

---

## VW Text Colors

**Purpose:** Semantic text colors for different text hierarchies and states.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--vw-color-text-primary` | Primary text color | `var(--grayColor900)` | **Body text, headings, main content** |
| `--vw-color-text-secondary` | Secondary text color | `var(--grayColor600)` | **Labels, captions, helper text** |
| `--vw-color-text-tertiary` | Tertiary text color | `var(--grayColor500)` | **Subtle text, metadata** |
| `--vw-color-text-disabled` | Disabled text color | `var(--grayColor400)` | Disabled form fields, inactive text |
| `--vw-color-text-inverse` | Inverse text color | `var(--grayColor10)` | Text on dark backgrounds |
| `--vw-color-text-link` | Link text color | `var(--primaryColor500)` | **Links, anchor tags** |
| `--vw-color-text-link-hover` | Link hover color | `var(--primaryColor600)` | Link hover state |

---

## VW Border Colors

**Purpose:** Semantic border colors for different states and contexts.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--vw-color-border` | Default border color | `var(--grayColor300)` | **Default borders, dividers** |
| `--vw-color-border-hover` | Border hover state | `var(--grayColor400)` | Hover border color |
| `--vw-color-border-focus` | Border focus state | `var(--primaryColor500)` | **Focus rings, active borders** |
| `--vw-color-border-error` | Error border color | `var(--vw-color-danger)` | Error state borders |
| `--vw-color-border-success` | Success border color | `var(--vw-color-success)` | Success state borders |
| `--vw-color-border-disabled` | Disabled border color | `var(--grayColor200)` | Disabled element borders |

---

## VW Icon Colors

**Purpose:** Semantic icon colors for different contexts and states.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--vw-color-icon-primary` | Primary icon color | `var(--grayColor700)` | **Default icons, UI icons** |
| `--vw-color-icon-secondary` | Secondary icon color | `var(--grayColor500)` | Secondary icons, decorative |
| `--vw-color-icon-disabled` | Disabled icon color | `var(--grayColor400)` | Disabled state icons |
| `--vw-color-icon-inverse` | Inverse icon color | `var(--grayColor10)` | Icons on dark backgrounds |
| `--vw-color-icon-interactive` | Interactive icon color | `var(--primaryColor500)` | Clickable icons, action icons |

---

## VW Focus & Interactive States

**Purpose:** Colors for focus rings, overlays, and interactive feedback.

| Token | Description | Maps To | Example Usage |
|-------|-------------|---------|---------------|
| `--vw-color-focus-ring` | Default focus ring | `rgba(33, 150, 243, 0.4)` | **Focus outlines, keyboard navigation** |
| `--vw-color-focus-ring-danger` | Danger focus ring | `rgba(244, 67, 54, 0.4)` | Error field focus rings |
| `--vw-color-overlay` | Overlay background | `rgba(0, 0, 0, 0.5)` | **Modal backdrops, dialogs** |
| `--vw-color-overlay-light` | Light overlay | `rgba(0, 0, 0, 0.3)` | Subtle overlays, tooltips |

---

## Application-Specific Semantic Tokens

**Purpose:** Domain-specific semantic tokens used throughout the application.

### Status & Feedback Colors

| Token | Description | Default Value | Example Usage |
|-------|-------------|---------------|---------------|
| `--positiveColor` | Positive value color | `#75B057` | Success indicators, positive metrics |
| `--negativeColor` | Negative value color | `#F34141` | Error indicators, negative metrics |
| `--neutralColor` | Neutral value color | `#252525` or `var(--grayColor900)` | Neutral states, default values |

### Navigation & Menu Colors

| Token | Description | Default Value | Example Usage |
|-------|-------------|---------------|---------------|
| `--menuTextColor` | Menu text color | `var(--grayColor700)` or `white` | Navigation menu text |
| `--menuSelectedIconColor` | Selected menu icon | `#d0f94a` | Active menu item icon |
| `--sidenavMenuSelectedBgColor` | Selected menu background | `var(--bgColor900)` or `var(--bgColor100)` | Active menu item background |
| `--sidenavMenuSelectedTextColor` | Selected menu text | `var(--grayColor10)` or `var(--grayColor700)` | Active menu item text |
| `--sidenavMenuHoverBgColor` | Menu hover background | `#f7f7f7` or `var(--bgColor100)` | Menu item hover |

### Application Backgrounds

| Token | Description | Default Value | Example Usage |
|-------|-------------|---------------|---------------|
| `--appBgColor` | Application background | `#f7f9fb` or `var(--grayColor50)` | Main app container background |
| `--fixedSideNavBg` | Fixed sidebar background | `var(--bgColor10)` | Sidebar background |
| `--homeCardBg` | Home card background | `var(--bgColor10)` | Dashboard card backgrounds |
| `--templateBgColor` | Template background | `var(--bgColor10)` | Template container background |

### Input & Form Colors

| Token | Description | Default Value | Example Usage |
|-------|-------------|---------------|---------------|
| `--inputOutlineBg` | Input outline background | `var(--bgColor10)` | Input field backgrounds |
| `--inputOutlineBgHover` | Input hover background | `var(--bgColor10)` | Input hover state |
| `--inputAttachBg` | Input attachment background | `var(--bgColor50)` or `var(--bgColor10)` | File attachment areas |
| `--inputAttachBorderColor` | Input attachment border | `var(--bgColor200)` | Attachment border |
| `--suggestionBoxBg` | Suggestion box background | `var(--bgColor10)` | Autocomplete dropdowns |

### Grid & Table Colors

| Token | Description | Default Value | Example Usage |
|-------|-------------|---------------|---------------|
| `--gridHeaderBg` | Grid header background | `#FBFBFB` or `var(--bgColor50)` | Data table headers |

### Special Purpose Colors

| Token | Description | Default Value | Example Usage |
|-------|-------------|---------------|---------------|
| `--highlightTextCard` | Highlighted text card | `#50c7aa` | Special highlight backgrounds |
| `--pastDateCard` | Past date card color | `#ef3e2c` | Date-based indicators |
| `--micBackgroundColor` | Microphone background | `#00A3E0` | Voice input indicators |
| `--questionBg` | Question background | `#E5ECF680` or `#646d7ea1` | Question/help backgrounds |
| `--parent` | Parent item color | `#252525` or `var(--grayColor900)` | Hierarchical parent items |
| `--child` | Child item color | `#757575` or `var(--grayColor600)` | Hierarchical child items |
| `--nstBgColor` | NST background | `#f5f5f5` or `var(--grayColor50)` | NST component background |
| `--nstBorderColor` | NST border | `#e1e3e4` or `var(--grayColor100)` | NST component border |
| `--nstCardBgColor` | NST card background | `var(--bgColor10)` or `var(--bgColor100)` | NST card backgrounds |
| `--divBoxShadowColor` | Box shadow color | `0.17em 0.33em 0.92em 0em rgba(0, 0, 0, 0.1)` or `0 0 0.92em var(--grayColor200)` | Card shadows, elevation |
| `--boxShadowColor` | General box shadow | `#0000001A` | General shadow color |
| `--blackTwentyPercent` | 20% black overlay | `#2E343E33` | Overlay effects |
| `--blackTenPercent` | 10% black overlay | `#2E343E1A` | Subtle overlay effects |
| `--templateMenuColor` | Template menu color | `white` | Template menu text |

---

## Token Resolution Flow

### Hierarchy

```
VW Palette (Primitive) 
    ↓
Semantic Tokens (This Document)
    ↓
Role Tokens (Component-specific)
    ↓
Components (Consumption)
```

### Example Resolution Chain

**Component Usage:**
```scss
.button {
  background: var(--buttonFilledPrimaryBgColor);
}
```

**Role Token Definition:**
```scss
--buttonFilledPrimaryBgColor: var(--primaryColor500);
```

**Semantic Token Definition:**
```scss
--primaryColor500: #000000; // (theme-black)
```

**Primitive Token (if needed):**
```scss
--vw-color-black: #000000;
```

---

## Usage Guidelines

### ✅ DO Use Semantic Tokens

1. **In Role Token Definitions**
   ```scss
   --fieldFocusBorderColor: var(--accentColor500);
   --buttonFilledPrimaryBgColor: var(--primaryColor500);
   ```

2. **For Theme-Agnostic Styling**
   ```scss
   .info-badge {
     background: var(--vw-color-info-light);
     color: var(--vw-color-info);
   }
   ```

3. **For Meaningful Color Usage**
   ```scss
   .success-message {
     border-color: var(--vw-color-success);
     background: var(--vw-color-success-light);
   }
   ```

### ❌ DON'T Use Semantic Tokens

1. **Directly in Components** - Use Role tokens instead
   ```scss
   // ❌ Bad
   .my-button {
     background: var(--primaryColor500);
   }
   
   // ✅ Good
   .my-button {
     background: var(--buttonFilledPrimaryBgColor);
   }
   ```

2. **For Primitive Colors** - Use VW palette tokens
   ```scss
   // ❌ Bad (if you need a specific blue shade)
   .element {
     color: var(--primaryColor500); // Wrong semantic meaning
   }
   
   // ✅ Good
   .element {
     color: var(--vw-color-blue-500); // Specific blue shade
   }
   ```

---

## Summary Statistics

- **Total Semantic Tokens Documented:** ~100+
- **Color Scale Categories:** 5 (Primary, Accent, Warn, Gray, Background)
- **VW Semantic Categories:** 6 (Intent, Surface, Text, Border, Icon, Focus)
- **Application-Specific Tokens:** ~25
- **Scale Depth:** 10-14 shades per color scale
- **Theme Variants:** Multiple (theme-black, theme-indigo, theme-greenwave)

---

## Related Documentation

- [Role Tokens Reference](./ROLE_TOKENS_REFERENCE.md) - Component-specific tokens
- [Design Token Governance Charter](./governance/desing-token-governance-charter.md) - Token layer model
- [Theme System Architecture](./THEME_SYSTEM_ARCHITECTURE.md) - Theme resolution flow
- [Theme Packages Roles](./THEME_PACKAGES_ROLES.md) - Theme package structure

---

## Token Mapping Reference

### Primary Color → Role Token Examples

| Semantic Token | Used In Role Tokens |
|----------------|---------------------|
| `--primaryColor500` | `--buttonFilledPrimaryBgColor`, `--buttonFilledPrimaryBorderColor`, `--fieldFocusBorderColor`, `--vw-color-text-link` |
| `--primaryColor600` | `--buttonFilledPrimaryHoverBgColor`, `--buttonFilledPrimaryHoverBorderColor` |
| `--primaryColor700` | `--buttonFilledPrimaryFocusBgColor`, `--buttonFilledPrimaryFocusBorderColor` |

### Accent Color → Role Token Examples

| Semantic Token | Used In Role Tokens |
|----------------|---------------------|
| `--accentColor500` | `--buttonFilledAccentBgColor`, `--toggleSelectedBgColor`, `--checkboxBgColor`, `--stepperCurrentStepBgColor` |
| `--accentColor600` | `--buttonFilledAccentHoverBgColor`, `--splitviewSelectedCardBorderColor` |
| `--accentColor50` | `--dropdownItemHoverBgColor`, `--datePickerSelectedCellBgColor` |

### Warn Color → Role Token Examples

| Semantic Token | Used In Role Tokens |
|----------------|---------------------|
| `--warnColor600` | `--buttonFilledWarnBgColor`, `--fieldHintErrorColor`, `--errorIconColor` |
| `--warnColor500` | `--errorBorderColor`, `--buttonStrokedWarnHoverTextColor` |

### Gray Color → Role Token Examples

| Semantic Token | Used In Role Tokens |
|----------------|---------------------|
| `--grayColor900` | `--fieldTextColor`, `--vw-color-text-primary`, `--buttonStrokedPrimaryTextColor` |
| `--grayColor700` | `--chipNeutralTextColor`, `--menuTextColor`, `--vw-color-icon-primary` |
| `--grayColor600` | `--dropdownItemTextColor`, `--vw-color-text-secondary` |
| `--grayColor400` | `--fieldPlaceholderColor`, `--vw-color-text-disabled`, `--buttonFilledDisabledTextColor` |
| `--grayColor300` | `--fieldBorderColor`, `--vw-color-border`, `--buttonStrokedPrimaryBorderColor` |
| `--grayColor100` | `--fieldDisabledBorderColor`, `--fieldErrorBorderColor` |
| `--grayColor10` | `--buttonFilledPrimaryTextColor`, `--vw-color-text-inverse`, `--bgColor10` |

### Background Color → Role Token Examples

| Semantic Token | Used In Role Tokens |
|----------------|---------------------|
| `--bgColor10` | `--configHeaderBgColor`, `--toggleButtonBgColor`, `--tabBgColor`, `--vw-color-surface` |
| `--bgColor50` | `--fieldDisabledBgColor`, `--dropdownSelectedBgColor`, `--vw-color-background` |
| `--bgColor100` | `--fieldDisabledActiveBgColor`, `--stepperNextStepBgColor` |

---

*Last Updated: Based on UI Guidelines 2.1 implementation*
