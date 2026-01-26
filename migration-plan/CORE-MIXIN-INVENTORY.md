# core-mixin.scss — Mixin inventory (STEP 1)

**Source:** `@enttribe/themes-gx-theme/src/lib/core-mixin.scss`  
**Command run:** `grep -n "@mixin" src/lib/core-mixin.scss` (from gx-theme folder)

---

## List of mixin names

| # | Line | Mixin name | Signature |
|---|------|------------|-----------|
| 1 | 65  | `background-opacity`       | `($color, $opacity: 0.3)` |
| 2 | 74  | `core-component-theme`     | `($theme, $gray: null, $bgColor: null)` |
| 3 | 2908| `core-component-theme-neo` | `($theme, $gray: null, $bgColor: null)` |

---

## Raw grep output

```
65:@mixin background-opacity($color, $opacity: 0.3) {
74:@mixin core-component-theme($theme,$gray:null,$bgColor:null) {
2908:@mixin core-component-theme-neo($theme,$gray:null,$bgColor:null){
```

---

*(Inventory only. No judgment yet.)*
