# Typography Classes Reference - @entribe Theme System

## Overview

This document provides a comprehensive reference of all typography-related classes defined in the @entribe theme system, their file locations, relationships, and usage guidelines.

---

## File Structure & Relationships

```
@entribe/themes-gx-theme/src/lib/
├── variables.scss          → Font size definitions (maps)
├── _global.scss            → Typography classes (h1-h6, body-1-3, rex-font-*)
├── common-utility.scss     → Font weight utilities (.font-bold, .font-medium, etc.)
├── core-mixin.scss         → Component-specific typography (.db_cardheading, etc.)
└── scss/components/
    └── _stepper.scss       → Stepper-specific typography
```

---

## Typography System Architecture

### 1. Font Size Maps (Source: `variables.scss`)

**Location**: `node_modules/@enttribe/themes-gx-theme/src/lib/variables.scss` (Lines 30-60)

These maps define the font size values used to generate typography classes:

#### Display Font Sizes
```scss
$rex-font-display: (
  'display-1': 3.54em,   // Largest display text
  'display-2': 3.08em,
  'display-3': 2.77em,
  'display-4': 2.46em,
  'display-5': 2.15em,   // Smallest display text
);
```

#### Header Font Sizes
```scss
$rex-font-header: (
  'header-1': 1.85em,    // Largest header
  'header-2': 1.54em,
  'header-3': 1.23em,
  'header-4': 1.08em,
  'header-5': 0.92em,    // Smallest header
);
```

#### Body Font Sizes
```scss
$rex-font-body: (
  'lead-body': 1.54em,   // Lead paragraph
  'body-1': 1.23em,      // Primary body text
  'body-2': 1.08em,      // Secondary body text
  'caption': 0.92em,     // Caption text
  'overline': 0.77em,    // Overline text
);
```

**Relationship**: These maps are used in `_global.scss` to generate `.rex-font-*` classes via `@each` loops.

---

## Typography Classes by Category

### A. Standard HTML Heading Classes

**Location**: `_global.scss` (Lines 134-184)

These classes style both HTML elements (`h1`-`h6`) and their class equivalents (`.h1`-`.h6`).

| Class | Font Size | Line Height | Font Weight | Color | File |
|-------|-----------|-------------|-------------|-------|------|
| `h1`, `.h1` | `1.75em` | `2.5rem` | `600` | `var(--grayColor800)` | `_global.scss:149-154` |
| `h2`, `.h2` | `1.5em` | `2.25rem` | `600` | `var(--grayColor800)` | `_global.scss:155-160` |
| `h3`, `.h3` | `1.25em` | `1.875rem` | `600` | `var(--grayColor800)` | `_global.scss:161-166` |
| `h4`, `.h4` | `1em` | `1.5rem` | `600` | `var(--grayColor800)` | `_global.scss:167-172` |
| `h5`, `.h5` | `0.94em` | `1.25rem` | `500` | `var(--grayColor800)` | `_global.scss:173-178` |
| `h6`, `.h6` | `0.875em` | `1.15rem` | `500` | `var(--grayColor800)` | `_global.scss:179-184` |

**Common Properties** (Lines 134-148):
- `margin: 0 !important`
- `color: var(--grayColor800)`

**Relationship**: These are the primary heading classes. All use `var(--grayColor800)` for color consistency.

---

### B. Body Text Classes

**Location**: `_global.scss` (Lines 186-210)

| Class | Font Size | Line Height | Font Weight | Color | File |
|-------|-----------|-------------|-------------|-------|------|
| `.body-1` | `0.875em` | `1.25rem` | `400` | `var(--grayColor800)` | `_global.scss:186-191` |
| `.body-2` | `0.75em` | `1.125rem` | `400` | `var(--grayColor600)` | `_global.scss:193-198` |
| `.body-3` | `0.625em` | `0.825rem` | `400` | `var(--grayColor400)` | `_global.scss:199-204` |
| `.overline` | `0.78em` | `1.09em` | `400` | `var(--grayColor800)` | `_global.scss:206-210` |

**Relationship**: 
- `.body-1` → Primary body text (darkest)
- `.body-2` → Secondary body text (medium gray)
- `.body-3` → Tertiary body text (lightest gray)
- `.overline` → Small uppercase text

---

### C. Rex Font System Classes

**Location**: `_global.scss` (Lines 217-231)

These classes are **generated dynamically** from the maps in `variables.scss` using `@each` loops.

#### Display Classes
Generated from `$rex-font-display` map:

| Class | Font Size | Source Map | Generated In |
|-------|-----------|------------|--------------|
| `.rex-font-display-1` | `3.54em` | `variables.scss:31` | `_global.scss:217-220` |
| `.rex-font-display-2` | `3.08em` | `variables.scss:32` | `_global.scss:217-220` |
| `.rex-font-display-3` | `2.77em` | `variables.scss:33` | `_global.scss:217-220` |
| `.rex-font-display-4` | `2.46em` | `variables.scss:34` | `_global.scss:217-220` |
| `.rex-font-display-5` | `2.15em` | `variables.scss:35` | `_global.scss:217-220` |

#### Header Classes
Generated from `$rex-font-header` map:

| Class | Font Size | Source Map | Generated In |
|-------|-----------|------------|--------------|
| `.rex-font-header-1` | `1.85em` | `variables.scss:39` | `_global.scss:222-225` |
| `.rex-font-header-2` | `1.54em` | `variables.scss:40` | `_global.scss:222-225` |
| `.rex-font-header-3` | `1.23em` | `variables.scss:41` | `_global.scss:222-225` |
| `.rex-font-header-4` | `1.08em` | `variables.scss:42` | `_global.scss:222-225` |
| `.rex-font-header-5` | `0.92em` | `variables.scss:43` | `_global.scss:222-225` |

#### Body Classes
Generated from `$rex-font-body` map:

| Class | Font Size | Source Map | Generated In |
|-------|-----------|------------|--------------|
| `.rex-font-lead-body` | `1.54em` | `variables.scss:47` | `_global.scss:227-230` |
| `.rex-font-body-1` | `1.23em` | `variables.scss:48` | `_global.scss:227-230` |
| `.rex-font-body-2` | `1.08em` | `variables.scss:49` | `_global.scss:227-230` |
| `.rex-font-caption` | `0.92em` | `variables.scss:50` | `_global.scss:227-230` |
| `.rex-font-overline` | `0.77em` | `variables.scss:51` | `_global.scss:227-230` |

**Relationship**: 
- These classes **only set font-size** (`font-size: #{$value} !important`)
- They don't set font-weight, line-height, or color
- Use in combination with font-weight utilities (`.font-bold`, `.font-medium`, etc.)

**Connection Flow**:
```
variables.scss (maps) 
  → _global.scss (@each loops) 
  → Generated classes (.rex-font-*)
```

---

### D. Font Weight Utility Classes

**Location**: `common-utility.scss` (Lines 3-23)

| Class | Font Weight | File |
|-------|-------------|------|
| `.font-normal` | `normal` | `common-utility.scss:3-5` |
| `.font-italic` | `italic` | `common-utility.scss:6-8` |
| `.font-thin` | `100` | `common-utility.scss:9-11` |
| `.font-light` | `300` | `common-utility.scss:12-14` |
| `.font-regular` | `400` | `common-utility.scss:15-17` |
| `.font-medium` | `500` | `common-utility.scss:18-20` |
| `.font-bold` | `700` | `common-utility.scss:21-23` |

**Relationship**: These are utility classes that can be combined with any typography class:
- `.rex-font-header-1.font-bold` → Large header with bold weight
- `.body-1.font-medium` → Body text with medium weight

---

### E. Component-Specific Typography Classes

**Location**: `core-mixin.scss` (Lines 113-152)

These classes are defined within the `@mixin core-component-theme()` mixin and are specific to dashboard/card components.

| Class | Font Size | Font Weight | PX Equivalent* | File |
|-------|-----------|-------------|----------------|------|
| `.dashboard_heading` | `2em` | `500` | `24px` | `core-mixin.scss:113-116` |
| `.dropdown_label` | `1em` | `400` | `12px` | `core-mixin.scss:117-120` |
| `.db_cardheading` | `1.539em` | `500` | `20px` | `core-mixin.scss:121-124` |
| `.db_tenure_legend` | `1.07em` | `400` | `14px` | `core-mixin.scss:125-128` |
| `.db_card_LGvalue` | `2.33em` | `600` | `28px` | `core-mixin.scss:129-132` |
| `.db_childcard-title` | `1.34em` | `500` | `16px` | `core-mixin.scss:133-136` |
| `.sub_card_heading` | `1.34em` | `500` | `16px` | `core-mixin.scss:137-140` |
| `.db_minicard_heading` | `1.34em` | `500` | `16px` | `core-mixin.scss:141-144` |
| `.db_minicard_title` | `1em` | `400` | `12px` | `core-mixin.scss:145-148` |
| `.db_mini_value` | `1.34em` | `500` | `16px` | `core-mixin.scss:149-152` |

*PX equivalents assume base font-size of 12px (see `EM_VALUE_DEFINITIONS.md`)

**Relationship**: 
- These are **dashboard-specific** classes
- They follow a naming pattern: `db_*` (dashboard), `sub_*` (sub-card)
- Many use `1.34em` (16px) for consistency
- They're defined within a mixin, so they're only available when the mixin is included

**Common Patterns**:
- `*_heading` → Larger text (1.34em - 2em), weight 500-600
- `*_title` → Smaller text (1em), weight 400
- `*_value` → Medium text (1.34em), weight 500

---

### F. Special Utility Classes

#### `.h4-font`
**Location**: `_global.scss` (Lines 126-131)

```scss
.h4-font {
  margin: 0 !important;
  font-weight: 500 !important;
  font-size: 1.09em !important;
  line-height: 1.41em !important;
}
```

**Relationship**: Similar to `.h4` but with different sizing (1.09em vs 1em) and includes margin reset.

#### `.label-ellipsis`
**Location**: `_global.scss` (Lines 212-216)

```scss
.label-ellipsis {
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
```

**Relationship**: Text truncation utility, can be combined with any typography class.

---

### G. Component-Specific Typography (Stepper)

**Location**: `scss/components/_stepper.scss` (Line 32)

| Class | Font Size | Font Weight | File |
|-------|-----------|-------------|------|
| `.mat-step-label` | `1.08em !important` | `400` (when selected) | `_stepper.scss:32-35` |

**Relationship**: Specific to Material Design stepper component.

---

## Typography Class Relationships & Hierarchy

### Size Hierarchy (Largest to Smallest)

```
Display Classes (Rex Font)
├── .rex-font-display-1 (3.54em) ──┐
├── .rex-font-display-2 (3.08em)   │
├── .rex-font-display-3 (2.77em)   │
├── .rex-font-display-4 (2.46em)   │
└── .rex-font-display-5 (2.15em) ──┘
                                    │
Standard Headings                   │
├── h1/.h1 (1.75em) ───────────────┤
├── h2/.h2 (1.5em)                  │
├── h3/.h3 (1.25em)                  │
├── h4/.h4 (1em)                     │
├── h5/.h5 (0.94em)                  │
└── h6/.h6 (0.875em) ────────────────┤
                                    │
Rex Header Classes                  │
├── .rex-font-header-1 (1.85em) ────┤
├── .rex-font-header-2 (1.54em)      │
├── .rex-font-header-3 (1.23em)      │
├── .rex-font-header-4 (1.08em)      │
└── .rex-font-header-5 (0.92em) ─────┤
                                    │
Body & Component Classes            │
├── .rex-font-lead-body (1.54em)    │
├── .body-1 (0.875em)                │
├── .body-2 (0.75em)                 │
├── .body-3 (0.625em)                │
└── .overline (0.78em) ───────────────┘
```

### Connection Map

```
┌─────────────────────────────────────────────────────────┐
│ variables.scss                                          │
│ - $rex-font-display                                     │
│ - $rex-font-header                                      │
│ - $rex-font-body                                        │
└─────────────────┬───────────────────────────────────────┘
                  │
                  │ Used by @each loops
                  ▼
┌─────────────────────────────────────────────────────────┐
│ _global.scss                                            │
│ - Generates .rex-font-* classes                         │
│ - Defines h1-h6, .h1-.h6                                │
│ - Defines .body-1, .body-2, .body-3, .overline          │
│ - Defines .h4-font, .label-ellipsis                     │
└─────────────────┬───────────────────────────────────────┘
                  │
                  │ Can be combined with
                  ▼
┌─────────────────────────────────────────────────────────┐
│ common-utility.scss                                     │
│ - .font-bold, .font-medium, .font-regular, etc.        │
└─────────────────────────────────────────────────────────┘
                  │
                  │ Separate system
                  ▼
┌─────────────────────────────────────────────────────────┐
│ core-mixin.scss                                         │
│ - Component-specific classes (.db_*, .sub_*)           │
│ - Dashboard typography                                  │
└─────────────────────────────────────────────────────────┘
```

---

## Usage Guidelines

### When to Use Which Class

#### For Headings
- **Use `.h1` - `.h6`** when you need complete styling (size, weight, color, line-height)
- **Use `.rex-font-header-*`** when you only need font-size and want to control other properties separately

#### For Body Text
- **Use `.body-1`** for primary body text (darkest, most readable)
- **Use `.body-2`** for secondary/less important text
- **Use `.body-3`** for tertiary/least important text
- **Use `.rex-font-body-*`** when you need specific sizes from the rex system

#### For Component-Specific Text
- **Use `.db_*` classes** for dashboard components (only available when mixin is included)
- **Use `.sub_*` classes** for sub-card headings

#### Combining Classes
```html
<!-- Complete heading with all styles -->
<h1 class="h1">Main Title</h1>

<!-- Custom size with custom weight -->
<div class="rex-font-header-2 font-bold">Custom Header</div>

<!-- Body text with medium weight -->
<p class="body-1 font-medium">Important paragraph</p>

<!-- Truncated label -->
<span class="body-2 label-ellipsis">Long text that truncates...</span>
```

---

## Font Size Conversion Reference

Assuming base font-size of **12px** (see `EM_VALUE_DEFINITIONS.md`):

| EM Value | PX Equivalent | Common Classes |
|----------|---------------|----------------|
| `3.54em` | ~42px | `.rex-font-display-1` |
| `2.33em` | ~28px | `.db_card_LGvalue` |
| `2em` | 24px | `.dashboard_heading` |
| `1.85em` | ~22px | `.rex-font-header-1`, `h1/.h1` |
| `1.75em` | 21px | `h1/.h1` |
| `1.54em` | ~18px | `.rex-font-header-2`, `.rex-font-lead-body`, `.db_cardheading` |
| `1.5em` | 18px | `h2/.h2` |
| `1.34em` | 16px | `.db_childcard-title`, `.sub_card_heading`, `.db_minicard_heading`, `.db_mini_value` |
| `1.25em` | 15px | `h3/.h3` |
| `1.23em` | ~15px | `.rex-font-header-3`, `.rex-font-body-1` |
| `1.08em` | ~13px | `.rex-font-header-4`, `.rex-font-body-2`, `.mat-step-label` |
| `1em` | 12px | `h4/.h4`, `.dropdown_label`, `.db_minicard_title` |
| `0.94em` | ~11px | `h5/.h5` |
| `0.92em` | ~11px | `.rex-font-header-5`, `.rex-font-caption` |
| `0.875em` | ~10.5px | `h6/.h6`, `.body-1` |
| `0.78em` | ~9px | `.overline` |
| `0.77em` | ~9px | `.rex-font-overline` |
| `0.75em` | 9px | `.body-2` |
| `0.625em` | 7.5px | `.body-3` |

---

## File Reference Summary

| File | Typography Classes Defined | Lines |
|------|---------------------------|-------|
| `variables.scss` | Font size maps (source data) | 30-60 |
| `_global.scss` | h1-h6, .h1-.h6, .body-1-3, .overline, .rex-font-*, .h4-font, .label-ellipsis | 126-231 |
| `common-utility.scss` | .font-normal, .font-italic, .font-thin, .font-light, .font-regular, .font-medium, .font-bold | 3-23 |
| `core-mixin.scss` | .dashboard_heading, .dropdown_label, .db_*, .sub_* (component-specific) | 113-152 |
| `scss/components/_stepper.scss` | .mat-step-label | 32 |

---

## Best Practices

1. **Use Standard Classes First**: Prefer `.h1`-`.h6` and `.body-1`-`.body-3` for consistency
2. **Combine Utilities**: Use `.rex-font-*` with `.font-bold` or `.font-medium` for custom combinations
3. **Avoid Component Classes**: Don't use `.db_*` classes outside dashboard contexts
4. **Maintain Hierarchy**: Follow the size hierarchy for proper visual hierarchy
5. **Use CSS Variables**: Colors use `var(--grayColor800)`, `var(--grayColor600)`, etc. for theme consistency

---

## Related Documentation

- `EM_VALUE_DEFINITIONS.md` - Understanding em to px conversions
- `THEME_BLACK_CLASSES_SUMMARY.md` - Complete theme class reference
- `ENTRIBE_CORE_ANALYSIS.md` - DOM analysis and optimization recommendations

---

*Generated from analysis of @entribe theme SCSS files*
