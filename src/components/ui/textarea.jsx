import { cn } from '@/lib/utils';
import React from 'react';

const Textarea = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        'flex min-h-[88px] w-full rounded-md border border-input bg-card px-3 py-2.5 text-sm leading-relaxed text-foreground transition-[border-color,box-shadow] duration-150 placeholder:text-muted-foreground/70 hover:border-border-strong/60 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Textarea.displayName = 'Textarea';

export { Textarea };
