/* ── Shared TypeScript types ──────────────────────────────────── */

export interface WorkItem {
  id: string;
  title: string;
  category: 'Garments' | 'Accessories' | 'Packaging';
  image: string;
  caption: string;
  aspectRatio?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  items: string[];
  orderInfo: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface ContactInfo {
  address: string;
  shortAddress?: string;
  phone: string;
  whatsapp: string;
  email: string;
  hours: string;
  mapLink: string;
  directionsLink?: string;
}

export interface ProofPoint {
  icon?: string;
  iconName?: string;
  heading: string;
  body: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}
