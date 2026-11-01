import React from 'react';
import { cn } from '@/lib/utils';

// A thin navy ring on a hairline track. Stroke scales with size.
export const LoadingSpinner = ({ className, size = 32, text = "Loading..." }) => {
  return (
    <div
      className="flex flex-col items-center justify-center min-h-[50vh] w-full gap-4 p-4"
      role="status"
      aria-live="polite"
    >
      <div
        className={cn(
          "animate-spin rounded-full border-border border-t-primary",
          className
        )}
        style={{ width: size, height: size, borderWidth: Math.max(2, Math.round(size / 16)) }}
      />
      {text && <p className="text-muted-foreground text-sm font-medium">{text}</p>}
    </div>
  );
};

export const FullPageLoader = ({ text }) => (
  <div className="fixed inset-0 bg-background/95 z-50 flex items-center justify-center">
    <LoadingSpinner size={40} text={text} />
  </div>
);
