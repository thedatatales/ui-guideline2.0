# Phase 3: Remaining Components Audit

**Date:** January 24, 2025  
**Purpose:** Documentation-only audit of remaining components  
**Status:** 📋 Documentation - No Migration  
**Scope:** Components not yet migrated in Phase 3

---

## Audit Methodology

**Rules:**
- ✅ Document token usage
- ✅ Classify migration value (Low / Medium / High)
- ✅ Note blockers
- ❌ **Do NOT migrate**
- ❌ **Do NOT make changes**

**Classification Criteria:**
- **High Value:** Frequently used, high visibility, affects many pages
- **Medium Value:** Moderate usage, specific use cases
- **Low Value:** Rarely used, hidden components, low impact

---

## Summary

| Component | Semantic Tokens Found | Migration Value | Blockers | Notes |
|-----------|----------------------|-----------------|----------|-------|
| Button | 9 instances | **High** | None | Icon colors + SCSS link color |
| Menu | 3 instances | **Medium** | None | Icon colors only |
| Tab | 3 instances | **Medium** | None | Icon colors only |
| Chip | 8 instances | **Medium** | None | Icon colors + SCSS text colors |
| Stepper | 6 instances | **Medium** | None | Icon colors only |
| Calendar | 3 instances | **Low** | None | Icon colors only |
| Progress Bar | 8 instances | **Medium** | None | Icon colors + component props |
| Expansion Panel | 5 instances | **Low** | None | Icon colors only |
| Chart | 3 instances | **Low** | None | Icon colors only |
| Grid | 2 instances | **Low** | None | Icon colors only |

**Total:** 45+ semantic token instances across 10 components

---

## Detailed Audits

### 1. Button Component

**Location:** `src/app/guidelines/components/button/`

**Semantic Token Usage:**
- **HTML:** 8 instances of `var(--accentColor500)` in icon `[color]` bindings
- **SCSS:** 1 instance of `var(--accentColor500, #2196f3)` in `.view-code-link`

**Migration Value:** 🟢 **High**
- Frequently used component
- High visibility
- Affects many pages

**Migration Target:**
- Icon colors: `--iconColorInteractive`
- Link color: `--textColorLink` (already in shared styles, but component has override)

**Blockers:** None

**Estimated Effort:** Low (9 replacements, same pattern as Card/Snackbar/Tooltip)

---

### 2. Menu Component

**Location:** `src/app/guidelines/components/menu/`

**Semantic Token Usage:**
- **HTML:** 3 instances of `var(--accentColor500)` in icon `[color]` bindings

**Migration Value:** 🟡 **Medium**
- Moderate usage
- Navigation component
- Affects menu documentation

**Migration Target:**
- Icon colors: `--iconColorInteractive`

**Blockers:** None

**Estimated Effort:** Very Low (3 replacements, same pattern)

---

### 3. Tab Component

**Location:** `src/app/guidelines/components/tab/`

**Semantic Token Usage:**
- **HTML:** 3 instances of `var(--accentColor500)` in icon `[color]` bindings

**Migration Value:** 🟡 **Medium**
- Moderate usage
- Navigation component
- Affects tab documentation

**Migration Target:**
- Icon colors: `--iconColorInteractive`

**Blockers:** None

**Estimated Effort:** Very Low (3 replacements, same pattern)

---

### 4. Chip Component

**Location:** `src/app/guidelines/components/chip/`

**Semantic Token Usage:**
- **HTML:** 5 instances of `var(--accentColor500)` in icon `[color]` bindings
- **SCSS:** 2 instances:
  - `color: var(--accentColor500);` (line 63)
  - `color: var(--grayColor700);` (line 78)
- **TypeScript:** 1 instance in component data: `textColor: 'var(--grayColor700)'`

**Migration Value:** 🟡 **Medium**
- Moderate usage
- Form control component
- Has SCSS and TypeScript usage

**Migration Target:**
- Icon colors: `--iconColorInteractive`
- Link color: `--textColorLink`
- Text color: `--textColorSecondary`

**Blockers:** None

**Estimated Effort:** Low (8 replacements across 3 files)

---

### 5. Stepper Component

**Location:** `src/app/guidelines/components/stepper/`

**Semantic Token Usage:**
- **HTML:** 6 instances of `var(--accentColor500)` in icon `[color]` bindings

**Migration Value:** 🟡 **Medium**
- Moderate usage
- Navigation component
- Multi-step forms

**Migration Target:**
- Icon colors: `--iconColorInteractive`

**Blockers:** None

**Estimated Effort:** Very Low (6 replacements, same pattern)

---

### 6. Calendar Component

**Location:** `src/app/guidelines/components/calendar/`

**Semantic Token Usage:**
- **HTML:** 3 instances of `var(--accentColor500)` in icon `[color]` bindings

**Migration Value:** 🔵 **Low**
- Low usage
- Specific use case
- Limited visibility

**Migration Target:**
- Icon colors: `--iconColorInteractive`

**Blockers:** None

**Estimated Effort:** Very Low (3 replacements, same pattern)

---

### 7. Progress Bar Component

**Location:** `src/app/guidelines/components/progress-bar/`

**Semantic Token Usage:**
- **HTML:** 5 instances of `var(--accentColor500)` in icon `[color]` bindings
- **HTML:** 2 instances in component props:
  - `[outerStrokeColor]="'var(--accentColor500)'"`
  - `[innerStrokeColor]="'var(--grayColor200)'"`
- **TypeScript:** 2 instances in component data:
  - `outerStrokeColor: 'var(--accentColor500)'`
  - `innerStrokeColor: 'var(--grayColor200)'`

**Migration Value:** 🟡 **Medium**
- Moderate usage
- Feedback component
- Has component property usage

**Migration Target:**
- Icon colors: `--iconColorInteractive`
- Stroke colors: Need component-specific Role tokens or General Role tokens

**Blockers:** None (but component props may need Role token support in core)

**Estimated Effort:** Medium (8 replacements, includes component props)

---

### 8. Expansion Panel Component

**Location:** `src/app/guidelines/components/expansion-panel/`

**Semantic Token Usage:**
- **HTML:** 5 instances of `var(--accentColor500)` in icon `[color]` bindings

**Migration Value:** 🔵 **Low**
- Low usage
- Specific use case
- Limited visibility

**Migration Target:**
- Icon colors: `--iconColorInteractive`

**Blockers:** None

**Estimated Effort:** Very Low (5 replacements, same pattern)

---

### 9. Chart Component

**Location:** `src/app/guidelines/components/chart/`

**Semantic Token Usage:**
- **HTML:** 3 instances of `var(--accentColor500)` in icon `[color]` bindings

**Migration Value:** 🔵 **Low**
- Low usage
- Data visualization
- Limited visibility

**Migration Target:**
- Icon colors: `--iconColorInteractive`

**Blockers:** None

**Estimated Effort:** Very Low (3 replacements, same pattern)

---

### 10. Grid Component

**Location:** `src/app/guidelines/components/grid/`

**Semantic Token Usage:**
- **HTML:** 2 instances of `var(--accentColor500)` in icon `[color]` bindings

**Migration Value:** 🔵 **Low**
- Low usage
- Data display
- Limited visibility

**Migration Target:**
- Icon colors: `--iconColorInteractive`

**Blockers:** None

**Estimated Effort:** Very Low (2 replacements, same pattern)

---

## Migration Priority Ranking

### High Priority (Do First)
1. **Button** - High value, 9 instances, frequently used

### Medium Priority (Do Next)
2. **Chip** - Medium value, 8 instances, includes SCSS/TS
3. **Progress Bar** - Medium value, 8 instances, includes component props
4. **Stepper** - Medium value, 6 instances
5. **Menu** - Medium value, 3 instances
6. **Tab** - Medium value, 3 instances

### Low Priority (Optional)
7. **Expansion Panel** - Low value, 5 instances
8. **Calendar** - Low value, 3 instances
9. **Chart** - Low value, 3 instances
10. **Grid** - Low value, 2 instances

---

## Common Patterns

### Pattern 1: Icon Colors (Most Common)
**Found in:** Button, Menu, Tab, Chip, Stepper, Calendar, Progress Bar, Expansion Panel, Chart, Grid

**Current:**
```html
[color]="'var(--accentColor500)'"
```

**Target:**
```html
[color]="'var(--iconColorInteractive, var(--textColorLink, var(--accentColor500)))'"
```

**Effort:** Very Low (same pattern, copy-paste)

---

### Pattern 2: SCSS Link Colors
**Found in:** Button, Chip

**Current:**
```scss
color: var(--accentColor500);
```

**Target:**
```scss
color: var(--textColorLink, var(--accentColor500));
```

**Effort:** Very Low

---

### Pattern 3: SCSS Text Colors
**Found in:** Chip

**Current:**
```scss
color: var(--grayColor700);
```

**Target:**
```scss
color: var(--textColorSecondary, var(--grayColor700));
```

**Effort:** Very Low

---

### Pattern 4: Component Props
**Found in:** Progress Bar, Chip (TypeScript)

**Current:**
```typescript
outerStrokeColor: 'var(--accentColor500)'
innerStrokeColor: 'var(--grayColor200)'
```

**Target:**
```typescript
outerStrokeColor: 'var(--iconColorInteractive, var(--accentColor500))'
innerStrokeColor: 'var(--borderColorLight, var(--grayColor200))'
```

**Effort:** Low (requires checking component prop support)

---

## Estimated Total Effort

| Priority | Components | Total Instances | Estimated Time |
|----------|------------|-----------------|---------------|
| High | 1 | 9 | 10 minutes |
| Medium | 6 | 33 | 45 minutes |
| Low | 4 | 13 | 20 minutes |
| **Total** | **11** | **55** | **~75 minutes** |

---

## Blockers & Dependencies

### No Blockers Identified
- All components use standard patterns
- All target Role tokens exist
- No core library dependencies
- No breaking changes expected

### Dependencies
- **Progress Bar:** Component props may need Role token support (but can use fallback)
- **Chip:** TypeScript data structure (simple string replacement)

---

## Recommendations

### Immediate (If Continuing Phase 3)
1. **Button** - High value, quick win
2. **Chip** - Medium value, includes SCSS/TS examples
3. **Menu/Tab/Stepper** - Batch similar components

### Deferred (Phase 3 Appendix)
- All Low priority components
- Can be done later or in batches

### Future (Phase 4)
- Component prop migrations (Progress Bar stroke colors)
- Core component audits (if needed)

---

## Notes

- **All components follow same patterns** - Makes migration straightforward
- **No complex dependencies** - All are guidelines documentation components
- **Low risk** - All changes are in guidelines app, not core
- **High reusability** - Same patterns can be applied across all

---

## Conclusion

**Status:** ✅ **Ready for Migration** (when Phase 3 continues)

**Risk Level:** 🟢 **Low** - All components use standard patterns

**Migration Complexity:** 🟢 **Low** - Mostly copy-paste replacements

**Recommendation:** 
- Can be done in batches
- Start with High priority (Button)
- Medium priority can be batched
- Low priority can be deferred

**No blockers identified** - All components can be migrated using established patterns.

---

*Last Updated: January 24, 2025*  
*Status: Documentation Complete - Awaiting Migration Decision*
