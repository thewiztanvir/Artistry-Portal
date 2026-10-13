import type { MetadataRoute } from 'next';

/**
 * Next.js sitemap — lists all pages for search engine indexing.
 * Update lastModified whenever page content changes significantly.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.artistry-bd.com';
  const lastModified = new Date('2024-01-01');

  return [
    {
      url: baseUrl,
      lastModified,
      changeFrequency: 'monthly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/what-we-do`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-work`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified,
      changeFrequency: 'yearly',
      priority: 0.7,
    },
  ];
}
