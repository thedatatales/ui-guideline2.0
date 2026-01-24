# Theme Switching Validation Checklist

**Date:** January 24, 2025  
**Purpose:** Final validation pass for theme compatibility  
**Scope:** theme-black (default) + one alternative theme (theme-indigo or theme-greenwave)

---

## Validation Approach

**Focus Areas:**
1. ✅ Text visibility (readability)
2. ✅ Icon contrast (accessibility)
3. ✅ Surface/background coherence (visual consistency)

**Validation Rule:**
- 📌 **No fixes unless something is clearly broken**
- Document issues only
- Do not make changes during validation

---

## Test Themes

### Primary Theme
- **theme-black** (default for guidelines)

### Alternative Theme
- **theme-indigo** or **theme-greenwave** (choose one)

---

## Validation Checklist

### 1. Text Visibility

#### Overview Page
- [ ] Main title readable
- [ ] Subtitle readable
- [ ] Body text readable
- [ ] Links visible and distinguishable
- [ ] Code blocks readable

#### Typography Page
- [ ] All heading levels readable
- [ ] Body text readable
- [ ] Code examples readable
- [ ] Table text readable

#### Component Pages (Sample 3-5 pages)
- [ ] Section titles readable
- [ ] Descriptions readable
- [ ] Code examples readable
- [ ] Property table text readable

**Test Command:**
```javascript
// In browser console
const textElements = document.querySelectorAll('h1, h2, h3, p, span, td, th');
textElements.forEach(el => {
  const style = window.getComputedStyle(el);
  const bg = style.backgroundColor;
  const color = style.color;
  const contrast = getContrastRatio(color, bg);
  if (contrast < 4.5) console.warn('Low contrast:', el, contrast);
});
```

---

### 2. Icon Contrast

#### Navigation Icons
- [ ] Layer 1 icons visible
- [ ] Layer 2 icons visible
- [ ] Expand/collapse icons visible
- [ ] Toggle icon visible

#### Component Icons
- [ ] Copy icons visible (code blocks)
- [ ] Demo icons visible
- [ ] Action icons visible

**Test Command:**
```javascript
// In browser console
const icons = document.querySelectorAll('bntv-icon');
icons.forEach(icon => {
  const style = window.getComputedStyle(icon);
  const color = style.color;
  const bg = style.backgroundColor || window.getComputedStyle(icon.parentElement).backgroundColor;
  const contrast = getContrastRatio(color, bg);
  if (contrast < 3) console.warn('Low icon contrast:', icon, contrast);
});
```

---

### 3. Surface/Background Coherence

#### Page Backgrounds
- [ ] Main content area background appropriate
- [ ] Demo containers visible
- [ ] Code blocks distinguishable
- [ ] Tables readable

#### Component Backgrounds
- [ ] Card components visible
- [ ] Button backgrounds appropriate
- [ ] Input field backgrounds appropriate
- [ ] Overlay components visible

**Test Command:**
```javascript
// In browser console
const surfaces = document.querySelectorAll('.demo-container, .code-block, .properties-table, bntv-simple-card');
surfaces.forEach(surface => {
  const style = window.getComputedStyle(surface);
  const bg = style.backgroundColor;
  const border = style.borderColor;
  console.log('Surface:', surface.className, 'BG:', bg, 'Border:', border);
});
```

---

## Theme Switching Test

### Test Procedure

1. **Start with theme-black**
   - Navigate to key pages
   - Verify all three focus areas
   - Document any issues

2. **Switch to alternative theme**
   - Update `localStorage.setItem("theme", "theme-indigo")` (or theme-greenwave)
   - Update body class: `document.body.className = 'app-body theme theme-indigo template13-style'`
   - Hard refresh (Ctrl+Shift+R / Cmd+Shift+R)
   - Navigate to same key pages
   - Verify all three focus areas
   - Document any issues

3. **Compare Results**
   - Note any differences
   - Identify theme-specific issues
   - Document only (no fixes)

---

## Key Pages to Test

### High Priority
1. **Overview** (`/guidelines/overview`)
2. **Typography** (`/guidelines/typography`)
3. **Card** (`/guidelines/card`)
4. **Input Fields** (`/guidelines/input-fields`)
5. **Button** (`/guidelines/button`)

### Medium Priority
6. **Snackbar** (`/guidelines/snackbar`)
7. **Tooltip** (`/guidelines/tooltip`)
8. **Menu** (`/guidelines/menu`)
9. **Tab** (`/guidelines/tab`)

---

## Validation Results Template

### Theme: theme-black

#### Text Visibility
- ✅ All text readable
- ⚠️ Issues found: [list if any]

#### Icon Contrast
- ✅ All icons visible
- ⚠️ Issues found: [list if any]

#### Surface/Background Coherence
- ✅ All surfaces appropriate
- ⚠️ Issues found: [list if any]

---

### Theme: [alternative theme]

#### Text Visibility
- ✅ All text readable
- ⚠️ Issues found: [list if any]

#### Icon Contrast
- ✅ All icons visible
- ⚠️ Issues found: [list if any]

#### Surface/Background Coherence
- ✅ All surfaces appropriate
- ⚠️ Issues found: [list if any]

---

## Notes

- This is a **validation pass only** - no fixes
- Document issues for future reference
- Focus on migrated components (Overview, Typography, Card, Snackbar, Tooltip, Input Fields)
- If issues found, note them but do not fix during this pass

---

*Last Updated: January 24, 2025*  
*Status: Ready for Validation*
