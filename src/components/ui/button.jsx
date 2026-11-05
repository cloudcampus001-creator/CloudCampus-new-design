import { cn } from '@/lib/utils';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
import React from 'react';

const buttonVariants = cva(
	'inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-[background-color,border-color,color,transform] duration-150 ease-page focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				// Solid navy. Hover lifts to the lighter navy (light) / softens (dark).
				default:
					'bg-primary text-primary-foreground hover:bg-secondary dark:hover:bg-primary/90',
				destructive:
					'bg-destructive text-destructive-foreground hover:bg-destructive/90',
				// White sheet with a hairline.
				outline:
					'border border-input bg-card text-foreground hover:border-border-strong hover:bg-surface',
				// Quiet, tinted.
				secondary:
					'border border-border bg-surface text-foreground hover:bg-muted',
				ghost: 'text-foreground hover:bg-muted',
				link: 'text-primary underline-offset-4 hover:underline',
				// Seal — use rarely (one per screen at most).
				gold: 'bg-gold text-gold-foreground hover:bg-gold/90',
			},
			size: {
				default: 'h-10 px-4 py-2',
				xs: 'h-8 px-2.5 text-xs',
				sm: 'h-9 px-3',
				lg: 'h-11 px-8',
				icon: 'h-10 w-10',
				'icon-sm': 'h-8 w-8',
			},
		},
		defaultVariants: {
			variant: 'default',
			size: 'default',
		},
	},
);

const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
	const Comp = asChild ? Slot : 'button';
	return (
		<Comp
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		/>
	);
});
Button.displayName = 'Button';

export { Button, buttonVariants };
