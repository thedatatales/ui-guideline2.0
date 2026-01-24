# Phase 3: Component Migration Plan

**Date:** January 24, 2025  
**Status:** 🚀 In Progress  
**Goal:** Migrate components to use Role tokens instead of Semantic tokens directly

---

## Migration Strategy

### Recommended Order (High Impact, Low Risk)

1. ✅ **Field Components** - Tokens already fixed in Phase 2
2. ⏳ **Snackbar Component** - Tokens already fixed in Phase 2
3. ⏳ **Tooltip Component** - Tokens already fixed in Phase 2
4. ⏳ **Divider / Card Components** - Use General Role tokens
5. ⏳ **Chip Components** - Optional, can be done later

---

## Migration Pattern (Locked In)

### ❌ Before (Direct Semantic Token Usage)
```scss
.my-component {
  color: var(--grayColor700);
  border-color: var(--grayColor300);
  background: var(--accentColor500);
}
```

### ✅ After (Role Token Usage)
```scss
.my-component {
  color: var(--fieldTextColor);        // Component-specific role token
  border-color: var(--fieldBorderColor); // Component-specific role token
  background: var(--buttonFilledAccentBgColor); // Component-specific role token
}
```

### ✅ Alternative (General Role Token When Appropriate)
```scss
.my-component {
  color: var(--textColor);              // General role token
  border-color: var(--borderColor);     // General role token
  background: var(--surfaceColor);      // General role token
}
```

### Rules
- ✅ **Use Role tokens** (component-specific or general)
- ❌ **No direct Semantic tokens** (`--grayColor700`, `--accentColor500`, etc.)
- ❌ **No Primitives** (`--vw-color-*`)
- ❌ **No hardcoded values** (`#ffffff`, `rgb(...)`, etc.)

---

## Migration Checklist

For each component:

- [ ] Identify all Semantic token usages
- [ ] Map to appropriate Role tokens
- [ ] Update component SCSS file
- [ ] Test with theme-black
- [ ] Test with theme-indigo
- [ ] Test with theme-greenwave
- [ ] Verify visual consistency
- [ ] Document changes

---

## Component Locations

### Field Components
- `src/app/guidelines/components/input-fields/input-fields.component.scss`
- `src/app/guidelines/components/affix-input/affix-input.component.scss`
- `src/app/guidelines/components/currency-input/currency-input.component.scss`
- `src/app/guidelines/components/date-picker/date-picker.component.scss`
- `src/app/guidelines/components/auto-complete/auto-complete.component.scss`
- `src/app/guidelines/components/dynamic-select/dynamic-select.component.scss`

### Snackbar Component
- `src/app/guidelines/components/snackbar/snackbar.component.scss`

### Tooltip Component
- `src/app/guidelines/components/tooltip/tooltip.component.scss`

### Card Component
- `src/app/guidelines/components/card/card.component.scss`

### Divider
- Check in shared styles or component files

---

## Success Criteria

1. ✅ All components use Role tokens
2. ✅ No direct Semantic token usage in component SCSS
3. ✅ Theme switching works correctly
4. ✅ Visual consistency maintained
5. ✅ No regression in appearance

---

## What Phase 3 Unlocks

Once Phase 3 is complete:

- ✅ Theme changes will propagate visibly
- ✅ Token discipline becomes enforceable
- ✅ Can introduce lint rules
- ✅ Can create codemods
- ✅ Can run automated audits

---

## Notes

- Start with Field components (tokens already fixed in Phase 2)
- Build confidence with small, low-risk changes
- Keep regression surface small
- Test thoroughly with multiple themes
