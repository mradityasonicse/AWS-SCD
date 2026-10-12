---
version: 2.0.0
name: AWS Student Community Day Dark Theme Design System
tagline: "Authentic AWS Midnight Navy, Signature Smile Orange & Cloud Glassmorphism"
category: Developer Conference & Cloud Summit
date: 2026-10-12
description: "The official design system for AWS Student Community Day 2026 (RISU). Built with an authentic AWS dark theme aesthetic featuring deep midnight navy canvas, Amazon Squid Ink surfaces, signature AWS Smile Orange (#FF9900) highlights, AWS Cloud Cyan (#00A4E4) accents, and frosted glass navigation."

colors:
  # Primary Brand Canvas & Backgrounds
  backgroundGlobal: "#0B0F17"    # Deep AWS Midnight Navy canvas
  surfaceDark: "#131921"          # Amazon Squid Ink (Main cards, navbar island, ticker)
  surfaceElevated: "#161E2D"      # Elevated cards, input fields, badge containers
  surfaceMuted: "#1E293B"         # Secondary card elements & active states
  
  # AWS Signature Accents
  primary: "#FF9900"              # AWS Signature Smile Orange
  primaryHover: "#FFAC33"         # Button hover & glow highlights
  primaryActive: "#EC7211"        # Active/pressed orange gradient endpoint
  primaryGlow: "rgba(255, 153, 0, 0.25)" # Radiant aura on focus & hover
  
  # AWS Cloud & Secondary Accents
  cloudCyan: "#00A4E4"            # AWS Cloud Cyan (Domain chips, tech badges)
  cyanBright: "#38BDF8"           # Ambient cyan glow and secondary icons
  amazonGold: "#FFD814"           # Amazon Primary Gold (VIP / Keynote stars)
  
  # Borders & Dividers
  borderSubtle: "#232F3E"         # Amazon Nav Secondary slate border
  borderMedium: "#37475A"         # Hover borders & prominent dividers
  borderHighlight: "#FF9900"      # Active card stroke & focused inputs
  
  # Text & Ink Hierarchy
  textPrimary: "#FFFFFF"          # Headlines, card titles & high-contrast elements
  textBody: "#F8FAFC"             # Body copy & standard readability text
  textSecondary: "#94A3B8"        # Descriptions, metadata & muted labels
  textMuted: "#64748B"            # Timestamps, footers & tertiary info

typography:
  headlineFont: "'Inter', -apple-system, BlinkMacSystemFont, sans-serif"
  bodyFont: "'Inter', system-ui, sans-serif"
  monoFont: "'JetBrains Mono', 'Fira Code', monospace"
  accentFont: "'Cinzel', Georgia, serif"

components:
  # Navigation Island
  navbar:
    background: "rgba(19, 25, 33, 0.85)"
    backdropBlur: "16px"
    borderColor: "#232F3E"
    activeIndicator: "#FF9900"
    
  # Cosmic Canvas Background
  cosmicBackground:
    canvasBackground: "#0B0F17"
    particleColors: ["#FF9900", "#FFAC33", "#00A4E4", "#38BDF8", "#FFD814", "#F8FAFC"]
    gridColor: "rgba(35, 47, 62, 0.18)"
    ambientGlows:
      orange: "rgba(255, 153, 0, 0.08)"
      cyan: "rgba(0, 164, 228, 0.06)"

  # Cards & Modules
  cardDefault:
    backgroundColor: "#131921"
    borderColor: "#232F3E"
    hoverBorderColor: "rgba(255, 153, 0, 0.4)"
    hoverGlow: "0 12px 30px rgba(255, 153, 0, 0.12)"
    
  # Action Buttons
  btnPrimary:
    background: "linear-gradient(135deg, #FF9900 0%, #FFAC33 50%, #EC7211 100%)"
    textColor: "#0B0F17"
    fontWeight: "900"
    boxShadow: "0 8px 24px rgba(255, 153, 0, 0.35)"
    
  # Input Fields
  inputs:
    backgroundColor: "#161E2D"
    borderColor: "#232F3E"
    focusBorderColor: "#FF9900"
    textColor: "#FFFFFF"
    placeholderColor: "#64748B"

layout:
  maxWidth: "1280px"
  sectionSpacing: "py-28"
  gridGap: "gap-6 sm:gap-8"
---
