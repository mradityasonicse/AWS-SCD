# AWS Student Community Day — Central India (RISU Edition) ☁️🚀

Official, modern website for **AWS Student Community Day Central India**, hosted at **Rungta International Skills University (RISU)**, Bhilai, Chhattisgarh.

Modeled after and elevated from the Central India AWS Student Community Day design, fully customized for RISU with high-performance animations, holographic badge creation, and interactive ticket checkout.

---

## 🌟 Features

- **Atmospheric Nebula Hero & Countdown:** Dynamic particle canvas with real-time countdown timer to event kickoff.
- **Infinite Partner Marquee:** Continuous marquee showcasing AWS, AWS Student Builder Group (SBG), RISU, Amazon Bedrock, and tech partners.
- **Conference Tracks & Bento Metrics:** 4 dedicated technical tracks (Generative AI & LLMs, Cloud Native & Serverless, DevOps & Security, Career Pathways) with real-time metrics.
- **Keynote Speakers with 3D Mouse Tilt:** Interactive tilt cards featuring Praful Bagai (Head of DevRel, AWS), AWS Community Builders, and industry leaders with direct session and social links.
- **Dynamic Agenda / Timetable:** Interactive category filters (All, Keynotes, GenAI, DevOps, Hands-on, Networking) with live session tags and speaker mappings.
- **Holographic Event Badge Generator:**
  - Live preview with custom attendee avatar upload (drag & drop / file picker).
  - Fine zoom controls and automatic attendee ID generation (`RISU-AWS-XXXX`).
  - Scannable QR code and holographic foil sheen.
  - One-click high-resolution PNG badge export using `html2canvas`.
- **Tiered Ticket Claim & Registration Flow:**
  - 4 ticket tiers (Early Bird, Regular, Premium Builder, Community Patron) with seat-claim percentage indicators.
  - Interactive two-step registration modal with student details, university validation, and confetti celebration effect.
- **Campus Venue & Transit Guide:**
  - Location details for Rungta Knowledge City, Kohka-Kurud Road, Bhilai.
  - Transit distances from Bhilai Power House (BPH) & Durg Junction (DURG) railway stations.
  - Interactive Google Maps integration with 1-click directions.
- **Sponsors & Community Ecosystem:** Title, Tech, Academic Host, and Community partner showcase.
- **Interactive FAQ Accordion:** Expanding questions and answers covering attendance, travel allowances, perks, and swags.
- **Contact & Organizer Profile:** Dedicated profile for Uddyan Sahu (AWS SBG Leader, RISU) with multi-step inquiry form and live contact links.

---

## 🛠️ Tech Stack

- **Framework:** React 19 + TypeScript
- **Bundler & Tooling:** Vite 8.x
- **Styling:** Tailwind CSS v4 (`@tailwindcss/vite`)
- **Icons:** Lucide React + Bespoke SVGs
- **Interactive Canvas & Effects:**
  - Custom HTML5 Particle Nebula Starfield
  - `html2canvas` for HD holographic badge generation
  - `canvas-confetti` for celebratory registration interactions
- **Runtime / Package Manager:** Bun (also compatible with Node.js / npm / pnpm)

---

## 🚀 Getting Started

### Prerequisites

Ensure you have either [Bun](https://bun.sh/) (recommended) or [Node.js](https://nodejs.org/) (v18+) installed.

### 1. Installation

```bash
# Clone the repository and navigate into the folder
cd aws-scd-risu

# Install dependencies with Bun
bun install

# Or with npm
npm install
```

### 2. Development Server

```bash
# Start the local development server
bun dev

# Or with npm
npm run dev
```

The application will be live at `http://localhost:5173/`.

### 3. Production Build & Preview

```bash
# Build production bundle with strict type verification
bun run build

# Preview production build locally
bun run preview
```

Production preview runs at `http://localhost:4173/`.

---

## 📁 Project Structure

```
aws-scd-risu/
├── public/                     # Static media and brand assets
│   ├── AWS.png                 # AWS Official Logo
│   ├── AWS_SBG.png             # AWS Student Builder Group Logo
│   ├── risu-logo.svg           # RISU University Vector Logo
│   ├── risu-crest.svg          # RISU Crest Badge
│   ├── praful_bagai.png        # Speaker photo (Head of DevRel AWS)
│   ├── deepak_nishad_.jpg      # Speaker photo
│   ├── nikita_mourya.png       # Speaker photo
│   ├── Varsha_Verma.jpeg       # Speaker photo
│   ├── anmoldeep_singh.png     # Speaker photo
│   └── meetio.png              # Sponsor logo
├── src/
│   ├── components/
│   │   ├── About.tsx           # Bento grid & conference tracks
│   │   ├── Agenda.tsx          # Filterable event schedule
│   │   ├── BadgeGenerator.tsx  # Holographic custom lanyard badge exporter
│   │   ├── ContactSection.tsx  # Organizer spotlight & contact form
│   │   ├── CosmicBackground.tsx# Interactive starfield canvas
│   │   ├── FAQ.tsx             # Interactive FAQ accordion
│   │   ├── Footer.tsx          # RISU branding, legal, and social links
│   │   ├── Hero.tsx            # Main hero with live countdown timer
│   │   ├── LogoMarquee.tsx     # Infinite sponsor marquee
│   │   ├── Navbar.tsx          # Glassmorphic header with quick jump navigation
│   │   ├── RegisterModal.tsx   # Two-step registration modal with confetti
│   │   ├── Speakers.tsx        # 3D interactive tilt cards for speakers
│   │   ├── Sponsors.tsx        # Tiered sponsors and partner matrix
│   │   ├── Tickets.tsx         # Pass tiers with claim progress bars
│   │   └── Venue.tsx           # Campus maps and transit details for RISU
│   ├── data/
│   │   └── eventData.ts        # Single source of truth for speakers, talks, & FAQs
│   ├── App.tsx                 # Root application composition
│   ├── main.tsx                # React 19 entry point
│   └── index.css               # Tailwind CSS v4 imports & custom glow utilities
├── package.json
├── tsconfig.json
└── vite.config.ts
```

---

## 🏛️ Host Institution

**Rungta International Skills University (RISU)**  
Rungta Knowledge City, Kohka-Kurud Road, Bhilai, Chhattisgarh 490024  
- In collaboration with **AWS Student Builder Group (SBG) RISU**  
- Official Inquiries: `aws.sbg.risu@gmail.com`
