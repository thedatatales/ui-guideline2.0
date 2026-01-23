# View System (vw-) Migration Roadmap

This document tracks the migration plan from legacy classes to the new standardized `vw-` (view) class system.

## Overview

The `vw-` class system is designed to:
- Replace duplicated legacy classes
- Provide consistent styling across the application
- Support card-based layouts (primary display structure)
- Enable gradual migration without breaking existing functionality

## Current Status

### ✅ Phase 1: Card Structure & Typography (COMPLETED)
- [x] Page and section structure classes
- [x] Card block system with variants
- [x] Card typography classes
- [x] Chip component with variants
- [x] Section component migration (tabs)

**File:** `sample-app-pages/css-updatre-v1.2.scss`

## Upcoming Phases

### 🔄 Phase 2: Color Palette Integration (IN PROGRESS)
**Status:** Waiting for color palette finalization

**Tasks:**
- [ ] Finalize color palette variables
- [ ] Update `vw-` classes to use CSS variables instead of hardcoded colors
- [ ] Update legacy `common-*` chip classes to use same variables
- [ ] Ensure visual consistency between new and old classes

**Dependencies:**
- Color palette design system completion

---

### 📋 Phase 3: Spacing Utilities (PLANNED)
**Status:** Documented for next phase

**Proposed Classes:**

#### Padding Utilities
```scss
/* Card Padding Variants */
.vw-card-padding-none { padding: 0; }
.vw-card-padding-xs { padding: 0.25rem; }
.vw-card-padding-sm { padding: 0.5rem; }
.vw-card-padding-md { padding: 1rem; }
.vw-card-padding-lg { padding: 1.5rem; }
.vw-card-padding-xl { padding: 2rem; }

/* Section Padding Variants */
.vw-section-padding-none { padding: 0; }
.vw-section-padding-sm { padding: 0.75rem; }
.vw-section-padding-md { padding: 1rem; }
.vw-section-padding-lg { padding: 1.5rem; }
.vw-section-padding-xl { padding: 2rem; }
```

#### Gap Utilities
```scss
/* Card Gap Variants */
.vw-card-gap-none { gap: 0; }
.vw-card-gap-xs { gap: 0.25rem; }
.vw-card-gap-sm { gap: 0.5rem; }
.vw-card-gap-md { gap: 1rem; }
.vw-card-gap-lg { gap: 1.5rem; }
```

#### Margin Utilities
```scss
/* Card Margin Variants */
.vw-card-margin-none { margin: 0; }
.vw-card-margin-sm { margin: 0.5rem; }
.vw-card-margin-md { margin: 1rem; }
.vw-card-margin-lg { margin: 1.5rem; }
.vw-card-margin-xl { margin: 2rem; }
```

**Implementation Notes:**
- Utilities should be composable with existing card classes
- Consider responsive variants if needed
- Document usage patterns in guidelines

---

### 🔄 Phase 4: Legacy Class Migration (PLANNED)
**Status:** Waiting for Phase 2 completion

**Tasks:**
- [ ] Create migration guide mapping old classes to new classes
- [ ] Identify all usages of `common-*` chip classes
- [ ] Gradually replace `common-*` classes with `vw-chip--*` variants
- [ ] Remove deprecated classes once migration is complete
- [ ] Update component documentation

**Migration Mapping:**
- `common-red-chip` → `vw-chip--error`
- `common-green-chip` → `vw-chip--success`
- `common-yellow-chip` → `vw-chip--warning`
- `common-blue-chip` → `vw-chip--info`
- `common-disable-chip` → `vw-chip--neutral`
- Additional mappings to be determined based on usage context

---

### 📋 Phase 5: Component Integration (FUTURE)
**Status:** Future consideration

**Potential Additions:**
- Button variants
- Input field utilities
- Grid system classes
- Layout utilities

---

## Migration Strategy

### Gradual Migration Approach
1. **Coexistence**: New and old classes will coexist during migration
2. **Component-by-Component**: Migrate one component/page at a time
3. **Testing**: Verify visual consistency after each migration
4. **Documentation**: Update component guidelines as classes are migrated

### Best Practices
- Always test visual appearance after migration
- Use semantic class names (e.g., `vw-chip--error` not `vw-chip--red`)
- Maintain backward compatibility during transition period
- Document breaking changes clearly

## Notes

- Legacy classes are kept in the SCSS file under "Deprecated / Legacy Classes" section for reference
- Color variables will be integrated once the palette is finalized
- Spacing utilities are documented here for Phase 3 implementation
- All new classes follow the `vw-` prefix convention

## Questions / Decisions Needed

- [ ] Finalize color palette variables structure
- [ ] Determine exact spacing scale values
- [ ] Decide on responsive utility variants
- [ ] Plan component-by-component migration order

---

**Last Updated:** 2026-01-23  
**Maintainer:** UI Guidelines Team
