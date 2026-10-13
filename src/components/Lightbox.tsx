'use client';

import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SafeImage from '@/components/SafeImage';
import type { WorkItem } from '@/lib/types';

interface LightboxProps {
  items: WorkItem[];
  currentIndex: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export default function Lightbox({ items, currentIndex, onClose, onPrev, onNext }: LightboxProps) {
  const current = items[currentIndex];
  const hasPrev = currentIndex > 0;
  const hasNext = currentIndex < items.length - 1;

  /* Keyboard navigation */
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && hasPrev) onPrev();
      if (e.key === 'ArrowRight' && hasNext) onNext();
    },
    [onClose, onPrev, onNext, hasPrev, hasNext]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    // Prevent body scroll while lightbox is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [handleKeyDown]);

  if (!current) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-ink/90 backdrop-blur-sm p-4 sm:p-6"
      role="dialog"
      aria-modal="true"
      aria-label={`Showcase item: ${current.title}`}
      onClick={onClose}
    >
      {/* Dialog container */}
      <div
        className="relative max-w-4xl w-full bg-white rounded-xl overflow-hidden shadow-2xl border border-line flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top close button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 bg-white/90 hover:bg-white text-ink hover:text-indigo rounded-full shadow-md border border-line transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" strokeWidth={2} />
        </button>

        {/* Prev button */}
        {hasPrev && (
          <button
            type="button"
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-white/90 hover:bg-white text-ink hover:text-indigo rounded-full shadow-md border border-line transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo cursor-pointer"
            aria-label="Previous showcase item"
          >
            <ChevronLeft className="w-6 h-6" strokeWidth={2} />
          </button>
        )}

        {/* Next button */}
        {hasNext && (
          <button
            type="button"
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2.5 bg-white/90 hover:bg-white text-ink hover:text-indigo rounded-full shadow-md border border-line transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo cursor-pointer"
            aria-label="Next showcase item"
          >
            <ChevronRight className="w-6 h-6" strokeWidth={2} />
          </button>
        )}

        {/* Image viewport — 4:3 container */}
        <div className="relative w-full aspect-[4/3] bg-mist max-h-[65vh]">
          <SafeImage
            src={current.image}
            alt={current.caption || current.title}
            fill
            className="object-contain p-2"
            sizes="(max-width: 1024px) 100vw, 896px"
            priority
            category={current.category}
          />
        </div>

        {/* Caption & Metadata */}
        <div className="p-6 border-t border-line bg-white flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="px-2.5 py-0.5 bg-mist text-slate text-xs font-semibold rounded border border-line">
                {current.category}
              </span>
              <span className="text-xs text-slate font-mono">ID: {current.id.toUpperCase()}</span>
            </div>
            <h2 className="text-xl font-semibold text-ink">{current.title}</h2>
            <p className="mt-1 text-sm text-slate leading-relaxed max-w-2xl">{current.caption}</p>
          </div>
          <div className="text-caption text-slate/80 font-mono self-start sm:self-auto bg-mist px-3 py-1.5 rounded border border-line">
            {currentIndex + 1} / {items.length}
          </div>
        </div>
      </div>
    </div>
  );
}
