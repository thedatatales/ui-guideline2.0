Analyzing the current system and outlining recommendations to align with the VW Palette → Semantic → Role → Component hierarchy.


[3 tools called]


Recommendations to align with the VW Palette → Semantic → Role → Component hierarchy:

## Strategic recommendations

### 1. Current state assessment

Gaps:
- Components sometimes use Semantic tokens directly (e.g., `var(--grayColor700)`, `var(--accentColor500)`)
- Some Role tokens reference Semantic tokens correctly, but not all components use Role tokens
- Missing Role tokens for common patterns (e.g., general text colors, icon colors)

Strengths:
- Role tokens exist for major components (Button, Field, Chip, etc.)
- Semantic tokens are documented
- Governance charter defines the model

### 2. Migration strategy

#### Phase 1: Complete the Role token layer (priority: high)

Create missing Role tokens for common patterns:

```scss
// In variables.scss - Add missing Role tokens

/* Text Colors (Role Tokens) */
--textColor: var(--vw-color-text-primary, var(--grayColor900, #000000));
--textColorSecondary: var(--vw-color-text-secondary, var(--grayColor600, #757575));
--textColorTertiary: var(--vw-color-text-tertiary, var(--grayColor500, #9e9e9e));
--textColorDisabled: var(--vw-color-text-disabled, var(--grayColor400, #bdbdbd));
--textColorInverse: var(--vw-color-text-inverse, var(--grayColor10, #ffffff));

/* Icon Colors (Role Tokens) */
--iconColor: var(--vw-color-icon-primary, var(--grayColor700, #616161));
--iconColorSecondary: var(--vw-color-icon-secondary, var(--grayColor500, #9e9e9e));
--iconColorDisabled: var(--vw-color-icon-disabled, var(--grayColor400, #bdbdbd));
--iconColorInteractive: var(--vw-color-icon-interactive, var(--primaryColor500, #000000));

/* Border Colors (Role Tokens) */
--borderColor: var(--vw-color-border, var(--grayColor300, #e0e0e0));
--borderColorHover: var(--vw-color-border-hover, var(--grayColor400, #bdbdbd));
--borderColorFocus: var(--vw-color-border-focus, var(--primaryColor500, #000000));
--borderColorError: var(--vw-color-border-error, var(--warnColor500, #F04438));
--borderColorDisabled: var(--vw-color-border-disabled, var(--grayColor200, #eeeeee));

/* Background Colors (Role Tokens) */
--bgColor: var(--vw-color-background, var(--bgColor50, #fafafa));
--surfaceColor: var(--vw-color-surface, var(--bgColor10, #ffffff));
--surfaceColorHover: var(--vw-color-surface-hover, var(--bgColor100, #f5f5f5));
--surfaceColorActive: var(--vw-color-surface-active, var(--bgColor200, #eeeeee));
```

#### Phase 2: Update Role token definitions (priority: high)

Ensure all Role tokens map to Semantic tokens (not Primitives):

```scss
// ✅ GOOD - Role token maps to Semantic token
--fieldBorderColor: var(--borderColor, var(--grayColor300, #e0e0e0));
--fieldTextColor: var(--textColor, var(--grayColor900, #000000));
--buttonFilledPrimaryBgColor: var(--primaryColor500);

// ❌ BAD - Role token maps directly to Primitive
--fieldBorderColor: var(--vw-color-gray-300); // Should use --borderColor or --grayColor300
```

#### Phase 3: Component migration (priority: medium)

Migrate components to use Role tokens:

**Before:**
```scss
.my-component {
  color: var(--grayColor700);           // ❌ Semantic token
  background: var(--accentColor500);    // ❌ Semantic token
  border: 1px solid var(--grayColor300); // ❌ Semantic token
}
```

**After:**
```scss
.my-component {
  color: var(--textColor);                    // ✅ Role token
  background: var(--buttonFilledAccentBgColor); // ✅ Role token (if appropriate)
  border: 1px solid var(--borderColor);      // ✅ Role token
}
```

### 3. Gap analysis and action items

#### Missing Role tokens to create

1. General text tokens (add to `variables.scss`):
   - `--textColor` (primary text)
   - `--textColorSecondary`
   - `--textColorTertiary`
   - `--textColorDisabled`
   - `--textColorInverse`

2. General icon tokens:
   - `--iconColor`
   - `--iconColorSecondary`
   - `--iconColorDisabled`
   - `--iconColorInteractive`

3. General border tokens:
   - `--borderColor` (default)
   - `--borderColorHover`
   - `--borderColorFocus`
   - `--borderColorError`
   - `--borderColorDisabled`

4. General surface tokens:
   - `--surfaceColor`
   - `--surfaceColorHover`
   - `--surfaceColorActive`
   - `--surfaceColorSelected`

### 4. Enforcement mechanisms

#### A. Linting rules (recommended)

Create a Stylelint plugin or use existing rules:

```json
// .stylelintrc.json
{
  "rules": {
    "custom-property-pattern": [
      "^--(field|button|chip|dropdown|toggle|checkbox|radio|slider|upload|snackbar|tooltip|dialog|card|tab|stepper|datePicker|breadcrumb|agGrid|config|splitview|queryBuilder|iconSelectBox|text|icon|border|surface|bg)[A-Z]",
      {
        "message": "Components must use Role tokens (--field*, --button*, --text*, etc.), not Semantic (--primaryColor*, --grayColor*) or Primitive (--vw-color-*) tokens directly"
      }
    ],
    "declaration-property-value-disallowed-list": {
      "/^var\\(--(vw-color-|primaryColor|accentColor|warnColor|grayColor|bgColor)[0-9]/": [
        "/^var\\(--(vw-color-|primaryColor|accentColor|warnColor|grayColor|bgColor)[0-9]/"
      ]
    }
  }
}
```

#### B. Code review checklist

Add to PR template:

```markdown
## Token Usage Checklist
- [ ] Components use Role tokens (--field*, --button*, --text*, etc.)
- [ ] No direct use of Semantic tokens (--primaryColor*, --grayColor*) in components
- [ ] No direct use of Primitive tokens (--vw-color-*) in components
- [ ] Role tokens are defined in variables.scss
- [ ] Role tokens map to Semantic tokens (not Primitives)
```

#### C. Documentation and training

1. Update component style guide with examples
2. Create a migration guide for existing components
3. Add token usage examples to the guidelines app

### 5. Best practices

#### A. Token naming convention

```
Role Token Pattern: --{component}{Property}{State?}
Examples:
  --fieldBorderColor
  --fieldBorderColorHover
  --buttonFilledPrimaryBgColor
  --textColor
  --iconColor
```

#### B. Fallback chain

Always provide fallbacks:

```scss
// ✅ GOOD - Proper fallback chain
color: var(--textColor, var(--grayColor900, #000000));

// ❌ BAD - No fallback
color: var(--textColor);
```

#### C. Theme mapping

Ensure themes map Semantic → Primitive correctly:

```scss
// In theme-black.scss
.theme {
  // Semantic tokens map to Primitives
  --primaryColor500: #000000;  // Maps to VW palette
  --accentColor500: #090909;   // Maps to VW palette
  --grayColor900: #000000;      // Maps to VW palette
}
```

### 6. Step-by-step action plan

#### Week 1-2: Foundation
1. Add missing general Role tokens (`--textColor`, `--iconColor`, `--borderColor`, etc.)
2. Update `variables.scss` with new Role tokens
3. Document new tokens in `ROLE_TOKENS_REFERENCE.md`

#### Week 3-4: Role token audit
1. Audit all Role tokens in `variables.scss`
2. Ensure all map to Semantic tokens (not Primitives)
3. Fix any direct Primitive mappings

#### Week 5-6: Component migration
1. Start with guidelines app components
2. Migrate one component at a time
3. Update component SCSS files to use Role tokens
4. Test with multiple themes

#### Week 7-8: Enforcement
1. Set up Stylelint rules
2. Update PR template with checklist
3. Create migration guide document
4. Train team on new patterns

#### Week 9+: Ongoing
1. Monitor new component PRs
2. Gradually migrate existing components
3. Refine tokens based on usage patterns

### 7. Quick reference guide

Create a visual guide showing the hierarchy:

```
┌─────────────────────────────────────────┐
│  VW Palette (Primitive)                 │
│  --vw-color-blue-500                    │
│  --vw-color-gray-300                    │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  Semantic Tokens                        │
│  --primaryColor500                      │
│  --grayColor900                         │
│  --accentColor500                       │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  Role Tokens                            │
│  --fieldBorderColor                     │
│  --buttonFilledPrimaryBgColor           │
│  --textColor                            │
└──────────────┬──────────────────────────┘
               │
               ▼
┌─────────────────────────────────────────┐
│  Components                             │
│  .my-button {                          │
│    background: var(--buttonFilled...); │
│  }                                      │
└─────────────────────────────────────────┘
```

### 8. Example migration

**Component Before:**
```scss
// labs.component.scss
.color-swatch {
  border: 1px solid #e0e0e0;              // ❌ Hardcoded
  background: #ffffff;                     // ❌ Hardcoded
}

.color-info {
  color: var(--grayColor600);              // ❌ Semantic token
}
```

**Component After:**
```scss
// labs.component.scss
.color-swatch {
  border: 1px solid var(--borderColor, var(--grayColor300, #e0e0e0)); // ✅ Role token
  background: var(--surfaceColor, var(--bgColor10, #ffffff));          // ✅ Role token
}

.color-info {
  color: var(--textColorSecondary, var(--grayColor600, #757575));      // ✅ Role token
}
```

### 9. Success metrics

Track:
1. Percentage of components using Role tokens
2. Number of direct Semantic token usages in components
3. Number of direct Primitive token usages
4. Theme switching compatibility (all components work with all themes)

---

## Immediate next steps

1. Create missing general Role tokens in `variables.scss`
2. Audit existing Role tokens for proper Semantic mapping
3. Start migrating guidelines app components as examples
4. Set up linting rules to prevent regressions

Should I create a detailed migration plan document or start implementing the missing Role tokens?