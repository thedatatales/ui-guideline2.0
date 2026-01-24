Phase 4 — Core-UI Migration Charter

(Future Reference Document)

Purpose

Phase 4 exists to incrementally align Core-UI producer components with the Design Token architecture without destabilizing consuming applications.

This phase is explicitly deferred until:

Guidelines (Phase 3) migration is complete

Token semantics are validated through real usage

No architectural churn remains in the token layers

Scope Definition
In Scope

Core-UI components in @enttribe/core

Component internal styles only

Token usage updates:

Semantic → Role

Hardcoded → Role (where justified)

Additive changes only

Out of Scope

Visual redesigns

Layout or spacing redesigns

Component API changes

Behavioral changes

Angular Material structural refactors

Phase 4 is a producer-alignment phase, not a UX redesign phase.

Core Principles

Theme safety > Token purity

If a component already responds correctly to themes, migration is optional.

Audit before migration

Every component must have an audit document (like CARD_COMPONENT_AUDIT.md)

No audit → no migration

Role tokens only where they add value

Typography, spacing, and colors that may vary by theme or tenant

Do not migrate neutral constants without justification

One component at a time

No batch refactors

Each component must be independently reversible

Entry Criteria for a Core Component

A component may enter Phase 4 only if:

✔ Audit document exists

✔ Migration priority is Medium or High

✔ Component is stable (no active feature work)

✔ Guidelines already demonstrate correct token usage

✔ Fallback chains are defined

Exit Criteria

A component is considered “Phase-4 complete” when:

Uses Role tokens for theme-sensitive properties

Retains semantic fallbacks

Has no hardcoded colors

Passes theme-switching checks

Has no visual regressions

Risk Classification
Risk Level	Meaning	Action
Low	Mostly semantic → role	Proceed
Medium	Typography / spacing	Proceed cautiously
High	Layout / Material internals	Defer
Example: Card Component (Applied)

Status: Deferred (Correctly)

Theme compatible ✔

No hardcoded colors ✔

Migration benefit: incremental

Action: revisit only if typography density or spacing theming is required

Token Purity Readiness Checklist

(Core-UI Migration Gate)

This checklist determines whether a Core component is worth migrating — not whether it can be migrated.

1. Theme Compatibility Check

 Component responds correctly to theme-black

 Background uses semantic or surface tokens

 Text colors adapt to theme

 No theme-specific hacks

If all YES → migration is optional

2. Token Usage Audit
Colors

 No hardcoded hex/rgb values

 Semantic tokens used instead of primitives

 Role tokens exist or can be introduced cleanly

Typography

 Font sizes are relative (em, rem)

 Font family already tokenized

 Typography changes would benefit theming or density control

Spacing

 Padding/margins are intentional

 Spacing variability is desired (not cosmetic)

3. Role Token Justification

Ask before introducing any new role token:

“Will different themes or tenants reasonably want this value to differ?”

If the answer is no, do not migrate.

4. Migration Value Test

Migration is justified only if it provides at least one:

Better theme adaptability

Better tenant customization

Reduced duplication across components

Improved design consistency enforcement

If none apply → document and defer

5. Safety & Reversibility

 Migration is additive

 Fallback chain exists

 Component can be reverted independently

 No consumer API impact

Readiness Verdict
Verdict	Meaning
Ready	Proceed in Phase 4
Conditionally Ready	Proceed only if feature demands
Not Ready	Document & defer
How This Fits into the Overall Roadmap
Completed

Phase 1: General Role Tokens ✔

Phase 2: Role → Semantic alignment ✔

Phase 3: Guidelines component migration (in progress)

Future

Phase 4: Core-UI producer alignment (this charter)

Phase 5: Optional DX simplification (aliases, docs)

Phase 6: Tooling / linting / enforcement (if needed)