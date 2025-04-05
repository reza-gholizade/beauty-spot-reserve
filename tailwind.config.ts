import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#D6BCFA',  // Light Purple from provided color palette
					foreground: '#6E59A5',  // Tertiary Purple for contrasting text
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				beauty: {
					"50": "#fdf5f7",
					"100": "#fcebef",
					"200": "#f8d0da",
					"300": "#f4b5c5",
					"400": "#ee809c",
					"500": "#e84a72",
					"600": "#d14365",
					"700": "#ae3654",
					"800": "#8c2b43",
					"900": "#722537",
					"950": "#3e111c",
				},
				sage: {
					"50": "#f5f8f4",
					"100": "#e9f0e6",
					"200": "#d2e0ce",
					"300": "#aec8a8",
					"400": "#82a77a",
					"500": "#638a5a",
					"600": "#4b7045",
					"700": "#3b5937",
					"800": "#32492f",
					"900": "#2a3c28",
					"950": "#141f13",
				},
				cream: {
					"50": "#fdf8ed",
					"100": "#f8edce",
					"200": "#f2de9e",
					"300": "#eac666",
					"400": "#e5b143",
					"500": "#de982c",
					"600": "#ca7922",
					"700": "#a75b1f",
					"800": "#874921",
					"900": "#703c1f",
					"950": "#3f1e10",
				},
				neutral: {
					"50": "#f8f7f7",
					"100": "#f1efef",
					"200": "#e4e1e0",
					"300": "#cfc9c8",
					"400": "#b4acaa",
					"500": "#9e948f",
					"600": "#8e8380",
					"700": "#756a67",
					"800": "#615754",
					"900": "#514a48",
					"950": "#2a2625",
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' }
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' }
				},
				'fade-in': {
					'0%': { opacity: '0' },
					'100%': { opacity: '1' }
				},
				'slide-in': {
					'0%': { transform: 'translateY(10px)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
				'slide-up': {
					'0%': { transform: 'translateY(100%)', opacity: '0' },
					'100%': { transform: 'translateY(0)', opacity: '1' }
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out',
				'slide-in': 'slide-in 0.5s ease-out',
				'slide-up': 'slide-up 0.5s ease-out',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
