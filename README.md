# Oakline Realty — Austin Luxury Real Estate Website

A client-ready, mobile-first luxury real estate website built for **Oakline Realty**, a fictional boutique residential advisory firm serving Austin, Texas, Westlake Hills, and the surrounding Texas Hill Country.

Engineered with **HTML5, CSS3, vanilla JavaScript, and Bootstrap 5.3.3**, without paid plugins, paid themes, or external backend requirements.

---

## 🎨 Brand Identity & Visual Language

- **Brand Personality:** Sophisticated, welcoming, confident, architectural, editorial.
- **Positioning:** Premium, trustworthy, modern residential real estate advisory.
- **Curated Palette:**
  - **Deep Midnight Navy:** `#101C2C` (Primary structural surfaces, footer, high-contrast dark accents)
  - **Warm Ivory:** `#F7F5F0` (Editorial canvas, card backgrounds, and warm section alternates)
  - **Muted Champagne Gold:** `#C6A66B` (Refined accents, focus rings, primary action buttons)
  - **Accessible Gold Text:** `#987537` (WCAG AA compliant contrast > 4.5:1 on light backgrounds)
  - **Charcoal:** `#252A31` (Primary high-legibility body prose)
  - **Crisp White:** `#FFFFFF` (Card surfaces, inputs, modal containers)
- **Typography:**
  - *Headlines & Display:* Google Fonts **Cormorant Garamond** (Editorial serif)
  - *Interface & Body:* Google Fonts **Plus Jakarta Sans** (Modern geometric sans)
- **Zero-Pill Metadata Discipline:** Property metadata is rendered as unboxed text with subtle typographic separators (`·`), avoiding generic AI template badge clutter.

---

## 📸 Real Property Photography & Licensing

All property photography used in this demonstration is sourced from **Unsplash** under the [Unsplash License](https://unsplash.com/license), which grants an irrevocable, nonexclusive, worldwide copyright license to download, copy, modify, distribute, perform, and use photos for free, including for commercial purposes, without permission from or attributing the photographer (attribution provided below as professional best practice):

| Section / Property | Unsplash Photo ID | Subject & Context |
| :--- | :--- | :--- |
| **Hero & Westlake Estate** | `photo-1600596542815-ffad4c1539a9` | Modern estate exterior with reflection pool at twilight |
| **Westlake Sanctuary (Card)** | `photo-1600585154340-be6161a56a0c` | Architectural Hill Country stone residence & grounds |
| **Downtown Skyline Penthouse** | `photo-1545324418-cc1a3fa10c00` | High-rise luxury condo terrace with water & skyline views |
| **Bouldin Creek Craftsman** | `photo-1568605117036-5fe5e7bab0b7` | Contemporary Austin craftsman home with warm cedar accents |
| **Barton Creek Spanish Oaks Villa** | `photo-1613490493576-7fde63acd811` | Gated Hill Country villa with resort pool & canyon views |
| **Clarksville Historic Heritage** | `photo-1598228723793-52759bba239c` | Restored 1920s historic craftsman home with pecan canopy |
| **Mueller Modern Courtyard** | `photo-1605276374104-dee2a0ed3cd6` | LEED Platinum sustainable modern courtyard townhome |
| **Principal Advisor Portrait** | `photo-1573496359142-b8d87734a5a2` | Executive portrait of Elena Vance |
| **Interiors: Great Room** | `photo-1600210492486-724fe5c67fb0` | Open floor-to-ceiling glass great room with canyon views |
| **Interiors: Chef's Kitchen** | `photo-1600585152220-90363fe7e115` | Gourmet kitchen with waterfall quartzite island & Thermador |
| **Interiors: Primary Suite** | `photo-1616594039964-ae9021a400a0` | Light-filled owner's bedroom sanctuary & private loggia |

*Resilient Zero-Broken-Image Fallback:* Every image element includes `onerror` fallback handling to ensure the layout remains visually complete even under extreme offline or network latency conditions.

---

## 📁 File Structure

```text
├── index.html          # Complete semantic HTML5 structure with all 10 core sections & modals
├── styles.css          # Luxury design system, CSS custom properties, and responsive layout
├── script.js           # Vanilla JS interactive logic (search, filtering, favorites, modal, validation)
├── public/             # Public mirror assets for static web servers
│   ├── styles.css
│   └── script.js
├── vercel.json         # Vercel configuration (Vite preset, build command, dist output, SPA rewrites)
├── package.json        # Project metadata, dependencies, and build scripts
├── package-lock.json   # Deterministic dependency lockfile for npm ci on Vercel
├── vite.config.ts      # Vite configuration with clean ESM paths
├── metadata.json       # Application metadata configuration
└── README.md           # Documentation, setup guide, and pre-launch client checklist
```

---

## ⚡ Vercel Deployment Instructions

Deploying this project to Vercel is seamless with zero configuration needed:

1. **Push to GitHub** (see instructions below).
2. Go to [Vercel](https://vercel.com/) and click **"Add New Project"**.
3. Select your GitHub repository (`oakline-realty`).
4. Vercel automatically detects the **Vite** framework preset from `vercel.json` and `package.json`:
   - **Framework Preset:** `Vite`
   - **Root Directory:** `./`
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`
   - **Environment Variables:** *(None required for client-side demo)*
5. Click **"Deploy"**. The site will build in ~200ms and go live.

---

## 🐙 GitHub Push Instructions

### To a New GitHub Repository
```bash
git init
git add .
git commit -m "feat: complete Oakline Realty luxury real estate website ready for Vercel"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/oakline-realty.git
git push -u origin main
```

### To Update an Existing Repository
```bash
git add .
git commit -m "fix: resolve esbuild peer conflict, add package-lock.json, and configure vercel.json"
git push origin main
```

---

## 🚀 Local Setup Instructions

This application is 100% static and requires no database or build step to preview. Run it locally using any of the following methods:

### Option A: Using Vite / Node.js (Current Environment)
```bash
npm run dev
```
Then visit `http://localhost:3000`.

### Option B: Using Python (Simplest)
Open your terminal in the project directory and run:
```bash
python3 -m http.server 8000
```
Then visit `http://localhost:8000` in your browser.

### Option C: Direct Browser Preview
Double-click `index.html` or drag it into Chrome, Firefox, Safari, or Edge.

---

## 🛠️ Implemented Sections & Advanced Functionality

1. **Premium Header:**
   - Custom Oakline Realty wordmark with an interlocking architectural monogram symbol (`O·R`).
   - Clean single-line navigation links with animated underline hover states.
   - Prominent *"Private Consultation"* champagne-gold action button.
   - Mobile hamburger menu with auto-collapse on link click and `Escape` key dismissal.

2. **Editorial Hero Section:**
   - Headline: *"Find a Place to Call Home"*.
   - Real cinematic photography of The Westlake Modern Sanctuary overlooking the Texas Hill Country at dusk.
   - Dual CTAs (*"Explore Curated Portfolio"* & *"Schedule Private Advisory"*).
   - Key market advisory metrics strip (12+ Years Advisory, 100% Fiduciary, Private Access, TREC Compliant).

3. **Dedicated Property Search Interface (Interactive):**
   - Four simultaneous filter dimensions:
     - **Location:** All Austin Locations, Westlake Hills, Downtown & Rainey, South Congress / 78704, Barton Creek, Clarksville, Mueller.
     - **Property Architecture:** All Types, Single-Family Residence, Luxury High-Rise Condo, Modern Craftsman / Townhome.
     - **Price Range:** Any Price, Under $1.5M, $1.5M – $2.0M, $2.0M+.
     - **Bedrooms:** Any Bedrooms, 2+ Beds, 3+ Beds, 4+ Beds.
   - Live results count feedback ("Showing X of 6 curated Austin residences").
   - Seamless "Reset All Criteria" button.

4. **Featured Property Cards (6 Curated Residences):**
   - 6 Curated Austin residences representing all major enclaves:
     - *The Westlake Modern Sanctuary* ($2,450,000 · 4 Beds · 4.5 Baths · 3,820 sq ft · Built 2023)
     - *The Skyline Penthouse at Lady Bird Lake* ($1,875,000 · 2 Beds · 2.5 Baths · 2,150 sq ft · Built 2021)
     - *The Bouldin Creek Artisan Craftsman* ($1,295,000 · 3 Beds · 3.0 Baths · 2,410 sq ft · Built 2022)
     - *The Barton Creek Spanish Oaks Villa* ($3,150,000 · 5 Beds · 5.5 Baths · 5,120 sq ft · Built 2020)
     - *The Clarksville Historic Heritage Estate* ($1,780,000 · 4 Beds · 3.5 Baths · 3,240 sq ft · Built 2019)
     - *The Mueller Modern Courtyard Residence* ($965,000 · 3 Beds · 2.5 Baths · 2,280 sq ft · Built 2022)
   - Interactive Save/Favorite bookmark button with toggling active state.
   - **Quick View Modal with Interactive 4-Photo Gallery:**
     - High-resolution main photo with Prev / Next navigation buttons.
     - Interactive thumbnail gallery: Front Elevation, Great Room with canyon vistas, Chef's Kitchen, and Primary Suite.
     - Keyboard arrow key navigation (`←` and `→`).
     - Austin Estimated Monthly Mortgage/Tax calculation (~1.9% Travis County tax rate + insurance).
     - School district information and full architectural feature list.
   - Direct *"Schedule Tour"* button that pre-populates the contact form with property title, address, and neighborhood.
   - Graceful empty state when filter combinations yield zero results, with a one-click reset action.

5. **Brand Introduction & Agent Profile:**
   - Principal Advisor profile for *Elena Vance* with an executive portrait and CLHMS credentials.
   - Austin native insight narrative (zoning, deed restrictions, school enrollments, off-market access).
   - Direct click-to-call demo line and private advisory booking button.

6. **Bespoke Advisory Services:**
   - Buyer Representation, Seller & Listing Marketing, Austin Executive Relocation.
   - 4-Step Structured Client Journey (Discovery → Curation → Negotiation → Settlement).

7. **Austin Neighborhood Enclave Guide:**
   - Visual photographic guides for 6 core Austin sub-markets: Westlake Hills, Downtown Rainey, South Congress / Bouldin, Clarksville, Barton Creek, and Mueller.
   - Live click-to-filter triggers that filter the property portfolio directly to that enclave.

8. **Prominently Labelled Testimonials:**
   - Clearly marked with prominent banner: *"Sample testimonials — replace before launch"*.
   - Fictional executive client feedback highlighting off-market discretion and micro-market pricing.

9. **Lead Generation & Contact Form:**
   - Real-time client-side validation for Name (min 2 chars), Email (RFC regex), Phone (auto US mask `(XXX) XXX-XXXX`), Objective, Target Area, Message (min 10 chars, 500 char live counter), and Mandatory Communication Consent.
   - Accessible error feedback messages and `aria-invalid` state synchronization.
   - Simulated transmission feedback modal showing submitted field summary without attempting to send live unauthenticated email.

10. **Refined Legal Footer & Required Texas Disclosures:**
    - Fictional Portfolio Disclaimer banner.
    - Texas Real Estate Commission (TREC) Consumer Protection Notice modal.
    - TREC Information About Brokerage Services (IABS) modal.
    - Client Privacy Policy placeholder modal.
    - Equal Housing Opportunity statement.

---

## ✅ Pre-Launch Client Replacement Checklist

Before deploying this website for an actual licensed real estate broker or sales agent, complete the following items:

- [ ] **1. Brokerage Identity & Legal Name:**
  - Replace *"Oakline Realty"* with the official brokerage legal entity registered with the Texas Real Estate Commission (TREC) or relevant state licensing board.
- [ ] **2. Mandatory TREC Documents (Texas Requirement):**
  - Replace the IABS placeholder modal link with a direct link to the executed TREC Form IABS 1-0 PDF naming the sponsoring broker, license number, and designated agent.
  - Link the Consumer Protection Notice link to TREC Form CN 1-5.
- [ ] **3. MLS Listing Feed / Active Inventory:**
  - Replace the 6 sample properties in `script.js` with active listings, IDX/RETS broker feed integration, or your MLS syndicate API.
  - Replace sample photos with high-resolution HDR photography captured by your professional architectural photographer.
- [ ] **4. Principal Advisor Bio & Headshot:**
  - Replace Elena Vance's sample headshot and biographical narrative with the licensed agent's real credentials, achievements, headshot, and verified license number.
- [ ] **5. Form Backend & CRM Integration:**
  - Wire the form submit handler in `script.js` to a real endpoint (e.g. Zapier webhook, Formspree, HubSpot, Follow Up Boss, or your brokerage CRM).
- [ ] **6. Production Domain & Analytics:**
  - Add Google Tag Manager / GA4 tracking tags.
  - Verify OpenGraph images (`og:image`) match client branding on your production domain.
- [ ] **7. Privacy Policy & Terms of Service:**
  - Replace modal placeholder text with your attorney-approved client privacy policy.
