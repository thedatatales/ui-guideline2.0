# @entribe/Core Class Analysis Report

## Executive Summary

This report analyzes class usage in the Order Management dashboard DOM dump to identify:
- Class duplication and redundancy
- Opportunities to use @entribe/core components
- Inline styles that should be converted to classes
- CSS optimization opportunities

---

## Class Statistics

### Total Classes Found
- **Unique classes**: 487
- **Total class instances**: 4868
- **Entribe classes**: 1
- **Custom classes**: 355
- **Angular classes**: 8
- **Material classes**: 73

### Class Breakdown by Category

#### Entribe Component Classes (1)
- `bntv-mat-button`: 16 occurrences

#### Custom Application Classes (355)
Top 50 most used custom classes:
- `icomoon`: 276 occurrences
- `root-modules`: 168 occurrences
- `parent`: 162 occurrences
- `ongrouping`: 160 occurrences
- `child`: 160 occurrences
- `ongrouping-advance`: 160 occurrences
- `grouping-advance-custom-icon`: 160 occurrences
- `grouping-advance-custom-label`: 160 occurrences
- `custom-description`: 160 occurrences
- `notranslate`: 94 occurrences
- `icon-hover`: 94 occurrences
- `clock-bold`: 50 occurrences
- `appsheading`: 20 occurrences
- `appScroll`: 20 occurrences
- `legend-item`: 20 occurrences
- `legend-dot`: 20 occurrences
- `legend-label`: 20 occurrences
- `legend-value`: 20 occurrences
- `order-name-cell`: 20 occurrences
- `order-name`: 20 occurrences
- `sla-time-badge`: 20 occurrences
- `breached-badge`: 20 occurrences
- `severity-critical`: 20 occurrences
- `breach-rate-badge`: 20 occurrences
- `status-badge`: 20 occurrences
- `status-dot`: 20 occurrences
- `customer-column`: 20 occurrences
- `customer-cell`: 20 occurrences
- `customer-avatar`: 20 occurrences
- `customer-name`: 20 occurrences
- `credit-status-badge`: 20 occurrences
- `app-loading-subscription-container`: 16 occurrences
- `app-loading-subscription-wrapper`: 16 occurrences
- `app-loading-subscription-spinner`: 16 occurrences
- `severity-moderate`: 16 occurrences
- `status-within`: 14 occurrences
- `check-circle-bold`: 14 occurrences
- `sadeNav-menu`: 10 occurrences
- `noMargin`: 10 occurrences
- `mdc-button`: 10 occurrences
- `mdc-button--unelevated`: 10 occurrences
- `mdc-button__ripple`: 10 occurrences
- `mdc-button__label`: 10 occurrences
- `margin`: 10 occurrences
- `chart-card`: 10 occurrences
- `chart-header`: 10 occurrences
- `chart-title`: 10 occurrences
- `sadeNav-menu-item`: 8 occurrences
- `sadeNav-menu-item-text`: 8 occurrences
- `overflow-ellipsis`: 8 occurrences

---

## Inline Style Analysis

### Patterns Found
- **Flex layouts**: 434 instances
- **Color values**: 13 instances  
- **Background colors**: 9 instances
- **Margins**: 98 instances
- **Paddings**: 6 instances
- **Width/Height**: 190 instances
- **Font sizes**: 6 instances
- **Border radius**: 86 instances
- **Box shadows**: 1 instances

---

## CSS Class Definitions Found

Found **440** CSS class definitions in `<style>` blocks.

### Sample Custom CSS Classes

#### `.import-map-overrides-full`
```css
.import-map-overrides-full {
  display: none;...
}
```

#### `.loading-text-style`
```css
.loading-text-style {
  position: absolute;
        left: 50%;
        margin-top: 2%;
        transform: translate(-50%, -50%);...
}
```

#### `.font-style`
```css
.font-style {
  font-size: 1.54em !important;
        font-weight: 500;
        color: #3036ee;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);...
}
```

#### `.display-none`
```css
.display-none {
  display: none;...
}
```

#### `.background-image`
```css
.background-image {
  background-color: #fff;
        background-size: cover;...
}
```

#### `.full-size`
```css
.full-size {
  height: 100%;
        width: 100%;...
}
```

#### `.full-size-with-img`
```css
.full-size-with-img {
  display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;...
}
```

#### `.initialization-failed-img`
```css
.initialization-failed-img {
  max-width: 100%;
        display: block;
        margin: auto;...
}
```

#### `.spinner-loader`
```css
.spinner-loader {
  width: 8vmax;
        height: 8vmax;
        border-right: 0.33em solid #5d64f5;
        border-radius: 100%;
        animation: spinRight 800ms linear infinite;...
}
```

#### `.errorpage_background`
```css
.errorpage_background {
  position: absolute;
        transform: scale(0.7);...
}
```

#### `.gx-error-container-template`
```css
.gx-error-container-template {
  height: 100%;
        display: flex;
        align-items: center;
        place-content: center;
        flex-direction: column;
        position: relative;

        .error-title-text {
          marg...
}
```

#### `.error-subtitle-text`
```css
.error-subtitle-text {
  font-size: 0.6em;
          line-height: 1.58em;
          text-align: center;
          color: gray;
          font-weight: 400;...
}
```

#### `.error-icon-template`
```css
.error-icon-template {
  color: black;
        place-content: center;
        align-items: center;
        display: flex;
        font-size: 1.2em;
        padding: 0.5em;
        border: 0.03em solid gray;
        height: 1....
}
```

#### `.app-container-template`
```css
.app-container-template {
  position: relative;
          z-index: 100;...
}
```

#### `.error-icon-app-template`
```css
.error-icon-app-template {
  place-content: center;
          align-items: center;
          display: flex;...
}
```

#### `.loadingContainer`
```css
.loadingContainer {
  display:flex;justify-content:center;align-items:center;height:100vh;width:100vw;overflow:hidden;animation-delay:1s...
}
```

#### `.icomoon`
```css
.icomoon {
  font-family:"icomoon" !important;speak:never;font-style:normal;font-weight:normal;font-variant:normal;text-transform:none;line-height:1;letter-spacing:0;-ms-font-feature-settings:"liga" 1;font-feature...
}
```

#### `.imo-unstyled`
```css
.imo-unstyled {
  border: none;
  padding: 0;
  width: auto;
  overflow: visible;
  background: transparent;
  color: inherit;
  font: inherit;
  line-height: normal;
  cursor: pointer;
  -webkit-font-smoothing: inheri...
}
```

#### `.imo-trigger`
```css
.imo-trigger {
  position: fixed;
  bottom: 0;
  right: 0;
  margin: 10px;
  border-radius: 5px;
  background-color: navajowhite;
  height: 50px;
  width: 50px;
  display: flex;
  justify-content: center;
  align-item...
}
```

#### `.imo-popup`
```css
.imo-popup {
  box-sizing: border-box;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50%;
  z-index: 10000;
  background-color: black;
  color: white;
  font-family: sans-serif;
  padding: 24px...
}
```

---

## Duplication Analysis

### Classes with Similar Prefixes (Potential Duplication)

#### `toolbar-*` (10 classes)
- `toolbar-nav`
- `toolbar-nav-breadcrumb`
- `toolbar-nav-breadcrumb-heading`
- `toolbar-nav-breadcrumb-title`
- `toolbar-search`
- `toolbar-search-tools`
- `toolbar-search-form`
- `toolbar-search-form-input`
- `toolbar-search-form-input-search`
- `toolbar-search-form-input-search-chiplist`

#### `app-*` (9 classes)
- `app-name`
- `app-loading-subscription-container`
- `app-loading-subscription-wrapper`
- `app-loading-subscription-spinner`
- `app-container-gap`
- `app-menu-container`
- `app-menu`
- `app-router-container`
- `app-container-routlet`

#### `mdc-*` (15 classes)
- `mdc-text-field`
- `mdc-text-field--filled`
- `mdc-text-field--no-label`
- `mdc-evolution-chip-set`
- `mdc-evolution-chip-set__chips`
- `mdc-text-field__input`
- `mdc-line-ripple`
- `mdc-line-ripple--deactivating`
- `mdc-icon-button`
- `mdc-icon-button__ripple`
- *... and 5 more*

#### `input-*` (5 classes)
- `input-box`
- `input-search`
- `input-box-core`
- `input-field-parent`
- `input-form-field`

#### `sadeNav-*` (4 classes)
- `sadeNav-menu`
- `sadeNav-menu-item`
- `sadeNav-menu-item-text`
- `sadeNav-menu-item-rightMark`

#### `order-*` (5 classes)
- `order-management-root`
- `order-pipeline-card`
- `order-name-cell`
- `order-name`
- `order-distribution-chart-container`

#### `pipeline-*` (16 classes)
- `pipeline-card-content`
- `pipeline-header`
- `pipeline-title`
- `pipeline-subtitle`
- `pipeline-kpis`
- `pipeline-kpi-row`
- `pipeline-kpi-header`
- `pipeline-icon-bg`
- `pipeline-kpi-label`
- `pipeline-kpi-count`
- *... and 6 more*

#### `due-*` (25 classes)
- `due-payments-card`
- `due-payments-content`
- `due-payments-header`
- `due-payments-title`
- `due-payments-subtitle`
- `due-payments-total`
- `due-payments-total-label`
- `due-payments-total-value`
- `due-payments-total-count`
- `due-payments-kpis`
- *... and 15 more*

#### `chart-*` (8 classes)
- `chart-card`
- `chart-card-left`
- `chart-header`
- `chart-title`
- `chart-subtitle`
- `chart-card-middle`
- `chart-card-right`
- `chart-legend`

#### `legend-*` (4 classes)
- `legend-item`
- `legend-dot`
- `legend-label`
- `legend-value`

---

## Optimization Recommendations


### Inline To Class - Priority: MEDIUM

**Issue**: 434 inline flex layouts found

**Recommendation**: Consider using FlexLayout directives (fxLayout) or CSS utility classes

---

### Class Consolidation - Priority: HIGH

**Issue**: 355 custom classes found

**Recommendation**: Review custom classes and map to entribe components where possible

---

### Duplication - Priority: MEDIUM

**Issue**: 440 CSS class definitions found in style blocks

**Recommendation**: Review for duplicate styles that could be consolidated

---

## Mapping Guide: Custom Classes → Entribe Components

### Card-like Classes
If you see classes like `*-card`, `*-panel`, consider using:
- `<bntv-simple-card>` with appropriate properties
- CSS variables: `--cardRadius`, `--cardPadding`

### Layout Classes  
If you see classes like `*-grid`, `*-container`, consider using:
- FlexLayout directives: `fxLayout`, `fxFlex`, `fxLayoutGap`
- CSS Grid with theme spacing

### Typography Classes
If you see custom font-size/color classes, consider using:
- Theme typography classes: `.h1`, `.h2`, `.body-1`, `.body-2`
- CSS variables: `--textColor`, `--grayColor600`, etc.

### Color Classes
Replace hardcoded colors with CSS variables:
- `--accentColor500` for primary actions
- `--textColor` for main text
- `--grayColor600` for secondary text
- `--borderColor` for borders
- `--bgColor10` for backgrounds

---

## Next Steps

1. **Review Custom Classes**: Identify which custom classes can be replaced with entribe components
2. **Convert Inline Styles**: Move frequently used inline styles to CSS classes or use CSS variables
3. **Consolidate Duplicates**: Merge similar classes that serve the same purpose
4. **Create Utility Classes**: Extract common patterns into reusable utility classes
5. **Document Mappings**: Create a class mapping document for your team

---

*Generated from analysis of om-db-dom file*
