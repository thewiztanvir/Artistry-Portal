'use client';

import SafeImage from '@/components/SafeImage';
import type { WorkItem } from '@/lib/types';

interface WorkCardProps {
  item: WorkItem;
  onClick: () => void;
}

/* Category badge colors adhering to brand palette */
const categoryStyle: Record<string, string> = {
  Garments: 'bg-indigo/10 text-indigo border-indigo/20',
  Accessories: 'bg-kraft/15 text-ink border-kraft/30',
  Packaging: 'bg-mist text-slate border-line',
};

/**
 * WorkCard — 4:3 ratio image card with category badge + title.
 * Clicking opens the lightbox.
 */
export default function WorkCard({ item, onClick }: WorkCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="group text-left w-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo rounded-lg cursor-pointer"
      aria-label={`View ${item.title} details`}
    >
      <article className="border border-line rounded-lg overflow-hidden bg-white hover:border-indigo transition-all duration-200 hover:shadow-sm">
        {/* 4:3 image container */}
        <div className="relative w-full aspect-[4/3] overflow-hidden bg-mist">
          <SafeImage
            src={item.image}
            alt={item.caption || item.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className="object-cover group-hover:scale-[1.03] transition-transform duration-300"
            loading="lazy"
            category={item.category}
          />
          {/* Category badge */}
          <span
            className={`absolute top-3 left-3 px-2.5 py-1 rounded text-caption font-semibold border ${
              categoryStyle[item.category] ?? 'bg-mist text-slate border-line'
            }`}
          >
            {item.category}
          </span>
        </div>

        {/* Card footer */}
        <div className="p-4">
          <h3 className="text-base font-semibold text-ink group-hover:text-indigo transition-colors">
            {item.title}
          </h3>
          <p className="mt-1 text-caption text-slate line-clamp-2 leading-relaxed">
            {item.caption}
          </p>
        </div>
      </article>
    </button>
  );
}
