# Artistry — Web Portal

Official website for **Artistry Accessories & Packaging** — manufacturer of garment equipment, clothing, brand trims, and export packaging.

A modern, high-performance static web application built with **Next.js 14**, **TypeScript**, and **Tailwind CSS**.

---

## 🌟 Key Features

- **Industrial B2B Architecture:** Trade-catalogue aesthetic tailored for international buyers, apparel factories, and retail brands.
- **Full Static Export:** Pre-rendered static HTML/CSS/JS (`output: 'export'`) for instant load times, zero server overhead, and high security.
- **Headless Content Layer:** All site copy, capabilities, service divisions, and portfolio showcases are driven by typed JSON files in `src/content/`.
- **Accessible & Responsive:** Mobile-first layout with WCAG AA compliance, semantic HTML, and zero layout shift.
- **Client Components Isolated:** Interactive features (gallery filter, image modal lightbox, contact form validation) are strictly sandboxed client components with server-rendered shells.

---

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14 (App Router)** | Framework & Static Site Generation |
| **TypeScript** | Strict compile-time type safety |
| **Tailwind CSS v3** | Design token-driven styling & responsive utilities |
| **Lucide React** | Consistent SVG iconography |
| **Zod** | Contact form validation schema |

---

## 📁 Project Structure

```text
├── public/                 # Static assets (brand SVG logos, product vectors, robots.txt)
│   ├── artistry-logo/      # Official vector brand marks and logo variations
│   └── images/             # Product category graphics & showcase assets
├── src/
│   ├── app/                # Next.js App Router pages & layouts
│   │   ├── about/          # Company story, leadership & operational profile
│   │   ├── contact/        # Contact details & enquiry form
│   │   ├── our-work/       # Portfolio gallery & lightbox
│   │   ├── what-we-do/     # Core manufacturing & supply divisions
│   │   ├── globals.css     # Brand CSS variables & base styles
│   │   ├── layout.tsx      # Root layout with font optimization & navigation
│   │   └── page.tsx        # Homepage hero & capabilities summary
│   ├── components/         # Reusable UI components
│   ├── content/            # Typed JSON data files for site content
│   └── lib/                # Shared TypeScript types & helper functions
├── next.config.mjs         # Static export & Next.js configuration
├── tailwind.config.ts      # Brand color palette & typography tokens
└── tsconfig.json           # TypeScript configuration
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v18.17.0 or higher recommended)
- **npm** (bundled with Node.js)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/thewiztanvir/Artistry-Portal.git
   cd Artistry-Portal
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🏗️ Production Build

To build the static production export:

```bash
npm run build
```

This compiles all routes and generates a static output directory in `out/`. The generated files can be hosted on any static hosting platform (Vercel, Netlify, Cloudflare Pages, AWS S3, GitHub Pages).

---

## 📝 Content Management

Site content can be modified directly in `src/content/` without editing React code:

| File | Description |
|---|---|
| `src/content/site.json` | General company profile, contact details, and social links |
| `src/content/home.json` | Homepage hero copy, value propositions, and featured work IDs |
| `src/content/about.json` | Corporate background, timeline, and operational overview |
| `src/content/services.json` | Manufacturing & supply divisions summary |
| `src/content/whatwedo.json` | In-depth technical specifications and order workflow |
| `src/content/work.json` | Product gallery items (categories, image paths, descriptions) |

---

## 🎨 Design System & Brand Palette

The design system uses strict brand tokens configured in `tailwind.config.ts`:

- **Indigo** (`#1C2766`): Primary brand color for headers, buttons, and dark sections
- **Ink** (`#141C4F`): Primary body text and deep headings
- **Slate** (`#4B5272`): Secondary text, captions, and metadata
- **Kraft** (`#C99A5B`): Brand highlight and signature stitch dividers
- **Mist** (`#EEF0F6`): Alternating section backgrounds and card panels
- **Line** (`#DADDE8`): Subtle card borders and horizontal rules
- **Thread Red** (`#D6332A`): Logo detail dots and accents

---

## 📄 License

Proprietary — All rights reserved © Artistry Accessories & Packaging.
