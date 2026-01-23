# Class Mapping Guide: DOM to Entribe Classes

This document helps map classes from captured DOM to actual entribe component classes.

## Common Mappings

### Card Components
- `.card` → Use `<bntv-simple-card>` component with `[boxShadow]="true"`
- `.stat-card` → Use `<bntv-simple-card>` component
- `.card-header` → Use `card-title` and `card-subtitle` selectors in `bntv-simple-card`
- `.card-title` → Use `card-title` selector
- `.card-content` → Use `card-content` selector

### Grid/Table Components  
- `.table` → Use `<bntv-gx-ag-grid>` for data tables
- Table rows/cells → Map to ag-grid columnDefs

### Badge/Chip Components
- `.badge` → Use `<bntv-chip>` component
- `.badge-success` → Use chip with appropriate styling
- `.badge-warning` → Use chip with warning theme
- `.badge-info` → Use chip with info theme
- `.badge-danger` → Use chip with danger theme

### Layout Classes
- `.dashboard-container` → Use flex layout or grid
- `.stats-grid` → Use CSS Grid or FlexLayout `fxLayout="row wrap"`
- `.content-grid` → Use CSS Grid or FlexLayout

### Typography
- `.dashboard-title` → Use standard heading with theme colors
- `.dashboard-subtitle` → Use paragraph with `var(--grayColor600)`
- `.stat-label` → Use small text with uppercase transform
- `.stat-value` → Use large font-weight: 600

## CSS Variables Available

### Colors
- `--bgColor10` - Background white
- `--bgColor50` - Background light gray
- `--textColor` - Primary text color
- `--grayColor600` - Secondary text
- `--grayColor700` - Tertiary text
- `--borderColor` - Border color
- `--accentColor500` - Accent/primary color
- `--successColor` - Success green
- `--warningColor` - Warning amber
- `--dangerColor` - Danger red
- `--infoColor` - Info blue

### Spacing
- Use theme spacing variables or standard values (8px, 16px, 24px, 32px)

## Steps to Map Your DOM

1. **Identify Component Patterns**: Look for card-like structures, tables, lists, etc.
2. **Map to Entribe Components**: Replace HTML elements with entribe components
3. **Map CSS Classes**: Replace custom classes with entribe classes or CSS variables
4. **Keep Inline Styles**: Preserve inline styles as-is for custom styling
5. **Test Rendering**: Verify the mapped HTML renders correctly with theme

## Example Mapping

**Before (Custom DOM):**
```html
<div class="card">
  <div class="card-header">
    <h2 class="card-title">Title</h2>
  </div>
  <div class="card-content">
    Content here
  </div>
</div>
```

**After (Entribe Classes):**
```html
<bntv-simple-card [boxShadow]="true" [isHeader]="true">
  <div card-title>Title</div>
  <div card-content>
    Content here
  </div>
</bntv-simple-card>
```
