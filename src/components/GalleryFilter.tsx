'use client';

type Category = 'All' | 'Garments' | 'Accessories' | 'Packaging';

interface GalleryFilterProps {
  categories: Category[];
  selected: Category;
  onSelect: (cat: Category) => void;
}

/**
 * GalleryFilter — pill-style filter tabs for the work gallery.
 * Selected: Indigo bg, white text.
 * Unselected: white bg, Line border, Slate text.
 */
export default function GalleryFilter({ categories, selected, onSelect }: GalleryFilterProps) {
  return (
    <div
      role="group"
      aria-label="Filter work by category"
      className="flex flex-wrap gap-2"
    >
      {categories.map((cat) => (
        <button
          key={cat}
          type="button"
          onClick={() => onSelect(cat)}
          aria-pressed={selected === cat}
          className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo ${
            selected === cat
              ? 'bg-indigo text-white border-indigo'
              : 'bg-white text-slate border-line hover:border-indigo hover:text-indigo'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
