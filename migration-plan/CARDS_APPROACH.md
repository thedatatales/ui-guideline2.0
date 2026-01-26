# Cards: Generic Structure, Content Consistency & Layout Flexibility

This document describes the approach for a unified card system used across the application: **generic structure**, **content consistency**, and **layout flexibility** so designers and developers can align placement and behaviour without one-off implementations.

---

## 1. Goals

1. **Generic structure** — One card model that can represent KPI cards, list cards, chart cards, product/offering cards, and compound metric cards.
2. **Content consistency** — Shared typography, spacing, and visual treatment so all cards feel like one family and support theming.
3. **Layout flexibility** — Semantic “knobs” (e.g. flex-based alignment and spacing) so designers and developers can control placement (e.g. `space-between`, `flex-start`) and match designs without custom CSS per card.

---

## 2. Card Patterns in the Application

These patterns were identified from real cards (Leads, Overdue Activities, Recent Won Deals, Won Deals Distribution, Potential Revenue, Total revenue/Total invoice, Service offering).

| Pattern | Description | Main layout traits |
|--------|-------------|--------------------|
| **KPI / metric** | Leads, Potential Revenue | Icon + title/value block; optional trend; sometimes 2–4 metrics in a grid |
| **Single big metric** | Overdue Activities | Icon + title + one prominent number + optional footer breakdown (e.g. “5 Calls • 4 Meetings • 3 Emails”) |
| **List** | Recent Won Deals | Header (title + meta e.g. “Last 90 Days”) + vertical list of rows (left: title/subtitle, right: value) |
| **Chart** | Won Deals Distribution | Title + chart + legend (side‑by‑side or stacked) |
| **Compound metric** | Total revenue / Total invoice | Icon + primary metric + trend badge; secondary metric below |
| **Product / offering** | Standard 300 mbps ILL | Title, subtitle/ID, tags, price, features list, description, action buttons |

**Common traits**

- One outer **container** (rounded, shadow, padding).
- Clear **zones**: “header” (icon + title), “primary value”, “secondary/context”, “list/chart/actions”.
- **Horizontal** splits (label left, value right; icon left, content right) and **vertical** stacking of those rows.

---

## 3. Generic Structure

A single card model can cover all patterns by defining **sections** and **layout within each section**, instead of one fixed DOM shape.

### 3.1 Container

- One wrapper for all card content.
- Shared styling: border-radius, box-shadow, padding, background (from theme tokens).
- No layout logic; only containment and tokens.

### 3.2 Sections (Content Slots)

Sections are **optional**. A card uses only the ones it needs.

| Section | Purpose | Typical content |
|---------|---------|------------------|
| **Header** | Icon + title (and optional meta) | e.g. “Leads”, “Overdue Activities”, “Recent Won Deals”, “Last 90 Days” |
| **Primary** | Main number or statement | e.g. “20”, “12”, “₹2.5M”, “90.6M (ITD)” |
| **Metrics / body** | One or more label–value–(trend) rows | e.g. “Created (L30D)” / “10” / “+12%”; can be 1–2 columns or a small grid |
| **Footer / breakdown** | Short summary or breakdown | e.g. “5 Calls • 4 Meetings • 3 Emails” |
| **List** | Repeating rows | e.g. deal rows: title, subtitle, value (right) |
| **Media** | Chart, image, etc. | e.g. pie chart + legend |
| **Actions** | Buttons or links | e.g. “View Details”, “Select” |

**Examples by pattern**

- **KPI (Leads):** Header + Primary (top-right “20”) + Metrics (grid) + optional Footer.
- **Overdue:** Header + Primary (“12”) + Footer (“5 Calls • 4 Meetings • 3 Emails”).
- **Recent Won Deals:** Header + List.
- **Chart:** Header + Media (chart + legend).
- **Potential Revenue:** Header + Primary + context line (e.g. “+12% from last week”).
- **Compound metric:** Header (icon + primary + trend) + Metrics (secondary row).
- **Product/offering:** Header (title, subtitle, tags) + Primary (price) + body (features, description) + Actions.

---

## 4. Content Consistency

Consistency is achieved through **design tokens** and **shared building blocks**.

### 4.1 Typography

Use a single scale and map to theme variables:

| Role | Use | Token / variable example |
|------|-----|---------------------------|
| Card title | Section titles, “Leads”, “Overdue Activities” | e.g. `--cardTitleSize`, `--grayColor800` |
| Metric label | “Open (L12M)”, “Created (L30D)” | Smaller, `--grayColor600` |
| Metric value | “20”, “18.5%”, “₹430.2M” | Larger, bold, `--grayColor800` or `--textColor` |
| Secondary / context | “Last 90 Days”, “+12% from last week” | Small, `--grayColor600` |
| Trend / badge | “+12%”, “−2” | Small, semantic colour (e.g. success/danger) |

### 4.2 Spacing

- **Card padding** — One token (e.g. `--cardPadding` or spacing scale).
- **Gap between sections** — One token (e.g. `--cardSectionGap`).
- **Gap within a row** — One token (e.g. `--cardRowGap`).
- **Icon–text spacing** — Consistent in header and metric rows.

### 4.3 Icons and colours

- **Icons** — Same icon set (e.g. Phosphor) and size scale; colour from theme (e.g. `--accentColor500`, `--dangerColor`).
- **Trends** — One small component: icon + text; colour by direction (e.g. green up, red down) using theme tokens.

### 4.4 Shared building blocks

Define small, reusable pieces used inside card sections:

- **Metric row** — label (left) + value (right) + optional trend.
- **Trend badge** — arrow + text, coloured by direction.
- **Icon block** — square/rounded container + icon (e.g. for header).
- **List row** — left block (title + subtitle) + right value.

All cards use these same primitives so content looks and behaves consistently.

---

## 5. Layout Flexibility (“Knobs”)

Designers need to switch between “label left, value right”, “icon left, content right”, “space between”, “stacked”, etc. **Flex (and gap) are the right mechanism.** Expose **semantic layout options** that map to flex (and grid where useful), not raw CSS property names.

### 5.1 Per-section layout options

Apply to **header**, **metrics/body**, **footer**, and **list** as needed.

| Knob | Values (example) | Maps to | Purpose |
|------|------------------|--------|---------|
| **Row alignment** | `start` \| `center` \| `end` \| `space-between` \| `space-around` | `justify-content` | Horizontal distribution of primary row content |
| **Block alignment** | `start` \| `center` \| `end` \| `stretch` | `align-items` | Vertical alignment of items in a row |
| **Gap** | `none` \| `sm` \| `md` \| `lg` (or tokens) | `gap` | Spacing between items in that section |
| **Direction** | `row` \| `column` | `flex-direction` | Stack vs inline (when a section can do both) |

### 5.2 Naming

Prefer **semantic** names in the API:

- `headerLayout="space-between"` (not “headerJustifyContent”).
- `metricsLayout="grid"` or `metricsColumns={2}` for 2×2 metric grids.
- `bodyGap="md"`.

Implementation translates these into flex/grid in CSS or a small layout helper.

### 5.3 Examples by pattern

- **Leads (top row):** Header row = icon+“Leads” (one block) vs “Open (L12M)” / “20” → `headerLayout="space-between"`.
- **Leads (metrics):** 2×2 grid → `metricsLayout="grid"` or `metricsColumns={2}`, `bodyGap="md"`.
- **Recent Won Deals (each row):** Title+subtitle (left) vs value (right) → list row uses `justify-content: space-between`, `align-items: baseline` or `center`.
- **Overdue (footer):** “5 Calls • 4 Meetings • 3 Emails” → row, `gap: 0.5rem`, `flex-wrap`.
- **Potential Revenue (top):** “Potential Revenue” vs icon → `headerLayout="space-between"`.

---

## 6. Feasibility and Worthiness

### 6.1 Feasibility

| Aspect | Assessment |
|--------|------------|
| **Generic structure** | Yes. One card with optional sections (header, primary, metrics, footer, list, media, actions) covers the observed patterns. |
| **Content consistency** | Yes. Shared typography scale, spacing tokens, and small building blocks (metric row, trend badge, icon block) used across variants. |
| **Layout knobs** | Yes. A small set of layout options implemented with flex/grid is enough to match current designs. |

### 6.2 Worthiness

| Benefit | Explanation |
|---------|-------------|
| **Consistency** | All KPI, list, chart, and product cards look and behave like one system. |
| **Maintainability** | New card types = new combinations of sections + layout props, not new one-off components. |
| **Design–dev handoff** | Layout knobs give a clear vocabulary (“header: space-between”, “body: 2 columns, gap md”) for both sides. |
| **Theming** | Typography and spacing tokens align with the existing theme and icon theming (e.g. Phosphor, theme-aware colours). |

---

## 7. Recommendation

- **Adopt this approach** for the card system and document it on the Cards guidelines page.
- **Implement**:
  1. **Generic structure** — One card API (e.g. evolution of `bntv-simple-card` or a `bntv-dashboard-card`) with optional sections as above.
  2. **Content consistency** — Shared tokens and primitives (metric row, trend, icon block, list row) used in every card variant.
  3. **Layout knobs** — Semantic options per section (e.g. `headerLayout`, `metricsColumns`, `bodyGap`) implemented with flex/grid.
- **Keep the API semantic:** prefer names like `headerLayout`, `metricsColumns`, `bodyGap`; implement with flex/grid under the hood.
- **Document on the Cards page:** the generic structure, token names for typography and spacing, and the layout options, with references to actual card examples (Leads, Overdue, Won Deals, etc.).

---

## 8. Next Steps

1. **Tokens** — Define or reuse tokens for card padding, section gap, row gap, and card typography roles.
2. **Primitives** — Implement or designate shared building blocks (metric row, trend badge, icon block, list row).
3. **Card API** — Extend or introduce a card component with section slots and layout inputs as above.
4. **Guidelines page** — Update the Cards page to describe this approach, show the patterns, and document the API and tokens.
5. **Core-ui alignment** — Ensure the same structure and tokens can be adopted by the core team for app-wide cards.

---

## 9. Related Documents

- `migration-plan/CARD_COMPONENT_AUDIT.md` — Current card component audit.
- `migration-plan/CARD_COMPONENT_REVIEW.md` — Card component review.
- `migration-plan/SEMANTIC_TOKENS_REFERENCE.md` — Semantic tokens (for typography and spacing).
- `sample-app-pages/CLASS_MAPPING_GUIDE.md` — Mapping DOM/custom classes to Entribe components (incl. cards).
