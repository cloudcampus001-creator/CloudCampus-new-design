import { cva } from 'class-variance-authority';
import { cn } from '@/lib/utils';
import React from 'react';

// Flat chips: tinted background + 1px border + dark text. No saturated fills.
const badgeVariants = cva(
  'inline-flex items-center gap-1 rounded-md border px-2 py-0.5 text-2xs font-semibold leading-4 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  {
    variants: {
      variant: {
        default: 'border-transparent bg-primary text-primary-foreground',
        secondary: 'border-border bg-surface text-muted-foreground',
        outline: 'border-border text-foreground',
        destructive: 'border-destructive-border bg-destructive-soft text-destructive',
        success: 'border-success-border bg-success-soft text-success',
        warning: 'border-warning-border bg-warning-soft text-warning',
        info: 'border-info-border bg-info-soft text-info',
        gold: 'border-gold/40 bg-gold/10 text-gold-ink',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
