# Style Classes & Theme Mapping

**Date:** January 24, 2025  
**Purpose:** Document which theme uses which style class and verify Phase 2 updates are applied to both

---

## Style Classes Overview

The `variables.scss` file contains **two style class blocks** that define component tokens:

1. **`.level4-style`** (Lines 125-733)
2. **`.template13-style`** (Lines 846-1384)

Both blocks contain the same token definitions but may have different default values for theme-specific styling.

---

## Theme to Style Class Mapping

### Current Application Setup

Based on `index.html`:
```html
<body class='app-body theme theme-black template13-style'>
```

**Mapping:**
- **`theme-black`** → Uses **`.template13-style`** ✓
- **`theme-indigo`** → Likely uses **`.level4-style`**
- **`theme-greenwave`** → Likely uses **`.level4-style`**

### How It Works

1. The `<body>` element has the class `template13-style`
2. CSS variables defined in `.template13-style` are scoped to elements with this class
3. Since `<body>` has `template13-style`, all child elements inherit these variables
4. Theme-specific overrides (from `theme-black.scss`) can override these values

---

## Phase 1 & Phase 2 Updates Status

### ✅ Phase 1: General Role Tokens

**Status:** Applied to both sections

- **`.level4-style`**: Lines 127-235 (General Role Tokens added)
- **`.template13-style`**: Lines 848-956 (General Role Tokens added)

**Tokens Added:**
- Text Colors (10 tokens)
- Icon Colors (8 tokens)
- Border Colors (9 tokens)
- Surface Colors (8 tokens)
- Divider, Shadow, Spacing, Radius, Transition, Focus Ring, Overlay (42 tokens)

**Total:** 77 tokens per section

---

### ✅ Phase 2: Role Token Mapping Updates

**Status:** Applied to both sections

#### Field Tokens (4 tokens)
- **`.level4-style`**: Lines 309-315 ✓
- **`.template13-style`**: Lines 1031-1037 ✓

**Changes:**
- `--fieldLabelColor`: `#364153` → `var(--textColor, var(--grayColor900))`
- `--fieldTextColor`: `var(--grayColor900)` → `var(--textColor, var(--grayColor900))`
- `--fieldMatHintColor`: `#6a7282` → `var(--textColorSecondary, var(--grayColor600))`
- `--fieldBorderColor`: `#eeeeee` → `var(--borderColor, var(--grayColor300))`

#### Snackbar Tokens (12 tokens)
- **`.level4-style`**: Lines 704-753 ✓
- **`.template13-style`**: Lines 1468-1517 ✓

**Changes:**
- Standard snackbar colors → Use semantic tokens
- Solid snackbar colors → Use semantic tokens + `--textColorInverse`

#### Tooltip Tokens (4 tokens)
- **`.level4-style`**: Lines 755-761 ✓
- **`.template13-style`**: Lines 1519-1525 ✓

**Changes:**
- `--tooltipTextColor`: `#ffffff` → `var(--textColorInverse, var(--grayColor10))`
- `--tooltipBgColor`: `#515151` / `#171412` → `var(--grayColor800)`
- `--tooltipColor`: Hardcoded → `var(--textColorInverse)`
- `--tooltipArrowBgColor`: Hardcoded → `var(--tooltipBgColor)`

---

## Verification

### Current State in UIGuidlines2.1

✅ **Both sections updated:**
- `.level4-style` has all Phase 1 & Phase 2 updates
- `.template13-style` has all Phase 1 & Phase 2 updates

✅ **Token consistency:**
- Field tokens: Both use Role tokens
- Snackbar tokens: Both use semantic tokens
- Tooltip tokens: Both use Role tokens

---

## Important Notes

1. **Theme-black uses `template13-style`**
   - Since the body has `class="template13-style"`, all tokens from this section are active
   - This is why the guidelines app is using theme-black styling

2. **Both sections must be kept in sync**
   - Any changes to component tokens should be applied to both sections
   - This ensures theme switching works correctly

3. **Theme-specific overrides**
   - Theme packages (theme-black, theme-indigo, theme-greenwave) can override these base values
   - The style class provides the foundation, themes provide the color values

---

## Testing Recommendations

To verify theme switching works:

1. **Check current theme:**
   ```javascript
   localStorage.getItem("theme")  // Should return "theme-black"
   document.body.className  // Should include "theme-black" and "template13-style"
   ```

2. **Test token resolution:**
   ```javascript
   getComputedStyle(document.body).getPropertyValue('--fieldBorderColor')
   getComputedStyle(document.body).getPropertyValue('--textColor')
   ```

3. **Verify both style classes:**
   - Both `.level4-style` and `.template13-style` should have identical token structures
   - Only default values may differ for theme-specific styling

---

## Summary

- ✅ **Phase 1 complete**: General Role tokens added to both sections
- ✅ **Phase 2 complete**: Field, Snackbar, Tooltip tokens updated in both sections
- ✅ **Theme mapping**: `theme-black` uses `template13-style` (confirmed via index.html)
- ✅ **Consistency**: Both style classes are synchronized

All updates have been applied correctly to both `.level4-style` and `.template13-style` sections.
