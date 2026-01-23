# Role Tokens Reference

**Complete List of Role/Component Tokens in the Design System**

This document provides a comprehensive list of all Role tokens (Layer 3) used in the UI Guidelines 2.1 system. These tokens define how components consume design meaning and should be used directly in component styles.

**Last Updated:** Based on UI Guidelines 2.1 implementation  
**Source:** `node_modules/@enttribe/themes-gx-theme/src/lib/variables.scss`

---

## Table of Contents

1. [App Container](#app-container)
2. [Field/Input](#fieldinput)
3. [Button](#button)
4. [Chip](#chip)
5. [Dropdown/Select](#dropdownselect)
6. [Toggle](#toggle)
7. [Checkbox](#checkbox)
8. [Radio Button](#radio-button)
9. [Slider](#slider)
10. [Range Slider](#range-slider)
11. [Upload](#upload)
12. [Snackbar](#snackbar)
13. [Tooltip](#tooltip)
14. [Dialog](#dialog)
15. [Card](#card)
16. [Tab](#tab)
17. [Stepper](#stepper)
18. [Date Picker](#date-picker)
19. [Breadcrumb](#breadcrumb)
20. [Grid (ag-Grid)](#grid-ag-grid)
21. [Config/Builder](#configbuilder)
22. [Splitview](#splitview)
23. [Query Builder](#query-builder)
24. [Icon Select Box](#icon-select-box)

---

## App Container

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--appContainerGap` | Gap between app container elements | `2em` |
| `--appContainerRadius` | Border radius for app container | `1em` |
| `--sideSpaceMargin` | Side space margin | `1200px` |
| `--focusOuterOutline` | Outer focus outline style | `none !important` or `0px 0px 0px 2px var(--grayColor10), 0px 0px 0px 4px var(--grayColor300)` |

---

## Field/Input

### General Field Tokens

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--fieldRadius` | Border radius for input fields | `0.67em` or `0.5em` |
| `--fieldHeight` | Height of input fields | `2.9em` |
| `--fieldLabelGap` | Gap between label and field | `0.7em` |
| `--fieldBorderWidth` | Border width for fields | `0.084em` |
| `--fieldHoverBorderWidth` | Border width on hover | `0.084em` |
| `--fieldFocusBorderWidth` | Border width on focus | `0.165em` |
| `--fieldDisabledBorderWidth` | Border width when disabled | `0em` or `var(--fieldBorderWidth)` |

### Field Colors

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--fieldBorderColor` | Default border color | `#eeeeee` or `var(--grayColor300)` |
| `--fieldHoverBorderColor` | Border color on hover | `var(--accentColor500)` |
| `--fieldFocusBorderColor` | Border color on focus | `var(--accentColor500)` |
| `--fieldTextColor` | Text color in field | `var(--grayColor900)` |
| `--fieldLabelColor` | Label text color | `#364153` |
| `--fieldHoverLabelColor` | Label color on hover | `var(--accentColor600)` or `var(--grayColor700)` |
| `--fieldPlaceholderColor` | Placeholder text color | `var(--grayColor400)` |
| `--fieldMatHintColor` | Material hint text color | `#6a7282` |

### Field Disabled States

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--fieldDisabledBgColor` | Background when disabled | `var(--bgColor50)` |
| `--fieldDisabledActiveBgColor` | Active background when disabled | `var(--bgColor100)` or `var(--bgColor300)` |
| `--fieldDisabledLabelColor` | Label color when disabled | `var(--grayColor400)` or `var(--grayColor700)` |
| `--fieldDisabledTextColor` | Text color when disabled | `var(--grayColor500)` or `var(--grayColor400)` |
| `--fieldDisabledBorderColor` | Border color when disabled | `var(--grayColor100)` or `var(--grayColor300)` |

### Field Error States

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--fieldErrorBorderColor` | Border color on error | `var(--grayColor100)` or `var(--warnColor300)` |
| `--fieldErrorHoverBorderColor` | Border color on error hover | `var(--accentColor500)` or `var(--warnColor500)` |
| `--fieldErrorFocusBorderColor` | Border color on error focus | `var(--accentColor500)` or `var(--warnColor500)` |
| `--fieldHintErrorColor` | Error hint text color | `var(--warnColor600)` |
| `--fieldErrorLtrMsgAlignment` | Error message alignment (LTR) | `right` or `left` |
| `--fieldErrorRtlMsgAlignment` | Error message alignment (RTL) | `left` or `right` |

### Field Typography

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--fieldLabelFontWeight` | Font weight for labels | `500` |
| `--fieldTextFontWeight` | Font weight for field text | `500` or `400` |
| `--fieldPlaceholderFontWeight` | Font weight for placeholder | `500` or `400` |
| `--fieldMatHintFontWeight` | Font weight for material hint | `400` |

### Field Affix & Currency

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--fieldAffixIconBorderWidth` | Border width for affix icon | `0em` |
| `--fieldAffixTextBorderWidth` | Border width for affix text | `0em` or `0.084em` |
| `--fieldCurrencyInputBorderWidth` | Border width for currency input | `0.084em` |

---

## Button

### General Button Tokens

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonRadius` | Border radius for buttons | `var(--fieldRadius)` or `2em` |
| `--buttonHeight` | Height of buttons | `2.67em` or `2.75em` |
| `--buttonIconWidth` | Width of icon buttons | `2.67em` or `2.75em` |
| `--buttonIconHeight` | Height of icon buttons | `2.67em` or `2.75em` |
| `--buttonPadding` | Padding for buttons | `0.5em 0.67em` or `0.63em 1em` |

### Filled Button Tokens

#### Disabled State
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonFilledDisabledBgColor` | Background when disabled | `var(--grayColor50)` or `var(--bgColor100)` |
| `--buttonFilledDisabledTextColor` | Text color when disabled | `var(--grayColor400)` |
| `--buttonFilledDisabledBorderColor` | Border color when disabled | `var(--grayColor50)` or `var(--grayColor200)` |

#### Primary Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonFilledPrimaryBgColor` | Background color | `var(--primaryColor500)` |
| `--buttonFilledPrimaryTextColor` | Text color | `var(--grayColor10)` |
| `--buttonFilledPrimaryBorderColor` | Border color | `var(--primaryColor500)` |
| `--buttonFilledPrimaryBorderWidth` | Border width | `0.084em` |
| `--buttonFilledPrimaryHoverBgColor` | Background on hover | `var(--primaryColor600)` |
| `--buttonFilledPrimaryHoverTextColor` | Text color on hover | `var(--grayColor10)` |
| `--buttonFilledPrimaryHoverBorderColor` | Border color on hover | `var(--primaryColor600)` |
| `--buttonFilledPrimaryFocusBgColor` | Background on focus | `var(--primaryColor700)` |
| `--buttonFilledPrimaryFocusTextColor` | Text color on focus | `var(--grayColor10)` |
| `--buttonFilledPrimaryFocusBorderColor` | Border color on focus | `var(--primaryColor700)` |

#### Accent Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonFilledAccentBgColor` | Background color | `var(--accentColor500)` |
| `--buttonFilledAccentTextColor` | Text color | `var(--grayColor10)` |
| `--buttonFilledAccentBorderColor` | Border color | `var(--accentColor500)` |
| `--buttonFilledAccentBorderWidth` | Border width | `0.084em` |
| `--buttonFilledAccentHoverBgColor` | Background on hover | `var(--accentColor600)` |
| `--buttonFilledAccentHoverTextColor` | Text color on hover | `var(--grayColor10)` |
| `--buttonFilledAccentHoverBorderColor` | Border color on hover | `var(--accentColor600)` |
| `--buttonFilledAccentFocusBgColor` | Background on focus | `var(--accentColor700)` or `var(--accentColor500)` |
| `--buttonFilledAccentFocusTextColor` | Text color on focus | `var(--grayColor10)` |
| `--buttonFilledAccentFocusBorderColor` | Border color on focus | `var(--accentColor700)` or `var(--accentColor500)` |

#### Warn Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonFilledWarnBgColor` | Background color | `var(--warnColor600)` |
| `--buttonFilledWarnTextColor` | Text color | `var(--grayColor10)` |
| `--buttonFilledWarnBorderColor` | Border color | `var(--warnColor600)` |
| `--buttonFilledWarnBorderWidth` | Border width | `0.084em` |
| `--buttonFilledWarnHoverBgColor` | Background on hover | `var(--warnColor600)` or `var(--warnColor700)` |
| `--buttonFilledWarnHoverTextColor` | Text color on hover | `var(--grayColor10)` |
| `--buttonFilledWarnHoverBorderColor` | Border color on hover | `var(--warnColor600)` or `var(--warnColor700)` |
| `--buttonFilledWarnFocusBgColor` | Background on focus | `var(--warnColor600)` |
| `--buttonFilledWarnFocusTextColor` | Text color on focus | `var(--grayColor10)` |
| `--buttonFilledWarnFocusBorderColor` | Border color on focus | `var(--warnColor600)` |

### Stroked Button Tokens

#### Disabled State
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonStrokedDisabledBgColor` | Background when disabled | `transparent` or `var(--grayColor10)` |
| `--buttonStrokedDisabledTextColor` | Text color when disabled | `var(--grayColor400)` |
| `--buttonStrokedDisabledBorderColor` | Border color when disabled | `var(--grayColor200)` |

#### Primary Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonStrokedPrimaryBgColor` | Background color | `transparent` |
| `--buttonStrokedPrimaryTextColor` | Text color | `var(--grayColor800)` or `var(--grayColor700)` |
| `--buttonStrokedPrimaryBorderColor` | Border color | `var(--grayColor300)` or `var(--grayColor400)` |
| `--buttonStrokedPrimaryBorderWidth` | Border width | `0.084em` |
| `--buttonStrokedPrimaryHoverBgColor` | Background on hover | `transparent` |
| `--buttonStrokedPrimaryHoverTextColor` | Text color on hover | `var(--primaryColor500)` |
| `--buttonStrokedPrimaryHoverBorderColor` | Border color on hover | `var(--primaryColor500)` |
| `--buttonStrokedPrimaryFocusBgColor` | Background on focus | `transparent` |
| `--buttonStrokedPrimaryFocusTextColor` | Text color on focus | `var(--primaryColor600)` |
| `--buttonStrokedPrimaryFocusBorderColor` | Border color on focus | `var(--primaryColor600)` |

#### Accent Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonStrokedAccentBgColor` | Background color | `transparent` |
| `--buttonStrokedAccentTextColor` | Text color | `var(--grayColor800)` or `var(--grayColor700)` |
| `--buttonStrokedAccentBorderColor` | Border color | `var(--grayColor300)` or `var(--grayColor400)` |
| `--buttonStrokedAccentBorderWidth` | Border width | `0.084em` |
| `--buttonStrokedAccentHoverBgColor` | Background on hover | `transparent` |
| `--buttonStrokedAccentHoverTextColor` | Text color on hover | `var(--accentColor500)` |
| `--buttonStrokedAccentHoverBorderColor` | Border color on hover | `var(--accentColor500)` |
| `--buttonStrokedAccentFocusBgColor` | Background on focus | `transparent` |
| `--buttonStrokedAccentFocusTextColor` | Text color on focus | `var(--accentColor500)` or `var(--accentColor600)` |
| `--buttonStrokedAccentFocusBorderColor` | Border color on focus | `var(--accentColor500)` or `var(--accentColor600)` |

#### Warn Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonStrokedWarnBgColor` | Background color | `transparent` |
| `--buttonStrokedWarnTextColor` | Text color | `var(--grayColor800)` or `var(--grayColor700)` |
| `--buttonStrokedWarnBorderColor` | Border color | `var(--grayColor300)` or `var(--grayColor400)` |
| `--buttonStrokedWarnBorderWidth` | Border width | `0.084em` |
| `--buttonStrokedWarnHoverBgColor` | Background on hover | `transparent` |
| `--buttonStrokedWarnHoverTextColor` | Text color on hover | `var(--warnColor500)` |
| `--buttonStrokedWarnHoverBorderColor` | Border color on hover | `var(--warnColor500)` |
| `--buttonStrokedWarnFocusBgColor` | Background on focus | `transparent` |
| `--buttonStrokedWarnFocusTextColor` | Text color on focus | `var(--warnColor600)` |
| `--buttonStrokedWarnFocusBorderColor` | Border color on focus | `var(--warnColor600)` |

### Flat Stroked Button Tokens

#### Disabled State
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonflatStrokedDisabledBgColor` | Background when disabled | `transparent` |
| `--buttonflatStrokedDisabledTextColor` | Text color when disabled | `var(--grayColor400)` |
| `--buttonflatStrokedDisabledBorderColor` | Border color when disabled | `var(--grayColor200)` |

#### Primary Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonflatStrokedPrimaryBgColor` | Background color | `transparent` |
| `--buttonflatStrokedPrimaryTextColor` | Text color | `var(--grayColor800)` |
| `--buttonflatStrokedPrimaryBorderColor` | Border color | `var(--grayColor300)` |
| `--buttonflatStrokedPrimaryBorderWidth` | Border width | `0.084em` |
| `--buttonflatStrokedPrimaryHoverBgColor` | Background on hover | `var(--primaryColor500)` |
| `--buttonflatStrokedPrimaryHoverTextColor` | Text color on hover | `var(--grayColor10)` |
| `--buttonflatStrokedPrimaryHoverBorderColor` | Border color on hover | `var(--primaryColor500)` |
| `--buttonflatStrokedPrimaryFocusBgColor` | Background on focus | `var(--primaryColor600)` |
| `--buttonflatStrokedPrimaryFocusTextColor` | Text color on focus | `var(--grayColor10)` |
| `--buttonflatStrokedPrimaryFocusBorderColor` | Border color on focus | `var(--primaryColor600)` |

#### Accent Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonflatStrokedAccentBgColor` | Background color | `transparent` |
| `--buttonflatStrokedAccentTextColor` | Text color | `var(--grayColor800)` |
| `--buttonflatStrokedAccentBorderColor` | Border color | `var(--grayColor300)` |
| `--buttonflatStrokedAccentBorderWidth` | Border width | `0.084em` |
| `--buttonflatStrokedAccentHoverBgColor` | Background on hover | `var(--accentColor500)` |
| `--buttonflatStrokedAccentHoverTextColor` | Text color on hover | `var(--grayColor10)` |
| `--buttonflatStrokedAccentHoverBorderColor` | Border color on hover | `var(--accentColor500)` |
| `--buttonflatStrokedAccentFocusBgColor` | Background on focus | `var(--accentColor600)` |
| `--buttonflatStrokedAccentFocusTextColor` | Text color on focus | `var(--grayColor10)` |
| `--buttonflatStrokedAccentFocusBorderColor` | Border color on focus | `var(--accentColor600)` |

#### Warn Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonflatStrokedWarnBgColor` | Background color | `transparent` |
| `--buttonflatStrokedWarnTextColor` | Text color | `var(--grayColor800)` |
| `--buttonflatStrokedWarnBorderColor` | Border color | `var(--grayColor300)` |
| `--buttonflatStrokedWarnBorderWidth` | Border width | `0.084em` |
| `--buttonflatStrokedWarnHoverBgColor` | Background on hover | `var(--warnColor600)` |
| `--buttonflatStrokedWarnHoverTextColor` | Text color on hover | `var(--grayColor10)` |
| `--buttonflatStrokedWarnHoverBorderColor` | Border color on hover | `var(--warnColor600)` |
| `--buttonflatStrokedWarnFocusBgColor` | Background on focus | `var(--warnColor700)` |
| `--buttonflatStrokedWarnFocusTextColor` | Text color on focus | `var(--grayColor10)` |
| `--buttonflatStrokedWarnFocusBorderColor` | Border color on focus | `var(--warnColor700)` |

### Icon Button Tokens

#### Disabled State
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonIconDisabledBgColor` | Background when disabled | `transparent` |
| `--buttonIconDisabledTextColor` | Text color when disabled | `var(--grayColor400)` |
| `--buttonIconDisabledBorderColor` | Border color when disabled | `var(--grayColor10)` |

#### Primary Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonIconPrimaryBgColor` | Background color | `transparent` |
| `--buttonIconPrimaryTextColor` | Text/icon color | `var(--primaryColor500)` |
| `--buttonIconPrimaryBorderColor` | Border color | `var(--primaryColor500)` or `transparent` |
| `--buttonIconPrimaryBorderWidth` | Border width | `0em` |
| `--buttonIconPrimaryHoverBgColor` | Background on hover | `transparent` |
| `--buttonIconPrimaryHoverTextColor` | Text color on hover | `var(--primaryColor500)` |
| `--buttonIconPrimaryHoverBorderColor` | Border color on hover | `transparent` |
| `--buttonIconPrimaryFocusBgColor` | Background on focus | `transparent` |
| `--buttonIconPrimaryFocusTextColor` | Text color on focus | `var(--primaryColor500)` |
| `--buttonIconPrimaryFocusBorderColor` | Border color on focus | `transparent` |

#### Accent Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonIconAccentBgColor` | Background color | `transparent` |
| `--buttonIconAccentTextColor` | Text/icon color | `var(--accentColor500)` |
| `--buttonIconAccentBorderColor` | Border color | `var(--accentColor500)` or `transparent` |
| `--buttonIconAccentBorderWidth` | Border width | `0em` or `0` |
| `--buttonIconAccentHoverBgColor` | Background on hover | `transparent` |
| `--buttonIconAccentHoverTextColor` | Text color on hover | `var(--accentColor500)` |
| `--buttonIconAccentHoverBorderColor` | Border color on hover | `transparent` |
| `--buttonIconAccentFocusBgColor` | Background on focus | `transparent` |
| `--buttonIconAccentFocusTextColor` | Text color on focus | `var(--accentColor500)` |
| `--buttonIconAccentFocusBorderColor` | Border color on focus | `transparent` |

#### Warn Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonIconWarnBgColor` | Background color | `transparent` |
| `--buttonIconWarnTextColor` | Text/icon color | `var(--warnColor600)` |
| `--buttonIconWarnBorderColor` | Border color | `var(--warnColor600)` |
| `--buttonIconWarnBorderWidth` | Border width | `0em` |
| `--buttonIconWarnHoverBgColor` | Background on hover | `transparent` |
| `--buttonIconWarnHoverTextColor` | Text color on hover | `var(--warnColor600)` |
| `--buttonIconWarnHoverBorderColor` | Border color on hover | `transparent` |
| `--buttonIconWarnFocusBgColor` | Background on focus | `transparent` |
| `--buttonIconWarnFocusTextColor` | Text color on focus | `var(--warnColor600)` |
| `--buttonIconWarnFocusBorderColor` | Border color on focus | `transparent` |

### Icon Stroked Button Tokens

#### Disabled State
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonIconStrokedDisabledBgColor` | Background when disabled | `var(--grayColor50)` |
| `--buttonIconStrokedDisabledTextColor` | Text color when disabled | `var(--grayColor400)` |
| `--buttonIconStrokedDisabledBorderColor` | Border color when disabled | `var(--grayColor50)` or `var(--grayColor100)` |

#### Primary Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonIconStrokedPrimaryBgColor` | Background color | `var(--grayColor50)` or `transparent` |
| `--buttonIconStrokedPrimaryTextColor` | Text/icon color | `var(--primaryColor500)` or `var(--grayColor800)` |
| `--buttonIconStrokedPrimaryBorderColor` | Border color | `var(--grayColor50)` |
| `--buttonIconStrokedPrimaryBorderWidth` | Border width | `0.084em` |
| `--buttonIconStrokedPrimaryHoverBgColor` | Background on hover | `var(--grayColor50)` |
| `--buttonIconStrokedPrimaryHoverTextColor` | Text color on hover | `var(--primaryColor500)` |
| `--buttonIconStrokedPrimaryHoverBorderColor` | Border color on hover | `var(--primaryColor500)` |
| `--buttonIconStrokedPrimaryFocusBgColor` | Background on focus | `var(--primaryColor50)` or `var(--grayColor50)` |
| `--buttonIconStrokedPrimaryFocusTextColor` | Text color on focus | `var(--primaryColor500)` |
| `--buttonIconStrokedPrimaryFocusBorderColor` | Border color on focus | `var(--primaryColor500)` |

#### Accent Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonIconStrokedAccentBgColor` | Background color | `var(--grayColor50)` or `var(--bgColor50)` |
| `--buttonIconStrokedAccentTextColor` | Text/icon color | `var(--accentColor500)` |
| `--buttonIconStrokedAccentBorderColor` | Border color | `var(--grayColor50)` or `transparent` |
| `--buttonIconStrokedAccentBorderWidth` | Border width | `0.084em` |
| `--buttonIconStrokedAccentHoverBgColor` | Background on hover | `var(--grayColor50)` or `var(--bgColor50)` |
| `--buttonIconStrokedAccentHoverTextColor` | Text color on hover | `var(--accentColor500)` |
| `--buttonIconStrokedAccentHoverBorderColor` | Border color on hover | `var(--accentColor500)` |
| `--buttonIconStrokedAccentFocusBgColor` | Background on focus | `var(--grayColor50)` or `var(--bgColor50)` |
| `--buttonIconStrokedAccentFocusTextColor` | Text color on focus | `var(--accentColor500)` |
| `--buttonIconStrokedAccentFocusBorderColor` | Border color on focus | `var(--accentColor500)` |

#### Warn Variant
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--buttonIconStrokedWarnBgColor` | Background color | `var(--grayColor50)` or `transparent` |
| `--buttonIconStrokedWarnTextColor` | Text/icon color | `var(--warnColor600)` |
| `--buttonIconStrokedWarnBorderColor` | Border color | `var(--grayColor50)` |
| `--buttonIconStrokedWarnBorderWidth` | Border width | `0.084em` |
| `--buttonIconStrokedWarnHoverBgColor` | Background on hover | `var(--grayColor50)` |
| `--buttonIconStrokedWarnHoverTextColor` | Text color on hover | `var(--warnColor600)` |
| `--buttonIconStrokedWarnHoverBorderColor` | Border color on hover | `var(--warnColor600)` |
| `--buttonIconStrokedWarnFocusBgColor` | Background on focus | `var(--grayColor50)` |
| `--buttonIconStrokedWarnFocusTextColor` | Text color on focus | `var(--warnColor600)` |
| `--buttonIconStrokedWarnFocusBorderColor` | Border color on focus | `var(--warnColor600)` |

---

## Chip

### General Chip Tokens

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipRadius` | Border radius for chips | `1em` |

### Chip Variant Colors

#### Success Chip
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipSuccessBgColor` | Background color | `#d7f7d9` |
| `--chipSuccessTextColor` | Text color | `#0a4d00` |

#### Error Chip
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipErrorBgColor` | Background color | `#ffe8e8` |
| `--chipErrorTextColor` | Text color | `#ba0000` |

#### Warning Chip
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipWarningBgColor` | Background color | `#fff5c2` |
| `--chipWarningTextColor` | Text color | `#7a5900` |

#### Info Chip
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipInfoBgColor` | Background color | `#e6f1ff` |
| `--chipInfoTextColor` | Text color | `#004085` |

#### Purple Chip
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipPurpleBgColor` | Background color | `#efdffa` |
| `--chipPurpleTextColor` | Text color | `#552684` |

#### Orange Chip
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipOrangeBgColor` | Background color | `#ffecd8` |
| `--chipOrangeTextColor` | Text color | `#824313` |

#### Pink Chip
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipPinkBgColor` | Background color | `#ffebf4` |
| `--chipPinkTextColor` | Text color | `#750f3d` |

#### Cyan Chip
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipCyanBgColor` | Background color | `#d9f7fa` |
| `--chipCyanTextColor` | Text color | `#00555e` |

#### Neutral Chip
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--chipNeutralBgColor` | Background color | `transparent` |
| `--chipNeutralTextColor` | Text color | `var(--grayColor700)` |

---

## Dropdown/Select

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--dropdownBorderColor` | Border color | `var(--fieldBorderColor)` or `var(--grayColor200)` |
| `--dropdownItemTextColor` | Text color for items | `var(--grayColor600)` or `var(--grayColor900)` |
| `--dropdownItemHoverTextColor` | Text color on hover | `var(--accentColor800)` or `var(--grayColor900)` |
| `--dropdownItemHoverBgColor` | Background on hover | `var(--accentColor50)` or `var(--bgColor50)` |
| `--dropdownSelectedTextColor` | Text color for selected item | `var(--accentColor500)` or `var(--grayColor900)` |
| `--dropdownSelectedBgColor` | Background for selected item | `var(--accentColor50)` or `var(--bgColor50)` or `var(--bgColor100)` |
| `--dropdownSelectedCheckMarkColor` | Checkmark color | `transparent` or `var(--accentColor500)` |
| `--dropdownSelectedCheckMarkVisibility` | Checkmark visibility | `none` or `block` |
| `--dropDownArrowColor` | Arrow icon color | `var(--grayColor400)` or `var(--grayColor500)` |

---

## Toggle

### Button Toggle

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--toggleButtonPadding` | Padding for toggle button | `0.2em` or `0.28em` |
| `--toggleButtonBgColor` | Background color | `var(--bgColor10)` or `var(--bgColor200)` |
| `--toggleButtonUncheckedTextColor` | Text color when unchecked | `var(--grayColor700)` |
| `--toggleButtonOuterBorderWidth` | Outer border width | `var(--fieldBorderWidth)` or `0px` |
| `--toggleButtonOuterBorder` | Outer border color | `var(--fieldBorderColor)` |
| `--toggleButtonCheckedDisabledBgColor` | Background when checked and disabled | `var(--bgColor10)` |
| `--toggleButtonHeight` | Height of toggle button | `2.3em` |

### Slide Toggle

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--toggleBorderColor` | Border color | `var(--grayColor200)` |
| `--toggleBorderRadius` | Border radius | `1.5em` |
| `--toggleSelectedBgColor` | Background when selected | `var(--accentColor500)` |
| `--toggleSelectedHoverBgColor` | Background on hover when selected | `var(--accentColor600)` |
| `--toggleUnselectedBgColor` | Background when unselected | `var(--bgColor200)` |
| `--toggleInnerBgColor` | Inner background color | `var(--bgColor10)` |
| `--toggleInnerBorderColor` | Inner border color | `var(--grayColor300)` or `var(--fieldDisabledBorderColor)` |

---

## Checkbox

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--checkboxBorderColor` | Border color | `var(--grayColor600)` or `var(--grayColor300)` |
| `--checkboxDisabledCheckmarkColor` | Checkmark color when disabled | `var(--grayColor300)` |
| `--checkboxBgColor` | Background color when checked | `var(--accentColor500)` |
| `--checkboxOuterBorderRadius` | Outer border radius | `0em` or `0.2em` |
| `--checkboxBorderWidth` | Border width | `0.084em` |
| `--checkboxBorderRadius` | Border radius | `0.37em` |

---

## Radio Button

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--radioBorderColor` | Border color | `var(--grayColor600)` or `var(--grayColor300)` |
| `--radioOuterBgColor` | Outer background color | `var(--bgColor10)` or `var(--accentColor500)` |
| `--radioInnerBgColor` | Inner background color | `var(--accentColor500)` or `var(--bgColor10)` |
| `--radioTabsBorderColor` | Border color for radio tabs | `var(--grayColor100)` or `var(--grayColor200)` |
| `--radioTabsTextColor` | Text color for radio tabs | `var(--accentColor500)` |
| `--radioOuterBorderColor` | Outer border color | `var(--accentColor500)` |

---

## Slider

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--sliderActiveTrackBgColor` | Active track background | `var(--accentColor500)` or `var(--accentColor400)` |
| `--sliderThumbBgColor` | Thumb background | `var(--bgColor10)` |
| `--sliderTrackBgColor` | Track background | `var(--accentColor50)` or `var(--bgColor200)` |
| `--sliderThumbBorderWidth` | Thumb border width | `0.084em` |
| `--sliderTrackHeight` | Track height | `0.64em` |
| `--sliderThumbBoxShadow` | Thumb box shadow | `0em 0.22em 0.3em 0em var(--grayColor200)` |
| `--sliderThumbBorderColor` | Thumb border color | `var(--grayColor100)` or `var(--bgColor300)` |
| `--sliderTopLabelTextColor` | Top label text color | `var(--grayColor10)` or `var(--grayColor900)` |
| `--sliderTopLabelBgColor` | Top label background | `var(--accentColor500)` or `var(--bgColor200)` |
| `--sliderTopLabelBorderWidth` | Top label border width | `0.084em` |
| `--sliderTopLabelBoxShadow` | Top label box shadow | `0.17em 0.33em 0.92em 0em rgba(0, 0, 0, 0.1)` |
| `--sliderDisabledInactiveBgColor` | Disabled inactive background | `var(--bgColor100)` |
| `--sliderDisabledActiveBgColor` | Disabled active background | `var(--bgColor200)` |

---

## Range Slider

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--rangeSliderActiveTrackBgColor` | Active track background | `var(--accentColor500)` or `var(--accentColor400)` |
| `--rangeSliderThumbBgColor` | Thumb background | `var(--bgColor10)` |
| `--rangeSliderTrackBgColor` | Track background | `var(--accentColor50)` or `var(--bgColor200)` |
| `--rangeSliderThumbBorderColor` | Thumb border color | `var(--grayColor100)` or `var(--grayColor300)` |
| `--rangeSliderThumbBoxShadow` | Thumb box shadow | `0em 0.22em 0.3em 0em var(--grayColor200)` |
| `--rangeSliderTopLabelTextColor` | Top label text color | `var(--grayColor1000)` or `var(--grayColor900)` |
| `--rangeSliderTopLabelBgColor` | Top label background | `var(--bgColor200)` |
| `--rangeSliderTopLabelBorderWidth` | Top label border width | `0` |
| `--rangeSliderTopLabelBoxShadow` | Top label box shadow | `none` |

---

## Upload

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--uploadBoxRadius` | Border radius for upload box | `1em` |
| `--uploadBorderStyle` | Border style | `solid` |
| `--uploadBorderWidth` | Border width | `0.084em` |
| `--uploadBorderRadius` | Border radius | `0.67em` or `0.8em` |
| `--uploadBorderColor` | Border color | `var(--grayColor100)` or `var(--grayColor200)` |
| `--uploadIconPadding` | Icon padding | `0.5em` or `0.8em` |
| `--uploadIconBorderRadius` | Icon border radius | `0.67em` or `0.8em` |
| `--uploadIconBorderColor` | Icon border color | `var(--grayColor300)` or `var(--grayColor200)` |
| `--uploadIconBorderStyle` | Icon border style | `solid` |
| `--uploadHoverBorderColor` | Border color on hover | `var(--accentColor500)` |
| `--uploadDisabledBorderColor` | Border color when disabled | `var(--grayColor50)` or `var(--grayColor200)` |
| `--uploadDisabledBgColor` | Background when disabled | `var(--bgColor50)` |
| `--uploadBoxTitleTextColor` | Title text color | `var(--grayColor500)` or `var(--grayColor600)` |
| `--uploadBoxSubTitleTextColor` | Subtitle text color | `var(--grayColor500)` or `var(--grayColor600)` |
| `--uploadBoxTitleDisabledTextColor` | Title text color when disabled | `var(--grayColor400)` |
| `--uploadBoxActionTextColor` | Action text color | `var(--accentColor500)` or `var(--grayColor700)` |

---

## Snackbar

### General Snackbar Tokens

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--snackbarBorderWidth` | Border width | `0.11em` |
| `--snackbarBorderRadius` | Border radius | `1em` |

### Error Snackbar

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--errorBgColor` | Background color | `var(--bgColor10)` |
| `--errorBorderColor` | Border color | `var(--warnColor500)` |
| `--errorIconColor` | Icon color | `var(--warnColor500)` |
| `--errorTitleColor` | Title text color | `var(--warnColor500)` |
| `--errorTextColor` | Text color | `var(--grayColor1000)` or `#252525` |

### Success Snackbar

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--successBgColor` | Background color | `var(--bgColor10)` |
| `--successBorderColor` | Border color | `#2ab915` |
| `--successIconColor` | Icon color | `#2ab915` |
| `--successTitleColor` | Title text color | `#2ab915` |
| `--successTextColor` | Text color | `var(--grayColor1000)` or `#252525` |

### Warning Snackbar

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--warnBgColor` | Background color | `var(--bgColor10)` |
| `--warnBorderColor` | Border color | `#f79008` |
| `--warnIconColor` | Icon color | `#f79008` |
| `--warnTitleColor` | Title text color | `#f79008` |
| `--warnTextColor` | Text color | `var(--grayColor1000)` or `#252525` |

### Info Snackbar

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--infoBgColor` | Background color | `var(--bgColor10)` |
| `--infoBorderColor` | Border color | `#1b81ef` |
| `--infoIconColor` | Icon color | `#1b81ef` |
| `--infoTitleColor` | Title text color | `#1b81ef` |
| `--infoTextColor` | Text color | `var(--grayColor1000)` or `#252525` |

### Solid Type Snackbar Tokens

#### Error Solid
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--errorSolidBgColor` | Background color | `#dc3545` |
| `--errorSolidBorderColor` | Border color | `#dc3545` |
| `--errorSolidIconColor` | Icon color | `#ffffff` |
| `--errorSolidTitleColor` | Title text color | `#ffffff` |
| `--errorSolidTextColor` | Text color | `#ffffff` |

#### Success Solid
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--successSolidBgColor` | Background color | `#2ab915` |
| `--successSolidBorderColor` | Border color | `#2ab915` |
| `--successSolidIconColor` | Icon color | `#ffffff` |
| `--successSolidTitleColor` | Title text color | `#ffffff` |
| `--successSolidTextColor` | Text color | `#ffffff` |

#### Warning Solid
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--warnSolidBgColor` | Background color | `#f79008` |
| `--warnSolidBorderColor` | Border color | `#f79008` |
| `--warnSolidIconColor` | Icon color | `#ffffff` |
| `--warnSolidTitleColor` | Title text color | `#ffffff` |
| `--warnSolidTextColor` | Text color | `#ffffff` |

#### Info Solid
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--infoSolidBgColor` | Background color | `#1b81ef` |
| `--infoSolidBorderColor` | Border color | `#1b81ef` |
| `--infoSolidIconColor` | Icon color | `#ffffff` |
| `--infoSolidTitleColor` | Title text color | `#ffffff` |
| `--infoSolidTextColor` | Text color | `#ffffff` |

---

## Tooltip

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--tooltipColor` | Tooltip color | `rgb(255, 247, 247)` or `#D7D3D0` |
| `--tooltipTextColor` | Text color | `#ffffff` |
| `--tooltipFontSize` | Font size | `0.89em` |
| `--tooltipBgColor` | Background color | `#515151` or `#171412` |
| `--tooltipArrowBgColor` | Arrow background | `transparent` or `#171412` |
| `--tooltipBorderRadius` | Border radius | `0.6em` |

---

## Dialog

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--dialogRadius` | Border radius for dialogs | `1em` |

---

## Card

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--cardRadius` | Border radius for cards | `1.6em` |

---

## Tab

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--tabHeight` | Height of tabs | `4.31em` |
| `--tabWidth` | Width of tabs | `12.39em` |
| `--tabBottomBorderWidth` | Bottom border width | `0.084em` |
| `--tabTitleMargin` | Title margin | `0em` |
| `--tabBgColor` | Background color | `var(--bgColor10)` |

---

## Stepper

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--stepperLabelFontWeight` | Font weight for labels | `400` or `500` |
| `--stepperConnectorLineWidth` | Connector line width | `var(--fieldBorderWidth)` or `0.16em` |
| `--stepperConnectorLineColor` | Connector line color | `var(--grayColor400)` or `var(--grayColor200)` |
| `--stepperPreviousConnectorLineColor` | Previous connector line color | `var(--accentColor500)` |

### Next Step
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--stepperNextStepBgColor` | Background color | `var(--bgColor10)` or `var(--bgColor50)` |
| `--stepperNextStepBorderColor` | Border color | `var(--grayColor400)` or `var(--grayColor300)` |
| `--stepperNextStepTextColor` | Text color | `var(--grayColor600)` or `var(--grayColor300)` |
| `--stepperNextLabelColor` | Label color | `var(--grayColor700)` |
| `--stepperNextDescriptionColor` | Description color | `var(--grayColor700)` or `var(--grayColor600)` |

### Current Step
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--stepperCurrentStepBgColor` | Background color | `var(--accentColor500)` |
| `--stepperCurrentStepBorderColor` | Border color | `var(--accentColor500)` |
| `--stepperCurrentStepTextColor` | Text color | `var(--grayColor10)` |
| `--stepperCurrentLabelColor` | Label color | `var(--accentColor500)` or `var(--accentColor600)` |
| `--stepperCurrentDescriptionColor` | Description color | `var(--accentColor500)` |

### Previous Step
| Token | Description | Default Value |
|-------|-------------|---------------|
| `--stepperPreviousStepBgColor` | Background color | `var(--accentColor500)` |
| `--stepperPreviousStepBorderColor` | Border color | `var(--accentColor500)` |
| `--stepperPreviousStepTextColor` | Text color | `var(--grayColor10)` |
| `--stepperPreviousLabelColor` | Label color | `var(--accentColor500)` or `var(--grayColor700)` |
| `--stepperPreviousDescriptionColor` | Description color | `var(--accentColor500)` or `var(--grayColor600)` |

---

## Date Picker

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--datePickerBorderColor` | Border color | `var(--grayColor100)` or `var(--grayColor200)` |
| `--datePickerHeaderDateBorderColor` | Header date border color | `var(--grayColor100)` or `var(--grayColor300)` |
| `--datePickerSelectedCellBorderRadius` | Selected cell border radius | `2em` |
| `--datePickerCellInRangeBgColor` | Cell background when in range | `var(--bgColor50)` or `var(--bgColor100)` |
| `--datePickerCellInRangeHoverBgColor` | Cell background on hover when in range | `var(--bgColor100)` or `var(--bgColor50)` |
| `--datePickerSelectedCellColor` | Selected cell text color | `black` |
| `--datePickerSelectedCellBgColor` | Selected cell background | `var(--accentColor50)` |
| `--datePickerTodayCellBgColor` | Today cell background | `var(--accentColor50)` |
| `--datePickerSelectedRangeCellBgColor` | Selected range cell background | `var(--accentColor500)` |
| `--datePickerSelectedRangeCellColor` | Selected range cell text color | `var(--grayColor10)` |
| `--datePickerCellRangeFromBorderRadius` | Range from cell border radius | `2em` |
| `--datePickerCellSpacing` | Cell spacing | `0em 0.3em` |
| `--datePickerCalendarHeight` | Calendar height | `27em` |

---

## Breadcrumb

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--breadCrumbBreadColor` | Breadcrumb text color | `var(--grayColor500)` or `var(--grayColor600)` |
| `--breadCrumbRecentBreadColor` | Recent breadcrumb text color | `var(--grayColor1000)` or `var(--grayColor700)` |
| `--breadCrumbIconColor` | Icon color | `var(--grayColor500)` or `var(--grayColor300)` |
| `--breadCrumbRecentIconColor` | Recent icon color | `var(--grayColor1000)` or `var(--grayColor300)` |

---

## Grid (ag-Grid)

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--agGridPinnedBorder` | Pinned border width | `0em` |
| `--agGridHeaderBg` | Header background | `var(--bgColor10)` or `var(--bgColor50)` |
| `--agGridHeaderFontSize` | Header font size | `1.08em` or `1em` |
| `--agGridHeaderLabelFontWeight` | Header label font weight | `500` or `600` |
| `--agGridHeaderToolBg` | Header tool background | `var(--grayColor50)` or `var(--bgColor10)` |
| `--agGridHeaderPadding` | Header padding | `0em 1.15em` or `0em 1.15em 0em 0.2em` |
| `--agGridHeaderBorderBottomColor` | Header bottom border color | `var(--grayColor50)` or `var(--grayColor200)` |
| `--agGridHeaderBorderTopColor` | Header top border color | `transparent` or `var(--grayColor200)` |
| `--agGridBorderBottomColor` | Grid bottom border color | `var(--grayColor50)` or `var(--grayColor200)` |
| `--agGridHeaderColumnColor` | Header column text color | `var(--grayColor700)` or `var(--grayColor500)` |
| `--agGridHeaderToolHeight` | Header tool height | `4em` |
| `--agGridHeaderToolPadding` | Header tool padding | `0.8em` |
| `--agGridHeaderSearchTools` | Header search tools spacing | `0.3em` |
| `--agGridMenuIconColor` | Menu icon color | `var(--grayColor600)` or `var(--grayColor400)` |
| `--agGridRowHoverColor` | Row hover background | `var(--bgColor50)` or `var(--grayColor50)` |

---

## Config/Builder

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--configCardRadius` | Config card border radius | `1em` |
| `--configHeaderMargin` | Config header margin | `0em 0em 1.34em 0em` |
| `--configHeaderBgColor` | Config header background | `var(--bgColor10)` |
| `--configHeaderBorderWidth` | Config header border width | `0.06em` |

---

## Splitview

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--splitviewSelectedCardBorderColor` | Selected card border color | `var(--accentColor600)` |
| `--splitviewSelectedCardBoxShadow` | Selected card box shadow | `none` |

---

## Query Builder

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--queryBuilderRadius` | Border radius for query builder | `1em` |

---

## Icon Select Box

| Token | Description | Default Value |
|-------|-------------|---------------|
| `--iconSelectBoxRadius` | Border radius for icon select box | `var(--fieldRadius)` or `1em` |

---

## Summary Statistics

- **Total Role Tokens Documented:** ~400+
- **Component Categories:** 24
- **Button Variants:** 5 (Filled, Stroked, Flat Stroked, Icon, Icon Stroked)
- **Button Color Variants:** 3 (Primary, Accent, Warn)
- **Button States:** 4 (Default, Hover, Focus, Disabled)
- **Chip Variants:** 9 (Success, Error, Warning, Info, Purple, Orange, Pink, Cyan, Neutral)
- **Snackbar Variants:** 8 (Error, Success, Warning, Info, each with Solid variant)

---

## Usage Guidelines

1. **Always use Role tokens in components** - Never use Primitive or Semantic tokens directly
2. **Provide fallbacks** - Use CSS fallback values: `var(--fieldBorderColor, var(--grayColor100, #e0e0e0))`
3. **Theme independence** - Components should work with any theme using these tokens
4. **State management** - Use state-specific tokens (Hover, Focus, Disabled, Error) appropriately
5. **Variant support** - Support all documented variants for maximum flexibility

---

## Related Documentation

- [Design Token Governance Charter](./governance/desing-token-governance-charter.md)
- [Theme System Architecture](./THEME_SYSTEM_ARCHITECTURE.md)
- [Theme Packages Roles](./THEME_PACKAGES_ROLES.md)

---

*Last Updated: Based on UI Guidelines 2.1 implementation*
