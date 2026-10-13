import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface ServiceCardProps {
  title: string;
  description: string;
  items: string[];
  href: string;
  orderInfo?: string;
}

/**
 * ServiceCard — flat card with 1px Line border.
 * Title in Indigo, description in body, kraft bullet items, clear CTA.
 */
export default function ServiceCard({ title, description, items, href, orderInfo }: ServiceCardProps) {
  return (
    <article className="flex flex-col h-full bg-white border border-line rounded-xl p-6 sm:p-7 hover:border-indigo transition-all duration-200 hover:shadow-xs">
      {/* Title */}
      <h3 className="text-xl sm:text-h3 font-semibold text-indigo mb-3">{title}</h3>

      {/* Description */}
      <p className="text-base text-slate leading-relaxed mb-5">{description}</p>

      {/* Item list */}
      <ul className="space-y-2 mb-5 flex-1" aria-label={`${title} specifications`}>
        {items.map((item) => (
          <li key={item} className="flex items-start gap-2.5 text-sm text-ink">
            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-kraft flex-shrink-0" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      {/* Order info */}
      {orderInfo && (
        <div className="border-t border-line pt-4 mb-5">
          <p className="text-caption text-slate leading-relaxed">
            {orderInfo}
          </p>
        </div>
      )}

      {/* CTA link */}
      <Link
        href={href}
        className="link-indigo text-sm font-semibold inline-flex items-center gap-1.5 mt-auto group"
      >
        <span>Explore service specifications</span>
        <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" strokeWidth={2} />
      </Link>
    </article>
  );
}
