DESIGN_SYSTEM_CURRENT_STATE.md

Design System – Current State Assessment (Independent & Fact-Based)
Scope: Core-UI, Theme, Shell App, Templates, CSS Implementation
Audience: Architecture, UI Platform, Migration Strategy
Status: Observational / Diagnostic
Last Updated: auto

1. Executive Summary
1.1 Purpose of This Document

This document captures the exact findings from a deep technical review of the existing design system, based on:

Repository structure analysis (core-ui, theme, shell-app, templates)

Theme and token architecture review

Role token and semantic token inventories

DOM-level compiled CSS inspection

Component audits and Cursor-assisted code analysis

Real usage patterns across applications

The intent is not to redesign, but to clearly answer:

What do we actually have today?

Why does the UI not visually reflect the strength of the system?

What is misaligned: architecture, CSS, or implementation?

What must be enabled or governed for the system to work at full efficiency?

1.2 High-Level Verdict

Architecturally, the system is strong and enterprise-grade.
Visually and operationally, its potential is underutilized.

This gap is not caused by missing tokens, themes, or components, but by:

Fragmented layout ownership

Uncontrolled CSS composition at feature level

Weak enforcement of visual and layout contracts

Overreliance on local overrides (!important, calc(), absolute positioning)

The system currently optimizes for correctness and flexibility, not for visual discipline and consistency.

1.3 What Is Working Well (Facts)

Robust theme mechanism using CSS variables

Large-scale role token system (~400+ role tokens across 24 component categories)

Mature semantic token layer (intent, surface, text, border, icon, focus states)

Multi-tenant readiness at token and theme level

Backward compatibility preserved via legacy token mapping

Core-UI components already abstract most color/state logic

1.4 Primary Problem Statement

The design system stops enforcing rules at the component level, while most visual inconsistency is introduced at the layout and page composition level.

As a result, feature teams compensate using CSS hacks that neutralize the system’s expressive power.

2. Technical Deep Dive
2.1 System Architecture Overview (As Implemented)
theme        → tokens, palettes, semantic meaning
core-ui      → components, role tokens, variants
shell-app    → header, left menu, global chrome (jacket)
templates    → app layout structures (multiple forks)
apps         → feature screens & business logic


This separation is correct by design, but enforcement across layers is weak.

2.2 Theme System – Current State

Strengths

Base variables always available

Active theme overrides via class/attribute

Resolution order: Active theme → Base → Fallback

Supports multiple themes (black, indigo, greenwave, etc.)

Observed Gaps

Theme responsibility limited to color semantics only

No ownership over layout, spacing, or density

Theme logic sometimes leaks into components

Dark/light and tenant themes rely on discipline, not enforcement

Conclusion:
Theme architecture is sound, but its scope is intentionally narrow — which exposes gaps elsewhere.

2.3 Design Tokens – What Actually Exists
2.3.1 Primitive Tokens (Palette)

Gray, Primary, Accent, Warn, Background scales

VW palette introduced as additional primitives

Legacy primitives still widely referenced

Issue:
No authoritative declaration of which primitive system is canonical going forward.

2.3.2 Semantic Tokens (Layer 2)

Fully defined and documented:

Intent tokens (success, warning, danger, info)

Text hierarchy tokens

Surface & background tokens

Border & icon tokens

Focus and interactive state tokens

Application-specific semantics

Assessment:
Semantic layer is complete and industry-aligned.

2.3.3 Role / Component Tokens (Layer 3)

Facts from audit:

~400+ role tokens

24 component categories

Deep state coverage (hover, active, disabled, focus)

Variant-specific mappings (Button, Snackbar, Chip, etc.)

Assessment:
Role token system is best-in-class, not lacking.

2.4 Component Layer (Core-UI)

What Works

Components consume role tokens extensively

Variants abstract intent correctly

APIs moving away from raw color inputs

Token-driven styling present in most components

What Breaks Down

Components are composed inside uncontrolled layouts

Component defaults overridden aggressively

CSS specificity wars (!important, deep selectors)

Inline styles and calc-based sizing undermine tokens

2.5 CSS Implementation – Evidence from DOM

Key patterns observed in compiled <style> blocks:

Extensive !important usage

Arbitrary spacing values (1.231em, 5.385em, etc.)

calc(100vh - X) used for layout correction

Absolute positioning for structural layout

Feature components styling tabs, grids, headers, sidebars

Interpretation (Fact-Based):

CSS is compensating for missing layout contracts

Feature components are acting as layout engines

Tokens are applied locally, not systemically

Visual rhythm and hierarchy are emergent, not governed

This is not bad CSS — it is CSS solving problems the system does not own.

2.6 Shell App & Templates – The Silent Gap
Shell App

Owns header and left menu

Does not expose content boundaries (safe areas, heights)

Does not enforce scroll ownership

Templates

Multiple template variants exist

Mostly folder structures, not enforced contracts

Frequently bypassed by feature-level CSS

Result:
Layout authority is fragmented.
Every app re-solves the same geometry problems differently.

2.7 Root Cause (Consolidated)

The design system governs what things look like,
but not how screens are composed.

This leads to:

Visual inconsistency despite correct tokens

CSS entropy over time

UI that feels heavy, noisy, or uneven

3. Migration & Roadmap Appendix
3.1 What Does NOT Need to Change

Theme mechanism

Token architecture

Role token depth

Core-UI component strategy

Backward compatibility approach

Rewriting any of these would be wasteful.

3.2 What Must Be Enabled (Missing Layer)
3.2.1 Layout Governance Layer

Introduce explicit contracts for:

App content bounds

Scroll ownership

Page padding & spacing

Section stacking rules

Sidebar / panel behavior

This layer should live between:

shell-app  ↔  templates  ↔  feature apps

3.3 Immediate Alignment Actions (Low Risk)

Declare VW palette as primitive-only

Declare components consume role tokens only

Freeze new legacy token introduction

Restrict !important usage to system-level styles

Identify 2–3 canonical templates and make them mandatory

3.4 Roadmap Discussion Pointers (For Migration Strategy)
Phase A – Governance (No Code Rewrite)

Visual & layout contracts

Allowed / forbidden CSS patterns

Template enforcement rules

Phase B – Template Consolidation

Reduce template forks

Centralize layout primitives

Expose shell layout metrics

Phase C – Controlled Refactoring

Gradual removal of calc-based layouts

Replace page-level CSS with template primitives

Improve visual rhythm using existing tokens

3.5 Success Criteria (Measurable)

Fewer CSS overrides per screen

Reduced !important count

Consistent spacing and density across apps

Theme switches with zero feature CSS changes

UI feels calmer without changing colors or components

4. Final Statement

This system is not broken.
It is incomplete at the composition layer.

Once layout authority and visual discipline are introduced, the existing tokens, themes, and components are sufficient to deliver a highly consistent, expressive, and scalable UI.


Appendix A – Design Token Flow Diagram

This diagram represents the actual token flow you already have, with clarity on authority and responsibility.

┌──────────────────────────────────────────────┐
│              PRIMITIVE TOKENS                │
│                                              │
│  • VW Palette (vw-color-*)                   │
│  • Legacy Palette (grayColor*, bgColor*)     │
│                                              │
│  (Raw values only – NO UI meaning)           │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│              SEMANTIC TOKENS                 │
│                                              │
│  Intent & Meaning Layer                      │
│  • vw-color-success / warning / danger       │
│  • text-primary / secondary / inverse        │
│  • surface-default / elevated                │
│  • border-focus / error / disabled           │
│  • icon-interactive / muted                  │
│                                              │
│  (Theme-aware, tenant-aware)                 │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│            ROLE / COMPONENT TOKENS           │
│                                              │
│  Component-specific contracts                │
│  • buttonPrimaryBg                           │
│  • inputBorderError                          │
│  • chipSuccessText                           │
│  • snackbarWarningBg                         │
│                                              │
│  Includes:                                  │
│  • Variants                                 │
│  • States (hover, active, disabled)          │
│                                              │
│  (~400+ tokens across 24 components)         │
└──────────────────────────────────────────────┘
                     │
                     ▼
┌──────────────────────────────────────────────┐
│               CORE-UI COMPONENTS             │
│                                              │
│  • Consume ROLE tokens only                  │
│  • No primitive or semantic usage            │
│                                              │
│  Output: stable, theme-safe UI primitives    │
└──────────────────────────────────────────────┘

Key Observations (Fact-Based)

✅ All layers exist today

✅ Semantic and role layers are mature

⚠️ Primitive authority is not formally declared

⚠️ Some components still bypass role tokens (legacy leakage)

Governance Rule (Recommended, Not Yet Enforced)

Components must consume ROLE tokens only.
Semantic tokens must never be used directly inside components.

Appendix B – Layout Authority & Ownership Diagram

This diagram explains why UI inconsistency appears, despite a strong design system.

Current (Observed) State
┌──────────────┐
│  SHELL APP   │
│  (Header,    │
│   Left Menu) │
└──────┬───────┘
       │  ❌ No content bounds exposed
       │  ❌ No scroll ownership
       ▼
┌────────────────────┐
│     FEATURE APP    │
│                    │
│  • Calculates vh   │
│  • Uses absolute   │
│  • Uses !important │
│  • Owns layout     │
│                    │
│  (CSS compensation)│
└────────────────────┘

Result

Layout logic duplicated per screen

CSS entropy increases

Tokens lose expressive power

UI feels inconsistent and heavy

Target (Efficient) State
┌──────────────┐
│  SHELL APP   │
│              │
│  • App frame │
│  • Safe area │
│  • Chrome    │
└──────┬───────┘
       │  ✔ Defines bounds
       ▼
┌────────────────────┐
│     TEMPLATES      │
│                    │
│  • Page layout     │
│  • Scroll rules    │
│  • Spacing rhythm  │
│                    │
│  (MANDATORY)       │
└──────┬─────────────┘
       │
       ▼
┌────────────────────┐
│   FEATURE SCREENS  │
│                    │
│  • Use Core-UI     │
│  • No layout math  │
│  • No vh hacks     │
│                    │
│  (Content only)    │
└────────────────────┘

Ownership Clarification
Layer	Owns
Shell App	Chrome, header, sidebar, safe areas
Templates	Page layout, scroll, padding, rhythm
Core-UI	Components & interaction patterns
Feature App	Business logic & data only
Appendix C – Efficiency Enablement Checklist

This checklist converts findings into actionable alignment steps.

Governance (Immediate)

 Declare VW palette as primitive-only

 Freeze new legacy tokens

 Enforce “role tokens only” rule

 Restrict !important to system styles

Layout Discipline

 Identify 3–4 canonical templates

 Make templates mandatory for screens

 Remove layout math from feature CSS

 Centralize scroll ownership

Migration-Friendly (No Big Bang)

 Allow legacy screens to coexist

 Refactor only when touched

 Measure CSS override reduction

 Track visual consistency, not just bugs

Final Closing Note

The system already contains everything required for a world-class UI.
What’s missing is layout authority and visual enforcement, not tokens or themes.

Once enabled, the system’s existing power becomes visible — without rewrites.