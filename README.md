# Artistry Accessories & Packaging — Website

A clean, fast, professional showcase website for **Artistry Accessories & Packaging** (Dhaka, Bangladesh).

Built strictly to the brand style guide specifications and product requirements document (PRD).

---

## 🏢 Office & Facility Address

**Registered Office & Facility:**  
Flat 4D, Silver Rain Tower, 88, Bijoy Nagar, Noya Paltan, Dhaka, Bangladesh  
- **Google Maps Directions:** [Direct Link](https://www.google.com/maps/dir/?api=1&destination=Silver+Rain+Tower+88+Bijoy+Nagar+Noya+Paltan+Dhaka+Bangladesh)
- **Phone:** +880 1700 000000
- **Email:** hello@artistry-bd.com
- **Business Hours:** Saturday – Thursday, 9 am – 6 pm

---

## 🚀 Getting Started

### 1. Prerequisites
- **Node.js** (v18.17.0 or newer recommended)
- **npm** (bundled with Node.js)

### 2. Installation & Local Development
```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Production Build & Static Export
```bash
# Build static HTML export (outputs to /out folder)
npm run build
```
The static export will be generated in the `out/` folder, ready for deployment to Netlify, Vercel, or any static web host with zero server cost.

---

## 📝 How to Update Content (For the Client)

All website copy and specifications live in typed JSON files inside `src/content/`. You can edit text without touching any code:

| File | Content Controlled |
|---|---|
| `src/content/site.json` | Company name, office address, phone numbers, WhatsApp, email, hours, and Google Maps links |
| `src/content/home.json` | Home hero title, subtitle, CTA buttons, and "Why Artistry" bullet points |
| `src/content/about.json` | Company background story, history, and capabilities table specifications |
| `src/content/whatwedo.json` | Descriptions, products, materials, and order approach for Garments & Accessories |
| `src/content/services.json` | Services summary cards on the homepage |
| `src/content/work.json` | Portfolio items (titles, categories, image paths, and captions) |

---

## 🖼️ How to Add or Replace Work Photos

1. Export photos with a **4:3 aspect ratio** (e.g., 1200 × 900 px or 800 × 600 px).
2. Save your optimized image files in `public/images/` (e.g. `public/images/polo-shirts.webp`).
3. Open `src/content/work.json` and update the `image` path for that item:
   ```json
   {
     "id": "w01",
     "title": "Export polo shirts",
     "category": "Garments",
     "image": "/images/polo-shirts.webp",
     "caption": "500-piece run of export polo shirts in pique fabric for European buyers."
   }
   ```
4. The site includes built-in `SafeImage` fallback handling: if an image file is ever missing or fails to load, it automatically falls back to an elegant branded trade-catalogue placeholder without breaking layout.
5. Run `npm run build` to update the site.

---

## 📬 Contact Form Setup (Formspree)

The contact form is configured in `src/components/ContactForm.tsx`.
1. Sign up for a free account at [Formspree.io](https://formspree.io).
2. Create a new form and copy your Form ID (e.g., `xyzab123`).
3. In `src/components/ContactForm.tsx`, replace `YOUR_FORM_ID` with your Form ID:
   ```ts
   const FORMSPREE_URL = 'https://formspree.io/f/xyzab123';
   ```
4. Submissions from buyers will now be routed directly to your business email inbox with spam honeypot filtering included.

---

## 🎨 Brand Identity Tokens

- **Indigo** (`#1C2766`): Primary buttons, footer, dark sections, H2 headings
- **Ink** (`#141C4F`): Primary body text, H1 headings
- **Slate** (`#4B5272`): Secondary text, captions, H3 headings
- **Kraft** (`#C99A5B`): Signature stitch dividers, highlights on Indigo
- **Thread Red** (`#D6332A`): Logo accents and detail stitches
- **Mist** (`#EEF0F6`): Alternating section panels, category badges
- **Line** (`#DADDE8`): Card borders and dividing rules
- **White** (`#FFFFFF`): Clean page background

---

## ☁️ Deployment to Netlify

1. Connect your GitHub repository to Netlify.
2. Build command: `npm run build`
3. Publish directory: `out`
4. Add your custom domain under Domain Management and enable HTTPS.
