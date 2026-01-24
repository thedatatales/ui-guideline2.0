# Card Component Migration Review

**Date:** January 24, 2025  
**Component:** `src/app/guidelines/components/card/`  
**Status:** 🔍 Ready for Migration

---

## Component Overview

The Card component is a documentation page that demonstrates the `<bntv-simple-card>` component from `@enttribe/core`. It showcases different card variants (basic, with header, with shadow, custom padding).

### Component Structure

```
card/
├── card.component.ts      # Component logic (code snippets, clipboard)
├── card.component.html    # Template with demos and documentation
└── card.component.scss    # Minimal styling (uses shared styles)
```

---

## Current State Analysis

### ✅ Already Migrated

1. **Shared Styles** (`_shared-styles.scss`)
   - `.view-code-link` uses `var(--textColorLink, var(--accentColor500, #1976d2))` ✅
   - All shared styles are already using Role tokens

2. **SCSS File** (`card.component.scss`)
   - **Status:** ✅ Clean - No semantic token usage
   - Only contains layout styles (padding, flexbox)
   - Uses `@use '../shared-styles' as *;` for shared styles

### ❌ Needs Migration

#### 1. HTML Template (`card.component.html`)

**Issue:** Direct semantic token usage in icon `[color]` bindings

**Locations:**
- Line 40: `[color]="'var(--accentColor500)'"` (Basic section copy icon)
- Line 84: `[color]="'var(--accentColor500)'"` (With Header section copy icon)
- Line 126: `[color]="'var(--accentColor500)'"` (With Shadow section copy icon)
- Line 168: `[color]="'var(--accentColor500)'"` (Custom Padding section copy icon)

**Current Code:**
```html
<bntv-icon
  [iconName]="'Copy-Outline'"
  [type]="'fontset'"
  [fontSet]="'icomoon'"
  [color]="'var(--accentColor500)'"  <!-- ❌ Semantic token -->
  (clickIcon)="copyCode('basic')"
  class="copy-icon"
></bntv-icon>
```

**Recommended Fix:**
```html
<bntv-icon
  [iconName]="'Copy-Outline'"
  [type]="'fontset'"
  [fontSet]="'icomoon'"
  [color]="'var(--iconColorInteractive, var(--textColorLink, var(--accentColor500)))'"  <!-- ✅ Role token -->
  (clickIcon)="copyCode('basic')"
  class="copy-icon"
></bntv-icon>
```

**Rationale:**
- Copy icons are interactive elements
- `--iconColorInteractive` is the appropriate general role token for interactive icons
- Fallback chain: `--iconColorInteractive` → `--textColorLink` → `--accentColor500` (backward compatibility)

---

## Available Role Tokens

### Card-Specific Tokens

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--cardRadius` | Border radius for cards | `1.6em` |

**Note:** The actual `<bntv-simple-card>` component styling is in `@enttribe/core`, not in this guidelines component.

### General Role Tokens (Applicable)

| Token | Purpose | Usage |
|-------|---------|-------|
| `--iconColorInteractive` | Interactive icon color | Copy icons in template |
| `--textColorLink` | Link/interactive text color | Alternative for icons |
| `--textColor` | Primary text color | Headings, titles |
| `--textColorSecondary` | Secondary text color | Subtitles, descriptions |
| `--surfaceColor` | Surface/background color | Card backgrounds |
| `--borderColor` | Default border color | Card borders |

---

## Migration Plan

### Step 1: Update HTML Template

**Action:** Replace all 4 instances of `var(--accentColor500)` with `var(--iconColorInteractive, var(--textColorLink, var(--accentColor500)))`

**Files to Modify:**
- `src/app/guidelines/components/card/card.component.html` (4 replacements)

**Pattern:**
```html
<!-- Before -->
[color]="'var(--accentColor500)'"

<!-- After -->
[color]="'var(--iconColorInteractive, var(--textColorLink, var(--accentColor500)))'"
```

### Step 2: Verify

**Check:**
- ✅ All icon colors use Role tokens
- ✅ Visual appearance unchanged
- ✅ Icons remain interactive and visible
- ✅ Theme switching works correctly

---

## Migration Impact

### Risk Level: 🟢 **Low**

**Reasons:**
1. Only 4 simple replacements in HTML template
2. SCSS file already clean
3. Uses shared styles (already migrated)
4. No complex styling logic
5. Fallback chain ensures backward compatibility

### Expected Changes

- **Visual:** None (same colors, just using Role tokens)
- **Functionality:** None
- **Theme Support:** Improved (icons will respond to theme changes)

---

## Testing Checklist

After migration:

- [ ] Copy icons display correctly in all 4 sections
- [ ] Icon colors match expected theme colors
- [ ] Theme switching works (theme-black, theme-indigo, theme-greenwave)
- [ ] Hover states work correctly
- [ ] No console errors
- [ ] Visual regression test passes

---

## Notes

1. **Component Styling:** The actual `<bntv-simple-card>` component styling is in `@enttribe/core`, not in this guidelines component. This migration only affects the documentation page itself.

2. **Shared Styles:** The component heavily relies on `_shared-styles.scss`, which is already migrated. This makes the Card component migration very straightforward.

3. **Minimal Custom Styling:** The `card.component.scss` file is minimal (only 19 lines), containing only layout styles. No semantic token usage found.

4. **Icon Color Choice:** Using `--iconColorInteractive` is appropriate because:
   - Copy icons are interactive (clickable)
   - They should respond to theme changes
   - They represent an action (copy code)

---

## Summary

**Migration Complexity:** ⭐ Very Low (1/5)  
**Files to Modify:** 1 (HTML template)  
**Replacements Needed:** 4 (all identical pattern)  
**Estimated Time:** 5 minutes

**Ready to Proceed:** ✅ Yes

---

## Next Steps

1. ✅ Review complete
2. ⏳ Awaiting approval to proceed
3. ⏳ Implement migration
4. ⏳ Test and verify
5. ⏳ Update Phase 3 progress
