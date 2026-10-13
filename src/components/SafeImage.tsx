'use client';

import { useState } from 'react';
import Image, { ImageProps } from 'next/image';

interface SafeImageProps extends Omit<ImageProps, 'onError'> {
  fallbackSrc?: string;
  category?: string;
}

/**
 * SafeImage provides production-grade image resilience:
 * - Graceful fallback on network/path errors
 * - Prevents layout shifts
 * - Maintains brand aesthetic if an image fails to load
 */
export default function SafeImage({
  src,
  alt,
  fallbackSrc = '/images/placeholder-4x3.svg',
  className = '',
  category,
  ...props
}: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="relative w-full h-full overflow-hidden bg-mist/60">
      <Image
        {...props}
        src={hasError ? fallbackSrc : imgSrc}
        alt={alt || 'Artistry production sample'}
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'} ${className}`}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          if (!hasError) {
            setHasError(true);
            setImgSrc(fallbackSrc);
            setIsLoading(false);
          }
        }}
      />
      {isLoading && (
        <div
          className="absolute inset-0 flex items-center justify-center bg-mist animate-pulse"
          aria-hidden="true"
        >
          <div className="w-8 h-8 rounded-full border-2 border-line border-t-indigo animate-spin" />
        </div>
      )}
    </div>
  );
}
