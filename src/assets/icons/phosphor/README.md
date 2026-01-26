# Phosphor Icons — Light & Regular

This folder contains **only** the **Light** and **Regular** variants of [Phosphor Icons](https://phosphoricons.com/), for use in the guidelines app and in core-ui.

## Structure

```
phosphor/
├── light/                    # Light weight (font)
│   ├── Phosphor-Light.woff2
│   ├── Phosphor-Light.woff
│   ├── Phosphor-Light.ttf
│   └── style.css             # @font-face + .ph-light + .ph-light.ph-{icon} classes
├── regular/                  # Regular weight (font)
│   ├── Phosphor.woff2
│   ├── Phosphor.woff
│   ├── Phosphor.ttf
│   └── style.css             # @font-face + .ph + .ph.ph-{icon} classes
└── README.md                 # This file
```

SVGs for **light** and **regular** live in the full pack at:

- `assets/icons/phosphor-icons/SVGs/light/`  → `*-light.svg`
- `assets/icons/phosphor-icons/SVGs/regular/` → `*.svg` (no suffix)

Use those paths when you need SVG by URL (e.g. `iconPath`, MatIconRegistry, or inline SVG). For theme-aware color, prefer the **font** usage below or inline SVGs with `currentColor`.

## Usage (fonts)

Both variants are loaded globally in this app. Use the correct base class and icon class.

### Regular

- Base class: `ph`
- Icon class: `ph ph-{icon-name}` (kebab-case)
- Font family: `Phosphor`

Example:

```html
<i class="ph ph-house"></i>
<i class="ph ph-magnifying-glass"></i>
```

### Light

- Base class: `ph-light`
- Icon class: `ph-light ph-{icon-name}` (same names as regular)
- Font family: `Phosphor-Light`

Example:

```html
<i class="ph-light ph-house"></i>
<i class="ph-light ph-magnifying-glass"></i>
```

### Resize and theme color

- **Size:** set `font-size` (e.g. `1.5rem`, `24px`).
- **Color:** set `color` or a theme variable (e.g. `var(--primaryColor500)`). Icons inherit `color`.

Example:

```html
<i class="ph ph-house" style="font-size: 1.5rem; color: var(--primaryColor500);"></i>
```

## Icon names

Names are **kebab-case** and match [Phosphor](https://phosphoricons.com/) (e.g. `house`, `magnifying-glass`, `arrow-circle-right`). The full list is in each `style.css` (e.g. `.ph.ph-house:before`, …). You can also use [Phosphor Icons](https://phosphoricons.com/) to look up names.

## Core-ui adoption

For core-ui and other apps:

1. **Copy this folder**  
   Use the same layout: `phosphor/light/` and `phosphor/regular/` with the font files and `style.css` from this repo.

2. **Load the fonts**  
   Add to `angular.json` (or app styles):

   - `src/assets/icons/phosphor/light/style.css`
   - `src/assets/icons/phosphor/regular/style.css`

   Ensure the built app serves fonts at `assets/icons/phosphor/light/` and `assets/icons/phosphor/regular/`. If your assets are copied elsewhere, change the `url(...)` in the `@font-face` in each `style.css` to match.

3. **Optional: fontSet in shared icon component**  
   To support `[fontSet]="'phosphor'"` / `[fontSet]="'phosphor-light'"` and `[iconName]="'house'"`, add mapping in the shared icon component to the classes above and the same icon names.

4. **SVGs**  
   If you ship SVGs, point to the same paths:  
   `assets/icons/phosphor-icons/SVGs/light/` and `assets/icons/phosphor-icons/SVGs/regular/`, or copy only those two folders into your app’s assets and document the paths.

## What was removed

The full Phosphor pack under `phosphor-icons/` includes **bold**, **duotone**, **fill**, and **thin**. They are not included here. To add another variant later, add a sibling folder (e.g. `phosphor/bold/`) with its font files and `style.css`, and add that CSS to the app’s styles.
