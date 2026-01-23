# EM Value Definitions - 12px and 16px Base

## Overview

This document identifies where `em` values are defined as equivalent to **12px** or **16px** in the @entribe theme system. Understanding these definitions is crucial for CSS optimization and maintaining consistent sizing across the application.

---

## Base Font Size Context

The `em` unit is relative to the font-size of the parent element. In the @entribe theme system, the base font-size varies based on screen size and is controlled through responsive media queries.

---

## Key Files and Definitions

### 1. `/lib/mixin.scss` - EM Function Definition

**Location**: `node_modules/@enttribe/themes-gx-theme/src/lib/mixin.scss`

#### Base Definition (Lines 7-16)
```scss
:root {
  --font-size-regular: 1.08em;
}

body {
  font-size: var(--font-size-regular);
}

@function em($pixels) {
  @return math.div($pixels, 13) * 1em;
}
```

**Default Base**: **13px** (for the `em()` function)
- `em(12)` = 12/13em ≈ **0.923em**
- `em(16)` = 16/13em ≈ **1.23em**

#### Responsive Media Queries

The `em()` function changes based on screen width:

##### Screen < 50em (Lines 143-150)
```scss
@media screen and (max-width: 50em) {
  :root {
    --font-size-regular: 1em;
  }
  @function em($pixels) {
    @return math.div($pixels, 8) * 1em;  /* Base: 8px */
  }
}
```
- `em(12)` = 12/8em = **1.5em**
- `em(16)` = 16/8em = **2em**

##### Screen 50.08em - 67em (Lines 151-158)
```scss
@media screen and (min-width: 50.08em) and (max-width: 67em) {
  :root {
    --font-size-regular: 1.08em;
  }
  @function em($pixels) {
    @return math.div($pixels, 9) * 1em;  /* Base: 9px */
  }
}
```
- `em(12)` = 12/9em = **1.33em**
- `em(16)` = 16/9em = **1.78em**

##### Screen 66.72em - 83em (Lines 159-166)
```scss
@media screen and (min-width: 66.72em) and (max-width: 83em) {
  :root {
    --font-size-regular: 0.83em;
  }
  @function em($pixels) {
    @return math.div($pixels, 10) * 1em;  /* Base: 10px */
  }
}
```
- `em(12)` = 12/10em = **1.2em**
- `em(16)` = 16/10em = **1.6em**

##### Screen 91.71em - 98.3em (Lines 167-174)
```scss
@media screen and (min-width: 91.71em) and (max-width: 98.3em) {
  :root {
    --font-size-regular: 0.92em;
  }
  @function em($pixels) {
    @return math.div($pixels, 11) * 1em;  /* Base: 11px */
  }
}
```
- `em(12)` = 12/11em = **1.09em**
- `em(16)` = 16/11em = **1.45em**

##### Screen 98.38em - 108em (Lines 175-182)
```scss
@media screen and (min-width: 98.38em) and (max-width: 108em) {
  :root {
    --font-size-regular: 1em;
  }
  @function em($pixels) {
    @return math.div($pixels, 12) * 1em;  /* Base: 12px */
  }
}
```
- `em(12)` = 12/12em = **1em** ✅ (12px base)
- `em(16)` = 16/12em = **1.33em**

##### Screen > 108.38em (Lines 183-190)
```scss
@media screen and (min-width: 108.38em ) {
  :root {
    --font-size-regular: 1.08em;
  }
  @function em($pixels) {
    @return math.div($pixels, 9) * 1em;  /* Base: 9px */
  }
}
```
- `em(12)` = 12/9em = **1.33em**
- `em(16)` = 16/9em = **1.78em**

---

### 2. `/lib/core-mixin.scss` - Direct EM to PX Mappings

**Location**: `node_modules/@enttribe/themes-gx-theme/src/lib/core-mixin.scss`

This file contains explicit comments showing where `1em = 12px` and `1.34em = 16px`:

#### 12px Equivalents (1em = 12px)

**Line 118**: `.dropdown_label`
```scss
.dropdown_label {
  font-size: 1em;  /* 12px */
  font-weight: 400;
}
```

**Line 146**: `.db_minicard_title`
```scss
.db_minicard_title {
  font-size: 1em;   /* 12px */
  font-weight: 400;
}
```

**Line 157**: `.common-red-chip`
```scss
.common-red-chip {
  color: #F34141;
  background-color: #FFE9E9;
  font-size: 1em;  /* 12px implied */
  border-radius: 1em;
}
```

#### 16px Equivalents (1.34em = 16px)

**Line 134**: `.db_childcard-title`
```scss
.db_childcard-title {
  font-size: 1.34em;  /* 16px */
  font-weight: 500;
}
```

**Line 138**: `.sub_card_heading`
```scss
.sub_card_heading {
  font-size: 1.34em;  /* 16px */
  font-weight: 500;
}
```

**Line 142**: `.db_minicard_heading`
```scss
.db_minicard_heading {
  font-size: 1.34em;  /* 16px */
  font-weight: 500;
}
```

**Line 150**: `.db_mini_value`
```scss
.db_mini_value {
  font-size: 1.34em;   /* 16px */
  font-weight: 500;
}
```

#### Calculation Verification

If `1.34em = 16px`, then:
- `1em = 16px / 1.34 ≈ 11.94px ≈ 12px` ✅

This confirms that in the context where these classes are used, **1em = 12px**.

---

### 3. `/lib/common-utility.scss` - Utility Classes Using em()

**Location**: `node_modules/@enttribe/themes-gx-theme/src/lib/common-utility.scss`

**Lines 59-75**: Dynamic padding and margin utilities

```scss
$paddingSizes: (0, 1, 2, 4, 5, 6, 8, 10, 12, 14, 16, 20, 24, 32, 48, 64, 128);

@mixin dynamicUnit($dimensions, $range: 100) {
  @each $dimension in $dimensions {
    @each $i in $paddingSizes {
      .#{$dimension}-#{$i} {
        #{$dimension}: em($i);
      }
    }
  }
}

@include dynamicUnit(
  (padding, padding-right, padding-left, padding-top, padding-bottom)
);
@include dynamicUnit(
  (margin, margin-right, margin-left, margin-top, margin-bottom)
);
```

**Generated Classes**:
- `.padding-12` = `padding: em(12)` = **0.923em** (with 13px base) or **1em** (with 12px base)
- `.padding-16` = `padding: em(16)` = **1.23em** (with 13px base) or **1.33em** (with 12px base)
- `.margin-12` = `margin: em(12)`
- `.margin-16` = `margin: em(16)`

---

## Component-Specific EM Values

### `/lib/scss/components/_stepper.scss`

**Line 32**: `.mat-step-label`
```scss
.mat-step-label {
  font-size: 1.08em !important;  /* ≈ 13px with 12px base */
}
```

### `/lib/scss/components/_window.scss`

**Line 7**: `.window-dialog-header`
```scss
.window-dialog-header {
  padding: 0 0 0 1.23em !important;  /* ≈ 14.76px with 12px base */
}
```

---

## Summary Table: EM to PX Conversions

### When Base = 12px (Screen 98.38em - 108em)

| EM Value | PX Equivalent | Usage |
|----------|---------------|-------|
| `1em` | **12px** | `.dropdown_label`, `.db_minicard_title` |
| `1.08em` | **12.96px** ≈ 13px | `.mat-step-label` |
| `1.23em` | **14.76px** ≈ 15px | Window dialog header padding |
| `1.34em` | **16.08px** ≈ **16px** | `.db_childcard-title`, `.sub_card_heading`, `.db_minicard_heading`, `.db_mini_value` |
| `1.539em` | **18.47px** ≈ 18px | `.db_cardheading` |
| `2.33em` | **27.96px** ≈ 28px | `.db_card_LGvalue` |

### When Base = 13px (Default)

| EM Value | PX Equivalent | Usage |
|----------|---------------|-------|
| `1em` | **13px** | Base font size |
| `em(12)` | **0.923em** ≈ **12px** | Utility padding/margin-12 |
| `em(16)` | **1.23em** ≈ **16px** | Utility padding/margin-16 |

---

## Key Findings

1. **Primary Base**: The default base font-size is **13px**, but it changes responsively
2. **12px Base**: Used in screen range **98.38em - 108em** (approximately 1180px - 1296px)
3. **Direct Mappings**: Several classes explicitly use `1em = 12px` and `1.34em = 16px`
4. **Responsive Scaling**: The `em()` function adapts based on screen size for better responsiveness

---

## Recommendations

### For CSS Optimization

1. **Use CSS Variables**: Instead of hardcoding `1em` or `1.34em`, use:
   - `var(--font-size-regular)` for base font size
   - Theme typography classes (`.h1`, `.h2`, `.body-1`, `.body-2`) instead of custom em values

2. **Consistent Sizing**: When you need 12px or 16px:
   - **12px**: Use `1em` (when base is 12px) or `em(12)` utility class
   - **16px**: Use `1.34em` (when base is 12px) or `em(16)` utility class

3. **Avoid Hardcoding**: Don't hardcode `12px` or `16px` directly. Instead:
   - Use the `em()` function: `em(12)` or `em(16)`
   - Use utility classes: `.padding-12`, `.padding-16`, `.margin-12`, `.margin-16`
   - Use theme typography classes for text sizes

4. **Document Context**: When using em values, document which base size context you're assuming (12px, 13px, etc.)

---

## Related Files

- `mixin.scss` - EM function definitions and responsive breakpoints
- `core-mixin.scss` - Component-specific em values with px comments
- `common-utility.scss` - Utility classes using em() function
- `variables.scss` - CSS variable definitions
- `_global.scss` - Global styles and typography

---

*Generated from analysis of @entribe theme SCSS files*
