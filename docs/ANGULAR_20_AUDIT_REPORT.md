# Angular 20 Audit Report

**Project:** UI Guidelines  
**Audit date:** January 2026  
**Angular version:** 20.2.4  
**Angular CLI:** 20.0.6  

This report summarizes what is **already aligned** with modern Angular (Angular 17–20) and what is **still using older patterns** and could be updated.

---

## Executive summary

| Area | Status | Notes |
|------|--------|------|
| **Framework version** | ✅ Up to date | Angular 20.2.4 |
| **Bootstrap** | ⚠️ Legacy | NgModule bootstrap + Zone.js |
| **Change detection** | ⚠️ Legacy | Zone-based; no OnPush; no zoneless |
| **Components** | ⚠️ Legacy | All NgModule-based (standalone: false) |
| **Control flow** | 🔀 Mixed | Some @if/@for; many *ngIf/*ngFor |
| **Signals** | ❌ Not used | No signal(), computed(), input(), model() |
| **Forms** | ⚠️ Legacy | Mostly UntypedFormGroup/UntypedFormControl |
| **Dependency injection** | ⚠️ Legacy | Constructor injection only (no inject()) |
| **Styles** | 🔀 Mixed | One component uses styleUrl; rest use styleUrls |
| **Defer / lazy views** | ❌ Not used | No @defer |

---

## 1. Bootstrap & runtime

### ❌ Not updated (old-fashioned)

| Item | Current state | Angular 20–style alternative |
|------|----------------|------------------------------|
| **Bootstrap** | `platformBrowserDynamic().bootstrapModule(AppModule)` in `main.ts` | Prefer `bootstrapApplication()` with `ApplicationConfig` and route-based lazy loading |
| **Zone.js** | Explicit `import 'zone.js'` in `polyfills.ts`; `angular.json` includes `polyfills.ts` and test polyfills list `zone.js` | Zoneless: remove Zone, add `provideExperimentalZonelessChangeDetection()` (or `provideZonelessChangeDetection()` in v19+) |
| **Zoneless** | Not used | Required for future zoneless: OnPush (or Signals) everywhere + zoneless provider |

### ✅ Implemented

- `app.config.ts` exists with `ApplicationConfig` and `provideRouter(routes)` (currently `routes` is empty; routing is in `AppModule`).
- `app.routes.ts` exists but is unused; routing is defined in `AppModule` via `RouterModule.forRoot([...])`.

---

## 2. Change detection

### ❌ Not updated (old-fashioned)

| Item | Current state | Count / location |
|------|----------------|-------------------|
| **ChangeDetectionStrategy** | No component sets `ChangeDetectionStrategy.OnPush` | 0 of 72 components |
| **Zoneless** | No zoneless provider; Zone.js loaded | N/A |
| **Signals** | No use of `signal()`, `computed()`, `effect()` | 0 |

### ✅ Implemented

- Default (Zone-based) change detection is in use and works with current patterns.

---

## 3. Components & modules

### ❌ Not updated (old-fashioned)

| Item | Current state | Count |
|------|----------------|--------|
| **Standalone components** | All components use `standalone: false` | 71 components (plus `AppComponent` in app module) |
| **NgModule** | App and guidelines are NgModule-based; routing and lazy loading via `loadChildren` with modules | 3 modules: `AppModule`, `GuidelinesModule`, `GuidelinesRoutingModule` |

### ✅ Implemented

- Clear module boundaries and lazy-loaded `GuidelinesModule`.
- All components are declared in modules and used correctly.

---

## 4. Template control flow

### ❌ Not updated (old-fashioned)

| Item | Current state | Count / files |
|------|----------------|----------------|
| **Structural directives** | `*ngIf`, `*ngFor`, `*ngSwitch` | **30 uses** in **5 files**: `guidelines.component.html` (19), `layout-1.component.html` (6), `chip.component.html` (1), `toggle.component.html` (3), `overlay-loader.component.html` (1 text mention) |

### ✅ Implemented (new control flow)

| Item | Current state | Count / files |
|------|----------------|----------------|
| **@if / @for / @switch** | New control flow syntax (Angular 17+) | **24 uses** in **5 files**: `color-palette.component.html` (14), `labs.component.html` (6), `error-pages.component.html` (2), `error-pages.component.ts` (1), `overlay-loader.component.ts` (1) |

### Summary

- **Mixed:** Some templates use `@if`/`@for`; many still use `*ngIf`/`*ngFor`.
- **Recommendation:** Prefer new control flow (`@if`, `@for`, `@switch`) for new and touched templates; migrate remaining `*ngIf`/`*ngFor` when convenient.

---

## 5. Signals

### ❌ Not updated (old-fashioned)

| Item | Current state |
|------|----------------|
| **signal()** | Not used |
| **computed()** | Not used |
| **effect()** | Not used |
| **input()** (signal inputs) | Not used |
| **model()** (two-way binding) | Not used |

All component state is plain class properties; no Signals anywhere.

---

## 6. Forms

### ❌ Not updated (old-fashioned)

| Item | Current state | Files |
|------|----------------|--------|
| **Untyped forms** | `UntypedFormGroup`, `UntypedFormControl`, `UntypedFormBuilder` | selectbox, stepper, input-with-info, affix-input, chip, auto-complete, currency-input, query-builder, advance-search |
| **Typed forms** | Used only for a few controls in stepper (`FormControl` with `Validators`) | stepper.component.ts (mixed: `UntypedFormGroup` + `FormControl` for name/email/address) |

### ✅ Implemented

- Reactive forms are used consistently; stepper uses validators and typed `FormControl` for some fields.
- Recommendation: Prefer `FormGroup`, `FormControl`, `FormBuilder` with types; migrate away from `Untyped*` over time.

---

## 7. Dependency injection

### ❌ Not updated (old-fashioned)

| Item | Current state |
|------|----------------|
| **inject()** | Not used (0 usages) |
| **Constructor injection** | All services and tokens are injected via constructor parameters |

Using only constructor injection is valid; `inject()` is optional and useful in factories, `runInInjectionContext`, or where constructor injection is awkward.

---

## 8. Styles

### 🔀 Mixed

| Item | Current state | Count |
|------|----------------|--------|
| **styleUrl** (single style, Angular 17+) | Used in `app.component.ts` | 1 |
| **styleUrls** (array) | Used in all other components | 71 |

One component uses the modern `styleUrl`; the rest use `styleUrls`. Both are supported; migration to `styleUrl` is optional and cosmetic when there is only one stylesheet.

---

## 9. RxJS & async

### ⚠️ Legacy patterns

| Item | Current state | Files |
|------|----------------|--------|
| **subscribe()** | Used without `async` pipe or explicit change detection in some components | guidelines, global-setting, annotation-tool, download-progress, uploader, dialog |
| **async pipe** | Not used in templates (0 matches for `| async`) | — |

For zoneless or OnPush, prefer `async` pipe or call `ChangeDetectorRef#markForCheck()` after `subscribe()` updates.

---

## 10. Defer & lazy views

### ❌ Not used

- No `@defer` blocks in templates.
- Optional for future: use `@defer` for below-the-fold or heavy content to improve initial load.

---

## 11. File and component counts

| Category | Count |
|----------|--------|
| Component files (`.component.ts`) | 72 |
| NgModules (`.module.ts`) | 3 |
| Components with `standalone: false` | 71 |
| Templates with `*ngIf` / `*ngFor` / `*ngSwitch` | 30 (5 files) |
| Templates/code with `@if` / `@for` / `@switch` | 24 (5 files) |
| Components with OnPush | 0 |
| Components using Signals | 0 |
| Components using `inject()` | 0 |
| Components using `styleUrl` | 1 |

---

## 12. Recommendations (priority order)

1. **Control flow** – Migrate remaining `*ngIf`/`*ngFor` to `@if`/`@for` in: `guidelines.component.html`, `layout-1.component.html`, `chip.component.html`, `toggle.component.html` (and fix the one doc mention in overlay-loader). Low risk, improves consistency and prepares for long-term support.
2. **Typed forms** – Replace `UntypedFormGroup`/`UntypedFormControl`/`UntypedFormBuilder` with `FormGroup`/`FormControl`/`FormBuilder` and proper types. Medium effort, improves type safety and aligns with Angular 20 style.
3. **OnPush** – Introduce `ChangeDetectionStrategy.OnPush` where possible (e.g. presentational components with inputs only or async pipe). Required if you later adopt zoneless. Medium effort.
4. **Signals** – Consider Signals for new or refactored state (e.g. UI toggles, simple state). Optional; aligns with Angular’s direction.
5. **inject()** – Prefer `inject()` in new code or when refactoring; leave existing constructor injection as-is unless you want consistency.
6. **Bootstrap** – Optional: move to `bootstrapApplication()` and route-based config when you are ready to simplify or replace `AppModule`. Larger refactor.
7. **Zoneless** – Only after OnPush (and/or Signals) is widespread and tests are green. Remove Zone and add zoneless provider; then fix regressions. High effort and risk if done before OnPush.

---

## 13. References

- [Angular Control Flow](https://angular.dev/guide/control-flow)
- [Angular Signals](https://angular.dev/guide/signals)
- [Typed Forms](https://angular.dev/guide/typed-forms)
- [Zoneless change detection (experimental)](https://angular.dev/guide/experimental/zoneless)
- [Standalone components](https://angular.dev/guide/standalone-components)
- [inject()](https://angular.dev/api/core/inject)
