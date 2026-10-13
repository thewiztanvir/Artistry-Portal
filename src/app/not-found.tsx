import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-white min-h-[60vh] flex items-center justify-center py-20 px-4 sm:px-6">
      <div className="max-w-md w-full text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-kraft mb-2">
          Error 404
        </p>
        <h1 className="text-4xl sm:text-5xl font-semibold text-indigo tracking-tight mb-4">
          Page not found
        </h1>
        <p className="text-base text-slate leading-relaxed mb-8">
          The page you are looking for does not exist or may have been moved.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link href="/" className="btn-primary inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" />
            <span>Return home</span>
          </Link>
          <Link href="/our-work" className="link-indigo text-sm font-semibold inline-flex items-center gap-1.5 py-3">
            <span>Browse our work</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
