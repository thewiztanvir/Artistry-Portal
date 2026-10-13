import { ArrowRight } from 'lucide-react';
import type { ProcessStep } from '@/lib/types';

interface ProcessStripProps {
  steps: ProcessStep[];
}

/**
 * ProcessStrip — 5-step horizontal process on desktop, vertical on mobile.
 * Step number in Kraft large, title bold, description in Slate.
 * Lucide arrow connector between steps on desktop.
 */
export default function ProcessStrip({ steps }: ProcessStripProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-start gap-2 md:gap-0">
      {steps.map((step, index) => (
        <div key={step.number} className="flex md:flex-1 md:flex-col relative">
          {/* Step content */}
          <div className="flex md:flex-col gap-4 md:gap-3 items-start flex-1 pr-2">
            {/* Mobile: vertical line connector (except last) */}
            <div className="md:hidden flex flex-col items-center">
              <span className="text-2xl font-bold text-kraft leading-none">{step.number}</span>
              {index < steps.length - 1 && (
                <div className="w-px h-full min-h-[3.5rem] bg-line mt-2" aria-hidden="true" />
              )}
            </div>

            {/* Desktop: number above */}
            <span className="hidden md:block text-3xl font-bold text-kraft mb-1">{step.number}</span>

            <div className="pb-6 md:pb-0">
              <h3 className="text-base font-semibold text-ink mb-1.5">{step.title}</h3>
              <p className="text-sm text-slate leading-relaxed">{step.description}</p>
            </div>
          </div>

          {/* Desktop: arrow connector (except last) */}
          {index < steps.length - 1 && (
            <div
              className="hidden md:flex absolute top-2 right-2 text-line"
              aria-hidden="true"
            >
              <ArrowRight className="w-5 h-5 text-line" strokeWidth={1.5} />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
