'use client';

import { useState } from 'react';
import { z } from 'zod';
import { CheckCircle2, AlertCircle, Loader2, Send } from 'lucide-react';

/* ── Zod validation schema ──────────────────────────────────────── */
const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  company: z.string().optional(),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  productInterest: z.string().optional(),
  message: z.string().min(10, 'Message must be at least 10 characters'),
  _gotcha: z.string().max(0, 'Spam detected'), // honeypot
});

type FormData = z.infer<typeof contactSchema>;
type FormErrors = Partial<Record<keyof FormData, string>>;

const FORMSPREE_URL = 'https://formspree.io/f/YOUR_FORM_ID';

export default function ContactForm() {
  const [formData, setFormData] = useState<Omit<FormData, '_gotcha'>>({
    name: '',
    company: '',
    email: '',
    phone: '',
    productInterest: '',
    message: '',
  });
  const [honeypot, setHoneypot] = useState('');
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const result = contactSchema.safeParse({ ...formData, _gotcha: honeypot });
    if (!result.success) {
      const fieldErrors: FormErrors = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof FormErrors;
        fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }

    setStatus('loading');

    try {
      const res = await fetch(FORMSPREE_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({ ...formData, _gotcha: honeypot }),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', company: '', email: '', phone: '', productInterest: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  /* ── Success state ─────────────────────────────────────────────── */
  if (status === 'success') {
    return (
      <div className="rounded-xl border border-line bg-mist p-8 sm:p-10 text-center animate-fade-in" role="status">
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-indigo/10 text-indigo">
          <CheckCircle2 className="h-8 w-8 text-indigo" strokeWidth={2} />
        </div>
        <h3 className="text-xl sm:text-h3 font-semibold text-ink mb-2">Enquiry Received</h3>
        <p className="text-slate text-base max-w-md mx-auto leading-relaxed">
          Thank you for reaching out. A dedicated merchandiser will review your specifications and respond within one business day.
        </p>
        <button
          type="button"
          onClick={() => setStatus('idle')}
          className="mt-6 link-indigo text-sm font-semibold cursor-pointer"
        >
          Send another enquiry &rarr;
        </button>
      </div>
    );
  }

  /* ── Form ──────────────────────────────────────────────────────── */
  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Honeypot field for bot protection */}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="_gotcha">Leave this empty</label>
        <input
          id="_gotcha"
          name="_gotcha"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          value={honeypot}
          onChange={(e) => setHoneypot(e.target.value)}
        />
      </div>

      {/* Name + Company row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Your Name" required error={errors.name}>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="e.g. John Doe"
            value={formData.name}
            onChange={handleChange}
            aria-describedby={errors.name ? 'name-error' : undefined}
            className={inputCls(!!errors.name)}
          />
        </Field>

        <Field id="company" label="Company / Brand" error={errors.company}>
          <input
            id="company"
            name="company"
            type="text"
            autoComplete="organization"
            placeholder="e.g. Nordic Apparel Ltd."
            value={formData.company}
            onChange={handleChange}
            className={inputCls(false)}
          />
        </Field>
      </div>

      {/* Email + Phone row */}
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="email" label="Business Email" required error={errors.email}>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            placeholder="buyer@brand.com"
            value={formData.email}
            onChange={handleChange}
            aria-describedby={errors.email ? 'email-error' : undefined}
            className={inputCls(!!errors.email)}
          />
        </Field>

        <Field id="phone" label="Phone / WhatsApp" error={errors.phone}>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            placeholder="+880 1700 000000"
            value={formData.phone}
            onChange={handleChange}
            className={inputCls(false)}
          />
        </Field>
      </div>

      {/* Product interest */}
      <Field id="productInterest" label="Primary Requirement" error={errors.productInterest}>
        <select
          id="productInterest"
          name="productInterest"
          value={formData.productInterest}
          onChange={handleChange}
          className={inputCls(false)}
        >
          <option value="">Select product category (optional)</option>
          <option value="Garments">Garments Manufacturing (Knit / Woven / Outerwear)</option>
          <option value="Accessories">Accessories (Woven Labels / Hang Tags / Trims)</option>
          <option value="Packaging">Packaging (Poly Bags / Mailer Boxes / Cartons)</option>
          <option value="General">Complete Turnkey Package (Garments + Trims + Packaging)</option>
        </select>
      </Field>

      {/* Message */}
      <Field id="message" label="Order Specifications & Message" required error={errors.message}>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          value={formData.message}
          onChange={handleChange}
          aria-describedby={errors.message ? 'message-error' : undefined}
          className={`${inputCls(!!errors.message)} resize-none`}
          placeholder="Please describe target quantities, garment type, fabric or trim specifications, and target delivery timeframe…"
        />
      </Field>

      {/* Error banner */}
      {status === 'error' && (
        <div role="alert" className="flex items-center gap-2.5 rounded-lg border border-threadRed/30 bg-threadRed/5 px-4 py-3 text-sm text-threadRed">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>Something went wrong submitting the form. Please email us directly at <strong>hello@artistry-bd.com</strong>.</span>
        </div>
      )}

      {/* Submit button */}
      <button
        type="submit"
        disabled={status === 'loading'}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer gap-2 py-3.5 shadow-xs"
      >
        {status === 'loading' ? (
          <span className="flex items-center gap-2">
            <Loader2 className="h-4 w-4 animate-spin" />
            <span>Transmitting Enquiry…</span>
          </span>
        ) : (
          <span className="flex items-center gap-2">
            <span>Send Enquiry to Merchandising</span>
            <Send className="w-4 h-4" />
          </span>
        )}
      </button>
    </form>
  );
}

/* ── Helper: input CSS classes ─────────────────────────────────── */
function inputCls(hasError: boolean) {
  return `w-full rounded-btn border px-3.5 py-2.5 text-sm text-ink bg-white transition-colors
    focus:outline-none focus:ring-2 focus:ring-indigo focus:border-transparent
    ${hasError ? 'border-threadRed bg-threadRed/5' : 'border-line hover:border-slate'}`;
}

/* ── Helper: field wrapper with label + error ──────────────────── */
function Field({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-semibold text-ink mb-1.5">
        {label}
        {required && <span className="text-threadRed ml-1" aria-hidden="true">*</span>}
      </label>
      {children}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1.5 text-caption text-threadRed flex items-center gap-1 font-medium">
          <AlertCircle className="w-3.5 h-3.5" />
          <span>{error}</span>
        </p>
      )}
    </div>
  );
}
