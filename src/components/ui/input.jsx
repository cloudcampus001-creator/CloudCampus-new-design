import { cn } from '@/lib/utils';
import React from 'react';

const Input = React.forwardRef(({ className, type, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'flex h-10 w-full rounded-md border border-input bg-card px-3 py-2 text-sm text-foreground transition-[border-color,box-shadow] duration-150 file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground/70 hover:border-border-strong/60 focus-visible:border-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/20 disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      ref={ref}
      {...props}
    />
  );
});
Input.displayName = 'Input';

export { Input };
