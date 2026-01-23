# @entribe Themes - Theme Black CSS Classes & Variables Summary

## Overview

This document provides a comprehensive analysis of the `theme-black.scss` file and the CSS classes/variables available through the @entribe theme system. This analysis helps identify what classes are available for use and how they relate to the custom classes found in the DOM dump.

---

## Theme Structure

The `theme-black.scss` file defines three theme variants:

1. **`.theme`** - Light theme (default)
2. **`.theme-neo`** - Neo theme variant
3. **`.dark-theme`** - Dark theme variant

Each theme variant includes:
- Material Design theme configuration
- CSS variable definitions for colors, spacing, and component styles
- Core component theme mixins

---

## CSS Variables Defined

### Color Variables

#### Gray Scale Colors
- `--grayColor10` through `--grayColor1000` (10 shades)
- Available in both light and dark variants via `lighten()` and `darken()` mixins

#### Background Colors
- `--bgColor10` through `--bgColor1000` (10 shades)
- Available in both light and dark variants via `bgLighten()` and `bgDarken()` mixins

#### Application-Specific Colors
- `--menuTextColor`: Menu text color
- `--fixedSideNavBg`: Fixed sidebar background
- `--templateMenuColor`: Template menu color
- `--homeCardBg`: Home card background
- `--inputOutlineBg`: Input outline background
- `--inputOutlineBgHover`: Input outline hover background
- `--inputAttachBg`: Input attachment background
- `--inputAttachBorderColor`: Input attachment border color
- `--suggestionBoxBg`: Suggestion box background
- `--gridHeaderBg`: Grid header background
- `--divBoxShadowColor`: Box shadow color
- `--positiveColor`: Positive value color (#75B057)
- `--negativeColor`: Negative value color (#F34141)
- `--neutralColor`: Neutral value color
- `--parent`: Parent item color
- `--child`: Child item color
- `--questionBg`: Question background color
- `--nstBgColor`: NST background color
- `--appBgColor`: Application background color
- `--nstBorderColor`: NST border color
- `--nstCardBgColor`: NST card background color
- `--menuSelectedIconColor`: Selected menu icon color (#d0f94a)
- `--templateBgColor`: Template background color
- `--sidenavMenuSelectedBgColor`: Side navigation selected menu background
- `--sidenavMenuSelectedTextColor`: Side navigation selected menu text color
- `--sidenavMenuHoverBgColor`: Side navigation menu hover background

---

## CSS Classes Available from Theme System

Based on `_global.scss` and theme variables, the following utility classes are available:

### Typography Classes

#### Heading Classes
- `.h1`, `.h2`, `.h3`, `.h4`, `.h5`, `.h6` - Standard heading styles
  - Font sizes: 1.75em, 1.5em, 1.25em, 1em, 0.94em, 0.875em
  - Font weight: 600 (h1-h4), 500 (h5-h6)
  - Color: `var(--grayColor800)`

#### Body Text Classes
- `.body-1` - Primary body text (0.875em, color: `var(--grayColor800)`)
- `.body-2` - Secondary body text (0.75em, color: `var(--grayColor600)`)
- `.body-3` - Tertiary body text (0.625em, color: `var(--grayColor400)`)
- `.overline` - Overline text (0.78em, color: `var(--grayColor800)`)

#### Font Size Classes (Rex Font System)
- `.rex-font-display-1` through `.rex-font-display-5` - Display font sizes (3.54em to 2.15em)
- `.rex-font-header-1` through `.rex-font-header-5` - Header font sizes (1.85em to 0.92em)
- `.rex-font-lead-body`, `.rex-font-body-1`, `.rex-font-body-2`, `.rex-font-caption`, `.rex-font-overline` - Body font sizes

#### Utility Typography Classes
- `.label-ellipsis` - Text ellipsis utility (white-space: nowrap, text-overflow: ellipsis, overflow: hidden)
- `.h4-font` - H4 font style utility

### Component Classes

#### Material Design Classes
- `.mat-icon` - Material icon base class
- `.mat-icon-no-color` - Material icon without color
- `.mat-divider` - Material divider
- `.mat-divider-vertical` - Vertical divider
- `.mat-mdc-form-field` - Material form field
- `.mat-mdc-icon-button` - Material icon button
- `.mat-mdc-unelevated-button` - Material unelevated button
- `.mat-mdc-calendar-table` - Material calendar table
- `.mat-mdc-menu-panel` - Material menu panel
- `.mat-mdc-tab-header` - Material tab header
- `.mat-mdc-tooltip` - Material tooltip

#### Form Field Classes
- `.mat-form-field-outline` - Form field outline
- `.mat-form-field-appearance-outline` - Outline appearance variant
- `.mat-focused` - Focused form field state
- `.mat-mdc-form-field-infix` - Form field infix

#### Checkbox Classes
- `.mdc-checkbox` - Material checkbox
- `.mat-mdc-checkbox-layout` - Checkbox layout
- `.mat-mdc-checkbox-frame` - Checkbox frame
- `.mat-pseudo-checkbox` - Pseudo checkbox
- `.mat-mdc-pseudo-checkbox-checked` - Checked pseudo checkbox

#### Button Classes
- `.mat-mdc-icon-button` - Icon button (width/height: `var(--buttonIconWidth/Height)`)
- `.mat-mdc-button-base` - Base button class
- `.mat-mdc-button-persistent-ripple` - Button ripple effect

#### Menu Classes
- `.productui-form-menu` - Product UI form menu
- `.generic-menu` - Generic menu
- `.form-select-panel` - Form select panel
- `.form-autocomplete-panel` - Form autocomplete panel
- `.chip-auto-complete` - Chip autocomplete

#### Tab Classes
- `.productui-tab-panel` - Product UI tab panel

#### Calendar/Date Picker Classes
- `.owl-dt-timer` - Date time timer
- `.owl-dt-container` - Date time container
- `.owl-dt-calendar` - Date calendar
- `.owl-dt-calendar-table` - Calendar table

### Layout & Utility Classes

#### Page Layout Classes
- `.page-buttons-controls` - Page button controls
- `.page-content-wrapper` - Page content wrapper
- `.page-body-content` - Page body content
- `.hoveScrollDisplay` - Hover scroll display

#### Modal/Dialog Classes
- `.box-page-modal-wrapper` - Modal wrapper
- `.box-page-modal-body` - Modal body
- `.box-page-modal-header` - Modal header
- `.box-page-modal-footer` - Modal footer
- `.cdk-overlay-pane` - CDK overlay pane

#### Loading Classes
- `.loadingContainer` - Loading container

#### Map Classes (Leaflet)
- `.leaflet-button-control` - Leaflet button control
- `.leaflet-control-layers-toggle` - Layer toggle
- `.leaflet-draw-toolbar` - Draw toolbar
- `.leaflet-container` - Leaflet container
- `.legends` - Map legends
- `.layer-legend` - Layer legend
- `.legendmapicon` - Legend map icon

#### Other Utility Classes
- `.disable-trigger` - Disable trigger
- `.font-bold` - Bold font
- `.highlight-field` - Highlight field
- `.label-sidebar-doc` - Label sidebar document

---

## CSS Variables from `variables.scss` (level4-style)

### Component Radius Variables
- `--appContainerRadius`: 1em
- `--dialogRadius`: 1em
- `--chipRadius`: 1em
- `--queryBuilderRadius`: 1em
- `--iconSelectBoxRadius`: var(--fieldRadius)
- `--cardRadius`: 1.6em

### Field Variables
- `--fieldRadius`: 0.67em
- `--fieldHeight`: 2.9em
- `--fieldLabelGap`: 0.7em
- `--fieldBorderWidth`: 0.084em
- `--fieldHoverBorderWidth`: 0.084em
- `--fieldFocusBorderWidth`: 0.165em
- `--fieldPlaceholderColor`: var(--grayColor400)
- `--fieldLabelColor`: #364153
- `--fieldHoverLabelColor`: var(--accentColor600)
- `--fieldTextColor`: var(--grayColor900)
- `--fieldHoverBorderColor`: var(--accentColor500)
- `--fieldFocusBorderColor`: var(--accentColor500)
- `--fieldMatHintColor`: #6a7282
- `--fieldBorderColor`: var(--grayColor100)
- `--fieldLabelFontWeight`: 500
- `--fieldTextFontWeight`: 500
- `--fieldPlaceholderFontWeight`: 500

### Button Variables
- `--buttonRadius`: var(--fieldRadius)
- `--buttonHeight`: 2.67em
- `--buttonIconWidth`: 2.67em
- `--buttonIconHeight`: 2.67em
- `--buttonPadding`: 0.5em 0.67em

### Chip Variant Colors
- `--chipSuccessBgColor`: #d7f7d9
- `--chipSuccessTextColor`: #0a4d00
- `--chipErrorBgColor`: #ffe8e8
- `--chipErrorTextColor`: #ba0000
- `--chipWarningBgColor`: #fff5c2
- `--chipWarningTextColor`: #7a5900
- `--chipInfoBgColor`: #e6f1ff
- `--chipInfoTextColor`: #004085
- `--chipPurpleBgColor`: #efdffa
- `--chipPurpleTextColor`: #552684
- `--chipOrangeBgColor`: #ffecd8
- `--chipOrangeTextColor`: #824313
- `--chipPinkBgColor`: #ffebf4
- `--chipPinkTextColor`: #750f3d
- `--chipCyanBgColor`: #d9f7fa
- `--chipCyanTextColor`: #00555e
- `--chipNeutralBgColor`: transparent
- `--chipNeutralTextColor`: var(--grayColor700)

### Dropdown Variables
- `--dropdownBorderColor`: var(--fieldBorderColor)
- `--dropdownItemHoverTextColor`: var(--accentColor800)
- `--dropdownItemHoverBgColor`: var(--accentColor50)
- `--dropdownSelectedTextColor`: var(--accentColor500)
- `--dropdownSelectedBgColor`: var(--bgColor50)
- `--dropdownItemTextColor`: var(--grayColor600)
- `--dropDownArrowColor`: var(--grayColor400)

---

## Comparison with DOM Analysis

### Classes Found in DOM but NOT in Theme System

From the DOM analysis, we found **355 custom classes** that are not part of the theme system. Key examples:

#### Card-like Classes (Should use `<bntv-simple-card>`)
- `chart-card`, `chart-card-left`, `chart-card-middle`, `chart-card-right`
- `order-pipeline-card`
- `due-payments-card`
- `pipeline-card-content`

**Recommendation**: Replace with `<bntv-simple-card>` component and use CSS variables:
- `--cardRadius` for border-radius
- `--bgColor10` for background
- `--borderColor` for borders

#### Layout Classes (Should use FlexLayout or CSS Grid)
- `dashboard-content`
- `kpis-grid`
- `pipeline-kpis`
- `due-payments-kpis`

**Recommendation**: Use FlexLayout directives (`fxLayout`, `fxFlex`, `fxLayoutGap`) or CSS Grid with theme spacing

#### Typography Classes (Should use theme typography)
- `chart-title`, `chart-subtitle`
- `pipeline-title`, `pipeline-subtitle`
- `due-payments-title`, `due-payments-subtitle`

**Recommendation**: Use theme classes:
- `.h1`, `.h2`, `.h3` for titles
- `.body-1`, `.body-2` for subtitles
- CSS variables: `var(--grayColor800)` for text color

#### Badge/Chip Classes (Should use `<bntv-chip>`)
- `sla-time-badge`
- `breached-badge`
- `breach-rate-badge`
- `status-badge`
- `credit-status-badge`

**Recommendation**: Use `<bntv-chip>` component with variant colors:
- `--chipSuccessBgColor` / `--chipSuccessTextColor`
- `--chipErrorBgColor` / `--chipErrorTextColor`
- `--chipWarningBgColor` / `--chipWarningTextColor`
- `--chipInfoBgColor` / `--chipInfoTextColor`

#### Legend Classes (Could use theme utilities)
- `legend-item`
- `legend-dot`
- `legend-label`
- `legend-value`

**Recommendation**: Use theme typography classes and CSS variables for colors

---

## Optimization Recommendations

### High Priority

1. **Replace Custom Card Classes**
   - Map `*-card` classes to `<bntv-simple-card>` component
   - Use `--cardRadius` CSS variable instead of hardcoded border-radius
   - Use `--bgColor10` for backgrounds

2. **Consolidate Typography Classes**
   - Replace custom title/subtitle classes with `.h1`, `.h2`, `.h3`, `.body-1`, `.body-2`
   - Use CSS variables for colors: `var(--grayColor800)`, `var(--grayColor600)`

3. **Use Theme Chip Colors**
   - Replace custom badge classes with `<bntv-chip>` component
   - Use predefined chip variant CSS variables

### Medium Priority

4. **Convert Inline Flex Layouts**
   - Replace 434 inline flex layouts with FlexLayout directives
   - Use `fxLayout`, `fxFlex`, `fxLayoutAlign`, `fxLayoutGap`

5. **Use CSS Variables for Colors**
   - Replace hardcoded colors with theme CSS variables
   - Use `--accentColor500`, `--textColor`, `--grayColor600`, etc.

6. **Consolidate Duplicate Styles**
   - Review 440 CSS class definitions in style blocks
   - Merge similar classes that serve the same purpose

### Low Priority

7. **Use Theme Spacing Variables**
   - Replace hardcoded margins/paddings with theme spacing
   - Consider using spacing utility classes if available

8. **Standardize Border Radius**
   - Use `--fieldRadius`, `--cardRadius`, `--dialogRadius` variables
   - Replace hardcoded border-radius values

---

## Available CSS Variables Reference

### Color Variables
```css
/* Gray Scale */
--grayColor10, --grayColor50, --grayColor100, --grayColor200, --grayColor300,
--grayColor400, --grayColor500, --grayColor600, --grayColor700, --grayColor800,
--grayColor900, --grayColor1000

/* Background Colors */
--bgColor10, --bgColor50, --bgColor100, --bgColor200, --bgColor300,
--bgColor400, --bgColor500, --bgColor600, --bgColor700, --bgColor800,
--bgColor900, --bgColor1000

/* Accent Colors */
--accentColor50, --accentColor100, --accentColor200, --accentColor300,
--accentColor400, --accentColor500, --accentColor600, --accentColor700,
--accentColor800, --accentColor900

/* Primary Colors */
--primaryColor500, --primaryColor600, --primaryColor700

/* Warn Colors */
--warnColor600

/* Application Colors */
--menuTextColor, --positiveColor, --negativeColor, --neutralColor
```

### Component Variables
```css
/* Radius */
--fieldRadius, --cardRadius, --dialogRadius, --chipRadius, --queryBuilderRadius

/* Spacing */
--fieldLabelGap, --appContainerGap

/* Sizes */
--fieldHeight, --buttonHeight, --buttonIconWidth, --buttonIconHeight

/* Colors */
--fieldTextColor, --fieldLabelColor, --fieldBorderColor, --fieldHoverBorderColor
--buttonFilledPrimaryBgColor, --buttonFilledAccentBgColor
```

---

## Next Steps

1. **Create Class Mapping Document**: Map each custom class found in DOM to appropriate theme class/component
2. **Refactor Custom Classes**: Replace custom classes with theme classes and components
3. **Update Component Styles**: Use CSS variables instead of hardcoded values
4. **Document Best Practices**: Create guidelines for using theme classes and variables
5. **Review Duplication**: Consolidate duplicate CSS class definitions

---

*Generated from analysis of theme-black.scss and _global.scss files*
