'use client';

import { useState, useMemo } from 'react';
import type { WorkItem } from '@/lib/types';
import WorkCard from '@/components/WorkCard';
import GalleryFilter from '@/components/GalleryFilter';
import Lightbox from '@/components/Lightbox';

type Category = 'All' | 'Garments' | 'Accessories' | 'Packaging';

const categories: Category[] = ['All', 'Garments', 'Accessories', 'Packaging'];

interface OurWorkGalleryProps {
  items: WorkItem[];
}

export default function OurWorkGallery({ items }: OurWorkGalleryProps) {
  const [selectedCategory, setSelectedCategory] = useState<Category>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  // Filter items based on selected category
  const filteredItems = useMemo(() => {
    if (selectedCategory === 'All') return items;
    return items.filter((item) => item.category === selectedCategory);
  }, [items, selectedCategory]);

  const handleOpenLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const handleCloseLightbox = () => {
    setLightboxIndex(null);
  };

  const handlePrev = () => {
    if (lightboxIndex !== null && lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1);
    }
  };

  const handleNext = () => {
    if (lightboxIndex !== null && lightboxIndex < filteredItems.length - 1) {
      setLightboxIndex(lightboxIndex + 1);
    }
  };

  return (
    <div>
      {/* Category filter bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <GalleryFilter
          categories={categories}
          selected={selectedCategory}
          onSelect={(cat) => {
            setSelectedCategory(cat);
            setLightboxIndex(null);
          }}
        />

        <p className="text-caption text-slate">
          Showing {filteredItems.length} of {items.length} items
        </p>
      </div>

      {/* Grid of WorkCards */}
      {filteredItems.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item, index) => (
            <WorkCard
              key={item.id}
              item={item}
              onClick={() => handleOpenLightbox(index)}
            />
          ))}
        </div>
      ) : (
        <div className="py-16 text-center border border-line rounded-lg bg-mist/50">
          <p className="text-slate text-base">No items found in this category.</p>
        </div>
      )}

      {/* Lightbox dialog modal */}
      {lightboxIndex !== null && (
        <Lightbox
          items={filteredItems}
          currentIndex={lightboxIndex}
          onClose={handleCloseLightbox}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}
    </div>
  );
}
