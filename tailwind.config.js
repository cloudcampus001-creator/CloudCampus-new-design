/** @type {import('tailwindcss').Config} */

// Every colour is an HSL-channel CSS variable defined in src/index.css.
// `<alpha-value>` keeps opacity modifiers (bg-primary/10) working.
const c = (name) => `hsl(var(--${name}) / <alpha-value>)`;

// Status colours share one shape: DEFAULT (text/dot), foreground (on solid fill),
// soft (chip background), border (chip hairline).
const status = (name) => ({
	DEFAULT: c(name),
	foreground: c(`${name}-foreground`),
	soft: c(`${name}-soft`),
	border: c(`${name}-border`),
});

module.exports = {
	darkMode: ['class'],
	content: [
		'./index.html',
		'./pages/**/*.{js,jsx}',
		'./components/**/*.{js,jsx}',
		'./app/**/*.{js,jsx}',
		'./src/**/*.{js,jsx}',
	],
	theme: {
		container: {
			center: true,
			padding: '1.5rem',
			screens: {
				sm: '640px',
				md: '768px',
				lg: '1024px',
				xl: '1152px',
				'2xl': '1152px',
			},
		},
		extend: {
			fontFamily: {
				sans: ['var(--font-sans)'],
				display: ['var(--font-display)'],
			},
			fontSize: {
				// Between text-[10px] and text-xs; used for chips and captions.
				'2xs': ['0.6875rem', { lineHeight: '1rem' }],
			},
			colors: {
				border: c('border'),
				'border-strong': c('border-strong'),
				input: c('input'),
				ring: c('ring'),
				background: c('background'),
				foreground: c('foreground'),
				surface: c('surface'),
				primary: {
					DEFAULT: c('primary'),
					foreground: c('primary-foreground'),
				},
				secondary: {
					DEFAULT: c('secondary'),
					foreground: c('secondary-foreground'),
				},
				accent: {
					DEFAULT: c('accent'),
					foreground: c('accent-foreground'),
				},
				muted: {
					DEFAULT: c('muted'),
					foreground: c('muted-foreground'),
				},
				popover: {
					DEFAULT: c('popover'),
					foreground: c('popover-foreground'),
				},
				card: {
					DEFAULT: c('card'),
					foreground: c('card-foreground'),
				},
				gold: {
					DEFAULT: c('gold'),
					foreground: c('gold-foreground'),
					ink: c('gold-ink'),
				},
				destructive: status('destructive'),
				success: status('success'),
				warning: status('warning'),
				info: status('info'),
				sidebar: {
					DEFAULT: c('sidebar'),
					foreground: c('sidebar-foreground'),
					muted: c('sidebar-muted'),
					primary: c('sidebar-primary'),
					'primary-foreground': c('sidebar-primary-foreground'),
					accent: c('sidebar-accent'),
					'accent-foreground': c('sidebar-accent-foreground'),
					border: c('sidebar-border'),
					ring: c('sidebar-ring'),
				},
				chart: {
					1: c('chart-1'),
					2: c('chart-2'),
					3: c('chart-3'),
					4: c('chart-4'),
					5: c('chart-5'),
				},
			},
			// Scale: sm 4 · md 6 · lg 8 · xl 10 · 2xl 12 · 3xl 16.
			// Legacy pages use rounded-2xl/3xl for cards and sheets; remapping the
			// scale here calms every unmigrated screen immediately.
			borderRadius: {
				sm: 'calc(var(--radius) - 4px)',
				md: 'calc(var(--radius) - 2px)',
				lg: 'var(--radius)',
				xl: 'calc(var(--radius) + 2px)',
				'2xl': 'calc(var(--radius) + 4px)',
				'3xl': 'calc(var(--radius) + 8px)',
			},
			boxShadow: {
				paper: 'var(--shadow-paper)',
				raised: 'var(--shadow-raised)',
				overlay: 'var(--shadow-overlay)',
			},
			transitionTimingFunction: {
				// Gentle deceleration — "turning a page", no bounce.
				page: 'cubic-bezier(0.25, 1, 0.5, 1)',
			},
			keyframes: {
				'accordion-down': {
					from: { height: 0 },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: 0 },
				},
				'fade-in': {
					from: { opacity: 0 },
					to: { opacity: 1 },
				},
				'rise-in': {
					from: { opacity: 0, transform: 'translateY(6px)' },
					to: { opacity: 1, transform: 'translateY(0)' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 180ms cubic-bezier(0.25, 1, 0.5, 1) both',
				'rise-in': 'rise-in 220ms cubic-bezier(0.25, 1, 0.5, 1) both',
			},
		},
	},
	plugins: [require('tailwindcss-animate')],
};
