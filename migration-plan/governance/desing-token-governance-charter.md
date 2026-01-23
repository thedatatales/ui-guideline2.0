# Design Token Governance Charter

**For Core UI & Theme System**

---

## 1. Purpose

This charter defines how design tokens are created, layered, consumed, and governed across the UI platform.

### Goals

- **Visual consistency** across 80+ modules
- **Safe evolution** of themes for multi-tenant deployments
- **Clear contracts** between themes, tokens, and components
- **Long-term maintainability** without breaking existing applications

This charter applies to all UI components, utilities, and themes.

---

## 2. Guiding Principles

### 2.1 Tokens Are Contracts, Not Variables

Design tokens are API contracts, not styling conveniences.

**Changing or bypassing tokens is equivalent to breaking a public API.**

### 2.2 Themes Define Meaning, Components Consume Meaning

- **Themes decide** what a color means
- **Components decide** where that meaning is used
- **Components must never decide** what a color is

### 2.3 Backward Compatibility Is Mandatory

All token evolution must preserve:

- Existing fallbacks
- Existing resolution order
- Existing visual output unless explicitly versioned

### 2.4 No Runtime Token Computation

Tokens are resolved by:

- CSS variable cascading
- Theme overrides
- Browser fallback resolution

**No JavaScript-driven color logic is permitted.**

---

## 3. Token Layer Model (Mandatory)

The system formally recognizes **three token layers**.

### 3.1 Layer 1 — Primitive Tokens (Palette)

**Purpose:**  
Provide raw, context-free values (color scales, base measurements).

**Examples:**
```css
--vw-color-blue-500
--vw-color-gray-100
--primaryColor500
--grayColor100
```

**Rules:**

- ❌ **MUST NOT** be used directly in components
- ✅ **MAY** be used by themes and semantic tokens
- ✅ **MAY** be overridden by theme packages

**Audience:** Theme authors only

---

### 3.2 Layer 2 — Semantic Tokens (Meaning)

**Purpose:**  
Express intent and meaning, independent of component structure.

**Examples:**
```css
--primaryColor500
--accentColor500
--positiveColor
--negativeColor
--vw-color-success
--vw-color-warning
```

**Rules:**

- ❌ **MUST NOT** encode component-specific behavior
- ✅ **MUST** map to primitive tokens
- ✅ **MAY** be overridden per theme
- ✅ **SHOULD** be stable across themes

**Audience:** Theme authors, system designers

---

### 3.3 Layer 3 — Role / Component Tokens (Contracts)

**Purpose:**  
Define how components consume design meaning.

**Examples:**
```css
--fieldBorderColor
--fieldTextColor
--buttonBgColor
--buttonHoverBgColor
--cardBgColor
```

**Rules:**

- ✅ Components **MUST** use this layer
- ❌ Components **MUST NOT** bypass this layer
- ❌ Components **MUST NOT** use primitive tokens
- ❌ Components **MUST NOT** assume a specific theme

**Audience:** Component developers

---

## 4. Component Consumption Rules (Strict)

### 4.1 Allowed Usage

**Components MAY:**
```scss
border-color: var(--fieldBorderColor);
background: var(--buttonBgColor);
```

**Components SHOULD:**
```scss
border-color: var(--fieldBorderColor, var(--grayColor100, #e0e0e0));
```

### 4.2 Forbidden Usage

**Components MUST NOT:**
```scss
color: var(--grayColor900);              // ❌ Primitive token
background: var(--vw-color-blue-500);    // ❌ Primitive token
border: 1px solid #e0e0e0;               // ❌ Hardcoded value
```

**These violate:**

- Theme independence
- Multi-tenant safety
- Token abstraction

---

## 5. Theme Responsibilities

Theme packages (e.g. `themes-theme-black`) are responsible for:

- Mapping semantic tokens → primitive tokens
- Defining light / dark behavior
- Applying Material or framework theming
- Overriding semantic meaning, not component logic

**Themes MUST NOT:**

- Define component-specific layout tokens
- Hardcode component styling decisions
- Introduce new role tokens without governance approval

---

## 6. Base Theme Responsibilities

The base theme package (`themes-gx-theme`) is responsible for:

- Declaring default values for:
  - Primitive tokens
  - Semantic tokens
  - Role tokens
- Providing safe fallbacks
- Providing global styles, utilities, and mixins

**The base theme MUST:**

- Remain theme-agnostic
- Remain backward compatible
- Avoid tenant or brand opinions

---

## 7. Token Naming Conventions

### 7.1 Primitive Tokens

```
--vw-color-{palette}-{scale}
--grayColor{scale}
```

**Examples:**
```css
--vw-color-blue-500
--grayColor100
```

### 7.2 Semantic Tokens

```
--vw-color-{intent}
--primaryColor{scale}
--positiveColor
```

**Examples:**
```css
--vw-color-success
--primaryColor500
--positiveColor
```

### 7.3 Role Tokens

```
--{component}{Role}{Property}
```

**Examples:**
```css
--fieldBorderColor
--buttonTextColor
--cardBgColor
```

---

## 8. Token Lifecycle & Change Policy

### 8.1 Adding Tokens

- Must declare layer (Primitive / Semantic / Role)
- Must document intended consumers
- Must include fallback behavior

### 8.2 Modifying Tokens

- **Primitive** → allowed with theme review
- **Semantic** → requires cross-theme validation
- **Role** → requires component owner approval

### 8.3 Deprecating Tokens

- Mark as deprecated in documentation
- Maintain fallback mapping
- Do not remove without migration plan

---

## 9. Migration & Evolution Strategy

- Token migrations are **incremental**
- **No big-bang renames**
- Legacy tokens may coexist with VW tokens
- Mapping layers must be documented

---

## 10. Enforcement Model (Pragmatic)

Governance is enforced through:

- **Documentation** (this charter)
- **Code reviews**
- **Reference components**
- **Guidelines app examples**

Static linting MAY be added later, but is not mandatory initially.

---

## 11. Reference Component Pattern

At least one component (e.g. Input or Button) must be designated as:

**Token Contract Reference Implementation**

This component:

- Demonstrates correct token usage
- Acts as migration guidance
- Sets precedent for future components

---

## 12. Success Criteria

This charter is considered successful when:

- ✅ No new component uses primitive tokens directly
- ✅ Themes can change without breaking components
- ✅ Dark / tenant themes require no component changes
- ✅ Token usage is predictable and reviewable
- ✅ Visual regressions are isolated to theme changes

---

## 13. Final Statement

This governance charter does not replace your existing theme system.

**It formalizes it.**

The system you have is powerful.  
This document ensures it remains stable, scalable, and industry-credible for the next 5–10 years.

---

*Last Updated: Based on UI Guidelines 2.1 implementation*
