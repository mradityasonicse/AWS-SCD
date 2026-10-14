---
version: 3.0.0
name: AWS Student Builder Group Architectural Grid Design System
tagline: "Architectural Precision Grid, Diagonal Ascending Staircase & Multi-Accent Builder Palette"
category: Developer Conference & Student Summit
date: 2026-10-14
description: "The official design system for AWS Student Community Day 2026 (RISU). Built with zero AI slop, featuring an architectural precision grid, AWS Builder diagonal ascending block stairs (1x1, 1x1, 1x1, 2x2, 1x1), and a 5-tone secondary accent palette (Electric Violet, Cloud Cyan, Neon Magenta, Emerald Green, Smile Orange)."

themeTokens:
  backgroundModes:
    dark: "#111622"               # Deep architectural slate navy
    light: "#FFFFFF"              # Pure crisp daylight canvas
  
  primaryColor:
    hex: "#FF9900"                 # AWS Signature Smile Orange (Kept strictly intact)
    hover: "#FFAC33"
    active: "#E68A00"

  secondaryPalette:
    order: ["blue", "pink", "green", "orange", "purple"]
    blue:
      hex: "#42B4FF"
      name: "Cloud Blue"
      glow: "rgba(66, 180, 255, 0.35)"
    pink:
      hex: "#FF57EA"
      name: "Neon Pink"
      glow: "rgba(255, 87, 234, 0.35)"
    green:
      hex: "#00E582"
      name: "Cyber Green"
      glow: "rgba(0, 229, 130, 0.35)"
    orange:
      hex: "#FF9900"
      name: "Builder Orange"
      glow: "rgba(255, 153, 0, 0.35)"
    purple:                        # Active Default Theme (Featured in Reference UI)
      hex: "#AD5CFF"
      name: "Electric Purple"
      glow: "rgba(173, 92, 255, 0.35)"

architecturalMotifs:
  gridEngine:
    cellSize: "56px"
    lineColorDark: "rgba(255, 255, 255, 0.08)"
    lineColorLight: "rgba(15, 23, 42, 0.08)"
    intersections: "Precision blueprint crosshairs (+)"
    mouseInteraction: "Cell illumination with hairline border glint"
  
  builderStairs:
    description: "Iconic diagonal corner-to-corner stepping blocks representing ascending progression"
    geometry:
      step1: "1x1 unit"
      step2: "1x1 unit"
      step3: "1x1 unit"
      step4: "2x2 double-scale unit"
      step5: "1x1 unit"
      presence: "Agenda Studio Showcase Board, Hero Accents, Badges"

posterSpecifications:
  dimensions: "1080 × 1350 px (4:5 Aspect Ratio / Vertical Social & Print Poster)"
  typographyHierarchy:
    mainHook:
      font: "Bebas Neue"
      size: "120–190 px"
      purpose: "Hero headline / Primary event title"
    secondaryHeadline:
      font: "Bebas Neue"
      size: "65–100 px"
      purpose: "Track name / Major keynote focus"
    subheading:
      font: "Inter SemiBold (600)"
      size: "30–42 px"
      purpose: "Supporting value proposition / Event theme"
    description:
      font: "Inter Regular (400)"
      size: "23–30 px"
      purpose: "Event details / Bio / Track overview"
    ctaButton:
      font: "Inter Bold (700)"
      size: "24–32 px"
      purpose: "Registration / Scan QR / Ticket call-to-action"
    dateVenue:
      font: "IBM Plex Mono"
      size: "18–24 px"
      purpose: "Event timing, calendar date, venue coordinates"
    smallFooter:
      font: "Inter Medium (500)"
      size: "16–20 px"
      purpose: "Legal, organizer credits, social handles"

zeroAiSlopStandard:
  - "BANNED: Blurry amorphous gradient balls (blur-[120px], blur-[160px], blur-[180px])"
  - "BANNED: Messy pseudo-constellation star meshes"
  - "ENFORCED: Razor-sharp architectural grid lines with precision mathematical spacing"
  - "ENFORCED: Solid and semi-translucent crisp geometric blocks"
  - "ENFORCED: Clean Swiss/Amazon Ember typography hierarchy with high contrast"
---

