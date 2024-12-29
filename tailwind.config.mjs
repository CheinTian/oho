/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: '480px',
			md: '768px',
			lg: '976px',
			xl: '1440px',
		},
		colors: {
			primary: {
				DEFAULT: '#3B82F6',
				light: '#60A5FA',
				dark: '#2563EB'
			},
			secondary: {
				DEFAULT: '#1E293B',
				light: '#334155',
				dark: '#0F172A'
			},
			accent: {
				DEFAULT: '#F59E0B',
				light: '#FBBF24',
				dark: '#D97706'
			},
			neutral: {
				DEFAULT: '#f8fafc',
				light: '#ffffff',
				dark: '#f1f5f9'
			},
			text: {
				primary: '#1E293B',
				secondary: '#475569',
				light: '#ffffff'
			}
		},
		fontFamily: {
			sans: ['Atkinson', 'sans-serif'],
			serif: ['Merriweather', 'serif'],
		},
		extend: {
			spacing: {
				'128': '32rem',
				'144': '36rem',
			},
			borderRadius: {
				'4xl': '2rem',
			},
			boxShadow: {
				'soft': '0 4px 6px rgba(0, 0, 0, 0.04)',
				'medium': '0 6px 12px rgba(0, 0, 0, 0.06)',
				'strong': '0 8px 16px rgba(0, 0, 0, 0.08)',
			}
		}
	},
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#449eff",
					"secondary": "#5b4137",
					"accent": "#ff9e44",
					"neutral": "#fafafa",
					"base-100": "#ffffff",
					"info": "#3b82f6",
					"success": "#10b981",
					"warning": "#f59e0b",
					"error": "#ef4444",
				},
				dark: {
					"primary": "#449eff",
					"secondary": "#5b4137",
					"accent": "#ff9e44",
					"neutral": "#151515",
					"base-100": "#0a0a0a",
					"info": "#3b82f6",
					"success": "#10b981",
					"warning": "#f59e0b",
					"error": "#ef4444",
				}
			}
		],
		base: true,
	},
	plugins: [require("daisyui")],
}
