---
version: 1.0.0
name: ShopVibe Design System
tagline: "Trendy, energetic, conversion-focused"
category: Fashion & Lifestyle E-Commerce
date: 2026-10-11
description: "ShopVibe is a design system crafted for fashion and lifestyle e-commerce storefronts that demand visual punch and effortless conversion. The spacious layout philosophy ensures products have the breathing room to shine, with generous whitespace framing hero imagery. A bold fuchsia primary drives urgency on CTAs, while cyan and yellow accents inject youthful energy. Every element is tuned to move shoppers from browse to checkout with minimal friction."

colors:
  primary: "#D946EF"         # Primary CTAs, add-to-cart buttons, active navigation
  primaryHover: "#C026D3"    # Button hover state
  primaryActive: "#A21CAF"   # Button active/pressed state
  primarySubtle: "#FDF4FF"   # Subtle hover highlights & selected list backgrounds
  
  secondary: "#22D3EE"       # Sale badges, promotional banners, link hovers
  secondaryDark: "#0891B2"   # Accessible text on light backgrounds
  
  tertiary: "#FACC15"        # Star ratings, loyalty rewards, highlight accents
  tertiaryDark: "#CA8A04"    # Accent text contrast
  
  background: "#FAFAFA"      # Global page background, clean and airy
  surface: "#FFFFFF"         # Product cards, modals, cart drawer
  surfaceMuted: "#F5F5F5"    # Disabled controls, ghost button hover
  
  inkPrimary: "#171717"      # High-contrast body & headline copy
  inkSecondary: "#525252"    # Secondary labels & reviews
  inkMuted: "#A3A3A3"        # Placeholders & tertiary borders
  
  borderDefault: "#E5E5E5"   # Card edges & list dividers
  borderInput: "#D4D4D4"     # Input fields, checkboxes & chip strokes
  borderHover: "#A3A3A3"     # Interactive border hover
  
  success: "#22C55E"
  successBg: "#DCFCE7"
  successText: "#166534"
  
  warning: "#F59E0B"
  warningBg: "#FEF9C3"
  warningText: "#854D0E"
  
  error: "#EF4444"
  errorBg: "#FEE2E2"
  errorText: "#991B1B"
  errorHover: "#DC2626"
  
  info: "#3B82F6"
  infoBg: "#DBEAFE"
  infoText: "#1E40AF"

typography:
  headlineFont: "'Poppins', sans-serif"
  bodyFont: "'Nunito', sans-serif"
  monoFont: "'Space Mono', monospace"
  
  scales:
    display:
      font: "Poppins"
      size: 56px
      weight: 800
      lineHeight: 1.1
      tracking: "0.02em"
      useCase: "Hero banners, sale headlines"
    headline:
      font: "Poppins"
      size: 40px
      weight: 700
      lineHeight: 1.2
      tracking: "0.01em"
      useCase: "Collection titles, category headers"
    subhead:
      font: "Poppins"
      size: 26px
      weight: 600
      lineHeight: 1.3
      tracking: "0.005em"
      useCase: "Section titles, promo headings"
    bodyLarge:
      font: "Nunito"
      size: 18px
      weight: 400
      lineHeight: 1.6
      tracking: "normal"
      useCase: "Product descriptions lead"
    body:
      font: "Nunito"
      size: 16px
      weight: 400
      lineHeight: 1.6
      tracking: "normal"
      useCase: "Default body text"
    bodySmall:
      font: "Nunito"
      size: 14px
      weight: 400
      lineHeight: 1.5
      tracking: "normal"
      useCase: "Reviews, secondary details"
    caption:
      font: "Nunito"
      size: 12px
      weight: 500
      lineHeight: 1.4
      tracking: "0.02em"
      useCase: "Size labels, stock status"
    overline:
      font: "Nunito"
      size: 11px
      weight: 700
      lineHeight: 1.2
      tracking: "0.1em"
      transform: "uppercase"
      useCase: "Category tags, new arrivals badge"
    code:
      font: "Space Mono"
      size: 14px
      weight: 400
      lineHeight: 1.5
      tracking: "normal"
      useCase: "Promo codes, order IDs"

spacing:
  base: 8px
  scale:
    0.5: 4px
    1: 8px
    1.5: 12px
    2: 16px
    3: 24px
    4: 32px
    6: 48px
    8: 64px
    12: 96px
    16: 128px
  componentPadding:
    small: 8px
    medium: 16px
    large: 24px
  sectionSpacing:
    mobile: 56px
    tablet: 80px
    desktop: 112px

borderRadius:
  none: 0px
  small: 4px
  medium: 12px
  large: 16px
  xl: 24px
  full: 9999px

elevation:
  subtle: "0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04)"
  medium: "0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)"
  large: "0 10px 25px rgba(0, 0, 0, 0.10), 0 6px 10px rgba(0, 0, 0, 0.06)"
  overlay: "0 25px 50px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.08)"
  productHover: "0 14px 32px rgba(217, 70, 239, 0.12), 0 6px 12px rgba(0, 0, 0, 0.06)"
---

# ShopVibe Design System

> **Trendy, energetic, conversion-focused.**  
> Crafted for fashion and lifestyle e-commerce storefronts requiring high aesthetic impact and frictionless customer journeys.

---

## 1. Overview & Philosophy

ShopVibe is an e-commerce design system engineered around high visual contrast, spacious layouts, and decisive conversion actions:
- **Generous Whitespace**: Large margins and clean `#FAFAFA` surfaces frame editorial photography, giving luxury apparel and trending items maximum breathing room.
- **Conversion-Driven Fuchsia (`#D946EF`)**: Reserved specifically for actionable targets—"Add to Bag", checkout triggers, and high-urgency notifications.
- **Youthful Energy (`#22D3EE` & `#FACC15`)**: Electric cyan promotional ribbons and warm amber ratings keep the storefront energetic without clutter.
- **Frictionless Transitions**: 200ms spring transitions, layered tactile elevations, and persistent cart access prevent drop-offs.

---

## 2. Color Tokens

### Primary Palette & Roles

| Token | Hex | Role & Application | Contrast on Surface |
| :--- | :--- | :--- | :--- |
| **Primary** | `#D946EF` | Primary CTAs, add-to-cart buttons, active navigation tabs | 3.4:1 (Large text) |
| **Primary Hover** | `#C026D3` | Button hover state | 4.1:1 |
| **Primary Active** | `#A21CAF` | Button active / pressed state | 5.3:1 (AAA) |
| **Primary Subtle** | `#FDF4FF` | Selected list background, light container tint | 1.1:1 |
| **Secondary** | `#22D3EE` | Sale badges, promotional discount ribbons, link hovers | Accent |
| **Tertiary** | `#FACC15` | Star ratings, customer loyalty badges, reward points | Accent |

### Canvases & Surfaces

| Token | Hex | Role |
| :--- | :--- | :--- |
| **Background** | `#FAFAFA` | Global page backdrop; clean, neutral, and airy |
| **Surface** | `#FFFFFF` | Product cards, cart drawer, flyout modals, elevated sheets |
| **Surface Muted** | `#F5F5F5` | Disabled input backgrounds, ghost button hover |

### Ink & Neutral Hierarchy

| Token | Hex | Role | Contrast on `#FAFAFA` |
| :--- | :--- | :--- | :--- |
| **Text Primary** | `#171717` | Headlines, titles, and primary product body copy | **14.5:1 (AAA)** |
| **Text Secondary** | `#525252` | Secondary details, verified buyer reviews, helper labels | **7.1:1 (AAA)** |
| **Text Tertiary** | `#A3A3A3` | Disabled text, input placeholders, strikethrough original prices | 2.5:1 |
| **Border Default** | `#E5E5E5` | Structural card borders, list item dividers | — |
| **Border Input** | `#D4D4D4` | Default input outlines, checkboxes, unselected chips | — |

### Semantic Status Colors

| State | Primary Hex | Background Hex | Text Hex | Contrast Ratio |
| :--- | :--- | :--- | :--- | :--- |
| **Success** | `#22C55E` | `#DCFCE7` | `#166534` | **7.3:1 (AAA)** |
| **Warning** | `#F59E0B` | `#FEF9C3` | `#854D0E` | **7.2:1 (AAA)** |
| **Error / Destructive** | `#EF4444` | `#FEE2E2` | `#991B1B` | **8.1:1 (AAA)** |
| **Info** | `#3B82F6` | `#DBEAFE` | `#1E40AF` | **7.8:1 (AAA)** |

---

## 3. Typography Scale

ShopVibe combines geometric, bold headlines (**Poppins**) with warm, humanistic body copy (**Nunito**) and mono precision (**Space Mono**).

| Role | Typeface | Size | Weight | Line Height | Tracking | Application |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Display** | Poppins | 56px | 800 (Extra Bold) | 1.1 (61.6px) | `0.02em` | Hero banners, seasonal sale headlines |
| **Headline** | Poppins | 40px | 700 (Bold) | 1.2 (48px) | `0.01em` | Collection titles, category headers |
| **Subhead** | Poppins | 26px | 600 (Semibold) | 1.3 (33.8px) | `0.005em` | Section titles, promotional highlights |
| **Body Large** | Nunito | 18px | 400 (Regular) | 1.6 (28.8px) | normal | Product narrative lead paragraph |
| **Body** | Nunito | 16px | 400 (Regular) | 1.6 (25.6px) | normal | Default body text & specifications |
| **Body Small** | Nunito | 14px | 400 (Regular) | 1.5 (21px) | normal | Verified customer reviews, sub-details |
| **Caption** | Nunito | 12px | 500 (Medium) | 1.4 (16.8px) | `0.02em` | Size guide labels, stock level status |
| **Overline** | Nunito | 11px | 700 (Bold) | 1.2 (13.2px) | `0.1em` | Category badges, new arrival tags (`UPPERCASE`) |
| **Code** | Space Mono | 14px | 400 (Regular) | 1.5 (21px) | normal | Promo discount codes, tracking IDs |

---

## 4. Spacing System

Based on an **8px base unit**, providing mathematical layout consistency:

```
[4px]  0.5x  • Micro spacing, inline icon gaps
[8px]  1.0x  • Small padding, tight badge padding
[12px] 1.5x  • Input vertical padding, chip spacing
[16px] 2.0x  • Medium component padding, standard grid gap
[24px] 3.0x  • Large component padding, card gutters
[32px] 4.0x  • Section header margins, container gaps
[48px] 6.0x  • Content group separators
[64px] 8.0x  • Major block margins
[96px] 12.0x • Desktop container offsets
[128px] 16.0x• Grand hero margins
```

### Layout Cadence
- **Component Padding**: Small `8px` · Medium `16px` · Large `24px`
- **Section Spacing**: Mobile `56px` · Tablet `80px` · Desktop `112px`

---

## 5. Border Radius Hierarchy

| Level | Value | Target Components |
| :--- | :--- | :--- |
| **None** | `0px` | Full-bleed promotional banners, product image hero overlays |
| **Small** | `4px` | Sale badges, inline stock tags, discount percentage chips |
| **Medium** | `12px` | Search inputs, modal dropdowns, toast alerts |
| **Large** | `16px` | Product cards, lookbook image containers, cart drawer |
| **XL** | `24px` | Promotional category cards, curated feature boxes |
| **Full** | `9999px` | "Add to Bag" pill CTAs, user avatars, quantity steppers |

---

## 6. Elevation & Layered Shadows

ShopVibe uses tactile, multi-layer shadows to make product cards feel physically liftable:

```css
/* Subtle */
box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06), 0 1px 2px rgba(0, 0, 0, 0.04);

/* Medium */
box-shadow: 0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05);

/* Large */
box-shadow: 0 10px 25px rgba(0, 0, 0, 0.10), 0 6px 10px rgba(0, 0, 0, 0.06);

/* Overlay (Cart Drawer, Modals) */
box-shadow: 0 25px 50px rgba(0, 0, 0, 0.15), 0 12px 24px rgba(0, 0, 0, 0.08);

/* Product Hover (Signature Fuchsia Glow Lift) */
box-shadow: 0 14px 32px rgba(217, 70, 239, 0.12), 0 6px 12px rgba(0, 0, 0, 0.06);
transform: translateY(-3px);
transition: transform 200ms ease, box-shadow 200ms ease;
```

---

## 7. Component Specifications

### 7.1 Buttons

```css
/* Primary (Filled) */
background: #D946EF;
color: #FFFFFF;
font: 700 15px/1 'Nunito', sans-serif;
padding: 12px 28px;
border-radius: 9999px;
transition: all 180ms ease;

/* Primary Hover & Active */
:hover  { background: #C026D3; }
:active { background: #A21CAF; }

/* Secondary (Outline) */
background: transparent;
color: #D946EF;
border: 2px solid #D946EF;
border-radius: 9999px;
:hover  { background: #FDF4FF; }

/* Ghost */
background: transparent;
color: #525252;
:hover  { background: #F5F5F5; }

/* Destructive */
background: #EF4444;
color: #FFFFFF;
border-radius: 9999px;
:hover  { background: #DC2626; }
```

- **Button Sizing**:
  - **Small**: `height: 34px` · `padding: 0 18px` · `font-size: 13px`
  - **Medium**: `height: 42px` · `padding: 0 28px` · `font-size: 15px`
  - **Large**: `height: 50px` · `padding: 0 36px` · `font-size: 16px`
- **Disabled State**: `opacity: 0.40; cursor: not-allowed; pointer-events: none;`

---

### 7.2 Product Cards

- **Default Layout**:
  - Container: `background: #FFFFFF; border: 1px solid #E5E5E5; border-radius: 16px; overflow: hidden;`
  - Image: Flush with edges (`padding: 0; aspect-ratio: 3/4; object-fit: cover;`)
  - Content Pad: `16px` all around
  - Hover: `border-color: #D4D4D4;`
- **Elevated Layout**:
  - Base: `box-shadow: var(--shadow-medium);`
  - Hover: `box-shadow: var(--shadow-product-hover); transform: translateY(-3px); transition: 200ms;`

---

### 7.3 Text Inputs & Form Fields

- **Container**: `height: 44px; padding: 0 16px; border-radius: 12px; background: #FFFFFF; font: 400 16px 'Nunito';`
- **Border**: `1.5px solid #D4D4D4`
- **Text Color**: `#171717` · **Placeholder**: `#A3A3A3`
- **States**:
  - **Focus**: `border-color: #D946EF; box-shadow: 0 0 0 3px rgba(217, 70, 239, 0.15); outline: none;`
  - **Error**: `border-color: #EF4444; box-shadow: 0 0 0 3px rgba(239, 68, 68, 0.15);`
  - **Disabled**: `background: #F5F5F5; opacity: 0.50; cursor: not-allowed;`
- **Label**: Positioned top, `font: 600 13px 'Nunito'; color: #171717; margin-bottom: 6px;`
- **Helper Text**: `font: 400 12px 'Nunito'; color: #525252; margin-top: 4px;`

---

### 7.4 Chips & Badges

- **Filter Chip**:
  - Geometry: `height: 34px; padding: 0 14px; border-radius: 9999px; font-size: 13px; font-weight: 600;`
  - Inactive: `border: 1.5px solid #D4D4D4; background: transparent; color: #171717;`
  - Inactive Hover: `background: #F5F5F5;`
  - Selected: `background: #D946EF; border-color: #D946EF; color: #FFFFFF;`
- **Status Chips**:
  - Success: `background: #DCFCE7; color: #166534;`
  - Warning: `background: #FEF9C3; color: #854D0E;`
  - Error: `background: #FEE2E2; color: #991B1B;`

---

### 7.5 Lists & Item Rows

- **Height**: `48px`
- **Padding**: `0 16px`
- **Typography**: `Nunito 16px / 400`
- **Divider**: `1px solid #E5E5E5`
- **Hover**: `background: #FAFAFA`
- **Selected**: `background: #FDF4FF; color: #D946EF; font-weight: 700;`
- **Icon Variant**: `22px` icon box with `14px` gap to title.

---

### 7.6 Form Controls (Checkboxes & Radios)

- **Checkbox**:
  - Size: `20px × 20px`
  - Inactive: `border: 2px solid #D4D4D4; border-radius: 6px; background: #FFFFFF;`
  - Checked: `background: #D946EF; border-color: #D946EF;` with white checkmark glyph.
  - Indeterminate: `background: #D946EF; border-color: #D946EF;` with white horizontal minus dash.
  - Disabled: `opacity: 0.40;`
  - Label: `Nunito 14px / 400; gap: 10px; color: #171717;`
- **Radio Button**:
  - Size: `20px × 20px; border-radius: 9999px;`
  - Inactive: `border: 2px solid #D4D4D4; background: #FFFFFF;`
  - Selected: `border: 2px solid #D946EF;` with `6px` centered dot `#D946EF`.
  - Disabled: `opacity: 0.40;`
  - Label: `Nunito 14px / 400; gap: 10px; color: #171717;`

---

### 7.7 Tooltips

- **Container**: `background: #171717; color: #FFFFFF; font: 500 12px 'Nunito'; padding: 8px 12px; border-radius: 8px;`
- **Max Width**: `200px`
- **Arrow**: `6px` triangle, positioned top preferred.
- **Timing**: `200ms` hover delay before entrance.

---

## 8. Implementation Code Tokens

### CSS Custom Properties

```css
:root {
  /* Brand */
  --sv-color-primary: #D946EF;
  --sv-color-primary-hover: #C026D3;
  --sv-color-primary-active: #A21CAF;
  --sv-color-primary-subtle: #FDF4FF;
  --sv-color-secondary: #22D3EE;
  --sv-color-tertiary: #FACC15;

  /* Surfaces */
  --sv-color-bg: #FAFAFA;
  --sv-color-surface: #FFFFFF;
  --sv-color-surface-muted: #F5F5F5;

  /* Typography */
  --sv-font-headline: 'Poppins', sans-serif;
  --sv-font-body: 'Nunito', sans-serif;
  --sv-font-mono: 'Space Mono', monospace;
  --sv-color-text-primary: #171717;
  --sv-color-text-secondary: #525252;
  --sv-color-text-tertiary: #A3A3A3;

  /* Borders */
  --sv-border-default: #E5E5E5;
  --sv-border-input: #D4D4D4;

  /* Shadows */
  --sv-shadow-subtle: 0 1px 3px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04);
  --sv-shadow-medium: 0 4px 6px rgba(0,0,0,0.07), 0 2px 4px rgba(0,0,0,0.05);
  --sv-shadow-large: 0 10px 25px rgba(0,0,0,0.10), 0 6px 10px rgba(0,0,0,0.06);
  --sv-shadow-overlay: 0 25px 50px rgba(0,0,0,0.15), 0 12px 24px rgba(0,0,0,0.08);
  --sv-shadow-product-hover: 0 14px 32px rgba(217, 70, 239, 0.12), 0 6px 12px rgba(0,0,0,0.06);
}
```

---

## 9. Do's and Don'ts

| Category | Do | Don't |
| :--- | :--- | :--- |
| **Imagery** | **Do** use high-quality product photography with consistent aspect ratios across product grids. | **Don't** mix portrait and landscape ratios within the same product collection shelf. |
| **Call to Action** | **Do** make the primary CTA ("Add to Bag") the most visually prominent element on every product card. | **Don't** use fuchsia `#D946EF` for non-interactive decorative elements; reserve it strictly for actionable targets. |
| **Urgency** | **Do** show urgency cues (low stock, limited-time sale) adjacent to the CTA button. | **Don't** bury critical purchase drivers deep within product descriptions. |
| **Cart Experience** | **Do** keep the cart drawer accessible from every page with smooth flyout animations. | **Don't** force a full page navigation/redirect upon adding an item to the bag. |
| **Pricing** | **Do** use secondary cyan `#22D3EE` for sale/promo pricing and strikethrough original prices in Text Tertiary (`#A3A3A3`). | **Don't** hide the price, shipping estimates, or return policy behind an extra click. |
| **Motion** | **Do** limit animation to subtle hover micro-interactions (e.g., product card lift `translateY(-3px)`). | **Don't** run more than one animated element per viewport; competing motion distracts buyers. |
| **Popups** | **Do** trigger lead-capture modals only after the user has scrolled at least 50% of the page. | **Don't** auto-open newsletter popups immediately upon page load. |
| **Readability** | **Do** keep product descriptions in font sizes of Body Small (`14px`) or larger. | **Don't** place critical details in font sizes below 14px, which impairs mobile legibility. |
