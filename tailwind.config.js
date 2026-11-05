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

		// ── Flat system: no shadows anywhere ────────────────────────────────────
		// Overriding (not extending) the scale means shadow-lg, shadow-xl,
		// shadow-2xl and coloured variants like shadow-indigo-500/30 all resolve
		// to nothing. Hierarchy comes from hairlines, tone and rules.
		// (Focus rings use `ring-*`, which is separate and unaffected.)
		boxShadow: {
			DEFAULT: 'none',
			sm: 'none',
			md: 'none',
			lg: 'none',
			xl: 'none',
			'2xl': 'none',
			inner: 'none',
			none: 'none',
			paper: 'none',
			raised: 'none',
			overlay: 'none',
		},
		dropShadow: {
			DEFAULT: 'none',
			sm: 'none',
			md: 'none',
			lg: 'none',
			xl: 'none',
			'2xl': 'none',
			none: 'none',
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

			// ── Square system: every radius key resolves to 0 ───────────────────
			// This includes `full`, so legacy pills and circles (rounded-full) square
			// up on every unmigrated page. Components keep their `rounded-*` classes
			// as semantic hooks; the token decides the value. For the rare true
			// circle (the loading spinner) use the arbitrary value `rounded-[50%]`.
			borderRadius: {
				none: '0px',
				sm: '0px',
				DEFAULT: '0px',
				md: '0px',
				lg: '0px',
				xl: '0px',
				'2xl': '0px',
				'3xl': '0px',
				full: '0px',
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
